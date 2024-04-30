/**
 * @openapi
 * /producto:
 *   get:
 *     summary: Obtiene todos los productos desde la basa de datos MySQL
 *     tags: [producto]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bEstado:
 *                   type: boolean
 *                   description: Indica si la solicitud fue exitosa o no
 *                 iCodigo:
 *                   type: integer
 *                   description: Código de estado de la solicitud
 *                 Obj:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       nombre:
 *                         type: string
 *                         description: Nombre del producto
 *                       descripcion:
 *                         type: string
 *                         description: Descripción del producto
 *                       precio:
 *                         type: number
 *                         description: Precio del producto
 *                       stock:
 *                         type: integer
 *                         description: Stock del producto
 *   post:
 *     summary: crea, actualiza y elimina productos en la base de datos MySQL
 *     tags: [producto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               precio:
 *                 type: number
 *               stock:
 *                 type: number
 *               accion:
 *                 type: string
 *     responses:
 *       200:
 *         description: respuesta del crud de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bEstado:
 *                   type: boolean
 *                 iCodigo:
 *                   type: integer
 *                 Obj:
 *                   type: object
 *                   properties:
 *                     codigo:
 *                       type: integer
 *                     valor:
 *                       type: string
 *                  
 * 
 */