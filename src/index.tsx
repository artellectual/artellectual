import * as React from 'react'
import { render } from 'react-dom'

class Index extends React.PureComponent {
  render() {
    return (<div>
      artellectual.com
    </div>)
  }
}

document.addEventListener('DOMContentLoaded', () => 
  render(<Index />, document.getElementById('app')
))
