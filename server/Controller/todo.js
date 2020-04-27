import Todo from "../Model/Todo";

export const showTodos = async (req, res) => {
    try {
        let todos = await Todo.findAll()
        return res.json({
            status: 200,
            message: "working",
            data: todos
        })
    } catch (error) {
        return res.json({
            status: 500,
            message: "not found"
        })

    }
}

export const saveTodo = async (req, res) => {
    try {
        let { task } = req.body
        let todos = await Todo.create({
            task: task
        })
        return res.json({
            status: 201,
            message: "saved",
            result: todos
        })
    } catch (error) {
        return res.json({
            status: 502,
            message: "not saved"
        })
    }
}

export const editTodo = async (req, res) => {
    try {
        let { id } = req.params
        let { task } = req.body
        let todos = await Todo.update({
            task: task
        }, {
            where: { id: id }
        })
        return res.json({
            status: 202,
            message: "updated",
            result: todos
        })
    } catch (error) {
        return res.json({
            status: 304,
            message: "not updated",
            error: error
        })
    }
}

export const deleteTodo = async (req, res) => {
    try {
        let { id } = req.params
        console.log(id)
        let todos = await Todo.destroy({ where: { id: id } })
        return res.json({
            status: 202,
            message: "deleted",
            result: todos
        })
    } catch (error) {
        return res.json({
            status: 502,
            message: "not deleted",
            error: error
        })
    }
}