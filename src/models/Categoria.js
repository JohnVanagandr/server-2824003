import connection from '../utils/db.js'

class Categoria {
  constructor() { }

  // Métodos -> Listar
  async getAll() {
    try {
      const [rows] = await connection.query("SELECT * FROM categorias");
      return rows;
    } catch (error) {
      throw new Error("Error al obtener las catgorías");
    }
  }
  // Método -> crear una categoría
  create(nombre, descripcion) {
    connection.query("insert into categorias (nombre, descripcion) value (?, ?)", [nombre, descripcion]);


  }
}

export default Categoria;