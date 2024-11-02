import Character from './interfaces';
import { characterRandomization, fightSetup, gameIntro } from './setup';
import { fasterHero, fasterEnemy, fasterHeroBoss, fasterBoss } from './fighting';


export function gameStart(jsonPlayers: Character[], jsonEnemies: Character[], jsonBosses: Character[]): void {
  let hero: Character = characterRandomization(jsonPlayers);
  let boss: Character = characterRandomization(jsonBosses);
  gameIntro(hero, boss);
  
  for (let floor: number = 1; floor < 10 && hero.hp > 0; floor += 1) {
    let enemy: Character = characterRandomization(jsonEnemies);
    console.log(`\n=============== ÉTAGE ${floor} - Combat #${floor} ===============\n`);
    console.log(`Vous rencontrez ${enemy.name}, c'est l'heure du combat !\n`);
    
    while (hero.hp > 0 && enemy.hp > 0) {
      let characterList: Character[] = fightSetup(hero, enemy);
      hero = characterList[0];
      enemy = characterList[1];

      if (hero.spd > enemy.spd) {
        if (fasterHero(hero, enemy, floor)) {
          break;
        }

      } else if (hero.spd < enemy.spd) {
        if (fasterEnemy(hero, enemy, floor)) {
          break;
        }

      }
    console.log('\n===================================================\n');
    }
  }
  
  if (hero.hp > 0) {
    console.log(`=============== DERNIER ÉTAGE - Ultime combat ===============\n`);
    console.log(`${boss.name} vous attendait... La pression est insoutenable mais c'est l'heure du dernier combat !!!\n`);
  
    while (hero.hp > 0 && boss.hp > 0) {
      let characterList: Character[] = fightSetup(hero, boss);
      hero = characterList[0];
      boss = characterList[1];

      if (hero.spd > boss.spd) {
        fasterHeroBoss(hero, boss);

      } else if (hero.spd < boss.spd) {
        fasterBoss(hero, boss);
      }
      console.log('\n===================================================\n');
    }
  }
}
