!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(e.esriLoader=e.esriLoader||{})}(this,function(e){"use strict"
function r(e){var r,o,t,n=(r=e,document.querySelector('link[href*="'+r+'"]'))
return n||(o=e,(t=document.createElement("link")).rel="stylesheet",t.href=o,n=t,document.head.appendChild(n)),n}var o,t="https://js.arcgis.com/4.10/"
function n(e,r,o){var t,n,i,d
o&&(i=o,d=function(e){i(e.error||new Error("There was an error attempting to load "+n.src)),n.removeEventListener("error",d,!1)},(n=e).addEventListener("error",d,!1),t=d)
var a=function(){r(e),e.removeEventListener("load",a,!1),t&&e.removeEventListener("error",t,!1)}
e.addEventListener("load",a,!1)}var i={Promise:"undefined"!=typeof window?window.Promise:void 0}
function d(){return document.querySelector("script[data-esri-loader]")}function a(){var e=window.require
return e&&e.on}function u(e){return void 0===e&&(e={}),e.url||(e.url=t),new i.Promise(function(t,i){var u,s,c=d()
if(c){var l=c.getAttribute("src")
l!==e.url?i(new Error("The ArcGIS API for JavaScript is already loaded ("+l+").")):a()?t(c):n(c,t,i)}else a()?i(new Error("The ArcGIS API for JavaScript is already loaded.")):(e.css&&r(e.css),e.dojoConfig&&(window.dojoConfig=e.dojoConfig),u=e.url,(s=document.createElement("script")).type="text/javascript",s.src=u,s.setAttribute("data-esri-loader","loading"),c=s,o=e.url,n(c,function(){c.setAttribute("data-esri-loader","loaded"),t(c)},i),document.body.appendChild(c))})}function s(e){return new i.Promise(function(r,o){var t=window.require.on("error",o)
window.require(e,function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o]
t.remove(),r(e)})})}function c(e,r){return void 0===r&&(r={}),a()?s(e):(!r.url&&o&&(r.url=o),u(r).then(function(){return s(e)}))}var l={getScript:d,isLoaded:a,loadModules:c,loadScript:u,loadCss:r,utils:i}
e.utils=i,e.getScript=d,e.isLoaded=a,e.loadScript=u,e.loadModules=c,e.default=l,e.loadCss=r,Object.defineProperty(e,"__esModule",{value:!0})})
