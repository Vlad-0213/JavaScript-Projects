function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}


function isNan() {
    document.getElementById("isN").innerHTML = isNaN('This is a String');
}

function big_Numbers() {
    document.write(3E459)
    document.getElementById("b_Numbers").innerHTML = big_Numbers;
}


function neg_Infinity() {
    document.write(-5E898)
    document.getElementById("neg_In").innerHTML =neg_Infinity;
}

function less_Function() {
    document.write(15< 5)
    document.getElementById("less_Func").innerHTML =less_Function;
}

function true_Function() {
    document.write(22 > 8)
    document.getElementById("true_Func").innerHTML =true_Function;
}


function number_Function() {
    document.write("15" + 8)
    document.getElementById("numb_Func").innerHTML =number_Function;
}

function equals_Function() {
    document.write(15 == 15)
    document.getElementById("Equals").innerHTML =Equals;
}

function notequal_Function() {
    document.write(5 == 17)
    document.getElementById("notE").innerHTML =notequals_Function;
}

function X_Function() {
    X = 20;
    Y = 20
    document.write(X === Y)
    document.getElementById("x_Func").innerHTML =X_Function;
}

function y_Function() {
    X = 85;
    Y = "85";
    document.write(X === Y)
    document.getElementById("y_Func").innerHTML =y_Function;
}

function v_Function() {
    V = "Team Sport";
    z = "Team Sport";
    document.write(V === Z)
    document.getElementById("v_Func").innerHTML =v_Function;
}

function w_Function() {
    document.write(10 > 7 && 15 > 2)
    document.getElementById("w_Func").innerHTML =w_Function;
}

function greater_Function() {
    document.write(7 > 10 && 15 > 2)
    document.getElementById("greater_Func").innerHTML =greater_Function;
}

function than_Function() {
    document.write(7 > 10 || 15 > 2)
    document.getElementById("than_Func").innerHTML =than_Function;
}

function greaterthan_Function() {
    document.write(7 > 10 || 15 > 30)
    document.getElementById("gt_Func").innerHTML =greaterthan_Function;
}

function not_Function() {
    document.write(40 > 10)
    document.getElementById("not_Function").innerHTML =not_Function;
}
    