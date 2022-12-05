import { success } from '../../utils/res-builder';
import { getSignalList, getFavoritesList } from './signal-list';
import { getAccountList } from './account-list';

const express = require('express');
const router = express.Router()

router.post('/biz/public/signal/list', (req, res, next) => {
  res.json(success(getSignalList(req)))
})

router.get('/biz/signal/favorites/list', (req, res, next) => {
  res.json(success(getFavoritesList(req)))
})

router.get('/biz/account/list', (req, res, next) => {
  res.json(success(getAccountList(req)))
})

export default router;