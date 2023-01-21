const puppeteer = require('puppeteer');
const getCategory = require('../../../scraping/juegos-digitales/getCategory');

const mainFunction  = async () => {
  console.time("time");
  const browser = await puppeteer.launch({ headless: true, defaultViewport: null });
  const page = await browser.newPage();

  const result = await getCategory(page)
  console.log(result)
  console.timeEnd("time");
  await browser.close();
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    mainFunction()
    .catch((err) => console.log(err))
    .finally(() => console.log("Scraping terminado!"))
  }
}
