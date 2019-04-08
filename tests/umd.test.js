const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve('./tests/umd/index.html'), { encoding: 'utf8' });

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
  await page.setContent(html);
  await page.addScriptTag({ path: './node_modules/vue/dist/vue.js' });
  await page.addScriptTag({ path: './node_modules/dayjs/dayjs.min.js' });
  await page.addScriptTag({ path: './dist/GanttElastic.umd.js' });
  await page.addScriptTag({ path: './dist/Header.umd.js' });
  await page.addScriptTag({ path: './tests/umd/index.js' });
});

afterAll(async () => {
  await browser.close;
});

describe('GanttElastic', () => {
  test('should mount gantt-elastic', async () => {
    await page.waitForSelector('.gantt-elastic');
  }, 10000);
  test('should change time-zoom', async () => {
    const timeZoomSelector = '.gantt-elastic__header-options > label:nth-child(3) div.vue-slider-dot-handle';
    await page.waitForSelector(timeZoomSelector);
    const timeZoom = await page.$(timeZoomSelector);
    const boxModel = await timeZoom.boxModel();
    await page.mouse.move(boxModel.content[0].x + 3, boxModel.content[0].y + 3);
    await page.mouse.down();
    await page.mouse.move(boxModel.content[0].x - 10, boxModel.content[0].y + 3);
    await page.mouse.up();
  }, 15000);
});
