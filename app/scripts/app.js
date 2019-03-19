(() => {
    const dependences = [//'app.services', 'app.directives'
            'app.controllers',
            //'app.routers',
            'ui.router'
        ] 

    angular.module('app', dependences)
})()