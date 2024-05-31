// mysql 모듈 소환
const mariadb = require('mysql2/promise');

// DB와 연결 통로 생성
const connection = async () => {
  const conn = await mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Bookshop',
    dateStrings: true
  });

  return conn;
};

module.exports = connection;
