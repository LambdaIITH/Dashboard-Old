/**
 * Created by sid on 15/2/17.
 */

//Declare your app variable
var app = angular.module('AppName' , ['ngMaterial']);


//define external functions here
function externalFunction($scope) {

}
//Define your controller
app.controller('controllerName' , function ($scope) {

    var controllerFunction = function () { //Pass params Inside the controller from template

    }
});

//Add custom Directives here
app.directive('customDirectives',function () {
    return {
        restrict: 'A' ,
        require : 'ngModel' , //Add extra dependencies here
        link : function (scope,element,attrs, ngModel) {  //Add extra as needed
            
        }
    };
    
});