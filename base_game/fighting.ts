import Character from "./interfaces";

const readline = require('readline-sync');

export function heroTurn(hero: Character, oponent: Character): void {
  const actionList: string[] = ['Attaquer', 'Se soigner'];
  const heroAction: number = readline.keyInSelect(actionList, 'Quelle action voulez-vous effectuer ?\n');
  console.log('\n-----------------------------\n');
    
  if (heroAction === 0) {
    oponent.hp -= hero.str;
    console.log(`Vous avez attaqué ${oponent.name} et lui avez infligé ${hero.str} points de dégâts !`);
    if (oponent.hp <= 0) {
      console.log(`${oponent.name} est mort. Vous avez vaincu ${oponent.name} !\n`);
    } else {
      console.log(`Il reste ${oponent.hp} points de vie à ${oponent.name}.\n`);
    }
    
  } else if (heroAction === 1) {
    hero.hp += hero.hpMax / 2;
    if (hero.hp > hero.hpMax) {
      hero.hp = hero.hpMax;
    }
    console.log(`Vous vous êtes soignés et possédez maintenant ${hero.hp} points de vie.\n`);
    
  } else if (heroAction === -1) {
    console.log('Vous avez décidé de ne rien faire.\n');
  }
}


export function oponentTurn(hero: Character, oponent: Character): void {
  hero.hp -= oponent.str;
      
  if (hero.hp <= 0) {
    console.log(`Vous n'avez plus de point de vie. Vous avez été vaincu par ${oponent.name}...\n`);
      
  } else {
    console.log(`${oponent.name} vous a attaqué et infligé ${oponent.str} points de dégâts.`);
    console.log(`Il vous reste ${hero.hp} points de vie.`);
  }
}