import { Hono } from 'hono'
import api from './routes'

const app = new Hono()

app.route('/', api)

export default app
