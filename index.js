
mapboxgl.accessToken = 'pk.eyJ1IjoidGFydW4tMTgwMSIsImEiOiJja3FpdzZzdXcwMWNuMnFwaGZucHZqMmxwIn0.YSYoTUJkW6ppiRO16-RxIA';


function setMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center, // starting position [lng, lat]
        zoom: 14 // starting zoom
        });
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );

}


navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy : true})

function successLocation(position)
{
     console.log(position);
     setMap([position.coords.longitude,position.coords.latitude]);
}
function errorLocation(e)
{
     console.log(e);
}