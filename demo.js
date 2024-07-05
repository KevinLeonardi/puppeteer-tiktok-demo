// let index = 1;
// let itemSelector = `#main-content-homepage_hot > div.css-15lk6us-DivOneColumnContainer.e108hwin0 > div:nth-child(${index})`;
// // console.log(itemSelector)

// let age = 4.5;
// let earthAge = `Earth is estimated to be ${age} billion years old.`;
// console.log(earthAge)

const grandParentNode = document.querySelector("#main-content-homepage_hot");
const parentNode = grandParentNode.childNodes[0]; 
let childNode = parentNode.childNodes[0]
console.log(childNode);
