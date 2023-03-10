'use strict';

// lang 

const langTrigger = document.querySelector('.promo__lang'),
langButton = langTrigger.querySelector('button');

const langParametersEng = [
    'About me',
    'Experience',
    'Skills',
    'Projects',
    'Price-list',
    'Contact',
    'EN',
    'My name is Maksym Opanasenko',
    "I'm a web-developer from Wroclaw",
    'About me',
    'About me',
    'Hi there! My name is Max',
    "I'm glad you visited my website. For some time now I have been conscientiously doing what I like the most - I write code. I overcame a thorny path before this website was created with all the projects, all to unleash my passion and do small miracles in the form of new websites and web applications, thus making the environment in which we live much better and more comfortable.",
    'I create an amazing user interface using the most popular programming language - JavaScript.',
    'Thanks to the knowledge of the React library, I write web-applications that will run in your browser.',
    "Don't know what you want your website to look like? Let's figure it out together through matches and interviews!",
    'Experience and education',
    'What was my career path like?',
    'Education',
    'V.I. Vernadsky Taurida National University',
    "Unfinished bachelor's degree | Kyiv (2015-2018)",
    'Unfortunately 2 years of studying at the university at the "Finance and Banking" department did not give me the necessary knowledge and skills, so I decided to leave my studies and move to another country.',
    'Post-secondary school "TEB Edukacja"',
    'Administration Technician Diploma | Wroclaw (2021-2023)',
    'During studying at a post-secondary school, I gained new theoretical knowledge in the field of law and administrative procedures. Also, graduating from school gave me the opportunity to work in Poland without additional permits and certifies my knowledge of the Polish language at a level not lower than "B1".',
    'Web-programming courses | Remote',
    'Lectures on the Udemy platform made the biggest contribution to my learning a programming language. Thanks to them, I gained basic and advanced knowledge of web programming, and also served as the basis for further in-depth study of JavaScript.',
    'Experience',
    'International freight forwarder | Wroc??aw (2021-2022)',
    'Working as a freight forwarder is not easy at all and, contrary to appearances, it does not always bring high earnings. The situation on the transport market is changing dynamically, which means that the forwarder must keep up with the changes. In addition, this is a good position for developing interpersonal skills, coping with stress in complex situations and strong commitment to teamwork.',
    'Foreigners coordinator | Wroc??aw (2020-2021)',
    'In fact, the coordinator deals with everything related to the employment of employees and giving them instructions while performing their duties. As a coordinator, I had to be in contact with a large number of people almost 24/7. So communicativeness and good organization of work are the main features of a coordinator for foreigners.',
    'Skills',
    'What I use in my work',
    'This is the markup language used to create hypertext documents. It allows you to describe the structure of information contained within the website, giving the appropriate semantic meaning to individual fragments of the text.',
    'A language used to describe the form of web page display. A CSS style sheet is a list of directives (so-called rules) determining how the content of a selected (X)HTML or XML element is to be displayed by a web browser.',
    'Scripting and multi-paradigm programming language most often used on websites. These scripts are most often used to provide interaction by reacting to events, validating data entered in forms, or creating complex visual effects.',
    'JavaScript programming library to help you use JavaScript. At the cost of a slight decrease in performance compared to professionally written code in unsupported JavaScript, it allows you to achieve interesting animation effects, add dynamic page changes, perform AJAX queries.',
    'A JavaScript programming language library that is used to create graphical interfaces for web applications. The main distinguishing feature of the React.js library is the virtual DOM. React stores the entire application DOM in memory, when it changes state it looks for differences between the virtual and real DOM and updates the changes.',
    'An open-source cross-platform runtime for building server-side applications written in JavaScript. It helped create the "JavaScript everywhere" paradigm, enabling developers to build applications within a single programming language instead of relying on distinct server-side ones.',
    'An open source, non-relational database management system written in C++. It is characterized by the lack of a strictly defined structure of supported databases. Instead, the data is stored as JSON-style documents.',
    'A distributed version control system. Git is primarily: good support for branching software development process, support for existing network protocols, effective work with large projects, each revision is a picture of the entire project.',
    'Creating web-pages',
    'Creating web-applications',
    'Data processing',
    'Creativity',
    'Creating projects',
    'My projects',
    'from 80 PLN',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'WEB-applications',
    'from 280 PLN',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Corporate website',
    'from 200 PLN',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Android/IOS application',
    'from 250 PLN',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Online shop',
    'from 300 PLN',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Individually',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Contact',
    'Reach me out',
    'in the most convenient way',
    'Or leave your details and I will contact you',
    'Name',
    'Message',
    'Send a message',
    'I agree with the <a href="/policy.html">privacy policy'
]

const langParametersPol = [
    'O mnie',
    'Do??wiadczenie',
    'Umiej??tno??ci',
    'Projekty',
    'Cennik',
    'Kontakt',
    'PL',
    'Nazywam si?? Maksym Opanasenko',
    'Jestem web-deweloperem z Wroc??awia',
    'O mnie',
    'O mnie',
    "Cze????, mam na imi?? Maksym",
    'Ciesz?? si??, ??e odwiedzi??e?? moj?? stron?? internetow??. Od pewnego czasu sumiennie robi?? to, co lubi?? najbardziej - programuj??. Pokona??em ciernist?? ??cie??k?? zanim ta strona powsta??a wraz ze wszystkimi projektami, a to wszystko po to by uwolni?? w??asn?? pasj?? i czyni?? drobne cuda w postaci nowych stron i aplikacji internetowych, tym samym robi??c ??rodowisko w kt??rym ??yjemy o wiele lepszym i wygodniejszym.',
    'Tworz?? niesamowity interfejs u??ytkownika u??ywaj??c najpopularniejszego j??zyka programowania - JavaScript.',
    'Dzi??ki znajomo??ci biblioteki React mog?? napisa?? web-aplikacj??, kt??ra b??dzie dzia??a?? w twojej przegl??darce',
    'Nie wiesz jak chcia??by??, ??eby wygl??da??a twoja strona? Ustalmy to wsp??lnie drog?? dopasowa?? i wywiad??w!',
    'Do??wiadczenie i edukacja',
    'Jak wygl??da moja ??cie??ka kariery?',
    'Edukacja',
    'Tawrijski Uniwersytet Narodowy im. W.Wiernadskiego',
    'Nieuko??czony licencjat | Kij??w (2015-2018)',
    'Niestety 2 lata studiowania na uniwersytecie na kierunku "Finanse i bankowo????" nie przynios??y mi niezb??dnej wiedzy i umiej??tno??ci, wi??c zdecydowa??em si?? rzuci?? studia i wyjecha?? do innego kraju.',
    'Szko??a policealna "TEB Edukacja"',
    'Dyplom technika administracji | Wroc??aw (2021-2023)',
    'Ucz??c si?? w szkol?? policealnej zdoby??em now?? wiedz?? teoretyczn?? z zakresu prawa i procedur administracyjnych. R??wnie?? uko??czenie szko??y da??o mi mo??liwo???? pracy na terenie Polski bez dodatkowych zezwole?? i po??wiadcza moj?? znajomo???? j??zyka polskiego na poziomie nie ni??szym ni?? "B1".',
    'Kursy web-programowania | Zdalnie',
    'Najwi??kszy wk??ad w moj?? nauk?? j??zyka programowania mia??y wyk??ady na platformie Udemy. Dzi??ki nim zdoby??em podstawow?? i zaawansowan?? wiedz?? na temat web-programowania, a tak??e pos??u??y??em jako podstawa do dalszej dog????bnej nauki j??zyka JavaScript.',
    'Do??wiadczenie',
    'Spedytor mi??dzynarodowy | Wroc??aw (2021-2022)',
    'Praca spedytorem wcale nie jest ??atwa i wbrew pozorom nie zawsze przynosi wysokie zarobki. Sytuacja na rynku transportowym zmienia si?? dynamicznie, a to znaczy ??e spedytor musi ci??gle nad????a?? za zmianami. Poza tym to jest dobre stanowisko na rozw??j umiej??tno??ci interpersonalnych, radzenia sobie ze stresem w sytuacjach skomplikowanych oraz mocnego zaanga??owania w prac?? zespo??ow??.',
    'Koordynator ds. cudzoziemc??w | Wroc??aw (2020-2021)',
    'Tak naprawd??, koordynator zajmuje si?? wszystkim co si?? wi????e z zatrudnieniem pracownik??w oraz wydawaniam im polece?? pod czas pe??nienia przez nich obowi??zk??w. Jako koordynator musia??em by?? w kontakcie z du???? liczb?? ludzi niemal??e 24/7. Wi??c komunikatywno???? i dobra organizacja pracy to s?? g????wne cechy koordynatora ds. cudzoziemc??w.',
    'Umiej??tno??ci',
    'Czym pos??uguj?? si?? w swojej pracy',
    'J??zyk znacznik??w stosowany do tworzenia dokument??w hipertekstowych. On pozwala opisa?? struktur?? informacji zawartych wewn??trz strony internetowej, nadaj??c odpowiednie znaczenie semantyczne poszczeg??lnym fragmentom tekstu.',
    'J??zyk s??u????cy do opisu formy wy??wietlania stron internetowych. Arkusz styl??w CSS to lista dyrektyw (tzw. regu??) ustalaj??cych w jaki spos??b ma zosta?? wy??wietlana przez przegl??dark?? internetow?? zawarto???? wybranego elementu (X)HTML lub XML.',
    'Skryptowy oraz wieloparadygmatowy j??zyk programowania najcz????ciej stosowany na stronach internetowych. Skrypty te s??u???? najcz????ciej do zapewnienia interakcji poprzez reagowanie na zdarzenia, walidacji danych wprowadzanych w formularzach lub tworzenia z??o??onych efekt??w wizualnych.',
    'Biblioteka programistyczna dla j??zyka JavaScript, u??atwiaj??ca korzystanie z JavaScriptu. Kosztem niewielkiego spadku wydajno??ci w stosunku do profesjonalnie napisanego kodu w niewspomaganym JavaScripcie pozwala osi??gn???? interesuj??ce efekty animacji, doda?? dynamiczne zmiany strony, wykona?? zapytania AJAX',
    'Biblioteka j??zyka programowania JavaScript, kt??ra wykorzystywana jest do tworzenia interfejs??w graficznych aplikacji internetowych. Z g????wnych cech wyr????niaj??cych bibliotek?? React.js jest wirtualny DOM. React przechowuje ca??y DOM aplikacji w pami??ci, po zmianie stanu wyszukuje r????nice mi??dzy wirtualnym i prawdziwym DOM i aktualizuje zmiany.',
    'Wieloplatformowe ??rodowisko uruchomieniowe o otwartym kodzie do tworzenia aplikacji typu server-side napisanych w j??zyku JavaScript. Przyczyni?? si?? do stworzenia paradygmatu ???JavaScript everywhere???, umo??liwiaj??c programistom tworzenie aplikacji w obr??bie jednego j??zyka programowania zamiast polegania na odr??bnych po stronie serwerowej.',
    'Otwarty, nierelacyjny system zarz??dzania baz?? danych napisany w j??zyku C++. Charakteryzuje si?? brakiem ??ci??le zdefiniowanej struktury obs??ugiwanych baz danych. Zamiast tego dane sk??adowane s?? jako dokumenty w stylu JSON.',
    'Rozproszony system kontroli wersji. Git to przede wszystkim: dobre wsparcie dla rozga????zionego procesu tworzenia oprogramowania, wsparcie dla istniej??cych protoko????w sieciowych, efektywna praca z du??ymi projektami, ka??da rewizja to obraz ca??ego projektu.',
    'Tworzenie stron',
    'Tworzenie aplikacji',
    'Przetwarzanie danych',
    'Kreatywno????',
    'Tworzenie projekt??w',
    'Moje projekty',
    'od 80 z??',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'WEB-aplikacja',
    'od 280 z??',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Strona korporacyjna',
    'od 200 z??',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Android/IOS aplikacja',
    'od 250 z??',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Sklep internetowy',
    'od 300 z??',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Indywidualnie',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Kontakt',
    'Skontaktuj si?? ze mn??',
    'w najbardziej wygodny spos??b',
    'Lub pozostaw Swoje dane i ja skontaktuj?? si?? z Tob??',
    'Imi??',
    'Wiadomo????',
    'Wys??a?? wiadomo????',
    'Zgadzam si?? z <a href="/policy.html">polityk?? prywatno??ci'
];

const all = document.querySelectorAll('.all');

langTrigger.addEventListener('click', (e) => {
    langButton.classList.toggle('eng');
              
    if (e.target.className == 'all eng' && e.target.nodeName == 'BUTTON') {
      changPageLanguage(langParametersEng, 'uk');
    } else {
      changPageLanguage(langParametersPol, 'poland');
    }
});

changPageLanguage(langParametersPol, 'poland');

function changPageLanguage(langParam, icon) {
    all.forEach((item, i) => {
      item.innerHTML = langParam[i];
    });

    langButton.style.background = `url('icons/${icon}.png') center center/cover no-repeat`;
}