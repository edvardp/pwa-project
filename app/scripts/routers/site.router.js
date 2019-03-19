(() => {
    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/home')

                $stateProvider

                    .state('home', {
                        url: '/home',
                        templateUrl: 'pages/home/home.view.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    })
            }])
})()