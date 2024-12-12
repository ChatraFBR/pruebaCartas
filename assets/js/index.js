// Se importa la función para configurar el arrastre de las cartas y la función para generar las cartas
import { setupDraggables } from "./uiDrag.js";
import { generateCards } from "./letterGenerator.js";

// Se agrega un evento de carga de contenido a la página
document.addEventListener("DOMContentLoaded", () => {
  // Se seleccionan los elementos que contienen los palos
  const dropzones = document.querySelectorAll(".palo");
  
  // Se establecen los colores
  const colors = {
    "bastos": "#3498db",
    "oros": "#e74c3c",
    "copas": "#2ecc71",
    "espadas": "#9b59b6"
  };
  
  // Se generan las cartas y se calcula la mitad del número de cartas
  const cards = generateCards();
  const half = Math.ceil(cards.length / 2);

  // Se distribuyen las cartas en los palos
  dropzones[0].append(...cards.slice(0, half).map(card => {
    card.style.backgroundColor = colors["bastos"];
    return card;
  }));
  dropzones[1].append(...cards.slice(half).map(card => {
    card.style.backgroundColor = colors["oros"];
    return card;
  }));
  dropzones[2].append(...cards.slice(half * 2).map(card => {
    card.style.backgroundColor = colors["copas"];
    return card;
  }));
  dropzones[3].append(...cards.slice(half * 3).map(card => {
    card.style.backgroundColor = colors["espadas"];
    return card;
  }));

  // Se configura el arrastre de las cartas
  const draggables = document.querySelectorAll(".card");
  setupDraggables(draggables, dropzones, colors);

  // Se envía una solicitud a la API para guardar la estructura
  fetch('api/baraja', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      baraja: cards.map(card => card.id)
    })
  })
  // Se procesa la respuesta de la API
  .then(response => response.json())
  // Se imprime la respuesta en la consola
  .then(data => console.log(data))
  // Se maneja cualquier error que pueda ocurrir
  .catch(error => console.error(error));
});