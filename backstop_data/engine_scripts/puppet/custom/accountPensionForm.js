module.exports = async page => {

    console.log('inicia accountPensionForm');

    await page.waitFor(3000);   
    await page.click("#item-2");   
    console.log('Awaiting load benefits...');
    await page.waitFor(12000);   
}