// vignette reveal
(function () {
	var boxes;
	var medias;
	var windowHeight;

	function init() {
		boxes = $('.vignette-reveal-box');
		medias = $('.vignette-reveal-media');
		windowHeight = window.innerHeight;
	}

	function checkPosition() {

		for (i=0;i<boxes.length;i++) {
      var box = boxes[i];
      var media = medias[i];

      var top = box.getBoundingClientRect().top;
      var bottom = box.getBoundingClientRect().bottom;

  		var width = ((windowHeight-top)/windowHeight*200)+100;
  		var height = ((windowHeight-top)/windowHeight*100)+100;
  		var opacity = (windowHeight/4-top)/(windowHeight/4);

      var width2 = (bottom/windowHeight*200)+100;
  		var height2 = (bottom/windowHeight*100)+100;
  		var opacity2 = (bottom-(windowHeight*3/4))*4/windowHeight


      if (top < windowHeight && bottom > 0) {
        media.style.opacity = 1;
      } else {
  			media.style.opacity = 0;
      }
  		if (top > windowHeight) {
  			box.style.webkitMaskSize = '100% 100%';
  		} else if (top <= windowHeight && top > 0) {
  			box.style.webkitMaskSize = width+'% ' + height+'%';
  		} else if (top <= 0 && bottom > windowHeight) {
  			box.style.webkitMaskSize = '300% 200%';
  		} else if (bottom <= windowHeight && bottom > 0) {
  			box.style.webkitMaskSize = width2+'% ' + height2+'%';
  		} else {
  			box.style.webkitMaskSize = '100% 100%';
  		}

  		if (top > windowHeight/4) {
  			box.style.opacity = 1;
  		} else if (top <= windowHeight/4 && top > 0) {
  			box.style.opacity = 1 - opacity;
  		} else if (top <= 0 && bottom > windowHeight) {
  			box.style.opacity = 0;
  		} else if (bottom <= windowHeight && bottom>(windowHeight*3)/4) {
  			box.style.opacity = 1-opacity2;
  		} else {
        box.style.opacity = 1;
      }
    }
	}
	window.addEventListener('scroll', checkPosition);
	window.addEventListener('resize', init);
	init();
	checkPosition();
})();

(function () {
  var content;
  var image;
  var windowHeight;
	function init() {
    content = $('.temperature div')[0];
    image = $('.temperature div')[1];
    windowHeight = window.innerHeight;
	}
	function checkPosition() {
    var top = content.getBoundingClientRect().top;
    var bottom = (windowHeight/3-top)*165/windowHeight;

    if (top > windowHeight/3) {
      image.style.bottom = '-55vh';
    } else if (top <= windowHeight/3 && top > 0) {
      image.style.bottom = bottom-55 +'vh';
    } else {
      image.style.bottom = 0 +'vh';
    }
	}
	window.addEventListener('scroll', checkPosition);
	window.addEventListener('resize', init);
	init();
	checkPosition();
})();
