let ppr;
const moveis = document.querySelector(".moveis");
ppr = document.createElement("div");
ppr.innerHTML = `<div class="prod1 pp">
          <div class="new"><h1>Novo</h1></div>
          <img id="pimg" src="xchair.png" alt="">
          <div class="btnspv">
              <button id="volt"><img src="https://cdn-icons-png.flaticon.com/512/8591/8591712.png" alt=""></button>
              <button id="prox"><img src="https://cdn-icons-png.flaticon.com/512/8591/8591712.png" alt=""></button>
          </div>
          <h1 class="dsh"></h1>
          <h1 class="pr"><em class="ap">A partir de</em>R$<i id="vl">250.000</i></h1>
          <div class="prodtxt">
          <h1 class="nm">Cadeira Ergonomica Ultra-tecnológica - X-Chair</h1>
      </div>`;
moveis.appendChild(ppr);

let ppra;
const aparelhos = document.querySelector(".aparelhos");
ppra = document.createElement("div");
ppra.innerHTML = `<div class="prod1a pp">
            <div class="pro"><h1>50% Off</h1></div>
            <img id="pimg" src="robo.png" alt="">
            <div class="btnspv">
                <button id="volt"><img src="https://cdn-icons-png.flaticon.com/512/8591/8591712.png" alt=""></button>
                <button id="prox"><img src="https://cdn-icons-png.flaticon.com/512/8591/8591712.png" alt=""></button>
            </div>
            <h1 class="dsh">R$<i class="ds">47.000</i></h1>
            <h1 class="pr"><em class="ap">A partir de</em>R$<i id="vl">23.500</i></h1>
            <div class="prodtxt">
            <h1 class="nm">Robô Aspirador de Pó Smart - Ultra-Clean</h1>
        </div>
        </div>`;
aparelhos.appendChild(ppra);