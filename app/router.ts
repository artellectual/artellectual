import { Router } from 'router5/types'

import createRouter from 'router5'
import loggerPlugin from 'router5-plugin-logger'
import listenersPlugin from 'router5-plugin-listeners'
import browserPlugin from 'router5-plugin-browser'

import routes from './routes'

const configureRouter = (options = {
  listener: false, logger: false
}): Router => {
  const router = createRouter(routes, {
    allowNotFound: true,
    autoCleanUp: true
  })
    
  router.usePlugin(browserPlugin())

  if (options.listener)
    router.usePlugin(listenersPlugin())

  if (options.logger)
    router.usePlugin(loggerPlugin)

  return router as Router
}

export default configureRouter