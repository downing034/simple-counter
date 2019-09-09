import reducer from 'reducers/index'
import { increment, decrement, reset } from 'actions/index.js'

const initialState = 0

describe('index reducer', () => {
  it('should return an initial state', () => {
    let state = reducer(initialState, {})
    expect(state).toBe(0)
  })

  it('should return an increment state', () => {
    let state1 = reducer(initialState, {})
    let incrementAction = increment()
    let state2 = reducer(state1, incrementAction)
    expect(state2).toBe(1)
  })

  it('should return a decrement state', () => {
    let state1 = reducer(initialState, {})
    let decrementAction = decrement()
    let state2 = reducer(state1, decrementAction)
    expect(state2).toBe(-1)
  })

  it('should return a reset state', () => {
    let state1 = reducer(4, {})
    let resetAction = reset()
    let state2 = reducer(state1, resetAction)
    expect(state2).toBe(0)
  })
})
