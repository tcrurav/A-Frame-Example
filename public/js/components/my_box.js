var sound = true;

AFRAME.registerComponent('scale-on-mouseenter', {
  dependencies: ['material'],
  schema: {
    to: {
      default: '2.5 2.5 2.5'
      // , type: 'vec3'
    }
  },

  init: function () {
    var data = this.data;
    console.log("mouseenter: " + JSON.stringify(data));
    var el = this.el;
    this.el.addEventListener('mouseenter', function () {
      el.object3D.scale.copy(data.to);
      document.querySelector("#my-sky").setAttribute("material", "src", "#img-360-cuatro-puertas-inside");
      console.log("depués de query");
    });
  }
});

AFRAME.registerComponent('scale-on-mouseleave', {
  schema: {
    to: {
      default: '1 1 1'
      // , type: 'vec3'
    }
  },

  init: function () {
    var data = this.data;
    console.log("mouseleave: " + data);
    var el = this.el;
    this.el.addEventListener('mouseleave', function () {
      el.object3D.scale.copy(data.to);
    });
  },

  update: function () {
    console.log("update mouseleave: " + this.data);
  }
});