game.EnemyHero = me.Entity.extend({
	//initializes the function
	init : function(x, y, settings){
			this._super(me.Entity, 'init', [x, y, {
				 //makes the image of the brain monster appear
				image: "hero",
				//the width of the space created
				width: 64,
				//the height of the space created
				height: 64,
				 //width for the brain monster 
				spritewidth: "64",
				//height for the brain monster
				spriteheight: "64",
				 //function of the shape of the screen 
				 	 //the posiiton of the brain monster
                    //0 , 0 is the origin
				getShape: function(){
					return (new me.Rect(0, 0, 64, 64)).toPolygon();
			 }

		}]);

			
			this.body.setVelocity(3, 19);

			this.type = "EnemyHero";

			this.renderable.addAnimation("walk", [144, 145, 146, 147, 148, 149, 150, 151, 152], 80);
			this.renderable.setCurrentAnimation("walk");

	},


	update: function(delta){

		this.body.vel.x -= this.body.accel.x * me.timer.tick;

		this.flipX(true);
		
		this.body.update(delta);

		this._super(me.Entity, "update", [delta]);
		return true;
	}

});