import React, { Fragment, useState, useEffect } from 'react';
import { getTodo } from '../ActionCreators/actions';

const List = () => {

    const [todos, setTodos] = useState([])

    const fetchData = async () => {
        try {
            let todo = await getTodo()
            setTodos(todo.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Fragment>
            <h2 className='mt-5 text-center'>List Todos</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos && todos.map(todo => (
                        <tr key={todo.id}>
                            <td>
                                {todo.task}
                            </td>
                            <td>
                                Edit{/* <EditTodo todo={todo} /> */}
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    // onClick={() => deleteTodo(todo.todo_id)}
                                    >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default List