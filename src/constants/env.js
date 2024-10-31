// 중앙 집중식 관리 (한 파일에서 모든 환경설정을 불러올 수 있게끔)
import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const HOST = process.env.HOST || 'localhost';
export const CLIENT_VERSION = process.env.CLIENT_VERSION || '1.0.0';