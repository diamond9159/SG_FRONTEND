import http from "./http-axios";

class servicioProducto {
  getAll() {
    return http.get("/api/squaregame/usuariopartida");
  }

  historial(id) {
    return http.get(`/api/squaregame/usuariopartida/historial/${id}`);
  }
}

export default new servicioProducto();
