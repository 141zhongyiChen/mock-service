interface ApiRouters {
    prefix: string;
    file: any
} 

import copyTrade from './mock/copy-trade';

/**
 * Add router here
 */
const apiRouter: ApiRouters[] = [
    {
        prefix: '/api/v1/pro/copytrade',
        file: copyTrade
    }
]

export default apiRouter;