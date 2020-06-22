function Player_Function() {
    var Player_Output;
    var Players = document.getElementById("Player_Input").Value;
    var Players_String = "is a great color!";
    switch(Players) {
        case "Judge":
            Player_Output = "Judge" + Player_String;
        break;
        case "Trout":
            Player_Output = "Trout" + Player_String;
        break;
        case "Yellich":
            Player_Output = "Yellich" + Player_String;
        break;
        case "Bellinger":
            Player_Output = "Bellinger" + Player_String;
        break;
        case "Cole":
            Player_Output = "Cole" + Player_String;
        break;
    }
    document.getElementById("Output").innerHTML = Player_Output;
}

function baseball_season_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "Did it change?";
}

var c = document.getElementById("ID_season");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("baseball season",12,25);
var grd = ctx.createLinearGradient(0,0,150,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(10,15,130,50);
