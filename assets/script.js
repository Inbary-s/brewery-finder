
  $(".btn").on("click", function(event) {
        var userInput = $("#input").val();
        var queryURLbeers = "https://api.openbrewerydb.org/breweries?by_city=" + userInput;


      $.ajax({
        url: queryURLbeers,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        console.log("lat: " + response[0].latitude);
        console.log("lng: " + response[0].longitude);
        var lat = response[0].latitude;
        var long = response[0].longitude;
     
    })
})
     // this can NOT be inside of any function or event, var map should be global
        var GoogleAPIKey = "AIzaSyBRSdoZacWWmoazbfG4tJit38vbOI-t6ww";
        var map;
        function initMap() {
          map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 39.7392, lng: -104.9903 },
            zoom: 8
          });
        }
      