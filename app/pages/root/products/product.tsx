import * as React from 'react'
import { FunctionComponent } from 'react'

import pictures from './cover_pictures'

export interface ProductProps {
  name: string
  slug: string
  link: string
  description: string
  cover_picture: string
}

const Product: FunctionComponent<ProductProps> = props => {
  const { name, description, link, cover_picture } = props

  return (
    <div className='flex sm:w-full md:w-full lg:w-1/3 xl:w-1/3'>
      <div className='overflow-hidden rounded m-3 shadow-lg bg-white item-stretch w-full'>
        <img className='w-full' src={pictures[cover_picture]} alt={name} />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 text-black'>
            <a
              href={link}
              className='text-purple-dark no-underline hover:underline'
            >
              {name}
            </a>
          </div>
          <p className='text-grey-darker text-base leading-normal'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export { Product }
