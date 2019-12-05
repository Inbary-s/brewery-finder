// this can NOT be inside of any function or event, var map should be global
var GoogleAPIKey = "AIzaSyBRSdoZacWWmoazbfG4tJit38vbOI-t6ww";
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.7392, lng: -104.9903 },
    zoom: 8
  });
}

// var map = new google.maps.Map(document.getElementById('map'), {
//     zoom:7,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   });

var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();


directionsDisplay.setMap(map);


var request = {
  origin: 'Chicago', 
  destination: 'New York',
  travelMode: google.maps.DirectionsTravelMode.DRIVING
};

directionsService.route(request, function(response, status) {
  if (status == google.maps.DirectionsStatus.OK) {
    directionsDisplay.setDirections(response);
  }
});
   
   $(".btn").on("click", function(event) {

        var APIKey = "10418444aeb3ca5b2578412ce0662909";
        var city = $("#input").val();
        var queryURL =
          "http://beermapping.com/webservice/loccity/" +
          APIKey +
          "/" +
          city +
          "&s=json";

  
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          for (var i =0; i < 20; i++) {
            console.log(queryURL);
          console.log(response[i]);
          console.log(response[i].zip);

          }
        // var queryURLbeers = "https://api.openbrewerydb.org/breweries?by_city=" + userInput;
        // var latLong = [];
        
      //   $.ajax({
      //     url: queryURLbeers,
      //     method: "GET"
      //   }).then(function(response) {
      //     console.log(response);
      //     console.log("lat: " , response[0].latitude);
      //     console.log("lng: " , response[0].longitude);
      //     var lat = response[0].latitude;
      //     var long = response[0].longitude;
      //     latLong.splice(2,0);
      //   latLong.push(response[0].latitude, response[0].longitude);
        
      // })


      // setTimeout(getDirections, 1000);

      // function getDirections() {
      //   var queryURLgoogMap = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin="+userInput+"&destination="+latLong+"&key=AIzaSyBRSdoZacWWmoazbfG4tJit38vbOI-t6ww"
      //     $.ajax({
      //     url: queryURLgoogMap,
      //     method:"GET"
      //   }).then(function(innerResponse) {
      //     console.log(queryURLgoogMap);
      //     console.log("Directions= " , innerResponse)
      //     console.log("Latlong= ",latLong)
      //   })
    // }
    })
    })