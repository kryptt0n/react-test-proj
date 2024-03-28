import { apiClient } from "./ApiClient";

export const retrieveHelloWorld = () => apiClient.get("/hello-world-bean");

export const retrieveHelloWorldParam = (name) => apiClient.get(`/hello-world/path-variable/${name}`, {
    headers: {
        Authorization: 'Basic dml0YWx5OnBhc3N3b3Jk'
    }
});

export const retrieveBasicAuth = (token) => apiClient.get("/basicAuth", {
    headers: {
        Authorization: token
    }
});