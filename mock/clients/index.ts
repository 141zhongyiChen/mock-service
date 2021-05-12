import { success } from '../../utils/res-builder';
import { getClinetList } from './all';

const express = require('express');
const router = express.Router()

router.post('/list/all', (req, res, next) => {
  res.json(success(getClinetList(req)))
})

router.post('/list/favorite', (req, res, next) => {
  res.json(success(getClinetList(req)))
})

console.log(router)

export default router;