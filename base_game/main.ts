import Character from './interfaces';
import { gameStart } from './gameplay';

const fs = require('fs');

const contentPlayers: string = fs.readFileSync('./resources/players.json', 'utf-8');
const jsonPlayers: Character[] = JSON.parse(contentPlayers);

const contentEnemies: string = fs.readFileSync('./resources/enemies.json', 'utf-8');
const jsonEnemies: Character[] = JSON.parse(contentEnemies);

const contentBosses: string = fs.readFileSync('./resources/bosses.json', 'utf-8');
const jsonBosses: Character[] = JSON.parse(contentBosses);

gameStart(jsonPlayers, jsonEnemies, jsonBosses);
