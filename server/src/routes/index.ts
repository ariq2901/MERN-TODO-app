import { Router } from 'express';
import bodyParser from 'body-parser';

import {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo
} from '../controllers/todos';

const router = Router();
const jsonParser = bodyParser.json();

router.get('/api/todos', getTodos);

router.get('/api/todo/:id', getTodo);

router.post('/api/add-todo', jsonParser, addTodo);

router.put('/api/update-todo/:id', jsonParser, updateTodo);

router.delete('/api/delete-todo/:id', jsonParser, deleteTodo);

export default router;
