import { success } from '../../utils/res-builder';
import { getUserList } from './user';

const express = require('express');
const router = express.Router()

router.get('/list/favorite', (req, res, next) => {
  res.json(success(getUserList(req)))
})

router.post('/list/all', (req, res, next) => {
  res.json(success(getUserList(req)))
})

export default router;