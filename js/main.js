// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito76

const firstName = prompt("Scrivi il tuo nome");

const surName = prompt("Scrivi il tuo cognome");

const chooseColor = prompt("Scrivi il tuo colore preferito");

const pwd = firstName + surName + chooseColor + 76;
console.log(pwd);
document.getElementById("pwd").innerHTML = pwd;
