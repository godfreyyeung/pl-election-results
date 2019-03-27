(function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(e.esriLoader=e.esriLoader||{})})(this,function(e){"use strict"
function r(e){var r=function(e){return document.querySelector('link[href*="'+e+'"]')}(e)
return r||(r=function(e){var r=document.createElement("link")
return r.rel="stylesheet",r.href=e,r}(e),document.head.appendChild(r)),r}var t,o="undefined"!=typeof window,n="https://js.arcgis.com/4.10/"
function i(e,r,t){var o
t&&(o=function(e,r){var t=function(o){r(o.error||new Error("There was an error attempting to load "+e.src)),e.removeEventListener("error",t,!1)}
return e.addEventListener("error",t,!1),t}(e,t))
var n=function(){r(e),e.removeEventListener("load",n,!1),o&&e.removeEventListener("error",o,!1)}
e.addEventListener("load",n,!1)}var d={Promise:o?window.Promise:void 0}
function a(){return document.querySelector("script[data-esri-loader]")}function u(){var e=window.require
return e&&e.on}function c(e){return void 0===e&&(e={}),e.url||(e.url=n),new d.Promise(function(o,n){var d=a()
if(d){var c=d.getAttribute("src")
c!==e.url?n(new Error("The ArcGIS API for JavaScript is already loaded ("+c+").")):u()?o(d):i(d,o,n)}else u()?n(new Error("The ArcGIS API for JavaScript is already loaded.")):(e.css&&r(e.css),e.dojoConfig&&(window.dojoConfig=e.dojoConfig),d=function(e){var r=document.createElement("script")
return r.type="text/javascript",r.src=e,r.setAttribute("data-esri-loader","loading"),r}(e.url),t=e.url,i(d,function(){d.setAttribute("data-esri-loader","loaded"),o(d)},n),document.body.appendChild(d))})}function s(e){return new d.Promise(function(r,t){var o=window.require.on("error",t)
window.require(e,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
o.remove(),r(e)})})}function l(e,r){return void 0===r&&(r={}),u()?s(e):(!r.url&&t&&(r.url=t),c(r).then(function(){return s(e)}))}var f={getScript:a,isLoaded:u,loadModules:l,loadScript:c,loadCss:r,utils:d}
e.utils=d,e.getScript=a,e.isLoaded=u,e.loadScript=c,e.loadModules=l,e.default=f,e.loadCss=r,Object.defineProperty(e,"__esModule",{value:!0})})
