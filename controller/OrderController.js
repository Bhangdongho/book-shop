const conn = require('../mariadb'); // db 모듈
const { StatusCodes } = require('http-status-codes'); // status code 모듈

const order = (req, res) => {
  const { items, delivery, totalQuantity, totalPrice, userId, firstBookTitle } =
    req.body;

  let delivery_id = 4;
  let order_id;

  let sql =
    'INSERT INTO delivery (address, receiver, contact) VALUES (?, ?, ?)';
  let values = [delivery.address, delivery.receiver, delivery.contact];
  //   conn.query(sql, values, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(StatusCodes.BAD_REQUEST).end();
  //     }

  //     delivery_id = results.insertId;

  //     return res.status(StatusCodes.OK).json(results);
  //   });

  sql = `
  INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id)
  VALUES (?, ?, ?, ?, ?)`;
  values = [firstBookTitle, totalQuantity, totalPrice, userId, delivery_id];
  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    order_id = results.insertId;
    console.log(order_id);

    return res.status(StatusCodes.OK).json(results);
  });
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
