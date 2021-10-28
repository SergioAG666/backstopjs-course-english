module.exports = async page => {
    await page.type("#first-name","Pepito");
    await page.type("#last-name","Perez");
    await page.type("#email","valid@email.co");
    await page.click("#agree");    
}