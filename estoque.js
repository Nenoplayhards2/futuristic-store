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

let parc;
let txtc;

pr1.src = "xchair.png";

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
    e1.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e2.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e3.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    e4.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/7408/7408613.png)";
    com.scrollTop = 0;
    setTimeout(() => {
        com.style.right = "0vw";
        vol.style.left = "0vw";
        desc.style.opacity = "1";
    }, 50);
    setTimeout(() => {
        ld.style.display = "none";
    }, 300);
    prod1.style.cursor = "auto";
    txtp.textContent = prodtxt.textContent;
    prc.innerHTML = pr.innerHTML;
    txtc = pr.textContent.replace(".", "");
    parc = Math.round(txtc.slice(13) * 1 / 12);
    parc = parc.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    prej.textContent = `R$${parc}`;
}

prod1.addEventListener("click", () => {
    amp();
})

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
}, 10)

window.addEventListener("click", () => {
    myUL.style.display = "none";
})

myLI.addEventListener("click", amp);

img1.addEventListener("click", () => {
    img1.style.backgroundColor = "#30301a75";
    img1.style.boxShadow = "0.5vh 0.5vh 1vh #000";
    img1.style.borderColor = "#fff0658e";
    img2.style.backgroundColor = "#00000065";
    img2.style.boxShadow = "0.5vh 0.5vh 0.5vh #000";
    img2.style.borderColor = "#000";
    img3.style.backgroundColor = "#00000065";
    img3.style.boxShadow = "0.5vh 0.5vh 0.5vh #000";
    img3.style.borderColor = "#000";
})
img2.addEventListener("click", () => {
    img2.style.backgroundColor = "#30301a75";
    img2.style.boxShadow = "0.5vh 0.5vh 1vh #000";
    img2.style.borderColor = "#fff0658e";
    img1.style.backgroundColor = "#00000065";
    img1.style.boxShadow = "0.5vh 0.5vh 0.5vh #000";
    img1.style.borderColor = "#000";
    img3.style.backgroundColor = "#00000065";
    img3.style.boxShadow = "0.5vh 0.5vh 0.5vh #000";
    img3.style.borderColor = "#000";
})
img3.addEventListener("click", () => {
    img3.style.backgroundColor = "#30301a75";
    img3.style.boxShadow = "0.5vh 0.5vh 1vh #000";
    img3.style.borderColor = "#fff0658e";
    img2.style.backgroundColor = "#00000065";
    img2.style.boxShadow = "0.5vh 0.5vh 0.5vh #000";
    img2.style.borderColor = "#000";
    img1.style.backgroundColor = "#00000065";
    img1.style.boxShadow = "0.5vh 0.5vh 0.5vh #000";
    img1.style.borderColor = "#000";
})