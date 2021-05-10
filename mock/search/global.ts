import { API } from './types/api'

const Mock = require('mockjs')

export const getGlobalList = (req): API.GlobalSearch.Data => {
  return Mock.mock({
      "key|1": [1,2,3,4,5,6,7,8,9] ,
      ["values|5"]: [
        {
              uid: '@integer(1517676345, 1617676345)',
              content: '@ctitle(10,80)',
              "role|1": [1,2]
        },
      ]
  })
}