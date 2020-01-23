
export const filterChange = filter => {
  return {
    type: 'SET_FILTER',
    filter,
  }
}

const countryFilterReducer = (state = 'Aruba', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default: return state
  }
}

export default countryFilterReducer