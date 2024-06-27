<?php
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["nombre"]) || empty($_POST["apellido"]) || empty($_POST["email"]) || empty($_POST["password"]) || empty($_POST["usuario"])) {
        echo 'Uno de los campos está vacío';
    } else {
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $usuario = $_POST['usuario'];
        
        $sql = "INSERT INTO usuario (nombre, apellido, correo, contrasena,usuario) VALUES('$nombre', '$apellido', '$email', '$password', '$usuario')";
        
        if (mysqli_query($conex, $sql)) {
            // Redirige al formulario con un parámetro de éxito
            header("Location: register.php?status=success");
            exit();
        } else {
            echo 'Error al registrar: ' . mysqli_error($conex);
        }

        $conex->close();
    }
}