import express from 'express';
import controller from '../Controller/index';
const router = express.Router()

router.get('/', controller.showTodos);
router.post('/', controller.saveTodo);
router.put('/:id', controller.editTodo);
router.delete('/:id', controller.deleteTodo);

export default router; 