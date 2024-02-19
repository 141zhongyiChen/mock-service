import { success } from '../../utils/res-builder';
import { getUserInfo, getUserInfoExternal, getChannelList, getCommunityList } from './global';

const express = require('express');
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.send('Mock!')
})

router.get('/userInfo/external/my', async (req, res, next) => {
  res.json(await success(getUserInfoExternal(req)))
})

router.get('/userInfo/my', async (req, res, next) => {
  res.json(await success(getUserInfo(req)))
})

router.get('/community/getChannelList', async (req, res, next) => {
    res.json(await success(getChannelList(req)))
  })
  
  router.get('/community/getCommunityList', async (req, res, next) => {
    res.json(await success(getCommunityList(req)))
  })

export default router;