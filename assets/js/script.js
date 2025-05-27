'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);

// document.getElementById('lang-btn').addEventListener('click', function () {
//     let btn = document.getElementById('lang-btn');
//     let lang = btn.innerText === 'EN' ? 'UZ' : 'EN';

//     const translations = {
//         EN: {
//             home: 'Home', service: 'Servie', news: 'News', shop:'Shop', contact: 'Contact',




//         },
//         UZ: {
//             home: 'Uy', service: 'Service', news: 'News', shop:'Shop', contact: 'Contact',


            
//         }
//     };

//     btn.innerText = lang;
//     for (let key in translations[lang]) {
//         let element = document.querySelector(`.${key}`);
//         if (element) element.innerText = translations[lang][key];
//     }
// });\


document.getElementById('btn-secondar').addEventListener('click', function () {
    const email = document.getElementById("input-fiel").value.trim();

    if (email) {
        // Telegram botga yuborish
        const botToken = "8096609669:AAFokYDADBiX51Q3l4Y-nK8PnutARDRJ0e8"; // Bot tokeningizni shu yerga kiriting
        const chatId = "6938522275"; // O'z chat ID yoki kanal ID ni qo'ying
        const message = `
      📧 Email: ${email}
      `;

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        })
            .then((response) => {
                if (response.ok) {
                } else {
                    throw new Error("Botga  xatolik yuz berdi!");
                }
            })
            .catch((error) => {
                console.error("Xatolik:", error);
            });

        // Erkak va qiz ismlarini tekshirish
        const resultDiv = document.getElementById("result");

    } else {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
    }
});