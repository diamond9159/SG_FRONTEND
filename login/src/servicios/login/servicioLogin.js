import http from "./httpAxiosLogin";

class servicioLogin {  
  findByNombreContrasenia(username) { 
    return http.get(`/api/squaregame/usuarios/?username=${username}`);
  }

  login(username, password) {
    return http.post("/api/squaregame/usuarios/login/", { username, password });
  }
 }

export default new servicioLogin();
