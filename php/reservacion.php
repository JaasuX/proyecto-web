<?php
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: loginUsu.php");
    exit();
}

include("conexion.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['evento'])) {
        $evento = $_POST['evento'];
        $fecha = $_POST['fecha'];
        $hora = $_POST['hora'];

        // Preparar y enlazar
        $stmt = $conex->prepare("INSERT INTO reservaciones (evento, fecha, hora) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $evento, $fecha, $hora);

        if ($stmt->execute()) {
            echo "Reservación guardada exitosamente.";
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } elseif (isset($_POST['menu_type'])) {
        $menuType = $_POST['menu_type'];
        $option1 = $_POST['option1'];
        $option2 = $_POST['option2'];
        $option3 = $_POST['option3'];

        // Preparar y enlazar
        $stmt = $conex->prepare("INSERT INTO menus (menu_type, option1, option2, option3) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $menuType, $option1, $option2, $option3);

        if ($stmt->execute()) {
            echo "Menú guardado exitosamente.";
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    }
    $conex->close();
}
?>
