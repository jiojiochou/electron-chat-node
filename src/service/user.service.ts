import con from '../app/database'
import { AccountInfo } from '../types'

class UserService {
  
  async createUser(accountInfo: AccountInfo) {
    const { account } = accountInfo
    // sql语句
    const statement = 'select account from user where account = ?;'
    try {
      return await con.promise().execute(statement, [account])
    } catch (err: any){
      console.log("@@@lose-sql-createUser", err.sqlMessage)
    }
  }

  async login(accountInfo: AccountInfo) {
    const { account, password } = accountInfo
    // sql语句
    const statement = 'select account, password from user where account = ? && password = ?;'
    try {
      return await con.promise().execute(statement, [account, password])
    } catch (err: any){
      console.log("@@@lose-sql-login", err.sqlMessage)
    }
  }

  async contact(id: number | undefined) {
    const statement = 'select * from contact where userId = ?;'

    try {
      return await con.promise().execute(statement, [id])
    } catch (err: any){
      console.log("@@@lose-sql-contact", err.sqlMessage)
    }
  }
}

export default new UserService()