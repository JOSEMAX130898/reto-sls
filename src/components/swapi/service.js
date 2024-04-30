const axios = require('axios');
const { mapPeople,mapPlanets} = require('../../utils/adapter');

const apiUrl = process.env.URL_SWAPI;

async function fetchPeople() {
    try {
        // Hacer una solicitud GET a la API utilizando await
        const response = await axios.get(apiUrl+"/people");
        const personas = response.data.results;

        // Manejar la respuesta de la API aquí
        const personasMapeadas = personas.map(persona => mapPeople(persona));    
        return personasMapeadas; // Devolvemos los datos adaptados
    } catch (error) {
        // Manejar errores en caso de que ocurran
        console.error('Error al obtener datos:', error);
        throw error; // Lanzamos el error para que sea manejado en el contexto que llama a fetchData()
    }
}
async function fetchPlanets() {
    try {
        // Hacer una solicitud GET a la API utilizando await
        const response = await axios.get(apiUrl+"/planets");
        const personas = response.data.results;

        // Manejar la respuesta de la API aquí
        const personasMapeadas = personas.map(persona => mapPlanets(persona));    
        return personasMapeadas; // Devolvemos los datos adaptados
    } catch (error) {
        // Manejar errores en caso de que ocurran
        console.error('Error al obtener datos:', error);
        throw error; // Lanzamos el error para que sea manejado en el contexto que llama a fetchData()
    }
}

module.exports = {
    fetchPeople,
    fetchPlanets
};