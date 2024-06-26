document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');
    const eventHall = document.getElementById('event-hall');
    const tableSelect = document.getElementById('table-select');
    const guestForm = document.getElementById('guest-form');
    const guestList = document.getElementById('guest-list');
    const saveButton = document.getElementById('save-config');
    const loadButton = document.getElementById('load-config');
    const clearButton = document.getElementById('clear-config');
    let draggedElement = null;
    let offsetX, offsetY;
    let tableCount = 0;
    let tables = {};

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
            newElement.id = id === 'table' ? `table-${tableCount}` : `${id}-instance`;
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

            // If the new element is a table, add it to the table list
            if (id === 'table') {
                tables[`table-${tableCount}`] = [];
                updateTableSelect();
                tableCount++;
            }
        } else {
            // Move the existing element
            draggedElement.style.left = `${e.clientX - eventHall.offsetLeft - offsetX}px`;
            draggedElement.style.top = `${e.clientY - eventHall.offsetTop - offsetY}px`;
        }

        // Reset dragged element
        draggedElement = null;
    });

    guestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const tableId = tableSelect.value;
        const guestName = document.getElementById('guest-name').value.trim();

        if (guestName && tableId && tables[tableId].length < 8) {
            tables[tableId].push(guestName);
            updateGuestList();
            document.getElementById('guest-name').value = '';
        } else if (tables[tableId].length >= 8) {
            alert('Esta mesa ya tiene 8 invitados.');
        }
    });

    function updateTableSelect() {
        tableSelect.innerHTML = '';
        Object.keys(tables).forEach(tableId => {
            const option = document.createElement('option');
            option.value = tableId;
            option.textContent = tableId;
            tableSelect.appendChild(option);
        });
    }

    function updateGuestList() {
        guestList.innerHTML = '';
        Object.keys(tables).forEach(tableId => {
            tables[tableId].forEach((guest, index) => {
                const li = document.createElement('li');
                li.textContent = `${guest} (Mesa: ${tableId})`;
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Eliminar';
                deleteButton.addEventListener('click', () => {
                    tables[tableId].splice(index, 1);
                    updateGuestList();
                });

                const editButton = document.createElement('button');
                editButton.textContent = 'Editar';
                editButton.addEventListener('click', () => {
                    const newGuestName = prompt('Ingrese el nuevo nombre del invitado:', guest);
                    if (newGuestName) {
                        tables[tableId][index] = newGuestName;
                        updateGuestList();
                    }
                });

                li.appendChild(editButton);
                li.appendChild(deleteButton);
                guestList.appendChild(li);
            });
        });
    }

    function saveConfiguration() {
        const elements = [];
        document.querySelectorAll('.draggable-element').forEach(el => {
            elements.push({
                id: el.id,
                src: el.src,
                alt: el.alt,
                left: el.style.left,
                top: el.style.top
            });
        });
        localStorage.setItem('eventElements', JSON.stringify(elements));
        localStorage.setItem('eventTables', JSON.stringify(tables));
    }

    function loadConfiguration() {
        const elements = JSON.parse(localStorage.getItem('eventElements'));
        const savedTables = JSON.parse(localStorage.getItem('eventTables'));

        if (elements) {
            elements.forEach(el => {
                const newElement = document.createElement('img');
                newElement.src = el.src;
                newElement.alt = el.alt;
                newElement.className = 'draggable-element';
                newElement.id = el.id;
                newElement.style.left = el.left;
                newElement.style.top = el.top;
                newElement.draggable = true;

                // Add drag events to the new element
                newElement.addEventListener('dragstart', (ev) => {
                    draggedElement = ev.target;
                    offsetX = ev.offsetX;
                    offsetY = ev.offsetY;
                });

                eventHall.appendChild(newElement);

                // If the new element is a table, add it to the table list
                if (el.id.startsWith('table-')) {
                    tables[el.id] = savedTables[el.id];
                    tableCount++;
                }
            });
            updateTableSelect();
            updateGuestList();
        }
    }

    function clearConfiguration() {
        localStorage.removeItem('eventElements');
        localStorage.removeItem('eventTables');
        location.reload();
    }

    saveButton.addEventListener('click', saveConfiguration);
    loadButton.addEventListener('click', loadConfiguration);
    clearButton.addEventListener('click', clearConfiguration);

    // Load configuration on page load
    loadConfiguration();
});
