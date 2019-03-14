import * as React from 'react'
import { render } from 'react-dom'
import { RouterProvider } from 'react-router5'

import createRouter from './router'

import { Application } from './layout'
import { RouteProviderProps } from 'react-router5/types/RouterProvider';

const router = createRouter({
  listener: true,
  logger: true
})

document.addEventListener('DOMContentLoaded', () => 
  router.start(() => render((
    <RouterProvider router={router}>
      <Application />
    </RouterProvider>
    ), document.getElementById('app')
  )
))
