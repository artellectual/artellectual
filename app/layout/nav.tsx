import * as React from 'react'
import { FunctionComponent } from 'react'
import c from 'classnames'

import * as styles from './nav.sass'

const Nav:FunctionComponent = () => {
  return (
    <nav className={c('flex items-center justify-between flex-wrap p-4', styles.nav)}>
      <div className='container mx-auto flex'>
        <div className='flex items-center flex-no-shrink text-white mr-6'>
          <span className='text-xl'>Artellectual</span>
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:flex-grow'>
            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav