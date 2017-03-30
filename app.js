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

  //get "buy" items
  buyController.itemsToBuy = ShoppingListCheckOffService.itemsToBuy();

  //buy an item
  buyController.buy = function(index){
    ShoppingListCheckOffService.buy(index);
  }

  //check if "buy" is empty
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

  // get "bought" items
  boughtController.itemsBought = ShoppingListCheckOffService.itemsBought();

  //check if "bought" is empty
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
       
  // List of "bought" items      
  var bought = [];

  //itemsToBuy function: returns "buy" items
  service.itemsToBuy = function () {
    return buy;
  };

  //itemsBought function: returns "bought" items
   service.itemsBought = function () {
    return bought;
  };

  //Buy function: removes item from "buy" array and adds it to "bought" array
  service.buy = function(itemIdex){    
    //Add item to bought array  
    var value = buy[itemIdex]
    bought.push(value);

    //Remove item from buy array
    buy.splice(itemIdex,1);
  }

  //Check if "buy" is empty
  service.buyEmpty = function(){
    if (buy.length == 0)
    {
      return true;
    }
    else{
      return false;
    }
  }

  //Check if "bought" is empty
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
