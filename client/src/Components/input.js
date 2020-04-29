import React, { Fragment, useState } from 'react';
import { saveTodo } from '../ActionCreators/actions';

const Input = () => {
    const [task, setTask] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        if(task){
            const body = {task}
            const response = await saveTodo(body);
            window.location = "/";
        } else {
            console.log("please enter")
        }
    };
    return (
        <Fragment>
            <h1 className='text-center mt-5'>Todos</h1>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input 
                    className='form-control' 
                    type ="text" 
                    value = {task}                    
                    onChange={e => setTask(e.target.value)}
                />
                <button className='btn btn-success ml-3'>Add</button>
            </form>
        </Fragment>
    )
}

export default Input;