function addition_Function() {
    var addition = 5 + 5;
    document.getElementById("Math") .innerHTML = "5 + 5 = " + addition;
}

function subtraction_Function() {
    var subtraction = 6 - 3;
    document.getElementById("Math") .innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() {
    var simple_Math = 7 * 10;
    document.getElementById("Math") .innerHTML = "7 X 10 = " + simple_Math;
}

function division() {
    var simple_Math = 50 / 5;
    document.getElementById("Math") .innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (2 + 2) * 10 / 2-5;
    document.getElementById("Math") .innerHTML = "2 plus 2, multiplied by 10,
    divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_operator () {
    var simple_Math = 50 % 5;
    document.getElementById("Math") .innerHTML = "When you divide 50 by 5  you have a
    remainder of: " +  simple_Math;
}

function nagation_operator() {
    var x = 10;
    document.getElementById("Math") .innerHTML = -XMLDocument;
}

var X = 7;
X++;
document.write(X);

window.alert(Math.random() * 100);

function myFunction() {
    document.getElementById("demo") .innerHTML = Math.abs(-7.25);
}

function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
    }
