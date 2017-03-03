define(['app', 'backbone', 'underscore'], function(app, Backbone, _) {

  'use strict';

  return Backbone.Layout.extend({

    template: 'modal/base',

    attributes: {
      'id': 'modal',
      'class': 'modal'
    },

    cropView: true,

    setContainer: function(container) {
      this.container = container;
    },

    close: function(closeContainer) {
      this.$el.addClass('slide-down');
      setTimeout(_.bind(function() {
        if (this.container && closeContainer === true) {
          this.container.close();
        }
        this.$el.removeClass('slide-down');
        this.remove();
      }, this), 200);
    },

    serialize: function () {
      return {
        cropView: this.cropView
      };
    },

    constructor: function() {
      this.on('afterRender', _.bind(function() {
        this.$el.addClass('active');
      }, this));

      Backbone.Layout.prototype.constructor.apply(this, arguments);
    }
  });
});
