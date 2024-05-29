const conn = require('../mariadb'); // db 모듈
const { StatusCodes } = require('http-status-codes'); // status code 모듈

const order = (req, res) => {
  res.json('결제하기');
};

const getOrders = (req, res) => {
  res.json('주문 목록 조회');
};

const getOrderDetail = (req, res) => {
  res.json('주문 상세 상품 조회');
};

module.exports = {
  order,
  getOrders,
  getOrderDetail
};
