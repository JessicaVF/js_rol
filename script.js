// TO DO:

// - Capture name and use it in narrative
// - Integrar el ataque de donJuan
// - evitar caer en numeros negativos
// - incluir ramdon en los ataques, para que varie el poder del ataque
// - hacer branch con el viejo codigo
// IMPORTANTE: Apague el autoformato de vs code para este code

"use strict";
let ready = document.getElementById("ready");
ready.addEventListener("click", function (event) {
  event.preventDefault;
  let player = {
    arme: null,
    armure: null,
    points: 100,
  };
  let temp = document.querySelector('input[name="arme"]:checked');
  temp = temp.value;
  player.arme = temp;
  temp = document.querySelector('input[name="armure"]:checked');
  temp = temp.value;
  player.armure = temp;
  let fname = 
  narration(fname);
  // combat(player);
});
function combat(player) {
  let screen = document.getElementById("preparation");
  screen.innerHTML = "";
  let playerStats = document.getElementById("player");
  playerStats.innerText = `Eustache ( ｀皿´)｡ﾐ/ |||Ton attaque: ${player.arme} | Ta défense: ${player.armure} | Tes points de vie: ${player.points}`;

  let maitre = { arme: 6, armure: 4, points: 10 };
  let maitreStats = document.getElementById("maitre");
  maitreStats.innerText = `Maitre - attaque: ${maitre.arme} | Maitre - défense: ${maitre.armure} | Maitre - points de vie: ${maitre.points}`;

  let btnAttack = document.createElement("button");
  btnAttack.innerText = "Attaquer";
  let btnRun = document.createElement("button");
  btnRun.innerText = "Echapper";
  let sectionCombat = document.getElementById("combat");
  sectionCombat.appendChild(btnAttack);
  sectionCombat.appendChild(btnRun);

  btnAttack.addEventListener("click", function () {
    maitre.points = maitre.points - (player.arme - maitre.armure);
    maitreStats.innerText = `Maitre - attaque: ${maitre.arme} | Maitre - défense: ${maitre.armure} | Maitre - points de vie: ${maitre.points}`;
  });

  btnRun.addEventListener("click", function () {
    maitreStats.innerText = "";
    playerStats.innerText = "Game over...couard ༼つಠ益ಠ༽つ ";
    let btns = document.getElementsByTagName("button");
    for (let i = 0; i < 2; i++) {
      btns[0].remove();
    }
  });
}
function narration(fname) {
  
  let screen = document.getElementById("preparation");
  screen.innerHTML = "";
  let narrative = document.getElementById("player");
  narrative.innerText = "Le Maitre du Donjon sort de l'ombre et il s'exclame : Qui ose venir defier le grand maître du donjon, le grand Don Juan !!?";
  let donJuan = document.getElementById("donJuan");
  donJuan.style.color ="black";
  // let narrativeBis = document.getElementById("maitre");
  // narrativeBis.innerText = `Tu commences à dire: "Je suis ${fname}..." mais...`;
};
// function combat(player) {
//   let maitre = { arme: 6, armure: 4, points: 10 };
//   alert("Quand tu arrives au donjon...");
//   alert(
//     "Le Maitre du Donjon sort de l'ombre et il s'exclame : Qui ose venir defier le grand maître du donjon, le grand Don Juan !!?"
//   );
//   let temp = prompt("et alors? comme tu t'appeles ?");
//   while (temp == "") {
//     temp = prompt("et alors? comme tu t'appeles ?");
//   }
//   alert(
//     "Don Juan: oui, oui, oui, c'était une question rhétorique. Je te vais apeller Eustache"
//   );
//   while (maitre.points > 0 && player.points > 0) {
//     let play = prompt("Ton turn Eustache: attaquer (1) ou fuguer (2)?");
//     if (play == "1") {
//       maitre.points = maitre.points - (player.arme - maitre.armure);
//     } else if (play == "2") {
//       return alert(
//         "Don Juan: Ouais, fuis loin d'ici, Eustache     -> GAME OVER<-"
//       );
//     }
//     alert(
//       `Don Juan attaque, il te prend ${player.armure - maitre.arme} points`
//     );
//     player.points = player.points - (maitre.arme - player.armure);
//     alert(
//       `Tes points-vie: ${player.points} Les points-vie de Don Juan: ${maitre.points}`
//     );
//   }
//   alert("Le maître du donjon est battu. Il te dédie ses derniers mots");
//   alert(`Don Juan: Bien joué...${temp}`);
//   alert("Game Over");
// }
// preparation();
