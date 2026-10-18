// ██████████ ESERCIZIO BIGLIETTO TRENO


// █████ INPUT
const inputKm = document.querySelector("#inputKm");
const inputFasciaEta = document.querySelector("#inputFasciaEta");
const inputNome = document.querySelector("#inputNome");
const inputCognome = document.querySelector("#inputCognome");
// const btnCalcola = document.querySelector("#btnCalcola");
const form = document.querySelector("form");

// █████ OUTPUT
const outputErrore = document.querySelector(".errore");
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

const stampaBiglietto = (nome, prezzointero, sconto, fascia, prezzofinale) => {
    console.log("Stampa Biglietto...");
    outputNomeViaggiatore.innerHTML = `${nome}`;
    outputPrezzoIntero.innerHTML = `${prezzointero}€`;
    outputScontoFasciaEta.innerHTML = `${fascia} <span class="fg-3">-</span> ${sconto}%`;
    outputPrezzoFinale.innerHTML = `${prezzofinale}€`;
}

const svuotaStampaBiglietto = (nome, prezzointero, sconto, fascia, prezzofinale) => {
    console.log("Svuota Stampa Biglietto...");
    outputNomeViaggiatore.innerHTML = `${nome}`;
    outputPrezzoIntero.innerHTML = `${prezzointero}`;
    outputScontoFasciaEta.innerHTML = `-`;
    outputPrezzoFinale.innerHTML = `${prezzofinale}`;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    svuotaStampaBiglietto("-", "-", "-", "-", "-"); // Svuota Stampa Biglietto...
    const kmValue = Number(inputKm.value);
    if (kmValue === 0) {
        console.log("Errore! Non puoi fare un biglietto per 0 kilometri!");
        outputErrore.innerHTML = `<span class="fg-warning">Errore!</span> Non puoi fare un biglietto per 0 kilometri!`;
        return;
    } else {
        outputErrore.innerHTML = "";
    }
    const fasciaEtaValue = inputFasciaEta.value;
    const sconto = calcolaSconto(fasciaEtaValue);
    const nome = inputNome.value;
    const cognome = inputCognome.value;
    const nomeViaggiatore = `${nome} ${cognome}`;
    console.log(`Kilometri da percorrere: ${kmValue}`);
    console.log(`Fascia d'età selezionata: ${fasciaEtaValue}`);
    console.log(`Sconto per la fascia di età "${fasciaEtaValue}": ${sconto}%`);
    const prezzoBigliettoIntero = Number(prezzoKm * kmValue).toFixed(2);
    const prezzoBigliettoFinale = Number(prezzoBigliettoIntero - (prezzoBigliettoIntero * sconto / 100)).toFixed(2);
    console.log(`Prezzo biglietto intero: ${prezzoBigliettoIntero}€`);
    console.log(`Prezzo biglietto scontato (${sconto}%): ${prezzoBigliettoFinale}€`);
    stampaBiglietto(nomeViaggiatore, prezzoBigliettoIntero, sconto, fasciaEtaValue, prezzoBigliettoFinale);
});

form.addEventListener("reset", (e) => {
    svuotaStampaBiglietto("-", "-", "-", "-", "-"); // Svuota Stampa Biglietto...
});