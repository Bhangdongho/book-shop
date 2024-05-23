const conn = require('../mariadb'); // db 모듈
const { StatusCodes } = require('http-status-codes'); // status code 모듈

const allBooks = (req, res) => {
  res.json('전체 도서 조회');
};

const bookDetail = (req, res) => {
  res.json('개별 도서 조회');
};

const booksByCategory = (req, res) => {
  res.json('카테고리별 도서 목록 조회');
};

module.exports = {
  allBooks,
  bookDetail,
  booksByCategory
};
