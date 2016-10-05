'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactOpenseadragonControls = require('./react-openseadragon-controls');

var _reactOpenseadragonControls2 = _interopRequireDefault(_reactOpenseadragonControls);

var _reactOpenseadragonNavigator = require('./react-openseadragon-navigator');

var _reactOpenseadragonNavigator2 = _interopRequireDefault(_reactOpenseadragonNavigator);

var _openseadragon = require('openseadragon');

var _openseadragon2 = _interopRequireDefault(_openseadragon);

Object.defineProperty(exports, 'OpenSeadragonNavigator', {
    enumerable: true,
    get: function get() {
        return _reactOpenseadragonNavigator.OpenSeadragonNavigator;
    }
});
Object.defineProperty(exports, 'OpenSeadragonControls', {
    enumerable: true,
    get: function get() {
        return _reactOpenseadragonControls.OpenSeadragonControls;
    }
});

var OpenSeadragonViewer = (function (_React$Component) {
    _inherits(OpenSeadragonViewer, _React$Component);

    function OpenSeadragonViewer(props) {
        _classCallCheck(this, OpenSeadragonViewer);

        _get(Object.getPrototypeOf(OpenSeadragonViewer.prototype), 'constructor', this).call(this, props);
    }

    _createClass(OpenSeadragonViewer, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var include_controls = _props.include_controls;
            var include_navigator = _props.include_navigator;

            var controls = include_controls ? _react2['default'].createElement(_reactOpenseadragonControls2['default'], null) : '';
            var navigator = include_navigator ? _react2['default'].createElement(_reactOpenseadragonNavigator2['default'], null) : '';
            return _react2['default'].createElement(
                'div',
                { className: 'container' },
                _react2['default'].createElement(
                    'div',
                    { className: 'ocd-div col-md-12' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'col-md-11' },
                        _react2['default'].createElement('div', { className: 'openseadragon', id: 'ocd-viewer' }),
                        navigator
                    ),
                    controls
                )
            );
        }
    }, {
        key: 'initSeaDragon',
        value: function initSeaDragon() {
            window.OpenSeadragon(this._config());
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.initSeaDragon();
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return false;
        }
    }, {
        key: '_config',
        value: function _config() {
            return _extends(this.props.config, this.props.default_config);
        }
    }]);

    return OpenSeadragonViewer;
})(_react2['default'].Component);

exports['default'] = OpenSeadragonViewer;

OpenSeadragonViewer.defaultProps = { include_navigator: true,
    include_controls: true,
    default_config: {
        id: 'ocd-viewer',
        visibilityRatio: 1.0,
        constrainDuringPan: false,
        defaultZoomLevel: 1,
        minZoomLevel: 1,
        maxZoomLevel: 10,
        zoomInButton: 'zoom-in',
        zoomOutButton: 'zoom-out',
        homeButton: 'reset',
        fullPageButton: 'full-page',
        nextButton: 'next',
        previousButton: 'previous',
        navigatorId: 'navigator',
        showNavigator: true
    }
};

var propTypes = {
    include_controls: _react2['default'].PropTypes.bool,
    include_navigator: _react2['default'].PropTypes.bool,
    config: _react2['default'].PropTypes.object.isRequired
};

OpenSeadragonViewer.propTypes = propTypes;