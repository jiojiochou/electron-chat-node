import con from '../app/database'
import { AccountInfo } from '../types'

class UserService {
  async createUser(accountInfo: AccountInfo) {
    const { account } = accountInfo
    // sql语句
    const statement = 'select account from user where account = ?;'
    try{
      return await con.promise().execute(statement, [account])
    }catch(err: any){
      console.log("@@@@", err.sqlMessage)
    }
  }
}

export default new UserService()