import {Hono} from 'hono'
import memo from './memo'

const api = new Hono()
api.get('/api/hc', (c) => {
  return c.json({
    message: "Health good!"
  })
})
api.route('/api', memo)

export default api