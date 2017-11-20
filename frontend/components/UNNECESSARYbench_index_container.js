import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';
import BenchIndex from './bench_index';
import values from 'lodash/values';
const mapStateToProps = (state) => {
  console.log(values(state.entities.benches))
  return {
    benches: values(state.entities.benches)
  }
}

const mapDispatchToProps = () => (dispatch) => {
  return {
    fetchBenches: () => (dispatch(fetchBenches()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex)