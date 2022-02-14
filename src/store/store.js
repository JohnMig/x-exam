import { createStore } from 'redux'
import { reducers } from './reducers'

const devtools =
  process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  : undefined

export const store = createStore(
  reducers,
  devtools
)
