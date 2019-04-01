const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve('./examples/vue.edit.html'), { encoding: 'utf8' });

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close;
});

describe('GanttElastic', async () => {
  test('should start', async () => {
    await page.setContent(html);
    await page.waitForSelector('.gantt-elastic');
  }, 5000);
});
