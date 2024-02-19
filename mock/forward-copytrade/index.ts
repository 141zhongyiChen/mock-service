import useGlobalRouter from './global';
import useAccountRouter from './account';
import useSettingsRouter from './settings';
import useSignalRouter from './signal';

const express = require('express');
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.send('Mock!')
})

useGlobalRouter(router);
useAccountRouter(router);
useSettingsRouter(router);
useSignalRouter(router);

export default router;