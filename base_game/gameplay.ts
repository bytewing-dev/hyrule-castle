import Character from './interfaces';
import { characterRandomization, gameIntro } from './setup';
import { heroTurn, oponentTurn } from './fighting';


export function gameStart(jsonPlayers: Character[], jsonEnemies: Character[], jsonBosses: Character[]): void {
  let hero: Character = characterRandomization(jsonPlayers);
  let boss: Character = characterRandomization(jsonBosses);
  gameIntro(hero, boss);

  for (let floor: number = 1; floor < 10 && hero.hp > 0; floor += 1) {
  let enemy: Character = characterRandomization(jsonEnemies);
  console.log(`\n=============== ÉTAGE ${floor} - Combat #${floor} ===============\n`);
  console.log(`Vous rencontrez ${enemy.name}, c'est l'heure du combat !\n`);

    while (hero.hp > 0 && enemy.hp > 0) {
      console.log(`${hero.name} (${hero.hp}/${hero.hpMax} HP)`);
      console.log(`${enemy.name} (${enemy.hp}/${enemy.hpMax} HP)\n`);
      console.log(`---------- ACTIONS ----------`);
      heroTurn(hero, enemy);
      
      if (hero.hp > 0 && enemy.hp <= 0) {
        console.log(`Bravo, vous avez vaincu le monstre de l\'étage #${floor} !`);
        console.log('Vous pouver monter à l\'étage suivant.\n');
      
      } else if (hero.hp > 0 && enemy.hp > 0) {
        oponentTurn(hero, enemy);
        
        if (hero.hp <= 0 && enemy.hp > 0) {
          console.log('Vous avez été tué au combat... Votre aventure s\'arrête là.\n');
          console.log('Qui pourra bien sauver la princesse si ce n\'est son héros ?')
        }
      }
      console.log('\n===================================================\n');
    }
  }
  
  if (hero.hp > 0) {
  console.log(`=============== DERNIER ÉTAGE - Ultime combat ===============\n`);
  console.log(`${boss.name} vous attendait... La pression est insoutenable mais c'est l'heure du dernier combat !!!\n`);
  
    while (hero.hp > 0 && boss.hp > 0) {
      console.log(`${hero.name} (${hero.hp}/${hero.hpMax} HP)`);
      console.log(`${boss.name} (${boss.hp}/${boss.hpMax} HP)\n`);
      console.log(`---------- ACTIONS ----------`);
      heroTurn(hero, boss);

      if (hero.hp > 0 && boss.hp <= 0) {
        console.log(`Victoire !!! Vous avez vaincu ${boss.name} !`);
        console.log('Grâce à votre courage et votre esprit héroïque, la princesse est sauvée !')
        
      } else if (hero.hp > 0 && boss.hp > 0) {
        oponentTurn(hero, boss);
          
        if (hero.hp <= 0 && boss.hp > 0) {
          console.log(`${boss.name} vous a tué... Votre aventure s\'arrête là.\n`);
          console.log('Qui pourra bien sauver la princesse si ce n\'est son héros ?')
        }
      }
    console.log('\n===================================================\n');
    }
  }
}
