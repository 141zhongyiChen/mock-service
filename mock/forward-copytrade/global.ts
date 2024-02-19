const Mock = require('mockjs')

export const getUserInfo = (req) => {
    return Mock.mock({
        id: '@integer(60, 1000)',
        nickName: '@last(11)',
        avatar: '@img(64x64,@color,avatar)',
        externalId: '@integer(60, 10000000)',
        email: '@email()',
    })
}

export const getUserInfoExternal = (req) => {
    return Mock.mock({
        id: '@integer(60, 1000)',
        nickName: '@last(11)',
        avatar: '@img(64x64,@color,avatar)',
        email: '@email()',
        nation: '@integer(60, 100)',
        mobile: '@last(11)'
    })
}

export const getCommunityList = (req) => {
    return Mock.mock({
        ['list|4']: [
            {
                id: '@integer(60, 1000)',
                communityName: '@last(11)',
                icon: '@img(64x64,@color,avatar)'
            }
        ]
    }).list
}

export const getChannelList = (req) => {
    return Mock.mock({
        ['list|4']: [
            {
                id: '@integer(60, 1000)',
                channelName: '@last(11)',
                categoryId: '@integer(60, 1000)',
                categoryName: '@last(11)'
            }
        ]
    }).list
}


