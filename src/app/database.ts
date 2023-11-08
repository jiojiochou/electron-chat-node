import mysql from 'mysql2'

const con = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'electron_chat',
  password: '83553175',
  connectionLimit: 5
})

export default con