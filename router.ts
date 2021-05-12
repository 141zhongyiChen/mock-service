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

// import searchRouter from './mock/global-search';

/**
 * add router here
 */
const apiRouter: ApiRouters[] = [
    {
        prefix: '/api/gw/v1/pro/crm/customer',
        file: clientRouter
    },
    {
        prefix: '/pro/crm/v5/Dynamic',
        file: dynamicRouter
    },
    {
        prefix: '/api/gw/v1/pro/crm/user',
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
    // {
    //     prefix: '/api/v1/crm',
    //     file: searchRouter
    // }
]

export default apiRouter;