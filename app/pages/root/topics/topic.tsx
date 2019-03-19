import * as React from 'react'
import c from 'classnames'
import { FunctionComponent } from 'react'

import * as styles from './topic.sass'

export interface TopicProps {
  id: string
  icon: string
  heading: string
  description: string
}

const Topic: FunctionComponent<TopicProps> = props => {
  const { icon, heading, description } = props

  return (
    <div className={c('w-1/2 text-purple-darker mb-20', styles.transparent)}>
      <div className='m-5'>
        <i className={icon} />
        <h4 className='text-xl mt-3 mb-3 font-normal'>{heading}</h4>
        <p className='text-purple-light text-lg font-normal leading-normal antialiased'>
          {description}
        </p>
      </div>
    </div>
  )
}

export { Topic }
