	
	onDeviceReady();
	function onDeviceReady(){
		var db = window.openDatabase("Database", "1.0", "TicketMobileWeb", 200000);
		db.transaction(iniciaDB, errorCB, successCB);
		console.log(db);
	} 

	function iniciaDB(tx){
		var db = window.openDatabase("Database", "1.0", "TicketMobileWeb", 200000);
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS concieto (id integer primary key AUTOINCREMENT,idConcierto integer , dateFecha text , strLugar text,timeHora text,strEvento text,strImagen text , thumbnail text , strDescripcion text , es_publi integer , cadena text,tipo text )');
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS localidad (id integer primary key AUTOINCREMENT,idLocalidad integer UNIQUE ,idConcierto integer , strDescripcionL text,doublePrecioL text)');
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS cliente (id integer primary key AUTOINCREMENT,idcliente integer UNIQUE,nombre text , email text,cedula text)');
		
		
	}

	function errorCB(err){
		console.log("Error processing SQL: "+err.message);
	}

	function successCB() {
		console.log("success!");
	}


	function saberSesion(){
		// alert('hola')
		var db = window.openDatabase("Database", "1.0", "TicketMobileWeb", 200000);
		db.transaction(function(tx){
			tx.executeSql('select count(id) as cuantos , nombre from cliente;',[],function(tx,results){
				var registros = results.rows.length;
				var datos = '';
				for(var i = 0; i < registros; i++){
					var row = results.rows.item(i);
					var cuantos = row.cuantos;
					var nombre = row.nombre;
					if(cuantos > 0){
						console.log('ya esta el cliente : ' + nombre);
					}else{
						console.log('no hay cliente');
						$('#myModal').modal('show');
					}
				}	
			},errorCB,successCB);
		});
	}
	function insertaCliente(idcliente,nombre,email,cedula){
		var db = window.openDatabase("Database", "1.0", "TicketMobileWeb", 200000);
		db.transaction(function(tx){
			tx.executeSql("INSERT OR IGNORE INTO cliente (idcliente ,nombre,email,cedula) VALUES (?,?,?,?)",[idcliente,nombre,email,cedula]);
			setTimeout("$('#btn1').fadeIn(); $('#bienvenida').modal('show');",1000);
		},errorCB,successCB);
	}
	
	function bajarDatos(){
		$.post('https://www.ticketfacil.ec/ticket2developer/ticket/apiWeb/bajarDatos.php', {
		}).done(function (data) {
			var obj=jQuery.parseJSON(data);
			
			// var db = window.openDatabase("Database", "1.0", "TicketMobileWeb", 200000);
			// db.transaction(function(tx){
				var idd = 1000;
				
				for(i=0; i<= (obj.Eventos.length); i++){
					// setTimeout(function(){	
						var idConcierto = obj.Eventos[i].idConcierto; 
						var dateFecha = obj.Eventos[i].dateFecha; 
						var strLugar = obj.Eventos[i].strLugar; 
						var timeHora = obj.Eventos[i].timeHora; 
						var strEvento = obj.Eventos[i].strEvento; 
						var strImagen = obj.Eventos[i].strImagen;  
						var thumbnail = obj.Eventos[i].thumbnail; 
						var strDescripcion = obj.Eventos[i].strDescripcion; 
						var es_publi = obj.Eventos[i].es_publi; 
						var cadena = obj.Eventos[i].cadena; 
						var tipo = obj.Eventos[i].tipo; 
						
						jsHello(i,idConcierto,dateFecha,strLugar,timeHora,strEvento,strImagen,thumbnail,strDescripcion,es_publi,cadena,tipo)
						
						
					
						// tx.executeSql("INSERT INTO concieto (idConcierto,dateFecha,strLugar,timeHora,strEvento,strImagen,thumbnail,strDescripcion,es_publi,cadena,tipo) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[idConcierto,dateFecha,strLugar,timeHora,strEvento,strImagen,thumbnail,strDescripcion,es_publi,cadena,tipo]);
					// }, 1000);
				}
			// },errorCB,successCB);
		}).fail(function(xhr, status, error) {
			alert(status  + ' >><< ' +  error)
		});	
		
	}
	 
	function jsHello(i,idConcierto,dateFecha,strLugar,timeHora,strEvento,strImagen,thumbnail,strDescripcion,es_publi,cadena,tipo) {
		if (i < 0) return;

		setTimeout(function () {
			// alert(idConcierto)
			if( idConcierto != 'undefined'){
				var db = window.openDatabase("Database", "1.0", "TicketMobileWeb", 200000);
				db.transaction(function(tx){
					tx.executeSql('select count(idConcierto) as cuantos from concieto where idConcierto = ? and tipo = ? ',[idConcierto,''+tipo+''],function(tx,res){
						var registros = res.rows.length;
						var row = res.rows.item(0);
						var cuantos = row.cuantos;
						if(cuantos == 0 ){ //OR IGNORE 
							
							var db = window.openDatabase("Database", "1.0", "TicketMobileWeb", 200000);
							db.transaction(function(tx){
								tx.executeSql("INSERT INTO concieto (idConcierto,dateFecha,strLugar,timeHora,strEvento,strImagen,thumbnail,strDescripcion,es_publi,cadena,tipo) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[idConcierto,dateFecha,strLugar,timeHora,strEvento,strImagen,thumbnail,strDescripcion,es_publi,cadena,tipo]);
							},errorCB,successCB);
							
						}else{
							// console.log('el evento : ' + idConcierto + 'ya esta en la base :-) ' );
						}
					});
				},errorCB,successCB);
			

				jsHello(--i);
			}

		}, 1000);
	}
	function contruyeBanner(){
		//listaBanner   
		var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
		db.transaction(function(tx){
			tx.executeSql('SELECT * FROM concieto where tipo = ? order by dateFecha desc;',['proximos'],function(tx,results){
				var registros = results.rows.length;
					var datos = '';
					var html = '';
					if(registros > 0){
						for(var i = 0; i < registros; i++){
							var row = results.rows.item(i);
							var thumbnail = row.thumbnail;
							var strEvento = row.strEvento;
							var idConcierto = row.idConcierto;
							var strLugar = row.strLugar;
							var dateFecha = row.dateFecha;
							var timeHora = row.timeHora;
							
							html += '\
									<div id="evento_a_ver" class="col-xs-12 col-sm-3 evento_a_ver" onmouseover="swapColors('+idConcierto+')" onmouseout="swapColors('+idConcierto+')">\
										<div class="card mb-30 tarjeta_new tarjeta_new'+idConcierto+'" style="position: relative; padding-bottom: 0px; background-color: rgba(0, 0, 0, 0); color: rgb(51, 51, 51);">\
											<a class="card-img-tiles" href="?modulo=evento&amp;con='+idConcierto+'">\
												<div class="inner">\
													<div class="main">\
														<img src="'+thumbnail+'" alt="'+strEvento+'">\
													</div>\
												</div>\
											</a>\
											<div class="card-body text-center" style="margin-bottom: 6px;"><br>\
												<h4 id="colorBlanco" class="card-title" style="position: relative;top: -18px; height:38px;">'+strEvento+'</h4>\
												<!--<p id="textoPar" class="textoPar textoPar'+idConcierto+'" style="position: relative;top: -19px;font-size: 13px;"><i class="fa fa-globe" aria-hidden="true"></i>'+strLugar+'</p>\
												<p id="textoPar" class="textoPar textoPar'+idConcierto+'" style="position: relative;top: -18px;">\
													<i  class="fa fa-calendar" aria-hidden="true"></i>'+dateFecha+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
													<i class="fa fa-clock-o" aria-hidden="true"></i>'+timeHora+'\
												</p>-->\
												<a id="titull" class="titull titull'+idConcierto+'" style="padding: 5px; display: inline-block; color: rgb(51, 51, 51); border-color: rgb(51, 51, 51);" href="?modulo=evento&amp;con='+idConcierto+'">Comprar <i class="fa fa-shopping-basket" aria-hidden="true"></i></a>\
											</div>\
										</div>\
									</div>';
							// console.log('evento : ' + strEvento);
						}
					}
					$('#contenido_prox_eventos').html(html);
			},errorCB,successCB);
		});
		
		
		
		
		
		
		var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
		db.transaction(function(tx){
			tx.executeSql('SELECT * FROM concieto where tipo = ? order by dateFecha desc;',['chiqui'],function(tx,results){
				var registros = results.rows.length;
					var datos = '';
					var html1 = '';
					if(registros > 0){
						for(var i = 0; i < registros; i++){
							var row = results.rows.item(i);
							var thumbnail = row.thumbnail;
							var strEvento = row.strEvento;
							var idConcierto = row.idConcierto;
							var strLugar = row.strLugar;
							var dateFecha = row.dateFecha;
							var timeHora = row.timeHora; 
							
							html1 += '<div id="item-css" class="item col-xs-12"><a href="?modulo=evento&amp;con='+idConcierto+'"><img src="'+thumbnail+'" alt="'+strEvento+'"></a></div>';
							// console.log('evento : ' + strEvento);
						}
					}
					$('#lista_eventos').html(html1);
			},errorCB,successCB);
		});
		
		
		
		var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
		db.transaction(function(tx){
			tx.executeSql('SELECT * FROM concieto where tipo = ? order by dateFecha desc;',['banner'],function(tx,results){
				var registros = results.rows.length;
					var datos = '';
					var html = '';
					if(registros > 0){
						for(var i = 0; i < registros; i++){
							var row = results.rows.item(i);
							var thumbnail = row.thumbnail;
							var strEvento = row.strEvento;
							var idConcierto = row.idConcierto;
							var strLugar = row.strLugar;
							var dateFecha = row.dateFecha;
							var timeHora = row.timeHora;
							
							html += '<div ><center><img  style="position: relative;top: 6px;width:98%;" class="img-fluid" src="'+thumbnail+'"/></center></div>';
							// console.log('evento : ' + strEvento);
						}
					}
					$('#eventos_banner').html(html);
			},errorCB,successCB);
		});
	
		
		var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
		db.transaction(function(tx){
			tx.executeSql('SELECT * FROM concieto where tipo = ? order by dateFecha desc;',['realizados'],function(tx,results){
				var registros = results.rows.length;
					var datos = '';
					var html = '';
					if(registros > 0){
						for(var i = 0; i < registros; i++){
							var row = results.rows.item(i);
							var thumbnail = row.thumbnail;
							var strEvento = row.strEvento;
							var idConcierto = row.idConcierto;
							var strLugar = row.strLugar;
							var dateFecha = row.dateFecha;
							var timeHora = row.timeHora;
							
							html += '\
										<div class="evento_realizado col-xs-12 col-sm-3">\
											<div class="item">\
												<img id="evento'+idConcierto+'" src="'+thumbnail+'" onmouseover="verInfo('+idConcierto+', 1)" onmouseout="verInfo('+idConcierto+', 2)" />\
												<div id="caption'+idConcierto+'" class="caption" style="display;" onmouseover="verInfo('+idConcierto+', 1)" onmouseout="verInfo('+idConcierto+', 1)">\
													<a href="?modulo=publicacion&con='+idConcierto+'">\
														<i class="fa fa-plus" aria-hidden="true"></i>\
													</a>\
													<p><strong>'+strEvento+'</strong></p>\
												</div>\
											</div>\
										</div>\
									';
							// console.log('evento : ' + strEvento);
						}
					}
					$('#contenido_eventos_realizados').html(html);
			},errorCB,successCB);
		});
		
		var db = window.openDatabase("Database", "1.0", "TicketMobile", 200000);
		db.transaction(function(tx){
			tx.executeSql('delete from concieto where idConcierto = ? ',['undefined'],function(tx,results){
			},errorCB,successCB);
		});
		setTimeout(function(){
			$('#modalCargando').modal('hide');
		}, 1000);
		
	} 
	