
function compruebaNombre () {
		
	// Variables del nombre
	var miNombre = document.getElementById("nombre").value;
	var patronNombre = new RegExp("[A-Za-z]");

	if (miNombre == "") {
		// Si el nombre está vacío, se muestra el texto oculto y el borde/imagen rojo
		document.getElementById("errorNombre").style.display = "block";
		document.getElementById("errorNombre").innerText = "Rellene este campo";
		document.getElementById("nombre").style.borderColor = "#A63939";
		document.getElementById("nombre").style.backgroundImage = "url(./images/error-icon.svg)";
		return false;
		
	} else {
		// Si el nombre no está vacío, se oculta el texto oculto y el borde/imagen de posibles pruebas anteriores
		document.getElementById("errorNombre").style.display = "none";
		document.getElementById("nombre").style.borderColor = "initial";
		document.getElementById("nombre").style.backgroundImage = "none";
		
		// Si el nombre no está vacío, se comprueba si tiene números
		if(patronNombre.test(miNombre) == false) {
			// Si el nombre tiene numeros, se muestra el texto oculto y el borde/imagen rojo
			document.getElementById("errorNombre").style.display = "block";
			document.getElementById("errorNombre").innerText = "El nombre no puede contener números";
			document.getElementById("nombre").style.borderColor = "#A63939";
			document.getElementById("nombre").style.backgroundImage = "url(./images/error-icon.svg)";
			return false;
			
		} else {
			// Si el nombre es correcto, se muestra el borde/imagen verde
			document.getElementById("nombre").style.borderColor = "#93D6A3";
			document.getElementById("nombre").style.backgroundImage = "url(./images/success-icon.svg)";
			return true;
		}
	}
}


function compruebaPrimerApellido () {
		
	// Variables del primer apellido
	var miPrimerApellido = document.getElementById("primerapellido").value;
	var patronPrimerApellido = new RegExp("[A-Za-z]");

	if (miPrimerApellido == "") {
		// Si el primer apellido está vacío, se muestra el texto oculto y el borde/imagen rojo
		document.getElementById("errorPrimerApellido").style.display = "block";
		document.getElementById("errorPrimerApellido").innerText = "Rellene este campo";
		document.getElementById("primerapellido").style.borderColor = "#A63939";
		document.getElementById("primerapellido").style.backgroundImage = "url(./images/error-icon.svg)";
		return false;
		
	} else {
		// Si el primer apellido no está vacío, se oculta el texto oculto y el borde/imagen de posibles pruebas anteriores
		document.getElementById("errorPrimerApellido").style.display = "none";
		document.getElementById("primerapellido").style.borderColor = "initial";
		document.getElementById("primerapellido").style.backgroundImage = "none";
		
		// Si el primer apellido no está vacío, se comprueba si tiene números
		if(patronPrimerApellido.test(miPrimerApellido) == false) {
			// Si el primer apellido tiene numeros, se muestra el texto oculto y el borde/imagen rojo
			document.getElementById("errorPrimerApellido").style.display = "block";
			document.getElementById("errorPrimerApellido").innerText = "El apellido no puede contener números";
			document.getElementById("primerapellido").style.borderColor = "#A63939";
			document.getElementById("primerapellido").style.backgroundImage = "url(./images/error-icon.svg)";
			return false;
			
		} else {
			// Si el primer apellido es correcto, se muestra el borde/imagen verde
			document.getElementById("primerapellido").style.borderColor = "#93D6A3";
			document.getElementById("primerapellido").style.backgroundImage = "url(./images/success-icon.svg)";
			return true;
		}
	}
}


function compruebaSegundoApellido () {
		
	// Variables del primer apellido
	var miSegundoApellido = document.getElementById("segundoapellido").value;
	var patronSegundoApellido = new RegExp("[A-Za-z]");

	if (miSegundoApellido == "") {
		// Si el segundo apellido está vacío, se muestra el texto oculto y el borde/imagen rojo
		document.getElementById("errorSegundoApellido").style.display = "block";
		document.getElementById("errorSegundoApellido").innerText = "Rellene este campo";
		document.getElementById("segundoapellido").style.borderColor = "#A63939";
		document.getElementById("segundoapellido").style.backgroundImage = "url(./images/error-icon.svg)";
		return false;
		
	} else {
		// Si el segundo apellido no está vacío, se oculta el texto oculto y el borde/imagen de posibles pruebas anteriores
		document.getElementById("errorSegundoApellido").style.display = "none";
		document.getElementById("segundoapellido").style.borderColor = "initial";
		document.getElementById("segundoapellido").style.backgroundImage = "none";
		
		// Si el segundo apellido no está vacío, se comprueba si tiene números
		if(patronSegundoApellido.test(miSegundoApellido) == false) {
			// Si el segundo apellido tiene numeros, se muestra el texto oculto y el borde/imagen rojo
			document.getElementById("errorSegundoApellido").style.display = "block";
			document.getElementById("errorSegundoApellido").innerText = "El apellido no puede contener números";
			document.getElementById("segundoapellido").style.borderColor = "#A63939";
			document.getElementById("segundoapellido").style.backgroundImage = "url(./images/error-icon.svg)";
			return false;
			
		} else {
			// Si el segundo apellido es correcto, se muestra el borde/imagen verde
			document.getElementById("segundoapellido").style.borderColor = "#93D6A3";
			document.getElementById("segundoapellido").style.backgroundImage = "url(./images/success-icon.svg)";
			return true;
		}
	}
}



function compruebaEmail () {
		
	// Variables del email
	var miEmail = document.getElementById("email").value;
	var patronEmail = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");

	if (miEmail == "") {
		// Si el email está vacío, se muestra el texto oculto y el borde/imagen rojo
		document.getElementById("errorEmail").style.display = "block";
		document.getElementById("errorEmail").innerText = "Rellene este campo";
		document.getElementById("email").style.borderColor = "#A63939";
		document.getElementById("email").style.backgroundImage = "url(./images/error-icon.svg)";
		return false;
		
	} else {
		// Si el email no está vacío, se oculta el texto oculto y el borde/imagen de posibles pruebas anteriores
		document.getElementById("errorEmail").style.display = "none";
		document.getElementById("email").style.borderColor = "initial";
		document.getElementById("email").style.backgroundImage = "none";
		
		// Si el email no está vacío, se comprueba si cumple el patrón
		if(patronEmail.test(miEmail) == false) {
			// Si el email no cumple el patrón, se muestra el texto oculto y el borde/imagen rojo
			document.getElementById("errorEmail").style.display = "block";
			document.getElementById("errorEmail").innerText = "Email inválido";
			document.getElementById("email").style.borderColor = "#A63939";
			document.getElementById("email").style.backgroundImage = "url(./images/error-icon.svg)";
			return false;
			
		} else {
			// Si el email cumple el patrón, se muestra el borde/imagen verde
			document.getElementById("email").style.borderColor = "#93D6A3";
			document.getElementById("email").style.backgroundImage = "url(./images/success-icon.svg)";
			return true;
		}
	}
}


function compruebaUsuario () {
		
	// Variables del login
	var miLogin = document.getElementById("usuario").value;
	var patronLogin = new RegExp("[A-Za-z0-9]");

	if (miLogin == "") {
		// Si el login está vacío, se muestra el texto oculto y el borde/imagen rojo
		document.getElementById("errorUsuario").style.display = "block";
		document.getElementById("errorUsuario").innerText = "Rellene este campo";
		document.getElementById("usuario").style.borderColor = "#A63939";
		document.getElementById("usuario").style.backgroundImage = "url(./images/error-icon.svg)";
		return false;
		
	} else {
		// Si el login no está vacío, se oculta el texto oculto y el borde/imagen de posibles pruebas anteriores
		document.getElementById("errorUsuario").style.display = "none";
		document.getElementById("usuario").style.borderColor = "initial";
		document.getElementById("usuario").style.backgroundImage = "none";
		
		// Si el login no está vacío, se comprueba si no cumple el patrón
		if(patronLogin.test(miLogin) == false) {
			// Si el login no cumple el patrón, se muestra el texto oculto y el borde/imagen rojo
			document.getElementById("errorUsuario").style.display = "block";
			document.getElementById("errorUsuario").innerText = "El login solo puede contener letras y números";
			document.getElementById("usuario").style.borderColor = "#A63939";
			document.getElementById("usuario").style.backgroundImage = "url(./images/error-icon.svg)";
			return false;
			
		} else {
			// Si el login es correcto, se muestra el borde/imagen verde
			document.getElementById("usuario").style.borderColor = "#93D6A3";
			document.getElementById("usuario").style.backgroundImage = "url(./images/success-icon.svg)";
			return true;
		}
	}
}


function compruebaContraseña () {
		
	// Variables de Password
	var miContraseña = document.getElementById("contraseña").value;

	if (miContraseña == "") {
		// Si el password está vacío, se muestra el texto oculto y el borde/imagen rojo
		document.getElementById("errorContraseña").style.display = "block";
		document.getElementById("errorContraseña").innerText = "Rellene este campo";
		document.getElementById("contraseña").style.borderColor = "#A63939";
		document.getElementById("contraseña").style.backgroundImage = "url(./images/error-icon.svg)";
		return false;
		
	} else {
		// Si el password no está vacío, se oculta el texto oculto y el borde/imagen de posibles pruebas anteriores
		document.getElementById("errorContraseña").style.display = "none";
		document.getElementById("contraseña").style.borderColor = "initial";
		document.getElementById("contraseña").style.backgroundImage = "none";
		
		// Si la contraseña no está vacía, se comprueba si tiene entre 4 y 8 caracteres. 

		if ( miContraseña.length > 8 || miContraseña.length < 4) {
			// Si el password tiene más de 8 caracteres o menos de 4, se muestra el texto oculto y el borde/imagen rojo
			document.getElementById("errorContraseña").style.display = "block";
			document.getElementById("errorContraseña").innerText = "Debe tener entre 4 y 8 caracteres";
			document.getElementById("contraseña").style.borderColor = "#A63939";
			document.getElementById("contraseña").style.backgroundImage = "url(./images/error-icon.svg)";
			return false;
			
		} else {
			// Si el password tiene entre 4 y 8 caracteres, se muestra el borde/imagen verde
			document.getElementById("contraseña").style.borderColor = "#93D6A3";
			document.getElementById("contraseña").style.backgroundImage = "url(./images/success-icon.svg)";
			return true;
		}
	}
}


// Vamos a detener la ejecución automática del PHP al enviar el formulario, para tratarla manualmente en el método enviar()
document.addEventListener("DOMContentLoaded", function() {
	var formulario = document.getElementById("formulario");
	formulario.addEventListener("submit", function(event) {
		event.preventDefault();
	})
})


function enviar () {
	
	// Llamamos a los 6 métodos anteriores
	var checkNombre = compruebaNombre();
    var checkPrimerApellido = compruebaPrimerApellido ();
    var checkSegundoApellido = compruebaSegundoApellido ();
	var checkEmail = compruebaEmail();
	var checkUsuario = compruebaUsuario();
	var checkContraseña = compruebaContraseña();
	
	// Si falla algo, se informa vía alerta
	if (checkNombre == false || checkPrimerApellido == false || checkSegundoApellido == false || checkEmail == false || checkUsuario == false || checkContraseña == false) {
		alert ("Hay campos vacios o con errores, revíselos.");
	// Si no falla nada, desde el propio HTML se pasan los parámetros al fichero PHP para que los inserte en la Base de Datos
	} else {
		alert ("Los campos insertados son correctos, pasamos a validarlo con la Base de Datos...");
		
		// Preparamos los datos para el envío manual al fichero PHP
		var envioDatos = new FormData();
		envioDatos.append("nombre",document.getElementById("nombre").value);
		envioDatos.append("primerapellido",document.getElementById("primerapellido").value);
		envioDatos.append("segundoapellido",document.getElementById("segundoapellido").value);
		envioDatos.append("email",document.getElementById("email").value);
		envioDatos.append("usuario",document.getElementById("usuario").value);
		envioDatos.append("contraseña",document.getElementById("contraseña").value);
		
		//Enviamos manualmente los datos al fichero PHP
		var llamadaPHP = new XMLHttpRequest();
		llamadaPHP.onreadystatechange = function() {
			if (llamadaPHP.readyState === XMLHttpRequest.DONE) {
				if (llamadaPHP.status === 200) {
					
					// Tratamos los posibles resultados de la ejecución del fichero PHP
					if (llamadaPHP.responseText.includes("Registro completado con éxito.")) {
						// Se muestra el resultado de la ejecución del fichero PHP
						alert(llamadaPHP.responseText);
						// Al registrarse correctamente, se limpia el formulario por si se desea hacer otro registro
						reseteo();
						// Se muestra el botón de consulta de usuarios
						document.getElementById("botonListado").style.display = "block";
					} else if (llamadaPHP.responseText.includes("El email introducido ya existe.")) {
						// Se muestra el resultado de la ejecución del fichero PHP indicando el error
						alert(llamadaPHP.responseText);
						document.getElementById("errorEmail").style.display = "block";
						document.getElementById("errorEmail").innerText = "El email introducido ya existe";
						document.getElementById("email").style.borderColor = "#A63939";
						document.getElementById("email").style.backgroundImage = "url(./images/error-icon.svg)";
					} else {
					// Se muestra el resultado de la ejecución del fichero PHP indicando el error
					alert(llamadaPHP.responseText);
					}
						
				} else {
					alert("Se ha producido un error no esperado al realizar el registro en la Base de Datos.");
				}
			}
		};
		llamadaPHP.open("POST", "formulario.php", true);
		llamadaPHP.send(envioDatos);
		
	}
}

function reseteo () {
	document.getElementById("formulario").reset();
	document.getElementById("errorNombre").style.display = "none";
	document.getElementById("nombre").style.borderColor = "initial";
	document.getElementById("nombre").style.backgroundImage = "none";
	document.getElementById("errorPrimerApellido").style.display = "none";
	document.getElementById("primerapellido").style.borderColor = "initial";
	document.getElementById("primerapellido").style.backgroundImage = "none";
	document.getElementById("errorSegundoApellido").style.display = "none";
	document.getElementById("segundoapellido").style.borderColor = "initial";
	document.getElementById("segundoapellido").style.backgroundImage = "none";
	document.getElementById("errorEmail").style.display = "none";
	document.getElementById("email").style.borderColor = "initial";
	document.getElementById("email").style.backgroundImage = "none";
	document.getElementById("errorUsuario").style.display = "none";
	document.getElementById("usuario").style.borderColor = "initial";
	document.getElementById("usuario").style.backgroundImage = "none";
	document.getElementById("errorContraseña").style.display = "none";
	document.getElementById("contraseña").style.borderColor = "initial";
	document.getElementById("contraseña").style.backgroundImage = "none";
}


function consultaUsuariosBD () {
	//Enviamos manualmente la llamada al fichero PHP indicándole que solo accede a la consulta de usuarios
	var llamadaPHPListado = new XMLHttpRequest();
	llamadaPHPListado.onreadystatechange = function() {
		if (llamadaPHPListado.readyState === XMLHttpRequest.DONE) {
			if (llamadaPHPListado.status === 200) {
				// Tratamos los posibles resultados de la ejecución del fichero PHP
				document.getElementById("listadoUsuarios").innerHTML = llamadaPHPListado.responseText;
			} else {
				alert("Se ha producido un error al solicitar el listado de usuarios registrados.");
			}
		}
	};
	llamadaPHPListado.open("POST", "formulario.php?listado=true", true);
	llamadaPHPListado.send();
}