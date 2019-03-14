import * as React from 'react'
import { routeContext } from 'react-router5'

import Pages from '../pages'


class Application extends React.PureComponent {
  static contextType = routeContext

  render() {
    const { route } = this.context

    return (
      <Pages route={route} />
    )
  }
}

export default Application
