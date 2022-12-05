const Mock = require('mockjs')

const getItems = (pageSize: number) => {
    return Mock.mock({
        [`items|${pageSize}`]: [
            {
                signalId: '@integer(60, 1000)',
                userId: '@integer(60, 10000000)',
                serverId: '@integer(60, 10000000)',
                account: '@last(6,10)',
                name: '@string(10, 40)',
                description: '@last(11)',
                avatarUrl: '@img(64x64,@color,@last)',
                coverUrl: '@img(64x64,@color,@last)',
                profitSharingRatio: '@float(0, 90, 0, 2)' + '%',
                minimumInvestment: '@float(0, 90, 0, 2)',
                displayDetail: '@boolean()',
                nationalCode: 'id',
                createTimestamp: '@integer(1517676345, 1617676345)',
                views: '@integer(100, 200)',
                totalProfit: '@float(-100000000000, 100000000000, 0, 3)',
                equity: '@integer(2000, 10000)',
                maxDD: '@integer(1000, 100000)',
                followingAmount: '@float(-100000000000, 100000000000, 0, 3)',
                followingCount: '@float(-100000000000, 100000000000, 0, 3)',
                followerProfit: '@float(-100000000000, 100000000000, 0, 3)',
                'followingList|3-10': [
                    {
                        userId: '@integer(60, 1000)',
                        serverId: '@integer(60, 1000)',
                        account: '@integer(60, 1000)',
                        name: '@last(11)',
                        avatarUrl: '@img(64x64,@color,@last)',
                        smallAvatarUrl: '@img(64x64,@color,@last)',
                        nationalCode: '@last(11)',
                    }
                ],
                followingAccount: '@integer(2000, 10000)',
                favorite: '@boolean()'
            }
        ]
      }).items
}

export const getSignalList = (req) => {
    const pageIndex = req.body.pageIndex || 1
    const pageSize = pageIndex > 10 ? 0 : req.body.pageSize || 20
    if (String(req.body.keyword).includes('search')) {
        return {
            items: [],
            totalCount: 0
        }
    }
    return Mock.mock({
        items: getItems(pageSize),
        totalCount: 152,
      })
}

export const getFavoritesList = (req) => {
    const pageIndex = req.body.pageIndex || 1
    const pageSize = pageIndex > 10 ? 0 : req.body.pageSize || 20
    return getItems(pageSize)
}