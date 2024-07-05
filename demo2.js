const string = "css-15lk6us-DivOneColumnContainer.e108hwin0";

// Define a regular expression pattern to match the desired part
const regex = /css-(\w+)-/;

// Use RegExp.exec() to extract the matched part
const match = regex.exec(string);
console.log(match[1])

// // match[1] will contain the extracted part "15lk6us"
// if (match) {
//   const desiredPart = match.index;
//   console.log(desiredPart); // Output: 15lk6us
// } else {
//   console.log("Pattern not found in the string.");
// }
// const puppeteer = require("puppeteer");

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//   });

//   const page = await browser.newPage();
//   await page.goto("C:\Users\ACER\Desktop\puppeteer\mediumdom.html");
// })();
