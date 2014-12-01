/**
 * Created by maxjerin on 11/29/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!partials/footerTemplate.html'
], function($, _, Backbone, footerTemplate){

    var FooterView = Backbone.View.extend({
        el: $(".footer-container"),

        render: function(){

            var compiledTemplate = _.template( footerTemplate );

            $(".footer-container").html('').append(compiledTemplate);
        }

    });

    return FooterView;

});