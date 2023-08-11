import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { AppRoutesAndMiddleware } from './server';
import { App } from './App'

export const render = (url, context) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>,
  )
}

export const AppRoutes = AppRoutesAndMiddleware;