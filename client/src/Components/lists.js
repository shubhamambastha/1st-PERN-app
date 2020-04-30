import React, { Fragment, useState, useEffect } from 'react';
import { getTodo } from '../ActionCreators/actions';

const List = () => {

    const [todos, setTodos] = useState([])

    useEffect( async ()=>{
        let todo = await getTodo()
        setTodos(todo)
    })

    console.log(todos)
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
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default List