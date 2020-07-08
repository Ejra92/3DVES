import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import AgregarCliente from './components/AgregarCliente'
import ListarClientes from './components/ListarClientes'

const App = () =>
  <div className="container">
    <header>
      <h1 className="text-center">Agenda de clientes 3DVES con Redux</h1>
    </header>

    <div className="row mt-3">
      <div className="col-md-6">
        <AgregarCliente />
      </div>

      <div className="col-md-6">
        <ListarClientes />
      </div>
    </div>
  </div>


export default () =>
  <Provider store={store}>
    <App />
  </Provider>