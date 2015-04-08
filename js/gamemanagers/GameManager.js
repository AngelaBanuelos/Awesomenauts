//removes the player and resets him if he dies
//adds gold
//manages creeps
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
           alert("YOU WIN!");
        //you get no points 
        }else if(game.data.win === false && !this.gameover){
            //it makes the game be over
            this.gameOver(false);
            alert("YOU LOSE!");
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
//makes the register key workand execute the action its suppose to do
            $ajax({
                type: "POST",
                url: "php/controller/save-user.php",
                data:  {
                    exp: game.data.exp, 
                    exp1: game.data.exp1, 
                    exp2: game.data.exp2, 
                    exp3: game.data.exp3, 
                    exp4: game.data.exp4, 
                },

                dataType: "text"
            })
            //if the register works then this code will execute
                .success(function(response) {
                    if(response==="true") {
                        me.state.change(me.state.MENU);
                    }else{
                        alert(response);
                    }
                })
                //if the register doesnt work this code will execute
                    .fail(function(response) {
                        //if it doesnt work this will be printed
                        alert("Fail");
             });

        }
});

