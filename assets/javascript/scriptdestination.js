$(document).ready(function(){
	
	setMapUi('map1', { lat: 11.0400,  lng: 123.2022 });//lakawon
	setMapUi('map2', { lat: 10.6604,  lng: 123.1447 });//camp
	setMapUi('map3', { lat: 10.7093,  lng: 122.9826 });//ruins

	function setMapUi(id, location){
		initMap(id,
			{
				lat: location.lat,
				lng: location.lng
			}
		);
	   var localStorageLocation = localStorage.getItem("location");

	  	if(!localStorageLocation){

	  		getLocation(function(status){
				if(!status){
					console.log('not supported by browsers.');
				}else{
					var lat = status.coords.latitude;
					var lng = status.coords.longitude;
					localStorage.setItem("location", [lat, lng].join(','));
					initRoute(id,
						{
							lat: lat,
							lng: lng
						},{
							lat: location.lat,
							lng: location.lng
						}
					);
				}
			}, function(error){
				console.log('please allow');
			});
	  	}else{
	  		var originLocation = localStorageLocation.split(',');
			initRoute(id,
				{
					lat: parseFloat(originLocation[0]),
					lng: parseFloat(originLocation[1])
				},{
					lat: location.lat,
					lng: location.lng
				}
			);
	  	}
	}
    
	function initMap(id, origin) {
		var coordinates = {
			lat: origin.lat,
			lng: origin.lng
		};

		var map = new google.maps.Map(document.getElementById(id), {zoom: 10, center: coordinates});
		var marker = new google.maps.Marker({position: coordinates, map: map});
	}

	function initRoute(id, origin, destination){
		var map = new google.maps.Map(document.getElementById(id), {zoom: 10, center: origin});
		var directionsService = new google.maps.DirectionsService();
		var directionsDisplay = new google.maps.DirectionsRenderer();

		directionsDisplay.setMap(map);

		var request = {
			origin: Object.values(origin).join(','),
			destination: Object.values(destination).join(','),
			travelMode: 'DRIVING'
		};
		directionsService.route(request, function(result, status) {
			if (status == 'OK') {
				directionsDisplay.setDirections(result);
			}
		});

	}

	function getLocation(callback, error) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(callback, error);
    } else { 
    	callback(false);
    	error(false)
    }
	}

	$(window).on('scroll',function() {
     var scroll = parseInt($(window).scrollTop());
     if(scroll != 0){
     	$('.content-section-navbar').css({
     		position:'fixed'
     	})
     }else{
  		$('.content-section-navbar').css({
     		position:'relative'
     	})
     }
 });
	$(window).on('scroll',function() {
     var scroll = parseInt($(window).scrollTop());
     if(scroll != 0){
          $('.content-section-navbar').css({
               position:'fixed'
          })
     }else{
          $('.content-section-navbar').css({
               position:'relative'
          })
     }
 	});
 	
	$('i.fas.fa-bars').click(function(){
		$('.nav-menu-mobile-list').slideToggle('show');
	})

	$('a.modal-close-btn').click(function(){
		$('.modal').hide();
	})

	$('button#lakawon').click(function(){
		$('div#lakawon').show();
	})
	$('button#camp').click(function(){
		$('div#camp').show();
	})
	$('button#ruins').click(function(){
		$('div#ruins').show();
	})

})