(function(){
   "use strict";
    var app = angular.module("myApp", []);
    app.factory("myCal",function(){

      return{
          addValues:addValues
          // subtractValues:subtractValues
          // multiplyValues:multiplyValues
          // divideValues:divideValues
      };
    
   function calculator(){

       function addValues(n1,n2){
           return parseInt(n1) + parseInt(n2);
       }
     }
       // function subtractValues(n1,n2){
       //  if(n1>n2){
       //    return parseInt(n1) - parseInt(n2);
       //  }
       //  else 
       //    return parseInt(n2) - parseInt(n1);
       // }

       // function multiplyValues(n1, n2){
       //  return parseInt(n1) * parseInt(n2);
       // }

       // function divideValues(n1,n2){
       //  return parseInt(n1) / parseInt(n2);
       // }

       

      

          /*addValues : function(a,b){
             return parseInt(a) + parseInt(b);

          }*/
         


      

   });

}());

























