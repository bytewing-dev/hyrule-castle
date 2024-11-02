import Character from './base_game/interfaces';
import { heroAtk, oponentAtk } from './more_statistics';

const readline = require('readline-sync');


export function heroTurn(hero: Character, oponent: Character): boolean {
  let heroAction: string = '';
  while (heroAction.toUpperCase() !== '1. ATTAQUE' && heroAction.toUpperCase() !== '2. SOIN' && heroAction.toUpperCase() !== '3. PROTECTION' && heroAction.toUpperCase() !== '4. FUITE') {
    console.log(`---------- ACTIONS ----------\n`);
    heroAction = readline.question('Quelle action voulez-vous effectuer ?\n\n1. ATTAQUE\n2. SOIN\n3. PROTECTION\n4. FUITE\n');
    console.log('\n-----------------------------\n');
    
    if (heroAction.toUpperCase() !== '1. ATTAQUE' && heroAction.toUpperCase() !== '2. SOIN' && heroAction.toUpperCase() !== '3. PROTECTION' && heroAction.toUpperCase() !== '4. FUITE') {
      console.log('Vous devez saisir votre réponse sous la forme "<numéro>. <action>".\n');
    
    } else if (heroAction.toUpperCase() === '1. ATTAQUE') {
      heroAtk(hero, oponent);
      if (oponent.hp <= 0) {
        console.log(`${oponent.name} est mort. Vous avez vaincu ${oponent.name} !\n`);
      } else {
        console.log(`Il reste ${oponent.hp} points de vie à ${oponent.name}.\n`);
      }
  
    } else if (heroAction.toUpperCase() === '2. SOIN') {
      hero.hp += hero.hpMax / 2;
      if (hero.hp > hero.hpMax) {
        hero.hp = hero.hpMax;
      }
      console.log(`Vous vous êtes soignés et possédez maintenant ${hero.hp} points de vie.\n`);
  
    } else if (heroAction.toUpperCase() === '3. PROTECTION') {
      console.log('Vous vous protégez afin de recevoir moins de dégâts.\n');
      hero.protect = true;
    
    } else if (heroAction.toUpperCase() === '4. FUITE') {
      console.log(`Vous avez décidé de fuire le combat contre ${oponent.name}.\n`);
      console.log('Vous passez à l\'étage suivant mais sans butin...');
      return true;
    } 
  }
  return false;
}


export function oponentTurn(hero: Character, oponent: Character): void {
  oponentAtk(hero, oponent);
    if (hero.hp <= 0) {
      console.log(`Vous n'avez plus de point de vie. Vous avez été vaincu par ${oponent.name}...\n`);
    } else {
      console.log(`Il vous reste ${hero.hp} points de vie.\n`);
    }
}
