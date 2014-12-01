/**
 * Created by maxjerin on 11/29/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!partials/headerTemplate.html'
], function($, _, Backbone, headerTemplate){

    var HeaderView = Backbone.View.extend({
        el: $(".header-container"),

        render: function(){

            var compiledTemplate = _.template( headerTemplate );


            $(".header-container").html('').append(compiledTemplate);
        }

    });

    return HeaderView;

});