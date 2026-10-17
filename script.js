// ██████████ ESERCIZIO BIGLIETTO TRENO


const inputKm = document.querySelector("#kmInput");
const btnCalcola = document.querySelector("#btnCalcola");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const kmValue = Number(inputKm.value);
    console.log(`Kilometri da percorrere: ${kmValue}`);
})