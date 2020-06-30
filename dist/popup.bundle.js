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
const SHELL_RESTORE = 'SHELL_RESTORE';
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

  removeItem(key, e) {
    let items = this.state.closed_history.reverse();

    if (e.ctrlKey || e.metaKey) {
      // metaKey is cmd key on mac
      this.restoreTab(items, key, SHELL_RESTORE);
    } else {
      this.restoreTab(items, key, RESTORE);
    }
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
      uuid: restoredTab.uuid
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
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/FormGroup.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/Switch.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Tune */ "./node_modules/@material-ui/icons/Tune.js");
/* harmony import */ var _material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/HelpOutline */ "./node_modules/@material-ui/icons/HelpOutline.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/Fade.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/settingsProfiles.js */ "./src/config/settingsProfiles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/components/utils.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utils */ "./src/services/utils.js");
/* harmony import */ var _material_ui_core_Link_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Link/Link */ "./node_modules/@material-ui/core/Link/Link.js");
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
      settings: _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.INIT_FOCUSED_PROFILE,
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
      const profile = result.active_profile || _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.FOCUSED;
      const focusedMode = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.FOCUSED;
      const relaxedMode = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.RELAXED;
      const customizedBool = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.CUSTOMIZED;
      const settings = result.settings || _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.INIT_FOCUSED_PROFILE;
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
      className: classes.mainBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    }, "Select your profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Link_Link__WEBPACK_IMPORTED_MODULE_10__.default, {
      href: "https://www.tabby.us/setup#setup_step4",
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.helpIcon
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.settingsWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__.default, {
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
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__.default, {
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
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_13__.default, {
        checked: this.state.customizedBool,
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.CUSTOMIZED),
        color: "secondary",
        className: classes.checkboxWrapper
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
        className: classes.styleLabel
      }, "Customize"),
      className: classes.firstBooleans
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
      variant: "outlined",
      onClick: () => this.handleSaveParameters()
    }, "Save"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__.default, {
      variant: "text",
      onClick: this.handleOpen,
      className: classes.tipsButton
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: classes.styleLabelTips
    }, "Tips"), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_16__.default //disablePortal={true}
    , {
      className: classes.modal,
      open: this.state.openModal,
      onClose: this.handleClose,
      closeAfterTransition: true,
      BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_17__.default,
      BackdropProps: {
        timeout: 750,
        invisible: true
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_18__.default, {
      in: this.state.openModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_19__.default, {
      borderRadius: 6,
      className: classes.paper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.firstBlockModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.secondEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: classes.styleLabel
    }, "Protect a tab"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.lastEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: '../../assets/static/icons/right_click.png',
      className: classes.leftClickWrapper
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: classes.styleLabel
    }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: classes.styleLabel
    }, "Pin"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.secondEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: classes.styleLabel
    }, "Reopen multiple tabs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.secondEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: classes.styleLabel
    }, "Ctrl"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: classes.styleLabel
    }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: '../../assets/static/icons/left_click.png',
      className: classes.leftClickWrapper
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: classes.styleLabel
    }, "How does tabby work?"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: classes.styleLabelNext
    }, "tabby will not remove tabs right after their creation.", ' '), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: classes.styleLabelNext
    }, "tabby takes well-thought-out decisions automatically."), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.footerModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Link_Link__WEBPACK_IMPORTED_MODULE_10__.default, {
      href: "https://tabby.us/faq",
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: classes.styleLabelTips
    }, "FAQ available here"), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: classes.styleLabelTips
    }, "tabby ", chrome.runtime.getManifest().version), ' ')))));
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
    fontSize: 18,
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(0.5)
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
/*! export storageGet [provided] [used] [could be renamed] */
/*! export storageReset [provided] [used] [could be renamed] */
/*! export storageSet [provided] [used] [could be renamed] */
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
/* harmony export */   "storageGet": () => /* binding */ storageGet,
/* harmony export */   "storageSet": () => /* binding */ storageSet,
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
/******/ 			["./src/app/popup.js","vendors-node_modules_psl_index_js","vendors-node_modules_material-ui_core_Link_Link_js-node_modules_material-ui_core_Typography_T-ad1f19"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9lbnYuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9zZXJ2aWNlcy91dGlscy5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzP2VhNWQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiQXBwIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUkVTVE9SRSIsIlNIRUxMX1JFU1RPUkUiLCJORVhUIiwiUkVNT1ZFRCIsIkNMT1NFRF9ISVNUT1JZIiwiTlVNQkVSX0hPVVJTIiwiVElNRV9QRVJJT0RfVE9fQ09OU0lERVIiLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZXRBbGxSZWFkQmFkZ2UiLCJzdGF0ZSIsInJlbmRlclNhdmVCb29sZWFuIiwib25DaGFuZ2VkQ2FsbGJhY2siLCJjaGFuZ2VzIiwiY2hhbmdlc0Nsb3NlZEhpc3RvcnkiLCJzZXRTdGF0ZSIsImNsb3NlZF9oaXN0b3J5IiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwicmVzdWx0IiwibmV4dExpc3QiLCJvbkNoYW5nZWQiLCJhZGRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlTGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJmb3JjZVJlbmRlciIsInJlbW92ZUl0ZW0iLCJrZXkiLCJlIiwiaXRlbXMiLCJyZXZlcnNlIiwiY3RybEtleSIsIm1ldGFLZXkiLCJyZXN0b3JlVGFiIiwibWVzc2FnZVR5cGUiLCJyZXN0b3JlZFRhYiIsInNwbGljZSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsInV1aWQiLCJmaWx0ZXJMaXN0Iiwic2VsZWN0ZWRMaXN0Iiwibm93IiwiRGF0ZSIsImZpbHRlciIsIml0ZW0iLCJNYXRoIiwibWF4Iiwic3RhdGlzdGljcyIsInVwZGF0ZWRfYXQiLCJsYXN0X2FjdGl2ZV90aW1lc3RhbXAiLCJyZW5kZXJMaXN0IiwibGlzdFRvQmVSZW5kZXJlZCIsImNsYXNzZXMiLCJNQVhfTEVOR1RIX1RJVExFIiwibWFwIiwid2Vic2l0ZSIsImkiLCJkZWxldGlvblRpbWUiLCJkZWxldGlvbl90aW1lIiwiZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUiLCJ0b1RpbWVTdHJpbmciLCJzcGxpdCIsImhvdXJzX2RlbGV0aW9uIiwibWludXRlc19kZWxldGlvbiIsInRpdGxlIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY29uY2F0IiwidHJ1bmNhdGVkX3VybCIsInVybCIsImlzTmV4dCIsImZpbHRlcmVkTGlzdCIsImxpc3RJdGVtIiwiaW5kZXgiLCJzdHlsZSIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsImF2YXRhckNvbnRhaW5lciIsInByaW1hcnkiLCJwcmltYXJ5VGV4dENvbnRhaW5lciIsInNlY29uZGFyeVRleHRDb250YWluZXIiLCJpdGVtVGV4dCIsImJ1dHRvbkNvbnRhaW5lciIsInJlbW92ZU5leHRJdGVtIiwiYnV0dG9uIiwibGlzdFdlYnNpdGVzIiwiZ3JlZW5UaXRsZSIsInN1YlRleHQiLCJtaW4iLCJyZW5kZXIiLCJudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIiLCJib2xkTnVtYmVyIiwidGV4dE9uUmlnaHQiLCJ0b3BUZXh0IiwibWlkZGxlVGV4dCIsImZvb3RlckNvbnRhaW5lciIsImljb25Db250YWluZXIiLCJsaW5rVG9Gb3JtIiwic3R5bGVzIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtYXhIZWlnaHQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsImZvbnRTaXplIiwiYm9yZGVyQm90dG9tIiwibWF4V2lkdGgiLCJjb2xvciIsIm1hcmdpblRvcCIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0Iiwib3ZlcmZsb3dXcmFwIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJtaW5XaWR0aCIsIm1hcmdpblJpZ2h0Iiwid2l0aFN0eWxlcyIsIkhvbWVEaXNwYXRjaGVyIiwibmV3VmFsdWUiLCJhcHBCYXJWYWx1ZSIsImxvZ2dlciIsImRpc3BhdGNoUGFnZSIsImRpc3BsYXlJY29uIiwiaGFuZGxlQ2hhbmdlIiwicm9vdCIsIm5vdGlmaWNhdGlvbiIsInZhcmlhbnRTdWNjZXNzIiwic3VjY2VzcyIsImhvbWVDb250YWluZXIiLCJncmlkTG9nb1RhYnMiLCJlbnNlbWJsZWxvZ28iLCJsb2dvRnVsbCIsInRhYiIsImxlZnQiLCJhbGxUYWJzIiwibG9nb0F2YXRhciIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsIlNldHRpbmdzIiwicGF0aCIsInBhcmFtZXRlciIsImV2ZW50Iiwic2V0dGluZ3MiLCJuZXh0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlzSW50ZWdlciIsImluYWN0aXZlUG9saWN5IiwiaW5jbHVkZXMiLCJmb2N1c2VkV2luZG93SWQiLCJ3aW5kb3dJZCIsInB1c2giLCJvcGVuTW9kYWwiLCJmb2N1c2VkTW9kZSIsInJlbGF4ZWRNb2RlIiwiY3VzdG9taXplZEJvb2wiLCJJTklUX0ZPQ1VTRURfUFJPRklMRSIsImNoYW5nZXNTZXR0aW5ncyIsImNoYW5nZXNQcm9maWxlIiwiY2hhbmdlZEluYWN0aXZlUG9saWN5IiwiRk9DVVNFRCIsIlJFTEFYRUQiLCJDVVNUT01JWkVEIiwicHJvZmlsZSIsImFjdGl2ZV9wcm9maWxlIiwiZm9jdXNlZF93aW5kb3dfaWQiLCJpbmFjdGl2ZV9wb2xpY3kiLCJoYW5kbGVCb29sQ2hhbmdlIiwiY2hhbmdlVHlwZSIsIm5vdGlmeVVzZXIiLCJoYW5kbGVTd2l0Y2giLCJoYW5kbGVTYXZlUGFyYW1ldGVycyIsImNoZWNrU2V0dGluZ3MiLCJlbnF1ZXVlU25hY2tiYXIiLCJ2YXJpYW50IiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiYXV0b0hpZGVEdXJhdGlvbiIsImlucHV0c1BhcmFtZXRlcnMiLCJsYWJlbCIsInNvdXJjZSIsIlBPTElDWSIsIk9QVElNQUxfTlVNQkVSX1RBQlMiLCJpbnB1dFByb3BzIiwic3RlcCIsImxpc3RJdGVtc1BhcmFtZXRlcnMiLCJoYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzIiwidGV4dEZpZWxkIiwibWFpbkJsb2NrIiwic3dpdGNoV3JhcHBlciIsInN3aXRjaENvbnRhaW5lciIsInN0eWxlTGFiZWwiLCJpbnRyb2R1Y3Rpb25CbG9jayIsInBhcmFtZXRlcnNUaXRsZSIsImhlbHBJY29uIiwic2V0dGluZ3NXcmFwcGVyIiwiY2hlY2tib3hXcmFwcGVyIiwiZmlyc3RCb29sZWFucyIsImN1c3RvbWl6ZVdyYXBwZXIiLCJzZXR0aW5nc0Jsb2NrIiwic2Vjb25kYXJ5QnV0dG9uIiwiaGFuZGxlT3BlbiIsInRpcHNCdXR0b24iLCJzdHlsZUxhYmVsVGlwcyIsIm1vZGFsIiwiaGFuZGxlQ2xvc2UiLCJCYWNrZHJvcCIsInRpbWVvdXQiLCJpbnZpc2libGUiLCJwYXBlciIsImZpcnN0QmxvY2tNb2RhbCIsInNlY29uZEVuc2VtYmxlIiwibGFzdEVuc2VtYmxlIiwibGVmdENsaWNrV3JhcHBlciIsInN0eWxlTGFiZWxOZXh0IiwiZm9vdGVyTW9kYWwiLCJnZXRNYW5pZmVzdCIsInZlcnNpb24iLCJ3aXRoU25hY2tiYXIiLCJwb2ludGVyRXZlbnRzIiwibWFyZ2luQm90dG9tIiwibWluSGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiZHJhd2VyIiwicGFkZGluZyIsIm9wYWNpdHkiLCJib3hDdHJsIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJJTkFDVElWRV9QT0xJQ1kiLCJhcnIiLCJpbmRleE9mIiwiU0NPUkVSIiwiTUFYSU1VTV9TQ09SRSIsIk1BWElNVU1fSElTVE9SWV9TSVpFIiwiU0VTU0lPTlNfVElNRU9VVF9NUyIsIlNFU1NJT05TX1JFVFJJRVMiLCJTRVNTSU9OU19NQVhfRlVaWllfREVMVEFfTVMiLCJNSU5fQUNUSVZFX0RFQk9VTkNFIiwiTUFYX0FDVElWRV9ERUJPVU5DRSIsIklOSVRfUkVMQVhFRF9QUk9GSUxFIiwiRU5WIiwibWVtb3J5IiwiY2FjaGVfc2l6ZSIsIm1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlIiwibWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3IiLCJwb2xpY3kiLCJ0YXJnZXRfdGFicyIsImRlY2F5IiwibWluX3RpbWUiLCJhY3RpdmUiLCJwaW5uZWQiLCJhdWRpYmxlIiwic2NvcmVyIiwibWluX2FjdGl2ZSIsInByb3RlY3Rpb25fdGltZSIsImNhY2hlZF9kZWNheSIsIk9iamVjdCIsImZyZWV6ZSIsImFyZ3MiLCJkZWZhdWx0X2Zvcm1hdCIsInByZSIsInRvVVRDU3RyaW5nIiwib3B0aW9ucyIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY29weSIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZ2V0RG9tYWluIiwic3RyIiwicHNsIiwiVVJMIiwiaG9zdG5hbWUiLCJkb21haW4iLCJzdG9yYWdlU2V0IiwicmVqZWN0Iiwic2V0Iiwic3RvcmFnZUdldCIsImRhdGEiLCJ0ZXN0IiwiYnJvd3NlckFjdGlvbiIsInNldEJhZGdlVGV4dCIsInRleHQiLCJzZXRVbnJlYWRCYWRnZSIsInNldEJhZGdlQmFja2dyb3VuZENvbG9yIiwiZ2V0QmFkZ2VUZXh0IiwiYmFkZ2VUZXh0IiwiY291bnRlciIsInBhcnNlSW50IiwiaXNVc2VyQWN0aXZlIiwiaWRsZSIsInF1ZXJ5U3RhdGUiLCJyb3VuZCIsInN0YXR1cyIsInN0b3JhZ2VSZXNldCIsImQiLCJyZW1vdmUiLCJrZXlzIiwiZ2V0TGFzdEZvY3VzZWRXaW5kb3ciLCJ3aW5kb3dzIiwiZ2V0TGFzdEZvY3VzZWQiLCJwb3B1bGF0ZSIsIndpbmRvd1R5cGVzIiwiaWQiLCJyZXRyeVByb21pc2UiLCJmdW5jIiwiZGVsYXkiLCJ0aW1lcyIsInRoZW4iLCJjYXRjaCIsInJlYXNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLGlFQUFjLENBQUM7QUFDM0JDLFlBQVUsRUFBRTtBQUNWQyxjQUFVLEVBQUU7QUFERixHQURlO0FBSTNCQyxTQUFPLEVBQUU7QUFDUEMsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRTtBQURHO0FBREo7QUFKa0IsQ0FBRCxDQUE1Qjs7QUFXQSxTQUFTQyxHQUFULEdBQWU7QUFDYixzQkFDRSwyREFBQyw2REFBRDtBQUFrQixTQUFLLEVBQUVQO0FBQXpCLGtCQUNFLDJEQUFDLCtEQUFELE9BREYsRUFDcUIsR0FEckIsQ0FERjtBQUtEOztBQUVEUSx1REFBQSxlQUFnQiwyREFBQyxHQUFELE9BQWhCLEVBQXlCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsTUFBYjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsRUFBckI7QUFDQSxNQUFNQyx1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QSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSx1QkFBdUI7V0FDdEM7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSwyQzs7OztVQzVGQTtVQUNBIiwiZmlsZSI6InBvcHVwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWVEaXNwYXRjaGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXInO1xuaW1wb3J0IHsgTXVpVGhlbWVQcm92aWRlciwgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICB9LFxuICBwYWxldHRlOiB7XG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzAwYjlhYScsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxIb21lRGlzcGF0Y2hlciAvPnsnICd9XG4gICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICApO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhcic7XG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBFcnJvck91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FcnJvck91dGxpbmUnO1xuaW1wb3J0IHsgRml4ZWRTaXplTGlzdCBhcyBMaXN0IH0gZnJvbSAncmVhY3Qtd2luZG93JztcblxuaW1wb3J0IHsgc2V0QWxsUmVhZEJhZGdlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMnO1xuXG5jb25zdCBSRVNUT1JFID0gJ1JFU1RPUkUnO1xuY29uc3QgU0hFTExfUkVTVE9SRSA9ICdTSEVMTF9SRVNUT1JFJztcbmNvbnN0IE5FWFQgPSAnTkVYVCc7XG5jb25zdCBSRU1PVkVEID0gJ1JFTU9WRUQnO1xuY29uc3QgQ0xPU0VEX0hJU1RPUlkgPSAnY2xvc2VkX2hpc3RvcnknO1xuY29uc3QgTlVNQkVSX0hPVVJTID0gMjQ7XG5jb25zdCBUSU1FX1BFUklPRF9UT19DT05TSURFUiA9IDM2MDAwMDAgKiBOVU1CRVJfSE9VUlM7IC8vIGluIG1pY3Jvc2Vjb25kXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgc2V0QWxsUmVhZEJhZGdlKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlIH07XG4gICAgdGhpcy5vbkNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBjaGFuZ2VzQ2xvc2VkSGlzdG9yeSA9IGNoYW5nZXNbQ0xPU0VEX0hJU1RPUlldO1xuICAgICAgaWYgKGNoYW5nZXNDbG9zZWRIaXN0b3J5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNsb3NlZF9oaXN0b3J5OiBjaGFuZ2VzQ2xvc2VkSGlzdG9yeVsnbmV3VmFsdWUnXSxcbiAgICAgICAgICByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtDTE9TRURfSElTVE9SWV0sIChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IGNsb3NlZF9oaXN0b3J5ID0gcmVzdWx0LmNsb3NlZF9oaXN0b3J5IHx8IFtdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlZF9oaXN0b3J5IH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuZXh0TGlzdDogW10gfSk7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgc2V0QWxsUmVhZEJhZGdlKCk7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVuZGVyU2F2ZUJvb2xlYW4pIHtcbiAgICAgIHRoaXMuZm9yY2VSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVJdGVtKGtleSwgZSkge1xuICAgIGxldCBpdGVtcyA9IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkucmV2ZXJzZSgpO1xuICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XG4gICAgICAvLyBtZXRhS2V5IGlzIGNtZCBrZXkgb24gbWFjXG4gICAgICB0aGlzLnJlc3RvcmVUYWIoaXRlbXMsIGtleSwgU0hFTExfUkVTVE9SRSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzdG9yZVRhYihpdGVtcywga2V5LCBSRVNUT1JFKTtcbiAgICB9XG4gIH1cblxuICByZXN0b3JlVGFiKGl0ZW1zLCBrZXksIG1lc3NhZ2VUeXBlKSB7XG4gICAgY29uc3QgcmVzdG9yZWRUYWIgPSBpdGVtc1trZXldO1xuICAgIGl0ZW1zLnNwbGljZShrZXksIDEpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZWRfaGlzdG9yeTogaXRlbXMucmV2ZXJzZSgpLCByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSB9KTtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBtZXNzYWdlVHlwZTogbWVzc2FnZVR5cGUsXG4gICAgICB1dWlkOiByZXN0b3JlZFRhYi51dWlkLFxuICAgIH0pO1xuICB9XG5cbiAgZm9yY2VSZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGZpbHRlckxpc3Qoc2VsZWN0ZWRMaXN0KSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgbm93IC0gTWF0aC5tYXgoaXRlbS5zdGF0aXN0aWNzLnVwZGF0ZWRfYXQsIGl0ZW0uc3RhdGlzdGljcy5sYXN0X2FjdGl2ZV90aW1lc3RhbXApIDwgVElNRV9QRVJJT0RfVE9fQ09OU0lERVJcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJMaXN0KGxpc3RUb0JlUmVuZGVyZWQpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgc2VsZWN0ZWRMaXN0O1xuICAgIGNvbnN0IE1BWF9MRU5HVEhfVElUTEUgPSAxMDA7XG5cbiAgICBzd2l0Y2ggKGxpc3RUb0JlUmVuZGVyZWQpIHtcbiAgICAgIGNhc2UgTkVYVDpcbiAgICAgICAgc2VsZWN0ZWRMaXN0ID0gdGhpcy5zdGF0ZS5uZXh0TGlzdCA/IHRoaXMuc3RhdGUubmV4dExpc3QgOiBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzZWxlY3RlZExpc3QgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5ID8gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSA6IFtdO1xuICAgICAgICBzZWxlY3RlZExpc3QgPSBzZWxlY3RlZExpc3QubWFwKCh3ZWJzaXRlLCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVsZXRpb25UaW1lID0gbmV3IERhdGUod2Vic2l0ZS5kZWxldGlvbl90aW1lKTtcbiAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRfZGVsZXRpb25fdGltZSA9IGRlbGV0aW9uVGltZS50b1RpbWVTdHJpbmcoKS5zcGxpdCgnICcpWzBdO1xuICAgICAgICAgIHdlYnNpdGUuaG91cnNfZGVsZXRpb24gPSBmb3JtYXR0ZWRfZGVsZXRpb25fdGltZS5zcGxpdCgnOicpWzBdO1xuICAgICAgICAgIHdlYnNpdGUubWludXRlc19kZWxldGlvbiA9IGZvcm1hdHRlZF9kZWxldGlvbl90aW1lLnNwbGl0KCc6JylbMV07XG4gICAgICAgICAgaWYgKHdlYnNpdGUudGl0bGUgJiYgd2Vic2l0ZS50aXRsZS5sZW5ndGggPiBNQVhfTEVOR1RIX1RJVExFKSB7XG4gICAgICAgICAgICB3ZWJzaXRlLnRpdGxlID0gd2Vic2l0ZS50aXRsZS5zdWJzdHJpbmcoMCwgTUFYX0xFTkdUSF9USVRMRSkuY29uY2F0KCcuLi4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgd2Vic2l0ZS50cnVuY2F0ZWRfdXJsID0gd2Vic2l0ZS51cmwuc3BsaXQoJy8nKVswXTtcbiAgICAgICAgICByZXR1cm4gd2Vic2l0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGlzTmV4dCA9IGxpc3RUb0JlUmVuZGVyZWQgPT09IE5FWFQ7XG4gICAgY29uc3QgZmlsdGVyZWRMaXN0ID0gdGhpcy5maWx0ZXJMaXN0KHNlbGVjdGVkTGlzdCkucmV2ZXJzZSgpO1xuXG4gICAgY29uc3QgbGlzdEl0ZW0gPSAoeyBpbmRleCwgc3R5bGUgfSkgPT4ge1xuICAgICAgY29uc3Qgd2Vic2l0ZSA9IGZpbHRlcmVkTGlzdFtpbmRleF07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgPExpc3RJdGVtIENvbnRhaW5lckNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZEF2YXRhcldpdGhUaW1lfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpbWVEaXNwbGF5fT5cbiAgICAgICAgICAgICAgICB7YCR7d2Vic2l0ZS5ob3Vyc19kZWxldGlvbn06JHt3ZWJzaXRlLm1pbnV0ZXNfZGVsZXRpb259YH1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9e3dlYnNpdGUudGl0bGV9IHNyYz17d2Vic2l0ZS5mYXZJY29uVXJsfSBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyQ29udGFpbmVyfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgIHByaW1hcnk9e3dlYnNpdGUudHJ1bmNhdGVkX3VybH1cbiAgICAgICAgICAgICAgc2Vjb25kYXJ5PXt3ZWJzaXRlLnRpdGxlfVxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgcHJpbWFyeTogY2xhc3Nlcy5wcmltYXJ5VGV4dENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk6IGNsYXNzZXMuc2Vjb25kYXJ5VGV4dENvbnRhaW5lcixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aXNOZXh0ID8gdGhpcy5yZW1vdmVOZXh0SXRlbS5iaW5kKHRoaXMsIGluZGV4KSA6IHRoaXMucmVtb3ZlSXRlbS5iaW5kKHRoaXMsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpc05leHQgPyAnU2tpcCcgOiAnUmVzdG9yZSd9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFdlYnNpdGVzfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmdyZWVuVGl0bGV9PlxuICAgICAgICAgIHtpc05leHQgPyAnTmV4dCB0YWJzIHRvIGJlIGNsb3NlZCcgOiBgTGFzdCBjbG9zZWQgdGFic2B9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtmaWx0ZXJlZExpc3QubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3ViVGV4dH0+e2BZb3Ugc2hvdWxkIG1heWJlIHVwZGF0ZSB5b3VyIHNldHRpbmdzLmB9PC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxMaXN0IGhlaWdodD17TWF0aC5taW4oODAgKiBmaWx0ZXJlZExpc3QubGVuZ3RoLCAzMDApfSBpdGVtQ291bnQ9e2ZpbHRlcmVkTGlzdC5sZW5ndGh9IGl0ZW1TaXplPXs4MH0+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbX1cbiAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG51bWJlckNsb3NlZFRhYnNMYXN0SG91ciA9IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkgPyB0aGlzLmZpbHRlckxpc3QodGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSkubGVuZ3RoIDogMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGRpdiB2YXJpYW50PVwiaDNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2xkTnVtYmVyfT5cbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPyBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgOiAwfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0T25SaWdodH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudG9wVGV4dH0+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIHRhYlxuICAgICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIDw9IDEgPyAnJyA6ICdzJ30gY2xvc2VkXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubWlkZGxlVGV4dH0+IGluIHRoZSBsYXN0IHtgJHtOVU1CRVJfSE9VUlN9IGhvdXJzYH0gPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucmVuZGVyTGlzdC5iaW5kKHRoaXMpKFJFTU9WRUQpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJDb250YWluZXJ9PlxuICAgICAgICAgIDxFcnJvck91dGxpbmVJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25Db250YWluZXJ9IC8+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNkVUVKSGQwYkw2cnlGdlprMjIwQ29acDdjd3ZGeEVTb3JwczdjbmdrMHdRZnl1LVEvdmlld2Zvcm1cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVG9Gb3JtfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJ1Zy9GZWVkYmFjaz9cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgdGl0bGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1heEhlaWdodDogNDAsXG4gIH0sXG4gIHRleHRPblJpZ2h0OiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ3N0YXJ0JyxcbiAgICAvL2p1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGdyZWVuVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAjMDBiOWFhYCxcbiAgICBtYXhXaWR0aDogMjI1LFxuICB9LFxuXG4gIGJvbGROdW1iZXI6IHtcbiAgICBjb2xvcjogJyNlNTVjMDAnLFxuICAgIGZvbnRTaXplOiA0MCxcbiAgICBtYXhXaWR0aDogJzMwJScsXG4gIH0sXG4gIG1pZGRsZVRleHQ6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gIH0sXG4gIHRvcFRleHQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gIH0sXG4gIHN1YlRleHQ6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXhXaWR0aDogMjAsXG4gIH0sXG4gIGJ1dHRvbkNvbnRhaW5lcjogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknIH0sXG4gIGl0ZW1UZXh0OiB7XG4gICAgbWF4V2lkdGg6IDE4NSxcbiAgICBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIG1heEhlaWdodDogNjAsXG4gIH0sXG4gIHRpbWVEaXNwbGF5OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgfSxcbiAgZ3JpZEF2YXRhcldpdGhUaW1lOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB9LFxuICBsaXN0V2Vic2l0ZXM6IHtcbiAgICBtYXJnaW5Ub3A6IDIwLFxuICB9LFxuICBmb290ZXJDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuMjUpLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGxpbmtUb0Zvcm06IHtcbiAgICBmb250U2l6ZTogMTAsXG4gIH0sXG4gIGljb25Db250YWluZXI6IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygwLjI1KSxcbiAgICBmb250U2l6ZTogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgYXZhdGFyQ29udGFpbmVyOiB7XG4gICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgbWF4SGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDcpLFxuICB9LFxuICBwcmltYXJ5VGV4dENvbnRhaW5lcjoge1xuICAgIGZvbnRTaXplOiAxNiwgLy9JbnNlcnQgeW91ciByZXF1aXJlZCBzaXplXG4gIH0sXG4gIHNlY29uZGFyeVRleHRDb250YWluZXI6IHtcbiAgICBmb250U2l6ZTogMTMsIC8vSW5zZXJ0IHlvdXIgcmVxdWlyZWQgc2l6ZVxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3MnO1xuaW1wb3J0IEFycm93QmFja0lvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja0lvcyc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhci9BdmF0YXInO1xuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vU2V0dGluZ3MnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9Ib21lJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLmpzJztcblxuY2xhc3MgSG9tZURpc3BhdGNoZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgYXBwQmFyVmFsdWU6ICdIT01FJyB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFwcEJhclZhbHVlOiAnSE9NRScgfSk7XG4gICAgbG9nZ2VyKHRoaXMsICdQb3B1cCBvcGVuZWQnKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChuZXdWYWx1ZSkgPT4gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBCYXJWYWx1ZTogbmV3VmFsdWUgfSk7XG4gICAgbG9nZ2VyKHRoaXMsICdTd2l0Y2ggdG8gJyArIG5ld1ZhbHVlKTtcbiAgfTtcblxuICBkaXNwYXRjaFBhZ2UoKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmFwcEJhclZhbHVlKSB7XG4gICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgcmV0dXJuIDxIb21lIC8+O1xuICAgICAgY2FzZSAnU0VUVElOR1MnOlxuICAgICAgICByZXR1cm4gPFNldHRpbmdzIC8+O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyBpcyBhbiBlcnJvciBwYWdlPC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlJY29uKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUpIHtcbiAgICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UoJ1NFVFRJTkdTJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2V0dGluZ3NJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnU0VUVElOR1MnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UoJ0hPTUUnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQ29udGFpbmVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBcnJvd0JhY2tJb3NJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyBpcyBhbiBlcnJvciBwYWdlPC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTbmFja2JhclByb3ZpZGVyXG4gICAgICAgIG1heFNuYWNrPXsyfVxuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5ub3RpZmljYXRpb24sXG4gICAgICAgICAgdmFyaWFudFN1Y2Nlc3M6IGNsYXNzZXMuc3VjY2VzcyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZUNvbnRhaW5lcn0+XG4gICAgICAgICAgPFBhcGVyIHNxdWFyZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRMb2dvVGFic30+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3RhYmJ5LnVzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmVuc2VtYmxlbG9nb30+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eycuLi8uLi9hc3NldHMvc3RhdGljL2ljb25zL3RhYmJ5XzIucG5nJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29GdWxsfSAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHt0aGlzLmRpc3BsYXlJY29uKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+e3RoaXMuZGlzcGF0Y2hQYWdlKCl9PC9kaXY+XG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lRGlzcGF0Y2hlcjtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgSG9tZURpc3BhdGNoZXIgZnJvbSAnLi9Ib21lRGlzcGF0Y2hlcic7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYi9UYWInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBob21lQ29udGFpbmVyOiB7XG4gICAgbWluV2lkdGg6IDQwMCxcbiAgfSxcbiAgdGFiOiB7XG4gICAgY29sb3I6ICcjMDBiOWFhJyxcbiAgfSxcbiAgbm90aWZpY2F0aW9uOiB7XG4gICAgbGVmdDogMTUwLFxuICB9LFxuICBncmlkTG9nb1RhYnM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgYWxsVGFiczoge1xuICAgIG1heFdpZHRoOiAnNzUlJyxcbiAgfSxcbiAgZW5zZW1ibGVsb2dvOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnbGVmdCcsXG4gIH0sXG4gIGxvZ29BdmF0YXI6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS4yNSksXG4gIH0sXG4gIGxvZ29GdWxsOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyLjI1KSxcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxMiksXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuMjUpLFxuICB9LFxuICBpY29uQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEuNSksXG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCM4MGUwYTcsICMwMGI5YWEpJyxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhvbWVEaXNwYXRjaGVyKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXAnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHkvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgVHVuZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R1bmUnO1xuaW1wb3J0IEhlbHBPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscE91dGxpbmUnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01vZGFsJztcbmltcG9ydCBCYWNrZHJvcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcblxuaW1wb3J0IHsgd2l0aFNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCB7IFJFTEFYRUQsIEZPQ1VTRUQsIENVU1RPTUlaRUQsIElOSVRfRk9DVVNFRF9QUk9GSUxFIH0gZnJvbSAnLi4vLi4vY29uZmlnL3NldHRpbmdzUHJvZmlsZXMuanMnO1xuaW1wb3J0IHsgY2hlY2tTZXR0aW5ncywgT1BUSU1BTF9OVU1CRVJfVEFCUywgUE9MSUNZLCBJTkFDVElWRV9QT0xJQ1kgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpc0ludGVnZXIsIHJlbW92ZUl0ZW0gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rL0xpbmsnO1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9jdXNlZE1vZGU6IGZhbHNlLFxuICAgICAgcmVsYXhlZE1vZGU6IGZhbHNlLFxuICAgICAgY3VzdG9taXplZEJvb2w6IGZhbHNlLFxuICAgICAgc2V0dGluZ3M6IElOSVRfRk9DVVNFRF9QUk9GSUxFLFxuICAgICAgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlLFxuICAgICAgZm9jdXNlZFdpbmRvd0lkOiB0cnVlLFxuICAgICAgb3Blbk1vZGFsOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMub25DaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgY29uc3QgY2hhbmdlc1NldHRpbmdzID0gY2hhbmdlc1snc2V0dGluZ3MnXTtcbiAgICAgIGNvbnN0IGNoYW5nZXNQcm9maWxlID0gY2hhbmdlc1snYWN0aXZlX3Byb2ZpbGUnXTtcbiAgICAgIGNvbnN0IGNoYW5nZWRJbmFjdGl2ZVBvbGljeSA9IGNoYW5nZXNbJ2luYWN0aXZlX3BvbGljeSddO1xuICAgICAgaWYgKGNoYW5nZXNTZXR0aW5ncykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZXR0aW5nczogY2hhbmdlc1NldHRpbmdzWyduZXdWYWx1ZSddLFxuICAgICAgICAgIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VzUHJvZmlsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmb2N1c2VkTW9kZTogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IEZPQ1VTRUQsXG4gICAgICAgICAgcmVsYXhlZE1vZGU6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBSRUxBWEVELFxuICAgICAgICAgIGN1c3RvbWl6ZWRCb29sOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gQ1VTVE9NSVpFRCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlZEluYWN0aXZlUG9saWN5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbmFjdGl2ZVBvbGljeTogY2hhbmdlZEluYWN0aXZlUG9saWN5WyduZXdWYWx1ZSddIH0pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2FjdGl2ZV9wcm9maWxlJywgJ3NldHRpbmdzJywgJ2ZvY3VzZWRfd2luZG93X2lkJywgJ2luYWN0aXZlX3BvbGljeSddLCAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBwcm9maWxlID0gcmVzdWx0LmFjdGl2ZV9wcm9maWxlIHx8IEZPQ1VTRUQ7XG4gICAgICBjb25zdCBmb2N1c2VkTW9kZSA9IHByb2ZpbGUgPT09IEZPQ1VTRUQ7XG4gICAgICBjb25zdCByZWxheGVkTW9kZSA9IHByb2ZpbGUgPT09IFJFTEFYRUQ7XG4gICAgICBjb25zdCBjdXN0b21pemVkQm9vbCA9IHByb2ZpbGUgPT09IENVU1RPTUlaRUQ7XG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHJlc3VsdC5zZXR0aW5ncyB8fCBJTklUX0ZPQ1VTRURfUFJPRklMRTtcbiAgICAgIGNvbnN0IGZvY3VzZWRXaW5kb3dJZCA9IHJlc3VsdC5mb2N1c2VkX3dpbmRvd19pZDtcbiAgICAgIGNvbnN0IGluYWN0aXZlUG9saWN5ID0gcmVzdWx0LmluYWN0aXZlX3BvbGljeTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkTW9kZSxcbiAgICAgICAgcmVsYXhlZE1vZGUsXG4gICAgICAgIGN1c3RvbWl6ZWRCb29sLFxuICAgICAgICBzZXR0aW5ncyxcbiAgICAgICAgZm9jdXNlZFdpbmRvd0lkLFxuICAgICAgICBpbmFjdGl2ZVBvbGljeSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnJlbmRlclNhdmVCb29sZWFuKSB7XG4gICAgICB0aGlzLmZvcmNlUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQm9vbENoYW5nZShjaGFuZ2VUeXBlKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QUk9GSUxFJyxcbiAgICAgIHByb2ZpbGU6IGNoYW5nZVR5cGUsXG4gICAgfSk7XG4gICAgaWYgKGNoYW5nZVR5cGUgPT09IFJFTEFYRUQgfHwgY2hhbmdlVHlwZSA9PT0gRk9DVVNFRCkge1xuICAgICAgdGhpcy5ub3RpZnlVc2VyKHRydWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeS5pbmNsdWRlcyh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3dpdGNoKCk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2VSZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVNhdmVQYXJhbWV0ZXJzKCkge1xuICAgIC8vIFRPRE8gQWRkIGZ1bmN0aW9uIHRvIGNoZWNrIGZvciBhbGwgcG90ZW50aWFsIHZhbHVlc1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG4gICAgaWYgKGNoZWNrU2V0dGluZ3ModGhpcy5zdGF0ZS5zZXR0aW5ncykpIHtcbiAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QQVJBTUVURVJTJyxcbiAgICAgICAgc2V0dGluZ3M6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgICB9KTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLm5vdGlmeVVzZXIoc3VjY2Vzcyk7XG4gIH1cblxuICBub3RpZnlVc2VyKHN1Y2Nlc3MpIHtcbiAgICB0aGlzLnByb3BzLmVucXVldWVTbmFja2JhcihzdWNjZXNzID8gJ05ldyBTZXR0aW5ncyBhcmUgc2F2ZWQuJyA6ICdTZXR0aW5ncyBjYW5ub3QgYmUgc2F2ZWQuJywge1xuICAgICAgdmFyaWFudDogc3VjY2VzcyA/ICdzdWNjZXNzJyA6ICdlcnJvcicsXG4gICAgICBhbmNob3JPcmlnaW46IHtcbiAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogNzUwLFxuICAgICAgYXV0b0hpZGVEdXJhdGlvbjogMTUwMCxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZVBhcmFtZXRlcnMgPSAocGF0aCwgcGFyYW1ldGVyKSA9PiAoZXZlbnQpID0+IHtcbiAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLnN0YXRlLnNldHRpbmdzO1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAoaXNJbnRlZ2VyKG5leHRWYWx1ZSkgfHwgbmV4dFZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0dGluZ3NbcGF0aF1bcGFyYW1ldGVyXSA9IG5leHRWYWx1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXR0aW5nczogc2V0dGluZ3MsIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlU3dpdGNoID0gKCkgPT4ge1xuICAgIGxldCBpbmFjdGl2ZVBvbGljeSA9IHRoaXMuc3RhdGUuaW5hY3RpdmVQb2xpY3k7XG5cbiAgICBpZiAoaW5hY3RpdmVQb2xpY3kuaW5jbHVkZXModGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpKSB7XG4gICAgICBpbmFjdGl2ZVBvbGljeSA9IHJlbW92ZUl0ZW0oaW5hY3RpdmVQb2xpY3ksIHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKTtcbiAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZVR5cGU6ICdSRU1PVkVfSU5BQ1RJVkVfUE9MSUNZJyxcbiAgICAgICAgd2luZG93SWQ6IHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluYWN0aXZlUG9saWN5LnB1c2godGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpO1xuICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ0FERF9JTkFDVElWRV9QT0xJQ1knLFxuICAgICAgICB3aW5kb3dJZDogdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluYWN0aXZlUG9saWN5OiBpbmFjdGl2ZVBvbGljeSwgcmVuZGVyU2F2ZUJvb2xlYW46IHRydWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlT3BlbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1vZGFsOiB0cnVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuTW9kYWw6IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5wdXRzUGFyYW1ldGVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdPcHRpbWFsIHRhYnMgbnVtYmVyJyxcbiAgICAgICAgc291cmNlOiB0aGlzLnN0YXRlLnNldHRpbmdzLFxuICAgICAgICBwYXRoOiBQT0xJQ1ksXG4gICAgICAgIHBhcmFtZXRlcjogT1BUSU1BTF9OVU1CRVJfVEFCUyxcbiAgICAgICAgaW5wdXRQcm9wczogeyBtaW46ICcxJywgbWF4OiAnMTAwJywgc3RlcDogJzEnIH0sXG4gICAgICB9LFxuICAgIF07XG4gICAgY29uc3QgbGlzdEl0ZW1zUGFyYW1ldGVycyA9IGlucHV0c1BhcmFtZXRlcnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzKGl0ZW0ucGF0aCwgaXRlbS5wYXJhbWV0ZXIpfVxuICAgICAgICB2YWx1ZT17aXRlbS5zb3VyY2VbaXRlbS5wYXRoXVtpdGVtLnBhcmFtZXRlcl19XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICBvbktleVVwPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpIHRoaXMuaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKTtcbiAgICAgICAgfX1cbiAgICAgICAgaW5wdXRQcm9wcz17aXRlbS5pbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICApKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkJsb2NrfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkICYmIHRoaXMuc3RhdGUuaW5hY3RpdmVQb2xpY3lcbiAgICAgICAgICAgICAgICAgICAgPyAhdGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeS5pbmNsdWRlcyh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZClcbiAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN3aXRjaH1cbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN3aXRjaFdyYXBwZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3dpdGNoQ29udGFpbmVyfVxuICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5FbmFibGUgb24gdGhpcyB3aW5kb3c8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW50cm9kdWN0aW9uQmxvY2t9PlxuICAgICAgICAgICAgPFR1bmVJY29uIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFyYW1ldGVyc1RpdGxlfT5TZWxlY3QgeW91ciBwcm9maWxlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LnRhYmJ5LnVzL3NldHVwI3NldHVwX3N0ZXA0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIDxIZWxwT3V0bGluZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmhlbHBJY29ufSAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NXcmFwcGVyfT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5mb2N1c2VkTW9kZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoRk9DVVNFRCl9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tib3hXcmFwcGVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5Gb2N1czwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5yZWxheGVkTW9kZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoUkVMQVhFRCl9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tib3hXcmFwcGVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5SZWxheDwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbWl6ZVdyYXBwZXJ9PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoQ1VTVE9NSVpFRCl9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrYm94V3JhcHBlcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+Q3VzdG9taXplPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCb29sZWFuc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NCbG9ja30+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbCByZXF1aXJlZCBmdWxsV2lkdGg+XG4gICAgICAgICAgICAgICAge2xpc3RJdGVtc1BhcmFtZXRlcnN9XG4gICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgaGlkZGVuIGtleT1cImhpZGRlbi10ZXh0ZmllbGRcIiBkaXNhYmxlZCAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kYXJ5QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgb25DbGljaz17dGhpcy5oYW5kbGVPcGVufSBjbGFzc05hbWU9e2NsYXNzZXMudGlwc0J1dHRvbn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxUaXBzfT5UaXBzPC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICAvL2Rpc2FibGVQb3J0YWw9e3RydWV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbk1vZGFsfVxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cbiAgICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XG4gICAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xuICAgICAgICAgICAgdGltZW91dDogNzUwLFxuICAgICAgICAgICAgaW52aXNpYmxlOiB0cnVlLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8RmFkZSBpbj17dGhpcy5zdGF0ZS5vcGVuTW9kYWx9PlxuICAgICAgICAgICAgPEJveCBib3JkZXJSYWRpdXM9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0QmxvY2tNb2RhbH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kRW5zZW1ibGV9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlByb3RlY3QgYSB0YWI8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXN0RW5zZW1ibGV9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4uLy4uL2Fzc2V0cy9zdGF0aWMvaWNvbnMvcmlnaHRfY2xpY2sucG5nJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnRDbGlja1dyYXBwZXJ9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9Pis8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5QaW48L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRFbnNlbWJsZX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+UmVvcGVuIG11bHRpcGxlIHRhYnM8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZEVuc2VtYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkN0cmw8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9Pis8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi4vLi4vYXNzZXRzL3N0YXRpYy9pY29ucy9sZWZ0X2NsaWNrLnBuZyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0Q2xpY2tXcmFwcGVyfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+SG93IGRvZXMgdGFiYnkgd29yaz88L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxOZXh0fT5cbiAgICAgICAgICAgICAgICB0YWJieSB3aWxsIG5vdCByZW1vdmUgdGFicyByaWdodCBhZnRlciB0aGVpciBjcmVhdGlvbi57JyAnfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxOZXh0fT5cbiAgICAgICAgICAgICAgICB0YWJieSB0YWtlcyB3ZWxsLXRob3VnaHQtb3V0IGRlY2lzaW9ucyBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyTW9kYWx9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3RhYmJ5LnVzL2ZhcVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxUaXBzfT5GQVEgYXZhaWxhYmxlIGhlcmU8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxUaXBzfT50YWJieSB7Y2hyb21lLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9ufTwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNuYWNrYmFyKFNldHRpbmdzKTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9TZXR0aW5ncyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgc2V0dGluZ3NXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgbWFyZ2luVG9wOiA1LFxuICAgIG1hcmdpbkxlZnQ6IDQ3LFxuICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgfSxcbiAgc2Vjb25kYXJ5QnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiAxOCxcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuXG4gICAgbWF4V2lkdGg6IDIwLFxuICB9LFxuXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIG1heFdpZHRoOiAxNTAsXG4gIH0sXG4gIGludHJvZHVjdGlvbkJsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIG1hcmdpbkxlZnQ6IDcsXG4gIH0sXG4gIHBhcmFtZXRlcnNUaXRsZToge1xuICAgIC8vZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNyxcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBtYXJnaW5MZWZ0OiAxNixcbiAgfSxcbiAgc2V0dGluZ3NCbG9jazoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1hcmdpbkxlZnQ6IDMyLFxuICAgIG1hcmdpblRvcDogNCxcbiAgfSxcbiAgZmlyc3RCb29sZWFuczoge1xuICAgIG1heFdpZHRoOiAnMzYlJyxcbiAgICBtYXhIZWlnaHQ6IDIwLFxuICAgIG1hcmdpblRvcDogNSxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIH0sXG4gIHN0eWxlTGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gIH0sXG4gIGNoZWNrYm94V3JhcHBlcjoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgfSxcbiAgc3dpdGNoQ29udGFpbmVyOiB7XG4gICAgbWF4SGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgfSxcbiAgc3dpdGNoV3JhcHBlcjoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWF4V2lkdGg6ICc4NSUnLFxuICB9LFxuICBjdXN0b21pemVXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIGFsaWduSXRlbXM6ICdzdGFydCcsXG4gIH0sXG4gIGhlbHBJY29uOiB7XG4gICAgY29sb3I6ICcjZTU1YzAwJyxcbiAgICBmb250U2l6ZTogMTgsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgfSxcbiAgbW9kYWw6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxNTAsIDE1MCwgMTUwLCAwLjQpJyxcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxuICB9LFxuICBtYWluQmxvY2s6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgLy9ib3JkZXI6ICcwLjVweCBzb2xpZCAjNUE1QTVBJyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXG5cbiAgICBvcGFjaXR5OiAnMSAhaW1wb3J0YW50JyxcbiAgfSxcbiAgYm94Q3RybDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNUE1QTVBJyxcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMi41KSxcbiAgICAvL3BhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXG4gICAgLy9tYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIC8vbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXG5cbiAgICBvcGFjaXR5OiAnMSAhaW1wb3J0YW50JyxcbiAgfSxcbiAgbGVmdENsaWNrV3JhcHBlcjoge1xuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygzKSxcbiAgfSxcbiAgc2Vjb25kRW5zZW1ibGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtaW5XaWR0aDogJzMwJScsXG4gIH0sXG4gIGxhc3RFbnNlbWJsZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1pbldpZHRoOiAnMjcuNSUnLFxuICB9LFxuICBmaXJzdEJsb2NrTW9kYWw6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIHRpcHNCdXR0b246IHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDApLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygyKSxcbiAgICBwYWRkaW5nTGVmdDogMCxcbiAgICBwYWRkaW5nUmlnaHQ6IDAsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtYXJnaW5SaWdodDogMCxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIHN0eWxlTGFiZWxUaXBzOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICAgIGNvbG9yOiAncmdiYSgxNTAsIDE1MCwgMTUwLCAxKScsXG4gIH0sXG4gIHN0eWxlTGFiZWxOZXh0OiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gIH0sXG4gIGZvb3Rlck1vZGFsOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuNSksXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgLy8gbWluV2lkdGg6ICcxMDAlJyxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFNldHRpbmdzKTtcbiIsImV4cG9ydCBjb25zdCBPUFRJTUFMX05VTUJFUl9UQUJTID0gJ3RhcmdldF90YWJzJztcbmV4cG9ydCBjb25zdCBQT0xJQ1kgPSAncG9saWN5JztcbmV4cG9ydCBjb25zdCBJTkFDVElWRV9QT0xJQ1kgPSAnaW5hY3RpdmVfcG9saWN5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgaWYgKHNldHRpbmdzW1BPTElDWV1bT1BUSU1BTF9OVU1CRVJfVEFCU10gJiYgc2V0dGluZ3NbUE9MSUNZXVtPUFRJTUFMX05VTUJFUl9UQUJTXSA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oYXJyLCB2YWx1ZSkge1xuICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKHZhbHVlKTtcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuIiwiY29uc3QgU0NPUkVSID0gJ3YxJzsgLy8gb25seSBkZWZhdWx0IGltcGxlbWVudGVkXG5jb25zdCBNQVhJTVVNX1NDT1JFID0gMTA7IC8vIG1heCBzY29yZSBmb3Igc2NvcmVyXG5jb25zdCBNQVhJTVVNX0hJU1RPUllfU0laRSA9IDEwMDA7IC8vIG1heCBraWxsZWQgdGFiIGhpc3RvcnkgaW4gbWVtb3J5XG5jb25zdCBTRVNTSU9OU19USU1FT1VUX01TID0gMjAwOyAvLyB3aGVuIGEgdGFiIGlzIGtpbGxlZCB3ZSBuZWVkIGEgdGltZW91dCB0byByZXRyaWV2ZSB0aGUgc2Vzc2lvbklkXG5jb25zdCBTRVNTSU9OU19SRVRSSUVTID0gNTsgLy8gaG93IG1hbnkgdHJpZXMgdG8gcmV0cmlldmUgdGhlIHNlc3Npb24gSUQgb2YgYSBraWxsZWQgdGFiXG5jb25zdCBTRVNTSU9OU19NQVhfRlVaWllfREVMVEFfTVMgPSAxMDAwICogNTsgLy8gdGltZSBpcyBmdXp6eSBtYXRjaGVkIHRvIHJldGlyZXZlIHRoZSBjb3JyZWN0IHNlc3Npb25JRCwgc2hvdWxkIGJlIGhpZ2hlciB0aGFuIFNFU1NJT05TX1RJTUVPVVRfTVNcbmNvbnN0IE1JTl9BQ1RJVkVfREVCT1VOQ0UgPSAxMDAwICogMjsgLy8gbWluaW11bSBhY3RpdmUgcmVhZGluZyBvbiBhIHRhYiB0byBiZSBjb3VudGVkIGFzIHZhbGlkICd1c2VmdWwnIHRpbWVcbmNvbnN0IE1BWF9BQ1RJVkVfREVCT1VOQ0UgPSAxMDAwICogNjAgKiA1OyAvLyBtYXhpbXVtIHRpbWUgd2l0aG91dCBhbnkgdXNlciBpbnB1dCBiZWZvcmUgaXQgaXMgY29uc2lkZXJlZCBpZGxlZCwgbXVzdCBiZSBoaWdoZXIgdGhhbiAxNXNlY1xuXG5leHBvcnQge1xuICBTQ09SRVIsXG4gIE1BWElNVU1fU0NPUkUsXG4gIE1BWElNVU1fSElTVE9SWV9TSVpFLFxuICBTRVNTSU9OU19USU1FT1VUX01TLFxuICBTRVNTSU9OU19SRVRSSUVTLFxuICBTRVNTSU9OU19NQVhfRlVaWllfREVMVEFfTVMsXG4gIE1JTl9BQ1RJVkVfREVCT1VOQ0UsXG4gIE1BWF9BQ1RJVkVfREVCT1VOQ0UsXG59O1xuIiwiY29uc3QgUkVMQVhFRCA9ICdyZWxheGVkJztcbmNvbnN0IEZPQ1VTRUQgPSAnZm9jdXNlZCc7XG5jb25zdCBDVVNUT01JWkVEID0gJ2N1c3RvbWl6ZWQnO1xudmFyIElOSVRfUkVMQVhFRF9QUk9GSUxFID0ge307XG52YXIgSU5JVF9GT0NVU0VEX1BST0ZJTEUgPSB7fTtcblxuaWYgKEVOViA9PT0gJ2RlYnVnJykge1xuICBJTklUX1JFTEFYRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMSAqIDEwMDAsIC8vIG1pbmltdW0gdGltZSBiZXR3ZWVuIDIgZnVsbCBzdGF0cyB1cGRhdGUgZm9yIGFsbCB0YWJzXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogNSAqIDEwMDAsIC8vIG1pbmltdW0gdGltZSBiZXR3ZWVuIDIgZnVsbCB0YWIgZ2FyYmFnZSBjb2xsZWN0aW9uXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIHRhcmdldF90YWJzOiAxMiwgLy8gdGFiYnkgd2lsbCBzdG9wIGNsb3NpbmcgdGFicyB3aGVuIHdlIGhhdmUgbGVzcyB0aGFuIHRhcmdldF90YWJzIG9wZW5cbiAgICAgIGRlY2F5OiAwLjgsIC8vIHdoZW4gdGhlIG51bWJlciBvZiB0YWIgaW5jcmVhc2VzLCB0YWJieSB3aWxsIGRlbGV0ZSBtb3JlIHRhYnNcbiAgICAgIG1pbl90aW1lOiAzICogMTAwMCwgLy8gVGFiYnkgd2lsbCBraWxsIGFib3V0IDEgdGFiIHBlciBtaW5fdGltZSAoZGVwZW5kaW5nIG9uIGFjdGl2YXRpb24gcnVsZXMpXG5cbiAgICAgIC8vIElHTk9SRUQgdGFic1xuICAgICAgYWN0aXZlOiBmYWxzZSwgLy8gdGhlc2Ugc3RhdHVzIGFyZSBhYnNvbHV0ZWx5IHByb3RlY3RlZCB0YWJzOiB0aGVzZSBhcmUgaWdub3JlZCBhbmQgZG8gbm90IGNvdW50IGFzIHRhYnMuXG4gICAgICBwaW5uZWQ6IHRydWUsXG4gICAgICBhdWRpYmxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHNjb3Jlcjoge1xuICAgICAgLy8gUFJPVEVDVEVEIHRhYnNcbiAgICAgIGFjdGl2ZTogdHJ1ZSwgLy8gdGhlc2UgdGFicyB3aWxsIGJlIGdpdmVuIGFic29sdXRlIG1heGltdW0gc2NvcmUgKyBleHRlbmRlZCBwcm90ZWN0aW9uXG4gICAgICBwaW5uZWQ6IHRydWUsIC8vIHdoZW4gdGhlIHN0YXR1cyBpcyBsb3N0LlxuICAgICAgYXVkaWJsZTogdHJ1ZSxcblxuICAgICAgbWluX2FjdGl2ZTogNSAqIDEwMDAsIC8vIG1pbmltdW0gdGltZSBhIHRhYiBoYXMgdG8gZXhpc3QgYmVmb3JlIGJlaW5nIHNjb3JlZFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDEwMDAsIC8vIEEgcmVzdG9yZWQgdGFiIGlzIHByb3RlY3RlZCBmb3IgdGhpcyBsb25nXG4gICAgICBjYWNoZWRfZGVjYXk6IDAuMiwgLy8gSW4gY3VycmVudCBzY29yZXIsIHRoZSBjYWNoZSBzY29yZSBpcyBhZGRlZCB0byB0aGUgY3VycmVudCBzY29yZSB3aXRoIGEgZGVjcmVhc2luZyBmYWN0b3JcbiAgICB9LFxuICB9O1xuXG4gIElOSVRfRk9DVVNFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxICogMTAwMCxcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiA1ICogMTAwMCxcbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgdGFyZ2V0X3RhYnM6IDUsXG4gICAgICBkZWNheTogMC44LFxuICAgICAgbWluX3RpbWU6IDMgKiAxMDAwLFxuXG4gICAgICAvLyBJR05PUkVEIHRhYnNcbiAgICAgIGFjdGl2ZTogZmFsc2UsIC8vIHRoZXNlIHN0YXR1cyBhcmUgYWJzb2x1dGVseSBwcm90ZWN0ZWQgdGFiczogdGhlc2UgYXJlIGlnbm9yZWQgYW5kIGRvIG5vdCBjb3VudCBhcyB0YWJzLlxuICAgICAgcGlubmVkOiB0cnVlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIC8vIFBST1RFQ1RFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHRhYnMgd2lsbCBiZSBnaXZlbiBhYnNvbHV0ZSBtYXhpbXVtIHNjb3JlICsgZXh0ZW5kZWQgcHJvdGVjdGlvblxuICAgICAgcGlubmVkOiB0cnVlLCAvLyB3aGVuIHRoZSBzdGF0dXMgaXMgbG9zdC5cbiAgICAgIGF1ZGlibGU6IHRydWUsXG5cbiAgICAgIG1pbl9hY3RpdmU6IDUgKiAxMDAwLFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDEwMDAsXG4gICAgICBjYWNoZWRfZGVjYXk6IDAuMixcbiAgICB9LFxuICB9O1xufSBlbHNlIHtcbiAgSU5JVF9SRUxBWEVEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEwICogMTAwMCxcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiAxMCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgdGFyZ2V0X3RhYnM6IDEyLFxuICAgICAgZGVjYXk6IDAuOCxcbiAgICAgIG1pbl90aW1lOiAzICogMTAwMCxcblxuICAgICAgLy8gSUdOT1JFRCB0YWJzXG4gICAgICBhY3RpdmU6IGZhbHNlLCAvLyB0aGVzZSBzdGF0dXMgYXJlIGFic29sdXRlbHkgcHJvdGVjdGVkIHRhYnM6IHRoZXNlIGFyZSBpZ25vcmVkIGFuZCBkbyBub3QgY291bnQgYXMgdGFicy5cbiAgICAgIHBpbm5lZDogdHJ1ZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICAvLyBQUk9URUNURUQgdGFic1xuICAgICAgYWN0aXZlOiB0cnVlLCAvLyB0aGVzZSB0YWJzIHdpbGwgYmUgZ2l2ZW4gYWJzb2x1dGUgbWF4aW11bSBzY29yZSArIGV4dGVuZGVkIHByb3RlY3Rpb25cbiAgICAgIHBpbm5lZDogdHJ1ZSwgLy8gd2hlbiB0aGUgc3RhdHVzIGlzIGxvc3QuXG4gICAgICBhdWRpYmxlOiB0cnVlLFxuXG4gICAgICBtaW5fYWN0aXZlOiA1ICogNjAgKiAxMDAwLFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDYwICogMTAwMCxcbiAgICAgIGNhY2hlZF9kZWNheTogMC4yLFxuICAgIH0sXG4gIH07XG5cbiAgSU5JVF9GT0NVU0VEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEwICogMTAwMCxcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiAxMCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgdGFyZ2V0X3RhYnM6IDUsXG4gICAgICBkZWNheTogMC44LFxuICAgICAgbWluX3RpbWU6IDMgKiAxMDAwLFxuXG4gICAgICAvLyBJR05PUkVEIHRhYnNcbiAgICAgIGFjdGl2ZTogZmFsc2UsIC8vIHRoZXNlIHN0YXR1cyBhcmUgYWJzb2x1dGVseSBwcm90ZWN0ZWQgdGFiczogdGhlc2UgYXJlIGlnbm9yZWQgYW5kIGRvIG5vdCBjb3VudCBhcyB0YWJzLlxuICAgICAgcGlubmVkOiB0cnVlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIC8vIFBST1RFQ1RFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHRhYnMgd2lsbCBiZSBnaXZlbiBhYnNvbHV0ZSBtYXhpbXVtIHNjb3JlICsgZXh0ZW5kZWQgcHJvdGVjdGlvblxuICAgICAgcGlubmVkOiB0cnVlLCAvLyB3aGVuIHRoZSBzdGF0dXMgaXMgbG9zdC5cbiAgICAgIGF1ZGlibGU6IHRydWUsXG5cbiAgICAgIG1pbl9hY3RpdmU6IDUgKiA2MCAqIDEwMDAsXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogNjAgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsXG4gICAgfSxcbiAgfTtcbn1cblxuT2JqZWN0LmZyZWV6ZShJTklUX0ZPQ1VTRURfUFJPRklMRSk7XG5PYmplY3QuZnJlZXplKElOSVRfUkVMQVhFRF9QUk9GSUxFKTtcblxuZXhwb3J0IHsgUkVMQVhFRCwgRk9DVVNFRCwgQ1VTVE9NSVpFRCwgSU5JVF9GT0NVU0VEX1BST0ZJTEUsIElOSVRfUkVMQVhFRF9QUk9GSUxFIH07XG4iLCJpbXBvcnQgKiBhcyBwc2wgZnJvbSAncHNsJztcbmltcG9ydCB7IE1BWF9BQ1RJVkVfREVCT1VOQ0UgfSBmcm9tICcuLi9jb25maWcvZW52LmpzJztcblxuY29uc3QgbG9nZ2VyID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgaWYgKEVOViA9PT0gJ2RlYnVnJyB8fCBFTlYgPT09ICdkZXYnKSB7XG4gICAgbGV0IGRlZmF1bHRfZm9ybWF0ID0gWydmb250LXdlaWdodDppbml0aWFsOyBjb2xvcjpibGFjazsnXTtcbiAgICBsZXQgcHJlID0gJyVjJyArIG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSArICclYyc7XG4gICAgbGV0IG9wdGlvbnMgPSBbJ2ZvbnQtd2VpZ2h0OmxpZ2h0ZXI7IGNvbG9yOkxpZ2h0U2xhdGVHcmV5OyddO1xuICAgIG9wdGlvbnMucHVzaChkZWZhdWx0X2Zvcm1hdCk7XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJlICs9ICcgfCAlYycgKyBhcmdzWzBdLmNvbnN0cnVjdG9yLm5hbWUgKyAnJWMgfCAnO1xuICAgICAgcHJlICs9IGFyZ3NbMV07XG4gICAgICBvcHRpb25zLnB1c2goJ2NvbG9yOiMxZGE4N2M7IGZvbnQtd2VpZ2h0OmJvbGRlcicpO1xuICAgICAgb3B0aW9ucy5wdXNoKGRlZmF1bHRfZm9ybWF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlICs9ICcgfCAnICsgYXJnc1swXTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJlLCAuLi5vcHRpb25zKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gY29weShvYmopIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbmZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmZ1bmN0aW9uIGdldERvbWFpbihzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHNsLnBhcnNlKG5ldyBVUkwoc3RyKS5ob3N0bmFtZSkuZG9tYWluO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0b3JhZ2VTZXQoYXJncykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChhcmdzLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdG9yYWdlR2V0KGFyZ3MpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoYXJncywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIC9eXFxkKyQvLnRlc3QodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZXRBbGxSZWFkQmFkZ2UoKSB7XG4gIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6ICcnIH0pOyAvLyA8LS0gc2V0IHRleHQgdG8gJycgdG8gcmVtb3ZlIHRoZSBiYWRnZVxufVxuXG5mdW5jdGlvbiBzZXRVbnJlYWRCYWRnZSgpIHtcbiAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3IoeyBjb2xvcjogWzIyOSwgOTIsIDAsIDEyOF0gfSk7XG4gIGNocm9tZS5icm93c2VyQWN0aW9uLmdldEJhZGdlVGV4dCh7fSwgZnVuY3Rpb24gKGJhZGdlVGV4dCkge1xuICAgIGxldCBjb3VudGVyID0gMTtcbiAgICBpZiAoaXNJbnRlZ2VyKGJhZGdlVGV4dCkpIHtcbiAgICAgIGNvdW50ZXIgPSBwYXJzZUludChiYWRnZVRleHQpICsgMTtcbiAgICB9XG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogYCR7Y291bnRlcn1gIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNVc2VyQWN0aXZlKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5pZGxlLnF1ZXJ5U3RhdGUoTWF0aC5yb3VuZChNQVhfQUNUSVZFX0RFQk9VTkNFIC8gMTAwMCksIChzdGF0dXMpID0+IHtcbiAgICAgIGlmIChzdGF0dXMgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cykge1xuICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ2dlcihcIkNvdWxkbid0IGNoZWNrIHVzZXIgYWN0aXZpdHkuXCIpO1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZVJlc2V0KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCAoZCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKE9iamVjdC5rZXlzKGQpLCAoKSA9PiB7XG4gICAgICAgIGxvZ2dlcignTWVtb3J5IGZsdXNoZWQuJyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdEZvY3VzZWRXaW5kb3coKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoeyBwb3B1bGF0ZTogZmFsc2UsIHdpbmRvd1R5cGVzOiBbJ25vcm1hbCddIH0sIChkKSA9PiByZXNvbHZlKGQuaWQpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0oYXJyLCB2YWx1ZSkge1xuICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKHZhbHVlKTtcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5jb25zdCByZXRyeVByb21pc2UgPSAoZnVuYywgZGVsYXksIHRpbWVzKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIHJldHVybiBmdW5jKClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICBpZiAocmVhc29uID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KHJlYXNvbik7XG4gICAgICB9XG4gICAgICBpZiAodGltZXMgPiAwKSB7XG4gICAgICAgIHJldHVybiB0aW1lb3V0KGRlbGF5KVxuICAgICAgICAgIC50aGVuKHJldHJ5UHJvbWlzZS5iaW5kKG51bGwsIGZ1bmMsIGRlbGF5LCB0aW1lcyAtIDEpKVxuICAgICAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVqZWN0KHJlYXNvbik7XG4gICAgfSk7XG59KTtcblxubG9nZ2VyKCdTdGFydGluZyBpbiAnICsgRU5WICsgJyBlbnYuJyk7XG5leHBvcnQge1xuICBsb2dnZXIsXG4gIGNvcHksXG4gIHRpbWVvdXQsXG4gIHJldHJ5UHJvbWlzZSxcbiAgZ2V0RG9tYWluLFxuICBzdG9yYWdlR2V0LFxuICBzdG9yYWdlU2V0LFxuICBzZXRBbGxSZWFkQmFkZ2UsXG4gIHNldFVucmVhZEJhZGdlLFxuICBpc0ludGVnZXIsXG4gIGlzVXNlckFjdGl2ZSxcbiAgc3RvcmFnZVJlc2V0LFxuICBnZXRMYXN0Rm9jdXNlZFdpbmRvdyxcbiAgcmVtb3ZlSXRlbSxcbn07XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhYm9vdHN0cmFwLWNzcy1vbmx5L2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEpO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxYjllNzQ7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uYm9sZC10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbjpmb2N1cyB7b3V0bGluZTowICFpbXBvcnRhbnQ7fVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwb3B1cFwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9hcHAvcG9wdXAuanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BzbF9pbmRleF9qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbWF0ZXJpYWwtdWlfY29yZV9MaW5rX0xpbmtfanMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfVHlwb2dyYXBoeV9ULWFkMWYxOVwiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9ICgpID0+IHtcblxufTtcbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdH1cblx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG5mdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cdHZhciBydW50aW1lID0gZGF0YVszXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufTtcblxudmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gfHwgW107XG52YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuanNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG52YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=