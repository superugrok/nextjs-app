import Backbone from "backbone";

// export const getBackboneComponent = (display: string) => {
//   // Backbone building component - view
//   const BackboneView = Backbone.View.extend({
//     render: function (url: string) {
//       this.$el.html(url);
//       return this;
//     },
//   });
//   return new BackboneView().render(display).el.innerHTML;
// };

// Temporary solution because of silly build error, I'm research this trouble
// Locally all is ok!
export const getBackboneComponent = (display: string) => {
  return <>{display}</>;
};
