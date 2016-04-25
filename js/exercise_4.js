// Here is the javascript setup for a basic map:

// Enter your mapbox map id here to reference it for the base layer,
// this one references the ugly green map that I made.
var mapId = 'bhollinberger.pp9cedk8';

// And this is my access token, use yours.
var accessToken = 'pk.eyJ1IjoiYmhvbGxpbmJlcmdlciIsImEiOiJjaW5nMGdkY2cxOXFqdjBrcTduemM2cXF4In0.s5J_YCA6oYunBD0TII7wPg';

// Create the map object with your mapId and token, 
// referencing the DOM element where you want the map to go.
L.mapbox.accessToken = accessToken;
var map = L.mapbox.map('map', mapId);

// Set the initial view of the map to the whole US
map.setView([39, -96], 4);

// Great, now we have a basic web map!

var datafiletoadd = 'data/parks.geojson';

var featureLayer = L.mapbox.featureLayer(); 
	featureLayer.loadURL(datafiletoadd);
    featureLayer.addTo(map);
    
featureLayer.on('ready', function (){
  this.setStyle({
  	"color":"#6483bf",
    "fillColor": "#6483bf",
    "weight": .5,
    "opacity": 0.65
  })  
  map.fitBounds(featureLayer.getBounds());
})

featureLayer.on('ready', function(){
  this.eachLayer(function(layer){
    layer.bindPopup('Welcome to ' + layer.feature.properties.LABEL);
  })
})