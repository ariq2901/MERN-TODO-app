import { Document } from 'mongoose'

export interface Todo extends Document {
  title: String
  status: 'completed' | 'uncompleted'
}