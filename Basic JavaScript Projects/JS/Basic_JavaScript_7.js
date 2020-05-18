var X = 30;
function Add_numbers_1() {
    document.write(50 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_1() {
    var X = 20;
    console.log(25 + X);
}
function Add_numbers_2() {
    console.log(X + 200);
}
Add_numbers_1();
Add_numbers_2();

function get_Date(){
    if (new Date().getHours() < 20){
    document.getElementById("Game").innerHTML= "Game start time is?";
    }
}

function GameTime_Function() {
    var GameTime, Can_start;
    GameTime = document.getElementById("Game_Time").value;
    Can_start = (GameTime < 8) ? "You can play":"You are too late to play";
    document.getElementById("Ride").innerHTML = Can_start + " to play.";
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 7 == Time > 0) {
        Reply = "It is not game time yet.";
    }
    else if (Time > 7 == Time < 8) {
        Reply = "It is game time.";
    }
    else {
        Reply = "It is game time.";
    }
    document.getElementById("Time_of_Game").innerHTML = Reply;
}