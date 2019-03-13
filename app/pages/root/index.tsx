import * as React from 'react'
import c from 'classnames'

import * as styles from './index.sass'

class Root extends React.PureComponent {
  render() {
    return (
      <div className={c('bg-black', styles.white)}>
        artellectual.com
      </div>
    )
  }
}

export default Root
