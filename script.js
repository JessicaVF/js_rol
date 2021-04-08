function preparation() {
  let armes = { bois: 2, fer: 5, magique: 10 };
  let armures = { bois: 1, fer: 3, magique: 5 };
  let player = {
    arme: null,
    armure: null,
    points: 100,
  };
  let temp = prompt("Quelle arme préfères-tu (bois, fer, magique)?");
  while (armes[temp] == undefined) {
    temp = prompt("Quelle arme préfères-tu (bois, fer, magique)?");
  }
  player.arme = armes[temp];
  temp = prompt(" Quelle armure préfères-tu ??");
  while (armures[temp] == undefined) {
    temp = prompt("Quelle armure préfères-tu ?");
  }
  player.armure = armures[temp];
  alert(
    `Tes statistiques: arme: ${player.arme} armure: ${player.armure} points-vie: ${player.points} `
  );
  alert("Au donjon !!!");
  combat(player);
}
function combat(player) {
  let maitre = { arme: 6, armure: 4, points: 10 };
  alert("Quand tu arrives au donjon...");
  alert(
    "Le Maitre du Donjon sort de l'ombre et il s'exclame : Qui ose venir defier le grand maître du donjon, le grand Don Juan !!?"
  );
  let temp = prompt("et alors? comme tu t'appeles ?");
  while (temp == "") {
    temp = prompt("et alors? comme tu t'appeles ?");
  }
  alert(
    "Don Juan: oui, oui, oui, c'était une question rhétorique. Je te vais apeller Eustache"
  );
  while (maitre.points > 0 && player.points > 0) {
    let play = prompt("Ton turn Eustache: attaquer (1) ou fuguer (2)?");
    if (play == "1") {
      maitre.points = maitre.points - (player.arme - maitre.armure);
    } else if (play == "2") {
      return alert(
        "Don Juan: Ouais, fuis loin d'ici, Eustache     -> GAME OVER<-"
      );
    }
    alert(
      `Don Juan attaque, il te prend ${player.armure - maitre.arme} points`
    );
    player.points = player.points - (maitre.arme - player.armure);
    alert(
      `Tes points-vie: ${player.points} Les points-vie de Don Juan: ${maitre.points}`
    );
  }
  alert("Le maître du donjon est battu. Il te dédie ses derniers mots");
  alert(`Don Juan: Bien joué...${temp}`);
  alert("Game Over");
}
preparation();
