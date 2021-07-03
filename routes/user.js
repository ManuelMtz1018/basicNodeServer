const {Router}=require('express')
const { userGet, userPut, userPost, userDelete } = require('../controllers/user')
const router=Router()

router.get('/',userGet)
router.post('/',userPost)
router.put('/:id',userPut)///http://localhost:3000/api/user/10
router.delete('/',userDelete)

module.exports=router