const users = [
  { name: "Alex", age: 15 },
  { name: "Bob", age: 16 },
  { name: "Dylan", age: 14 },
  { name: "Kate", age: 17 },
];

/* Exercise 1 
Use the map array method to return an array containing only the user names.
*/
// return value: ["Alex", "Bob", "Dylan", "Kate"]

function getUserName(user) {
  return user.name;
}

const result = users.map(getUserName);





/* Exercise 2
Use the filter array method to return an array of users who are old enough to get a learner's permit (16 and older).
*/

/* return value: 
  [
    { name: "Bob", age: 16 },
    { name: "Kate", age: 17 }
  ]
*/

function isGreaterThanOrEqual16(user) {
  return user.age >= 16;
}

// const users = [
//   { name: "Alex", age: 15 },
//   { name: "Bob", age: 16 },
//   { name: "Dylan", age: 14 },
//   { name: "Kate", age: 17 },
// ];

const filteredUsers = users.filter(isGreaterThanOrEqual16);

console.log(filteredUsers);

const bob = filteredUsers[0];

bob.name = "Bobby";
console.log(bob);

console.log(filteredUsers);

console.log("Users:");
console.log(users);