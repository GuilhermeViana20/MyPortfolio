/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{257:function(t,e,n){(function(e){t.exports=function t(e,n,o){function s(r,u){if(!n[r]){if(!e[r]){if(i)return i(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var h=n[r]={exports:{}};e[r][0].call(h.exports,(function(t){var n=e[r][1][t];return s(n||t)}),h,h.exports,t,e,n,o)}return n[r].exports}for(var i=!1,r=0;r<o.length;r++)s(o[r]);return s}({1:[function(t,e,n){"use strict";var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function h(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function c(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}e.exports=c()?Object.assign:function(t,source){for(var e,n,c=h(t),s=1;s<arguments.length;s++){for(var d in e=Object(arguments[s]))r.call(e,d)&&(c[d]=e[d]);if(o){n=o(e);for(var i=0;i<n.length;i++)l.call(e,n[i])&&(c[n[i]]=e[n[i]])}}return c}},{}],2:[function(t,e,n){(function(t){(function(){var n,o,r,l,h,c;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-h)/1e6},o=t.hrtime,l=(n=function(){var hr;return 1e9*(hr=o())[0]+hr[1]})(),c=1e9*t.uptime(),h=l-c):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,n){var o,r,l=e.exports={};function h(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function d(t){if(o===setTimeout)return setTimeout(t,0);if((o===h||!o)&&setTimeout)return o=setTimeout,setTimeout(t,0);try{return o(t,0)}catch(e){try{return o.call(null,t,0)}catch(e){return o.call(this,t,0)}}}function m(marker){if(r===clearTimeout)return clearTimeout(marker);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(marker);try{return r(marker)}catch(t){try{return r.call(null,marker)}catch(t){return r.call(this,marker)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:h}catch(t){o=h}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(t){r=c}}();var f,v=[],w=!1,y=-1;function Y(){w&&f&&(w=!1,f.length?v=f.concat(v):y=-1,v.length&&X())}function X(){if(!w){var t=d(Y);w=!0;for(var e=v.length;e;){for(f=v,v=[];++y<e;)f&&f[y].run();y=-1,e=v.length}f=null,w=!1,m(t)}}function k(t,e){this.fun=t,this.array=e}function T(){}l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];v.push(new k(t,e)),1!==v.length||w||d(X)},k.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=T,l.addListener=T,l.once=T,l.off=T,l.removeListener=T,l.removeAllListeners=T,l.emit=T,l.prependListener=T,l.prependOnceListener=T,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},{}],4:[function(t,n,o){(function(e){for(var o=t("performance-now"),r="undefined"==typeof window?e:window,l=["moz","webkit"],h="AnimationFrame",c=r["request"+h],d=r["cancel"+h]||r["cancelRequest"+h],i=0;!c&&i<l.length;i++)c=r[l[i]+"Request"+h],d=r[l[i]+"Cancel"+h]||r[l[i]+"CancelRequest"+h];if(!c||!d){var m=0,f=0,v=[],w=1e3/60;c=function(t){if(0===v.length){var e=o(),n=Math.max(0,w-(e-m));m=n+e,setTimeout((function(){var t=v.slice(0);v.length=0;for(var i=0;i<t.length;i++)if(!t[i].cancelled)try{t[i].callback(m)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(n))}return v.push({handle:++f,callback:t,cancelled:!1}),f},d=function(t){for(var i=0;i<v.length;i++)v[i].handle===t&&(v[i].cancelled=!0)}}n.exports=function(t){return c.call(r,t)},n.exports.cancel=function(){d.apply(r,arguments)},n.exports.polyfill=function(){r.requestAnimationFrame=c,r.cancelAnimationFrame=d}}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,n){"use strict";var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var l=t("raf"),h=t("object-assign"),c={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,n){return e<n?t<e?e:t>n?n:t:t<n?n:t>e?e:t},data:function(element,t){return c.deserialize(element.getAttribute("data-"+t))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))},accelerate:function(element){c.css(element,"transform","translate3d(0,0,0) rotate(0.0001deg)"),c.css(element,"transform-style","preserve-3d"),c.css(element,"backface-visibility","hidden")},transformSupport:function(t){for(var element=document.createElement("div"),e=!1,n=null,o=!1,r=null,l=null,i=0,h=c.vendors.length;i<h;i++)if(null!==c.vendors[i]?(r=c.vendors[i][0]+"transform",l=c.vendors[i][1]+"Transform"):(r="transform",l="transform"),void 0!==element.style[l]){e=!0;break}switch(t){case"2D":o=e;break;case"3D":if(e){var body=document.body||document.createElement("body"),d=document.documentElement,m=d.style.overflow,f=!1;document.body||(f=!0,d.style.overflow="hidden",d.appendChild(body),body.style.overflow="hidden",body.style.background=""),body.appendChild(element),element.style[l]="translate3d(1px,1px,1px)",o=void 0!==(n=window.getComputedStyle(element).getPropertyValue(r))&&n.length>0&&"none"!==n,d.style.overflow=m,body.removeChild(element),f&&(body.removeAttribute("style"),body.parentNode.removeChild(body))}}return o},css:function(element,t,e){var n=c.propertyCache[t];if(!n)for(var i=0,o=c.vendors.length;i<o;i++)if(n=null!==c.vendors[i]?c.camelCase(c.vendors[i][1]+"-"+t):t,void 0!==element.style[n]){c.propertyCache[t]=n;break}element.style[n]=e}},d=30,m={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},f=function(){function t(element,e){r(this,t),this.element=element;var data={calibrateX:c.data(this.element,"calibrate-x"),calibrateY:c.data(this.element,"calibrate-y"),invertX:c.data(this.element,"invert-x"),invertY:c.data(this.element,"invert-y"),limitX:c.data(this.element,"limit-x"),limitY:c.data(this.element,"limit-y"),scalarX:c.data(this.element,"scalar-x"),scalarY:c.data(this.element,"scalar-y"),frictionX:c.data(this.element,"friction-x"),frictionY:c.data(this.element,"friction-y"),originX:c.data(this.element,"origin-x"),originY:c.data(this.element,"origin-y"),pointerEvents:c.data(this.element,"pointer-events"),precision:c.data(this.element,"precision"),relativeInput:c.data(this.element,"relative-input"),clipRelativeInput:c.data(this.element,"clip-relative-input"),hoverOnly:c.data(this.element,"hover-only"),inputElement:document.querySelector(c.data(this.element,"input-element")),selector:c.data(this.element,"selector")};for(var n in data)null===data[n]&&delete data[n];h(this,m,data,e),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return o(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=c.transformSupport("2D"),this.transform3DSupport=c.transformSupport("3D")),this.transform3DSupport&&c.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&c.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var n=c.data(e,"depth")||0;this.depthsX.push(c.data(e,"depth-x")||n),this.depthsY.push(c.data(e,"depth-y")||n)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=l(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),l.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(element){this.inputElement=element,this.updateDimensions()}},{key:"setPosition",value:function(element,t,e){t=t.toFixed(this.precision)+"px",e=e.toFixed(this.precision)+"px",this.transform3DSupport?c.css(element,"transform","translate3d("+t+","+e+",0)"):this.transform2DSupport?c.css(element,"transform","translate("+t+","+e+")"):(element.style.left=t,element.style.top=e)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=c.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=c.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var n=0;n<this.layers.length;n++){var o=this.layers[n],r=this.depthsX[n],h=this.depthsY[n],d=this.velocityX*(r*(this.invertX?-1:1)),m=this.velocityY*(h*(this.invertY?-1:1));this.setPosition(o,d,m)}this.raf=l(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var n=(t||0)/d,o=(e||0)/d,r=this.windowHeight>this.windowWidth;this.portrait!==r&&(this.portrait=r,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=n,this.calibrationY=o),this.inputX=n,this.inputY=o}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,n=t.gamma;null!==e&&null!==n&&(this.orientationStatus=1,this.rotate(e,n))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,n=t.rotationRate.gamma;null!==e&&null!==n&&(this.motionStatus=1,this.rotate(e,n))}},{key:"onMouseMove",value:function(t){var e=t.clientX,n=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||n<this.elementPositionY||n>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),n=Math.max(n,this.elementPositionY),n=Math.min(n,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(n-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(n-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=f},{"object-assign":1,raf:4}]},{},[5])(5)}).call(this,n(49))}}]);