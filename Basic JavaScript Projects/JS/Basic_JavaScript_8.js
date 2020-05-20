function full_Sentence() {
    var part_1 = "The Cubs won";
    var part_2 = "the world series";
    var part_3 = "for the first time";
    var part_4 = "in 108 years.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var sentence = "Two runs batted in was enough for Zobrist to win the WS MVP.";
    var section = sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = section;
}

function myFunction() {
    var str = "Baseball is back!";
    var res = str.toUpperCase();
    document.getElementById("baseball").innerHTML = res;
}

function searchFunction() {
    var str = "Visit your local ball park!";
    var n = str.search("twentytwentyseason");
    document.getElementById("season").innerHTML = n;
}

function string_Method() {
    var X =2020;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12345.123456789123;
    document.getElementById("Precision").innerHTML =X.toPrecision(15)
}

function fixed_Method() {
    var num = 6.67589;
    var n = num.toFixed(3);
    document.getElementById("fixed").innerHTML = n;
}

function value_Method() {
    var str = "Hello baseball fans!";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
}