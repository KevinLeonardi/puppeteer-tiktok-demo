const puppeteer = require("puppeteer")

bukaBrowser = async () =>{
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()

    await page.goto("https://www.tiktok.com/") //go to tiktok.com
    await page.locator("#header-login-button").click() //click login button

    //click "Gunakan nomor telepon/email/nama pengguna"
    await page.locator("div#loginContainer > div > div > div > div:nth-child(2) > div.css-1jvzvb2-DivBoxContainer.e1cgu1qo0 > div.css-1cp64nz-DivTextContainer.e1cgu1qo3 > div > div").click()
    
    //click "Masuk dengan email atau nama pengguna"
    await page.locator("#loginContainer > div > form > div.css-1ah864z-DivDescription.e1521l5b3 > a").click()

    //enter hardcoded email
    await page.locator("#loginContainer > div.css-aa97el-DivLoginContainer.exd0a430 > form > div.css-q83gm2-DivInputContainer.etcs7ny0 > input").fill("kvntiktok23")

    //enter hardcoded password
    await page.locator("#loginContainer > div.css-aa97el-DivLoginContainer.exd0a430 > form > div.css-15iauzg-DivContainer.e1bi0g3c0 > div > input").fill("(B%AF|Z3d_R]JCJ")
       
    //click "masuk"
    await page.locator("#loginContainer > div.css-aa97el-DivLoginContainer.exd0a430 > form > button").click()
    await page.waitForNavigation({timeout:120000})
    await page.goto("https://www.tiktok.com/foryou") //go to tiktok.com

    await page.waitForSelector("#main-content-homepage_hot")
    const parentDivHandle = await page.$("#main-content-homepage_hot")

    const childClassName = await page.evaluate(
        parentDiv => {
            const childNode = parentDiv.querySelector(':scope > div'); // Selects direct child div
            return childNode ? childNode.className : null;
        }, parentDivHandle
    )

    // Define a regular expression pattern to match the desired part
    const regex = /css-(\w+)-/;

    // Use RegExp.exec() to extract the matched part
    const match = regex.exec(childClassName);

    const itemTargetCount = 20
    let index = 1
    while (itemTargetCount >= index) {
        let itemSelector = `#main-content-homepage_hot > div.css-${match[1]}-DivOneColumnContainer.e108hwin0 > div:nth-child(${index})`
        // childNode = parentNode.childNodes[index]
        await page.waitForSelector(itemSelector,{timeout:10000})
        await page.locator(itemSelector).click()
        await page.locator(itemSelector).click()
        await page.locator(itemSelector).scroll({scrollTop:500})
        console.log(index)
        index++
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
}

bukaBrowser()