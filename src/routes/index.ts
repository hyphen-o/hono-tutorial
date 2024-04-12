import {Hono} from 'hono'
import memo from './memo'
import { cors } from 'hono/cors'

const api = new Hono()
api.use('/api/*', cors())
api.get('/api/hc', (c) => {
  return c.json({
    message: "Health good!"
  })
})
api.route('/api', memo)

export default api