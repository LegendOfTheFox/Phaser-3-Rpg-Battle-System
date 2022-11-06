import 'phaser';
import Character from './Character';

import characterList from './characterList.js';
import CharacterMenu from './CharacterMenu';

export default class RpgBattleSystem extends Phaser.Scene {
  character: Character[];
  displayWidth: number;
  displayHeight: number;
  characterMenu: any;
  playersList: {
    name: string;
    currentHp: number;
    maxHp: number;
    currentMp: number;
    maxMp: number;
  }[];
  constructor() {
    super('rpgBattleSystem');

    this.character = [];

    this.displayWidth = 1280;
    this.displayHeight = 720;

    this.playersList = [
      { name: 'Bob', currentHp: 100, maxHp: 120, currentMp: 50, maxMp: 60 },
      { name: 'Joe', currentHp: 100, maxHp: 120, currentMp: 50, maxMp: 60 },
      { name: 'Sally', currentHp: 100, maxHp: 120, currentMp: 50, maxMp: 60 },
    ];
  }

  init() {
    console.log('init');
    this.characterMenu = new CharacterMenu(
      this,
      this.displayWidth,
      this.displayHeight
    );
  }

  preload() {
    this.load.image('battleBackground', 'assets/testBattleBackground01.png');

    this.characterMenu.preload();

    let config = {
      position: { x: 200, y: 236 },
      type: 'knight',
    };

    let config2 = {
      position: { x: 200, y: 436 },
      type: 'knight',
    };

    this.character.push(new Character(this, config));
    this.character.push(new Character(this, config2));

    this.character[0].preload();
    this.character[1].preload();
  }

  create() {
    this.add
      .image(0, 0, 'battleBackground')
      .setOrigin(0)
      .setDisplaySize(this.displayWidth, this.displayHeight);

    this.character[0].create();
    this.character[1].create();

    const playersList = this.playersList;
    this.characterMenu.create(playersList);
  }

  update() {}
}
