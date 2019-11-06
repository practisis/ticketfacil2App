<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<style>
	#verProducto {
		background-color: rgba(0, 0, 0, 0.5);
		display: none;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 96%;
		z-index: 200;
		-webkit-border-radius: 20px;
		-moz-border-radius: 20px;
		border-radius: 20px;
		left:2%;
	}
	#producto{
		width:95%;
		height:100%;
		border-radius:20px;
		border:1px dotted #DDDDDD;
		-webkit-box-shadow: 3px 3px 6px 0px rgba(50, 50, 50, 0.75);
		-moz-box-shadow:    3px 3px 6px 0px rgba(50, 50, 50, 0.75);
		box-shadow:         3px 3px 6px 0px rgba(50, 50, 50, 0.75);
		cursor:pointer;
	}
	#contieneDescripcionProducto{
		width:90%;
		height:90%;
		background-color:#fff;
		-webkit-border-radius: 20px;
		-moz-border-radius: 20px;
		border-radius: 20px;
	}
	#enviar table{
		width:150px;
		height:50px;
		background-color:#079A60;
		color:#fff;
		-webkit-border-radius: 10px;
		-moz-border-radius: 10px;
		border-radius: 10px;
	}
</style>
<table width='90%' height='100%' cellspacing='0' cellpadding='0' border='0' style='border-collapse:collapse;font-family:Arial;' align='center'>
	<tr>
		<td colspan='2' height='50px' style='background-color:#2E2925;'>
			
		</td>
		<td valign='middle' align='center' style='background-color:#2E2925;'>
			<table width='60%' cellspacing='5' style='color:#fff;'>
				<tr>
					<td width='50%' style='border-right:1px solid red;cursor:pointer;' valign='middle' align='center'>
						<img src='../images/icon_basket.png' border='0'/>Cesta
					</td>
					<td width='50%' style='cursor:pointer;' valign='middle' align='center'>
						<img src='../images/icon_checkout.png' border='0'/>Pago
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td valign='top' align='left' width='20%'>
			<br/>
			<table width='95%' height='auto' cellpadding='0' border='0' cellspacing='0' style='border-collapse:collapse;'>
				<tr>
					<td valign='middle' align='left' style='font-size:20px;font-weight:bolder;'>
						<div style='width:95%;height:100%;border-radius:20px;border:1px dotted #DDDDDD;padding-left:10px;'>
							CATEGORIAS<br/><br/>
						<ul>
						<?php
							include '../enoc.php';
							$sql = "select * from category_description where language_id='1'";
							$res = mysql_query($sql)or die (mysql_error());
							while($row = mysql_fetch_array($res)){
							echo'<li id="'.$row['category_id'].'">'.$row['name'].'</li>';
							}
						?>
						</ul>
						</div>
					</td>
				</tr>
				<tr>
					<td height='20px'></td>
				</tr>
				<tr>
					<td valign='middle' align='left' style='font-size:20px;font-weight:bolder;'>
						<div style='width:95%;height:120px;border-radius:20px;border:1px dotted #DDDDDD;padding-left:10px;'>
							MARCAS<br/><br/>
						<select id='marcas'>
						<option value>--Seleccione--</option>
						<?php
							$sql = "select * from manufacturer ";
							$res = mysql_query($sql)or die (mysql_error());
							while($row = mysql_fetch_array($res)){
							echo'<option id="'.$row['manufacturer_id'].'" value="'.$row['manufacturer_id'].'">'.$row['name'].'</li>';
							}
						?>
						</ul>
						</div>
					</td>
				</tr>
				
			</table>
		</td>
		<td valign='top' align='center' width='80%'>
			<div id='recibeCarrito'></div>
			<div id="verProducto">
				<table width="100%" height="100%" align="center">
					<tr>
						<td width="100%" valign="middle" height="20px" align="right">
							<img border="0" onclick="cerrarActualizar()" src="../images/cerrar.png" style='cursor:pointer;'>
						</td>
					</tr>
					<tr>
						<td valign="middle" align="center" id='contieneDescripcionProducto'>
						</td>
					</tr>
				</table>
			</div>
		</td>
	</tr>
	<tr>
		<td valign='top' align='center' colspan='2' width='100%'>
			<iframe src='carrito.php' frameborder='0' width='100%' height='600px'></iframe>
		</td>
	</tr>
</table>

<script>
	function enviarPedido(id){
		var nombre = $('#nombre'+id).val();
		var precio = $('#precio'+id).val();
		var cantidad = $('#cantidad'+id).val();
		//alert(nombre +'@'+ precio +'@'+ cantidad);
		$.post('carrito.php',{
			nombre : nombre , precio : precio , cantidad : cantidad
		}).done(function(data){
			window.location='';
		});
		cerrarActualizar();
	}
	function cerrarActualizar(){
		$('#verProducto').fadeOut('slow');
	}
	function verDespcipcionProductos(id){
		var id_Producto = id;
		$('#verProducto').fadeIn('slow');
		$.post('contieneDescripcionProducto.php',{
			id_Producto : id_Producto
		}).done(function(data){
			$('#contieneDescripcionProducto').html(data);
		});
	}
	$.post('contieneCarrito.php',{
	
	}).done(function(data){
		$('#recibeCarrito').html(data);
	});
</script>