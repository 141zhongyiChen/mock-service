import { API } from './types/api'

const Mock = require('mockjs')

export const getAccountList = (req): API.Details.Account.Data => {  
  return Mock.mock({
      ['list|3-10']: [
        {
            brokerId: '@integer(60, 10000000)',
            brokerName: '@last(6,10)',
            brokerIconUrl: '@img(64x64,@color,avatar)',
            account: '@ctitle(3,4)',
            brokerServer: '@ctitle(3,7)',
            accountIndex: '@integer(0, 60)',
            'accountType|1': [0, 1, 2, 3, 4],
            'userType|1': [0,1,2],
            bindTime: '@integer(1517676345, 1617676345)',
            equity: '@integer(60, 10000000)',
            balance: '@integer(60, 10000000)',
            deposit: '@integer(60, 10000000)',
            withdrawal: '@integer(60, 10000000)',
            volume: '@integer(60, 10000000)',
            tradeCount: '@integer(60, 10000000)',
            profit: '@integer(60, 10000000)',
            positionProfit: '@integer(60, 10000000)',
            timezone: '@integer(60, 10000000)',
            leverage: '@integer(60, 10000000)',
            group: '@ctitle(3, 8)',
            lastTradeTime: '@integer(1517676345, 1617676345)',
            readonly: '@boolean()',
            enable: '@boolean()',
            enableDeposit: '@boolean()',
            enableWithdrawal: '@boolean()',
            enableSubscription: '@boolean()'
        }
      ]
  }).list
}