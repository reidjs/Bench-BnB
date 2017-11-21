import React from 'react'
import BenchIndexItem from './bench_index_item'
class BenchIndex extends React.Component {
  constructor(props) {
    super(props)
    // console.log("props: ", props)
    
  }
  componentDidMount() {
    this.props.fetchBenches([])
  }
  render() {
    const benchList = this.props.benches.map((bench) => {
      return <BenchIndexItem key={bench.id} bench={bench}/>
    })
    // console.log("benches: ", this.props.benches)
    return ( 
      <div>
        Bench index here
        <ul>
          {benchList}
        </ul>
      </div>
    )
  }
}

export default BenchIndex;