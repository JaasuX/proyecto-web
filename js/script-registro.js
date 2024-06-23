document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const usuario = document.getElementById("usuario").value;

        if (!validateNombre(nombre) || !validateApellido(apellido) || !validateEmail(email) || !validatePassword(password) || !validateUsuario(usuario)) {
            event.preventDefault();
            alert("Por favor, asegúrate de que todos los campos estén correctamente llenados.");
        } else {
            // Simula el registro exitoso y redirige a la página de inicio de sesión
            alert("Registro exitoso. Por favor, inicia sesión.");
            window.location.href = "login.html";
        }
    });

    function validateNombre(nombre) {
        if (nombre.trim() === "") {
            alert("El nombre no puede estar vacío.");
            return false;
        }
        return true;
    }

    function validateApellido(apellido) {
        if (apellido.trim() === "") {
            alert("El apellido no puede estar vacío.");
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return false;
        }
        return true;
    }

    function validatePassword(password) {
        if (password.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres.");
            return false;
        }
        return true;
    }

    function validateUsuario(usuario) {
        if (usuario.trim() === "") {
            alert("El nombre de usuario no puede estar vacío.");
            return false;
        }
        return true;
    }
});
