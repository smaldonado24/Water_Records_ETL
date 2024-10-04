// Creating our initial map object:
// Set the longitude, latitude, and starting zoom level.
var myMap = L.map("map", {
    center: [39.2, -113.9],
    zoom: 9.5
  });
  
  // Adding a tile layer to our map:
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // Creating a new markers:
  // We pass in some initial options, and then add the marker to the map by using the addTo() method.
  var marker1 = L.marker([38.77215, -114.04684], {
    draggable: true,
    title: "Big Springs Creek"
  }).addTo(myMap);
  
  var marker2 = L.marker([38.86551, -113.9936], {
    draggable: true,
    title: "Clay Spring"
  }).addTo(myMap);

  var marker3 = L.marker([38.77721, -114.04285], {
    draggable: true,
    title: "East Middle Ditch"
  }).addTo(myMap);

  var marker4 = L.marker([39.41556, -113.87019], {
    draggable: true,
    title: "Foote Reservoir Spring"
  }).addTo(myMap);

  var marker5 = L.marker([39,30383, -114.00847], {
    draggable: true,
    title: "Kell Spring"
  }).addTo(myMap);

  var marker6 = L.marker([39.5586, -113.89567], {
    draggable: true,
    title: "Leland Herris Well"
  }).addTo(myMap);

  var marker7 = L.marker([39.57968, -113.86546], {
    draggable: true,
    title: "Miller Spring"
  }).addTo(myMap);

  var marker8 = L.marker([39.42988, -113.88805], {
    draggable: true,
    title: "Pivot Pump From Foote Reservior"
  }).addTo(myMap);

  var marker9 = L.marker([39.40369, -113.86385], {
    draggable: true,
    title: "Twin Springs (North)"
  }).addTo(myMap);

  var marker10 = L.marker([39.403, -113.86281], {
    draggable: true,
    title: "Twin Springs (South)"
  }).addTo(myMap);

  var marker11 = L.marker([38.77795, -114.04277], {
    draggable: true,
    title: "West Middle Ditch"
  }).addTo(myMap);
  
  // Binding a popup to our marker
  marker1.bindPopup("Big Springs Creek");
  marker2.bindPopup("Clay Spring");
  marker3.bindPopup("East Middle Ditch");
  marker4.bindPopup("Foote Reservior Spring");
  marker5.bindPopup("Kell Spring");
  marker6.bindPopup("Leland Harris Well");
  marker7.bindPopup("Miller Spring");
  marker8.bindPopup("Pivot Pump From Foot Reservior");
  marker9.bindPopup("Twin Springs (North)");
  marker10.bindPopup("Twin Springs (South)");
  marker11.bindPopup("West Middle Ditch");
  