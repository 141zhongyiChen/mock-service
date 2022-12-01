interface ApiRouters {
    prefix: string;
    file: any
} 

import copyTrade from './mock/copy-trade';
import crmCopyTrade from './mock/crm-copy-tade';

/**
 * 划分 路由模块
 */
const apiRouter: ApiRouters[] = [
    {
        prefix: '/api/v1/pro/copytrade',
        file: copyTrade
    },
    {
        prefix: '/iapi/v1/pro/copytrade',
        file: crmCopyTrade
    }
]

export default apiRouter;