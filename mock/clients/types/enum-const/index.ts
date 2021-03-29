/* eslint-disable import/named */
/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-namespace */

/**
 * 客户模块命名空间
 */
export namespace Customer {
    /**
     * 路由前缀
     */
    export const PagePrefix = 'customers';
    /**
     * 路由 name 连接符
     */
    export const ConnectionChar = '_';

    /**
     * 客户 Tabs 枚举
     */
    export enum Tabs {
        ALL = 'all',
        SUMMARY = 'summary',
        FAVORITES = 'favorites'
    }

    /**
     * 侧边栏 枚举
     */
    export enum Asides {
        FILTER = 'filter',
        DYNAMIC = 'dynamic'
    }

    /**
     * User Roles
     */
    export enum Roles {
        MANAGER = 'manager',
        DIRECTOR = 'director',
        ADMIN = 'admin'
    }
}

/**
 * Filters SelectList
 */
export namespace CustomerFilters {
    /**
     * Update Time Type, Binding to sortBy list
     */
    export enum UPDATE_TIME_TYPE {
        LOGIN = 'lastlogintime',
        LASTRRADE = 'lasttradetime',
        APPROVED = 'lastsupporttime',
        CALLBACK = 'firstopentime'
    }
    /**
     * Balance:
     *
     * All: 0
     * LT_ZORE:     <0      E_ZORE:     0
     * LT_HUNDRED: 0 ~ 100
     * LT_TWO_THOUSAND: 100 ~ 2000
     * LT_FIVE_THOUSAND: 2000 ~ 5000
     * LT_TEN_THOUSAND: 5000 ~ 10000
     * GT_TEN_THOUSAND: > 10000
     */
    export enum BALANCE {
        ALL = 0,
        LT_ZORE = 1,
        E_ZORE = 2,
        LT_HUNDRED = 3,
        LT_TWO_THOUSAND = 4,
        LT_FIVE_THOUSAND = 5,
        LT_TEN_THOUSAND = 6,
        GT_TEN_THOUSAND = 7
    }

    /**
     * Volume:
     *
     * All: All
     * E_ZORE:     0
     * LT_TWENTY: 0 ~ 20
     * LT_FIFTY: 20 ~ 50
     * GT_FIFTY: > 50
     */
    export enum VOLUME {
        ALL = 0,
        E_ZORE = 1,
        LT_TWENTY = 2,
        LT_FIFTY = 3,
        GT_FIFTY = 4
    }

    /**
     * Deposit:
     *
     * All: 0
     * E_ZORE:     0
     * E_HUNDRED: 100
     * LT_THOUSAND: 100 ~ 1000
     * LT_TEN_THOUSAND: 1000 ~ 10000
     * GT_TEN_THOUSAND: > 10000
     */
    export enum DEPOSITE {
        ALL = 0,
        E_ZORE = 1,
        E_HUNDRED = 2,
        LT_THOUSAND = 3,
        LT_TEN_THOUSAND = 4,
        GT_TEN_THOUSAND = 5
    }

    /**
     * Withdrawal:
     *
     * All: 0
     * E_ZORE:     0
     * HUNDRED_T_THOUSAND: 100 ~ 1000
     * LT_TEN_THOUSAND: 1000 ~ 10000
     * GT_TEN_THOUSAND: > 10000
     */
    export enum WITHDRAWAL {
        ALL = 0,
        E_ZORE = 1,
        HUNDRED_T_THOUSAND = 2,
        LT_TEN_THOUSAND = 3,
        GT_TEN_THOUSAND = 4
    }

    /**
     * Closed P/L:
     *
     * All: 0
     * LT_MINUS_TWO_THOUSAND: -20k ~ 0
     * LT_ZORE: < 0
     * E_ZORE:     0
     * LT_TWO_THOUSAND: 0 ~ 2k
     * GT_TWO_THOUSAND: >2k
     */
    export enum CLOSED_PL {
        ALL = 0,
        LT_MINUS_TWO_THOUSAND = 1,
        LT_ZORE = 2,
        E_ZORE = 3,
        LT_TWO_THOUSAND = 4,
        GT_TWO_THOUSAND = 5
    }

    /**
     * Subscribing
     */
    export enum SUBSCRIBING {
        ALL = 0,
        EXIST = 1,
        NOT = 2
    }

    /**
     * Opened A/C
     */
    export enum OPENED_AC {
        ALL = 0,
        E_ONE = 1,
        GT_ONE = 2
    }

    /**
     * Connected A/C
     */
    export enum CONNECTED_AC {
        ALL = 0,
        E_ZORE = 1,
        GT_ZORE = 2
    }
}
