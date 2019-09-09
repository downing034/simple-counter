import { connect } from 'react-redux'
import Counter from '../components/counter'
import { increment, decrement, reset } from '../actions';

export const mapStateToProps = (state) => {
   return {
      counter: state
   };
};

export const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset())
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
