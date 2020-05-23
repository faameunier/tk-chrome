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
  return new Promise((resolve, reject) => {
    chrome.windows.getLastFocused({
      populate: false,
      windowTypes: ['normal']
    }, d => resolve(d.id));
  });
}

function isUserActive() {
  return new Promise((resolve, reject) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9lbnYuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9zZXJ2aWNlcy91dGlscy5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzP2VhNWQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsIkFwcCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJFU1RPUkUiLCJORVhUIiwiUkVNT1ZFRCIsIkNMT1NFRF9ISVNUT1JZIiwiTlVNQkVSX0hPVVJTIiwiVElNRV9QRVJJT0RfVE9fQ09OU0lERVIiLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZXRBbGxSZWFkQmFkZ2UiLCJzdGF0ZSIsInJlbmRlclNhdmVCb29sZWFuIiwib25DaGFuZ2VkQ2FsbGJhY2siLCJjaGFuZ2VzIiwiY2hhbmdlc0Nsb3NlZEhpc3RvcnkiLCJzZXRTdGF0ZSIsImNsb3NlZF9oaXN0b3J5IiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwicmVzdWx0IiwibmV4dExpc3QiLCJvbkNoYW5nZWQiLCJhZGRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlTGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJmb3JjZVJlbmRlciIsInJlbW92ZUl0ZW0iLCJrZXkiLCJpdGVtcyIsInJldmVyc2UiLCJyZXN0b3JlVGFiIiwicmVtb3ZlTmV4dEl0ZW0iLCJtZXNzYWdlVHlwZSIsInJlc3RvcmVkVGFiIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidGFiSWQiLCJmaWx0ZXJMaXN0Iiwic2VsZWN0ZWRMaXN0Iiwibm93IiwiRGF0ZSIsImZpbHRlciIsIml0ZW0iLCJNYXRoIiwibWF4Iiwic3RhdGlzdGljcyIsInVwZGF0ZWRfYXQiLCJsYXN0X2FjdGl2ZV90aW1lc3RhbXAiLCJyZW5kZXJMaXN0IiwibGlzdFRvQmVSZW5kZXJlZCIsImNsYXNzZXMiLCJNQVhfTEVOR1RIX1RJVExFIiwiTUFYX0xFTkdUSF9VUkwiLCJtYXAiLCJ3ZWJzaXRlIiwiaSIsImRlbGV0aW9uVGltZSIsImRlbGV0aW9uX3RpbWUiLCJmb3JtYXR0ZWRfZGVsZXRpb25fdGltZSIsInRvVGltZVN0cmluZyIsInNwbGl0IiwiaG91cnNfZGVsZXRpb24iLCJtaW51dGVzX2RlbGV0aW9uIiwidGl0bGUiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJjb25jYXQiLCJ0cnVuY2F0ZWRfdXJsIiwidXJsIiwiaXNOZXh0IiwiZmlsdGVyZWRMaXN0IiwibGlzdFdlYnNpdGVzIiwiZ3JlZW5UaXRsZSIsImxpc3RJdGVtcyIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsImF2YXRhckNvbnRhaW5lciIsIml0ZW1UZXh0IiwiYnV0dG9uIiwicmVuZGVyIiwibnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIiwiYm9sZFRleHQiLCJtaWRkbGVUZXh0IiwibGlua1RvRm9ybSIsInN0eWxlcyIsImZvbnRTaXplIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjb2xvciIsImJvcmRlckJvdHRvbSIsIm1heFdpZHRoIiwiZm9udFdlaWdodCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwibWFyZ2luUmlnaHQiLCJib3JkZXJDb2xvciIsIndvcmRXcmFwIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJtYXJnaW5Ub3AiLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsImxlZnQiLCJ3aXRoU3R5bGVzIiwiSG9tZURpc3BhdGNoZXIiLCJhcHBCYXJWYWx1ZSIsImxvZ2dlciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJkaXNwYXRjaFBhZ2UiLCJyb290Iiwibm90aWZpY2F0aW9uIiwiaG9tZUNvbnRhaW5lciIsImdyaWRMb2dvVGFicyIsImxvZ29BdmF0YXIiLCJlIiwidiIsImFsbFRhYnMiLCJ0YWIiLCJtaW5XaWR0aCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwiaGVpZ2h0IiwiU2V0dGluZ3MiLCJwYXRoIiwicGFyYW1ldGVyIiwic2V0dGluZ3MiLCJuZXh0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlzSW50ZWdlciIsImNoZWNrU2V0dGluZ3MiLCJJTklUX1JFTEFYRURfUFJPRklMRSIsImhhbmRsZVNhdmVQYXJhbWV0ZXJzIiwiZm9jdXNlZE1vZGUiLCJyZWxheGVkTW9kZSIsImN1c3RvbWl6ZWRCb29sIiwiY2hhbmdlc1NldHRpbmdzIiwiY2hhbmdlc1Byb2ZpbGUiLCJGT0NVU0VEIiwiUkVMQVhFRCIsIkNVU1RPTUlaRUQiLCJwcm9maWxlIiwiYWN0aXZlX3Byb2ZpbGUiLCJoYW5kbGVCb29sQ2hhbmdlIiwiY2hhbmdlVHlwZSIsIm5vdGlmeVVzZXIiLCJzdWNjZXNzIiwiZW5xdWV1ZVNuYWNrYmFyIiwidmFyaWFudCIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImF1dG9IaWRlRHVyYXRpb24iLCJpbnB1dHNQYXJhbWV0ZXJzIiwibGFiZWwiLCJzb3VyY2UiLCJQT0xJQ1kiLCJPUFRJTUFMX05VTUJFUl9UQUJTIiwiaW5wdXRQcm9wcyIsIm1pbiIsInN0ZXAiLCJsaXN0SXRlbXNQYXJhbWV0ZXJzIiwiaW5kZXgiLCJoYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzIiwidGV4dEZpZWxkIiwiQUNUSVZFX1BPTElDWSIsImhhbmRsZVN3aXRjaCIsImludHJvZHVjdGlvbkJsb2NrIiwiYWN0aXZlQmFyIiwic2V0dGluZ3NXcmFwcGVyIiwiZmlyc3RCb29sZWFucyIsInNldHRpbmdzQmxvY2siLCJzZWNvbmRhcnlCdXR0b24iLCJ3aXRoU25hY2tiYXIiLCJzd2l0Y2hDb250YWluZXIiLCJjb2xvclByaW1hcnkiLCJTQ09SRVIiLCJNQVhJTVVNX1NDT1JFIiwiTUFYSU1VTV9ISVNUT1JZX1NJWkUiLCJTRVNTSU9OU19USU1FT1VUX01TIiwiU0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TIiwiTUlOX0FDVElWRV9ERUJPVU5DRSIsIk1BWF9BQ1RJVkVfREVCT1VOQ0UiLCJJTklUX0ZPQ1VTRURfUFJPRklMRSIsIkVOViIsIm1lbW9yeSIsImNhY2hlX3NpemUiLCJtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZSIsIm1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yIiwicG9saWN5IiwiYWN0aXZlX3BvbGljeSIsInRhcmdldF90YWJzIiwiZGVjYXkiLCJtaW5fdGltZSIsImFjdGl2ZSIsInBpbm5lZCIsImF1ZGlibGUiLCJzY29yZXIiLCJtaW5fYWN0aXZlIiwicHJvdGVjdGlvbl90aW1lIiwiY2FjaGVkX2RlY2F5IiwiT2JqZWN0IiwiZnJlZXplIiwiYXJncyIsImRlZmF1bHRfZm9ybWF0IiwicHJlIiwidG9VVENTdHJpbmciLCJvcHRpb25zIiwicHVzaCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY29weSIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInRpbWVvdXQiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImdldERvbWFpbiIsInN0ciIsInBzbCIsIlVSTCIsImhvc3RuYW1lIiwiZG9tYWluIiwic3RvcmFnZVNldCIsInJlamVjdCIsInNldCIsInN0b3JhZ2VHZXQiLCJkYXRhIiwidGVzdCIsImJyb3dzZXJBY3Rpb24iLCJzZXRCYWRnZVRleHQiLCJ0ZXh0Iiwic2V0VW5yZWFkQmFkZ2UiLCJzZXRCYWRnZUJhY2tncm91bmRDb2xvciIsImdldEJhZGdlVGV4dCIsImJhZGdlVGV4dCIsImNvdW50ZXIiLCJwYXJzZUludCIsImdldExhc3RGb2N1c2VkV2luZG93Iiwid2luZG93cyIsImdldExhc3RGb2N1c2VkIiwicG9wdWxhdGUiLCJ3aW5kb3dUeXBlcyIsImQiLCJpZCIsImlzVXNlckFjdGl2ZSIsImlkbGUiLCJxdWVyeVN0YXRlIiwidG9GaXhlZCIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEtBQUssR0FBR0MsaUVBQWMsQ0FBQztBQUMzQkMsU0FBTyxFQUFFO0FBQ1BDLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUU7QUFERztBQURKO0FBRGtCLENBQUQsQ0FBNUI7O0FBUUEsU0FBU0MsR0FBVCxHQUFlO0FBQ2Isc0JBQ0UsMkRBQUMsNkRBQUQ7QUFBa0IsU0FBSyxFQUFFTDtBQUF6QixrQkFDRSwyREFBQywrREFBRCxPQURGLEVBQ3FCLEdBRHJCLENBREY7QUFLRDs7QUFFRE0sdURBQUEsZUFBZ0IsMkRBQUMsR0FBRCxPQUFoQixFQUF5QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcsVUFBVUQsWUFBMUMsQyxDQUF3RDs7QUFFeEQsTUFBTUUsSUFBTixTQUFtQkMsZ0RBQW5CLENBQWlDO0FBQy9CQyxhQUFXLENB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Q0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQztXQUNBO1dBQ0EsZ0JBQWdCLDJCQUEyQjtXQUMzQztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxlQUFlLHVCQUF1QjtXQUN0QztXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLDJDOzs7O1VDNUZBO1VBQ0EiLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdqcXVlcnkvZGlzdC9qcXVlcnkubWluJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbic7XG5pbXBvcnQgJy4uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lRGlzcGF0Y2hlciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVEaXNwYXRjaGVyJztcbmltcG9ydCB7IE11aVRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMWI5ZTc0JyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhvbWVEaXNwYXRjaGVyIC8+eycgJ31cbiAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5pbXBvcnQgeyBzZXRBbGxSZWFkQmFkZ2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5cbmNvbnN0IFJFU1RPUkUgPSAnUkVTVE9SRSc7XG5jb25zdCBORVhUID0gJ05FWFQnO1xuY29uc3QgUkVNT1ZFRCA9ICdSRU1PVkVEJztcbmNvbnN0IENMT1NFRF9ISVNUT1JZID0gJ2Nsb3NlZF9oaXN0b3J5JztcbmNvbnN0IE5VTUJFUl9IT1VSUyA9IDI0O1xuY29uc3QgVElNRV9QRVJJT0RfVE9fQ09OU0lERVIgPSAzNjAwMDAwICogTlVNQkVSX0hPVVJTOyAvLyBpbiBtaWNyb3NlY29uZFxuXG5jbGFzcyBIb21lIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHNldEFsbFJlYWRCYWRnZSgpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSB9O1xuICAgIHRoaXMub25DaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgY29uc3QgY2hhbmdlc0Nsb3NlZEhpc3RvcnkgPSBjaGFuZ2VzW0NMT1NFRF9ISVNUT1JZXTtcbiAgICAgIGlmIChjaGFuZ2VzQ2xvc2VkSGlzdG9yeSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjbG9zZWRfaGlzdG9yeTogY2hhbmdlc0Nsb3NlZEhpc3RvcnlbJ25ld1ZhbHVlJ10sXG4gICAgICAgICAgcmVuZGVyU2F2ZUJvb2xlYW46IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbQ0xPU0VEX0hJU1RPUlldLCAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBjbG9zZWRfaGlzdG9yeSA9IHJlc3VsdC5jbG9zZWRfaGlzdG9yeSB8fCBbXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZWRfaGlzdG9yeSB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmV4dExpc3Q6IFtdIH0pO1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHNldEFsbFJlYWRCYWRnZSgpO1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnJlbmRlclNhdmVCb29sZWFuKSB7XG4gICAgICB0aGlzLmZvcmNlUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSXRlbShrZXkpIHtcbiAgICBsZXQgaXRlbXMgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5LnJldmVyc2UoKTtcbiAgICB0aGlzLnJlc3RvcmVUYWIoaXRlbXMsIGtleSwgUkVTVE9SRSk7XG4gIH1cblxuICByZW1vdmVOZXh0SXRlbShrZXkpIHtcbiAgICBsZXQgaXRlbXMgPSB0aGlzLnN0YXRlLm5leHRMaXN0O1xuICAgIHRoaXMucmVzdG9yZVRhYihpdGVtcywga2V5LCBSRVNUT1JFKTtcbiAgfVxuXG4gIHJlc3RvcmVUYWIoaXRlbXMsIGtleSwgbWVzc2FnZVR5cGUpIHtcbiAgICBjb25zdCByZXN0b3JlZFRhYiA9IGl0ZW1zW2tleV07XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VUeXBlLFxuICAgICAgdGFiSWQ6IHJlc3RvcmVkVGFiLnRhYklkLFxuICAgIH0pO1xuICB9XG5cbiAgZm9yY2VSZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGZpbHRlckxpc3Qoc2VsZWN0ZWRMaXN0KSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgbm93IC0gTWF0aC5tYXgoaXRlbS5zdGF0aXN0aWNzLnVwZGF0ZWRfYXQsIGl0ZW0uc3RhdGlzdGljcy5sYXN0X2FjdGl2ZV90aW1lc3RhbXApIDwgVElNRV9QRVJJT0RfVE9fQ09OU0lERVJcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJMaXN0KGxpc3RUb0JlUmVuZGVyZWQpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgc2VsZWN0ZWRMaXN0O1xuICAgIGNvbnN0IE1BWF9MRU5HVEhfVElUTEUgPSA1MDtcbiAgICBjb25zdCBNQVhfTEVOR1RIX1VSTCA9IDQwO1xuXG4gICAgc3dpdGNoIChsaXN0VG9CZVJlbmRlcmVkKSB7XG4gICAgICBjYXNlIE5FWFQ6XG4gICAgICAgIHNlbGVjdGVkTGlzdCA9IHRoaXMuc3RhdGUubmV4dExpc3QgPyB0aGlzLnN0YXRlLm5leHRMaXN0IDogW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc2VsZWN0ZWRMaXN0ID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSA/IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkgOiBbXTtcbiAgICAgICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0Lm1hcCgod2Vic2l0ZSwgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlbGV0aW9uVGltZSA9IG5ldyBEYXRlKHdlYnNpdGUuZGVsZXRpb25fdGltZSk7XG4gICAgICAgICAgY29uc3QgZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUgPSBkZWxldGlvblRpbWUudG9UaW1lU3RyaW5nKCkuc3BsaXQoJyAnKVswXTtcbiAgICAgICAgICB3ZWJzaXRlLmhvdXJzX2RlbGV0aW9uID0gZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUuc3BsaXQoJzonKVswXTtcbiAgICAgICAgICB3ZWJzaXRlLm1pbnV0ZXNfZGVsZXRpb24gPSBmb3JtYXR0ZWRfZGVsZXRpb25fdGltZS5zcGxpdCgnOicpWzFdO1xuICAgICAgICAgIGlmICh3ZWJzaXRlLnRpdGxlICYmIHdlYnNpdGUudGl0bGUubGVuZ3RoID4gTUFYX0xFTkdUSF9USVRMRSkge1xuICAgICAgICAgICAgd2Vic2l0ZS50aXRsZSA9IHdlYnNpdGUudGl0bGUuc3Vic3RyaW5nKDAsIE1BWF9MRU5HVEhfVElUTEUpLmNvbmNhdCgnLi4uJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh3ZWJzaXRlLnRpdGxlICYmIHdlYnNpdGUudGl0bGUubGVuZ3RoID4gTUFYX0xFTkdUSF9USVRMRSkge1xuICAgICAgICAgICAgd2Vic2l0ZS50cnVuY2F0ZWRfdXJsID0gd2Vic2l0ZS51cmwuc3Vic3RyaW5nKDAsIE1BWF9MRU5HVEhfVVJMKS5jb25jYXQoJy4uLicpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ZWJzaXRlLnRydW5jYXRlZF91cmwgPSB3ZWJzaXRlLnVybDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHdlYnNpdGU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBpc05leHQgPSBsaXN0VG9CZVJlbmRlcmVkID09PSBORVhUO1xuICAgIGNvbnN0IGZpbHRlcmVkTGlzdCA9IHRoaXMuZmlsdGVyTGlzdChzZWxlY3RlZExpc3QpLnJldmVyc2UoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFdlYnNpdGVzfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmdyZWVuVGl0bGV9PlxuICAgICAgICAgIHtpc05leHQgPyAnTmV4dCB0YWJzIHRvIGJlIGNsb3NlZCcgOiBgTGFzdCBjbG9zZWQgdGFic2B9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW1zfT5cbiAgICAgICAgICA8TGlzdCBkZW5zZT17dHJ1ZX0+XG4gICAgICAgICAgICB7ZmlsdGVyZWRMaXN0Lmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPHA+e2BObyB0YWJzIGNsb3NlZCBpbiB0aGUgbGFzdCAke05VTUJFUl9IT1VSU30gaG91cnMuYH08L3A+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBmaWx0ZXJlZExpc3QubWFwKCh3ZWJzaXRlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkQXZhdGFyV2l0aFRpbWV9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGltZURpc3BsYXl9PlxuICAgICAgICAgICAgICAgICAgICAgIHtgJHt3ZWJzaXRlLmhvdXJzX2RlbGV0aW9ufToke3dlYnNpdGUubWludXRlc19kZWxldGlvbn1gfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD17d2Vic2l0ZS50aXRsZX0gc3JjPXt3ZWJzaXRlLmZhdkljb25Vcmx9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJDb250YWluZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17d2Vic2l0ZS50cnVuY2F0ZWRfdXJsfVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e3dlYnNpdGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2lzTmV4dCA/IHRoaXMucmVtb3ZlTmV4dEl0ZW0uYmluZCh0aGlzLCBpKSA6IHRoaXMucmVtb3ZlSXRlbS5iaW5kKHRoaXMsIGkpfVxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXNOZXh0ID8gJ1NraXAnIDogJ1Jlc3RvcmUnfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG51bWJlckNsb3NlZFRhYnNMYXN0SG91ciA9IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkgPyB0aGlzLmZpbHRlckxpc3QodGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSkubGVuZ3RoIDogMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuYm9sZFRleHR9PlxuICAgICAgICAgICAge251bWJlckNsb3NlZFRhYnNMYXN0SG91ciA/IG51bWJlckNsb3NlZFRhYnNMYXN0SG91ciA6ICdObyd9IHRhYlxuICAgICAgICAgICAge251bWJlckNsb3NlZFRhYnNMYXN0SG91ciA9PT0gMSA/ICcnIDogJ3MnfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubWlkZGxlVGV4dH0+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAge251bWJlckNsb3NlZFRhYnNMYXN0SG91ciA9PT0gMSA/ICd3YXMnIDogJ3dlcmUnfSBjbG9zZWQgaW4gdGhlIGxhc3R7JyAnfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuYm9sZFRleHR9PiB7YCR7TlVNQkVSX0hPVVJTfSBob3VycyFgfSA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAge3RoaXMucmVuZGVyTGlzdC5iaW5kKHRoaXMpKFJFTU9WRUQpfVxuICAgICAgICB7Lyp7dGhpcy5yZW5kZXJMaXN0LmJpbmQodGhpcykoTkVYVCl9Ki99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtUb0Zvcm19PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZFVFSkhkMGJMNnJ5RnZaazIyMENvWnA3Y3d2RnhFU29ycHM3Y25nazB3UWZ5dS1RL3ZpZXdmb3JtXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVwb3J0IGEgYnVnIG9yIHNlbmQgdXMgYSBmZWVkYmFjaz9cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICB9LFxuICBncmVlblRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBjb2xvcjogJyMxYjllNzQnLFxuICAgIGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAjMWI5ZTc0YCxcbiAgICBtYXhXaWR0aDogMjI1LFxuICB9LFxuICBib2xkVGV4dDoge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgfSxcbiAgbWlkZGxlVGV4dDoge1xuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygwLjUpLFxuICB9LFxuICBidXR0b246IHtcbiAgICBjb2xvcjogJyMxYjllNzQnLFxuICAgIGJvcmRlckNvbG9yOiAnIzFiOWU3NCcsXG4gICAgZm9udFNpemU6IDEyLFxuICB9LFxuICBpdGVtVGV4dDoge1xuICAgIG1heFdpZHRoOiAxODUsXG4gICAgd29yZFdyYXA6ICdicmVhay13b3JkJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIG1heEhlaWdodDogODAsXG4gIH0sXG4gIHRpbWVEaXNwbGF5OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgfSxcbiAgZ3JpZEF2YXRhcldpdGhUaW1lOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB9LFxuICBsaXN0V2Vic2l0ZXM6IHtcbiAgICBtYXJnaW5Ub3A6IDIwLFxuICB9LFxuICBsaXN0SXRlbXM6IHtcbiAgICBtYXhIZWlnaHQ6IDMwMCxcbiAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICB9LFxuICBsaW5rVG9Gb3JtOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbGVmdDogJzU1JScsXG4gICAgZm9udFNpemU6IDEwLFxuICAgIG1hcmdpblRvcDogMTUsXG4gICAgbWF4V2lkdGg6ICc3NSUnLFxuICB9LFxuICBhdmF0YXJDb250YWluZXI6IHtcbiAgICBtYXhXaWR0aDogdGhlbWUuc3BhY2luZyg3KSxcbiAgICBtYXhIZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNyksXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShIb21lKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4uL1NldHRpbmdzJztcbmltcG9ydCBIb21lIGZyb20gJy4uL0hvbWUnO1xuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhci9BdmF0YXInO1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyL0xpc3RJdGVtQXZhdGFyJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLmpzJztcblxuY2xhc3MgSG9tZURpc3BhdGNoZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgYXBwQmFyVmFsdWU6ICdIT01FJyB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFwcEJhclZhbHVlOiAnSE9NRScgfSk7XG4gICAgbG9nZ2VyKHRoaXMsICdQb3B1cCBvcGVuZWQnKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCwgbmV3VmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXBwQmFyVmFsdWU6IG5ld1ZhbHVlIH0pO1xuICAgIGxvZ2dlcih0aGlzLCAnU3dpdGNoIHRvICcgKyBuZXdWYWx1ZSk7XG4gIH1cblxuICBkaXNwYXRjaFBhZ2UoKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmFwcEJhclZhbHVlKSB7XG4gICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgcmV0dXJuIDxIb21lIC8+O1xuICAgICAgY2FzZSAnU0VUVElOR1MnOlxuICAgICAgICByZXR1cm4gPFNldHRpbmdzIC8+O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyBpcyBhbiBlcnJvciBwYWdlPC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTbmFja2JhclByb3ZpZGVyXG4gICAgICAgIG1heFNuYWNrPXsyfVxuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5ub3RpZmljYXRpb24sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhvbWVDb250YWluZXJ9PlxuICAgICAgICAgIDxQYXBlciBzcXVhcmU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkTG9nb1RhYnN9PlxuICAgICAgICAgICAgICA8QXZhdGFyIGFsdD1cImxvZ29UYWJieVwiIHNyYz17Jy4uLy4uL2Fzc2V0cy9zdGF0aWMvaWNvbnMvdGFiYnkucG5nJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29BdmF0YXJ9IC8+XG4gICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYXBwQmFyVmFsdWUgPyB0aGlzLnN0YXRlLmFwcEJhclZhbHVlIDogJ0hPTUUnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdikgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgdil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFsbFRhYnN9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiSG9tZVwiIHZhbHVlPXsnSE9NRSd9IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJ9IC8+XG4gICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIlNldHRpbmdzXCIgdmFsdWU9eydTRVRUSU5HUyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJ9IC8+XG4gICAgICAgICAgICAgICAgey8qPFRhYiBsYWJlbD1cIkRlYnVnXCIgdmFsdWU9e1wiREVCVUdcIn0gZGlzYWJsZWQgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYn0vPiovfVxuICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+e3RoaXMuZGlzcGF0Y2hQYWdlKCl9PC9kaXY+XG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lRGlzcGF0Y2hlcjtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgSG9tZURpc3BhdGNoZXIgZnJvbSAnLi9Ib21lRGlzcGF0Y2hlcic7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYi9UYWInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBob21lQ29udGFpbmVyOiB7XG4gICAgbWluV2lkdGg6IDQwMCxcbiAgfSxcbiAgdGFiOiB7XG4gICAgY29sb3I6ICcjMWI5ZTc0JyxcbiAgfSxcbiAgbm90aWZpY2F0aW9uOiB7XG4gICAgbGVmdDogMTUwLFxuICB9LFxuICBncmlkTG9nb1RhYnM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdsZWZ0JyxcbiAgfSxcbiAgYWxsVGFiczoge1xuICAgIG1heFdpZHRoOiAnNzUlJyxcbiAgfSxcbiAgbG9nb0F2YXRhcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcuNSksXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDcuNSksXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShIb21lRGlzcGF0Y2hlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5JztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcbmltcG9ydCBUdW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHVuZSc7XG5pbXBvcnQgeyB3aXRoU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xuaW1wb3J0IHtcbiAgUkVMQVhFRCxcbiAgRk9DVVNFRCxcbiAgQ1VTVE9NSVpFRCxcbiAgSU5JVF9GT0NVU0VEX1BST0ZJTEUsXG4gIElOSVRfUkVMQVhFRF9QUk9GSUxFLFxufSBmcm9tICcuLi8uLi9jb25maWcvc2V0dGluZ3NQcm9maWxlcy5qcyc7XG5pbXBvcnQgeyBjaGVja1NldHRpbmdzLCBPUFRJTUFMX05VTUJFUl9UQUJTLCBQT0xJQ1ksIEFDVElWRV9QT0xJQ1kgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpc0ludGVnZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5cbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb2N1c2VkTW9kZTogZmFsc2UsXG4gICAgICByZWxheGVkTW9kZTogZmFsc2UsXG4gICAgICBjdXN0b21pemVkQm9vbDogZmFsc2UsXG4gICAgICBzZXR0aW5nczogSU5JVF9SRUxBWEVEX1BST0ZJTEUsXG4gICAgICByZW5kZXJTYXZlQm9vbGVhbjogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLm9uQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXNTZXR0aW5ncyA9IGNoYW5nZXNbJ3NldHRpbmdzJ107XG4gICAgICBjb25zdCBjaGFuZ2VzUHJvZmlsZSA9IGNoYW5nZXNbJ2FjdGl2ZV9wcm9maWxlJ107XG4gICAgICBpZiAoY2hhbmdlc1NldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNldHRpbmdzOiBjaGFuZ2VzU2V0dGluZ3NbJ25ld1ZhbHVlJ10sXG4gICAgICAgICAgcmVuZGVyU2F2ZUJvb2xlYW46IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZXNQcm9maWxlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZvY3VzZWRNb2RlOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gRk9DVVNFRCxcbiAgICAgICAgICByZWxheGVkTW9kZTogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IFJFTEFYRUQsXG4gICAgICAgICAgY3VzdG9taXplZEJvb2w6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBDVVNUT01JWkVELFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydhY3RpdmVfcHJvZmlsZScsICdzZXR0aW5ncyddLCAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBwcm9maWxlID0gcmVzdWx0LmFjdGl2ZV9wcm9maWxlIHx8IFJFTEFYRUQ7XG4gICAgICBjb25zdCBmb2N1c2VkTW9kZSA9IHByb2ZpbGUgPT09IEZPQ1VTRUQ7XG4gICAgICBjb25zdCByZWxheGVkTW9kZSA9IHByb2ZpbGUgPT09IFJFTEFYRUQ7XG4gICAgICBjb25zdCBjdXN0b21pemVkQm9vbCA9IHByb2ZpbGUgPT09IENVU1RPTUlaRUQ7XG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHJlc3VsdC5zZXR0aW5ncyB8fCBJTklUX1JFTEFYRURfUFJPRklMRTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkTW9kZSxcbiAgICAgICAgcmVsYXhlZE1vZGUsXG4gICAgICAgIGN1c3RvbWl6ZWRCb29sLFxuICAgICAgICBzZXR0aW5ncyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnJlbmRlclNhdmVCb29sZWFuKSB7XG4gICAgICB0aGlzLmZvcmNlUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQm9vbENoYW5nZShjaGFuZ2VUeXBlKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QUk9GSUxFJyxcbiAgICAgIHByb2ZpbGU6IGNoYW5nZVR5cGUsXG4gICAgfSk7XG4gICAgaWYgKGNoYW5nZVR5cGUgPT09IFJFTEFYRUQgfHwgY2hhbmdlVHlwZSA9PT0gRk9DVVNFRCkge1xuICAgICAgdGhpcy5ub3RpZnlVc2VyKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGZvcmNlUmVuZGVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZW5kZXJTYXZlQm9vbGVhbjogZmFsc2UgfSk7XG4gIH1cblxuICBoYW5kbGVTYXZlUGFyYW1ldGVycygpIHtcbiAgICAvLyBUT0RPIEFkZCBmdW5jdGlvbiB0byBjaGVjayBmb3IgYWxsIHBvdGVudGlhbCB2YWx1ZXNcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuICAgIGlmIChjaGVja1NldHRpbmdzKHRoaXMuc3RhdGUuc2V0dGluZ3MpKSB7XG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIG1lc3NhZ2VUeXBlOiAnU0VUVElOR1NfUEFSQU1FVEVSUycsXG4gICAgICAgIHNldHRpbmdzOiB0aGlzLnN0YXRlLnNldHRpbmdzLFxuICAgICAgfSk7XG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5ub3RpZnlVc2VyKHN1Y2Nlc3MpO1xuICB9XG5cbiAgbm90aWZ5VXNlcihzdWNjZXNzKSB7XG4gICAgdGhpcy5wcm9wcy5lbnF1ZXVlU25hY2tiYXIoc3VjY2VzcyA/ICdOZXcgU2V0dGluZ3MgYXJlIHNhdmVkLicgOiAnU2V0dGluZ3MgY2Fubm90IGJlIHNhdmVkLicsIHtcbiAgICAgIHZhcmlhbnQ6IHN1Y2Nlc3MgPyAnc3VjY2VzcycgOiAnZXJyb3InLFxuICAgICAgYW5jaG9yT3JpZ2luOiB7XG4gICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgIH0sXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDc1MCxcbiAgICAgIGF1dG9IaWRlRHVyYXRpb246IDE1MDAsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzID0gKHBhdGgsIHBhcmFtZXRlcikgPT4gKGV2ZW50KSA9PiB7XG4gICAgbGV0IHNldHRpbmdzID0gdGhpcy5zdGF0ZS5zZXR0aW5ncztcbiAgICBjb25zdCBuZXh0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKGlzSW50ZWdlcihuZXh0VmFsdWUpIHx8IG5leHRWYWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldHRpbmdzW3BhdGhdW3BhcmFtZXRlcl0gPSBuZXh0VmFsdWU7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2V0dGluZ3M6IHNldHRpbmdzLCByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSB9KTtcbiAgICB9XG4gIH07XG4gIGhhbmRsZVN3aXRjaCA9IChwYXRoLCBwYXJhbWV0ZXIpID0+ICgpID0+IHtcbiAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLnN0YXRlLnNldHRpbmdzO1xuICAgIGlmICghY2hlY2tTZXR0aW5ncyh0aGlzLnN0YXRlLnNldHRpbmdzKSkge1xuICAgICAgc2V0dGluZ3MgPSBJTklUX1JFTEFYRURfUFJPRklMRTtcbiAgICB9XG4gICAgc2V0dGluZ3NbcGF0aF1bcGFyYW1ldGVyXSA9ICF0aGlzLnN0YXRlLnNldHRpbmdzW3BhdGhdW3BhcmFtZXRlcl07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNldHRpbmdzOiBzZXR0aW5ncywgcmVuZGVyU2F2ZUJvb2xlYW46IHRydWUgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVTYXZlUGFyYW1ldGVycygpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5wdXRzUGFyYW1ldGVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdPcHRpbWFsIG51bWJlciBvZiB0YWJzICcsXG4gICAgICAgIHNvdXJjZTogdGhpcy5zdGF0ZS5zZXR0aW5ncyxcbiAgICAgICAgcGF0aDogUE9MSUNZLFxuICAgICAgICBwYXJhbWV0ZXI6IE9QVElNQUxfTlVNQkVSX1RBQlMsXG4gICAgICAgIGlucHV0UHJvcHM6IHsgbWluOiAnMScsIG1heDogJzEwMCcsIHN0ZXA6ICcxJyB9LFxuICAgICAgfSxcbiAgICBdO1xuICAgIGNvbnN0IGxpc3RJdGVtc1BhcmFtZXRlcnMgPSBpbnB1dHNQYXJhbWV0ZXJzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sfVxuICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlUGFyYW1ldGVycyhpdGVtLnBhdGgsIGl0ZW0ucGFyYW1ldGVyKX1cbiAgICAgICAgdmFsdWU9e2l0ZW0uc291cmNlW2l0ZW0ucGF0aF1baXRlbS5wYXJhbWV0ZXJdfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgb25LZXlVcD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB0aGlzLmhhbmRsZVNhdmVQYXJhbWV0ZXJzKCk7XG4gICAgICAgIH19XG4gICAgICAgIGlucHV0UHJvcHM9e2l0ZW0uaW5wdXRQcm9wc31cbiAgICAgIC8+XG4gICAgKSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc2V0dGluZ3NbUE9MSUNZXVtBQ1RJVkVfUE9MSUNZXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3dpdGNoKFBPTElDWSwgQUNUSVZFX1BPTElDWSl9XG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhYmVsPVwiRW5hYmxlIFRhYmJ5XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW50cm9kdWN0aW9uQmxvY2t9PlxuICAgICAgICAgIDxUdW5lSWNvbiAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICBTZWxlY3QgdGhlIHN1aXRpbmcgbW9kZSBvciBjdXN0b21pemUgaXQuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3RpdmVCYXJ9PjwvZGl2PlxuICAgICAgICAgIHsvKjxoMSBjbGFzc05hbWU9e1wiYm9sZC10aXRsZVwifT5TZWxlY3QgVGFiYnkncyBvcGVyYXRpbmcgbW9kZTo8L2gxPiovfVxuICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXR0aW5nc1dyYXBwZXJ9PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmZvY3VzZWRNb2RlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlQm9vbENoYW5nZShGT0NVU0VEKX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxhYmVsPVwiRm9jdXNlZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5yZWxheGVkTW9kZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoUkVMQVhFRCl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsYWJlbD1cIlJlbGF4ZWRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCb29sZWFuc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVCb29sQ2hhbmdlKENVU1RPTUlaRUQpfVxuICAgICAgICAgICAgICBjb250cm9sPXs8Q2hlY2tib3ggY2hlY2tlZD17dGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH0gdmFsdWU9XCJcIiBjb2xvcj1cInNlY29uZGFyeVwiIC8+fVxuICAgICAgICAgICAgICBsYWJlbD1cIkN1c3RvbWl6ZSB5b3VyIHNldHRpbmdzJyBwYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXR0aW5nc0Jsb2NrfT5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgICAgLy9jbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xpc3RJdGVtc1BhcmFtZXRlcnN9XG4gICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgaGlkZGVuIGtleT1cImhpZGRlbi10ZXh0ZmllbGRcIiBkaXNhYmxlZCAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRhcnlCdXR0b259XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PXt0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sID8gJ291dGxpbmUtcHJpbWFyeScgOiAnc2Vjb25kYXJ5J31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNuYWNrYmFyKFNldHRpbmdzKTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9TZXR0aW5ncyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWFyZ2luVG9wOiAwLFxuICAgIG1hcmdpbkxlZnQ6IDIwLFxuICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgfSxcbiAgYWN0aXZlQmFyOiB7XG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgfSxcblxuICBzZXR0aW5nc1dyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgbWF4SGVpZ2h0OiAnNTAlJyxcbiAgICAvL3dpZHRoOiAnMTAwJScsXG4gICAgLy9oZWlnaHQ6ICcxMDB2aCcsXG4gIH0sXG4gIHNlY29uZGFyeUJ1dHRvbjoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gICAgLy9tYXJnaW5Eb3duOiA1LFxuICAgIGNvbG9yOiAnIzFiOWU3NCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjMWI5ZTc0JyxcbiAgfSxcbiAgbm90aWZpY2F0aW9uOiB7XG4gICAgbWF4V2lkdGg6IDE1MCxcbiAgfSxcbiAgaW50cm9kdWN0aW9uQmxvY2s6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgLy9tYXJnaW5Ub3A6IDIwLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTcsXG4gICAgbWFyZ2luTGVmdDogMTAsXG4gIH0sXG4gIHNldHRpbmdzQmxvY2s6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgZmlyc3RCb29sZWFuczoge1xuICAgIG1heFdpZHRoOiAnNDAlJyxcbiAgfSxcbiAgc3dpdGNoQ29udGFpbmVyOiB7XG4gICAgY29sb3JQcmltYXJ5OiAncmVkJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFNldHRpbmdzKTtcbiIsImV4cG9ydCBjb25zdCBPUFRJTUFMX05VTUJFUl9UQUJTID0gJ3RhcmdldF90YWJzJztcbmV4cG9ydCBjb25zdCBQT0xJQ1kgPSAncG9saWN5JztcbmV4cG9ydCBjb25zdCBBQ1RJVkVfUE9MSUNZID0gJ2FjdGl2ZV9wb2xpY3knO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTZXR0aW5ncyhzZXR0aW5ncykge1xuICBpZiAoc2V0dGluZ3NbUE9MSUNZXVtPUFRJTUFMX05VTUJFUl9UQUJTXSAmJiBzZXR0aW5nc1tQT0xJQ1ldW09QVElNQUxfTlVNQkVSX1RBQlNdID4gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiY29uc3QgU0NPUkVSID0gJ2RlZmF1bHQnOyAvLyBvbmx5IGRlZmF1bHQgaW1wbGVtZW50ZWRcbmNvbnN0IE1BWElNVU1fU0NPUkUgPSAxMDAwMDAwMDAwMDAwMDAwOyAvLyBtYXggc2NvcmUgZm9yIHNjb3JlclxuY29uc3QgTUFYSU1VTV9ISVNUT1JZX1NJWkUgPSAxMDAwOyAvLyBtYXgga2lsbGVkIHRhYiBoaXN0b3J5IGluIG1lbW9yeVxuY29uc3QgU0VTU0lPTlNfVElNRU9VVF9NUyA9IDgwMDsgLy8gd2hlbiBhIHRhYiBpcyBraWxsZWQgd2UgbmVlZCBhIHRpbWVvdXQgdG8gcmV0cmlldmUgdGhlIHNlc3Npb25JZFxuY29uc3QgU0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TID0gMTAwMCAqIDU7IC8vIHRpbWUgaXMgZnV6enkgbWF0Y2hlZCB0byByZXRpcmV2ZSB0aGUgY29ycmVjdCBzZXNzaW9uSUQsIHNob3VsZCBiZSBoaWdoZXIgdGhhbiBTRVNTSU9OU19USU1FT1VUX01TXG5jb25zdCBNSU5fQUNUSVZFX0RFQk9VTkNFID0gMTAwMCAqIDM7IC8vIG1pbmltdW0gYWN0aXZlIHJlYWRpbmcgb24gYSB0YWIgdG8gYmUgY291bnRlZCBhcyB2YWxpZCAndXNlZnVsJyB0aW1lXG5jb25zdCBNQVhfQUNUSVZFX0RFQk9VTkNFID0gMTAwMCAqIDYwICogNTsgLy8gbWF4aW11bSB0aW1lIHdpdGhvdXQgYW55IHVzZXIgaW5wdXQgYmVmb3JlIGl0IGlzIGNvbnNpZGVyZWQgaWRsZWRcblxuZXhwb3J0IHsgU0NPUkVSLCBNQVhJTVVNX1NDT1JFLCBNQVhJTVVNX0hJU1RPUllfU0laRSwgU0VTU0lPTlNfVElNRU9VVF9NUywgU0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TLCBNSU5fQUNUSVZFX0RFQk9VTkNFLCBNQVhfQUNUSVZFX0RFQk9VTkNFIH07XG4iLCJjb25zdCBSRUxBWEVEID0gJ3JlbGF4ZWQnO1xuY29uc3QgRk9DVVNFRCA9ICdmb2N1c2VkJztcbmNvbnN0IENVU1RPTUlaRUQgPSAnY3VzdG9taXplZCc7XG52YXIgSU5JVF9SRUxBWEVEX1BST0ZJTEUgPSB7fTtcbnZhciBJTklUX0ZPQ1VTRURfUFJPRklMRSA9IHt9O1xuXG5pZiAoRU5WID09PSAnZGVidWcnKSB7XG4gIElOSVRfUkVMQVhFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxICogMTAwMCxcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiA1ICogMTAwMCxcbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgYWN0aXZlX3BvbGljeTogdHJ1ZSxcbiAgICAgIHRhcmdldF90YWJzOiAxMixcbiAgICAgIGRlY2F5OiAwLjgsXG4gICAgICBtaW5fdGltZTogMyAqIDEwMDAsXG5cbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBwaW5uZWQ6IGZhbHNlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIG1pbl9hY3RpdmU6IDUgKiAxMDAwLFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDEwMDAsXG4gICAgICBjYWNoZWRfZGVjYXk6IDAuNyxcbiAgICB9LFxuICB9O1xuXG4gIElOSVRfRk9DVVNFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxICogMTAwMCxcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiA1ICogMTAwMCxcbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgYWN0aXZlX3BvbGljeTogdHJ1ZSxcbiAgICAgIHRhcmdldF90YWJzOiA1LFxuICAgICAgZGVjYXk6IDAuOCxcbiAgICAgIG1pbl90aW1lOiAzICogMTAwMCxcblxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIHBpbm5lZDogZmFsc2UsXG4gICAgICBhdWRpYmxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHNjb3Jlcjoge1xuICAgICAgbWluX2FjdGl2ZTogNSAqIDEwMDAsXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogMTAwMCxcbiAgICAgIGNhY2hlZF9kZWNheTogMC43LFxuICAgIH0sXG4gIH07XG59IGVsc2Uge1xuICBJTklUX1JFTEFYRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMTAgKiAxMDAwLFxuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDEwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICBhY3RpdmVfcG9saWN5OiB0cnVlLFxuICAgICAgdGFyZ2V0X3RhYnM6IDEyLFxuICAgICAgZGVjYXk6IDAuOCxcbiAgICAgIG1pbl90aW1lOiAzICogMTAwMCxcblxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIHBpbm5lZDogZmFsc2UsXG4gICAgICBhdWRpYmxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHNjb3Jlcjoge1xuICAgICAgbWluX2FjdGl2ZTogNSAqIDYwICogMTAwMCxcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiA2MCAqIDEwMDAsXG4gICAgICBjYWNoZWRfZGVjYXk6IDAuNyxcbiAgICB9LFxuICB9O1xuXG4gIElOSVRfRk9DVVNFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxMCAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogMTAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIGFjdGl2ZV9wb2xpY3k6IHRydWUsXG4gICAgICB0YXJnZXRfdGFiczogNSxcbiAgICAgIGRlY2F5OiAwLjgsXG4gICAgICBtaW5fdGltZTogMyAqIDEwMDAsXG5cbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBwaW5uZWQ6IGZhbHNlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIG1pbl9hY3RpdmU6IDUgKiA2MCAqIDEwMDAsXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogNjAgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjcsXG4gICAgfSxcbiAgfTtcbn1cblxuT2JqZWN0LmZyZWV6ZShJTklUX0ZPQ1VTRURfUFJPRklMRSk7XG5PYmplY3QuZnJlZXplKElOSVRfUkVMQVhFRF9QUk9GSUxFKTtcblxuZXhwb3J0IHsgUkVMQVhFRCwgRk9DVVNFRCwgQ1VTVE9NSVpFRCwgSU5JVF9GT0NVU0VEX1BST0ZJTEUsIElOSVRfUkVMQVhFRF9QUk9GSUxFIH07XG4iLCJpbXBvcnQgKiBhcyBwc2wgZnJvbSAncHNsJztcbmltcG9ydCB7IE1BWF9BQ1RJVkVfREVCT1VOQ0UgfSBmcm9tICcuLi9jb25maWcvZW52LmpzJztcblxuY29uc3QgbG9nZ2VyID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgaWYgKEVOViA9PT0gJ2RlYnVnJyB8fCBFTlYgPT09ICdkZXYnKSB7XG4gICAgbGV0IGRlZmF1bHRfZm9ybWF0ID0gWydmb250LXdlaWdodDppbml0aWFsOyBjb2xvcjpibGFjazsnXTtcbiAgICBsZXQgcHJlID0gJyVjJyArIG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSArICclYyc7XG4gICAgbGV0IG9wdGlvbnMgPSBbJ2ZvbnQtd2VpZ2h0OmxpZ2h0ZXI7IGNvbG9yOkxpZ2h0U2xhdGVHcmV5OyddO1xuICAgIG9wdGlvbnMucHVzaChkZWZhdWx0X2Zvcm1hdCk7XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJlICs9ICcgfCAlYycgKyBhcmdzWzBdLmNvbnN0cnVjdG9yLm5hbWUgKyAnJWMgfCAnO1xuICAgICAgcHJlICs9IGFyZ3NbMV07XG4gICAgICBvcHRpb25zLnB1c2goJ2NvbG9yOiMxZGE4N2M7IGZvbnQtd2VpZ2h0OmJvbGRlcicpO1xuICAgICAgb3B0aW9ucy5wdXNoKGRlZmF1bHRfZm9ybWF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlICs9ICcgfCAnICsgYXJnc1swXTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJlLCAuLi5vcHRpb25zKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gY29weShvYmopIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbmZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmZ1bmN0aW9uIGdldERvbWFpbihzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHNsLnBhcnNlKG5ldyBVUkwoc3RyKS5ob3N0bmFtZSkuZG9tYWluO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0b3JhZ2VTZXQoYXJncykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChhcmdzLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdG9yYWdlR2V0KGFyZ3MpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoYXJncywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIC9eXFxkKyQvLnRlc3QodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZXRBbGxSZWFkQmFkZ2UoKSB7XG4gIGNocm9tZS5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6ICcnIH0pOyAvLyA8LS0gc2V0IHRleHQgdG8gJycgdG8gcmVtb3ZlIHRoZSBiYWRnZVxufVxuXG5mdW5jdGlvbiBzZXRVbnJlYWRCYWRnZSgpIHtcbiAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3IoeyBjb2xvcjogWzIyOSwgOTIsIDAsIDEyOF0gfSk7XG4gIGNocm9tZS5icm93c2VyQWN0aW9uLmdldEJhZGdlVGV4dCh7fSwgZnVuY3Rpb24gKGJhZGdlVGV4dCkge1xuICAgIGxldCBjb3VudGVyID0gMTtcbiAgICBpZiAoaXNJbnRlZ2VyKGJhZGdlVGV4dCkpIHtcbiAgICAgIGNvdW50ZXIgPSBwYXJzZUludChiYWRnZVRleHQpICsgMTtcbiAgICB9XG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogYCR7Y291bnRlcn1gIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdEZvY3VzZWRXaW5kb3coKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLndpbmRvd3MuZ2V0TGFzdEZvY3VzZWQoeyBwb3B1bGF0ZTogZmFsc2UsIHdpbmRvd1R5cGVzOiBbJ25vcm1hbCddIH0sIChkKSA9PiByZXNvbHZlKGQuaWQpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzVXNlckFjdGl2ZSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUuaWRsZS5xdWVyeVN0YXRlKChNQVhfQUNUSVZFX0RFQk9VTkNFIC8gMTAwMCkudG9GaXhlZCgpLCAoc3RhdHVzKSA9PiB7XG4gICAgICBpZiAoc3RhdHVzID09PSAnYWN0aXZlJykge1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0dXMpIHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dnZXIoXCJDb3VsZG4ndCBjaGVjayB1c2VyIGFjdGl2aXR5LlwiKTtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmxvZ2dlcignU3RhcnRpbmcgaW4gJyArIEVOViArICcgZW52LicpO1xuZXhwb3J0IHtcbiAgbG9nZ2VyLFxuICBjb3B5LFxuICB0aW1lb3V0LFxuICBnZXREb21haW4sXG4gIHN0b3JhZ2VHZXQsXG4gIHN0b3JhZ2VTZXQsXG4gIHNldEFsbFJlYWRCYWRnZSxcbiAgc2V0VW5yZWFkQmFkZ2UsXG4gIGlzSW50ZWdlcixcbiAgZ2V0TGFzdEZvY3VzZWRXaW5kb3csXG4gIGlzVXNlckFjdGl2ZSxcbn07XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvZG8tbGlzdC1jb250YWluZXIge1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFiOWU3NDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgY29sb3I6ICMxYjllNzQ7XFxuICBib3JkZXItY29sb3I6ICMxYjllNzQ7XFxufVxcblxcbi5ib2xkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicG9wdXBcIjogMFxufTtcblxudmFyIGRlZmVycmVkTW9kdWxlcyA9IFtcblx0W1wiLi9zcmMvYXBwL3BvcHVwLmpzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wc2xfaW5kZXhfanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfQXZhdGFyX0F2YXRhcl9qcy1ub2RlX21vZHVsZXNfbWF0ZXJpYWwtdWlfY29yZV9UeXBvZ3JhcC1mNDZmMzBcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSAoKSA9PiB7XG5cbn07XG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIHJlc2V0IHN0YXJ0dXAgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIG1vcmUgc3RhcnR1cCBjb2RlIGlzIGFkZGVkXG5cdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHR9XG5cdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbM107XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuXHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcblx0fVxuXG5cdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3Rcblx0aWYoZXhlY3V0ZU1vZHVsZXMpIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuXG5cdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbn07XG5cbnZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wdGtfY2hyb21lXCJdID0gd2luZG93W1wid2VicGFja0pzb25wdGtfY2hyb21lXCJdIHx8IFtdO1xudmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbmpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xudmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uOyIsIi8vIHJ1biBzdGFydHVwXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9