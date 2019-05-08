(() => {
    const dependences = [ //'app.services', 'app.directives'
        //'app.controllers',
        //'app.routers',
        'ui.router'
    ]

    angular.module('app', dependences)

    console.log(angular)

    try {
        console.log(angular.module("ui.router"))
    } catch (err) {
        console.log(err)
    }
})()