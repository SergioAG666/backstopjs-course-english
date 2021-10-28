module.exports = async page => {
    await page.type("#email","invalid-email.co")
}