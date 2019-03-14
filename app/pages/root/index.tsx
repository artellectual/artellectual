import * as React from 'react'
import { RouteNode } from 'react-router5'
import c from 'classnames'

import * as styles from './index.sass'

import { RouteNodeState } from 'route-node'

interface RootProps {
  route: RouteNodeState
}

class Root extends React.PureComponent<RootProps> {
  render() {
    return (
      <div className={c('bg-black', styles.white)}>
        artellectual.com
      </div>
    )
  }
}

export default (props: { route: RouteNodeState }) => (
  <RouteNode nodeName="">
    {({route}) => <Root route={route} {...props} />}
  </RouteNode>
)
