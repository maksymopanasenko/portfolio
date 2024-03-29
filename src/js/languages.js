'use strict';

// lang 

const langTrigger = document.querySelector('.promo__lang'),
      langButton = langTrigger.querySelector('button');

const all = document.querySelectorAll('.all');

const langParametersEng = [
    'About me',
    'Experience',
    'Skills',
    'Projects',
    'Price-list',
    'Contact',
    'PL',
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
    'Frontend development | Kyiv (2023-)',
    'Finally, I decided to consolidate all the knowledge of a Frontend programmer at programming courses. With each subsequent lecture, I improved my theoretical knowledge, and with each completed homework or project, I improved my practical web development skills.',
    'Experience',
    'International freight forwarder | Wrocław (2021-2022)',
    'Working as a freight forwarder is not easy at all and, contrary to appearances, it does not always bring high earnings. The situation on the transport market is changing dynamically, which means that the forwarder must keep up with the changes. In addition, this is a good position for developing interpersonal skills, coping with stress in complex situations and strong commitment to teamwork.',
    'Foreigners coordinator | Wrocław (2020-2021)',
    'In fact, the coordinator deals with everything related to the employment of employees and giving them instructions while performing their duties. As a coordinator, I had to be in contact with a large number of people almost 24/7. So communicativeness and good organization of work are the main features of a coordinator for foreigners.',
    'HR Specialist | Wrocław (2023)',
    'I got to know the other side of the transportation industry - its HR part. Preparing documents for drivers and keeping in touch with them is one of my main responsibilities. I still devote all my free time outside of work to programming, hoping to get my long-awaited offer.',
    'Frontend Developer | Remote (2023-)',
    'After months of hard work, dedication, and continuous learning, I have landed my first job in the dynamic world of web development. I am beyond grateful for this opportunity and excited to embark on this new chapter in my career.',
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
    'One-page sites for different needs and on different topics.',
    'WEB-applications',
    'from 280 PLN',
    'Simple apps written using React.js library.',
    'Corporate website',
    'from 200 PLN',
    'Creating multi-page websites for companies.',
    'Android/IOS application',
    'N/A',
    'Not available at the moment.',
    'Online shop',
    'from 300 PLN',
    'Complex creation of online stores.',
    'Individually',
    'Сreating a custom design for your site.',
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
    'Doświadczenie',
    'Umiejętności',
    'Projekty',
    'Cennik',
    'Kontakt',
    'EN',
    'Nazywam się Maksym Opanasenko',
    'Jestem web-deweloperem z Wrocławia',
    'O mnie',
    'O mnie',
    "Cześć, mam na imię Maksym",
    'Cieszę się, że odwiedziłeś moją stronę internetową. Od pewnego czasu sumiennie robię to, co lubię najbardziej - programuję. Pokonałem ciernistą ścieżkę zanim ta strona powstała wraz ze wszystkimi projektami, a to wszystko po to by uwolnić własną pasję i czynić drobne cuda w postaci nowych stron i aplikacji internetowych, tym samym robiąc środowisko w którym żyjemy o wiele lepszym i wygodniejszym.',
    'Tworzę niesamowity interfejs użytkownika używając najpopularniejszego języka programowania - JavaScript.',
    'Dzięki znajomości biblioteki React mogę napisać web-aplikację, która będzie działać w twojej przeglądarce',
    'Nie wiesz jak chciałbyś, żeby wyglądała twoja strona? Ustalmy to wspólnie drogą dopasowań i wywiadów!',
    'Doświadczenie i edukacja',
    'Jak wygląda moja ścieżka kariery?',
    'Edukacja',
    'Tawrijski Uniwersytet Narodowy im. W.Wiernadskiego',
    'Nieukończony licencjat | Kijów (2015-2018)',
    'Niestety 2 lata studiowania na uniwersytecie na kierunku "Finanse i bankowość" nie przyniosły mi niezbędnej wiedzy i umiejętności, więc zdecydowałem się rzucić studia i wyjechać do innego kraju.',
    'Szkoła policealna "TEB Edukacja"',
    'Dyplom technika administracji | Wrocław (2021-2023)',
    'Ucząc się w szkolę policealnej zdobyłem nową wiedzę teoretyczną z zakresu prawa i procedur administracyjnych. Również ukończenie szkoły dało mi możliwość pracy na terenie Polski bez dodatkowych zezwoleń i poświadcza moją znajomość języka polskiego na poziomie nie niższym niż "B1".',
    'Kursy web-programowania | Zdalnie',
    'Największy wkład w moją naukę języka programowania miały wykłady na platformie Udemy. Dzięki nim zdobyłem podstawową i zaawansowaną wiedzę na temat web-programowania, a także posłużyłem jako podstawa do dalszej dogłębnej nauki języka JavaScript.',
    'Frontend development | Kijów (2023-)',
    'W końcu postanowiłem utrwalić całą wiedzę programisty Frontend na kwalifikowanych kursach programowania. Z każdym kolejnym wykładem pogłębiam wiedzę teoretyczną, a z każdą odrobioną pracą domową lub projektem - praktyczną umiejętność tworzenia stron internetowych.',
    'Doświadczenie',
    'Spedytor międzynarodowy | Wrocław (2021-2022)',
    'Praca spedytorem wcale nie jest łatwa i wbrew pozorom nie zawsze przynosi wysokie zarobki. Sytuacja na rynku transportowym zmienia się dynamicznie, a to znaczy że spedytor musi ciągle nadążać za zmianami. Poza tym to jest dobre stanowisko na rozwój umiejętności interpersonalnych, radzenia sobie ze stresem w sytuacjach skomplikowanych oraz mocnego zaangażowania w pracę zespołową.',
    'Koordynator ds. cudzoziemców | Wrocław (2020-2021)',
    'Tak naprawdę, koordynator zajmuje się wszystkim co się wiąże z zatrudnieniem pracowników oraz wydawaniam im poleceń pod czas pełnienia przez nich obowiązków. Jako koordynator musiałem być w kontakcie z dużą liczbą ludzi niemalże 24/7. Więc komunikatywność i dobra organizacja pracy to są główne cechy koordynatora ds. cudzoziemców.',
    'Specjalista ds. HR | Wrocław (2023)',
    'Poznałem drugą stronę branży transportowej - jej część HR. Przygotowywanie dokumentów dla kierowców oraz stałe utrzymywanie z nimi kontaktu to jeden z moich głównych obowiązków. Cały swój wolny czas poza pracą poświęcam programowaniu, tak jak dotychczas, w nadziei na otrzymanie długo wyczekiwanej oferty pracy.',
    'Frontend Developer | Zdalnie (2023-)',
    'Po miesiącach ciężkiej pracy, poświęcenia i ciągłej nauki dostałem swoją pierwszą pracę w dynamicznym świecie tworzenia stron internetowych. Jestem niezmiernie wdzięczny za tę możliwość i podekscytowany rozpoczęciem nowego rozdziału w mojej karierze.',
    'Umiejętności',
    'Czym posługuję się w swojej pracy',
    'Język znaczników stosowany do tworzenia dokumentów hipertekstowych. On pozwala opisać strukturę informacji zawartych wewnątrz strony internetowej, nadając odpowiednie znaczenie semantyczne poszczególnym fragmentom tekstu.',
    'Język służący do opisu formy wyświetlania stron internetowych. Arkusz stylów CSS to lista dyrektyw (tzw. reguł) ustalających w jaki sposób ma zostać wyświetlana przez przeglądarkę internetową zawartość wybranego elementu (X)HTML lub XML.',
    'Skryptowy oraz wieloparadygmatowy język programowania najczęściej stosowany na stronach internetowych. Skrypty te służą najczęściej do zapewnienia interakcji poprzez reagowanie na zdarzenia, walidacji danych wprowadzanych w formularzach lub tworzenia złożonych efektów wizualnych.',
    'Biblioteka programistyczna dla języka JavaScript, ułatwiająca korzystanie z JavaScriptu. Kosztem niewielkiego spadku wydajności w stosunku do profesjonalnie napisanego kodu w niewspomaganym JavaScripcie pozwala osiągnąć interesujące efekty animacji, dodać dynamiczne zmiany strony, wykonać zapytania AJAX',
    'Biblioteka języka programowania JavaScript, która wykorzystywana jest do tworzenia interfejsów graficznych aplikacji internetowych. Z głównych cech wyróżniających bibliotekę React.js jest wirtualny DOM. React przechowuje cały DOM aplikacji w pamięci, po zmianie stanu wyszukuje różnice między wirtualnym i prawdziwym DOM i aktualizuje zmiany.',
    'Wieloplatformowe środowisko uruchomieniowe o otwartym kodzie do tworzenia aplikacji typu server-side napisanych w języku JavaScript. Przyczynił się do stworzenia paradygmatu „JavaScript everywhere”, umożliwiając programistom tworzenie aplikacji w obrębie jednego języka programowania zamiast polegania na odrębnych po stronie serwerowej.',
    'Otwarty, nierelacyjny system zarządzania bazą danych napisany w języku C++. Charakteryzuje się brakiem ściśle zdefiniowanej struktury obsługiwanych baz danych. Zamiast tego dane składowane są jako dokumenty w stylu JSON.',
    'Rozproszony system kontroli wersji. Git to przede wszystkim: dobre wsparcie dla rozgałęzionego procesu tworzenia oprogramowania, wsparcie dla istniejących protokołów sieciowych, efektywna praca z dużymi projektami, każda rewizja to obraz całego projektu.',
    'Tworzenie stron',
    'Tworzenie aplikacji',
    'Przetwarzanie danych',
    'Kreatywność',
    'Tworzenie projektów',
    'Moje projekty',
    'od 80 zł',
    'Jednostronicowe witryny dla różnych potrzeи na dowolne tematy.',
    'WEB-aplikacja',
    'od 280 zł',
    'Proste aplikacje napisane przy użyciu biblioteki React.js',
    'Strona korporacyjna',
    'od 200 zł',
    'Tworzenie wielostronicowych stron internetowych dla firm.',
    'Android/IOS aplikacja',
    'N/A',
    'Niedostępne w tej chwili.',
    'Sklep internetowy',
    'od 300 zł',
    'Kompleksowe tworzenie sklepów internetowych.',
    'Indywidualnie',
    'Tworzenie niestandardowego designu dla twojej witryny.',
    'Kontakt',
    'Skontaktuj się ze mną',
    'w najbardziej wygodny sposób',
    'Lub pozostaw Swoje dane i ja skontaktuję się z Tobą',
    'Imię',
    'Wiadomość',
    'Wysłać wiadomość',
    'Zgadzam się z <a href="/policy.html">polityką prywatności'
];


if (localStorage.getItem('lang') == 'all') {
    changePageLanguage(langParametersPol, 'uk');
} else {
    changePageLanguage(langParametersEng, 'poland');
    langButton.classList.toggle('eng');
}

langTrigger.addEventListener('click', (e) => {
    langButton.classList.toggle('eng');
              
    if (e.target.className == 'all eng' && e.target.nodeName == 'BUTTON') {
        changePageLanguage(langParametersEng, 'poland');
        localStorage.setItem('lang', langButton.classList.value);
    } else {
        changePageLanguage(langParametersPol, 'uk');
        localStorage.setItem('lang', langButton.classList.value);
    }
});

function changePageLanguage(langParam, icon) {
    all.forEach((item, i) => item.innerHTML = langParam[i]);

    langButton.style.background = `url('icons/${icon}.png') center center/cover no-repeat`;
}