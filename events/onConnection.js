import { onData } from "./onData.js";
import { onEnd } from "./onEnd.js";
import { onError } from "./onError.js";


export const onConnection = (socket) => {
    console.log(`클라이언트가 연결되었습니다. :  ${socket.remoteAddress}: ${socket.remotePort}`);

    // 각 클라이언트마다 고유한 Buffer를 유지하기 위함
    socket.buffer = buffer.alloc(0);

    socket.on('data', onData(socket));
    socket.on('end', onEnd(socket));
    socket.on('error', onError(socket));
    
}