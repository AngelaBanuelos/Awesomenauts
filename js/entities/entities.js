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
	if(this.body.vel.x !==0 ){
	if(!this.renderable.isCurrentAnimation("walk")){
		this.renderable.setCurrentAnimation("walk");

	}else{
		//if not, make it stand still.
		this.renderable.setCurrentAnimation("idle");
	}
}

	//updates the function to true
	this.body.update(delta);
	//this line of code is to update the animation
	this._super(me.Entity, "update", [delta]);
	return true;
}

});