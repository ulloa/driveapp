(function(dust){dust.register("index",body_0);var blocks={"body":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.p("layouts/master",ctx,ctx,{});}body_0.__dustBody=!0;function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<div id=\"map\"></div><script type=\"text/javascript\">var citymap = {kidzone: {center: {lat: 33.7215192, lng: -117.7717849},prob: 27},accidents: {center: {lat: 40.714, lng: -74.005},prob: 84},theft: {center: {lat: 34.052, lng: -118.243},prob: 38},traffic: {center: {lat: 49.25, lng: -123.1},prob: 60}};var map;function initMap() {map = new google.maps.Map(document.getElementById('map'), {center: {lat: 33.6694, lng: -117.8231},zoom: 13,mapTypeId: google.maps.MapTypeId.TERRAIN});var image = 'images/redflag.png';var beachMarker = new google.maps.Marker({position: {lat: 33.6694, lng: -117.8235},map: map,icon: image});// Note: We scale the area of the circle based on the population.for (var city in citymap) {// Add the circle for this city to the map.var cityCircle = new google.maps.Circle({strokeColor: '#FF0000',strokeOpacity: 0.8,strokeWeight: 2,fillColor: '#FF0000',fillOpacity: 0.35,map: map,center: citymap[city].center,radius: Math.sqrt(citymap[city].prob) * 100});};}// check for Geolocation support/*     if (navigator.geolocation) {console.log('Geolocation is supported!');}else {console.log('Geolocation is not supported for this Browser/OS version yet.');}window.onload = function() {var startPos;var geoSuccess = function(position) {startPos = position;document.getElementById('startLat').innerHTML = startPos.coords.latitude;document.getElementById('startLon').innerHTML = startPos.coords.longitude;};navigator.geolocation.getCurrentPosition(geoSuccess);};*/</script><script async defer src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyDgqGHydf7ZIC0kheaZRvfr7g2cwM65S5w&callback=initMap\"");}body_1.__dustBody=!0;return body_0}(dust));