import Character from "./interfaces";
import { heroTurn, oponentTurn } from "../better_combat_options";


export function fasterHero(hero: Character, enemy: Character, floor: number): boolean {
  let escape: boolean = heroTurn(hero, enemy);
  
  if (escape === true) {
    return true;
  
  } else if (hero.hp > 0 && enemy.hp <= 0) {
    console.log(`Bravo, vous avez vaincu le monstre de l\'étage #${floor} !`);
    console.log('Vous pouver monter à l\'étage suivant.\n');
  
  } else if (hero.hp > 0 && enemy.hp > 0) {
    oponentTurn(hero, enemy);
  
    if (hero.hp <= 0 && enemy.hp > 0) {
      console.log(`${enemy.name} vous a tué... Votre aventure s'arrête là.\n`);
      console.log('Qui pourra bien sauver la princesse si ce n\'est son héros ?');
    }
  }
  return false;
}


export function fasterEnemy(hero: Character, enemy: Character, floor: number): boolean {
  oponentTurn(hero, enemy);

  if (enemy.hp > 0 && hero.hp <= 0) {
    console.log(`${enemy.name} vous a tué... Votre aventure s'arrête là.\n`);
    console.log('Qui pourra bien sauver la princesse si ce n\'est son héros ?')
  
  } else if (enemy.hp > 0 && hero.hp > 0) {
    let escape: boolean = heroTurn(hero, enemy);
  
    if (escape === true) {
    return true;
  
    } else if (hero.hp > 0 && enemy.hp <= 0) {
      console.log(`Bravo, vous avez vaincu le monstre de l\'étage #${floor} !`);
      console.log('Vous pouver monter à l\'étage suivant.\n');
    }
  }
  return false;
}


export function fasterHeroBoss(hero: Character, boss: Character) {
  let escape: boolean = heroTurn(hero, boss);
  
  if (escape === true) {
    console.log('... malheureusement, vous êtes au dernier étage !');
    console.log(`La fuite est impossible contre ${boss.name}`);

  } else if (hero.hp > 0 && boss.hp <= 0) {
    console.log(`Victoire !!! Vous avez vaincu ${boss.name} !`);
    console.log('Grâce à votre courage et votre esprit héroïque, la princesse est sauvée !');

  } else if (hero.hp > 0 && boss.hp > 0) {
    oponentTurn(hero, boss);

    if (hero.hp <= 0 && boss.hp > 0) {
    console.log(`${boss.name} vous a tué... Votre aventure s\'arrête là.\n`);
    console.log('Qui pourra bien sauver la princesse si ce n\'est son héros ?');
    }
  }
}


export function fasterBoss(hero: Character, boss: Character) {
  oponentTurn(hero, boss);

  if (boss.hp > 0 && hero.hp <= 0) {
    console.log(`${boss.name} vous a tué... Votre aventure s\'arrête là.\n`);
    console.log('Qui pourra bien sauver la princesse si ce n\'est son héros ?');

  } else if (boss.hp > 0 && hero.hp > 0) {
    let escape: boolean = heroTurn(hero, boss);

    if (escape === true) {
      console.log('... malheureusement, vous êtes au dernier étage !');
      console.log(`La fuite est impossible contre ${boss.name}`);

    } else if (hero.hp > 0 && boss.hp <= 0) {
      console.log(`Victoire !!! Vous avez vaincu ${boss.name} !`);
      console.log('Grâce à votre courage et votre esprit héroïque, la princesse est sauvée !');
    }  
  }
}
