import listPropertiesReducer from './listPropertiesReducer'
import deepFreeze from 'deep-freeze'

describe('listPropertiesReducer', () => {
  test('returns new state with action CHANGE_LISTORDER', () => {
    const state = {}
    const action = {
      type: 'CHANGE_LISTORDER',
      data: 'asc'
    }

    deepFreeze(state)
    const newState = listPropertiesReducer(state, action)

    expect(newState.order).toContainEqual(action.data)
  })
})