import { useEffect, useState } from "react";
import { addToDoApi, retrieveToDoApi, updateToDoApi } from "../api/TodoAPIService";
import { useAuth } from "./security/AuthContext"
import { useNavigate, useParams } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function TodoComponent() {

    const authContext = useAuth();
    const username = authContext.username;
    const {id} = useParams();
    const [description, setDescription] = useState(null)
    const [targetDate, setTargetDate] = useState(null)
    const navigate = useNavigate()


    useEffect(() => refreshTodo(), [id])

    function refreshTodo() {
        if (id != -1){
            retrieveToDoApi(username, id)
            .then((respone) => {
                console.log(respone)
                setDescription(respone.data.description)
                setTargetDate(respone.data.targetDate)
            }
            )
            .catch((error) => errorTodos(error));
        }

    }

    function errorTodos(error) {
        console.log(error);
    }

    function onSubmit(values) {
        console.log(values)
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }
        if (id === -1) {
            addToDoApi(username, todo)
            .then((response) => {
                    navigate('/todos');
                }
            )
            .catch((error) => errorTodos(error));
        } else {
            updateToDoApi(username, id, todo)
            .then((response) => {
                    console.log(response);
                    navigate('/todos');
                }
            )
            .catch((error) => errorTodos(error));
        }

    }

    function validate(values) {
        let error = {}
        if (values.description == null || values.description.length === 0) {
            error.description = "Description cannot be empty"
        }
        if (values.targetDate == null || values.targetDate.length === 0) {
            error.targetDate = "Target date cannot be empty"
        }
        return error;
    }

    return (
        <div className="container">
            <h1>To do details:</h1>
            <div>
                <Formik initialValues={{description, targetDate}}
                enableReinitialize = {true}
                onSubmit={onSubmit}
                validate={validate}
                validateOnBlur={false}
                validateOnChange={false}>
                {
                    (props) => (
                        <Form>
                            <ErrorMessage name="description"  render={(msg) => <div className="alert alert-warning">{msg}</div>}/>
                            <ErrorMessage name="targetDate" render={(msg) => <div className="alert alert-warning">{msg}</div>}/>
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