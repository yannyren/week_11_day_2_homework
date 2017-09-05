var initialize = function() {
  var center = {lat: 30.274084, lng: 120.155070}; //NEW
  var mapSection = document.getElementById('main-map'); //NEW
    var mainMap = new MapWrapper(mapSection, center, 10); 
    mainMap.addMarker(center);
    mainMap.addClickEvent();
    var bounceButton = document.querySelector('#button-bounce-markers');
    bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));
}



window.addEventListener('load', initialize);