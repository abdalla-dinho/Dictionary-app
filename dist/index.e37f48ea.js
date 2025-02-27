// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ik2hV":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"aenu9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modalJs = require("./modal.js");
var _bookmarkViewJs = require("./view/bookmarkView.js");
var _bookmarkViewJsDefault = parcelHelpers.interopDefault(_bookmarkViewJs);
var _quizViewJs = require("./view/quizView.js");
var _quizViewJsDefault = parcelHelpers.interopDefault(_quizViewJs);
var _resultViewJs = require("./view/resultView.js");
var _resultViewJsDefault = parcelHelpers.interopDefault(_resultViewJs);
var _searchViewJs = require("./view/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _wordViewJs = require("./view/wordView.js");
var _wordViewJsDefault = parcelHelpers.interopDefault(_wordViewJs);
const SeachController = async function() {
    (0, _resultViewJsDefault.default).renderSpinner();
    try {
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        await _modalJs.loadSearch(query);
        console.log(query);
        (0, _resultViewJsDefault.default).render(_modalJs.state.result);
    // console.log(query)
    } catch (err) {
        (0, _resultViewJsDefault.default).renderError();
    }
};
const WordController = async function() {
    try {
        await _modalJs.loadWordOftheDay();
        const word = (0, _wordViewJsDefault.default).getTheWord();
        (0, _wordViewJsDefault.default).render(_modalJs.state.wordOftheDay[word]);
    } catch (err) {
        console.error(err);
    }
};
const soundController = function() {
    const word = (0, _wordViewJsDefault.default).getTheWord();
    if (_modalJs.state.result.word) _modalJs.speakWord(_modalJs.state.result.word);
    else _modalJs.speakWord(_modalJs.state.wordOftheDay[word].word);
};
const quizController = function(index) {
    _modalJs.loadQuizQuest();
    if (index === _modalJs.state.quiz.length) (0, _quizViewJsDefault.default).displayResult();
    else (0, _quizViewJsDefault.default).render(_modalJs.state.quiz[index]);
};
const bookmarkController = async function() {
    try {
        if (!_modalJs.state.result.bookmarked) _modalJs.addBookmark(_modalJs.state.result);
        else _modalJs.deleteBookmark(_modalJs.state.result);
        console.log(_modalJs.state.result);
        console.log(_modalJs.state.bookmarks);
        if (_modalJs.state.bookmarks.length > 0) (0, _bookmarkViewJsDefault.default).render(_modalJs.state.bookmarks);
        else (0, _bookmarkViewJsDefault.default).renderMessage();
        (0, _resultViewJsDefault.default).render(_modalJs.state.result);
    } catch (err) {}
};
const bookmarkResultConroller = async function(word) {
    try {
        await _modalJs.loadSearch(word);
        (0, _resultViewJsDefault.default).render(_modalJs.state.result);
    } catch (err) {
        console.error(err);
    }
};
quizController(0);
(0, _searchViewJsDefault.default).addHandlerMobile(SeachController);
(0, _searchViewJsDefault.default).addHandler(SeachController);
(0, _resultViewJsDefault.default).addHandler(soundController);
(0, _quizViewJsDefault.default).addHandler(quizController);
(0, _quizViewJsDefault.default).addHandlerRestar(quizController);
(0, _wordViewJsDefault.default).addHandler();
(0, _resultViewJsDefault.default).addHandlerBookmark(bookmarkController);
(0, _bookmarkViewJsDefault.default).addHandler(bookmarkResultConroller);
WordController();

},{"./modal.js":"aHHgN","./view/bookmarkView.js":"pQnVj","./view/quizView.js":"8fHcJ","./view/resultView.js":"i3HJw","./view/searchView.js":"blwqv","./view/wordView.js":"faGT9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aHHgN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "speakWord", ()=>speakWord);
parcelHelpers.export(exports, "loadSearch", ()=>loadSearch);
parcelHelpers.export(exports, "loadWordOftheDay", ()=>loadWordOftheDay);
parcelHelpers.export(exports, "loadQuizQuest", ()=>loadQuizQuest);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
var _dataJs = require("./data.js");
const state = {
    result: {},
    wordOftheDay: {},
    quiz: {},
    index: 0,
    bookmarks: []
};
function speakWord(word) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    synth.speak(utterance);
}
const loadSearch = async function(query) {
    try {
        const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
        const data = await resp.json();
        const DictionaryData = {
            word: data[0].word,
            definations: data[0].meanings[0].definitions,
            partOfSpeech: data[0].meanings[0].partOfSpeech,
            phonetic: data[0].phonetic
        };
        if (state.bookmarks.some((bookmark)=>bookmark.id === query)) DictionaryData.bookmarked = true;
        else DictionaryData.bookmarked = false;
        state.result = DictionaryData;
        console.log(state.result);
    } catch (err) {
        throw err;
    }
};
const loadWordOftheDay = async function() {
    try {
        state.wordOftheDay = (0, _dataJs.wordsWithMeanings);
    } catch (err) {
        console.error(err);
    }
};
const loadQuizQuest = async function(index) {
    try {
        state.index = index;
        state.quiz = (0, _dataJs.grammarQuiz);
    } catch (err) {
        console.error(err);
    }
};
const addBookmark = async function(data) {
    try {
        state.bookmarks.push(data);
        if (state.bookmarks.some((book)=>book.word === data.word)) data.bookmarked = true;
        console.log(data.word);
    } catch (err) {
        console.error(err);
    }
};
const deleteBookmark = function(id) {
    // Delete bookmark
    const index = state.bookmarks.findIndex((el)=>el.word);
    console.log(index);
    state.bookmarks.splice(index, 1);
    if (id === state.result) state.result.bookmarked = false;
}; // export const deleteBookmark = function (id) {
 //   // Delete bookmark
 //   const index = state.bookmarks.findIndex(el => el.id === id);
 //   state.bookmarks.splice(index, 1);
 //   // Mark current recipe as NOT bookmarked
 //   if (id === state.recipe.id) state.recipe.bookmarked = false;
 //   persistBookmarks();
 // };

},{"./data.js":"kq51T","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kq51T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wordsWithMeanings", ()=>wordsWithMeanings);
parcelHelpers.export(exports, "grammarQuiz", ()=>grammarQuiz);
const wordsWithMeanings = [
    {
        word: "serendipity",
        meaning: "The occurrence of events by chance in a happy or beneficial way."
    },
    {
        word: "ephemeral",
        meaning: "Lasting for a very short time."
    },
    {
        word: "quintessential",
        meaning: "Representing the most perfect or typical example of a quality or class."
    },
    {
        word: "eloquence",
        meaning: "Fluent or persuasive speaking or writing."
    },
    {
        word: "resilience",
        meaning: "The capacity to recover quickly from difficulties; toughness."
    },
    {
        word: "magnanimous",
        meaning: "Very generous or forgiving, especially toward a rival or less powerful person."
    },
    {
        word: "obfuscate",
        meaning: "To deliberately make something unclear or difficult to understand."
    },
    {
        word: "pernicious",
        meaning: "Having a harmful effect, especially in a gradual or subtle way."
    },
    {
        word: "surreptitious",
        meaning: "Kept secret, especially because it would not be approved of."
    },
    {
        word: "vicarious",
        meaning: "Experienced in the imagination through the feelings or actions of another person."
    },
    {
        word: "ebullient",
        meaning: "Cheerful and full of energy."
    },
    {
        word: "idiosyncrasy",
        meaning: "A mode of behavior or way of thought peculiar to an individual."
    },
    {
        word: "cogent",
        meaning: "Clear, logical, and convincing."
    },
    {
        word: "alacrity",
        meaning: "Brisk and cheerful readiness."
    },
    {
        word: "capitulate",
        meaning: "To surrender or give in after resisting."
    },
    {
        word: "languid",
        meaning: "Lacking energy or vitality; slow and relaxed."
    },
    {
        word: "gregarious",
        meaning: "Sociable, fond of company."
    },
    {
        word: "iconoclast",
        meaning: "A person who attacks or criticizes cherished beliefs or institutions."
    },
    {
        word: "ostentatious",
        meaning: "Designed to impress or attract notice, often in a showy way."
    },
    {
        word: "ubiquitous",
        meaning: "Present, appearing, or found everywhere."
    },
    {
        word: "sycophant",
        meaning: "A person who acts excessively submissive toward someone important to gain advantage."
    },
    {
        word: "antithesis",
        meaning: "A person or thing that is the direct opposite of someone or something else."
    },
    {
        word: "cacophony",
        meaning: "A harsh, discordant mixture of sounds."
    },
    {
        word: "parsimonious",
        meaning: "Extremely unwilling to spend money; stingy."
    },
    {
        word: "pedantic",
        meaning: "Overly concerned with minor details or rules; overly scholarly."
    },
    {
        word: "proclivity",
        meaning: "A tendency to choose or do something regularly; an inclination."
    },
    {
        word: "sagacious",
        meaning: "Having or showing keen mental discernment and good judgment."
    },
    {
        word: "taciturn",
        meaning: "Reserved or uncommunicative in speech."
    },
    {
        word: "voracious",
        meaning: "Having a very eager approach to an activity, especially eating or learning."
    },
    {
        word: "zealous",
        meaning: "Showing great energy or enthusiasm for a cause or objective."
    },
    {
        word: "aberration",
        meaning: "A departure from what is normal, usual, or expected, typically unwelcome."
    },
    {
        word: "cajole",
        meaning: "To persuade someone to do something by sustained coaxing or flattery."
    },
    {
        word: "debilitate",
        meaning: "To make someone weak or feeble."
    },
    {
        word: "enervate",
        meaning: "To weaken or drain energy from."
    },
    {
        word: "facetious",
        meaning: "Treating serious issues with deliberately inappropriate humor."
    },
    {
        word: "garrulous",
        meaning: "Excessively talkative, especially on trivial matters."
    },
    {
        word: "harangue",
        meaning: "A lengthy and aggressive speech."
    },
    {
        word: "jubilation",
        meaning: "A feeling of great happiness and triumph."
    },
    {
        word: "labyrinth",
        meaning: "A complicated irregular network of passages; a maze."
    },
    {
        word: "maelstrom",
        meaning: "A powerful whirlpool in the sea or a river; a situation of confused movement or turmoil."
    },
    {
        word: "nadir",
        meaning: "The lowest point in a situation."
    },
    {
        word: "obstreperous",
        meaning: "Noisy and difficult to control."
    },
    {
        word: "pugnacious",
        meaning: "Eager or quick to argue or fight."
    },
    {
        word: "quixotic",
        meaning: "Extremely idealistic, unrealistic, and impractical."
    },
    {
        word: "recalcitrant",
        meaning: "Stubbornly refusing to obey authority or rules."
    },
    {
        word: "spurious",
        meaning: "False or fake; not genuine."
    },
    {
        word: "tirade",
        meaning: "A long, angry speech of criticism or accusation."
    },
    {
        word: "ubiquity",
        meaning: "The state of being everywhere at once."
    },
    {
        word: "vacuous",
        meaning: "Having or showing a lack of thought or intelligence."
    },
    {
        word: "winsome",
        meaning: "Attractive or appealing in a charming or innocent way."
    }
];
const grammarQuiz = [
    {
        question: "Which sentence is correct?",
        options: [
            "She don't like apples.",
            "She doesn't like apples.",
            "She doesn\u2019t likes apples.",
            "She don\u2019t like apples."
        ],
        answer: "She doesn't like apples."
    },
    {
        question: "Choose the correct word: \u2018The book is ____ the table.\u2019",
        options: [
            "on",
            "in",
            "at",
            "with"
        ],
        answer: "on"
    },
    {
        question: "Which word is an adverb?",
        options: [
            "quickly",
            "beautiful",
            "bright",
            "strong"
        ],
        answer: "quickly"
    },
    {
        question: "Which sentence is grammatically correct?",
        options: [
            "He go to school every day.",
            "He goes to school every day.",
            "He going to school every day.",
            "He goed to school every day."
        ],
        answer: "He goes to school every day."
    },
    {
        question: "Choose the correct form: \u2018She ____ to the store yesterday.\u2019",
        options: [
            "go",
            "goed",
            "went",
            "gone"
        ],
        answer: "went"
    },
    {
        question: "Which sentence uses the correct preposition?",
        options: [
            "She is interested on music.",
            "She is interested in music.",
            "She is interested at music.",
            "She is interested of music."
        ],
        answer: "She is interested in music."
    },
    {
        question: "Which sentence is in the past continuous tense?",
        options: [
            "I was watching TV when he called.",
            "I watch TV every evening.",
            "I watched TV last night.",
            "I have watched TV."
        ],
        answer: "I was watching TV when he called."
    },
    {
        question: "Choose the correct conjunction: \u2018I was tired, ____ I went to bed early.\u2019",
        options: [
            "but",
            "or",
            "so",
            "and"
        ],
        answer: "so"
    },
    {
        question: "Which is the correct plural form of \u2018child\u2019?",
        options: [
            "childs",
            "children",
            "childes",
            "childers"
        ],
        answer: "children"
    },
    {
        question: "Choose the correct verb form: \u2018She ____ already finished her work.\u2019",
        options: [
            "have",
            "has",
            "having",
            "had"
        ],
        answer: "has"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"pQnVj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class BookmarkView extends (0, _viewJsDefault.default) {
    __parentElement = document.querySelector(".bookmark__container");
    generateMarkup() {
        return `
          <ul class="bookmarks-result">
                ${this.__data.map((book)=>{
            return `
                    <li class="bookmark-results">${book.word}</li>
                  `;
        }).join('')}
         </ul>
        `;
    }
    renderMessage() {
        const markUp = `
          <div class="d-flex bookmark-empty">
                <i class="fas fa-smile modal-icon"></i>
                <p>No bookmarks yet, find word and bookmark it </p>
                <div> 
        `;
        this.clear();
        this.__parentElement.insertAdjacentHTML('afterbegin', markUp);
    }
    addHandler(handler) {
        this.__parentElement.addEventListener('click', (e)=>{
            const btn = e.target.closest(".bookmark-results");
            if (!btn) return;
            const value = btn.innerText;
            // console.log(btn)
            handler(value);
        });
    }
}
exports.default = new BookmarkView();

},{"./view.js":"4wVyX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4wVyX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    __data;
    render(data) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError(this.__message);
        this.__data = data;
        const markup = this.generateMarkup();
        if (!markup) return;
        this.clear();
        this.__parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    clear() {
        this.__parentElement.innerHTML = "";
    }
    renderSpinner() {
        const markup = `
          <span class="loader"></span>
        `;
        if (!markup) return;
        this.clear();
        this.__parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderError() {
        const markup = `
            <div class="Error">${this.__message}</div> 
          `;
        if (!markup) return;
        this.clear();
        this.__parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8fHcJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class QuizView extends (0, _viewJsDefault.default) {
    __parentElement = document.querySelector(".quiz");
    index = 0;
    score = 0;
    generateMarkup() {
        return `
    <h2 class="quiz__header">Grammer Quiz</h2>
    <p class="quiz__question">${this.__data.question}</p>

       ${this.__data.options.map((op, i)=>{
            return `
            <div class="quiz__container">
               <input type="radio" class="radio-input" id="option${i + 1}" name="options">
               <label for="option${i + 1}">${op}</label>
              </div>
           `;
        }).join("")}
         
        <button class="btn btn-submit">Submit</button>

        <div class="alert-text">plz choose a answer</div>
        `;
    }
    generateResult() {
        return `
            <div>
            u score is ${this.score} out of ${this.index}  
            ${this.score > this.index / 2 ? "good job" : "gain some knowledge idiot"}
          </div>
           <button class="btn btn-reset">Restart</button>
        `;
    }
    displayResult() {
        const markup = this.generateResult();
        this.clear();
        this.__parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    addHandler(handler) {
        this.__parentElement.addEventListener('click', (e)=>{
            const alertElm = this.__parentElement.querySelector(".alert-text");
            const btnSubmit = e.target.closest('.btn-submit');
            const checkedInput = this.__parentElement.querySelector('input[name="options"]:checked');
            if (!btnSubmit) return;
            if (checkedInput) {
                this.index++;
                const label = document.querySelector(`label[for="${checkedInput.id}"]`);
                const answer = this.__data.answer;
                if (label.textContent === answer) {
                    this.score++;
                    console.log(this.score);
                }
                handler(this.index);
            } else {
                console.log('error');
                console.log(alertElm);
                alertElm.classList.add('alert-active');
            }
        });
    }
    addHandlerRestar(handler) {
        this.__parentElement.addEventListener('click', (e)=>{
            const btnrestart = e.target.closest(".btn-reset");
            if (!btnrestart) return;
            this.index = 0;
            this.score = 0;
            handler(this.index);
        });
    }
}
exports.default = new QuizView();

},{"./view.js":"4wVyX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3HJw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class resultView extends (0, _viewJsDefault.default) {
    __parentElement = document.querySelector(".result");
    __message = "\u26D4 we couldn,t find the word u are looking plz try again";
    generateMarkup() {
        return `
         <div class="result__answer">
            <h4 class="result__word-answer">${this.__data.word}</h4>
            <div class="result__word-icon fw-lg">
            <i class="fas fa-volume-high fa-volume"></i>
         </div>

         <div class="bookmark-icon bookmark-extra ">
         <ion-icon name="bookmark${this.__data.bookmarked === true ? '' : '-outline'}" class="bookmark__ion"></ion-icon>
          </div>
       </div>

       <div class="result__phonotic">
           <p class="result__phonotic-text">${this.__data.phonetic}</p>
           <p class="result__phonotic-standard">Phonetic (Standard)</p>
       </div>

      <div class="result__sentence">
         <h2 class="result__sentence-word">${this.__data.partOfSpeech}</h2>
         
         ${this.__data.definations.map((diff, i)=>{
            //  console.log(diff.definition)
            return `
                <p class="result__sentence-text">
                    <span>${i + 1}: </span> ${diff.definition}
                </p>
           `;
        })}
               
          
       </div>

           `;
    }
    // __volumeEl = document.querySelector(".result__word-icon");
    addHandler(handler) {
        this.__parentElement.addEventListener('click', (e)=>{
            if (e.target.closest(".result__word-icon")) handler();
        });
    }
    addHandlerBookmark(handler) {
        this.__parentElement.addEventListener('click', (e)=>{
            const bookmarkBtn = e.target.closest(".bookmark__ion");
            if (!bookmarkBtn) return;
            console.log(bookmarkBtn);
            handler();
        });
    }
}
exports.default = new resultView();

},{"./view.js":"4wVyX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"blwqv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class SearchView extends (0, _viewJsDefault.default) {
    __parentElement = document.querySelector(".input-group");
    getQuery() {
        const query = this.__parentElement.querySelector(".input-search").value;
        this.clearInput();
        return query;
    }
    addHandler(handler) {
        this.__parentElement.addEventListener('submit', (e)=>{
            e.preventDefault();
            handler();
        });
    }
    addHandlerMobile(handler) {
        this.__parentElement.addEventListener('click', (e)=>{
            const submitBtn = e.target.closest(".input-search-icon");
            if (!submitBtn) return;
            e.preventDefault();
            const inputValue = this.__parentElement.querySelector(".input-search").value;
            if (inputValue === "") return;
            handler();
        });
    }
    clearInput() {
        this.__parentElement.querySelector(".input-search").value = "";
    }
}
exports.default = new SearchView();

},{"./view.js":"4wVyX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"faGT9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class WordView extends (0, _viewJsDefault.default) {
    __parentElement = document.querySelector(".result");
    getTheWord() {
        const month = new Date().getDate();
        return month;
    }
    generateMarkup() {
        return `
    <h3 class="result__title">word of the day</h3>
    <p class="result__date">${new Date().toDateString()}</p>
    <div class="result__word">
    <h4 class="result__word-text">${this.__data.word}</h4>
    <div class="result__word-icon">
    <i class="fas fa-volume-high "></i>
    </div>
    </div>  
    <p class="result__word-meaning">${this.__data.meaning}</p>
    
    <p class="text">Sign up to get word of the in you box</p>
    
    <div class="result__input-group">
    <input class="result__input-group-input--1 input-mail" type="text" placeholder="Enter U Email">    
    <button class="result__input-group-btn--1 btn-sign">Sign Up</button>
    </div>
    
    <div class="alert-mail"></div>
    `;
    }
    inputValidtion(elm, text, active, sucess) {
        elm.textContent = text;
        elm.classList.add(active);
        elm.classList.remove(sucess);
    }
    clearInput() {
        this.__parentElement.querySelector(".input-mail").value = "";
    }
    addHandler() {
        this.__parentElement.addEventListener("click", (e)=>{
            const btn = e.target.closest(".btn-sign");
            const alertEl = document.querySelector(".alert-mail");
            if (!btn) return;
            const inputValue = this.__parentElement.querySelector(".input-mail").value;
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            // Check if input is empty
            if (inputValue === "") {
                alertEl.textContent = "Please enter your email address.";
                alertEl.classList.add("alert-active");
                alertEl.classList.remove("alert-success");
                return;
            }
            // Check if input follows a valid email pattern
            if (!emailRegex.test(inputValue)) {
                alertEl.textContent = "Please enter a valid email address.";
                alertEl.classList.add("alert-active");
                alertEl.classList.remove("alert-success");
                return;
            }
            alertEl.textContent = "Your submission was successful!";
            alertEl.classList.remove("alert-active");
            alertEl.classList.add("alert-success");
            this.clearInput();
        });
    }
}
exports.default = new WordView();

},{"./view.js":"4wVyX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ik2hV","aenu9"], "aenu9", "parcelRequire94c2")

//# sourceMappingURL=index.e37f48ea.js.map
