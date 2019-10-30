const router = require('koa-router')()

router.prefix('/api/user')

router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body
  ctx.body = {
    errno: 0,
    username,
    password
  }
})

router.get('/session-test', async (ctx, next) => {
  if(ctx.session.viewCount === undefined) {
    ctx.session.viewCount = 0
  }
  ctx.session.viewCount++
  ctx.body={
    count : ctx.session.viewCount
  }
})


module.exports = router
