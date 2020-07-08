export const obtenerStateStorage = () => {
  const clientesStorage = localStorage.getItem("clientes")
  if (clientesStorage === null) return undefined
  return JSON.parse(clientesStorage)
}

export const guardarStateStorage = state => {
  const clientesState = JSON.stringify(state)
  localStorage.setItem("clientes", clientesState)
}
