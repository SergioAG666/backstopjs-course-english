module.exports = async page => {

    console.log('inicia accountAhorroForm');

    await page.waitFor(3000);   
    await page.click("#item-1");   
    console.log('Awaiting load benefits...');
    await page.waitFor(10000);   
}