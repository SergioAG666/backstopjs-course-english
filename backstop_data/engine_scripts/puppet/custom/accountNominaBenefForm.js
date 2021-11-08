module.exports = async page => {

    console.log('inicia accountNominaBenefForm');

    await page.click("#item-0");   
    console.log('Awaiting load benefits...');
    await page.waitFor(15000);   
    await page.click("#linkMoreBenefits");   
    await page.waitFor(6000);   
}