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
        prefix: '/api/v1/clients',
        file: clientRouter
    }
]

export default apiRouter;