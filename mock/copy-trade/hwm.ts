const Mock = require('mockjs')

export const getAccountList = (req) => {
    const pageIndex = req.body.pageIndex || 1

    const pageSize = pageIndex > 3 ? 0 : req.body.pageSize || 20

    const getFollower = () => {
        return Mock.mock({
            userId: '@integer(60, 10000000)',
            serverId: '@integer(60, 10000000)',
            account: '@integer(60, 100)' + ''
        })
    }

    const getSettlementCycleTime = () => {
        return Mock.mock({
            utc: '@Date()',
            'zone|1': [2,5,7],
            currentTime: '@Date()',
            timestamp: '@integer(1517676345, 1617676345)'
        })
    }

    return Mock.mock({
        [`items|${pageSize}`]: [
            {
                id: '@integer(60, 10000000)',
                follower: getFollower(),
                signal: getFollower(),
                
                investment: '@integer(60, 10000000)',
                followRatio: '@integer(60, 10000000)',
                followerProfit: '@integer(60, 10000000)',
                highWater: '@integer(60, 10000000)',
                profitSharingRatio: '@integer(60, 10000000)',
                profitSharingAmount: '@integer(60, 10000000)',
                followTimestamp: '@integer(60, 10000000)',
                settlementCycleStartTime: getSettlementCycleTime(),
                settlementCycleEndTime: getSettlementCycleTime(),
                createTimestamp: '@integer(60, 10000000)'
            }
        ],
        sum: {
            profitSharingAmount: '@integer(60, 10000000)'
        },
        totalCount: 109
      })
}