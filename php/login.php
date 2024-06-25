<?php
session_start();
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Sanitizar las entradas
    $email = mysqli_real_escape_string($conex, $email);
    $password = mysqli_real_escape_string($conex, $password);

    // Consultar la base de datos para verificar el usuario
    $sql = "SELECT * FROM usuario WHERE correo = '$email' AND contrasena = '$password'";
    $result = mysqli_query($conex, $sql);

    if (mysqli_num_rows($result) == 1) {
        // Autenticación exitosa
        $_SESSION['loggedin'] = true;
        $_SESSION['email'] = $email;
        header("Location: reservation.php"); // Redirigir a la página de reservaciones
        exit();
    } else {
        // Autenticación fallida
        $error_message = "Correo electrónico o contraseña incorrectos.";
    }
}
?>
