class gameScene2 extends Phaser.Scene {
	
	constructor(){

		super('gameScene2');
	}

init(){
	
	//player paramiters
	this.playerSpeed = 130;
	this.jumpSpeed = -600;
	
	
	this.levelData = {
		//platforms positions
		platforms: [	
		{
			x: 80,
			y: 850,
			numTiles: 1,
			key: 'grass'
		},
			
		{
			x: 400,
			y: 780,
			numTiles: 2,
			key: 'grass'
		},
			
		{
			x: 80,
			y: 680,
			numTiles: 1,
			key: 'grass'
		},	
			
		{
			x: 350,
			y: 540,
			numTiles: 1,
			key: 'grass'
		},	
			
		{
			x: 120,
			y: 460,
			numTiles: 1,
			key: 'platform2'
		},
			
		{
			x: 260,
			y: 350,
			numTiles: 1,
			key: 'platform2'
		},	
		
		{
			x: 50,
			y: 200,
			numTiles: 1,
			key: 'platform2'
		},	
		
		{
			x: 400,
			y: 250,
			numTiles: 2,
			key: 'grass'
		},		
		
		{
			x: 0,
			y: 930,
			numTiles: 1,
			key: 'ground'
		},
		{
			x: 360,
			y: 930,
			numTiles: 1,
			key: 'ground'

		},
		{
			x: 550,
			y: 930,
			numTiles: 1,
			key: 'ground'
		},		   
	],
		//coins positions
		coins: [
			
			{
				x: 110,
				y: 808,
				
			},
			{
				x: 321,
				y: 666,
				
			},
			{
				x: 623, 
				y: 451,
				
			},
			{
				x: 720,
				y: 725,
				
			},
			{
				x: 480,
				y: 58,
				
			},
			{
				x: 750,
				y: 178,
				
			},
			{
				x: 70,
				y: 150,
				
			},
		],
		
		enemies: [
			
			{
				x: 600,	
				y: 727,	
			},
			{
				x: 470,	
				y: 200,
			},
			{
				x: 140,	
				y: 145,
			},
		]
	}
}

create(){
  //adding image to the background of the scene
  let bg = this.add.image(400, 500, "background1");
 
  //setting up player sprite
  this.player = this.add.sprite(400, 900, 'player', 3);
  this.physics.add.existing(this.player);
  this.player.body.setCollideWorldBounds(true);

  //setting up animations

  this.setupLevel();	
	
  //setting up world bounds
  this.physics.world.bounds.width = 800;
  this.physics.world.bounds.height = 1000;
	
  //camera bounds
  this.cameras.main.setBounds(0, 0, 800, 1000);
  this.cameras.main.startFollow(this.player);

  //setting up score text
  scoreText = this.add.text(16, 16, "SCORE: " + currentScore, { font: "bold 24px Arial", fill: "white" });
 
  // collision detection
  this.physics.add.collider(this.player, this.platforms);
	
  this.physics.add.collider(this.enemies, this.platforms);	
  // overlap detection
  this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);	
	
  this.physics.add.overlap(this.player, this.enemies, this.gorillaCollision, null, this);	
	
  //reading cursor keys from the keyboard
  this.cursors = this.input.keyboard.createCursorKeys();
	
	
	//adding some flying enemies
	let x = (this.player.x < 400) ? Phaser.Math.Between(800, 1000) : Phaser.Math.Between(0, 400);

        let ghost= this.enemies.create(x, 16, 'ghost');
        ghost.setBounce(1);
        ghost.setCollideWorldBounds(true);
        ghost.setVelocity(Phaser.Math.Between(100, 300), 10);
	
		let ghost1= this.enemies.create(x, 16, 'ghost');
        ghost1.setBounce(1);
        ghost1.setCollideWorldBounds(true);
        ghost1.setVelocity(Phaser.Math.Between(400, 300), 30);
	
		let ghost2= this.enemies.create(x, 16, 'ghost');
        ghost2.setBounce(1);
        ghost2.setCollideWorldBounds(true);
        ghost2.setVelocity(Phaser.Math.Between(400, 300), 60);
	
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
	
	this.enemies = this.physics.add.group({
		
		allowGravity : false,
		immovable : true

	});
  	for (let i = 0; i < this.levelData.enemies.length; i++) {
    let current = this.levelData.enemies[i];

    // create sprite
    let newObj = this.add.sprite(current.x, current.y, 'gorilla').setOrigin(0);
    // enable physics
    this.physics.add.existing(newObj);
	
    // add to the group
    this.enemies.add(newObj);	
  }	
	
	
}

//coin collection method
collectCoin(player, coins){

	//making coin invisible if player overlaps with any of them
	coins.destroy();
	//increasing the score
	currentScore += 10;
	scoreText.setText('Score: ' + currentScore);
	
	if (currentScore == 130){
		
		this.cameras.main.fade(600);
		this.cameras.main.on('camerafadeoutcomplete', function(){
			
			this.scene.switch('Over');
			
		}, this);
		
}
}

gorillaCollision(player, enemies){

	this.scene.switch("Over");
	
}
}