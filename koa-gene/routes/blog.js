const router = require('koa-router')()

router.prefix('/api/blog')

router.get('/list', async (ctx, next) => {
  const query = ctx.query
  ctx.body = {
    errno: 0,
    data: ['列表'],
    query,
    ctx
  }
})

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

module.exports = router
