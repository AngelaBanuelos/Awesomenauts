


game.ExperienceManager = Object.extend({
    init: function(x, y, settings){
        //makes sure it is always updating
        this.alwaysUpdate = true;
        //sets gameOver to false
        this.gameover = false;
    },
    update: function(){
        //if you win the game is not over
        if(game.data.win === true && !this.gameover){
            //sets gameOver to true
           this.gameOver(true);
        //you get no points 
        }else if(game.data.win === false && !this.gameover){
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
            this.gameover = true;
            //saves your experience 
            me.save.exp = game.data.exp;
            console.log("experience " + me.save.exp);
            //For testing purpose only 
            me.save.exp2 = 4;

        }
});

