import { success } from '../../utils/res-builder';
import { getClinetList } from './all';

const express = require('express');
const router = express.Router()

router.get('/GetCustomersAllList', (req, res, next) => {
  res.json(success(getClinetList(req)))
})

router.get('/GetCustomersFavoriteList', (req, res, next) => {
  res.json(success(getClinetList(req)))
})

console.log(router)

export default router;