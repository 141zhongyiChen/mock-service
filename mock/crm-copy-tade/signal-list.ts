const Mock = require('mockjs')

export const getSignalList = (req) => {
    console.log(req.body);
    const pageIndex = req.body.pageIndex || 1
    const pageSize = pageIndex > 10 ? 0 : req.body.pageSize || 20
    return Mock.mock({
        [`items|${pageSize}`]: [
            {
                signalId: '@integer(60, 1000)',
                userId: '@integer(60, 10000000)',
                serverId: '@integer(60, 10000000)',
                account: '@last(6,10)',
                name: '@last(11)',
                description: '@last(11)',
                avatarUrl: '@img(64x64,@color,avatar)',
                coverUrl: '@img(64x64,@color,avatar)',
                profitSharingRatio: 0.2,
                minimumInvestment: 0.2,
                displayDetail: '@boolean()',
                nationalCode: 'id',
                createTimestamp: '@integer(1517676345, 1617676345)',
                views: '@integer(100, 200)',
                totalProfit: '@integer(2, 10)',
                equity: '@integer(2, 10)',
                maxDD: '@integer(2, 10)',
                followingAmount: '@integer(10, 90)',
                followingCount: '@integer(10, 90)',
                followerProfit: '@integer(10, 90)',
                'followingList|3-10': [
                    {
                        userId: '@integer(60, 1000)',
                        serverId: '@integer(60, 1000)',
                        account: '@integer(60, 1000)',
                        name: '@last(11)',
                        avatarUrl: '@img(64x64,@color,avatar)',
                        smallAvatarUrl: '@img(64x64,@color,avatar)',
                        nationalCode: '@last(11)',
                    }
                ],
                followingAccount: '@last(11)',
                favorite: '@boolean()'
            }
        ],
        totalCount: 152,
      })
}