module.exports = async page => {

    console.log('inicia otpForm');

    await page.type(".input-field","123456");
    await page.click("#btnOtpForm");    
}