import app from './app'
import { SERVER_PORT } from './config/server';

app.listen(SERVER_PORT, () => {
  console.log(`服务器：http://localhost:${SERVER_PORT} 启动成功🎉🎉🎉`);
})