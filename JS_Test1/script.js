var products = [
  {
    id: 1,
    name: "Trà sữa truyền thống",
    price: 30000,
  },
  {
    id: 2,
    name: "Trà sữa Thái xanh",
    price: 32000,
  },
  {
    id: 3,
    name: "Trà sữa đặc biệt",
    price: 40000,
  },
];

var sugars = [
  {
    id: 1,
    amount: 0,
    label: "0%",
  },
  {
    id: 2,
    amount: 50,
    label: "50%",
  },
  {
    id: 3,
    amount: 100,
    label: "100%",
  },
];

var ices = [
  {
    id: 1,
    amount: 0,
    label: "0%",
  },
  {
    id: 2,
    amount: 50,
    label: "50%",
  },
  {
    id: 3,
    amount: 100,
    label: "100%",
  },
];

var orders = [];

function addItemToOrders(id, name, quantity, price, sugar, ice) {
  var item = {
    id: id,
    name: name,
    quantity: quantity,
    price: price,
    totalPrice: quantity * price,
    sugar: sugar,
    ice: ice,
  };
  orders.push(item);
}

addItemToOrders(1, "Trà sữa truyền thống", 1, 30000, 50, 100);
addItemToOrders(1, "Trà sữa truyền thống", 2, 30000, 50, 50);
addItemToOrders(2, "Trà sữa Thái xanh", 1, 32000, 100, 100);

console.log(orders);
