import { Types } from '../../../../types/types';
import { PAGE } from '../../../../types/page';

export namespace API.Callback {
    export interface Params extends PAGE.OrderBy, PAGE.Pagination {}
    export interface Item {
        time: number;
        code: string;
        content: string;
        nickName: string;
    }

    export interface Data extends PAGE.PageResult<Item>, PAGE.OrderBy {}

    export type Response = Types.Response.All<Data>;
}