import useGlobalRouter from './global';
import useAccountRouter from './account';

const express = require('express');
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.send('Mock!')
})

useGlobalRouter(router);
useAccountRouter(router);

export default router;