import userService from '../service/user.service'
import type { Context,Next } from 'koa'
import type { AccountInfo } from './../types/user.types';

class UserController {

  async createUser(ctx: Context, next: Next) {
    const user = ctx.request.body as AccountInfo
    const res = await userService.createUser(user)
    console.log(res)
    if(!res || res[0]){
      ctx.body = {
        message: '创建用户失败',
        data: false
      }
    }
    ctx.body = {
      message: '创建用户成功',
      data: true
    }
  }

  async login(ctx: Context, next: Next) {
    const user = ctx.request.body as AccountInfo
    const res = await userService.login(user) // 查库

    const isNotExist = res === undefined || Object.keys(res[0]).length === 0

    if(isNotExist){
      ctx.body = {
        message: '登录失败',
        data: false
      }
    } else {
      ctx.body = {
        message: '登录成功',
        data: true
      }
    }
  }

  async contact(ctx: Context, next: Next) {
    const { id } = ctx.request.body as { id: number | undefined };
    const res = await userService.contact(id)

    const isNotExist = res === undefined || Object.keys(res[0]).length === 0
    // console.log(isNotExist)

    if(isNotExist){
      ctx.body = {
        message: '查询成功',
        data: []
      }
    } else {
      ctx.body = {
        message: '查询成功',
        data: res[0]
      }
    }
  }
}

export default new UserController()