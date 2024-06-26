document.addEventListener('DOMContentLoaded', () => {
    const horaInput = document.getElementById('hora');
    const menuSelect = document.getElementById('menu');
    const platillosContainer = document.getElementById('platillos');

    const menus = {
        desayuno: [
            'Huevos al gusto',
            'Hot cakes',
            'Fruta fresca',
            'Café',
            'Jugo de naranja'
        ],
        comida: [
            'Sopa de tortilla',
            'Ensalada César',
            'Pollo a la parrilla',
            'Arroz blanco',
            'Agua de horchata'
        ],
        cena: [
            'Crema de espárragos',
            'Ensalada Caprese',
            'Filete de res',
            'Puré de papa',
            'Vino tinto'
        ]
    };

    function updateMenuOptions() {
        const selectedHour = horaInput.value;
        if (selectedHour) {
            const [hour, minute] = selectedHour.split(':').map(Number);
            let selectedMenu = 'desayuno';

            if (hour >= 9 && hour < 12) {
                selectedMenu = 'desayuno';
            } else if (hour >= 12 && hour < 17) {
                selectedMenu = 'comida';
            } else if (hour >= 17 && hour < 23) {
                selectedMenu = 'cena';
            }

            // Update the menu select element
            menuSelect.value = selectedMenu;

            // Update the platillos
            updatePlatillos(selectedMenu);
        }
    }

    function updatePlatillos(menuType) {
        platillosContainer.innerHTML = '';
        menus[menuType].forEach(platillo => {
            const platilloElement = document.createElement('p');
            platilloElement.textContent = platillo;
            platillosContainer.appendChild(platilloElement);
        });
    }

    // Add event listener to the hora input
    horaInput.addEventListener('change', updateMenuOptions);
});
