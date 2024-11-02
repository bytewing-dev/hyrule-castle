import Character from "./base_game/interfaces";
import { getRandom } from "./base_game/setup";


function damageCalc(character: Character): Character {
  let criticalChance: number = getRandom(1, 100);
  if (criticalChance <= character.luck) {
    character.damage *= 2;
  }
  character.damage -= character.damage * (character.def / 100)
  return character;
}


export function heroAtk(hero: Character, oponent: Character): void {
  let oponentDodge: number = getRandom(1, 100);

  if (hero.spd > oponent.spd) {
    hero = damageCalc(hero);
    oponent.hp -= Math.round(hero.damage);
    console.log(`Vous avez attaqué ${oponent.name} et lui avez infligé ${Math.round(hero.damage)} points de dégâts !`);
     
  } else if (hero.spd < oponent.spd) {
    if (oponentDodge <= (oponent.spd - hero.spd)) {
      console.log(`${oponent.name} a esquivé votre attaque ! Il ne subit donc pas de dégât.`);
    } else {
      oponent.hp -= hero.damage;
      console.log(`Vous avez attaqué ${oponent.name} et lui avez infligé ${Math.round(hero.damage)} points de dégâts !`);
    }
  }
}


export function oponentAtk(hero: Character, oponent: Character): void {
  let heroDodge: number = getRandom(1, 100);
  oponent = damageCalc(oponent);

  if (oponent.spd > hero.spd) { 
    if (hero.protect === true) {
      oponent.damage /= 2;
    }
    hero.hp -= Math.floor(oponent.damage);
    console.log(`${oponent.name} vous a attaqué et infligé ${Math.round(oponent.damage)} points de dégâts.`);
   
  } else if (oponent.spd < hero.spd) {
    if (heroDodge <= (hero.spd - oponent.spd)) {
      console.log(`Vous avez esquivé l'attaque de ${oponent.name} ! Vous ne recevez donc aucun dégât.`);
    } else {
      if (hero.protect === true) {
        oponent.damage /= 2;
      }
      hero.hp -= Math.floor(oponent.damage);
      console.log(`${oponent.name} vous a attaqué et infligé ${Math.round(oponent.damage)} points de dégâts.`);
    }
  } 
}
