/**
 * Created by maxjerin on 11/30/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'views/FooterView',
    'views/HeaderView',
    'text!partials/speakerTemplate.html'
], function($, _, Backbone, FooterView, HeaderView, speakerTemplate){

    var SpeakerView = Backbone.View.extend({
        el: $(".page-container"),

        render: function(){

            this.$el.html('').html(speakerTemplate);

            var headerView = new HeaderView();
            headerView.render();

            var footerView = new FooterView();
            footerView.render();

        }

    });

    return SpeakerView;

});