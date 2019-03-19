import * as React from 'react'
import { FunctionComponent, useContext } from 'react'
import { routeContext } from 'react-router5'

import Nav from './nav'

import Pages from '../pages'

const Application:FunctionComponent<any> = () => {
  const context = useContext(routeContext)
  const { route } = context

  return (
    <main id='application'>
      <Nav />
      <Pages route={route} />
    </main>
  )
}

export default Application
