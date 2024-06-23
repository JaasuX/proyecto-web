document.addEventListener("DOMContentLoaded", function() {
    const salonContainer = document.getElementById("salon-container");

    // Aquí iría la lógica para cargar la distribución guardada del salón
    // Además de la funcionalidad de drag and drop para los componentes del salón
    // y mostrar tooltips con los invitados y menús asignados a las mesas.
    salonContainer.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    salonContainer.addEventListener("drop", function(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const element = document.getElementById(data);
        salonContainer.appendChild(element);
        element.style.position = "absolute";
        element.style.left = `${event.clientX - salonContainer.offsetLeft}px`;
        element.style.top = `${event.clientY - salonContainer.offsetTop}px`;
    });

    document.querySelectorAll('.draggable').forEach(item => {
        item.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData("text", event.target.id);
        });
    });
});
