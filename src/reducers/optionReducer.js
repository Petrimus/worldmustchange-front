
export const optionChange = option => {
  return {
    type: 'SET_OPTION',
    option,
  }
}

const optionReducer = (state = 'optionOne', action) => {
  switch (action.type) {
    case 'SET_OPTION':
      return action.option
    default:
      return state
  }
}

export default optionReducer