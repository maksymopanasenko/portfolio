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
            
            image.style.display = 'none';
            newElem.classList.add('show', 'portfolio__item__overlay');
            newElem.innerHTML = `
                Tutaj może być twój projekt
                <a href="#contact">
                    <button class="portfolio__item__btn">Darmowa wycena</button>
                </a>
            `;

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
        failure: 'Error'
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
                            </div>
                            <button class="modal__btn">Ok</button>
                        </div>
                    `;
                })
                .catch(() => {
                    thanks.innerHTML = message.failure;
                })
                .finally(() => {
                    form.reset();
                    const deleteMessage = setTimeout(() => {
                        thanks.remove();
                    }, 4000);
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
        6: 'PL',
    }


    const langParametersPol = {
        0: 'O mnie',
        1: 'Doświadczenie',
        2: 'Umiejętności',
        3: 'Projekty',
        4: 'Cennik',
        5: 'Kontakt',
        6: 'EN',
    }

    langTrigger.addEventListener('click', (e) => {
        langButton.classList.toggle('eng');
        const all = document.querySelectorAll('.all');
            
        if (e.target.className == 'all eng' && e.target.nodeName == 'BUTTON') {
            
            all.forEach((item, i) => {
                item.innerHTML = langParametersEng[i];
            });
        } else {
            all.forEach((item, i) => {
                item.innerHTML = langParametersPol[i];
            });
        }
    })




});