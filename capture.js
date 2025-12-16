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

const fs = require("fs");
const path = require("path");

async function run() {
  //   const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  // 캡처할 URL
  await page.goto("https://heasunshin.github.io/gsap_ddeok/", {
    waitUntil: "networkidle2",
  });

  // 스크린샷 저장
  await page.screenshot({ path: "screenshot.png", fullPage: true });

  await browser.close();

  // ----------------------------------------------------
  // A사이트로 이미지 자동 복사 기능 (추가된 부분)
  // ----------------------------------------------------
  const source = path.join(__dirname, "screenshot.png");

  const destination =
    "D:\\[S]\\(git)\\port\\images\\personal_project\\screenshot.png";

  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.error("이미지 복사 실패:", err);
      return;
    }
    console.log("A사이트 로컬 이미지에 최신 화면이 복사되었습니다.");
  });
}

run();
