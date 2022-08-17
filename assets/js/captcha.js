grecaptcha.enterprise.ready(function() {
    grecaptcha.enterprise.execute('6LcwMYQhAAAAADu2zUhD8HkJa1Cg5aaIBuljegA8', {action: 'homepage'}).then(function(token) {
       document.getElementById('captchaResponse').value = token;
    });
});
