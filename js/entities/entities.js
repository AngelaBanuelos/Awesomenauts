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
		this.body.setVelocity(5, 20);

		this.renderable.addAnimation("idle", [78]);
		this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 122, 123, 124, 125], 80);

		this.renderable.setCurrentAnimation("idle");

	},
	// updates the fucntion 
update: function(delta){
	if(me.input.isKeyPressed("right")){
		//adds ro the position of my x by the velocity defined in
		//set velocity() and multiplying it by me.timer.tick.
		//me.timer.tick makes the movement look smooth
		this.body.vel.x += this.body.accel.x * me.timer.tick;
		this.flipX(true);
	}else{
		//for when the rigth arrow isnt clicked 
		this.body.vel.x = 0;
	}
	if(this.body.vel.x !==0 ){
	if(!this.renderable.isCurrentAnimation("walk")){
		this.renderable.setCurrentAnimation("walk");

	}else{
		this.renderable.setCurrentAnimation("idle");
	}
}

	//updates the function to true
	this.body.update(delta);

	this._super(me.Entity, "update", [delta]);
	return true;
}

});