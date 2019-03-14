import * as React from 'react'
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

export default Root
