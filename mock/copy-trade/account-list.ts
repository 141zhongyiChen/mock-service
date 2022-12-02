const Mock = require('mockjs')

export const getAccountList = (req) => {
    const pageIndex = req.body.pageIndex || 1
    const pageSize = pageIndex > 10 ? 0 : req.body.pageSize || 20
    return Mock.mock({
        [`list|${pageSize}`]: [
            {
                userId: '@integer(60, 10000000)',
                serverId: '@integer(60, 10000000)',
                account: '@last(6,10)',
                type: '@integer(2, 3)',
                signal:  {
                    id: '@integer(60, 1000)',
                    description: '@last(11)',
                    userId: '@integer(60, 10000000)',
                    serverId: '@integer(60, 10000000)',
                    account: '@last(6,10)',
                    name: '@string(10, 20)',
                    avatarUrl: '@img(64x64,@color,@last)',
                    smallAvatarUrl: '@img(64x64,@color,@last)',
                    coverUrl: '@img(64x64,@color,@last)',
                    profitSharingRatio: 0.2,
                    minimumInvestment: 0.2,
                    displayDetail: '@boolean()',
                    nationalCode: 'id',
                    createTimestamp: '@integer(1517676345, 1617676345)',
                    views: '@integer(100, 200)',
                    totalProfit: '@float(-100000000000, 100000000000, 0, 3)',
                    equity: '@integer(2000, 10000)',
                    maxDD: '@integer(1000, 100000)',
                    followingAmount: '@float(-100000000000, 100000000000, 0, 3)',
                    followingCount: '@integer(5, 20)',
                    profitByFollowing: '@float(-100000000000, 100000000000, 0, 3)',
                    followingListJson: JSON.stringify({}),
                    'followingList|3-10': [
                        {
                            userId: '@integer(60, 10000000)',
                            serverId: '@integer(60, 10000000)',
                            account: '@last(6,10)',
                            avatarUrl: '@img(64x64,@color,@last)',
                            smallAvatarUrl: '@img(64x64,@color,@last)',
                        }
                    ]
                },
                follower: {
                    avatarUrl: '@img(64x64,@color,@last)',
                    smallAvatarUrl: '@img(64x64,@color,@last)',
                    nationalCode: 'id',
                    createTimestamp: '@integer(1517676345, 1617676345)',
                    totalProfit: '@float(-100000000000, 100000000000, 0, 3)',
                    equity: '@integer(2000, 10000)',
                    profitByFollowing: '@float(-100000000000, 100000000000, 0, 3)',
                    followerUserId: '@integer(1000, 100000)',
                    followerServerId: '@integer(1000, 100000)',
                    followerAccount: '@last(6,10)',
                    signalUserId: '@integer(1000, 100000)',
                    signalServerId: '@integer(1000, 100000)',
                    signalAccount: '@last(6,10)',
                    investment: '@integer(1000, 100000)',
                    maximumProfit: '@integer(1000, 100000)',
                    maximumLoss: '@integer(1000, 100000)',
                    followRatio: '@integer(1000, 100000)',
                    followTimestamp: '@integer(1000, 100000)',
                    floating: '@integer(1000, 100000)',
                    ordersByFollowing: '@integer(1000, 100000)',
                    lotsByFollowing: '@integer(1000, 100000)',
                }
            }
        ]
      }).list
}