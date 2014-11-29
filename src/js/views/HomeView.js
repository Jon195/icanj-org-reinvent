/**
 * Created by maxjerin on 11/29/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/FooterView',
    'views/HeaderView',
    'text!partials/homeTemplate.html'
], function($, _, Backbone, FooterView, HeaderView, homeTemplate){

    var HomeView = Backbone.View.extend({
        el: $(".page-container"),

        render: function(){

            this.$el.html(homeTemplate);

            var headerView = new HeaderView();
            headerView.render();

            var footerView = new FooterView();
            footerView.render();

        }

    });

    return HomeView;

});