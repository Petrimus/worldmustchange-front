
const listPropertiesReducer = (state = initial, action) => {
  let newState = { ...state }
  switch (action.type) {
    case 'CHANGE_LISTORDER':
      newState.order = action.order
      return newState

    case 'CHANGE_PAGE':
      newState.order = action.order
      return newState

    case 'CHANGE_LISTSORT':
      newState.sort = action.sort
      return newState

    case 'CHANGE_LISTSLIMIT':
      newState.limit = action.limit
      return newState

    case 'CHANGE_LISTYEAR':
      newState.year = action.year
      return action.year

    default: return state
  }
}

export default listPropertiesReducer

const initial = {
  sort: 'id',
  year: 2000,
  page: 1,
  order: 'asc',
  limit: 10,
  // q: '',

}

export const changeListOrder = order => {
  return {
    type: 'CHANGE_LISTORDER',
    order,
  }
}

export const changeListPage = page => {
  return {
    type: 'CHANGE_LISTPAGE',
    page
  }
}

export const changeListSort = sort => {
  return {
    type: 'CHANGE_LISTSORT',
    sort
  }
}

export const changeListLimit = limit => {
  return {
    type: 'CHANGE_LISTLIMIT',
    limit
  }
}

export const changeListYear = year => {
  return {
    type: 'CHANGE_LISTYEAR',
    year,
  }
}