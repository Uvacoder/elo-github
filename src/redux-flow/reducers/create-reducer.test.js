import { expect } from 'chai'
import createReducer from './create-reducer'
import deepFreeze from 'deep-freeze'

const initialState = 0
const reducer = createReducer(0, {
    'INCREMENT': (state, action) => state + 1,
    'DECREMENT': (state, action) => state - 1
})

it ('createReducer should be a function', () => {
    expect(createReducer).to.be.a('function')
})

it('createReducer(initialState, {}) should return a function', () => {
    expect(createReducer([], {})).to.be.a('function')
})

it('should create a reducer', () => {
    const before = 0
    const action = deepFreeze({ type: 'INCREMENT'})
    const after = 1

    expect(reducer(before,action)).to.be.equal(after)
})

it('reducer should return latest state if action is unknown', () => {
    const before = 3
    const action = deepFreeze({ type: 'UNKOWN' })
    const after = 3

    expect(reducer(before,action)).to.be.equal(after)
})

it('reducer should return initial state if action is undefined', () => {
    const before = undefined
    const action = deepFreeze({})
    const after = initialState

    expect(reducer(before,action)).to.be.equal(after)
})

it ('initialState should not be undefined', () => {
    try {
        createReducer()
    } catch (e) {
        expect(e.message).to.be.equal('initialState should not be undefined')
    }
    
})

it('handleActions should not be different from object', () => {
    try {
        createReducer([])
    } catch (e) {
        expect(e.message).to.be.equal('createReducer expects the second argument as an Object representing reducer')
    }
} )
