import $ from 'jquery'
window.jQuery = $
window.$ = $
import "angular"
import uirouter from "@uirouter/angularjs"
import "angular-ui-router"
import "bootstrap"
import "scripts/app.js"

require.context("scripts/modules/", true, /\.js$/)
require.context("scripts/routers/", true, /\.js$/)
require.context("pages/", true, /\.js$/)

if (process.env.NODE_ENV !== 'production') {
    console.log('Você está no modo de Desenvolvimento!')
}