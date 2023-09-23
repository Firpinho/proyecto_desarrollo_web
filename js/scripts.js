const url = window.location.href;
const modal = document.getElementById("modal");
const modal_img = document.getElementById("modal-img");
const modal_close_btn = document.getElementById("close-modal");

//selectors
const selectors = {
  apartamentos_silver: document.getElementById("apartamentos-silver-img"),
  apartamentos_silver_middle: document.getElementById(
    "apartamentos-silver-middle-img"
  ),
  apartamentos_silver_last: document.getElementById("60ypico-img"),
  casas_financiadas: document.getElementById("casas-financiadas-img"),
  casas_financiadas_middle: document.getElementById(
    "casas-financiadas-middle-img"
  ),
  confort: document.getElementById("confort-img"),
  confort_middle: document.getElementById("confort-middle-img"),
  confort_last: document.getElementById("confort-last-img"),
  inversion_retiro: document.getElementById("inversion-retiro-img"),
  inversion_retiro_middle: document.getElementById(
    "inversion-retiro-middle-img"
  ),
  inversion_retiro_last: document.getElementById("inversion-retiro-last-img"),
  llave_en_mano: document.getElementById("llave-en-mano-img"),
  llave_en_mano_middle: document.getElementById("llave-en-mano-middle-img"),
  llave_en_mano_last: document.getElementById("llave-en-mano-last-img"),
  nosotros: document.getElementById("nosotros-img"),
  nosotros_middle: document.getElementById("nosotros-middle-img"),
  nosotros_last: document.getElementById("nosotros-last-img"),
  partenon: document.getElementById("partenon-img"),
  plano: document.getElementById("plano-img"),
  interior: document.getElementById("interior-img"),
  constructiva1: document.getElementById("constructiva1-img"),
  constructiva2: document.getElementById("constructiva2-img"),
  presupuestos: document.getElementById("presupuestos-img"),
  presupuestos_middle: document.getElementById("presupuestos-middle-img"),
  presupuestos_last: document.getElementById("presupuestos-last-img"),
};

//functions
function apartamentos_silver() {
  selectors.apartamentos_silver.addEventListener("click", () =>
    showModal(selectors.apartamentos_silver.src)
  );
  selectors.apartamentos_silver_middle.addEventListener("click", () =>
    showModal(selectors.apartamentos_silver_middle.src)
  );
  selectors.apartamentos_silver_last.addEventListener("click", () =>
    showModal(selectors.apartamentos_silver_last.src)
  );
}

function casas_financiadas() {
  selectors.casas_financiadas.addEventListener("click", () => showModal(selectors.casas_financiadas.src));
  selectors.casas_financiadas_middle.addEventListener("click", () => showModal(selectors.casas_financiadas_middle.src));
}

function confort() {
  selectors.confort.addEventListener("click", () => showModal(selectors.confort.src));
  selectors.confort_middle.addEventListener("click", () => showModal(selectors.confort_middle.src));
  selectors.confort_last.addEventListener("click", () => showModal(selectors.confort_last.src));
}

function inversion_retiro() {
  selectors.inversion_retiro.addEventListener("click", () => showModal(selectors.inversion_retiro.src));
  selectors.inversion_retiro_middle.addEventListener("click", () => showModal(selectors.inversion_retiro_middle.src));
  selectors.inversion_retiro_last.addEventListener("click", () => showModal(selectors.inversion_retiro_last.src));
}

function llave_en_mano() {
  selectors.llave_en_mano.addEventListener("click", () => showModal(selectors.llave_en_mano.src));
  selectors.llave_en_mano_middle.addEventListener("click", () => showModal(selectors.llave_en_mano_middle.src));
  selectors.llave_en_mano_last.addEventListener("click", () => showModal(selectors.llave_en_mano_last.src));
}

function nosotros() {
    selectors.nosotros.addEventListener("click", () => showModal(selectors.nosotros.src));
    selectors.nosotros_middle.addEventListener("click", () => showModal(selectors.nosotros_middle.src));
    selectors.nosotros_last.addEventListener("click", () => showModal(selectors.nosotros_last.src));
}

function oportunidades() {
  selectors.partenon.addEventListener("click", () => showModal(selectors.partenon.src));
  selectors.plano.addEventListener("click", () => showModal(selectors.plano.src));
  selectors.interior.addEventListener("click", () => showModal(selectors.interior.src));
  selectors.constructiva1.addEventListener("click", () => showModal(selectors.constructiva1.src));
  selectors.constructiva2.addEventListener("click", () => showModal(selectors.constructiva2.src));
}

function presupuestos() {
    selectors.presupuestos.addEventListener("click", () => showModal(selectors.presupuestos.src));
    selectors.presupuestos_middle.addEventListener("click", () => showModal(selectors.presupuestos_middle.src));
    selectors.presupuestos_last.addEventListener("click", () => showModal(selectors.presupuestos_last.src));
}

//switch
switch (url) {
  case "https://www.campizal.com/pages/nosotros.html":
    nosotros();
    break;
  case "https://www.campizal.com/pages/oportunidades.html":
    oportunidades();
    break;
  case "https://www.campizal.com/pages/llave_en_mano.html":
    llave_en_mano();
    break;
  case "https://www.campizal.com/pages/inversion_retiro.html":
    inversion_retiro();
    break;
  case "https://www.campizal.com/pages/apartamentos_silver.html":
    apartamentos_silver();
    break;
  case "https://www.campizal.com/pages/casas_financiadas.html":
    casas_financiadas();
    break;
  case "https://www.campizal.com/pages/presupuestos.html":
    presupuestos();
    break;
  case "https://www.campizal.com/pages/confort.html":
    confort();
    break;
  default:

    break;
}

//modal show/hide
modal_close_btn.onclick = function () {
  modal_img.src = "";
  modal.style.display = "none";
};

function showModal(url) {
  modal_img.src = url;
  modal.style.display = "flex";
}

function print() {
  window.open(
    'https://www.campizal.com/promo_financiacion.pdf',
    '_blank'
  );
}