// Standard-Texte (Deutsch) werden beim Laden aus dem DOM gelesen
const defaultTexts = {};
const defaultPlaceholders = {};
const defaultSelectOptions = {};

const translations = {
   
    ru: {
    // Header & Navigation
    logoTitle: "PROFITEX — управление прибылью для HoReCa",
    logoSubtitle: "Базируемся в Черногории · работаем по всему миру",

    navAbout: "О Profitex",
    navServices: "Услуги",
    navMonthly: "Ежемесячные услуги",
    navOneTime: "Разовые услуги",
    navContact: "Контакты",

    // Hero
    heroTitle: "Финансовый контроль и управление прибылью для ресторанов, кафе и баров",
    heroSubtitle: "Знайте свои затраты. Контролируйте прибыль. Развивайте бизнес.",
    heroPoint1: "Ежемесячная финансовая поддержка и услуги по контролю прибыли.",
    heroPoint2: "Разовые аудиты, сезонные обзоры и сопровождение при открытии заведений.",
    heroPoint3: "Персональные услуги, адаптированные под потребности вашего бизнеса.",
    heroCta: "Записаться на бесплатную консультацию",

    heroCardTitle: "Финансовая ясность для бизнеса в сфере гостеприимства",
    heroCardText:
      "Помогаю ресторанному бизнесу понимать реальную рентабельность, контролировать затраты и принимать решения на основе данных — через практическое финансовое управление, понятную отчетность и операционную аналитику.",
    heroBadge1: "20 лет опыта",
    heroBadge2: "Английский · немецкий · русский · сербский",
    heroBadge3: "Международные проекты",
    heroBadge4: "Специализация HoReCa",

    // About Profitex
    aboutTitle: "О Profitex",
    aboutP1:
      "Меня зовут Светлана Степанова, я основатель Profitex. Имея более 20 лет опыта в производстве продуктов питания, маркетинге, разработке новых продуктов (R&D), управлении запасами и управленческом учете, я помогаю компаниям пищевой отрасли строить прозрачные и эффективные финансовые системы.",
    aboutP2:
      "В последние пять лет я сопровождаю рестораны, кафе и производителей продуктов питания в Черногории и Словении при внедрении и оптимизации складского и управленческого учета.",
    aboutP3:
      "Мой фокус — практичные решения: прозрачный контроль затрат, понятный расчет маржи и отчетность, которая помогает владельцам бизнеса принимать обоснованные решения.",
    aboutP4:
      "Работая в русскоязычной, сербоязычной и англоязычной среде, я хорошо понимаю вызовы, с которыми сталкиваются международные компании, и знаю, как превращать финансовые данные в конкретные действия.",

    aboutLastProjectsTitle: "Последние успешные проекты",
    aboutLastProjectsText:
      "Краткое описание трех недавних проектов: сеть ресторанов, кафе‑пекарня и производитель продуктов питания — с фокусом на внедрение контроля затрат и прибыли.",

    // Testimonials
    clientsSayTitle: "Что говорят клиенты",
    review1Title: "Отзыв 1",
    review1Text: "Плейсхолдер для первого отзыва клиента.",
    review2Title: "Отзыв 2",
    review2Text: "Плейсхолдер для второго отзыва клиента.",
    review3Title: "Отзыв 3",
    review3Text: "Плейсхолдер для третьего отзыва клиента.",

    // Services – Intro
    servicesTitle: "Услуги",
    servicesIntro:
      "Мы предлагаем как постоянное ежемесячное сопровождение, так и разовые финансовые услуги, адаптированные под потребности вашего заведения.",
    servicesIntro2:
      "Стоимость зависит от среднего месячного оборота вашего бизнеса. Свяжитесь со мной для бесплатной консультации — вместе мы определим наилучшее решение. В рамках консультации вы получите первичную оценку потребностей вашего бизнеса и рекомендацию по оптимальному пакету услуг.",

    // Working with your systems
    card4Title: "Работа в ваших системах",
    card4Text1:
      "Все услуги оказываются в ваших существующих учетных и складских системах, поэтому нет необходимости покупать дополнительное программное обеспечение или инструменты.",
    card4Text2:
      "Я работаю со всеми распространенными финансовыми и бухгалтерскими программами — от локальных решений до международных систем. Существующая структура может быть аккуратно перенесена или выстроена с нуля так, чтобы вы получали понятные и надежные отчеты.",

    // Monthly Services – Basic / Advanced
    monthlySupportTitle: "Ежемесячные услуги",
    monthlySupportIntro:
      "Ежемесячные услуги предназначены для тех, кто хочет постоянно контролировать затраты на еду и напитки, запасы и общие финансовые результаты. Вы регулярно получаете отчеты, анализ и рекомендации по оптимизации работы и увеличению прибыли.",

    basicPackageTitle:
      "Базовый пакет — контроль Food Cost и Beverage Cost",
    basicPackageIntro:
      "Для заведений, которые хотят держать под контролем себестоимость продукции и складской учет.",
    basicIncludesTitle: "Включает",
    basicIncludes1: "Внесение приходных накладных",
    basicIncludes2: "Учет и оформление списаний",
    basicIncludes3: "Проведение инвентаризаций",
    basicIncludes4: "Контроль складских остатков",
    basicIncludes5: "Проверка корректности технологических карт (TTK)",
    basicIncludes6: "Расчет фактического Food Cost",
    basicIncludes7: "Расчет фактического Beverage Cost",
    basicIncludes8:
      "Мониторинг отклонений по Food Cost и Beverage Cost",
    basicIncludes9:
      "Ежемесячный отчет по отклонениям, потерям и себестоимости",
    basicResultTitle: "Результат",
    basicResultText:
      "Вы знаете реальную себестоимость блюд и напитков, контролируете остатки и своевременно выявляете отклонения и потери.",

    advancedPackageTitle:
      "Продвинутый пакет — контроль прибыли и финансовое сопровождение",
    advancedPackageIntro:
      "Для собственников, которые хотят понимать финансовое состояние бизнеса и принимать решения на основе цифр.",
    advancedIncludesTitle: "Включает",
    advancedIncludes1: "Все услуги из Базового пакета PLUS:",
    advancedIncludes2: "Расчет прибыли заведения",
    advancedIncludes3: "Контроль денежных потоков и мониторинг кассовых разрывов",
    advancedIncludes4: "Анализ структуры расходов",
    advancedIncludes5:
      "Анализ прибыльности категорий меню и меню-инжиниринг",
    advancedIncludes6:
      "Анализ закупок и поиск возможностей для снижения себестоимости",
    advancedIncludes7:
      "Ежемесячный анализ работы заведения и рекомендации по увеличению прибыли",
    advancedResultTitle: "Результат",
    advancedResultText:
      "Вы понимаете, сколько реально зарабатывает бизнес, где теряются деньги и какие действия помогут увеличить прибыль и эффективность работы заведения.",

    // One-time Services – Title & Intro
    oneTimeTitle: "Разовые услуги",
    oneTimeIntro:
      "Разовые услуги подходят компаниям, которым нужен конкретный финансовый анализ или поддержка в рамках отдельного проекта: поиск потерь, оптимизация затрат, подготовка к сезону или открытию нового заведения.",

  // One-time Services
  service1Title: "Финансовый аудит ресторана",
  service1IncludesTitle: "Включает",
  service1Includes1: "Проверка технологических карт (TTK)",
  service1Includes2: "Проверка списаний",
  service1Includes3: "Проверка инвентаризаций",
  service1Includes4: "Проверка кассовых операций и сторнирований",
  service1Includes5: "Сверка закупок и остатков на складе",
  service1Includes6: "Анализ Food Cost",
  service1Includes7: "Анализ Beverage Cost",
  service1Includes8: "Анализ постоянных расходов к выручке",
  service1Includes9: "Анализ ключевых показателей эффективности",
  service1ResultTitle: "Результат",
  service1ResultText:
    "Подробный отчет с выявленными потерями, ошибками и рекомендациями по улучшению финансовых показателей.",

  service2Title: "Обучение персонала работе с учетной системой",
  service2IncludesTitle: "Включает",
  service2Includes1: "Внесение приходов",
  service2Includes2: "Внесение списаний",
  service2Includes3: "Проведение инвентаризаций",
  service2Includes4: "Контроль складских остатков",
  service2Includes5: "Подготовка данных для расчета Food Cost",
  service2Includes6: "Практическое обучение на реальных данных заведения",
  service2ResultTitle: "Результат",
  service2ResultText:
    "Заведение самостоятельно ведет первичный учет, а управленческая отчетность и аналитика остаются на аутсорсе.",

  service3Title: "Сезонный пакет «Подготовка к сезону»",
  service3IncludesTitle: "Включает",
  service3Includes1: "Анализ предыдущих сезонов",
  service3Includes2: "ABC-анализ меню",
  service3Includes3: "Анализ продаж по категориям",
  service3Includes4: "Совместная работа с шеф-поваром над новым меню",
  service3Includes5: "Расчет Food Cost для новых позиций меню",
  service3Includes6: "Создание и обновление технологических карт (TTK)",
  service3Includes7: "Подготовка учетной системы к сезону",
  service3ResultTitle: "Результат",
  service3ResultText:
    "Меню и учетная система подготовлены к максимальной сезонной прибыли.",

  service4Title: "Сезонный пакет «Закрытие сезона»",
  service4IncludesTitle: "Включает",
  service4Includes1: "Анализ фактического Food Cost",
  service4Includes2: "Анализ фактического Beverage Cost",
  service4Includes3: "Сравнение плановых и фактических результатов",
  service4Includes4: "Анализ всех сезонных расходов",
  service4Includes5: "Итоговый сезонный P&L",
  service4Includes6: "Расчет маржинальности бизнеса",
  service4ResultTitle: "Результат",
  service4ResultText:
    "Владелец получает полный финансовый обзор сезона и рекомендации на следующий год.",

  service5Title: "ОТКРЫТИЕ НОВОГО РЕСТОРАНА ИЛИ КАФЕ",
  service5IncludesTitle: "Включает",
  service5Includes1: "Настройка учетной системы",
  service5Includes2: "Создание складов и справочников",
  service5Includes3: "Создание и настройка технологических карт (TTK)",
  service5Includes4: "Расчет Food Cost и Beverage Cost для меню",
  service5Includes5: "Настройка отчетности для владельца",
  service5Includes6: "Обучение персонала работе с системой",
  service5Includes7: "Обучение процедурам инвентаризации",
  service5Includes8: "Настройка контроля закупок и списаний",
  service5Includes9: "Проверка готовности заведения к открытию",
  service5Includes10: "Поддержка в первые два месяца работы",
  service5ResultTitle: "Результат",
  service5ResultText:    "С первого дня работы заведение получает точный учет, прозрачное управление затратами и систему контроля прибыли.",
    // Contact
    contactTitle: "Контакты",
    contactIntro1:
      "Давайте обсудим потребности вашего бизнеса и подберем оптимальное решение. Свяжитесь со мной для бесплатной, ни к чему не обязывающей консультации.",

    // Footer
    footerName: "PROFITEX — управление прибылью для HoReCa",
    footerLanguages: "Языки: English · Deutsch · Русский · Српски"
  },
   
  sr: {
    // Header & Navigation
    logoTitle: "PROFITEX – upravljanje profitom za HoReCa",
    logoSubtitle: "Sa sedištem u Crnoj Gori · dostupno širom sveta",

    navAbout: "O Profitexu",
    navServices: "Usluge",
    navMonthly: "Mesečne usluge",
    navOneTime: "Jednokratne usluge",
    navContact: "Kontakt",

    // Hero
    heroTitle: "Finansijska kontrola i upravljanje profitom za restorane, kafiće i barove",
    heroSubtitle: "Znajte svoje troškove. Kontrolišite profit. Razvijajte svoj biznis.",
    heroPoint1: "Mesečna finansijska podrška i usluge kontrole profita.",
    heroPoint2: "Jednokratne revizije, sezonske analize i podrška pri otvaranju lokala.",
    heroPoint3: "Personalizovane usluge prilagođene potrebama vašeg poslovanja.",
    heroCta: "Zakažite besplatne konsultacije",

    heroCardTitle: "Finansijska jasnoća za ugostiteljske biznise",
    heroCardText:
      "Pomažem ugostiteljskim objektima da razumeju svoju stvarnu profitabilnost, kontrolišu troškove i donose odluke zasnovane na podacima – kroz praktično finansijsko upravljanje, jasne izveštaje i operativne uvide.",
    heroBadge1: "20 godina iskustva",
    heroBadge2: "Engleski · nemački · ruski · srpski",
    heroBadge3: "Međunarodni projekti",
    heroBadge4: "Specijalizacija za HoReCa",

    // About Profitex
    aboutTitle: "O Profitexu",
    aboutP1:
      "Moje ime je Svetlana Stepanova i osnivač sam Profitexa. Sa više od 20 godina iskustva u proizvodnji hrane, marketingu, razvoju proizvoda (R&D), upravljanju zalihama i menadžerskom računovodstvu, pomažem biznisima u oblasti hrane da izgrade jasne i efikasne finansijske sisteme.",
    aboutP2:
      "Poslednjih pet godina podržavam restorane, kafiće i proizvođače hrane u Crnoj Gori i Sloveniji u uvođenju i optimizaciji magacinskog i menadžerskog računovodstva.",
    aboutP3:
      "Moj fokus su praktična rešenja – transparentna kontrola troškova, jasne marže i izveštavanje koje vlasnicima biznisa pomaže da donose informisane odluke.",
    aboutP4:
      "Rad u rusko‑, srpsko‑ i englesko‑govornim okruženjima omogućio mi je da razumem izazove sa kojima se međunarodni biznisi susreću i kako da finansijske podatke pretvorimo u konkretne akcije.",

    aboutLastProjectsTitle: "Poslednji uspešni projekti",
    aboutLastProjectsText:
      "Kratak pregled tri skoro realizovana projekta: lanac restorana, kafić i pekara, kao i proizvođač hrane – sa fokusom na uvođenje kontrole troškova i profita.",

    // Testimonials
    clientsSayTitle: "Šta klijenti kažu",
    review1Title: "Recenzija 1",
    review1Text: "Placeholder za prvu recenziju klijenta.",
    review2Title: "Recenzija 2",
    review2Text: "Placeholder za drugu recenziju klijenta.",
    review3Title: "Recenzija 3",
    review3Text: "Placeholder za treću recenziju klijenta.",

    // Services – Intro
    servicesTitle: "Usluge",
    servicesIntro:
      "Nudimo i kontinuiranu mesečnu podršku i jednokratne finansijske usluge prilagođene potrebama vašeg lokala.",
    servicesIntro2:
      "Cena zavisi od prosečnog mesečnog prometa vašeg biznisa. Kontaktirajte nas za besplatne konsultacije kako bismo zajedno identifikovali najprikladnije rešenje. U okviru razgovora dobijate prvu procenu potreba vašeg biznisa i našu preporuku najadekvatnijeg paketa.",

    // Working with your systems
    card4Title: "Rad u vašim sistemima",
    card4Text1:
      "Sve usluge se izvode u vašim postojećim računovodstvenim i magacinskim sistemima, tako da nema potrebe za kupovinom dodatnog softvera ili alata.",
    card4Text2:
      "Radimo sa svim standardnim finansijskim i računovodstvenim programima – od lokalnih rešenja do međunarodnih sistema. Preuzimamo postojeću strukturu ili postavljamo novu, kako biste dobijali jasne i pouzdane izveštaje.",

    // Monthly Services – Basic / Advanced
    monthlySupportTitle: "Mesečne usluge",
    monthlySupportIntro:
      "Naše mesečne usluge su namenjene biznisima koji žele kontinuiranu kontrolu troškova hrane i pića, zaliha i ukupnih finansijskih performansi. Obezbeđujemo redovno izveštavanje, analize i preporuke za optimizaciju poslovanja i povećanje profita.",

    basicPackageTitle:
      "Osnovni paket – kontrola Food Cost i Beverage Cost",
    basicPackageIntro:
      "Za biznise koji žele da drže troškove proizvoda i upravljanje zalihama pod kontrolom.",
    basicIncludesTitle: "Uključuje",
    basicIncludes1: "Knjiženje ulaznih računa",
    basicIncludes2: "Knjiženje otpisâ",
    basicIncludes3: "Sprovođenje inventura",
    basicIncludes4: "Kontrolu stanja zaliha",
    basicIncludes5: "Proveru receptura",
    basicIncludes6: "Obračun stvarnog Food Cost‑a",
    basicIncludes7: "Obračun stvarnog Beverage Cost‑a",
    basicIncludes8: "Praćenje odstupanja Food Cost‑a i Beverage Cost‑a",
    basicIncludes9: "Mesečni izveštaj o odstupanjima, gubicima i troškovima",
    basicResultTitle: "Rezultat",
    basicResultText:
      "Znate stvarni trošak jela i pića, kontrolišete nivo zaliha i na vreme prepoznajete odstupanja i gubitke.",

    advancedPackageTitle:
      "Napredni paket – kontrola profita i finansijska podrška",
    advancedPackageIntro:
      "Za vlasnike koji žele da razumeju finansijsko stanje biznisa i donose odluke zasnovane na brojkama.",
    advancedIncludesTitle: "Uključuje",
    advancedIncludes1: "Sve usluge iz Osnovnog paketa PLUS:",
    advancedIncludes2: "Obračun profita lokala",
    advancedIncludes3: "Kontrolu novčanih tokova i praćenje novčanog jaza",
    advancedIncludes4: "Analizu strukture troškova",
    advancedIncludes5:
      "Analizu profitabilnosti kategorija menija i menu inženjering",
    advancedIncludes6:
      "Analizu nabavke i identifikaciju mogućnosti za smanjenje troškova",
    advancedIncludes7:
      "Mesečnu analizu poslovanja i preporuke za povećanje profita",
    advancedResultTitle: "Rezultat",
    advancedResultText:
      "Razumete koliko vaš biznis zaista zarađuje, gde se novac gubi i koje akcije će pomoći da povećate profitabilnost i operativnu efikasnost.",

    // One-time Services – Titles & Intro
    oneTimeTitle: "Jednokratne usluge",
    oneTimeIntro:
      "Naše jednokratne usluge su namenjene biznisima kojima je potrebna specifična finansijska analiza ili podrška za određeni projekat – otkrivanje gubitaka, optimizacija troškova ili priprema za sezonu ili novo otvaranje.",
     // One-time Services
  service1Title: "Finansijska revizija restorana",
  service1IncludesTitle: "Šta je uključeno",
  service1Includes1: "Provera tehnoloških kartica",
  service1Includes2: "Provera otpisa",
  service1Includes3: "Provera inventura",
  service1Includes4: "Provera gotovinskih transakcija i storniranja",
  service1Includes5: "Usklađivanje nabavki i skladišnih stanja",
  service1Includes6: "Analiza Food Cost‑a",
  service1Includes7: "Analiza Beverage Cost‑a",
  service1Includes8: "Analiza fiksnih troškova u odnosu na prihod",
  service1Includes9: "Analiza ključnih pokazatelja učinka",
  service1ResultTitle: "Rezultat",
  service1ResultText:
    "Detaljan izveštaj sa identifikovanim gubicima, greškama i preporukama za poboljšanje finansijskih performansi.",

  service2Title: "Obuka osoblja za rad sa računovodstvenim sistemom",
  service2IncludesTitle: "Šta je uključeno",
  service2Includes1: "Evidentiranje nabavki",
  service2Includes2: "Evidentiranje otpisa",
  service2Includes3: "Sprovođenje inventura",
  service2Includes4: "Kontrola skladišnih zaliha",
  service2Includes5: "Priprema podataka za obračun Food Cost‑a",
  service2Includes6: "Praktična obuka na stvarnim podacima objekta",
  service2ResultTitle: "Rezultat",
  service2ResultText:
    "Objekat samostalno vodi primarno računovodstvo, dok menadžerski izveštaji i analitika ostaju na autsorsingu.",

  service3Title: "Sezonski paket „Priprema za sezonu",
  service3IncludesTitle: "Šta je uključeno",
  service3Includes1: "Analiza prethodnih sezona",
  service3Includes2: "ABC analiza menija",
  service3Includes3: "Analiza prodaje po kategorijama",
  service3Includes4: "Zajednički rad sa kuvarom na novom jelovniku",
  service3Includes5: "Obračun Food Cost‑a za nove stavke menija",
  service3Includes6: "Kreiranje i ažuriranje tehnoloških kartica",
  service3Includes7: "Priprema računovodstvenog sistema za sezonu",
  service3ResultTitle: "Rezultat",
  service3ResultText:
    "Jelovnik i računovodstveni sistem su pripremljeni za maksimalnu sezonsku profitabilnost.",

  service4Title: "Sezonski paket „Zatvaranje sezone",
  service4IncludesTitle: "Šta je uključeno",
  service4Includes1: "Analiza stvarnog Food Cost‑a",
  service4Includes2: "Analiza stvarnog Beverage Cost‑a",
  service4Includes3: "Poređenje planiranih i stvarnih rezultata",
  service4Includes4: "Analiza svih sezonskih troškova",
  service4Includes5: "Završni sezonski P&L",
  service4Includes6: "Obračun poslovne marže",
  service4ResultTitle: "Rezultat",
  service4ResultText:
    "Vlasnik dobija kompletan finansijski pregled sezone i preporuke za sledeću godinu.",

  service5Title: "OTVARANJE NOVOG RESTORANA ILI KAFIĆA",
  service5IncludesTitle: "Šta je uključeno",
  service5Includes1: "Postavljanje računovodstvenog sistema",
  service5Includes2: "Kreiranje skladišta i šifarnika",
  service5Includes3: "Kreiranje i postavljanje tehnoloških kartica",
  service5Includes4: "Obračun Food Cost‑a i Beverage Cost‑a za jelovnik",
  service5Includes5: "Postavljanje izveštavanja za vlasnika",
  service5Includes6: "Obuka osoblja za rad u sistemu",
  service5Includes7: "Obuka za procedure inventure",
  service5Includes8: "Postavljanje kontrole nabavke i otpisa",
  service5Includes9: "Provera spremnosti objekta za otvaranje",
  service5Includes10: "Podrška tokom prva dva meseca rada",
  service5ResultTitle: "Rezultat",
  service5ResultText:
    "Od prvog dana rada, objekat dobija precizan računovodstveni sistem, transparentno upravljanje troškovima i sistem kontrole profita.",
    // Contact
    contactTitle: "Kontakt",
    contactIntro1:
      "Razgovarajmo o potrebama vašeg biznisa i pronađimo pravo rešenje zajedno. Javite se za besplatne, neobavezujuće konsultacije.",

    // Footer
    footerName: "PROFITEX – upravljanje profitom za HoReCa",
    footerLanguages: "Jezici: English · Deutsch · Русский · Српски"
  },
};

function cacheDefaultTexts() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (key && !(key in defaultTexts)) {
            defaultTexts[key] = el.textContent;
        }
    });
    

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (key && !(key in defaultPlaceholders)) {
            defaultPlaceholders[key] = el.getAttribute("placeholder") || "";
        }
    });

    document.querySelectorAll("#channel option").forEach(opt => {
        const key = opt.getAttribute("data-i18n");
        if (key && !(key in defaultSelectOptions)) {
            defaultSelectOptions[key] = opt.textContent;
        }
    });
}
function initServiceAccordions() {
    const cards = document.querySelectorAll(".service-card");

    cards.forEach(card => {
        const toggle = card.querySelector(".service-toggle");
        if (!toggle) return;

        toggle.addEventListener("click", () => {
            const isOpen = card.classList.contains("open");
            // Optional: nur eine gleichzeitig offen
            // cards.forEach(c => c.classList.remove("open"));

            if (isOpen) {
                card.classList.remove("open");
            } else {
                card.classList.add("open");
            }
        });
    });
}


function applyLanguage(lang) {
    const htmlEl = document.documentElement;
    htmlEl.lang = lang;

    // Deutsch: Ausgangstexte wiederherstellen
    if (lang === "en") {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (key && defaultTexts[key]!== undefined) {
                el.textContent = defaultTexts[key];
            }
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (key && defaultPlaceholders[key] !== undefined) {
                el.setAttribute("placeholder", defaultPlaceholders[key]);
            }
        });
        document.querySelectorAll("#channel option").forEach(opt => {
            const key = opt.getAttribute("data-i18n");
            if (key && defaultSelectOptions[key] !== undefined) {
                opt.textContent = defaultSelectOptions[key];
            }
        });
        return;
    }

    const map = translations[lang] || {};

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (key && map[key]) {
            el.textContent = map[key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (key && map[key]) {
            el.setAttribute("placeholder", map[key]);
        }
    });

    document.querySelectorAll("#channel option").forEach(opt => {
        const key = opt.getAttribute("data-i18n");
        if (key && map[key]) {
            opt.textContent = map[key];
        }
    });
}

function initLanguageSwitch() {
    const buttons = document.querySelectorAll(".lang-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            applyLanguage(lang);
        });
    });
}

function initHeroCtaScroll() {
    const cta = document.getElementById("hero-cta");
    const contactSection = document.getElementById("kontakt");
    if (!cta || !contactSection) return;

    cta.addEventListener("click", () => {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

function initYear() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cacheDefaultTexts();
    initLanguageSwitch();
    initHeroCtaScroll();
    initYear();
    initServiceAccordions();   // NEU
    document.documentElement.lang = "en";
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === "en");
});
});
