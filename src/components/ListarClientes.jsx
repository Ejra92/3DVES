import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { borrarClienteAction, buscarClienteAction } from '../redux/agendaDuck.jsx'

const Cliente = ({ id, nombre, apellido, telefono }) => {
  const dispatch = useDispatch()

  const borrarCliente = id => dispatch(borrarClienteAction(id))

  const buscarCliente = id => dispatch(buscarClienteAction(id))


  return (
    <div className="media mt-3">
      <div className="media-body">
        <p className="card-text">
          <span>Nombre:</span> {nombre}
        </p>

        <p className="card-text">
          <span>Apellido:</span> {apellido}
        </p>

        <p className="card-text">
          <span>Teléfono: </span>
          {telefono}
        </p>

        <button onClick={() => borrarCliente(id)} className="btn btn-danger mr-2">
          Borrar &times;
        </button>

        <button onClick={() => buscarCliente(id)} className="btn btn-danger">
          Editar &times;
        </button>
      </div>
    </div>
  )
}

export default () => {
  const { clientes } = useSelector(state => state)

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h2 className="card-title text-center">
          {clientes.length === 0
            ? "No hay clientes"
            : "Administra tus clientes Aqui"}
        </h2>

        <div className="lista-clientes">
          {clientes.map(cliente => <Cliente key={cliente.id} {...cliente} />)}
        </div>
      </div>
    </div>
  )
}
