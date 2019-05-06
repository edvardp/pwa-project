(() => {
    angular.module('app')
        .controller('HomeController', HomeController)

    HomeController.$inject = []

    function HomeController() {
        const vm = this

        vm.hello = "Hello World"

        vm.alert = alert;


        console.log('teste');
    }
})()