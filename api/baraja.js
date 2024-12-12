const express = require('express');
const app = express();
const port = 3000;

// La baraja como un array vacío
let baraja = [];

// Se habilita el parsing de JSON en las solicitudes
app.use(express.json());

// Se define un endpoint para guardar la baraja
app.post('/baraja', (req, res) => {
    // Se actualiza la baraja con la información recibida en la solicitud
    baraja = req.body.baraja;
    // Se devuelve una respuesta con un mensaje de éxito
    res.json({ message: 'Baraja guardada con éxito' });
});

// Se define un endpoint para la baraja
app.get('/baraja', (req, res) => {
    // Se devuelve la baraja actual en formato JSON
    res.json({ baraja: baraja });
});

// Se inicia la aplicación en el puerto establecido
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});