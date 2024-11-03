import net from 'net';
import initServer from './init/index.js';
import { config } from './config/config.js';
import { onConnection } from '../events/onConnection.js';


const server = net.createServer(onConnection);

initServer().then(() => {
    server.listen(config.server.port, config.server.host, () => {
        console.log(`서버가 >>>> ${config.server.host}: ${config.server.port} <<<< 에서 실행중입니다.`);
        console.log(server.address());
    });
}).catch((e) => {
    console.error(e);
    process.exit(1); // 혹시몰라서 작성한 '에러가 나면 종료가 되게끔' 작성한 코드
})