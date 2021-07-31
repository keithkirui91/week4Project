
class Order{
    constructor(size, crust, topping, number, delivery, ordertotal){
        this.size = size;
        this.crust = crust;
        this.topping = topping;
        this.number = number;
        this.delivery = delivery;
        this.ordertotal = ordertotal;

    }
}
class UI{
    static displayOrder(){
        const StoredOrders = [
         
        ];
        const orders = StoredOrders;

        orders.forEach((order)=> UI.addOrderToList(order));
        orders.forEach((order)=> UI.addOrderToList(order));
    }
    static addOrderToList(order){
        const list = document.querySelector('#order-list');
        const checkoutlist = document.querySelector('#checkout-list');

        const row = document.createElement('tr');
        const checkoutrow = document.createElement('tr');

        row.innerHTML = `
        <td>${order.size}</td>
        <td>${order.crust}</td>
        <td>${order.topping}</td>
        <td>${order.number}</td>
        <td>${order.delivery}</td>
        <td>${order.ordertotal}</td>

        `;
        list.appendChild(row);

        checkoutrow.innerHTML = `
        <td>${order.size}</td>
        <td>${order.crust}</td>
        <td>${order.topping}</td>
        <td>${order.number}</td>
        <td>${order.delivery}</td>
        <td>${order.ordertotal}</td>
        

        `;
        checkoutlist.appendChild(checkoutrow);
    }
    
}
//display order
document.addEventListener('DOMContentLoaded', UI.displayOrder);


document.querySelector('#orderForm').addEventListener('submit', (e) =>{

    e.preventDefault();
    const mysize = document.getElementsByName('size');
    const mycrust = document.getElementsByName('crust');
    const mytopping = document.getElementsByName('topping');
    const number = parseInt(document.getElementById('numberOfPizzas').value);
    const mydeliveryDetails = document.getElementsByName('deliveryDetails');
    

   
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

    const ordertotal =  (crustprice + toppingprice + sizeprice + deliveryfee) * number;

    if(mysize[0].checked){
        var size = "small";
    
    }
    else if(mysize[1].checked){
        var size = "medium";
    }
    else if(mysize[2].checked){
        var size = "large";
    }



    if(mycrust[0].checked){
        var crust = "basic";
    }
    else if(mycrust[1].checked){
        var crust = "crispy";
    }
    else if(mycrust[2].checked){
        var crust = "stuffed";
    }
    else if(mycrust[3].checked){
        var crust = "gluttenfree";
    }
    
    
    
    if(mytopping[0].checked){
        var topping = "chicken";
    }
    else if(mytopping[1].checked){
        var topping = "beef";
    }
    else if(mytopping[2].checked){
        var topping = "vagetables";
    }
    else if(mytopping[3].checked){
        var topping = "mushroom";
    }
    if(mydeliveryDetails[0].checked){
        var delivery = "Deliver to doorstep";
    }
    else if(mydeliveryDetails[1].checked){
        var delivery = "Pick up at our location";
    }





  //add order
    const order = new Order(size, crust, topping, number, delivery, ordertotal);

    UI.addOrderToList(order);

    

    
});





////
function acceptDelivery(){
    var location = prompt("Enter Your Location");
    while(location === ''){
        location = prompt("note::Location is required");
    }
    
    alert("Your Delivery cost is 100sh. Pizza will be delivered to "+location)
}
function denyDelivery(){
    alert("Pizza will be ready for pickup at our Location in 5 minutes");
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
    var myOrderTotal = (crustprice + toppingprice + sizeprice + deliveryfee) * numberOfPizzas;

    const totalCost = document.getElementById('total-Cost-one');
    totalCost.innerHTML = ("its"+ myOrderTotal) ;

}




//checkout popup 
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}