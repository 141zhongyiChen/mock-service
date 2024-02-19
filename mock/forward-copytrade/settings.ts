import { uid, account, img, negative, random, str, bool, millionSeconds } from "../../utils/mock-builder"
import { success } from "../../utils/res-builder"

const Mock = require('mockjs')

const useRouter = (router) => {
      router.get('/settings', async (req, res, next) => {
        res.json(await success(null))
      })
}

export default useRouter;