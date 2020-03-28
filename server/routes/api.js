const router = require('koa-router')()
const axios = require('axios')
const LRU = require('lru-cache')

const cache = new LRU(1000 * 60 * 60)

router.get('/', async (ctx, next) => {
  const c = cache.get('commonIndex')
  let res
  if (c) {
    res = c
  } else {
    res = await axios('https://www.chandashi.com/apps/globalrank_json/appId/930368978/country/cn.html')
    cache.set('commonIndex', res)
  }

  ctx.body = res.data
})

router.get('/2', async (ctx, next) => {
  const c = cache.get('commonIndex')
  let res
  if (c) {
    res = c
  } else {
    res = await axios('https://www.chandashi.com/apps/ratingchart/appId/930368978/country/cn.json?startDay=20200309&endDay=20200324&type=growth')
    cache.set('commonIndex', res)
  }

  ctx.body = res.data
})

module.exports = router
