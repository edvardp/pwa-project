(() => {
    const dependences = [
        'ui.router',
        //'app.services',
        //'app.directives',
        'app.controllers',
        'app.routers',
    ]

    angular.module('app', dependences)

})()