<html>
<head>
	<meta charset="utf-8">
	<title>Ejemplo de notificaciones</title>
</head>
<body>
	<button onclick="notificar();" >Enviar notificación</button>
	
	<script>
		if(Notification.permission !== "granted"){
			Notification.requestPermission();
		}
		
		function notificar(){
			if(Notification.permission !== "granted"){
				Notification.requestPermission();
			}else{
				var notificacion = new Notification("Titulo",
					{
						icon: "https://jonathanmelgoza.com/wp-content/themes/jonathanmelgoza/images/header_menu_rs_btn.png",
						body: "Texto de la notificación"
					}
				);
				
				notificacion.onclick = function(){
					window.open("https://jonathanmelgoza.com/blog/");
				}
			}
		}
	</script>
</body>
</html>