<?php 

$conex = mysqli_connect("localhost", "root", "", "se", "3306");
$conex->set_charset("utf8");
// Verificar conexión
if ($conex->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
