webpackJsonp([0],{

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Color = function (_Component) {
    _inherits(Color, _Component);

    function Color(props) {
        _classCallCheck(this, Color);

        return _possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).call(this, props));
    }

    _createClass(Color, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var color = this.props.colors.color;
            var id = this.props.colors.id;

            return _react2.default.createElement(
                "li",
                { style: { background: "" + color } },
                this.props.display,
                _react2.default.createElement(
                    "span",
                    { className: "close-icon", onClick: function onClick() {
                            return _this2.props.removeItem(id);
                        } },
                    "X"
                )
            );
        }
    }]);

    return Color;
}(_react.Component);

exports.default = Color;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = {"colors":[{"color":"#5fff00","id":"101"},{"color":"#ff0000","id":"102"},{"color":"#0000ff","id":"103"},{"color":"#008700","id":"104"},{"color":"#87875f","id":"105"},{"color":"#5fff00","id":"106"},{"color":"#ff0000","id":"107"},{"color":"#0000ff","id":"108"},{"color":"#008700","id":"109"},{"color":"#87875f","id":"110"},{"color":"#5fff00","id":"111"},{"color":"#ff0000","id":"112"},{"color":"#0000ff","id":"113"},{"color":"#008700","id":"114"},{"color":"#87875f","id":"115"},{"color":"#5fff00","id":"116"},{"color":"#ff0000","id":"117"},{"color":"#0000ff","id":"118"},{"color":"#008700","id":"119"},{"color":"#87875f","id":"120"},{"color":"#5fff00","id":"121"},{"color":"#ff0000","id":"122"},{"color":"#0000ff","id":"123"},{"color":"#008700","id":"124"},{"color":"#87875f","id":"125"},{"color":"#5fff00","id":"126"},{"color":"#ff0000","id":"127"},{"color":"#0000ff","id":"128"},{"color":"#008700","id":"129"},{"color":"#87875f","id":"130"},{"color":"#5fff00","id":"131"},{"color":"#ff0000","id":"132"},{"color":"#0000ff","id":"133"},{"color":"#008700","id":"134"},{"color":"#87875f","id":"135"},{"color":"#5fff00","id":"136"},{"color":"#ff0000","id":"137"},{"color":"#0000ff","id":"138"},{"color":"#008700","id":"139"},{"color":"#87875f","id":"140"},{"color":"#5fff00","id":"141"},{"color":"#ff0000","id":"142"},{"color":"#0000ff","id":"143"},{"color":"#008700","id":"144"},{"color":"#87875f","id":"145"},{"color":"#5fff00","id":"146"},{"color":"#ff0000","id":"147"},{"color":"#0000ff","id":"148"},{"color":"#008700","id":"149"},{"color":"#87875f","id":"150"},{"color":"#5fff00","id":"151"},{"color":"#ff0000","id":"152"},{"color":"#0000ff","id":"153"},{"color":"#008700","id":"154"},{"color":"#87875f","id":"155"},{"color":"#5fff00","id":"156"},{"color":"#ff0000","id":"157"},{"color":"#0000ff","id":"158"},{"color":"#008700","id":"159"},{"color":"#87875f","id":"160"},{"color":"#87875f","id":"161"},{"color":"#5fff00","id":"162"},{"color":"#0000ff","id":"163"},{"color":"#008700","id":"164"},{"color":"#87875f","id":"165"},{"color":"#ff0000","id":"166"}]}

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Routes = __webpack_require__(30);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Routes2.default, null), document.getElementById('root')); //bootstrapping

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRouterDom = __webpack_require__(13);

var _App = __webpack_require__(43);

var _Home = __webpack_require__(46);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(48);

var _About2 = _interopRequireDefault(_About);

var _Contact = __webpack_require__(49);

var _Contact2 = _interopRequireDefault(_Contact);

var _Colors = __webpack_require__(50);

var _Colors2 = _interopRequireDefault(_Colors);

var _ReactWindow = __webpack_require__(51);

var _ReactWindow2 = _interopRequireDefault(_ReactWindow);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Roye configuration
var Routes = function Routes() {
    return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
            _App.App,
            null,
            _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: "/", exact: true, component: _Home2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/about", exact: true, component: _About2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/contact", exact: true, component: _Contact2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/colors", exact: true, component: _Colors2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/reactwindow", exact: true, component: _ReactWindow2.default })
            )
        )
    );
};

exports.default = Routes;

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(44);

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = __webpack_require__(45);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = exports.App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            //return a view ie virtual DOM
            return _react2.default.createElement(
                "div",
                { id: "main" },
                _react2.default.createElement(_Header2.default, { title: "React App" }),
                _react2.default.createElement(
                    "div",
                    null,
                    this.props.children
                ),
                _react2.default.createElement(_Footer2.default, { year: 2019, company: "eXperience Technology Meetup" })
            );
        }
    }]);

    return App;
}(_react2.default.Component);

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Footer;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//functional component
//no life cycle methods

function Footer(_ref) {
    var year = _ref.year,
        company = _ref.company;

    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("hr", null),
        _react2.default.createElement(
            "p",
            null,
            " Copyrights @",
            year,
            ", ",
            company
        )
    );
}

Footer.PropTypes = {
    year: _propTypes2.default.number.isRequired, //mandatory
    company: _propTypes2.default.string
};

Footer.defaultProps = {
    year: 2019,
    company: "React webpack Application"
};

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h2",
                    null,
                    this.props.title
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: "/",
                            exact: true,
                            className: "button",
                            activeClassName: "success" },
                        "Home  "
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: "/about", className: "button", activeClassName: "success" },
                        "About"
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: "/contact", className: "button", activeClassName: "success" },
                        "Contact"
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: "/colors", className: "button", activeClassName: "success" },
                        "Color Pallete"
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: "/reactwindow", className: "button", activeClassName: "success" },
                        "React Window"
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Like = __webpack_require__(47);

var _Like2 = _interopRequireDefault(_Like);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_PureComponent) {
    _inherits(Home, _PureComponent);

    function Home() {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

        _this.state = {
            likes: 1000
        };
        return _this;
    }

    _createClass(Home, [{
        key: "incr",
        value: function incr() {
            //trigger render method
            this.setState({
                likes: this.state.likes + 1
            });
        }
        //called before initializing view
        //into real dom

    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            console.log("component will mount");
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            console.log("view is loaded");
            this.serverLikes = 1000;
            var counter = 0;
            this.timerHandle = setInterval(function () {
                if (counter % 5 == 0) {
                    _this2.serverLikes++;
                    console.log("Likes >>>>>" + _this2.serverLikes);
                }
                _this2.setState({
                    likes: _this2.serverLikes
                });
                counter++;
            }, 1000);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.timerHandle);
        }
        /*shouldComponentUpdate(nextProps, nextState){
            console.log("current ",this.state, "next ", nextState);
            if(this.state.likes != nextState.likes){
                return true; // calls render method
            }
            return false; // do not calls render method
        }*/

    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            console.log("home render called");
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h1",
                    null,
                    "Home"
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "Home Page"
                ),
                _react2.default.createElement(
                    "span",
                    null,
                    "Likes ",
                    this.state.likes
                ),
                _react2.default.createElement(
                    "button",
                    { onClick: function onClick() {
                            return _this3.incr();
                        } },
                    " +1"
                ),
                _react2.default.createElement(
                    _Like2.default,
                    { count: this.state.likes },
                    " "
                )
            );
        }
    }]);

    return Home;
}(_react.PureComponent);

exports.default = Home;

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Like = function (_React$Component) {
    _inherits(Like, _React$Component);

    function Like() {
        _classCallCheck(this, Like);

        return _possibleConstructorReturn(this, (Like.__proto__ || Object.getPrototypeOf(Like)).apply(this, arguments));
    }

    _createClass(Like, [{
        key: "render",
        value: function render() {
            console.log("like render called");
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h2",
                    null,
                    "Likes : ",
                    this.props.count
                )
            );
        }
    }]);

    return Like;
}(_react2.default.Component);

exports.default = Like;

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
    _inherits(About, _Component);

    function About(props) {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));
    }

    _createClass(About, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h2",
                    null,
                    "About"
                ),
                _react2.default.createElement(
                    "div",
                    { "class": "flex two" },
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "article",
                            { "class": "card" },
                            _react2.default.createElement("img", { src: "https://picnicss.com/web/img/forest.jpg" }),
                            _react2.default.createElement(
                                "footer",
                                null,
                                _react2.default.createElement(
                                    "h3",
                                    null,
                                    "Misty Forest"
                                ),
                                _react2.default.createElement(
                                    "button",
                                    null,
                                    "Like"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "article",
                            { "class": "card" },
                            _react2.default.createElement("img", { src: "https://picnicss.com/web/img/forest.jpg" }),
                            _react2.default.createElement(
                                "footer",
                                null,
                                _react2.default.createElement(
                                    "h3",
                                    null,
                                    "Misty Forest"
                                ),
                                _react2.default.createElement(
                                    "button",
                                    null,
                                    "Like"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return About;
}(_react.Component);

exports.default = About;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Component) {
    _inherits(Contact, _Component);

    function Contact(props) {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));
    }

    _createClass(Contact, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h2",
                    null,
                    "Contact"
                )
            );
        }
    }]);

    return Contact;
}(_react.Component);

exports.default = Contact;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Color = __webpack_require__(17);

var _Color2 = _interopRequireDefault(_Color);

var _colors = __webpack_require__(18);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Colors = function (_React$Component) {
    _inherits(Colors, _React$Component);

    function Colors(props) {
        _classCallCheck(this, Colors);

        var _this = _possibleConstructorReturn(this, (Colors.__proto__ || Object.getPrototypeOf(Colors)).call(this, props));

        _this.state = {
            colorsList: _colors2.default.colors || {}
        };
        _this.removeItem = _this.removeItem.bind(_this);
        return _this;
    }

    _createClass(Colors, [{
        key: "removeItem",
        value: function removeItem(id) {
            var colorsList = this.state.colorsList.filter(function (item) {
                return item.id !== id;
            });
            this.setState({ colorsList: colorsList });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "container-fluid" },
                _react2.default.createElement(
                    "ul",
                    null,
                    this.state.colorsList && this.state.colorsList.map(function (item, index) {
                        var key = Math.random();
                        return _react2.default.createElement(_Color2.default, { key: item.id,
                            display: key.toFixed(2),
                            colors: item,
                            removeItem: _this2.removeItem
                        });
                    })
                )
            );
        }
    }]);

    return Colors;
}(_react2.default.Component);

exports.default = Colors;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Color = __webpack_require__(17);

var _Color2 = _interopRequireDefault(_Color);

var _colors = __webpack_require__(18);

var _colors2 = _interopRequireDefault(_colors);

var _reactWindow = __webpack_require__(52);

var _reactVirtualizedAutoSizer = __webpack_require__(55);

var _reactVirtualizedAutoSizer2 = _interopRequireDefault(_reactVirtualizedAutoSizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactWindow = function (_React$Component) {
    _inherits(ReactWindow, _React$Component);

    function ReactWindow(props) {
        _classCallCheck(this, ReactWindow);

        return _possibleConstructorReturn(this, (ReactWindow.__proto__ || Object.getPrototypeOf(ReactWindow)).call(this, props));
    }

    _createClass(ReactWindow, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "container-fluid" },
                _react2.default.createElement(
                    _reactVirtualizedAutoSizer2.default,
                    null,
                    function (_ref) {
                        var height = _ref.height,
                            width = _ref.width;
                        return _react2.default.createElement(
                            _reactWindow.FixedSizeList,
                            {
                                className: "List",
                                height: height,
                                itemCount: 1000,
                                itemSize: 35,
                                width: width
                            },
                            height
                        );
                    }
                )
            );
        }
    }]);

    return ReactWindow;
}(_react2.default.Component);

exports.default = ReactWindow;

/***/ })

},[19]);
//# sourceMappingURL=bundle.6545973d285eb342f43c.js.map