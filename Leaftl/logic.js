// Nuevo mapa
var map = L.map('miMapa').setView([6.217, -75.567], 12);

// Crea capa Thunderforest.Outdoors y la añade al mapa
L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>,' +
    ' &copy; <a  href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var pois = L.geoJson(null, {
  onEachFeature: function (feature, layer) {
    var content = '<strong>'+feature.properties.N_Mpio+'</strong><br>'+
        feature.properties.N_UAn_BaVe;
    layer.bindPopup(content);
  }
});


// Crea control de capas
L.control.layers({}, { // Capas de superposición
  "Puntos de Analisis": pois
}).addTo(map);

// Crea control de escala y lo añade al mapa
L.control.scale({}).addTo(map);

// Carga los ficheros geojson
$.getJSON('https://raw.githubusercontent.com/JTamayoO/Test/master/D3-js/data.json', function(data) {
  pois.addData(data).addTo(map);
});