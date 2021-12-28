// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/searchbar.js":[function(require,module,exports) {
var searchIcon = document.getElementById('searchIcon');
var iconContainer = document.querySelector('.header-icon'); // console.log(searchIcon);

searchIcon.addEventListener('click', function () {
  iconContainer.classList.toggle('searchbarActive');
});
},{}],"src/js/mobileNav.js":[function(require,module,exports) {
var mobileNavcontainer = document.querySelector('.nav-mobile');
var header = document.querySelector('.header');
var navcontainer = document.querySelector('.nav'); // burger nav logic

mobileNavcontainer.addEventListener('click', function () {
  header.classList.toggle('navActive');
});
},{}],"src/js/popularSlider.js":[function(require,module,exports) {
// const popularSlider = document.querySelector('.popular-cards__slider');
// const popularBtnLeft = document.getElementById('popular-btn-left');
// const popularBtnRight = document.getElementById('popular-btn-right');
// const popularNavNumber = document.getElementsByClassName('popular-nav-number');
// const popularNavNumber__border = document.getElementsByClassName(
//  'popular-nav-number__border'
// );
//default configuration
// leftBtnHide();
//////////////////////////////////////////
//slide function
// function slideLeft() {
//  popularSlider.style.transform = `translateX(-${count * 25}%)`;
//  console.log(`start 👋`);
//  console.log(`slide left: ${count}`);
// }
// function slideRight() {
//  popularSlider.style.transform = `translateX(${count * 25}%)`;
//  console.log(`start 👋`);
//  console.log(`slide Right: ${count}`);
// }
// function slideReset() {
//  popularSlider.style.transform = `translateX(0%)`;
// }
// //hide and show buttons
// function leftBtnHide() {
//  popularBtnLeft.style.display = 'none';
// }
// function leftBtnShow() {
//  popularBtnLeft.style.display = 'inline-block';
// }
// function rightBtnHide() {
//  popularBtnRight.style.display = 'none';
// }
// function rightBtnShow() {
//  popularBtnRight.style.display = 'inline-block';
// }
// let slideIndex = 0;
// let navIndex = 1;
// let navIndexMax = 4;
// let slideLeftIndex = null;
// let slideRightIndex = null;
// let maxSlideIndex = 2;
// let navMax = 3;
// // default highlighter
// popularNavNumber[0].classList.add('nav-number-active');
// popularNavNumber__border[0].classList.add('border-active');
// // navigationShow();
// popularBtnLeft.addEventListener('click', () => {
//  slideLeft();
// });
// popularBtnRight.addEventListener('click', slideRight);
// function slideRight() {
//  if (slideIndex === maxSlideIndex) {
//   console.log(true);
//   rightBtnHide();
//  }
//  if (slideLeftIndex > -1) {
//   leftBtnShow();
//  }
//  console.log(` 👉 navIndex BEFORE increment: ${navIndex}`);
//  navIndex++;
//  console.log(`👉 navIndex AFTER increment: ${navIndex}`);
//  navigationShow();
//  popularSlider.style.transform = `translateX(-${slideIndex * 25}%)`;
//  navigationRemove();
//  slideIndex++;
//  console.log(`slideIndex: ${slideIndex}`);
//  slideRightIndex++;
//  console.log(`slide right Index: ${slideRightIndex}`);
//  slideLeftIndex--;
//  console.log(`Slide Left Index: ${slideLeftIndex}`);
//  console.log(
//   (popularSlider.style.transform = `translateX(-${slideIndex * 25}%)`)
//  );
// }
// function slideLeft() {
//  if (slideLeftIndex === -1) {
//   leftBtnHide();
//  }
//  if (slideRightIndex > 1) {
//   rightBtnShow();
//  }
//  console.log(`👈 navIndex BEFORE decrement: ${navIndex}`);
//  navIndex--;
//  console.log(`👈 navIndex AFTER decrement: ${navIndex}`);
//  navigationShow();
//  popularSlider.style.transform = `translateX(${slideIndex * 25}%)`;
//  navigationRemove();
//  slideIndex--;
//  slideLeftIndex++;
//  console.log(`slide right: ${slideIndex}`);
//  console.log(`slideLeft Index: ${slideLeftIndex}`);
//  console.log(
//   (popularSlider.style.transform = `translateX(${slideIndex * 25}%)`)
//  );
// }
// function navigationShow() {
//  popularNavNumber[navIndex - 1].classList.add('nav-number-active');
//  popularNavNumber__border[navIndex - 1].classList.add('border-active');
// }
// function navigationRemove() {
//  popularNavNumber[slideIndex].classList.remove('nav-number-active');
//  popularNavNumber__border[slideIndex].classList.remove('border-active');
// }
////////////////////////////////////
var cards = document.querySelectorAll('.popular-card');
var navNumber = document.querySelectorAll('.popular-nav-number ');
var navNumberBorder = document.querySelectorAll('.popular-nav-number__border ');
var btnLeft = document.getElementById('popular-btn-left');
var btnRight = document.getElementById('popular-btn-right');
var slider = document.querySelector('.popular-cards__slider'); // console.log(slider);

navNumber[0].classList.add('nav-number-active');
navNumberBorder[0].classList.add('border-active');
leftBtnHide();
var curSlide = 0;
var slideRange = 25;
var maxSlide = 3;
var navMaxSlide = 4;
btnLeft.addEventListener('click', function () {
  if (curSlide === 0) {
    slider.style.transform = "translateX(-".concat(slideRange * 3, "%)");
    curSlide = 3;
  } else {
    curSlide--;
    var slide = slider.style.transform = "translateX(-".concat(slideRange * curSlide, "%)");
    console.log("Left:".concat(curSlide));
    console.log("left: ".concat(slide));
  }

  navigationRemoveRight();
  navigationShow();
});
btnRight.addEventListener('click', function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
    leftBtnHide();
  } else {
    curSlide++;
  }

  if (curSlide > 0) {
    leftBtnShow();
  }

  var sliderPosition = slider.style.transform = "translateX(-".concat(slideRange * curSlide, "%)");
  navigationRemove();
  navigationShow();
  console.log(curSlide);
  console.log(sliderPosition);
});

function leftBtnHide() {
  btnLeft.style.display = 'none';
}

function leftBtnShow() {
  btnLeft.style.display = 'inline-block';
}

function rightBtnHide() {
  btnRight.style.display = 'none';
}

function rightBtnShow() {
  btnRight.style.display = 'inline-block';
}

function navigationShow() {
  navNumber[curSlide].classList.add('nav-number-active');
  navNumberBorder[curSlide].classList.add('border-active');
}

function navigationRemove() {
  if (curSlide === 0) {
    navNumber[maxSlide].classList.remove('nav-number-active');
    navNumberBorder[maxSlide].classList.remove('border-active');
  } else {
    navNumber[curSlide - 1].classList.remove('nav-number-active');
    navNumberBorder[curSlide - 1].classList.remove('border-active');
  }
}

function navigationRemoveRight() {
  try {
    navNumber[curSlide + 1].classList.remove('nav-number-active');
    navNumberBorder[curSlide + 1].classList.remove('border-active');
  } catch (error) {
    if (error) {
      navNumber[curSlide].classList.remove('nav-number-active');
      navNumberBorder[curSlide].classList.remove('border-active');
      navNumber[0].classList.remove('nav-number-active');
      navNumberBorder[0].classList.remove('border-active');
    }
  }
}
},{}],"src/js/testimonial.js":[function(require,module,exports) {
var slide1 = document.querySelector('.testimonial-cards_slide1');
var slide2 = document.querySelector('.testimonial-cards_slide2');
var btnRight = document.getElementById('testimonial-btn-right');
var btnLeft = document.getElementById('testimonial-btn-left');
var card = document.getElementsByClassName('testimonial-card'); // //default configuration

card[0].classList.add('cardActive');
var curSlide = 0;
var maxSlide = 6;
var slide1Active = null;
var slide2Active = null;
var desktopSlide = true;
btnRight.addEventListener('click', function () {
  if (desktopSlide === true) {
    desktopSlide = true;
    slideNext();
  }
});
btnLeft.addEventListener('click', function () {
  if (desktopSlide === true) {
    desktopSlide = true;
    slidePrev();
    console.log('desktop btnLeft');
  }
});

function slideNext() {
  curSlide++;
  nextCard(curSlide);
  console.log(curSlide);

  if (curSlide === 3) {
    slide2in();
    slide2Active = true;
  }

  if (curSlide === 5) {
    btnRightHide();
  }

  if (curSlide > 0) {
    btnLeftShow();
  }

  console.log(slide2Active);
}

function slidePrev() {
  if (curSlide === 3 && slide2Active === true) {
    slide1in();
    slide2Active === false;
  }

  console.log(slide2Active);
  prevCard(curSlide);
  curSlide--;

  if (curSlide === 0) {
    btnLeftHide();
  }

  if (curSlide < 5) {
    btnRightShow();
  }

  console.log(curSlide);
}

function nextCard(slide) {
  card[slide].classList.add('cardActive');
  card[slide - 1].classList.remove('cardActive');
}

function prevCard(slide) {
  card[slide - 1].classList.add('cardActive');
  card[slide].classList.remove('cardActive');
}

function btnLeftHide() {
  btnLeft.style.display = 'none';
}

function btnLeftShow() {
  btnLeft.style.display = 'inline-block';
}

function btnRightHide() {
  btnRight.style.display = 'none';
}

function btnRightShow() {
  btnRight.style.display = 'inline-block';
}

function slide2in() {
  slide1.style.transform = 'translateX(-100%)';
  slide2.style.transform = 'translateX(-110%)';
}

function slide1in() {
  slide2.style.transform = 'translateX(110%)';
  slide1.style.transform = 'translateX(0%)';
} //media query match


var mediaQuery = window.matchMedia('(max-width:1388px)');

if (mediaQuery.matches) {
  var nextMobSlide = function nextMobSlide() {
    //condition for maxSlide
    if (curMobSlide === _maxSlide - 1) {
      curMobSlide = 0;
    } else {
      curMobSlide++;
    } //condition for leftBtn


    if (curMobSlide > 0) {
      btnLeftShow();
    } else if (curMobSlide === 0) {
      btnLeftHide();
    } //slides and cardActivation for each


    _card.forEach(function (slide, i) {
      slide.style.transform = "translateX(".concat(100 * (i - curMobSlide), "%) ");
      console.log(slide, i);
    });
  };

  var prevMobSlide = function prevMobSlide() {
    //condition for left btns and first slide
    if (curMobSlide === 1) {
      btnLeftHide();
    } else {
      btnLeftShow();
    } //decresing curMobSlide


    curMobSlide--; //   slide and activation for left btn

    _card.forEach(function (slide, i) {
      slide.style.transform = "translateX(-".concat(100 * (i - curMobSlide), "%) ");
      console.log(slide, i);
    });

    console.log(curMobSlide);
  };

  var initMobile = function initMobile() {
    _card.forEach(function (c, i) {
      c.style.transform = "translateX(".concat(100 * i, "%)");
      c.classList.add('cardActive');
    });
  };

  var _card = document.querySelectorAll('.testimonial-card');

  desktopSlide = false;
  var curMobSlide = 0;
  var _maxSlide = _card.length; //1.spreading card at this screensize
  //2.adding active card list to all

  btnRight.addEventListener('click', nextMobSlide);
  btnLeft.addEventListener('click', prevMobSlide);
  initMobile();
}
},{}],"src/js/stickyNav.js":[function(require,module,exports) {
var header = document.querySelector('.header');
var intersection = document.querySelector('.big-corps');
console.log(intersection);
var initCoord = intersection.getBoundingClientRect();
console.log(initCoord);
window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > initCoord.top) header.classList.add('navStick');else header.classList.remove('navStick');
});
},{}],"src/js/index.js":[function(require,module,exports) {
"use strict";

require("./searchbar");

require("./mobileNav");

require("./popularSlider");

require("./testimonial");

require("./stickyNav");
},{"./searchbar":"src/js/searchbar.js","./mobileNav":"src/js/mobileNav.js","./popularSlider":"src/js/popularSlider.js","./testimonial":"src/js/testimonial.js","./stickyNav":"src/js/stickyNav.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57502" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map