import http from "./httpAxiosLogin";

class servicioLogin {  
  findByNombreContrasenia(username) { 
    return http.get(`/api/squaregame/usuarios/?username=${username}`);
  }
 }

export default new servicioLogin();
