


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
    var sizeprice = parseInt(size[0].value);

}
else if(size[1].checked){
    var sizeprice = parseInt(size[1].value);
}
else if(size[2].checked){
    var sizeprice = parseInt(size[2].value);
}


if(crust[0].checked){
    var crustprice = parseInt(crust[0].value);
}
else if(crust[1].checked){
    var crustprice = parseInt(crust[1].value);
}
else if(crust[2].checked){
    var crustprice = parseInt(crust[2].value);
}
else if(crust[3].checked){
    var crustprice = parseInt(crust[3].value);
}



if(topping[0].checked){
    var toppingprice = parseInt(topping[0].value);
}
else if(topping[1].checked){
    var toppingprice = parseInt(topping[1].value);
}
else if(topping[2].checked){
    var toppingprice = parseInt(topping[2].value);
}
else if(topping[3].checked){
    var toppingprice = parseInt(topping[3].value);
}
if(deliveryDetails[0].checked){
    var deliveryfee = parseInt(deliveryDetails[0].value);
}
else if(deliveryDetails[1].checked){
    var deliveryfee = parseInt(deliveryDetails[1].value);
}

    var numberOfPizzas = parseInt(document.getElementById('numberOfPizzas').value);
    var x = (crustprice + toppingprice + sizeprice + deliveryfee) * numberOfPizzas;

    const totalCost = document.getElementById('total-Cost');
    totalCost.innerHTML = ("its"+ x) ;

    


}



