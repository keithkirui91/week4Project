


function acceptDelivery(){
    var location = prompt("Enter Your Location");
    while(location === ''){
        location = prompt("note::Location is required");
    }
    


    
    alert("Your Delivery cost is 100sh. Pizza will be delivered to your location")
}
function denyDelivery(){
    alert("Pizza is ready for pickup at our Location");
}



const size = document.getElementById("size").value;


const crust = document.getElementById("crust").value;


const topping = document.getElementById("topping").value;

const delivert = document.getElementById("deliveryDetails").value;

var sizeprice = 0;
var crustprice = 0;
var toppingprice = 0;
var deliveryfee = 0;
var x  = 0;

if(size === "small"){
    sizeprice = 600;
}
else if(size === "medium"){
    sizeprice = 800;
}
else if(size === "large"){
    sizeprice = 1000;
}


if(crust === "basic"){
    crustprice = 0;
}
else if(crust === "crispy"){
    crustprice = 100;
}
else if(crust === "stuffed"){
    crustprice = 150;
}
else if(crust === "gluttenfree"){
    crustprice = 50;
}



if(topping === "chicken"){
    toppingprice = 300;
}
else if(topping === "beef"){
    toppingprice = 250;
}
else if(topping === "vagetables"){
    toppingprice = 150;
}
else if(topping === "mushroom"){
    toppingprice = 200;
}

if(deliveryDetails === "acceptDelivery"){
    deliveryfee = 100;
}
else if(deliveryDetails === "denyDelivery"){
    deliveryfee = 0;
}

function totalCost(){
    var x = crustprice + toppingprice + sizeprice + deliveryfee;

    const totalCost = document.getElementById('total-Cost');
    totalCost.innerHTML= "its"+ x;
}



function acceptDelivery(){
    var location = prompt("Enter Your Location");
    while(location === ''){
        location = prompt("note::Location is required");
    }
    


    
    alert("Your Delivery cost is 100sh. Pizza will be delivered to your location")
}
function denyDelivery(){
    alert("Pizza is ready for pickup at our Location");
}



