const en = document.querySelector("#en");
const es = document.querySelector("#es");
const pt = document.querySelector("#pt");
const fr = document.querySelector("#fr");
const ru = document.querySelector("#ru");
const flag = document.querySelector("#flag");
const cat = document.querySelector(".ld h1");
const newt = document.querySelector(".new h1");
const nm = document.querySelectorAll("h1.nm");
const ap = document.querySelector(".ap");
const vl = document.querySelectorAll("i#vl");
const ct = document.querySelector("#ct");
const lgi = document.querySelector("#lg");
const nms = document.querySelectorAll("i#nms");
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
});

es.addEventListener("click", () => {
  localStorage.setItem("lang", "es");
  location.reload();
});

pt.addEventListener("click", () => {
  localStorage.setItem("lang", "pt");
  location.reload();
});

fr.addEventListener("click", () => {
  localStorage.setItem("lang", "fr");
  location.reload();
});

ru.addEventListener("click", () => {
  localStorage.setItem("lang", "ru");
  location.reload();
});

window.addEventListener('DOMContentLoaded', () => {
    let lang = localStorage.getItem("lang");
    if (lang) {
        document.documentElement.lang = lang;
    }
});

window.addEventListener('languagechange', () => {
    let lang = localStorage.getItem("lang");
    document.documentElement.lang = lang;
});

setInterval(() => {
    switch (document.documentElement.lang) {
        case "en":
            document.title = "NextHome - The Best Technologies for Your Home!";
            converter();
            offtxt.innerHTML = otxt;
            cat.textContent = "Categories";
            mv.textContent = "Furniture";
            apr.textContent = "Devices";
            ele.textContent = "Home appliances";
            dv.textContent = "Several";
            nov.textContent = "News";
            newt.textContent = "New";
            converter();
            val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            for (let i = 0; i < pr.length; i++) {
                pr[i].innerHTML = `<em class="ap">From</em>$${val}`;
                }
            sch.placeholder = "Search..";
            ct.textContent = "Register";
            lgi.textContent = "Login";
            par.innerHTML = `12x of <em id="prej">${prej.textContent}</em> interest free`;
            cpr.textContent = "Buy";
            fre.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/2203/2203124.png" alt="">Free shipping`;
            est.innerHTML = `<em id="quant">${quant.textContent}</em>x in stock`;
            avtxt.textContent = "Assessment";
            vd.textContent = `${vds} Sales`;
            avv.textContent = `${cc} Reviews`;
            cttxt.textContent = "Comments";
            nd.textContent = "There are no reviews for this product";
            coment.placeholder = "Rate the Product..";
            sp.textContent = "About the Product";
            it.textContent = "Technical Information";
            nusu.textContent = `Hello, ${localStorage.nome}`;
            dh.textContent = "Log out";
        break;
        case "es":
            document.title = "NextHome - ¡Lo Mejor de la Tecnología para tu Hogar!";
            converter();
            offtxt.innerHTML = otxt;
            cat.textContent = "Categorias";
            mv.textContent = "Muebles";
            apr.textContent = "Accesorios";
            ele.textContent = "Electrodomésticos";
            dv.textContent = "Varios";
            nov.textContent = "Noticias";
            newt.textContent = "Nuevo";
            converter();
            val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            for (let i = 0; i < pr.length; i++) {
                pr[i].innerHTML = `<em class="ap">De</em>${val}€`;
                }
            sch.placeholder = "Buscar..";
            ct.textContent = "Registro";
            lgi.textContent = "Login";
            par.innerHTML = `12x de <em id="prej">${prej.textContent}</em> sin intereses`;
            cpr.textContent = "Comprar";
            fre.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/2203/2203124.png" alt="">Envío gratis`;
            est.innerHTML = `<em id="quant">${quant.textContent}</em>x en stock`;
            avtxt.textContent = "Evaluación";
            vd.textContent = `${vds} Ventas`;
            avv.textContent = `${cc} Reseñas`;
            cttxt.textContent = "Comentarios";
            nd.textContent = "No hay opiniones para este producto.";
            coment.placeholder = "Evaluar el producto..";
            sp.textContent = "Acerca del producto";
            it.textContent = "Información técnica";
            nusu.textContent = `Hola, ${localStorage.nome}`;
            dh.textContent = "Salir";
        break;
        case "pt":
            document.title = "NextHome - O Melhor da Tecnologia para a sua Casa!";
            converter();
            offtxt.innerHTML = otxt;
            cat.textContent = "Categorias";
            mv.textContent = "Móveis";
            apr.textContent = "Aparelhos";
            ele.textContent = "Eletrodomésticos";
            dv.textContent = "Diversos";
            nov.textContent = "Novidades";
            newt.textContent = "Novo";
            converter();
            val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            for (let i = 0; i < pr.length; i++) {
                pr[i].innerHTML = `<em class="ap">A partir de</em>R$${val}`;
                }
            sch.placeholder = "Procurar..";
            ct.textContent = "Cadastrar";
            lgi.textContent = "Login";
            par.innerHTML = `12x de <em id="prej">${prej.textContent}</em> sem juros`;
            cpr.textContent = "Comprar";
            fre.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/2203/2203124.png" alt="">Frete Grátis`;
            est.innerHTML = `<em id="quant">${quant.textContent}</em>x em estoque`;
            avtxt.textContent = "Avaliação";
            vd.textContent = `${vds} Vendas`;
            avv.textContent = `${cc} Avaliações`;
            cttxt.textContent = "Comentários";
            nd.textContent = "Não há comentários sobre este produto";
            coment.placeholder = "Avalie o Produto..";
            sp.textContent = "Sobre o Produto";
            it.textContent = "Informações Técnicas";
            nusu.textContent = `Olá, ${localStorage.nome}`;
            dh.textContent = "Sair";
        break;
        case "fr":
            document.title = "NextHome - Le meilleur de la technologie pour votre maison!";
            converter();
            offtxt.innerHTML = otxt;
            cat.textContent = "Catégories";
            mv.textContent = "Meubles";
            apr.textContent = "Appareils";
            ele.textContent = "Électroménagers";
            dv.textContent = "Plusieurs";
            nov.textContent = "Nouvelles";
            newt.textContent = "Nouveau";
            converter();
            val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            for (let i = 0; i < pr.length; i++) {
                pr[i].innerHTML = `<em class="ap">Depuis</em>${val}€`;
                }
            sch.placeholder = "Rechercher..";
            ct.textContent = "Registre";
            lgi.textContent = "Login";
            par.innerHTML = `12x de <em id="prej">${prej.textContent}</em> sans intérêt`;
            cpr.textContent = "Acheter";
            fre.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/2203/2203124.png" alt="">Livraison gratuite`;
            est.innerHTML = `<em id="quant">${quant.textContent}</em>x en stock`;
            avtxt.textContent = "Évaluation";
            vd.textContent = `${vds} Ventes`;
            avv.textContent = `${cc} Avis`;
            cttxt.textContent = "Commentaires";
            nd.textContent = "Il n'y a aucun avis pour ce produit";
            coment.placeholder = "Évaluer le produit..";
            sp.textContent = "À propos du produit";
            it.textContent = "Informations techniques";
            nusu.textContent = `Bonjour, ${localStorage.nome}`;
            dh.textContent = "Sortir";
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
            converter();
            val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            for (let i = 0; i < pr.length; i++) {
                pr[i].innerHTML = `<em class="ap">От</em>${val}₽`;
                }
            sch.placeholder = "Для поиска..";
            ct.textContent = "Зарегистрироваться";
            lgi.textContent = "Авторизоваться";
            ct.style.fontSize = "80%";
            lgi.style.fontSize = "80%";
            par.innerHTML = `12x из <em id="prej">${prej.textContent}</em> беспроцентный`;
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
            nusu.textContent = `Привет, ${localStorage.nome}`;
            dh.textContent = "Чтобы выйти";
            offtxt.innerHTML = otxt;
        break;
    }
}, 0)

let txi = setInterval(txt, 15000);

function converter() {
    switch (document.documentElement.lang) {
        case "en":
            val = Math.round(vl[id].textContent.replaceAll(".", "") * 0.18);
            ds.textContent = Math.round(vl[id].textContent.replaceAll(".", "") * 0.18) * 2;
            ds.textContent = ds.textContent.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            dsh[1].textContent = `$${ds.textContent}`;
            prej.textContent = `$${parc}`;
            nms[1].textContent = "Smart Robot Vacuum Cleaner - Ultra-Clean";
            nms[0].textContent = "Ultra-technological Ergonomic Chair - X-Chair";
            if(id == 1) {
                nm[1].textContent = "Smart Robot Vacuum Cleaner - Ultra-Clean";
            }
            else {
                nm[0].textContent = "Ultra-technological Ergonomic Chair - X-Chair";
            }
        break;
        case "es":
            val = Math.round(vl[id].textContent.replaceAll(".", "") * 0.17);
            prej.textContent = `${parc}€`;
            ds.textContent = Math.round(vl[id].textContent.replaceAll(".", "") * 0.17) * 2;
            ds.textContent = ds.textContent.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            dsh[1].textContent = `${ds.textContent}€`;
            nms[1].textContent = "Robot aspirador inteligente - Ultra-Clean";
            nms[0].textContent = "Silla Ergonomica Ultratecnológica - X-Chair";
            if(id == 1) {
                nm[1].textContent = "Robot aspirador inteligente - Ultra-Clean";
            }
            else {
                nm[0].textContent = "Silla Ergonómica Ultratecnológica - X-Chair";
            }
        break;
        case "pt":
            val = Math.round(vl[id].textContent.replaceAll(".", "") * 1);
            prej.textContent = `R$${parc}`;
            ds.textContent = Math.round(vl[id].textContent.replaceAll(".", "") * 1) * 2;
            ds.textContent = ds.textContent.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            dsh[1].textContent = `R$${ds.textContent}`;
            nms[1].textContent = "Robô Aspirador de Pó Inteligente - Ultra-Clean";
            nms[0].textContent = "Cadeira Ergonomica Ultra-tecnológica - X-Chair";
            if(id == 1) {
                nm[1].textContent = "Robô Aspirador de Pó Smart - Ultra-Clean";
            }
            else {
                nm[0].textContent = "Cadeira Ergonomica Ultra-tecnológica - X-Chair";
            }
        break;
        case "fr":
            val = Math.round(vl[id].textContent.replaceAll(".", "") * 0.17);
            prej.textContent = `${parc}€`;
            ds.textContent = Math.round(vl[id].textContent.replaceAll(".", "") * 0.17) * 2;
            ds.textContent = ds.textContent.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            dsh[1].textContent = `${ds.textContent}€`;
            nms[1].textContent = "Aspirateur robot intelligent - Ultra-Clean";
            nms[0].textContent = "Chaise Ergonomique Ultra-technologique - X-Chair";
            if(id == 1) {
                nm[1].textContent = "Aspirateur robot intelligent - Ultra-Clean";
            }
            else {
                nm[0].textContent = "Chaise Ergonomique Ultra-technologique - X-Chair";
            }
        break;
        case "ru":
            val = Math.round(vl[id].textContent.replaceAll(".", "") * 16.68);
            ds.textContent = Math.round(vl[id].textContent.replaceAll(".", "") * 16.68) * 2;
            ds.textContent = ds.textContent.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            dsh[1].textContent = `${ds.textContent}₽`;
            prej.textContent = `${parc}₽`;
            nms[1].textContent = "Умный робот-пылесос - Ultra-Clean";
            nms[0].textContent = "Ультратехнологичное эргономичное кресло - X-Chair";
            if(id == 1) {
                nm[1].textContent = "Умный робот-пылесос - Ultra-Clean";
            }
            else {
                nm[0].textContent = "Ультратехнологичное эргономичное кресло - X-Chair";
            }
        break;
    }
}

function txt() {
    let rd = Math.floor(Math.random() * 2) + 1;
    switch (document.documentElement.lang) {
        case "en":
            switch (rd) {
                case 1:
                    otxt = `<em>!!!NEW!!!</em> --- Ultra-technological Ergonomic Chair - X-Chair, only for $45.000!!!`;
                break;
                case 2:
                    otxt = `<em>!!!PROMOTION!!!</em> --- <em>50% OFF</em> --- Smart Robot Vacuum Cleaner - Ultra-Clean, only for $4.230!!!`;
                break;
            }
        break;
        case "es":
            switch (rd) {
                case 1:
                    otxt = `<em>!!!NUEVO!!!</em> --- Silla Ergonómica Ultratecnológica - X-Chair, sólo por 42.500€!!!`;
                break;
                case 2:
                    otxt = `<em>!!!PROMOCIÓN!!!</em> --- <em>50% OFF</em> --- Robot aspirador inteligente - Ultra-Clean, sólo por 3.995€!!!`;
                break;
            }
        break;
        case "pt":
            switch (rd) {
                case 1:
                    otxt = `<em>!!!NOVO!!!</em> --- Cadeira Ergonomica Ultra-tecnológica - X-Chair, apenas por R$250.000!!!`;
                break;
                case 2:
                    otxt = `<em>!!!PROMOÇÃO!!!</em> --- <em>50% OFF</em> --- Robô Aspirador de Pó Smart - Ultra-Clean, apenas por R$23.500!!!`;
                break;
            }
        break;
        case "fr":
            switch (rd) {
                case 1:
                    otxt = `<em>!!!NOUVEAU!!!</em> --- Chaise ergonomique ultra-technologique - X-Chair, uniquement par 42.500€!!!`;
                break;
                case 2:
                    otxt = `<em>!!!PROMOTION!!!</em> --- <em>50% OFF</em> --- Aspirateur robot intelligent - Ultra-propre, juste pour 3.995€!!!`;
                break;
            }
        break;
        case "ru":
            switch (rd) {
                case 1:
                    otxt = `<em>!!!НОВИНКА!!!</em> --- Ультратехнологичное эргономичное кресло X-Chair всего за ${parc}₽ реалов!!`;
                break;
                case 2:
                    otxt = `<em>!!!АКЦИЯ!!!</em> --- <em>СКИДКА 50%</em> --- Умный робот-пылесос — ультрачистый, всего за 23 500 реалов!!!`;
                break;
            }
        break;
    }
}
setTimeout(txt, 10);