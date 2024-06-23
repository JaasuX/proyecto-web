document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!validateEmail(email) || !validatePassword(password)) {
            event.preventDefault();
            alert("Por favor, asegúrate de que todos los campos estén correctamente llenados.");
        } else {
            //autenticación exitosa
            sessionStorage.setItem('loggedIn', 'true');
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