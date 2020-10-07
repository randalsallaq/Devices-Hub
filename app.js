'use strict';

var tableHeader = ['Device Name', 'Category' , 'Unit Price', 'Quantity' ];


var allDevices = [];



if(localStorage.getItem('device')){

var localstoragedate = JSON.parse(localStorage.getItem('device'));

for (var c = 0; c < localstoragedate.length; c++);

// var additionalvar = new Mobile(localstoragedate[c].itemName, localstoragedate[c].quantity, localstoragedate[c].category);

}


var table = document.getElementById('deviceTable');

function Mobile(itemName, quantity, category){

this.itemName = itemName;
this.quantity = quantity;
this.category = category;
// this.total = total;
allDevices.push(this);


}

function createHeader(){

var tr = document.createElement('tr');
table.appendChild(tr);

for (var i =0; i<tableHeader.length; i++){

var td = document.createElement('td');
td.textContent = tableHeader[i];
tr.appendChild(td);

}
}
createHeader();


for (var x = 0; x < allDevices.length; i++){

    // addRow();
}


//random
Mobile.prototype.random = function(){
var random = Math.floor(Math.random() * 750) + 1;

return random;
}





Mobile.prototype.addRow = function(){


    var tr = document.createElement('tr');
    table.appendChild(tr);


var td1 = document.createElement('td');
td1.textContent = this.itemName;
tr.appendChild(td1);

var td2 = document.createElement('td');
td2.textContent = this.quantity;
tr.appendChild(td2);


var td3 = document.createElement('td');
td3.textContent = this.random();
tr.appendChild(td3);


var td4 = document.createElement('td');
td4.textContent = this.category;
tr.appendChild(td4);


}


var form = document.getElementById('deviceForm');
form.addEventListener('submit', addDevice);

function addDevice(event){
event.preventDefault();


var nametarget = event.target.itemname.value;

var categorytarget = event.target.category.value;

var quantitytarget = event.target.quantity.value;


var newDevice = new Mobile(nametarget, categorytarget, quantitytarget);


newDevice.addRow();

localStorage.setItem('device', JSON.stringify(allDevices));
}



// //category
// Mobile.prototype.whatCategory = function(){



// }



// function totalPrice(){

//     var total = 0;

//     for (var y = 0; y < allDevices.length; y++){
//         total += allDevices[y];
//     }


// }