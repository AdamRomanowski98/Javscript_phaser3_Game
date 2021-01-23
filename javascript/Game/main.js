//game config
let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [BootScene, TitleScene, gameScene, gameScene2, GameOver],
  parent: "my-game",
  pixelArt: false,
  physics: {
	default: 'arcade',
	arcade: {
		gravity: {y: 1000},
		debug: false
}
	
}
};

// create the game, and pass it the configuration
let game = new Phaser.Game(config);

//game variables

let currentScore = 0;
let scoreText;
let titleText;
let buttonText;
let GameOverText;
let FinalScoreText;







