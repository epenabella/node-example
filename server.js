import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// eslint-disable-next-line no-undef
const AppRoutesAndMiddlewareLocation = process.env.NODE_ENV === 'production' ? '/dist/ssr-server/src/server/index.js' : '/src/server'


// eslint-disable-next-line no-undef
const isTest = process.env.VITEST
console.log(`isTest: ${isTest}`);

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
   const port = 5175

  createServer().then(({ app }) =>
    app.listen(port, () => {
       console.log('\nNow listening on port: ' + port + '\n')

      console.log(`Visit: http://localhost:${port}`)
    }),
  )
}