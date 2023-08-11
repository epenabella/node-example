import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.hydrateRoot(
  document.getElementById('app')!,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
console.log('hydrated')