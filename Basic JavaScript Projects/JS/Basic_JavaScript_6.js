function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function season_Function() {
    var Lenght, can_play;
    Lenght = document.getElementById("Height").value;
    Can_play = (Height < 8) ? "Not enough":"Enough";
    document.getElementById("Play").innerHTML = Can_play + " to play.";
}

function Baseball(Team, Roster, Year, Rotation) {
    this.Baseball_Team = Team;
    this.Baseball_Roster = Roster;
    this.Baseball_Year = Year;
    this.Baseball_Rotation = Rotation;
}

var Cora = new Baseball("Red sox", "East_Division", 2020, "5 pitchers");
var Boone = new Baseball("Yankees", "East_Division", 2020, "4 pitchers");
var Mancini = new Baseball("Baltimore", "East_Division", 2020, "6 pitchers");
function baseball_Function() {
    document.getElementById("2020_season").innerHTML =
    "Boone will manage the Yankees" + Boone.Baseball_Team + "2020" + Boone.Baseball_Rotation +
    "East_Division";
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 15;
        function Plus_one() {Starting_point += 5;}
        Plus_one();
        return Starting_point;
    }
}