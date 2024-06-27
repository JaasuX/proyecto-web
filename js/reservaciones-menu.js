document.addEventListener('DOMContentLoaded', function () {
    const horaInput = document.getElementById('hora');
    const platillosDiv = document.getElementById('platillos');

    horaInput.addEventListener('change', function () {
        const hora = parseInt(horaInput.value.split(':')[0]);
        let menu;

        if (hora >= 9 && hora < 12) {
            menu = `
                <ul>
                    <li>Desayuno 1</li>
                    <li>Desayuno 2</li>
                    <li>Desayuno 3</li>
                </ul>
            `;
        } else if (hora >= 12 && hora < 17) {
            menu = `
                <ul>
                    <li>Comida 1</li>
                    <li>Comida 2</li>
                    <li>Comida 3</li>
                </ul>
            `;
        } else if (hora >= 17 && hora < 23) {
            menu = `
                <ul>
                    <li>Cena 1</li>
                    <li>Cena 2</li>
                    <li>Cena 3</li>
                </ul>
            `;
        } else {
            menu = '<p>El horario seleccionado no está disponible para el menú.</p>';
        }

        platillosDiv.innerHTML = menu;
    });
});
