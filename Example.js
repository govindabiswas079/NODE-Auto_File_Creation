const Captcha = require('captcha-verifer');


(async () => {
    try {
      const captcha = await Captcha.verifer({
        type: 'hcaptcha', // Required (recaptcha or hcaptcha)
        secretKey: 'superSecret', // Required
        token: 'TOKEN (Captcha response)', // Required
        ip: '47.16.0.0' // Optional
      });
  
      if (!captcha.success) return; // Captcha not solved
  
      /* Your perfect code here */
    } catch (e) {
      console.log(e);
    }
  })();