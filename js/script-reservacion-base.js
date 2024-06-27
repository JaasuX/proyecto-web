document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservation-form');
    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(reservationForm);
        fetch('reservacion.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    const guestForm = document.getElementById('guest-form');
    const guestList = document.getElementById('guest-list');
    const tableSelect = document.getElementById('table-select');
    const guestName = document.getElementById('guest-name');

    guestForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const table = tableSelect.value;
        const name = guestName.value.trim();
        if (table && name) {
            const li = document.createElement('li');
            li.textContent = `Mesa ${table}: ${name}`;
            guestList.appendChild(li);
            guestName.value = '';
        } else {
            alert('Por favor, selecciona una mesa y escribe el nombre del invitado.');
        }
    });

    // Agrega opciones de mesas al select
    const tableOptions = ['1', '2', '3', '4', '5'];
    tableOptions.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = `Mesa ${option}`;
        tableSelect.appendChild(opt);
    });

    document.getElementById('save-config').addEventListener('click', () => {
        alert('Configuración guardada.');
    });

    document.getElementById('load-config').addEventListener('click', () => {
        alert('Configuración cargada.');
    });

    document.getElementById('clear-config').addEventListener('click', () => {
        guestList.innerHTML = '';
        alert('Configuración eliminada.');
    });
});
