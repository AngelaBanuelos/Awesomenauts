game.PlayerEntity = me.Entity.extend({
	//initializes the function
	init: function(x, y, settings){
		this._super(me.Entity, 'init', [x, y, {
			// makes the image of the player appear.
			image: "player", 
			//width of the space created
			width: 64,
			//height of the space created
			height: 64,
			//width for the player
			spritewidth: "64",
			//height for the player
			spriteheight: "64",
			//function of the shape of the screen
			getShape: function(){
				//creates a rectangle by 64 by 64 
				// 0, 0 is the origin
				return(new me.Rect(0, 0, 64, 64)).toPolygon();
			}
		}]);
		//sets the speen of the player when it moves to the right 
		this.body.setVelocity( 5, 20);
		//
		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
		//adds animation to standing starting position
		this.renderable.addAnimation("idle", [78]);
		//adds animation to walking
		this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 122, 123, 124, 125], 80);
		//adds animation to non-moving position. 
		this.renderable.setCurrentAnimation("idle");

	},
	// updates the fucntion 
update: function(delta){
	if(me.input.isKeyPressed("right")){
		//adds ro the position of my x by the velocity defined in
		//set velocity() and multiplying it by me.timer.tick.
		//me.timer.tick makes the movement look smooth
		this.body.vel.x += this.body.accel.x * me.timer.tick;
		//makes the character face the right
		this.flipX(true);
	}else{
		//for when the rigth arrow isnt clicked 
		this.body.vel.x = 0;
	}

	//if the button is pushed then the character will walk but if not it will execute the else code.
	if(this.body.vel.x !== 0 ){
		if(!this.renderable.isCurrentAnimation("walk")){
			this.renderable.setCurrentAnimation("walk");

		}
	}
	else{
		//if not, make it stand still.
		this.renderable.setCurrentAnimation("idle");
	}

	//updates the function to true
	this.body.update(delta);
	//this line of code is to update the animation
	this._super(me.Entity, "update", [delta]);
	return true;
}

});


game.PlayerBaseEntity = me.Entity.extend({
		//initializes the function
	init : function(x, y, settings) {
		this._super(me.Entity, 'init', [x, y, {
			// makes the image of the tower appear.
			image: "tower",
			//width of the space created
			width: 100, 
			//height of the space created
			height: 100,
			//width for the tower
			spritewidth: "100", 
			//height for the tower
			spriteheight: "100",
			getShape: function(){
					//creates a rectangle by 64 by 64 
				// 0, 0 is the origin
				return(new me.Rect(0, 0, 100, 100)).toPolygon();
			}
		}]);
		//variables
		//tower has not been destroyed
		this.broken = false;
		this.health = 10;
		//even if were not on the screen with the tower,, it still updates
		this.alwaysUpdate = true;

		this.body.onCollision = this.onCollision.bind(this);

		this.type = "PlayerBaseEntity";
		// this animation makes the playerbase stay still.
		this.renderable.addAnimation("idle", [0]);
		//this one breaks the idle animation.
		this.renderable.addAnimation("broken", [1])
		//this one sets it back idle(standing still)
		this.renderable.setCurrentAnimation("idle");

	},
	//if the health is 0, the character dies
	update:function(delta){
		if(this.health<=0){
			this.broken = true;
			//when the player dies, the tower is set on fire. 
			this.renderable.setCurrentAnimation("broken");
		}
		this.body.update(delta);
		this._super(me.Entity, "update", [delta]);
		return true;
	},
	onCollision: function(){

	}

});
game.EnemyBaseEntity = me.Entity.extend({
		//initializes the function
	init : function(x, y, settings) {
		this._super(me.Entity, 'init', [x, y, {
			// makes the image of the tower appear.
			image: "tower",
			//width of the space created
			width: 100, 
			//height of the space created
			height: 100,
			//width for the tower
			spritewidth: "100", 
			//height for the tower
			spriteheight: "100",
			getShape: function(){
					//creates a rectangle by 64 by 64 
				// 0, 0 is the origin
				return(new me.Rect(0, 0, 100, 100)).toPolygon();
			}
		}]);
		//variables
		//tower has not been destroyed
		this.broken = false;
		this.health = 10;
		//even if were not on the screen with the tower,, it still updates
		this.alwaysUpdate = true;
		this.body.onCollision = this.onCollision.bind(this);

		this.type = "EnemyBaseEntity";
		// this animation makes the playerbase stay still.
		this.renderable.addAnimation("idle", [0]);
		//this one breaks the idle animation.
		this.renderable.addAnimation("broken", [1])
		//this one sets it back idle(standing still)
		this.renderable.setCurrentAnimation("idle");

	},
	//if the health is 0, the character dies
	update:function(delta){
		if(this.health<=0){
			this.broken = true;
			//when the player dies, the tower is set on fire. 
			this.renderable.setCurrentAnimation("broken");
		}
		this.body.update(delta);
		this._super(me.Entity, "update", [delta]);
		return true;
	},
	onCollision: function(){

	}

});