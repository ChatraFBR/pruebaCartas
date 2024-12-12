// Función para configurar los elementos arrastrables
export function setupDraggables(draggables, dropzones, colors) {
  // Se itera sobre cada elemento arrastrable
  draggables.forEach((item) => {
    // Se establece el atributo "draggable" en true
    item.setAttribute("draggable", "true");

    // Se agrega un evento de inicio de arrastre
    item.addEventListener("dragstart", (e) => {
      // Se establece el id del elemento en el objeto de transferencia de datos
      e.dataTransfer.setData("text/plain", e.target.id);
      // Se agrega una clase de animación al elemento
      e.target.classList.add("dragging");
    });

    // Se agrega un evento de fin de arrastre
    item.addEventListener("dragend", (e) => {
      // Se quita la clase de animación del elemento
      e.target.classList.remove("dragging");

      // Se verifica si el elemento fue soltado en una zona válida
      const dropzone = document.elementFromPoint(e.clientX, e.clientY);
      if (!dropzone || !dropzone.classList.contains("dropzone")) {
        // Se agrega una clase para volver al elemento
        e.target.classList.add("returning");
        // Se quita la clase después de la animación
        setTimeout(() => {
          e.target.classList.remove("returning");
        }, 500);
      }
    });
  });

  // Se itera sobre cada zona de soltar
  dropzones.forEach((zone) => {
    // Se agrega un evento de arrastre sobre la zona
    zone.addEventListener("dragover", (e) => {
      // Se evita el comportamiento por defecto del navegador
      e.preventDefault();
    });

    // Se agrega un evento de soltar en la zona
    zone.addEventListener("drop", (e) => {
      // Se evita el comportamiento por defecto del navegador
      e.preventDefault();
      // Se obtiene el id del elemento arrastrado
      const id = e.dataTransfer.getData("text/plain");
      // Se obtiene el elemento arrastrado
      const card = document.getElementById(id);

      if (card) {
        // Se agrega el elemento a la zona
        zone.appendChild(card);
        // Se establece el color de fondo del elemento según la zona
        if (colors[zone.id]) {
          card.style.backgroundColor = colors[zone.id];
        }
        // Se ajusta el tamaño de la zona según el número de elementos
        dropzones.forEach((dropzone) => {
          const allCards = dropzone.querySelectorAll(".card");
          allCards.length > 6 ? adjustDropzoneSize(dropzone) : resetDropzoneSize(dropzone);
        });
      }
    });
  });
}

// Función para ajustar el tamaño de la zona según el número de elementos
function adjustDropzoneSize(zone) {
  // Se obtienen los elementos de la zona
  const cards = zone.querySelectorAll(".card");
  // Se calcula el número de columnas según el número de elementos
  const columns = Math.ceil(cards.length / 3);
  // Se calcula el nuevo ancho de la zona
  const newWidth = Math.max(300, columns * 100);

  // Se establece el nuevo ancho de la zona
  zone.style.width = `${newWidth}px`;
}

// Función para restablecer el tamaño de la zona
function resetDropzoneSize(zone) {
  // Se establece el ancho y alto de la zona en sus valores por defecto
  zone.style.height = `300px`;
  zone.style.width = `300px`;
}