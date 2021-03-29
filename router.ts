interface ApiRouters {
    prefix: string;
    file: any
} 

import clientRouter from './mock/clients';
import dynamicRouter from './mock/dynamic';

/**
 * add router here
 */
const apiRouter: ApiRouters[] = [
    {
        prefix: '/pro/crm/v5/Customer',
        file: clientRouter
    },
    {
        prefix: '/pro/crm/v5/Dynamic',
        file: dynamicRouter
    }
]

export default apiRouter;