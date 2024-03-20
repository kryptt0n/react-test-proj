import axios from 'axios';

const apiClient = axios.create(
    {
        baseURL : 'http://localhost:8080'
    }
)

export const retrieveHelloWorld = () => apiClient.get("/hello-world-bean");

export const retrieveHelloWorldParam = (name) => apiClient.get(`/hello-world-bean/path/${name}`);