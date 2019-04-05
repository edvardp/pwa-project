import "jquery"
import "angular"
import "bootstrap"
import "scripts/app.js"

// 
require.context("scripts/modules/", true, /\.js$/);
require.context("scripts/routers/", true, /\.js$/);
require.context("pages/", true, /\.js$/);