window.addEventListener('DOMContentLoaded', () => { 
    
    //progress-bar
    const progress = document.querySelector('.progress-bar');

    window.addEventListener('scroll', progressBar);

    function progressBar () {
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let percentScroll = windowScroll / windowHeight * 100;
        progress.style.width = percentScroll + '%';
    }


    // Light-theme, dark-theme
    const themeBtn = document.querySelector('.theme_btn');
    
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
    });

    //запрет просмотра кода + копирование с помощью ctr+c
    
    document.addEventListener( "contextmenu", (e) => {
        e.preventDefault();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.code == 'KeyC') {
            e.preventDefault();
        }
    });

    //отправка формы
    const form = document.querySelector('form');
    const inputName = document.querySelector('#your-name');
    const inputTel= document.querySelector('#your-tel');
    const inputEmail = document.querySelector('#your-email');

    form.addEventListener(('submit'), (e)=> {
        let message = `${inputName.value}, благодарим за заявку! Ваш телефон: ${inputTel.value}, ваш email: ${inputEmail.value}`;
        var myWindow = window.open("", "info");
        myWindow.alert(message);
        
    });

    inputName.addEventListener('input', () => {
        if (inputName.value == "" || inputName.value.length < 2) {
            inputName.style.border = "1px solid red";
        } else {
            inputName.style.border = "1px solid #ced4da";
        }
    });

    inputTel.addEventListener('input', () => {
        if (inputTel.value == "" || inputTel.value.length < 10 || inputTel.value.search(/[A-Za-zA-Яа-яЁё]/g) != -1) {
            inputTel.style.border = "1px solid red";
        } else {
            inputTel.style.border = "1px solid #ced4da";
        }
    });

    inputEmail.addEventListener('input', () => {
        if (inputEmail.value == "" || inputEmail.value.search(/@/g) == -1) {
            inputEmail.style.border = "1px solid red";
        } else {
            inputEmail.style.border = "1px solid #ced4da";
        }
    });

    //простой пользователя
    let timeOut = 120;
    let timeCounter = 0;

    document.addEventListener('click', () => timeCounter = 0);
    document.addEventListener('mousemove', () => timeCounter = 0);
    document.addEventListener('keydown', () => timeCounter = 0);
    document.addEventListener('scroll', () => timeCounter = 0);

    window.setInterval(checkTime, 1000);
    function checkTime () {
        timeCounter++;
        console.log(timeCounter);

        if (timeCounter === timeOut) {
            if (confirm ('Вы еще здесь?')) {
                return true;
            } else {
                window.location.href = 'https://www.google.ru/';
            }
        }
    }

    //Плавная прокрутка по якорным ссылкам
    const links = document.querySelectorAll('.nav-link');
    

    links.forEach((item) => {
        
        item.addEventListener('click', function (e) {
            e.preventDefault();
            
            const block = item.getAttribute('href');
            
            document.querySelector(block).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
      });
    });

    //Инфо о браузере
    
    let browser = document.querySelector('.browser');
    let browser_name = '';
    let browser_your = window.navigator.userAgent;
        if(browser_your.indexOf("Firefox") != -1) {
            browser_name = 'Firefox';
        } else if (browser_your.indexOf("Trident") != -1) {
            browser_name = 'Internet Exploder';
        } else if (browser_your.indexOf("OPR") != -1) {
            browser_name = 'Opera';
        } else if (browser_your.indexOf("Chrome") != -1) {
            browser_name = 'Chrome';
        } else {
            browser_name = 'Не определен';
        }
    console.log(browser_name)
    browser.innerHTML = `Ваш браузер - ${browser_name}`;
      
});