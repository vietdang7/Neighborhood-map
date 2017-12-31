// Create a map variable
var map;

// Create a variable for Place
var Place;

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

// Foursquare Setup
Place = function(data){
  var self = this;
  self.name = data.name;
  self.lat = data.lat;
  self.long = data.long;
  self.URL = '';
  self.street = '';
  self.city = '';
  self.phone = '';

  // value TRUE for visible of place item
  self.visible = ko.observable(true);

  // Foursquare ID and clientSecret
  clientID = 'LCWXFEE2AYQ4AQQHCSVVYHKYFADEDM2R1XKOKTIB4OLWN3NZ';
  clientSecret = 'FZRFCVP2MZ3KA1EIR3VDCFSKZFUQCXJPAYSEAOI131CGHKEN'

  // Foursquare URL
  var foursquareURL = 'https://api.foursquare.com/v2/venues/search?ll=' + self.lat + ',' + self.long + '&client_id=' + clientID + '&client_secret=' + clientSecret + '&v=20171230' + '&query=' + self.name;

  // Request data from FourSquare and stored in related variables
  $.getJSON(foursquareURL).done(function (data) {
        var responses = data.response.venues[0];
        self.URL = responses.url;
        if (typeof self.URL === 'undefined') {
            self.URL = "";
        }
        self.street = responses.location.formattedAddress[0] || 'No Address Provided';
        self.city = responses.location.formattedAddress[1] || 'No Address Provided';
        self.phone = responses.contact.phone || 'No Phone Provided';
    }).fail(function () {
        $('.place-list').html('There was an error with the Foursquare API. Please reload the page!.');
    });

    // Content of infowindow
    self.htmlContent = '<div class="info-window-content"><div class="title"><b>' + self.name + '</b></div>' +
        '<div class="content"><a href="' + self.URL +'">' + self.URL + '</a></div>' +
        '<div class="content">' + self.street + '</div>' +
        '<div class="content">' + self.city + '</div>' +
        '<div class="content">' + self.phone + '</div></div>';

    // Add content to infowindow
    self.infoWindow = new google.maps.InfoWindow({content: self.htmlContent});

    // Create marker
    self.marker = new google.maps.Marker({
      position: new google.maps.LatLng(self.lat, self.long),
      map: map,
      title: self.name,
      animation: google.maps.Animation.DROP
    });

    // show marker if visible is TRUE
    self.showMarker = ko.computed(function() {
		if(self.visible() === true) {
			self.marker.setMap(map);
		} else {
			self.marker.setMap(null);
		}
		return true;
	  }, self);

    // evenlistener for Marker
    self.marker.addListener('click', function(){
      self.htmlContent = '<div class="info-window-content"><div class="title"><b>' + self.name + '</b></div>' +
          '<div class="content"><a href="' + self.URL +'">' + self.URL + '</a></div>' +
          '<div class="content">' + self.street + '</div>' +
          '<div class="content">' + self.city + '</div>' +
          '<div class="content">' + self.phone + '</div></div>';

      self.infoWindow.setContent(self.htmlContent);

      self.infoWindow.open(map, this);

      // Set animation for marker when click
      self.marker.setAnimation(google.maps.Animation.BOUNCE);

      setTimeout(function() {
            self.marker.setAnimation(null);
        }, 1100);

    });
    self.active = function(place){
      google.maps.event.trigger(self.marker, 'click');
    };
};

// The ViewModel
function ViewModel() {
  var self = this;

  // Create observable searchInput with empty string
  self.searchInput = ko.observable('');

  // Create arrayList
  self.arrayList = ko.observableArray([]);

  // Setup Helsinki Map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 60.169856, lng: 24.938379},
    zoom: 15
  });

  // Push placeList to arrayList
  placeList.forEach(function(placeItem){
       self.arrayList.push(new Place(placeItem));
   });

  // Create resultList
  self.resultList = ko.computed(function(){
    // Create variable to store searchInput in lowercase format
    var term = self.searchInput().toLowerCase();
    if (!term) {
      self.arrayList().forEach(function(placeItem){
				placeItem.visible(true);
			});
			return self.arrayList();
    } else {
      return ko.utils.arrayFilter(self.arrayList(), function(placeItem) {
				var string = placeItem.name.toLowerCase();
				var result = (string.search(term) >= 0);
				placeItem.visible(result);
				return result;
			});
    }
  },self);

}

// Error handler.
function errorHandler() {
    $('#map').html('There is error while loading Google Maps. Please reload your browser.');
}

// Start app with knockoutjs
function initApp(){
  ko.applyBindings(new ViewModel());
}
