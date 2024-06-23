document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("reservation-form");
    const horaInput = document.getElementById("hora");
    const menuSelect = document.getElementById("menu");
    const platillosDiv = document.getElementById("platillos");

    form.addEventListener("submit", function(event) {
        const hora = horaInput.value;
        if (!validateHora(hora)) {
            event.preventDefault();
            alert("Por favor, selecciona un horario válido.");
        }
    });

    menuSelect.addEventListener("change", function() {
        updatePlatillos(menuSelect.value);
    });

    function validateHora(hora) {
        const [hour, minute] = hora.split(':').map(Number);
        if ((hour >= 9 && hour < 12) || (hour >= 12 && hour < 17) || (hour >= 17 && hour <= 23)) {
            return true;
        }
        return false;
    }

    function updatePlatillos(menu) {
        platillosDiv.innerHTML = '';
        let platillos = [];
        switch (menu) {
            case 'desayuno':
                platillos = ["Huevos Rancheros, Café, Jugo", "Pancakes, Frutas, Té", "Omelette, Pan Tostado, Chocolate"];
                break;
            case 'comida':
                platillos = ["Ensalada César, Pollo Asado, Refresco", "Sopa, Carne Asada, Agua Fresca", "Pasta, Pescado, Vino"];
                break;
            case 'cena':
                platillos = ["Sopa, Filete, Coctel", "Ensalada, Pollo, Jugo", "Sushi, Té Verde, Postre"];
                break;
        }
        platillos.forEach(platillo => {
            const p = document.createElement("p");
            p.textContent = platillo;
            platillosDiv.appendChild(p);
        });
    }
});
