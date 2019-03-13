import * as React from 'react'
import c from 'classnames'
import { render } from 'react-dom'

import * as styles from './index.sass'

class Index extends React.PureComponent {
  render() {
    return (<div className={c('bg-black', styles.white)}>
      artellectual.com
    </div>)
  }
}

document.addEventListener('DOMContentLoaded', () => 
  render(<Index />, document.getElementById('app')
))
