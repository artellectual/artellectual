import * as React from 'react'
import { FunctionComponent, useContext } from 'react'
import c from 'classnames'
import { routeContext } from 'react-router5'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

import * as styles from './application.sass'

import favicon from '~/assets/favicon.png'

import Nav from './nav'
import Footer from './footer'

import Pages from '../pages'

const Application:FunctionComponent<any> = () => {
  const context = useContext(routeContext)
  const { t } = useTranslation('layout')

  const { route } = context

  return (
    <main id='application' className={c(styles.app, 'font-sans')}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{t('application.title')}</title>
        <link rel='canonical' href='https://www.artellectual.com' />
        <link rel='shortcut icon' type='image/png' href={favicon} />
        <meta name='description' content={t('application.description')} />
      </Helmet>
      <Nav />
      <Pages route={route} />
      <Footer />
    </main>
  )
}

export default Application
