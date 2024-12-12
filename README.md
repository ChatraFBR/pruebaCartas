Proyecto de Cartas

Este es un juego de cartas que permite a los usuarios mover y soltar cartas en diferentes palos.

Funcionamiento

El programa utiliza la siguiente lógica para funcionar:

Se generan 12 cartas (3 por cada palo) utilizando la función generateCards() en el archivo letterGenerator.js.
Las cartas se distribuyen en 4 palos diferentes (Bastos, Oros, Copas y Espadas) utilizando la función setupDraggables() en el archivo uiDrag.js.
El usuario puede mover las cartas a los diferentes palos utilizando el ratón.
Cuando el usuario suelta una carta en un palo, se guarda el estado de la baraja utilizando la API REST en el archivo api/baraja.js.
El estado de la baraja se puede recuperar en cualquier momento utilizando la API REST.

index.html: archivo principal de la página web.
letterGenerator.js: archivo que contiene la función para generar las cartas.
uiDrag.js: archivo que contiene la función para configurar el arrastre de las cartas.
api/baraja.js: archivo que contiene la API REST para guardar y recuperar el estado de la baraja.
Cómo se ha hecho

El programa se ha hecho utilizando la siguiente estructura:

Se ha creado un archivo index.html que contiene la estructura de la página web.
Se han creado archivos JavaScript (letterGenerator.js y uiDrag.js) que contienen la lógica del programa.
Se ha creado un archivo api/baraja.js que contiene la API REST para guardar y recuperar el estado de la baraja.
Se ha utilizado CSS para dar estilo a la página web.
