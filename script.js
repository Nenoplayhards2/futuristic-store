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
    exc2.style.display = "none";
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
    aparelhos.style.display = "none";
    id = 0;
    converter();
}

function seg() {
    moveis.style.display = "none";
    aparelhos.style.display = "grid";
    id = 1;
    converter();
}

function ter() {
    moveis.style.display = "none";
    aparelhos.style.display = "none";
}

function qua() {
    moveis.style.display = "none";
    aparelhos.style.display = "none";
}

function qui() {
    moveis.style.display = "none";
    aparelhos.style.display = "none";
}

function amp() {
    switch (true) {
        case mv.style.color == "rgb(222, 255, 101)":
            id = selm;
        break;
        case apr.style.color == "rgb(222, 255, 101)":
            id = sela;
        break;
        case ele.style.color == "rgb(222, 255, 101)":
            id = sele;
        break;
        case dv.style.color == "rgb(222, 255, 101)":
            id = seld;
        break;
        case nov.style.color == "rgb(222, 255, 101)":
            id = seln;
        break;
    }
    dc();
    switch (id) {
        case 0:
            img1i.src = "xchair.png";
            img2i.src = "x2.png";
            img3i.src = "x3.png";
        break;
        case 1:
            img1i.src = "robo.png";
            img2i.src = "robo2.png";
            img3i.src = "robo3.png";
        break;
    }
    quant.textContent = esto - vds;
    off.style.display = "none";
    newp.style.display = "none";
    pro.style.display = "none";
    dsh[id].style.display = "none";
    ld.style.opacity = "0";
    prodtxt[id].style.display = "none";
    prod.style.width = "100vw";
    pr[id].style.display = "none";
    prod.style.top = "13vh";
    descdsh.textContent = dsh[id].textContent;
    for (let i = 0; i < prods.length; i++) {
        prods[i].style.width = "70vw";
        prods[i].style.height = "65vh";
    }
    pimg[id].style.height = "80%";
    com.style.display = "flex";
    vol.style.display = "flex";
    lg.style.left = "10vw";
    sch.value = "";
    desc.style.display = "flex";
    if(com.style.right != "0vw") {
        com.scrollTop = 0;
    }
    setTimeout(() => {
        com.style.right = "0vw";
        vol.style.left = "0vw";
        desc.style.opacity = "1";
        prc.innerHTML = pr[id].innerHTML;
        txtc = vl[id].textContent.replaceAll(".", "");
        parc = Math.round(val.toString().replaceAll(".", "") * 1 / 12);
        parc = parc.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    }, 50);
    setTimeout(() => {
        ld.style.display = "none";
        btnspv[id].style.display = "flex";
    }, 300);
    prods[id].style.cursor = "auto";
    txtp.textContent = prodtxt[id].textContent;
    clearInterval(txi);
}

prod1.addEventListener("click", () => {
    selm = 0;
    amp();
});
prod1a.addEventListener("click", () => {
    sela = btnspv.length - 1;
    amp();
});

vol.addEventListener("click", () => {
    newp.style.display = "flex";
    pro.style.display = "flex";
    dsh[id].style.display = "block";
    ld.style.display = "block";
    prodtxt[id].style.display = "block";
    prod.style.width = "82vw";
    prod.style.top = "15vh";
    pr[id].style.display = "block";
    for (let i = 0; i < prods.length; i++) {
        prods[i].style.width = "25vw";
        prods[i].style.height = "25vw";
    }
    pimg[id].style.height = "60%";
    com.style.right = "-30vw";
    vol.style.left = "-8vw";
    lg.style.left = "3vw";
    desc.style.opacity = "0";
    prod.scrollTop = 0;
    btnspv[id].style.display = "none";
    setTimeout(() => {
        ld.style.opacity = "1";
    }, 50)
    setTimeout(() => {
        com.style.display = "none";
        vol.style.display = "none";
        prods[id].style.cursor = "pointer";
        txtp.textContent = "";
        prc.innerHTML = "";
        desc.style.display = "none";
        notact = 0;
        off.style.display = "flex";
        id = 0;
        sela = 0;
        seld = 0;
        sele = 0;
        seln = 0;
        selm = 0;
    }, 300);
    i1();
    txi = setInterval(txt, 15000);
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
    if(sela == 1) {
        newd.style.background = "linear-gradient(48deg, rgba(214,200,69,1) 0%, rgba(197,215,16,0.8911939775910365) 50%, rgba(255,246,46,0.7959558823529411) 100%)";
        newdes.textContent = "50% Off";
    }
    else {
        newd.style.background = "linear-gradient(48deg, rgba(255,66,66,1) 0%, rgba(180,25,25,1) 50%, rgba(96,0,0,1) 100%)";
        switch (document.documentElement.lang) {
            case "en":
                newdes.textContent = "New";
            break;
            case "es":
                newdes.textContent = "Nuevo";
            break;
            case "pt":
                newdes.textContent = "Novo";
            break;
            case "fr":
                newdes.textContent = "Nouveau";
            break;
            case "ru":
                newdes.textContent = "Новый";
            break;
        }
    }
    if(sch.value.trim() == "") {
        myUL.style.display = "none";
    }
    if(notact != 0) {
        prn.textContent = (notact / cc).toFixed(1);
        prn.style.textShadow = (notact / cc) >= 7? "0.3vh 0.3vh 0.3vh #126e00" : (notact / cc) >= 4? "0.3vh 0.3vh 0.3vh #ebd534" : "0.3vh 0.3vh 0.3vh #eb3434";
    }
    else {
        prn.textContent = "0.0";
        prn.style.textShadow = "0.3vh 0.3vh 0.3vh #eb3434";
    }
    switch (document.documentElement.lang) {
        case "en":
            flag.src = "https://cdn-icons-png.flaticon.com/512/330/330425.png";
        break;
        case "es":
            flag.src = "https://cdn-icons-png.flaticon.com/512/330/330557.png";
        break;
        case "pt":
            flag.src = "https://cdn-icons-png.flaticon.com/512/630/630591.png";
        break;
        case "fr":
            flag.src = "https://cdn-icons-png.flaticon.com/512/321/321230.png";
        break;
        case "ru":
            flag.src = "https://cdn-icons-png.flaticon.com/512/330/330437.png";
        break;
    }
    if(localStorage.logado == 'true') {
        ct.style.display = "none";
        lgi.style.display = "none";
        cad.style.justifyContent = "right";
        lin.style.marginRight = "5vh";
        nmu.style.display = "flex";
        usu.textContent = localStorage.nome;
    }
    else {
        ct.style.display = "block";
        lgi.style.display = "block";
        nmu.style.display = "none";
    }
}, 0)

desl.addEventListener("click", () => {
    localStorage.logado = 'false';
    localStorage.email = '';
    localStorage.senha = '';
    window.location.reload();
})

window.addEventListener("click", () => {
    myUL.style.display = "none";
})

myLI[0].addEventListener("click", () => {
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
    i1();
    setTimeout(() => {
    amp();
    }, 100)
});
myLI[1].addEventListener("click", () => {
    sela = btnspv.length - 1;
    mv.style.color = "#ffffff";
    mv.style.borderColor = "#ffffff";
    apr.style.color = "#deff65";
    apr.style.borderColor = "#deff65";
    ele.style.color = "#ffffff";
    ele.style.borderColor = "#ffffff";
    dv.style.color = "#ffffff";
    dv.style.borderColor = "#ffffff";
    nov.style.color = "#ffffff";
    nov.style.borderColor = "#ffffff";
    exc.style.display = "none";
    seg();
    i1();
    setTimeout(() => {
    amp();
    }, 100)
});


for (let i = 0; i < 2; i++) {
    pimg[i].style.height = "60%";
}

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
    switch (id) {
        case 0:
            pimg[id].src = "xchair.png";
        break;
        case 1:
            pimg[id].src = "robo.png";
        break;
    }
    if(pimg[id].style.height != "60%") {
    pimg[id].style.height = "80%";
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
    switch (id) {
        case 0:
            pimg[id].src = "x2.png";
        break;
        case 1:
            pimg[id].src = "robo2.png";
        break;
    }
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
    switch (id) {
        case 0:
            pimg[id].src = "x3.png";
        break;
        case 1:
            pimg[id].src = "robo3.png";
        break;
    }
}

i1();

img1.addEventListener("click", i1);

img2.addEventListener("click", i2);

img3.addEventListener("click", i3);

for (let i = 0; i < 2; i++) {
volt[i].addEventListener("click", () => {
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

prox[i].addEventListener("click", () => {
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
}

function fic() {
    if(document.querySelector(".cts div")) {
        cts.innerHTML = `<em id="nd">Não há comentários sobre esse produto</em>`;
        cc = 0;
        }
    cmtr = document.createElement("div");
    cmtr.innerHTML = `<h1 class="ps0"></h1><p class="ctsc0"></p><h2 class="dt0"></h2>`;
    cts.appendChild(cmtr);
    ctxt = document.querySelector(`.ctsc0`);
    cps = document.querySelector(`.ps0`);
    dt = document.querySelector(`.dt0`);
    dt.textContent = new Date("2023/10/03").toLocaleDateString();
    cps.innerHTML = `<img style="border-radius: 3vh;" src="https://lh3.googleusercontent.com/a-/ALV-UjUTP2K0dA_yyAmuTd5yZskNzw4-ArNL_OcQg2OLPJgwnxU05GRs=s32-c" alt=""><div><div class="e1c0"></div><div class="e2c0"></div><div class="e3c0"></div><div class="e4c0"></div><div class="e5c0"></div></div>Ricardo`;
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
    dt.textContent = new Date("2024/05/27").toLocaleDateString();
    cps.innerHTML = `<img style="border-radius: 3vh;" src="https://lh3.googleusercontent.com/a-/ALV-UjUSuKHiDjjE1e7CWJmTMDrjOg_Ssrb_lHOw40_f4i9JLUliJjE=s32-c" alt=""><div><div class="e1c1"></div><div class="e2c1"></div><div class="e3c1"></div><div class="e4c1"></div><div class="e5c1"></div></div>Allan`;
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

function env() {
    if(coment.value.trim() == "") {
        alert("Comentário não pode ser vazio!");
        return;
    }
    if (e1r.style.backgroundImage == 'url("https://cdn-icons-png.flaticon.com/512/7408/7408690.png")') {
        alert("Você precisa avaliar o produto!");
        return;
    }
    cmtr = document.createElement("div");
    cmtr.innerHTML = `<h1 class="ps${cc}"></h1><p class="ctsc${cc}"></p><h2 class="dt${cc}"></h2>`;
    cts.appendChild(cmtr);
    ctxt = document.querySelector(`.ctsc${cc}`);
    cps = document.querySelector(`.ps${cc}`);
    dt = document.querySelector(`.dt${cc}`);
    dt.textContent = new Date().toLocaleDateString();
    cps.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/7915/7915522.png" alt=""><div><div class="e1c${cc}"></div><div class="e2c${cc}"></div><div class="e3c${cc}"></div><div class="e4c${cc}"></div><div class="e5c${cc}"></div></div>${localStorage.nome}`;
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
    const nd = document.querySelector("#nd");
    if(document.querySelector(".cts div")) {
        nd.style.display = "none";
    }
    else {
        nd.style.display = "block";
    }
    switch (true) {
        case prn.textContent * 1 <= 1:
            e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
        break;
        case prn.textContent * 1 <= 2:
            e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
        break;
        case prn.textContent * 1 <= 3:
            e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e2.style.backgroundImage = "url(meio.png)";
            e3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
        break;
        case prn.textContent * 1 <= 4:
            e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            break;
        case prn.textContent * 1 <= 5:
            e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e3.style.backgroundImage = "url(meio.png)";
            e4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            break;
        case prn.textContent * 1 <= 6:
            e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            e5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            break;
        case prn.textContent * 1 <= 7:
            e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e4.style.backgroundImage = "url(meio.png)";
            e5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            break;
        case prn.textContent * 1 <= 8:
            e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
            break;
        case prn.textContent * 1 <= 9:
            e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e5.style.backgroundImage = "url(meio.png)";
            break;
        default:
        case prn.textContent * 1 <= 10:
            e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            e5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
            break;
    }
}, 10)

cpr.addEventListener("click", () => {
    if(localStorage.logado == 'false') {
        alert("Você precisa estar logado para comprar!");
        return;
    }
    else if(quant.textContent > 0) {
        quant.textContent -= 1;
        switch (id) {
            case 0:
                vendm++;
                vds = vendm;
            break;
            case 1:
                venda++;
                vds = venda;
            break;
        }
        cbtn.addEventListener("click", env);
    }
})

lin.addEventListener("click", () => {
    drop.style.display = "flex";
})

drop.addEventListener("mouseleave", () => {
    drop.style.display = "none";
})

droplg.style.display = "none";

nmu.addEventListener("click", () => {
    if(droplg.style.display == "none") {
    droplg.style.display = "flex";
    setTimeout(() => {
        droplg.style.right = "0";
    }, 10)
}
    else {
        droplg.style.right = "-100%";
        setTimeout(() => {
            droplg.style.display = "none";
        }, 300)
    }
})

window.onclick = function(event) {
    if (!event.target.matches('.nmu') && droplg.style.right == "0px") {
        droplg.style.right = "-100%";
        setTimeout(() => {
            droplg.style.display = "none";
        }, 300)
    }
  }
  
function fic2() {
    if(document.querySelector(".cts div")) {
    cts.innerHTML = `<em id="nd">Não há comentários sobre esse produto</em>`;
    cc = 0;
    }
    cmtr = document.createElement("div");
    cmtr.innerHTML = `<h1 class="ps0"></h1><p class="ctsc0"></p><h2 class="dt0"></h2>`;
    cts.appendChild(cmtr);
    ctxt = document.querySelector(`.ctsc0`);
    cps = document.querySelector(`.ps0`);
    dt = document.querySelector(`.dt0`);
    dt.textContent = new Date("2024/9/06").toLocaleDateString();
    cps.innerHTML = `<img style="border-radius: 3vh;" src="https://lh3.googleusercontent.com/a-/ALV-UjUA-o80SVbS1QjQcsphSQL_H7GlisSD4pF5FXU4B2VWwvYRhWPp=s32-c" alt=""><div><div class="e1c0"></div><div class="e2c0"></div><div class="e3c0"></div><div class="e4c0"></div><div class="e5c0"></div></div>Weslei`;
    ctxt.textContent = "Perca de tempo e dinheiro!";
    rate1 = document.querySelector(`.e1c0`);
    rate2 = document.querySelector(`.e2c0`);
    rate3 = document.querySelector(`.e3c0`);
    rate4 = document.querySelector(`.e4c0`);
    rate5 = document.querySelector(`.e5c0`);
    rate1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    rate2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    rate3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    rate4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    rate5.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408690.png)";
    notact += 2;
    cc = 1;
}
dc();
function dc() {
    switch (id) {
        case 0:
            switch (document.documentElement.lang) {
                case "en":
                    p1.textContent = "X-Chair is a very comfortable chair, similar to a car seat, but with wheels to move it back and forth, and it can be repositioned up and down, has buttons to increase and decrease the intensity of the vibration, contains an analog stick for the chair to move and two cup holders.";
                    p2.textContent = "Materials and technologies: Plastic, Battery, AI, Sensors, Leather, Wool, Iron, Rubber, Copper Wire, Speaker and Hydraulics.";
                    p3.textContent = "AI has sensors to help the person avoid crashing at a maximum speed of 5 km/h.";
                    p4.textContent = "You can activate and deactivate the vibration, position the chair the way the user wants and it has arrows to rotate it.";
                break;
                case "es":
                    p1.textContent = "X-Chair es una silla muy cómoda, similar a un asiento de coche, pero tiene ruedas para ir y venir, además puede reposicionarse hacia arriba y hacia abajo, Con botones para aumentar y disminuir la intensidad de la vibración, que contiene la palanca analógica para mover la silla y dos portavasos.";
                    p2.textContent = "Materiales y tecnologías: Plástico, Batería, IA, Sensores, Cuero, Lana, Hierro, Caucho, Cable de cobre, Altavoz e hidráulica.";
                    p3.textContent = "La IA tiene sensores para ayudar a las personas a evitar colisiones a una velocidad máxima de 5 km/h.";
                    p4.textContent = "Puedes activar y desactivar la vibración, posicionar la silla como quieras y hay flechas para girarla.";
                break;
                case "pt":
                    p1.textContent = "X-Chair é uma cadeira muito confortável, parecida com uma cadeira de carro, mas que tem rodinhas para ir e voltar, além de que ela pode se reposicionar para cima e para baixo, possuindo os botoẽs para aumentar e diminuir a intensidade da vibração, contendo o analógico para a cadeira se mexer e dois porta copos.";
                    p2.textContent = "Materiais e tecnologias: 	Plástico, Bateria, IA, Sensores, Couro, Lã, Ferro, Borracha, Fio de Cobre, Caixinha de som e hidráulica.";
                    p3.textContent = "IA tem sensores para auxiliar a pessoa a não bater com velocidade máxima de 5 km/h.";
                    p4.textContent = "Pode-se ativar e desativar a vibração, posicionar a cadeira do jeito que o usuário quiser e tem setinhas para rotacioná-la.";
                break;
                case "fr":
                    p1.textContent = "X-Chair est une chaise très confortable, semblable à un siège d'auto, mais il a des roues pour aller et venir, en plus il peut se repositionner de haut en bas, avec boutons pour augmenter et diminuer l'intensité des vibrations, contenant l'analogue pour déplacer la chaise et deux porte-gobelets.";
                    p2.textContent = "Matériaux et technologies : plastique, batterie, IA, capteurs, cuir, laine, fer, caoutchouc, fil de cuivre, haut-parleur et hydraulique.";
                    p3.textContent = "L'IA dispose de capteurs pour aider les gens à éviter de s'écraser à une vitesse maximale de 5 km/h.";
                    p4.textContent = "Vous pouvez activer et désactiver la vibration, positionner le fauteuil comme vous le souhaitez et il y a des flèches pour le faire pivoter.";
                break;
                case "ru":
                    p1.textContent = "В комплект входит аналог подвижного кресла и два подстаканника.";
                    p2.textContent = "Материалы и технологии: пластик, аккумулятор, искусственный интеллект, датчики, кожа, шерсть, железо, резина, медная проволока, динамик и гидравлика.";
                    p3.textContent = "У ИИ есть датчики, которые помогают людям избежать столкновений на максимальной скорости 5 км/ч.";
                    p4.textContent = "Вы можете активировать и деактивировать вибрацию, расположить кресло так, как хотите, и есть стрелки для его вращения.";
                break;
            }
            esto = 14;
            vds = vendm;
            if(notact == 0) {
            fic();
            }
        break;
        case 1:
            switch (document.documentElement.lang) {
                case "en":
                    p1.textContent = "Ultra-Clean has come up with another incredible innovation for the world of cleaning by creating the Smart Robot Vacuum Cleaner, a cutting-edge technology device that will leave your home as clean as it should be.";
                    p2.textContent = "Contains an AI to assist with cleaning.";
                    p3.textContent = "The battery lasts an average of 12 hours.";
                    p4.textContent = "The robot has high-quality armor to resist damage.";
                break;
                case "es":
                    p1.textContent = "Ultra-Clean llegó con otra increíble innovación para el mundo de la limpieza, creando el Robot Aspirador Inteligente, un dispositivo con tecnología de punta que dejará tu hogar tan limpio como debe estar.";
                    p2.textContent = "Contiene una IA para ayudar con la limpieza.";
                    p3.textContent = "La batería dura una media de 12 horas.";
                    p4.textContent = "El robot tiene una armadura de alta calidad para resistir daños.";
                break;
                case "pt":
                    p1.textContent = "Ultra-Clean veio com mais uma incrível inovação para o mundo da limpeza criando o Robô Aspirador de Pó Smart, um aparelho com tecnologia de ponta que deixará a sua casa limpa como deveria ser.";
                    p2.textContent = "Contém uma IA para auxiliar na limpeza.";
                    p3.textContent = "A bateria dura em média 12 horas.";
                    p4.textContent = "O robô possui uma blindagem de alta qualidade para resistir a danos.";
                break;
                case "fr":
                    p1.textContent = "Ultra-Clean est venu avec une autre innovation incroyable pour le monde du nettoyage, créant le Smart Robot Vacuum Cleaner, un appareil doté d'une technologie de pointe qui laissera votre maison aussi propre qu'elle devrait l'être.";
                    p2.textContent = "Contient une IA pour aider au nettoyage.";
                    p3.textContent = "La batterie dure en moyenne 12 heures.";
                    p4.textContent = "Le robot dispose d'une armure de haute qualité pour résister aux dommages.";
                break;
                case "ru":
                    p1.textContent = "Компания Ultra-Clean представила еще одну невероятную инновацию в мире уборки, создав робот-пылесос Smart Robot, устройство с передовыми технологиями, которое сделает ваш дом настолько чистым, насколько он должен быть.";
                    p2.textContent = "Содержит ИИ для помощи в уборке.";
                    p3.textContent = "Батареи хватает в среднем на 12 часов.";
                    p4.textContent = "Робот имеет качественную броню, устойчивую к повреждениям.";
                break;
            }
            esto = 29;
            vds = venda;
            if(notact == 0) {
            fic2();
            }
        break;
    }
}