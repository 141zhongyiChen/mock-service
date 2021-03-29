interface ApiRouters {
    prefix: string;
    file: any
} 

import clientRouter from './mock/clients';

/**
 * add router here
 */
const apiRouter: ApiRouters[] = [
    {
        prefix: '/pro/crm/v5/Customer',
        file: clientRouter
    }
]

export default apiRouter;