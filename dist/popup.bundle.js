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
/*! export MAX_ACTIVE_DEBOUNCE [provided] [unused] [could be renamed] */
/*! export MIN_ACTIVE_DEBOUNCE [provided] [unused] [could be renamed] */
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
/* harmony export */   "SESSIONS_MAX_FUZZY_DELTA_MS": () => /* binding */ SESSIONS_MAX_FUZZY_DELTA_MS
/* harmony export */ });
/* unused harmony exports MIN_ACTIVE_DEBOUNCE, MAX_ACTIVE_DEBOUNCE */
const SCORER = 'default'; // only default implemented

const MAXIMUM_SCORE = 1000000000000000; // max score for scorer

const MAXIMUM_HISTORY_SIZE = 1000; // max killed tab history in memory

const SESSIONS_TIMEOUT_MS = 800; // when a tab is killed we need a timeout to retrieve the sessionId

const SESSIONS_MAX_FUZZY_DELTA_MS = 1000 * 5; // time is fuzzy matched to retireve the correct sessionID, should be higher than SESSIONS_TIMEOUT_MS

const MIN_ACTIVE_DEBOUNCE = 1000 * 3; // minimum active reading on a tab to be counted as valid 'useful' time

const MAX_ACTIVE_DEBOUNCE = 1000 * 60 * 5; // maximum time without any user input before it is considered idled



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
      min_time_garbage_collector: 5 * 1000
    },
    policy: {
      active_policy: true,
      target_tabs: 12,
      decay: 0.8,
      min_time: 3 * 1000,
      active: false,
      pinned: false,
      audible: false
    },
    scorer: {
      min_active: 5 * 1000,
      protection_time: 15 * 1000,
      cached_decay: 0.7
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
      active: false,
      pinned: false,
      audible: false
    },
    scorer: {
      min_active: 5 * 1000,
      protection_time: 15 * 1000,
      cached_decay: 0.7
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
/* harmony export */   "getLastFocusedWindow": () => /* binding */ getLastFocusedWindow
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
  new Promise((resolve, reject) => {
    chrome.windows.getLastFocused({
      populate: false,
      windowTypes: ['normal']
    }, d => resolve(d.id));
  });
}

function isUserActive() {
  new Promise((resolve, reject) => {
    chrome.idle.queryState((MAX_ACTIVE_DEBOUNCE / 1000).toFixed(), status => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9lbnYuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9zZXJ2aWNlcy91dGlscy5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzP2VhNWQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsIkFwcCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJFU1RPUkUiLCJORVhUIiwiUkVNT1ZFRCIsIkNMT1NFRF9ISVNUT1JZIiwiTlVNQkVSX0hPVVJTIiwiVElNRV9QRVJJT0RfVE9fQ09OU0lERVIiLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZXRBbGxSZWFkQmFkZ2UiLCJzdGF0ZSIsInJlbmRlclNhdmVCb29sZWFuIiwib25DaGFuZ2VkQ2FsbGJhY2siLCJjaGFuZ2VzIiwiY2hhbmdlc0Nsb3NlZEhpc3RvcnkiLCJzZXRTdGF0ZSIsImNsb3NlZF9oaXN0b3J5IiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwicmVzdWx0IiwibmV4dExpc3QiLCJvbkNoYW5nZWQiLCJhZGRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlTGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJmb3JjZVJlbmRlciIsInJlbW92ZUl0ZW0iLCJrZXkiLCJpdGVtcyIsInJldmVyc2UiLCJyZXN0b3JlVGFiIiwicmVtb3ZlTmV4dEl0ZW0iLCJtZXNzYWdlVHlwZSIsInJlc3RvcmVkVGFiIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidGFiSWQiLCJmaWx0ZXJMaXN0Iiwic2VsZWN0ZWRMaXN0Iiwibm93IiwiRGF0ZSIsImZpbHRlciIsIml0ZW0iLCJNYXRoIiwibWF4Iiwic3RhdGlzdGljcyIsInVwZGF0ZWRfYXQiLCJsYXN0X2FjdGl2ZV90aW1lc3RhbXAiLCJyZW5kZXJMaXN0IiwibGlzdFRvQmVSZW5kZXJlZCIsImNsYXNzZXMiLCJNQVhfTEVOR1RIX1RJVExFIiwiTUFYX0xFTkdUSF9VUkwiLCJtYXAiLCJ3ZWJzaXRlIiwiaSIsImRlbGV0aW9uVGltZSIsImRlbGV0aW9uX3RpbWUiLCJmb3JtYXR0ZWRfZGVsZXRpb25fdGltZSIsInRvVGltZVN0cmluZyIsInNwbGl0IiwiaG91cnNfZGVsZXRpb24iLCJtaW51dGVzX2RlbGV0aW9uIiwidGl0bGUiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJjb25jYXQiLCJ0cnVuY2F0ZWRfdXJsIiwidXJsIiwiaXNOZXh0IiwiZmlsdGVyZWRMaXN0IiwibGlzdFdlYnNpdGVzIiwiZ3JlZW5UaXRsZSIsImxpc3RJdGVtcyIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsImF2YXRhckNvbnRhaW5lciIsIml0ZW1UZXh0IiwiYnV0dG9uIiwicmVuZGVyIiwibnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIiwiYm9sZFRleHQiLCJtaWRkbGVUZXh0IiwibGlua1RvRm9ybSIsInN0eWxlcyIsImZvbnRTaXplIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjb2xvciIsImJvcmRlckJvdHRvbSIsIm1heFdpZHRoIiwiZm9udFdlaWdodCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwibWFyZ2luUmlnaHQiLCJib3JkZXJDb2xvciIsIndvcmRXcmFwIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJtYXJnaW5Ub3AiLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsImxlZnQiLCJ3aXRoU3R5bGVzIiwiSG9tZURpc3BhdGNoZXIiLCJhcHBCYXJWYWx1ZSIsImxvZ2dlciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJkaXNwYXRjaFBhZ2UiLCJyb290Iiwibm90aWZpY2F0aW9uIiwiaG9tZUNvbnRhaW5lciIsImdyaWRMb2dvVGFicyIsImxvZ29BdmF0YXIiLCJlIiwidiIsImFsbFRhYnMiLCJ0YWIiLCJtaW5XaWR0aCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwiaGVpZ2h0IiwiU2V0dGluZ3MiLCJwYXRoIiwicGFyYW1ldGVyIiwic2V0dGluZ3MiLCJuZXh0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlzSW50ZWdlciIsImNoZWNrU2V0dGluZ3MiLCJJTklUX1JFTEFYRURfUFJPRklMRSIsImhhbmRsZVNhdmVQYXJhbWV0ZXJzIiwiZm9jdXNlZE1vZGUiLCJyZWxheGVkTW9kZSIsImN1c3RvbWl6ZWRCb29sIiwiY2hhbmdlc1NldHRpbmdzIiwiY2hhbmdlc1Byb2ZpbGUiLCJGT0NVU0VEIiwiUkVMQVhFRCIsIkNVU1RPTUlaRUQiLCJwcm9maWxlIiwiYWN0aXZlX3Byb2ZpbGUiLCJoYW5kbGVCb29sQ2hhbmdlIiwiY2hhbmdlVHlwZSIsIm5vdGlmeVVzZXIiLCJzdWNjZXNzIiwiZW5xdWV1ZVNuYWNrYmFyIiwidmFyaWFudCIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImF1dG9IaWRlRHVyYXRpb24iLCJpbnB1dHNQYXJhbWV0ZXJzIiwibGFiZWwiLCJzb3VyY2UiLCJQT0xJQ1kiLCJPUFRJTUFMX05VTUJFUl9UQUJTIiwiaW5wdXRQcm9wcyIsIm1pbiIsInN0ZXAiLCJsaXN0SXRlbXNQYXJhbWV0ZXJzIiwiaW5kZXgiLCJoYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzIiwidGV4dEZpZWxkIiwiQUNUSVZFX1BPTElDWSIsImhhbmRsZVN3aXRjaCIsImludHJvZHVjdGlvbkJsb2NrIiwiYWN0aXZlQmFyIiwic2V0dGluZ3NXcmFwcGVyIiwiZmlyc3RCb29sZWFucyIsInNldHRpbmdzQmxvY2siLCJzZWNvbmRhcnlCdXR0b24iLCJ3aXRoU25hY2tiYXIiLCJzd2l0Y2hDb250YWluZXIiLCJjb2xvclByaW1hcnkiLCJTQ09SRVIiLCJNQVhJTVVNX1NDT1JFIiwiTUFYSU1VTV9ISVNUT1JZX1NJWkUiLCJTRVNTSU9OU19USU1FT1VUX01TIiwiU0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TIiwiTUlOX0FDVElWRV9ERUJPVU5DRSIsIk1BWF9BQ1RJVkVfREVCT1VOQ0UiLCJJTklUX0ZPQ1VTRURfUFJPRklMRSIsIkVOViIsIm1lbW9yeSIsImNhY2hlX3NpemUiLCJtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZSIsIm1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yIiwicG9saWN5IiwiYWN0aXZlX3BvbGljeSIsInRhcmdldF90YWJzIiwiZGVjYXkiLCJtaW5fdGltZSIsImFjdGl2ZSIsInBpbm5lZCIsImF1ZGlibGUiLCJzY29yZXIiLCJtaW5fYWN0aXZlIiwicHJvdGVjdGlvbl90aW1lIiwiY2FjaGVkX2RlY2F5IiwiT2JqZWN0IiwiZnJlZXplIiwiYXJncyIsImRlZmF1bHRfZm9ybWF0IiwicHJlIiwidG9VVENTdHJpbmciLCJvcHRpb25zIiwicHVzaCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY29weSIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInRpbWVvdXQiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImdldERvbWFpbiIsInN0ciIsInBzbCIsIlVSTCIsImhvc3RuYW1lIiwiZG9tYWluIiwic3RvcmFnZVNldCIsInJlamVjdCIsInNldCIsInN0b3JhZ2VHZXQiLCJkYXRhIiwidGVzdCIsImJyb3dzZXJBY3Rpb24iLCJzZXRCYWRnZVRleHQiLCJ0ZXh0Iiwic2V0VW5yZWFkQmFkZ2UiLCJzZXRCYWRnZUJhY2tncm91bmRDb2xvciIsImdldEJhZGdlVGV4dCIsImJhZGdlVGV4dCIsImNvdW50ZXIiLCJwYXJzZUludCIsImdldExhc3RGb2N1c2VkV2luZG93Iiwid2luZG93cyIsImdldExhc3RGb2N1c2VkIiwicG9wdWxhdGUiLCJ3aW5kb3dUeXBlcyIsImQiLCJpZCIsImlzVXNlckFjdGl2ZSIsImlkbGUiLCJxdWVyeVN0YXRlIiwidG9GaXhlZCIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEtBQUssR0FBR0MsaUVBQWMsQ0FBQztBQUMzQkMsU0FBTyxFQUFFO0FBQ1BDLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUU7QUFERztBQURKO0FBRGtCLENBQUQsQ0FBNUI7O0FBUUEsU0FBU0MsR0FBVCxHQUFlO0FBQ2Isc0JBQ0UsMkRBQUMsNkRBQUQ7QUFBa0IsU0FBSyxFQUFFTDtBQUF6QixrQkFDRSwyREFBQywrREFBRCxPQURGLEVBQ3FCLEdBRHJCLENBREY7QUFLRDs7QUFFRE0sdURBQUEsZUFBZ0IsMkRBQUMsR0FBRCxPQUFoQixFQUF5QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcsVUFBVUQsWUFBMUMsQyxDQUF3RDs7QUFFeEQsTUFBTUUsSUFBTixTQUFtQkMsZ0RBQW5CLENBQWlDO0FBQy9CQyxhQUFXLENB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Q0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSx1QkFBdUI7V0FDdEM7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSwyQzs7OztVQzVGQTtVQUNBIiwiZmlsZSI6InBvcHVwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5taW4nO1xuaW1wb3J0ICcuLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZURpc3BhdGNoZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lRGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzFiOWU3NCcsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxIb21lRGlzcGF0Y2hlciAvPnsnICd9XG4gICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICApO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuaW1wb3J0IHsgc2V0QWxsUmVhZEJhZGdlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMnO1xuXG5jb25zdCBSRVNUT1JFID0gJ1JFU1RPUkUnO1xuY29uc3QgTkVYVCA9ICdORVhUJztcbmNvbnN0IFJFTU9WRUQgPSAnUkVNT1ZFRCc7XG5jb25zdCBDTE9TRURfSElTVE9SWSA9ICdjbG9zZWRfaGlzdG9yeSc7XG5jb25zdCBOVU1CRVJfSE9VUlMgPSAyNDtcbmNvbnN0IFRJTUVfUEVSSU9EX1RPX0NPTlNJREVSID0gMzYwMDAwMCAqIE5VTUJFUl9IT1VSUzsgLy8gaW4gbWljcm9zZWNvbmRcblxuY2xhc3MgSG9tZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBzZXRBbGxSZWFkQmFkZ2UoKTtcbiAgICB0aGlzLnN0YXRlID0geyByZW5kZXJTYXZlQm9vbGVhbjogZmFsc2UgfTtcbiAgICB0aGlzLm9uQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXNDbG9zZWRIaXN0b3J5ID0gY2hhbmdlc1tDTE9TRURfSElTVE9SWV07XG4gICAgICBpZiAoY2hhbmdlc0Nsb3NlZEhpc3RvcnkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2xvc2VkX2hpc3Rvcnk6IGNoYW5nZXNDbG9zZWRIaXN0b3J5WyduZXdWYWx1ZSddLFxuICAgICAgICAgIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW0NMT1NFRF9ISVNUT1JZXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSByZXN1bHQuY2xvc2VkX2hpc3RvcnkgfHwgW107XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VkX2hpc3RvcnkgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5leHRMaXN0OiBbXSB9KTtcbiAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBzZXRBbGxSZWFkQmFkZ2UoKTtcbiAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5yZW5kZXJTYXZlQm9vbGVhbikge1xuICAgICAgdGhpcy5mb3JjZVJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeS5yZXZlcnNlKCk7XG4gICAgdGhpcy5yZXN0b3JlVGFiKGl0ZW1zLCBrZXksIFJFU1RPUkUpO1xuICB9XG5cbiAgcmVtb3ZlTmV4dEl0ZW0oa2V5KSB7XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5zdGF0ZS5uZXh0TGlzdDtcbiAgICB0aGlzLnJlc3RvcmVUYWIoaXRlbXMsIGtleSwgUkVTVE9SRSk7XG4gIH1cblxuICByZXN0b3JlVGFiKGl0ZW1zLCBrZXksIG1lc3NhZ2VUeXBlKSB7XG4gICAgY29uc3QgcmVzdG9yZWRUYWIgPSBpdGVtc1trZXldO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlVHlwZSxcbiAgICAgIHRhYklkOiByZXN0b3JlZFRhYi50YWJJZCxcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlUmVuZGVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZW5kZXJTYXZlQm9vbGVhbjogZmFsc2UgfSk7XG4gIH1cblxuICBmaWx0ZXJMaXN0KHNlbGVjdGVkTGlzdCkge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNlbGVjdGVkTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG5vdyAtIE1hdGgubWF4KGl0ZW0uc3RhdGlzdGljcy51cGRhdGVkX2F0LCBpdGVtLnN0YXRpc3RpY3MubGFzdF9hY3RpdmVfdGltZXN0YW1wKSA8IFRJTUVfUEVSSU9EX1RPX0NPTlNJREVSXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyTGlzdChsaXN0VG9CZVJlbmRlcmVkKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHNlbGVjdGVkTGlzdDtcbiAgICBjb25zdCBNQVhfTEVOR1RIX1RJVExFID0gNTA7XG4gICAgY29uc3QgTUFYX0xFTkdUSF9VUkwgPSA0MDtcblxuICAgIHN3aXRjaCAobGlzdFRvQmVSZW5kZXJlZCkge1xuICAgICAgY2FzZSBORVhUOlxuICAgICAgICBzZWxlY3RlZExpc3QgPSB0aGlzLnN0YXRlLm5leHRMaXN0ID8gdGhpcy5zdGF0ZS5uZXh0TGlzdCA6IFtdO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHNlbGVjdGVkTGlzdCA9IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkgPyB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5IDogW107XG4gICAgICAgIHNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdC5tYXAoKHdlYnNpdGUsIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBkZWxldGlvblRpbWUgPSBuZXcgRGF0ZSh3ZWJzaXRlLmRlbGV0aW9uX3RpbWUpO1xuICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZF9kZWxldGlvbl90aW1lID0gZGVsZXRpb25UaW1lLnRvVGltZVN0cmluZygpLnNwbGl0KCcgJylbMF07XG4gICAgICAgICAgd2Vic2l0ZS5ob3Vyc19kZWxldGlvbiA9IGZvcm1hdHRlZF9kZWxldGlvbl90aW1lLnNwbGl0KCc6JylbMF07XG4gICAgICAgICAgd2Vic2l0ZS5taW51dGVzX2RlbGV0aW9uID0gZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUuc3BsaXQoJzonKVsxXTtcbiAgICAgICAgICBpZiAod2Vic2l0ZS50aXRsZSAmJiB3ZWJzaXRlLnRpdGxlLmxlbmd0aCA+IE1BWF9MRU5HVEhfVElUTEUpIHtcbiAgICAgICAgICAgIHdlYnNpdGUudGl0bGUgPSB3ZWJzaXRlLnRpdGxlLnN1YnN0cmluZygwLCBNQVhfTEVOR1RIX1RJVExFKS5jb25jYXQoJy4uLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAod2Vic2l0ZS50aXRsZSAmJiB3ZWJzaXRlLnRpdGxlLmxlbmd0aCA+IE1BWF9MRU5HVEhfVElUTEUpIHtcbiAgICAgICAgICAgIHdlYnNpdGUudHJ1bmNhdGVkX3VybCA9IHdlYnNpdGUudXJsLnN1YnN0cmluZygwLCBNQVhfTEVOR1RIX1VSTCkuY29uY2F0KCcuLi4nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2Vic2l0ZS50cnVuY2F0ZWRfdXJsID0gd2Vic2l0ZS51cmw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB3ZWJzaXRlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgaXNOZXh0ID0gbGlzdFRvQmVSZW5kZXJlZCA9PT0gTkVYVDtcbiAgICBjb25zdCBmaWx0ZXJlZExpc3QgPSB0aGlzLmZpbHRlckxpc3Qoc2VsZWN0ZWRMaXN0KS5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RXZWJzaXRlc30+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmVlblRpdGxlfT5cbiAgICAgICAgICB7aXNOZXh0ID8gJ05leHQgdGFicyB0byBiZSBjbG9zZWQnIDogYExhc3QgY2xvc2VkIHRhYnNgfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtc30+XG4gICAgICAgICAgPExpc3QgZGVuc2U9e3RydWV9PlxuICAgICAgICAgICAge2ZpbHRlcmVkTGlzdC5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxwPntgTm8gdGFicyBjbG9zZWQgaW4gdGhlIGxhc3QgJHtOVU1CRVJfSE9VUlN9IGhvdXJzLmB9PC9wPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgZmlsdGVyZWRMaXN0Lm1hcCgod2Vic2l0ZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZEF2YXRhcldpdGhUaW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpbWVEaXNwbGF5fT5cbiAgICAgICAgICAgICAgICAgICAgICB7YCR7d2Vic2l0ZS5ob3Vyc19kZWxldGlvbn06JHt3ZWJzaXRlLm1pbnV0ZXNfZGVsZXRpb259YH1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9e3dlYnNpdGUudGl0bGV9IHNyYz17d2Vic2l0ZS5mYXZJY29uVXJsfSBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyQ29udGFpbmVyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e3dlYnNpdGUudHJ1bmNhdGVkX3VybH1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXt3ZWJzaXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtpc05leHQgPyB0aGlzLnJlbW92ZU5leHRJdGVtLmJpbmQodGhpcywgaSkgOiB0aGlzLnJlbW92ZUl0ZW0uYmluZCh0aGlzLCBpKX1cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2lzTmV4dCA/ICdTa2lwJyA6ICdSZXN0b3JlJ31cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5ID8gdGhpcy5maWx0ZXJMaXN0KHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkpLmxlbmd0aCA6IDA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmJvbGRUZXh0fT5cbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPyBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgOiAnTm8nfSB0YWJcbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPT09IDEgPyAnJyA6ICdzJ31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLm1pZGRsZVRleHR9PlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPT09IDEgPyAnd2FzJyA6ICd3ZXJlJ30gY2xvc2VkIGluIHRoZSBsYXN0eycgJ31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmJvbGRUZXh0fT4ge2Ake05VTUJFUl9IT1VSU30gaG91cnMhYH0gPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIHt0aGlzLnJlbmRlckxpc3QuYmluZCh0aGlzKShSRU1PVkVEKX1cbiAgICAgICAgey8qe3RoaXMucmVuZGVyTGlzdC5iaW5kKHRoaXMpKE5FWFQpfSovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVG9Gb3JtfT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvZS8xRkFJcFFMU2RVRUpIZDBiTDZyeUZ2WmsyMjBDb1pwN2N3dkZ4RVNvcnBzN2NuZ2swd1FmeXUtUS92aWV3Zm9ybVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlcG9ydCBhIGJ1ZyBvciBzZW5kIHVzIGEgZmVlZGJhY2s/XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgfSxcbiAgZ3JlZW5UaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgY29sb3I6ICcjMWI5ZTc0JyxcbiAgICBib3JkZXJCb3R0b206IGAycHggc29saWQgIzFiOWU3NGAsXG4gICAgbWF4V2lkdGg6IDIyNSxcbiAgfSxcbiAgYm9sZFRleHQ6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0sXG4gIG1pZGRsZVRleHQ6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6ICcjMWI5ZTc0JyxcbiAgICBib3JkZXJDb2xvcjogJyMxYjllNzQnLFxuICAgIGZvbnRTaXplOiAxMixcbiAgfSxcbiAgaXRlbVRleHQ6IHtcbiAgICBtYXhXaWR0aDogMTg1LFxuICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICBtYXhIZWlnaHQ6IDgwLFxuICB9LFxuICB0aW1lRGlzcGxheToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTQsXG4gIH0sXG4gIGdyaWRBdmF0YXJXaXRoVGltZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgfSxcbiAgbGlzdFdlYnNpdGVzOiB7XG4gICAgbWFyZ2luVG9wOiAyMCxcbiAgfSxcbiAgbGlzdEl0ZW1zOiB7XG4gICAgbWF4SGVpZ2h0OiAzMDAsXG4gICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbiAgfSxcbiAgbGlua1RvRm9ybToge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGxlZnQ6ICc1NSUnLFxuICAgIGZvbnRTaXplOiAxMCxcbiAgICBtYXJnaW5Ub3A6IDE1LFxuICAgIG1heFdpZHRoOiAnNzUlJyxcbiAgfSxcbiAgYXZhdGFyQ29udGFpbmVyOiB7XG4gICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgbWF4SGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDcpLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuLi9TZXR0aW5ncyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9Ib21lJztcbmltcG9ydCB7IFNuYWNrYmFyUHJvdmlkZXIgfSBmcm9tICdub3Rpc3RhY2snO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXIvQXZhdGFyJztcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhci9MaXN0SXRlbUF2YXRhcic7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscy5qcyc7XG5cbmNsYXNzIEhvbWVEaXNwYXRjaGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGFwcEJhclZhbHVlOiAnSE9NRScgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBCYXJWYWx1ZTogJ0hPTUUnIH0pO1xuICAgIGxvZ2dlcih0aGlzLCAnUG9wdXAgb3BlbmVkJyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQsIG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFwcEJhclZhbHVlOiBuZXdWYWx1ZSB9KTtcbiAgICBsb2dnZXIodGhpcywgJ1N3aXRjaCB0byAnICsgbmV3VmFsdWUpO1xuICB9XG5cbiAgZGlzcGF0Y2hQYWdlKCkge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5hcHBCYXJWYWx1ZSkge1xuICAgICAgY2FzZSAnSE9NRSc6XG4gICAgICAgIHJldHVybiA8SG9tZSAvPjtcbiAgICAgIGNhc2UgJ1NFVFRJTkdTJzpcbiAgICAgICAgcmV0dXJuIDxTZXR0aW5ncyAvPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8ZGl2PlRoaXMgaXMgYW4gZXJyb3IgcGFnZTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U25hY2tiYXJQcm92aWRlclxuICAgICAgICBtYXhTbmFjaz17Mn1cbiAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgIHJvb3Q6IGNsYXNzZXMubm90aWZpY2F0aW9uLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ob21lQ29udGFpbmVyfT5cbiAgICAgICAgICA8UGFwZXIgc3F1YXJlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZExvZ29UYWJzfT5cbiAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJsb2dvVGFiYnlcIiBzcmM9eycuLi8uLi9hc3NldHMvc3RhdGljL2ljb25zL3RhYmJ5LnBuZyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQXZhdGFyfSAvPlxuICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFwcEJhclZhbHVlID8gdGhpcy5zdGF0ZS5hcHBCYXJWYWx1ZSA6ICdIT01FJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIHYpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsIHYpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hbGxUYWJzfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkhvbWVcIiB2YWx1ZT17J0hPTUUnfSBjbGFzc05hbWU9e2NsYXNzZXMudGFifSAvPlxuICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJTZXR0aW5nc1wiIHZhbHVlPXsnU0VUVElOR1MnfSBjbGFzc05hbWU9e2NsYXNzZXMudGFifSAvPlxuICAgICAgICAgICAgICAgIHsvKjxUYWIgbGFiZWw9XCJEZWJ1Z1wiIHZhbHVlPXtcIkRFQlVHXCJ9IGRpc2FibGVkIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJ9Lz4qL31cbiAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2Pnt0aGlzLmRpc3BhdGNoUGFnZSgpfTwvZGl2PlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TbmFja2JhclByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZURpc3BhdGNoZXI7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IEhvbWVEaXNwYXRjaGVyIGZyb20gJy4vSG9tZURpc3BhdGNoZXInO1xuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWIvVGFiJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgaG9tZUNvbnRhaW5lcjoge1xuICAgIG1pbldpZHRoOiA0MDAsXG4gIH0sXG4gIHRhYjoge1xuICAgIGNvbG9yOiAnIzFiOWU3NCcsXG4gIH0sXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIGxlZnQ6IDE1MCxcbiAgfSxcbiAgZ3JpZExvZ29UYWJzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnbGVmdCcsXG4gIH0sXG4gIGFsbFRhYnM6IHtcbiAgICBtYXhXaWR0aDogJzc1JScsXG4gIH0sXG4gIGxvZ29BdmF0YXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3LjUpLFxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZyg3LjUpLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZURpc3BhdGNoZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHkvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgVHVuZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R1bmUnO1xuaW1wb3J0IHsgd2l0aFNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCB7XG4gIFJFTEFYRUQsXG4gIEZPQ1VTRUQsXG4gIENVU1RPTUlaRUQsXG4gIElOSVRfRk9DVVNFRF9QUk9GSUxFLFxuICBJTklUX1JFTEFYRURfUFJPRklMRSxcbn0gZnJvbSAnLi4vLi4vY29uZmlnL3NldHRpbmdzUHJvZmlsZXMuanMnO1xuaW1wb3J0IHsgY2hlY2tTZXR0aW5ncywgT1BUSU1BTF9OVU1CRVJfVEFCUywgUE9MSUNZLCBBQ1RJVkVfUE9MSUNZIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaXNJbnRlZ2VyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMnO1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9jdXNlZE1vZGU6IGZhbHNlLFxuICAgICAgcmVsYXhlZE1vZGU6IGZhbHNlLFxuICAgICAgY3VzdG9taXplZEJvb2w6IGZhbHNlLFxuICAgICAgc2V0dGluZ3M6IElOSVRfUkVMQVhFRF9QUk9GSUxFLFxuICAgICAgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5vbkNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBjaGFuZ2VzU2V0dGluZ3MgPSBjaGFuZ2VzWydzZXR0aW5ncyddO1xuICAgICAgY29uc3QgY2hhbmdlc1Byb2ZpbGUgPSBjaGFuZ2VzWydhY3RpdmVfcHJvZmlsZSddO1xuICAgICAgaWYgKGNoYW5nZXNTZXR0aW5ncykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZXR0aW5nczogY2hhbmdlc1NldHRpbmdzWyduZXdWYWx1ZSddLFxuICAgICAgICAgIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VzUHJvZmlsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmb2N1c2VkTW9kZTogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IEZPQ1VTRUQsXG4gICAgICAgICAgcmVsYXhlZE1vZGU6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBSRUxBWEVELFxuICAgICAgICAgIGN1c3RvbWl6ZWRCb29sOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gQ1VTVE9NSVpFRCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnYWN0aXZlX3Byb2ZpbGUnLCAnc2V0dGluZ3MnXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgcHJvZmlsZSA9IHJlc3VsdC5hY3RpdmVfcHJvZmlsZSB8fCBSRUxBWEVEO1xuICAgICAgY29uc3QgZm9jdXNlZE1vZGUgPSBwcm9maWxlID09PSBGT0NVU0VEO1xuICAgICAgY29uc3QgcmVsYXhlZE1vZGUgPSBwcm9maWxlID09PSBSRUxBWEVEO1xuICAgICAgY29uc3QgY3VzdG9taXplZEJvb2wgPSBwcm9maWxlID09PSBDVVNUT01JWkVEO1xuICAgICAgY29uc3Qgc2V0dGluZ3MgPSByZXN1bHQuc2V0dGluZ3MgfHwgSU5JVF9SRUxBWEVEX1BST0ZJTEU7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE1vZGUsXG4gICAgICAgIHJlbGF4ZWRNb2RlLFxuICAgICAgICBjdXN0b21pemVkQm9vbCxcbiAgICAgICAgc2V0dGluZ3MsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5yZW5kZXJTYXZlQm9vbGVhbikge1xuICAgICAgdGhpcy5mb3JjZVJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUJvb2xDaGFuZ2UoY2hhbmdlVHlwZSkge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2VUeXBlOiAnU0VUVElOR1NfUFJPRklMRScsXG4gICAgICBwcm9maWxlOiBjaGFuZ2VUeXBlLFxuICAgIH0pO1xuICAgIGlmIChjaGFuZ2VUeXBlID09PSBSRUxBWEVEIHx8IGNoYW5nZVR5cGUgPT09IEZPQ1VTRUQpIHtcbiAgICAgIHRoaXMubm90aWZ5VXNlcih0cnVlKTtcbiAgICB9XG4gIH1cblxuICBmb3JjZVJlbmRlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlIH0pO1xuICB9XG5cbiAgaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKSB7XG4gICAgLy8gVE9ETyBBZGQgZnVuY3Rpb24gdG8gY2hlY2sgZm9yIGFsbCBwb3RlbnRpYWwgdmFsdWVzXG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICBpZiAoY2hlY2tTZXR0aW5ncyh0aGlzLnN0YXRlLnNldHRpbmdzKSkge1xuICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ1NFVFRJTkdTX1BBUkFNRVRFUlMnLFxuICAgICAgICBzZXR0aW5nczogdGhpcy5zdGF0ZS5zZXR0aW5ncyxcbiAgICAgIH0pO1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubm90aWZ5VXNlcihzdWNjZXNzKTtcbiAgfVxuXG4gIG5vdGlmeVVzZXIoc3VjY2Vzcykge1xuICAgIHRoaXMucHJvcHMuZW5xdWV1ZVNuYWNrYmFyKHN1Y2Nlc3MgPyAnTmV3IFNldHRpbmdzIGFyZSBzYXZlZC4nIDogJ1NldHRpbmdzIGNhbm5vdCBiZSBzYXZlZC4nLCB7XG4gICAgICB2YXJpYW50OiBzdWNjZXNzID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyxcbiAgICAgIGFuY2hvck9yaWdpbjoge1xuICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICB9LFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiA3NTAsXG4gICAgICBhdXRvSGlkZUR1cmF0aW9uOiAxNTAwLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlUGFyYW1ldGVycyA9IChwYXRoLCBwYXJhbWV0ZXIpID0+IChldmVudCkgPT4ge1xuICAgIGxldCBzZXR0aW5ncyA9IHRoaXMuc3RhdGUuc2V0dGluZ3M7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChpc0ludGVnZXIobmV4dFZhbHVlKSB8fCBuZXh0VmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXR0aW5nc1twYXRoXVtwYXJhbWV0ZXJdID0gbmV4dFZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNldHRpbmdzOiBzZXR0aW5ncywgcmVuZGVyU2F2ZUJvb2xlYW46IHRydWUgfSk7XG4gICAgfVxuICB9O1xuICBoYW5kbGVTd2l0Y2ggPSAocGF0aCwgcGFyYW1ldGVyKSA9PiAoKSA9PiB7XG4gICAgbGV0IHNldHRpbmdzID0gdGhpcy5zdGF0ZS5zZXR0aW5ncztcbiAgICBpZiAoIWNoZWNrU2V0dGluZ3ModGhpcy5zdGF0ZS5zZXR0aW5ncykpIHtcbiAgICAgIHNldHRpbmdzID0gSU5JVF9SRUxBWEVEX1BST0ZJTEU7XG4gICAgfVxuICAgIHNldHRpbmdzW3BhdGhdW3BhcmFtZXRlcl0gPSAhdGhpcy5zdGF0ZS5zZXR0aW5nc1twYXRoXVtwYXJhbWV0ZXJdO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZXR0aW5nczogc2V0dGluZ3MsIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlIH0sICgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlucHV0c1BhcmFtZXRlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnT3B0aW1hbCBudW1iZXIgb2YgdGFicyAnLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgICAgIHBhdGg6IFBPTElDWSxcbiAgICAgICAgcGFyYW1ldGVyOiBPUFRJTUFMX05VTUJFUl9UQUJTLFxuICAgICAgICBpbnB1dFByb3BzOiB7IG1pbjogJzEnLCBtYXg6ICcxMDAnLCBzdGVwOiAnMScgfSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBsaXN0SXRlbXNQYXJhbWV0ZXJzID0gaW5wdXRzUGFyYW1ldGVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVBhcmFtZXRlcnMoaXRlbS5wYXRoLCBpdGVtLnBhcmFtZXRlcil9XG4gICAgICAgIHZhbHVlPXtpdGVtLnNvdXJjZVtpdGVtLnBhdGhdW2l0ZW0ucGFyYW1ldGVyXX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIG9uS2V5VXA9eyhldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykgdGhpcy5oYW5kbGVTYXZlUGFyYW1ldGVycygpO1xuICAgICAgICB9fVxuICAgICAgICBpbnB1dFByb3BzPXtpdGVtLmlucHV0UHJvcHN9XG4gICAgICAvPlxuICAgICkpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnNldHRpbmdzW1BPTElDWV1bQUNUSVZFX1BPTElDWV19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN3aXRjaChQT0xJQ1ksIEFDVElWRV9QT0xJQ1kpfVxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICBsYWJlbD1cIkVuYWJsZSBUYWJieVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmludHJvZHVjdGlvbkJsb2NrfT5cbiAgICAgICAgICA8VHVuZUljb24gLz5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgU2VsZWN0IHRoZSBzdWl0aW5nIG1vZGUgb3IgY3VzdG9taXplIGl0LlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aXZlQmFyfT48L2Rpdj5cbiAgICAgICAgICB7Lyo8aDEgY2xhc3NOYW1lPXtcImJvbGQtdGl0bGVcIn0+U2VsZWN0IFRhYmJ5J3Mgb3BlcmF0aW5nIG1vZGU6PC9oMT4qL31cbiAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NXcmFwcGVyfT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5mb2N1c2VkTW9kZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoRk9DVVNFRCl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsYWJlbD1cIkZvY3VzZWRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCb29sZWFuc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVsYXhlZE1vZGV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVCb29sQ2hhbmdlKFJFTEFYRUQpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGFiZWw9XCJSZWxheGVkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0Qm9vbGVhbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlQm9vbENoYW5nZShDVVNUT01JWkVEKX1cbiAgICAgICAgICAgICAgY29udHJvbD17PENoZWNrYm94IGNoZWNrZWQ9e3RoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9IHZhbHVlPVwiXCIgY29sb3I9XCJzZWNvbmRhcnlcIiAvPn1cbiAgICAgICAgICAgICAgbGFiZWw9XCJDdXN0b21pemUgeW91ciBzZXR0aW5ncycgcGFyYW1ldGVyc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NCbG9ja30+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICAgIC8vY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsaXN0SXRlbXNQYXJhbWV0ZXJzfVxuICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpZGRlbiBrZXk9XCJoaWRkZW4tdGV4dGZpZWxkXCIgZGlzYWJsZWQgLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kYXJ5QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD17dGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbCA/ICdvdXRsaW5lLXByaW1hcnknIDogJ3NlY29uZGFyeSd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVNhdmVQYXJhbWV0ZXJzKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTbmFja2JhcihTZXR0aW5ncyk7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vU2V0dGluZ3MnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHRleHRGaWVsZDoge1xuICAgIG1hcmdpblRvcDogMCxcbiAgICBtYXJnaW5MZWZ0OiAyMCxcbiAgICBtYXJnaW5SaWdodDogMjAsXG4gIH0sXG4gIGFjdGl2ZUJhcjoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gIH0sXG5cbiAgc2V0dGluZ3NXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIG1heEhlaWdodDogJzUwJScsXG4gICAgLy93aWR0aDogJzEwMCUnLFxuICAgIC8vaGVpZ2h0OiAnMTAwdmgnLFxuICB9LFxuICBzZWNvbmRhcnlCdXR0b246IHtcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIC8vbWFyZ2luRG93bjogNSxcbiAgICBjb2xvcjogJyMxYjllNzQnLFxuICAgIGJvcmRlckNvbG9yOiAnIzFiOWU3NCcsXG4gIH0sXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIG1heFdpZHRoOiAxNTAsXG4gIH0sXG4gIGludHJvZHVjdGlvbkJsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIC8vbWFyZ2luVG9wOiAyMCxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE3LFxuICAgIG1hcmdpbkxlZnQ6IDEwLFxuICB9LFxuICBzZXR0aW5nc0Jsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGZpcnN0Qm9vbGVhbnM6IHtcbiAgICBtYXhXaWR0aDogJzQwJScsXG4gIH0sXG4gIHN3aXRjaENvbnRhaW5lcjoge1xuICAgIGNvbG9yUHJpbWFyeTogJ3JlZCcsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShTZXR0aW5ncyk7XG4iLCJleHBvcnQgY29uc3QgT1BUSU1BTF9OVU1CRVJfVEFCUyA9ICd0YXJnZXRfdGFicyc7XG5leHBvcnQgY29uc3QgUE9MSUNZID0gJ3BvbGljeSc7XG5leHBvcnQgY29uc3QgQUNUSVZFX1BPTElDWSA9ICdhY3RpdmVfcG9saWN5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgaWYgKHNldHRpbmdzW1BPTElDWV1bT1BUSU1BTF9OVU1CRVJfVEFCU10gJiYgc2V0dGluZ3NbUE9MSUNZXVtPUFRJTUFMX05VTUJFUl9UQUJTXSA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImNvbnN0IFNDT1JFUiA9ICdkZWZhdWx0JzsgLy8gb25seSBkZWZhdWx0IGltcGxlbWVudGVkXG5jb25zdCBNQVhJTVVNX1NDT1JFID0gMTAwMDAwMDAwMDAwMDAwMDsgLy8gbWF4IHNjb3JlIGZvciBzY29yZXJcbmNvbnN0IE1BWElNVU1fSElTVE9SWV9TSVpFID0gMTAwMDsgLy8gbWF4IGtpbGxlZCB0YWIgaGlzdG9yeSBpbiBtZW1vcnlcbmNvbnN0IFNFU1NJT05TX1RJTUVPVVRfTVMgPSA4MDA7IC8vIHdoZW4gYSB0YWIgaXMga2lsbGVkIHdlIG5lZWQgYSB0aW1lb3V0IHRvIHJldHJpZXZlIHRoZSBzZXNzaW9uSWRcbmNvbnN0IFNFU1NJT05TX01BWF9GVVpaWV9ERUxUQV9NUyA9IDEwMDAgKiA1OyAvLyB0aW1lIGlzIGZ1enp5IG1hdGNoZWQgdG8gcmV0aXJldmUgdGhlIGNvcnJlY3Qgc2Vzc2lvbklELCBzaG91bGQgYmUgaGlnaGVyIHRoYW4gU0VTU0lPTlNfVElNRU9VVF9NU1xuY29uc3QgTUlOX0FDVElWRV9ERUJPVU5DRSA9IDEwMDAgKiAzOyAvLyBtaW5pbXVtIGFjdGl2ZSByZWFkaW5nIG9uIGEgdGFiIHRvIGJlIGNvdW50ZWQgYXMgdmFsaWQgJ3VzZWZ1bCcgdGltZVxuY29uc3QgTUFYX0FDVElWRV9ERUJPVU5DRSA9IDEwMDAgKiA2MCAqIDU7IC8vIG1heGltdW0gdGltZSB3aXRob3V0IGFueSB1c2VyIGlucHV0IGJlZm9yZSBpdCBpcyBjb25zaWRlcmVkIGlkbGVkXG5cbmV4cG9ydCB7IFNDT1JFUiwgTUFYSU1VTV9TQ09SRSwgTUFYSU1VTV9ISVNUT1JZX1NJWkUsIFNFU1NJT05TX1RJTUVPVVRfTVMsIFNFU1NJT05TX01BWF9GVVpaWV9ERUxUQV9NUywgTUlOX0FDVElWRV9ERUJPVU5DRSwgTUFYX0FDVElWRV9ERUJPVU5DRSB9O1xuIiwiY29uc3QgUkVMQVhFRCA9ICdyZWxheGVkJztcbmNvbnN0IEZPQ1VTRUQgPSAnZm9jdXNlZCc7XG5jb25zdCBDVVNUT01JWkVEID0gJ2N1c3RvbWl6ZWQnO1xudmFyIElOSVRfUkVMQVhFRF9QUk9GSUxFID0ge307XG52YXIgSU5JVF9GT0NVU0VEX1BST0ZJTEUgPSB7fTtcblxuaWYgKEVOViA9PT0gJ2RlYnVnJykge1xuICBJTklUX1JFTEFYRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMSAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogNSAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIGFjdGl2ZV9wb2xpY3k6IHRydWUsXG4gICAgICB0YXJnZXRfdGFiczogMTIsXG4gICAgICBkZWNheTogMC44LFxuICAgICAgbWluX3RpbWU6IDMgKiAxMDAwLFxuXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgcGlubmVkOiBmYWxzZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICBtaW5fYWN0aXZlOiA1ICogMTAwMCxcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjcsXG4gICAgfSxcbiAgfTtcblxuICBJTklUX0ZPQ1VTRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMSAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogNSAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIGFjdGl2ZV9wb2xpY3k6IHRydWUsXG4gICAgICB0YXJnZXRfdGFiczogNSxcbiAgICAgIGRlY2F5OiAwLjgsXG4gICAgICBtaW5fdGltZTogMyAqIDEwMDAsXG5cbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBwaW5uZWQ6IGZhbHNlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIG1pbl9hY3RpdmU6IDUgKiAxMDAwLFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDEwMDAsXG4gICAgICBjYWNoZWRfZGVjYXk6IDAuNyxcbiAgICB9LFxuICB9O1xufSBlbHNlIHtcbiAgSU5JVF9SRUxBWEVEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEwICogMTAwMCxcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiAxMCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgYWN0aXZlX3BvbGljeTogdHJ1ZSxcbiAgICAgIHRhcmdldF90YWJzOiAxMixcbiAgICAgIGRlY2F5OiAwLjgsXG4gICAgICBtaW5fdGltZTogMyAqIDEwMDAsXG5cbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBwaW5uZWQ6IGZhbHNlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIG1pbl9hY3RpdmU6IDUgKiA2MCAqIDEwMDAsXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogNjAgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjcsXG4gICAgfSxcbiAgfTtcblxuICBJTklUX0ZPQ1VTRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMTAgKiAxMDAwLFxuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDEwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICBhY3RpdmVfcG9saWN5OiB0cnVlLFxuICAgICAgdGFyZ2V0X3RhYnM6IDUsXG4gICAgICBkZWNheTogMC44LFxuICAgICAgbWluX3RpbWU6IDMgKiAxMDAwLFxuXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgcGlubmVkOiBmYWxzZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICBtaW5fYWN0aXZlOiA1ICogNjAgKiAxMDAwLFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDYwICogMTAwMCxcbiAgICAgIGNhY2hlZF9kZWNheTogMC43LFxuICAgIH0sXG4gIH07XG59XG5cbk9iamVjdC5mcmVlemUoSU5JVF9GT0NVU0VEX1BST0ZJTEUpO1xuT2JqZWN0LmZyZWV6ZShJTklUX1JFTEFYRURfUFJPRklMRSk7XG5cbmV4cG9ydCB7IFJFTEFYRUQsIEZPQ1VTRUQsIENVU1RPTUlaRUQsIElOSVRfRk9DVVNFRF9QUk9GSUxFLCBJTklUX1JFTEFYRURfUFJPRklMRSB9O1xuIiwiaW1wb3J0ICogYXMgcHNsIGZyb20gJ3BzbCc7XG5pbXBvcnQgeyBNQVhfQUNUSVZFX0RFQk9VTkNFIH0gZnJvbSAnLi4vY29uZmlnL2Vudi5qcyc7XG5cbmNvbnN0IGxvZ2dlciA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gIGlmIChFTlYgPT09ICdkZWJ1ZycgfHwgRU5WID09PSAnZGV2Jykge1xuICAgIGxldCBkZWZhdWx0X2Zvcm1hdCA9IFsnZm9udC13ZWlnaHQ6aW5pdGlhbDsgY29sb3I6YmxhY2s7J107XG4gICAgbGV0IHByZSA9ICclYycgKyBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkgKyAnJWMnO1xuICAgIGxldCBvcHRpb25zID0gWydmb250LXdlaWdodDpsaWdodGVyOyBjb2xvcjpMaWdodFNsYXRlR3JleTsnXTtcbiAgICBvcHRpb25zLnB1c2goZGVmYXVsdF9mb3JtYXQpO1xuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHByZSArPSAnIHwgJWMnICsgYXJnc1swXS5jb25zdHJ1Y3Rvci5uYW1lICsgJyVjIHwgJztcbiAgICAgIHByZSArPSBhcmdzWzFdO1xuICAgICAgb3B0aW9ucy5wdXNoKCdjb2xvcjojMWRhODdjOyBmb250LXdlaWdodDpib2xkZXInKTtcbiAgICAgIG9wdGlvbnMucHVzaChkZWZhdWx0X2Zvcm1hdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZSArPSAnIHwgJyArIGFyZ3NbMF07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHByZSwgLi4ub3B0aW9ucyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNvcHkob2JqKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG5mdW5jdGlvbiB0aW1lb3V0KG1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5mdW5jdGlvbiBnZXREb21haW4oc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBzbC5wYXJzZShuZXcgVVJMKHN0cikuaG9zdG5hbWUpLmRvbWFpbjtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdG9yYWdlU2V0KGFyZ3MpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoYXJncywgZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZUdldChhcmdzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KGFyZ3MsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICByZXNvbHZlKGRhdGEpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XG4gIHJldHVybiAvXlxcZCskLy50ZXN0KHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gc2V0QWxsUmVhZEJhZGdlKCkge1xuICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiAnJyB9KTsgLy8gPC0tIHNldCB0ZXh0IHRvICcnIHRvIHJlbW92ZSB0aGUgYmFkZ2Vcbn1cblxuZnVuY3Rpb24gc2V0VW5yZWFkQmFkZ2UoKSB7XG4gIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlQmFja2dyb3VuZENvbG9yKHsgY29sb3I6IFsyMjksIDkyLCAwLCAxMjhdIH0pO1xuICBjaHJvbWUuYnJvd3NlckFjdGlvbi5nZXRCYWRnZVRleHQoe30sIGZ1bmN0aW9uIChiYWRnZVRleHQpIHtcbiAgICBsZXQgY291bnRlciA9IDE7XG4gICAgaWYgKGlzSW50ZWdlcihiYWRnZVRleHQpKSB7XG4gICAgICBjb3VudGVyID0gcGFyc2VJbnQoYmFkZ2VUZXh0KSArIDE7XG4gICAgfVxuICAgIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6IGAke2NvdW50ZXJ9YCB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldExhc3RGb2N1c2VkV2luZG93KCkge1xuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoeyBwb3B1bGF0ZTogZmFsc2UsIHdpbmRvd1R5cGVzOiBbJ25vcm1hbCddIH0sIChkKSA9PiByZXNvbHZlKGQuaWQpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzVXNlckFjdGl2ZSgpIHtcbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5pZGxlLnF1ZXJ5U3RhdGUoKE1BWF9BQ1RJVkVfREVCT1VOQ0UgLyAxMDAwKS50b0ZpeGVkKCksIChzdGF0dXMpID0+IHtcbiAgICAgIGlmIChzdGF0dXMgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cykge1xuICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ2dlcihcIkNvdWxkbid0IGNoZWNrIHVzZXIgYWN0aXZpdHkuXCIpO1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxubG9nZ2VyKCdTdGFydGluZyBpbiAnICsgRU5WICsgJyBlbnYuJyk7XG5leHBvcnQge1xuICBsb2dnZXIsXG4gIGNvcHksXG4gIHRpbWVvdXQsXG4gIGdldERvbWFpbixcbiAgc3RvcmFnZUdldCxcbiAgc3RvcmFnZVNldCxcbiAgc2V0QWxsUmVhZEJhZGdlLFxuICBzZXRVbnJlYWRCYWRnZSxcbiAgaXNJbnRlZ2VyLFxuICBnZXRMYXN0Rm9jdXNlZFdpbmRvdyxcbiAgaXNVc2VyQWN0aXZlLFxufTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyFib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudG9kby1saXN0LWNvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY2FyZC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWI5ZTc0O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBjb2xvcjogIzFiOWU3NDtcXG4gIGJvcmRlci1jb2xvcjogIzFiOWU3NDtcXG59XFxuXFxuLmJvbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwb3B1cFwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9hcHAvcG9wdXAuanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BzbF9pbmRleF9qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbWF0ZXJpYWwtdWlfY29yZV9BdmF0YXJfQXZhdGFyX2pzLW5vZGVfbW9kdWxlc19tYXRlcmlhbC11aV9jb3JlX1R5cG9ncmFwLWY0NmYzMFwiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9ICgpID0+IHtcblxufTtcbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdH1cblx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG5mdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cdHZhciBydW50aW1lID0gZGF0YVszXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufTtcblxudmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gfHwgW107XG52YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuanNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG52YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=