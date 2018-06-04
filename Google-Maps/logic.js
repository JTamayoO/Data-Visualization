var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 6.217, lng: -75.567}
  });

  // Load GeoJSON.
  map.data.loadGeoJson('https://raw.githubusercontent.com/JTamayoO/Test/master/Google%20Maps/UAn_DensUrbam_28052018.geojson');

  // Color each letter gray. Change the color when the isColorful property
  // is set to true.
}