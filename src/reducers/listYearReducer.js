export const changeListYear = year => {
  return {
    type: 'CHANGE_LISTYEAR',
    year,
  }
}

const listYearReducer = (state = 2000, action) => {
  switch (action.type) {
    case 'CHANGE_LISTYEAR':
      return action.year
    
    default: return state
  }
}

export default listYearReducer