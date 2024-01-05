import KoaRouter from '@koa/router'
// import {} from '../middleware'
import userController from '../controller/user.controller'

// 1. 创建路由对象
const userRouter = new KoaRouter({ prefix: '/user' })

// 定义路由
userRouter.post('/create', userController.createUser)
userRouter.post('/login', userController.login)
userRouter.get('/contact', userController.contact)

export default userRouter