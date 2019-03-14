import * as React from 'react'
import { RouteNode } from 'react-router5'
import { lazy, Suspense } from 'react'

import { constants } from 'router5'
import { RouteNodeState } from 'route-node'

interface PagesIndex {
  [key: string]: React.LazyExoticComponent<any>
}

const pages: PagesIndex = {
  'root': lazy(() => import('./root'))
}

const PageComponent = (props: { route: RouteNodeState }) => {
  const { route } = props

  let page = route.name.split('.')[0]

  if (page === constants.UNKNOWN_ROUTE) {
    page = '404'
  }

  const Page = pages[page]
  
  return (
    <Suspense fallback='Loading...'>
      <Page {...props} />
    </Suspense>
  )
}

export default (props: { route: RouteNodeState }) => (
  <RouteNode nodeName="">
    {({route}) => <PageComponent route={route} {...props} />}
  </RouteNode>
)
