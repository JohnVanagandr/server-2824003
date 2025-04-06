import Categoria from "../models/Categoria.js";

class CategoriaController {

  // Métodos
  static async getAllCategorias(req, res) {
    const OBJCategoria = new Categoria();
    const categorias = await OBJCategoria.getAll();
    return res.json(categorias);
  }

  static async createCategoria(req, res) {
    const { nombre, descripcion } = req.body;
    const OBJCategoria = new Categoria();
    const categorias = await OBJCategoria.create(nombre, descripcion);
  }

}
export default CategoriaController;