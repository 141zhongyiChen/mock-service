import { success } from '../../utils/res-builder';
import { getSignalList } from './signal-list';

const express = require('express');
const router = express.Router()

router.get('/biz/public/signal/list', (req, res, next) => {
  res.json(success(getSignalList(req)))
})

export default router;