import { useState } from 'react';
import {useParams, Link} from 'react-router-dom'
import { retrieveHelloWorld, retrieveHelloWorldParam } from '../api/HelloWorldAPIService';

export default function WelcomeComponent() {

    const {username} = useParams();

    const [message, setMessage] = useState(null);

    function callHelloWorldAPI() {

        retrieveHelloWorldParam(username)
        .then((response) => successHandle(response))
        .catch((error) => errorHandle(error))
        .finally("Clean")
    }

    function successHandle(response) {
        setMessage(response.data.text);
    }

    function errorHandle(error) {
        console.log(error);
    }

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            Your <Link to="/todos">todos</Link>
            
            <button type='button' className='btn btn-success m-5' onClick={callHelloWorldAPI}>
                Call Hello World
            </button>
            <div>{message}</div>
        </div>
    )
}