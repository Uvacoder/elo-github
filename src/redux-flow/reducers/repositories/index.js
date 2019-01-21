import createReducer from '../create-reducer'
import { FETCHING, SUCCESS } from './actions'

const initialState = {
    isFetching: false
}

const repositories = createReducer(initialState, {
    [FETCHING]: (state, action) => ({
        ...state,
        isFetching: true
    }),

    [SUCCESS]: (state, action) => ({
        ...action.payload,
        isFetching: false
    })
})

export default repositories