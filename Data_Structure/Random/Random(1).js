//1. Робота з рядками
// Як у JavaScript перетворити рядок "hello world" на "Hello World" (перша літера кожного слова має бути великою)?

// // let string = 'hello world'
// let capitalized = string
// .split(' ')
// .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// .join(' ')

// console.log(capitalized)

// 2. Масиви
// Як у JavaScript видалити повторювані значення з масиву const arr = [1, 2, 2, 3, 4, 4, 5]?

// const arr = [1, 2, 2, 3, 4, 4, 5];

// const uniqueValues = [...new Set(arr)];

// console.log(uniqueValues);

//3. Як у JavaScript перебрати всі ключі та значення об'єкта const obj = { a: 1, b: 2, c: 3 }?

// #1
// const keys = Object.keys(obj)
// console.log(keys)

// keys.forEach(key => {
//     console.log(key, obj[key])
// });


// // #2 
// const values = Object.values(obj)
// console.log(values);

// // #3
// const entries = Object.entries(obj)
// console.log(entries); 

// entries.forEach(([key, value]) => {
//     console.log(`Key: ${key} Value:${value}`)
// })

//#4
// for (let key in obj) {
//     console.log(`${key}, ${obj[key]}`)
// }


// 
//Як у JavaScript перейменувати ключ в об'єкті? Наприклад, у const obj = { name: "Alice", age: 25 } замінити "name" на "fullName".
obj = { name: "Alice", age: 25 }

let updateObj = {...obj, fullName: obj.name}
console.log(updateObj)
delete updateObj.name
console.log(updateObj)
