// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [140.2698140090166, 35.53076395035584],
    [140.26907748459098, 35.520920486822725],
    [140.2690664799169, 35.51674852929752],
    [140.2683495563718, 35.51454926874392],
    [140.2655538074002, 35.5108352754327],
    [140.26082168700492, 35.51050135237719],
    [140.25692701767295, 35.511744304218915],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoieXN1ejAwNCIsImEiOiJja3ByZ3phYzIwODk2MzFtbm5qa2Z0MjV1In0.GbU7grH-QDTYtNA5i5mN7A';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [140.2696566302977, 35.531191104930095],
    zoom: 14,
  });
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  var marker = new mapboxgl.Marker().setLngLat([140.2698140090166, 35.53076395035584]).addTo(map);
  
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    setTimeout(() =>{
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
  }
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  