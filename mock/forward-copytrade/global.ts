import { success } from '../../utils/res-builder';

const Mock = require('mockjs')

const getUserInfo = (req) => {
    return Mock.mock({
        id: '@integer(60, 1000)',
        nickName: '@last(11)',
        avatar: '@img(64x64,@color,avatar)',
        externalId: '@integer(60, 10000000)',
        email: '@email()',
    })
}

const getUserInfoExternal = (req) => {
    return Mock.mock({
        id: '@integer(60, 1000)',
        nickName: '@last(11)',
        avatar: '@img(64x64,@color,avatar)',
        email: '@email()',
        nation: '@integer(60, 100)',
        mobile: '@last(11)'
    })
}

const getCommunityList = (req) => {
    return Mock.mock({
        ['list|4']: [
            {
                'id|+1': [34,35,36,37],
                'communityName|+1': [
                    'Test1 communityName communityName',
                    'Test1238409287409237',
                    'fadf09uq0jlkhaklh23',
                    'communityNamecommunityNamecommunityName',
                ],
                icon: '@img(64x64,@color,avatar)'
            }
        ]
    }).list
}

const getChannelList = (req) => {
    return Mock.mock({
        ['list|4']: [
            {
                'id|+1': [3004,3005,3006,3007],
                'channelName|+1': [
                    'Test1 channelName channelName',
                    'Test1238409287409237',
                    'fadf09uq0jlkhaklh23',
                    'ChannelNamechannelNamechannelName',
                ],
                categoryId: '@integer(60, 1000)',
                categoryName: '@last(11)'
            }
        ]
    }).list
}

const useRouter = (router) => {
    router.get('/userInfo/external/my', async (req, res, next) => {
        res.json(await success(getUserInfoExternal(req)))
      })
      
      router.get('/userInfo/my', async (req, res, next) => {
        res.json(await success(getUserInfo(req)))
      })
      
      router.get('/community/getChannelList', async (req, res, next) => {
        res.json(await success(getChannelList(req)))
      })
        
      router.get('/community/getCommunityList', async (req, res, next) => {
        res.json(await success(getCommunityList(req)))
      })
}

export default useRouter;

