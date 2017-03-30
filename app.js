(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//Controller 1: buyController
//-----------------------------------------------------------------
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyController = this;

  buyController.itemsToBuy = ShoppingListCheckOffService.itemsToBuy();

  buyController.buy = function(index){
    ShoppingListCheckOffService.buy(index);
  }

  buyController.buyEmpty = function(){
    return ShoppingListCheckOffService.buyEmpty();  
  } 
}
//-----------------------------------------------------------------

//Controller 2: boughtController
//-----------------------------------------------------------------
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtController = this;

  boughtController.itemsBought = ShoppingListCheckOffService.itemsBought();

  boughtController.boughtEmpty = function (){
    return ShoppingListCheckOffService.boughtEmpty();
  }
}
//-----------------------------------------------------------------


//Service: ShoppingListCheckOffService
//-----------------------------------------------------------------
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var buy = [
        {name: "Orange", quantity:"1"},
        {name: "Avocado", quantity:"2"},
        {name: "Strawberry", quantity:"5"},
        {name: "Bananas", quantity:"3"},
        {name: "Cookies", quantity:"1"}
        ];
       
  // List of bought items      
  var bought = [];

  //itemsToBuy function
  service.itemsToBuy = function () {
    return buy;
  };

  //itemsBought function
   service.itemsBought = function () {
    return bought;
  };

  //Buy function
  service.buy = function(itemIdex){    
    //Add item to bought array  
    var value = buy[itemIdex]
    bought.push(value);

    //Remove item from buy array
    buy.splice(itemIdex,1);
  }

  //Check if buy is empty
  service.buyEmpty = function(){
    if (buy.length == 0)
    {
      return true;
    }
    else{
      return false;
    }
  }

  //Check if buy is empty
  service.boughtEmpty = function(){
    if (bought.length == 0)
    {
      return true;
    }
    else{
      return false;
    }
  }


}
//-----------------------------------------------------------------

})();
