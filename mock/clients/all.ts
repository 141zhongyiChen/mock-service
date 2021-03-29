import { API } from './types/api'

const Mock = require('mockjs')

export const getClinetList = (req): API.Customer.All.Data => {
  const pageIndex = Number(req.query.pageIndex) || 1;
  const pageSize = Number(req.query.pageSize) || 1;
  
  return Mock.mock({
    [`items|${pageSize}`]: [
      {        
            uid: '@integer(60, 10000000)',
            nickName: '@last(6,10)',
            realName: '@last(6,10)',
            birthday: '@date()',
            serviceArea: '@city()',
            country: '@ctitle(3,4)',
            'gender|1': [0, 1],
            'userStatus|1': [1,2,3],
            followingCount: '@integer(60, 100)',
            followersCount: '@integer(60, 100)',
            postCount: '@integer(60, 100)',
            fcoin: '@integer(60, 100)',
            connectedCount: '@integer(60, 100)',
            lastLoginTime: '@integer(1614943810000, 1624943810000)',
            callbackTime: '@integer(1614943810000, 1624943810000)',
            approvedTime: '@integer(1614943810000, 1624943810000)',
            lastTradeTime: '@integer(1614943810000, 1624943810000)',
            'tags|3-10': [
                {
                    'tagId|+1': (pageIndex - 1) * pageSize + 1,
                    tagName: '@ctitle(3,7)',
                    'tagOwnerType|1': [1,2,3],
                    tagUsageCategory: '@integer(60, 100)',
                    'groupId|1-4': [74, 77, 81, 83]
                }
            ],
            'favoriteGroups|4': [
                '@integer(60, 100)'
            ],
            avatar: '@img(64x64,@color,avatar)',
            supporterId: '@integer(60, 100)',
            supporterName: '@last(6,10)',
            supporterAvatar: '@img(64x64,@color,avatar)',
            'accountinfos|1': [
                {
                    uid: '@integer(60, 10000000)',
                    account: '@last(6,10)',
                    accountIndex: '@integer(10, 20)',
                    'accountType|1': [1,2],
                    balance: '@integer(60, 100)',
                    withdrawal: '@integer(60, 100)',
                    deposit: '@integer(60, 100)',
                    volume: '@integer(60, 100)',
                    close: '@integer(60, 100)'
                }
            ],
      },
    ],
    totalCount: 200, //`@integer(${pageIndex * pageSize},300)`,
    pageIndex,
    pageSize
  })
}