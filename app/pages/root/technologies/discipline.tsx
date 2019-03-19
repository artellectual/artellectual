import * as React from 'react'
import { FunctionComponent } from 'react'
import c from 'classnames'

import { Technology, TechnologyProps } from './technology'

import * as styles from './discipline.sass'

export interface DisciplineProps {
  active: boolean
  heading: string
  icon: string
  key: string
  description: string
  technologies: Array<TechnologyProps>
}

const Discipline: FunctionComponent<DisciplineProps> = props => {
  const { active, heading, technologies, description } = props

  if (!active) return null

  return (
    <div
      className={c(
        'p-5 ml-5 shadow-lg rounded animated fadeIn',
        styles.transparent
      )}
    >
      <h5 className='text-lg text-purple-dark'>{heading}</h5>
      <p className='mt-5 mb-5 text-black leading-normal'>{description}</p>
      {technologies.map(technology => (
        <Technology {...technology} />
      ))}
    </div>
  )
}

export { Discipline }
