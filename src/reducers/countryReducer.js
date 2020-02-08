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
      // console.log('init countries', action.data)
      const countries = action.data.map((country) => {
       country.perCapita = datasetPerCapita(country.population, country.emissions) 
       return country
      })
      return countries
      
    default:
      return state
  }
}

export default countryReducer

const datasetPerCapita = (population, emissions) => {
  const perCapitaDataset = []
  for (let i = 0; i < population.length; i++) {
    if (population[i] !== null && emissions[i] !== null) {
      const value = emissions[i] * 1000 / population[i]
      perCapitaDataset.push(Math.round(value * 10) / 10)      
     
    } else {
      perCapitaDataset.push(null)      
    }
  }
  return perCapitaDataset
}