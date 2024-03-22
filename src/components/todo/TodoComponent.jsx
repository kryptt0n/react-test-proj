import { useEffect, useState } from "react";
import { retrieveToDoApi } from "../api/TodoAPIService";
import { useAuth } from "./security/AuthContext"
import { useParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";

export default function TodoComponent() {

    const authContext = useAuth();
    const username = authContext.username;
    const {id} = useParams();
    const [description, setDescription] = useState(null)
    const [targetDate, setTargetDate] = useState(null)


    useEffect(() => refreshTodo(), [id])

    function refreshTodo() {
        retrieveToDoApi(username, id)
        .then((respone) => {
            console.log(respone)
            setDescription(respone.data.description)
            setTargetDate(respone.data.targetDate)
        }
        )
        .catch((error) => errorTodos(error));

    }

    function errorTodos(error) {
        console.log(error);
    }

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <div className="container">
            <h1>To do details:</h1>
            <div>
                <Formik initialValues={{description, targetDate}}
                enableReinitialize = {true}
                onSubmit={onSubmit}>
                {
                    (props) => (
                        <Form>
                            <fieldset>
                                <label>Description</label>
                                <Field type='text' name='description'></Field>
                            </fieldset>
                            <fieldset>
                                <label>Target date</label>
                                <Field type='date' name='targetDate'></Field>
                            </fieldset>
                            <button type="submit">Save</button>
                        </Form>
                    )
                }
                </Formik>
            </div>
        </div>
    )
}