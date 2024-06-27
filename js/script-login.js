document.addEventListener("DOMContentLoaded", function() {
    const sessionStatus = document.getElementById('session-status');
    const isLoggedIn = sessionStatus.getAttribute('data-logged-in') === 'true';
    const navbarLinks = document.getElementById('navbar-links');

    if (isLoggedIn) {
        navbarLinks.innerHTML = `
            <li><a href="index.php">Inicio</a></li>
            <li><a href="#" id="logout-link">Cerrar sesión</a></li>
            <li><a href="about-us.html">Quiénes somos</a></li>
            <li><a href="php/reservation.php">Reservaciones</a></li>
            <li><a href="event-menu.html">Eventos y Menú</a></li>
        `;
        
        const logoutLink = document.getElementById('logout-link');
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('logout-form').submit();
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!validateEmail(email) || !validatePassword(password)) {
            event.preventDefault();
            alert("Por favor, asegúrate de que todos los campos estén correctamente llenados.");
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return false;
        }
        return true;
    }

    function validatePassword(password) {
        if (password.trim() === "") {
            alert("La contraseña no puede estar vacía.");
            return false;
        }
        return true;
    }
});
