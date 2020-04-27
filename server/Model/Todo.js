import db from './database';
import Sequelize from "sequelize";

const Todo = db.define('todos', {
    task: {
        type: Sequelize.STRING(20)
    }
})

// here we can also add {force: true} it will delete all data if we re run
db.sync().then(res => {
    console.log("db's has been created");
})

export default Todo; 