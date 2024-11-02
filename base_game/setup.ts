import Character from './interfaces';

export function getRandom(min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min);
}

  
function getCharacter(): number {
  let randomIndex: number = getRandom(1, 100);
  if (randomIndex <= 50) {
    return 1;
  } else if (randomIndex > 50 && randomIndex <= 80) {
    return 2;
  } else if (randomIndex > 80 && randomIndex <= 95) {
    return 3;
  } else if (randomIndex > 95 && randomIndex <= 99) {
    return 4;
  } else {
    return 5;
  }
}
  
  
export function characterRandomization(jsonFile: Character[]): Character {
  let rarityIndex: number = getCharacter();
  let rarityList: Character[] = [];
  for (const char of jsonFile) {
    if (char.rarity === rarityIndex) {
      let character: Character = JSON.parse(JSON.stringify(char));
      character.hpMax = character.hp;
      character.damage = character.str;
      rarityList.push(character);
    }
  }
  let randomPicker: number = getRandom(0, rarityList.length - 1);
  return rarityList[randomPicker];
}


export function gameIntro(hero: Character, boss: Character): void {
  console.log('========= Bienvenue au château d\'Hyrule ! =========\n');
  console.log(`Dans cette aventure, vous incarnerez ${hero.name}, qui doit sauver la princesse Zelda des griffes du terrible ${boss.name}.`);
  console.log(`Malheureusement, ${boss.name} détient la princesse au 10ème étage de la tour du château...\n`);
  console.log('Chaque étage de la tour est infesté d\'horribles monstres qui se mettront en travers de votre quête.');
  console.log(`Vous devrez donc affronter bravement cette horde de monstre avant de confronter ${boss.name} !`);
}
