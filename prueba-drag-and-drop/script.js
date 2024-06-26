document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');
    const eventHall = document.getElementById('event-hall');
    let draggedElement = null;
    let offsetX, offsetY;

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            draggedElement = e.target;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
        });
    });

    eventHall.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    eventHall.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = draggedElement.id;

        // Check if element can only be added once
        if (id === 'band' || id === 'dancefloor' || id === 'speakers') {
            if (eventHall.querySelector(`#${id}-instance`)) {
                alert('Este elemento solo se puede añadir una vez.');
                return;
            }
        }

        // Create a new element for the event hall if it's not already inside
        if (!draggedElement.classList.contains('draggable-element')) {
            const newElement = document.createElement('img');
            newElement.src = draggedElement.src;
            newElement.alt = draggedElement.alt;
            newElement.className = 'draggable-element';
            newElement.id = `${id}-instance`;
            newElement.style.left = `${e.clientX - eventHall.offsetLeft - offsetX}px`;
            newElement.style.top = `${e.clientY - eventHall.offsetTop - offsetY}px`;
            newElement.draggable = true;

            // Add drag events to the new element
            newElement.addEventListener('dragstart', (ev) => {
                draggedElement = ev.target;
                offsetX = ev.offsetX;
                offsetY = ev.offsetY;
            });

            eventHall.appendChild(newElement);
        } else {
            // Move the existing element
            draggedElement.style.left = `${e.clientX - eventHall.offsetLeft - offsetX}px`;
            draggedElement.style.top = `${e.clientY - eventHall.offsetTop - offsetY}px`;
        }

        // Reset dragged element
        draggedElement = null;
    });
});
