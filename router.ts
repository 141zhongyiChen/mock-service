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
        prefix: '/api/gw/v1/pro/crm/customer',
        file: copyTrade
    }
]

export default apiRouter;