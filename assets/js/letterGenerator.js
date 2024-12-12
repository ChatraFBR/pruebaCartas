// Función para generar las cartas
export function generateCards() {
  // Se definen los palos
  const suits = ["Bastos", "Oros", "Copas", "Espadas"];
  const cards = [];

  // Se itera sobre cada palo y se generan las cartas
  suits.forEach((suit, index) => {
    for (let i = 1; i <= 3; i++) { 
      // Se crea un elemento div para cada carta
      const card = document.createElement("div");
      card.classList.add("card");
      card.id = `card-${suit}-${i}`; // Asignar un id único a cada carta
      card.innerHTML = `
        <span class="corner top-left">${index + 1}</span>
        <span class="center">${suit}</span>
        <span class="corner top-right">${index + 1}</span>
      `;
      cards.push(card);
    }
  });

  // Se devuelve el array
  return cards;
}