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
        //added global variable for enemyCreepHealth
        this.health = game.data.enemyCreepHealth;
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

    loseHealth: function(damage) {
    	this.health = this.health - damage;
    },

    
    update: function(delta) {
    	//if the health is 0
    	if(this.health <= 0){
    		//console.log("removing the creep");
    		//this line removes the creep.
    		me.game.world.removeChild(this);
    	}
    	//
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
                //added the global variable for enemyCreepAttack
                response.b.loseHealth(game.data.enemyCreepAttack);
            }
        }else if (response.b.type==='PlayerEntity'){
        	var xdif = this.pos.x - response.b.pos.x;

        	this.attacking = true;
            //this.lastAttacking=true.now;
           
            //keeps moving the creep to the right to maintain its position
           	if(xdif>0){
           		 //keeps moving the creep to the right to maintain its position
         	 this.pos.x = this.pos.x + 1;
         	  this.body.vel.x = 0;
           	}
            //checks that it has been at least one second since this creep hits something
            if ((this.now - this.lastHit >= 1000) && xdif>0) {
            	console.log("attacking player");
                //updates the lasthit timer
                this.lastHit = this.now;
                //makes the player call its loseHealth function and passes it a damage of 1
                //added the global variable for enemyCreepAttack.
                response.b.loseHealth(game.data.enemyCreepAttack);
            }
        }

    }
});