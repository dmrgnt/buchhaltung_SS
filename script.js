// Standard-Texte (Deutsch) werden beim Laden aus dem DOM gelesen
const defaultTexts = {};
const defaultPlaceholders = {};
const defaultSelectOptions = {};

const translations = {
    ru: {
        logoTitle: "Складской и товарный учет",
        logoSubtitle: "Черногория · Deutsch · Русский · Српски",
        navServices: "Услуги",
        navIndustries: "Для кого",
        navContact: "Контакты",
        heroTitle: "Складской и товарный учет для ресторанов и кафе в Черногории",
        heroSubtitle: "Точный учет остатков, прозрачная себестоимость и понятная управленческая отчетность — на русском, немецком и сербском языках.",
        heroPoint1: "Специализация на ресторанах, кафе и производителях продуктов питания.",
        heroPoint2: "Работа со всеми распространенными финансовыми и бухгалтерскими программами.",
        heroPoint3: "Индивидуальные рекомендации по повышению эффективности и контролю затрат.",
        heroCta: "Отправить запрос",
        heroCardTitle: "Склад и товарный учет",
        heroCardText: "Структурированный учет движения товаров, маржи и затрат — чтобы вы всегда знали, что происходит на складе и на кухне.",
        heroBadge1: "Русский язык",
        heroBadge2: "Сербский",
        heroBadge3: "Черногория и регион",
        servicesTitle: "Услуги",
        servicesIntro: "Услуги сгруппированы так, чтобы у вас всегда был ясный обзор по товарам, затратам и результату.",
        card1Title: "1. Складской и товарный учет",
        card1Intro: "Полное отражение движения товаров от прихода до инвентаризации.",
        card2Title: "2. Управленческий учет и денежные потоки",
        card2Intro: "Показатели для собственников и менеджмента в понятной форме.",
        card3Title: "3. Аналитика и повышение эффективности",
        card3Intro: "Глубокий анализ, позволяющий улучшать маржу и условия закупок.",
        card4Title: "Работа с вашими системами",
        card4Text1: "Работа со всеми распространенными финансовыми и бухгалтерскими решениями — от местных до международных.",
        card4Text2: "Существующая структура может быть аккуратно перенесена или при необходимости выстроена с нуля для получения ясной и надежной отчетности.",
        industriesTitle: "Для каких предприятий?",
        industry1Title: "Объекты общественного питания",
        industry1Text: "Рестораны, кафе, бары — с фокусом на калькуляцию рецептур, маржу и контроль товарных затрат.",
        industry2Title: "Производители продуктов питания",
        industry2Text: "Небольшие фабрики и мануфактуры, которым нужен точный складской и производственный учет.",
        industry3Title: "Черногория и регион",
        industry3Text: "Сотрудничество с предприятиями в Черногории и соседних странах — общение на немецком, русском или сербском.",
        contactTitle: "Контакты",
        contactIntro1: "Кратко опишите ваш бизнес и текущую ситуацию. Вы получите предварительную оценку объема работ.",
        contactIntro2: "Общение возможно на немецком, русском и сербском — выберите удобный для вас канал.",
        formNameLabel: "Имя",
        formNamePlaceholder: "Ваше имя",
        formCompanyLabel: "Компания / заведение",
        formCompanyPlaceholder: "Ресторан, кафе, производство ...",
        formEmailLabel: "E‑mail",
        formEmailPlaceholder: "ваш@email.me",
        formPhoneLabel: "Телефон / WhatsApp (необязательно)",
        formPhonePlaceholder: "+382 ...",
        formMessageLabel: "Краткое описание",
        formMessagePlaceholder: "Например: количество точек, текущая система, основные вопросы ...",
        formChannelLabel: "Предпочтительный канал связи",
        formChannelEmail: "E‑mail",
        formChannelWhatsApp: "WhatsApp",
        formChannelTelegram: "Telegram",
        formChannelPhone: "Телефон",
        formSubmit: "Отправить запрос",
        footerName: "Частный специалист по складскому и товарному учету · Черногория",
        footerLanguages: "Языки: Deutsch · Русский · Српски",
        // Über mich
        aboutTitle: "Обо мне",
        aboutP1: "Уже более 10 лет я сопровождаю рестораны, кафе и производителей продуктов питания в Черногории и соседних странах при внедрении и оптимизации складского и товарного учета.",
        aboutP2: "Мой акцент — практичные решения: четкие структуры в финансовой программе, прозрачная калькуляция маржи и отчеты, которые одинаково понятны владельцам и шеф-поварам.",
        aboutP3: "Благодаря опыту работы в русскоязычных, сербоязычных и немецкоязычных командах я хорошо знаю типичные задачи международных предприятий — от общения с поставщиками до внутреннего контроля затрат.",

        // Portfolio-Kacheln
        portfolio1Title: "Сеть ресторанов",
        portfolio1Text: "Построение единой системы товарного учета для нескольких точек, включая калькуляцию рецептов и ежемесячный анализ отклонений.",
        portfolio2Title: "Кафе и пекарня",
        portfolio2Text: "Внедрение системы раздельного учета производства и продаж с прозрачным отражением маржи по продуктам.",
        portfolio3Title: "Производство продуктов питания",
        portfolio3Text: "Структурирование складских остатков по сырью и готовой продукции с интеграцией в существующее финансовое и бухгалтерское ПО."
    },
    sr: {
        logoTitle: "Magacinsko i robno knjigovodstvo",
        logoSubtitle: "Crna Gora · Deutsch · Русский · Српски",
        navServices: "Usluge",
        navIndustries: "Za koga",
        navContact: "Kontakt",
        heroTitle: "Magacinsko i robno knjigovodstvo za ugostitelje u Crnoj Gori",
        heroSubtitle: "Precizne zalihe, jasne marže i pouzdani menadžerski izveštaji — na srpskom, nemačkom i ruskom jeziku.",
        heroPoint1: "Specijalizacija za restorane, kafiće i proizvođače hrane.",
        heroPoint2: "Rad sa svim uobičajenim finansijskim i knjigovodstvenim programima.",
        heroPoint3: "Individualne preporuke za povećanje efikasnosti i kontrolu troškova.",
        heroCta: "Pošaljite upit",
        heroCardTitle: "Lager i robno knjigovodstvo",
        heroCardText: "Struktuirano praćenje kretanja robe, marži i troškova — da u svakom trenutku znate šta se dešava u magacinu i kuhinji.",
        heroBadge1: "Ruski jezik",
        heroBadge2: "Srpski",
        heroBadge3: "Crna Gora i region",
        servicesTitle: "Usluge",
        servicesIntro: "Usluge su organizovane tako da uvek imate jasan pregled zaliha, troškova i rezultata.",
        card1Title: "1. Magacinsko i robno knjigovodstvo",
        card1Intro: "Potpuno evidentiranje toka robe od prijema do inventure.",
        card2Title: "2. Menadžersko knjigovodstvo i tok novca",
        card2Intro: "Brojevi za vlasnike i menadžment u jasnom formatu.",
        card3Title: "3. Analize i unapređenje efikasnosti",
        card3Intro: "Detaljne analize koje pomažu da stalno unapređujete marže i uslove nabavke.",
        card4Title: "Rad u vašim sistemima",
        card4Text1: "Rad sa svim uobičajenim finansijskim i knjigovodstvenim alatima — lokalnim i međunarodnim.",
        card4Text2: "Postojeća struktura se može preuzeti ili po potrebi izgraditi od nule, kako biste dobijali jasne i pouzdane izveštaje.",
        industriesTitle: "Za koje biznise?",
        industry1Title: "Ugostiteljski objekti",
        industry1Text: "Restorani, kafići, barovi — fokus na kalkulaciju recepata, marže i kontrolu utroška robe.",
        industry2Title: "Proizvođači hrane",
        industry2Text: "Proizvodnje i manufakture kojima je potreban tačan magacinski i proizvodni evidencioni sistem.",
        industry3Title: "Crna Gora i region",
        industry3Text: "Saradnja sa firmama u Crnoj Gori i susednim zemljama — komunikacija na nemačkom, ruskom ili srpskom.",
        contactTitle: "Kontakt",
        contactIntro1: "Ukratko opišite vaš biznis i trenutnu situaciju. Dobićete neobavezujuću procenu obima posla.",
        contactIntro2: "Komunikacija je moguća na nemačkom, ruskom i srpskom — izaberite kanal koji vam najviše odgovara.",
        formNameLabel: "Ime",
        formNamePlaceholder: "Vaše ime",
        formCompanyLabel: "Firma / objekat",
        formCompanyPlaceholder: "Restoran, kafić, proizvodnja ...",
        formEmailLabel: "E‑mail",
        formEmailPlaceholder: "vaš@email.me",
        formPhoneLabel: "Telefon / WhatsApp (opciono)",
        formPhonePlaceholder: "+382 ...",
        formMessageLabel: "Kratak opis",
        formMessagePlaceholder: "Npr. broj lokacija, trenutni sistem, glavna pitanja ...",
        formChannelLabel: "Preferirani kanal",
        formChannelEmail: "E‑mail",
        formChannelWhatsApp: "WhatsApp",
        formChannelTelegram: "Telegram",
        formChannelPhone: "Telefon",
        formSubmit: "Pošaljite upit",
        footerName: "Samostalni stručnjak za magacinsko i robno knjigovodstvo · Crna Gora",
        footerLanguages: "Jezici: Deutsch · Русский · Српски",
        // Über mich
        aboutTitle: "O meni",
        aboutP1: "Već više od 10 godina pratim ugostiteljske objekte i proizvođače hrane u Crnoj Gori i regionu pri uvođenju i optimizaciji magacinskog i robnog knjigovodstva.",
        aboutP2: "Moj fokus su praktična rješenja: jasne strukture u finansijskom programu, pregledne kalkulacije marži i izveštaji koje jednako razumeju vlasnici i šefovi kuhinje.",
        aboutP3: "Zahvaljujući radu u rusko-, srpsko- i nemačko-govornim timovima poznajem tipične izazove međunarodnih preduzeća – od komunikacije sa dobavljačima do interne kontrole troškova.",

        // Portfolio-kartice
        portfolio1Title: "Lanac restorana",
        portfolio1Text: "Uspostavljanje jedinstvenog robnog knjigovodstva za više lokacija, uključujući kalkulaciju recepata i mesečne analize odstupanja.",
        portfolio2Title: "Kafić i pekara",
        portfolio2Text: "Uvođenje sistema za odvojeno evidentiranje proizvodnje i prodaje, sa jasnim prikazom marži po proizvodima.",
        portfolio3Title: "Proizvodnja hrane",
        portfolio3Text: "Strukturiranje zaliha po sirovinama i gotovim proizvodima, uz povezivanje sa postojećim finansijskim i knjigovodstvenim softverom."
    }
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

function applyLanguage(lang) {
    const htmlEl = document.documentElement;
    htmlEl.lang = lang;

    // Deutsch: Ausgangstexte wiederherstellen
    if (lang === "de") {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (key && defaultTexts[key]) {
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
            if (key && defaultSelectOptions[key]) {
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
});
