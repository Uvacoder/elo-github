const createReducer = (initialState, handleActions) => {
  if (typeof initialState === 'undefined') {
      throw new Error('initialState should not be undefined')
  }

  if (Object.prototype.toString.call(handleActions) !== '[object Object]' ) {
      throw new Error('createReducer expects the second argument as an Object representing reducer')
  }

  return (state = initialState, action) => {
      if (handleActions.hasOwnProperty(action.type)) {
          return handleActions[action.type](state, action)
      }
      return state
  }
}

export default createReducer