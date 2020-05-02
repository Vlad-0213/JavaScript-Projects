function my_Dictionary() {
    var teamSport = {
        Equipment:"Glove",
        Color:"Brown",
        Brand:"Rauling",
        Qty:"One"
    };
    delete teamSport.Qty;
    document.getElementById("Dictionary").innerHTML =teamSport;
}