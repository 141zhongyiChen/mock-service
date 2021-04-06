import { Types } from '../../../../types/types';
import {
    USER_STATUS,
    ACCOUNT_TYPE,
    DETAIL_ACCOUNT_TYPE
} from '../../../../types/enum-const';

export namespace API.Details.Account {
    export interface Params {
        userId: number;
    }

    export interface Item {
        brokerId: number;
        brokerName: string;
        brokerIconUrl: string;
        account: string;
        brokerServer: string;
        accountIndex: number;
        accountStatus: USER_STATUS;
        accountType: DETAIL_ACCOUNT_TYPE;
        userType: ACCOUNT_TYPE;
        bindTime: number;
        equity: number;
        balance: number;
        deposit: number;
        withdrawal: number;
        volume: number;
        tradeCount: number;
        profit: number;
        positionProfit: number;
        timezone: number;
        leverage: number;
        group: string;
        lastTradeTime: number;
        readonly: boolean;
        enable: boolean;
        enableDeposit: boolean;
        enableWithdrawal: boolean;
        enableSubscription: boolean;
    }

    export type Data = Item[];

    export type Response = Types.Response.All<Data>;
}