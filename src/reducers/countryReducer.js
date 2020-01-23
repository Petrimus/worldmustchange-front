// import { initialState } from '../tests/testData'
import countryServices from '../services/countries'

export const initializeCountries = () => {
  return async dispatch => {
    const countries = await countryServices.getAll()
    dispatch({
      type: 'INIT_COUNTRIES',
      data: countries
    })
  }
}

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_COUNTRIES':
      return action.data
    default:
      return state
  }
}

export default countryReducer