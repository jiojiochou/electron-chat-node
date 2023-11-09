import userService from '../service/user.service'

class UserController {
  async createUser(ctx: {[key: string]: any}, next: any) {
    const user = ctx.request.body
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
}

export default new UserController()