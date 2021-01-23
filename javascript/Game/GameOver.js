class GameOver extends Phaser.Scene{
	
	constructor(){
		
		super('Over');
	}

	create(){
		
		let theOtherScene = this.scene.get('Title');
		
		this.ranking();
		
		//adding image to the background of the scene
		let bg = this.add.image(400, 300, "background");
		
		//adding text to the scene with achived score
		GameOverText = this.add.text(400, 200, 'Game Over', {
			
			font: "bold 64px Arial", fill:"crimson"
			
		});
		
		GameOverText.setOrigin(0.5);
		
		FinalScoreText = this.add.text(400, 300, 'Your SCORE: '+currentScore,{
			
			font: "bold 50px Arial", fill:"crimson"
			
		});
		FinalScoreText.setOrigin(0.5);
		
		
		this.scene.switch('ranking');
		

		//play again button creation
		this.button = this.add.image(400, 400, 'button01');
		this.button.setInteractive();
		
		buttonText = this.add.text(0, 0, 'Play Again',{ fontSize: '25px', fill: "crimson"});
		Phaser.Display.Align.In.Center(buttonText, this.button);
		
		
		//Events for created button
		this.button.on('pointerdown', () => {
			window.location.assign("/play.php");
		} );
		
		
		this.button.on('pointerover', () => {	
			this.button.setTexture('button02');

		} );
		
		this.button.on('pointerout', () => {
			this.button.setTexture('button01');
		} );
		

	}
	
	ranking(){
		//storing highest scores
		
		let usrObj= [];
		
		let user = sessionStorage.getItem("loggedInUsrEmail");
		
		let usrObject = JSON.parse(localStorage[user]);
		
		if(currentScore>usrObject.score){
			
			usrObject.score = currentScore;
			
			localStorage[user] = JSON.stringify(usrObject);
			
		}
	
	}
}