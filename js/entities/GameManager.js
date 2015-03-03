game.GameTimerManager = Object.extend({
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
        this.goldTimerCheck();
        this.creepTimerCheck();
        
        return true;
    },
    goldTimerCheck: function(){
        if (Math.round(this.now / 1000) % 20 === 0 && (this.now - this.lastCreep >= 1000)) {
            //add 1 peice of gold 
           game.data.gold += 1;
           //shows the number of gold in the console log
           console.log("Current gold: " + game.data.gold);
        }

    },
    creepTimerCheck: function(){
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

    }
});
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


game.ExperienceManager = Object.extend({
    init: function(x, y, settings){
        //makes sure it is always updating
        this.alwaysUpdate = true;
        //sets gameOver to false
        this.gameOver = false;
    },
    update: function(){
        //if you win the game is not over
        if(game.data.win === true && !this.gameOver){
            //sets gameOver to true
           this.gameOver(true);
        //you get no points 
        }else if(game.data.win === false && !this.gameOver){
            //it makes the game be over
            this.gameOver(false);
        }
        //makes the code run
        return true;
        }, 
        //made a gameOver function
        gameOver: function(win){
            // if you win,
            if(win){
            //adds 10 points to experience variable
            game.data.exp += 10;
            }
            // if else you gain 1 point
            else{
            //adds 1 point to experience variable
            game.data.exp += 1;  
            }
            // it makes the game be over
            this.gameOver = true;
            //saves your experience 
            me.save.exp = game.data.exp;
        }
});



