// Create a map variable
var map;

// Create a variable for Place
var place;

// Create variables for clientID & secret key of Foursquare
var clientID;
var clientSecret;

// Variable for Places list
var placeList = [
  {
    name: 'Helsinki Railway Station',
    lat: 60.170711, long: 24.941497
  },
  {
    name: 'Forum Shopping Center',
    lat: 60.168767, long: 24.938321
  },
  {
    name: 'Kamppi Shopping Center',
    lat: 60.169270, long: 24.933558
  },
  {
    name: 'Stockmann Shopping Center',
    lat: 60.168438, long: 24.942033
  },
  {
    name: 'Kluuvi Shopping Center',
    lat: 60.169709, long: 24.947752
  },
  {
    name: 'Sokos Shopping Center',
    lat: 60.170357, long: 24.938718
  },
  {
    name: 'Railway Station Square',
    lat: 60.171031, long: 24.943922
  },
  {
    name: 'Market Square',
    lat: 60.167626, long: 24.954039
  },
]

// The ViewModel
function ViewModel() {
  var self = this;

  // Create arrayList
  self.arrayList = ko.observableArray([]);

  // Setup Helsinki Map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 60.169856, lng: 24.938379},
    zoom: 15
  });

  // Push placeList to arrayList
  placeList.forEach(function(placeItem){
       self.arrayList.push(placeItem);
   });

}

// Start app with knockoutjs
function initApp(){
  ko.applyBindings(new ViewModel());
}
