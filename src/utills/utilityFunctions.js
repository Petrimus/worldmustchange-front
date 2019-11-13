
export const datasetPerCapita = (population, emissions) => {
  const perCapitaDataset = []
  for (let i = 0; i < population.length; i++) {
    if (population[i] !== null && emissions[i] !== null) {
      const value = population[i] / emissions[i]      
      perCapitaDataset.push({
        year: 1960 + i,
          value: value,
      })
    } else {
      perCapitaDataset.push({
        year: 1960 + i,
          value: null,
      })
    }
  } 
  return perCapitaDataset
}

export const datasetPopAndEmis = (values) => {
  const dataset = values.map((c, index) => {
    return {
      year: 1960 + index,
      value: c,
    }
  })
  return dataset
}
export const datasetPopAndEmisWithCompare = (values1, values2) => {
  const dataset = values1.map((c, index) => {
    return {
      year: 1960 + index,
      value: c,
      compare: values2[index]
    }
  })
  return dataset
}