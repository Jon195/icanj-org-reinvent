// Defining path of javascript libraries that will be loaded dynamically
var paths = {
    jquery: 'library/jquery-1.11.1.min',
    backbone: 'library/backbone-min',
    underscore: 'library/underscore-min',
    handlebars: 'library/handlebars-v2.0.0',
    text: 'library/text',
    partials: '../partials'
}

// set up require.js 
requirejs.config({
    baseUrl: 'js/',
    paths: paths
});


require([
    'app',
], function(App){
    App.initialize();
});