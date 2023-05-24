import http from "./http-axios";

class servicioUsuarioPartida {
  getAll() {
    return http.get("/api/squaregame/usuariopartida");
  }

  historial(id) {
    return http.get(`/api/squaregame/usuariopartida/historial/${id}`);
  }
}

export default new servicioUsuarioPartida();
