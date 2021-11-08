const fillMandatoryFields = require("./fillMandatoryFields")

module.exports = async page => {
    await fillMandatoryFields(page);

    await page.click("#habeasdata");    
    //await page.click("#sarlaft");    

    await page.click('button[type="submit"]');
}