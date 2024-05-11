import axios from "axios";

export const serverConfig = axios.create({
    baseURL: "http://ESP_IP/",
});
