export default class IdentityStorage {
    static #accessTokenKey = "AccessToken"

    static setAccessToken(token) {
        localStorage.setItem(this.#accessTokenKey, token)
    }

    static getAccessToken() {
        return localStorage.getItem(this.#accessTokenKey)
    }
}