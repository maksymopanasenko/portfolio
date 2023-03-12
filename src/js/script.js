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

        return response.text();
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

            postData('/', jsonData)
            .then(response => { 
                console.log(response);
                  
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

                closeModal(thanks);
            }).catch(() => {
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

                closeModal(thanks);
            }).finally(() => {
                form.reset();
                // const deleteMessage = setTimeout(() => {
                //     thanks.remove();
                // }, 7000);
            });
        });
    }

    bindPostData(form);


    function closeModal(modal) {
        document.querySelector('.modal__btn').addEventListener('click', () => modal.remove());
    }






    

});