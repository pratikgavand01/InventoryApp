(function(){
    var InspyrusInventoryApp=angular.module('InspyrusInventoryApp',['ngRoute']);
    
         InspyrusInventoryApp.config(function($routeProvider){  
             $routeProvider
            .when('/CustomerDetails/:CustomerId', {
                controller:'customerController',
                templateUrl:'./app/views/customerDetails.html' 
            })
             .when('/URL',{ 
                 controller:'URLController',
                 templateUrl:'./app/views/URLDetails.html'
             })
              .when('/CustomerHome', {
                controller:'customerHomeConroller',
                templateUrl:'./app/views/customerHome.html' 
            })
             .when('/home',{
                 controller:'homeController',
                 templateUrl:'./app/views/home.html'
             })
             .when('/Contact',{
                 controller:'contactController',
                 templateUrl:'./app/views/contact.html'
             });  
        });
    
        InspyrusInventoryApp.filter('trusted', ['$sce', function ($sce) {
                return function(url) {
                return $sce.trustAsResourceUrl(url);
            };
        }]);
    
        
    
}());
/*

(function(){
    var InspyrusInventoryApp=angular.module('InspyrusInventoryApp',['ngRoute']);
         InspyrusInventoryApp.config(function($routeProvider){  
             $routeProvider
            .when('/CustomerDetails/:CustomerId', {
                controller:'customerController',
                templateUrl:'/app/views/customerDetails.html' 
            })
             .when('/URL',{ 
                 controller:'URLController',
                 templateUrl:'/app/views/URLDetails.html'
             })
              .when('/CustomerHome', {
                controller:'customerHomeConroller',
                templateUrl:'/app/views/customerHome.html' 
            })
             .when('/home',{
                 controller:'homeController',
                 templateUrl:'/app/views/home.html'
             })
             .when('/Contact',{
                 controller:'contactController',
                 templateUrl:'/app/views/contact.html'
             });  
        });
    
        InspyrusInventoryApp.filter('trusted', ['$sce', function ($sce) {
                return function(url) {
                return $sce.trustAsResourceUrl(url);
            };
        }]);
    
        
    
}());
*/
 


 
