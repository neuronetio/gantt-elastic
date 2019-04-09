const path = require('path');
describe('Basic', () => {
  beforeAll(async () => {
    await page.goto(path.join(__dirname, 'umd.html'));
  });

  it('should mount', async () => {
    await page.waitFor('.gantt-elastic');
    const dom = await page.$('.gantt-elastic');
    expect(dom).not.toBe(null);
  });
});
