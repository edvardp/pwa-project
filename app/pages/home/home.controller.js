(() => {
    angular.module('app.controllers')
        .controller('HomeController', HomeController)

    HomeController.$inject = []

    function HomeController() {
        const vm = this

        vm.hello = "Hello World"

        vm.alert = alertLegal;

        function alertLegal() {
            alert('alert');
        }

    }
})()