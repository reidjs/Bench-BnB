import React from 'react';
import MarkerManager from '../util/marker_manager';
class BenchMap extends React.Component {
  constructor(props) {
    super(props)
    // console.log("benchmap props: ", this.props)
  }
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };
    // this.map = new google.maps.Map(this.mapNode, mapOptions)
    this.map = new google.maps.Map(document.getElementById('map-container'), mapOptions)
    this.MarkerManager = new MarkerManager(this.map);
    // console.log(this.map)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props, prevProps, prevState)
    this.MarkerManager.updateMarkers(this.props.benches)
    console.log(this.map)
  }  
  render() {
    // console.log('here')
    return (
      <div id='map-container' ref={ map => this.mapNode = map }>
        Map component goes here.
      </div>
    )
  }
}

export default BenchMap;