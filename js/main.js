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

var image1text = TweenMax.to('.pr-image1-text', 1, {
  transform: 'translate(0px, -20vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});


// layout 2

var l2Image1 = TweenMax.to('.pr-l2-image1', 1, {
  transform: 'translate(0px, -20vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

var l2Image1Container = TweenMax.to('.pr-l2-image1-container', 1, {
  transform: 'translate(0px, -20vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

var l2Image2 = TweenMax.to('.pr-l2-image2', 1, {
  transform: 'translate(0px, -20vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

var l2Image2Container = TweenMax.to('.pr-l2-image2-container', 1, {
  transform: 'translate(0px, 10vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

var l2Image3 = TweenMax.to('.pr-l2-image3', 1, {
  transform: 'translate(0px, -20vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

var l2Image3Container = TweenMax.to('.pr-l2-image3-container', 1, {
  transform: 'translate(0px, -20vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

//layout 3


var l3Image1 = TweenMax.to('.pr-l3-image1', 1, {
  transform: 'translate(0px, -20vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

var l3Image1Container = TweenMax.to('.pr-l3-image1-container', 1, {
  transform: 'translate(0px, 15vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

var l3Image2Container = TweenMax.to('.pr-l3-image2-container', 1, {
  transform: 'translate(0px, 15vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

var l3TextContainer = TweenMax.to('.pr-l3-text-container', 1, {
  transform: 'translate(0px, -15vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

// var l3Image2 = TweenMax.to('.pr-l2-image2', 1, {
//   transform: 'translate(0px, -20vh)',
//   ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
// });

//4th layout

var l4Image1Container = TweenMax.to('.pr-l4-image1-container', 1, {
  transform: 'translate(0px, -20vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

var l4Image1 = TweenMax.to('.pr-l4-image1', 1, {
  transform: 'translate(0px, -20vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});

var l4Image1text = TweenMax.to('.pr-l4-text-container', 1, {
  transform: 'translate(0px, -20vh)',
  ease: Linear.easeNone, /* make sure you use Linear.easeNone so its smooth */
});




var mainIllustrationFunction = function(){

  //header

  var layerHeader = new ScrollMagic.Scene( {triggerElement: "#trigger-header", duration: 1400 } )
  .setTween(header)
  .addTo(controller);


  //currentExibitions

   // 1st layout

  var layerCurrentExib = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 1000, offset: -200 } )
  .setTween(currentExibitions)
  .addTo(controller);

  var layerImage1Container = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 1200 } )
  .setTween(image1Container)
  .addTo(controller);

  var layerImage1 = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 2500 } )
  .setTween(image1)
  .addTo(controller);

  var layerImage1Text = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 650 } )
  .setTween(image1text)
  .addTo(controller);


  // 2nd layout

  var layerL2Image1Container = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 1400 } )
  .setTween(l2Image1Container)
  .addTo(controller);

  var layerL2Image1 = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 1400 } )
  .setTween(l2Image1)
  .addTo(controller);

  var layerL2Image2Container = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 1400 } )
  .setTween(l2Image2Container)
  .addTo(controller);

  var layerL2Image2 = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 1400 } )
  .setTween(l2Image2)
  .addTo(controller);

  var layerL2Image3Container = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 1400 } )
  .setTween(l2Image3Container)
  .addTo(controller);

  var layerL2Image3 = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 1400 } )
  .setTween(l2Image3)
  .addTo(controller);

  // 3rd layout

  var layerL3Image1Container = new ScrollMagic.Scene( {triggerElement: "#trigger-2", duration: 1400 ,  } )
  .setTween(l3Image1Container)
  .addTo(controller);

  var layerL3Image2Container = new ScrollMagic.Scene( {triggerElement: "#trigger-2", duration: 1000 } )
  .setTween(l3Image2Container)
  .addTo(controller);

  var layerL3TextContainer = new ScrollMagic.Scene( {triggerElement: "#trigger-2", duration: 1400 , offset: 500 } )
  .setTween(l3TextContainer)
  .addTo(controller);

  //4th layout

  var layer4Image1Container = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 1200 } )
  .setTween(image1Container)
  .addTo(controller);

  var layer4Image1 = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 2500 } )
  .setTween(image1)
  .addTo(controller);

  var layer4Image1Text = new ScrollMagic.Scene( {triggerElement: "#trigger-1", duration: 650 } )
  .setTween(image1text)
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
