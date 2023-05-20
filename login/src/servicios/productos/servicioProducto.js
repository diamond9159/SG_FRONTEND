import http from "./http-axios";

class servicioProducto {
  getAll() {
    return http.get("/prods");
  }

  get(id) {
    return http.get(`/prods/${id}`);
  }

  create(data) {
    return http.post("/prods", data);
  }

  update(id, data) {
    return http.put(`/prods/${id}`, data);
  }

  delete(id) {
    return http.delete(`/prods/${id}`);
  }

  /*
    Buscar los producto con el nombre completo especificado
  */
  findByNombre(nombre) {
    return http.get(`/prods/?descripcion=${nombre}`);
  }
  /*
    Buscar un producto si contiene el texto en alguno de los campos
  */
  findByGeneral(texto) {
    return http.get(`/prods?q=${texto}`);
  }
}

export default new servicioProducto();
