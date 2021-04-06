import { success2 } from '../../utils/res-builder';
import { getAccountList } from './account';

const express = require('express');
const router = express.Router()

router.get('/:userId', (req, res, next) => {
  res.json(success2(getAccountList(req)))
})

export default router;