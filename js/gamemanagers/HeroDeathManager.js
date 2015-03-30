game.HeroDeathManager = Object.extend({
    init: function(x, y, settings){
        //makes sure it is always updating
        this.alwaysUpdate = true;

    },
    update: function(){
         //keeps track on whether we should be making creeps
        //checks to see if we have a multiple of 10
//if the playaer is dead,
if(game.data.player.dead){
    //remove the player
    me.game.world.removeChild(game.data.player);
    //reset the players life
    me.state.current().resetPlayer(10, 0);
}
    //makes the code run
    return true;
    }
});