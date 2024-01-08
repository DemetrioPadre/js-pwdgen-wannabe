// Chiede all utente il suo Nome
const nome = prompt('Utente inserisci il tuo nome');
console.log(nome);

//Chiedi all utente il suo cognome
const cognome = prompt('Utente inserisci il tuo cognome');
console.log(cognome);

// Chiedi all utente quale colore
const prefcolor = prompt('Quale è il tuo colore preferito');
console.log(prefcolor);

// password +23
const password = nome + cognome + prefcolor + '23';
console.log(password);

//alert

alert('La tua password generata è molto insicura, ma è' + password);




