import React, { Fragment, useState } from "react";
import { editTodo } from '../ActionCreators/actions';

const EditTodo = ({ todo }) => {
    const [task, setTask] = useState(todo.task);

    const updatetask = async e => {
        e.preventDefault();
        try {
            const body = { task };
            const response = await editTodo(todo.id, body)
            window.location = "/";
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Fragment>
            <button
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${todo.id}`}>
                Edit
            </button>
            <div
            class="modal"
            id={`id${todo.id}`}
            onClick={() => setTask(todo.task)}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Todo</h4>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                onClick={() => setTask(todo.task)}>
                                &times;
                            </button>
                        </div>
                        <div class="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={task}
                                onChange={e => setTask(e.target.value)}/>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updatetask(e)}>
                                Edit
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => setTask(todo.task)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditTodo;