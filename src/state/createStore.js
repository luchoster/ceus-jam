import { createStore as reduxCreateStore } from 'redux'

import Reducers from './reducers/'

const createStore = () => reduxCreateStore(Reducers)
export default createStore
