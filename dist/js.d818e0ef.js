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
var popularSlider = document.querySelector('.popular-cards__slider');
var popularBtnLeft = document.getElementById('popular-btn-left');
var popularBtnRight = document.getElementById('popular-btn-right');
var popularNavNumber = document.getElementsByClassName('popular-nav-number');
var popularNavNumber__border = document.getElementsByClassName('popular-nav-number__border'); //default configuration

leftBtnHide(); //slide function

function slideLeft() {
  popularSlider.style.transform = "translateX(-".concat(count * 25, "%)");
  console.log("start \uD83D\uDC4B");
  console.log("slide left: ".concat(count));
}

function slideRight() {
  popularSlider.style.transform = "translateX(".concat(count * 25, "%)");
  console.log("start \uD83D\uDC4B");
  console.log("slide Right: ".concat(count));
}

function slideReset() {
  popularSlider.style.transform = "translateX(0%)";
} //hide and show buttons


function leftBtnHide() {
  popularBtnLeft.style.display = 'none';
}

function leftBtnShow() {
  popularBtnLeft.style.display = 'inline-block';
}

function rightBtnHide() {
  popularBtnRight.style.display = 'none';
}

function rightBtnShow() {
  popularBtnRight.style.display = 'inline-block';
}

var slideIndex = 0;
var navIndex = 1;
var navIndexMax = 4;
var slideLeftIndex = null;
var slideRightIndex = null;
var maxSlideIndex = 2;
var navMax = 3; // default highlighter

popularNavNumber[0].classList.add('nav-number-active');
popularNavNumber__border[0].classList.add('border-active'); // navigationShow();

popularBtnLeft.addEventListener('click', function () {
  slideLeft();
});
popularBtnRight.addEventListener('click', slideRight);

function slideRight() {
  if (slideIndex === maxSlideIndex) {
    console.log(true);
    rightBtnHide();
  }

  if (slideLeftIndex > -1) {
    leftBtnShow();
  }

  console.log(" \uD83D\uDC49 navIndex BEFORE increment: ".concat(navIndex));
  navIndex++;
  console.log("\uD83D\uDC49 navIndex AFTER increment: ".concat(navIndex));
  navigationShow();
  popularSlider.style.transform = "translateX(-".concat(slideIndex * 25, "%)");
  navigationRemove();
  slideIndex++;
  console.log("slideIndex: ".concat(slideIndex));
  slideRightIndex++;
  console.log("slide right Index: ".concat(slideRightIndex));
  slideLeftIndex--;
  console.log("Slide Left Index: ".concat(slideLeftIndex));
  console.log(popularSlider.style.transform = "translateX(-".concat(slideIndex * 25, "%)"));
}

function slideLeft() {
  if (slideLeftIndex === -1) {
    leftBtnHide();
  }

  if (slideRightIndex > 1) {
    rightBtnShow();
  }

  console.log("\uD83D\uDC48 navIndex BEFORE decrement: ".concat(navIndex));
  navIndex--;
  console.log("\uD83D\uDC48 navIndex AFTER decrement: ".concat(navIndex));
  navigationShow();
  popularSlider.style.transform = "translateX(".concat(slideIndex * 25, "%)");
  navigationRemove();
  slideIndex--;
  slideLeftIndex++;
  console.log("slide right: ".concat(slideIndex));
  console.log("slideLeft Index: ".concat(slideLeftIndex));
  console.log(popularSlider.style.transform = "translateX(".concat(slideIndex * 25, "%)"));
}

function navigationShow() {
  popularNavNumber[navIndex - 1].classList.add('nav-number-active');
  popularNavNumber__border[navIndex - 1].classList.add('border-active');
}

function navigationRemove() {
  popularNavNumber[slideIndex].classList.remove('nav-number-active');
  popularNavNumber__border[slideIndex].classList.remove('border-active');
}
},{}],"src/js/testimonial.js":[function(require,module,exports) {
var slide1 = document.querySelector('.testimonial-cards_slide1');
var slide2 = document.querySelector('.testimonial-cards_slide2');
var btnRight = document.getElementById('testimonial-btn-right');
var btnLeft = document.getElementById('testimonial-btn-left');
var card = document.getElementsByClassName('testimonial-card');
var screenWidth = window.innerWidth; //default configuration

card[0].classList.add('cardActive'); // btnLeftHide();
// curCardActive++;

var slideIndex = null;
var curCardActive = 0;
var curCardActiveRight = 5;
var maxSlide = 6;
var slideLeftIndex = null;
var slideRightIndex = null;
btnRight.addEventListener('click', function () {
  // increase card active
  curCardActive++; //  show card active

  cardActiveRight();
  slideIndex++;
  slideLeftIndex++;
  console.log("current card index RIGHT: ".concat(slideIndex));
  console.log("current card ACTIVE index RIGHT: ".concat(curCardActive)); //remove previous active card

  cardRemoveLeft(); //slide2 in if slide1 reach curCardActive2

  if (curCardActive === 3) {
    slide2in();
  } //check for last slide


  if (slideIndex === maxSlide) {
    btnRight.style.display = 'none';
  }
});
btnLeft.addEventListener('click', function () {
  if (slideIndex === 0) {
    btnLeftHide();
  } // decrease card active
  //  curCardActive--;
  //  show card active


  cardActiveLeft();
  slideIndex--;
  slideLeftIndex--;
  console.log("current card index LEFT: ".concat(slideIndex));
  console.log("current card ACTIVE index LEFT: ".concat(curCardActive)); //remove previous active card

  cardRemoveRight(); //slide2 in if slide1 reach curCardActive2
  //  if (curCardActive === 3) {
  //   slide2in();
  //  }
  //check for last slide
  //  if (slideIndex === maxSlide) {
  //   btnRight.style.display = 'none';
  //  }
  //  console.log(`btn left Slideindex: ${slideIndex}`);
  //  slideIndex--;
  //  console.log(`btn left Slideindex: ${slideIndex}`);
  //  sliderightLogic();
  //  slideRight++;
});

function btnLeftHide() {
  btnLeft.style.display = 'none';
}

function btnLeftShow() {
  btnLeft.style.display = 'inline-block';
}

function slideLeft(num) {
  var transform = testimonialContainer.style.transform = "translateX(-".concat(slideIndex * num, "%)");
  console.log(transform);
}

function slideRight(num) {
  var transform = testimonialContainer.style.transform = "translateX(-".concat((slideIndex - 1) * num, "%)");
  console.log(" slide Right: ".concat(transform));
}

function sliderightLogic() {
  //slider logic
  if (screenWidth < 900 && screenWidth > 600) {
    console.log("true: ".concat(screenWidth));
    slideRight(50);
  }

  if (screenWidth < 500) {
    console.log("true: ".concat(screenWidth));
    slideRight(100);
  } else if (screenWidth > 950) {
    slideRight(30);
  }
}

function slideLeftLogic() {
  //slider logic
  if (screenWidth < 900 && screenWidth > 600) {
    console.log("true: ".concat(screenWidth));
    slideLeft(50);
  }

  if (screenWidth < 500) {
    console.log("true: ".concat(screenWidth));
    slideLeft(100);
  } else if (screenWidth > 950) {
    slideLeft(30);
  }
}

function cardActiveRight() {
  card[curCardActive].classList.add('cardActive');
}

function cardActiveLeft() {
  card[curCardActive - 1].classList.add('cardActive');
}

function cardRemoveLeft() {
  card[curCardActive - 1].classList.remove('cardActive');
}

function cardRemoveRight() {
  card[curCardActive].classList.remove('cardActive');
}

function slide2in() {
  slide1.style.transform = 'translateX(-100%)';
  slide2.style.transform = 'translateX(-110%)';
}

function slide1in() {
  slide2.style.transform = 'translateX(110%)';
  slide1.style.transform = 'translateX(0%)';
}
},{}],"src/js/index.js":[function(require,module,exports) {
"use strict";

require("./searchbar");

require("./mobileNav");

require("./popularSlider");

require("./testimonial");
},{"./searchbar":"src/js/searchbar.js","./mobileNav":"src/js/mobileNav.js","./popularSlider":"src/js/popularSlider.js","./testimonial":"src/js/testimonial.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57967" + '/');

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