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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ErrorOutline */ "./node_modules/@material-ui/icons/ErrorOutline.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utils */ "./src/services/utils.js");












const RESTORE = 'RESTORE';
const NEXT = 'NEXT';
const REMOVED = 'REMOVED';
const CLOSED_HISTORY = 'closed_history';
const NUMBER_HOURS = 24;
const TIME_PERIOD_TO_CONSIDER = 3600000 * NUMBER_HOURS; // in microsecond

class Home extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);
    (0,_services_utils__WEBPACK_IMPORTED_MODULE_2__.setAllReadBadge)();
    this.state = {
      renderSaveBoolean: false
    };

    this.onChangedCallback = function (changes) {
      const changesClosedHistory = changes[CLOSED_HISTORY];

      if (changesClosedHistory) {
        this.setState({
          closed_history: changesClosedHistory['newValue'],
          renderSaveBoolean: true
        });
      }
    }.bind(this);
  }

  componentDidMount() {
    chrome.storage.local.get([CLOSED_HISTORY], result => {
      const closed_history = result.closed_history || [];
      this.setState({
        closed_history
      });
    });
    this.setState({
      nextList: []
    });
    chrome.storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    (0,_services_utils__WEBPACK_IMPORTED_MODULE_2__.setAllReadBadge)();
    chrome.storage.onChanged.removeListener(this.onChangedCallback);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.renderSaveBoolean) {
      this.forceRender();
    }
  }

  removeItem(key) {
    let items = this.state.closed_history.reverse();
    this.restoreTab(items, key, RESTORE);
  }

  restoreTab(items, key, messageType) {
    const restoredTab = items[key];
    items.splice(key, 1);
    this.setState({
      closed_history: items.reverse(),
      renderSaveBoolean: true
    });
    chrome.runtime.sendMessage({
      messageType: messageType,
      tabId: restoredTab.tabId
    });
  }

  forceRender() {
    this.setState({
      renderSaveBoolean: false
    });
  }

  filterList(selectedList) {
    const now = Date.now();
    return selectedList.filter(item => {
      return now - Math.max(item.statistics.updated_at, item.statistics.last_active_timestamp) < TIME_PERIOD_TO_CONSIDER;
    });
  }

  renderList(listToBeRendered) {
    const {
      classes
    } = this.props;
    let selectedList;
    const MAX_LENGTH_TITLE = 100;

    switch (listToBeRendered) {
      case NEXT:
        selectedList = this.state.nextList ? this.state.nextList : [];
        break;

      default:
        selectedList = this.state.closed_history ? this.state.closed_history : [];
        selectedList = selectedList.map((website, i) => {
          const deletionTime = new Date(website.deletion_time);
          const formatted_deletion_time = deletionTime.toTimeString().split(' ')[0];
          website.hours_deletion = formatted_deletion_time.split(':')[0];
          website.minutes_deletion = formatted_deletion_time.split(':')[1];

          if (website.title && website.title.length > MAX_LENGTH_TITLE) {
            website.title = website.title.substring(0, MAX_LENGTH_TITLE).concat('...');
          }

          website.truncated_url = website.url.split('/')[0];
          return website;
        });
    }

    const isNext = listToBeRendered === NEXT;
    const filteredList = this.filterList(selectedList).reverse();

    const listItem = ({
      index,
      style
    }) => {
      const website = filteredList[index];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__.default, {
        ContainerComponent: "div"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: classes.gridAvatarWithTime
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
        className: classes.timeDisplay
      }, `${website.hours_deletion}:${website.minutes_deletion}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__.default, {
        alt: website.title,
        src: website.favIconUrl,
        className: classes.avatarContainer
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__.default, {
        primary: website.truncated_url,
        secondary: website.title,
        classes: {
          primary: classes.primaryTextContainer,
          secondary: classes.secondaryTextContainer
        },
        className: classes.itemText
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_8__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: classes.buttonContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
        size: "small",
        onClick: isNext ? this.removeNextItem.bind(this, index) : this.removeItem.bind(this, index),
        variant: "outlined",
        color: "secondary",
        className: classes.button
      }, isNext ? 'Skip' : 'Restore')))));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.listWebsites
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
      variant: "h6",
      className: classes.greenTitle
    }, isNext ? 'Next tabs to be closed' : `Last closed tabs`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, filteredList.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.subText
    }, `You should maybe update your settings.`) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_window__WEBPACK_IMPORTED_MODULE_1__.FixedSizeList, {
      height: Math.min(80 * filteredList.length, 300),
      itemCount: filteredList.length,
      itemSize: 80
    }, listItem)));
  }

  render() {
    const {
      classes
    } = this.props;
    const numberClosedTabsLastHour = this.state.closed_history ? this.filterList(this.state.closed_history).length : 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      variant: "h3",
      className: classes.title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
      className: classes.boldNumber
    }, numberClosedTabsLastHour ? numberClosedTabsLastHour : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.textOnRight
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
      className: classes.topText
    }, ' ', "tab", numberClosedTabsLastHour <= 1 ? '' : 's', " closed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
      className: classes.middleText
    }, " in the last ", `${NUMBER_HOURS} hours`, " "))), this.renderList.bind(this)(REMOVED), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.footerContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_10__.default, {
      color: "secondary",
      className: classes.iconContainer
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11__.default, {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSdUEJHd0bL6ryFvZk220CoZp7cwvFxESorps7cngk0wQfyu-Q/viewform",
      target: "_blank",
      className: classes.linkToForm
    }, "Report a bug or send us a feedback?")));
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
    alignItems: 'start' //justifyContent: 'space-between',

  },
  greenTitle: {
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    borderBottom: `2px solid #00b9aa`,
    maxWidth: 225
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
    fontSize: 16 //Insert your required size

  },
  secondaryTextContainer: {
    fontSize: 13 //Insert your required size

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/FormGroup.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/Switch.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Tune */ "./node_modules/@material-ui/icons/Tune.js");
/* harmony import */ var _material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/HelpOutline */ "./node_modules/@material-ui/icons/HelpOutline.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/settingsProfiles.js */ "./src/config/settingsProfiles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/components/utils.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utils */ "./src/services/utils.js");
/* harmony import */ var _material_ui_core_Link_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Link/Link */ "./node_modules/@material-ui/core/Link/Link.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















class Settings extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChangeParameters", (path, parameter) => event => {
      let settings = this.state.settings;
      const nextValue = event.target.value;

      if ((0,_services_utils__WEBPACK_IMPORTED_MODULE_4__.isInteger)(nextValue) || nextValue.length === 0) {
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
        inactivePolicy = (0,_services_utils__WEBPACK_IMPORTED_MODULE_4__.removeItem)(inactivePolicy, this.state.focusedWindowId);
        chrome.runtime.sendMessage({
          messageType: 'REMOVE_INACTIVE_POLICY',
          windowId: this.state.focusedWindowId
        });
      } else {
        inactivePolicy.push(this.state.focusedWindowId);
        chrome.runtime.sendMessage({
          messageType: 'ADD_INACTIVE_POLICY',
          windowId: this.state.focusedWindowId
        });
      }

      this.setState({
        inactivePolicy: inactivePolicy,
        renderSaveBoolean: true
      });
    });

    this.state = {
      focusedMode: false,
      relaxedMode: false,
      customizedBool: false,
      settings: _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.INIT_RELAXED_PROFILE,
      renderSaveBoolean: false,
      focusedWindowId: true
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
          focusedMode: changesProfile['newValue'] === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.FOCUSED,
          relaxedMode: changesProfile['newValue'] === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.RELAXED,
          customizedBool: changesProfile['newValue'] === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.CUSTOMIZED
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
    chrome.storage.local.get(['active_profile', 'settings', 'focused_window_id', 'inactive_policy'], result => {
      const profile = result.active_profile || _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.RELAXED;
      const focusedMode = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.FOCUSED;
      const relaxedMode = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.RELAXED;
      const customizedBool = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.CUSTOMIZED;
      const settings = result.settings || _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.INIT_RELAXED_PROFILE;
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
    chrome.storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    chrome.storage.onChanged.removeListener(this.onChangedCallback);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.renderSaveBoolean) {
      this.forceRender();
    }
  }

  handleBoolChange(changeType) {
    chrome.runtime.sendMessage({
      messageType: 'SETTINGS_PROFILE',
      profile: changeType
    });

    if (changeType === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.RELAXED || changeType === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.FOCUSED) {
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

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.checkSettings)(this.state.settings)) {
      chrome.runtime.sendMessage({
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
      path: _utils__WEBPACK_IMPORTED_MODULE_3__.POLICY,
      parameter: _utils__WEBPACK_IMPORTED_MODULE_3__.OPTIMAL_NUMBER_TABS,
      inputProps: {
        min: '1',
        max: '100',
        step: '1'
      }
    }];
    const listItemsParameters = inputsParameters.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__.default, {
        checked: this.state.focusedWindowId && this.state.inactivePolicy ? !this.state.inactivePolicy.includes(this.state.focusedWindowId) : true,
        onChange: this.handleSwitch,
        color: "secondary",
        className: classes.switchWrapper
      }),
      className: classes.switchContainer,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
        className: classes.styleLabel
      }, "Enable on this window")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.introductionBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_9__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: classes.parametersTitle
    }, "Select the best mode or customize it")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10__.default, {
      className: classes.settingsWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__.default, {
        checked: this.state.focusedMode,
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.FOCUSED),
        color: "secondary",
        className: classes.checkboxWrapper
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
        className: classes.styleLabel
      }, "Focus"),
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__.default, {
        checked: this.state.relaxedMode,
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.RELAXED),
        color: "secondary",
        className: classes.checkboxWrapper
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
        className: classes.styleLabel
      }, "Relax"),
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.customizeWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__.default, {
        checked: this.state.customizedBool,
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.CUSTOMIZED),
        color: "secondary",
        className: classes.checkboxWrapper
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
        className: classes.styleLabel
      }, "Customize"),
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Link_Link__WEBPACK_IMPORTED_MODULE_12__.default, {
      href: "https://tabby.us",
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_13__.default, {
      className: classes.helpIcon
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.settingsBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14__.default, {
      required: true,
      fullWidth: true
    }, listItemsParameters), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
      hidden: true,
      key: "hidden-textfield",
      disabled: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__.default, {
      size: "small",
      color: "secondary",
      disabled: !this.state.customizedBool,
      className: classes.secondaryButton,
      variant: "outlined" //{this.state.customizedBool ? 'outlined' : 'secondary'}
      ,
      onClick: () => this.handleSaveParameters()
    }, "Save")))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notistack__WEBPACK_IMPORTED_MODULE_1__.withSnackbar)(Settings));

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
    maxHeight: 20,
    marginTop: 5,
    pointerEvents: 'none'
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
    fontSize: 14,
    marginBottom: 8
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
/* harmony export */   "SESSIONS_MAX_FUZZY_DELTA_MS": () => /* binding */ SESSIONS_MAX_FUZZY_DELTA_MS,
/* harmony export */   "MIN_ACTIVE_DEBOUNCE": () => /* binding */ MIN_ACTIVE_DEBOUNCE,
/* harmony export */   "MAX_ACTIVE_DEBOUNCE": () => /* binding */ MAX_ACTIVE_DEBOUNCE
/* harmony export */ });
const SCORER = 'v1'; // only default implemented

const MAXIMUM_SCORE = 10; // max score for scorer

const MAXIMUM_HISTORY_SIZE = 1000; // max killed tab history in memory

const SESSIONS_TIMEOUT_MS = 800; // when a tab is killed we need a timeout to retrieve the sessionId

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
/*! export setAllReadBadge [provided] [used] [could be renamed] */
/*! export setUnreadBadge [provided] [used] [could be renamed] */
/*! export storageGet [provided] [used] [could be renamed] */
/*! export storageReset [provided] [used] [could be renamed] */
/*! export storageSet [provided] [used] [could be renamed] */
/*! export timeout [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => /* binding */ logger,
/* harmony export */   "copy": () => /* binding */ copy,
/* harmony export */   "timeout": () => /* binding */ timeout,
/* harmony export */   "getDomain": () => /* binding */ getDomain,
/* harmony export */   "storageGet": () => /* binding */ storageGet,
/* harmony export */   "storageSet": () => /* binding */ storageSet,
/* harmony export */   "setAllReadBadge": () => /* binding */ setAllReadBadge,
/* harmony export */   "setUnreadBadge": () => /* binding */ setUnreadBadge,
/* harmony export */   "isInteger": () => /* binding */ isInteger,
/* harmony export */   "storageReset": () => /* binding */ storageReset,
/* harmony export */   "getLastFocusedWindow": () => /* binding */ getLastFocusedWindow,
/* harmony export */   "removeItem": () => /* binding */ removeItem
/* harmony export */ });
/* unused harmony export isUserActive */
/* harmony import */ var psl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! psl */ "./node_modules/psl/index.js");
/* harmony import */ var psl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(psl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/env.js */ "./src/config/env.js");



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

function storageSet(args) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set(args, function () {
      resolve();
    });
  });
}

function storageGet(args) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(args, function (data) {
      resolve(data);
    });
  });
}

function isInteger(value) {
  return /^\d+$/.test(value);
}

function setAllReadBadge() {
  chrome.browserAction.setBadgeText({
    text: ''
  }); // <-- set text to '' to remove the badge
}

function setUnreadBadge() {
  chrome.browserAction.setBadgeBackgroundColor({
    color: [229, 92, 0, 128]
  });
  chrome.browserAction.getBadgeText({}, function (badgeText) {
    let counter = 1;

    if (isInteger(badgeText)) {
      counter = parseInt(badgeText) + 1;
    }

    chrome.browserAction.setBadgeText({
      text: `${counter}`
    });
  });
}

function isUserActive() {
  return new Promise((resolve, reject) => {
    chrome.idle.queryState(Math.round(MAX_ACTIVE_DEBOUNCE / 1000), status => {
      if (status === 'active') {
        resolve(true);
      } else if (status) {
        resolve(false);
      } else {
        logger("Couldn't check user activity.");
        resolve(true);
      }
    });
  });
}

function storageReset() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(null, d => {
      chrome.storage.local.remove(Object.keys(d), () => {
        logger('Memory flushed.');
        resolve();
      });
    });
  });
}

function getLastFocusedWindow() {
  return new Promise((resolve, reject) => {
    chrome.windows.getLastFocused({
      populate: false,
      windowTypes: ['normal']
    }, d => resolve(d.id));
  });
}

function removeItem(arr, value) {
  const index = arr.indexOf(value);

  if (index > -1) {
    arr.splice(index, 1);
  }

  return arr;
}

logger('Starting in ' + "debug" + ' env.');


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
exports.push([module.id, ".todo-list-container {\n  min-width: 400px;\n}\n\n.todo-list {\n  max-height: 400px;\n  overflow-y: scroll;\n}\n\n.card-header {\n  background-color: rgba(255, 255, 255, 0.21);\n  min-width: 200px;\n}\n\n.card-title {\n  background-color: rgba(255, 255, 255, 0.21);\n  display: inline-block;\n  font-size: 18px;\n  margin-bottom: 2px;\n  line-height: 1;\n  border-bottom: 2px solid #1b9e74;\n  min-width: 300px;\n}\n\n.button {\n  color: #1b9e74;\n  border-color: #1b9e74;\n}\n\n.bold-title {\n  font-size: 16px;\n}\n\n:focus {outline:0 !important;}", ""]);
// Exports
module.exports = exports;


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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 			["./src/app/popup.js","vendors-node_modules_psl_index_js","vendors-node_modules_material-ui_core_Link_Link_js-node_modules_material-ui_core_Typography_T-e29580"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9lbnYuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9zZXJ2aWNlcy91dGlscy5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzP2VhNWQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiQXBwIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUkVTVE9SRSIsIk5FWFQiLCJSRU1PVkVEIiwiQ0xPU0VEX0hJU1RPUlkiLCJOVU1CRVJfSE9VUlMiLCJUSU1FX1BFUklPRF9UT19DT05TSURFUiIsIkhvbWUiLCJQdXJlQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInNldEFsbFJlYWRCYWRnZSIsInN0YXRlIiwicmVuZGVyU2F2ZUJvb2xlYW4iLCJvbkNoYW5nZWRDYWxsYmFjayIsImNoYW5nZXMiLCJjaGFuZ2VzQ2xvc2VkSGlzdG9yeSIsInNldFN0YXRlIiwiY2xvc2VkX2hpc3RvcnkiLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJjaHJvbWUiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJyZXN1bHQiLCJuZXh0TGlzdCIsIm9uQ2hhbmdlZCIsImFkZExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVMaXN0ZW5lciIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImZvcmNlUmVuZGVyIiwicmVtb3ZlSXRlbSIsImtleSIsIml0ZW1zIiwicmV2ZXJzZSIsInJlc3RvcmVUYWIiLCJtZXNzYWdlVHlwZSIsInJlc3RvcmVkVGFiIiwic3BsaWNlIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidGFiSWQiLCJmaWx0ZXJMaXN0Iiwic2VsZWN0ZWRMaXN0Iiwibm93IiwiRGF0ZSIsImZpbHRlciIsIml0ZW0iLCJNYXRoIiwibWF4Iiwic3RhdGlzdGljcyIsInVwZGF0ZWRfYXQiLCJsYXN0X2FjdGl2ZV90aW1lc3RhbXAiLCJyZW5kZXJMaXN0IiwibGlzdFRvQmVSZW5kZXJlZCIsImNsYXNzZXMiLCJNQVhfTEVOR1RIX1RJVExFIiwibWFwIiwid2Vic2l0ZSIsImkiLCJkZWxldGlvblRpbWUiLCJkZWxldGlvbl90aW1lIiwiZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUiLCJ0b1RpbWVTdHJpbmciLCJzcGxpdCIsImhvdXJzX2RlbGV0aW9uIiwibWludXRlc19kZWxldGlvbiIsInRpdGxlIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY29uY2F0IiwidHJ1bmNhdGVkX3VybCIsInVybCIsImlzTmV4dCIsImZpbHRlcmVkTGlzdCIsImxpc3RJdGVtIiwiaW5kZXgiLCJzdHlsZSIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsImF2YXRhckNvbnRhaW5lciIsInByaW1hcnkiLCJwcmltYXJ5VGV4dENvbnRhaW5lciIsInNlY29uZGFyeVRleHRDb250YWluZXIiLCJpdGVtVGV4dCIsImJ1dHRvbkNvbnRhaW5lciIsInJlbW92ZU5leHRJdGVtIiwiYnV0dG9uIiwibGlzdFdlYnNpdGVzIiwiZ3JlZW5UaXRsZSIsInN1YlRleHQiLCJtaW4iLCJyZW5kZXIiLCJudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIiLCJib2xkTnVtYmVyIiwidGV4dE9uUmlnaHQiLCJ0b3BUZXh0IiwibWlkZGxlVGV4dCIsImZvb3RlckNvbnRhaW5lciIsImljb25Db250YWluZXIiLCJsaW5rVG9Gb3JtIiwic3R5bGVzIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtYXhIZWlnaHQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsImZvbnRTaXplIiwiYm9yZGVyQm90dG9tIiwibWF4V2lkdGgiLCJjb2xvciIsIm1hcmdpblRvcCIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0Iiwib3ZlcmZsb3dXcmFwIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJtaW5XaWR0aCIsIm1hcmdpblJpZ2h0Iiwid2l0aFN0eWxlcyIsIkhvbWVEaXNwYXRjaGVyIiwibmV3VmFsdWUiLCJhcHBCYXJWYWx1ZSIsImxvZ2dlciIsImRpc3BhdGNoUGFnZSIsImRpc3BsYXlJY29uIiwiaGFuZGxlQ2hhbmdlIiwicm9vdCIsIm5vdGlmaWNhdGlvbiIsInZhcmlhbnRTdWNjZXNzIiwic3VjY2VzcyIsImhvbWVDb250YWluZXIiLCJncmlkTG9nb1RhYnMiLCJlbnNlbWJsZWxvZ28iLCJsb2dvRnVsbCIsInRhYiIsImxlZnQiLCJhbGxUYWJzIiwibG9nb0F2YXRhciIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsIlNldHRpbmdzIiwicGF0aCIsInBhcmFtZXRlciIsImV2ZW50Iiwic2V0dGluZ3MiLCJuZXh0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlzSW50ZWdlciIsImluYWN0aXZlUG9saWN5IiwiaW5jbHVkZXMiLCJmb2N1c2VkV2luZG93SWQiLCJ3aW5kb3dJZCIsInB1c2giLCJmb2N1c2VkTW9kZSIsInJlbGF4ZWRNb2RlIiwiY3VzdG9taXplZEJvb2wiLCJJTklUX1JFTEFYRURfUFJPRklMRSIsImNoYW5nZXNTZXR0aW5ncyIsImNoYW5nZXNQcm9maWxlIiwiY2hhbmdlZEluYWN0aXZlUG9saWN5IiwiRk9DVVNFRCIsIlJFTEFYRUQiLCJDVVNUT01JWkVEIiwicHJvZmlsZSIsImFjdGl2ZV9wcm9maWxlIiwiZm9jdXNlZF93aW5kb3dfaWQiLCJpbmFjdGl2ZV9wb2xpY3kiLCJoYW5kbGVCb29sQ2hhbmdlIiwiY2hhbmdlVHlwZSIsIm5vdGlmeVVzZXIiLCJoYW5kbGVTd2l0Y2giLCJoYW5kbGVTYXZlUGFyYW1ldGVycyIsImNoZWNrU2V0dGluZ3MiLCJlbnF1ZXVlU25hY2tiYXIiLCJ2YXJpYW50IiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiYXV0b0hpZGVEdXJhdGlvbiIsImlucHV0c1BhcmFtZXRlcnMiLCJsYWJlbCIsInNvdXJjZSIsIlBPTElDWSIsIk9QVElNQUxfTlVNQkVSX1RBQlMiLCJpbnB1dFByb3BzIiwic3RlcCIsImxpc3RJdGVtc1BhcmFtZXRlcnMiLCJoYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzIiwidGV4dEZpZWxkIiwic3dpdGNoV3JhcHBlciIsInN3aXRjaENvbnRhaW5lciIsInN0eWxlTGFiZWwiLCJpbnRyb2R1Y3Rpb25CbG9jayIsInBhcmFtZXRlcnNUaXRsZSIsInNldHRpbmdzV3JhcHBlciIsImNoZWNrYm94V3JhcHBlciIsImZpcnN0Qm9vbGVhbnMiLCJjdXN0b21pemVXcmFwcGVyIiwiaGVscEljb24iLCJzZXR0aW5nc0Jsb2NrIiwic2Vjb25kYXJ5QnV0dG9uIiwid2l0aFNuYWNrYmFyIiwicG9pbnRlckV2ZW50cyIsIm1hcmdpbkJvdHRvbSIsIklOQUNUSVZFX1BPTElDWSIsImFyciIsImluZGV4T2YiLCJTQ09SRVIiLCJNQVhJTVVNX1NDT1JFIiwiTUFYSU1VTV9ISVNUT1JZX1NJWkUiLCJTRVNTSU9OU19USU1FT1VUX01TIiwiU0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TIiwiTUlOX0FDVElWRV9ERUJPVU5DRSIsIk1BWF9BQ1RJVkVfREVCT1VOQ0UiLCJJTklUX0ZPQ1VTRURfUFJPRklMRSIsIkVOViIsIm1lbW9yeSIsImNhY2hlX3NpemUiLCJtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZSIsIm1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yIiwicG9saWN5IiwidGFyZ2V0X3RhYnMiLCJkZWNheSIsIm1pbl90aW1lIiwiYWN0aXZlIiwicGlubmVkIiwiYXVkaWJsZSIsInNjb3JlciIsIm1pbl9hY3RpdmUiLCJwcm90ZWN0aW9uX3RpbWUiLCJjYWNoZWRfZGVjYXkiLCJPYmplY3QiLCJmcmVlemUiLCJhcmdzIiwiZGVmYXVsdF9mb3JtYXQiLCJwcmUiLCJ0b1VUQ1N0cmluZyIsIm9wdGlvbnMiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImNvcHkiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ0aW1lb3V0IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJnZXREb21haW4iLCJzdHIiLCJwc2wiLCJVUkwiLCJob3N0bmFtZSIsImRvbWFpbiIsInN0b3JhZ2VTZXQiLCJyZWplY3QiLCJzZXQiLCJzdG9yYWdlR2V0IiwiZGF0YSIsInRlc3QiLCJicm93c2VyQWN0aW9uIiwic2V0QmFkZ2VUZXh0IiwidGV4dCIsInNldFVucmVhZEJhZGdlIiwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3IiLCJnZXRCYWRnZVRleHQiLCJiYWRnZVRleHQiLCJjb3VudGVyIiwicGFyc2VJbnQiLCJpc1VzZXJBY3RpdmUiLCJpZGxlIiwicXVlcnlTdGF0ZSIsInJvdW5kIiwic3RhdHVzIiwic3RvcmFnZVJlc2V0IiwiZCIsInJlbW92ZSIsImtleXMiLCJnZXRMYXN0Rm9jdXNlZFdpbmRvdyIsIndpbmRvd3MiLCJnZXRMYXN0Rm9jdXNlZCIsInBvcHVsYXRlIiwid2luZG93VHlwZXMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLGlFQUFjLENBQUM7QUFDM0JDLFlBQVUsRUFBRTtBQUNWQyxjQUFVLEVBQUU7QUFERixHQURlO0FBSTNCQyxTQUFPLEVBQUU7QUFDUEMsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRTtBQURHO0FBREo7QUFKa0IsQ0FBRCxDQUE1Qjs7QUFXQSxTQUFTQyxHQUFULEdBQWU7QUFDYixzQkFDRSwyREFBQyw2REFBRDtBQUFrQixT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O1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDeEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQztXQUNBO1dBQ0EsZ0JBQWdCLDJCQUEyQjtXQUMzQztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxlQUFlLHVCQUF1QjtXQUN0QztXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLDJDOzs7O1VDNUZBO1VBQ0EiLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZURpc3BhdGNoZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lRGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gIH0sXG4gIHBhbGV0dGU6IHtcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMDBiOWFhJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhvbWVEaXNwYXRjaGVyIC8+eycgJ31cbiAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IEVycm9yT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yT3V0bGluZSc7XG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0IGFzIExpc3QgfSBmcm9tICdyZWFjdC13aW5kb3cnO1xuXG5pbXBvcnQgeyBzZXRBbGxSZWFkQmFkZ2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5cbmNvbnN0IFJFU1RPUkUgPSAnUkVTVE9SRSc7XG5jb25zdCBORVhUID0gJ05FWFQnO1xuY29uc3QgUkVNT1ZFRCA9ICdSRU1PVkVEJztcbmNvbnN0IENMT1NFRF9ISVNUT1JZID0gJ2Nsb3NlZF9oaXN0b3J5JztcbmNvbnN0IE5VTUJFUl9IT1VSUyA9IDI0O1xuY29uc3QgVElNRV9QRVJJT0RfVE9fQ09OU0lERVIgPSAzNjAwMDAwICogTlVNQkVSX0hPVVJTOyAvLyBpbiBtaWNyb3NlY29uZFxuXG5jbGFzcyBIb21lIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHNldEFsbFJlYWRCYWRnZSgpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSB9O1xuICAgIHRoaXMub25DaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgY29uc3QgY2hhbmdlc0Nsb3NlZEhpc3RvcnkgPSBjaGFuZ2VzW0NMT1NFRF9ISVNUT1JZXTtcbiAgICAgIGlmIChjaGFuZ2VzQ2xvc2VkSGlzdG9yeSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjbG9zZWRfaGlzdG9yeTogY2hhbmdlc0Nsb3NlZEhpc3RvcnlbJ25ld1ZhbHVlJ10sXG4gICAgICAgICAgcmVuZGVyU2F2ZUJvb2xlYW46IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbQ0xPU0VEX0hJU1RPUlldLCAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBjbG9zZWRfaGlzdG9yeSA9IHJlc3VsdC5jbG9zZWRfaGlzdG9yeSB8fCBbXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZWRfaGlzdG9yeSB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmV4dExpc3Q6IFtdIH0pO1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHNldEFsbFJlYWRCYWRnZSgpO1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnJlbmRlclNhdmVCb29sZWFuKSB7XG4gICAgICB0aGlzLmZvcmNlUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSXRlbShrZXkpIHtcbiAgICBsZXQgaXRlbXMgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5LnJldmVyc2UoKTtcbiAgICB0aGlzLnJlc3RvcmVUYWIoaXRlbXMsIGtleSwgUkVTVE9SRSk7XG4gIH1cblxuICByZXN0b3JlVGFiKGl0ZW1zLCBrZXksIG1lc3NhZ2VUeXBlKSB7XG4gICAgY29uc3QgcmVzdG9yZWRUYWIgPSBpdGVtc1trZXldO1xuICAgIGl0ZW1zLnNwbGljZShrZXksIDEpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZWRfaGlzdG9yeTogaXRlbXMucmV2ZXJzZSgpLCByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSB9KTtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBtZXNzYWdlVHlwZTogbWVzc2FnZVR5cGUsXG4gICAgICB0YWJJZDogcmVzdG9yZWRUYWIudGFiSWQsXG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVJlbmRlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlIH0pO1xuICB9XG5cbiAgZmlsdGVyTGlzdChzZWxlY3RlZExpc3QpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZWxlY3RlZExpc3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBub3cgLSBNYXRoLm1heChpdGVtLnN0YXRpc3RpY3MudXBkYXRlZF9hdCwgaXRlbS5zdGF0aXN0aWNzLmxhc3RfYWN0aXZlX3RpbWVzdGFtcCkgPCBUSU1FX1BFUklPRF9UT19DT05TSURFUlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckxpc3QobGlzdFRvQmVSZW5kZXJlZCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBzZWxlY3RlZExpc3Q7XG4gICAgY29uc3QgTUFYX0xFTkdUSF9USVRMRSA9IDEwMDtcblxuICAgIHN3aXRjaCAobGlzdFRvQmVSZW5kZXJlZCkge1xuICAgICAgY2FzZSBORVhUOlxuICAgICAgICBzZWxlY3RlZExpc3QgPSB0aGlzLnN0YXRlLm5leHRMaXN0ID8gdGhpcy5zdGF0ZS5uZXh0TGlzdCA6IFtdO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHNlbGVjdGVkTGlzdCA9IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkgPyB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5IDogW107XG4gICAgICAgIHNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdC5tYXAoKHdlYnNpdGUsIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBkZWxldGlvblRpbWUgPSBuZXcgRGF0ZSh3ZWJzaXRlLmRlbGV0aW9uX3RpbWUpO1xuICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZF9kZWxldGlvbl90aW1lID0gZGVsZXRpb25UaW1lLnRvVGltZVN0cmluZygpLnNwbGl0KCcgJylbMF07XG4gICAgICAgICAgd2Vic2l0ZS5ob3Vyc19kZWxldGlvbiA9IGZvcm1hdHRlZF9kZWxldGlvbl90aW1lLnNwbGl0KCc6JylbMF07XG4gICAgICAgICAgd2Vic2l0ZS5taW51dGVzX2RlbGV0aW9uID0gZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUuc3BsaXQoJzonKVsxXTtcbiAgICAgICAgICBpZiAod2Vic2l0ZS50aXRsZSAmJiB3ZWJzaXRlLnRpdGxlLmxlbmd0aCA+IE1BWF9MRU5HVEhfVElUTEUpIHtcbiAgICAgICAgICAgIHdlYnNpdGUudGl0bGUgPSB3ZWJzaXRlLnRpdGxlLnN1YnN0cmluZygwLCBNQVhfTEVOR1RIX1RJVExFKS5jb25jYXQoJy4uLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3ZWJzaXRlLnRydW5jYXRlZF91cmwgPSB3ZWJzaXRlLnVybC5zcGxpdCgnLycpWzBdO1xuICAgICAgICAgIHJldHVybiB3ZWJzaXRlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgaXNOZXh0ID0gbGlzdFRvQmVSZW5kZXJlZCA9PT0gTkVYVDtcbiAgICBjb25zdCBmaWx0ZXJlZExpc3QgPSB0aGlzLmZpbHRlckxpc3Qoc2VsZWN0ZWRMaXN0KS5yZXZlcnNlKCk7XG5cbiAgICBjb25zdCBsaXN0SXRlbSA9ICh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gICAgICBjb25zdCB3ZWJzaXRlID0gZmlsdGVyZWRMaXN0W2luZGV4XTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICA8TGlzdEl0ZW0gQ29udGFpbmVyQ29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkQXZhdGFyV2l0aFRpbWV9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGltZURpc3BsYXl9PlxuICAgICAgICAgICAgICAgIHtgJHt3ZWJzaXRlLmhvdXJzX2RlbGV0aW9ufToke3dlYnNpdGUubWludXRlc19kZWxldGlvbn1gfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD17d2Vic2l0ZS50aXRsZX0gc3JjPXt3ZWJzaXRlLmZhdkljb25Vcmx9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJDb250YWluZXJ9IC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgcHJpbWFyeT17d2Vic2l0ZS50cnVuY2F0ZWRfdXJsfVxuICAgICAgICAgICAgICBzZWNvbmRhcnk9e3dlYnNpdGUudGl0bGV9XG4gICAgICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgICBwcmltYXJ5OiBjbGFzc2VzLnByaW1hcnlUZXh0Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHNlY29uZGFyeTogY2xhc3Nlcy5zZWNvbmRhcnlUZXh0Q29udGFpbmVyLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25Db250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtpc05leHQgPyB0aGlzLnJlbW92ZU5leHRJdGVtLmJpbmQodGhpcywgaW5kZXgpIDogdGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcywgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2lzTmV4dCA/ICdTa2lwJyA6ICdSZXN0b3JlJ31cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0V2Vic2l0ZXN9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JlZW5UaXRsZX0+XG4gICAgICAgICAge2lzTmV4dCA/ICdOZXh0IHRhYnMgdG8gYmUgY2xvc2VkJyA6IGBMYXN0IGNsb3NlZCB0YWJzYH1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2ZpbHRlcmVkTGlzdC5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJUZXh0fT57YFlvdSBzaG91bGQgbWF5YmUgdXBkYXRlIHlvdXIgc2V0dGluZ3MuYH08L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExpc3QgaGVpZ2h0PXtNYXRoLm1pbig4MCAqIGZpbHRlcmVkTGlzdC5sZW5ndGgsIDMwMCl9IGl0ZW1Db3VudD17ZmlsdGVyZWRMaXN0Lmxlbmd0aH0gaXRlbVNpemU9ezgwfT5cbiAgICAgICAgICAgICAge2xpc3RJdGVtfVxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSA/IHRoaXMuZmlsdGVyTGlzdCh0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5KS5sZW5ndGggOiAwO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8ZGl2IHZhcmlhbnQ9XCJoM1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmJvbGROdW1iZXJ9PlxuICAgICAgICAgICAge251bWJlckNsb3NlZFRhYnNMYXN0SG91ciA/IG51bWJlckNsb3NlZFRhYnNMYXN0SG91ciA6IDB9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRPblJpZ2h0fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50b3BUZXh0fT5cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgdGFiXG4gICAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPD0gMSA/ICcnIDogJ3MnfSBjbG9zZWRcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5taWRkbGVUZXh0fT4gaW4gdGhlIGxhc3Qge2Ake05VTUJFUl9IT1VSU30gaG91cnNgfSA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5yZW5kZXJMaXN0LmJpbmQodGhpcykoUkVNT1ZFRCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlckNvbnRhaW5lcn0+XG4gICAgICAgICAgPEVycm9yT3V0bGluZUljb24gY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn0gLz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvZS8xRkFJcFFMU2RVRUpIZDBiTDZyeUZ2WmsyMjBDb1pwN2N3dkZ4RVNvcnBzN2NuZ2swd1FmeXUtUS92aWV3Zm9ybVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtUb0Zvcm19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVwb3J0IGEgYnVnIG9yIHNlbmQgdXMgYSBmZWVkYmFjaz9cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgdGl0bGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1heEhlaWdodDogNDAsXG4gIH0sXG4gIHRleHRPblJpZ2h0OiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ3N0YXJ0JyxcbiAgICAvL2p1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGdyZWVuVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAjMDBiOWFhYCxcbiAgICBtYXhXaWR0aDogMjI1LFxuICB9LFxuXG4gIGJvbGROdW1iZXI6IHtcbiAgICBjb2xvcjogJyNlNTVjMDAnLFxuICAgIGZvbnRTaXplOiA0MCxcbiAgICBtYXhXaWR0aDogJzMwJScsXG4gIH0sXG4gIG1pZGRsZVRleHQ6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gIH0sXG4gIHRvcFRleHQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gIH0sXG4gIHN1YlRleHQ6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXhXaWR0aDogMjAsXG4gIH0sXG4gIGJ1dHRvbkNvbnRhaW5lcjogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknIH0sXG4gIGl0ZW1UZXh0OiB7XG4gICAgbWF4V2lkdGg6IDE4NSxcbiAgICBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIG1heEhlaWdodDogNjAsXG4gIH0sXG4gIHRpbWVEaXNwbGF5OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgfSxcbiAgZ3JpZEF2YXRhcldpdGhUaW1lOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB9LFxuICBsaXN0V2Vic2l0ZXM6IHtcbiAgICBtYXJnaW5Ub3A6IDIwLFxuICB9LFxuICBmb290ZXJDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuMjUpLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGxpbmtUb0Zvcm06IHtcbiAgICBmb250U2l6ZTogMTAsXG4gIH0sXG4gIGljb25Db250YWluZXI6IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygwLjI1KSxcbiAgICBmb250U2l6ZTogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgYXZhdGFyQ29udGFpbmVyOiB7XG4gICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgbWF4SGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDcpLFxuICB9LFxuICBwcmltYXJ5VGV4dENvbnRhaW5lcjoge1xuICAgIGZvbnRTaXplOiAxNiwgLy9JbnNlcnQgeW91ciByZXF1aXJlZCBzaXplXG4gIH0sXG4gIHNlY29uZGFyeVRleHRDb250YWluZXI6IHtcbiAgICBmb250U2l6ZTogMTMsIC8vSW5zZXJ0IHlvdXIgcmVxdWlyZWQgc2l6ZVxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3MnO1xuaW1wb3J0IEFycm93QmFja0lvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja0lvcyc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhci9BdmF0YXInO1xuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vU2V0dGluZ3MnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9Ib21lJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLmpzJztcblxuY2xhc3MgSG9tZURpc3BhdGNoZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgYXBwQmFyVmFsdWU6ICdIT01FJyB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFwcEJhclZhbHVlOiAnSE9NRScgfSk7XG4gICAgbG9nZ2VyKHRoaXMsICdQb3B1cCBvcGVuZWQnKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChuZXdWYWx1ZSkgPT4gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBCYXJWYWx1ZTogbmV3VmFsdWUgfSk7XG4gICAgbG9nZ2VyKHRoaXMsICdTd2l0Y2ggdG8gJyArIG5ld1ZhbHVlKTtcbiAgfTtcblxuICBkaXNwYXRjaFBhZ2UoKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmFwcEJhclZhbHVlKSB7XG4gICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgcmV0dXJuIDxIb21lIC8+O1xuICAgICAgY2FzZSAnU0VUVElOR1MnOlxuICAgICAgICByZXR1cm4gPFNldHRpbmdzIC8+O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyBpcyBhbiBlcnJvciBwYWdlPC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlJY29uKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUpIHtcbiAgICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UoJ1NFVFRJTkdTJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2V0dGluZ3NJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnU0VUVElOR1MnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UoJ0hPTUUnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQ29udGFpbmVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBcnJvd0JhY2tJb3NJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyBpcyBhbiBlcnJvciBwYWdlPC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTbmFja2JhclByb3ZpZGVyXG4gICAgICAgIG1heFNuYWNrPXsyfVxuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5ub3RpZmljYXRpb24sXG4gICAgICAgICAgdmFyaWFudFN1Y2Nlc3M6IGNsYXNzZXMuc3VjY2VzcyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZUNvbnRhaW5lcn0+XG4gICAgICAgICAgPFBhcGVyIHNxdWFyZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRMb2dvVGFic30+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3RhYmJ5LnVzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmVuc2VtYmxlbG9nb30+XG4gICAgICAgICAgICAgICAgey8qPEF2YXRhciovfVxuICAgICAgICAgICAgICAgIHsvKmFsdD1cImxvZ29UYWJieVwiKi99XG4gICAgICAgICAgICAgICAgey8qc3JjPXsnLi4vLi4vYXNzZXRzL3N0YXRpYy9pY29ucy90YWJieV8xMjgucG5nJ30qL31cbiAgICAgICAgICAgICAgICB7LypjbGFzc05hbWU9e2NsYXNzZXMubG9nb0F2YXRhcn0qL31cbiAgICAgICAgICAgICAgICB7LyovPiovfVxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi4vLi4vYXNzZXRzL3N0YXRpYy9pY29ucy90YWJieV8yLnBuZyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvRnVsbH0gLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICB7dGhpcy5kaXNwbGF5SWNvbigpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2Pnt0aGlzLmRpc3BhdGNoUGFnZSgpfTwvZGl2PlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TbmFja2JhclByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZURpc3BhdGNoZXI7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IEhvbWVEaXNwYXRjaGVyIGZyb20gJy4vSG9tZURpc3BhdGNoZXInO1xuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWIvVGFiJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgaG9tZUNvbnRhaW5lcjoge1xuICAgIG1pbldpZHRoOiA0MDAsXG4gIH0sXG4gIHRhYjoge1xuICAgIGNvbG9yOiAnIzAwYjlhYScsXG4gIH0sXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIGxlZnQ6IDE1MCxcbiAgfSxcbiAgZ3JpZExvZ29UYWJzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGFsbFRhYnM6IHtcbiAgICBtYXhXaWR0aDogJzc1JScsXG4gIH0sXG4gIGVuc2VtYmxlbG9nbzoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2xlZnQnLFxuICB9LFxuICBsb2dvQXZhdGFyOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuMjUpLFxuICB9LFxuICBsb2dvRnVsbDoge1xuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMi4yNSksXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMTIpLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLjI1KSxcbiAgfSxcbiAgaWNvbkNvbnRhaW5lcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxLjUpLFxuICB9LFxuICBzdWNjZXNzOiB7XG4gICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg0NWRlZywjODBlMGE3LCAjMDBiOWFhKScsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShIb21lRGlzcGF0Y2hlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5L1R5cG9ncmFwaHknO1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IFR1bmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UdW5lJztcbmltcG9ydCBIZWxwT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hlbHBPdXRsaW5lJztcbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQge1xuICBSRUxBWEVELFxuICBGT0NVU0VELFxuICBDVVNUT01JWkVELFxuICBJTklUX0ZPQ1VTRURfUFJPRklMRSxcbiAgSU5JVF9SRUxBWEVEX1BST0ZJTEUsXG59IGZyb20gJy4uLy4uL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzJztcbmltcG9ydCB7IGNoZWNrU2V0dGluZ3MsIE9QVElNQUxfTlVNQkVSX1RBQlMsIFBPTElDWSwgSU5BQ1RJVkVfUE9MSUNZIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaXNJbnRlZ2VyLCByZW1vdmVJdGVtIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluay9MaW5rJztcblxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvY3VzZWRNb2RlOiBmYWxzZSxcbiAgICAgIHJlbGF4ZWRNb2RlOiBmYWxzZSxcbiAgICAgIGN1c3RvbWl6ZWRCb29sOiBmYWxzZSxcbiAgICAgIHNldHRpbmdzOiBJTklUX1JFTEFYRURfUFJPRklMRSxcbiAgICAgIHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSxcbiAgICAgIGZvY3VzZWRXaW5kb3dJZDogdHJ1ZSxcbiAgICB9O1xuICAgIHRoaXMub25DaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgY29uc3QgY2hhbmdlc1NldHRpbmdzID0gY2hhbmdlc1snc2V0dGluZ3MnXTtcbiAgICAgIGNvbnN0IGNoYW5nZXNQcm9maWxlID0gY2hhbmdlc1snYWN0aXZlX3Byb2ZpbGUnXTtcbiAgICAgIGNvbnN0IGNoYW5nZWRJbmFjdGl2ZVBvbGljeSA9IGNoYW5nZXNbJ2luYWN0aXZlX3BvbGljeSddO1xuICAgICAgaWYgKGNoYW5nZXNTZXR0aW5ncykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZXR0aW5nczogY2hhbmdlc1NldHRpbmdzWyduZXdWYWx1ZSddLFxuICAgICAgICAgIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VzUHJvZmlsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmb2N1c2VkTW9kZTogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IEZPQ1VTRUQsXG4gICAgICAgICAgcmVsYXhlZE1vZGU6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBSRUxBWEVELFxuICAgICAgICAgIGN1c3RvbWl6ZWRCb29sOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gQ1VTVE9NSVpFRCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlZEluYWN0aXZlUG9saWN5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbmFjdGl2ZVBvbGljeTogY2hhbmdlZEluYWN0aXZlUG9saWN5WyduZXdWYWx1ZSddIH0pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2FjdGl2ZV9wcm9maWxlJywgJ3NldHRpbmdzJywgJ2ZvY3VzZWRfd2luZG93X2lkJywgJ2luYWN0aXZlX3BvbGljeSddLCAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBwcm9maWxlID0gcmVzdWx0LmFjdGl2ZV9wcm9maWxlIHx8IFJFTEFYRUQ7XG4gICAgICBjb25zdCBmb2N1c2VkTW9kZSA9IHByb2ZpbGUgPT09IEZPQ1VTRUQ7XG4gICAgICBjb25zdCByZWxheGVkTW9kZSA9IHByb2ZpbGUgPT09IFJFTEFYRUQ7XG4gICAgICBjb25zdCBjdXN0b21pemVkQm9vbCA9IHByb2ZpbGUgPT09IENVU1RPTUlaRUQ7XG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHJlc3VsdC5zZXR0aW5ncyB8fCBJTklUX1JFTEFYRURfUFJPRklMRTtcbiAgICAgIGNvbnN0IGZvY3VzZWRXaW5kb3dJZCA9IHJlc3VsdC5mb2N1c2VkX3dpbmRvd19pZDtcbiAgICAgIGNvbnN0IGluYWN0aXZlUG9saWN5ID0gcmVzdWx0LmluYWN0aXZlX3BvbGljeTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkTW9kZSxcbiAgICAgICAgcmVsYXhlZE1vZGUsXG4gICAgICAgIGN1c3RvbWl6ZWRCb29sLFxuICAgICAgICBzZXR0aW5ncyxcbiAgICAgICAgZm9jdXNlZFdpbmRvd0lkLFxuICAgICAgICBpbmFjdGl2ZVBvbGljeSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnJlbmRlclNhdmVCb29sZWFuKSB7XG4gICAgICB0aGlzLmZvcmNlUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQm9vbENoYW5nZShjaGFuZ2VUeXBlKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QUk9GSUxFJyxcbiAgICAgIHByb2ZpbGU6IGNoYW5nZVR5cGUsXG4gICAgfSk7XG4gICAgaWYgKGNoYW5nZVR5cGUgPT09IFJFTEFYRUQgfHwgY2hhbmdlVHlwZSA9PT0gRk9DVVNFRCkge1xuICAgICAgdGhpcy5ub3RpZnlVc2VyKHRydWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeS5pbmNsdWRlcyh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3dpdGNoKCk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2VSZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVNhdmVQYXJhbWV0ZXJzKCkge1xuICAgIC8vIFRPRE8gQWRkIGZ1bmN0aW9uIHRvIGNoZWNrIGZvciBhbGwgcG90ZW50aWFsIHZhbHVlc1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG4gICAgaWYgKGNoZWNrU2V0dGluZ3ModGhpcy5zdGF0ZS5zZXR0aW5ncykpIHtcbiAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QQVJBTUVURVJTJyxcbiAgICAgICAgc2V0dGluZ3M6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgICB9KTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLm5vdGlmeVVzZXIoc3VjY2Vzcyk7XG4gIH1cblxuICBub3RpZnlVc2VyKHN1Y2Nlc3MpIHtcbiAgICB0aGlzLnByb3BzLmVucXVldWVTbmFja2JhcihzdWNjZXNzID8gJ05ldyBTZXR0aW5ncyBhcmUgc2F2ZWQuJyA6ICdTZXR0aW5ncyBjYW5ub3QgYmUgc2F2ZWQuJywge1xuICAgICAgdmFyaWFudDogc3VjY2VzcyA/ICdzdWNjZXNzJyA6ICdlcnJvcicsXG4gICAgICBhbmNob3JPcmlnaW46IHtcbiAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogNzUwLFxuICAgICAgYXV0b0hpZGVEdXJhdGlvbjogMTUwMCxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZVBhcmFtZXRlcnMgPSAocGF0aCwgcGFyYW1ldGVyKSA9PiAoZXZlbnQpID0+IHtcbiAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLnN0YXRlLnNldHRpbmdzO1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAoaXNJbnRlZ2VyKG5leHRWYWx1ZSkgfHwgbmV4dFZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0dGluZ3NbcGF0aF1bcGFyYW1ldGVyXSA9IG5leHRWYWx1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXR0aW5nczogc2V0dGluZ3MsIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlU3dpdGNoID0gKCkgPT4ge1xuICAgIGxldCBpbmFjdGl2ZVBvbGljeSA9IHRoaXMuc3RhdGUuaW5hY3RpdmVQb2xpY3k7XG5cbiAgICBpZiAoaW5hY3RpdmVQb2xpY3kuaW5jbHVkZXModGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpKSB7XG4gICAgICBpbmFjdGl2ZVBvbGljeSA9IHJlbW92ZUl0ZW0oaW5hY3RpdmVQb2xpY3ksIHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKTtcbiAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZVR5cGU6ICdSRU1PVkVfSU5BQ1RJVkVfUE9MSUNZJyxcbiAgICAgICAgd2luZG93SWQ6IHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluYWN0aXZlUG9saWN5LnB1c2godGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpO1xuICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ0FERF9JTkFDVElWRV9QT0xJQ1knLFxuICAgICAgICB3aW5kb3dJZDogdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluYWN0aXZlUG9saWN5OiBpbmFjdGl2ZVBvbGljeSwgcmVuZGVyU2F2ZUJvb2xlYW46IHRydWUgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dHNQYXJhbWV0ZXJzID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ09wdGltYWwgdGFicyBudW1iZXInLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgICAgIHBhdGg6IFBPTElDWSxcbiAgICAgICAgcGFyYW1ldGVyOiBPUFRJTUFMX05VTUJFUl9UQUJTLFxuICAgICAgICBpbnB1dFByb3BzOiB7IG1pbjogJzEnLCBtYXg6ICcxMDAnLCBzdGVwOiAnMScgfSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBsaXN0SXRlbXNQYXJhbWV0ZXJzID0gaW5wdXRzUGFyYW1ldGVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVBhcmFtZXRlcnMoaXRlbS5wYXRoLCBpdGVtLnBhcmFtZXRlcil9XG4gICAgICAgIHZhbHVlPXtpdGVtLnNvdXJjZVtpdGVtLnBhdGhdW2l0ZW0ucGFyYW1ldGVyXX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIG9uS2V5VXA9eyhldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykgdGhpcy5oYW5kbGVTYXZlUGFyYW1ldGVycygpO1xuICAgICAgICB9fVxuICAgICAgICBpbnB1dFByb3BzPXtpdGVtLmlucHV0UHJvcHN9XG4gICAgICAvPlxuICAgICkpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCAmJiB0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5XG4gICAgICAgICAgICAgICAgICA/ICF0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5LmluY2x1ZGVzKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKVxuICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3dpdGNofVxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zd2l0Y2hXcmFwcGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN3aXRjaENvbnRhaW5lcn1cbiAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkVuYWJsZSBvbiB0aGlzIHdpbmRvdzwvVHlwb2dyYXBoeT59XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmludHJvZHVjdGlvbkJsb2NrfT5cbiAgICAgICAgICA8VHVuZUljb24gLz5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFyYW1ldGVyc1RpdGxlfT5TZWxlY3QgdGhlIGJlc3QgbW9kZSBvciBjdXN0b21pemUgaXQ8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtjbGFzc2VzLnNldHRpbmdzV3JhcHBlcn0+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmZvY3VzZWRNb2RlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoRk9DVVNFRCl9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveFdyYXBwZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkZvY3VzPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnJlbGF4ZWRNb2RlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoUkVMQVhFRCl9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveFdyYXBwZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlJlbGF4PC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9taXplV3JhcHBlcn0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVCb29sQ2hhbmdlKENVU1RPTUlaRUQpfVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrYm94V3JhcHBlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+Q3VzdG9taXplPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0Qm9vbGVhbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdGFiYnkudXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgPEhlbHBPdXRsaW5lSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaGVscEljb259IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NCbG9ja30+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcmVxdWlyZWQgZnVsbFdpZHRoPlxuICAgICAgICAgICAgICB7bGlzdEl0ZW1zUGFyYW1ldGVyc31cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIGhpZGRlbiBrZXk9XCJoaWRkZW4tdGV4dGZpZWxkXCIgZGlzYWJsZWQgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZGFyeUJ1dHRvbn1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiAvL3t0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sID8gJ291dGxpbmVkJyA6ICdzZWNvbmRhcnknfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTbmFja2JhcihTZXR0aW5ncyk7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vU2V0dGluZ3MnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHNldHRpbmdzV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIG1hcmdpblRvcDogNSxcbiAgICBtYXJnaW5MZWZ0OiA0NyxcbiAgICBtYXJnaW5SaWdodDogMjAsXG4gIH0sXG4gIHNlY29uZGFyeUJ1dHRvbjoge1xuICAgIG1hcmdpblRvcDogMTgsXG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcblxuICAgIG1heFdpZHRoOiAyMCxcbiAgfSxcblxuICBub3RpZmljYXRpb246IHtcbiAgICBtYXhXaWR0aDogMTUwLFxuICB9LFxuICBpbnRyb2R1Y3Rpb25CbG9jazoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3N0YXJ0JyxcbiAgICBtYXJnaW5MZWZ0OiA3LFxuICB9LFxuICBwYXJhbWV0ZXJzVGl0bGU6IHtcbiAgICAvL2ZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTcsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gICAgbWFyZ2luTGVmdDogMTYsXG4gIH0sXG4gIHNldHRpbmdzQmxvY2s6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtYXJnaW5MZWZ0OiAzMixcbiAgICBtYXJnaW5Ub3A6IDQsXG4gIH0sXG4gIGZpcnN0Qm9vbGVhbnM6IHtcbiAgICBtYXhXaWR0aDogJzM2JScsXG4gICAgbWF4SGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5Ub3A6IDUsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICB9LFxuICBzdHlsZUxhYmVsOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICB9LFxuICBjaGVja2JveFdyYXBwZXI6IHtcbiAgICBwb2ludGVyRXZlbnRzOiAnYXV0bycsXG4gIH0sXG4gIHN3aXRjaENvbnRhaW5lcjoge1xuICAgIG1heEhlaWdodDogMjAsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIH0sXG4gIHN3aXRjaFdyYXBwZXI6IHtcbiAgICBwb2ludGVyRXZlbnRzOiAnYXV0bycsXG4gIH0sXG4gIHRleHRGaWVsZDoge1xuICAgIG1heFdpZHRoOiAnODUlJyxcbiAgfSxcbiAgY3VzdG9taXplV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3N0YXJ0JyxcbiAgICBhbGlnbkl0ZW1zOiAnc3RhcnQnLFxuICB9LFxuICBoZWxwSWNvbjoge1xuICAgIGNvbG9yOiAnI2U1NWMwMCcsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIG1hcmdpbkJvdHRvbTogOCxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFNldHRpbmdzKTtcbiIsImV4cG9ydCBjb25zdCBPUFRJTUFMX05VTUJFUl9UQUJTID0gJ3RhcmdldF90YWJzJztcbmV4cG9ydCBjb25zdCBQT0xJQ1kgPSAncG9saWN5JztcbmV4cG9ydCBjb25zdCBJTkFDVElWRV9QT0xJQ1kgPSAnaW5hY3RpdmVfcG9saWN5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgaWYgKHNldHRpbmdzW1BPTElDWV1bT1BUSU1BTF9OVU1CRVJfVEFCU10gJiYgc2V0dGluZ3NbUE9MSUNZXVtPUFRJTUFMX05VTUJFUl9UQUJTXSA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oYXJyLCB2YWx1ZSkge1xuICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKHZhbHVlKTtcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuIiwiY29uc3QgU0NPUkVSID0gJ3YxJzsgLy8gb25seSBkZWZhdWx0IGltcGxlbWVudGVkXG5jb25zdCBNQVhJTVVNX1NDT1JFID0gMTA7IC8vIG1heCBzY29yZSBmb3Igc2NvcmVyXG5jb25zdCBNQVhJTVVNX0hJU1RPUllfU0laRSA9IDEwMDA7IC8vIG1heCBraWxsZWQgdGFiIGhpc3RvcnkgaW4gbWVtb3J5XG5jb25zdCBTRVNTSU9OU19USU1FT1VUX01TID0gODAwOyAvLyB3aGVuIGEgdGFiIGlzIGtpbGxlZCB3ZSBuZWVkIGEgdGltZW91dCB0byByZXRyaWV2ZSB0aGUgc2Vzc2lvbklkXG5jb25zdCBTRVNTSU9OU19NQVhfRlVaWllfREVMVEFfTVMgPSAxMDAwICogNTsgLy8gdGltZSBpcyBmdXp6eSBtYXRjaGVkIHRvIHJldGlyZXZlIHRoZSBjb3JyZWN0IHNlc3Npb25JRCwgc2hvdWxkIGJlIGhpZ2hlciB0aGFuIFNFU1NJT05TX1RJTUVPVVRfTVNcbmNvbnN0IE1JTl9BQ1RJVkVfREVCT1VOQ0UgPSAxMDAwICogMjsgLy8gbWluaW11bSBhY3RpdmUgcmVhZGluZyBvbiBhIHRhYiB0byBiZSBjb3VudGVkIGFzIHZhbGlkICd1c2VmdWwnIHRpbWVcbmNvbnN0IE1BWF9BQ1RJVkVfREVCT1VOQ0UgPSAxMDAwICogNjAgKiA1OyAvLyBtYXhpbXVtIHRpbWUgd2l0aG91dCBhbnkgdXNlciBpbnB1dCBiZWZvcmUgaXQgaXMgY29uc2lkZXJlZCBpZGxlZCwgbXVzdCBiZSBoaWdoZXIgdGhhbiAxNXNlY1xuXG5leHBvcnQge1xuICBTQ09SRVIsXG4gIE1BWElNVU1fU0NPUkUsXG4gIE1BWElNVU1fSElTVE9SWV9TSVpFLFxuICBTRVNTSU9OU19USU1FT1VUX01TLFxuICBTRVNTSU9OU19NQVhfRlVaWllfREVMVEFfTVMsXG4gIE1JTl9BQ1RJVkVfREVCT1VOQ0UsXG4gIE1BWF9BQ1RJVkVfREVCT1VOQ0UsXG59O1xuIiwiY29uc3QgUkVMQVhFRCA9ICdyZWxheGVkJztcbmNvbnN0IEZPQ1VTRUQgPSAnZm9jdXNlZCc7XG5jb25zdCBDVVNUT01JWkVEID0gJ2N1c3RvbWl6ZWQnO1xudmFyIElOSVRfUkVMQVhFRF9QUk9GSUxFID0ge307XG52YXIgSU5JVF9GT0NVU0VEX1BST0ZJTEUgPSB7fTtcblxuaWYgKEVOViA9PT0gJ2RlYnVnJykge1xuICBJTklUX1JFTEFYRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMSAqIDEwMDAsIC8vIG1pbmltdW0gdGltZSBiZXR3ZWVuIDIgZnVsbCBzdGF0cyB1cGRhdGUgZm9yIGFsbCB0YWJzXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogNSAqIDEwMDAsIC8vIG1pbmltdW0gdGltZSBiZXR3ZWVuIDIgZnVsbCB0YWIgZ2FyYmFnZSBjb2xsZWN0aW9uXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIHRhcmdldF90YWJzOiAxMiwgLy8gdGFiYnkgd2lsbCBzdG9wIGNsb3NpbmcgdGFicyB3aGVuIHdlIGhhdmUgbGVzcyB0aGFuIHRhcmdldF90YWJzIG9wZW5cbiAgICAgIGRlY2F5OiAwLjgsIC8vIHdoZW4gdGhlIG51bWJlciBvZiB0YWIgaW5jcmVhc2VzLCB0YWJieSB3aWxsIGRlbGV0ZSBtb3JlIHRhYnNcbiAgICAgIG1pbl90aW1lOiAzICogMTAwMCwgLy8gVGFiYnkgd2lsbCBraWxsIGFib3V0IDEgdGFiIHBlciBtaW5fdGltZSAoZGVwZW5kaW5nIG9uIGFjdGl2YXRpb24gcnVsZXMpXG5cbiAgICAgIC8vIElHTk9SRUQgdGFic1xuICAgICAgYWN0aXZlOiBmYWxzZSwgLy8gdGhlc2Ugc3RhdHVzIGFyZSBhYnNvbHV0ZWx5IHByb3RlY3RlZCB0YWJzOiB0aGVzZSBhcmUgaWdub3JlZCBhbmQgZG8gbm90IGNvdW50IGFzIHRhYnMuXG4gICAgICBwaW5uZWQ6IHRydWUsXG4gICAgICBhdWRpYmxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHNjb3Jlcjoge1xuICAgICAgLy8gUFJPVEVDVEVEIHRhYnNcbiAgICAgIGFjdGl2ZTogdHJ1ZSwgLy8gdGhlc2UgdGFicyB3aWxsIGJlIGdpdmVuIGFic29sdXRlIG1heGltdW0gc2NvcmUgKyBleHRlbmRlZCBwcm90ZWN0aW9uXG4gICAgICBwaW5uZWQ6IHRydWUsIC8vIHdoZW4gdGhlIHN0YXR1cyBpcyBsb3N0LlxuICAgICAgYXVkaWJsZTogdHJ1ZSxcblxuICAgICAgbWluX2FjdGl2ZTogNSAqIDEwMDAsIC8vIG1pbmltdW0gdGltZSBhIHRhYiBoYXMgdG8gZXhpc3QgYmVmb3JlIGJlaW5nIHNjb3JlZFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDEwMDAsIC8vIEEgcmVzdG9yZWQgdGFiIGlzIHByb3RlY3RlZCBmb3IgdGhpcyBsb25nXG4gICAgICBjYWNoZWRfZGVjYXk6IDAuMiwgLy8gSW4gY3VycmVudCBzY29yZXIsIHRoZSBjYWNoZSBzY29yZSBpcyBhZGRlZCB0byB0aGUgY3VycmVudCBzY29yZSB3aXRoIGEgZGVjcmVhc2luZyBmYWN0b3JcbiAgICB9LFxuICB9O1xuXG4gIElOSVRfRk9DVVNFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxICogMTAwMCxcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiA1ICogMTAwMCxcbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgdGFyZ2V0X3RhYnM6IDUsXG4gICAgICBkZWNheTogMC44LFxuICAgICAgbWluX3RpbWU6IDMgKiAxMDAwLFxuXG4gICAgICAvLyBJR05PUkVEIHRhYnNcbiAgICAgIGFjdGl2ZTogZmFsc2UsIC8vIHRoZXNlIHN0YXR1cyBhcmUgYWJzb2x1dGVseSBwcm90ZWN0ZWQgdGFiczogdGhlc2UgYXJlIGlnbm9yZWQgYW5kIGRvIG5vdCBjb3VudCBhcyB0YWJzLlxuICAgICAgcGlubmVkOiB0cnVlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIC8vIFBST1RFQ1RFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHRhYnMgd2lsbCBiZSBnaXZlbiBhYnNvbHV0ZSBtYXhpbXVtIHNjb3JlICsgZXh0ZW5kZWQgcHJvdGVjdGlvblxuICAgICAgcGlubmVkOiB0cnVlLCAvLyB3aGVuIHRoZSBzdGF0dXMgaXMgbG9zdC5cbiAgICAgIGF1ZGlibGU6IHRydWUsXG5cbiAgICAgIG1pbl9hY3RpdmU6IDUgKiAxMDAwLFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDEwMDAsXG4gICAgICBjYWNoZWRfZGVjYXk6IDAuMixcbiAgICB9LFxuICB9O1xufSBlbHNlIHtcbiAgSU5JVF9SRUxBWEVEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEwICogMTAwMCxcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiAxMCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgdGFyZ2V0X3RhYnM6IDEyLFxuICAgICAgZGVjYXk6IDAuOCxcbiAgICAgIG1pbl90aW1lOiAzICogMTAwMCxcblxuICAgICAgLy8gSUdOT1JFRCB0YWJzXG4gICAgICBhY3RpdmU6IGZhbHNlLCAvLyB0aGVzZSBzdGF0dXMgYXJlIGFic29sdXRlbHkgcHJvdGVjdGVkIHRhYnM6IHRoZXNlIGFyZSBpZ25vcmVkIGFuZCBkbyBub3QgY291bnQgYXMgdGFicy5cbiAgICAgIHBpbm5lZDogdHJ1ZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICAvLyBQUk9URUNURUQgdGFic1xuICAgICAgYWN0aXZlOiB0cnVlLCAvLyB0aGVzZSB0YWJzIHdpbGwgYmUgZ2l2ZW4gYWJzb2x1dGUgbWF4aW11bSBzY29yZSArIGV4dGVuZGVkIHByb3RlY3Rpb25cbiAgICAgIHBpbm5lZDogdHJ1ZSwgLy8gd2hlbiB0aGUgc3RhdHVzIGlzIGxvc3QuXG4gICAgICBhdWRpYmxlOiB0cnVlLFxuXG4gICAgICBtaW5fYWN0aXZlOiA1ICogNjAgKiAxMDAwLFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDYwICogMTAwMCxcbiAgICAgIGNhY2hlZF9kZWNheTogMC4yLFxuICAgIH0sXG4gIH07XG5cbiAgSU5JVF9GT0NVU0VEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEwICogMTAwMCxcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiAxMCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgdGFyZ2V0X3RhYnM6IDUsXG4gICAgICBkZWNheTogMC44LFxuICAgICAgbWluX3RpbWU6IDMgKiAxMDAwLFxuXG4gICAgICAvLyBJR05PUkVEIHRhYnNcbiAgICAgIGFjdGl2ZTogZmFsc2UsIC8vIHRoZXNlIHN0YXR1cyBhcmUgYWJzb2x1dGVseSBwcm90ZWN0ZWQgdGFiczogdGhlc2UgYXJlIGlnbm9yZWQgYW5kIGRvIG5vdCBjb3VudCBhcyB0YWJzLlxuICAgICAgcGlubmVkOiB0cnVlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIC8vIFBST1RFQ1RFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHRhYnMgd2lsbCBiZSBnaXZlbiBhYnNvbHV0ZSBtYXhpbXVtIHNjb3JlICsgZXh0ZW5kZWQgcHJvdGVjdGlvblxuICAgICAgcGlubmVkOiB0cnVlLCAvLyB3aGVuIHRoZSBzdGF0dXMgaXMgbG9zdC5cbiAgICAgIGF1ZGlibGU6IHRydWUsXG5cbiAgICAgIG1pbl9hY3RpdmU6IDUgKiA2MCAqIDEwMDAsXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogNjAgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsXG4gICAgfSxcbiAgfTtcbn1cblxuT2JqZWN0LmZyZWV6ZShJTklUX0ZPQ1VTRURfUFJPRklMRSk7XG5PYmplY3QuZnJlZXplKElOSVRfUkVMQVhFRF9QUk9GSUxFKTtcblxuZXhwb3J0IHsgUkVMQVhFRCwgRk9DVVNFRCwgQ1VTVE9NSVpFRCwgSU5JVF9GT0NVU0VEX1BST0ZJTEUsIElOSVRfUkVMQVhFRF9QUk9GSUxFIH07XG4iLCJpbXBvcnQgKiBhcyBwc2wgZnJvbSAncHNsJztcbmltcG9ydCB7IE1BWF9BQ1RJVkVfREVCT1VOQ0UgfSBmcm9tICcuLi9jb25maWcvZW52LmpzJztcblxuY29uc3QgbG9nZ2VyID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgaWYgKEVOViA9PT0gJ2RlYnVnJyB8fCBFTlYgPT09ICdkZXYnKSB7XG4gICAgbGV0IGRlZmF1bHRfZm9ybWF0ID0gWydmb250LXdlaWdodDppbml0aWFsOyBjb2xvcjpibGFjazsnXTtcbiAgICBsZXQgcHJlID0gJyVjJyArIG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSArICclYyc7XG4gICAgbGV0IG9wdGlvbnMgPSBbJ2ZvbnQtd2VpZ2h0OmxpZ2h0ZXI7IGNvbG9yOkxpZ2h0U2xhdGVHcmV5OyddO1xuICAgIG9wdGlvbnMucHVzaChkZWZhdWx0X2Zvcm1hdCk7XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJlICs9ICcgfCAlYycgKyBhcmdzWzBdLmNvbnN0cnVjdG9yLm5hbWUgKyAnJWMgfCAnO1xuICAgICAgcHJlICs9IGFyZ3NbMV07XG4gICAgICBvcHRpb25zLnB1c2goJ2NvbG9yOiMxZGE4N2M7IGZvbnQtd2VpZ2h0OmJvbGRlcicpO1xuICAgICAgb3B0aW9ucy5wdXNoKGRlZmF1bHRfZm9ybWF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlICs9ICcgfCAnICsgYXJnc1swXTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJlLCAuLi5vcHRpb25zKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gY29weShvYmopIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbmZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmZ1bmN0aW9uIGdldERvbWFpbihzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHNsLnBhcnNlKG5ldyBVUkwoc3RyKS5ob3N0bmFtZSkuZG9tYWluO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0b3JhZ2VTZXQoYXJncykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChhcmdzLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdG9yYWdlR2V0KGFyZ3MpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoYXJncywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIC9eXFxkKyQvLnRlc3QodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZXRBbGxSZWFkQmFkZ2UoKSB7XG4gIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6ICcnIH0pOyAvLyA8LS0gc2V0IHRleHQgdG8gJycgdG8gcmVtb3ZlIHRoZSBiYWRnZVxufVxuXG5mdW5jdGlvbiBzZXRVbnJlYWRCYWRnZSgpIHtcbiAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3IoeyBjb2xvcjogWzIyOSwgOTIsIDAsIDEyOF0gfSk7XG4gIGNocm9tZS5icm93c2VyQWN0aW9uLmdldEJhZGdlVGV4dCh7fSwgZnVuY3Rpb24gKGJhZGdlVGV4dCkge1xuICAgIGxldCBjb3VudGVyID0gMTtcbiAgICBpZiAoaXNJbnRlZ2VyKGJhZGdlVGV4dCkpIHtcbiAgICAgIGNvdW50ZXIgPSBwYXJzZUludChiYWRnZVRleHQpICsgMTtcbiAgICB9XG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogYCR7Y291bnRlcn1gIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNVc2VyQWN0aXZlKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5pZGxlLnF1ZXJ5U3RhdGUoTWF0aC5yb3VuZChNQVhfQUNUSVZFX0RFQk9VTkNFIC8gMTAwMCksIChzdGF0dXMpID0+IHtcbiAgICAgIGlmIChzdGF0dXMgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cykge1xuICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ2dlcihcIkNvdWxkbid0IGNoZWNrIHVzZXIgYWN0aXZpdHkuXCIpO1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZVJlc2V0KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCAoZCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKE9iamVjdC5rZXlzKGQpLCAoKSA9PiB7XG4gICAgICAgIGxvZ2dlcignTWVtb3J5IGZsdXNoZWQuJyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdEZvY3VzZWRXaW5kb3coKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoeyBwb3B1bGF0ZTogZmFsc2UsIHdpbmRvd1R5cGVzOiBbJ25vcm1hbCddIH0sIChkKSA9PiByZXNvbHZlKGQuaWQpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0oYXJyLCB2YWx1ZSkge1xuICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKHZhbHVlKTtcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5sb2dnZXIoJ1N0YXJ0aW5nIGluICcgKyBFTlYgKyAnIGVudi4nKTtcbmV4cG9ydCB7XG4gIGxvZ2dlcixcbiAgY29weSxcbiAgdGltZW91dCxcbiAgZ2V0RG9tYWluLFxuICBzdG9yYWdlR2V0LFxuICBzdG9yYWdlU2V0LFxuICBzZXRBbGxSZWFkQmFkZ2UsXG4gIHNldFVucmVhZEJhZGdlLFxuICBpc0ludGVnZXIsXG4gIGlzVXNlckFjdGl2ZSxcbiAgc3RvcmFnZVJlc2V0LFxuICBnZXRMYXN0Rm9jdXNlZFdpbmRvdyxcbiAgcmVtb3ZlSXRlbSxcbn07XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhYm9vdHN0cmFwLWNzcy1vbmx5L2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b2RvLWxpc3QtY29udGFpbmVyIHtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jYXJkLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEpO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxYjllNzQ7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGNvbG9yOiAjMWI5ZTc0O1xcbiAgYm9yZGVyLWNvbG9yOiAjMWI5ZTc0O1xcbn1cXG5cXG4uYm9sZC10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbjpmb2N1cyB7b3V0bGluZTowICFpbXBvcnRhbnQ7fVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwb3B1cFwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9hcHAvcG9wdXAuanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BzbF9pbmRleF9qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbWF0ZXJpYWwtdWlfY29yZV9MaW5rX0xpbmtfanMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfVHlwb2dyYXBoeV9ULWUyOTU4MFwiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9ICgpID0+IHtcblxufTtcbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdH1cblx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG5mdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cdHZhciBydW50aW1lID0gZGF0YVszXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufTtcblxudmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gfHwgW107XG52YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuanNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG52YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=