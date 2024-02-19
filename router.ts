interface ApiRouters {
    prefix: string;
    file: any
} 

import copyTrade from './mock/copy-trade';
import crmCopyTrade from './mock/crm-copy-tade';
import forwardCopyTrade from './mock/forward-copytrade';

/**
 * 划分 路由模块
 */
const apiRouter: ApiRouters[] = [
    {
        prefix: '/api/v1/pro/copytrade',
        file: copyTrade
    },
    {
        prefix: '/iapi/v1/pro/crm',
        file: crmCopyTrade
    },
    {
        prefix: '/api/v1',
        file: forwardCopyTrade
    }
]

export default apiRouter;