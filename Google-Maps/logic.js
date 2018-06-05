var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 6.217, lng: -75.567}
  });

  // Load GeoJSON.
  map.data.loadGeoJson('https://raw.githubusercontent.com/JTamayoO/Test/master/D3-js/data.json');

  // Color each letter gray. Change the color when the isColorful property
  // is set to true.
}