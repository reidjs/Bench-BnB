import * as BenchAPIUtil from '../util/bench_api_util';
export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const receiveBenches = (benches) => {
  return {
    type: RECEIVE_BENCHES,
    benches
  }
}

export const fetchBenches = (bounds) => (dispatch) => {
  console.log('bounds:', bounds)
  return BenchAPIUtil.getBenches(bounds)
    .then(res => {
      // console.log(res)
      return dispatch(receiveBenches(res))
    })
}