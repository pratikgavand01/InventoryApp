
(function(){
    angular.module('InspyrusInventoryApp').controller('contactController',function($scope){
       console.log('contactController');
        $scope.Contacts=[{fname:'FnameOne',lname:'LnameOne',email:'FnameOne.LnameOne@domain.com',skype:'FnameOneLnameOne',phone:'+10000000000'},
                        {fname:'FnameTwo',lname:'LnameTwo',email:'FnameTwo.LnameTwo@domain.com',skype:'FnameTwoLnameTwo',phone:'+10000000000'},
                        {fname:'FnameThree',lname:'LnameThree',email:'FnameThree.LnameThree@domain.com',skype:'FnameThree.LnameThree',phone:'+10000000000'},
                         {fname:'FnameFour',lname:'LnameFour',email:'FnameFour.LnameFour@domain.com',skype:'FnameFourwork88',phone:'+10000000000'},
                         {fname:'FnameFive',lname:'LnameFive',email:'FnameFive.LnameFive@domain.com',skype:'FnameFive.LnameFive',phone:'+10000000000'},
                         {fname:'FnameSix',lname:'LnameSix',email:'FnameSix.LnameSix@domain.com',skype:'FnameSix.LnameSix1288',phone:'+10000000000'},
                          {fname:'FnameSeven',lname:'LnameSeven',email:'FnameSeven.puli@domain.com',skype:'FnameSeven',phone:'+10000000000'},
                          {fname:'FnameEight',lname:'LnameEight',email:'FnameEight.LnameEight@domain.com',skype:'FnameEight.LnameEight75',phone:'+10000000000'},
                          {fname:'FnameNine',lname:'LnameNine',email:'FnameNine.LnameNine@domain.com',skype:'FnameNine.LnameNine',phone:'+10000000000'},
                        ];
    });
}());