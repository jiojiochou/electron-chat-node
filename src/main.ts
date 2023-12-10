import app from './app'
import { SERVER_PORT } from './config/server';

app.listen(SERVER_PORT, () => {
  // console.log(__dirname); // 获取该文件所在的目录path
  console.log(`服务器：http://localhost:${SERVER_PORT} 启动成功🎉🎉🎉`);
})