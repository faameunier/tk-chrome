/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/popup.js":
/*!**************************!*\
  !*** ./src/app/popup.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_HomeDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HomeDispatcher */ "./src/components/HomeDispatcher/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");





const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.default)({
  typography: {
    fontFamily: 'Helvetica'
  },
  palette: {
    secondary: {
      main: '#00b9aa'
    }
  }
});

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.default, {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_HomeDispatcher__WEBPACK_IMPORTED_MODULE_3__.default, null), ' ');
}

react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(App, null), document.getElementById('app'));

/***/ }),

/***/ "./src/components/Home/Home.js":
/*!*************************************!*\
  !*** ./src/components/Home/Home.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ErrorOutline */ "./node_modules/@material-ui/icons/ErrorOutline.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils */ "./src/services/utils.js");
/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-ui-search-bar */ "./node_modules/material-ui-search-bar/lib/index.js");
















const RESTORE = 'RESTORE';
const SHELL_RESTORE = 'SHELL_RESTORE';
const REMOVED = 'REMOVED';
const CLOSED_HISTORY = 'closed_history';
const NUMBER_HOURS_DAY = 24;
const TIME_PERIOD_24H = 3600000 * NUMBER_HOURS_DAY; // in microsecond

const TIME_PERIOD_72H = 3600000 * NUMBER_HOURS_DAY * 3; // in microsecond

class Home extends react__WEBPACK_IMPORTED_MODULE_3__.PureComponent {
  constructor(props) {
    super(props);
    (0,_services_utils__WEBPACK_IMPORTED_MODULE_5__.setAllReadBadge)();
    this.state = {
      renderSaveBoolean: false
    };

    this.onChangedCallback = function (changes) {
      const changesClosedHistory = changes[CLOSED_HISTORY];

      if (changesClosedHistory) {
        this.setState({
          closed_history: changesClosedHistory['newValue'],
          renderSaveBoolean: true,
          searchValue: ''
        });
      }
    }.bind(this);
  }

  componentDidMount() {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.local.get([CLOSED_HISTORY]).then(result => {
      const closed_history = result.closed_history || [];
      this.setState({
        closed_history
      });
    });
    this.setState({
      nextList: []
    });
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    (0,_services_utils__WEBPACK_IMPORTED_MODULE_5__.setAllReadBadge)();
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.onChanged.removeListener(this.onChangedCallback);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.renderSaveBoolean) {
      this.forceRender();
    }
  }

  removeItem(listItems, key, e) {
    if (e.ctrlKey || e.metaKey) {
      // metaKey is cmd key on mac
      this.restoreTab(listItems, key, SHELL_RESTORE);
    } else {
      this.restoreTab(listItems, key, RESTORE);
    }
  }

  restoreTab(items, key, messageType) {
    const restoredTab = items[key];
    const closed_history = this.state.closed_history.filter(item => item.uuid !== restoredTab.uuid);
    this.setState({
      closed_history: closed_history,
      renderSaveBoolean: true
    });
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.sendMessage({
      messageType: messageType,
      uuid: restoredTab.uuid
    });
  }

  searchOnChange(value) {
    this.setState({
      searchValue: value
    });
  }

  searchOnRequestSearch(event) {}

  searchOnCancel() {
    this.setState({
      searchValue: ''
    });
  }

  forceRender() {
    this.setState({
      renderSaveBoolean: false
    });
  }

  filterList(selectedList, endPeriod) {
    const now = Date.now();
    return selectedList.filter(item => {
      return now - item.deletion_time < endPeriod;
    });
  }

  renderList() {
    const {
      classes
    } = this.props; // keep elements only in time-frame

    let selectedList = this.state.closed_history ? this.filterList(this.state.closed_history, TIME_PERIOD_72H) : []; // list enrichment

    selectedList = selectedList.map(website => {
      if (typeof website !== 'undefined') {
        const deletionTime = new Date(website.deletion_time);
        website.hours_minutes_format = moment__WEBPACK_IMPORTED_MODULE_2___default()(deletionTime).format('HH:mm');
        website.date = moment__WEBPACK_IMPORTED_MODULE_2___default()(deletionTime).startOf('date');
        website.truncated_url = website.url;
      }

      return website;
    }); // keeping only websites that match search criteria

    if (typeof this.state.searchValue !== 'undefined' && this.state.searchValue.length > 0) {
      const searchPattern = new RegExp(this.state.searchValue.split(' ').map(term => `(?=.*${term})`).join(''), 'i');
      selectedList = selectedList.filter(option => option.title.match(searchPattern) || option.url.match(searchPattern));
    }

    const totalLength = selectedList.length;
    selectedList = selectedList.reverse();
    let current = moment__WEBPACK_IMPORTED_MODULE_2___default()().startOf('date');
    let last = 0;

    for (let i = 0; i < selectedList.length; i++) {
      let next = selectedList[i].date;
      let delta = Math.max(0, Math.ceil(current.diff(next, 'days', true)));

      if (delta > last) {
        console.log(delta);
        console.log(next);

        if (delta === 1) {
          selectedList.splice(i, 0, {
            'text': 'Yesterday - ',
            'day': next.format('MMM DD')
          });
        } else if (delta === 2) {
          selectedList.splice(i, 0, {
            'text': 'Previous day - ',
            'day': next.format('MMM DD')
          });
        } else {
          selectedList.splice(i, 0, {
            'text': '',
            'day': next.format('MMM DD')
          });
        }

        last = delta;
      }
    }

    const listItem = myFilteredList => ({
      index,
      style
    }) => {
      const website = myFilteredList[index];

      if (typeof website.day !== 'undefined') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
          key: index,
          style: style
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__.default, {
          ContainerComponent: "div"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__.default, {
          primary: `${website.text} ${website.day}`,
          classes: {
            primary: classes.primaryTitleContainer
          },
          className: classes.listTitleText
        })));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        key: index,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_7__.default, {
        ContainerComponent: "div"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: classes.gridAvatarWithTime
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
        className: classes.timeDisplay
      }, `${website.hours_minutes_format}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_10__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_11__.default, {
        variant: "square",
        alt: website.title,
        src: website.favIconUrl,
        className: classes.avatarContainer
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_8__.default, {
        primary: website.truncated_url,
        secondary: website.title,
        classes: {
          primary: classes.primaryTextContainer,
          secondary: classes.secondaryTextContainer
        },
        className: classes.itemText
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_12__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
        className: classes.buttonContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__.default, {
        size: "small",
        onClick: this.removeItem.bind(this, myFilteredList, index),
        variant: "outlined",
        color: "secondary",
        className: classes.button
      }, 'Restore')))));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: classes.listWebsites
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(material_ui_search_bar__WEBPACK_IMPORTED_MODULE_6__.default, {
      placeholder: "Search on last 72h",
      onChange: this.searchOnChange.bind(this),
      onRequestSearch: this.searchOnRequestSearch.bind(this),
      onCancelSearch: this.searchOnCancel.bind(this),
      value: this.state.searchValue,
      className: classes.searchBar
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: classes.list
    }, selectedList.length === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_window__WEBPACK_IMPORTED_MODULE_4__.FixedSizeList, {
      height: Math.min(80 * selectedList.length, 300),
      itemCount: selectedList.length,
      itemSize: 80
    }, listItem(selectedList))));
  }

  render() {
    const {
      classes
    } = this.props;
    const numberClosedTabsLastHour = this.state.closed_history ? this.filterList(this.state.closed_history, TIME_PERIOD_24H).length : 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      variant: "h3",
      className: classes.title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
      className: classes.boldNumber
    }, numberClosedTabsLastHour ? numberClosedTabsLastHour : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: classes.textOnRight
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
      className: classes.topText
    }, ' ', "tab", numberClosedTabsLastHour <= 1 ? '' : 's', " closed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
      className: classes.middleText
    }, " in the last ", `${NUMBER_HOURS_DAY} hours`, " "))), this.renderList.bind(this)(REMOVED), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: classes.footerContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_14__.default, {
      color: "secondary",
      className: classes.iconContainer
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_15__.default, {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSdUEJHd0bL6ryFvZk220CoZp7cwvFxESorps7cngk0wQfyu-Q/viewform",
      target: "_blank",
      className: classes.linkToForm
    }, "Bug/Feedback?")));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/components/Home/Home.style.js":
/*!*******************************************!*\
  !*** ./src/components/Home/Home.style.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/components/Home/Home.js");



const styles = theme => ({
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 40
  },
  textOnRight: {
    marginLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start'
  },
  greenTitle: {
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    borderBottom: `2px solid #00b9aa`,
    maxWidth: 225
  },
  listTitle: {
    fontSize: 16,
    maxHeight: 30
  },
  boldNumber: {
    color: '#e55c00',
    fontSize: 40,
    maxWidth: '30%'
  },
  middleText: {
    fontSize: 13
  },
  topText: {
    fontSize: 16
  },
  subText: {
    fontSize: 13,
    marginTop: 10
  },
  button: {
    textTransform: 'capitalize',
    fontWeight: 'normal',
    fontSize: 13,
    maxWidth: 20
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  itemText: {
    maxWidth: 185,
    overflowWrap: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'break-spaces',
    maxHeight: 60
  },
  timeDisplay: {
    fontWeight: 'bold',
    fontSize: 14
  },
  gridAvatarWithTime: {
    display: 'flex',
    flexDirection: 'column'
  },
  listWebsites: {
    marginTop: 20
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(1.25),
    minWidth: '100%'
  },
  linkToForm: {
    fontSize: 10
  },
  iconContainer: {
    marginRight: theme.spacing(0.25),
    fontSize: theme.spacing(2)
  },
  avatarContainer: {
    maxWidth: theme.spacing(7),
    maxHeight: theme.spacing(7)
  },
  primaryTextContainer: {
    fontSize: 16,
    overflowWrap: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxHeight: 22
  },
  secondaryTextContainer: {
    fontSize: 13
  },
  primaryTitleContainer: {
    fontWeight: 'bold',
    fontSize: 16
  },
  listTitleText: {
    marginTop: theme.spacing(4.5)
  },
  listContainer: {
    marginTop: theme.spacing(1)
  },
  searchBar: {
    marginBottom: theme.spacing(1),
    maxHeight: theme.spacing(5)
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(styles)(_Home__WEBPACK_IMPORTED_MODULE_0__.default));

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _Home_style__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _Home_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.style */ "./src/components/Home/Home.style.js");


/***/ }),

/***/ "./src/components/HomeDispatcher/HomeDispatcher.js":
/*!*********************************************************!*\
  !*** ./src/components/HomeDispatcher/HomeDispatcher.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ArrowBackIos */ "./node_modules/@material-ui/icons/ArrowBackIos.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Settings */ "./src/components/Settings/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Home */ "./src/components/Home/index.js");
/* harmony import */ var _services_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utils.js */ "./src/services/utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class HomeDispatcher extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", newValue => () => {
      this.setState({
        appBarValue: newValue
      });
      (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_4__.logger)(this, 'Switch to ' + newValue);
    });

    this.state = {
      appBarValue: 'HOME'
    };
  }

  componentDidMount() {
    this.setState({
      appBarValue: 'HOME'
    });
    (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_4__.logger)(this, 'Popup opened');
  }

  dispatchPage() {
    switch (this.state.appBarValue) {
      case 'HOME':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_3__.default, null);

      case 'SETTINGS':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Settings__WEBPACK_IMPORTED_MODULE_2__.default, null);

      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "This is an error page");
    }
  }

  displayIcon() {
    const {
      classes
    } = this.props;

    switch (this.state.appBarValue) {
      case 'HOME':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__.default, {
          color: "secondary",
          component: "div",
          onClick: this.handleChange('SETTINGS'),
          className: classes.iconContainer
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6__.default, null));

      case 'SETTINGS':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__.default, {
          color: "secondary",
          component: "div",
          onClick: this.handleChange('HOME'),
          className: classes.iconContainer
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_7__.default, null));

      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "This is an error page");
    }
  }

  render() {
    const {
      classes
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(notistack__WEBPACK_IMPORTED_MODULE_1__.SnackbarProvider, {
      maxSnack: 2,
      classes: {
        root: classes.notification,
        variantSuccess: classes.success
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.homeContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__.default, {
      square: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.gridLogoTabs
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__.default, {
      href: "https://tabby.us",
      target: "_blank",
      className: classes.ensemblelogo
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: '../../assets/static/icons/tabby_2.png',
      className: classes.logoFull
    })), this.displayIcon()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, this.dispatchPage()))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeDispatcher);

/***/ }),

/***/ "./src/components/HomeDispatcher/HomeDispatcher.style.js":
/*!***************************************************************!*\
  !*** ./src/components/HomeDispatcher/HomeDispatcher.style.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _HomeDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeDispatcher */ "./src/components/HomeDispatcher/HomeDispatcher.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);





const styles = theme => ({
  homeContainer: {
    minWidth: 400
  },
  tab: {
    color: '#00b9aa'
  },
  notification: {
    left: 150
  },
  gridLogoTabs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  allTabs: {
    maxWidth: '75%'
  },
  ensemblelogo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left'
  },
  logoAvatar: {
    marginLeft: theme.spacing(2),
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginTop: theme.spacing(1.25)
  },
  logoFull: {
    marginLeft: theme.spacing(2.25),
    width: theme.spacing(12),
    marginTop: theme.spacing(1.25)
  },
  iconContainer: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1.5)
  },
  success: {
    background: 'linear-gradient(45deg,#80e0a7, #00b9aa)'
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)(styles)(_HomeDispatcher__WEBPACK_IMPORTED_MODULE_0__.default));

/***/ }),

/***/ "./src/components/HomeDispatcher/index.js":
/*!************************************************!*\
  !*** ./src/components/HomeDispatcher/index.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _HomeDispatcher_style__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _HomeDispatcher_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeDispatcher.style */ "./src/components/HomeDispatcher/HomeDispatcher.style.js");


/***/ }),

/***/ "./src/components/Settings/Settings.js":
/*!*********************************************!*\
  !*** ./src/components/Settings/Settings.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/FormGroup.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/Switch.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Tune */ "./node_modules/@material-ui/icons/Tune.js");
/* harmony import */ var _material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/HelpOutline */ "./node_modules/@material-ui/icons/HelpOutline.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/Fade.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/settingsProfiles.js */ "./src/config/settingsProfiles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/components/utils.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils */ "./src/services/utils.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























const LightTooltip = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 1)',
    boxShadow: theme.shadows[1],
    fontSize: 13,
    marginBottom: theme.spacing(0.5)
  }
}))(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__.default);

class Settings extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChangeParameters", (path, parameter) => event => {
      let settings = this.state.settings;
      const nextValue = event.target.value;

      if ((0,_services_utils__WEBPACK_IMPORTED_MODULE_5__.isInteger)(nextValue) || nextValue.length === 0) {
        settings[path][parameter] = nextValue;
        this.setState({
          settings: settings,
          renderSaveBoolean: true
        });
      }
    });

    _defineProperty(this, "handleSwitch", () => {
      let inactivePolicy = this.state.inactivePolicy;

      if (inactivePolicy.includes(this.state.focusedWindowId)) {
        inactivePolicy = (0,_services_utils__WEBPACK_IMPORTED_MODULE_5__.removeItem)(inactivePolicy, this.state.focusedWindowId);
        webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.sendMessage({
          messageType: 'REMOVE_INACTIVE_POLICY',
          windowId: this.state.focusedWindowId
        });
      } else {
        inactivePolicy.push(this.state.focusedWindowId);
        webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.sendMessage({
          messageType: 'ADD_INACTIVE_POLICY',
          windowId: this.state.focusedWindowId
        });
      }

      this.setState({
        inactivePolicy: inactivePolicy,
        renderSaveBoolean: true
      });
    });

    _defineProperty(this, "handleOpen", () => {
      this.setState({
        openModal: true
      });
    });

    _defineProperty(this, "handleClose", () => {
      this.setState({
        openModal: false
      });
    });

    this.state = {
      focusedMode: false,
      relaxedMode: false,
      customizedBool: false,
      settings: _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.INIT_FOCUSED_PROFILE,
      renderSaveBoolean: false,
      focusedWindowId: true,
      openModal: false
    };

    this.onChangedCallback = function (changes) {
      const changesSettings = changes['settings'];
      const changesProfile = changes['active_profile'];
      const changedInactivePolicy = changes['inactive_policy'];

      if (changesSettings) {
        this.setState({
          settings: changesSettings['newValue'],
          renderSaveBoolean: true
        });
      }

      if (changesProfile) {
        this.setState({
          focusedMode: changesProfile['newValue'] === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.FOCUSED,
          relaxedMode: changesProfile['newValue'] === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.RELAXED,
          customizedBool: changesProfile['newValue'] === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.CUSTOMIZED
        });
      }

      if (changedInactivePolicy) {
        this.setState({
          inactivePolicy: changedInactivePolicy['newValue']
        });
      }
    }.bind(this);
  }

  componentDidMount() {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.local.get(['active_profile', 'settings', 'focused_window_id', 'inactive_policy']).then(result => {
      const profile = result.active_profile || _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.FOCUSED;
      const focusedMode = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.FOCUSED;
      const relaxedMode = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.RELAXED;
      const customizedBool = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.CUSTOMIZED;
      const settings = result.settings || _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.INIT_FOCUSED_PROFILE;
      const focusedWindowId = result.focused_window_id;
      const inactivePolicy = result.inactive_policy;
      this.setState({
        focusedMode,
        relaxedMode,
        customizedBool,
        settings,
        focusedWindowId,
        inactivePolicy
      });
    });
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.onChanged.removeListener(this.onChangedCallback);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.renderSaveBoolean) {
      this.forceRender();
    }
  }

  handleBoolChange(changeType) {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.sendMessage({
      messageType: 'SETTINGS_PROFILE',
      profile: changeType
    });

    if (changeType === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.RELAXED || changeType === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.FOCUSED) {
      this.notifyUser(true);
    }

    if (this.state.inactivePolicy.includes(this.state.focusedWindowId)) {
      this.handleSwitch();
    }
  }

  forceRender() {
    this.setState({
      renderSaveBoolean: false
    });
  }

  handleSaveParameters() {
    // TODO Add function to check for all potential values
    let success = false;

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.checkSettings)(this.state.settings)) {
      webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.sendMessage({
        messageType: 'SETTINGS_PARAMETERS',
        settings: this.state.settings
      });
      success = true;
    }

    this.notifyUser(success);
  }

  notifyUser(success) {
    this.props.enqueueSnackbar(success ? 'New Settings are saved.' : 'Settings cannot be saved.', {
      variant: success ? 'success' : 'error',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      transitionDuration: 750,
      autoHideDuration: 1500
    });
  }

  render() {
    const {
      classes
    } = this.props;
    const inputsParameters = [{
      label: 'Optimal tabs number',
      source: this.state.settings,
      path: _utils__WEBPACK_IMPORTED_MODULE_4__.POLICY,
      parameter: _utils__WEBPACK_IMPORTED_MODULE_4__.OPTIMAL_NUMBER_TABS,
      inputProps: {
        min: '1',
        max: '100',
        step: '1'
      }
    }];
    const listItemsParameters = inputsParameters.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__.default, {
      key: index,
      disabled: !this.state.customizedBool,
      label: item.label,
      onChange: this.handleChangeParameters(item.path, item.parameter),
      value: item.source[item.path][item.parameter],
      className: classes.textField,
      type: "number",
      onKeyUp: event => {
        if (event.key == 'Enter') this.handleSaveParameters();
      },
      inputProps: item.inputProps
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.mainBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_10__.default, {
        checked: this.state.focusedWindowId && this.state.inactivePolicy ? !this.state.inactivePolicy.includes(this.state.focusedWindowId) : true,
        onChange: this.handleSwitch,
        color: "secondary",
        className: classes.switchWrapper
      }),
      className: classes.switchContainer,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
        className: classes.styleLabel
      }, "Enable on this window")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.introductionBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_12__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.parametersTitle
    }, "Select your profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13__.default, {
      className: classes.settingsWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(LightTooltip, {
      title: 'tabby tends to keep 5 tabs',
      placement: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.firstProfilesContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14__.default, {
        checked: this.state.focusedMode,
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.FOCUSED),
        color: "secondary",
        className: classes.checkboxWrapper
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
        className: classes.styleLabel
      }, "Focus"),
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_15__.default, {
      className: classes.helpIcon
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(LightTooltip, {
      title: 'tabby tends to keep 12 tabs',
      placement: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.firstProfilesContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14__.default, {
        checked: this.state.relaxedMode,
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.RELAXED),
        color: "secondary",
        className: classes.checkboxWrapper
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
        className: classes.styleLabel
      }, "Relax"),
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_15__.default, {
      className: classes.helpIcon
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.customizeWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14__.default, {
        checked: this.state.customizedBool,
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.CUSTOMIZED),
        color: "secondary",
        className: classes.checkboxWrapper
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
        className: classes.styleLabel
      }, "Customize"),
      className: classes.firstBooleans
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.settingsBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_16__.default, {
      required: true,
      fullWidth: true
    }, listItemsParameters), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__.default, {
      hidden: true,
      key: "hidden-textfield",
      disabled: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__.default, {
      size: "small",
      color: "secondary",
      disabled: !this.state.customizedBool,
      className: classes.secondaryButton,
      variant: "outlined",
      onClick: () => this.handleSaveParameters()
    }, "Save"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__.default, {
      variant: "text",
      onClick: this.handleOpen,
      className: classes.tipsButton
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabelTips
    }, "Help"), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_18__.default //disablePortal={true}
    , {
      className: classes.modal,
      open: this.state.openModal,
      onClose: this.handleClose,
      closeAfterTransition: true,
      BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_19__.default,
      BackdropProps: {
        timeout: 750,
        invisible: true
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_20__.default, {
      in: this.state.openModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_21__.default, {
      borderRadius: 6,
      className: classes.paper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.firstBlockModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.secondEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabel
    }, "Protect a tab"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.lastEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      src: '../../assets/static/icons/right_click.png',
      className: classes.leftClickWrapper
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabel
    }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabel
    }, "Pin"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.secondEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabel
    }, "Reopen multiple tabs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.secondEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabel
    }, "Ctrl"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabel
    }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      src: '../../assets/static/icons/left_click.png',
      className: classes.leftClickWrapper
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabel
    }, "How does tabby work?"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabelNext
    }, "tabby will not remove tabs right after their creation.", ' '), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabelNext
    }, "tabby takes well-thought-out decisions automatically."), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.footerModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_22__.default, {
      href: "https://tabby.us/faq",
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabelTips
    }, "FAQ available here"), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabelTips
    }, "tabby ", webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.getManifest().version), ' ')))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notistack__WEBPACK_IMPORTED_MODULE_2__.withSnackbar)(Settings));

/***/ }),

/***/ "./src/components/Settings/index.js":
/*!******************************************!*\
  !*** ./src/components/Settings/index.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _settings_style__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _settings_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.style */ "./src/components/Settings/settings.style.js");


/***/ }),

/***/ "./src/components/Settings/settings.style.js":
/*!***************************************************!*\
  !*** ./src/components/Settings/settings.style.js ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings */ "./src/components/Settings/Settings.js");



const styles = theme => ({
  settingsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginLeft: 47,
    marginRight: 20
  },
  secondaryButton: {
    marginTop: 18,
    textTransform: 'capitalize',
    fontWeight: 'normal',
    fontSize: 12,
    fontFamily: 'Helvetica',
    maxWidth: 20
  },
  notification: {
    maxWidth: 150
  },
  introductionBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    marginLeft: 7
  },
  parametersTitle: {
    //fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Helvetica',
    marginLeft: 16
  },
  settingsBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 32,
    marginTop: 4
  },
  firstBooleans: {
    maxWidth: '36%',
    minWidth: theme.spacing(8),
    maxHeight: 20,
    marginTop: 5 // pointerEvents: 'none',

  },
  firstProfilesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    maxWidth: theme.spacing(10)
  },
  styleLabel: {
    fontSize: 16,
    fontFamily: 'Helvetica'
  },
  checkboxWrapper: {
    pointerEvents: 'auto'
  },
  switchContainer: {
    maxHeight: 20,
    marginBottom: 20,
    pointerEvents: 'none'
  },
  switchWrapper: {
    pointerEvents: 'auto'
  },
  textField: {
    maxWidth: '85%'
  },
  customizeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'start'
  },
  helpIcon: {
    color: '#e55c00',
    fontSize: 13,
    marginTop: theme.spacing(0.25),
    marginLeft: theme.spacing(1)
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100%',
    minHeight: '100%',
    backgroundColor: 'rgba(150, 150, 150, 0.4)',
    zIndex: theme.zIndex.drawer + 1
  },
  mainBlock: {
    overflow: 'hidden'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    //border: '0.5px solid #5A5A5A',
    padding: theme.spacing(2, 4, 3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    opacity: '1 !important'
  },
  boxCtrl: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #5A5A5A',
    height: theme.spacing(2.5),
    //padding: theme.spacing(2, 4, 3),
    //marginLeft: theme.spacing(3),
    //marginRight: theme.spacing(3),
    opacity: '1 !important'
  },
  leftClickWrapper: {
    height: theme.spacing(3)
  },
  secondEnsemble: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: '30%'
  },
  lastEnsemble: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: '27.5%'
  },
  firstBlockModal: {
    marginBottom: theme.spacing(2)
  },
  tipsButton: {
    textTransform: 'capitalize',
    marginTop: theme.spacing(0),
    borderRadius: theme.spacing(2),
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: theme.spacing(1),
    marginRight: 0,
    marginBottom: theme.spacing(1)
  },
  styleLabelTips: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    color: 'rgba(150, 150, 150, 1)'
  },
  styleLabelNext: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(0.5)
  },
  footerModal: {
    marginTop: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between' // minWidth: '100%',

  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(styles)(_Settings__WEBPACK_IMPORTED_MODULE_0__.default));

/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/*! namespace exports */
/*! export INACTIVE_POLICY [provided] [unused] [could be renamed] */
/*! export OPTIMAL_NUMBER_TABS [provided] [used] [could be renamed] */
/*! export POLICY [provided] [used] [could be renamed] */
/*! export checkSettings [provided] [used] [could be renamed] */
/*! export removeItem [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OPTIMAL_NUMBER_TABS": () => /* binding */ OPTIMAL_NUMBER_TABS,
/* harmony export */   "POLICY": () => /* binding */ POLICY,
/* harmony export */   "checkSettings": () => /* binding */ checkSettings
/* harmony export */ });
/* unused harmony exports INACTIVE_POLICY, removeItem */
const OPTIMAL_NUMBER_TABS = 'target_tabs';
const POLICY = 'policy';
const INACTIVE_POLICY = 'inactive_policy';
function checkSettings(settings) {
  if (settings[POLICY][OPTIMAL_NUMBER_TABS] && settings[POLICY][OPTIMAL_NUMBER_TABS] > 0) {
    return true;
  } else {
    return false;
  }
}
function removeItem(arr, value) {
  const index = arr.indexOf(value);

  if (index > -1) {
    arr.splice(index, 1);
  }

  return arr;
}

/***/ }),

/***/ "./src/config/env.js":
/*!***************************!*\
  !*** ./src/config/env.js ***!
  \***************************/
/*! namespace exports */
/*! export MAXIMUM_HISTORY_SIZE [provided] [used] [could be renamed] */
/*! export MAXIMUM_SCORE [provided] [used] [could be renamed] */
/*! export MAX_ACTIVE_DEBOUNCE [provided] [used] [could be renamed] */
/*! export MIN_ACTIVE_DEBOUNCE [provided] [used] [could be renamed] */
/*! export SCORER [provided] [used] [could be renamed] */
/*! export SESSIONS_MAX_FUZZY_DELTA_MS [provided] [used] [could be renamed] */
/*! export SESSIONS_RETRIES [provided] [used] [could be renamed] */
/*! export SESSIONS_TIMEOUT_MS [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SCORER": () => /* binding */ SCORER,
/* harmony export */   "MAXIMUM_SCORE": () => /* binding */ MAXIMUM_SCORE,
/* harmony export */   "MAXIMUM_HISTORY_SIZE": () => /* binding */ MAXIMUM_HISTORY_SIZE,
/* harmony export */   "SESSIONS_TIMEOUT_MS": () => /* binding */ SESSIONS_TIMEOUT_MS,
/* harmony export */   "SESSIONS_RETRIES": () => /* binding */ SESSIONS_RETRIES,
/* harmony export */   "SESSIONS_MAX_FUZZY_DELTA_MS": () => /* binding */ SESSIONS_MAX_FUZZY_DELTA_MS,
/* harmony export */   "MIN_ACTIVE_DEBOUNCE": () => /* binding */ MIN_ACTIVE_DEBOUNCE,
/* harmony export */   "MAX_ACTIVE_DEBOUNCE": () => /* binding */ MAX_ACTIVE_DEBOUNCE
/* harmony export */ });
const SCORER = 'v1'; // only default implemented

const MAXIMUM_SCORE = 10; // max score for scorer

const MAXIMUM_HISTORY_SIZE = 1000; // max killed tab history in memory

const SESSIONS_TIMEOUT_MS = 200; // when a tab is killed we need a timeout to retrieve the sessionId

const SESSIONS_RETRIES = 5; // how many tries to retrieve the session ID of a killed tab

const SESSIONS_MAX_FUZZY_DELTA_MS = 1000 * 5; // time is fuzzy matched to retireve the correct sessionID, should be higher than SESSIONS_TIMEOUT_MS

const MIN_ACTIVE_DEBOUNCE = 1000 * 2; // minimum active reading on a tab to be counted as valid 'useful' time

const MAX_ACTIVE_DEBOUNCE = 1000 * 60 * 5; // maximum time without any user input before it is considered idled, must be higher than 15sec



/***/ }),

/***/ "./src/config/settingsProfiles.js":
/*!****************************************!*\
  !*** ./src/config/settingsProfiles.js ***!
  \****************************************/
/*! namespace exports */
/*! export CUSTOMIZED [provided] [used] [could be renamed] */
/*! export FOCUSED [provided] [used] [could be renamed] */
/*! export INIT_FOCUSED_PROFILE [provided] [used] [could be renamed] */
/*! export INIT_RELAXED_PROFILE [provided] [used] [could be renamed] */
/*! export RELAXED [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RELAXED": () => /* binding */ RELAXED,
/* harmony export */   "FOCUSED": () => /* binding */ FOCUSED,
/* harmony export */   "CUSTOMIZED": () => /* binding */ CUSTOMIZED,
/* harmony export */   "INIT_FOCUSED_PROFILE": () => /* binding */ INIT_FOCUSED_PROFILE,
/* harmony export */   "INIT_RELAXED_PROFILE": () => /* binding */ INIT_RELAXED_PROFILE
/* harmony export */ });
const RELAXED = 'relaxed';
const FOCUSED = 'focused';
const CUSTOMIZED = 'customized';
var INIT_RELAXED_PROFILE = {};
var INIT_FOCUSED_PROFILE = {};

if (true) {
  INIT_RELAXED_PROFILE = {
    memory: {
      cache_size: 5,
      min_time_full_stats_update: 1 * 1000,
      // minimum time between 2 full stats update for all tabs
      min_time_garbage_collector: 5 * 1000 // minimum time between 2 full tab garbage collection

    },
    policy: {
      target_tabs: 12,
      // tabby will stop closing tabs when we have less than target_tabs open
      decay: 0.8,
      // when the number of tab increases, tabby will delete more tabs
      min_time: 3 * 1000,
      // Tabby will kill about 1 tab per min_time (depending on activation rules)
      // IGNORED tabs
      active: false,
      // these status are absolutely protected tabs: these are ignored and do not count as tabs.
      pinned: true,
      audible: false
    },
    scorer: {
      // PROTECTED tabs
      active: true,
      // these tabs will be given absolute maximum score + extended protection
      pinned: true,
      // when the status is lost.
      audible: true,
      min_active: 5 * 1000,
      // minimum time a tab has to exist before being scored
      protection_time: 15 * 1000,
      // A restored tab is protected for this long
      cached_decay: 0.2 // In current scorer, the cache score is added to the current score with a decreasing factor

    }
  };
  INIT_FOCUSED_PROFILE = {
    memory: {
      cache_size: 5,
      min_time_full_stats_update: 1 * 1000,
      min_time_garbage_collector: 5 * 1000
    },
    policy: {
      target_tabs: 5,
      decay: 0.8,
      min_time: 3 * 1000,
      // IGNORED tabs
      active: false,
      // these status are absolutely protected tabs: these are ignored and do not count as tabs.
      pinned: true,
      audible: false
    },
    scorer: {
      // PROTECTED tabs
      active: true,
      // these tabs will be given absolute maximum score + extended protection
      pinned: true,
      // when the status is lost.
      audible: true,
      min_active: 5 * 1000,
      protection_time: 15 * 1000,
      cached_decay: 0.2
    }
  };
} else {}

Object.freeze(INIT_FOCUSED_PROFILE);
Object.freeze(INIT_RELAXED_PROFILE);


/***/ }),

/***/ "./src/services/utils.js":
/*!*******************************!*\
  !*** ./src/services/utils.js ***!
  \*******************************/
/*! namespace exports */
/*! export copy [provided] [used] [could be renamed] */
/*! export getDomain [provided] [used] [could be renamed] */
/*! export getLastFocusedWindow [provided] [used] [could be renamed] */
/*! export isInteger [provided] [used] [could be renamed] */
/*! export isUserActive [provided] [unused] [could be renamed] */
/*! export logger [provided] [used] [could be renamed] */
/*! export removeItem [provided] [used] [could be renamed] */
/*! export retryPromise [provided] [used] [could be renamed] */
/*! export setAllReadBadge [provided] [used] [could be renamed] */
/*! export setUnreadBadge [provided] [used] [could be renamed] */
/*! export storageReset [provided] [used] [could be renamed] */
/*! export timeout [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => /* binding */ logger,
/* harmony export */   "copy": () => /* binding */ copy,
/* harmony export */   "retryPromise": () => /* binding */ retryPromise,
/* harmony export */   "getDomain": () => /* binding */ getDomain,
/* harmony export */   "setAllReadBadge": () => /* binding */ setAllReadBadge,
/* harmony export */   "setUnreadBadge": () => /* binding */ setUnreadBadge,
/* harmony export */   "isInteger": () => /* binding */ isInteger,
/* harmony export */   "storageReset": () => /* binding */ storageReset,
/* harmony export */   "getLastFocusedWindow": () => /* binding */ getLastFocusedWindow,
/* harmony export */   "removeItem": () => /* binding */ removeItem
/* harmony export */ });
/* unused harmony exports timeout, isUserActive */
/* harmony import */ var psl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! psl */ "./node_modules/psl/index.js");
/* harmony import */ var psl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(psl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/env.js */ "./src/config/env.js");




const logger = function (...args) {
  if (true) {
    let default_format = ['font-weight:initial; color:black;'];
    let pre = '%c' + new Date().toUTCString() + '%c';
    let options = ['font-weight:lighter; color:LightSlateGrey;'];
    options.push(default_format);

    if (typeof args[0] === 'object') {
      pre += ' | %c' + args[0].constructor.name + '%c | ';
      pre += args[1];
      options.push('color:#1da87c; font-weight:bolder');
      options.push(default_format);
    } else {
      pre += ' | ' + args[0];
    }

    console.log(pre, ...options);
  }
};

function copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getDomain(str) {
  try {
    return psl__WEBPACK_IMPORTED_MODULE_0__.parse(new URL(str).hostname).domain;
  } catch (_unused) {
    return str;
  }
}

function isInteger(value) {
  return /^\d+$/.test(value);
}

function setAllReadBadge() {
  webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.browserAction.setBadgeText({
    text: ''
  }); // <-- set text to '' to remove the badge
}

function setUnreadBadge() {
  webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.browserAction.setBadgeBackgroundColor({
    color: [229, 92, 0, 128]
  });
  webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.browserAction.getBadgeText({}).then(function (badgeText) {
    let counter = 1;

    if (isInteger(badgeText)) {
      counter = parseInt(badgeText) + 1;
    }

    webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.browserAction.setBadgeText({
      text: `${counter}`
    });
  });
}

function isUserActive() {
  // Not compatible with Safari
  return webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.idle.queryState(Math.round(_config_env_js__WEBPACK_IMPORTED_MODULE_2__.MAX_ACTIVE_DEBOUNCE / 1000)).then(status => {
    if (status === 'active') {
      return true;
    } else if (status) {
      return false;
    } else {
      logger("Couldn't check user activity.");
      return true;
    }
  });
}

function storageReset() {
  return webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.storage.local.get(null).then(d => {
    return webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.storage.local.remove(Object.keys(d));
  }).then(() => {
    logger('Memory flushed.');
  });
}

function getLastFocusedWindow() {
  // windowType is deprecated in FF, it doesn't seem critical anyways
  return webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.windows.getLastFocused({
    populate: false
  }).then(d => {
    return d.id;
  });
}

function removeItem(arr, value) {
  const index = arr.indexOf(value);

  if (index > -1) {
    arr.splice(index, 1);
  }

  return arr;
}

const retryPromise = (func, delay, times) => new Promise((resolve, reject) => {
  return func().then(resolve).catch(reason => {
    if (reason === false) {
      return reject(reason);
    }

    if (times > 0) {
      return timeout(delay).then(retryPromise.bind(null, func, delay, times - 1)).then(resolve).catch(reject);
    }

    return reject(reason);
  });
});

logger('Starting in ' + "debug" + ' env.');


if (true) {
  window.utils = {
    logger,
    copy,
    timeout,
    retryPromise,
    getDomain,
    setAllReadBadge,
    setUnreadBadge,
    isInteger,
    isUserActive,
    storageReset,
    getLastFocusedWindow,
    removeItem
  };
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!bootstrap-css-only/css/bootstrap.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/bootstrap-css-only/css/bootstrap.min.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.id, ".card-header {\n  background-color: rgba(255, 255, 255, 0.21);\n  min-width: 200px;\n}\n\n.card-title {\n  background-color: rgba(255, 255, 255, 0.21);\n  display: inline-block;\n  font-size: 18px;\n  margin-bottom: 2px;\n  line-height: 1;\n  border-bottom: 2px solid #1b9e74;\n  min-width: 300px;\n}\n\n.bold-title {\n  font-size: 16px;\n}\n\n:focus {outline:0 !important;}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/app/popup.js","vendors-node_modules_lodash_lodash_js-node_modules_psl_index_js-node_modules_webextension-pol-357a4d","vendors-node_modules_material-ui_core_Typography_Typography_js-node_modules_material-ui_core_-25b84f"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			jsonpArray = jsonpArray.slice();
/******/ 			for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		function webpackJsonpCallback(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var executeModules = data[2];
/******/ 			var runtime = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		};
/******/ 		
/******/ 		var jsonpArray = window["webpackJsonptk_chrome"] = window["webpackJsonptk_chrome"] || [];
/******/ 		var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 		jsonpArray.push = webpackJsonpCallback;
/******/ 		var parentJsonpFunction = oldJsonpFunction;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9lbnYuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9zZXJ2aWNlcy91dGlscy5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy9Vc2Vycy9mcmFuY29pcy5tZXVuaWVyL3Byb2plY3RzL3RrLWNocm9tZS9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZXxzeW5jfC9eXFwuXFwvLiokLyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3M/ZWE1ZCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJBcHAiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSRVNUT1JFIiwiU0hFTExfUkVTVE9SRSIsIlJFTU9WRUQiLCJDTE9TRURfSElTVE9SWSIsIk5VTUJFUl9IT1VSU19EQVkiLCJUSU1FX1BFUklPRF8yNEgiLCJUSU1FX1BFUklPRF83MkgiLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZXRBbGxSZWFkQmFkZ2UiLCJzdGF0ZSIsInJlbmRlclNhdmVCb29sZWFuIiwib25DaGFuZ2VkQ2FsbGJhY2siLCJjaGFuZ2VzIiwiY2hhbmdlc0Nsb3NlZEhpc3RvcnkiLCJzZXRTdGF0ZSIsImNsb3NlZF9oaXN0b3J5Iiwic2VhcmNoVmFsdWUiLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJicm93c2VyIiwidGhlbiIsInJlc3VsdCIsIm5leHRMaXN0IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJmb3JjZVJlbmRlciIsInJlbW92ZUl0ZW0iLCJsaXN0SXRlbXMiLCJrZXkiLCJlIiwiY3RybEtleSIsIm1ldGFLZXkiLCJyZXN0b3JlVGFiIiwiaXRlbXMiLCJtZXNzYWdlVHlwZSIsInJlc3RvcmVkVGFiIiwiZmlsdGVyIiwiaXRlbSIsInV1aWQiLCJzZWFyY2hPbkNoYW5nZSIsInZhbHVlIiwic2VhcmNoT25SZXF1ZXN0U2VhcmNoIiwiZXZlbnQiLCJzZWFyY2hPbkNhbmNlbCIsImZpbHRlckxpc3QiLCJzZWxlY3RlZExpc3QiLCJlbmRQZXJpb2QiLCJub3ciLCJEYXRlIiwiZGVsZXRpb25fdGltZSIsInJlbmRlckxpc3QiLCJjbGFzc2VzIiwibWFwIiwid2Vic2l0ZSIsImRlbGV0aW9uVGltZSIsImhvdXJzX21pbnV0ZXNfZm9ybWF0IiwibW9tZW50IiwiZm9ybWF0IiwiZGF0ZSIsInN0YXJ0T2YiLCJ0cnVuY2F0ZWRfdXJsIiwidXJsIiwibGVuZ3RoIiwic2VhcmNoUGF0dGVybiIsIlJlZ0V4cCIsInNwbGl0IiwidGVybSIsImpvaW4iLCJvcHRpb24iLCJ0aXRsZSIsIm1hdGNoIiwidG90YWxMZW5ndGgiLCJyZXZlcnNlIiwiY3VycmVudCIsImxhc3QiLCJpIiwibmV4dCIsImRlbHRhIiwiTWF0aCIsIm1heCIsImNlaWwiLCJkaWZmIiwiY29uc29sZSIsImxvZyIsInNwbGljZSIsImxpc3RJdGVtIiwibXlGaWx0ZXJlZExpc3QiLCJpbmRleCIsInN0eWxlIiwiZGF5IiwidGV4dCIsInByaW1hcnkiLCJwcmltYXJ5VGl0bGVDb250YWluZXIiLCJsaXN0VGl0bGVUZXh0IiwiZ3JpZEF2YXRhcldpdGhUaW1lIiwidGltZURpc3BsYXkiLCJmYXZJY29uVXJsIiwiYXZhdGFyQ29udGFpbmVyIiwicHJpbWFyeVRleHRDb250YWluZXIiLCJzZWNvbmRhcnlUZXh0Q29udGFpbmVyIiwiaXRlbVRleHQiLCJidXR0b25Db250YWluZXIiLCJidXR0b24iLCJsaXN0V2Vic2l0ZXMiLCJzZWFyY2hCYXIiLCJsaXN0IiwibWluIiwicmVuZGVyIiwibnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIiwiYm9sZE51bWJlciIsInRleHRPblJpZ2h0IiwidG9wVGV4dCIsIm1pZGRsZVRleHQiLCJmb290ZXJDb250YWluZXIiLCJpY29uQ29udGFpbmVyIiwibGlua1RvRm9ybSIsInN0eWxlcyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWF4SGVpZ2h0IiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJncmVlblRpdGxlIiwiZm9udFNpemUiLCJib3JkZXJCb3R0b20iLCJtYXhXaWR0aCIsImxpc3RUaXRsZSIsImNvbG9yIiwic3ViVGV4dCIsIm1hcmdpblRvcCIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0Iiwib3ZlcmZsb3dXcmFwIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwibWluV2lkdGgiLCJtYXJnaW5SaWdodCIsImxpc3RDb250YWluZXIiLCJtYXJnaW5Cb3R0b20iLCJ3aXRoU3R5bGVzIiwiSG9tZURpc3BhdGNoZXIiLCJuZXdWYWx1ZSIsImFwcEJhclZhbHVlIiwibG9nZ2VyIiwiZGlzcGF0Y2hQYWdlIiwiZGlzcGxheUljb24iLCJoYW5kbGVDaGFuZ2UiLCJyb290Iiwibm90aWZpY2F0aW9uIiwidmFyaWFudFN1Y2Nlc3MiLCJzdWNjZXNzIiwiaG9tZUNvbnRhaW5lciIsImdyaWRMb2dvVGFicyIsImVuc2VtYmxlbG9nbyIsImxvZ29GdWxsIiwidGFiIiwibGVmdCIsImFsbFRhYnMiLCJsb2dvQXZhdGFyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiTGlnaHRUb29sdGlwIiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbW1vbiIsIndoaXRlIiwiYm94U2hhZG93Iiwic2hhZG93cyIsIlRvb2x0aXAiLCJTZXR0aW5ncyIsInBhdGgiLCJwYXJhbWV0ZXIiLCJzZXR0aW5ncyIsIm5leHRWYWx1ZSIsInRhcmdldCIsImlzSW50ZWdlciIsImluYWN0aXZlUG9saWN5IiwiaW5jbHVkZXMiLCJmb2N1c2VkV2luZG93SWQiLCJ3aW5kb3dJZCIsInB1c2giLCJvcGVuTW9kYWwiLCJmb2N1c2VkTW9kZSIsInJlbGF4ZWRNb2RlIiwiY3VzdG9taXplZEJvb2wiLCJJTklUX0ZPQ1VTRURfUFJPRklMRSIsImNoYW5nZXNTZXR0aW5ncyIsImNoYW5nZXNQcm9maWxlIiwiY2hhbmdlZEluYWN0aXZlUG9saWN5IiwiRk9DVVNFRCIsIlJFTEFYRUQiLCJDVVNUT01JWkVEIiwicHJvZmlsZSIsImFjdGl2ZV9wcm9maWxlIiwiZm9jdXNlZF93aW5kb3dfaWQiLCJpbmFjdGl2ZV9wb2xpY3kiLCJoYW5kbGVCb29sQ2hhbmdlIiwiY2hhbmdlVHlwZSIsIm5vdGlmeVVzZXIiLCJoYW5kbGVTd2l0Y2giLCJoYW5kbGVTYXZlUGFyYW1ldGVycyIsImNoZWNrU2V0dGluZ3MiLCJlbnF1ZXVlU25hY2tiYXIiLCJ2YXJpYW50IiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiYXV0b0hpZGVEdXJhdGlvbiIsImlucHV0c1BhcmFtZXRlcnMiLCJsYWJlbCIsInNvdXJjZSIsIlBPTElDWSIsIk9QVElNQUxfTlVNQkVSX1RBQlMiLCJpbnB1dFByb3BzIiwic3RlcCIsImxpc3RJdGVtc1BhcmFtZXRlcnMiLCJoYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzIiwidGV4dEZpZWxkIiwibWFpbkJsb2NrIiwic3dpdGNoV3JhcHBlciIsInN3aXRjaENvbnRhaW5lciIsInN0eWxlTGFiZWwiLCJpbnRyb2R1Y3Rpb25CbG9jayIsInBhcmFtZXRlcnNUaXRsZSIsInNldHRpbmdzV3JhcHBlciIsImZpcnN0UHJvZmlsZXNDb250YWluZXIiLCJjaGVja2JveFdyYXBwZXIiLCJmaXJzdEJvb2xlYW5zIiwiaGVscEljb24iLCJjdXN0b21pemVXcmFwcGVyIiwic2V0dGluZ3NCbG9jayIsInNlY29uZGFyeUJ1dHRvbiIsImhhbmRsZU9wZW4iLCJ0aXBzQnV0dG9uIiwic3R5bGVMYWJlbFRpcHMiLCJtb2RhbCIsImhhbmRsZUNsb3NlIiwiQmFja2Ryb3AiLCJ0aW1lb3V0IiwiaW52aXNpYmxlIiwicGFwZXIiLCJmaXJzdEJsb2NrTW9kYWwiLCJzZWNvbmRFbnNlbWJsZSIsImxhc3RFbnNlbWJsZSIsImxlZnRDbGlja1dyYXBwZXIiLCJzdHlsZUxhYmVsTmV4dCIsImZvb3Rlck1vZGFsIiwidmVyc2lvbiIsIndpdGhTbmFja2JhciIsInBvaW50ZXJFdmVudHMiLCJtaW5IZWlnaHQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJwYWRkaW5nIiwib3BhY2l0eSIsImJveEN0cmwiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIklOQUNUSVZFX1BPTElDWSIsImFyciIsImluZGV4T2YiLCJTQ09SRVIiLCJNQVhJTVVNX1NDT1JFIiwiTUFYSU1VTV9ISVNUT1JZX1NJWkUiLCJTRVNTSU9OU19USU1FT1VUX01TIiwiU0VTU0lPTlNfUkVUUklFUyIsIlNFU1NJT05TX01BWF9GVVpaWV9ERUxUQV9NUyIsIk1JTl9BQ1RJVkVfREVCT1VOQ0UiLCJNQVhfQUNUSVZFX0RFQk9VTkNFIiwiSU5JVF9SRUxBWEVEX1BST0ZJTEUiLCJFTlYiLCJtZW1vcnkiLCJjYWNoZV9zaXplIiwibWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGUiLCJtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvciIsInBvbGljeSIsInRhcmdldF90YWJzIiwiZGVjYXkiLCJtaW5fdGltZSIsImFjdGl2ZSIsInBpbm5lZCIsImF1ZGlibGUiLCJzY29yZXIiLCJtaW5fYWN0aXZlIiwicHJvdGVjdGlvbl90aW1lIiwiY2FjaGVkX2RlY2F5IiwiT2JqZWN0IiwiZnJlZXplIiwiYXJncyIsImRlZmF1bHRfZm9ybWF0IiwicHJlIiwidG9VVENTdHJpbmciLCJvcHRpb25zIiwibmFtZSIsImNvcHkiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImdldERvbWFpbiIsInN0ciIsInBzbCIsIlVSTCIsImhvc3RuYW1lIiwiZG9tYWluIiwidGVzdCIsInNldFVucmVhZEJhZGdlIiwiYmFkZ2VUZXh0IiwiY291bnRlciIsInBhcnNlSW50IiwiaXNVc2VyQWN0aXZlIiwicm91bmQiLCJzdGF0dXMiLCJzdG9yYWdlUmVzZXQiLCJkIiwia2V5cyIsImdldExhc3RGb2N1c2VkV2luZG93IiwicG9wdWxhdGUiLCJpZCIsInJldHJ5UHJvbWlzZSIsImZ1bmMiLCJkZWxheSIsInRpbWVzIiwicmVqZWN0IiwiY2F0Y2giLCJyZWFzb24iLCJ3aW5kb3ciLCJ1dGlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLGlFQUFjLENBQUM7QUFDM0JDLFlBQVUsRUFBRTtBQUNWQyxjQUFVLEVBQUU7QUFERixHQURlO0FBSTNCQyxTQUFPLEVBQUU7QUFDUEMsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRTtBQURHO0FBREo7QUFKa0IsQ0FBRCxDQUE1Qjs7QUFXQSxTQUFTQyxHQUFULEdBQWU7QUFDYixzQkFDRSwyREFBQyw2REFBRDtBQUFrQixTQUFLLEVBQUVQO0FBQXpCLGtCQUNFLDJEQUFDLCtEQUFELE9BREYsRUFDcUIsR0FEckIsQ0FERjtBQUtEOztBQUVEUSx1REFBQSxlQUFnQiwyREFBQyxHQUFELE9BQWhCLEVBQXlCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFD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WjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7Ozs7Ozs7Ozs7Ozs7O0FDOVJBLGNBQWMsbUJBQU8sQ0FBQyxvSUFBNEQ7O0FBRWxGOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDBHQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7O1VDbkJmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQSxnQkFBZ0IsMkJBQTJCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGVBQWUsdUJBQXVCO1dBQ3RDO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsMkM7Ozs7VUM1RkE7VUFDQSIsImZpbGUiOiJwb3B1cC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lRGlzcGF0Y2hlciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVEaXNwYXRjaGVyJztcbmltcG9ydCB7IE11aVRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgfSxcbiAgcGFsZXR0ZToge1xuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyMwMGI5YWEnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8SG9tZURpc3BhdGNoZXIgLz57JyAnfVxuICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCJpbXBvcnQgKiBhcyBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IEVycm9yT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yT3V0bGluZSc7XG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0IGFzIExpc3QgfSBmcm9tICdyZWFjdC13aW5kb3cnO1xuXG5pbXBvcnQgeyBzZXRBbGxSZWFkQmFkZ2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ21hdGVyaWFsLXVpLXNlYXJjaC1iYXInO1xuXG5jb25zdCBSRVNUT1JFID0gJ1JFU1RPUkUnO1xuY29uc3QgU0hFTExfUkVTVE9SRSA9ICdTSEVMTF9SRVNUT1JFJztcbmNvbnN0IFJFTU9WRUQgPSAnUkVNT1ZFRCc7XG5jb25zdCBDTE9TRURfSElTVE9SWSA9ICdjbG9zZWRfaGlzdG9yeSc7XG5jb25zdCBOVU1CRVJfSE9VUlNfREFZID0gMjQ7XG5jb25zdCBUSU1FX1BFUklPRF8yNEggPSAzNjAwMDAwICogTlVNQkVSX0hPVVJTX0RBWTsgLy8gaW4gbWljcm9zZWNvbmRcbmNvbnN0IFRJTUVfUEVSSU9EXzcySCA9IDM2MDAwMDAgKiBOVU1CRVJfSE9VUlNfREFZICogMzsgLy8gaW4gbWljcm9zZWNvbmRcblxuY2xhc3MgSG9tZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBzZXRBbGxSZWFkQmFkZ2UoKTtcbiAgICB0aGlzLnN0YXRlID0geyByZW5kZXJTYXZlQm9vbGVhbjogZmFsc2UgfTtcbiAgICB0aGlzLm9uQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXNDbG9zZWRIaXN0b3J5ID0gY2hhbmdlc1tDTE9TRURfSElTVE9SWV07XG4gICAgICBpZiAoY2hhbmdlc0Nsb3NlZEhpc3RvcnkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2xvc2VkX2hpc3Rvcnk6IGNoYW5nZXNDbG9zZWRIaXN0b3J5WyduZXdWYWx1ZSddLFxuICAgICAgICAgIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlLFxuICAgICAgICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChcbiAgICAgIFtDTE9TRURfSElTVE9SWV1cbiAgICApLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSByZXN1bHQuY2xvc2VkX2hpc3RvcnkgfHwgW107XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VkX2hpc3RvcnkgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5leHRMaXN0OiBbXSB9KTtcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgc2V0QWxsUmVhZEJhZGdlKCk7XG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnJlbmRlclNhdmVCb29sZWFuKSB7XG4gICAgICB0aGlzLmZvcmNlUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSXRlbShsaXN0SXRlbXMsIGtleSwgZSkge1xuICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XG4gICAgICAvLyBtZXRhS2V5IGlzIGNtZCBrZXkgb24gbWFjXG4gICAgICB0aGlzLnJlc3RvcmVUYWIobGlzdEl0ZW1zLCBrZXksIFNIRUxMX1JFU1RPUkUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc3RvcmVUYWIobGlzdEl0ZW1zLCBrZXksIFJFU1RPUkUpO1xuICAgIH1cbiAgfVxuXG4gIHJlc3RvcmVUYWIoaXRlbXMsIGtleSwgbWVzc2FnZVR5cGUpIHtcbiAgICBjb25zdCByZXN0b3JlZFRhYiA9IGl0ZW1zW2tleV07XG4gICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS51dWlkICE9PSByZXN0b3JlZFRhYi51dWlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VkX2hpc3Rvcnk6IGNsb3NlZF9oaXN0b3J5LCByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSB9KTtcbiAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VUeXBlLFxuICAgICAgdXVpZDogcmVzdG9yZWRUYWIudXVpZCxcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaE9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBzZWFyY2hPblJlcXVlc3RTZWFyY2goZXZlbnQpIHt9O1xuXG4gIHNlYXJjaE9uQ2FuY2VsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogJycgfSk7XG4gIH07XG5cbiAgZm9yY2VSZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGZpbHRlckxpc3Qoc2VsZWN0ZWRMaXN0LCBlbmRQZXJpb2QpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZWxlY3RlZExpc3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gbm93IC0gaXRlbS5kZWxldGlvbl90aW1lIDwgZW5kUGVyaW9kO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyTGlzdCgpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBrZWVwIGVsZW1lbnRzIG9ubHkgaW4gdGltZS1mcmFtZVxuICAgIGxldCBzZWxlY3RlZExpc3QgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5ID8gdGhpcy5maWx0ZXJMaXN0KHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnksIFRJTUVfUEVSSU9EXzcySCkgOiBbXTtcblxuICAgIC8vIGxpc3QgZW5yaWNobWVudFxuICAgIHNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdC5tYXAoKHdlYnNpdGUpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygd2Vic2l0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3QgZGVsZXRpb25UaW1lID0gbmV3IERhdGUod2Vic2l0ZS5kZWxldGlvbl90aW1lKTtcbiAgICAgICAgd2Vic2l0ZS5ob3Vyc19taW51dGVzX2Zvcm1hdCA9IG1vbWVudChkZWxldGlvblRpbWUpLmZvcm1hdCgnSEg6bW0nKTtcbiAgICAgICAgd2Vic2l0ZS5kYXRlID0gbW9tZW50KGRlbGV0aW9uVGltZSkuc3RhcnRPZignZGF0ZScpO1xuICAgICAgICB3ZWJzaXRlLnRydW5jYXRlZF91cmwgPSB3ZWJzaXRlLnVybDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3ZWJzaXRlO1xuICAgIH0pO1xuXG4gICAgLy8ga2VlcGluZyBvbmx5IHdlYnNpdGVzIHRoYXQgbWF0Y2ggc2VhcmNoIGNyaXRlcmlhXG4gICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNlYXJjaFBhdHRlcm4gPSBuZXcgUmVnRXhwKFxuICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlXG4gICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAubWFwKCh0ZXJtKSA9PiBgKD89Lioke3Rlcm19KWApXG4gICAgICAgICAgLmpvaW4oJycpLFxuICAgICAgICAnaSdcbiAgICAgICk7XG4gICAgICBzZWxlY3RlZExpc3QgPSBzZWxlY3RlZExpc3QuZmlsdGVyKFxuICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24udGl0bGUubWF0Y2goc2VhcmNoUGF0dGVybikgfHwgb3B0aW9uLnVybC5tYXRjaChzZWFyY2hQYXR0ZXJuKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbExlbmd0aCA9IHNlbGVjdGVkTGlzdC5sZW5ndGg7XG4gICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0LnJldmVyc2UoKTtcbiAgICBsZXQgY3VycmVudCA9IG1vbWVudCgpLnN0YXJ0T2YoJ2RhdGUnKTtcbiAgICBsZXQgbGFzdCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBuZXh0ID0gc2VsZWN0ZWRMaXN0W2ldLmRhdGU7XG4gICAgICBsZXQgZGVsdGEgPSBNYXRoLm1heCgwLCBNYXRoLmNlaWwoY3VycmVudC5kaWZmKG5leHQsICdkYXlzJywgdHJ1ZSkpKTtcbiAgICAgIGlmIChkZWx0YSA+IGxhc3QpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGVsdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXh0KVxuICAgICAgICBpZiAoZGVsdGEgPT09IDEpIHtcbiAgICAgICAgICBzZWxlY3RlZExpc3Quc3BsaWNlKGksIDAsIHsndGV4dCc6ICdZZXN0ZXJkYXkgLSAnLCAnZGF5JzogbmV4dC5mb3JtYXQoJ01NTSBERCcpfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIGRlbHRhID09PSAyKSB7XG4gICAgICAgICAgc2VsZWN0ZWRMaXN0LnNwbGljZShpLCAwLCB7J3RleHQnOiAnUHJldmlvdXMgZGF5IC0gJywgJ2RheSc6IG5leHQuZm9ybWF0KCdNTU0gREQnKX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdGVkTGlzdC5zcGxpY2UoaSwgMCwgeyd0ZXh0JzogJycsICdkYXknOiBuZXh0LmZvcm1hdCgnTU1NIEREJyl9KTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0ID0gZGVsdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdEl0ZW0gPSAobXlGaWx0ZXJlZExpc3QpID0+ICh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gICAgICBjb25zdCB3ZWJzaXRlID0gbXlGaWx0ZXJlZExpc3RbaW5kZXhdO1xuICAgICAgaWYgKHR5cGVvZiB3ZWJzaXRlLmRheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICA8TGlzdEl0ZW0gQ29udGFpbmVyQ29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtgJHt3ZWJzaXRlLnRleHR9ICR7d2Vic2l0ZS5kYXl9YH1cbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICBwcmltYXJ5OiBjbGFzc2VzLnByaW1hcnlUaXRsZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0VGl0bGVUZXh0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICA8TGlzdEl0ZW0gQ29udGFpbmVyQ29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkQXZhdGFyV2l0aFRpbWV9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGltZURpc3BsYXl9PlxuICAgICAgICAgICAgICAgIHtgJHt3ZWJzaXRlLmhvdXJzX21pbnV0ZXNfZm9ybWF0fWB9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzcXVhcmVcIlxuICAgICAgICAgICAgICAgICAgYWx0PXt3ZWJzaXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc3JjPXt3ZWJzaXRlLmZhdkljb25Vcmx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgcHJpbWFyeT17d2Vic2l0ZS50cnVuY2F0ZWRfdXJsfVxuICAgICAgICAgICAgICBzZWNvbmRhcnk9e3dlYnNpdGUudGl0bGV9XG4gICAgICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgICBwcmltYXJ5OiBjbGFzc2VzLnByaW1hcnlUZXh0Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHNlY29uZGFyeTogY2xhc3Nlcy5zZWNvbmRhcnlUZXh0Q29udGFpbmVyLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25Db250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlbW92ZUl0ZW0uYmluZCh0aGlzLCBteUZpbHRlcmVkTGlzdCwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeydSZXN0b3JlJ31cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0V2Vic2l0ZXN9PlxuICAgICAgICA8U2VhcmNoQmFyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggb24gbGFzdCA3MmhcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlYXJjaE9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25SZXF1ZXN0U2VhcmNoPXt0aGlzLnNlYXJjaE9uUmVxdWVzdFNlYXJjaC5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uQ2FuY2VsU2VhcmNoPXt0aGlzLnNlYXJjaE9uQ2FuY2VsLmJpbmQodGhpcyl9XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEJhcn1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgICAge3NlbGVjdGVkTGlzdC5sZW5ndGggPT09IDAgPyBudWxsIDogKFxuICAgICAgICAgICAgPExpc3QgaGVpZ2h0PXtNYXRoLm1pbig4MCAqIHNlbGVjdGVkTGlzdC5sZW5ndGgsIDMwMCl9IGl0ZW1Db3VudD17c2VsZWN0ZWRMaXN0Lmxlbmd0aH0gaXRlbVNpemU9ezgwfT5cbiAgICAgICAgICAgICAge2xpc3RJdGVtKHNlbGVjdGVkTGlzdCl9XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5XG4gICAgICA/IHRoaXMuZmlsdGVyTGlzdCh0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5LCBUSU1FX1BFUklPRF8yNEgpLmxlbmd0aFxuICAgICAgOiAwO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8ZGl2IHZhcmlhbnQ9XCJoM1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmJvbGROdW1iZXJ9PlxuICAgICAgICAgICAge251bWJlckNsb3NlZFRhYnNMYXN0SG91ciA/IG51bWJlckNsb3NlZFRhYnNMYXN0SG91ciA6IDB9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRPblJpZ2h0fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50b3BUZXh0fT5cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgdGFiXG4gICAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPD0gMSA/ICcnIDogJ3MnfSBjbG9zZWRcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5taWRkbGVUZXh0fT4gaW4gdGhlIGxhc3Qge2Ake05VTUJFUl9IT1VSU19EQVl9IGhvdXJzYH0gPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucmVuZGVyTGlzdC5iaW5kKHRoaXMpKFJFTU9WRUQpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJDb250YWluZXJ9PlxuICAgICAgICAgIDxFcnJvck91dGxpbmVJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25Db250YWluZXJ9IC8+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNkVUVKSGQwYkw2cnlGdlprMjIwQ29acDdjd3ZGeEVTb3JwczdjbmdrMHdRZnl1LVEvdmlld2Zvcm1cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVG9Gb3JtfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJ1Zy9GZWVkYmFjaz9cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgdGl0bGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1heEhlaWdodDogNDAsXG4gIH0sXG4gIHRleHRPblJpZ2h0OiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ3N0YXJ0JyxcbiAgfSxcbiAgZ3JlZW5UaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYm9yZGVyQm90dG9tOiBgMnB4IHNvbGlkICMwMGI5YWFgLFxuICAgIG1heFdpZHRoOiAyMjUsXG4gIH0sXG4gIGxpc3RUaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBtYXhIZWlnaHQ6IDMwLFxuICB9LFxuXG4gIGJvbGROdW1iZXI6IHtcbiAgICBjb2xvcjogJyNlNTVjMDAnLFxuICAgIGZvbnRTaXplOiA0MCxcbiAgICBtYXhXaWR0aDogJzMwJScsXG4gIH0sXG4gIG1pZGRsZVRleHQ6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gIH0sXG4gIHRvcFRleHQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gIH0sXG4gIHN1YlRleHQ6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXhXaWR0aDogMjAsXG4gIH0sXG4gIGJ1dHRvbkNvbnRhaW5lcjogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknIH0sXG4gIGl0ZW1UZXh0OiB7XG4gICAgbWF4V2lkdGg6IDE4NSxcbiAgICBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdicmVhay1zcGFjZXMnLFxuXG4gICAgbWF4SGVpZ2h0OiA2MCxcbiAgfSxcbiAgdGltZURpc3BsYXk6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE0LFxuICB9LFxuICBncmlkQXZhdGFyV2l0aFRpbWU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIH0sXG4gIGxpc3RXZWJzaXRlczoge1xuICAgIG1hcmdpblRvcDogMjAsXG4gIH0sXG4gIGZvb3RlckNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS4yNSksXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgbGlua1RvRm9ybToge1xuICAgIGZvbnRTaXplOiAxMCxcbiAgfSxcbiAgaWNvbkNvbnRhaW5lcjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDAuMjUpLFxuICAgIGZvbnRTaXplOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICBhdmF0YXJDb250YWluZXI6IHtcbiAgICBtYXhXaWR0aDogdGhlbWUuc3BhY2luZyg3KSxcbiAgICBtYXhIZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNyksXG4gIH0sXG4gIHByaW1hcnlUZXh0Q29udGFpbmVyOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgbWF4SGVpZ2h0OiAyMixcbiAgfSxcbiAgc2Vjb25kYXJ5VGV4dENvbnRhaW5lcjoge1xuICAgIGZvbnRTaXplOiAxMyxcbiAgfSxcbiAgcHJpbWFyeVRpdGxlQ29udGFpbmVyOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNixcbiAgfSxcblxuICBsaXN0VGl0bGVUZXh0OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQuNSksXG4gIH0sXG4gIGxpc3RDb250YWluZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIHNlYXJjaEJhcjoge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtYXhIZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNSksXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShIb21lKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3MnO1xuaW1wb3J0IEFycm93QmFja0lvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja0lvcyc7XG5pbXBvcnQgeyBTbmFja2JhclByb3ZpZGVyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuLi9TZXR0aW5ncyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBIb21lIGZyb20gJy4uL0hvbWUnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMuanMnO1xuXG5jbGFzcyBIb21lRGlzcGF0Y2hlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBhcHBCYXJWYWx1ZTogJ0hPTUUnIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXBwQmFyVmFsdWU6ICdIT01FJyB9KTtcbiAgICBsb2dnZXIodGhpcywgJ1BvcHVwIG9wZW5lZCcpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKG5ld1ZhbHVlKSA9PiAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFwcEJhclZhbHVlOiBuZXdWYWx1ZSB9KTtcbiAgICBsb2dnZXIodGhpcywgJ1N3aXRjaCB0byAnICsgbmV3VmFsdWUpO1xuICB9O1xuXG4gIGRpc3BhdGNoUGFnZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUpIHtcbiAgICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgICByZXR1cm4gPEhvbWUgLz47XG4gICAgICBjYXNlICdTRVRUSU5HUyc6XG4gICAgICAgIHJldHVybiA8U2V0dGluZ3MgLz47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPGRpdj5UaGlzIGlzIGFuIGVycm9yIHBhZ2U8L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheUljb24oKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5hcHBCYXJWYWx1ZSkge1xuICAgICAgY2FzZSAnSE9NRSc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZSgnU0VUVElOR1MnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQ29udGFpbmVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTZXR0aW5nc0ljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdTRVRUSU5HUyc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZSgnSE9NRScpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25Db250YWluZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFycm93QmFja0lvc0ljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPGRpdj5UaGlzIGlzIGFuIGVycm9yIHBhZ2U8L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFNuYWNrYmFyUHJvdmlkZXJcbiAgICAgICAgbWF4U25hY2s9ezJ9XG4gICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICByb290OiBjbGFzc2VzLm5vdGlmaWNhdGlvbixcbiAgICAgICAgICB2YXJpYW50U3VjY2VzczogY2xhc3Nlcy5zdWNjZXNzLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ob21lQ29udGFpbmVyfT5cbiAgICAgICAgICA8UGFwZXIgc3F1YXJlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZExvZ29UYWJzfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdGFiYnkudXNcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9e2NsYXNzZXMuZW5zZW1ibGVsb2dvfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4uLy4uL2Fzc2V0cy9zdGF0aWMvaWNvbnMvdGFiYnlfMi5wbmcnfSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0Z1bGx9IC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAge3RoaXMuZGlzcGxheUljb24oKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj57dGhpcy5kaXNwYXRjaFBhZ2UoKX08L2Rpdj5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU25hY2tiYXJQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVEaXNwYXRjaGVyO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lRGlzcGF0Y2hlciBmcm9tICcuL0hvbWVEaXNwYXRjaGVyJztcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiL1RhYic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGhvbWVDb250YWluZXI6IHtcbiAgICBtaW5XaWR0aDogNDAwLFxuICB9LFxuICB0YWI6IHtcbiAgICBjb2xvcjogJyMwMGI5YWEnLFxuICB9LFxuICBub3RpZmljYXRpb246IHtcbiAgICBsZWZ0OiAxNTAsXG4gIH0sXG4gIGdyaWRMb2dvVGFiczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICB9LFxuICBhbGxUYWJzOiB7XG4gICAgbWF4V2lkdGg6ICc3NSUnLFxuICB9LFxuICBlbnNlbWJsZWxvZ286IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdsZWZ0JyxcbiAgfSxcbiAgbG9nb0F2YXRhcjoge1xuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLjI1KSxcbiAgfSxcbiAgbG9nb0Z1bGw6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIuMjUpLFxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDEyKSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS4yNSksXG4gIH0sXG4gIGljb25Db250YWluZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMS41KSxcbiAgfSxcbiAgc3VjY2Vzczoge1xuICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzgwZTBhNywgIzAwYjlhYSknLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZURpc3BhdGNoZXIpO1xuIiwiaW1wb3J0ICogYXMgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5L1R5cG9ncmFwaHknO1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IFR1bmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UdW5lJztcbmltcG9ydCBIZWxwT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hlbHBPdXRsaW5lJztcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5cbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcbmltcG9ydCBGYWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhZGUnO1xuXG5pbXBvcnQgeyB3aXRoU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xuaW1wb3J0IHsgUkVMQVhFRCwgRk9DVVNFRCwgQ1VTVE9NSVpFRCwgSU5JVF9GT0NVU0VEX1BST0ZJTEUgfSBmcm9tICcuLi8uLi9jb25maWcvc2V0dGluZ3NQcm9maWxlcy5qcyc7XG5pbXBvcnQgeyBjaGVja1NldHRpbmdzLCBPUFRJTUFMX05VTUJFUl9UQUJTLCBQT0xJQ1ksIElOQUNUSVZFX1BPTElDWSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGlzSW50ZWdlciwgcmVtb3ZlSXRlbSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzJztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuXG5jb25zdCBMaWdodFRvb2x0aXAgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgdG9vbHRpcDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJyxcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygwLjUpLFxuICB9LFxufSkpKFRvb2x0aXApO1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9jdXNlZE1vZGU6IGZhbHNlLFxuICAgICAgcmVsYXhlZE1vZGU6IGZhbHNlLFxuICAgICAgY3VzdG9taXplZEJvb2w6IGZhbHNlLFxuICAgICAgc2V0dGluZ3M6IElOSVRfRk9DVVNFRF9QUk9GSUxFLFxuICAgICAgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlLFxuICAgICAgZm9jdXNlZFdpbmRvd0lkOiB0cnVlLFxuICAgICAgb3Blbk1vZGFsOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMub25DaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgY29uc3QgY2hhbmdlc1NldHRpbmdzID0gY2hhbmdlc1snc2V0dGluZ3MnXTtcbiAgICAgIGNvbnN0IGNoYW5nZXNQcm9maWxlID0gY2hhbmdlc1snYWN0aXZlX3Byb2ZpbGUnXTtcbiAgICAgIGNvbnN0IGNoYW5nZWRJbmFjdGl2ZVBvbGljeSA9IGNoYW5nZXNbJ2luYWN0aXZlX3BvbGljeSddO1xuICAgICAgaWYgKGNoYW5nZXNTZXR0aW5ncykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZXR0aW5nczogY2hhbmdlc1NldHRpbmdzWyduZXdWYWx1ZSddLFxuICAgICAgICAgIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VzUHJvZmlsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmb2N1c2VkTW9kZTogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IEZPQ1VTRUQsXG4gICAgICAgICAgcmVsYXhlZE1vZGU6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBSRUxBWEVELFxuICAgICAgICAgIGN1c3RvbWl6ZWRCb29sOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gQ1VTVE9NSVpFRCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlZEluYWN0aXZlUG9saWN5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbmFjdGl2ZVBvbGljeTogY2hhbmdlZEluYWN0aXZlUG9saWN5WyduZXdWYWx1ZSddIH0pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoXG4gICAgICBbJ2FjdGl2ZV9wcm9maWxlJywgJ3NldHRpbmdzJywgJ2ZvY3VzZWRfd2luZG93X2lkJywgJ2luYWN0aXZlX3BvbGljeSddXG4gICAgKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHByb2ZpbGUgPSByZXN1bHQuYWN0aXZlX3Byb2ZpbGUgfHwgRk9DVVNFRDtcbiAgICAgIGNvbnN0IGZvY3VzZWRNb2RlID0gcHJvZmlsZSA9PT0gRk9DVVNFRDtcbiAgICAgIGNvbnN0IHJlbGF4ZWRNb2RlID0gcHJvZmlsZSA9PT0gUkVMQVhFRDtcbiAgICAgIGNvbnN0IGN1c3RvbWl6ZWRCb29sID0gcHJvZmlsZSA9PT0gQ1VTVE9NSVpFRDtcbiAgICAgIGNvbnN0IHNldHRpbmdzID0gcmVzdWx0LnNldHRpbmdzIHx8IElOSVRfRk9DVVNFRF9QUk9GSUxFO1xuICAgICAgY29uc3QgZm9jdXNlZFdpbmRvd0lkID0gcmVzdWx0LmZvY3VzZWRfd2luZG93X2lkO1xuICAgICAgY29uc3QgaW5hY3RpdmVQb2xpY3kgPSByZXN1bHQuaW5hY3RpdmVfcG9saWN5O1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRNb2RlLFxuICAgICAgICByZWxheGVkTW9kZSxcbiAgICAgICAgY3VzdG9taXplZEJvb2wsXG4gICAgICAgIHNldHRpbmdzLFxuICAgICAgICBmb2N1c2VkV2luZG93SWQsXG4gICAgICAgIGluYWN0aXZlUG9saWN5LFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5yZW5kZXJTYXZlQm9vbGVhbikge1xuICAgICAgdGhpcy5mb3JjZVJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUJvb2xDaGFuZ2UoY2hhbmdlVHlwZSkge1xuICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBtZXNzYWdlVHlwZTogJ1NFVFRJTkdTX1BST0ZJTEUnLFxuICAgICAgcHJvZmlsZTogY2hhbmdlVHlwZSxcbiAgICB9KTtcbiAgICBpZiAoY2hhbmdlVHlwZSA9PT0gUkVMQVhFRCB8fCBjaGFuZ2VUeXBlID09PSBGT0NVU0VEKSB7XG4gICAgICB0aGlzLm5vdGlmeVVzZXIodHJ1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5LmluY2x1ZGVzKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKSkge1xuICAgICAgdGhpcy5oYW5kbGVTd2l0Y2goKTtcbiAgICB9XG4gIH1cblxuICBmb3JjZVJlbmRlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlIH0pO1xuICB9XG5cbiAgaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKSB7XG4gICAgLy8gVE9ETyBBZGQgZnVuY3Rpb24gdG8gY2hlY2sgZm9yIGFsbCBwb3RlbnRpYWwgdmFsdWVzXG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICBpZiAoY2hlY2tTZXR0aW5ncyh0aGlzLnN0YXRlLnNldHRpbmdzKSkge1xuICAgICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QQVJBTUVURVJTJyxcbiAgICAgICAgc2V0dGluZ3M6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgICB9KTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLm5vdGlmeVVzZXIoc3VjY2Vzcyk7XG4gIH1cblxuICBub3RpZnlVc2VyKHN1Y2Nlc3MpIHtcbiAgICB0aGlzLnByb3BzLmVucXVldWVTbmFja2JhcihzdWNjZXNzID8gJ05ldyBTZXR0aW5ncyBhcmUgc2F2ZWQuJyA6ICdTZXR0aW5ncyBjYW5ub3QgYmUgc2F2ZWQuJywge1xuICAgICAgdmFyaWFudDogc3VjY2VzcyA/ICdzdWNjZXNzJyA6ICdlcnJvcicsXG4gICAgICBhbmNob3JPcmlnaW46IHtcbiAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogNzUwLFxuICAgICAgYXV0b0hpZGVEdXJhdGlvbjogMTUwMCxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZVBhcmFtZXRlcnMgPSAocGF0aCwgcGFyYW1ldGVyKSA9PiAoZXZlbnQpID0+IHtcbiAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLnN0YXRlLnNldHRpbmdzO1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAoaXNJbnRlZ2VyKG5leHRWYWx1ZSkgfHwgbmV4dFZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0dGluZ3NbcGF0aF1bcGFyYW1ldGVyXSA9IG5leHRWYWx1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXR0aW5nczogc2V0dGluZ3MsIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlU3dpdGNoID0gKCkgPT4ge1xuICAgIGxldCBpbmFjdGl2ZVBvbGljeSA9IHRoaXMuc3RhdGUuaW5hY3RpdmVQb2xpY3k7XG5cbiAgICBpZiAoaW5hY3RpdmVQb2xpY3kuaW5jbHVkZXModGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpKSB7XG4gICAgICBpbmFjdGl2ZVBvbGljeSA9IHJlbW92ZUl0ZW0oaW5hY3RpdmVQb2xpY3ksIHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKTtcbiAgICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIG1lc3NhZ2VUeXBlOiAnUkVNT1ZFX0lOQUNUSVZFX1BPTElDWScsXG4gICAgICAgIHdpbmRvd0lkOiB0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmFjdGl2ZVBvbGljeS5wdXNoKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKTtcbiAgICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIG1lc3NhZ2VUeXBlOiAnQUREX0lOQUNUSVZFX1BPTElDWScsXG4gICAgICAgIHdpbmRvd0lkOiB0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5hY3RpdmVQb2xpY3k6IGluYWN0aXZlUG9saWN5LCByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVPcGVuID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuTW9kYWw6IHRydWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5Nb2RhbDogZmFsc2UgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dHNQYXJhbWV0ZXJzID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ09wdGltYWwgdGFicyBudW1iZXInLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgICAgIHBhdGg6IFBPTElDWSxcbiAgICAgICAgcGFyYW1ldGVyOiBPUFRJTUFMX05VTUJFUl9UQUJTLFxuICAgICAgICBpbnB1dFByb3BzOiB7IG1pbjogJzEnLCBtYXg6ICcxMDAnLCBzdGVwOiAnMScgfSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBsaXN0SXRlbXNQYXJhbWV0ZXJzID0gaW5wdXRzUGFyYW1ldGVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVBhcmFtZXRlcnMoaXRlbS5wYXRoLCBpdGVtLnBhcmFtZXRlcil9XG4gICAgICAgIHZhbHVlPXtpdGVtLnNvdXJjZVtpdGVtLnBhdGhdW2l0ZW0ucGFyYW1ldGVyXX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIG9uS2V5VXA9eyhldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykgdGhpcy5oYW5kbGVTYXZlUGFyYW1ldGVycygpO1xuICAgICAgICB9fVxuICAgICAgICBpbnB1dFByb3BzPXtpdGVtLmlucHV0UHJvcHN9XG4gICAgICAvPlxuICAgICkpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluQmxvY2t9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQgJiYgdGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeVxuICAgICAgICAgICAgICAgICAgICA/ICF0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5LmluY2x1ZGVzKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKVxuICAgICAgICAgICAgICAgICAgICA6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3dpdGNofVxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3dpdGNoV3JhcHBlcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zd2l0Y2hDb250YWluZXJ9XG4gICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkVuYWJsZSBvbiB0aGlzIHdpbmRvdzwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnRyb2R1Y3Rpb25CbG9ja30+XG4gICAgICAgICAgICA8VHVuZUljb24gLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhbWV0ZXJzVGl0bGV9PlNlbGVjdCB5b3VyIHByb2ZpbGU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXR0aW5nc1dyYXBwZXJ9PlxuICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT17J3RhYmJ5IHRlbmRzIHRvIGtlZXAgNSB0YWJzJ30gcGxhY2VtZW50PVwibGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdFByb2ZpbGVzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZm9jdXNlZE1vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlQm9vbENoYW5nZShGT0NVU0VEKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrYm94V3JhcHBlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+Rm9jdXM8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0Qm9vbGVhbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SGVscE91dGxpbmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWxwSWNvbn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cbiAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9eyd0YWJieSB0ZW5kcyB0byBrZWVwIDEyIHRhYnMnfSBwbGFjZW1lbnQ9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0UHJvZmlsZXNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5yZWxheGVkTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVCb29sQ2hhbmdlKFJFTEFYRUQpfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tib3hXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5SZWxheDwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCb29sZWFuc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxIZWxwT3V0bGluZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmhlbHBJY29ufSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21pemVXcmFwcGVyfT5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVCb29sQ2hhbmdlKENVU1RPTUlaRUQpfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveFdyYXBwZXJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkN1c3RvbWl6ZTwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0Qm9vbGVhbnN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNldHRpbmdzQmxvY2t9PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcmVxdWlyZWQgZnVsbFdpZHRoPlxuICAgICAgICAgICAgICAgIHtsaXN0SXRlbXNQYXJhbWV0ZXJzfVxuICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpZGRlbiBrZXk9XCJoaWRkZW4tdGV4dGZpZWxkXCIgZGlzYWJsZWQgLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZGFyeUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVNhdmVQYXJhbWV0ZXJzKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT3Blbn0gY2xhc3NOYW1lPXtjbGFzc2VzLnRpcHNCdXR0b259PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsVGlwc30+SGVscDwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgLy9kaXNhYmxlUG9ydGFsPXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW5Nb2RhbH1cbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXG4gICAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxuICAgICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcbiAgICAgICAgICAgIHRpbWVvdXQ6IDc1MCxcbiAgICAgICAgICAgIGludmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEZhZGUgaW49e3RoaXMuc3RhdGUub3Blbk1vZGFsfT5cbiAgICAgICAgICAgIDxCb3ggYm9yZGVyUmFkaXVzPXs2fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJsb2NrTW9kYWx9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZEVuc2VtYmxlfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5Qcm90ZWN0IGEgdGFiPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGFzdEVuc2VtYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycuLi8uLi9hc3NldHMvc3RhdGljL2ljb25zL3JpZ2h0X2NsaWNrLnBuZyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0Q2xpY2tXcmFwcGVyfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT4rPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+UGluPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kRW5zZW1ibGV9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlJlb3BlbiBtdWx0aXBsZSB0YWJzPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRFbnNlbWJsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5DdHJsPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT4rPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4uLy4uL2Fzc2V0cy9zdGF0aWMvaWNvbnMvbGVmdF9jbGljay5wbmcnfSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdENsaWNrV3JhcHBlcn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkhvdyBkb2VzIHRhYmJ5IHdvcms/PC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsTmV4dH0+XG4gICAgICAgICAgICAgICAgdGFiYnkgd2lsbCBub3QgcmVtb3ZlIHRhYnMgcmlnaHQgYWZ0ZXIgdGhlaXIgY3JlYXRpb24ueycgJ31cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsTmV4dH0+XG4gICAgICAgICAgICAgICAgdGFiYnkgdGFrZXMgd2VsbC10aG91Z2h0LW91dCBkZWNpc2lvbnMgYXV0b21hdGljYWxseS5cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlck1vZGFsfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90YWJieS51cy9mYXFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsVGlwc30+RkFRIGF2YWlsYWJsZSBoZXJlPC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsVGlwc30+dGFiYnkge2Jyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb259PC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU25hY2tiYXIoU2V0dGluZ3MpO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL1NldHRpbmdzJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBzZXR0aW5nc1dyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICBtYXJnaW5Ub3A6IDUsXG4gICAgbWFyZ2luTGVmdDogNDcsXG4gICAgbWFyZ2luUmlnaHQ6IDIwLFxuICB9LFxuICBzZWNvbmRhcnlCdXR0b246IHtcbiAgICBtYXJnaW5Ub3A6IDE4LFxuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBmb250U2l6ZTogMTIsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG5cbiAgICBtYXhXaWR0aDogMjAsXG4gIH0sXG5cbiAgbm90aWZpY2F0aW9uOiB7XG4gICAgbWF4V2lkdGg6IDE1MCxcbiAgfSxcbiAgaW50cm9kdWN0aW9uQmxvY2s6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgbWFyZ2luTGVmdDogNyxcbiAgfSxcbiAgcGFyYW1ldGVyc1RpdGxlOiB7XG4gICAgLy9mb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE3LFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICAgIG1hcmdpbkxlZnQ6IDE2LFxuICB9LFxuICBzZXR0aW5nc0Jsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWFyZ2luTGVmdDogMzIsXG4gICAgbWFyZ2luVG9wOiA0LFxuICB9LFxuICBmaXJzdEJvb2xlYW5zOiB7XG4gICAgbWF4V2lkdGg6ICczNiUnLFxuICAgIG1pbldpZHRoOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIG1heEhlaWdodDogMjAsXG4gICAgbWFyZ2luVG9wOiA1LFxuICAgIC8vIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgfSxcbiAgZmlyc3RQcm9maWxlc0NvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3N0YXJ0JyxcbiAgICBtYXhXaWR0aDogdGhlbWUuc3BhY2luZygxMCksXG4gIH0sXG5cbiAgc3R5bGVMYWJlbDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgfSxcbiAgY2hlY2tib3hXcmFwcGVyOiB7XG4gICAgcG9pbnRlckV2ZW50czogJ2F1dG8nLFxuICB9LFxuICBzd2l0Y2hDb250YWluZXI6IHtcbiAgICBtYXhIZWlnaHQ6IDIwLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICB9LFxuICBzd2l0Y2hXcmFwcGVyOiB7XG4gICAgcG9pbnRlckV2ZW50czogJ2F1dG8nLFxuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICBtYXhXaWR0aDogJzg1JScsXG4gIH0sXG4gIGN1c3RvbWl6ZVdyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgYWxpZ25JdGVtczogJ3N0YXJ0JyxcbiAgfSxcbiAgaGVscEljb246IHtcbiAgICBjb2xvcjogJyNlNTVjMDAnLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMC4yNSksXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcbiAgfSxcbiAgbW9kYWw6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxNTAsIDE1MCwgMTUwLCAwLjQpJyxcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxuICB9LFxuICBtYWluQmxvY2s6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgLy9ib3JkZXI6ICcwLjVweCBzb2xpZCAjNUE1QTVBJyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXG5cbiAgICBvcGFjaXR5OiAnMSAhaW1wb3J0YW50JyxcbiAgfSxcbiAgYm94Q3RybDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNUE1QTVBJyxcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMi41KSxcbiAgICAvL3BhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXG4gICAgLy9tYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIC8vbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXG5cbiAgICBvcGFjaXR5OiAnMSAhaW1wb3J0YW50JyxcbiAgfSxcbiAgbGVmdENsaWNrV3JhcHBlcjoge1xuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygzKSxcbiAgfSxcbiAgc2Vjb25kRW5zZW1ibGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtaW5XaWR0aDogJzMwJScsXG4gIH0sXG4gIGxhc3RFbnNlbWJsZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1pbldpZHRoOiAnMjcuNSUnLFxuICB9LFxuICBmaXJzdEJsb2NrTW9kYWw6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIHRpcHNCdXR0b246IHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDApLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygyKSxcbiAgICBwYWRkaW5nTGVmdDogMCxcbiAgICBwYWRkaW5nUmlnaHQ6IDAsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtYXJnaW5SaWdodDogMCxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIHN0eWxlTGFiZWxUaXBzOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICAgIGNvbG9yOiAncmdiYSgxNTAsIDE1MCwgMTUwLCAxKScsXG4gIH0sXG4gIHN0eWxlTGFiZWxOZXh0OiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gIH0sXG4gIGZvb3Rlck1vZGFsOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuNSksXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgLy8gbWluV2lkdGg6ICcxMDAlJyxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFNldHRpbmdzKTtcbiIsImV4cG9ydCBjb25zdCBPUFRJTUFMX05VTUJFUl9UQUJTID0gJ3RhcmdldF90YWJzJztcbmV4cG9ydCBjb25zdCBQT0xJQ1kgPSAncG9saWN5JztcbmV4cG9ydCBjb25zdCBJTkFDVElWRV9QT0xJQ1kgPSAnaW5hY3RpdmVfcG9saWN5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgaWYgKHNldHRpbmdzW1BPTElDWV1bT1BUSU1BTF9OVU1CRVJfVEFCU10gJiYgc2V0dGluZ3NbUE9MSUNZXVtPUFRJTUFMX05VTUJFUl9UQUJTXSA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oYXJyLCB2YWx1ZSkge1xuICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKHZhbHVlKTtcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuIiwiY29uc3QgU0NPUkVSID0gJ3YxJzsgLy8gb25seSBkZWZhdWx0IGltcGxlbWVudGVkXG5jb25zdCBNQVhJTVVNX1NDT1JFID0gMTA7IC8vIG1heCBzY29yZSBmb3Igc2NvcmVyXG5jb25zdCBNQVhJTVVNX0hJU1RPUllfU0laRSA9IDEwMDA7IC8vIG1heCBraWxsZWQgdGFiIGhpc3RvcnkgaW4gbWVtb3J5XG5jb25zdCBTRVNTSU9OU19USU1FT1VUX01TID0gMjAwOyAvLyB3aGVuIGEgdGFiIGlzIGtpbGxlZCB3ZSBuZWVkIGEgdGltZW91dCB0byByZXRyaWV2ZSB0aGUgc2Vzc2lvbklkXG5jb25zdCBTRVNTSU9OU19SRVRSSUVTID0gNTsgLy8gaG93IG1hbnkgdHJpZXMgdG8gcmV0cmlldmUgdGhlIHNlc3Npb24gSUQgb2YgYSBraWxsZWQgdGFiXG5jb25zdCBTRVNTSU9OU19NQVhfRlVaWllfREVMVEFfTVMgPSAxMDAwICogNTsgLy8gdGltZSBpcyBmdXp6eSBtYXRjaGVkIHRvIHJldGlyZXZlIHRoZSBjb3JyZWN0IHNlc3Npb25JRCwgc2hvdWxkIGJlIGhpZ2hlciB0aGFuIFNFU1NJT05TX1RJTUVPVVRfTVNcbmNvbnN0IE1JTl9BQ1RJVkVfREVCT1VOQ0UgPSAxMDAwICogMjsgLy8gbWluaW11bSBhY3RpdmUgcmVhZGluZyBvbiBhIHRhYiB0byBiZSBjb3VudGVkIGFzIHZhbGlkICd1c2VmdWwnIHRpbWVcbmNvbnN0IE1BWF9BQ1RJVkVfREVCT1VOQ0UgPSAxMDAwICogNjAgKiA1OyAvLyBtYXhpbXVtIHRpbWUgd2l0aG91dCBhbnkgdXNlciBpbnB1dCBiZWZvcmUgaXQgaXMgY29uc2lkZXJlZCBpZGxlZCwgbXVzdCBiZSBoaWdoZXIgdGhhbiAxNXNlY1xuXG5leHBvcnQge1xuICBTQ09SRVIsXG4gIE1BWElNVU1fU0NPUkUsXG4gIE1BWElNVU1fSElTVE9SWV9TSVpFLFxuICBTRVNTSU9OU19USU1FT1VUX01TLFxuICBTRVNTSU9OU19SRVRSSUVTLFxuICBTRVNTSU9OU19NQVhfRlVaWllfREVMVEFfTVMsXG4gIE1JTl9BQ1RJVkVfREVCT1VOQ0UsXG4gIE1BWF9BQ1RJVkVfREVCT1VOQ0UsXG59O1xuIiwiY29uc3QgUkVMQVhFRCA9ICdyZWxheGVkJztcbmNvbnN0IEZPQ1VTRUQgPSAnZm9jdXNlZCc7XG5jb25zdCBDVVNUT01JWkVEID0gJ2N1c3RvbWl6ZWQnO1xudmFyIElOSVRfUkVMQVhFRF9QUk9GSUxFID0ge307XG52YXIgSU5JVF9GT0NVU0VEX1BST0ZJTEUgPSB7fTtcblxuaWYgKEVOViA9PT0gJ2RlYnVnJykge1xuICBJTklUX1JFTEFYRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMSAqIDEwMDAsIC8vIG1pbmltdW0gdGltZSBiZXR3ZWVuIDIgZnVsbCBzdGF0cyB1cGRhdGUgZm9yIGFsbCB0YWJzXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogNSAqIDEwMDAsIC8vIG1pbmltdW0gdGltZSBiZXR3ZWVuIDIgZnVsbCB0YWIgZ2FyYmFnZSBjb2xsZWN0aW9uXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIHRhcmdldF90YWJzOiAxMiwgLy8gdGFiYnkgd2lsbCBzdG9wIGNsb3NpbmcgdGFicyB3aGVuIHdlIGhhdmUgbGVzcyB0aGFuIHRhcmdldF90YWJzIG9wZW5cbiAgICAgIGRlY2F5OiAwLjgsIC8vIHdoZW4gdGhlIG51bWJlciBvZiB0YWIgaW5jcmVhc2VzLCB0YWJieSB3aWxsIGRlbGV0ZSBtb3JlIHRhYnNcbiAgICAgIG1pbl90aW1lOiAzICogMTAwMCwgLy8gVGFiYnkgd2lsbCBraWxsIGFib3V0IDEgdGFiIHBlciBtaW5fdGltZSAoZGVwZW5kaW5nIG9uIGFjdGl2YXRpb24gcnVsZXMpXG5cbiAgICAgIC8vIElHTk9SRUQgdGFic1xuICAgICAgYWN0aXZlOiBmYWxzZSwgLy8gdGhlc2Ugc3RhdHVzIGFyZSBhYnNvbHV0ZWx5IHByb3RlY3RlZCB0YWJzOiB0aGVzZSBhcmUgaWdub3JlZCBhbmQgZG8gbm90IGNvdW50IGFzIHRhYnMuXG4gICAgICBwaW5uZWQ6IHRydWUsXG4gICAgICBhdWRpYmxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHNjb3Jlcjoge1xuICAgICAgLy8gUFJPVEVDVEVEIHRhYnNcbiAgICAgIGFjdGl2ZTogdHJ1ZSwgLy8gdGhlc2UgdGFicyB3aWxsIGJlIGdpdmVuIGFic29sdXRlIG1heGltdW0gc2NvcmUgKyBleHRlbmRlZCBwcm90ZWN0aW9uXG4gICAgICBwaW5uZWQ6IHRydWUsIC8vIHdoZW4gdGhlIHN0YXR1cyBpcyBsb3N0LlxuICAgICAgYXVkaWJsZTogdHJ1ZSxcblxuICAgICAgbWluX2FjdGl2ZTogNSAqIDEwMDAsIC8vIG1pbmltdW0gdGltZSBhIHRhYiBoYXMgdG8gZXhpc3QgYmVmb3JlIGJlaW5nIHNjb3JlZFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDEwMDAsIC8vIEEgcmVzdG9yZWQgdGFiIGlzIHByb3RlY3RlZCBmb3IgdGhpcyBsb25nXG4gICAgICBjYWNoZWRfZGVjYXk6IDAuMiwgLy8gSW4gY3VycmVudCBzY29yZXIsIHRoZSBjYWNoZSBzY29yZSBpcyBhZGRlZCB0byB0aGUgY3VycmVudCBzY29yZSB3aXRoIGEgZGVjcmVhc2luZyBmYWN0b3JcbiAgICB9LFxuICB9O1xuXG4gIElOSVRfRk9DVVNFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxICogMTAwMCxcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiA1ICogMTAwMCxcbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgdGFyZ2V0X3RhYnM6IDUsXG4gICAgICBkZWNheTogMC44LFxuICAgICAgbWluX3RpbWU6IDMgKiAxMDAwLFxuXG4gICAgICAvLyBJR05PUkVEIHRhYnNcbiAgICAgIGFjdGl2ZTogZmFsc2UsIC8vIHRoZXNlIHN0YXR1cyBhcmUgYWJzb2x1dGVseSBwcm90ZWN0ZWQgdGFiczogdGhlc2UgYXJlIGlnbm9yZWQgYW5kIGRvIG5vdCBjb3VudCBhcyB0YWJzLlxuICAgICAgcGlubmVkOiB0cnVlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIC8vIFBST1RFQ1RFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHRhYnMgd2lsbCBiZSBnaXZlbiBhYnNvbHV0ZSBtYXhpbXVtIHNjb3JlICsgZXh0ZW5kZWQgcHJvdGVjdGlvblxuICAgICAgcGlubmVkOiB0cnVlLCAvLyB3aGVuIHRoZSBzdGF0dXMgaXMgbG9zdC5cbiAgICAgIGF1ZGlibGU6IHRydWUsXG5cbiAgICAgIG1pbl9hY3RpdmU6IDUgKiAxMDAwLFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDEwMDAsXG4gICAgICBjYWNoZWRfZGVjYXk6IDAuMixcbiAgICB9LFxuICB9O1xufSBlbHNlIHtcbiAgSU5JVF9SRUxBWEVEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEwICogMTAwMCxcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiAxMCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgdGFyZ2V0X3RhYnM6IDEyLFxuICAgICAgZGVjYXk6IDAuOSxcbiAgICAgIG1pbl90aW1lOiA0NSAqIDEwMDAsXG5cbiAgICAgIC8vIElHTk9SRUQgdGFic1xuICAgICAgYWN0aXZlOiBmYWxzZSwgLy8gdGhlc2Ugc3RhdHVzIGFyZSBhYnNvbHV0ZWx5IHByb3RlY3RlZCB0YWJzOiB0aGVzZSBhcmUgaWdub3JlZCBhbmQgZG8gbm90IGNvdW50IGFzIHRhYnMuXG4gICAgICBwaW5uZWQ6IHRydWUsXG4gICAgICBhdWRpYmxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHNjb3Jlcjoge1xuICAgICAgLy8gUFJPVEVDVEVEIHRhYnNcbiAgICAgIGFjdGl2ZTogdHJ1ZSwgLy8gdGhlc2UgdGFicyB3aWxsIGJlIGdpdmVuIGFic29sdXRlIG1heGltdW0gc2NvcmUgKyBleHRlbmRlZCBwcm90ZWN0aW9uXG4gICAgICBwaW5uZWQ6IHRydWUsIC8vIHdoZW4gdGhlIHN0YXR1cyBpcyBsb3N0LlxuICAgICAgYXVkaWJsZTogdHJ1ZSxcblxuICAgICAgbWluX2FjdGl2ZTogNSAqIDYwICogMTAwMCxcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiA2MCAqIDEwMDAsXG4gICAgICBjYWNoZWRfZGVjYXk6IDAuMixcbiAgICB9LFxuICB9O1xuXG4gIElOSVRfRk9DVVNFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxMCAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogMTAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIHRhcmdldF90YWJzOiA1LFxuICAgICAgZGVjYXk6IDAuOSxcbiAgICAgIG1pbl90aW1lOiA0NSAqIDEwMDAsXG5cbiAgICAgIC8vIElHTk9SRUQgdGFic1xuICAgICAgYWN0aXZlOiBmYWxzZSwgLy8gdGhlc2Ugc3RhdHVzIGFyZSBhYnNvbHV0ZWx5IHByb3RlY3RlZCB0YWJzOiB0aGVzZSBhcmUgaWdub3JlZCBhbmQgZG8gbm90IGNvdW50IGFzIHRhYnMuXG4gICAgICBwaW5uZWQ6IHRydWUsXG4gICAgICBhdWRpYmxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHNjb3Jlcjoge1xuICAgICAgLy8gUFJPVEVDVEVEIHRhYnNcbiAgICAgIGFjdGl2ZTogdHJ1ZSwgLy8gdGhlc2UgdGFicyB3aWxsIGJlIGdpdmVuIGFic29sdXRlIG1heGltdW0gc2NvcmUgKyBleHRlbmRlZCBwcm90ZWN0aW9uXG4gICAgICBwaW5uZWQ6IHRydWUsIC8vIHdoZW4gdGhlIHN0YXR1cyBpcyBsb3N0LlxuICAgICAgYXVkaWJsZTogdHJ1ZSxcblxuICAgICAgbWluX2FjdGl2ZTogNSAqIDYwICogMTAwMCxcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiA2MCAqIDEwMDAsXG4gICAgICBjYWNoZWRfZGVjYXk6IDAuMixcbiAgICB9LFxuICB9O1xufVxuXG5PYmplY3QuZnJlZXplKElOSVRfRk9DVVNFRF9QUk9GSUxFKTtcbk9iamVjdC5mcmVlemUoSU5JVF9SRUxBWEVEX1BST0ZJTEUpO1xuXG5leHBvcnQgeyBSRUxBWEVELCBGT0NVU0VELCBDVVNUT01JWkVELCBJTklUX0ZPQ1VTRURfUFJPRklMRSwgSU5JVF9SRUxBWEVEX1BST0ZJTEUgfTtcbiIsImltcG9ydCAqIGFzIHBzbCBmcm9tICdwc2wnO1xuaW1wb3J0ICogYXMgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IHsgTUFYX0FDVElWRV9ERUJPVU5DRSB9IGZyb20gJy4uL2NvbmZpZy9lbnYuanMnO1xuXG5jb25zdCBsb2dnZXIgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICBpZiAoRU5WID09PSAnZGVidWcnIHx8IEVOViA9PT0gJ2RldicpIHtcbiAgICBsZXQgZGVmYXVsdF9mb3JtYXQgPSBbJ2ZvbnQtd2VpZ2h0OmluaXRpYWw7IGNvbG9yOmJsYWNrOyddO1xuICAgIGxldCBwcmUgPSAnJWMnICsgbmV3IERhdGUoKS50b1VUQ1N0cmluZygpICsgJyVjJztcbiAgICBsZXQgb3B0aW9ucyA9IFsnZm9udC13ZWlnaHQ6bGlnaHRlcjsgY29sb3I6TGlnaHRTbGF0ZUdyZXk7J107XG4gICAgb3B0aW9ucy5wdXNoKGRlZmF1bHRfZm9ybWF0KTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICBwcmUgKz0gJyB8ICVjJyArIGFyZ3NbMF0uY29uc3RydWN0b3IubmFtZSArICclYyB8ICc7XG4gICAgICBwcmUgKz0gYXJnc1sxXTtcbiAgICAgIG9wdGlvbnMucHVzaCgnY29sb3I6IzFkYTg3YzsgZm9udC13ZWlnaHQ6Ym9sZGVyJyk7XG4gICAgICBvcHRpb25zLnB1c2goZGVmYXVsdF9mb3JtYXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmUgKz0gJyB8ICcgKyBhcmdzWzBdO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcmUsIC4uLm9wdGlvbnMpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjb3B5KG9iaikge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuZnVuY3Rpb24gdGltZW91dChtcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RG9tYWluKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBwc2wucGFyc2UobmV3IFVSTChzdHIpLmhvc3RuYW1lKS5kb21haW47XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XG4gIHJldHVybiAvXlxcZCskLy50ZXN0KHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gc2V0QWxsUmVhZEJhZGdlKCkge1xuICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogJycgfSk7IC8vIDwtLSBzZXQgdGV4dCB0byAnJyB0byByZW1vdmUgdGhlIGJhZGdlXG59XG5cbmZ1bmN0aW9uIHNldFVucmVhZEJhZGdlKCkge1xuICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3IoeyBjb2xvcjogWzIyOSwgOTIsIDAsIDEyOF0gfSk7XG4gIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5nZXRCYWRnZVRleHQoe30pLnRoZW4oZnVuY3Rpb24gKGJhZGdlVGV4dCkge1xuICAgIGxldCBjb3VudGVyID0gMTtcbiAgICBpZiAoaXNJbnRlZ2VyKGJhZGdlVGV4dCkpIHtcbiAgICAgIGNvdW50ZXIgPSBwYXJzZUludChiYWRnZVRleHQpICsgMTtcbiAgICB9XG4gICAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6IGAke2NvdW50ZXJ9YCB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzVXNlckFjdGl2ZSgpIHtcbiAgLy8gTm90IGNvbXBhdGlibGUgd2l0aCBTYWZhcmlcbiAgcmV0dXJuIGJyb3dzZXIuaWRsZS5xdWVyeVN0YXRlKE1hdGgucm91bmQoTUFYX0FDVElWRV9ERUJPVU5DRSAvIDEwMDApKS50aGVuKChzdGF0dXMpID0+IHtcbiAgICBpZiAoc3RhdHVzID09PSAnYWN0aXZlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nZ2VyKFwiQ291bGRuJ3QgY2hlY2sgdXNlciBhY3Rpdml0eS5cIik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdG9yYWdlUmVzZXQoKSB7XG4gIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwpLnRoZW4oKGQpID0+IHtcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnJlbW92ZShPYmplY3Qua2V5cyhkKSk7XG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgbG9nZ2VyKCdNZW1vcnkgZmx1c2hlZC4nKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldExhc3RGb2N1c2VkV2luZG93KCkge1xuICAvLyB3aW5kb3dUeXBlIGlzIGRlcHJlY2F0ZWQgaW4gRkYsIGl0IGRvZXNuJ3Qgc2VlbSBjcml0aWNhbCBhbnl3YXlzXG4gIHJldHVybiBicm93c2VyLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoeyBwb3B1bGF0ZTogZmFsc2UgfSkudGhlbigoZCkgPT4ge3JldHVybiBkLmlkfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0oYXJyLCB2YWx1ZSkge1xuICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKHZhbHVlKTtcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5jb25zdCByZXRyeVByb21pc2UgPSAoZnVuYywgZGVsYXksIHRpbWVzKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIHJldHVybiBmdW5jKClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICBpZiAocmVhc29uID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KHJlYXNvbik7XG4gICAgICB9XG4gICAgICBpZiAodGltZXMgPiAwKSB7XG4gICAgICAgIHJldHVybiB0aW1lb3V0KGRlbGF5KVxuICAgICAgICAgIC50aGVuKHJldHJ5UHJvbWlzZS5iaW5kKG51bGwsIGZ1bmMsIGRlbGF5LCB0aW1lcyAtIDEpKVxuICAgICAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVqZWN0KHJlYXNvbik7XG4gICAgfSk7XG59KTtcblxubG9nZ2VyKCdTdGFydGluZyBpbiAnICsgRU5WICsgJyBlbnYuJyk7XG5leHBvcnQge1xuICBsb2dnZXIsXG4gIGNvcHksXG4gIHRpbWVvdXQsXG4gIHJldHJ5UHJvbWlzZSxcbiAgZ2V0RG9tYWluLFxuICBzZXRBbGxSZWFkQmFkZ2UsXG4gIHNldFVucmVhZEJhZGdlLFxuICBpc0ludGVnZXIsXG4gIGlzVXNlckFjdGl2ZSxcbiAgc3RvcmFnZVJlc2V0LFxuICBnZXRMYXN0Rm9jdXNlZFdpbmRvdyxcbiAgcmVtb3ZlSXRlbSxcbn07XG5pZiAoRU5WID09PSAnZGVidWcnKSB7XG4gIHdpbmRvdy51dGlscyA9IHtcbiAgICBsb2dnZXIsXG4gICAgY29weSxcbiAgICB0aW1lb3V0LFxuICAgIHJldHJ5UHJvbWlzZSxcbiAgICBnZXREb21haW4sXG4gICAgc2V0QWxsUmVhZEJhZGdlLFxuICAgIHNldFVucmVhZEJhZGdlLFxuICAgIGlzSW50ZWdlcixcbiAgICBpc1VzZXJBY3RpdmUsXG4gICAgc3RvcmFnZVJlc2V0LFxuICAgIGdldExhc3RGb2N1c2VkV2luZG93LFxuICAgIHJlbW92ZUl0ZW0sXG4gIH07XG59XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhYm9vdHN0cmFwLWNzcy1vbmx5L2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEpO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxYjllNzQ7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uYm9sZC10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbjpmb2N1cyB7b3V0bGluZTowICFpbXBvcnRhbnQ7fVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4taW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tc2dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lbi1zZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZpbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1kZXZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWRldmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9vYy1sbmNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vb2MtbG5jLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtbW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC1tby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInBvcHVwXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL2FwcC9wb3B1cC5qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbG9kYXNoX2xvZGFzaF9qcy1ub2RlX21vZHVsZXNfcHNsX2luZGV4X2pzLW5vZGVfbW9kdWxlc193ZWJleHRlbnNpb24tcG9sLTM1N2E0ZFwiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbWF0ZXJpYWwtdWlfY29yZV9UeXBvZ3JhcGh5X1R5cG9ncmFwaHlfanMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfLTI1Yjg0ZlwiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9ICgpID0+IHtcblxufTtcbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdH1cblx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG5mdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cdHZhciBydW50aW1lID0gZGF0YVszXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufTtcblxudmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gfHwgW107XG52YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuanNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG52YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=