import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
// import { createServer as createViteServer} from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// eslint-disable-next-line no-undef
const AppRoutesAndMiddlewareLocation = process.env.NODE_ENV === 'production' ? '/dist/ssr-server/src/server/index.js' : '/src/server'


// eslint-disable-next-line no-undef
const isTest = process.env.VITEST
console.log(`isTest: ${isTest}`);
// let loadedProdCustom = false;

// process.env.MY_CUSTOM_SECRET = 'API_KEY_qwertyuiop'

export async function createServer(
  // eslint-disable-next-line no-undef
  root = process.cwd(),
  // eslint-disable-next-line no-undef
  isProd = process.env.NODE_ENV === 'production',
  hmrPort,
) {
  const resolve = (p) => path.resolve(__dirname, p)

  const indexProd = isProd
    ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
    : ''

  const app = express()
  let mod;

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite
  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
        hmr: {
          port: hmrPort,
        },
      },
      appType: 'custom',
    })
    // use vite's connect instance as middleware
    app.use(vite.middlewares)

    //add custom application server controllers routes and middleware like cors etc. at local path
    app.use(
      (await vite.ssrLoadModule(AppRoutesAndMiddlewareLocation))
        .AppRoutesAndMiddleware);

  } else {
    //add custom application server controllers routes and middleware like cors etc. at production path
    // const { AppRoutesAndMiddleware } = await import(AppRoutesAndMiddlewareLocation);
    mod = await import('./dist/ssr-server/entry-server.js');
    app.use(mod.AppRoutes);
    app.use((await import('compression')).default())
    app.use(
      (await import('serve-static')).default(resolve('dist/client'), {
        index: false,
      }),
    )
  }

  

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl

      // let vite2;

      // if (!vite2) {
      //   vite2 
      // }

      let template, render
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render
      } else {
        template = indexProd
        
        render = mod.render
      }

      const context = {}
      const appHtml = render(url, context)

      if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        return res.redirect(301, context.url)
      }

      const html = template.replace(`<!--app-html-->`, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

  return { app, vite }
}

if (!isTest) {
   // eslint-disable-next-line no-undef
   const port = 5175

  createServer().then(({ app }) =>
    app.listen(port, () => {
       console.log('\nNow listening on port: ' + port + '\n')

      console.log(`Visit: http://localhost:${port}`)
    }),
  )
}


// const __dirname = path.dirname(fileURLToPath(import.meta.url))

// async function createServer() {
//   const app = express()

//   // Create Vite server in middleware mode and configure the app type as
//   // 'custom', disabling Vite's own HTML serving logic so parent server
//   // can take control
//   const vite = await createViteServer({
//     server: { middlewareMode: true },
//     appType: 'custom'
//   })

//   // Use vite's connect instance as middleware. If you use your own
//   // express router (express.Router()), you should use router.use
//   app.use(vite.middlewares)
// //TODO: more production switching and look at template
//   //add routes and middleware
//                                           // eslint-disable-next-line no-undef
  // const AppRoutesAndMiddleWareLocation = process.env.NODE_ENV === 'production' ? '/dist/ssr-server/src/server/index.js' : '/src/server'
  // const { AppRoutesAndMiddleware } = await vite.ssrLoadModule(AppRoutesAndMiddleWareLocation);

  // //add server routes and middleware
  // app.use( AppRoutesAndMiddleware );

//   //if no routes, serve ssr'ed react content
//   app.use('*', async (req, res, next) => {
//      const url = req.originalUrl
   
//      try {
//        // 1. Read index.html
//        let template = fs.readFileSync(
//          path.resolve(__dirname, 'index.html'),
//          'utf-8',
//        )
   
//        // 2. Apply Vite HTML transforms. This injects the Vite HMR client,
//        //    and also applies HTML transforms from Vite plugins, e.g. global
//        //    preambles from @vitejs/plugin-react
//        template = await vite.transformIndexHtml(url, template)
   
//        // 3. Load the server entry. ssrLoadModule automatically transforms
//        //    ESM source code to be usable in Node.js! There is no bundling
//        //    required, and provides efficient invalidation similar to HMR.
//        // eslint-disable-next-line no-undef
//        const EntryServerLocation = process.env.NODE_ENV === 'production' ? '/dist/ssr-server/entry-server' : '/src/entry-server.jsx'
//        const { render } = await vite.ssrLoadModule(EntryServerLocation)
   
//        // 4. render the app HTML. This assumes entry-server.js's exported
//        //     `render` function calls appropriate framework SSR APIs,
//        //    e.g. ReactDOMServer.renderToString()
//        const appHtml = await render(url)
   
//        // 5. Inject the app-rendered HTML into the template.
//        const html = template.replace(`<!--ssr-outlet-->`, appHtml)
   
//        // 6. Send the rendered HTML back.
//        res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
//      } catch (e) {
//        // If an error is caught, let Vite fix the stack trace so it maps back
//        // to your actual source code.
//        vite.ssrFixStacktrace(e)
//        next(e)
//      }
//    })

//   // eslint-disable-next-line no-undef
//   const port = process.env.VITE_APP_PORT

//   app.listen(port)
//   console.log('\nNow listening on port: ' + port + '\n')
//   console.log(`Visit: http://localhost:${port}`)

// }

// createServer()