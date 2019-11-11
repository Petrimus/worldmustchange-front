
export const compareChange = filter => {
  return {
    type: 'SET_COMPAREFILTER',
    filter,
  }
}

export const removeCompare = () => {
  return {
    type: 'REMOVE_COMPAREFILTER'
  }
}

const compareReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_COMPAREFILTER':
      return action.filter

    case 'REMOVE_COMPAREFILTER':
      return state = null

    default: return state
  }
}

export default compareReducer