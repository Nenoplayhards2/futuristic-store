const btn1 = document.querySelector(".btn_login");

const inn = document.querySelector("#inn");
const ins = document.querySelector("#ins");

btn1.addEventListener("click", () => {
    localStorage.nome = inn.value;
    localStorage.senha = ins.value;
    localStorage.logado = true;
    window.location.href = "index.html";
})