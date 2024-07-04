import axios from "axios";

const serverUrl = "http://localhost:3000";
const instance = axios.create({ baseUrl: serverUrl });

export default instance;
