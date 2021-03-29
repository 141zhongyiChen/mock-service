import { success } from '../../utils/res-builder';
import { getClinetList } from './all';

const express = require('express');
const router = express.Router()

router.get('/Customer/GetCustomersAllList', (req, res, next) => {
  res.json(success(getClinetList(req)))
})

export default router;