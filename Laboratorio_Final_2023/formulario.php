
<?php

   // Creamos la conexión con PDO
    $servername = "localhost";
    $username = "root";
    $passwordbd = "";
    $dbname = "laboratorio_final_2023";
    
    $conn = new mysqli($servername, $username, $passwordbd, $dbname);
    
    // Revisamos la conexión
    if ($conn->connect_error){
        die("La conexión a la Base de Datos ha fallado: " . $conn->connect_error);
    }
    
    // Si hemos llamado al PHP solo para el listado de usuarios, nos quedamos en este bucle y no continuaremos:
    if (isset($_GET["listado"]) && $_GET["listado"] == "true") {
        $sqlListado = "SELECT nombre, primerapellido, segundoapellido, email, usuario FROM usuarios";
        $listado = $conn->query ($sqlListado);
        if ($listado->num_rows>0) {
            // Si hay usuarios en la BDD, los devolvemos formateados para que se muestren en formato tabla.
            // No mostramos las contraseñas por política de seguridad, ni los ID porque no interesan a un usuario normal.
            echo "<h2>Listado de usuarios registrados:</h2>";
            echo "<table>";
            echo "<tr><th>Nombre</th><th>Primer apellido</th><th>Segundo apellido</th><th>Email</th><th>Usuario</th></tr>";
            while ($row = $listado->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row["nombre"] . "</td>";
                echo "<td>" . $row["primerapellido"] . "</td>";
                echo "<td>" . $row["segundoapellido"] . "</td>";
                echo "<td>" . $row["email"] . "</td>";
                echo "<td>" . $row["usuario"] . "</td>";
                echo "</tr>";
            }
            echo "</table>";
        } else {
            echo "No existe ningún usuario registrado.";
        }
        exit();
    }
    
    
if($_POST){

    // Si hemos llamado al PHP para el registro de usuarios y no para obtener el listado de usuarios, continuamos por aquí:
    $nombre = $_POST['nombre'];
    $apellido1 = $_POST['primerapellido'];
    $apellido2 = $_POST['segundoapellido'];
    $email = $_POST['email'];
    $usuario = $_POST['usuario'];
    $contraseña = $_POST['contraseña'];
    
    // Validamos una vez más si están rellenos y el tamaño de la contraseña. No volvemos a validar los patrones
    // ya que se validaron dos veces anteriormente (en HTML y en Javascript).
    // Realmente nunca llegará a validar esto porque HTML y Javascript van a detectarlo antes, pero se incluye igualmente.
    if (empty($nombre) || empty($apellido1) || empty($apellido2) || empty($email) || empty($usuario) || empty($contraseña)) {
        echo "Rellene todos los campos del formulario.";
        exit();
    }
    if (strlen($contraseña) < 4 || strlen($contraseña) > 8) {
        echo "La contraseña debe tener entre 4 y 8 caracteres.";
        exit();
    }

    // Comprobación si existe ya el mail registrado
    $sqlExiste = "SELECT usuario FROM usuarios WHERE email = '$email'";
    if ($conn->query ($sqlExiste)->num_rows>0) {
        echo "El email introducido ya existe.";
    } else {
    
        // Registro del nuevo usuario
        $sqlInsert = "INSERT INTO usuarios (nombre, primerapellido, segundoapellido, email, usuario, contraseña)
        VALUES ('$nombre', '$apellido1', '$apellido2', '$email', '$usuario', '$contraseña')";

        if ($conn->query ($sqlInsert) === TRUE) {
            echo "Registro completado con éxito.";
        } else {
            echo "Error al insertar el registro en la Base de Datos: " . $sqlInsert . "<br>" . $conn->error;
        }
    }
$conn->close();

}

?>
