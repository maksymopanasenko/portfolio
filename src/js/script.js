'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuBlock = menu.querySelector('.menu__block'),
      overlay = menu.querySelector('.menu__overlay');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });


    menu.addEventListener('click', (e) => {
        if (e.target !== menuBlock && e.target !== overlay) {
            menu.classList.remove('active');
        }
    });


    // progress bar
    const counters = document.querySelectorAll('.skills__ratings-counter'),
          lines = document.querySelectorAll('.skills__ratings-line span');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 2800) {

            counters.forEach( (item, i) => {
                lines[i].style.width = item.innerHTML;
                lines[i].classList.add('anim');
            });
        }
    });


    // mouse hover

    const activeHoveredElem = document.querySelectorAll('.portfolio__item_active'),
          undefinedHoveredElem = document.querySelectorAll('.portfolio__item_undefined');


    activeHoveredElem.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const target = e.target;
            
            target.firstElementChild.style.display = 'block';
            target.lastElementChild.style.display = 'block';
        });
    });

    activeHoveredElem.forEach(item => {
        item.addEventListener('mouseleave', (e) => {
            const target = e.target;

            target.firstElementChild.style.display = 'none';
            target.lastElementChild.style.display = 'none';
            target.classList.remove('active');
        });
    });

    // 2 part

    undefinedHoveredElem.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const newElem = document.createElement('div');
            const image = e.target.querySelector('img');

            const lang = document.querySelector('.promo__lang button');
            
            image.style.display = 'none';
            newElem.classList.add('show', 'portfolio__item__overlay');

            if (lang.classList.contains('eng')) {
                
                newElem.innerHTML = `
                    Your project could be here
                    <a href="#contact">
                        <button class="portfolio__item__btn">Free quote</button>
                    </a>
                `;
            } else {
                newElem.innerHTML = `
                    Tutaj może być twój projekt
                    <a href="#contact">
                        <button class="portfolio__item__btn">Darmowa wycena</button>
                    </a>
                `;
            }

            e.target.append(newElem);
        });
    });

    undefinedHoveredElem.forEach(item => {
        item.addEventListener('mouseleave', (e) => {
            const image = e.target.querySelector('img');

            image.style.display = 'block';
            e.target.lastElementChild.remove();
        });
    });



    // server

    const postData = async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        if (!response.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${response.status}`);
        }

        return await response.json();
    }

    const form = document.querySelector('form');

    const message = {
        loading: 'icons/contact/spin.svg',
        success: 'Twoja wiadomość została pomyślnie wysłana',
        failurePol: 'Usługa chwilowo niedostępna',
        failureEng: 'The service is temporary unavailable'
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const thanks = document.createElement('div');
            thanks.classList.add('modal');

            thanks.innerHTML = `<img src="${message.loading}" class="img"/>`;

            document.body.insertAdjacentElement('beforeend', thanks);

            const formData = new FormData(form);
            const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', jsonData)
                .then(data => {
                    console.log(data);
                    
                    thanks.innerHTML = `
                        <div class="modal__window">
                            <div class="modal__content">
                                <h2 class="modal__content__title title title_fz36">${message.success}</h2>
                                <p class="modal__content__text">Skontaktuję się z tobą w ciągu najbliższych 24 godzin.</p>
                                <p class="modal__content__text">I will contact you within the next 24 hours.</p>
                            </div>
                            <button class="modal__btn">Ok</button>
                        </div>
                    `;
                })
                .catch(() => {
                    
                    thanks.innerHTML = `
                        <div class="modal__window">
                            <div class="modal__content">
                                <h2 class="modal__content__title title title_fz36">${message.failurePol}</h2>
                                <h2 class="modal__content__title title title_fz36">${message.failureEng}</h2>
                                <div class="divider"></div>
                                <p class="modal__content__text">Serdecznie przepraszam, ale na tą chwilę nie ma możliwości skorzystać z tego kanału komunikacji.</p>
                                <p class="modal__content__text">I sincerely apologize, but at the moment it is not possible to use this communication channel.</p>
                            </div>
                            <button class="modal__btn">Ok</button>
                        </div>
                    `;
                })
                .finally(() => {
                    form.reset();
                    const deleteMessage = setTimeout(() => {
                        thanks.remove();
                    }, 7000);
                });
        });
    }

    bindPostData(form);






    // lang 

    const langTrigger = document.querySelector('.promo__lang'),
          langButton = langTrigger.querySelector('button');
    
    const langParametersEng = {
        0: 'About me',
        1: 'Experience',
        2: 'Skills',
        3: 'Projects',
        4: 'Price-list',
        5: 'Contact',
        6: 'EN',
        7: 'My name is Maksym Opanasenko',
        8: "I'm a web-developer from Wroclaw",
        9: 'About me',
        10: 'About me',
        11: 'Hi there! My name is Max',
        12: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt quos beatae et praesentium voluptatibus reiciendis quibusdam rem. Corporis eligendi maxime porro, et dignissimos illum inventore doloremque nisi rem fuga.',
        13: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        14: 'Thanks to the knowledge of the React library, I write web-applications that will run in your browser.',
        15: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        16: 'Experience and education',
        17: 'What was my career path like?',
        18: 'Education',
        19: 'V.I. Vernadsky Taurida National University',
        20: "Bachelor's degree | Kyiv (2015-2018)",
        21: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        22: 'Post-secondary school diploma | Wroclaw (2021-2023)',
        23: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        24: 'Web-programming courses | Remote',

        25: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        26: 'Experience',
        27: 'International freight forwarder | Wrocław (2021-2022)',
        28: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        29: 'Foreigners coordinator | Wrocław (2020-2021)',
        30: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        31: 'Skills',
        32: 'What I use in my work',
        33: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        34: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        35: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        36: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        37: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        38: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        39: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        40: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        41: 'Creating web-pages',
        42: 'Creating web-applications',
        43: 'Data processing',
        44: 'Creativity',
        45: 'Creating projects',
        46: 'My projects',
        47: 'from 80 PLN',
        48: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        49: 'WEB-applications',
        50: 'from 280 PLN',
        51: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        52: 'Corporate website',
        53: 'from 200 PLN',
        54: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        55: 'Android/IOS application',
        56: 'from 250 PLN',
        57: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        58: 'Online shop',
        59: 'from 300 PLN',
        60: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        61: 'Individually',
        62: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        63: 'Contact',
        64: 'Reach me out',
        65: 'in the most convenient way',
        66: 'Or leave your details and I will contact you',
        67: 'Name',
        68: 'Message',
        69: 'Send a message',
        70: 'I agree with the <a href="/policy.html">privacy policy',
    }


    const langParametersPol = {
        0: 'O mnie',
        1: 'Doświadczenie',
        2: 'Umiejętności',
        3: 'Projekty',
        4: 'Cennik',
        5: 'Kontakt',
        6: 'PL',
        7: 'Nazywam się Maksym Opanasenko',
        8: 'Jestem web-deweloperem z Wrocławia',
        9: 'O mnie',
        10: 'O mnie',
        11: "Cześć, mam na imię Maksym",
        12: 'Cieszę się, że odwiedziłeś moją stronę internetową. Od pewnego czasu sumiennie robię to, co lubię najbardziej - programuję. Pokonałem ciernistą ścieżkę zanim ta strona powstała wraz ze wszystkimi projektami, a to wszystko po to by uwolnić własną pasję i czynić drobne cuda w postaci nowych stron i aplikacji internetowych, tym samym robiąc środowisko w którym żyjemy o wiele lepszym i wygodniejszym.',
        13: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        14: 'Dzięki znajomości biblioteki React mogę napisać web-aplikację, która będzie działać w twojej przeglądarce',
        15: 'Nie wiesz jak chciałbyś, żeby twoja strona wyglądała? Ustalmy to wspólnie drogą dopasowań i wywiadów!',
        16: 'Doświadczenie i edukacja',
        17: 'Jak wyglądała moja ścieżka kariery?',
        18: 'Edukacja',
        19: 'Tawrijski Uniwersytet Narodowy im. W.Wiernadskiego',
        20: 'Dyplom licencjacki | Kijów (2015-2018)',
        21: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        22: 'Dyplom ukończenia szkoły policealnej | Wrocław (2021-2023)',
        23: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        24: 'Kursy web-programowania | Zdalnie',
        25: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        26: 'Doświadczenie',
        27: 'Spedytor międzynarodowy | Wrocław (2021-2022)',
        28: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        29: 'Koordynator ds. cudzoziemców | Wrocław (2020-2021)',
        30: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        31: 'Umiejętności',
        32: 'Czym posługuję się w swojej pracy',
        33: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        34: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        35: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        36: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        37: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        38: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        39: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        40: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus ducimus quos fugit quod tempora quibusdam ea incidunt nihil veritatis omnis eligendi ullam nostrum sequi, hic officia nulla, consectetur molestiae.',
        41: 'Tworzenie stron',
        42: 'Tworzenie aplikacji',
        43: 'Przetwarzanie danych',
        44: 'Kreatywność',
        45: 'Tworzenie projektów',
        46: 'Moje projekty',
        47: 'od 80 zł',
        48: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        49: 'WEB-aplikacja',
        50: 'od 280 zł',
        51: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        52: 'Strona korporacyjna',
        53: 'od 200 zł',
        54: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        55: 'Android/IOS aplikacja',
        56: 'od 250 zł',
        57: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        58: 'Sklep internetowy',
        59: 'od 300 zł',
        60: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        61: 'Indywidualnie',
        62: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        63: 'Kontakt',
        64: 'Skontaktuj się ze mną',
        65: 'w najbardziej wygodny sposób',
        66: 'Lub pozostaw Swoje dane i ja skontaktuję się z Tobą',
        67: 'Imię',
        68: 'Wiadomość',
        69: 'Wysłać wiadomość',
        70: 'Zgadzam się z <a href="/policy.html">polityką prywatności',    
    }

    const all = document.querySelectorAll('.all');

    langTrigger.addEventListener('click', (e) => {
        langButton.classList.toggle('eng');
                    
        if (e.target.className == 'all eng' && e.target.nodeName == 'BUTTON') {
            changPageLanguage(langParametersEng, 'uk');
        } else {
            changPageLanguage(langParametersPol, 'poland');
        }
    });

    function changPageLanguage(langParam, icon) {
        all.forEach((item, i) => {
            item.innerHTML = langParam[i];
        });

        langButton.style.background = `url('../../icons/${icon}.png') center center/cover no-repeat`;
    }




});