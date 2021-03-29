import { API } from './types/api'

const Mock = require('mockjs')

export const getDynamicList = (req): API.Customer.Dynamic.Data => {
  const pageIndex = Number(req.query.pageIndex) || 1;
  const pageSize = Number(req.query.pageSize) || 1;
  
  return Mock.mock({
    [`items|${pageSize}`]: [
      {
            time: '@integer(1614943810000, 1624943810000)',
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