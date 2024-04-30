const axios = require('axios');

describe('Pruebas de la API', () => {
  test('Debería obtener la lista de personas mapeado del inglés al español correctamente.', async () => {
    const response = await axios.get('https://w94r6l6ohl.execute-api.us-east-2.amazonaws.com/swapi/personas');
    expect(response.status).toBe(200); // Verifica si la solicitud fue exitosa (código 200)
  });

  test('Debería obtener la lista de planetas mapeado del inglés al español correctamente.', async () => {
    const response = await axios.get('https://w94r6l6ohl.execute-api.us-east-2.amazonaws.com/swapi/planetas');
    expect(response.status).toBe(200); // Verifica si la solicitud fue exitosa (código 200)
  });

  test('Debería obtener la lista de productos registras en la base de datos MySQL.', async () => {
    const response = await axios.get('https://w94r6l6ohl.execute-api.us-east-2.amazonaws.com/producto');
    expect(response.status).toBe(200); // Verifica si la solicitud fue exitosa (código 200)
  });

  test('Debería crear un nuevo producto en la base de datos MySQL correctamente', async () => {
    // Genera valores aleatorios para el nombre y la descripción del producto
    const nombreAleatorio = `Nuevo Producto ${Math.floor(Math.random() * 1000)}`;
    const descripcionAleatoria = `Descripción del nuevo producto ${Math.floor(Math.random() * 1000)}`;
  
    // Crea el objeto de datos con valores aleatorios
    const data = {
      id:null,
      nombre: nombreAleatorio,
      descripcion: descripcionAleatoria,
      precio: Math.random() * 100, // Precio aleatorio entre 0 y 100
      stock: Math.floor(Math.random() * 1000), // Stock aleatorio entre 0 y 1000
      accion: "I" //I = INSERTAR; U = UPDATE; D = DELETE
    };
  
    const response = await axios.post('https://w94r6l6ohl.execute-api.us-east-2.amazonaws.com/producto', data);
  
    // Verifica si la solicitud fue exitosa (código 200)
    expect(response.status).toBe(200);
  
  });

});