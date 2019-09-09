import { mapStateToProps, mapDispatchToProps } from 'containers/counterContainer';

describe('counterContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockReset();
  })

  it('maps correct state to props', () => {
    let state = 1;
    expect(mapStateToProps(state)).toEqual({ counter: 1 });
  });

  it('dispatches increment correctly to props', () => {
    mapDispatchToProps(dispatch).increment();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'INCREMENT'});
  });

  it('dispatches decrement correctly to props', () => {
    mapDispatchToProps(dispatch).decrement();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'DECREMENT'});
  });

  it('dispatches reset correctly to props', () => {
    mapDispatchToProps(dispatch).reset();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'RESET'});
  });
});
