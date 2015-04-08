game.SpearThrow = me.Entity.extend({
	init: function(x, y, settings, facing) {
		this._super(me.Entity, 'init', [x, y, {
			//loads our image creep 1 from our resources
			image: "spear",
			//sets its width
			width: 48,
			//sets its height
			height: 48,
			//stes its spritewidth
			spritewidth: "48",
			//sets its spriteheight
			spriteheight: "48",
			getShape: function() {
				//0, 0 is the origin
				return (new me.Rect(0, 0, 48 )).toPolygon();
			}
		}]);
		// to always move on screen
		this.alwaysUpdate = true;
		// velocity to start
		this.body.setVelocity(8, 0);
		this.attack = game.data.ability3*3;
		// enemey creep 
		this.type = "spear";
		this.facing = "facing";



	},

	update: function(delta) {
		if(this.facing === "left") { 
			this.body.vel.x -= this.body.accel.x * me.timer.tick;
	}else {
		//has player move faster
		this.body.vel.x += this.body.accel.x * me.timer.tick;
	}
	//checks for collision with our player
	//if htier are collisions it passes it to the collide handler
		me.collision.check(this, true, this.collideHandler.bind(this), true);

		// update the creep
		this.body.update(delta);

		// this is to update our animation
		this._super(me.Entity, "update", [delta]);
		return true;
	},
	collideHandler: function(response) {
		if(response.b.type==='EnemyBase' || response.b.type==='EnemyCreep') {
				//makes the plsyer base call its loose health function and pass it a damge of 1
				response.b.loseHealth(this.attack);
				me.game.world.removeChild(this);
			}
		}
});