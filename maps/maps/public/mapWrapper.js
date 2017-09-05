var MapWrapper = function(container, coords, zoom) { //UPDATE
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom //UPDATE
  });
  this.markers = []; //NEW
};

MapWrapper.prototype.addMarker = function(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    this.markers.push(marker); //NEW
};

// MapWrapper.prototype.addClickEvent = function(){
//     google.maps.event.addListener(this.googleMap, 'click', function(event){
//       console.log("yo");
//     });
// };

MapWrapper.prototype.addClickEvent = function(){
    // var markerFunction = this.addMarker;

   
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      // console.log(event);
      // console.log(event.latLng.lat());
      var clickedLat = event.latLng.lat();
      console.log(clickedLat);
      var clickedLng = event.latLng.lng();
      var coords = {lat: clickedLat, lng: clickedLng};
      console.log( coords )
      this.addMarker(coords);
    }.bind(this));
};

MapWrapper.prototype.bounceMarkers = function(){
    this.markers.forEach(function(marker) {
      marker.setAnimation(google.maps.Animation.BOUNCE)
    })
};



