import http from "./httpAxiosPartidas";

class servicioPartida {  

  createPartida(data){
    return http.post("/api/squaregame/partidas/create", data );
  }

  createUsuarioPartida(idUsuario, idPartida, resultado){
    return http.post(`/api/squaregame/usuariopartida/${idUsuario}/${idPartida}/${resultado}`);
 }
}
export default new servicioPartida();
