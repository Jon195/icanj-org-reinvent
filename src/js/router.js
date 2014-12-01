/**
 * Created by maxjerin on 11/29/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/HomeView',
    'views/FooterView',
    'views/SpeakerView'
], function($, _, Backbone, HomeView, FooterView, SpeakerView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            /* IMPORTANT: All routes need to be defined default which is a catch-all*/
            'speakers': 'speakerAction',
            'home': 'defaultAction',

            // Default (
            '*actions': 'defaultAction'


        }
    });

    var initialize = function(){

        var app_router = new AppRouter;

//        app_router.on('route:showProjects', function(){
//
//            // Call render on the module we loaded in via the dependency array
//            var projectsView = new ProjectsView();
//            projectsView.render();
//
//        });
//
//        app_router.on('route:showContributors', function () {
//
//            // Like above, call render but know that this view has nested sub views which
//            // handle loading and displaying data from the GitHub API
//            var contributorsView = new ContributorsView();
//        });

        app_router.on('route:defaultAction', function (actions) {

            // We have no matching route, lets display the home page
            var homeView = new HomeView();
            homeView.render();
        });

        app_router.on('route:speakerAction', function (actions) {

            // We have no matching route, lets display the home page
            var speakerView = new SpeakerView();
            speakerView.render();
        });

        // Unlike the above, we don't call render on this view as it will handle
        // the render call internally after it loads data. Further more we load it
        // outside of an on-route function to have it loaded no matter which page is
        // loaded initially.
        // var footerView = new FooterView();
        // footerView.render();

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});