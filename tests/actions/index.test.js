import { increment, decrement, reset } from 'actions/index'

describe('counter actions', () => {

  it('should create an action to increment', () => {
    const expectedAction = {
      type: 'INCREMENT'
    }

    expect(increment()).toEqual(expectedAction)
  })

  it('should create an action to decrement', () => {
    const expectedAction = {
      type: 'DECREMENT'
    }

    expect(decrement()).toEqual(expectedAction)
  })

  it('should create an action to reset', () => {
    const expectedAction = {
      type: 'RESET'
    }

    expect(reset()).toEqual(expectedAction)
  })

})
