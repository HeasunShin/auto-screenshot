// const puppeteer = require("puppeteer");

// async function run() {
//   const browser = await puppeteer.launch({
//     args: ["--no-sandbox", "--disable-setuid-sandbox"],
//   });

//   const page = await browser.newPage();

//   // 캡처할 B사이트 URL
//   await page.goto("https://heasunshin.github.io/gsap_ddeok/", {
//     waitUntil: "networkidle2",
//   });

//   // 스크린샷 저장 (반드시 상대경로)
//   await page.screenshot({
//     path: "screenshot.png",
//     fullPage: true,
//   });

//   await browser.close();
// }

// run();

const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // 뷰포트 크기 900x630 설정
  await page.setViewport({ width: 900, height: 630 });

  // 캡처할 사이트 URL
  await page.goto("https://heasunshin.github.io/gsap_ddeok/", {
    waitUntil: "networkidle2",
  });

  // 뷰포트 영역만 캡처
  await page.screenshot({
    path: "screenshot.png",
    fullPage: false,
  });

  await browser.close();
}

run();
