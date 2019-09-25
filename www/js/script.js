$(document).ready(function() {

	//Smooth Scroll
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
	$( window ).scroll(function() {
		if($(window).scrollTop() > 140){
			$('#loginButton').css('margin-top','150px');
		}else{
			$('#loginButton').css('margin-top','0px');
		}
	});
	//funcion que efectua la busqueda del evento por el nombre del mismo
	function busqueda(q){	
		if (q != '') {
			$.ajax({
				method:'POST',
				url:'demo_cliente/searchConcert.php',
				data:{q:q},
				success:function (response) {
					$('#column').css('display','none');
					$("#column1").hide().html(response).fadeIn();
				}
			})
		}
	}
	//al escribir en el campo #busca revisa el valor del campo y si no esta vacio le pasa su contenido a la funcion que hara la busqueda
	$('#busca').on('keyup', function(){
		var evento = $(this).val();
		if (evento == ''){
			location.href="index.php";
		}else{
			$('#busca2').val('');
		    busqueda(evento);
		}
	});
	
	//al escribir en el campo #busca2 revisa el valor del campo y si no esta vacio le pasa su contenido a la funcion que hara la busqueda
	$('#busca2').on('keyup', function(){
		var evento = $(this).val();
		if (evento == ''){
			location.href="index.php";
		}else{
			$('#busca').val('');
			busqueda(evento);
		}
	});
	
	// Main Menu
	$('#main-nav').affix({
		offset: {
			top: $('header').height()
		}
	});

	// Top Search
	$("#ss").click(function(e) {
		e.preventDefault();
		$(this).toggleClass('current');
		$(".search-form").toggleClass('visible');
	});


	//Slider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
		pauseOnAction: true,
	});

	

	// number effect
	$('.about-bg-heading').one('inview', function(event, visible) {
		if (visible == true) {
			$('.count').each(function() {
				$(this).prop('Counter', 0).animate({
					Counter: $(this).text()
				}, {
					duration: 5000,
					easing: 'swing',
					step: function(now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
		}
	});

	//Google Map
    var get_latitude = $('#google-map').data('latitude');
    var get_longitude = $('#google-map').data('longitude');

    function initialize_google_map() {
        var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
        var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize_google_map);

});