import userService from '../service/user.service'
import type { Context } from 'koa'
import type { AccountInfo } from './../types/user.types';

class UserController {
  async createUser(ctx: Context, next: any) {
    const user = ctx.request.body as AccountInfo
    const res = await userService.createUser(user)
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
  async login(ctx: Context, next: any) {
    const user = ctx.request.body as AccountInfo
    const res = await userService.login(user)
    if(!res || res[0]){
      ctx.body = {
        message: '登录失败',
        data: false
      }
    }
    ctx.body = {
      message: '登录成功',
      data: true
    }
  }
}

export default new UserController()