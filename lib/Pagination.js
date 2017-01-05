'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils.js');

require('./pagination.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: 'renderPagination',
    value: function renderPagination() {
      var _this2 = this;

      var _props = this.props,
          itemsPerPage = _props.itemsPerPage,
          total = _props.total,
          activePage = _props.activePage;

      var length = Math.ceil(total / itemsPerPage);
      var previousPage = activePage === 1 ? 1 : activePage - 1;
      var nextPage = activePage === length ? length : activePage + 1;
      var pageButtons = [];

      pageButtons.push(_react2.default.createElement(
        'li',
        { key: 'previous', className: 'spicy-datatable-pagination-button previous', onClick: this.handlePageButtonClick.bind(this, previousPage) },
        'Back'
      ));

      var pageNumbers = (0, _utils.paginationButtons)(7, activePage, length).map(function (value, index) {
        var classes = 'spicy-datatable-pagination-button ' + (value + 1 === activePage ? 'active' : '');
        return value === 'ellipsis' ? _react2.default.createElement(
          'li',
          { key: 'ellipsis' + index, className: 'spicy-datatable-pagination-button spicy-datatable-pagination-button-elipsis' },
          '...'
        ) : _react2.default.createElement(
          'li',
          { key: value + 1, className: classes, onClick: _this2.handlePageButtonClick.bind(_this2, value + 1) },
          _react2.default.createElement(
            'span',
            null,
            value + 1
          )
        );
      });

      pageButtons = pageButtons.concat(pageNumbers);

      pageButtons.push(_react2.default.createElement(
        'li',
        { key: 'next', className: 'spicy-datatable-pagination-button next', onClick: this.handlePageButtonClick.bind(this, nextPage) },
        'Next'
      ));

      return pageButtons;
    }
  }, {
    key: 'handlePageButtonClick',
    value: function handlePageButtonClick(nextPage) {
      var onPage = this.props.onPage;

      onPage && onPage(nextPage);
    }
  }, {
    key: 'render',
    value: function render() {
      var pageButtons = this.renderPagination();
      return _react2.default.createElement(
        'div',
        { className: 'spicy-datatable-pagination-root' },
        _react2.default.createElement(
          'ul',
          { className: 'spicy-datatable-pagination-list', style: { float: 'right' } },
          pageButtons
        )
      );
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.propTypes = {
  onPage: _react.PropTypes.func,
  itemsPerPage: _react.PropTypes.number,
  total: _react.PropTypes.number,
  activePage: _react.PropTypes.number
};
exports.default = Pagination;