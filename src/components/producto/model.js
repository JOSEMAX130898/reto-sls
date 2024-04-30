class Producto {
  constructor(id, nombre, descripcion, precio,stock,estado,accion) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion=descripcion;
    this.precio = precio;
    this.stock = stock;
    this.estado = estado;
    this.accion = accion;
  }
}

module.exports = Producto;