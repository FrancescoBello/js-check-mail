
var mail_utente = prompt("inserisci qui la tua mail")
console.log("la tua email è : " + mail_utente);
var lista_mail = ["mario@icloud.com", "paolo@gmail.com", "marco@libero.it", "luca@live.it"];
console.log(lista_mail);





 //for (var i = mail_utente; i == email.length; ) {

   //console.log ("Benvenuto"  + mail_utente);
 //}
//for (var i = mail_utente; i != email.length; ) {
  //email[i]
  //console.log ("Accesso Negato");

//}
var mail_trovata = false
for (var i = 0; i < lista_mail.length; i++) {
  var email = lista_mail[i]
   if (email == mail_utente) {
     mail_trovata = true;
   }
}

if (mail_trovata) {
  console.log("accesso confermato");
}else {
  console.log("accesso negato");
}
