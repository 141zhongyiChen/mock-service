import { uid, account, img, negative, random, str, bool, millionSeconds } from "../../utils/mock-builder"
import { success } from "../../utils/res-builder"

const Mock = require('mockjs')

const setAllowCopy = (req) => {
  return Mock.mock({
        'code|1': [0, 200, 401, 403, 23208947] 
    });
}
const setSignalName = (req) => {
  return Mock.mock({
        'code|1': [0, 200, 401, 403, 23208947] 
    });
}
const setSignalDesc = (req) => {
  return Mock.mock({
        'code|1': [0, 200, 401, 403, 23208947] 
    });
}
const setMinCapital = (req) => {
  return Mock.mock({
        'code|1': [0, 200, 401, 403, 23208947] 
    });
}
const setBrokers = (req) => {
  return Mock.mock({
        'code|1': [0, 200, 401, 403, 23208947] 
    });
}
const setChannels = (req) => {
  return Mock.mock({
        'code|1': [0, 200, 401, 403, 23208947] 
    });
}

const getBrokerRecommend = (req) => {
  return Mock.mock({
    data: {
      'current|2-4': [
        {
          brokerId: uid,
          brokerName: str
        }
      ],
      'recommend|2-4': [
        {
          brokerId: uid,
          brokerName: str
        }
      ]
    }
  }).data
}

const getBrokerSearch = (req) => {
  const list = Mock.mock({
    ['list|20']: [
      {
        brokerId: uid,
        brokerName: str
      }
    ]
  }).list

  const pageIndex = req.body.pageSize || 1;
    const pageSize = pageIndex > 10 ? 0 : req.body.pageSize || 20;
    return Mock.mock({
        items: list,
        totalCount: `@integer(${pageIndex * pageSize},300)`
    });
}

const copySignal = (req) => {
  return Mock.mock({
    data: {
      id: uid, // order id
      signalAvatar: img,
      signalName: str,
      signalNickName: str,
      signalAccount: account,
      signalAccountIndex: account,
      signalServerName: str,
      nickName: str,
      account: account,
      accountIndex: account,
      serverName: str,
      'signalFollowMode|1': [1,2],
      followNumberSet: uid,
      startTime: millionSeconds, // 毫秒
    }
  }).data
}

const getSignalWithCountPageByAccount = (req) => {
  const list = Mock.mock({
    ['list|20']: [
      {
        id: uid,
        signalName: str,
        userId: str,
        avatar: img,
        nickName: str,
        account: account,
        accountIndex: account,
        'accountStatus|1': [0, 1],
        serverName: str,
        totalProfit: uid,
        equity: uid,
        communityCount: uid,
        channelCount: uid,
        followAccountCount: uid,
      }
    ]
  }).list

  const pageIndex = req.body.pageSize || 1;
    const pageSize = pageIndex > 10 ? 0 : req.body.pageSize || 20;
    return Mock.mock({
        items: list,
        totalCount: `@integer(${pageIndex * pageSize},300)`
    });
}

const useRouter = (router) => {
  router.post('/signalManage/updateSignalAllowCopy', async (req, res, next) => {
    res.json(await success(setAllowCopy(req)))
  })
  router.post('/signalManage/updateSignalName', async (req, res, next) => {
    res.json(await success(setSignalName(req)))
  })
  router.post('/signalManage/updateSignalDescription', async (req, res, next) => {
    res.json(await success(setSignalDesc(req)))
  })
  router.post('/signalManage/updateSignalMinFollowCapital', async (req, res, next) => {
    res.json(await success(setMinCapital(req)))
  })
  router.post('/signalManage/setSignalAllowBroker', async (req, res, next) => {
    res.json(await success(setBrokers(req)))
  })
  router.post('/signalManage/setSignalChannel', async (req, res, next) => {
    res.json(await success(setChannels(req)))
  })

  router.get('/broker/recommend', async (req, res, next) => {
    res.json(await success(getBrokerRecommend(req)))
  })

  router.get('/broker/search', async (req, res, next) => {
    res.json(await success(getBrokerSearch(req)))
  })

  router.post('/follow/create', async (req, res, next) => {
    res.json(await success(copySignal(req)))
  })

  router.get('/signalManage/getSignalWithCountPageByAccount', async (req, res, next) => {
    res.json(await success(getSignalWithCountPageByAccount(req)))
  })
}

export default useRouter;