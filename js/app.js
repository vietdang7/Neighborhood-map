// Create a map variable
     var map;
     // Function to initialize the map within the map div
     function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 60.169856, lng: 24.938379},
         zoom: 14
       });
       
     }
