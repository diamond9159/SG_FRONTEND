import http from "./httpAxiosLogin";

class servicioLogin {  
  findByNombre(username) { 
    return http.get(`/api/squaregame/usuarios/?username=${username}`);
  }

  login(username, password) {
    return http.post(`/api/squaregame/usuarios/login/${username}/${password}`);
  }

  create(data){
    return http.post("/api/squaregame/usuarios/create", { data });
  }

  findByUsuario(username){
    return http.get(`/api/squaregame/usuarios/${username}`);
  }

 }

export default new servicioLogin();
