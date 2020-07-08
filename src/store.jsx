import { createStore } from "redux"
import reducer from "./redux/agendaDuck"

import { obtenerStateStorage, guardarStateStorage } from "./utils/localStorage"

const storageState = obtenerStateStorage()

const store = createStore(
  reducer,
  storageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => guardarStateStorage({ clientes: store.getState().clientes }))

export default store
