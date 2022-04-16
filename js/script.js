const lnkDetailStartUp = document.getElementById('lnkDetailStartUp');
const lnkDetailGrowBig = document.getElementById('lnkDetailGrowBig');
const lnkDetailGoGeek = document.getElementById('lnkDetailGoGeek');

lnkDetailStartUp.onclick = function(){
    if (lnkDetailStartUp.getAttribute('aria-expanded')==='false'){
        lnkDetailStartUp.textContent="Mostrar Detalles";
    }
    if (lnkDetailStartUp.getAttribute('aria-expanded')==='true'){
        lnkDetailStartUp.textContent="Ocultar Detalles";
    }
}

lnkDetailGrowBig.onclick = function(){
    if (lnkDetailGrowBig.getAttribute('aria-expanded')==='false'){
        lnkDetailGrowBig.textContent="Mostrar Detalles";
    }
    if (lnkDetailGrowBig.getAttribute('aria-expanded')==='true'){
        lnkDetailGrowBig.textContent="Ocultar Detalles";
    }
}

lnkDetailGoGeek.onclick = function(){
    if (lnkDetailGoGeek.getAttribute('aria-expanded')==='false'){
        lnkDetailGoGeek.textContent="Mostrar Detalles";
    }
    if (lnkDetailGoGeek.getAttribute('aria-expanded')==='true'){
        lnkDetailGoGeek.textContent="Ocultar Detalles";
    }
}