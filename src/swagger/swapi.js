/**
 * @openapi
 * /swapi/personas:
 *   get:
 *     summary: Obtiene todos las personas - API de prueba SWAPI
 *     tags: [swapi]
 *     responses:
 *       200:
 *         description: Lista de personas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                   altura:
 *                     type: string
 *                   masa:
 *                     type: string
 *                   color_del_cabello:
 *                     type: string
 *                   color_de_piel:
 *                     type: string
 *                   color_de_ojos:
 *                     type: string
 *                   año_de_nacimiento:
 *                     type: string
 *                   género:
 *                     type: string
 *                   planeta_natal:
 *                     type: string
 *                   películas:
 *                     type: array
 *                     items:
 *                      type: string
 *                   especie:
 *                     type: array
 *                     items:
 *                      type: string
 *                   vehículos:
 *                     type: array
 *                     items:
 *                      type: string
 *                   naves_estelares:
 *                     type: array
 *                     items:
 *                      type: string
 *                   creado:
 *                     type: string
 *                   editado:
 *                     type: string
 *                   url:
 *                     type: string
 * 
 * /swapi/planetas:
 *   get:
 *     summary: Obtiene todos los planetas - API de prueba SWAPI
 *     tags: [swapi]
 *     responses:
 *       200:
 *         description: Lista de los planetas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                   periodo_de_rotación:
 *                     type: string
 *                   periodo_orbital:
 *                     type: string
 *                   diámetro:
 *                     type: string
 *                   clima:
 *                     type: string
 *                   gravedad:
 *                     type: string
 *                   terreno:
 *                     type: string
 *                   agua_en_la_superficie:
 *                     type: string
 *                   población:
 *                     type: string
 *                   residentes:
 *                     type: array
 *                     items:
 *                      type: string
 *                   películas:
 *                     type: array
 *                     items:
 *                      type: string
 *                   creado:
 *                     type: string
 *                   editado:
 *                     type: string
 *                   url:
 *                     type: string
 * 
 */