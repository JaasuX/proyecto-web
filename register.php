<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles-register.css">
    <title>PartyMaker - Registro</title>
</head>
<body>
    <section class="form-register">
        
        <form action="registro.php" method="POST">
            <h2>Crea tu cuenta</h2>
            <input class="input" type="text" id="nombre" name="nombre" required placeholder="Ingresa tu nombre">
            <input class="input" type="text" id="apellido" name="apellido" required placeholder="Ingresa tu apellido">
            <input class="input" type="email" id="email" name="email" required placeholder="Ingresa tu correo electrónico">
            <input class="input" type="password" id="password" name="password" required placeholder="Ingresa tu contraseña">
            <input class="input" type="text" id="usuario" name="usuario" required placeholder="Ingresa un nombre de usuario">
            <p>Estoy de acuerdo con los términos y condiciones.</p>

            <input class="btn-1" type="submit" value="REGISTRAR">

            <p>¿Ya tienes cuenta? <a href="login.html"> Inicia sesión aquí.</a></p>
    </form>
    </section>
    <?php
    include("registrar.php");
    include("conexion.php");
    ?>
</body>
</html>