/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-namespace */
import { Types } from '../../../../types/types';
import { PAGE } from '../../../../types/page';
import {
    GENDER,
    USER_STATUS,
    ACCOUNT_TYPE,
    TAG_OWNER_TYPE,
    SEARCH_TYPE
} from '../../../../types/enum-const';

declare module '../../../../types/api/index' {
    export namespace API.Customer.Summary {
        export namespace GetList {
            export interface Params extends PAGE.OrderBy {
                supporterId: number;
                beginTime: number;
                endTime: number;
            }

            export interface Item {
                supporterId: number;
                nickName: string;
                openCount: number;
                withdrawl: number;
                depots: number;
                volume: number;
                member: number;
                groupName: string;
                status: boolean;
                joined: number;
            }

            export interface MaxCountCollection {
                maxOpenCount: number;
                maxWithdrawl: number;
                maxDepots: number;
                maxVolume: number;
            }

            export interface Data extends MaxCountCollection {
                list: Item[];
            }

            export type Response = Types.Response.All<Data>;
        }
    }

    /**
     * Customer Page - All & Favorites
     *
     * Use The Same DTO
     */
    export namespace API.Customer.All {
        export interface Params extends PAGE.OrderBy, PAGE.Pagination {
            beginJoinedTime: number;
            endJoinedTime: number;
            beginTradeTime: number;
            endTradeTime: number;
            beginLonginTime: number;
            endLonginTime: number;
            beginCallBackTime: number;
            endCallBackTime: number;
            subscribingState: number;
            connectedState: number;
            beginDepositTime: number;
            endDepositTime: number;
            openState: number;
            balanceRange: number;
            volumeRange: number;
            depositRange: number;
            withdrawalRange: number;
            closedRange: number;
            keywordType: SEARCH_TYPE;
            keyword: string;
        }

        export interface Item {
            id: number;
            uid: number;
            nickName: string;
            realName: string;
            birthday: string;
            serviceArea: string;
            country: string;
            gender: GENDER;
            userStatus: USER_STATUS;
            followingCount: number;
            followersCount: number;
            postCount: number;
            fcoin: number;
            connectedCount: number;
            lastLoginTime: number;
            callbackTime: number;
            approvedTime: number;
            lastTradeTime: number;
            tags: Tag[];
            favoriteGroups: number[];
            avatar: string;
            supporterId: number;
            supporterName: string;
            supporterAvatar: string;
            accountinfos: Accountinfo[];
        }

        export interface Tag {
            tagId: number;
            tagName: string;
            tagOwnerType: TAG_OWNER_TYPE;
            tagUsageCategory: number;
            groupId: number;
        }

        export interface Accountinfo {
            uid: number;
            account: string;
            accountIndex: number;
            accountType: ACCOUNT_TYPE;
            balance: number;
            withdrawal: number;
            deposit: number;
            volume: number;
            close: number;
        }

        export interface Data extends PAGE.PageResult<Item>, PAGE.OrderBy {}

        export type Response = Types.Response.All<Data>;
    }

    export namespace API.Customer.Favorites {
        export interface Params extends PAGE.OrderBy, PAGE.Pagination {
            groupId: number;
        }
    }
}
