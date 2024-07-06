# puppeteer-tiktok-demo
How to install the puppeteer script :
1. Ensure Node.js is installed on your machine. You can download and install Node.js from [Node.js Official Website] (https://www.nodejs.org).
2. Run `npm install`
3. Run `node likeFirstTenTiktokPost.js`

## How the code works : 
The code works by :
1. Go to tiktok `https://www.tiktok.com/`
2. Fill the email and password, and then click "masuk", then go to tiktok FYP page `https://www.tiktok.com/foryou`
3. Extract the child node of node with selector name "#main-content-homepage_hot", and using regex get the targetPart in "div.css-**targetPart**-DivActionItemContainer.ees02z00" because the **targetPart** is often different whenever we load Tiktok page
4. Then do loop for 10 tiktok recommend list item container. In each loop we assign the appropriate **eachVideoSelector** and **eachLikeButtonSelector** according to the previous **targetPart** and the looping **index**. And then : click the like button, and scroll 500px vertically. But there are cases when the recommend list item is *sponsored video* with different **like button selector** than normal recommend list item. That case is also handled in this puppeteer script.

Thank you 