window.onload = initialize;

function initialize(){
  // document.querySelector("#my-scene").addEventListener("loaded", makeVisibleSoundButton);
  document.querySelector("#speaker-button").addEventListener("click", toggleSound);
}

// function makeVisibleSoundButton(){
//   document.querySelector("#speaker-button").style.visibility = "visible";
// }

function toggleSound(event){
  
  var mySky = document.querySelector("#my-sky");
  var speakerImg = document.querySelector("#speaker-img");

  var sounding = mySky.getAttribute("sounding");
  
  if(sounding == "true"){
    mySky.setAttribute("sounding", false);
    speakerImg.src = "img/sound_off.png";
    mySky.components.sound.stopSound();
  } else {
    mySky.setAttribute("sounding", true);
    speakerImg.src = "img/sound_on.png";
    mySky.components.sound.playSound();
  }
}