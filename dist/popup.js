/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var $ = function $(s) {
  return document.querySelector(s);
};

// Cache duration: 5 minutes
var CACHE_DURATION = 5 * 60 * 1000;
_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
  var _yield$chrome$storage, _yield$chrome$storage2, openaiApiKey, _yield$chrome$storage3, notionApiKey, _yield$chrome$storage4, selectedParentPageId;
  return _regenerator().w(function (_context) {
    while (1) switch (_context.n) {
      case 0:
        _context.n = 1;
        return chrome.storage.sync.get(["openaiApiKey", "notionApiKey", "selectedParentPageId"]);
      case 1:
        _yield$chrome$storage = _context.v;
        _yield$chrome$storage2 = _yield$chrome$storage.openaiApiKey;
        openaiApiKey = _yield$chrome$storage2 === void 0 ? "" : _yield$chrome$storage2;
        _yield$chrome$storage3 = _yield$chrome$storage.notionApiKey;
        notionApiKey = _yield$chrome$storage3 === void 0 ? "" : _yield$chrome$storage3;
        _yield$chrome$storage4 = _yield$chrome$storage.selectedParentPageId;
        selectedParentPageId = _yield$chrome$storage4 === void 0 ? "" : _yield$chrome$storage4;
        $("#openaiApiKey").value = openaiApiKey;
        $("#notionApiKey").value = notionApiKey;

        // Load pages on popup open
        _context.n = 2;
        return loadNotionPages();
      case 2:
        // Set selected parent page if exists
        if (selectedParentPageId) {
          $("#parentPageSelect").value = selectedParentPageId;
        }
      case 3:
        return _context.a(2);
    }
  }, _callee);
}))();
$("#openaiApiKey").addEventListener("change", function (e) {
  return chrome.storage.sync.set({
    openaiApiKey: e.target.value
  });
});
$("#notionApiKey").addEventListener("change", function (e) {
  return chrome.storage.sync.set({
    notionApiKey: e.target.value
  });
});
$("#parentPageSelect").addEventListener("change", function (e) {
  return chrome.storage.sync.set({
    selectedParentPageId: e.target.value
  });
});

// Function to load Notion pages directly from Notion API
function loadNotionPages() {
  return _loadNotionPages.apply(this, arguments);
} // Event listeners for refresh functionality
function _loadNotionPages() {
  _loadNotionPages = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    var select, _yield$chrome$storage5, notionApiKey, cached, isExpired, pages, headers, response, data, workspacePages, _t3;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          select = $("#parentPageSelect");
          _context5.n = 1;
          return chrome.storage.sync.get(["notionApiKey"]);
        case 1:
          _yield$chrome$storage5 = _context5.v;
          notionApiKey = _yield$chrome$storage5.notionApiKey;
          if (notionApiKey) {
            _context5.n = 2;
            break;
          }
          select.innerHTML = '<option value="">Set Notion API Key first</option>';
          return _context5.a(2);
        case 2:
          _context5.p = 2;
          _context5.n = 3;
          return chrome.storage.session.get(["notionPages", "lastFetched"]);
        case 3:
          cached = _context5.v;
          isExpired = !cached.lastFetched || Date.now() - cached.lastFetched > CACHE_DURATION;
          if (!(cached.notionPages && !isExpired)) {
            _context5.n = 4;
            break;
          }
          pages = cached.notionPages;
          console.log("Using cached pages");
          _context5.n = 8;
          break;
        case 4:
          console.log("Fetching fresh pages from Notion API");
          select.innerHTML = '<option value="">Loading pages...</option>';
          headers = {
            Authorization: "Bearer ".concat(notionApiKey),
            "Content-Type": "application/json",
            "Notion-Version": "2022-06-28"
          }; // Search for all pages accessible to the integration
          _context5.n = 5;
          return fetch("https://api.notion.com/v1/search", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
              filter: {
                value: "page",
                property: "object"
              }
            })
          });
        case 5:
          response = _context5.v;
          if (response.ok) {
            _context5.n = 6;
            break;
          }
          throw new Error("HTTP ".concat(response.status, ": ").concat(response.statusText));
        case 6:
          _context5.n = 7;
          return response.json();
        case 7:
          data = _context5.v;
          // Filter for workspace-level pages only
          workspacePages = data.results.filter(function (page) {
            return page.parent && page.parent.type === "workspace";
          }); // Format the response with clean data
          pages = workspacePages.map(function (page) {
            var _page$properties;
            return {
              id: page.id,
              title: ((_page$properties = page.properties) === null || _page$properties === void 0 || (_page$properties = _page$properties.title) === null || _page$properties === void 0 || (_page$properties = _page$properties.title) === null || _page$properties === void 0 || (_page$properties = _page$properties[0]) === null || _page$properties === void 0 || (_page$properties = _page$properties.text) === null || _page$properties === void 0 ? void 0 : _page$properties.content) || "Untitled",
              url: page.url,
              created_time: page.created_time
            };
          });

          // Cache the results
          _context5.n = 8;
          return chrome.storage.session.set({
            notionPages: pages,
            lastFetched: Date.now()
          });
        case 8:
          // Populate dropdown
          select.innerHTML = '<option value="">Select a parent page...</option>';
          pages.forEach(function (page) {
            var option = document.createElement("option");
            option.value = page.id;
            option.textContent = page.title;
            select.appendChild(option);
          });
          console.log("Loaded ".concat(pages.length, " workspace pages"));
          _context5.n = 10;
          break;
        case 9:
          _context5.p = 9;
          _t3 = _context5.v;
          console.error("Failed to load pages:", _t3);
          select.innerHTML = '<option value="">Failed to load pages</option>';
          $("#log").textContent = "Failed to load pages: ".concat(_t3.message);
        case 10:
          return _context5.a(2);
      }
    }, _callee5, null, [[2, 9]]);
  }));
  return _loadNotionPages.apply(this, arguments);
}
$("#refreshPages").addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
  return _regenerator().w(function (_context2) {
    while (1) switch (_context2.n) {
      case 0:
        _context2.n = 1;
        return chrome.storage.session.remove(["notionPages", "lastFetched"]);
      case 1:
        _context2.n = 2;
        return loadNotionPages();
      case 2:
        return _context2.a(2);
    }
  }, _callee2);
})));
function getCurrentTab() {
  return _getCurrentTab.apply(this, arguments);
}
function _getCurrentTab() {
  _getCurrentTab = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
    var _yield$chrome$tabs$qu, _yield$chrome$tabs$qu2, tab;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _context6.n = 1;
          return chrome.tabs.query({
            active: true,
            currentWindow: true
          });
        case 1:
          _yield$chrome$tabs$qu = _context6.v;
          _yield$chrome$tabs$qu2 = _slicedToArray(_yield$chrome$tabs$qu, 1);
          tab = _yield$chrome$tabs$qu2[0];
          return _context6.a(2, tab);
      }
    }, _callee6);
  }));
  return _getCurrentTab.apply(this, arguments);
}
function extract() {
  return _extract.apply(this, arguments);
}
function _extract() {
  _extract = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
    var tab;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          _context7.n = 1;
          return getCurrentTab();
        case 1:
          tab = _context7.v;
          return _context7.a(2, chrome.tabs.sendMessage(tab.id, {
            type: "GET_TRANSCRIPT"
          }));
      }
    }, _callee7);
  }));
  return _extract.apply(this, arguments);
}
$("#send").addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
  var _res$text, res, customTitle, sendRes, _t;
  return _regenerator().w(function (_context3) {
    while (1) switch (_context3.p = _context3.n) {
      case 0:
        $("#log").textContent = "Extracting transcript…";
        _context3.p = 1;
        _context3.n = 2;
        return extract();
      case 2:
        res = _context3.v;
        if (!(res !== null && res !== void 0 && res.error)) {
          _context3.n = 3;
          break;
        }
        throw new Error(res.error);
      case 3:
        $("#log").textContent = "Sending " + (((_res$text = res.text) === null || _res$text === void 0 ? void 0 : _res$text.length) || 0) + " chars…";

        // Get custom title from input field
        customTitle = $("#pageTitle").value.trim();
        _context3.n = 4;
        return chrome.runtime.sendMessage({
          type: "SEND_TO_API",
          text: res.text,
          customTitle: customTitle || null // Send null if empty
        });
      case 4:
        sendRes = _context3.v;
        if (!(sendRes !== null && sendRes !== void 0 && sendRes.error)) {
          _context3.n = 5;
          break;
        }
        throw new Error(sendRes.error);
      case 5:
        $("#log").textContent = "Done ✅";
        _context3.n = 7;
        break;
      case 6:
        _context3.p = 6;
        _t = _context3.v;
        $("#log").textContent = "Failed: " + _t.message;
      case 7:
        return _context3.a(2);
    }
  }, _callee3, null, [[1, 6]]);
})));
$("#copy").addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
  var res, _t2;
  return _regenerator().w(function (_context4) {
    while (1) switch (_context4.p = _context4.n) {
      case 0:
        $("#log").textContent = "Extracting transcript…";
        _context4.p = 1;
        _context4.n = 2;
        return extract();
      case 2:
        res = _context4.v;
        if (!(res !== null && res !== void 0 && res.error)) {
          _context4.n = 3;
          break;
        }
        throw new Error(res.error);
      case 3:
        _context4.n = 4;
        return navigator.clipboard.writeText(res.text);
      case 4:
        $("#log").textContent = "Copied " + res.text.length + " chars to clipboard ✅";
        _context4.n = 6;
        break;
      case 5:
        _context4.p = 5;
        _t2 = _context4.v;
        $("#log").textContent = "Failed: " + _t2.message;
      case 6:
        return _context4.a(2);
    }
  }, _callee4, null, [[1, 5]]);
})));
/******/ })()
;