	var map;
		function initialize() {
		  var mapOptions = {
		    zoom: 10,
		    center: new google.maps.LatLng(12.925069, 77.560630)
		  };
		  map = new google.maps.Map(document.getElementById('map-canvas'),
		      mapOptions);
		      var marker = new google.maps.Marker({
		        map: map,
		        icon: "images/map_pointer.png",
		        title: "Google Map for my place",
		        position: map.getCenter()
		      });
		      var marker2 = new google.maps.Marker({
		        map: map,
		        icon: "images/map_pointer.png",
		        title: "My place",
		        position: new google.maps.LatLng(12.925069, 77.560630)
		      });
		      var marker3 = new google.maps.Marker({
		        map: map,
		        icon: "images/map_pointer.png",
		        title: "Google Map Marker for my place",
		        position: new google.maps.LatLng(12.925069, 77.560630)
		      });



		      var infowindow = new google.maps.InfoWindow();
		      infowindow.setContent('<b>Bangalore</b><br>Tel: 9035846766');

		      var infowindow2 = new google.maps.InfoWindow();
		      infowindow2.setContent('<b>My Place</b><br>Tel: 9035846766');

		      var infowindow3 = new google.maps.InfoWindow();
		      infowindow3.setContent('<b>My place</b><br>Tel: 9035846766');

		      infowindow.open(map, marker);


		      google.maps.event.addListener(marker, 'click', function() {
		        infowindow.open(map, marker);
		      });
		      google.maps.event.addListener(marker2, 'click', function() {
		        infowindow2.open(map, marker2);
		      });
		      google.maps.event.addListener(marker3, 'click', function() {
		        infowindow3.open(map, marker3);
		      });
		}

		google.maps.event.addDomListener(window, 'load', initialize);
		