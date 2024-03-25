import axios from 'axios';

const apiClient = axios.create(
    {
        baseURL : 'http://localhost:8080'
    }
)

export const retrieveTodosApi = (username) => apiClient.get(`/users/${username}/todos`);

export const deleteToDoApi = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`);

export const retrieveToDoApi = (username, id) => apiClient.get(`/users/${username}/todos/${id}`);

export const updateToDoApi = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo);

export const addToDoApi = (username, todo) => apiClient.post(`/users/${username}/todos`, todo);