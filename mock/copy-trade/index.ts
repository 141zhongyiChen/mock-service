import { success } from '../../utils/res-builder';
import { getSignalList, getFavoritesList } from './signal-list';
import { getAccountList } from './account-list';

const express = require('express');
const router = express.Router()

router.post('/biz/public/signal/list',async (req, res, next) => {
  res.json(await success(getSignalList(req)))
})

router.get('/biz/signal/favorites/list', async (req, res, next) => {
  res.json(await success(getFavoritesList(req)))
})

router.get('/biz/account/list', async (req, res, next) => {
  res.json(await success(getAccountList(req)))
})

router.post('/biz/profitsharing/:account/list', async (req, res, next) => {
  res.json(await success(getAccountList(req)))
})

export default router;