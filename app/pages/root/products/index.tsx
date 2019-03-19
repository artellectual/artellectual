import * as React from 'react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import { Product, ProductProps } from './product'

const Products: FunctionComponent = () => {
  const { t } = useTranslation('pages')

  const products: Array<ProductProps> = t('root.products', {
    returnObjects: true
  })

  return (
    <section className='container mx-auto mt-20 pb-20'>
      <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-stretch'>
        {products.map((product, index) => (
          <Product key={`product_${index}`} {...product} />
        ))}
      </div>
    </section>
  )
}

export default Products
