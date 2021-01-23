class BootScene extends Phaser.Scene {
	
	constructor(){
		super('Boot');
	}
	
  preload(){
  // load images
  
  this.load.image('button01', 'assets/images/button01.png');
  this.load.image('button02', 'assets/images/button02.png');
  this.load.image('background', 'assets/images/background.png');
  this.load.image('background1', 'assets/images/background1.png');
  this.load.image('ground', 'assets/images/ground.png');
  this.load.image('platform', 'assets/images/platform.png');
  this.load.image('block', 'assets/images/block.png');
  this.load.image('platform1', 'assets/images/platform.png');
  this.load.image('gorilla', 'assets/images/gorilla3.png');
  this.load.image('grass','assets/images/grass.png');
  this.load.image('platform2', 'assets/images/platform2.png');
  this.load.image('ghost', 'assets/images/ghost.png');

  // load spritesheets
  this.load.spritesheet('player', 'assets/images/player_spritesheet.png', {
    frameWidth: 28,
    frameHeight: 30,
    margin: 1,
    spacing: 1
  });

	
  this.load.spritesheet('coin', 'assets/images/coin.png',{
	  frameWidth: 36,
	  frameHeight: 40,
	  margin: 1,
	  spacing: 1 
  });	
  	
}
	
	create(){

//walking animation
  this.anims.create({
    key: 'walking',
    frames: this.anims.generateFrameNames('player', {
      frames: [0, 1, 2]
    }),
    frameRate: 12,
    yoyo: true,
    repeat: -1
  });
  
  //coin spinning animation
  this.anims.create({ 
	 key: 'spin',
	 frames: this.anims.generateFrameNames('coin',{
		 frames: [0, 1, 2]
	 }),
	  frameRate: 5,
	  repeat: -1
 
  });
		
	
		
// function to check if user is logged in 		
	function LoggedIn(){
	
	let user = sessionStorage.getItem("loggedInUsrEmail");
	
	if(user){
		return true;	
	}
	else {
		return false;
	}
}// end of LoggedIn
		
	if(LoggedIn())
	{
	this.scene.start('Title');
	}//end of if
	else{
		let bg = this.add.image(400, 300, "background");
		let notLoggedInText;
		notLoggedInText = this.add.text(180, 200, 'User not logged in!',{
		font: "bold 50px Arial", fill:"crimson"					
		});

		//"Play" button creation
		this.button = this.add.image(400, 350, 'button01');
		this.button.setInteractive();
			
		buttonText = this.add.text(0, 0, 'Login',{ fontSize: '25px', fill: "crimson"});
		Phaser.Display.Align.In.Center(buttonText, this.button);
		
		//Adding events to the button"
		this.button.on('pointerdown', () => {
			window.location.assign("/login.php");
		});

		this.button.on('pointerover', () => {
			this.button.setTexture('button02');
		});

		this.button.on('pointerout', () => {
			this.button.setTexture('button01');
		});
	
		}//end of else
		
	}//end of create
	

	
}