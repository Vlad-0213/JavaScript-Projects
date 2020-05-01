function My_First_Function() {
    var str = "This text is yellow!";
    var result = str.fontcolor("yellow");
    document.getElementById("Yellow_Text").innerHTML = result;

}

function myfunction() {
    var sentence = "I am learning";
    sentence += "a lot from this book!";
    document.getElementById("Concatenate") .innerHTML = sentence;
}