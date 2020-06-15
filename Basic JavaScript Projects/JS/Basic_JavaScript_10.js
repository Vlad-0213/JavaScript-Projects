function Count_To_Ten() {
    var Digit ="";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting").innerHTML = Digit;
}

function myFunction() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("length").innerHTML = n;
  }   
  
var Instruments = ["Ball", "Bat", "Glove", "Bases", "Uniform"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function constant_Function() {
    const Baseball_Gear = {type:"Glove", brand:"Wilson", color:"Brown"};
    Baseball_Gear.color = "black";
    Baseball_Gear.price = "$250";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Baseball_Gear.type + " was " + Baseball_Gear.price;
    
    }

    var X = 90;
    document.write(X);
    {
        let X = 45;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);

    var X = 90;
    document.write(X);
    {
        var X = 45;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);

    let baseball = {
        team: "Dodgers",
        league: "National league",
        year: "2020",
        color: "Blue",
        description: function() {
            return "The team is " + this.year +" "+ this.color +" "+ this.team +" "+ this.league +".";
            }
    };
    document.getElementById("baseball_Object").innerHTML = baseball.description();

    function break_Function() {
        var text = "";
        var i;
        for (i = 5; i < 8; i++) {
            if (i === 8) {
                break;
            }
            text += "The number is " + i + "<br>";
           }
           document.getElementById("break").innerHTML = text;
    }
