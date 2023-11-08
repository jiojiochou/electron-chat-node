// 引入koa 
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
// import KoaSession from 'koa-session'
import userRouter from '../router/user.router'

const app = new Koa()

app.use(bodyParser()) // post -> body -> urlencoded
app.use(userRouter.routes())

export default app