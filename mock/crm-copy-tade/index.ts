import { success } from '../../utils/res-builder';
import { getDynamicList } from './dynamic';

const express = require('express');
const router = express.Router()

router.post('/dynamic/list/copyTrade/trader', async (req, res, next) => {
  res.json(await success(getDynamicList(req)))
})

router.post('list/copyTrade', async (req, res, next) => {
  res.json(await success(getDynamicList(req)))
})

export default router;