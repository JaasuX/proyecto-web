document.addEventListener('DOMContentLoaded', function () {
    const reservationForm = document.getElementById('reservation-form');
    const menuForm = document.getElementById('menu-form');

    reservationForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitamos mandar formularios vacios

        const formData = new FormData(reservationForm);

        fetch('../php/reservacion.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                console.log(data); // Respuesta del servidor
                alert('Reservación guardada exitosamente.');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al guardar la reservación.');
            });
    });

    menuForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitamos mandar formularios vacios

        const formData = new FormData(menuForm);

        fetch('../php/reservacion.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                console.log(data); // Respuesta del servidor
                alert('Menú guardado exitosamente.');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al guardar el menú.');
            });
    });
});
