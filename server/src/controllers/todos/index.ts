import { Request, Response } from 'express'

import TodoModel from '../../models/todo'
import { Todo } from '../../types/todo'

export const getTodos = async (req: Request, res: Response) => {
  const todos: Todo[] = await TodoModel.find()

  res.status(200).json({ todos })
}

export const getTodo = async (req: Request, res: Response) => {
  await TodoModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.status(400).json({
        error: err
      })
    } else {
      res.status(200).json({
        result
      })
    }
  })
}

export const addTodo = async (req: Request, res: Response) => {
  const body: Pick<Todo, 'title' | 'status'> = req.body

  if (!body.title || !body.status) {
    res.status(422).json({
      status: 422,
      errorMessage: `ValidationError: Todo validation failed: title: ${body.title}, status: ${body.status}`
    })

    return
  }

  const newTodoModel = new TodoModel({
    title: body.title,
    status: body.status
  })

  const newTodo = await newTodoModel.save()
  const updatedAllTodosAfterSave = await TodoModel.find()

  res.status(201).json({
    message: 'Todo successfully added!',
    addedTodo: newTodo,
    allTodosAfterAddition: updatedAllTodosAfterSave
  })
}