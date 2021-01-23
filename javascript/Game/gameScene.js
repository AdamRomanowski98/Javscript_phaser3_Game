class gameScene extends Phaser.Scene {
	
	constructor(){
		
		super('gameScene');
		
	}

	init(){
	
	//player paramiters
	this.playerSpeed = 130;
	this.jumpSpeed = -600;
	this.enemySpeed = 100;
	
	this.levelData = {
		//platforms positions
		platforms: [	
		{
			x: 80,
			y: 400,
			numTiles: 6,
			key: 'block'
		},
		{
			x: 480,
			y: 350,
			numTiles: 6,
			key: 'block'
		},
		{
			x: 360,
			y: 100,
			numTiles: 8,
			key: 'block'
		},
		{
			x: 360,
			y: 240,
			numTiles: 3,
			key: 'block'

		},
		{
			x: 120,
			y: 190,
			numTiles: 5,
			key: 'block'
		},		
		{
			x: 700,
			y: 220,
			numTiles: 4,
			key: 'block'

		},		
		{
			x: 0,
			y: 540,
			numTiles: 1,
			key: 'ground'
		},
		{
			x: 360,
			y: 540,
			numTiles: 1,
			key: 'ground'

		},
		{
			x: 550,
			y: 540,
			numTiles: 1,
			key: 'ground'
		},		   
	],
		//coins positions
		coins: [
			
			{
				x: 165,
				y: 357,
				
			},
			{
				x: 570,
				y: 307,
				
			},
			{
				x: 400, 
				y: 198,
				
			},
			{
				x: 200,
				y: 148,
				
			},
			{
				x: 480,
				y: 58,
				
			},
			{
				x: 750,
				y: 178,
				
			},
		]	
	}
	
}

create(){
	 
  //adding image to the background of the scene
  let bg = this.add.image(400, 300, "background");
	
  //setting up score text
  scoreText = this.add.text(16, 16, "SCORE: " + currentScore, { font: "bold 24px Arial", fill: "white" });
	
  //setting up player sprite
  this.player = this.add.sprite(400, 500, 'player', 3);
  this.physics.add.existing(this.player);
  this.player.body.setCollideWorldBounds(true);
	

  //calling setuplevel method
  this.setupLevel();	

  //setting up world bounds
  this.physics.world.bounds.width = 800;
  this.physics.world.bounds.height = 600;
	
  //camera bounds
  this.cameras.main.setBounds(0, 0, 800, 600);
  this.cameras.main.startFollow(this.player);

  // collision detection
  this.physics.add.collider(this.player, this.platforms);
  // overlap detection
  this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);	
 
  //reading cursor keys from the keyboard
  this.cursors = this.input.keyboard.createCursorKeys();
	
	
};

//game update function
update()
{
  // checking if player is touching the ground
  let Ground = this.player.body.blocked.down ||
  this.player.body.touching.down;

  // movement to the left
  if(this.cursors.left.isDown) {
    this.player.body.setVelocityX(-this.playerSpeed);

    this.player.flipX = false;

    //playing animation when player is on the ground and if none is playing
    if(Ground && !this.player.anims.isPlaying)
      this.player.anims.play('walking');
  }

  // movement to the right
  else if(this.cursors.right.isDown) {
    this.player.body.setVelocityX(this.playerSpeed);

    this.player.flipX = true;

    // play animation if player is on the ground none is playing
    if(Ground && !this.player.anims.isPlaying)
      this.player.anims.play('walking');
  }
  else {
    //stop player movement while keys are not pressed
    this.player.body.setVelocityX(0);

    // stop walking animation
    this.player.anims.stop('walking');

    // set default frame
    if(Ground)
      this.player.setFrame(3);
  }

  //make player jump when space is pressed and while player is touching the ground
  if(Ground && (this.cursors.space.isDown || this.cursors.up.isDown)) {
   
    this.player.body.setVelocityY(this.jumpSpeed);

    // stop the walking animation
    this.player.anims.stop('walking');

    // set frame for jump
    this.player.setFrame(2);
  }
	
};
	
// function to setup level
setupLevel() {
	

    //platforms	
	this.platforms = this.physics.add.staticGroup();
  	for (let i = 0; i < this.levelData.platforms.length; i++) {
    let current = this.levelData.platforms[i];
	
	//variable for new objects
    let newObj;

    // create object
    if(current.numTiles == 1) {
      // create sprite
      newObj = this.add.sprite(current.x, current.y, current.key).setOrigin(0);
    }
    else {
      // create tilesprite
      let width = this.textures.get(current.key).get(0).width;
      let height = this.textures.get(current.key).get(0).height;
      newObj = this.add.tileSprite(current.x, current.y, current.numTiles * width , height ,current.key).setOrigin(0);
    }

    // enable physics
    this.physics.add.existing(newObj, true);

    // add to the group
    this.platforms.add(newObj);
  }
	
	
  	//coins
	
	//adding physics for all the coins
	this.coins = this.physics.add.group({
		
		allowGravity : false,
		immovable : true

	});
  	for (let i = 0; i < this.levelData.coins.length; i++) {
    let current = this.levelData.coins[i];

    // create sprite
    let newObj = this.add.sprite(current.x, current.y, 'coin').setOrigin(0);
    // enable physics
    this.physics.add.existing(newObj);
	
	//play spinning animation
	newObj.anims.play('spin');
    // add to the group
    this.coins.add(newObj);	
  }	
}

//coin collection method
collectCoin(player, coins){

	//making coin invisible if player overlaps with any of them
	coins.destroy();
	//increasing the score
	currentScore += 10;
	scoreText.setText('Score: ' + currentScore);
	
	if (currentScore == 60){
		
		this.cameras.main.fade(600);
		this.cameras.main.on('camerafadeoutcomplete', function(){
			
			this.scene.switch('gameScene2');
			
		}, this);
		
		
	}
		
}
	
	
	
}