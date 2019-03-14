import * as React from 'react'
import { lazy, Suspense } from 'react'

import { constants } from 'router5'

interface PageIndex {
  [key: string]: React.LazyExoticComponent<any>
}

const pages: PageIndex = {
  'root': lazy(() => import('./root'))
}

export default (props: { route: any }) => {
  const { route } = props

  let page = route.name.split('.')[0]

  if (page === constants.UNKNOWN_ROUTE) {
    page = '404'
  }

  const Page = pages[page]
  
  return (
    <Suspense fallback='Loading...'>
      <Page />
    </Suspense>
  )
}
