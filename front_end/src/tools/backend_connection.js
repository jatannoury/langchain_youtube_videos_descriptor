import axios from "axios"
import server_config from "../config/server_config";
import http_tool from "./http_tool";

class BackendConnection {
  constructor() {
    const server_url = server_config.SERVER_BASE_URL;
    const server_port = server_config.SERVER_PORT;
    const server_protocol = server_config.PROTOCOL;
    this.axios_object = axios.create({
      baseURL: `${server_protocol}://${server_url}:${server_port}`,
    });
  }

  async ping() {
    const response = await http_tool.get_request(this.axios_object, "/");
    return response;
  }
  async register(formData) {
    const response = await http_tool.post_request(
      this.axios_object,
      "/users/register",
      formData
    );
    return response;
  }
  async sign_in(formData) {
    const response = await http_tool.post_request(
      this.axios_object,
      "/users/login",
      formData
    );
    return response;
  }
}
const backend_cnx = new BackendConnection();

export default backend_cnx;
