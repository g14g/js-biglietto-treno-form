// ██████████ ESERCIZIO BIGLIETTO TRENO


// █████ INPUT
const inputKm = document.querySelector("#inputKm");
const inputFasciaEta = document.querySelector("#inputFasciaEta");
const inputNome = document.querySelector("#inputNome");
const inputCognome = document.querySelector("#inputCognome");
// const btnCalcola = document.querySelector("#btnCalcola");
const form = document.querySelector("form");

// █████ OUTPUT
const outputNome = document.querySelector("#outputNome");
const outputNomeViaggiatore = document.querySelector(".output.nome-viaggiatore");
const outputPrezzoIntero = document.querySelector(".output.prezzo-intero");
const outputScontoFasciaEta = document.querySelector(".output.sconto-fascia-eta");
const outputPrezzoFinale = document.querySelector(".output.prezzo-finale");

const prezzoKm = 0.21;

const calcolaSconto = (fascia) => {
    if (fascia == "Minorenni") {
        return 20; // * 0.8 (1 - 20/100)
    } else if (fascia == "Over 65") {
        return 40; // * 0.6 (1 - 40/100)
    } else {
        return 0; // * 1 (1 - 0/100)
    }
};

const stampaBiglietto = (nomeViaggiatore, prezzoIntero, sconto, fascia, prezzoFinale) => {
    console.log("Stampo Biglietto...");
    outputNomeViaggiatore.innerHTML = `${nomeViaggiatore}`;
    outputPrezzoIntero.innerHTML = `${prezzoIntero.toFixed(2)}€`;
    outputScontoFasciaEta.innerHTML = ` ${fascia} <span class="fg-3">-</span> ${sconto}%`;
    outputPrezzoFinale.innerHTML = `${prezzoFinale.toFixed(2)}€`;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const kmValue = Number(inputKm.value);
    const fasciaEtaValue = inputFasciaEta.value;
    const sconto = calcolaSconto(fasciaEtaValue);
    const nome = inputNome.value;
    const cognome = inputCognome.value;
    const nomeViaggiatore = `${nome} ${cognome}`;
    console.log(`Kilometri da percorrere: ${kmValue}`);
    console.log(`Fascia d'età selezionata: ${fasciaEtaValue}`);
    console.log(`Sconto per la fascia di età "${fasciaEtaValue}": ${sconto}%`);
    const prezzoBigliettoIntero = prezzoKm * kmValue;
    const prezzoBigliettoFinale = prezzoBigliettoIntero - (prezzoBigliettoIntero * sconto / 100);
    console.log(`Prezzo biglietto intero: ${prezzoBigliettoIntero}€`);
    console.log(`Prezzo biglietto scontato (${sconto}%): ${prezzoBigliettoFinale}€`);
    stampaBiglietto(nomeViaggiatore, prezzoBigliettoIntero, sconto, fasciaEtaValue, prezzoBigliettoFinale);
});