"use strict";

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
var puppeteer = require("puppeteer");

function run() {
  var browser, page;
  return regeneratorRuntime.async(function run$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(puppeteer.launch({
            args: ["--no-sandbox", "--disable-setuid-sandbox"]
          }));

        case 2:
          browser = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(browser.newPage());

        case 5:
          page = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(page.setViewport({
            width: 900,
            height: 630
          }));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(page["goto"]("https://heasunshin.github.io/gsap_ddeok/", {
            waitUntil: "networkidle2"
          }));

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(page.screenshot({
            path: "screenshot.png",
            fullPage: false
          }));

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(browser.close());

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
}

run();