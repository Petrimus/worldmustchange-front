export const changeChartToShow = country => {
  return {
    type: 'CHANGE_CHARTSHOW',
    country,
  }
}

const chartShowReducer = (state = 'population', action) => {
  switch (action.type) {
    case 'CHANGE_CHARTSHOW':
      return action.country
    
    default: return state
  }
}

export default chartShowReducer