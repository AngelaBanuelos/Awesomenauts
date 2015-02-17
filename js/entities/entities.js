// game.PlayerEntity = me.Entity.extend({
// 	//initializes the function
// 	init: function(x, y, settings){
// 		this._super(me.Entity, 'init', [x, y, {
// 			// makes the image of the player appear.
// 			image: "player", 
// 			//width of the space created
// 			width: 64,
// 			//height of the space created
// 			height: 64,
// 			//width for the player
// 			spritewidth: "64",
// 			//height for the player
// 			spriteheight: "64",
// 			//function of the shape of the screen
// 			getShape: function(){
// 				//creates a rectangle by 64 by 64 
// 				// 0, 0 is the origin
// 				return(new me.Rect(0, 0, 64, 64)).toPolygon();
// 			}
// 		}]);
// 		//sets the speen of the player when it moves to the right 
// 		this.body.setVelocity( 5, 20);
// 		//
// 		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
// 		//adds animation to standing starting position
// 		this.renderable.addAnimation("idle", [78]);
// 		//adds animation to walking
// 		this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 122, 123, 124, 125], 80);
// 		//adds animation to non-moving position. 
// 		this.renderable.setCurrentAnimation("idle");

// 	},
// 	// updates the fucntion 
// update: function(delta){
// 	if(me.input.isKeyPressed("right")){
// 		//adds ro the position of my x by the velocity defined in
// 		//set velocity() and multiplying it by me.timer.tick.
// 		//me.timer.tick makes the movement look smooth
// 		this.body.vel.x += this.body.accel.x * me.timer.tick;
// 		//makes the character face the right
// 		this.flipX(true);
// 	}else{
// 		//for when the rigth arrow isnt clicked 
// 		this.body.vel.x = 0;
// 	}

// 	//if the button is pushed then the character will walk but if not it will execute the else code.
// 	if(this.body.vel.x !== 0 ){
// 		if(!this.renderable.isCurrentAnimation("walk")){
// 			this.renderable.setCurrentAnimation("walk");

// 		}
// 	}
// 	else{
// 		//if not, make it stand still.
// 		this.renderable.setCurrentAnimation("idle");
// 	}

// 	//updates the function to true
// 	this.body.update(delta);
// 	//this line of code is to update the animation
// 	this._super(me.Entity, "update", [delta]);
// 	return true;
// }

// });


// game.PlayerBaseEntity = me.Entity.extend({
// 		//initializes the function
// 	init : function(x, y, settings) {
// 		this._super(me.Entity, 'init', [x, y, {
// 			// makes the image of the tower appear.
// 			image: "tower",
// 			//width of the space created
// 			width: 100, 
// 			//height of the space created
// 			height: 100,
// 			//width for the tower
// 			spritewidth: "100", 
// 			//height for the tower
// 			spriteheight: "100",
// 			getShape: function(){
// 					//creates a rectangle by 64 by 64 
// 				// 0, 0 is the origin
// 				return(new me.Rect(0, 0, 100, 100)).toPolygon();
// 			}
// 		}]);
// 		//variables
// 		//tower has not been destroyed
// 		this.broken = false;
// 		this.health = 10;
// 		//even if were not on the screen with the tower,, it still updates
// 		this.alwaysUpdate = true;

// 		this.body.onCollision = this.onCollision.bind(this);

// 		this.type = "PlayerBaseEntity";
// 		// this animation makes the playerbase stay still.
// 		this.renderable.addAnimation("idle", [0]);
// 		//this one breaks the idle animation.
// 		this.renderable.addAnimation("broken", [1])
// 		//this one sets it back idle(standing still)
// 		this.renderable.setCurrentAnimation("idle");

// 	},
// 	//if the health is 0, the character dies
// 	update:function(delta){
// 		if(this.health<=0){
// 			this.broken = true;
// 			//when the player dies, the tower is set on fire. 
// 			this.renderable.setCurrentAnimation("broken");
// 		}
// 		this.body.update(delta);
// 		this._super(me.Entity, "update", [delta]);
// 		return true;
// 	},
// 	onCollision: function(){

// 	}

// });
// game.EnemyBaseEntity = me.Entity.extend({
// 		//initializes the function
// 	init : function(x, y, settings) {
// 		this._super(me.Entity, 'init', [x, y, {
// 			// makes the image of the tower appear.
// 			image: "tower",
// 			//width of the space created
// 			width: 100, 
// 			//height of the space created
// 			height: 100,
// 			//width for the tower
// 			spritewidth: "100", 
// 			//height for the tower
// 			spriteheight: "100",
// 			getShape: function(){
// 					//creates a rectangle by 64 by 64 
// 				// 0, 0 is the origin
// 				return(new me.Rect(0, 0, 100, 100)).toPolygon();
// 			}
// 		}]);
// 		//variables
// 		//tower has not been destroyed
// 		this.broken = false;
// 		this.health = 10;
// 		//even if were not on the screen with the tower,, it still updates
// 		this.alwaysUpdate = true;
// 		this.body.onCollision = this.onCollision.bind(this);

// 		this.type = "EnemyBaseEntity";
// 		// this animation makes the playerbase stay still.
// 		this.renderable.addAnimation("idle", [0]);
// 		//this one breaks the idle animation.
// 		this.renderable.addAnimation("broken", [1])
// 		//this one sets it back idle(standing still)
// 		this.renderable.setCurrentAnimation("idle");

// 	},
// 	//if the health is 0, the character dies
// 	update:function(delta){
// 		if(this.health<=0){
// 			this.broken = true;
// 			//when the player dies, the tower is set on fire. 
// 			this.renderable.setCurrentAnimation("broken");
// 		}
// 		this.body.update(delta);
// 		this._super(me.Entity, "update", [delta]);
// 		return true;
// 	},
// 	onCollision: function(){

// 	}

// });
// TODO
// game.PlayerEntity = me.Entity.extend({
// 	//initializes the function
// 	init: function(x, y, settings){
// 		this._super(me.Entity, 'init', [x, y, {
// 			// makes the image of the player appear.
// 			image: "player", 
// 			//width of the space created
// 			width: 64,
// 			//height of the space created
// 			height: 64,
// 			//width for the player
// 			spritewidth: "64",
// 			//height for the player
// 			spriteheight: "64",
// 			//function of the shape of the screen
// 			getShape: function(){
// 				//creates a rectangle by 64 by 64 
// 				// 0, 0 is the origin
// 				return(new me.Rect(0, 0, 64, 64)).toPolygon();
// 			}
// 		}]);
// 		//sets the speen of the player when it moves to the right 
// 		this.body.setVelocity( 5, 20);
// 		//
// 		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
// 		//adds animation to standing starting position
// 		this.renderable.addAnimation("idle", [78]);
// 		//adds animation to walking
// 		this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 122, 123, 124, 125], 80);
// 		//adds animation to non-moving position. 
// 		this.renderable.setCurrentAnimation("idle");

// 	},
// 	// updates the fucntion 
// update: function(delta){
// 	if(me.input.isKeyPressed("right")){
// 		//adds ro the position of my x by the velocity defined in
// 		//set velocity() and multiplying it by me.timer.tick.
// 		//me.timer.tick makes the movement look smooth
// 		this.body.vel.x += this.body.accel.x * me.timer.tick;
// 		//makes the character face the right
// 		this.flipX(true);
// 	}else{
// 		//for when the rigth arrow isnt clicked 
// 		this.body.vel.x = 0;
// 	}

// 	//if the button is pushed then the character will walk but if not it will execute the else code.
// 	if(this.body.vel.x !== 0 ){
// 		if(!this.renderable.isCurrentAnimation("walk")){
// 			this.renderable.setCurrentAnimation("walk");

// 		}
// 	}
// 	else{
// 		//if not, make it stand still.
// 		this.renderable.setCurrentAnimation("idle");
// 	}

// 	//updates the function to true
// 	this.body.update(delta);
// 	//this line of code is to update the animation
// 	this._super(me.Entity, "update", [delta]);
// 	return true;
// }

// });


// game.PlayerBaseEntity = me.Entity.extend({
// 		//initializes the function
// 	init : function(x, y, settings) {
// 		this._super(me.Entity, 'init', [x, y, {
// 			// makes the image of the tower appear.
// 			image: "tower",
// 			//width of the space created
// 			width: 100, 
// 			//height of the space created
// 			height: 100,
// 			//width for the tower
// 			spritewidth: "100", 
// 			//height for the tower
// 			spriteheight: "100",
// 			getShape: function(){
// 					//creates a rectangle by 64 by 64 
// 				// 0, 0 is the origin
// 				return(new me.Rect(0, 0, 100, 100)).toPolygon();
// 			}
// 		}]);
// 		//variables
// 		//tower has not been destroyed
// 		this.broken = false;
// 		this.health = 10;
// 		//even if were not on the screen with the tower,, it still updates
// 		this.alwaysUpdate = true;

// 		this.body.onCollision = this.onCollision.bind(this);

// 		this.type = "PlayerBaseEntity";
// 		// this animation makes the playerbase stay still.
// 		this.renderable.addAnimation("idle", [0]);
// 		//this one breaks the idle animation.
// 		this.renderable.addAnimation("broken", [1])
// 		//this one sets it back idle(standing still)
// 		this.renderable.setCurrentAnimation("idle");

// 	},
// 	//if the health is 0, the character dies
// 	update:function(delta){
// 		if(this.health<=0){
// 			this.broken = true;
// 			//when the player dies, the tower is set on fire. 
// 			this.renderable.setCurrentAnimation("broken");
// 		}
// 		this.body.update(delta);
// 		this._super(me.Entity, "update", [delta]);
// 		return true;
// 	},
// 	onCollision: function(){

// 	}

// });
// game.EnemyBaseEntity = me.Entity.extend({
// 		//initializes the function
// 	init : function(x, y, settings) {
// 		this._super(me.Entity, 'init', [x, y, {
// 			// makes the image of the tower appear.
// 			image: "tower",
// 			//width of the space created
// 			width: 100, 
// 			//height of the space created
// 			height: 100,
// 			//width for the tower
// 			spritewidth: "100", 
// 			//height for the tower
// 			spriteheight: "100",
// 			getShape: function(){
// 					//creates a rectangle by 64 by 64 
// 				// 0, 0 is the origin
// 				return(new me.Rect(0, 0, 100, 100)).toPolygon();
// 			}
// 		}]);
// 		//variables
// 		//tower has not been destroyed
// 		this.broken = false;
// 		this.health = 10;
// 		//even if were not on the screen with the tower,, it still updates
// 		this.alwaysUpdate = true;
// 		this.body.onCollision = this.onCollision.bind(this);

// 		this.type = "EnemyBaseEntity";
// 		// this animation makes the playerbase stay still.
// 		this.renderable.addAnimation("idle", [0]);
// 		//this one breaks the idle animation.
// 		this.renderable.addAnimation("broken", [1])
// 		//this one sets it back idle(standing still)
// 		this.renderable.setCurrentAnimation("idle");

// 	},
// 	//if the health is 0, the character dies
// 	update:function(delta){
// 		if(this.health<=0){
// 			this.broken = true;
// 			//when the player dies, the tower is set on fire. 
// 			this.renderable.setCurrentAnimation("broken");
// 		}
// 		this.body.update(delta);
// 		this._super(me.Entity, "update", [delta]);
// 		return true;
// 	},
// 	onCollision: function(){

// 	}

// });
// TODO
game.PlayerEntity = me.Entity.extend({
    //initializes the function 
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                //makes the image of the player appear
                image: "player",
                //the width of the space created
                width: 64,
                //the height of the space created
                height: 64,
                //height for the player
                spriteheight: "64",
                //width for the player
                spritewidth: "64",
                //function of the shape of the screen 
                getShape: function() {
                    //creates a rectangle of 64 by 64 so the player can go inside
                    //0 , 0 is the origin
                    return(new me.Rect(0, 0, 64, 64)).toPolygon();
                }
            }]);
        //it sets the speed of the player when it moves to the right
        //y location changes
        //it moved down to the player
        this.body.setVelocity(5, 20);
        //keeps track of which direction your character is going
        this.facing = "right";
        //checks the time for the game
        this.now = new Date().getTime();
        this.lastHit = this.now;
        //stop the player from hitting over and over again
        this.lastAttack = new Date().getTime();
        //
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
        //adds animation to standing starting position
        this.renderable.addAnimation("idle", [78]);
        //adds animation to walking 
        this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 122, 123, 124, 125], 80);
        //animation for character attack
        this.renderable.addAnimation("attack", [65, 66, 67, 68, 69, 70, 71, 72], 80);
        //adds animation to non-moving position 
        this.renderable.setCurrentAnimation("idle");

    },
    //updates the function
    //whole set for just the x-axis
    update: function(delta) {
        //keeps it up to date
        this.now = new Date().getTime();
        //moves the player right
        if (me.input.isKeyPressed("right")) {
            //sets the position of my x by adding the velocity defined above in setVelocity and multiplying it by me.timer.tick
            //me.timer.tick makes the movement look smooth 
            this.body.vel.x += this.body.accel.x * me.timer.tick;
            //keeps track of which direction your character is going
            this.facing = "right";
            //makes the charcter face to right 
            this.flipX(true);

        }
        //moves the player left
        else if (me.input.isKeyPressed("left")) {
            //keeps track of which direction your character is going
            this.facing = "left";
            this.body.vel.x -= this.body.accel.x * me.timer.tick;
            this.flipX(false);
        }
        else {
            //for when the righ arrow isnt clicked
            this.body.vel.x = 0;
        }
        //set for the y-axis
        //so the player can go right or left and still jump
        //no double jumping
        if (me.input.isKeyPressed("jump") && !this.body.jumping && !this.body.falling) {
            this.body.jumping = true;
            this.body.vel.y -= this.body.accel.y * me.timer.tick;
            //this plays soud effects when jumping
            me.audio.play("jump");
        }


        if (me.input.isKeyPressed("attack")) {
            if (!this.renderable.isCurrentAnimation("attack")) {
                console.log(!this.renderable.isCurrentAnimation("attack"));
                //sets the current animation to attck and once that is over goes back to idle animation 
                this.renderable.setCurrentAnimation("attack", "idle");
                //makes it so that the next time we start this sequence we begin from the first animation not whenever we left off when we switched to another animation
                this.renderable.setAnimationFrame();
            }
        }


        //if the button is pushed then it will walk but it not it will execute the else code
        else if (this.body.vel.x !== 0 && !this.renderable.isCurrentAnimation("attack")) {
            if (!this.renderable.isCurrentAnimation("walk")) {
                this.renderable.setCurrentAnimation("walk");
            }
        } else if (!this.renderable.isCurrentAnimation("attack")) {
            //if not, make it stand still
            this.renderable.setCurrentAnimation("idle");
        }
        //checks for collisions 
        me.collision.check(this, true, this.collideHandler.bind(this), true);

        //updates the function to true
        this.body.update(delta);
        //updates the animation
        this._super(me.Entity, "update", [delta]);
        return true;

    },
    //new function that is passing the parameter response 
    //holds info about collision
    collideHandler: function(response) {
        if (response.b.type === 'EnemyBaseEntity') {
            //the y difference between the players y position and the base y position
            //keep track of the position of both objects 
            var ydif = this.pos.y - response.b.pos.y;
            var xdif = this.pos.x - response.b.pos.x;
            //makes the player jump on top of the tower
            if (ydif < -40 && xdif < 70 && xdif > -35) {
                this.body.falling = false;
                this.body.vel.y = -1
            }
            //stops the player on the left side of the tower 
            //prevent from over lapping
            else if (xdif > -35 && this.facing === 'right' && (xdif < 0)) {
                //stop the player from moving
                this.body.vel.x = 0;
                //move player backwards 
                this.pos.x = this.pos.x - 1;
            }
            //stops the player on the right side of the tower
            //prevent from over lapping
            else if (xdif < 70 && this.facing === 'left' && xdif > 0) {
                //stop the player from moving
                this.body.vel.x = 0;
                //moves player forward
                this.pos.x = this.pos.x + 1;
            }

            if (this.renderable.isCurrentAnimation("attack") && this.now - this.lastHit >= 1000) {
                //check when it is called
                console.log("tower Hit");
                this.lastHit = this.now;
                //call the losehealth function
                response.b.loseHealth();
            }
        }
    }});

game.PlayerBaseEntity = me.Entity.extend({
    //initializes the function
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                //makes the image of the tower appear
                image: "tower",
                //the width of the space created
                width: 100,
                //the height of the space created
                height: 100,
                //width for the tower
                spritewidth: "100",
                //height for the tower
                spriteheight: "100",
                //function of the shape of the screen 
                getShape: function() {
                    //the position of the enemy base
                    return(new me.Rect(0, 0, 100, 70)).toPolygon();
                }

            }]);
        //variables
        //tower has not been destroyed
        this.broken = false;
        this.health = 10;
        //even if were not on the screen with the tower , it still updates
        this.alwaysUpdate = true;
        this.body.onCollision = this.onCollision.bind(this);
        this.type = "PlayerBase";
        //this animation makes the playerbase stay still
        this.renderable.addAnimation("idle", [0]);
        //this one breaks the idle animation
        this.renderable.addAnimation("broken", [1]);
        //this one sets it back to idle 
        this.renderable.setCurrentAnimation("idle");
    },
    //if the health is 0, the character dies
    update: function(delta) {
        if (this.health <= 0) {
            this.broken = true;
            //when the player dies the tower is set on fire
            this.renderable.setCurrentAnimation("broken");
        }
        this.body.update(delta);
        this._super(me.Entity, "update", [delta]);
        return true;
    },
    loseHealth: function(damage) {
        this.health = this.health - damage;
    },
    onCollision: function() {

    }
});


game.EnemyBaseEntity = me.Entity.extend({
    //initializes the function
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                //makes the image of the tower appear
                image: "tower",
                //the width of the space created
                width: 100,
                //the height of the space created
                height: 100,
                //width for the tower
                spritewidth: "100",
                //height for the tower
                spriteheight: "100",
                //function of the shape of the screen 
                getShape: function() {
                    //the position of the enemy base 
                    return(new me.Rect(0, 0, 100, 70)).toPolygon();
                }

            }]);
        //variables
        //tower has not been destroyed
        this.broken = false;
        this.health = 10;
        //even if were not on the screen with the tower , it still updates
        this.alwaysUpdate = true;
        this.body.onCollision = this.onCollision.bind(this);
        this.type = "EnemyBaseEntity";
        //this animation makes the playerbase stay still
        this.renderable.addAnimation("idle", [0]);
        //this one breaks the idle animation
        this.renderable.addAnimation("broken", [1]);
        //this one sets it back to idle 
        this.renderable.setCurrentAnimation("idle");
    },
    //if the health is 0, the character dies
    update: function(delta) {
        if (this.health <= 0) {
            this.broken = true;
            //when the player dies the tower is set on fire
            this.renderable.setCurrentAnimation("broken");
        }
        this.body.update(delta);
        this._super(me.Entity, "update", [delta]);
        return true;
    },
    onCollision: function() {

    },
    loseHealth: function() {
        //the player has to attack the tower 10 times before it breaks
        this.health--;
    }
});

game.EnemyCreep = me.Entity.extend({
    //initializes the function
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                //makes the image of the brain monster appear
                image: "creep1",
                //the width of the space created
                width: 32,
                //the height of the space created
                height: 64,
                //width for the brain monster 
                spritewidth: "32",
                //height for the brain monster
                spriteheight: "64",
                //function of the shape of the screen 
                getShape: function() {
                    //the posiiton of the brain monster
                    //0 , 0 is the origin
                    return(new me.Rect(0, 0, 32, 64)).toPolygon();
                }
            }]);

        this.health = 10;
        //to always update
        this.alwaysUpdate = true;
        //this lets us know if the enemy is currently attacking
        this.attacking = false;
        //keeps track of when our creep last attacked anything
        this.lastAttacking = new Date().getTime();
        //keeps track of the last time our creep hit anything
        this.lastHit = new Date().getTime();
        this.now = new Date().getTime();
        //a velocity to move him with
        this.body.setVelocity(3, 20);
        this.type = "EnemyCreep";
        //animation for walking
        this.renderable.addAnimation("walk", [3, 4, 5], 80);
        this.renderable.setCurrentAnimation("walk");
    },
    
    update: function(delta) {
        this.now = new Date().getTime();


        this.body.vel.x -= this.body.accel.x * me.timer.tick;
        me.collision.check(this, true, this.collideHandler.bind(this), true);
        this.body.update(delta);


        this._super(me.Entity, "update", [delta]);
        return true;
    },

    collideHandler: function(response) {
        if (response.b.type === 'PlayerBase') {
            this.attacking = true;
            //this.lastAttacking=true.now;
            this.body.vel.x = 0;
            //keeps moving the creep to the right to maintain its position
            this.pos.x = this.pos.x + 1;
            //checks that it has been at least one second since this creep hit a base
            if ((this.now - this.lastHit >= 1000)) {
                //updates the lasthit timer
                this.lastHit = this.now;
                //makes the player base call its loseHealth function and passes it a damage of 1
                response.b.loseHealth(1);
            }
        }
    }
});

game.GameManager = Object.extend({
    //initializes the function
    init: function(x, y, settings) {
        //the time that we want to use
        this.now = new Date().getTime();
        //keep track of the last time we made a creep happen
        this.lastCreep = new Date().getTime();
        //makes sure it is always updating
        this.alwaysUpdate = true;
    },
    //updates the function
    update: function() {
        //keep track of our timer
        this.now = new Date().getTime();
        //keeps track on whether we should be making creeps
        //checks to see if we have a multiple of 10

        if (Math.round(this.now / 1000) % 10 === 0 && (this.now - this.lastCreep >= 1000)) {
            this.lastCreep = this.now;
            //creates a creep
            var creepe = me.pool.pull("EnemyCreep", 1000, 0, {});
            //adds the creep to the world
            me.game.world.addChild(creepe, 5);
        }

        return true;
    }});