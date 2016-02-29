(function(){
   "use strict";
    var app = angular.module("myApp");
    app.factory("calculator", function(){
        function addValues(a,b){
           return parseInt(a) + parseInt(b);
       }
       function subtractValues(a,b){
        return parseInt(a) - parseInt(b);
       }
       function multiplyValues(a,b){
        return parseInt(a) * parseInt(b);
       }
       function divideValues(a,b){
        return parseInt(a) / parseInt(b);
       }
       return{
           addValues:addValues,
           subtractValues:subtractValues,
           multiplyValues:multiplyValues,
           divideValues:divideValues
           }

     
     });

}());

/* app.factory('calculator' , function(){
  var factory={};
  factory.addValues=function(a,b){
  return parseInt(a) + parseInt(b);
  }

  factory.subtractValues=function(a,b){
  return parseInt(a) - parseInt(b);
  }

  return factory;

});
*/


       

       

      

          
         


      

   























