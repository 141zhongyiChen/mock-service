import { API } from './types/api'

const Mock = require('mockjs')

export const getCallbackList = (req): API.Callback.Data => {
  const pageIndex = Number(req.query.pageIndex) || 1;
  const pageSize = Number(req.query.pageSize) || 1;
  
  return Mock.mock({
    [`items|${pageSize}`]: [
      {
            time: '@integer(1517676345, 1617676345)',
            code: '@last(6,10)',
            content: '@ctitle(10,80)',
            nickName: '@last(6,10)'
      },
    ],
    totalCount: 200, //`@integer(${pageIndex * pageSize},300)`,
    pageIndex,
    pageSize
  })
}

export const addCallback = () => {
  return null
}