import { success } from '../../utils/res-builder';
// import { getGlobalList } from './global';

const express = require('express');
const router = express.Router()

router.get('/GlobalSearch/GetList', (req, res) => {
  // res.json(success(getGlobalList(req)))
})

export default router;