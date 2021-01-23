class TitleScene extends Phaser.Scene{
	
	constructor(){
		
		super('Title');
		
	}

	create(){
		
		//adding background img
		let bg = this.add.image(400, 300, "background");
		
		//adding title screen text
		titleText = this.add.text(400, 250, 'PRESS START TO PLAY',{ font: "bold 40px Arial", fill: "white" });
		titleText.setOrigin(0.5);
		this.button = this.add.image (400, 400, 'button01');
		this.button.setInteractive();
		
		//title button creation
		buttonText = this.add.text(0, 0, 'Start',{ fontSize: '30px', fill: "white"});
		Phaser.Display.Align.In.Center(buttonText, this.button);
		
		//events for button
		this.button.on('pointerdown', () => {
			
			this.scene.start('gameScene');

		});
		
		this.button.on('pointerover', () => {
			
			this.button.setTexture('button02');
			
			
		});
		
		this.button.on('pointerout', () => {
			
			this.button.setTexture('button01');
			
			
		});
		
	}
}