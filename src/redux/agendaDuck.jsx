//types
const AGREGAR_CLIENTE = 'AGREGAR_CLIENTE'
const BORRAR_CLIENTE = 'BORRAR_CLIENTE'
const BUSCAR_CLIENTE = 'BUSCAR_CLIENTE'
const EDITAR_CLIENTE = 'EDITAR_CLIENTE'


const initialState = { clientes: [] }


//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_CLIENTE:
      return {
        ...state,
        clientes: [...state.clientes, action.payload],
        cliente: ''
      }

    case BORRAR_CLIENTE:
      return {
        ...state,
        clientes: state.clientes.filter(cliente => cliente.id !== action.payload),
        cliente: ''
      }

    case BUSCAR_CLIENTE:
      return {
        ...state,
        cliente: state.clientes.find(cliente => cliente.id === action.payload)
      }

    case EDITAR_CLIENTE:
      return {
        ...state,
        clientes: action.payload,
        cliente: ''
      }

    default:
      return state
  }
}


//actions creators
export const agregarClienteAction = cliente => {
  return { type: AGREGAR_CLIENTE, payload: cliente }
}

export const borrarClienteAction = cliente => {
  return { type: BORRAR_CLIENTE, payload: cliente }
}

export const buscarClienteAction = cliente => {
  return { type: BUSCAR_CLIENTE, payload: cliente }
}

export const editarClienteAction = listaClientes => {
  return { type: EDITAR_CLIENTE, payload: listaClientes }
}