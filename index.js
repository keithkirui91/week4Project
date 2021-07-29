


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

function totalPrice(){

var size = document.getElementsByName("size");


var crust = document.getElementsByName("crust");


var topping = document.getElementsByName("topping");

var deliveryfee = document.getElementsByName("deliveryDetails");


if(size[0].checked){
    var sizeprice = size[0].value;
    
}
else if(size[1].checked){
    var sizeprice = size[1].value;
}
else if(size[2].checked){
    var sizeprice = size[2].value;
}


if(crust[0].checked){
    var crustprice = crust[0].value;
}
else if(crust[1].checked){
    var crustprice = crust[1].value;
}
else if(crust[2].checked){
    var crustprice = crust[2].value;
}
else if(crust[3].checked){
    var crustprice = crust[3].value;
}



if(topping[0].checked){
    var toppingprice = topping[0].value;
}
else if(topping[1].checked){
    var toppingprice = topping[1].value;
}
else if(topping[2].checked){
    var toppingprice = topping[2].value;
}
else if(topping[3].checked){
    var toppingprice = topping[3].value;
}
if(deliveryDetails[0].checked){
    var deliveryfee = deliveryDetails[0].value;
}
else if(deliveryDetails[1].checked){
    var deliveryfee = deliveryDetails[1].value;
}


    var x = crustprice + toppingprice + sizeprice + deliveryfee;

    //const totalCost = document.getElementById('total-Cost');
    alert("its"+ x) ;


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



