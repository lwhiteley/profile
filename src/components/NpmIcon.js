'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaNpm = function (_React$Component) {
    _inherits(FaNpm, _React$Component);

    function FaNpm() {
        _classCallCheck(this, FaNpm);

        return _possibleConstructorReturn(this, (FaNpm.__proto__ || Object.getPrototypeOf(FaNpm)).apply(this, arguments));
    }

    _createClass(FaNpm, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 240 140' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('defs', { id: 'defs4' }),
                    React.createElement(
                        'g',
                        { xmlns: 'http://www.w3.org/2000/svg', width: '240', height: '140', viewBox: '0 0 240 140', id: 'layer1', transform: 'translate(-109.57142,-485.2193)' },
                        React.createElement('path', { style: {'fill':'transparent', 'fill-opacity':1}, d: 'm 174.4429,576.2193 0,-13.01931 -64.87148,0 1.9e-4,-77.98069 233.35644,0 -1.9e-4,77.98069 -116.67804,0 0,13.01931 z', id: 'path4951' }),
                        React.createElement('path', { style: {'fill':'#ffffff', 'fill-opacity':1}, d: 'm 213.63597,563.19999 0,-13.1094 25.67822,0 0,-51.76189 -51.71684,0 0,64.87129 z', id: 'path4949' }),
                        React.createElement('path', { style: {'fill':'#c0c0c0', 'fill-opacity':1}, d: 'm 213.63597,511.34801 12.61385,0 0,25.67822 -12.61385,0 z', id: 'path4947' }),
                        React.createElement('path', { style: {'fill':'#ffffff', 'fill-opacity':1}, d: 'm 148.31419,550.09059 0,-38.74258 13.06435,0 0,38.74258 13.06436,0 0,-51.76189 -51.71226,0 0,51.76189 z', id: 'path4945' }),
                        React.createElement('path', { style: {'fill':'#ffffff', 'fill-opacity':1}, d: 'm 278.05676,550.09059 0,-38.74258 13.06435,0 0,38.74258 13.06436,0 0,-38.74258 13.06435,0 0,38.74258 13.06437,0 0,-51.76189 -77.93404,0 0,51.76189 z', id: 'path2998' })
                    )
                )
            );
        }
    }]);

    return FaNpm;
}(React.Component);

exports.default = FaNpm;
module.exports = exports['default'];
