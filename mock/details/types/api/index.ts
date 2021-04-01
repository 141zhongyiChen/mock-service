import { Types } from '../../../../types/types';
import {
    GENDER,
    USER_STATUS
} from '../../../../types/enum-const';

export namespace API.Details.BaseInfo {
    export interface Params {
        uid: number;
    }
    /**
     * openAccountCount:   >0 客户，否则为用户
     */
    export interface Data {
        id: number;
        uid: number;
        nickName: string;
        phone: string;
        email: string;
        country: string;
        gender: GENDER;
        joinedTime: number;
        callBackTime: number;
        lastLoginTime: number;
        supporterId: number;
        supporterName: string;
        userStatus: USER_STATUS;
        avatar: string;
        realName: string;
        connectedCount: number;
        connectedMaxBalance: number;
        openAccountCount: number; // 开户数
        openMaxBalance: number;
        deposit: number;
        tags: Tag[];
        favoriteGroups: number[];
    }

    export type Response = Types.Response.All<Data>;
}