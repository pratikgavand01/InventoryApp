(function(){
    angular.module('InspyrusInventoryApp').controller('URLController',function($scope){
       
        $scope.URL=[{name:'Outlook URL',description:'Outlook web URL',value:'https://outlook.office.com/owa/'},
                   {name:'QuartzScheduler',description:'QuartzScheduler',value:'http://localhost:8001/QuartzScheduler/'},
                   {name:'Application UI',description:'URL for Inspyrus UI',value:'http://localhost:7011/Inspyrus'},
                   {name:'SB Console',description:'SB Console',value:'http://localhost:7001/sbconsole'},
                   {name:'Log Path',description:'Common Log Path',value:'/u01/Oracle/Middleware/user_projects/domains/base_domain/servers/'},
                   {name:'Query Decrypter',description:'',value:'http://localhost:7001/Administration/getLog'},
                    {name:'Version',description:'',value:'http://localhost:7001/Administration/getVersion'},
                    {name:'EM Console',description:'',value:'http://localhost:7001/em/'},
                    {name:'Content Server',description:'',value:'http://localhost:16200/cs'},
                    {name:'Imaging',description:'',value:'http://localhost:16000/imaging'},
                    {name:'Sandbox UI',description:'',value:'https://sandbox.app-automation.com/index.jsp'},
                    {name:'Production UI',description:'Production Application Web UI',value:'https://app-automation.com/'}
                  ];
    });
    
}());