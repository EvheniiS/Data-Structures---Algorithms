// // У тебе є масив об'єктів, що представляють товари в інтернет-магазині. Кожен товар має назву та ціну в доларах. Тобі потрібно створити новий масив, у якому ціни будуть конвертовані в євро (курс: 1 долар = 0.92 євро).


// const products = [
//     { name: "Laptop", price: 1200 },
//     { name: "Phone", price: 800 },
//     { name: "Tablet", price: 500 }
//   ];
  
//   let exchangeRate = 0.92 
//   // Використай метод map, щоб створити новий масив з конвертованими цінами.
//   const productsInEuros = products.map(product  => ({
//     name: product.name,
//     price: Math.round(product.price * exchangeRate)

//   }))
//   console.log(productsInEuros);
//   // Очікуваний вивід:
//   // [
//   //   { name: "Laptop", price: 1104 },
//   //   { name: "Phone", price: 736 },
//   //   { name: "Tablet", price: 460 }
//   // ]
  


//У тебе є масив рядків, що містять імена у довільному регістрі (з великими та малими літерами). Твоє завдання – створити новий масив, де всі імена будуть у нижньому регістрі.

const names = ["ALICE", "bOB", "ChARLie", "DaViD"];

// Використай map, щоб привести всі імена до нижнього регістру.
const lowerCaseNames = names.map(name => name.toLowerCase())

console.log(lowerCaseNames);
// Очікуваний вивід:
// ["alice", "bob", "charlie", "david"]
