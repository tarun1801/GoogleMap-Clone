mapboxgl.accessToken = 'pk.eyJ1IjoidGFydW4tMTgwMSIsImEiOiJja3FpdzZzdXcwMWNuMnFwaGZucHZqMmxwIn0.YSYoTUJkW6ppiRO16-RxIA';
var from = [80.9462, 26.8467]
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11',
  center: from,
  zoom: 5
});

//YOUR TURN: Replace var to = [lng, lat] with the lng/lat for Madison, WI [-89.384, 43.101] 
//YOUR TURN: Replace var to = [lng, lat] with the lng/lat for Chicago, Il [-87.627, 41.919] 

var to = [82, 27] //lng, lat
 //lng, lat 

var greenMarker = new mapboxgl.Marker({
    color: 'green'
  })
  .setLngLat(to) // marker position using variable 'to'
  .addTo(map); //add marker to map

var purpleMarker = new mapboxgl.Marker({
    color: 'purple'
  })
  .setLngLat(from) // marker position using variable 'from'
  .addTo(map); //add marker to map

var options = {
  units: 'kilometers'
}; // units can be degrees, radians, miles, or kilometers, just be sure to change the units in the text box to match. 

var distance = turf.distance(to, from, options);

var value = document.getElementById('map-overlay')
value.innerHTML = "Distance: " + distance.toFixed([2]) + " kilometers"
