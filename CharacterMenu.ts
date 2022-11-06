import 'phaser';

export default class CharacterMenu {
  scene: Phaser.Scene;
  displayHeight: number;
  displayWidth: number;
  constructor(
    scene: Phaser.Scene,
    displayWidth: number,
    displayHeight: number
  ) {
    this.scene = scene;
    this.displayWidth = displayWidth;
    this.displayHeight = displayHeight;
  }

  preload() {
    this.scene.load.image(
      'battleMenuBackground',
      'assets/rpgBattleSystem/BattleMenu.png'
    );
  }

  create(players: any) {
    const menuHeight = this.displayHeight / 4;
    const menuWidth = this.displayWidth / 2;

    const playerMenu = this.scene.add
      .image(
        this.displayWidth * 0.75,
        this.displayHeight * 0.8,
        'battleMenuBackground'
      )
      .setDisplaySize(menuWidth, menuHeight);

    const samplePlayers = players;

    this.addCharacterToMenu(
      samplePlayers[0],
      menuWidth,
      menuHeight,
      playerMenu.x,
      playerMenu.y,
      -menuHeight / 2.5
    );

    this.addCharacterToMenu(
      samplePlayers[1],
      menuWidth,
      menuHeight,
      playerMenu.x,
      playerMenu.y,
      0
    );

    this.addCharacterToMenu(
      samplePlayers[2],
      menuWidth,
      menuHeight,
      playerMenu.x,
      playerMenu.y,
      menuHeight / 3.0
    );
  }

  addCharacterToMenu(
    playerInformation: {
      name: any;
      currentHp: any;
      maxHp: any;
      currentMp: any;
      maxMp: any;
    },
    menuWidth: number,
    menuHeight: number,
    positionX: number,
    positionY: number,
    heightAdjustment: number
  ) {
    const xAdjust = 2.2;
    const hpAdjust = 80;
    const mpAdjust = 240;

    this.scene.add.text(
      positionX - menuWidth / xAdjust,
      positionY + heightAdjustment,
      playerInformation.name
    );

    this.scene.add.text(
      positionX - menuWidth / xAdjust + hpAdjust,
      positionY + heightAdjustment,
      `HP: ${playerInformation.currentHp}/${playerInformation.maxHp}`
    );

    this.scene.add.text(
      positionX - menuWidth / xAdjust + mpAdjust,
      positionY + heightAdjustment,
      `MP: ${playerInformation.currentMp}/${playerInformation.maxMp}`
    );
  }
}
