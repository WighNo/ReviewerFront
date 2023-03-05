import axios from "axios";
import RequestsConfig from "./requestConfig";

export default class CatalogRequests {
    static #controllerName = "catalog"

    static async getAllCompanies() {
        const response = await axios.get(`${RequestsConfig.BaseUrl}/${this.#controllerName}/companies/all`);
        return response.data;
    }

    static async getCompany(id) {
        const response = await axios.get(`${RequestsConfig.BaseUrl}/${this.#controllerName}/companies/${id}`);
        return response.data;
    }

    static async getCompanyProducts(companyId) {
        const response = await axios.get(`${RequestsConfig.BaseUrl}/${this.#controllerName}/companies/${companyId}/products/all`);
        return response.data;
    }

    static async getProduct(productId) {
        const response = await axios.get(`${RequestsConfig.BaseUrl}/${this.#controllerName}/products/${productId}`);
        return response.data;
    }
}