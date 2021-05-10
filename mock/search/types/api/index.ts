/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-namespace */
import { Types } from '../../../../types/types';
import { SearchType, Role } from '../index';

export namespace API {
        /**
         * 获取 保存的查询条件
         */
        export namespace GlobalSearch {
            /**
             * 查询参数
             *
             * type: 查询条件的类型
             * keyword: 类型
             */
            export interface Params {
                type: SearchType[];
                keyword: string;
            }

            /**
             * 列表项字段
             *
             * uId: 用户ID
             *
             * content: 匹配内容
             *
             * role: 身份类型
             */
            export interface Details {
                uId: string;
                content: string;
                role: Role;
            }

            /**
             * 分组项
             *
             * key: 分组类型
             * values: 组内列表
             */
            export interface Item {
                key: SearchType;
                values: Details[];
            }

            /**
             * 响应DTO
             */
            export type Data = Item[];

            export type Response = Types.Response.All<Data>;
        }
}
