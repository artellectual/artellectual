import * as React from 'react'
import { render } from 'react-dom'

import { Root } from './pages'

document.addEventListener('DOMContentLoaded', () => 
  render(<Root />, document.getElementById('app')
))
