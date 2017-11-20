import React from 'react';

class BenchMap extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions)
    console.log(this.map)
  }
  render() {
    console.log('here')
    return (
      <div id='map-container' ref={ map => this.mapNode = map }>
        Map component goes here.
      </div>
    )
  }
}

export default BenchMap;