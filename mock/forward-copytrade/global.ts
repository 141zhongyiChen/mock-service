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
                id: '@integer(60, 1000)',
                communityName: '@last(11)',
                icon: '@img(64x64,@color,avatar)'
            }
        ]
    }).list
}

const getChannelList = (req) => {
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

