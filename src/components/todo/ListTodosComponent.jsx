export default function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 2, today.getMonth());
    const todos = [{id: 1, description: "Learn AWS", isDone: false, targetDate: targetDate},
    {id: 2, description: "Learn Full-stack", isDone: false, targetDate: targetDate},
    {id: 3, description: "Learn Java", isDone: false, targetDate: targetDate}]

    return (
        <div className="container">
            <h1>Things you want to do</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Desctiption</th>
                        <th>Is done?</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.isDone.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                            </tr>)
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    )
}