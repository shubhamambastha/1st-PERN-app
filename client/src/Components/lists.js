import React, { Fragment, useState, useEffect } from 'react';
import { getTodo, deleteTodo } from '../ActionCreators/actions';
import EditTodo from './edit'

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

    const removeTodo = async (id) => {
        try {
            let todo = await deleteTodo(id);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.log(error);
        }
    }

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
                                <EditTodo todo={todo} />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeTodo(todo.id)}
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