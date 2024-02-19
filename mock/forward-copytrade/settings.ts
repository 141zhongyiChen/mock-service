import { uid, account, img, negative, random, str, bool, millionSeconds } from "../../utils/mock-builder"
import { success } from "../../utils/res-builder"

const Mock = require('mockjs')

const getSeverInfo = (req) => {
  return Mock.mock({
    data: {
      id: uid,
      brokerId: uid,
      apiBrokerId: uid,
      serverType: uid,
      brokerName: str,
      name: str,
      company: str,
      logo: img,
    }
  }).data
}
const connectSever = (req) => {
  return Mock.mock({
    data: {
      bindId: uid,
      status: uid
    }
  }).data
}
const getConnectStatus = (req) => {
  return Mock.mock({
    data: {
      bindId: uid,
      status: uid
    }
  }).data
}

const getSeverListByName = (req) => {
  const list = Mock.mock({
    ['list|20']: {
      id: uid,
      brokerId: uid,
      apiBrokerId: uid,
      serverType: uid,
      brokerName: str,
      name: str,
      company: str,
      logo: img,
    }
  }).list
}

const getSignalManageAuth = (req) => {
  return Mock.mock({
    data: bool
  }).data
}

const getTradingPreference = (req) => {
  return Mock.mock({
    minLotLimitMode: uid
  }).data
}
const setTradingPreference = (req) => {
  return Mock.mock({
    minLotLimitMode: uid
  }).data
}

const getHasSignal = (req) => {
  return Mock.mock({
    data: bool
  }).data
}
const getSignalSetInfo = (req) => {
  return Mock.mock({
    data: {
      /**
      * 信号允许的交易商
      */
      allowBrokers: Mock.mock({
        ['list|20-50']: [
          {
            'associationBrokerIds|+1': [uid, uid, uid],
            brokerId: uid,
            brokerName: str
          }
        ]
      }).list,
      /**
       * 用在的频道
       */
      'channelInfos|1-4': Mock.mock({
        'list|1-4': [
          {
            channelId: uid,
            channelName: str
          }
        ]
      }).list,
      /**
       * 信号id
       */
      id: uid,
      /**
       * 是否允许跟随
       */
      isAllowCopy: bool,
      /**
       * 是否能够删除
       */
      isCanRemove: bool,
      /**
       * 最小跟随资金
       */
      minFollowCapital: uid,
      /**
       * 信号名称
       */
      signalName: str,
      /**
       * 策略描述
       */
      strategyDescription: str
    }
  }).data
}
const deleteSignal = (req) => {
  return Mock.mock({
    data: bool
  }).data
}
const editChannel = (req) => {
  return Mock.mock({
    data: str
  }).data
}

const getTradeAccountList = (req) => {
  const list = Mock.mock({
    ['list|20']: [
      {
        /**
        * 交易商Id
        */
        brokerId: random,
        /**
         * 净值
         */
        equity: random,
        id: uid,
        /**
         * 序号
         */
        index: uid,
        /**
         * 用户昵称
         */
        nickName: str,
        /**
         * 盈亏
         */
        profit: random,
        serverInfo: Mock.mock({
          data: {
            brokerName: str,
            company: str,
            logo: img,
            name: str
          }
        }).data,
        'status|1': [0,1],
        /**
         * 用户id
         */
        userId: uid,
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
const submitInvite = (req) => {
  return Mock.mock({
    data: str
  }).data;
}

const getSignalInviteInfo = (req) => {
  return Mock.mock({
    data: {
      id: uid,
      inviteStatus: random,
      communityId: random,
      communityName: str,
      brokeId: uid,
      brokeName: str,
      account: account,
      accountIndex: account,
      applicantUserId: uid,
      applicant: str,
      applicationTime: millionSeconds,
      isReceiveUser: bool
    }
  }).data;
}
const signalInviteApproval = (req) => {
  return Mock.mock({
    data: str
  }).data;
}
const signalInviteReject = (req) => {
  return Mock.mock({
    data: str
  }).data;
}
const getSignalList = (req) => {
  return Mock.mock({
    'list|20': [
      {
        id: uid,
        signalName: str,
        userId: uid,
        avatar: img,
        nickName: str,
        account: account,
        accountIndex: account,
        serverName: str,
        equity: random
      }
    ]
  }).list;
}
const addSignal = (req) => {
  return Mock.mock({
    data: random
  }).data;
}
const getTradeAccountInfo = (req) => {
  return Mock.mock({
    data: {
      accountIndex: account,
      serverName: str,
      nickName: str,
      logo: img,
      profit: random,
      equity: random,
      status: random
    }
  }).data;
}

const useRouter = (router) => {
  router.get('/tradeAccount/bind/server/:id(\\d+)', async (req, res, next) => {
    res.json(await success(getSeverInfo(req)))
  })
  router.post('/tradeAccount/bind', async (req, res, next) => {
    res.json(await success(connectSever(req)))
  })
  router.get('/tradeAccount/bind/result', async (req, res, next) => {
    res.json(await success(getConnectStatus(req)))
  })

  router.get('/tradeAccount/bind/servers', async (req, res, next) => {
    res.json(await success(getSeverListByName(req)))
  })

  router.get('/userInfo/isManager', async (req, res, next) => {
    res.json(await success(getSignalManageAuth(req)))
  })

  router.get('/user/setting/getTradingPreference', async (req, res, next) => {
    res.json(await success(getTradingPreference(req)))
  })
  router.post('/user/setting/setTradingPreference', async (req, res, next) => {
    res.json(await success(setTradingPreference(req)))
  })

  router.get('/signalManage/isCommunityHasSignal/:id(\\d+)', async (req, res, next) => {
    res.json(await success(getHasSignal(req)))
  })
  router.get('/signalManage/viewSignalSetInfo', async (req, res, next) => {
    res.json(await success(getSignalSetInfo(req)))
  })
  router.post('/signalManage/deleteSignal/:id(\\d+)', async (req, res, next) => {
    res.json(await success(deleteSignal(req)))
  })
  router.post('/signalManage/setSignalChannel', async (req, res, next) => {
    res.json(await success(editChannel(req)))
  })

  router.get('/tradeAccount/community/list', async (req, res, next) => {
    res.json(await success(getTradeAccountList(req)))
  })
  router.post('/signalInvite/request', async (req, res, next) => {
    res.json(await submitInvite(getSeverInfo(req)))
  })

  router.get('/signalInvite/info/:id(\\d+)', async (req, res, next) => {
    res.json(await success(getSignalInviteInfo(req)))
  })
  router.post('/signalInvite/approval', async (req, res, next) => {
    res.json(await success(signalInviteApproval(req)))
  })
  router.post('/signalInvite/reject/:id(\\d+)', async (req, res, next) => {
    res.json(await success(signalInviteReject(req)))
  })
  router.get('/signalManage/getSignalListByAccount', async (req, res, next) => {
    res.json(await success(getSignalList(req)))
  })
  router.post('/signalManage/createSignal', async (req, res, next) => {
    res.json(await success(addSignal(req)))
  })
  router.get('/tradeAccount/getTradeAccountInfo', async (req, res, next) => {
    res.json(await success(getTradeAccountInfo(req)))
  })
}

export default useRouter;