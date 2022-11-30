import { success } from '../../utils/res-builder';
import { getBaseInfo } from './details';

const express = require('express');
const router = express.Router()

router.post('/biz/public/signal/list', (req, res, next) => {
  res.json(success(getBaseInfo(req)))
})

export default router;