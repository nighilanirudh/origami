// SLIDE OVER ANIMATION
(function() {
  var elements;
  var divs;
  var windowHeight;
  function init() {
    elements = $('.slide-over');
    divs = $('.slide-over-div');
    windowHeight = $(window).height();
  }
  function checkPosition() {
    for (i=0;i<elements.length;i++) {
      var top = elements[i].getBoundingClientRect().top;
      var bottom = elements[i].getBoundingClientRect().bottom;
      if (top<=0) {
        divs[i].style.position = 'fixed';
        divs[i].style.zIndex = 0;
      } else {
        divs[i].style.position = 'absolute';
        divs[i].style.zIndex = 10;
      }
      if (bottom<=0) {
        divs[i].style.opacity = 0;
      } else {
        divs[i].style.opacity = 1;
      }
    }
  }
  init();
  checkPosition();
  $(window).resize(init);
  $(window).scroll(checkPosition);
})();

// LINEAR WIPE SCROLL
(function() {
  var elements;
  var windowHeight;

  // Selection of values based on page name
  var path = window.location.pathname;
  var page1 = path.split("/").pop();
  page = page1.substring(0, page1.length - 5)
  var select = {index:0, ourstory:1, reachus:2, facilities:3};
  var values = [
    //Index Page
    [
      [0.8,0.3],//dreams
      [0.9,0.6],//why
      [0.9,0.4],//curriculum
      [0.9,0.4],//class-size
      [0.9,0.4],//physical
      [0.9,0.4],//character
      [0.9,0.4],//facilities
      [0.9,0.5]//apply
    ],
    // Our Story
    [
      [0.9, 0.5],
      [0.9, 0.5],
      [0.9, 0.5],
      [0.8, 0.3],
      [0.8, 0.5]
    ],
    //reachus
    [
      [0.9, 0.4],
      [0.9, 0.4],
      [0.9, 0.4]
    ],
    // facilities
    [
      [0.9, 0.6],//learning spaces
      [0.9, 0.4],//interactive Panels
      [0.9, 0.6],//windows
      [1, 0.7],//temperature
      [0.9, 0.6],//arena
      [0.9, 0.3],//floor
      [0.9, 0.6],//labs
      [0.9, 0.6]//safety
    ]
  ]
  function init() {
    elements = $('.linear-wipe-scroll');
    windowHeight = $(window).height();
  }

  function checkPosition() {
    for (i=0;i<elements.length;i++) {
      var top = elements[i].getBoundingClientRect().top;
      var startPoint = values[select[page]][i][0]*windowHeight;
      var endPoint = values[select[page]][i][1]*windowHeight;
      var range = startPoint-endPoint;
      var pos = 100 - ((startPoint-top)*100)/range;

      if (top<startPoint&&top>endPoint) {
        elements[i].style.webkitMaskPosition = pos + '%';
      } else if (top>=startPoint) {
        elements[i].style.webkitMaskPosition = '100%';
      } else {
        elements[i].style.webkitMaskPosition = '0%';
      }
    }
  }
  init();
  checkPosition();
  $(window).resize(init);
  $(window).scroll(checkPosition);
})();



// FADE-IN-SCROLL
(function() {
  var elements;
  var windowHeight;

  // Selection of values based on page name
  var path = window.location.pathname;
  var page1 = path.split("/").pop();
  page = page1.substring(0, page1.length - 5)
  var select = {index:0, ourstory:1, reachus:2, facilities:3};
  var values = [
    //Index Page
    [
      [0.9,0.4],//prepare
      [0.9,0.6],//ourstory button
      [0.8,0.5],//curriculum text
      [0.85,0.7],//curriculum button
      [0.8,0.5],//class-size text
      [0.85,0.7],//class-size button
      [0.8,0.5],//physical text
      [0.85,0.6],//physical button
      [1,0.5],//physical image container
      [0.8,0.5],//character text
      [0.85,0.6],//character button
      [0.8,0.5],//facilities text
      [0.85,0.6],//facilities Button
      [1,0.5],//facilities image container
      [0.75,0.6]//apply button
    ],
    // Our Story
    [
      [0.9, 0.75],
      [0.9, 0.75],
      [0.9, 0.75],
      [0.9, 0.75],
      [0.8, 0.5],
      [1, 0.8],
      [0.8, 0.5],
      [1, 0.8],
      [0.8, 0.5],
      [1, 0.8]
    ],
    //reachus
    [
      [0.6, 0.2],
      [0.9, 0.4],
      [0.9, 0.6],
      [0.9, 0.6],
      [0.9, 0.6]
    ],
    //facilities
    [
      [0.9, 0.6],//learning p1
      [0.9, 0.6],//learning p2
      [0.9, 0.4],//learning img
      [1, 0.8], //interactive
      [0.9, 0.6],//interactive p1
      [0.9, 0.6],//interactive hr1
      [0.9, 0.6],//interactive p2
      [0.9, 0.6],//interactive hr2
      [0.9, 0.6],//interactive p3
      [0.9, 0.4],//windows img-pc
      [0.9, 0.6],//windows p1
      [0.9, 0.6],//windows p2
      [0.9, 0.4],//windows img-mob
      [1, 0.7],//temperature p1
      [1, 0.7],//temperature p2
      [0.9, 0.6],//arena p1
      [0.9, 0.6],//arena p2
      [1, 0.8],//floor
      [0.9, 0.6],//floor p1
      [0.9, 0.6],//floor hr1
      [0.9, 0.6],//floor p2
      [0.9, 0.6],//labs p1
      [0.9, 0.6],//labs p2
      [0.9, 0.4],//labs img
      [0.9, 0.6]//safety p1
    ]
  ]
  function init() {
    elements = $('.fade-in-scroll');
    windowHeight = $(window).height();
  }

  function checkPosition() {
    for (i=0;i<elements.length;i++) {
      var top = elements[i].getBoundingClientRect().top;
      var startPoint = values[select[page]][i][0]*windowHeight;
      var endPoint = values[select[page]][i][1]*windowHeight;
      var range = startPoint-endPoint;
      var opacity = (startPoint-top)/range;

      if (top<startPoint&&top>endPoint) {
        elements[i].style.opacity = opacity;
      } else if (top<endPoint) {
        elements[i].style.opacity = 1;
      } else {
        elements[i].style.opacity = 0;
      }
    }
  }
  init();
  checkPosition();
  $(window).resize(init);
  $(window).scroll(checkPosition);
})();


// SLIDE-IN-SCROLL
(function() {
  var elements;
  var windowHeight;

  // Selection of values based on page name
  var path = window.location.pathname;
  var page1 = path.split("/").pop();
  page = page1.substring(0, page1.length - 5)
  var select = {index:0, ourstory:1, reachus:2, facilities:3};
  var values = [
    //Index Page
    [
      [0.9,0.6],//ourstory button
      [0.8,0.5],//curriculum text
      [0.85,0.7],//curriculum button
      [0.8,0.5],//class-size text
      [0.85,0.7],//class-size button
      [0.8,0.5],//physical text
      [0.85,0.6],//physical button
      [0.8,0.5],//character text
      [0.85,0.6],//character button
      [0.8,0.5],//facilities text
      [0.85,0.6],//facilities Button
    ],
    // Our Story
    [
      [0.9, 0.75],
      [0.9, 0.75],
      [0.9, 0.75],
      [0.9, 0.75],
      [1, 0.8],
      [1, 0.8],
      [1, 0.8]
    ],
    //reachus
    [
      [0.9, 0.4],
      [0.9, 0.6],
      [0.9, 0.6],
      [0.9, 0.6]
    ],
    //facilities
    [
      [0.9, 0.6],//learning p1
      [0.9, 0.6],//learning p2
      [0.9, 0.6],//interactive p1
      [0.9, 0.6],//interactive hr1
      [0.9, 0.6],//interactive p2
      [0.9, 0.6],//interactive hr2
      [0.9, 0.6],//interactive p3
      [0.9, 0.6],//windows p1
      [0.9, 0.6],//windows p2
      [1, 0.7],//temperature p1
      [1, 0.7],//temperature p2
      [1, 0.7],//temperature p3
      [0.9, 0.6],//arena p1
      [0.9, 0.6],//arena p2
      [0.9, 0.6],//floor p1
      [0.9, 0.6],//floor hr1
      [0.9, 0.6],//floor p2
      [0.9, 0.6],//labs p1
      [0.9, 0.6],//labs p2
      [0.9, 0.6]//safety p1
    ]
  ]
  function init() {
    elements = $('.slide-in-scroll');
    windowHeight = $(window).height();
  }

  function checkPosition() {
    for (i=0;i<elements.length;i++) {
      var top = elements[i].getBoundingClientRect().top;
      var startPoint = values[select[page]][i][0]*windowHeight;
      var endPoint = values[select[page]][i][1]*windowHeight;
      var range = startPoint-endPoint;
      var y = 5 - ((startPoint-top)*5/range);

      if (top<startPoint&&top>endPoint) {
        elements[i].style.transform = "translateY("+y+"vh)";
      } else if (top<endPoint) {
        elements[i].style.transform = "translateY(0vh)";
      } else {
        elements[i].style.transform = "translateY(5vh)";
      }
    }
  }
  init();
  checkPosition();
  $(window).resize(init);
  $(window).scroll(checkPosition);
})();

// INTRO ANIMATION
(function () {
	var intro;
	var photo;
	var range;
	var container;

	function init() {
		photo = document.querySelector('.intro-img');
		intro = document.querySelector('.intro-text');
		container = document.querySelector('.intro-cnt');
		range = window.innerHeight;
	}

	function checkPosition() {
		var scrollTop = window.pageYOffset;
		var zoom = Math.floor(scrollTop / 10);
		var opacity = 1 - scrollTop / range;
		photo.style.opacity = opacity;
		if (opacity < 0) {
			photo.style.display = "none";
			intro.style.position = "absolute";
			intro.style.top = "100vh";
		} else {
			photo.style.display = "block";
			photo.style.minHeight = 100 + zoom + "vh";
			photo.style.minWidth = 100 + zoom + "vw";
			photo.style.top = -zoom / 2 + "vh";
			photo.style.left = -zoom / 2 + "vw";
			container.style.minHeight = 100 + zoom + "vh";
			container.style.minWidth = 100 + zoom + "vw";
			container.style.top = -zoom / 2 + "vh";
			container.style.left = -zoom / 2 + "vw";
			intro.style.position = "fixed";
			intro.style.top = "0";
			intro.style.opacity = 1 - opacity;
		}
	}
	window.addEventListener('scroll', checkPosition);
	window.addEventListener('resize', init);
	init();
	checkPosition();
})();

// parallax12
(function () {
	var elements;
	var windowHeight;

	function init() {
		elements = document.querySelectorAll('.parallaxvs-over');
		windowHeight = window.innerHeight;
	}

	function checkPosition() {
		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			var photo = document.querySelectorAll(".parallaxvs-img")[i];
			var overlayTop = element.getBoundingClientRect().top;
			var overlayBottom = element.getBoundingClientRect().bottom;
			var overlayCenter = (overlayTop + overlayBottom) / 2;
			var windowCenter = windowHeight / 2;
			var changeInPos = Math.floor((overlayCenter - windowCenter) / 1.25);
			changeInPos = changeInPos * -1;
			if (overlayBottom > 0 && overlayTop <= windowHeight) {
				photo.style.visibility = "visible";
				photo.style.top = (overlayTop + window.scrollY + changeInPos) + "px";
			} else {
				photo.style.visibility = "hidden";
				photo.style.top = "0px";
			}
		}
	}
	window.addEventListener('scroll', checkPosition);
	window.addEventListener('resize', init);
	init();
	checkPosition();
})();
