const puppeteer = require("puppeteer")

bukaBrowser = async () =>{
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()

    await page.goto("https://www.tiktok.com/") //go to tiktok.com
    await page.click("#header-login-button") //click login button

    //click "Gunakan nomor telepon/email/nama pengguna"
    await page.waitForSelector("div#loginContainer > div > div > div > div:nth-child(2) > div.css-1jvzvb2-DivBoxContainer.e1cgu1qo0 > div.css-1cp64nz-DivTextContainer.e1cgu1qo3 > div > div")
    await page.click("div#loginContainer > div > div > div > div:nth-child(2) > div.css-1jvzvb2-DivBoxContainer.e1cgu1qo0 > div.css-1cp64nz-DivTextContainer.e1cgu1qo3 > div > div")
    
    //click "Masuk dengan email atau nama pengguna"
    await page.waitForSelector("#loginContainer > div > form > div.css-1ah864z-DivDescription.e1521l5b3 > a")
    await page.click("#loginContainer > div > form > div.css-1ah864z-DivDescription.e1521l5b3 > a")

    //enter hardcoded email
    await page.waitForSelector("#loginContainer > div.css-aa97el-DivLoginContainer.exd0a430 > form > div.css-q83gm2-DivInputContainer.etcs7ny0 > input")
    await page.type("#loginContainer > div.css-aa97el-DivLoginContainer.exd0a430 > form > div.css-q83gm2-DivInputContainer.etcs7ny0 > input","kvntiktok23",{delay:500})

    //enter hardcoded password
    await page.waitForSelector("#loginContainer > div.css-aa97el-DivLoginContainer.exd0a430 > form > div.css-15iauzg-DivContainer.e1bi0g3c0 > div > input")
    await page.type("#loginContainer > div.css-aa97el-DivLoginContainer.exd0a430 > form > div.css-15iauzg-DivContainer.e1bi0g3c0 > div > input","(B%AF|Z3d_R]JCJ",{delay:500})
       
    //click "masuk"
    await page.waitForSelector("#loginContainer > div.css-aa97el-DivLoginContainer.exd0a430 > form > button")
    await page.click("#loginContainer > div.css-aa97el-DivLoginContainer.exd0a430 > form > button")
    await page.waitForNavigation(); // Wait for navigation to complete

    // while (itemTargetCount > items.length) {
    //     items = await page.evaluate(() => {
    //       const items = Array.from(document.querySelectorAll("#boxes > div"));
    //       return items.map((item) => item.innerText);
    //     });//mengambil array
    
    //     previousHeight = await page.evaluate("document.body.scrollHeight");
    //     await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
    //     await page.waitForFunction(
    //       `document.body.scrollHeight > ${previousHeight}`
    //     );
    //     await new Promise((resolve) => setTimeout(resolve, 1000));
    // }
        
}

bukaBrowser()