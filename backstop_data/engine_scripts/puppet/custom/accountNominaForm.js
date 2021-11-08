module.exports = async page => {

    console.log('inicia accountNominaForm');

    await page.waitFor(3000);   
    await page.click("#item-0");   
    console.log('Awaiting load benefits...');
    await page.waitFor(10000);   
}