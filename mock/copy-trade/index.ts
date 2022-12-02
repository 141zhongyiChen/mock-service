import { success } from '../../utils/res-builder';
import { getSignalList } from './signal-list';
import { getAccountList } from './account-list';

const express = require('express');
const router = express.Router()

router.post('/biz/public/signal/list', (req, res, next) => {
  res.json(success(getSignalList(req)))
})

router.get('/biz/account/list', (req, res, next) => {
  res.json(success(getAccountList(req)))
})

export default router;