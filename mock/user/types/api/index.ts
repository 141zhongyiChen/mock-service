/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-namespace */
import { Types } from '../../../../types/types';
import { PAGE } from '../../../../types/page';
import {
    GENDER,
    USER_STATUS,
    TAG_OWNER_TYPE,
    SEARCH_TYPE
} from '../../../../types/enum-const';

    /**
     * User Page - All & Favorites
     *
     * Use The Same DTO
     */
    export namespace API.User.All {
        export interface Params extends PAGE.OrderBy, PAGE.Pagination {
            beginJoinedTime: number;
            endJoinedTime: number;
            beginLongindTime: number;
            endLongindTime: number;
            beginCallBackTime: number;
            endCallBackTime: number;
            keywordType: SEARCH_TYPE;
            keyword: string;
            progress: number;
            connectedState: number;
            subscribingState: number;
            tags: number[];
            source: string;
            status: number;
            terminal: number;
            dynamics: string[];
            countries: string[];
        }

        export interface Item {
            id: number;
            uid: number;
            nickName: string;
            serviceArea: string;
            country: string;
            gender: GENDER;
            auditState: number;
            userStatus: USER_STATUS;
            followingCount: number;
            followersCount: number;
            blogCount: number;
            connectedCount: number;
            createTime: number;
            lastLoginTime: number;
            tags: Tag[];
            favoriteGroups: number[];
            avatar: string;
            supporterName: string;
            supporterId: string;
            supporterAvatar: string;
        }

        export interface Tag {
            tagId: number;
            tagName: string;
            tagOwnerType: TAG_OWNER_TYPE;
            tagUsageCategory: number;
            groupId: number;
        }

        export interface Data extends PAGE.PageResult<Item>, PAGE.OrderBy {}

        export type Response = Types.Response.All<Data>;
    }

    export namespace API.User.Favorites {
        export interface Params extends PAGE.OrderBy, PAGE.Pagination {
            groupId: number;
        }
    }
