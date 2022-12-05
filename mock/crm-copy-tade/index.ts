import { success } from '../../utils/res-builder';
import { getDynamicList } from './dynamic';

const express = require('express');
const router = express.Router()

router.post('/dynamic/list/copyTrade', (req, res, next) => {
  res.json(success(getDynamicList(req)))
})

router.post('/dynamic/list/copyTrade/signal', (req, res, next) => {
  res.json(success(getDynamicList(req)))
})

router.post('/dynamic/list/copyTrade/follower', (req, res, next) => {
  res.json(success(getDynamicList(req)))
})

export default router;