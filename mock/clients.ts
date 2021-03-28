import { success } from '../utils/res-builder';

const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {

  const { pageIndex, pageSize } = req.query

  res.json(success({
    [`list|${pageSize}`]: [
      {
        'id|+1': (pageIndex - 1) * pageSize + 1,
        username: '@last(6,10)',
        nickname: '@ctitle(3,7)',
        avatar: '@img(64x64,@color,avatar)',
        birthday: '@date()',
        'sex|1': [0, 1],
        email: '@email',
        phone: '@string("number",11)',
        address: '@county(true)',
        createdAt: '@datetime()',
      },
    ],
    total: `@integer(${pageIndex * pageSize},300)`,
    pageIndex,
    pageSize,
  }))
})

module.exports = router;