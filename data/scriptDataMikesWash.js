

window.onload = function (){
  initMap();
}

//function for map to be showen at maps in HTML
function initMap() {
       var positionMikesWash = {lat: 49.367915, lng: 8.685084};
       var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 14,
         center: positionMikesWash
       });
       var marker = new google.maps.Marker({
         position: positionMikesWash,
         map: map
       });
     }
