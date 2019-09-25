var ancho = $(window).width();  
	if (ancho >= 320 && ancho <= 767){    
		$('#home > a').html("<label>HOME</label>");
		$('#eventos > a').html("<label>EVENTOS</label><span class='caret'></span>");
		$('#nosotros > a').html("<label>NOSOTROS</label><span class='caret'></span>");
		$('#puntos_venta > a').html("<label>PUNTOS DE VENTA</label>");
	}

var ancho = $(window).width();
	
	function verInfo(numEvento, estado){
		$('.caption').each(function(index){
			$(this).css('display','none');
		});
		if (estado == 1) { 
			$('#caption'+numEvento).css('display','block');
		}else if (estado == 2){
			$('#caption'+numEvento).css('display','none');
		} 
	}
	
	function swapColors(id){
		var fondo1 = $('.tarjeta_new'+id).css('background-color');
		var fuente1 = $('.tarjeta_new'+id).css('color');
		//alert('Fuente: '+fuente1+' y fondo: '+fondo1);
		$('.tarjeta_new'+id).css('background-color',fuente1);
		$('.tarjeta_new'+id).css('color',fondo1);
		////$('.textoPar'+id).css('color',fondo1);
		$('.titull'+id).css('color',fondo1);
		$('.titull'+id).css('border-color',fondo1);
	}
	      
	function prox_eventos(){
		if (ancho < 375){
			$('body').animate({scrollTop:'631px'}, 2000);
		}else if (ancho >= 375 && ancho < 425){
			$('body').animate({scrollTop:'739px'}, 2000);
		}else if (ancho >= 425 && ancho < 768){
			$('body').animate({scrollTop:'799px'}, 2000);
		}else if (ancho >= 768 && ancho < 992){
			$('body').animate({scrollTop:'213px'}, 2000);
		}else if (ancho >= 992 && ancho < 1200){
			$('body').animate({scrollTop:'268px'}, 2000);
		}else if (ancho >= 1200 && ancho < 1440){
			$('body').animate({scrollTop:'318px'}, 2000);
		}else if (ancho >= 1440){
			$('body').animate({scrollTop:'378px'}, 2000);
		} 
    }
	 
	$(document).ready(function(){
		var otra_pag = $('#otra_pag').val();
		if (otra_pag == ''){
			return false;
		}else{
			prox_eventos();
		}
	});
		
	$(function () {
		$('.flexslider').flexslider({
		                   slideshow: false,
		                   slideshowSpeed: 5000,
		                   pauseOnHover: true,
		                   start: renderPreview,	//render preview on start
		                   before: renderPreview, //render preview before moving to the next slide
	                       //animation:slide
	                    });
	});    
		
	
function actualizarDia(){
        var diaActual = $('#dia2').html();
		var mes = $('#mes2').val();
																
		if (mes == "02"){
			maxD = 28;
		}else if (mes == "04" || mes == "06" || mes == "09" || mes == "11"){
			maxD = 30;
		}else{
			maxD = 31;
		}
														
		for (i=1; i<=maxD; i++){
			if (i < 10){
				diaActual += "<option value='0"+i+"'>0"+i+"</option>";
			}else{
				diaActual += "<option value='"+i+"'>"+i+"</option>";
			}
		}
		$('#dia2').html(diaActual);
	}
	
	function mover(index){
		var pos = $('#myModal2').scrollTop(); 
		
		if (index == 1){
			/*if (pos <= 400 ){
				$('#btnSliderIzq').css('display', 'none');
			}*/
			pos -= 400;
			/*if (pos <= 400){
				$('#btnSliderDer').css('display', 'inline-block');
			}*/
		}
		if (index == 2){
			/*if (pos == 400) { 
				$('#btnSliderDer').css('display', 'none');
			}*/
            pos += 400;
            /*if (pos == 400){
				$('#btnSliderIzq').css('display', 'inline-block');
			}*/  			
		}
		$('#myModal2').animate({scrollTop: pos},1000);
			
	}
	
	function verP(elemento){  
		var visible = $(elemento).siblings().attr('type');
		if (visible == 'password'){
		    $(elemento).siblings().attr('type','text');
			$(elemento).children().removeClass('glyphicon-eye-close');
			$(elemento).children().addClass('glyphicon-eye-open');
		}else if (visible == 'text'){
			$(elemento).siblings().attr('type','password');
			$(elemento).children().addClass('glyphicon-eye-close');
			$(elemento).children().removeClass('glyphicon-eye-open');
		}				
	}
	
	function justText(e,value){
		if(e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 8 || e.keyCode == 46 || e.keyCode == 9 || e.which == 0 || e.keyCode == 32){
			return;
		}else{
			e.preventDefault();
		}
	}
	
	function pasaporte(){
		var valor = $('#documento2').val();
		if(valor.length <  3 || valor.length > 13){
			console.log('Pasaporte incorrecto');
			$('#documento2').val('');
			$('#alerta22').fadeIn('slow');
			$('#alerta22').delay(2500).fadeOut('slow');
			return false;
		}else{
			if(valor[0] == 'p' || valor[0] == 'P'){
				return true;
			}else{
				console.log('Pasaporte incorrecto');
				$('#documento2').val('');
				$('#alerta22').fadeIn('slow');
				$('#alerta22').delay(2500).fadeOut('slow');
				return false;
			}
		}
	}
	
	function ValidarCedula(){
		var numero = $('#documento2').val();
		var suma = 0;
		var residuo = 0;
		var pri = false;
		var pub = false;
		var nat = false;
		var numeroProvincias = 24;
		var modulo = 11;

		/* Verifico que el campo no contenga letras */
		var ok=1;
		/* Aqui almacenamos los digitos de la cedula en variables. */
		d1 = numero.substr(0,1);
		d2 = numero.substr(1,1);
		d3 = numero.substr(2,1);
		d4 = numero.substr(3,1);
		d5 = numero.substr(4,1);
		d6 = numero.substr(5,1);
		d7 = numero.substr(6,1);
		d8 = numero.substr(7,1);
		d9 = numero.substr(8,1);
		d10 = numero.substr(9,1);

		/* El tercer digito es: */
		/* 9 para sociedades privadas y extranjeros */
		/* 6 para sociedades publicas */
		/* menor que 6 (0,1,2,3,4,5) para personas naturales */

		if (d3==7 || d3==8){
		console.log('El tercer dígito ingresado es inválido');
		$('#documento2').val('');
		$('#alerta22').fadeIn('slow');
		$('#alerta22').delay(1500).fadeOut('slow');
		return false;
		}

		/* Solo para personas naturales (modulo 10) */
		if (d3 < 6){
		nat = true;
		p1 = d1 * 2; if (p1 >= 10) p1 -= 9;
		p2 = d2 * 1; if (p2 >= 10) p2 -= 9;
		p3 = d3 * 2; if (p3 >= 10) p3 -= 9;
		p4 = d4 * 1; if (p4 >= 10) p4 -= 9;
		p5 = d5 * 2; if (p5 >= 10) p5 -= 9;
		p6 = d6 * 1; if (p6 >= 10) p6 -= 9;
		p7 = d7 * 2; if (p7 >= 10) p7 -= 9;
		p8 = d8 * 1; if (p8 >= 10) p8 -= 9;
		p9 = d9 * 2; if (p9 >= 10) p9 -= 9;
		modulo = 10;
		}

		/* Solo para sociedades publicas (modulo 11) */
		/* Aqui el digito verficador esta en la posicion 9, en las otras 2 en la pos. 10 */
		else if(d3 == 6){
		pub = true;
		p1 = d1 * 3;
		p2 = d2 * 2;
		p3 = d3 * 7;
		p4 = d4 * 6;
		p5 = d5 * 5;
		p6 = d6 * 4;
		p7 = d7 * 3;
		p8 = d8 * 2;
		p9 = 0;
		}

		/* Solo para entidades privadas (modulo 11) */
		else if(d3 == 9) {
		pri = true;
		p1 = d1 * 4;
		p2 = d2 * 3;
		p3 = d3 * 2;
		p4 = d4 * 7;
		p5 = d5 * 6;
		p6 = d6 * 5;
		p7 = d7 * 4;
		p8 = d8 * 3;
		p9 = d9 * 2;
		}

		suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;
		residuo = suma % modulo;

		/* Si residuo=0, dig.ver.=0, caso contrario 10 - residuo*/
		digitoVerificador = residuo==0 ? 0: modulo - residuo;

		/* ahora comparamos el elemento de la posicion 10 con el dig. ver.*/
		if (pub==true){
		if (digitoVerificador != d9){
		console.log('El ruc de la empresa del sector público es incorrecto.');
		$('#documento2').val('');
		$('#alerta22').fadeIn('slow');
		$('#alerta22').delay(1500).fadeOut('slow');
		return false;
		}
		/* El ruc de las empresas del sector publico terminan con 0001*/
		if ( numero.substr(9,4) != '0001' ){
		console.log('El ruc de la empresa del sector público debe terminar con 0001');
		$('#documento2').val('');
		$('#alerta22').fadeIn('slow');
		$('#alerta22').delay(1500).fadeOut('slow');
		return false;
		}
		}
		else if(pri == true){
		if (digitoVerificador != d10){
		console.log('El ruc de la empresa del sector privado es incorrecto.');
		$('#documento2').val('');
		$('#alerta22').fadeIn('slow');
		$('#alerta22').delay(1500).fadeOut('slow');
		return false;
		}
		if ( numero.substr(10,3) != '001' ){
		console.log('El ruc de la empresa del sector privado debe terminar con 001');
		$('#documento2').val('');
		$('#alerta22').fadeIn('slow');
		$('#alerta22').delay(1500).fadeOut('slow');
		return false;
		}
		}

		else if(nat == true){
		if (digitoVerificador != d10){
		console.log('El número de cédula de la persona natural es incorrecto.');
		$('#documento2').val('');
		$('#alerta22').fadeIn('slow');
		$('#alerta22').delay(1500).fadeOut('slow');
		return false;
		}
		if (numero.length >10 && numero.substr(10,3) != '001' ){
		console.log('El ruc de la persona natural debe terminar con 001');
		$('#documento2').val('');
		$('#alerta22').fadeIn('slow');
		$('#alerta22').delay(1500).fadeOut('slow');
		return false;
		}
		}
		return true;
	}

    function ValidarDocumento(){
		var valor = $('#documento2').val();
		if(valor[0] == 'p'||valor[0] == 'P'){
			pasaporte();
		}else{
			ValidarCedula();
		}
	}

    function justInt(e,value){
		if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 46 || e.keyCode == 80 || e.keyCode == 112)){
			return;
		}
		else{
			e.preventDefault();
		}
	}

	function validarPassword(){
        var pass1 = $('.contrasena22').val();
		var pass2 = $('.contrasena2').val();
		if(pass2 != pass1){
            $('html, body').animate({ scrollTop: 0 }, 'slow');
			//$('#alerta44').fadeIn();
			$('.contrasena22').val('');
			$('.contrasena2').val('');
			//setTimeout("$('#alerta44').fadeOut();",3000);
			alert('Error!... Las contraseñas no coinciden.');
			return false;
		}else{
			return true; 
		}
	}

	$('#ciudad2').change(function(){
		var ciu = $('#ciudad2').val();
		if (ciu == 'Otra'){
			$('#ciudad2').fadeOut('slow');
			$('#otraciu2').delay(600).fadeIn('slow');
		}
	});
	
	function validartelefono(id,valor){
		var largo = valor.length;
		if(id == 1){
			if((largo < 10) || (valor == '')){
				$('#alerta66').fadeIn();
				$('#alerta66').delay(2500).fadeOut();
				$('html, body').animate({ scrollTop: 0 }, 'slow');
				$('#tmov2').val('');
				return false;
			}
		}else if(id == 2){
			if((largo < 9) || (valor == '')){
				$('#alerta66').fadeIn();
				$('#alerta66').delay(2500).fadeOut();
				$('html, body').animate({ scrollTop: 0 }, 'slow');
				$('#telfijo2').val('');
				return false;
			}
		}
	}   
	
	function mostrar(){
		if($('#check').is(':checked')){
			$('#aceptar2').fadeIn();
		}else{
			$('#aceptar2').fadeOut();
		}
	}
	
	function enviar22(){
		var nombres = $('.nombres2').val(); 
		var documento = $('.documentoid2').val(); 
		var anio = $('#anio2').val();
		var mes = $('#mes2').val();
		var dia = $('#dia2').val();
		var genero = $('#genero2').val();
		var mail = $('.email2').val();
		var pass = $('.contrasena22').val();
		var movil = $('.movil2').val();
		var lonMovil2 = movil.length;
		var fpago = $('#pago2').val();
		var oboleto = $('#obtener_boleto2').val();
		var provincia = $('#provincia2').val();
		
		if(provincia == 23){
			provincia = $('#otraProvincia2').val();
		}
		
		var ciudad = $('#otraCiudad2').val();
		var direccion = $('#dir2').val();
		var fijo = $('#telfijo2').val();
		
		if( nombres == '' || documento == '' || mail == '' || pass == '' || ciudad == '' ){
			// alert(nombres +'<<>>'+ documento +'<<>>'+ mail +'<<>>'+ pass +'<<>>'+ movil)
			//$('html, body').animate({ scrollTop: 0 }, 'slow');
			//$('#alerta55').fadeIn();
			//setTimeout("$('#alerta55').fadeOut();",3000);
			alert('Error!... Campos vacios, por favor llénelos.');
		}else if (anio == 0 || mes == 0 || dia == 0){
			alert('Por favor ingrese su fecha de nacimiento');
			return false;  
		}else if (lonMovil2 < 4){
			alert('Teléfono móvil incorrecto');  
			return false;  
		}else{
			$('#aceptar2').fadeOut('slow');
			$('#wait2').delay(750).fadeIn('slow');
			$.post('subpages/newaccountok.php',{
				nombres : nombres, documento : documento, anio : anio, mes : mes, dia : dia, genero : genero, mail : mail, pass : pass, movil : movil, fpago : fpago,
				oboleto : oboleto, ciudad : ciudad, direccion : direccion
			}).done(function(data){
				var contieneCuantosCarrito = $('#contieneCuantosCarrito').val();
				if(contieneCuantosCarrito != 0){
					window.location = '?modulo=compra';
				}else{
					window.location = 'index.php?modulo=start';
				}
			});
		}
	}
	  
	function cerrar2(e,num){
		if (num == 1){
			$('#terminosdeuso').css('display','none');
		}else{
			e.preventDefault();
		}
    }
	
	function gracias(){
		alert('gracias , su cuenta ha sido creada satisfactoriamente !!!');
		// window.close();
		window.open('https://www.ticketfacil.ec/ticket2/','_top');
		window.location = '?modulo=perfil';
	}
	
	function aceptarLogin(){
		var con = $('#con').val();
		accion ='?modulo=comprar&con='+con;
		$('#form').attr('action',accion);
		$('#form').submit();
	}
	
	function ver(){
		if (ancho >= 320 && ancho <= 767){
		  	$('#btn-menu').css('z-index','-1');
			$('#busca2').css('z-index','-1');
		}
	}
	
	$('.cerrar').click(function(){
		var ancho = $(window).width();
		if (ancho >= 320 && ancho <= 767){
			$('#btn-menu').css('z-index','3000');
			$('#busca2').css('z-index','3000');
		}
	});
	
	$(document).ready(function () {
		       		
		actualizarDia();			
			
        $('#mostrar_contrasena').click(function () {
            if ($('#mostrar_contrasena').is(':checked')) {
                $('#loginPassword').attr('type', 'text');
            } else {
                $('#loginPassword').attr('type', 'password');
            }
        });
				
		$('#eventos').removeClass('active'); 
		$('#eventos > a').css('background','trasparent !important');
								
	});
	
	function crearSesion(){
		$('#tipo_acceso').val('1');
	}
	
	function onSignIn(googleUser) {
        var tipo_acceso = $('#tipo_acceso').val();
		
		if (tipo_acceso == '0'){
			return false;
		}else if (tipo_acceso == 1){
			var profile = googleUser.getBasicProfile();
			var con = $('#con').val();
			var id_gmail = profile.getId();
			var email_gmail =  profile.getEmail();
			var nombre = profile.getName();
			var birthday = '';
			var gender = '';
			
			$.post("autenticaGmail.php", {
				id_gmail : id_gmail, email_gmail : email_gmail, nombre : nombre, birthday : birthday, gender : gender
			}).done(function(data){
				$.post("subpages/tipo_acceso.php",{
					id : 1
				}).done(function(data){
					if (data == 'ok'){
						if($('.asientosescogidos').length > 0){
							window.location = '?modulo=compra';
						}else{
							window.location = '?modulo=start';
						}
						//location.href="?modulo=start";
					}else{
						alert(data);
						return false;
					}
				});
			});
		}
	}
	
    //si hizo login por su cuenta de google cerrara sesion en ticketfacil y cerrara sesion en google (en una nueva ventana)
		$('a.logout').on('click', function () {
			var origen_acceso = $('#origen_acceso').val();
			if (origen_acceso == 'gmail'){
			    var wnd = window.open("https://mail.google.com/mail/u/0/?logout&hl=en");
			}			
		});
	
	$(document).ready(function () {
		var docWidth = $(document).width();
		var winWidth = $(window).width();
		var docHeight = $(document).height();
		var winHeight = $(window).height();
		
		// alert(docWidth+'-'+winWidth);
		if (winWidth >= 100 && winWidth <= 767) {
			$('.navbar.navbar-default').removeClass('navbar-fixed-top');
		}
		/*$('button.navbar-toggle.collapsed').on('click', function () {
			$('#rowing').css('height', '120px');
		});*/
		  
		if (winWidth < 768){
			//$('#vista_pc').css('display','block');
		}else{
			//$('#vista_pc').css('display','none');
		}
		
		function alinear_card(modo){
			var anchoPantalla = $(window).width();
			
			if (modo == 1){
				if (anchoPantalla < 375){
					var izq = 3;
					$('.card.mb-30.tarjeta_new').each(function(index){
						var residuo = index % 3;
						if (residuo == 0){
							izq = 3;
						}else{
							izq += 18;
						}
						$(this).css('left',izq+'px');
					});
				}
			}
			if (modo == 2){
				if (anchoPantalla < 375){
					$('.card.mb-30.tarjeta_new').each(function(index){
						$(this).css('left','3px');
					});
				}
			}	
		}
		
		$('#vista_pc').click(function(){
			var vista_texto = $(this).text();
			if (vista_texto == 'Vista Escritorio'){
				$(this).text('Vista Normal');
				$('#primera_plana').addClass('clase_primera_plana');
				$('#lista_eventos').addClass('clase_lista_eventos');
				$('#lista_eventos').css('width','25%');
				$('#fila_prox_eventos').addClass('clase_fila_prox_eventos');
				$('#aver').addClass('clase_aver');
				$('.evento_a_ver').addClass('clase_evento_a_ver');
				$('.card.mb-30.tarjeta_new').addClass('clase_card_mb-30_tarjeta_new');
				alinear_card(1);
				$('.main-img > img').addClass('clase_main-img');
				$('.card-title').addClass('clase_card-title');
				$('.textoPar').addClass('clase_textoPar');
				$('.titull').addClass('clase_titull');
				$('#contenido_prox_eventos').addClass('clase_contenido_prox_eventos');
				$('#port').addClass('clase_port');
				$('.portfolio-thumbnail').addClass('clase_portfolio-thumbnail');
				$('.evento_realizado').addClass('clase_evento_realizado');
				$('.item > img').addClass('clase_item_img');
				$('#btn_ver_mas').addClass('clase_btn_ver_mas');
				$('#about-bg').addClass('clase_about-bg');
				$('.about-bg-heading > h1').addClass('clase_titulo_estadisticas_h1');
				$('#titulo_estadisticas > p').addClass('clase_titulo__estadisticas_p');
				$('.resultados_estadisticas').addClass('clase_resultados_estadisticas');
				$('#about-bg .about-bg-wrapper .count').addClass('clase_about-bg_about-bg-wrapper_count');
				$('#about-bg .about-bg-wrapper p').addClass('clase_about-bg_about-bg-wrapper_p');
                $('#bottom-footer').removeClass('hidden-xs');			
				$('#bottom-footer > img').addClass('clase_imagen_der');
							
                if (winWidth >= 375){
					$('#aver').removeClass('clase_aver');
                    $('#aver').addClass('clase_aver_375');
                    $('.card.mb-30.tarjeta_new').addClass('clase_card_mb-30_tarjeta_new_375');
					$('.main-img > img').addClass('clase main-img_375');
                    $('#port').addClass('clase_port_375');					
					$('.portfolio-thumbnail').removeClass('clase_portfolio-thumbnail');
					$('.portfolio-thumbnail').addClass('clase_portfolio-thumbnail_375');
				}
				if (winWidth >= 425){
                    $('#aver').addClass('clase_aver_325');
					$('#aver').addClass('clase_aver_425');
					$('#port').removeClass('clase_port');
					$('#port').removeClass('clase_port_375');
                    $('#port').addClass('clase_port_425');
                    $('.portfolio-thumbnail').addClass('clase_portfolio-thumbnail_425');
				}
				if (winWidth >= 768 && winWidth < 992){
					$('#lista_eventos').removeClass('clase_lista_eventos');
					$('#aver').removeClass('clase_aver_425');
					$('#aver').removeClass('clase_aver_375');
					$('.card.mb-30.tarjeta_new').addClass('clase_card_mb-30_tarjeta_new_768');
					$('.clase_card_mb-30_tarjeta_new_768').removeClass('card.mb-30.tarjeta_new');
					$('#port').removeClass('clase_port_425');
				}
			}else{
				$(this).text('Vista Escritorio');
				$('#primera_plana').removeClass('clase_primera_plana');
				$('#lista_eventos').removeClass('clase_lista_eventos');
				$('#lista_eventos').css('width','102.7%');
				$('#fila_prox_eventos').removeClass('clase_fila_prox_eventos');
				$('#aver').removeClass('clase_aver');
				$('.evento_a_ver').removeClass('clase_evento_a_ver');
				$('.card.mb-30.tarjeta_new').removeClass('clase_card_mb-30_tarjeta_new');
				alinear_card(2);
				$('.main-img > img').removeClass('clase_main-img');
				$('.card-title').removeClass('clase_card-title');
				$('.textoPar').removeClass('clase_textoPar');
				$('.titull').removeClass('clase_titull');
				$('#contenido_prox_eventos').removeClass('clase_contenido_prox_eventos');
				$('#port').removeClass('clase_port');
				$('.portfolio-thumbnail').removeClass('clase_portfolio-thumbnail');
				$('.evento_realizado').removeClass('clase_evento_realizado');
				$('.item > img').removeClass('clase_item_img');
				$('#btn_ver_mas').removeClass('clase_btn_ver_mas');
				$('#about-bg').removeClass('clase_about-bg');
				$('.about-bg-heading > h1').removeClass('clase_titulo_estadisticas_h1');
				$('#titulo_estadisticas > p').removeClass('clase_titulo__estadisticas_p');
				$('.resultados_estadisticas').removeClass('clase_resultados_estadisticas');
				$('#about-bg .about-bg-wrapper .count').removeClass('clase_about-bg_about-bg-wrapper_count');
				$('#about-bg .about-bg-wrapper p').removeClass('clase_about-bg_about-bg-wrapper_p');				
				$('#bottom-footer').addClass('hidden-xs');
                $('#bottom-footer > img').removeClass('clase_imagen_der');
							
                if (winWidth >= 375){
					$('#aver').removeClass('clase_aver_375');
                    $('.card.mb-30.tarjeta_new').removeClass('clase_card_mb-30_tarjeta_new_375');
					$('.main-img > img').removeClass('clase main-img_375');	
					$('#port').removeClass('clase_port_375');
					$('.portfolio-thumbnail').addClass('clase_portfolio-thumbnail');
					$('.portfolio-thumbnail').removeClass('clase_portfolio-thumbnail_375');
				}
				
                if (winWidth >= 425){
                    $('#aver').removeClass('clase_aver_425');
                    $('#port').removeClass('clase_port_425');
                    $('.portfolio-thumbnail').removeClass('clase_portfolio-thumbnail_425');
				}
				
                if (winWidth >= 768 && winWidth < 992){
					$('.item').removeClass('col-sm-3');
					$('.card.mb-30.tarjeta_new').removeClass('clase_card_mb-30_tarjeta_new_768');
					$('#lista_eventos').css('width','25%');
				}				
			}
		});
	});
				
  // initialize Account Kit with CSRF protection
  	$('#userProfile').change(function () {
  		var userProfile = $('#userProfile').val();

  		$('#loginEmail').attr('readonly', false);
  		$('#loginPassword').attr('readonly', false);

  	})

  	$('#userProfile1').change(function () {
  		var userProfile = $('#userProfile').val();

  		$('#loginEmail1').attr('readonly', false);
  		$('#loginPassword1').attr('readonly', false);

  	})
	function confirmarcambio(){
		var codigo = $('#codigorecuperar').val();
		var pass = $('#passrecuperar').val();
		$.post('subpages/Conciertos/cambiarcontrasena.php',{
			codigo : codigo, pass : pass
		}).done(function(response){
			
			if($.trim(response) == '1'){
				alert('su contraseña a sido cambiada con éxito');
				window.location='';
				$('#btnokcambio').fadeOut('slow');
				$('#cambiook').modal('show');
				$('#nuevacontrasena').modal('hide');
			}else{
				alert('el codigo ingresado es incorrecto');
			}
		});
	}
	
  	function resetPassword(){
  		var mail = $('#resetEmail').val();
  		if (mail == '') {
  			alert('Debe ingresar un correo!');
  		}else{
			$('#resetPassword').attr('disabled',true);
			$('#resetPassword').html('Espere !!!');
			
  			$.post('subpages/Conciertos/recuperarcontrasena.php',{mail : mail}).done(function(response){
				if($.trim(response) == 'ok'){
					alert('Hemos enviado un mail a su cuenta!');
					$('#nuevacontrasena').modal('show');
					$('#myModalReset').modal('hide');
					$('#resetPassword').attr('disabled',false);
					$('#resetPassword').html('Enviar');
				}else if($.trim(response) == 'error'){
					alert('Asegurese que el email ingresado se encuentre registrado en el sistema!');
					window.location = '';
				}
			});
  		}
  	}
	
  	function recuperarContrasena() {
  		$('#myModalReset').modal('show');
  	}
	
  	function recuperarUsuario() {
  		$('#recuperarnombre').modal('show');
  	}
      
    function aceptarnombre(){
	    var cedula = $('#cedularecuperar').val();
		var anio = $('#aniorecuperar').val();
		var mes = $('#mesrecuperar').val();
		var dia = $('#diarecuperar').val();
		var celular = $('#celularrecuperar').val();
		$.post('subpages/Conciertos/cambiarnombre.php',{
			cedula : cedula, anio : anio, mes : mes, dia : dia, celular : celular
		}).done(function(response){
			if($.trim(response) != 'error'){
				$('#nombreok').modal('show');
				$('#userrecuperado').html(response);
				$('#recuperarnombre').modal('hide');
			}else{
				$('#errorvalidacion').modal('show');
			}
		});
	}

	function esocgermodulo(id){
		window.location = 'subpages/validarmodulo.php?id='+id;
	}

	function aceptarModalerror(){
		if($('#alerta3').is(':visible')){
			 window.location = '?modulo=validarUsuarioA';
		}
		$('#imgif').fadeOut('slow');
		$('#aceptar').fadeIn('slow');
		$('#cancelar').fadeIn('slow');
	}
	
	function aceptarModalbienvenida(){
		if($('#btn1').is(':visible')){
			if ($('#tipo_usu').val() == ''){
				window.location = '/ticket2developer/ticket/?modulo=start';
			}else if ($('#tipo_usu').val() == 'cliente'){
				if($('.asientosescogidos').length > 0){
					window.location = '?modulo=compra';
				}else{
					//window.location = '';
					window.location = '?modulo=start';
				}
			}
		}else if($('#btn2').is(':visible')){
			// window.location = '';
		}else if($('#btn3').is(':visible')){
			window.location = 'spadmin/PerSeguridad/ingresoseguridad.php';
		}else if($('#btn4').is(':visible')){
			window.location = '/ticket2developer/ticket/demo.php?ingresoSocio';
			//window.location = 'https://www.ticketfacil.ec/ticket2developer/ticket/?modulo=ingresoSocio';
		}else if($('#btn5').is(':visible')){
			// window.location = '';
		}else if($('#btn6').is(':visible')){
			window.location = '/ticket2developer/ticket/demo.php?modulo=ingresoAdt';
		}else if($('#btn7').is(':visible')){
			window.location = '/ticket2developer/ticket/demo.php?modulo=ingresoDis';
		}else if($('#btn8').is(':visible')){
			window.location = '/ticket2developer/ticket/demo.php?modulo=ingresoAdministrador';
		}
	}
 
    function enviarLogin() {
    	var encodee = $('#encodee').val();
		var variable1 = $('#variable1').val();
		//var userProfile = $('#userProfile').val();
  		if ($('#loginEmail').val() == '') {
  			alert('Debe ingresar un usuario!');
  		}else if($('#loginPassword').val() == ''){
  			alert('Debe ingresar un password');
  		}else{
			var usercli = $('#loginEmail').val();
			var passcli = $('#loginPassword').val();
			var user = '';
			var pass = '';
			
			$.post('subpages/verificar_login.php',{
				usercli : usercli, passcli : passcli
			}).done(function(data){
				var user = '';
				var pass = '';
				var usercli = '';
				var passcli = '';
				if (data != 'usuario' && data != 'cliente'){
					alert(data);
					//window.location = '';
					return false;
				}else if (data == 'usuario'){
					user = $('#loginEmail').val();
					usercli = '';
					pass = $('#loginPassword').val();
					passcli = '';
					$('#tipo_usuario').val('usuario');
					//alert('eres usuario');
				}else if (data == 'cliente'){
					$('#tipo_usu').val('cliente');
					user = '';
					usercli = $('#loginEmail').val();
					pass = '';
					passcli = $('#loginPassword').val();
					$('#tipo_usuario').val('cliente');
					//alert('eres cliente');
				}
				
    			$.post('controlusuarios/control.php', {
					user : user, pass : pass, usercli: usercli, passcli : passcli
				}).done(function (data) {
					/*if($.trim(data) == 'errorchange' || $.trim(data) == 'errorcli' || $.trim(data) == 'inactivo' || $.trim(data) == 'errorcli' || $.trim(data) == 'error') {
						alert('No se pudo iniciar sesion, verifique los datos e intente de nuevo!');
					}else{
						f ($('#tipo_usuario').val() == 'usuario'){
							switch (data){
								case 'ok1':  
						}else{
							if($('.asientosescogidos').length > 0){
								window.location = '?modulo=compra';
							}else{
								window.location = '';
							}
						}
						
					}*/
					$('#myModal').fadeOut('slow');
					if($.trim(data) == 'okcli'){
						setTimeout("$('#btn1').fadeIn(); $('#bienvenida').modal('show');",1000);
					}else if($.trim(data) == 'errorcli'){
						setTimeout("$('#alerta1').fadeIn(); $('#error').modal('show');",1000);
					}else if($.trim(data)=='ok1'){
						if(user==variable1){
                          esocgermodulo(encodee);
						}else{
						   setTimeout("$('#modulo').modal('show');",1000);	
						}
						//setTimeout("$('#modulo').modal('show');",1000);
					}else if($.trim(data)=='ok2'){
						setTimeout("$('#btn3').fadeIn(); $('#bienvenida').modal('show');",1000);
					}else if($.trim(data)=='ok3'){
						setTimeout("$('#btn4').fadeIn(); $('#bienvenida').modal('show');",1000);
					}else if($.trim(data)=='ok4'){
                            if(user==variable1){
                          esocgermodulo(encodee);
						}else{
						   setTimeout("$('#modulo').modal('show');",1000);	
						}
						//setTimeout("$('#modulo').modal('show');",1000);
					}else if($.trim(data) == 'error'){
						setTimeout("$('#alerta1').fadeIn(); $('#error').modal('show');",1000);
					}else if($.trim(data) == 'errorchange'){
						setTimeout("$('#alerta1').fadeIn(); $('#error').modal('show');",1000);
					}else if($.trim(data) == 'inactivo'){
						setTimeout("$('#alerta2').fadeIn(); $('#error').modal('show');",1000);
					}else if($.trim(data) == 'changeok'){
						setTimeout("$('#alerta3').fadeIn(); $('#error').modal('show');",1000);
					}else if($.trim(data) == 'ok5'){
						setTimeout("$('#btn6').fadeIn(); $('#bienvenida').modal('show');",1000);
					}else if($.trim(data) == 'ok6'){
						setTimeout("$('#btn7').fadeIn(); $('#bienvenida').modal('show');",1000);
					}else if($.trim(data) == 'ok7'){
						setTimeout("$('#btn8').fadeIn(); $('#bienvenida').modal('show');",1000);
					}else{
						alert(data);
					}
				});
			});
  			/*if (userProfile == 0) {
	  			alert('Debe ingresar un tipo de usuario!');
	  		}else if (userProfile == 1) {
	  			var user = $('#loginEmail').val();
				var pass = $('#loginPassword').val();
				var usercli = '';
				var passcli = '';
	  		}else{
	  			var user = '';
				var pass = '';
				var usercli = $('#loginEmail').val();
				var passcli = $('#loginPassword').val();

	  		}
			$.post('controlusuarios/control.php', {
				user : user, pass : pass, usercli: usercli, passcli : passcli
			}).done(function (data) {
				if($.trim(data) == 'errorchange' || $.trim(data) == 'errorcli' || $.trim(data) == 'inactivo' || $.trim(data) == 'errorcli' || $.trim(data) == 'error') {
					alert('No se pudo iniciar sesion, verifique los datos e intente de nuevo!');
				}else{
					if($('.asientosescogidos').length > 0){
						window.location = '?modulo=compra';
					}else{
						window.location = '';
					}
				}
			})*/
  		}
  	}

  	function enviarLogin1() {
  		var userProfile = $('#userProfile1').val();
  		if ($('#loginEmail1').val() == '') {
  			alert('Debe ingresar un usuario!');
  		}else if($('#loginPassword1').val() == ''){
  			alert('Debe ingresar un password');
  		}else{
  			if (userProfile == 0) {
	  			alert('Debe ingresar un tipo de usuario!');
	  		}else if (userProfile == 1) {
	  			var user = $('#loginEmail1').val();
				var pass = $('#loginPassword1').val();
				var usercli = '';
				var passcli = '';
	  		}else{
	  			var user = '';
				var pass = '';
				var usercli = $('#loginEmail1').val();
				var passcli = $('#loginPassword1').val();

	  		}
			$.post('controlusuarios/control.php', {
				user : user, pass : pass, usercli: usercli, passcli : passcli
			}).done(function (data) {
				if($.trim(data) == 'errorchange' || $.trim(data) == 'errorcli' || $.trim(data) == 'inactivo' || $.trim(data) == 'errorcli' || $.trim(data) == 'error') {
					alert('No se pudo iniciar sesion, verifique los datos e intente de nuevo!');
				}else{
					window.location = '?modulo=compra';
				}
			})
  		}
  	}

    function creaCuenta(){
        window.location = '?modulo=crearCuenta';
    }
	 
    function creaCuentaCompra(){
        window.location = '?modulo=crearCuentaCompra';
    }


  	function ingresar() {  
		FB.login(function(response){  
			validarUsuario();  
		}, {scope: 'email'});  
	}
	
	function validarUsuario() {
		var con = $('#con').val();
		var pos = $('#pos').val();
		FB.getLoginStatus(function(response) {  
			if(response.status == 'connected') {  
				FB.api(
					'/me',
					'GET',
					{"fields":"id,name,email,birthday,gender,permissions"},
					function(response) {
						var id_face = response.id;
						var email_face = response.email;
						var nombre = response.name;
						var birthday = response.birthday;
						var gender = response.gender;
						var permisos = response.permissions;
						//window.location = 'https://www.ticketfacil.ec/luis_developer/ticket/index.php?modulo=compra';
						$.post("autenticaFb.php",{ 
							id_face : id_face , email_face : email_face , nombre : nombre , birthday : birthday , gender : gender
						}).done(function(data){
							if($('.asientosescogidos').length > 0){
								window.location = '?modulo=compra';
							}else{
								window.location = '';
							}
							// window.location = '?modulo=perfil';
						});
					},
				);
			} else if(response.status == 'not_authorized') {  
				alert('Debes autorizar la app!');  
			} else {  
				alert('Debes ingresar a tu cuenta de Facebook!');  
			}  
		});  
    }

    function ingresar1() {  
		FB.login(function(response){  
			validarUsuario1();  
		}, {scope: 'email'});  
	}
	
	function validarUsuario1() {
		var con = $('#con').val();
		var pos = $('#pos').val();
		FB.getLoginStatus(function(response) {  
			if(response.status == 'connected') {  
				FB.api(
					'/me',
					'GET',
					{"fields":"id,name,birthday,email,gender,permissions"},
					function(response) {
						var id_face = response.id;
						var email_face = response.email;
						var nombre = response.name;
						var birthday = response.birthday;
						var gender = response.gender;
						//window.location = 'https://www.ticketfacil.ec/luis_developer/ticket/index.php?modulo=compra';
						$.post("autenticaFb.php",{ 
							id_face : id_face , email_face : email_face , nombre : nombre , birthday : birthday , gender : gender
						}).done(function(data){
							if($('.asientosescogidos').length > 0){
								window.location = '?modulo=compra';
							}else{
								window.location = '';
							}
						});
					}
				);
			} else if(response.status == 'not_authorized') {  
				alert('Debes autorizar la app!');  
			} else {  
				alert('Debes ingresar a tu cuenta de Facebook!');  
			}  
		});  
    }

    function editarPerfil(){
        	window.location = '?modulo=identificate';
    }
    
	function enviar(){
		var nombres = $('#nombre').val();
		var documento = $('#documento').val();
		var birthday = $('#birthday').val();
		var genero = $('#genero').val();
		var mail = $('#mail').val();
		var pass = $('#password').val();
		var movil = $('#tmov').val();
		var direccion = $('#direccion').val();

		if (nombres == '' || documento == '' || birthday == '' || mail == '' || pass == '' || movil == '') {
			alert('Debe insertar todos los datos obligatorios!');
		}else{
			$.post('subpages/newaccount1.php',{
				nombres : nombres, documento : documento, birthday: birthday, genero : genero, mail : mail, pass : pass, movil : movil
			}).done(function(data){
				if (data == 'error') {
					alert('Este usuario ya existe!')
				}else{
					var user = data.split("-");
					var name = user[0];
					var email = user[1];
					alert('Sesion Iniciada!');
					$('#xx').html(email);
				    $('#xx').attr('onclick','');
				    $('#yy').html(name);
				    $('#yy').attr('onclick','');
				    $('#zz').css('display','block');
				    $('#yeah').css('display','block');
				    $('#myModal1').modal('hide');
				}
			});
		}
	}
	
    function onFailure(error) {
      alert(error);
    }

    // function renderButton() {
	    // gapi.signin2.render('my-signin2', {
		    // 'scope': 'profile email',
		    // 'width': 240,
		    // 'height': 50,
		    // 'longtitle': true,
		    // 'theme': 'dark',
		    // 'onsuccess': onSuccess,
		    // 'onfailure': onFailure
	    // });
    // }

	/*function signOut() {
	    var auth2 = gapi.auth2.getAuthInstance();
	    auth2.signOut().then(function () {
	        $('#xx').html('Login');
	        $('#xx').attr('onclick','$("#myModal").modal("show");');
	        $('#yy').html('Register');
	        $('#yy').attr('onclick','$("#myModal1").modal("show");');
	        $('#yeah').css('display','none');
	        $.post("closeSession.php", 
	        	{close:1}
	        ).done(function(data){
	        	$('#justp').val('no');
	        	setTimeout(function(){location.href="index.php?modulo=start";},100);
	        });
	    });
	  
	}*/
	function openNav() {
	    document.getElementById("mySidenav").style.width = "70%";
	    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	}

	function closeNav() {
	    document.getElementById("mySidenav").style.width = "0";
	    document.body.style.backgroundColor = "rgba(0,0,0,0)";
	}
	
	function envia_contacto(){
		var nombre = $('#nombre_contacto').val();
		var email = $('#email_contacto').val();
		var telefono = $('#asunto_contacto').val();
		//var evento = $('#evento').val();
		var ciudad = '';
		var mensaje = $('#mensaje_contacto').val();
		// var lugar = $('#lugar').val();
		// var fecha = $('#fecha').val();
		// var cantidad = $('#cantidad').val();
				
		// var selected = '';    
        // $('input[type=checkbox]').each(function(){
            // if (this.checked) {
                // selected += $(this).val()+'@';
            // }
        // }); 
		// var valores_servicio = selected.substring(0,selected.length -1);
		
		// alert('Has seleccionado: '+valores_servicio);  
        // if (selected != '') 
            // alert('Has seleccionado: '+selected);  
        // else
            // alert('Debes seleccionar al menos una opción.');
		if(nombre == ''){
			alert('Debe ingresar un Nombre');
		}
		
		if(email == ''){
			alert('Debe ingresar un Email');
		}
		
		if(telefono == ''){
			alert('Debe ingresar un asunto');
		}
		
		if(mensaje == ''){
			alert('Debe ingresar un mensaje');
		}
		
		// if(lugar == ''){
			// alert('Debe ingresar un Lugar');
		// }
		
		// if(fecha == ''){
			// alert('Debe ingresar una Fecha del Evento');
		// }
		
		// if(cantidad == ''){
			// alert('Debe ingresar una Cantidad de tickets');
		// }
		
		if(nombre == '' || email == '' || telefono == '' || mensaje == '' ){
			
		}else{
			$('#btn_contacto').html('Espere, enviando informacion');
			$('#btnCotizar').css('display','none');
			$('#btnLoad').css('display','block');
			$.post("envioEmailCotizar2.php",{ 
				nombre : nombre , email : email , telefono : telefono ,  mensaje : mensaje
			}).done(function(data){
				$('#btn_contacto').html('cotizar');
				$('#ver_sms_cotizar').modal('show');
				$('#recibe_cotizar').html(data);
				
				setTimeout(function(){
					location.reload();
				}, 8000);
			});
		}
	}
	
	function envia(){
		var nombre = $('#nombre').val();
		var email = $('#email').val();
		var telefono = $('#telefono').val();
		var evento = $('#evento').val();
		var ciudad = $('#ciudad').val();
		var lugar = $('#lugar').val();
		var fecha = $('#fecha').val();
		var cantidad = $('#cantidad').val();
		
		
		var selected = '';    
        $('input[type=checkbox]').each(function(){
            if (this.checked) {
                selected += $(this).val()+'@';
            }
        }); 
		var valores_servicio = selected.substring(0,selected.length -1);
		
		if(nombre == ''){
			alert('Debe ingresar un Nombre de Empresario');
		}
		
		if(email == ''){
			alert('Debe ingresar un Email de Empresario');
		}
		
		if(telefono == ''){
			alert('Debe ingresar un Telefono de Empresario');
		}
		
		if(evento == ''){
			alert('Debe ingresar un Nombre de Evento');
		}
		
		if(ciudad == ''){
			alert('Debe ingresar una Ciudad');
		}
		
		if(lugar == ''){
			alert('Debe ingresar un Lugar');
		}
		
		if(fecha == ''){
			alert('Debe ingresar una Fecha del Evento');
		}
		
		if(cantidad == ''){
			alert('Debe ingresar una Cantidad de tickets');
		}
		
		if(nombre == '' || email == '' || telefono == '' || evento == '' || ciudad == '' || lugar == '' || fecha == '' || cantidad == ''){
			
		}else{
			$('#btn_cotiza').html('Espere, enviando informacion');
			$('#btnCotizar').css('display','none');
			$('#btnLoad').css('display','block');
			$.post("envioEmailCotizar.php",{ 
				nombre : nombre , email : email , telefono : telefono , evento : evento , ciudad : ciudad ,
				lugar : lugar , fecha : fecha , cantidad : cantidad , valores_servicio : valores_servicio
			}).done(function(data){
				$('#btn_cotiza').html('cotizar');
				$('#ver_sms_cotizar').modal('show');
				$('#recibe_cotizar').html(data);
				
				setTimeout(function(){
					location.reload();
				}, 8000);
			});
		}
	}
	
	$( function() {
	    var height = $(window).height();
		var height_2 = (parseInt(height) - 200);
		$('.imagenes_banner').css('max-height',height_2);
		$('.entero').numeric();
		$( "#fecha" ).datepicker();
		$.datepicker.regional['es'] = {
			closeText: 'Cerrar',
			prevText: '<Ant',
			nextText: 'Sig>',
			currentText: 'Hoy',
			monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
			monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
			dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
			dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
			dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
			weekHeader: 'Sm',
			dateFormat: 'yy/mm/dd',
			minDate: +1,
		};
		$.datepicker.setDefaults($.datepicker.regional['es']);
	} );
	 