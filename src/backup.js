const chartdataToShow = ({
  countries, chartShow, countryFilter, compareFilter, options
}) => {
  // console.log('compareFilter ', compareFilter)
  // console.log('option ', options)
  console.log('countries ', countries)
  
  if (countries.length === 0) {
    return
  }

  const selectedCountry = countries.filter(c => c.name === countryFilter)[0]

  let compareCountry = null
  if (compareFilter !== null && options === 'optionTwo') {
    compareCountry = countries.filter(c => c.name === compareFilter)[0]
  }

  let datasetCountry
  switch (chartShow) {
    case 'population':
      if (compareCountry === null) {
        datasetCountry = datasetPopAndEmis(selectedCountry.population)
      } else {
        datasetCountry = datasetPopAndEmisWithCompare(selectedCountry.population, compareCountry.population)
      }
      break;
    case 'emissions':
      if (compareCountry === null) {
        datasetCountry = datasetPopAndEmis(selectedCountry.emissions)
      } else {
        datasetCountry = datasetPopAndEmisWithCompare(selectedCountry.emissions, compareCountry.emissions)
      }
      break;
    case 'perCapita':
      if (compareCountry === null) {
        datasetCountry = datasetPerCapita(selectedCountry.population, selectedCountry.emissions)
      } else {
        datasetCountry = datasetPerCapitaWithCompare(
          selectedCountry.population, selectedCountry.emissions, compareCountry.population, compareCountry.emissions)
      }     
      break;
    default:
      datasetCountry = 'population'
  }
  return datasetCountry
}
