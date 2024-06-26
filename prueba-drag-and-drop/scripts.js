function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var element = document.getElementById(data);

    // Obtener la posición del drop y el salón
    var salonRect = document.getElementById("salon").getBoundingClientRect();
    var dropX = ev.clientX - salonRect.left;
    var dropY = ev.clientY - salonRect.top;

    // Posicionar el elemento
    element.style.left = dropX + "px";
    element.style.top = dropY + "px";

    // Se asegura de que el elemento esté en el contenedor del salón
    document.getElementById("salon").appendChild(element);
}
