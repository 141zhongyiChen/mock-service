import { success } from '../../utils/res-builder';
import { getCallbackList, addCallback } from './callback';

const express = require('express');
const router = express.Router()

router.get('/GetCallbackByUid', (req, res, next) => {
  res.json(success(getCallbackList(req)))
})

router.post('/AddCallback', (req, res, next) => {
  res.json(success(addCallback(), 'Success'))
})

console.log(router)

export default router;