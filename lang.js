const en = document.querySelector("#en");
const es = document.querySelector("#es");
const pt = document.querySelector("#pt");
const fr = document.querySelector("#fr");
const ru = document.querySelector("#ru");
const flag = document.querySelector("#flag");
const cat = document.querySelector(".ld h1");
const newt = document.querySelector(".new h1");
const nm = document.querySelector(".nm");
const ap = document.querySelector(".ap");
const vl = document.querySelectorAll("i#vl");
const ct = document.querySelector("#ct");
const lgi = document.querySelector("#lg");
const nms = document.querySelector("#nms");
const par = document.querySelector(".par");
const newdes = document.querySelector(".newdes h1");
const newd = document.querySelector(".newdes");
const fre = document.querySelector("#fre");
const est = document.querySelector("#est");
const avtxt = document.querySelector(".avtxt h1");
const cttxt = document.querySelector(".cttxt h1");
const sp = document.querySelector(".sp");
const it = document.querySelector(".it");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");
const dh = document.querySelector("#desl h1");

let lang = "pt";
let val = 0;


en.addEventListener("click", () => {
  localStorage.setItem("lang", "en");
  location.reload();
  translate();
});

es.addEventListener("click", () => {
  localStorage.setItem("lang", "es");
  location.reload();
  translate();
});

pt.addEventListener("click", () => {
  localStorage.setItem("lang", "pt");
  location.reload();
  translate();
});

fr.addEventListener("click", () => {
  localStorage.setItem("lang", "fr");
  location.reload();
  translate();
});

ru.addEventListener("click", () => {
  localStorage.setItem("lang", "ru");
  location.reload();
  translate();
});

function translate() {
    let text = document.querySelectorAll('[data-translate]');
    text.forEach(item => {
        let key = item.dataset.translate;
        let value = translations[lang][key];
        item.textContent = value;
    });
}

window.addEventListener('DOMContentLoaded', () => {
    let lang = localStorage.getItem("lang");
    if (lang) {
        document.documentElement.lang = lang;
        translate();
    }
});

window.addEventListener('languagechange', () => {
    let lang = localStorage.getItem("lang");
    document.documentElement.lang = lang;
    translate();
});

setInterval(() => {
    switch (document.documentElement.lang) {
        case "en":
            document.title = "NextHome - The Best Technologies for Your Home!";
        break;
        case "es":
            document.title = "NextHome - ¡Lo Mejor de la Tecnología para tu Hogar!";
        break;
        case "pt":
            document.title = "NextHome - O Melhor da Tecnologia para a sua Casa!";
            converter();
            nusu.textContent = `Olá, ${localStorage.nome}`;
            vd.textContent = `${vds} Vendas`;
            avv.textContent = `${cc} Avaliações`;
        break;
        case "fr":
            document.title = "NextHome - Le meilleur de la technologie pour votre maison!";
        break;
        case "ru":
            document.title = "NextHome - Лучшие технологии для вашего дома!";
            cat.textContent = "Категории";
            mv.textContent = "Мебель";
            apr.textContent = "электронные устройства";
            ele.textContent = "Бытовая техника";
            dv.textContent = "несколько";
            nov.textContent = "Новости";
            newt.textContent = "Новый";
            nm.textContent = "Ультратехнологичное эргономичное кресло - X-Chair";
            converter();
            val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            pr.innerHTML = `<em class="ap">От</em>${val}₽`;
            sch.placeholder = "Для поиска";
            ct.textContent = "Зарегистрироваться";
            lgi.textContent = "Авторизоваться";
            ct.style.fontSize = "80%";
            lgi.style.fontSize = "80%";
            nms.textContent = nm.textContent;
            par.innerHTML = `12x из <em id="prej">${prej.textContent}</em> беспроцентный`;
            newdes.textContent = "Новый";
            cpr.textContent = "Купить";
            fre.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/2203/2203124.png" alt="">бесплатная доставка`;
            fre.style.fontSize = "1.8vh";
            est.innerHTML = `<em id="quant">${quant.textContent}</em>x в наличии`;
            avtxt.textContent = "Отзывы";
            vd.textContent = `${vds} Продажи`;
            avv.textContent = `${cc} Отзывы`;
            cttxt.textContent = "Комментарии";
            nd.textContent = "Для этого товара нет отзывов";
            coment.placeholder = "Оцените товар..";
            sp.textContent = "О продукте";
            it.textContent = "Техническая информация";
            p1.textContent = "В комплект входит аналог подвижного кресла и два подстаканника.";
            p2.textContent = "Материалы и технологии: пластик, аккумулятор, искусственный интеллект, датчики, кожа, шерсть, железо, резина, медная проволока, динамик и гидравлика.";
            p3.textContent = "У ИИ есть датчики, которые помогают людям избежать столкновений на максимальной скорости 5 км/ч.";
            p4.textContent = "Вы можете активировать и деактивировать вибрацию, расположить кресло так, как хотите, и есть стрелки для его вращения.";
            nusu.textContent = `Привет, ${localStorage.nome}`;
            dh.textContent = "Чтобы выйти";
        break;
    }
}, 0)

function converter() {
    switch (document.documentElement.lang) {
        case "en":

        break;
        case "es":

        break;
        case "pt":
            val = Math.round(vl[sel].textContent.replaceAll(".", "") * 1);
            prej.textContent = `R$${parc}`;
        break;
        case "fr":

        break;
        case "ru":
            val = Math.round(vl[sel].textContent.replaceAll(".", "") * 16.68);
            prej.textContent = `${parc}₽`;
        break;
    }
}