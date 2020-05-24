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
/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery/dist/jquery.min */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min */ "./node_modules/bootstrap/dist/js/bootstrap.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_HomeDispatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HomeDispatcher */ "./src/components/HomeDispatcher/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");







const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)({
  palette: {
    secondary: {
      main: '#1b9e74'
    }
  }
});

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.default, {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_HomeDispatcher__WEBPACK_IMPORTED_MODULE_5__.default, null), ' ');
}

react_dom__WEBPACK_IMPORTED_MODULE_3___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(App, null), document.getElementById('app'));

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
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/utils */ "./src/services/utils.js");










const RESTORE = 'RESTORE';
const NEXT = 'NEXT';
const REMOVED = 'REMOVED';
const CLOSED_HISTORY = 'closed_history';
const NUMBER_HOURS = 24;
const TIME_PERIOD_TO_CONSIDER = 3600000 * NUMBER_HOURS; // in microsecond

class Home extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);
    (0,_services_utils__WEBPACK_IMPORTED_MODULE_1__.setAllReadBadge)();
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
    (0,_services_utils__WEBPACK_IMPORTED_MODULE_1__.setAllReadBadge)();
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

  removeNextItem(key) {
    let items = this.state.nextList;
    this.restoreTab(items, key, RESTORE);
  }

  restoreTab(items, key, messageType) {
    const restoredTab = items[key];
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
    const MAX_LENGTH_TITLE = 50;
    const MAX_LENGTH_URL = 40;

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

          if (website.title && website.title.length > MAX_LENGTH_TITLE) {
            website.truncated_url = website.url.substring(0, MAX_LENGTH_URL).concat('...');
          } else {
            website.truncated_url = website.url;
          }

          return website;
        });
    }

    const isNext = listToBeRendered === NEXT;
    const filteredList = this.filterList(selectedList).reverse();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.listWebsites
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
      variant: "h6",
      className: classes.greenTitle
    }, isNext ? 'Next tabs to be closed' : `Last closed tabs`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.listItems
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__.default, {
      dense: true
    }, filteredList.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, `No tabs closed in the last ${NUMBER_HOURS} hours.`) : filteredList.map((website, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__.default, {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.gridAvatarWithTime
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: classes.timeDisplay
    }, `${website.hours_deletion}:${website.minutes_deletion}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__.default, {
      alt: website.title,
      src: website.favIconUrl,
      className: classes.avatarContainer
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__.default, {
      primary: website.truncated_url,
      secondary: website.title,
      className: classes.itemText
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_8__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
      size: "large",
      onClick: isNext ? this.removeNextItem.bind(this, i) : this.removeItem.bind(this, i),
      variant: "outline-primary",
      className: classes.button
    }, isNext ? 'Skip' : 'Restore')))))));
  }

  render() {
    const {
      classes
    } = this.props;
    const numberClosedTabsLastHour = this.state.closed_history ? this.filterList(this.state.closed_history).length : 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
      variant: "h3",
      className: classes.title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: classes.boldText
    }, numberClosedTabsLastHour ? numberClosedTabsLastHour : 'No', " tab", numberClosedTabsLastHour === 1 ? '' : 's'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: classes.middleText
    }, ' ', numberClosedTabsLastHour === 1 ? 'was' : 'were', " closed in the last", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: classes.boldText
    }, " ", `${NUMBER_HOURS} hours!`, " ")), this.renderList.bind(this)(REMOVED), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.linkToForm
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSdUEJHd0bL6ryFvZk220CoZp7cwvFxESorps7cngk0wQfyu-Q/viewform",
      target: "_blank"
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
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row'
  },
  greenTitle: {
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    color: '#1b9e74',
    borderBottom: `2px solid #1b9e74`,
    maxWidth: 225
  },
  boldText: {
    fontWeight: 'bold'
  },
  middleText: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5)
  },
  button: {
    color: '#1b9e74',
    borderColor: '#1b9e74',
    fontSize: 12
  },
  itemText: {
    maxWidth: 185,
    wordWrap: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxHeight: 80
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
  listItems: {
    maxHeight: 300,
    overflowY: 'scroll'
  },
  linkToForm: {
    position: 'relative',
    left: '55%',
    fontSize: 10,
    marginTop: 15,
    maxWidth: '75%'
  },
  avatarContainer: {
    maxWidth: theme.spacing(7),
    maxHeight: theme.spacing(7)
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
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/Tabs.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/Tab.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Settings */ "./src/components/Settings/index.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Home */ "./src/components/Home/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var _material_ui_core_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar/Avatar */ "./node_modules/@material-ui/core/Avatar/Avatar.js");
/* harmony import */ var _services_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utils.js */ "./src/services/utils.js");











class HomeDispatcher extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);
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

  handleChange(event, newValue) {
    this.setState({
      appBarValue: newValue
    });
    (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_4__.logger)(this, 'Switch to ' + newValue);
  }

  dispatchPage() {
    switch (this.state.appBarValue) {
      case 'HOME':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_2__.default, null);

      case 'SETTINGS':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Settings__WEBPACK_IMPORTED_MODULE_1__.default, null);

      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "This is an error page");
    }
  }

  render() {
    const {
      classes
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(notistack__WEBPACK_IMPORTED_MODULE_3__.SnackbarProvider, {
      maxSnack: 2,
      classes: {
        root: classes.notification
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.homeContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__.default, {
      square: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.gridLogoTabs
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_6__.default, {
      alt: "logoTabby",
      src: '../../assets/static/icons/tabby.png',
      className: classes.logoAvatar
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7__.default, {
      value: this.state.appBarValue ? this.state.appBarValue : 'HOME',
      onChange: (e, v) => this.handleChange(e, v),
      className: classes.allTabs
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__.default, {
      label: "Home",
      value: 'HOME',
      className: classes.tab
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__.default, {
      label: "Settings",
      value: 'SETTINGS',
      className: classes.tab
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, this.dispatchPage()))));
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
    color: '#1b9e74'
  },
  notification: {
    left: 150
  },
  gridLogoTabs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left'
  },
  allTabs: {
    maxWidth: '75%'
  },
  logoAvatar: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    width: theme.spacing(7.5),
    height: theme.spacing(7.5)
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
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/Switch.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Tune */ "./node_modules/@material-ui/icons/Tune.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/settingsProfiles.js */ "./src/config/settingsProfiles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/components/utils.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utils */ "./src/services/utils.js");
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

    _defineProperty(this, "handleSwitch", (path, parameter) => () => {
      let settings = this.state.settings;

      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.checkSettings)(this.state.settings)) {
        settings = _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.INIT_RELAXED_PROFILE;
      }

      settings[path][parameter] = !this.state.settings[path][parameter];
      this.setState({
        settings: settings,
        renderSaveBoolean: true
      }, () => {
        this.handleSaveParameters();
      });
    });

    this.state = {
      focusedMode: false,
      relaxedMode: false,
      customizedBool: false,
      settings: _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.INIT_RELAXED_PROFILE,
      renderSaveBoolean: false
    };

    this.onChangedCallback = function (changes) {
      const changesSettings = changes['settings'];
      const changesProfile = changes['active_profile'];

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
    }.bind(this);
  }

  componentDidMount() {
    chrome.storage.local.get(['active_profile', 'settings'], result => {
      const profile = result.active_profile || _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.RELAXED;
      const focusedMode = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.FOCUSED;
      const relaxedMode = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.RELAXED;
      const customizedBool = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.CUSTOMIZED;
      const settings = result.settings || _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.INIT_RELAXED_PROFILE;
      this.setState({
        focusedMode,
        relaxedMode,
        customizedBool,
        settings
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
      label: 'Optimal number of tabs ',
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
        checked: this.state.settings[_utils__WEBPACK_IMPORTED_MODULE_3__.POLICY][_utils__WEBPACK_IMPORTED_MODULE_3__.ACTIVE_POLICY],
        onChange: this.handleSwitch(_utils__WEBPACK_IMPORTED_MODULE_3__.POLICY, _utils__WEBPACK_IMPORTED_MODULE_3__.ACTIVE_POLICY),
        color: "secondary"
      }),
      label: "Enable Tabby"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.introductionBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_8__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_9__.default, {
      variant: "h3",
      className: classes.title
    }, "Select the suiting mode or customize it.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.textField
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.activeBar
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__.default, {
      className: classes.settingsWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__.default, {
        checked: this.state.focusedMode,
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.FOCUSED),
        value: "secondary",
        color: "secondary"
      }),
      label: "Focused",
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__.default, {
        checked: this.state.relaxedMode,
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.RELAXED),
        value: "secondary",
        color: "secondary"
      }),
      label: "Relaxed",
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__.default, {
      onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.CUSTOMIZED),
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_11__.default, {
        checked: this.state.customizedBool,
        value: "",
        color: "secondary"
      }),
      label: "Customize your settings' parameters"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.settingsBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__.default //className={classes.content}
    , {
      required: true,
      fullWidth: true
    }, listItemsParameters), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
      hidden: true,
      key: "hidden-textfield",
      disabled: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13__.default, {
      disabled: !this.state.customizedBool,
      className: classes.secondaryButton,
      variant: this.state.customizedBool ? 'outline-primary' : 'secondary',
      onClick: () => this.handleSaveParameters()
    }, "Save"))))));
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
  textField: {
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20
  },
  activeBar: {
    marginTop: 10
  },
  settingsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    maxHeight: '50%' //width: '100%',
    //height: '100vh',

  },
  secondaryButton: {
    marginTop: 10,
    //marginDown: 5,
    color: '#1b9e74',
    borderColor: '#1b9e74'
  },
  notification: {
    maxWidth: 150
  },
  introductionBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start' //marginTop: 20,

  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 10
  },
  settingsBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  firstBooleans: {
    maxWidth: '40%'
  },
  switchContainer: {
    colorPrimary: 'red',
    color: 'white'
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(styles)(_Settings__WEBPACK_IMPORTED_MODULE_0__.default));

/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/*! namespace exports */
/*! export ACTIVE_POLICY [provided] [used] [could be renamed] */
/*! export OPTIMAL_NUMBER_TABS [provided] [used] [could be renamed] */
/*! export POLICY [provided] [used] [could be renamed] */
/*! export checkSettings [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OPTIMAL_NUMBER_TABS": () => /* binding */ OPTIMAL_NUMBER_TABS,
/* harmony export */   "POLICY": () => /* binding */ POLICY,
/* harmony export */   "ACTIVE_POLICY": () => /* binding */ ACTIVE_POLICY,
/* harmony export */   "checkSettings": () => /* binding */ checkSettings
/* harmony export */ });
const OPTIMAL_NUMBER_TABS = 'target_tabs';
const POLICY = 'policy';
const ACTIVE_POLICY = 'active_policy';
function checkSettings(settings) {
  if (settings[POLICY][OPTIMAL_NUMBER_TABS] && settings[POLICY][OPTIMAL_NUMBER_TABS] > 0) {
    return true;
  } else {
    return false;
  }
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
      active_policy: true,
      target_tabs: 12,
      // tabby will stop closing tabs when we have less than target_tabs open
      decay: 0.8,
      // when the number of tab increases, tabby will delete more tabs
      min_time: 3 * 1000,
      // Tabby will kill about 1 tab per min_time (depending on activation rules)
      // IGNORED tabs
      active: true,
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
      active_policy: true,
      target_tabs: 5,
      decay: 0.8,
      min_time: 3 * 1000,
      // IGNORED tabs
      active: true,
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
/* harmony export */   "getLastFocusedWindow": () => /* binding */ getLastFocusedWindow,
/* harmony export */   "storageReset": () => /* binding */ storageReset
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

function getLastFocusedWindow() {
  return new Promise((resolve, reject) => {
    chrome.windows.getLastFocused({
      populate: false,
      windowTypes: ['normal']
    }, d => resolve(d.id));
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
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!bootstrap/dist/css/bootstrap.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/bootstrap/dist/css/bootstrap.min.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.id, ".todo-list-container {\n  min-width: 400px;\n}\n\n.todo-list {\n  max-height: 400px;\n  overflow-y: scroll;\n}\n\n.card-header {\n  background-color: rgba(255, 255, 255, 0.21);\n  min-width: 200px;\n}\n\n.card-title {\n  background-color: rgba(255, 255, 255, 0.21);\n  display: inline-block;\n  font-size: 18px;\n  margin-bottom: 2px;\n  line-height: 1;\n  border-bottom: 2px solid #1b9e74;\n  min-width: 300px;\n}\n\n.button {\n  color: #1b9e74;\n  border-color: #1b9e74;\n}\n\n.bold-title {\n  font-size: 16px;\n}\n", ""]);
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			["./src/app/popup.js","vendors-node_modules_psl_index_js","vendors-node_modules_material-ui_core_Avatar_Avatar_js-node_modules_material-ui_core_Typograp-f46f30"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9lbnYuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9zZXJ2aWNlcy91dGlscy5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzP2VhNWQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsIkFwcCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJFU1RPUkUiLCJORVhUIiwiUkVNT1ZFRCIsIkNMT1NFRF9ISVNUT1JZIiwiTlVNQkVSX0hPVVJTIiwiVElNRV9QRVJJT0RfVE9fQ09OU0lERVIiLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZXRBbGxSZWFkQmFkZ2UiLCJzdGF0ZSIsInJlbmRlclNhdmVCb29sZWFuIiwib25DaGFuZ2VkQ2FsbGJhY2siLCJjaGFuZ2VzIiwiY2hhbmdlc0Nsb3NlZEhpc3RvcnkiLCJzZXRTdGF0ZSIsImNsb3NlZF9oaXN0b3J5IiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwicmVzdWx0IiwibmV4dExpc3QiLCJvbkNoYW5nZWQiLCJhZGRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlTGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJmb3JjZVJlbmRlciIsInJlbW92ZUl0ZW0iLCJrZXkiLCJpdGVtcyIsInJldmVyc2UiLCJyZXN0b3JlVGFiIiwicmVtb3ZlTmV4dEl0ZW0iLCJtZXNzYWdlVHlwZSIsInJlc3RvcmVkVGFiIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidGFiSWQiLCJmaWx0ZXJMaXN0Iiwic2VsZWN0ZWRMaXN0Iiwibm93IiwiRGF0ZSIsImZpbHRlciIsIml0ZW0iLCJNYXRoIiwibWF4Iiwic3RhdGlzdGljcyIsInVwZGF0ZWRfYXQiLCJsYXN0X2FjdGl2ZV90aW1lc3RhbXAiLCJyZW5kZXJMaXN0IiwibGlzdFRvQmVSZW5kZXJlZCIsImNsYXNzZXMiLCJNQVhfTEVOR1RIX1RJVExFIiwiTUFYX0xFTkdUSF9VUkwiLCJtYXAiLCJ3ZWJzaXRlIiwiaSIsImRlbGV0aW9uVGltZSIsImRlbGV0aW9uX3RpbWUiLCJmb3JtYXR0ZWRfZGVsZXRpb25fdGltZSIsInRvVGltZVN0cmluZyIsInNwbGl0IiwiaG91cnNfZGVsZXRpb24iLCJtaW51dGVzX2RlbGV0aW9uIiwidGl0bGUiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJjb25jYXQiLCJ0cnVuY2F0ZWRfdXJsIiwidXJsIiwiaXNOZXh0IiwiZmlsdGVyZWRMaXN0IiwibGlzdFdlYnNpdGVzIiwiZ3JlZW5UaXRsZSIsImxpc3RJdGVtcyIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsImF2YXRhckNvbnRhaW5lciIsIml0ZW1UZXh0IiwiYnV0dG9uIiwicmVuZGVyIiwibnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIiwiYm9sZFRleHQiLCJtaWRkbGVUZXh0IiwibGlua1RvRm9ybSIsInN0eWxlcyIsImZvbnRTaXplIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjb2xvciIsImJvcmRlckJvdHRvbSIsIm1heFdpZHRoIiwiZm9udFdlaWdodCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwibWFyZ2luUmlnaHQiLCJib3JkZXJDb2xvciIsIndvcmRXcmFwIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJtYXJnaW5Ub3AiLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsImxlZnQiLCJ3aXRoU3R5bGVzIiwiSG9tZURpc3BhdGNoZXIiLCJhcHBCYXJWYWx1ZSIsImxvZ2dlciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJkaXNwYXRjaFBhZ2UiLCJyb290Iiwibm90aWZpY2F0aW9uIiwiaG9tZUNvbnRhaW5lciIsImdyaWRMb2dvVGFicyIsImxvZ29BdmF0YXIiLCJlIiwidiIsImFsbFRhYnMiLCJ0YWIiLCJtaW5XaWR0aCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwiaGVpZ2h0IiwiU2V0dGluZ3MiLCJwYXRoIiwicGFyYW1ldGVyIiwic2V0dGluZ3MiLCJuZXh0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlzSW50ZWdlciIsImNoZWNrU2V0dGluZ3MiLCJJTklUX1JFTEFYRURfUFJPRklMRSIsImhhbmRsZVNhdmVQYXJhbWV0ZXJzIiwiZm9jdXNlZE1vZGUiLCJyZWxheGVkTW9kZSIsImN1c3RvbWl6ZWRCb29sIiwiY2hhbmdlc1NldHRpbmdzIiwiY2hhbmdlc1Byb2ZpbGUiLCJGT0NVU0VEIiwiUkVMQVhFRCIsIkNVU1RPTUlaRUQiLCJwcm9maWxlIiwiYWN0aXZlX3Byb2ZpbGUiLCJoYW5kbGVCb29sQ2hhbmdlIiwiY2hhbmdlVHlwZSIsIm5vdGlmeVVzZXIiLCJzdWNjZXNzIiwiZW5xdWV1ZVNuYWNrYmFyIiwidmFyaWFudCIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImF1dG9IaWRlRHVyYXRpb24iLCJpbnB1dHNQYXJhbWV0ZXJzIiwibGFiZWwiLCJzb3VyY2UiLCJQT0xJQ1kiLCJPUFRJTUFMX05VTUJFUl9UQUJTIiwiaW5wdXRQcm9wcyIsIm1pbiIsInN0ZXAiLCJsaXN0SXRlbXNQYXJhbWV0ZXJzIiwiaW5kZXgiLCJoYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzIiwidGV4dEZpZWxkIiwiQUNUSVZFX1BPTElDWSIsImhhbmRsZVN3aXRjaCIsImludHJvZHVjdGlvbkJsb2NrIiwiYWN0aXZlQmFyIiwic2V0dGluZ3NXcmFwcGVyIiwiZmlyc3RCb29sZWFucyIsInNldHRpbmdzQmxvY2siLCJzZWNvbmRhcnlCdXR0b24iLCJ3aXRoU25hY2tiYXIiLCJzd2l0Y2hDb250YWluZXIiLCJjb2xvclByaW1hcnkiLCJTQ09SRVIiLCJNQVhJTVVNX1NDT1JFIiwiTUFYSU1VTV9ISVNUT1JZX1NJWkUiLCJTRVNTSU9OU19USU1FT1VUX01TIiwiU0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TIiwiTUlOX0FDVElWRV9ERUJPVU5DRSIsIk1BWF9BQ1RJVkVfREVCT1VOQ0UiLCJJTklUX0ZPQ1VTRURfUFJPRklMRSIsIkVOViIsIm1lbW9yeSIsImNhY2hlX3NpemUiLCJtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZSIsIm1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yIiwicG9saWN5IiwiYWN0aXZlX3BvbGljeSIsInRhcmdldF90YWJzIiwiZGVjYXkiLCJtaW5fdGltZSIsImFjdGl2ZSIsInBpbm5lZCIsImF1ZGlibGUiLCJzY29yZXIiLCJtaW5fYWN0aXZlIiwicHJvdGVjdGlvbl90aW1lIiwiY2FjaGVkX2RlY2F5IiwiT2JqZWN0IiwiZnJlZXplIiwiYXJncyIsImRlZmF1bHRfZm9ybWF0IiwicHJlIiwidG9VVENTdHJpbmciLCJvcHRpb25zIiwicHVzaCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY29weSIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInRpbWVvdXQiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImdldERvbWFpbiIsInN0ciIsInBzbCIsIlVSTCIsImhvc3RuYW1lIiwiZG9tYWluIiwic3RvcmFnZVNldCIsInJlamVjdCIsInNldCIsInN0b3JhZ2VHZXQiLCJkYXRhIiwidGVzdCIsImJyb3dzZXJBY3Rpb24iLCJzZXRCYWRnZVRleHQiLCJ0ZXh0Iiwic2V0VW5yZWFkQmFkZ2UiLCJzZXRCYWRnZUJhY2tncm91bmRDb2xvciIsImdldEJhZGdlVGV4dCIsImJhZGdlVGV4dCIsImNvdW50ZXIiLCJwYXJzZUludCIsImdldExhc3RGb2N1c2VkV2luZG93Iiwid2luZG93cyIsImdldExhc3RGb2N1c2VkIiwicG9wdWxhdGUiLCJ3aW5kb3dUeXBlcyIsImQiLCJpZCIsImlzVXNlckFjdGl2ZSIsImlkbGUiLCJxdWVyeVN0YXRlIiwicm91bmQiLCJzdGF0dXMiLCJzdG9yYWdlUmVzZXQiLCJyZW1vdmUiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyxpRUFBYyxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFDUEMsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRTtBQURHO0FBREo7QUFEa0IsQ0FBRCxDQUE1Qjs7QUFRQSxTQUFTQyxHQUFULEdBQWU7QUFDYixzQkFDRSwyREFBQyw2REFBRDtBQUFrQixTQUFLLEVBQUVMO0FBQXpCLGtCQUNFLDJEQUFDLCtEQUFELE9BREYsRUFDcUIsR0FEckIsQ0FERjtBQUtEOztBQUVETSx1REFBQSxlQUFnQiwyREFBQyxHQUFELE9BQWhCLEVBQXlCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxNQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsTUFBYjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsRUFBckI7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyxVQUFVRCxZQUExQyxDLENBQXdEOztBQUV4RCxNQUFNRSxJQUFOLFNBQW1C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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSx1QkFBdUI7V0FDdEM7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSwyQzs7OztVQzVGQTtVQUNBIiwiZmlsZSI6InBvcHVwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5taW4nO1xuaW1wb3J0ICcuLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZURpc3BhdGNoZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lRGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzFiOWU3NCcsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxIb21lRGlzcGF0Y2hlciAvPnsnICd9XG4gICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICApO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuaW1wb3J0IHsgc2V0QWxsUmVhZEJhZGdlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMnO1xuXG5jb25zdCBSRVNUT1JFID0gJ1JFU1RPUkUnO1xuY29uc3QgTkVYVCA9ICdORVhUJztcbmNvbnN0IFJFTU9WRUQgPSAnUkVNT1ZFRCc7XG5jb25zdCBDTE9TRURfSElTVE9SWSA9ICdjbG9zZWRfaGlzdG9yeSc7XG5jb25zdCBOVU1CRVJfSE9VUlMgPSAyNDtcbmNvbnN0IFRJTUVfUEVSSU9EX1RPX0NPTlNJREVSID0gMzYwMDAwMCAqIE5VTUJFUl9IT1VSUzsgLy8gaW4gbWljcm9zZWNvbmRcblxuY2xhc3MgSG9tZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBzZXRBbGxSZWFkQmFkZ2UoKTtcbiAgICB0aGlzLnN0YXRlID0geyByZW5kZXJTYXZlQm9vbGVhbjogZmFsc2UgfTtcbiAgICB0aGlzLm9uQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXNDbG9zZWRIaXN0b3J5ID0gY2hhbmdlc1tDTE9TRURfSElTVE9SWV07XG4gICAgICBpZiAoY2hhbmdlc0Nsb3NlZEhpc3RvcnkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2xvc2VkX2hpc3Rvcnk6IGNoYW5nZXNDbG9zZWRIaXN0b3J5WyduZXdWYWx1ZSddLFxuICAgICAgICAgIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW0NMT1NFRF9ISVNUT1JZXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSByZXN1bHQuY2xvc2VkX2hpc3RvcnkgfHwgW107XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VkX2hpc3RvcnkgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5leHRMaXN0OiBbXSB9KTtcbiAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBzZXRBbGxSZWFkQmFkZ2UoKTtcbiAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5yZW5kZXJTYXZlQm9vbGVhbikge1xuICAgICAgdGhpcy5mb3JjZVJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeS5yZXZlcnNlKCk7XG4gICAgdGhpcy5yZXN0b3JlVGFiKGl0ZW1zLCBrZXksIFJFU1RPUkUpO1xuICB9XG5cbiAgcmVtb3ZlTmV4dEl0ZW0oa2V5KSB7XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5zdGF0ZS5uZXh0TGlzdDtcbiAgICB0aGlzLnJlc3RvcmVUYWIoaXRlbXMsIGtleSwgUkVTVE9SRSk7XG4gIH1cblxuICByZXN0b3JlVGFiKGl0ZW1zLCBrZXksIG1lc3NhZ2VUeXBlKSB7XG4gICAgY29uc3QgcmVzdG9yZWRUYWIgPSBpdGVtc1trZXldO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlVHlwZSxcbiAgICAgIHRhYklkOiByZXN0b3JlZFRhYi50YWJJZCxcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlUmVuZGVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZW5kZXJTYXZlQm9vbGVhbjogZmFsc2UgfSk7XG4gIH1cblxuICBmaWx0ZXJMaXN0KHNlbGVjdGVkTGlzdCkge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNlbGVjdGVkTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG5vdyAtIE1hdGgubWF4KGl0ZW0uc3RhdGlzdGljcy51cGRhdGVkX2F0LCBpdGVtLnN0YXRpc3RpY3MubGFzdF9hY3RpdmVfdGltZXN0YW1wKSA8IFRJTUVfUEVSSU9EX1RPX0NPTlNJREVSXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyTGlzdChsaXN0VG9CZVJlbmRlcmVkKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHNlbGVjdGVkTGlzdDtcbiAgICBjb25zdCBNQVhfTEVOR1RIX1RJVExFID0gNTA7XG4gICAgY29uc3QgTUFYX0xFTkdUSF9VUkwgPSA0MDtcblxuICAgIHN3aXRjaCAobGlzdFRvQmVSZW5kZXJlZCkge1xuICAgICAgY2FzZSBORVhUOlxuICAgICAgICBzZWxlY3RlZExpc3QgPSB0aGlzLnN0YXRlLm5leHRMaXN0ID8gdGhpcy5zdGF0ZS5uZXh0TGlzdCA6IFtdO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHNlbGVjdGVkTGlzdCA9IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkgPyB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5IDogW107XG4gICAgICAgIHNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdC5tYXAoKHdlYnNpdGUsIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBkZWxldGlvblRpbWUgPSBuZXcgRGF0ZSh3ZWJzaXRlLmRlbGV0aW9uX3RpbWUpO1xuICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZF9kZWxldGlvbl90aW1lID0gZGVsZXRpb25UaW1lLnRvVGltZVN0cmluZygpLnNwbGl0KCcgJylbMF07XG4gICAgICAgICAgd2Vic2l0ZS5ob3Vyc19kZWxldGlvbiA9IGZvcm1hdHRlZF9kZWxldGlvbl90aW1lLnNwbGl0KCc6JylbMF07XG4gICAgICAgICAgd2Vic2l0ZS5taW51dGVzX2RlbGV0aW9uID0gZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUuc3BsaXQoJzonKVsxXTtcbiAgICAgICAgICBpZiAod2Vic2l0ZS50aXRsZSAmJiB3ZWJzaXRlLnRpdGxlLmxlbmd0aCA+IE1BWF9MRU5HVEhfVElUTEUpIHtcbiAgICAgICAgICAgIHdlYnNpdGUudGl0bGUgPSB3ZWJzaXRlLnRpdGxlLnN1YnN0cmluZygwLCBNQVhfTEVOR1RIX1RJVExFKS5jb25jYXQoJy4uLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAod2Vic2l0ZS50aXRsZSAmJiB3ZWJzaXRlLnRpdGxlLmxlbmd0aCA+IE1BWF9MRU5HVEhfVElUTEUpIHtcbiAgICAgICAgICAgIHdlYnNpdGUudHJ1bmNhdGVkX3VybCA9IHdlYnNpdGUudXJsLnN1YnN0cmluZygwLCBNQVhfTEVOR1RIX1VSTCkuY29uY2F0KCcuLi4nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2Vic2l0ZS50cnVuY2F0ZWRfdXJsID0gd2Vic2l0ZS51cmw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB3ZWJzaXRlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgaXNOZXh0ID0gbGlzdFRvQmVSZW5kZXJlZCA9PT0gTkVYVDtcbiAgICBjb25zdCBmaWx0ZXJlZExpc3QgPSB0aGlzLmZpbHRlckxpc3Qoc2VsZWN0ZWRMaXN0KS5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RXZWJzaXRlc30+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmVlblRpdGxlfT5cbiAgICAgICAgICB7aXNOZXh0ID8gJ05leHQgdGFicyB0byBiZSBjbG9zZWQnIDogYExhc3QgY2xvc2VkIHRhYnNgfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtc30+XG4gICAgICAgICAgPExpc3QgZGVuc2U9e3RydWV9PlxuICAgICAgICAgICAge2ZpbHRlcmVkTGlzdC5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxwPntgTm8gdGFicyBjbG9zZWQgaW4gdGhlIGxhc3QgJHtOVU1CRVJfSE9VUlN9IGhvdXJzLmB9PC9wPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgZmlsdGVyZWRMaXN0Lm1hcCgod2Vic2l0ZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZEF2YXRhcldpdGhUaW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpbWVEaXNwbGF5fT5cbiAgICAgICAgICAgICAgICAgICAgICB7YCR7d2Vic2l0ZS5ob3Vyc19kZWxldGlvbn06JHt3ZWJzaXRlLm1pbnV0ZXNfZGVsZXRpb259YH1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9e3dlYnNpdGUudGl0bGV9IHNyYz17d2Vic2l0ZS5mYXZJY29uVXJsfSBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyQ29udGFpbmVyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e3dlYnNpdGUudHJ1bmNhdGVkX3VybH1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXt3ZWJzaXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtpc05leHQgPyB0aGlzLnJlbW92ZU5leHRJdGVtLmJpbmQodGhpcywgaSkgOiB0aGlzLnJlbW92ZUl0ZW0uYmluZCh0aGlzLCBpKX1cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2lzTmV4dCA/ICdTa2lwJyA6ICdSZXN0b3JlJ31cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5ID8gdGhpcy5maWx0ZXJMaXN0KHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkpLmxlbmd0aCA6IDA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmJvbGRUZXh0fT5cbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPyBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgOiAnTm8nfSB0YWJcbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPT09IDEgPyAnJyA6ICdzJ31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLm1pZGRsZVRleHR9PlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPT09IDEgPyAnd2FzJyA6ICd3ZXJlJ30gY2xvc2VkIGluIHRoZSBsYXN0eycgJ31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmJvbGRUZXh0fT4ge2Ake05VTUJFUl9IT1VSU30gaG91cnMhYH0gPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIHt0aGlzLnJlbmRlckxpc3QuYmluZCh0aGlzKShSRU1PVkVEKX1cbiAgICAgICAgey8qe3RoaXMucmVuZGVyTGlzdC5iaW5kKHRoaXMpKE5FWFQpfSovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVG9Gb3JtfT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvZS8xRkFJcFFMU2RVRUpIZDBiTDZyeUZ2WmsyMjBDb1pwN2N3dkZ4RVNvcnBzN2NuZ2swd1FmeXUtUS92aWV3Zm9ybVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlcG9ydCBhIGJ1ZyBvciBzZW5kIHVzIGEgZmVlZGJhY2s/XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgfSxcbiAgZ3JlZW5UaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgY29sb3I6ICcjMWI5ZTc0JyxcbiAgICBib3JkZXJCb3R0b206IGAycHggc29saWQgIzFiOWU3NGAsXG4gICAgbWF4V2lkdGg6IDIyNSxcbiAgfSxcbiAgYm9sZFRleHQ6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0sXG4gIG1pZGRsZVRleHQ6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6ICcjMWI5ZTc0JyxcbiAgICBib3JkZXJDb2xvcjogJyMxYjllNzQnLFxuICAgIGZvbnRTaXplOiAxMixcbiAgfSxcbiAgaXRlbVRleHQ6IHtcbiAgICBtYXhXaWR0aDogMTg1LFxuICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICBtYXhIZWlnaHQ6IDgwLFxuICB9LFxuICB0aW1lRGlzcGxheToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTQsXG4gIH0sXG4gIGdyaWRBdmF0YXJXaXRoVGltZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgfSxcbiAgbGlzdFdlYnNpdGVzOiB7XG4gICAgbWFyZ2luVG9wOiAyMCxcbiAgfSxcbiAgbGlzdEl0ZW1zOiB7XG4gICAgbWF4SGVpZ2h0OiAzMDAsXG4gICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbiAgfSxcbiAgbGlua1RvRm9ybToge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGxlZnQ6ICc1NSUnLFxuICAgIGZvbnRTaXplOiAxMCxcbiAgICBtYXJnaW5Ub3A6IDE1LFxuICAgIG1heFdpZHRoOiAnNzUlJyxcbiAgfSxcbiAgYXZhdGFyQ29udGFpbmVyOiB7XG4gICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgbWF4SGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDcpLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuLi9TZXR0aW5ncyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9Ib21lJztcbmltcG9ydCB7IFNuYWNrYmFyUHJvdmlkZXIgfSBmcm9tICdub3Rpc3RhY2snO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXIvQXZhdGFyJztcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhci9MaXN0SXRlbUF2YXRhcic7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscy5qcyc7XG5cbmNsYXNzIEhvbWVEaXNwYXRjaGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGFwcEJhclZhbHVlOiAnSE9NRScgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBCYXJWYWx1ZTogJ0hPTUUnIH0pO1xuICAgIGxvZ2dlcih0aGlzLCAnUG9wdXAgb3BlbmVkJyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQsIG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFwcEJhclZhbHVlOiBuZXdWYWx1ZSB9KTtcbiAgICBsb2dnZXIodGhpcywgJ1N3aXRjaCB0byAnICsgbmV3VmFsdWUpO1xuICB9XG5cbiAgZGlzcGF0Y2hQYWdlKCkge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5hcHBCYXJWYWx1ZSkge1xuICAgICAgY2FzZSAnSE9NRSc6XG4gICAgICAgIHJldHVybiA8SG9tZSAvPjtcbiAgICAgIGNhc2UgJ1NFVFRJTkdTJzpcbiAgICAgICAgcmV0dXJuIDxTZXR0aW5ncyAvPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8ZGl2PlRoaXMgaXMgYW4gZXJyb3IgcGFnZTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U25hY2tiYXJQcm92aWRlclxuICAgICAgICBtYXhTbmFjaz17Mn1cbiAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgIHJvb3Q6IGNsYXNzZXMubm90aWZpY2F0aW9uLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ob21lQ29udGFpbmVyfT5cbiAgICAgICAgICA8UGFwZXIgc3F1YXJlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZExvZ29UYWJzfT5cbiAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJsb2dvVGFiYnlcIiBzcmM9eycuLi8uLi9hc3NldHMvc3RhdGljL2ljb25zL3RhYmJ5LnBuZyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQXZhdGFyfSAvPlxuICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFwcEJhclZhbHVlID8gdGhpcy5zdGF0ZS5hcHBCYXJWYWx1ZSA6ICdIT01FJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHYpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsIHYpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hbGxUYWJzfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkhvbWVcIiB2YWx1ZT17J0hPTUUnfSBjbGFzc05hbWU9e2NsYXNzZXMudGFifSAvPlxuICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJTZXR0aW5nc1wiIHZhbHVlPXsnU0VUVElOR1MnfSBjbGFzc05hbWU9e2NsYXNzZXMudGFifSAvPlxuICAgICAgICAgICAgICAgIHsvKjxUYWIgbGFiZWw9XCJEZWJ1Z1wiIHZhbHVlPXtcIkRFQlVHXCJ9IGRpc2FibGVkIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJ9Lz4qL31cbiAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2Pnt0aGlzLmRpc3BhdGNoUGFnZSgpfTwvZGl2PlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TbmFja2JhclByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZURpc3BhdGNoZXI7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IEhvbWVEaXNwYXRjaGVyIGZyb20gJy4vSG9tZURpc3BhdGNoZXInO1xuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWIvVGFiJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgaG9tZUNvbnRhaW5lcjoge1xuICAgIG1pbldpZHRoOiA0MDAsXG4gIH0sXG4gIHRhYjoge1xuICAgIGNvbG9yOiAnIzFiOWU3NCcsXG4gIH0sXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIGxlZnQ6IDE1MCxcbiAgfSxcbiAgZ3JpZExvZ29UYWJzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnbGVmdCcsXG4gIH0sXG4gIGFsbFRhYnM6IHtcbiAgICBtYXhXaWR0aDogJzc1JScsXG4gIH0sXG4gIGxvZ29BdmF0YXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3LjUpLFxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZyg3LjUpLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZURpc3BhdGNoZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHkvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgVHVuZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R1bmUnO1xuaW1wb3J0IHsgd2l0aFNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCB7XG4gIFJFTEFYRUQsXG4gIEZPQ1VTRUQsXG4gIENVU1RPTUlaRUQsXG4gIElOSVRfRk9DVVNFRF9QUk9GSUxFLFxuICBJTklUX1JFTEFYRURfUFJPRklMRSxcbn0gZnJvbSAnLi4vLi4vY29uZmlnL3NldHRpbmdzUHJvZmlsZXMuanMnO1xuaW1wb3J0IHsgY2hlY2tTZXR0aW5ncywgT1BUSU1BTF9OVU1CRVJfVEFCUywgUE9MSUNZLCBBQ1RJVkVfUE9MSUNZIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaXNJbnRlZ2VyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMnO1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9jdXNlZE1vZGU6IGZhbHNlLFxuICAgICAgcmVsYXhlZE1vZGU6IGZhbHNlLFxuICAgICAgY3VzdG9taXplZEJvb2w6IGZhbHNlLFxuICAgICAgc2V0dGluZ3M6IElOSVRfUkVMQVhFRF9QUk9GSUxFLFxuICAgICAgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5vbkNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBjaGFuZ2VzU2V0dGluZ3MgPSBjaGFuZ2VzWydzZXR0aW5ncyddO1xuICAgICAgY29uc3QgY2hhbmdlc1Byb2ZpbGUgPSBjaGFuZ2VzWydhY3RpdmVfcHJvZmlsZSddO1xuICAgICAgaWYgKGNoYW5nZXNTZXR0aW5ncykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZXR0aW5nczogY2hhbmdlc1NldHRpbmdzWyduZXdWYWx1ZSddLFxuICAgICAgICAgIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VzUHJvZmlsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmb2N1c2VkTW9kZTogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IEZPQ1VTRUQsXG4gICAgICAgICAgcmVsYXhlZE1vZGU6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBSRUxBWEVELFxuICAgICAgICAgIGN1c3RvbWl6ZWRCb29sOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gQ1VTVE9NSVpFRCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnYWN0aXZlX3Byb2ZpbGUnLCAnc2V0dGluZ3MnXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgcHJvZmlsZSA9IHJlc3VsdC5hY3RpdmVfcHJvZmlsZSB8fCBSRUxBWEVEO1xuICAgICAgY29uc3QgZm9jdXNlZE1vZGUgPSBwcm9maWxlID09PSBGT0NVU0VEO1xuICAgICAgY29uc3QgcmVsYXhlZE1vZGUgPSBwcm9maWxlID09PSBSRUxBWEVEO1xuICAgICAgY29uc3QgY3VzdG9taXplZEJvb2wgPSBwcm9maWxlID09PSBDVVNUT01JWkVEO1xuICAgICAgY29uc3Qgc2V0dGluZ3MgPSByZXN1bHQuc2V0dGluZ3MgfHwgSU5JVF9SRUxBWEVEX1BST0ZJTEU7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE1vZGUsXG4gICAgICAgIHJlbGF4ZWRNb2RlLFxuICAgICAgICBjdXN0b21pemVkQm9vbCxcbiAgICAgICAgc2V0dGluZ3MsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5yZW5kZXJTYXZlQm9vbGVhbikge1xuICAgICAgdGhpcy5mb3JjZVJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUJvb2xDaGFuZ2UoY2hhbmdlVHlwZSkge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2VUeXBlOiAnU0VUVElOR1NfUFJPRklMRScsXG4gICAgICBwcm9maWxlOiBjaGFuZ2VUeXBlLFxuICAgIH0pO1xuICAgIGlmIChjaGFuZ2VUeXBlID09PSBSRUxBWEVEIHx8IGNoYW5nZVR5cGUgPT09IEZPQ1VTRUQpIHtcbiAgICAgIHRoaXMubm90aWZ5VXNlcih0cnVlKTtcbiAgICB9XG4gIH1cblxuICBmb3JjZVJlbmRlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlIH0pO1xuICB9XG5cbiAgaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKSB7XG4gICAgLy8gVE9ETyBBZGQgZnVuY3Rpb24gdG8gY2hlY2sgZm9yIGFsbCBwb3RlbnRpYWwgdmFsdWVzXG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICBpZiAoY2hlY2tTZXR0aW5ncyh0aGlzLnN0YXRlLnNldHRpbmdzKSkge1xuICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ1NFVFRJTkdTX1BBUkFNRVRFUlMnLFxuICAgICAgICBzZXR0aW5nczogdGhpcy5zdGF0ZS5zZXR0aW5ncyxcbiAgICAgIH0pO1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubm90aWZ5VXNlcihzdWNjZXNzKTtcbiAgfVxuXG4gIG5vdGlmeVVzZXIoc3VjY2Vzcykge1xuICAgIHRoaXMucHJvcHMuZW5xdWV1ZVNuYWNrYmFyKHN1Y2Nlc3MgPyAnTmV3IFNldHRpbmdzIGFyZSBzYXZlZC4nIDogJ1NldHRpbmdzIGNhbm5vdCBiZSBzYXZlZC4nLCB7XG4gICAgICB2YXJpYW50OiBzdWNjZXNzID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyxcbiAgICAgIGFuY2hvck9yaWdpbjoge1xuICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICB9LFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiA3NTAsXG4gICAgICBhdXRvSGlkZUR1cmF0aW9uOiAxNTAwLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlUGFyYW1ldGVycyA9IChwYXRoLCBwYXJhbWV0ZXIpID0+IChldmVudCkgPT4ge1xuICAgIGxldCBzZXR0aW5ncyA9IHRoaXMuc3RhdGUuc2V0dGluZ3M7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChpc0ludGVnZXIobmV4dFZhbHVlKSB8fCBuZXh0VmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXR0aW5nc1twYXRoXVtwYXJhbWV0ZXJdID0gbmV4dFZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNldHRpbmdzOiBzZXR0aW5ncywgcmVuZGVyU2F2ZUJvb2xlYW46IHRydWUgfSk7XG4gICAgfVxuICB9O1xuICBoYW5kbGVTd2l0Y2ggPSAocGF0aCwgcGFyYW1ldGVyKSA9PiAoKSA9PiB7XG4gICAgbGV0IHNldHRpbmdzID0gdGhpcy5zdGF0ZS5zZXR0aW5ncztcbiAgICBpZiAoIWNoZWNrU2V0dGluZ3ModGhpcy5zdGF0ZS5zZXR0aW5ncykpIHtcbiAgICAgIHNldHRpbmdzID0gSU5JVF9SRUxBWEVEX1BST0ZJTEU7XG4gICAgfVxuICAgIHNldHRpbmdzW3BhdGhdW3BhcmFtZXRlcl0gPSAhdGhpcy5zdGF0ZS5zZXR0aW5nc1twYXRoXVtwYXJhbWV0ZXJdO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZXR0aW5nczogc2V0dGluZ3MsIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlIH0sICgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlucHV0c1BhcmFtZXRlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnT3B0aW1hbCBudW1iZXIgb2YgdGFicyAnLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgICAgIHBhdGg6IFBPTElDWSxcbiAgICAgICAgcGFyYW1ldGVyOiBPUFRJTUFMX05VTUJFUl9UQUJTLFxuICAgICAgICBpbnB1dFByb3BzOiB7IG1pbjogJzEnLCBtYXg6ICcxMDAnLCBzdGVwOiAnMScgfSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBsaXN0SXRlbXNQYXJhbWV0ZXJzID0gaW5wdXRzUGFyYW1ldGVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVBhcmFtZXRlcnMoaXRlbS5wYXRoLCBpdGVtLnBhcmFtZXRlcil9XG4gICAgICAgIHZhbHVlPXtpdGVtLnNvdXJjZVtpdGVtLnBhdGhdW2l0ZW0ucGFyYW1ldGVyXX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIG9uS2V5VXA9eyhldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykgdGhpcy5oYW5kbGVTYXZlUGFyYW1ldGVycygpO1xuICAgICAgICB9fVxuICAgICAgICBpbnB1dFByb3BzPXtpdGVtLmlucHV0UHJvcHN9XG4gICAgICAvPlxuICAgICkpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnNldHRpbmdzW1BPTElDWV1bQUNUSVZFX1BPTElDWV19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN3aXRjaChQT0xJQ1ksIEFDVElWRV9QT0xJQ1kpfVxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICBsYWJlbD1cIkVuYWJsZSBUYWJieVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmludHJvZHVjdGlvbkJsb2NrfT5cbiAgICAgICAgICA8VHVuZUljb24gLz5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgU2VsZWN0IHRoZSBzdWl0aW5nIG1vZGUgb3IgY3VzdG9taXplIGl0LlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aXZlQmFyfT48L2Rpdj5cbiAgICAgICAgICB7Lyo8aDEgY2xhc3NOYW1lPXtcImJvbGQtdGl0bGVcIn0+U2VsZWN0IFRhYmJ5J3Mgb3BlcmF0aW5nIG1vZGU6PC9oMT4qL31cbiAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NXcmFwcGVyfT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5mb2N1c2VkTW9kZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoRk9DVVNFRCl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsYWJlbD1cIkZvY3VzZWRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCb29sZWFuc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVsYXhlZE1vZGV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVCb29sQ2hhbmdlKFJFTEFYRUQpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGFiZWw9XCJSZWxheGVkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0Qm9vbGVhbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlQm9vbENoYW5nZShDVVNUT01JWkVEKX1cbiAgICAgICAgICAgICAgY29udHJvbD17PENoZWNrYm94IGNoZWNrZWQ9e3RoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9IHZhbHVlPVwiXCIgY29sb3I9XCJzZWNvbmRhcnlcIiAvPn1cbiAgICAgICAgICAgICAgbGFiZWw9XCJDdXN0b21pemUgeW91ciBzZXR0aW5ncycgcGFyYW1ldGVyc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NCbG9ja30+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICAgIC8vY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsaXN0SXRlbXNQYXJhbWV0ZXJzfVxuICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpZGRlbiBrZXk9XCJoaWRkZW4tdGV4dGZpZWxkXCIgZGlzYWJsZWQgLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kYXJ5QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD17dGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbCA/ICdvdXRsaW5lLXByaW1hcnknIDogJ3NlY29uZGFyeSd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVNhdmVQYXJhbWV0ZXJzKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTbmFja2JhcihTZXR0aW5ncyk7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vU2V0dGluZ3MnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHRleHRGaWVsZDoge1xuICAgIG1hcmdpblRvcDogMCxcbiAgICBtYXJnaW5MZWZ0OiAyMCxcbiAgICBtYXJnaW5SaWdodDogMjAsXG4gIH0sXG4gIGFjdGl2ZUJhcjoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gIH0sXG5cbiAgc2V0dGluZ3NXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIG1heEhlaWdodDogJzUwJScsXG4gICAgLy93aWR0aDogJzEwMCUnLFxuICAgIC8vaGVpZ2h0OiAnMTAwdmgnLFxuICB9LFxuICBzZWNvbmRhcnlCdXR0b246IHtcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIC8vbWFyZ2luRG93bjogNSxcbiAgICBjb2xvcjogJyMxYjllNzQnLFxuICAgIGJvcmRlckNvbG9yOiAnIzFiOWU3NCcsXG4gIH0sXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIG1heFdpZHRoOiAxNTAsXG4gIH0sXG4gIGludHJvZHVjdGlvbkJsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIC8vbWFyZ2luVG9wOiAyMCxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE3LFxuICAgIG1hcmdpbkxlZnQ6IDEwLFxuICB9LFxuICBzZXR0aW5nc0Jsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGZpcnN0Qm9vbGVhbnM6IHtcbiAgICBtYXhXaWR0aDogJzQwJScsXG4gIH0sXG4gIHN3aXRjaENvbnRhaW5lcjoge1xuICAgIGNvbG9yUHJpbWFyeTogJ3JlZCcsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShTZXR0aW5ncyk7XG4iLCJleHBvcnQgY29uc3QgT1BUSU1BTF9OVU1CRVJfVEFCUyA9ICd0YXJnZXRfdGFicyc7XG5leHBvcnQgY29uc3QgUE9MSUNZID0gJ3BvbGljeSc7XG5leHBvcnQgY29uc3QgQUNUSVZFX1BPTElDWSA9ICdhY3RpdmVfcG9saWN5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgaWYgKHNldHRpbmdzW1BPTElDWV1bT1BUSU1BTF9OVU1CRVJfVEFCU10gJiYgc2V0dGluZ3NbUE9MSUNZXVtPUFRJTUFMX05VTUJFUl9UQUJTXSA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImNvbnN0IFNDT1JFUiA9ICd2MSc7IC8vIG9ubHkgZGVmYXVsdCBpbXBsZW1lbnRlZFxuY29uc3QgTUFYSU1VTV9TQ09SRSA9IDEwOyAvLyBtYXggc2NvcmUgZm9yIHNjb3JlclxuY29uc3QgTUFYSU1VTV9ISVNUT1JZX1NJWkUgPSAxMDAwOyAvLyBtYXgga2lsbGVkIHRhYiBoaXN0b3J5IGluIG1lbW9yeVxuY29uc3QgU0VTU0lPTlNfVElNRU9VVF9NUyA9IDgwMDsgLy8gd2hlbiBhIHRhYiBpcyBraWxsZWQgd2UgbmVlZCBhIHRpbWVvdXQgdG8gcmV0cmlldmUgdGhlIHNlc3Npb25JZFxuY29uc3QgU0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TID0gMTAwMCAqIDU7IC8vIHRpbWUgaXMgZnV6enkgbWF0Y2hlZCB0byByZXRpcmV2ZSB0aGUgY29ycmVjdCBzZXNzaW9uSUQsIHNob3VsZCBiZSBoaWdoZXIgdGhhbiBTRVNTSU9OU19USU1FT1VUX01TXG5jb25zdCBNSU5fQUNUSVZFX0RFQk9VTkNFID0gMTAwMCAqIDI7IC8vIG1pbmltdW0gYWN0aXZlIHJlYWRpbmcgb24gYSB0YWIgdG8gYmUgY291bnRlZCBhcyB2YWxpZCAndXNlZnVsJyB0aW1lXG5jb25zdCBNQVhfQUNUSVZFX0RFQk9VTkNFID0gMTAwMCAqIDYwICogNTsgLy8gbWF4aW11bSB0aW1lIHdpdGhvdXQgYW55IHVzZXIgaW5wdXQgYmVmb3JlIGl0IGlzIGNvbnNpZGVyZWQgaWRsZWQsIG11c3QgYmUgaGlnaGVyIHRoYW4gMTVzZWNcblxuZXhwb3J0IHtcbiAgU0NPUkVSLFxuICBNQVhJTVVNX1NDT1JFLFxuICBNQVhJTVVNX0hJU1RPUllfU0laRSxcbiAgU0VTU0lPTlNfVElNRU9VVF9NUyxcbiAgU0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TLFxuICBNSU5fQUNUSVZFX0RFQk9VTkNFLFxuICBNQVhfQUNUSVZFX0RFQk9VTkNFLFxufTtcbiIsImNvbnN0IFJFTEFYRUQgPSAncmVsYXhlZCc7XG5jb25zdCBGT0NVU0VEID0gJ2ZvY3VzZWQnO1xuY29uc3QgQ1VTVE9NSVpFRCA9ICdjdXN0b21pemVkJztcbnZhciBJTklUX1JFTEFYRURfUFJPRklMRSA9IHt9O1xudmFyIElOSVRfRk9DVVNFRF9QUk9GSUxFID0ge307XG5cbmlmIChFTlYgPT09ICdkZWJ1ZycpIHtcbiAgSU5JVF9SRUxBWEVEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEgKiAxMDAwLCAvLyBtaW5pbXVtIHRpbWUgYmV0d2VlbiAyIGZ1bGwgc3RhdHMgdXBkYXRlIGZvciBhbGwgdGFic1xuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDUgKiAxMDAwLCAvLyBtaW5pbXVtIHRpbWUgYmV0d2VlbiAyIGZ1bGwgdGFiIGdhcmJhZ2UgY29sbGVjdGlvblxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICBhY3RpdmVfcG9saWN5OiB0cnVlLFxuICAgICAgdGFyZ2V0X3RhYnM6IDEyLCAvLyB0YWJieSB3aWxsIHN0b3AgY2xvc2luZyB0YWJzIHdoZW4gd2UgaGF2ZSBsZXNzIHRoYW4gdGFyZ2V0X3RhYnMgb3BlblxuICAgICAgZGVjYXk6IDAuOCwgLy8gd2hlbiB0aGUgbnVtYmVyIG9mIHRhYiBpbmNyZWFzZXMsIHRhYmJ5IHdpbGwgZGVsZXRlIG1vcmUgdGFic1xuICAgICAgbWluX3RpbWU6IDMgKiAxMDAwLCAvLyBUYWJieSB3aWxsIGtpbGwgYWJvdXQgMSB0YWIgcGVyIG1pbl90aW1lIChkZXBlbmRpbmcgb24gYWN0aXZhdGlvbiBydWxlcylcblxuICAgICAgLy8gSUdOT1JFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHN0YXR1cyBhcmUgYWJzb2x1dGVseSBwcm90ZWN0ZWQgdGFiczogdGhlc2UgYXJlIGlnbm9yZWQgYW5kIGRvIG5vdCBjb3VudCBhcyB0YWJzLlxuICAgICAgcGlubmVkOiB0cnVlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIC8vIFBST1RFQ1RFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHRhYnMgd2lsbCBiZSBnaXZlbiBhYnNvbHV0ZSBtYXhpbXVtIHNjb3JlICsgZXh0ZW5kZWQgcHJvdGVjdGlvblxuICAgICAgcGlubmVkOiB0cnVlLCAvLyB3aGVuIHRoZSBzdGF0dXMgaXMgbG9zdC5cbiAgICAgIGF1ZGlibGU6IHRydWUsXG5cbiAgICAgIG1pbl9hY3RpdmU6IDUgKiAxMDAwLCAvLyBtaW5pbXVtIHRpbWUgYSB0YWIgaGFzIHRvIGV4aXN0IGJlZm9yZSBiZWluZyBzY29yZWRcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiAxMDAwLCAvLyBBIHJlc3RvcmVkIHRhYiBpcyBwcm90ZWN0ZWQgZm9yIHRoaXMgbG9uZ1xuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsIC8vIEluIGN1cnJlbnQgc2NvcmVyLCB0aGUgY2FjaGUgc2NvcmUgaXMgYWRkZWQgdG8gdGhlIGN1cnJlbnQgc2NvcmUgd2l0aCBhIGRlY3JlYXNpbmcgZmFjdG9yXG4gICAgfSxcbiAgfTtcblxuICBJTklUX0ZPQ1VTRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMSAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogNSAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIGFjdGl2ZV9wb2xpY3k6IHRydWUsXG4gICAgICB0YXJnZXRfdGFiczogNSxcbiAgICAgIGRlY2F5OiAwLjgsXG4gICAgICBtaW5fdGltZTogMyAqIDEwMDAsXG5cbiAgICAgIC8vIElHTk9SRUQgdGFic1xuICAgICAgYWN0aXZlOiB0cnVlLCAvLyB0aGVzZSBzdGF0dXMgYXJlIGFic29sdXRlbHkgcHJvdGVjdGVkIHRhYnM6IHRoZXNlIGFyZSBpZ25vcmVkIGFuZCBkbyBub3QgY291bnQgYXMgdGFicy5cbiAgICAgIHBpbm5lZDogdHJ1ZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICAvLyBQUk9URUNURUQgdGFic1xuICAgICAgYWN0aXZlOiB0cnVlLCAvLyB0aGVzZSB0YWJzIHdpbGwgYmUgZ2l2ZW4gYWJzb2x1dGUgbWF4aW11bSBzY29yZSArIGV4dGVuZGVkIHByb3RlY3Rpb25cbiAgICAgIHBpbm5lZDogdHJ1ZSwgLy8gd2hlbiB0aGUgc3RhdHVzIGlzIGxvc3QuXG4gICAgICBhdWRpYmxlOiB0cnVlLFxuXG4gICAgICBtaW5fYWN0aXZlOiA1ICogMTAwMCxcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsXG4gICAgfSxcbiAgfTtcbn0gZWxzZSB7XG4gIElOSVRfUkVMQVhFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxMCAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogMTAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIGFjdGl2ZV9wb2xpY3k6IHRydWUsXG4gICAgICB0YXJnZXRfdGFiczogMTIsXG4gICAgICBkZWNheTogMC44LFxuICAgICAgbWluX3RpbWU6IDMgKiAxMDAwLFxuXG4gICAgICAvLyBJR05PUkVEIHRhYnNcbiAgICAgIGFjdGl2ZTogdHJ1ZSwgLy8gdGhlc2Ugc3RhdHVzIGFyZSBhYnNvbHV0ZWx5IHByb3RlY3RlZCB0YWJzOiB0aGVzZSBhcmUgaWdub3JlZCBhbmQgZG8gbm90IGNvdW50IGFzIHRhYnMuXG4gICAgICBwaW5uZWQ6IHRydWUsXG4gICAgICBhdWRpYmxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHNjb3Jlcjoge1xuICAgICAgLy8gUFJPVEVDVEVEIHRhYnNcbiAgICAgIGFjdGl2ZTogdHJ1ZSwgLy8gdGhlc2UgdGFicyB3aWxsIGJlIGdpdmVuIGFic29sdXRlIG1heGltdW0gc2NvcmUgKyBleHRlbmRlZCBwcm90ZWN0aW9uXG4gICAgICBwaW5uZWQ6IHRydWUsIC8vIHdoZW4gdGhlIHN0YXR1cyBpcyBsb3N0LlxuICAgICAgYXVkaWJsZTogdHJ1ZSxcblxuICAgICAgbWluX2FjdGl2ZTogNSAqIDYwICogMTAwMCxcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiA2MCAqIDEwMDAsXG4gICAgICBjYWNoZWRfZGVjYXk6IDAuMixcbiAgICB9LFxuICB9O1xuXG4gIElOSVRfRk9DVVNFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxMCAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogMTAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIGFjdGl2ZV9wb2xpY3k6IHRydWUsXG4gICAgICB0YXJnZXRfdGFiczogNSxcbiAgICAgIGRlY2F5OiAwLjgsXG4gICAgICBtaW5fdGltZTogMyAqIDEwMDAsXG5cbiAgICAgIC8vIElHTk9SRUQgdGFic1xuICAgICAgYWN0aXZlOiB0cnVlLCAvLyB0aGVzZSBzdGF0dXMgYXJlIGFic29sdXRlbHkgcHJvdGVjdGVkIHRhYnM6IHRoZXNlIGFyZSBpZ25vcmVkIGFuZCBkbyBub3QgY291bnQgYXMgdGFicy5cbiAgICAgIHBpbm5lZDogdHJ1ZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICAvLyBQUk9URUNURUQgdGFic1xuICAgICAgYWN0aXZlOiB0cnVlLCAvLyB0aGVzZSB0YWJzIHdpbGwgYmUgZ2l2ZW4gYWJzb2x1dGUgbWF4aW11bSBzY29yZSArIGV4dGVuZGVkIHByb3RlY3Rpb25cbiAgICAgIHBpbm5lZDogdHJ1ZSwgLy8gd2hlbiB0aGUgc3RhdHVzIGlzIGxvc3QuXG4gICAgICBhdWRpYmxlOiB0cnVlLFxuXG4gICAgICBtaW5fYWN0aXZlOiA1ICogNjAgKiAxMDAwLFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDYwICogMTAwMCxcbiAgICAgIGNhY2hlZF9kZWNheTogMC4yLFxuICAgIH0sXG4gIH07XG59XG5cbk9iamVjdC5mcmVlemUoSU5JVF9GT0NVU0VEX1BST0ZJTEUpO1xuT2JqZWN0LmZyZWV6ZShJTklUX1JFTEFYRURfUFJPRklMRSk7XG5cbmV4cG9ydCB7IFJFTEFYRUQsIEZPQ1VTRUQsIENVU1RPTUlaRUQsIElOSVRfRk9DVVNFRF9QUk9GSUxFLCBJTklUX1JFTEFYRURfUFJPRklMRSB9O1xuIiwiaW1wb3J0ICogYXMgcHNsIGZyb20gJ3BzbCc7XG5pbXBvcnQgeyBNQVhfQUNUSVZFX0RFQk9VTkNFIH0gZnJvbSAnLi4vY29uZmlnL2Vudi5qcyc7XG5cbmNvbnN0IGxvZ2dlciA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gIGlmIChFTlYgPT09ICdkZWJ1ZycgfHwgRU5WID09PSAnZGV2Jykge1xuICAgIGxldCBkZWZhdWx0X2Zvcm1hdCA9IFsnZm9udC13ZWlnaHQ6aW5pdGlhbDsgY29sb3I6YmxhY2s7J107XG4gICAgbGV0IHByZSA9ICclYycgKyBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkgKyAnJWMnO1xuICAgIGxldCBvcHRpb25zID0gWydmb250LXdlaWdodDpsaWdodGVyOyBjb2xvcjpMaWdodFNsYXRlR3JleTsnXTtcbiAgICBvcHRpb25zLnB1c2goZGVmYXVsdF9mb3JtYXQpO1xuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHByZSArPSAnIHwgJWMnICsgYXJnc1swXS5jb25zdHJ1Y3Rvci5uYW1lICsgJyVjIHwgJztcbiAgICAgIHByZSArPSBhcmdzWzFdO1xuICAgICAgb3B0aW9ucy5wdXNoKCdjb2xvcjojMWRhODdjOyBmb250LXdlaWdodDpib2xkZXInKTtcbiAgICAgIG9wdGlvbnMucHVzaChkZWZhdWx0X2Zvcm1hdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZSArPSAnIHwgJyArIGFyZ3NbMF07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHByZSwgLi4ub3B0aW9ucyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNvcHkob2JqKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG5mdW5jdGlvbiB0aW1lb3V0KG1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5mdW5jdGlvbiBnZXREb21haW4oc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBzbC5wYXJzZShuZXcgVVJMKHN0cikuaG9zdG5hbWUpLmRvbWFpbjtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdG9yYWdlU2V0KGFyZ3MpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoYXJncywgZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZUdldChhcmdzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KGFyZ3MsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICByZXNvbHZlKGRhdGEpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XG4gIHJldHVybiAvXlxcZCskLy50ZXN0KHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gc2V0QWxsUmVhZEJhZGdlKCkge1xuICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiAnJyB9KTsgLy8gPC0tIHNldCB0ZXh0IHRvICcnIHRvIHJlbW92ZSB0aGUgYmFkZ2Vcbn1cblxuZnVuY3Rpb24gc2V0VW5yZWFkQmFkZ2UoKSB7XG4gIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlQmFja2dyb3VuZENvbG9yKHsgY29sb3I6IFsyMjksIDkyLCAwLCAxMjhdIH0pO1xuICBjaHJvbWUuYnJvd3NlckFjdGlvbi5nZXRCYWRnZVRleHQoe30sIGZ1bmN0aW9uIChiYWRnZVRleHQpIHtcbiAgICBsZXQgY291bnRlciA9IDE7XG4gICAgaWYgKGlzSW50ZWdlcihiYWRnZVRleHQpKSB7XG4gICAgICBjb3VudGVyID0gcGFyc2VJbnQoYmFkZ2VUZXh0KSArIDE7XG4gICAgfVxuICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6IGAke2NvdW50ZXJ9YCB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldExhc3RGb2N1c2VkV2luZG93KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS53aW5kb3dzLmdldExhc3RGb2N1c2VkKHsgcG9wdWxhdGU6IGZhbHNlLCB3aW5kb3dUeXBlczogWydub3JtYWwnXSB9LCAoZCkgPT4gcmVzb2x2ZShkLmlkKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc1VzZXJBY3RpdmUoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLmlkbGUucXVlcnlTdGF0ZShNYXRoLnJvdW5kKE1BWF9BQ1RJVkVfREVCT1VOQ0UgLyAxMDAwKSwgKHN0YXR1cykgPT4ge1xuICAgICAgaWYgKHN0YXR1cyA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VyKFwiQ291bGRuJ3QgY2hlY2sgdXNlciBhY3Rpdml0eS5cIik7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdG9yYWdlUmVzZXQoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIChkKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoT2JqZWN0LmtleXMoZCksICgpID0+IHtcbiAgICAgICAgbG9nZ2VyKCdNZW1vcnkgZmx1c2hlZC4nKVxuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KVxuICB9KTtcbn1cblxubG9nZ2VyKCdTdGFydGluZyBpbiAnICsgRU5WICsgJyBlbnYuJyk7XG5leHBvcnQge1xuICBsb2dnZXIsXG4gIGNvcHksXG4gIHRpbWVvdXQsXG4gIGdldERvbWFpbixcbiAgc3RvcmFnZUdldCxcbiAgc3RvcmFnZVNldCxcbiAgc2V0QWxsUmVhZEJhZGdlLFxuICBzZXRVbnJlYWRCYWRnZSxcbiAgaXNJbnRlZ2VyLFxuICBnZXRMYXN0Rm9jdXNlZFdpbmRvdyxcbiAgaXNVc2VyQWN0aXZlLFxuICBzdG9yYWdlUmVzZXQsXG59O1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIWJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b2RvLWxpc3QtY29udGFpbmVyIHtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jYXJkLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEpO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxYjllNzQ7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGNvbG9yOiAjMWI5ZTc0O1xcbiAgYm9yZGVyLWNvbG9yOiAjMWI5ZTc0O1xcbn1cXG5cXG4uYm9sZC10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInBvcHVwXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL2FwcC9wb3B1cC5qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcHNsX2luZGV4X2pzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19tYXRlcmlhbC11aV9jb3JlX0F2YXRhcl9BdmF0YXJfanMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfVHlwb2dyYXAtZjQ2ZjMwXCJdXG5dO1xuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gKCkgPT4ge1xuXG59O1xuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0fVxuXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbmZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzNdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59O1xuXG52YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucHRrX2Nocm9tZVwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucHRrX2Nocm9tZVwiXSB8fCBbXTtcbnZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG5qc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbnZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjsiLCIvLyBydW4gc3RhcnR1cFxucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==