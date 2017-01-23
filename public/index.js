'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);

/** 
*convert a string to a date
*
*@param {string} strict
*@return {date}
*/

function convertDate(str) {
	var re = /[0-9]+/g;
	var result = re[Symbol.match](str);
	var dateLoc = new Date(result[0], result[1], result[2]);
	return dateLoc;
}

/*function getCar (carId){
	return{
		'model' : model (carId),
		'PricePerDay' : pricePerDay(carId),
		'PricePerKm' : pricePerKm(carId)
	};
};*/

function getDays(pickupDate, returnDate) {
	var begin = convertDate(pickupDate).getTime();
	var end = convertDate(returnDate).getTime();
	return Math.floor((end - begin)/MS_PER_DAY) + 1;
}

MS_PER_DAY = 1000 * 60 * 60 * 24;

/*function PricePerConducteur(rentals){
	var j =0;
	while(j<rentals.length)
	{
		console.log(j);
		var conducerFirstName = rentals[j].driver.firstName;
		console.log(conducerFirstName);
		var beginDate = convertDate(rentals[j].pickupDate);
		console.log(beginDate);
		var returnDate = convertDate(rentals[j].returnDate);
		console.log(returnDate);
		var numberOfDay = getDays (beginDate, returnDate);
		console.lo(numberOfDay);
		var carId = rentals[j].carId;
		console.log(carId);
		var priceD = pricePerDay(carId);
		console.log(priceD);
		var priceK = pricePerKm(carId);
		console.log(priceK);
		var distance = rentals[j].distance;
		console.log(distance);
	}
}*/

function priceD(carId) {
   for(var i = 0; i < cars.length; i++) {
     if (cars[i].id == carId)
       return cars[i].pricePerDay;
   }
}
   function priceK(carId) {
   for(var i = 0; i < cars.length; i++) {
     if (cars[i].id == carId)
       return cars[i].pricePerKm;
   }
 }
 
 //Exercice 1
 //compute rental price
 function rentalprice() 
 {
   var numberDays;
   for(var i = 0; i < rentals.length; i++) 
   {
   	numberDays = getDays(rentals[i].pickupDate, rentals[i].returnDate);
	for(var j=0; j < cars.length;j++)
    {
      if(rentals[i].carId == cars[j].id )
	  {
     rentals[i].price = numberDays * priceD(rentals[i].carId) + rentals[i].distance * priceK(rentals[i].carId);
	  }
	}
   console.log(rentals[i].price); 
   }
 }
 
 
 //Exercice 2
 //rental price computation with new rules
 function newrentalprice() 
 {
   var numberDays;
   for(var i = 0; i < rentals.length; i++) 
   {
     numberDays = getDays(rentals[i].pickupDate, rentals[i].returnDate);
	 for(var j=0; j < cars.length;j++)
    {
      if(rentals[i].carId == cars[j].id )
	  {
		  rentals[i].price = cars[j].pricePerDay*numberDays + cars[j].pricePerKm*rentals[i].distance;
	  
	  }
	}
	 
     if (numberDays >= 10)
       rentals[i].price = rentals[i].price * (1 - 0.5); 
     else if ((numberDays >= 4) && (numberDays < 10))
       rentals[i].price = rentals[i].price * (1 - 0.3);  
     else if ((numberDays >= 1) && (numberDays < 4))
       rentals[i].price = rentals[i].price * (1 - 0.1);  
	
	console.log(rentals[i].price); 
    
   }
   
 }
 
 
 //Exercice 3
 //Compute the amount that belongs to the insurance, to the assistance and to drivy.
 function comm() 
 {
   var numberDays;
   for(var i = 0; i < rentals.length; i++) 
   {   

	 numberDays = getDays(rentals[i].pickupDate, rentals[i].returnDate);
     var commission = rentals[i].price * 0.3;
     rentals[i].insurance = commission / 2;
     rentals[i].assistance = 1 * numberDays;
     rentals[i].drivy = commission - rentals[i].insurance - rentals[i].assistance;
   }
   console.log(rentals[i].price);
 }
 
 
 //Exercice 4
 //Compute the new amount price if the driver subscribed to deductible option.
 
 function deducprice() 
 {
   var numberDays;
   for(var i = 0; i < rentals.length; i++) 
   {
	   numberDays = getDays(rentals[i].pickupDate, rentals[i].returnDate);
       if(rentals[i].options.deductibleReduction == true)
         rentals[i].price = rentals[i].price + 4 * numberDays
   }
 }
 
 //Exercice 5
 //Compute the debit for the driver
 //Compute the credit of the car owner, insurance, assistance and drivy.
 
 function debitcredit() {
   for(var i = 0; i < rentals.length; i++) {
     for(var j = 0; j < actors.length; j++) {
       if(rentals[i].id == actors[j].rentalId) {
 
         
         for(var k = 0; k < actors[j].payment.length; k++) {
           if(actors[j].payment[k].who == "driver"){
			   if(rentals[i].options.deductibleReduction == true){
			   actors[j].payment[k].amount = rentals[i].price = rentals[i].price + 4 * numberDays}else{
		   actors[j].payment[k].amount = rentals[i].price;  }  }                                                   
           if (actors[j].payment[k].who == "owner")
             actors[j].payment[k].amount = rentals[i].price * (1 - 0.3);
           if (actors[j].payment[k].who == "insurance")
             actors[j].payment[k].amount = rentals[i].insurance;
           if (actors[j].payment[k].who == "assistance")
             actors[j].payment[k].amount = rentals[i].assistance;
           if (actors[j].payment[k].who == "drivy"){
			   if(rentals[i].options.deductibleReduction == true){
			   actors[j].payment[k].amount = rentals[i].drivy + 4 * numberDays}else{
		   actors[j].payment[k].amount = rentals[i].drivy;}}
         }
       }
     }
	 console.log(actors[i]);
   } 
 }
 
 
 
 //      Exercice 6
 //Compute the debit for the driver and the credit of the car owner, insurance, assistance and drivy 
 //with the rental modification.
 
 
 function rentalsearch(str)
 {
   for (var i = 0; i < rentals.length; i++)
   {
     if (rentals[i].id == str)
       return i;
   }
 }
 

 function newdebitcredit()
 {
   for (var i = 0; i < rentalModifications.length; i++)
   {
     if (rentalModifications[i].pickupDate)
       rentals[rentalsearch(rentalModifications[i].rentalId)].pickupDate = rentalModifications[i].pickupDate;
     if (rentalModifications[i].distance)
       rentals[rentalsearch(rentalModifications[i].rentalId)].distance = rentalModifications[i].distance;
     if (rentalModifications[i].returnDate)
       rentals[rentalsearch(rentalModifications[i].rentalId)].returnDate = rentalModifications[i].returnDate;
   }
   debitcredit(); 
   console.log(actors)
 }
