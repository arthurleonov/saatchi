//scrollmagic

var controller = new ScrollMagic.Controller();

var mainDuration = function(){
  return  $(window).height();
};

console.log($(document).height());
console.log($(window).height());

//header

var header = TweenMax.to('.pr-header-1', 1, {
  transform: 'translate(0px, 15vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

//cuurent exibitions

var currentExibitions = TweenMax.to('.pr-currentExibitions', 1, {
  transform: 'translate(0px, -10vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

var image1Container = TweenMax.to('.pr-image1-container', 1, {
  transform: 'translate(0px, -20vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

var image1 = TweenMax.to('.pr-image1', 1, {
  transform: 'translate(0px, -20vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

var text = TweenMax.to('.index-2', 1, {
  transform: 'translate(0px, -25vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});


var title = TweenMax.to('.index-3', 1, {
  transform: 'translate(0px, -10vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});



var mainIllustrationFunction = function(){

  //header

  var layerHeader = new ScrollMagic.Scene( {triggerElement: "#trigger-header", duration: 1400 } )
  .setTween(header)
  .addTo(controller);


  //currentExibitions

  var layer3Scene = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 1000, offset: -200 } )
  .setTween(currentExibitions)
  .addTo(controller);

  var layer1Scene = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 1200 } )
  .setTween(image1Container)
  .addTo(controller);


  var layer1Scene = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 2500 } )
  .setTween(image1)
  .addTo(controller);

  var layer2Scene = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 1400 } )
  .setTween(text)
  .addTo(controller);

  var layer3Scene = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 1400 } )
  .setTween(title)
  .addTo(controller);

}

$(window).on('load', function(){
  mainIllustrationFunction();
});

$(window).on('resize',function(){
  controller = controller.destroy(true);
  controller = new ScrollMagic.Controller();
  mainIllustrationFunction();
});









//disabling scrolling

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

//disable scroll
function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

//enable scroll
function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}
