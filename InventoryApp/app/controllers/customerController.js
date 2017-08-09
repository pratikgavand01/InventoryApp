(function(){
    
   angular.module('InspyrusInventoryApp').controller('customerController',function($scope,$routeParams,$window){
       var CustomerId=$routeParams.CustomerId;
       var blnshowContact=false;
       var contactLabel="Show More";
        $scope.TopMenu=[{name:'DEV', url:'/Dev'},
                        {name:'TEST', url:'/Test'},
                        {name:'PROD', url:'/Prod'}];
       
       $scope.contactLabel=contactLabel;
       $scope.blnshowContact=blnshowContact;
       $scope.showMoreContact = function(){
                   if($scope.contactLabel=="Show More")
                       {
                           $scope.blnshowContact=true;
                           $scope.contactLabel="Show Less";
                       }
                   else
                       {
                           $scope.blnshowContact=false;
                           $scope.contactLabel="Show More";
                       }
       };
       
        $scope.customerDetailsData=[
                                {CustomerId:1, CustomerName:'CustOne', EnvType:'Cloud', IIAVersion:'2.7.5', Location:'Cloud', TimeZone:'dummy Timezone',Tags:'',Contact:[{name:'dummy name',email:'dummy email',type:'', comments:''},{name:'dummy name',email:'dummy email',type:'', comments:''}]},
                                {CustomerId:2, CustomerName:'CustTwo', EnvType:'Cloud', IIAVersion:'2.7.5', Location:'dummy Location', TimeZone:'dummy Timezone',Tags:'',Contact:[{name:'dummy name',email:'dummy.name@CustTwo.com',type:'Bussiness', comments:''},{name:'dummy name',email:'dummy.email@domain.com',type:'Bussiness', comments:''}]},
                                {CustomerId:3, CustomerName:'CustThree', EnvType:'In House', IIAVersion:'1.0', Location:'dummy Location', TimeZone:'dummy Timezone',Tags:'',Contact:[{name:'dummy name',email:'dummy.email@martin-brower.com',type:'IT', comments:''},{name:'dummy name',email:'dummy.email@domain.com',type:'IT', comments:''}]},
                               {CustomerId:4, CustomerName:'CustFour', EnvType:'In House', IIAVersion:'2.6', Location:'dummy Location', TimeZone:'dummy Timezone',Tags:'',Contact:[{name:'dummy name',email:'dummy.email@CustFour.com',type:'IT', comments:''},{name:'dummy name',email:'dummy.email@domain.com',type:'IT', comments:''},{name:'SUDHAKARA MULLAGURI',email:'dummy.email@domain.com',type:'IT', comments:''}]},
                               {CustomerId:5, CustomerName:'CustFive', EnvType:'Cloud', IIAVersion:'2.7.5', Location:'dummy Location', TimeZone:'dummy Timezone',Tags:'',Contact:[{name:'dummy name',email:'dummy.email@domain.com',type:'', comments:''},{name:'dummy name',email:'dummy email',type:'', comments:''}]},
                               {CustomerId:6, CustomerName:'CustSix', EnvType:'In House', IIAVersion:'2.6.5', Location:'dummy Location', TimeZone:'dummy Timezone',Tags:'',Contact:[{name:'dummy name',email:'dummy.email@domain.com',type:'', comments:''},{name:'dummy name',email:'dummy email',type:'', comments:''}]},
                               {CustomerId:7, CustomerName:'CustSeven', EnvType:'In House', IIAVersion:'1.0', Location:'dummy Location', TimeZone:'MST',Tags:'',Contact:[{name:'dummy name',email:'dummy.name@domain.com',type:'', comments:''},{name:'dummy name',email:'dummy email',type:'', comments:''}]},
                               {CustomerId:8, CustomerName:'CustEight', EnvType:'In House', IIAVersion:'2.4', Location:'dummy Location', TimeZone:'dummy Timezone',Tags:'',Contact:[{name:'dummy name',email:'dummy.email@domain.com',type:'', comments:''},{name:'dummy name',email:'dummy.email@domain.com',type:'', comments:''},{name:'Srinivasu Kusumanchi',email:'dummy.email@domain.com',type:'', comments:''}]},
                               {CustomerId:9, CustomerName:'CustNine', EnvType:'In House', IIAVersion:'2.4', Location:'dummy Location', TimeZone:'dummy Timezone',Tags:'',Contact:[{name:'dummy name',email:'dummy email',type:'', comments:''},{name:'dummy name',email:'dummy email',type:'', comments:''}]},
                               {CustomerId:10, CustomerName:'CustTen', EnvType:'In House', IIAVersion:'1.0', Location:'dummy Location', TimeZone:'dummy Timezone',Tags:'',Contact:[{name:'dummy name',email:'dummy.email@domain.com',type:'', comments:''},{name:'dummy name',email:'dummy.email@domain.com',type:'', comments:''}]},
                               {CustomerId:11, CustomerName:'CustEleven', EnvType:'In House', IIAVersion:'2.7.5.3', Location:'In House', TimeZone:'EST Canada',Tags:'',Contact:[{name:'dummy name',email:'dummy.email@domain.com',type:'IT', comments:''},{name:'dummy name',email:'dummy.email@domain.com',type:'', comments:''}]},
                               {CustomerId:12, CustomerName:'CustTweleve', EnvType:'In House', IIAVersion:'2.7.5', Location:'dummy Location', TimeZone:'dummy Timezone',Tags:'',Contact:[{name:'dummy name',email:'dummy.email@domain.com',type:'', comments:''},{name:'dummy name',email:'dummy email',type:'', comments:''}]}];  

       
       $scope.customerEnvDetailsData=[{ Name:'CustOne', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'',                               Tags:'', CustomerId:1},
                                 { Name:'CustOne', Type:'Database'  , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:1},
                                 { Name:'CustOne', Type:'Database'  , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:1},
                                 { Name:'CustTwo', Type:'Database'  , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:2},
                                 { Name:'CustTwo', Type:'Database'  , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TESTE', OS:'', Tags:'', CustomerId:2},
                                 { Name:'CustTwo', Type:'Database'  , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:2},
                                 { Name:'CustFour', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:4},
                                 { Name:'CustFour', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:4},
                                 { Name:'CustFour', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:4},
                                 { Name:'CustFive', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:5},
                                 { Name:'CustFive', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:5},
                                 { Name:'CustFive', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:5},
                                 { Name:'CustSix', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:6},
                                 { Name:'CustSix', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:6},
                                 { Name:'CustSix', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:6},
                                 { Name:'CustSeven', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:7},
                                 { Name:'CustSeven', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:7},
                                 { Name:'CustSeven', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:7},
                                 { Name:'CustEight', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:8},
                                 { Name:'CustEight', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:8},
                                 { Name:'CustEightr', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:8},
                                 { Name:'CustNine', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:9},
                                 { Name:'CustNine', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:9},
                                 { Name:'CustNine', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:9},
                                 { Name:'CustTen', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:10},
                                 { Name:'CustTen', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:10},
                                 { Name:'CustTen', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:10},
                                 { Name:'CustEleven', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:11},
                                 { Name:'CustEleven', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:11},
                                 { Name:'CustEleven', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:11},
                                 { Name:'CustTweleve', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:12},
                                 { Name:'CustTweleve', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:12},
                                 { Name:'CustTweleve', Type:'Database' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:12},
                                      
                                 { Name:'CustOne', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:1},
                                 { Name:'CustOne', Type:'Unix'  , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:1},
                                 { Name:'CustOne', Type:'Unix'  , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:1},
                                 { Name:'CustTwo', Type:'Unix'  , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:2},
                                 { Name:'CustTwo', Type:'Unix'  , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TESTE', OS:'', Tags:'', CustomerId:2},
                                 { Name:'CustTwo', Type:'Unix'  , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:2},
                                 { Name:'CustFour', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:4},
                                 { Name:'CustFour', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:4},
                                 { Name:'CustFour', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:4},
                                 { Name:'CustFive', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:5},
                                 { Name:'CustFive', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:5},
                                 { Name:'CustFive', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:5},
                                 { Name:'CustSix', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:6},
                                 { Name:'CustSix', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:6},
                                 { Name:'CustSix', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:6},
                                 { Name:'CustSeven', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:7},
                                 { Name:'CustSeven', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:7},
                                 { Name:'CustSeven', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:7},
                                 { Name:'CustEight', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:8},
                                 { Name:'CustEight', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:8},
                                 { Name:'CustEightr', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:8},
                                 { Name:'CustNine', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:9},
                                 { Name:'CustNine', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:9},
                                 { Name:'CustNine', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:9},
                                 { Name:'CustTen', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:10},
                                 { Name:'CustTen', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:10},
                                 { Name:'CustTen', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:10},
                                 { Name:'CustEleven', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:11},
                                 { Name:'CustEleven', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:11},
                                 { Name:'CustEleven', Type:'Unix' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:11},
                                      
                                 { Name:'CustOne', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:1},
                                 { Name:'CustOne', Type:'AdminServer'  , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:1},
                                 { Name:'CustOne', Type:'AdminServer'  , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:1},
                                 { Name:'CustTwo', Type:'AdminServer'  , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:2},
                                 { Name:'CustTwo', Type:'AdminServer'  , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TESTE', OS:'', Tags:'', CustomerId:2},
                                 { Name:'CustTwo', Type:'AdminServer'  , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:2},
                                 { Name:'CustFour', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:4},
                                 { Name:'CustFour', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:4},
                                 { Name:'CustFour', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:4},
                                 { Name:'CustFive', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:5},
                                 { Name:'CustFive', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:5},
                                 { Name:'CustFive', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:5},
                                 { Name:'CustSix', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:6},
                                 { Name:'CustSix', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:6},
                                 { Name:'CustSix', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:6},
                                 { Name:'CustSeven', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:7},
                                 { Name:'CustSeven', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:7},
                                 { Name:'CustSeven', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:7},
                                 { Name:'CustEight', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:8},
                                 { Name:'CustEight', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:8},
                                 { Name:'CustEight', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:8},
                                 { Name:'CustNine', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:9},
                                 { Name:'CustNine', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:9},
                                 { Name:'CustNine', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:9},
                                 { Name:'CustTen', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:10},
                                 { Name:'CustTen', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:10},
                                 { Name:'CustTen', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:10},
                                 { Name:'CustEleven', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'DEV', OS:'', Tags:'', CustomerId:11},
                                 { Name:'CustEleven', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'TEST', OS:'', Tags:'', CustomerId:11},
                                 { Name:'CustEleven', Type:'AdminServer' , Host:'dummy host', UserId:'dummy UID', Password:'******', IP:'0.0.0.1', Port:'000', ServiceName:'Dummy Svc Name', Environment:'PROD', OS:'', Tags:'', CustomerId:11}];
       
       $scope.VPNAccountsData=[{ Name:'CustEight', Tool:'a' , URL:'', UserId:'dummy UID', Password:'******', Comments:'', CustomerId:8},
                                { Name:'CustSeven', Tool:'GlobalProtect' , URL:'', UserId:'dummy UID', Password:'******', Comments:'', CustomerId:7},
                                { Name:'CustTen', Tool:'Juno Pulse' , URL:'uk2vpn.CustTen.com/guest', UserId:'dummy UID', Password:'******', Comments:'', CustomerId:10}];
       
       $scope.AppUsersData=[{userName:'ApplicationAP@CustTwo.com',password:'',environment:'Test',type:'AP User',customerId:2},
                       {userName:'ApplicationMGR@CustTwo.com',password:'',environment:'Test',type:'Manager',customerId:2},
                       {userName:'ApplicationREQ@CustTwo.com',password:'',environment:'Test',type:'Requester',customerId:2},
                       {userName:'ApplicationAPPROV@CustTwo.com',password:'',environment:'Test',type:'',customerId:2}];
       
       $scope.EmailBoxData=[{email:'test.invoice@CustTwo.com',password:'',environment:'Test',customerId:2},
                           {email:'test.invoice@CustTwo.com',password:'',environment:'Test',customerId:2},
                           {email:'test.invoices@CustTwo.com',password:'',environment:'Test',customerId:2},
                           {email:'test.debitmemos@CustTwo.com',password:'',environment:'Test',customerId:2},
                           {email:'cv.invoice@CustTwo.com',password:'',environment:'Production',customerId:2},
                           {email:'cv.invoice@CustTwo.com',password:'',environment:'Production',customerId:2},
                           {email:'zur.invoice@CustTwo.com',password:'',environment:'Production',customerId:2},
                           {email:'mt.invoice@CustTwo.com',password:'',environment:'Production',customerId:2},
                           {email:'am.invoice@CustTwo.com',password:'',environment:'Production',customerId:2},
                           {email:'cwm.invoice@CustTwo.com',password:'',environment:'Production',customerId:2},
                           {email:'fin.invoice@CustTwo.com',password:'',environment:'Production',customerId:2},
                           {email:'lin.invoice@CustTwo.com',password:'',environment:'Production',customerId:2},
                           {email:'linsupplierinvoices@CustTwo.com',password:'',environment:'Production',customerId:2},
                           {email:'debitmemos@CustTwo.com',password:'',environment:'Production',customerId:2},
                           {email:'CustOne-sbx1@domain.com',password:'',environment:'Test',customerId:1},
                           {email:'CustOne-sbx2@domain.com',password:'',environment:'Test',customerId:1},
                           {email:'CustOne-ap1@domain.com',password:'',environment:'Prodution',customerId:1},
                           {email:'CustOne-ap2@domain.com',password:'',environment:'Prodution',customerId:1},
                           {email:'temp@CustFive.com',password:'',environment:'Prodution',customerId:5}];
       
       
      
       for(i=0;i<$scope.customerDetailsData.length;i++)
       {
            if($scope.customerDetailsData[i].CustomerId==CustomerId)
                {
                    $scope.customerDetails=$scope.customerDetailsData[i];
                }
       }
       
       $scope.customerEnvDetails=[];
       for(i=0;i<$scope.customerEnvDetailsData.length;i++)
       {
            if($scope.customerEnvDetailsData[i].CustomerId==CustomerId)
                {
                    $scope.customerEnvDetails=$scope.customerEnvDetails.concat($scope.customerEnvDetailsData[i]);
                }
       }
    
    $scope.VPNAccounts=[];
       for(i=0;i<$scope.VPNAccountsData.length;i++)
       {
            if($scope.VPNAccountsData[i].CustomerId==CustomerId)
                {
                    $scope.VPNAccounts=$scope.VPNAccounts.concat($scope.VPNAccountsData[i]);
                }
       }
       
     $scope.AppUsers=[];
       for(i=0;i<$scope.AppUsersData.length;i++)
           {
               if($scope.AppUsersData[i].customerId==CustomerId)
                   {
                       $scope.AppUsers=$scope.AppUsers.concat($scope.AppUsersData[i]);
                   }
           }
       
       $scope.EmailBox=[];
       for(i=0;i<$scope.EmailBoxData.length;i++)
           {
               if($scope.EmailBoxData[i].customerId==CustomerId)
                  $scope.EmailBox=$scope.EmailBox.concat($scope.EmailBoxData[i]);
           }
    
    }); 
       
}());
