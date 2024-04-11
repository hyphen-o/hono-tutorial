import { Hono } from 'hono'


const memo = new Hono()

memo.get('/memo', (c) => {
  return c.json({
    message: 'メモ'
  })
})

export default memo