

(function(){
    angular.module('InspyrusInventoryApp').controller('customerHomeConroller',function($scope,$window){
        
        
        //CustomerHome   
    $scope.OpenNewWindow=function(src)
    {
        $window.open(src);
        
    }
    
    $scope.viewType="Thumb";
    $scope.changeViewType=function(currentview)
    {
        if(currentview=="Thumb")
            {
                $scope.viewType="List";
            }
        else
            {
                $scope.viewType="Thumb";
            }
    }
    });
}());    