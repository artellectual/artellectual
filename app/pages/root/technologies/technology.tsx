import * as React from 'react'
import { FunctionComponent } from 'react'

export interface TechnologyProps {
  name: string
  description: string
}

const Technology: FunctionComponent<TechnologyProps> = props => {
  const { name, description } = props

  return (
    <div className='mb-5 bg-black p-5 text-white rounded'>
      <h6 className='text-lg mb-5'>{name}</h6>
      <p className='leading-normal'>{description}</p>
    </div>
  )
}

export { Technology }
