import { config } from '../src/config/config.js';
import { TOTAL_LENGTH } from '../src/constants/header.js';

export const onData = (socket) => (data) => {
  // 기존 버퍼에 새로 수신된 데이터를 추가
  socket.buffer = Buffer.concat([socket.buffer, data]);

  // 패킷의 총 헤더 길이 (패킷의 길이와 타입의 정보)
  const totalHeaderLength = config.packet.totalHeaderLength + config.packet.typeLength;

  // 버퍼에 최소한 전체 헤더가 있을 때만 패킷을 처리합니다.
  while (socket.buffer.length >= totalHeaderLength) {
    // 패킷 길이 정보 수신 4바이트
    const length = socket.buffer.readUInt32BE(0);
    // 패킷 길이 정보 수신 1바이트
    const packetType = socket.buffer.readUInt8(config.packet.typeLength);
    
    // 패킷 전체 길이 확인 후 데이터를 수신
    if (socket.buffer.length >= length) {
        // 패킷의 데이터를 자르고 버퍼에서 제거
      console.log(`length: ${length}, packetType: ${packetType}`);
    } else {
      // 전체 패킷이 아직 도착하지 않았다면
      break;
    }
  }
};
