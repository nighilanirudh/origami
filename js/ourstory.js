(function() {
  var space;
  var overlay;
  var windowHeight;
  var headers;
  var desc;
  function init() {
    windowHeight = window.innerHeight;
    overlay = document.querySelector('.create-over');
    space = document.querySelector('.create-space');
    headers = document.querySelectorAll('.create-content h1');
    desc = document.querySelectorAll('.create-content p');
  }
  function checkPosition() {
    var spaceTop = space.getBoundingClientRect().top;
    var spaceBottom = space.getBoundingClientRect().bottom;
    var spaceHeight = space.clientHeight;
    if (spaceTop>=0) {
      overlay.style.position = "absolute";
    } else if (spaceTop<=0&&spaceBottom>=windowHeight) {
      overlay.style.position = "fixed";
      overlay.style.top = "0px";
    } else if (spaceBottom<=windowHeight) {
      overlay.style.position = "absolute";
      overlay.style.top = (spaceHeight-windowHeight)+"px";
    }
    if (spaceTop<=0) {
      var breakPoint = Math.floor(windowHeight*0.3);
      var measure = spaceTop*-1
      switch (true) {
        case (measure<breakPoint):
          var x = breakPoint;
          var opacityh = (x-measure)/(breakPoint);
          desc[0].style.opacity = 1-opacityh;
          headers[0].style.opacity = 1-opacityh;
          headers[0].style.transform = "translateY("+opacityh*15+"vh)";
          break;
        case (measure<breakPoint*2):
          desc[1].style.opacity = 0;
          headers[1].style.opacity = 0;
          break;
        case (measure<breakPoint*3):
          var x = breakPoint*3;
          var opacityh = (x-measure)/(breakPoint);
          desc[0].style.opacity = opacityh;
          desc[1].style.opacity = 1-opacityh;
          headers[0].style.opacity = opacityh;
          headers[0].style.transform = "translateY("+((opacityh*15)-15)+"vh)";
          headers[1].style.opacity = 1-opacityh;
          headers[1].style.transform = "translateY("+opacityh*15+"vh)";
          break;
        case (measure<breakPoint*4):
          desc[0].style.opacity = 0;
          desc[2].style.opacity = 0;
          headers[0].style.opacity = 0;
          headers[2].style.opacity = 0;
          break;
        case (measure<breakPoint*5):
          var x = breakPoint*5;
          var opacityh = (x-measure)/(breakPoint);
          desc[1].style.opacity = opacityh;
          desc[2].style.opacity = 1-opacityh;
          headers[1].style.opacity = opacityh;
          headers[1].style.transform = "translateY("+((opacityh*15)-15)+"vh)";
          headers[2].style.opacity = 1-opacityh;
          headers[2].style.transform = "translateY("+opacityh*15+"vh)";
          break;
        case (measure<breakPoint*6):
          desc[1].style.opacity = 0;
          desc[3].style.opacity = 0;
          headers[1].style.opacity = 0;
          headers[3].style.opacity = 0;
          break;
        case (measure<breakPoint*7):
          var x = breakPoint*7;
          var opacityh = (x-measure)/(breakPoint);
          desc[2].style.opacity = opacityh;
          desc[3].style.opacity = 1-opacityh;
          headers[2].style.opacity = opacityh;
          headers[2].style.transform = "translateY("+((opacityh*15)-15)+"vh)";
          headers[3].style.opacity = 1-opacityh;
          headers[3].style.transform = "translateY("+opacityh*15+"vh)";
          break;
        case (measure<breakPoint*8):
          desc[2].style.opacity = 0;
          desc[4].style.opacity = 0;
          headers[2].style.opacity = 0;
          headers[4].style.opacity = 0;
          break;
        case (measure<breakPoint*9):
          var x = breakPoint*9;
          var opacityh = (x-measure)/(breakPoint);
          desc[3].style.opacity = opacityh;
          desc[4].style.opacity = 1-opacityh;
          headers[3].style.opacity = opacityh;
          headers[3].style.transform = "translateY("+((opacityh*15)-15)+"vh)";
          headers[4].style.opacity = 1-opacityh;
          headers[4].style.transform = "translateY("+opacityh*15+"vh)";
          break;
        case (measure<breakPoint*10):
          desc[3].style.opacity = 0;
          desc[5].style.opacity = 0;
          headers[3].style.opacity = 0;
          headers[5].style.opacity = 0;
          break;
        case (measure<breakPoint*11):
          var x = breakPoint*11;
          var opacityh = (x-measure)/(breakPoint);
          desc[4].style.opacity = opacityh;
          desc[5].style.opacity = 1-opacityh;
          headers[4].style.opacity = opacityh;
          headers[4].style.transform = "translateY("+((opacityh*15)-15)+"vh)";
          headers[5].style.opacity = 1-opacityh;
          headers[5].style.transform = "translateY("+opacityh*15+"vh)";
          break;
        case (measure<breakPoint*12):
          desc[4].style.opacity = 0;
          desc[6].style.opacity = 0;
          headers[4].style.opacity = 0;
          headers[6].style.opacity = 0;
          break;
        case (measure<breakPoint*13):
          var x = breakPoint*13;
          var opacityh = (x-measure)/(breakPoint);
          desc[5].style.opacity = opacityh;
          desc[6].style.opacity = 1-opacityh;
          headers[5].style.opacity = opacityh;
          headers[5].style.transform = "translateY("+((opacityh*15)-15)+"vh)";
          headers[6].style.opacity = 1-opacityh;
          headers[6].style.transform = "translateY("+opacityh*15+"vh)";
          break;
        case (measure<breakPoint*14):
          desc[5].style.opacity = 0;
          desc[7].style.opacity = 0;
          headers[5].style.opacity = 0;
          headers[7].style.opacity = 0;
          break;
        case (measure<breakPoint*15):
          var x = breakPoint*15;
          var opacityh = (x-measure)/(breakPoint);
          desc[6].style.opacity = opacityh;
          desc[7].style.opacity = 1-opacityh;
          headers[6].style.opacity = opacityh;
          headers[6].style.transform = "translateY("+((opacityh*15)-15)+"vh)";
          headers[7].style.opacity = 1-opacityh;
          headers[7].style.transform = "translateY("+opacityh*15+"vh)";
          break;
        case (measure>breakPoint*15):
          desc[7].style.opacity = 1;
          desc[6].style.opacity = 0;
          headers[7].style.opacity = 1;
          headers[7].style.transform = "translateY(0vh)";
          headers[6].style.opacity = 0;
          break;
        default:
          for (var i=0;i<headers.length;i++) {
            headers[i].style.opacity = 0;
          }
          break;
      }
    }
  }
  window.addEventListener('scroll', checkPosition)
  window.addEventListener('resize', init)
  init();
  checkPosition();
})();
