import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  describe('Проверка карт', () => {
    test('Проверка карты Visa', async () => {
      await page.goto(baseUrl);
      const form = await page.$('.form');
      const input = await form.$('.field');
      await input.type('4233444334343444');
      const submit = await form.$('.form__button');
      await submit.click();
    });
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });
});
