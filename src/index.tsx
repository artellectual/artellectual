import * as React from 'react'
import { render } from 'react-dom'

import * as styles from './index.sass'

class Index extends React.PureComponent {
  render() {
    return (<div className={styles.red}>
      artellectual.com
    </div>)
  }
}

document.addEventListener('DOMContentLoaded', () => 
  render(<Index />, document.getElementById('app')
))
