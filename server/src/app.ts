import express, { Request, Response } from 'express';

const app = express()
const PORT = 8001

app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Express')
})

app.get('/about', (req: Request, res: Response) => {
  res.send('This is about route')
})

app.listen(PORT, () => {
  console.info(`App is listening on port ${PORT}`)
})