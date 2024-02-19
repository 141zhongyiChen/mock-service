import { uid, account, img, negative, random, str, bool, millionSeconds } from "../../utils/mock-builder"
import { success } from "../../utils/res-builder"

const Mock = require('mockjs')

const getTradeAccountMyList = (req) => {
    return Mock.mock({
        ['list|4']: [
            {
                id: uid,
                brokerId: uid,
                account,
                index: uid, // 序号
                'status|1': [uid, 1],// 账户连接状态
                nickName: str,
                serverInfo: {
                    brokerName: str,
                    name: str,
                    company: str,
                    logo: img,
                },
                equity: random,
                profit: random,
                signalCount: uid, // 我发布的信号数量
                followerCount: uid,
                followingCount: uid,
            }
        ]
    }).list
}

const getAccountsFollowMyByPage = (req) => {
    const list = Mock.mock({
        [`list|20`]: [
            {
                /**
                 * 跟随 id
                 */
                id: uid,
                /**
                 * 订单 Id
                 */
                order: account,
                /**
                 * 信号 Id
                 */
                signalId: uid,
                /**
                 * 信号名称
                 */
                signalName: str,
                /**
                 * 信号交易商Id
                 */
                signalBrokerId: uid,
                /**
                 * 创建信号的 交易账户
                 */
                signalAccount: account,
                /**
                 * 交易账户 索引
                 */
                signalAccountIndex: account,
                /**
                 * 创建信号的 交易账户 所属服务器名称
                 */
                signalServerName: str,
                /**
                 * 信号提供者 头像
                 */
                signalAvatar: img,
                /**
                 * 信号提供者 昵称
                 */
                signalNickName: str,
                /**
                 * 信号 跟随状态
                 */
                'signalFollowStatus|1': [-1, 0,1],
                /**
                 * 信号 账户状态
                 */
                'signalAccountStatus|1': [0,1],
                /**
                 * 跟随者的信号
                 */
                account,
                /**
                 * 跟随者的账户 交易商id
                 */
                brokerId: uid,
                // 盈利
                profit: random,
                // 信号跟随模式
                'signalFollowMode|1': [1,2],
                // 关注人数设置
                followNumberSet: uid,
                // 频道ID
                channelId: str,
                // 频道名称
                channelName: str
            }
        ]
    }).list

    const pageIndex = req.body.pageSize || 1;
    const pageSize = pageIndex > 10 ? 0 : req.body.pageSize || 20;
    return Mock.mock({
        items: list,
        sum: negative,
        totalCount: `@integer(${pageIndex * pageSize},300)`
    });
}

const getMyFollowSignalsByPage = (req) => {
    const list = Mock.mock({
        [`list|20`]: [
            {
                /**
                 * 跟随 id
                 */
                id: uid,
                /**
                 * 订单 Id
                 */
                order: account,
                /**
                 * 信号 Id
                 */
                signalId: uid,
                /**
                 * 信号名称
                 */
                signalName: str,
                /**
                 * 信号交易商Id
                 */
                signalBrokerId: uid,
                /**
                 * 创建信号的 交易账户
                 */
                signalAccount: account,
                /**
                 * 交易账户 索引
                 */
                signalAccountIndex: account,
                /**
                 * 创建信号的 交易账户 所属服务器名称
                 */
                signalServerName: str,
                /**
                 * 信号提供者 头像
                 */
                signalAvatar: img,
                /**
                 * 信号提供者 昵称
                 */
                signalNickName: str,
                /**
                 * 信号 跟随状态
                 */
                'signalFollowStatus|1': [-1, 0,1],
                /**
                 * 信号 账户状态
                 */
                'signalAccountStatus|1': [0,1],
                /**
                 * 跟随者的信号
                 */
                account,
                /**
                 * 跟随者的账户 交易商id
                 */
                brokerId: uid,
                // 盈利
                profit: random,
                // 信号跟随模式
                'signalFollowMode|1': [1,2],
                // 关注人数设置
                followNumberSet: uid,
                // 频道ID
                channelId: uid,
                // 频道名称
                channelName: str
            }
        ]
    }).list
    
    const pageIndex = req.body.pageSize || 1;
    const pageSize = pageIndex > 10 ? 0 : req.body.pageSize || 20;
    return Mock.mock({
        items: list,
        sum: random,
        totalCount: `@integer(${pageIndex * pageSize},300)`
    });
}

const getFollowInfo = (req) => {
    return Mock.mock({
        list: {
                /**
                 * 跟随 id
                 */
                id: uid,
                /**
                 * 订单 Id
                 */
                order: uid,
                /**
                 * 信号 Id
                 */
                signalId: uid,
                /**
                 * 信号提供者 头像
                 */
                signalAvatar: img,
                /**
                 * 信号名称
                 */
                signalName: str,
                /**
                 * 信号提供者 昵称
                 */
                signalNickName: str,
                /**
                 * 信号交易商Id
                 */
                signalBrokerId: uid,
                /**
                 * 创建信号的 交易账户
                 */
                signalAccount: str,
                /**
                 * 交易账户 索引
                 */
                signalAccountIndex: uid,
                /**
                 * 创建信号的 交易账户 所属服务器名称
                 */
                signalServerName: str,
                
                /**
                 * 信号 跟随状态
                 */
                'signalFollowStatus|1': [-1, 0,1],
                
                // 当前用户ID
                userId: uid,
                // 当前用户头像URL
                avatar: img,
                // 当前用户昵称
                nickName: str,
                /**
                 * 跟随者的信号
                 */
                account,
                accountIndex: account,
                /**
                 * 跟随者的账户 交易商id
                 */
                brokerId: uid,
                // 盈利
                profit: random,
                equity: random,
                // 信号跟随模式
                'signalFollowMode|1': [1,2],
                // 关注人数设置
                followNumberSet: uid,
                // 频道ID
                channelId: str,
                // 频道名称
                channelName: str,
                isFollowOpen: bool
            }
    }).list
}

const getTradeAccountMyDetail = (req) => {
    return Mock.mock({
        list: {
            id: uid,
            brokerId: uid,
            account,
            index: uid,
            timezone: uid,
            leverage: uid,
            firstBindTime: millionSeconds,
            status: uid,
            serverInfo: {
                brokerName: str,
                name: str,
                company: str,
                logo: img
            },
            'bindRecords|0-4': [
                {
                    bindId: uid,
                    // 绑定状态: number类型
                    status: uid,
                    // 绑定时间: 毫秒
                    bindTime: millionSeconds
                }
            ]
        }
    }).list
}


const useRouter = (router) => {
      router.get('/tradeAccount/my/list', async (req, res, next) => {
        res.json(await success(getTradeAccountMyList(req)))
      })

      router.get('/follow/getAccountsFollowMyByPage', async (req, res, next) => {
        res.json(await success(getAccountsFollowMyByPage(req)))
      })

      router.get('/follow/getMyFollowSignalsByPage', async (req, res, next) => {
        res.json(await success(getMyFollowSignalsByPage(req)))
      })

      router.get('/follow/getFollowInfo/:id(\\d+)', async (req, res, next) => {
        res.json(await success(getFollowInfo(req)))
      })

      router.get('/tradeAccount/my/detail', async (req, res, next) => {
        res.json(await success(getTradeAccountMyDetail(req)))
      })
}

export default useRouter;