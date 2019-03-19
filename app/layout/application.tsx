import * as React from 'react'
import { FunctionComponent, useContext } from 'react'
import { routeContext } from 'react-router5'

import * as styles from './application.sass'

import Nav from './nav'
import Footer from './footer'

import Pages from '../pages'

const Application:FunctionComponent<any> = () => {
  const context = useContext(routeContext)
  const { route } = context

  return (
    <main id='application' className={styles.app}>
      <Nav />
      <Pages route={route} />
      <Footer />
    </main>
  )
}

export default Application
