import net from 'net';
import initServer from './init/index.js';
import { config } from './config/config.js';


const server = net.createServer((socket) => {
    console.log(`클라이언트가 연결되었습니다. :  ${socket.remoteAddress}: ${socket.remotePort}`);

    socket.on('data', (data) => {
        console.log(data);
    });

    socket.on('end', () => {
        console.log('클라이언트와의 연결이 끊겼습니다.');
    });

    socket.on('error', (err) => {
        console.error('소켓 에러: ', err);
    });
});

initServer().then(() => {
    server.listen(config.server.port, config.server.host, () => {
        console.log(`서버가 >>>> ${config.server.host}: ${config.server.port} <<<< 에서 실행중입니다.`);
        console.log(server.address());
    });
}).catch((e) => {
    console.error(e);
    process.exit(1); // 혹시몰라서 작성한 '에러가 나면 종료가 되게끔' 작성한 코드
})