const mv = document.querySelector("#mv");
const apr = document.querySelector("#apr");
const ele = document.querySelector("#ele");
const moveis = document.querySelector(".moveis");
const prod1 = document.querySelector(".prod1");
const prodtxt = document.querySelector(".prodtxt");
const prodimg = document.querySelector(".prod img");
const prod = document.querySelector(".prod");
const ld = document.querySelector(".ld");
const newp = document.querySelector(".new");
const pr = document.querySelector(".pr");
const prc = document.querySelector(".prc");
const com = document.querySelector(".com");
const txtp = document.querySelector(".txtp");
const prej = document.querySelector("#prej");
const vol = document.querySelector("#vol");
const dv = document.querySelector("#dv");
const nov = document.querySelector("#nov");
const sch = document.querySelector("#sch");
const myUL = document.querySelector("#myUL");
const myLI = document.querySelector("#myUL li");
const lg = document.querySelector(".lg");
const pr1 = document.querySelector("#pr1");
const desc = document.querySelector(".desc");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const e1 = document.querySelector(".e1");
const e2 = document.querySelector(".e2");
const e3 = document.querySelector(".e3");
const e4 = document.querySelector(".e4");
const e5 = document.querySelector(".e5");
const exc = document.querySelector("#exc");
const coment = document.querySelector("#coment");
const cbtn = document.querySelector("#cbtn");
const cts = document.querySelector(".cts");
const nd = document.querySelector("#nd");
const e1r = document.querySelector(".e1r");
const e2r = document.querySelector(".e2r");
const e3r = document.querySelector(".e3r");
const e4r = document.querySelector(".e4r");
const e5r = document.querySelector(".e5r");
const re = document.querySelector(".re");
const avv = document.querySelector(".avv");
const prn = document.querySelector("#prn");
const cpr = document.querySelector("#cpr");
const quant = document.querySelector("#quant");
const vd = document.querySelector(".vd");
const btnspv = document.querySelector(".btnspv");
const prox = document.querySelector("#prox");
const volt = document.querySelector("#volt");
const pimg = document.querySelector("#pimg");
const lin = document.querySelector("#lin");
const drop = document.querySelector(".drop");

let parc;
let txtc;
let cmtr;
let ctxt;
let cps;
let cc = 0;
let rate1;
let rate2;
let rate3;
let rate4;
let rate5;
let dt;
let nota = 0;
let notact = 0;
let vds = 5;

pr1.src = "xchair.png";

e1r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
e2r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
e3r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
e4r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
e5r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";

mv.addEventListener("click", () => {
    mv.style.color = "#deff65";
    mv.style.borderColor = "#deff65";
    apr.style.color = "#ffffff";
    apr.style.borderColor = "#ffffff";
    ele.style.color = "#ffffff";
    ele.style.borderColor = "#ffffff";
    dv.style.color = "#ffffff";
    dv.style.borderColor = "#ffffff";
    nov.style.color = "#ffffff";
    nov.style.borderColor = "#ffffff";
    exc.style.display = "none";
    prim();
});

apr.addEventListener("click", () => {
    apr.style.color = "#deff65";
    apr.style.borderColor = "#deff65";
    mv.style.color = "#ffffff";
    mv.style.borderColor = "#ffffff";
    ele.style.color = "#ffffff";
    ele.style.borderColor = "#ffffff";
    dv.style.color = "#ffffff";
    dv.style.borderColor = "#ffffff";
    nov.style.color = "#ffffff";
    nov.style.borderColor = "#ffffff";
    seg();
});

ele.addEventListener("click", () => {
    ele.style.color = "#deff65";
    ele.style.borderColor = "#deff65";
    mv.style.color = "#ffffff";
    mv.style.borderColor = "#ffffff";
    apr.style.color = "#ffffff";
    apr.style.borderColor = "#ffffff";
    dv.style.color = "#ffffff";
    dv.style.borderColor = "#ffffff";
    nov.style.color = "#ffffff";
    nov.style.borderColor = "#ffffff";
    ter();
});

dv.addEventListener("click", () => {
    mv.style.color = "#ffffff";
    mv.style.borderColor = "#ffffff";
    apr.style.color = "#ffffff";
    apr.style.borderColor = "#ffffff";
    ele.style.color = "#ffffff";
    ele.style.borderColor = "#ffffff";
    dv.style.color = "#deff65";
    dv.style.borderColor = "#deff65";
    nov.style.color = "#ffffff";
    nov.style.borderColor = "#ffffff";
    qua();
});

nov.addEventListener("click", () => {
    mv.style.color = "#ffffff";
    mv.style.borderColor = "#ffffff";
    apr.style.color = "#ffffff";
    apr.style.borderColor = "#ffffff";
    ele.style.color = "#ffffff";
    ele.style.borderColor = "#ffffff";
    dv.style.color = "#ffffff";
    dv.style.borderColor = "#ffffff";
    nov.style.color = "#deff65";
    nov.style.borderColor = "#deff65";
    qui();
});

function prim() {
    moveis.style.display = "grid";
}

function seg() {
    moveis.style.display = "none";
}

function ter() {
    moveis.style.display = "none";
}

function qua() {
    moveis.style.display = "none";
}

function qui() {
    moveis.style.display = "none";
}

function amp() {
    newp.style.display = "none";
    ld.style.opacity = "0";
    prodtxt.style.display = "none";
    prod.style.width = "100vw";
    pr.style.display = "none";
    prod1.style.width = "70vw";
    prod1.style.height = "65vh";
    prodimg.style.height = "80%";
    com.style.display = "flex";
    vol.style.display = "flex";
    lg.style.left = "10vw";
    sch.value = "";
    desc.style.display = "flex";
    com.scrollTop = 0;
    setTimeout(() => {
        com.style.right = "0vw";
        vol.style.left = "0vw";
        desc.style.opacity = "1";
    }, 50);
    setTimeout(() => {
        ld.style.display = "none";
        btnspv.style.display = "flex";
    }, 300);
    prod1.style.cursor = "auto";
    txtp.textContent = prodtxt.textContent;
    prc.innerHTML = pr.innerHTML;
    txtc = pr.textContent.replaceAll(".", "");
    parc = Math.round(txtc.slice(13) * 1 / 12);
    parc = parc.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    prej.textContent = `R$${parc}`;
    prod1.removeEventListener("click", amp);
}

prod1.addEventListener("click", amp);

vol.addEventListener("click", () => {
    newp.style.display = "flex";
    ld.style.display = "block";
    prodtxt.style.display = "block";
    prod.style.width = "82vw";
    pr.style.display = "block";
    prod1.style.width = "25vw";
    prod1.style.height = "25vw";
    prodimg.style.height = "60%";
    com.style.right = "-30vw";
    vol.style.left = "-8vw";
    lg.style.left = "3vw";
    desc.style.opacity = "0";
    prod.scrollTop = 0;
    btnspv.style.display = "none";
    setTimeout(() => {
        ld.style.opacity = "1";
    }, 50)
    setTimeout(() => {
        com.style.display = "none";
        vol.style.display = "none";
        prod1.style.cursor = "pointer";
        txtp.textContent = "";
        prc.innerHTML = "";
        desc.style.display = "none";
    }, 300);
    pimg.src = "xchair.png";
    prod1.addEventListener("click", amp);
})

function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = sch;
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    ul.style.display = "flex";
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
sch.addEventListener("keyup", myFunction);

setInterval(() => {
    if(sch.value == "") {
        myUL.style.display = "none";
    }
    avv.textContent = `${cc} Avaliações`;
    prn.textContent = (notact / cc).toFixed(1);
    prn.style.textShadow = (notact / cc) >= 7? "0.3vh 0.3vh 0.3vh #126e00;" : (notact / cc) >= 4? "0.3vh 0.3vh 0.3vh #ebd534" : "0.3vh 0.3vh 0.3vh #eb3434";
}, 10)

window.addEventListener("click", () => {
    myUL.style.display = "none";
})

myLI.addEventListener("click", amp);

pimg.style.height = "60%";

function i1() {
    img1.style.backgroundColor = "#30301a75";
    img1.style.boxShadow = "0.5vh 0.5vh 1vh #000";
    img1.style.borderColor = "#fff0658e";
    img2.style.backgroundColor = "#00000065";
    img2.style.boxShadow = "0.5vh 0.5vh 0.5vh #000";
    img2.style.borderColor = "#000";
    img3.style.backgroundColor = "#00000065";
    img3.style.boxShadow = "0.5vh 0.5vh 0.5vh #000";
    img3.style.borderColor = "#000";
    pimg.src = "xchair.png";
    if(pimg.style.height != "60%") {
    pimg.style.height = "80%";
    }
}

function i2() {
    img2.style.backgroundColor = "#30301a75";
    img2.style.boxShadow = "0.5vh 0.5vh 1vh #000";
    img2.style.borderColor = "#fff0658e";
    img1.style.backgroundColor = "#00000065";
    img1.style.boxShadow = "0.5vh 0.5vh 0.5vh #000";
    img1.style.borderColor = "#000";
    img3.style.backgroundColor = "#00000065";
    img3.style.boxShadow = "0.5vh 0.5vh 0.5vh #000";
    img3.style.borderColor = "#000";
    pimg.src = "x2.png";
    pimg.style.height = "80%";
}

function i3() {
    img3.style.backgroundColor = "#30301a75";
    img3.style.boxShadow = "0.5vh 0.5vh 1vh #000";
    img3.style.borderColor = "#fff0658e";
    img2.style.backgroundColor = "#00000065";
    img2.style.boxShadow = "0.5vh 0.5vh 0.5vh #000";
    img2.style.borderColor = "#000";
    img1.style.backgroundColor = "#00000065";
    img1.style.boxShadow = "0.5vh 0.5vh 0.5vh #000";
    img1.style.borderColor = "#000";
    pimg.src = "x3.png";
    pimg.style.height = "85%";
}

i1();

img1.addEventListener("click", i1);

img2.addEventListener("click", i2);

img3.addEventListener("click", i3);

volt.addEventListener("click", () => {
    switch (true) {
        case img1.style.backgroundColor == 'rgba(48, 48, 26, 0.46)':
            i3();
        break;
        case img2.style.backgroundColor == 'rgba(48, 48, 26, 0.46)':
            i1();
        break;
        case img3.style.backgroundColor == 'rgba(48, 48, 26, 0.46)':
            i2();
        break;
    }
})

prox.addEventListener("click", () => {
    switch (true) {
        case img1.style.backgroundColor == 'rgba(48, 48, 26, 0.46)':
            i2();
        break;
        case img2.style.backgroundColor == 'rgba(48, 48, 26, 0.46)':
            i3();
        break;
        case img3.style.backgroundColor == 'rgba(48, 48, 26, 0.46)':
            i1();
        break;
    }
})

function fic() {
    cmtr = document.createElement("div");
    cmtr.innerHTML = `<h1 class="ps0"></h1><p class="ctsc0"></p><h2 class="dt0"></h2>`;
    cts.appendChild(cmtr);
    ctxt = document.querySelector(`.ctsc0`);
    cps = document.querySelector(`.ps0`);
    dt = document.querySelector(`.dt0`);
    dt.textContent = "03/10/2023";
    cps.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/8246/8246830.png" alt=""><div><div class="e1c0"></div><div class="e2c0"></div><div class="e3c0"></div><div class="e4c0"></div><div class="e5c0"></div></div>Ricardo`;
    ctxt.textContent = "Muito Bom! Vale a pena comprar!";
    rate1 = document.querySelector(`.e1c0`);
    rate2 = document.querySelector(`.e2c0`);
    rate3 = document.querySelector(`.e3c0`);
    rate4 = document.querySelector(`.e4c0`);
    rate5 = document.querySelector(`.e5c0`);
    rate1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    rate2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    rate3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    rate4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    rate5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    notact += 10;

    cmtr = document.createElement("div");
    cmtr.innerHTML = `<h1 class="ps1"></h1><p class="ctsc1"></p><h2 class="dt1"></h2>`;
    cts.appendChild(cmtr);
    ctxt = document.querySelector(`.ctsc1`);
    cps = document.querySelector(`.ps1`);
    dt = document.querySelector(`.dt1`);
    dt.textContent = "27/05/2024";
    cps.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png" alt=""><div><div class="e1c1"></div><div class="e2c1"></div><div class="e3c1"></div><div class="e4c1"></div><div class="e5c1"></div></div>Allan`;
    ctxt.textContent = "Legal! Mas não sei se vale o custo.";
    rate1 = document.querySelector(`.e1c1`);
    rate2 = document.querySelector(`.e2c1`);
    rate3 = document.querySelector(`.e3c1`);
    rate4 = document.querySelector(`.e4c1`);
    rate5 = document.querySelector(`.e5c1`);
    rate1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    rate2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    rate3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    rate4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    rate5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    notact += 8;

    cc = 2;
}

fic();

function env() {
    if(coment.value.trim() == "" || e1r.style.backgroundImage == 'url("https://cdn-icons-png.flaticon.com/512/7408/7408690.png")') {
        return;
    }
    cmtr = document.createElement("div");
    cmtr.innerHTML = `<h1 class="ps${cc}"></h1><p class="ctsc${cc}"></p><h2 class="dt${cc}"></h2>`;
    cts.appendChild(cmtr);
    ctxt = document.querySelector(`.ctsc${cc}`);
    cps = document.querySelector(`.ps${cc}`);
    dt = document.querySelector(`.dt${cc}`);
    dt.textContent = new Date().toLocaleDateString();
    cps.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/7915/7915522.png" alt=""><div><div class="e1c${cc}"></div><div class="e2c${cc}"></div><div class="e3c${cc}"></div><div class="e4c${cc}"></div><div class="e5c${cc}"></div></div>Você`;
    ctxt.textContent = coment.value;
    rate1 = document.querySelector(`.e1c${cc}`);
    rate2 = document.querySelector(`.e2c${cc}`);
    rate3 = document.querySelector(`.e3c${cc}`);
    rate4 = document.querySelector(`.e4c${cc}`);
    rate5 = document.querySelector(`.e5c${cc}`);
    re.style.bottom = "-1vh";
    setTimeout(() => {
        re.style.display = "none";
    }, 300)
    rate1.style.backgroundImage = e1r.style.backgroundImage;
    rate2.style.backgroundImage = e2r.style.backgroundImage;
    rate3.style.backgroundImage = e3r.style.backgroundImage;
    rate4.style.backgroundImage = e4r.style.backgroundImage;
    rate5.style.backgroundImage = e5r.style.backgroundImage;
    e1r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    e2r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    e3r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    e4r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    e5r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    coment.value = "";
    cts.scrollTop = cts.scrollHeight;
    notact += nota;
    cc++;
}

window.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        env();
    }
})

e1r.addEventListener("click", () => {
    e1r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e2r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    e3r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    e4r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    e5r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    nota = 2;
})

e2r.addEventListener("click", () => {
    e1r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e2r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e3r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    e4r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    e5r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    nota = 4;
})

e3r.addEventListener("click", () => {
    e1r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e2r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e3r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e4r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    e5r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    nota = 6;
})

e4r.addEventListener("click", () => {
    e1r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e2r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e3r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e4r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e5r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    nota = 8;
})

e5r.addEventListener("click", () => {
    e1r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e2r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e3r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e4r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e5r.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    nota = 10;
})

coment.addEventListener("keyup", () => {
    if(coment.value.trim() != "") {
        re.style.display = "flex";
        setTimeout(() => {
            re.style.bottom = "100%";
        }, 30)
    }
    else {
        re.style.bottom = "-1vh";
        setTimeout(() => {
            re.style.display = "none";
        }, 300)
    }
})

setInterval(() => {
    if(document.querySelector(".cts div")) {
        nd.style.display = "none";
    }
    switch (true) {
        case prn.textContent * 1 < 2:
            e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
        break;
        case prn.textContent * 1 < 4:
            e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            break;
        case prn.textContent * 1 < 6:
            e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            break;
        case prn.textContent * 1 < 8:
            e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            break;
        case prn.textContent * 1 < 10:
            e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            break;
    }
}, 10)

cpr.addEventListener("click", () => {
    if(quant.textContent > 0) {
        quant.textContent -= 1;
        vds++;
        vd.textContent = `${vds} Vendas`;
        cbtn.addEventListener("click", env);
    }
})

lin.addEventListener("click", () => {
    drop.style.display = "flex";
})

drop.addEventListener("mouseleave", () => {
    drop.style.display = "none";
})