/*Task:
Write a function groupBy(arr, key) that takes:

arr → an array of objects
key → a string representing the property to group by
It should return a new object where the keys are unique values of the given property, 
and the values are arrays of objects matching that property.
*/

const users = [
    { name: "Alice", age: 25, country: "USA" },
    { name: "Bob", age: 30, country: "Canada" },
    { name: "Charlie", age: 25, country: "USA" },
    { name: "David", age: 30, country: "Canada" },
    { name: "Eve", age: 35, country: "UK" }
];

function groupBy(arr, key) { 
	return arr.reduce((result, item) => {
		let groupValue = item[key]

		if(!result[groupValue]) {
			result[groupValue] = []
		}

		result[groupValue].push(item)
		return result
	},{})
}

console.log(groupBy(users, "age"));