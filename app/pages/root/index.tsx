import * as React from 'react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import c from 'classnames'

import logo from './logo.svg'

import * as styles from './index.sass'

import { RouteNodeState } from 'route-node'

interface RootProps {
  route: RouteNodeState
}

const Root:FunctionComponent<RootProps> = () => {
  const { t } = useTranslation('pages')

  return (
    <div className='bg-black'>
      <section className='container mx-auto'>
        <img src={logo} alt={t('root.slogan')} width='384' />
        <h1>
          <span>{t('root.slogan')}</span>
        </h1>
      </section>
    </div>
  )
}

export default Root
