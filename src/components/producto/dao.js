const { connect } = require('../../db');
const Model = require('./model');

async function getProduct() {
  const connection = await connect();
  try {
    const [rows] = await connection.execute('CALL fnProductoListar()');
    const productos = rows[0].map(row => new Model(row.id, row.nombre, row.descripcion, row.precio, row.stock, row.estado));
    return productos;
  } finally {
    connection.end();
  }
}

async function crudProduct(datos) {
  const producto = new Model(datos.id, datos.nombre, datos.descripcion, datos.precio,datos.stock,null,datos.accion);
  const connection = await connect();
  try {
    const [result] = await connection.execute('CALL fnProductoCrud(?, ?, ?, ?, ?, ?)', [producto.id, producto.nombre, producto.descripcion, producto.precio, producto.stock, producto.accion]);
    return result[0][0];
  } finally {
    connection.end();
  }
}

module.exports = {
  getProduct,
  crudProduct
};