AFRAME.registerComponent('change-site', {
  schema: {
    img: {
      default: "", type: "string"
    },
    sound: {
      default: "", type: "string"
    },
    zone: {
      default: "", type: "string"
    }
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    this.el.addEventListener('mouseenter', function () {
      console.log("clickió");

      var parentEntity = el.parentNode;
      var grandParentEntity = parentEntity.parentNode;

      var thisAPlane = parentEntity.querySelector("a-plane");
      thisAPlane.classList.remove("clickable");
      console.log("thisAPlane: " + JSON.stringify(thisAPlane.classList));

      var allAPlane = grandParentEntity.querySelectorAll("a-plane");
      Object.keys(allAPlane).forEach(function(key){
        if(allAPlane[key] != thisAPlane) {
          allAPlane[key].classList.add("clickable");
        }
      });

      var allABox = grandParentEntity.querySelectorAll("a-box");
      Object.keys(allABox).forEach(function(key){
        allABox[key].setAttribute("visible", "false");
      });

      var parentEntityABox = parentEntity.querySelector("a-box");
      parentEntityABox.setAttribute("visible", "true");

      var allAText = grandParentEntity.querySelectorAll("a-text");
      Object.keys(allAText).forEach(function(key){
        allAText[key].setAttribute("color", "gray");
      });

      var aText = thisAPlane.querySelector("a-text");
      if(aText) aText.setAttribute("color", "white");

      var allACircle = grandParentEntity.querySelectorAll("a-circle");
      Object.keys(allACircle).forEach(function(key){
        allACircle[key].setAttribute("visible", "false");
        allACircle[key].classList.remove("clickable");
      });

      var allACircleInThisZone = parentEntity.querySelectorAll(data.zone);
      Object.keys(allACircleInThisZone).forEach(function(key){
        allACircleInThisZone[key].setAttribute("visible", "true");
        allACircleInThisZone[key].classList.add("clickable");
      });

      var mySky = document.querySelector("#my-sky");
      mySky.setAttribute("sound", "src", data.sound);
      mySky.setAttribute("material", "src", data.img);

      if(mySky.getAttribute("sounding") == "true"){
        mySky.components.sound.playSound();
      }

      console.log("terminó clickió");
    });
  }
});