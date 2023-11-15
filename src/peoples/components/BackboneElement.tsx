import Backbone from "backbone";

// Backbone building component - view
const BackboneView = Backbone.View.extend({
  render: function (url: string) {
    this.$el.html(url);
    return this;
  },
});

export const getBackboneComponent = (display: string) =>
  new BackboneView().render(display).el.innerHTML;
