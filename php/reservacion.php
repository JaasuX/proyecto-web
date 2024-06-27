<?php
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["evento"]) || empty($_POST["fecha"]) || empty($_POST["hora"])) {
        echo 'Uno de los campos está vacío';
    } else {
        $evento = $_POST['evento'];
        $fecha = $_POST['fecha'];
        $hora = $_POST['hora'];
        
        $sql = "INSERT INTO eventos (nombreevento, fecha, hora) VALUES('$evento', '$fecha', '$hora')";
        
        if (mysqli_query($conex, $sql)) {
            // Redirige al formulario con un parámetro de éxito
            header("Location: reservation.php?status=success");
            exit();
        } else {
            echo 'Error al registrar: ' . mysqli_error($conex);
        }

        $conex->close();
    }
}