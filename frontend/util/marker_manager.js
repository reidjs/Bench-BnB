export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  createMarkerFromBench(bench) {
    const position = {lat: bench.lat,lng: bench.lng}
    console.log(position)
    let marker = new google.maps.Marker({
      position: position,
      map: this.map,
      title: bench.description
    })
    // console.log(this.map)
    // marker.setMap(this.map)
    return marker
  }

  updateMarkers(benches) {
    console.log('update called');
    benches.forEach((bench) => {
      if (!this.markers[bench.id]) {
        this.markers[bench.id] = this.createMarkerFromBench(bench);
        
      }
    });
    console.log(this.markers)
  }
}
