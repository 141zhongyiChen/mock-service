import { API } from './types/api'

const Mock = require('mockjs')

export const getUserList = (req): API.User.All.Data => {
  const pageIndex = Number(req.body.pageIndex) || Number(req.query.pageIndex) || 1;
  const pageSize = Number(req.body.pageSize) || Number(req.query.pageSize) || 1;
  
  return Mock.mock({
    [`items|${pageSize}`]: [
      {      
            'id|+1': (pageIndex - 1) * pageSize + 1,
            uid: '@integer(60, 10000000)',
            nickName: '@last(6,10)',
            serviceArea: '@city()',
            country: '@ctitle(3,4)',
            'gender|1': [0, 1],
            'userStatus|1': [1,2,3],
            'auditState|1': [0,1,2,3,4,5], 
            followingCount: '@integer(60, 100)',
            followersCount: '@integer(60, 100)',
            blogCount: '@integer(60, 100)',
            connectedCount: '@integer(60, 100)',
            createTime: '@integer(1614943810000, 1624943810000)',
            lastLoginTime: '@integer(1614943810000, 1624943810000)',
            callbackTime: '@integer(1614943810000, 1624943810000)',
            // approvedTime: '@integer(1614943810000, 1624943810000)',
            // lastTradeTime: '@integer(1614943810000, 1624943810000)',
            'tags|3-10': [
                {
                    'tagId|+1': (pageIndex - 1) * pageSize + 1,
                    tagName: '@ctitle(3,7)',
                    'tagOwnerType|1': [1,2,3],
                    tagUsageCategory: '@integer(60, 100)',
                    'groupId|1-4': [74, 77, 79, 80, 81]
                }
            ],
            'favoriteGroups|4': [
                '@integer(60, 100)'
            ],
            avatar: '@img(64x64,@color,avatar)',
            supporterId: '@integer(60, 100)',
            supporterName: '@last(6,10)',
            supporterAvatar: '@img(64x64,@color,avatar)'
      },
    ],
    totalCount: 20, //`@integer(${pageIndex * pageSize},300)`,
    pageIndex,
    pageSize
  })
}