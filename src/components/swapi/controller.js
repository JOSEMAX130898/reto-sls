// controller.js

const { fetchPeople,fetchPlanets} = require('./service');

async function getPeople(req, res) {
    try {
        // Obtener los datos de la API
        const rawData = await fetchPeople();
        
        // Adaptar los datos al español
        //const adaptedData = adaptToSpanish(rawData);
        
        // Enviar la respuesta adaptada
        res.json(rawData);
    } catch (error) {
        // Manejar errores en caso de que ocurran
        console.error('Error al obtener datos:', error);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
}

async function getPlanets(req, res) {
    try {
        // Obtener los datos de la API
        const rawData = await fetchPlanets();
        
        // Adaptar los datos al español
        //const adaptedData = adaptToSpanish(rawData);
        
        // Enviar la respuesta adaptada
        res.json(rawData);
    } catch (error) {
        // Manejar errores en caso de que ocurran
        console.error('Error al obtener datos:', error);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
}

module.exports = {
    getPeople,
    getPlanets
};