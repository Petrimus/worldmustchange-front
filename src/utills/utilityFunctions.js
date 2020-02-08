
export const datasetPerCapita = (perCapita) => {
  const perCapitaDataset = []
  for (let i = 0; i < perCapita.length; i++) {
    perCapitaDataset.push({
      year: 1960 + i,
      value: perCapita[i]
    })
  }
  return perCapitaDataset
}

export const datasetPerCapitaWithCompare = (perCapita, perCapitaCompare) => {
  let perCapitaDataset = []
  for (let i = 0; i < perCapita.length; i++) {

    perCapitaDataset.push({
      year: 1960 + i,
      value: perCapita[i],
      compare: perCapitaCompare[i]
    })
  }
  return perCapitaDataset
}

/*  
(population1, emissions1, population2, emissions2) => {
    const perCapitaDataset = []
    for (let i = 0; i < population1.length; i++) {

      let value1 = null
      if (population1[i] !== null && emissions1[i] !== null) {
        value1 = population1[i] / emissions1[i]
      }

      let value2 = null
      if (population2[i] !== null && emissions2[i] !== null) {
        value2 = population2[i] / emissions2[i]
      }

      perCapitaDataset.push({
        year: 1960 + i,
        value: value1,
        compare: value2
      })
    }
    return perCapitaDataset
  }
*/

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