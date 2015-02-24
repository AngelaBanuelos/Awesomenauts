game.GameManager = Object.extend({
    //initializes the function
    init: function(x, y, settings) {
        //the time that we want to use
        this.now = new Date().getTime();
        //keep track of the last time we made a creep happen
        this.lastCreep = new Date().getTime();
        //doesnt pause the game
        this.paused = false;
        //makes sure it is always updating
        this.alwaysUpdate = true;
    },
    //updates the function
    update: function() {
        //keep track of our timer
        this.now = new Date().getTime();
        //keeps track on whether we should be making creeps
        //checks to see if we have a multiple of 10
//if the playaer is dead,
if(game.data.player.dead){
    //remove the player
    me.game.world.removeChild(game.data.player);
    //reset the players life
    me.state.current().resetPlayer(10, 0);
}
 if (Math.round(this.now / 1000) % 20 === 0 && (this.now - this.lastCreep >= 1000)) {
            //add 1 peice of gold 
           game.data.gold += 1;
           //shows the number of gold in the console log
           console.log("Current gold: " + game.data.gold);
        }



        if (Math.round(this.now / 1000) % 10 === 0 && (this.now - this.lastCreep >= 1000)) {
            this.lastCreep = this.now;
            //creates a creep
            var creepe = me.pool.pull("EnemyCreep", 1000, 0, {});
            //adds the creep to the world
            me.game.world.addChild(creepe, 5);
             var creepe2 = me.pool.pull("Player2", 200, 0, {});
            //adds the creep to the world
            me.game.world.addChild(creepe2, 5);
        }

        return true;
    }});