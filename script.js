btnplus = Array.from(document.getElementsByClassName("fa-plus-circle"));
btnminus = Array.from(document.getElementsByClassName("fa-minus-circle"));
btntrash = Array.from(document.getElementsByClassName("fa-trash-alt"));
btnheart = Array.from(document.getElementsByClassName("fa-heart"));

quantitéE = Array.from(document.getElementsByClassName("quantity"));
prixE = Array.from(document.getElementsByClassName("unit-price"));

quantité = quantitéE.map(el => parseInt(el.textContent));;
prixunit = prixE.map(el => parseInt(el.textContent));

function total() {
    let total = 0;
    for (let i = 0; i < quantité.length; i++) {
        total += quantité[i] * prixunit[i];
    }
    document.querySelector(".total").textContent = total + " $";
}

function ajouter(i){
    quantité[i]++;
    quantitéE[i].textContent = quantité[i]; 
    let Nprix = quantité[i] * prixunit[i];
    prixE[i].textContent = Nprix + " $"; 
}

function retirer(i){
    if (quantité[i] > 0) {
        quantité[i]--;
        quantitéE[i].textContent = quantité[i];

        let Nprix = quantité[i] * prixunit[i];
        prixE[i].textContent = Nprix + " $";
    }
}

function heart(i){
    if (btnheart[i].classList.contains("red")) {
        btnheart[i].classList.remove("red");
    } else {
        btnheart[i].classList.add("red");
    }

}



for ( let  i = 0; i < btnplus.length; i++) {
    btnplus[i].addEventListener("click", function () {
        ajouter(i);
        total();

    });

    btnminus[i].addEventListener("click", function () {
        retirer(i);
        total();
    });

    btnheart[i].addEventListener("click", function () {
        heart(i);
    });

    btntrash[i].addEventListener("click", function () {
        btntrash[i].parentElement.parentElement.parentElement.remove();
        
        quantité[i] = 0;
        quantitéE[i].textContent = quantité[i];
        let Nprix = quantité[i] * prixunit[i];
        prixE[i].textContent = Nprix + " $";

        total();
    });


}





