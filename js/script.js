/* Ciao ragazze e ciao ragazzi!
Esercizio di oggi: :orologio1: Boom Countdown :collisione:
nome repo: js-simon
Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la fine di quest'anno!
Che scadra' quindi a capodanno!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi? */



const countdownElement = document.getElementById('countdown');



const capodanno = new Date(new Date().getFullYear() + 1, 0, 1);



const intervallo = setInterval(function () {

    const adesso = new Date().getTime();
    const differenza = capodanno - adesso;

    const giorni = Math.floor(differenza / (1000 * 60 * 60 * 24));
    const ore = Math.floor((differenza % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuti = Math.floor((differenza % (1000 * 60 * 60)) / (1000 * 60));
    const secondi = Math.floor((differenza % (1000 * 60)) / 1000);


    countdownElement.innerHTML = giorni + " giorni, " + ore + " ore, " + minuti + " minuti, " + secondi + " secondi";

    if (differenza <= 0) {
        clearInterval(intervallo);
        countdownElement.innerHTML = "Buon Anno!";
    }
    
}, 1000);
