import { success } from '../../utils/res-builder';
import { getDynamicList } from './dynamic';

const express = require('express');
const router = express.Router()

router.get('/GetDynamicByGroupId', (req, res, next) => {
  res.json(success(getDynamicList(req)))
})

router.get('/GetAllDynamic', (req, res, next) => {
  res.json(success(getDynamicList(req)))
})

router.get('/GetDynamicByUid', (req, res, next) => {
  res.json(success(getDynamicList(req)))
})

console.log(router)

export default router;