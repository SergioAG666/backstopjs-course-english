module.exports = async page => {

    console.log('inicia personalDataForm');

    await page.type("#email","salonsog@hotmail.com");

    await page.click(".label-radio");    
}