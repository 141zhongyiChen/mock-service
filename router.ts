interface ApiRouters {
    prefix: string;
    file: any
} 

import clientRouter from './mock/clients';
import dynamicRouter from './mock/dynamic';
import userRouter from './mock/user';
import detailsRouter from './mock/details';
import callbackRouter from './mock/callback';
import accountRouter from './mock/account';

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
    },
    {
        prefix: '/pro/crm/v5/User',
        file: userRouter
    },
    {
        prefix: '/pro/crm/v5/Detail',
        file: detailsRouter
    },
    {
        prefix: '/pro/crm/v5/Callback',
        file: callbackRouter
    },
    {
        prefix: '/pro/crm/v5/Account',
        file: accountRouter
    }
]

export default apiRouter;