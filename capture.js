// const puppeteer = require("puppeteer");

// async function run() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // 캡처할 URL
//   await page.goto("https://heasunshin.github.io/gsap_ddeok/", {
//     waitUntil: "networkidle2",
//   });

//   // 스크린샷 저장
//   await page.screenshot({ path: "screenshot.png", fullPage: true });

//   await browser.close();
// }

// run();

const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // 캡처할 B사이트 URL
  await page.goto("https://heasunshin.github.io/gsap_ddeok/", {
    waitUntil: "networkidle2",
  });

  // 스크린샷 저장 (반드시 상대경로)
  await page.screenshot({
    path: "screenshot.png",
    fullPage: true,
  });

  await browser.close();
}

run();
