import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uuid from 'uuid/v4'

import { agregarClienteAction, editarClienteAction } from '../redux/agendaDuck.jsx'


export default () => {
  const [nombre, setNombre] = useState('')

  const [apellido, setApellido] = useState('')

  const [telefono, setTelefono] = useState('')


  const { cliente, clientes } = useSelector(state => state)

  const dispatch = useDispatch()

  const agregarNuevoCliente = cliente => dispatch(agregarClienteAction(cliente))

  const editarCliente = listaClientes => dispatch(editarClienteAction(listaClientes))


  useEffect(() => {
    if (!cliente) return
    const { nombre, apellido, telefono } = cliente

    setNombre(nombre)
    setApellido(apellido)
    setTelefono(telefono)
  }, [cliente])


  const limpiarInputData = (data) => {
    setNombre('')
    setApellido('')
    setTelefono('')
  }

  const clienteDataIsOk = nombre.trim() === '' || apellido.trim() === '' || telefono.trim() === '' || isNaN(telefono) ? true : false

  const agendarNuevoCliente = () => {
    if (clienteDataIsOk) return alert('Verifique datos')

    const dataCliente = {
      id: uuid(),
      nombre,
      apellido,
      telefono
    }

    agregarNuevoCliente(dataCliente)

    limpiarInputData()
  }


  const dataEditarCliente = () => {
    if (clienteDataIsOk) return alert('Verifique datos')

    const dataCliente = {
      id: cliente.id,
      nombre,
      apellido,
      telefono
    }

    const indexCliente = clientes.indexOf(cliente)

    clientes[indexCliente] = dataCliente

    editarCliente(clientes)

    limpiarInputData()
  }


  return (
    <div className="card mt-5">
      <div className="card-body">
        <h2 className="card-title text-center mb-5">Agregue clientes a la agenda</h2>

        <form>
          <div className="form-group row">
            <label className="col-sm-3 col-lg-3 col-form-label">
              Nombre
            </label>
            <div className="col-sm-9 col-lg-9">
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-lg-3 col-form-label">
              Apellido
            </label>
            <div className="col-sm-9 col-lg-9">
              <input
                type="text"
                className="form-control"
                value={apellido}
                onChange={e => setApellido(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 col-lg-3 col-form-label">
              Teléfono
            </label>
            <div className="col-sm-9 col-lg-9">
              <input
                type="text"
                className="form-control"
                value={telefono}
                onChange={e => setTelefono(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row justify-content-end">
            <div className="col-sm-12 mt-3">
              <button
                onClick={cliente ? dataEditarCliente : agendarNuevoCliente}
                type="button"
                className="btn btn-success py-3 w-100"
              >
                {cliente ? 'Editar' : 'Agregar'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
