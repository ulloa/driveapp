(function(dust){dust.register("beacon",body_0);function body_0(chk,ctx){return chk.w("<!DOCTYPE html><html><head><meta name=\"viewport\" content=\"initial-scale=1.0, user-scalable=no\"><meta charset=\"utf-8\"><title>Roads API Demo</title><style>html, body, #map {height: 100%;margin: 0px;padding: 0px}#panel {position: absolute;top: 5px;left: 50%;margin-left: -180px;z-index: 5;background-color: #fff;padding: 5px;border: 1px solid #999;}#bar {width: 240px;background-color: rgba(255, 255, 255, 0.75);margin: 8px;padding: 4px;border-radius: 4px;}#autoc {width: 100%;box-sizing: border-box;}</style><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js\"></script><script src=\"https://maps.googleapis.com/maps/api/js?libraries=drawing,places\"></script><script>var apiKey = 'AIzaSyAt5i19SzEouGS7lFrcnxYCEvwNLpP1TyE';var map;var drawingManager;var placeIdArray = [];var polylines = [];var snappedCoordinates = [];function initialize() {var mapOptions = {zoom: 15,center: {lat: 33.6694, lng: -117.8231}};map = new google.maps.Map(document.getElementById('map'), mapOptions);map.controls[google.maps.ControlPosition.RIGHT_TOP].push(document.getElementById('bar'));var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autoc'));autocomplete.bindTo('bounds', map);autocomplete.addListener('place_changed', function() {var place = autocomplete.getPlace();if (place.geometry.viewport) {map.fitBounds(place.geometry.viewport);} else {map.setCenter(place.geometry.location);map.setZoom(17);}});drawingManager = new google.maps.drawing.DrawingManager({drawingMode: google.maps.drawing.OverlayType.POLYLINE,drawingControl: true,drawingControlOptions: {position: google.maps.ControlPosition.TOP_CENTER,drawingModes: [google.maps.drawing.OverlayType.POLYLINE]},polylineOptions: {strokeColor: '#696969',strokeWeight: 0}});drawingManager.setMap(map);drawingManager.addListener('polylinecomplete', function(poly) {var path = poly.getPath();polylines.push(poly);placeIdArray = [];runSnapToRoad(path);});$('#clear').click(function(ev) {for (var i = 0; i < polylines.length; ++i) {polylines[i].setMap(null);}polylines = [];ev.preventDefault();return false;});}function runSnapToRoad(path) {var pathValues = [];for (var i = 0; i < path.getLength(); i++) {pathValues.push(path.getAt(i).toUrlValue());}$.get('https://roads.googleapis.com/v1/snapToRoads', {interpolate: true,key: apiKey,path: pathValues.join('|')}, function(data) {processSnapToRoadResponse(data);drawSnappedPolyline();getAndDrawSpeedLimits();});}function processSnapToRoadResponse(data) {snappedCoordinates = [];placeIdArray = [];for (var i = 0; i < data.snappedPoints.length; i++) {var latlng = new google.maps.LatLng(data.snappedPoints[i].location.latitude,data.snappedPoints[i].location.longitude);snappedCoordinates.push(latlng);placeIdArray.push(data.snappedPoints[i].placeId);}}function drawSnappedPolyline() {var snappedPolyline = new google.maps.Polyline({path: snappedCoordinates,strokeColor: 'blue',strokeWeight: 4});/*\t     post('/beacon', snappedPolyline); */snappedPolyline.setMap(map);polylines.push(snappedPolyline);}/*function post(path, params, method) {method = method || \"post\"; var form = document.createElement(\"form\");form.setAttribute(\"method\", method);form.setAttribute(\"action\", path);for(var key in params) {if(params.hasOwnProperty(key)) {var hiddenField = document.createElement(\"input\");hiddenField.setAttribute(\"type\", \"hidden\");hiddenField.setAttribute(\"name\", \"_csrf\");hiddenField.setAttribute(\"value\", \"").f(ctx.get(["_csrf"], false),ctx,"h").w("\");form.appendChild(hiddenField);}}form.submit();}*/function getAndDrawSpeedLimits() {for (var i = 0; i <= placeIdArray.length / 100; i++) {var start = i * 100;var end = Math.min((i + 1) * 100 - 1, placeIdArray.length);drawSpeedLimits(start, end);}}function drawSpeedLimits(start, end) {var placeIdQuery = '';for (var i = start; i < end; i++) {placeIdQuery += '&placeId=' + placeIdArray[i];}$.get('https://roads.googleapis.com/v1/speedLimits','key=' + apiKey + placeIdQuery,function(speedData) {processSpeedLimitResponse(speedData, start);});}function processSpeedLimitResponse(speedData, start) {var end = start + speedData.speedLimits.length;for (var i = 0; i < speedData.speedLimits.length - 1; i++) {var speedLimit = speedData.speedLimits[i].speedLimit;var color = getColorForSpeed(speedLimit);var coords = snappedCoordinates.slice(start + i, start + i + 2);var snappedPolyline = new google.maps.Polyline({path: coords,strokeColor: color,strokeWeight: 6});snappedPolyline.setMap(map);polylines.push(snappedPolyline);}}function getColorForSpeed(speed_kph) {if (speed_kph <= 40) {return 'purple';}if (speed_kph <= 50) {return 'blue';}if (speed_kph <= 60) {return 'green';}if (speed_kph <= 80) {return 'yellow';}if (speed_kph <= 100) {return 'orange';}return 'red';}$(window).load(initialize);</script></head><body><div id=\"map\"></div><div id=\"bar\"><p class=\"auto\"><input type=\"text\" id=\"autoc\"/></p><p><a id=\"clear\" href=\"#\">Click here</a> to clear map.</p></div></body></html>");}body_0.__dustBody=!0;return body_0}(dust));