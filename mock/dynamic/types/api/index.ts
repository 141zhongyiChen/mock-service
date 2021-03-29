import { Types } from '../../../../types/types';
import { PAGE } from '../../../../types/page';

export namespace API.Customer.Dynamic {
    export interface Params extends PAGE.OrderBy, PAGE.Pagination {}

    /**
     * 分组动态 参数
     */
    export interface GroupParams extends PAGE.OrderBy, PAGE.Pagination {
        groupId: number;
    }
    export interface Item {
        time: number;
        code: string;
        content: string;
        nickName: string;
    }

    export interface Data extends PAGE.PageResult<Item>, PAGE.OrderBy {}

    export type Response = Types.Response.All<Data>;
}