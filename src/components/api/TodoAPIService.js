import { apiClient } from "./ApiClient";

export const retrieveTodosApi = (username) => apiClient.get(`/users/${username}/todos`, {
    headers: {
        Authorization: "Basic dml0YWx5OnBhc3N3b3Jk"
    }
});

export const deleteToDoApi = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`);

export const retrieveToDoApi = (username, id) => apiClient.get(`/users/${username}/todos/${id}`);

export const updateToDoApi = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo);

export const addToDoApi = (username, todo) => apiClient.post(`/users/${username}/todos`, todo);