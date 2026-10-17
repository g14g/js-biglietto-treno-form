// ██████████ ESERCIZIO BIGLIETTO TRENO


// █████ INPUT
const inputKm = document.querySelector("#inputKm");
const inputFasciaEta = document.querySelector("#inputFasciaEta");
const inputNome = document.querySelector("#inputNome");
// const btnCalcola = document.querySelector("#btnCalcola");
const form = document.querySelector("form");

// █████ OUTPUT
const outputNome = document.querySelector("#outputNome");
const outputScontoFasciaEta = document.querySelector("#outputScontoFasciaEta");
const outputPrezzoIntero = document.querySelector("#outputPrezzoIntero");
const outputPrezzoFinale = document.querySelector(".output-prezzo.prezzo-finale");

const prezzoKm = 0.21;

const calcolaSconto = (fascia) => {
    if (fascia == "minorenni") {
        return 20; // * 0.8 (1 - 20/100)
    } else if (fascia == "over65") {
        return 40; // * 0.6 (1 - 40/100)
    } else {
        return 0; // * 1 (1 - 0/100)
    }
};

const stampaBiglietto = (nomeViaggiatore, prezzoIntero, sconto, prezzoFinale) => {
    // console.log("Stampo Biglietto...");
    return outputPrezzoFinale.innerHTML = `<span>${prezzoFinale}</span>€`;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const kmValue = Number(inputKm.value);
    const fasciaEtaValue = inputFasciaEta.value;
    const sconto = calcolaSconto(fascia = fasciaEtaValue);
    // const nomeViaggiatore = inputNome.value;
    const nomeViaggiatore = "";
    console.log(`Kilometri da percorrere: ${kmValue}`);
    console.log(`Fascia d'età selezionata: ${fasciaEtaValue}`);
    console.log(`Sconto per la fascia di età "${fasciaEtaValue}": ${sconto}%`);
    const prezzoBigliettoIntero = prezzoKm * kmValue;
    const prezzoBigliettoFinale = prezzoBigliettoIntero - (prezzoBigliettoIntero * sconto / 100);
    console.log(`Prezzo biglietto intero: ${prezzoBigliettoIntero}€`);
    console.log(`Prezzo biglietto scontato (${sconto}%): ${prezzoBigliettoFinale}€`);
    stampaBiglietto(nomeViaggiatore, prezzoBigliettoIntero, sconto, prezzoBigliettoFinale);
});