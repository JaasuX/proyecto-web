<?php
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: loginUsu.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/styles-reservation.css">
    <title>PartyMaker - Reservaciones</title>
</head>
<body>
    <header class="header">
        <div class="menu container">
            <a class="logo" href="index.html">Party Maker</a>
            <input type="checkbox" id="menu" />
            <label for="menu">
                <img class="menu-icono" src="" alt="" />
            </label>
            <nav class="navbar">
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="about-us.html">Quiénes somos</a></li>
                    <li><a href="">Cerrar Sesión</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <div class="options-container">
            <form class="form" id="reservation-form" action="reservacion.php" method="POST">
                <div class="selecciones">
                    <h2 class="subtitulo">Reservaciones</h2>
                    <label for="evento">Tipo de evento</label>
                    <select name="evento" id="evento">
                        <option value="graduacion">Graduación</option>
                        <option value="boda">Boda</option>
                        <option value="bautizo">Bautizo</option>
                        <option value="xvanios">XV años</option>
                        <option value="reunion-familiar">Reunión familiar</option>
                        <option value="reunion-negocios">Reunión de negocios</option>
                    </select>
    
                    <label for="fecha">Fecha</label>
                    <input type="date" id="fecha" name="fecha" required>
    
                    <label for="hora">Hora</label>
                    <input type="time" id="hora" name="hora" required>
    
                    <input class="btn-1" type="submit" value="Reservar">
                </div>

            </form>

            <div class="menus">
                <h2 class="subtitulo">Platillos</h2>
                <div id="platillos"></div>
            </div>
        </div>

        <div class="configuracion">
            <div class="sidebar">
                <h2 class="subtitulo">Elementos</h2>
                <img src="reservaciones/mesa.png" alt="Mesa" class="draggable" draggable="true" id="table">
                <img src="reservaciones/mesero.png" alt="Mesero" class="draggable" draggable="true" id="waiter">
                <img src="reservaciones/grupo_musical.png" alt="Grupo Musical" class="draggable" draggable="true" id="band">
                <img src="reservaciones/pista_baile.png" alt="Pista de Baile" class="draggable" draggable="true" id="dancefloor">
                <img src="reservaciones/bocinas.png" alt="Bocinas" class="draggable" draggable="true" id="speakers">
            </div>
            <div class="main-content">
                <div class="event-hall" id="event-hall">
                    <h2 class="subtitulo">Salón de Eventos</h2>
                </div>
                <div class="tables-info" id="tables-info">
                    <h3 class="invitados">Invitados por Mesa</h3>
                    <form id="guest-form">
                        <select id="table-select"></select>
                        <input type="text" id="guest-name" placeholder="Nombre del Invitado">
                        <button type="submit">Agregar Invitado</button>
                    </form>
                    <ul id="guest-list"></ul>
                    <div class="buttons">
                        <button class="btn-1" id="save-config">Guardar</button>
                        <button class="btn-1" id="load-config">Cargar</button>
                        <button class="btn-2" id="clear-config">Eliminar Configuración</button>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <footer class="footer">
        <h3>Copyright &copy; 2024 Party Maker. Todos los derechos reservados.</h3>
    </footer>

    <script src="js/reservaciones-drag-and-drop.js"></script>
    <script src="js/reservaciones-menu.js"></script>
</body>
<?php
    include("reservacion.php");
    include("conexion.php");
    ?>

</html>
