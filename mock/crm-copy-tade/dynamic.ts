const Mock = require('mockjs')

export const getDynamicList = (req) => {
    const pageIndex = req.body.pageIndex || 1
    const pageSize = pageIndex > 10 ? 0 : req.body.pageSize || 20

    if (pageIndex > pageIndex) {
        return {
            items: [],
            totalCount: 0
        }
    }

    const getParams = () => {
        return Mock.mock({
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
            'files|1-3': [
                '@img(64x64,@color,@last)'
            ],
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
        })
    }

    return Mock.mock({
        [`items|${pageSize}`]: [
            {
                id: '@integer(60, 1000)',
                customerId: '@integer(60, 1000)',
                name: '@last(11)',
                userId: '@integer(60, 1000)',
                'code|1': [
                    'TradeSignalCreated',
                    'TradeSignalChanged',
                    'TradeSignalStartFollowed',
                    'TradeSignalStopFollowed',
                    'TradeSignalGetProfileSharing',
                    'FollowerAccountCreated',
                    'FollowerFollowSucceed',
                    'FollowerStoppingFollowing',
                    'FollowerStoppedFollowing',
                    'FollowerProfileSharing',
                    'FollowerAccountChanged'
                ],
                'type|1': [5, 6],
                title: '@last(11)',
                content: '@last(6,10)',
                dynamicTime:  '@integer(1517676345, 1617676345)',
                parameters: JSON.stringify(getParams()),
                customerType: 0,
                account: '@integer(10068, 200454)'
            }
        ],
        totalCount: 152,
      })
}