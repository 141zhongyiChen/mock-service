import { success } from '../../utils/res-builder';
import { getBaseInfo } from './details';

const express = require('express');
const router = express.Router()

router.get('/GetBaseInfos', (req, res, next) => {
  res.json(success(getBaseInfo(req)))
})

export default router;