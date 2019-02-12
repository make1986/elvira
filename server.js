/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  PORT: process.env.PORT || 3000,
  API_PREFIX: "http://localhost:3000",
  IMAGES_PREFIX: "http://localhost:3000/Images",
  EMAIL: "ivanova.sobitie@gmail.com",
  PASS: "ivanova2019"
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(13);

var _Home2 = _interopRequireDefault(_Home);

var _Solovyova = __webpack_require__(17);

var _Solovyova2 = _interopRequireDefault(_Solovyova);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getParams(path, noparams) {
  var params = path.split(noparams)[1];
  if (!params || params.lenght === 0) {
    return [];
  } else {
    return params.split("/");
  }
}

var routes = [{
  path: "/",
  exact: true,
  component: _Solovyova2.default,
  title: "Names. Татьяна Соловьева."
}, {
  path: "/solotatiana",
  exact: false,
  component: _Solovyova2.default,
  title: "Names. Татьяна Соловьева."
}];

exports.default = routes;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(6);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(7);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(8);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRouterDom = __webpack_require__(2);

var _compression = __webpack_require__(9);

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = __webpack_require__(10);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = __webpack_require__(11);

var _helmet2 = _interopRequireDefault(_helmet);

var _nodemailer = __webpack_require__(30);

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _helmet2.default)());
app.use((0, _cors2.default)({ origin: _config2.default.API_PREFIX, methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.urlencoded({ limit: "50mb", extended: true }));
app.use(_bodyParser2.default.json({ limit: "50mb", extended: true }));

app.use(_express2.default.static("public"));

app.post("/api/addsubscriber", function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email;

  var transporter = _nodemailer2.default.createTransport({
    service: "gmail",
    auth: {
      user: _config2.default.EMAIL,
      pass: _config2.default.PASS
    }
  });
  var mailOptions = {
    from: "\u0422\u0430\u0442\u044C\u044F\u043D\u0430 \u0421\u043E\u043B\u043E\u0432\u044C\u0435\u0432\u0430 <" + _config2.default.EMAIL + ">",
    to: email,
    subject: "Скидка 10% на семинар",
    text: "\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, " + name + ". \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0441\u043A\u0438\u0434\u043A\u0443 10% \u043F\u043E \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0443 \"friends\"."
  };
  var mailOptions1 = {
    from: name + " <" + _config2.default.EMAIL + ">",
    to: "ivanova.sobitie@yandex.ru ",
    subject: "Новый подписчик",
    text: "\u0418\u043C\u044F - " + name + ", email - " + email
  };
  return transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.status(400).json({ ok: false });
    } else {
      return transporter.sendMail(mailOptions1, function (error, info) {
        if (error) {
          return res.status(400).json({ ok: false });
        } else {
          return res.json({ ok: true });
        }
      });
    }
  });
});

app.get("*", function (req, res, next) {
  var activeRoute = _routes2.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  }) || {};
  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();

  var title = activeRoute.title ? activeRoute.title : "Names. Люди, которые вдохновляют.";

  promise.then(function (data) {
    var context = { data: data };
    var markup = (0, _server.renderToString)(_react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(_App2.default, null)
    ));

    res.send("\n      <!DOCTYPE html>\n      <html lang=\"en\">\n      <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n        <title>" + title + "</title>\n        <link rel=\"shortcut icon\" href=\"/Static/favicon.ico\" type=\"image/x-icon\">\n        <script src=\"/bundle.js\" defer></script>\n        <script>window.__INITIAL_DATA__ = " + (0, _serializeJavascript2.default)(data) + "</script>\n      </head>\n      <body>\n        <div id=\"app\">" + markup + "</div>\n      </body>\n      </html>\n      ");
  }).catch(next);
});

app.listen(_config2.default.PORT, function () {
  console.log("Server is listening on port: " + _config2.default.PORT);
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

var _config = __webpack_require__(1);

var _ = __webpack_require__(22);

var _2 = _interopRequireDefault(_);

var _Header = __webpack_require__(23);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(24);

var _Footer2 = _interopRequireDefault(_Footer);

var _Error = __webpack_require__(27);

var _Error2 = _interopRequireDefault(_Error);

var _DiscBut = __webpack_require__(28);

var _DiscBut2 = _interopRequireDefault(_DiscBut);

var _Discount = __webpack_require__(29);

var _Discount2 = _interopRequireDefault(_Discount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      cssload: false,
      error: "",
      media: "",
      burger: false,
      discount: false
    };
    _this.addError = _this.addError.bind(_this);
    _this.HeaderWithProps = _this.HeaderWithProps.bind(_this);
    _this.FooterWithProps = _this.FooterWithProps.bind(_this);
    _this.defineDevice = _this.defineDevice.bind(_this);
    _this.openBurger = _this.openBurger.bind(_this);
    _this.openDiscount = _this.openDiscount.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({ cssload: true });
      this.defineDevice();
      window.addEventListener("resize", this.defineDevice);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.defineDevice);
    }
  }, {
    key: "defineDevice",
    value: function defineDevice() {
      var clientWidth = document.body.clientWidth;

      this.setState({ media: clientWidth });
    }
  }, {
    key: "addError",
    value: function addError(err) {
      this.setState({ error: err }, function () {
        if (this.state.error) {
          document.body.style.overflowY = "hidden";
        } else {
          document.body.style.overflowY = "auto";
        }
      });
    }
  }, {
    key: "HeaderWithProps",
    value: function HeaderWithProps(props) {
      return _react2.default.createElement(_Header2.default, _extends({}, props, {
        addError: this.addError,
        media: this.state.media,
        openBurger: this.openBurger,
        image: _config.IMAGES_PREFIX
      }));
    }
  }, {
    key: "FooterWithProps",
    value: function FooterWithProps(props) {
      return _react2.default.createElement(_Footer2.default, _extends({}, props, { addError: this.addError, image: _config.IMAGES_PREFIX }));
    }
  }, {
    key: "openBurger",
    value: function openBurger() {
      this.setState({ burger: !this.state.burger });
    }
  }, {
    key: "openDiscount",
    value: function openDiscount() {
      this.setState({ discount: !this.state.discount }, function () {
        if (this.state.discount) {
          document.body.style.overflowY = "hidden";
        } else {
          document.body.style.overflowY = "auto";
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          error = _state.error,
          cssload = _state.cssload,
          media = _state.media,
          burger = _state.burger,
          discount = _state.discount;
      var addError = this.addError,
          openBurger = this.openBurger,
          openDiscount = this.openDiscount;

      return _react2.default.createElement(
        "div",
        { className: "page" },
        _react2.default.createElement(_reactRouterDom.Route, { component: this.HeaderWithProps }),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _routes2.default.map(function (_ref) {
            var path = _ref.path,
                exact = _ref.exact,
                C = _ref.component,
                rest = _objectWithoutProperties(_ref, ["path", "exact", "component"]);

            return _react2.default.createElement(_reactRouterDom.Route, {
              key: path,
              path: path,
              exact: exact,
              render: function render(props) {
                return _react2.default.createElement(C, _extends({ addError: addError }, props, rest, { media: media }));
              }
            });
          }),
          _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {
              return _react2.default.createElement(_2.default, props);
            } })
        ),
        _react2.default.createElement(_reactRouterDom.Route, { component: this.FooterWithProps }),
        _react2.default.createElement(_DiscBut2.default, { openDiscount: openDiscount }),
        discount ? _react2.default.createElement(_Discount2.default, { addError: addError, openDiscount: openDiscount }) : "",
        error ? _react2.default.createElement(_Error2.default, { ok: addError, error: error }) : "",
        !cssload ? _react2.default.createElement("div", {
          style: {
            backgroundColor: "#fff",
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "100vh",
            zIndex: "1000"
          }
        }) : ""
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TopSection = __webpack_require__(14);

var _TopSection2 = _interopRequireDefault(_TopSection);

var _Events = __webpack_require__(15);

var _Events2 = _interopRequireDefault(_Events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));
  }

  _createClass(HomePage, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "page__container home-page" },
        _react2.default.createElement(_Events2.default, null)
      );
    }
  }]);

  return HomePage;
}(_react2.default.Component);

exports.default = HomePage;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopSection;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TopSection() {
  return _react2.default.createElement(
    "div",
    { className: "home-page__top" },
    _react2.default.createElement(
      "h2",
      null,
      "\u0412\u0430\u0448 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0438 \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F"
    ),
    _react2.default.createElement(
      "a",
      { href: "#events" },
      "\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0441\u0435\u043C\u0438\u043D\u0430\u0440\u044B"
    )
  );
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _OneEvent = __webpack_require__(16);

var _OneEvent2 = _interopRequireDefault(_OneEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var speakers = [{
  id: 0,
  name: "Татьяна Соловьева",
  img: "solov.jpg",
  city: "г. Краснодар",
  date: "11 марта",
  area: "Сертифицированный тренер по программе Тони Роббинса «Академия лидерства», бизнесвумен, основатель благотворительного фонда, специалист по психологии лидерства и НЛП.",
  themes: [{
    name: "Стратегия счастья",
    date: "11 марта",
    address: "ул. Красная, 25 (гостиница Какаято)"
  }],
  desc: "Мы будем учиться тому, как быть счастливыми. Не ждать этого состояния в будущем и не «зависать» в прошлом. Радоваться всем ситуациям и обстоятельствам, которые приходят в нашу жизнь. Вместе определим, какие чувства, мысли и события тебя мотивируют и как этим управлять.",
  link: "/solotatiana"
}, {
  id: 1,
  name: "Валентина Паевская",
  img: "paevs.jpg",
  city: "г. Краснодар",
  date: "11-14 марта",
  area: 'Практикующий детский психолог, автор семинаров для родителей и проекта #УзнайКакЛучшеДляРебенка. Автор книг "Я плохая мама? Как воспитать ребенка, не имея на это времени" и "Детская ревность. Особенности воспитания нескольких детей в семье".',
  themes: [{
    name: "Границы. Воспитание ребенка. Планшет и игровая зависимоть",
    date: "11 марта",
    address: "ул. Красная, 25 (гостиница Какаято)"
  }, {
    name: "Границы. Воспитание ребенка. Планшет и игровая зависимоть",
    date: "11 марта",
    address: "ул. Красная, 25 (гостиница Какаято)"
  }, {
    name: "Границы. Воспитание ребенка. Планшет и игровая зависимоть",
    date: "11 марта",
    address: "ул. Красная, 25 (гостиница Какаято)"
  }, {
    name: "Границы. Воспитание ребенка. Планшет и игровая зависимоть",
    date: "11 марта",
    address: "ул. Красная, 25 (гостиница Какаято)"
  }, {
    name: "Границы. Воспитание ребенка. Планшет и игровая зависимоть",
    date: "11 марта",
    address: "ул. Красная, 25 (гостиница Какаято)"
  }],
  desc: "Простые и доходчивые семинары о воспитании детей. Вы поймете, что быть родителем легко. Быть хорошей мамой – не значит отказаться от собственных желаний и стремлений. Вы сможете успешно совмещать все свои роли. Знания, полученные на встрече, легко применимы в жизни и дают результат.",
  link: "/paevskaya"
}];

var Events = function (_React$Component) {
  _inherits(Events, _React$Component);

  function Events(props) {
    _classCallCheck(this, Events);

    var _this = _possibleConstructorReturn(this, (Events.__proto__ || Object.getPrototypeOf(Events)).call(this, props));

    _this.state = {
      opened: "none"
    };
    return _this;
  }

  _createClass(Events, [{
    key: "render",
    value: function render() {
      var opened = this.state.opened;

      return _react2.default.createElement(
        "div",
        { className: "home-page__events", id: "events" },
        speakers.map(function (speak) {
          return _react2.default.createElement(_OneEvent2.default, { key: speak.id, data: speak });
        })
      );
    }
  }]);

  return Events;
}(_react2.default.Component);

exports.default = Events;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OneEvent;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _config = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OneEvent(_ref) {
  var data = _ref.data;

  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: data.link, className: "speaker" },
    _react2.default.createElement(
      "div",
      {
        className: "speaker__img",
        style: {
          background: "url(" + _config.IMAGES_PREFIX + "/" + data.img + ") 50% 50%/cover no-repeat"
        }
      },
      _react2.default.createElement(
        "p",
        { className: "area" },
        data.area
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "speaker__info" },
      _react2.default.createElement(
        "h2",
        { className: "name" },
        data.name
      ),
      _react2.default.createElement(
        "p",
        { className: "city" },
        data.city
      ),
      _react2.default.createElement(
        "p",
        { className: "date" },
        data.date
      )
    )
  );
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _fontawesomeSvgCore = __webpack_require__(18);

var _reactFontawesome = __webpack_require__(19);

var _freeSolidSvgIcons = __webpack_require__(20);

var _freeRegularSvgIcons = __webpack_require__(21);

var _config = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faIgloo);

var Solovyova = function (_React$Component) {
  _inherits(Solovyova, _React$Component);

  function Solovyova(props) {
    _classCallCheck(this, Solovyova);

    return _possibleConstructorReturn(this, (Solovyova.__proto__ || Object.getPrototypeOf(Solovyova)).call(this, props));
  }

  _createClass(Solovyova, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "page__container event-page" },
        _react2.default.createElement(
          "div",
          {
            style: {
              background: "url(" + _config.IMAGES_PREFIX + "/solo.jpg) 50% 50%/cover no-repeat"
            },
            className: "event-page__top"
          },
          _react2.default.createElement(
            "div",
            { className: "wrap" },
            _react2.default.createElement(
              "h1",
              null,
              "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F \u0441\u0447\u0430\u0441\u0442\u044C\u044F"
            ),
            _react2.default.createElement(
              "p",
              null,
              "13 \u0430\u043F\u0440\u0435\u043B\u044F, \u0433. \u041A\u0440\u0430\u0441\u043D\u043E\u0434\u0430\u0440"
            ),
            _react2.default.createElement(
              "a",
              { href: "https://names.timepad.ru/event/890123/", target: "_blank" },
              "\u0423\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "event-page__top-slogan" },
          _react2.default.createElement(
            "span",
            null,
            "\u0421\u043B\u0443\u0448\u0430\u0439 \u0441\u0432\u043E\u0435 \u0441\u0435\u0440\u0434\u0446\u0435 \u0438 \u0442\u044B \u043D\u0430\u0439\u0434\u0435\u0448\u044C \u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0443\u0442\u044C"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "event-page__section1" },
          _react2.default.createElement(
            "h2",
            null,
            "\u0427\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0439\u0434\u0435\u0442 \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0441\u0435\u043C\u0438\u043D\u0430\u0440\u0430:"
          ),
          _react2.default.createElement(
            "div",
            { className: "list" },
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeRegularSvgIcons.faThumbsUp }),
              _react2.default.createElement(
                "p",
                null,
                "\u041D\u0430\u0443\u0447\u0438\u0448\u044C\u0441\u044F \u0438\u0437\u0431\u0430\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u043E\u0442 \u0441\u0442\u0440\u0430\u0445\u043E\u0432 \u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u044E\u0449\u0438\u0445 \u0443\u0431\u0435\u0436\u0434\u0435\u043D\u0438\u0439"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeRegularSvgIcons.faStar }),
              _react2.default.createElement(
                "p",
                null,
                "\u041F\u043E\u043B\u0443\u0447\u0438\u0448\u044C \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u044E \u0434\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 \u0436\u0438\u0437\u043D\u0438 "
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeRegularSvgIcons.faEdit }),
              _react2.default.createElement(
                "p",
                null,
                "\u041F\u043E\u0439\u043C\u0435\u0448\u044C, \u0447\u0442\u043E \u0442\u0435\u0431\u044F \u043E\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u043B\u043E \u0432\u0441\u0451 \u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F, \u0438 \u043A\u0430\u043A \u044D\u0442\u043E \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u0442\u044C"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faBullseye }),
              _react2.default.createElement(
                "p",
                null,
                "\u041D\u0430\u0443\u0447\u0438\u0448\u044C\u0441\u044F \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0441\u0432\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeRegularSvgIcons.faHeart }),
              _react2.default.createElement(
                "p",
                null,
                "\u041D\u0430\u0443\u0447\u0438\u0448\u044C\u0441\u044F \u043D\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C\u0441\u044F \u0441\u0447\u0430\u0441\u0442\u044C\u0435\u043C \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u044D\u0442\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435, \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u0439"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faChild }),
              _react2.default.createElement(
                "p",
                null,
                "\u0423\u0439\u0434\u0435\u0448\u044C \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u043C \u0441\u0438\u043B \u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u0435\u0439, \u0436\u0435\u043B\u0430\u043D\u0438\u0435\u043C \u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C, \u043D\u0435 \u043E\u0442\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u044F \u043D\u0430 \u043F\u043E\u0442\u043E\u043C"
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "event-page__section2" },
          _react2.default.createElement(
            "div",
            { className: "wrap" },
            _react2.default.createElement(
              "h2",
              null,
              "\u041D\u0430 \u044D\u0442\u043E\u043C \u0441\u0435\u043C\u0438\u043D\u0430\u0440\u0435"
            ),
            _react2.default.createElement(
              "p",
              null,
              "\u041C\u044B \u0431\u0443\u0434\u0435\u043C \u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0442\u043E\u043C\u0443, \u043A\u0430\u043A \u0431\u044B\u0442\u044C \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u044B\u043C\u0438. \u041D\u0435 \u0436\u0434\u0430\u0442\u044C \u044D\u0442\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C \u0438 \u043D\u0435 \xAB\u0437\u0430\u0432\u0438\u0441\u0430\u0442\u044C\xBB \u0432 \u043F\u0440\u043E\u0448\u043B\u043E\u043C. \u0420\u0430\u0434\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432\u0441\u0435\u043C \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F\u043C \u0438 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u0432 \u043D\u0430\u0448\u0443 \u0436\u0438\u0437\u043D\u044C. \u0412\u043C\u0435\u0441\u0442\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u043C, \u043A\u0430\u043A\u0438\u0435 \u0447\u0443\u0432\u0441\u0442\u0432\u0430, \u043C\u044B\u0441\u043B\u0438 \u0438 \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u0442\u0435\u0431\u044F \u043C\u043E\u0442\u0438\u0432\u0438\u0440\u0443\u044E\u0442 \u0438 \u043A\u0430\u043A \u044D\u0442\u0438\u043C \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C."
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "event-page__section3" },
          _react2.default.createElement(
            "div",
            { className: "wrap" },
            _react2.default.createElement(
              "div",
              { className: "img" },
              _react2.default.createElement("img", { src: _config.IMAGES_PREFIX + "/tat.jpg" })
            ),
            _react2.default.createElement(
              "div",
              { className: "info" },
              _react2.default.createElement(
                "h3",
                null,
                "\u0421\u043F\u0438\u043A\u0435\u0440"
              ),
              _react2.default.createElement(
                "h2",
                null,
                "\u0422\u0430\u0442\u044C\u044F\u043D\u0430 \u0421\u043E\u043B\u043E\u0432\u044C\u0435\u0432\u0430"
              ),
              _react2.default.createElement(
                "p",
                null,
                "\u2014 \u0443\u0447\u0435\u043D\u0438\u0446\u0430 \u0422\u043E\u043D\u0438 \u0420\u043E\u0431\u0431\u0438\u043D\u0441\u0430, \u0424\u0440\u044D\u043D\u043A\u0430 \u041F\u044C\u044E\u0441\u0435\u043B\u0438\u043A\u0430, \u0411\u0440\u0430\u0439\u043D\u0430 \u0422\u0440\u0435\u0439\u0441\u0438 \u0438 \u0434\u0440. \u043C\u0438\u0440\u043E\u0432\u044B\u0445 \u0442\u0440\u0435\u043D\u0435\u0440\u043E\u0432;"
              ),
              _react2.default.createElement(
                "p",
                null,
                "\u2014 \u0443\u0441\u043F\u0435\u0448\u043D\u044B\u0439 \u043E\u043F\u044B\u0442 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u043E\u043C \u0431\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442;"
              ),
              _react2.default.createElement(
                "p",
                null,
                "\u2014 \u0431\u0438\u0437\u043D\u0435\u0441-\u0442\u0440\u0435\u043D\u0435\u0440 \xAB\u0426\u0435\u043D\u0442\u0440\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430\xBB;"
              ),
              _react2.default.createElement(
                "p",
                null,
                "\u2014 \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0438 \u0438\u0434\u0435\u043E\u043B\u043E\u0433 \u0431\u043B\u0430\u0433\u043E\u0442\u0432\u043E\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \xAB\u0416\u0438\u0432\u0443 \u0441 \u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043E\u0439\xBB \u0438 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \xAB\u0416\u0438\u0432\u0443 \u0441 \u041F\u043E\u0431\u0435\u0434\u043E\u0439\xBB;"
              ),
              _react2.default.createElement(
                "p",
                null,
                "\u2014 \u0430\u0432\u0442\u043E\u0440 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0433\u043E \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0449\u0438\u043A\u0430 \xAB\u0417\u0434\u0435\u0441\u044C \u0438 \u0421\u0435\u0439\u0447\u0430\u0441\xBB;"
              ),
              _react2.default.createElement(
                "p",
                null,
                "\u2014 \u0431\u043E\u043B\u0435\u0435 3000 \u0443\u0447\u0435\u043D\u0438\u043A\u043E\u0432 \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0445 \u043E\u0444\u043B\u0430\u0439\u043D \u0438 \u043E\u043D\u043B\u0430\u0439\u043D \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435."
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "event-page__section4" },
          _react2.default.createElement(
            "h2",
            null,
            "\u042D\u0442\u043E\u0442 \u0441\u0435\u043C\u0438\u043D\u0430\u0440 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442:"
          ),
          _react2.default.createElement(
            "div",
            { className: "list" },
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faBurn }),
              _react2.default.createElement(
                "p",
                null,
                "\u0417\u0430\u0440\u044F\u0434\u0438\u0442\u044C\u0441\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u0435\u0439 \u0438 \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u0435\u0439"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeRegularSvgIcons.faSmile }),
              _react2.default.createElement(
                "p",
                null,
                "\u041F\u0440\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u0445\u0438 \u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u044E\u0449\u0438\u0435 \u0443\u0431\u0435\u0436\u0434\u0435\u043D\u0438\u044F"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeRegularSvgIcons.faGem }),
              _react2.default.createElement(
                "p",
                null,
                "\u041D\u0430\u0447\u0430\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeRegularSvgIcons.faSun }),
              _react2.default.createElement(
                "p",
                null,
                "\u0412\u0445\u043E\u0434\u0438\u0442\u044C \u0432 \u0440\u0435\u0441\u0443\u0440\u0441\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0438 \u043E\u0441\u0442\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u043D\u0435\u043C \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E"
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "event-page__section5" },
          _react2.default.createElement(
            "h2",
            null,
            "\u041F\u0430\u043A\u0435\u0442\u044B"
          ),
          _react2.default.createElement(
            "div",
            { className: "list" },
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(
                "h4",
                null,
                "\u0411\u0430\u0437\u043E\u0432\u044B\u0439"
              ),
              _react2.default.createElement(
                "h3",
                null,
                "3 400\u20BD"
              ),
              _react2.default.createElement(
                "p",
                null,
                "\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0440\u0430\u0441\u0441\u0430\u0434\u043A\u0430"
              ),
              _react2.default.createElement(
                "p",
                null,
                "\u041F\u0430\u043A\u0435\u0442 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430"
              ),
              _react2.default.createElement(
                "p",
                null,
                "\u041A\u043E\u0444\u0435 \u0431\u0440\u0435\u0439\u043A"
              ),
              _react2.default.createElement(
                "a",
                { href: "https://names.timepad.ru/event/890123/" },
                "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(
                "h4",
                null,
                "\u041F\u0440\u0435\u043C\u0438\u0443\u043C"
              ),
              _react2.default.createElement(
                "h3",
                null,
                "5 400\u20BD"
              ),
              _react2.default.createElement(
                "p",
                null,
                "\u041F\u0435\u0440\u0432\u044B\u0435 \u0440\u044F\u0434\u044B"
              ),
              _react2.default.createElement(
                "p",
                null,
                "\u0415\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A \u0422\u0430\u0442\u044C\u044F\u043D\u044B \u0421\u043E\u043B\u043E\u0432\u044C\u0435\u0432\u043E\u0439 \xAB\u0417\u0434\u0435\u0441\u044C \u0438 \u0441\u0435\u0439\u0447\u0430\u0441\xBB"
              ),
              _react2.default.createElement(
                "p",
                null,
                "\u041F\u0430\u043A\u0435\u0442 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430"
              ),
              _react2.default.createElement(
                "p",
                null,
                "\u041A\u043E\u0444\u0435 \u0431\u0440\u0435\u0439\u043A"
              ),
              _react2.default.createElement(
                "a",
                { href: "https://names.timepad.ru/event/890123/" },
                "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "event-page__section4" },
          _react2.default.createElement(
            "h2",
            null,
            "\u0424\u043E\u0440\u043C\u0430\u0442 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F"
          ),
          _react2.default.createElement(
            "div",
            { className: "list" },
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeRegularSvgIcons.faClock }),
              _react2.default.createElement(
                "p",
                null,
                "\u0412\u043E\u0441\u0435\u043C\u044C \u0447\u0430\u0441\u043E\u0432 \u0436\u0438\u0432\u043E\u0433\u043E \u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0441 11:00 \u0434\u043E 19:00 \u0441 \u043F\u0435\u0440\u0435\u0440\u044B\u0432\u043E\u043C \u043D\u0430 \u043E\u0431\u0435\u0434"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faSuitcase }),
              _react2.default.createElement(
                "p",
                null,
                "\u0420\u0430\u0437\u0431\u043E\u0440 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0438 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u0435\u0439\u0441\u043E\u0432 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faUsers }),
              _react2.default.createElement(
                "p",
                null,
                "\u0420\u0430\u0431\u043E\u0442\u0430 \u0432 \u0433\u0440\u0443\u043F\u043F\u0435 \u0435\u0434\u0438\u043D\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0438\u043A\u043E\u0432 \u0441 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\u043C\u0438 \u0438 \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u044F\u043C\u0438"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "list__item" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarkerAlt }),
              _react2.default.createElement(
                "p",
                null,
                "\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F: \u0443\u043B. \u0413\u0430\u0432\u0440\u0438\u043B\u043E\u0432\u0430 1\u0410 "
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "event-page__section6" },
          _react2.default.createElement("iframe", {
            width: "560",
            height: "315",
            src: "https://www.youtube.com/embed/nvcWKQbIUvo",
            frameBorder: "0",
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true
          })
        )
      );
    }
  }]);

  return Solovyova;
}(_react2.default.Component);

exports.default = Solovyova;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var P404 = function (_React$Component) {
  _inherits(P404, _React$Component);

  function P404(props) {
    _classCallCheck(this, P404);

    return _possibleConstructorReturn(this, (P404.__proto__ || Object.getPrototypeOf(P404)).call(this, props));
  }

  _createClass(P404, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h2",
          null,
          "404"
        ),
        _react2.default.createElement(
          "p",
          null,
          "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"
        )
      );
    }
  }]);

  return P404;
}(_react2.default.Component);

exports.default = P404;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(_ref) {
  var image = _ref.image;

  return _react2.default.createElement(
    "div",
    { className: "header" },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: "/" },
      _react2.default.createElement("img", { src: image + "/logo.jpg" })
    )
  );
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Subscribe = __webpack_require__(25);

var _Subscribe2 = _interopRequireDefault(_Subscribe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer(_ref) {
  var addError = _ref.addError;

  return _react2.default.createElement(
    "div",
    { className: "footer" },
    _react2.default.createElement(_Subscribe2.default, { addError: addError }),
    _react2.default.createElement(
      "div",
      { className: "foot" },
      _react2.default.createElement(
        "div",
        { className: "foot__left" },
        _react2.default.createElement(
          "p",
          null,
          "Names. \u041B\u044E\u0434\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u043B\u044F\u044E\u0442 \xAE"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "foot__right" },
        _react2.default.createElement(
          "p",
          null,
          "\u041F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430, \u0437\u0432\u043E\u043D\u0438\u0442\u0435 ",
          _react2.default.createElement(
            "strong",
            null,
            "8 903 410 77 34"
          )
        )
      )
    )
  );
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(26);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Subscribe = function (_React$Component) {
  _inherits(Subscribe, _React$Component);

  function Subscribe(props) {
    _classCallCheck(this, Subscribe);

    var _this = _possibleConstructorReturn(this, (Subscribe.__proto__ || Object.getPrototypeOf(Subscribe)).call(this, props));

    _this.state = {
      name: "",
      email: ""
    };
    _this.Submit = _this.Submit.bind(_this);
    _this.Change = _this.Change.bind(_this);
    return _this;
  }

  _createClass(Subscribe, [{
    key: "Change",
    value: function Change(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "Submit",
    value: function Submit(event) {
      var _this2 = this;

      event.preventDefault();
      var _state = this.state,
          name = _state.name,
          email = _state.email;

      if (!name || !email) {
        this.props.addError("Должны быть указаны все поля!");
      } else {
        _axios2.default.post(_config2.default.API_PREFIX + "/api/addsubscriber", { name: name, email: email }).then(function (data) {
          if (data.status === 200) {
            _this2.props.addError(name + ", \u0432\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043B\u0438\u0441\u044C \u043D\u0430 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443!");
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "subscribe" },
        _react2.default.createElement(
          "h4",
          null,
          "\u041F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u043E \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u044F\u0449\u0438\u0445 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F\u0445"
        ),
        _react2.default.createElement(
          "form",
          { onSubmit: this.Submit },
          _react2.default.createElement("input", {
            onChange: this.Change,
            type: "text",
            name: "name",
            placeholder: "\u0418\u043C\u044F",
            value: this.state.name
          }),
          _react2.default.createElement("input", {
            onChange: this.Change,
            type: "text",
            name: "email",
            placeholder: "Email",
            value: this.state.email
          }),
          _react2.default.createElement(
            "button",
            { type: "submit" },
            "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"
          )
        ),
        _react2.default.createElement(
          "p",
          null,
          "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \"\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F\", \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u043D\u0430 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443 \u043E \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u044F\u0449\u0438\u0445 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F\u0445"
        )
      );
    }
  }]);

  return Subscribe;
}(_react2.default.Component);

exports.default = Subscribe;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Error;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Error(_ref) {
  var error = _ref.error,
      ok = _ref.ok;

  return _react2.default.createElement(
    "div",
    { className: "error" },
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "p",
        null,
        error
      ),
      _react2.default.createElement(
        "div",
        { onClick: function onClick() {
            return ok("");
          }, className: "button" },
        "\u041E\u043A"
      )
    )
  );
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DiscBut = function DiscBut(_ref) {
  var openDiscount = _ref.openDiscount;
  return _react2.default.createElement(
    "div",
    { onClick: openDiscount, className: "disc-but" },
    "%"
  );
};

exports.default = DiscBut;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(26);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Discount = function (_React$Component) {
  _inherits(Discount, _React$Component);

  function Discount(props) {
    _classCallCheck(this, Discount);

    var _this = _possibleConstructorReturn(this, (Discount.__proto__ || Object.getPrototypeOf(Discount)).call(this, props));

    _this.state = {
      name: "",
      email: ""
    };
    _this.change = _this.change.bind(_this);
    _this.submit = _this.submit.bind(_this);
    return _this;
  }

  _createClass(Discount, [{
    key: "change",
    value: function change(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "submit",
    value: function submit(event) {
      var _this2 = this;

      event.preventDefault();
      var _state = this.state,
          name = _state.name,
          email = _state.email;

      var err = [];
      if (!name || !email) {
        this.props.addError("Должны быть указаны все поля!");
      } else {
        _axios2.default.post(_config2.default.API_PREFIX + "/api/addsubscriber", { name: name, email: email }).then(function (data) {
          if (data.status === 200) {
            _this2.props.addError(name + ", \u0432\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043B\u0438\u0441\u044C \u043D\u0430 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443! \u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043D\u0430 \u0432\u0430\u0448 email \u0430\u0434\u0440\u0435\u0441.");
            _this2.props.openDiscount();
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "discount" },
        _react2.default.createElement(
          "form",
          { onSubmit: this.submit },
          _react2.default.createElement(
            "h2",
            null,
            "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0441\u043A\u0438\u0434\u043A\u0443 10% \u043D\u0430 \u0441\u0435\u043C\u0438\u043D\u0430\u0440 \"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F \u0441\u0447\u0430\u0441\u0442\u044C\u044F\" \u0437\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443."
          ),
          _react2.default.createElement("input", {
            value: this.state.name,
            name: "name",
            type: "text",
            placeholder: "\u0418\u043C\u044F",
            onChange: this.change
          }),
          _react2.default.createElement("input", {
            value: this.state.email,
            name: "email",
            type: "text",
            placeholder: "Email",
            onChange: this.change
          }),
          _react2.default.createElement(
            "button",
            { type: "submit" },
            "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"
          )
        ),
        _react2.default.createElement(
          "span",
          { onClick: this.props.openDiscount },
          "\xD7"
        )
      );
    }
  }]);

  return Discount;
}(_react2.default.Component);

exports.default = Discount;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ })
/******/ ]);