(() => {
    angular.module('app.routers')
        .config(['$stateProvider', '$urlRouterProvider', runRouter])

    function runRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home')

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: './pages/home/home.view.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
    }
})()