export default class RequestsConfig {
    static BaseUrl = "https://localhost:7256"
    static getImagePath(imageUrl) {
        return `${this.BaseUrl}/${imageUrl}`;
    }
} 