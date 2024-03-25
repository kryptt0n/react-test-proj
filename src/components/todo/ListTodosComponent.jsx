import { useEffect, useState } from "react";
import { deleteToDoApi, retrieveTodosApi } from "../api/TodoAPIService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 2, today.getMonth());

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)

    const authContext = useAuth();
    const username = authContext.username;
    const navigate = useNavigate();


    useEffect(() => refreshTodos())

    function refreshTodos() {
        retrieveTodosApi(username)
        .then((respone) => successTodos(respone))
        .catch((error) => errorTodos(error));
        // setTodos(retrieveTodos('vitaly'));
    }

    function successTodos(respone) {
        setTodos(respone.data);
    }

    function errorTodos(error) {
        console.log(error);
    }

    function deleteToDo(id) {
        deleteToDoApi(username, id)
        .then((response) =>
        {
            setMessage(`Deleted todo with id = ${id}`);
            refreshTodos();
        })
        .catch((error) => errorTodos(error));
    }

    function updateToDo(id) {
        console.log(`updated ${id}`);
        navigate(`/todo/${id}`)
    }

    return (
        <div className="container">
            <h1>Things you want to do</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <table className='table'>
                <thead>
                    <tr>
                        <th>Desctiption</th>
                        <th>Is done?</th>
                        <th>Date</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate}</td>
                                <td><button className="btn btn-danger" onClick={() => deleteToDo(todo.id)}>Delete</button></td>
                                <td><button className="btn btn-success" onClick={() => updateToDo(todo.id)}>Update</button></td>
                            </tr>)
                        )
                    }
                    
                </tbody>
            </table>
            <button type="submit" className="btn btn-success m-4" onClick={() => updateToDo(-1)}>Add new Todo</button>
        </div>
    )
}