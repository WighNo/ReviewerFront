import axios from "axios";
import RequestsConfig from "./requestConfig";

export default class AuthorizationRequests {
    static #basePart = 'authentication'

    static async login(data) {
        const response = await axios.post(`${RequestsConfig.BaseUrl}/${this.#basePart}/login`, data);
        return response.data
    }

    static async register(data) {
        const response = await axios.post(`${RequestsConfig.BaseUrl}/${this.#basePart}/register`, data)
        return response.data
    }
}