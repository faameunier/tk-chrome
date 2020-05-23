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
/* harmony export */   "MIN_ACTIVE_DEBOUNCE": () => /* binding */ MIN_ACTIVE_DEBOUNCE
/* harmony export */ });
/* unused harmony export MAX_ACTIVE_DEBOUNCE */
const SCORER = 'default'; // only default implemented

const MAXIMUM_SCORE = 1000000000000000; // max score for scorer

const MAXIMUM_HISTORY_SIZE = 1000; // max killed tab history in memory

const SESSIONS_TIMEOUT_MS = 800; // when a tab is killed we need a timeout to retrieve the sessionId

const SESSIONS_MAX_FUZZY_DELTA_MS = 1000 * 5; // time is fuzzy matched to retireve the correct sessionID, should be higher than SESSIONS_TIMEOUT_MS

const MIN_ACTIVE_DEBOUNCE = 1000 * 2; // minimum active reading on a tab to be counted as valid 'useful' time

const MAX_ACTIVE_DEBOUNCE = 1000 * 60 * 5; // maximum time without any user input before it is considered idled, must be higher than 15sec

const FORCE_UPDATE_STATISTICS = 1000 * 60; // must be higher than 1 minute



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9lbnYuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9zZXJ2aWNlcy91dGlscy5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzP2VhNWQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsIkFwcCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJFU1RPUkUiLCJORVhUIiwiUkVNT1ZFRCIsIkNMT1NFRF9ISVNUT1JZIiwiTlVNQkVSX0hPVVJTIiwiVElNRV9QRVJJT0RfVE9fQ09OU0lERVIiLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZXRBbGxSZWFkQmFkZ2UiLCJzdGF0ZSIsInJlbmRlclNhdmVCb29sZWFuIiwib25DaGFuZ2VkQ2FsbGJhY2siLCJjaGFuZ2VzIiwiY2hhbmdlc0Nsb3NlZEhpc3RvcnkiLCJzZXRTdGF0ZSIsImNsb3NlZF9oaXN0b3J5IiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwicmVzdWx0IiwibmV4dExpc3QiLCJvbkNoYW5nZWQiLCJhZGRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlTGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJmb3JjZVJlbmRlciIsInJlbW92ZUl0ZW0iLCJrZXkiLCJpdGVtcyIsInJldmVyc2UiLCJyZXN0b3JlVGFiIiwicmVtb3ZlTmV4dEl0ZW0iLCJtZXNzYWdlVHlwZSIsInJlc3RvcmVkVGFiIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidGFiSWQiLCJmaWx0ZXJMaXN0Iiwic2VsZWN0ZWRMaXN0Iiwibm93IiwiRGF0ZSIsImZpbHRlciIsIml0ZW0iLCJNYXRoIiwibWF4Iiwic3RhdGlzdGljcyIsInVwZGF0ZWRfYXQiLCJsYXN0X2FjdGl2ZV90aW1lc3RhbXAiLCJyZW5kZXJMaXN0IiwibGlzdFRvQmVSZW5kZXJlZCIsImNsYXNzZXMiLCJNQVhfTEVOR1RIX1RJVExFIiwiTUFYX0xFTkdUSF9VUkwiLCJtYXAiLCJ3ZWJzaXRlIiwiaSIsImRlbGV0aW9uVGltZSIsImRlbGV0aW9uX3RpbWUiLCJmb3JtYXR0ZWRfZGVsZXRpb25fdGltZSIsInRvVGltZVN0cmluZyIsInNwbGl0IiwiaG91cnNfZGVsZXRpb24iLCJtaW51dGVzX2RlbGV0aW9uIiwidGl0bGUiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJjb25jYXQiLCJ0cnVuY2F0ZWRfdXJsIiwidXJsIiwiaXNOZXh0IiwiZmlsdGVyZWRMaXN0IiwibGlzdFdlYnNpdGVzIiwiZ3JlZW5UaXRsZSIsImxpc3RJdGVtcyIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsImF2YXRhckNvbnRhaW5lciIsIml0ZW1UZXh0IiwiYnV0dG9uIiwicmVuZGVyIiwibnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIiwiYm9sZFRleHQiLCJtaWRkbGVUZXh0IiwibGlua1RvRm9ybSIsInN0eWxlcyIsImZvbnRTaXplIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjb2xvciIsImJvcmRlckJvdHRvbSIsIm1heFdpZHRoIiwiZm9udFdlaWdodCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwibWFyZ2luUmlnaHQiLCJib3JkZXJDb2xvciIsIndvcmRXcmFwIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJtYXJnaW5Ub3AiLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsImxlZnQiLCJ3aXRoU3R5bGVzIiwiSG9tZURpc3BhdGNoZXIiLCJhcHBCYXJWYWx1ZSIsImxvZ2dlciIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJkaXNwYXRjaFBhZ2UiLCJyb290Iiwibm90aWZpY2F0aW9uIiwiaG9tZUNvbnRhaW5lciIsImdyaWRMb2dvVGFicyIsImxvZ29BdmF0YXIiLCJlIiwidiIsImFsbFRhYnMiLCJ0YWIiLCJtaW5XaWR0aCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwiaGVpZ2h0IiwiU2V0dGluZ3MiLCJwYXRoIiwicGFyYW1ldGVyIiwic2V0dGluZ3MiLCJuZXh0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlzSW50ZWdlciIsImNoZWNrU2V0dGluZ3MiLCJJTklUX1JFTEFYRURfUFJPRklMRSIsImhhbmRsZVNhdmVQYXJhbWV0ZXJzIiwiZm9jdXNlZE1vZGUiLCJyZWxheGVkTW9kZSIsImN1c3RvbWl6ZWRCb29sIiwiY2hhbmdlc1NldHRpbmdzIiwiY2hhbmdlc1Byb2ZpbGUiLCJGT0NVU0VEIiwiUkVMQVhFRCIsIkNVU1RPTUlaRUQiLCJwcm9maWxlIiwiYWN0aXZlX3Byb2ZpbGUiLCJoYW5kbGVCb29sQ2hhbmdlIiwiY2hhbmdlVHlwZSIsIm5vdGlmeVVzZXIiLCJzdWNjZXNzIiwiZW5xdWV1ZVNuYWNrYmFyIiwidmFyaWFudCIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImF1dG9IaWRlRHVyYXRpb24iLCJpbnB1dHNQYXJhbWV0ZXJzIiwibGFiZWwiLCJzb3VyY2UiLCJQT0xJQ1kiLCJPUFRJTUFMX05VTUJFUl9UQUJTIiwiaW5wdXRQcm9wcyIsIm1pbiIsInN0ZXAiLCJsaXN0SXRlbXNQYXJhbWV0ZXJzIiwiaW5kZXgiLCJoYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzIiwidGV4dEZpZWxkIiwiQUNUSVZFX1BPTElDWSIsImhhbmRsZVN3aXRjaCIsImludHJvZHVjdGlvbkJsb2NrIiwiYWN0aXZlQmFyIiwic2V0dGluZ3NXcmFwcGVyIiwiZmlyc3RCb29sZWFucyIsInNldHRpbmdzQmxvY2siLCJzZWNvbmRhcnlCdXR0b24iLCJ3aXRoU25hY2tiYXIiLCJzd2l0Y2hDb250YWluZXIiLCJjb2xvclByaW1hcnkiLCJTQ09SRVIiLCJNQVhJTVVNX1NDT1JFIiwiTUFYSU1VTV9ISVNUT1JZX1NJWkUiLCJTRVNTSU9OU19USU1FT1VUX01TIiwiU0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TIiwiTUlOX0FDVElWRV9ERUJPVU5DRSIsIk1BWF9BQ1RJVkVfREVCT1VOQ0UiLCJGT1JDRV9VUERBVEVfU1RBVElTVElDUyIsIklOSVRfRk9DVVNFRF9QUk9GSUxFIiwiRU5WIiwibWVtb3J5IiwiY2FjaGVfc2l6ZSIsIm1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlIiwibWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3IiLCJwb2xpY3kiLCJhY3RpdmVfcG9saWN5IiwidGFyZ2V0X3RhYnMiLCJkZWNheSIsIm1pbl90aW1lIiwiYWN0aXZlIiwicGlubmVkIiwiYXVkaWJsZSIsInNjb3JlciIsIm1pbl9hY3RpdmUiLCJwcm90ZWN0aW9uX3RpbWUiLCJjYWNoZWRfZGVjYXkiLCJPYmplY3QiLCJmcmVlemUiLCJhcmdzIiwiZGVmYXVsdF9mb3JtYXQiLCJwcmUiLCJ0b1VUQ1N0cmluZyIsIm9wdGlvbnMiLCJwdXNoIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjb3B5Iiwib2JqIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwidGltZW91dCIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZ2V0RG9tYWluIiwic3RyIiwicHNsIiwiVVJMIiwiaG9zdG5hbWUiLCJkb21haW4iLCJzdG9yYWdlU2V0IiwicmVqZWN0Iiwic2V0Iiwic3RvcmFnZUdldCIsImRhdGEiLCJ0ZXN0IiwiYnJvd3NlckFjdGlvbiIsInNldEJhZGdlVGV4dCIsInRleHQiLCJzZXRVbnJlYWRCYWRnZSIsInNldEJhZGdlQmFja2dyb3VuZENvbG9yIiwiZ2V0QmFkZ2VUZXh0IiwiYmFkZ2VUZXh0IiwiY291bnRlciIsInBhcnNlSW50IiwiZ2V0TGFzdEZvY3VzZWRXaW5kb3ciLCJ3aW5kb3dzIiwiZ2V0TGFzdEZvY3VzZWQiLCJwb3B1bGF0ZSIsIndpbmRvd1R5cGVzIiwiZCIsImlkIiwiaXNVc2VyQWN0aXZlIiwiaWRsZSIsInF1ZXJ5U3RhdGUiLCJyb3VuZCIsInN0YXR1cyIsInN0b3JhZ2VSZXNldCIsInJlbW92ZSIsImtleXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLGlFQUFjLENBQUM7QUFDM0JDLFNBQU8sRUFBRTtBQUNQQyxhQUFTLEVBQUU7QUFDVEMsVUFBSSxFQUFFO0FBREc7QUFESjtBQURrQixDQUFELENBQTVCOztBQVFBLFNBQVNDLEdBQVQsR0FBZTtBQUNiLHNCQUNFLDJEQUFDLDZEQUFEO0FBQWtCLFNBQUssRUFBRUw7QUFBekIsa0JBQ0UsMkRBQUMsK0RBQUQsT0FERixFQUNxQixHQURyQixDQURGO0FBS0Q7O0FBRURNLHVEQUFBLGVBQWdCLDJEQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1DLElBQUksR0FBRyxNQUFiO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxFQUFyQjtBQUNBLE1BQU1DLHVCQUF1QixHQUFHLFVBQVVELFlBQTFDLEMsQ0FB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TUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsMkM7Ozs7VUM1RkE7VUFDQSIsImZpbGUiOiJwb3B1cC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2pxdWVyeS9kaXN0L2pxdWVyeS5taW4nO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluJztcbmltcG9ydCAnLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWVEaXNwYXRjaGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXInO1xuaW1wb3J0IHsgTXVpVGhlbWVQcm92aWRlciwgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyMxYjllNzQnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8SG9tZURpc3BhdGNoZXIgLz57JyAnfVxuICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhcic7XG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5cbmltcG9ydCB7IHNldEFsbFJlYWRCYWRnZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzJztcblxuY29uc3QgUkVTVE9SRSA9ICdSRVNUT1JFJztcbmNvbnN0IE5FWFQgPSAnTkVYVCc7XG5jb25zdCBSRU1PVkVEID0gJ1JFTU9WRUQnO1xuY29uc3QgQ0xPU0VEX0hJU1RPUlkgPSAnY2xvc2VkX2hpc3RvcnknO1xuY29uc3QgTlVNQkVSX0hPVVJTID0gMjQ7XG5jb25zdCBUSU1FX1BFUklPRF9UT19DT05TSURFUiA9IDM2MDAwMDAgKiBOVU1CRVJfSE9VUlM7IC8vIGluIG1pY3Jvc2Vjb25kXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgc2V0QWxsUmVhZEJhZGdlKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlIH07XG4gICAgdGhpcy5vbkNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBjaGFuZ2VzQ2xvc2VkSGlzdG9yeSA9IGNoYW5nZXNbQ0xPU0VEX0hJU1RPUlldO1xuICAgICAgaWYgKGNoYW5nZXNDbG9zZWRIaXN0b3J5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNsb3NlZF9oaXN0b3J5OiBjaGFuZ2VzQ2xvc2VkSGlzdG9yeVsnbmV3VmFsdWUnXSxcbiAgICAgICAgICByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtDTE9TRURfSElTVE9SWV0sIChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IGNsb3NlZF9oaXN0b3J5ID0gcmVzdWx0LmNsb3NlZF9oaXN0b3J5IHx8IFtdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlZF9oaXN0b3J5IH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuZXh0TGlzdDogW10gfSk7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgc2V0QWxsUmVhZEJhZGdlKCk7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVuZGVyU2F2ZUJvb2xlYW4pIHtcbiAgICAgIHRoaXMuZm9yY2VSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVJdGVtKGtleSkge1xuICAgIGxldCBpdGVtcyA9IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkucmV2ZXJzZSgpO1xuICAgIHRoaXMucmVzdG9yZVRhYihpdGVtcywga2V5LCBSRVNUT1JFKTtcbiAgfVxuXG4gIHJlbW92ZU5leHRJdGVtKGtleSkge1xuICAgIGxldCBpdGVtcyA9IHRoaXMuc3RhdGUubmV4dExpc3Q7XG4gICAgdGhpcy5yZXN0b3JlVGFiKGl0ZW1zLCBrZXksIFJFU1RPUkUpO1xuICB9XG5cbiAgcmVzdG9yZVRhYihpdGVtcywga2V5LCBtZXNzYWdlVHlwZSkge1xuICAgIGNvbnN0IHJlc3RvcmVkVGFiID0gaXRlbXNba2V5XTtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBtZXNzYWdlVHlwZTogbWVzc2FnZVR5cGUsXG4gICAgICB0YWJJZDogcmVzdG9yZWRUYWIudGFiSWQsXG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVJlbmRlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlIH0pO1xuICB9XG5cbiAgZmlsdGVyTGlzdChzZWxlY3RlZExpc3QpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZWxlY3RlZExpc3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBub3cgLSBNYXRoLm1heChpdGVtLnN0YXRpc3RpY3MudXBkYXRlZF9hdCwgaXRlbS5zdGF0aXN0aWNzLmxhc3RfYWN0aXZlX3RpbWVzdGFtcCkgPCBUSU1FX1BFUklPRF9UT19DT05TSURFUlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckxpc3QobGlzdFRvQmVSZW5kZXJlZCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBzZWxlY3RlZExpc3Q7XG4gICAgY29uc3QgTUFYX0xFTkdUSF9USVRMRSA9IDUwO1xuICAgIGNvbnN0IE1BWF9MRU5HVEhfVVJMID0gNDA7XG5cbiAgICBzd2l0Y2ggKGxpc3RUb0JlUmVuZGVyZWQpIHtcbiAgICAgIGNhc2UgTkVYVDpcbiAgICAgICAgc2VsZWN0ZWRMaXN0ID0gdGhpcy5zdGF0ZS5uZXh0TGlzdCA/IHRoaXMuc3RhdGUubmV4dExpc3QgOiBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzZWxlY3RlZExpc3QgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5ID8gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSA6IFtdO1xuICAgICAgICBzZWxlY3RlZExpc3QgPSBzZWxlY3RlZExpc3QubWFwKCh3ZWJzaXRlLCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVsZXRpb25UaW1lID0gbmV3IERhdGUod2Vic2l0ZS5kZWxldGlvbl90aW1lKTtcbiAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRfZGVsZXRpb25fdGltZSA9IGRlbGV0aW9uVGltZS50b1RpbWVTdHJpbmcoKS5zcGxpdCgnICcpWzBdO1xuICAgICAgICAgIHdlYnNpdGUuaG91cnNfZGVsZXRpb24gPSBmb3JtYXR0ZWRfZGVsZXRpb25fdGltZS5zcGxpdCgnOicpWzBdO1xuICAgICAgICAgIHdlYnNpdGUubWludXRlc19kZWxldGlvbiA9IGZvcm1hdHRlZF9kZWxldGlvbl90aW1lLnNwbGl0KCc6JylbMV07XG4gICAgICAgICAgaWYgKHdlYnNpdGUudGl0bGUgJiYgd2Vic2l0ZS50aXRsZS5sZW5ndGggPiBNQVhfTEVOR1RIX1RJVExFKSB7XG4gICAgICAgICAgICB3ZWJzaXRlLnRpdGxlID0gd2Vic2l0ZS50aXRsZS5zdWJzdHJpbmcoMCwgTUFYX0xFTkdUSF9USVRMRSkuY29uY2F0KCcuLi4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHdlYnNpdGUudGl0bGUgJiYgd2Vic2l0ZS50aXRsZS5sZW5ndGggPiBNQVhfTEVOR1RIX1RJVExFKSB7XG4gICAgICAgICAgICB3ZWJzaXRlLnRydW5jYXRlZF91cmwgPSB3ZWJzaXRlLnVybC5zdWJzdHJpbmcoMCwgTUFYX0xFTkdUSF9VUkwpLmNvbmNhdCgnLi4uJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdlYnNpdGUudHJ1bmNhdGVkX3VybCA9IHdlYnNpdGUudXJsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gd2Vic2l0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGlzTmV4dCA9IGxpc3RUb0JlUmVuZGVyZWQgPT09IE5FWFQ7XG4gICAgY29uc3QgZmlsdGVyZWRMaXN0ID0gdGhpcy5maWx0ZXJMaXN0KHNlbGVjdGVkTGlzdCkucmV2ZXJzZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0V2Vic2l0ZXN9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JlZW5UaXRsZX0+XG4gICAgICAgICAge2lzTmV4dCA/ICdOZXh0IHRhYnMgdG8gYmUgY2xvc2VkJyA6IGBMYXN0IGNsb3NlZCB0YWJzYH1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbXN9PlxuICAgICAgICAgIDxMaXN0IGRlbnNlPXt0cnVlfT5cbiAgICAgICAgICAgIHtmaWx0ZXJlZExpc3QubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICA8cD57YE5vIHRhYnMgY2xvc2VkIGluIHRoZSBsYXN0ICR7TlVNQkVSX0hPVVJTfSBob3Vycy5gfTwvcD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5tYXAoKHdlYnNpdGUsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRBdmF0YXJXaXRoVGltZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aW1lRGlzcGxheX0+XG4gICAgICAgICAgICAgICAgICAgICAge2Ake3dlYnNpdGUuaG91cnNfZGVsZXRpb259OiR7d2Vic2l0ZS5taW51dGVzX2RlbGV0aW9ufWB9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXt3ZWJzaXRlLnRpdGxlfSBzcmM9e3dlYnNpdGUuZmF2SWNvblVybH0gY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhckNvbnRhaW5lcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXt3ZWJzaXRlLnRydW5jYXRlZF91cmx9XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17d2Vic2l0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aXNOZXh0ID8gdGhpcy5yZW1vdmVOZXh0SXRlbS5iaW5kKHRoaXMsIGkpIDogdGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcywgaSl9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpc05leHQgPyAnU2tpcCcgOiAnUmVzdG9yZSd9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSA/IHRoaXMuZmlsdGVyTGlzdCh0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5KS5sZW5ndGggOiAwO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2xkVGV4dH0+XG4gICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID8gbnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIDogJ05vJ30gdGFiXG4gICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID09PSAxID8gJycgOiAncyd9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5taWRkbGVUZXh0fT5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID09PSAxID8gJ3dhcycgOiAnd2VyZSd9IGNsb3NlZCBpbiB0aGUgbGFzdHsnICd9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2xkVGV4dH0+IHtgJHtOVU1CRVJfSE9VUlN9IGhvdXJzIWB9IDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICB7dGhpcy5yZW5kZXJMaXN0LmJpbmQodGhpcykoUkVNT1ZFRCl9XG4gICAgICAgIHsvKnt0aGlzLnJlbmRlckxpc3QuYmluZCh0aGlzKShORVhUKX0qL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlua1RvRm9ybX0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNkVUVKSGQwYkw2cnlGdlprMjIwQ29acDdjd3ZGeEVTb3JwczdjbmdrMHdRZnl1LVEvdmlld2Zvcm1cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZXBvcnQgYSBidWcgb3Igc2VuZCB1cyBhIGZlZWRiYWNrP1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIH0sXG4gIGdyZWVuVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGNvbG9yOiAnIzFiOWU3NCcsXG4gICAgYm9yZGVyQm90dG9tOiBgMnB4IHNvbGlkICMxYjllNzRgLFxuICAgIG1heFdpZHRoOiAyMjUsXG4gIH0sXG4gIGJvbGRUZXh0OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB9LFxuICBtaWRkbGVUZXh0OiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygwLjUpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGNvbG9yOiAnIzFiOWU3NCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjMWI5ZTc0JyxcbiAgICBmb250U2l6ZTogMTIsXG4gIH0sXG4gIGl0ZW1UZXh0OiB7XG4gICAgbWF4V2lkdGg6IDE4NSxcbiAgICB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgbWF4SGVpZ2h0OiA4MCxcbiAgfSxcbiAgdGltZURpc3BsYXk6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE0LFxuICB9LFxuICBncmlkQXZhdGFyV2l0aFRpbWU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIH0sXG4gIGxpc3RXZWJzaXRlczoge1xuICAgIG1hcmdpblRvcDogMjAsXG4gIH0sXG4gIGxpc3RJdGVtczoge1xuICAgIG1heEhlaWdodDogMzAwLFxuICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gIH0sXG4gIGxpbmtUb0Zvcm06IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBsZWZ0OiAnNTUlJyxcbiAgICBmb250U2l6ZTogMTAsXG4gICAgbWFyZ2luVG9wOiAxNSxcbiAgICBtYXhXaWR0aDogJzc1JScsXG4gIH0sXG4gIGF2YXRhckNvbnRhaW5lcjoge1xuICAgIG1heFdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxuICAgIG1heEhlaWdodDogdGhlbWUuc3BhY2luZyg3KSxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhvbWUpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vU2V0dGluZ3MnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vSG9tZSc7XG5pbXBvcnQgeyBTbmFja2JhclByb3ZpZGVyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyL0F2YXRhcic7XG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXIvTGlzdEl0ZW1BdmF0YXInO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMuanMnO1xuXG5jbGFzcyBIb21lRGlzcGF0Y2hlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBhcHBCYXJWYWx1ZTogJ0hPTUUnIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXBwQmFyVmFsdWU6ICdIT01FJyB9KTtcbiAgICBsb2dnZXIodGhpcywgJ1BvcHVwIG9wZW5lZCcpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50LCBuZXdWYWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBCYXJWYWx1ZTogbmV3VmFsdWUgfSk7XG4gICAgbG9nZ2VyKHRoaXMsICdTd2l0Y2ggdG8gJyArIG5ld1ZhbHVlKTtcbiAgfVxuXG4gIGRpc3BhdGNoUGFnZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUpIHtcbiAgICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgICByZXR1cm4gPEhvbWUgLz47XG4gICAgICBjYXNlICdTRVRUSU5HUyc6XG4gICAgICAgIHJldHVybiA8U2V0dGluZ3MgLz47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPGRpdj5UaGlzIGlzIGFuIGVycm9yIHBhZ2U8L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFNuYWNrYmFyUHJvdmlkZXJcbiAgICAgICAgbWF4U25hY2s9ezJ9XG4gICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICByb290OiBjbGFzc2VzLm5vdGlmaWNhdGlvbixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZUNvbnRhaW5lcn0+XG4gICAgICAgICAgPFBhcGVyIHNxdWFyZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRMb2dvVGFic30+XG4gICAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwibG9nb1RhYmJ5XCIgc3JjPXsnLi4vLi4vYXNzZXRzL3N0YXRpYy9pY29ucy90YWJieS5wbmcnfSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0F2YXRhcn0gLz5cbiAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hcHBCYXJWYWx1ZSA/IHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUgOiAnSE9NRSd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2KSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCB2KX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYWxsVGFic31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJIb21lXCIgdmFsdWU9eydIT01FJ30gY2xhc3NOYW1lPXtjbGFzc2VzLnRhYn0gLz5cbiAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiU2V0dGluZ3NcIiB2YWx1ZT17J1NFVFRJTkdTJ30gY2xhc3NOYW1lPXtjbGFzc2VzLnRhYn0gLz5cbiAgICAgICAgICAgICAgICB7Lyo8VGFiIGxhYmVsPVwiRGVidWdcIiB2YWx1ZT17XCJERUJVR1wifSBkaXNhYmxlZCBjbGFzc05hbWU9e2NsYXNzZXMudGFifS8+Ki99XG4gICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj57dGhpcy5kaXNwYXRjaFBhZ2UoKX08L2Rpdj5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU25hY2tiYXJQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVEaXNwYXRjaGVyO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lRGlzcGF0Y2hlciBmcm9tICcuL0hvbWVEaXNwYXRjaGVyJztcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiL1RhYic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGhvbWVDb250YWluZXI6IHtcbiAgICBtaW5XaWR0aDogNDAwLFxuICB9LFxuICB0YWI6IHtcbiAgICBjb2xvcjogJyMxYjllNzQnLFxuICB9LFxuICBub3RpZmljYXRpb246IHtcbiAgICBsZWZ0OiAxNTAsXG4gIH0sXG4gIGdyaWRMb2dvVGFiczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2xlZnQnLFxuICB9LFxuICBhbGxUYWJzOiB7XG4gICAgbWF4V2lkdGg6ICc3NSUnLFxuICB9LFxuICBsb2dvQXZhdGFyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNy41KSxcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNy41KSxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhvbWVEaXNwYXRjaGVyKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5L1R5cG9ncmFwaHknO1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IFR1bmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UdW5lJztcbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQge1xuICBSRUxBWEVELFxuICBGT0NVU0VELFxuICBDVVNUT01JWkVELFxuICBJTklUX0ZPQ1VTRURfUFJPRklMRSxcbiAgSU5JVF9SRUxBWEVEX1BST0ZJTEUsXG59IGZyb20gJy4uLy4uL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzJztcbmltcG9ydCB7IGNoZWNrU2V0dGluZ3MsIE9QVElNQUxfTlVNQkVSX1RBQlMsIFBPTElDWSwgQUNUSVZFX1BPTElDWSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGlzSW50ZWdlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzJztcblxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvY3VzZWRNb2RlOiBmYWxzZSxcbiAgICAgIHJlbGF4ZWRNb2RlOiBmYWxzZSxcbiAgICAgIGN1c3RvbWl6ZWRCb29sOiBmYWxzZSxcbiAgICAgIHNldHRpbmdzOiBJTklUX1JFTEFYRURfUFJPRklMRSxcbiAgICAgIHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMub25DaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgY29uc3QgY2hhbmdlc1NldHRpbmdzID0gY2hhbmdlc1snc2V0dGluZ3MnXTtcbiAgICAgIGNvbnN0IGNoYW5nZXNQcm9maWxlID0gY2hhbmdlc1snYWN0aXZlX3Byb2ZpbGUnXTtcbiAgICAgIGlmIChjaGFuZ2VzU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2V0dGluZ3M6IGNoYW5nZXNTZXR0aW5nc1snbmV3VmFsdWUnXSxcbiAgICAgICAgICByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlc1Byb2ZpbGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZm9jdXNlZE1vZGU6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBGT0NVU0VELFxuICAgICAgICAgIHJlbGF4ZWRNb2RlOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gUkVMQVhFRCxcbiAgICAgICAgICBjdXN0b21pemVkQm9vbDogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IENVU1RPTUlaRUQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2FjdGl2ZV9wcm9maWxlJywgJ3NldHRpbmdzJ10sIChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHByb2ZpbGUgPSByZXN1bHQuYWN0aXZlX3Byb2ZpbGUgfHwgUkVMQVhFRDtcbiAgICAgIGNvbnN0IGZvY3VzZWRNb2RlID0gcHJvZmlsZSA9PT0gRk9DVVNFRDtcbiAgICAgIGNvbnN0IHJlbGF4ZWRNb2RlID0gcHJvZmlsZSA9PT0gUkVMQVhFRDtcbiAgICAgIGNvbnN0IGN1c3RvbWl6ZWRCb29sID0gcHJvZmlsZSA9PT0gQ1VTVE9NSVpFRDtcbiAgICAgIGNvbnN0IHNldHRpbmdzID0gcmVzdWx0LnNldHRpbmdzIHx8IElOSVRfUkVMQVhFRF9QUk9GSUxFO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRNb2RlLFxuICAgICAgICByZWxheGVkTW9kZSxcbiAgICAgICAgY3VzdG9taXplZEJvb2wsXG4gICAgICAgIHNldHRpbmdzLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVuZGVyU2F2ZUJvb2xlYW4pIHtcbiAgICAgIHRoaXMuZm9yY2VSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCb29sQ2hhbmdlKGNoYW5nZVR5cGUpIHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBtZXNzYWdlVHlwZTogJ1NFVFRJTkdTX1BST0ZJTEUnLFxuICAgICAgcHJvZmlsZTogY2hhbmdlVHlwZSxcbiAgICB9KTtcbiAgICBpZiAoY2hhbmdlVHlwZSA9PT0gUkVMQVhFRCB8fCBjaGFuZ2VUeXBlID09PSBGT0NVU0VEKSB7XG4gICAgICB0aGlzLm5vdGlmeVVzZXIodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2VSZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVNhdmVQYXJhbWV0ZXJzKCkge1xuICAgIC8vIFRPRE8gQWRkIGZ1bmN0aW9uIHRvIGNoZWNrIGZvciBhbGwgcG90ZW50aWFsIHZhbHVlc1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG4gICAgaWYgKGNoZWNrU2V0dGluZ3ModGhpcy5zdGF0ZS5zZXR0aW5ncykpIHtcbiAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QQVJBTUVURVJTJyxcbiAgICAgICAgc2V0dGluZ3M6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgICB9KTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLm5vdGlmeVVzZXIoc3VjY2Vzcyk7XG4gIH1cblxuICBub3RpZnlVc2VyKHN1Y2Nlc3MpIHtcbiAgICB0aGlzLnByb3BzLmVucXVldWVTbmFja2JhcihzdWNjZXNzID8gJ05ldyBTZXR0aW5ncyBhcmUgc2F2ZWQuJyA6ICdTZXR0aW5ncyBjYW5ub3QgYmUgc2F2ZWQuJywge1xuICAgICAgdmFyaWFudDogc3VjY2VzcyA/ICdzdWNjZXNzJyA6ICdlcnJvcicsXG4gICAgICBhbmNob3JPcmlnaW46IHtcbiAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogNzUwLFxuICAgICAgYXV0b0hpZGVEdXJhdGlvbjogMTUwMCxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZVBhcmFtZXRlcnMgPSAocGF0aCwgcGFyYW1ldGVyKSA9PiAoZXZlbnQpID0+IHtcbiAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLnN0YXRlLnNldHRpbmdzO1xuICAgIGNvbnN0IG5leHRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBpZiAoaXNJbnRlZ2VyKG5leHRWYWx1ZSkgfHwgbmV4dFZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0dGluZ3NbcGF0aF1bcGFyYW1ldGVyXSA9IG5leHRWYWx1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXR0aW5nczogc2V0dGluZ3MsIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcbiAgaGFuZGxlU3dpdGNoID0gKHBhdGgsIHBhcmFtZXRlcikgPT4gKCkgPT4ge1xuICAgIGxldCBzZXR0aW5ncyA9IHRoaXMuc3RhdGUuc2V0dGluZ3M7XG4gICAgaWYgKCFjaGVja1NldHRpbmdzKHRoaXMuc3RhdGUuc2V0dGluZ3MpKSB7XG4gICAgICBzZXR0aW5ncyA9IElOSVRfUkVMQVhFRF9QUk9GSUxFO1xuICAgIH1cbiAgICBzZXR0aW5nc1twYXRoXVtwYXJhbWV0ZXJdID0gIXRoaXMuc3RhdGUuc2V0dGluZ3NbcGF0aF1bcGFyYW1ldGVyXTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2V0dGluZ3M6IHNldHRpbmdzLCByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVNhdmVQYXJhbWV0ZXJzKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dHNQYXJhbWV0ZXJzID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ09wdGltYWwgbnVtYmVyIG9mIHRhYnMgJyxcbiAgICAgICAgc291cmNlOiB0aGlzLnN0YXRlLnNldHRpbmdzLFxuICAgICAgICBwYXRoOiBQT0xJQ1ksXG4gICAgICAgIHBhcmFtZXRlcjogT1BUSU1BTF9OVU1CRVJfVEFCUyxcbiAgICAgICAgaW5wdXRQcm9wczogeyBtaW46ICcxJywgbWF4OiAnMTAwJywgc3RlcDogJzEnIH0sXG4gICAgICB9LFxuICAgIF07XG4gICAgY29uc3QgbGlzdEl0ZW1zUGFyYW1ldGVycyA9IGlucHV0c1BhcmFtZXRlcnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzKGl0ZW0ucGF0aCwgaXRlbS5wYXJhbWV0ZXIpfVxuICAgICAgICB2YWx1ZT17aXRlbS5zb3VyY2VbaXRlbS5wYXRoXVtpdGVtLnBhcmFtZXRlcl19XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICBvbktleVVwPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpIHRoaXMuaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKTtcbiAgICAgICAgfX1cbiAgICAgICAgaW5wdXRQcm9wcz17aXRlbS5pbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICApKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5zZXR0aW5nc1tQT0xJQ1ldW0FDVElWRV9QT0xJQ1ldfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTd2l0Y2goUE9MSUNZLCBBQ1RJVkVfUE9MSUNZKX1cbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgICAgbGFiZWw9XCJFbmFibGUgVGFiYnlcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnRyb2R1Y3Rpb25CbG9ja30+XG4gICAgICAgICAgPFR1bmVJY29uIC8+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICAgIFNlbGVjdCB0aGUgc3VpdGluZyBtb2RlIG9yIGN1c3RvbWl6ZSBpdC5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGl2ZUJhcn0+PC9kaXY+XG4gICAgICAgICAgey8qPGgxIGNsYXNzTmFtZT17XCJib2xkLXRpdGxlXCJ9PlNlbGVjdCBUYWJieSdzIG9wZXJhdGluZyBtb2RlOjwvaDE+Ki99XG4gICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnNldHRpbmdzV3JhcHBlcn0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZm9jdXNlZE1vZGV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVCb29sQ2hhbmdlKEZPQ1VTRUQpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGFiZWw9XCJGb2N1c2VkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0Qm9vbGVhbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnJlbGF4ZWRNb2RlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlQm9vbENoYW5nZShSRUxBWEVEKX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxhYmVsPVwiUmVsYXhlZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoQ1VTVE9NSVpFRCl9XG4gICAgICAgICAgICAgIGNvbnRyb2w9ezxDaGVja2JveCBjaGVja2VkPXt0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sfSB2YWx1ZT1cIlwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz59XG4gICAgICAgICAgICAgIGxhYmVsPVwiQ3VzdG9taXplIHlvdXIgc2V0dGluZ3MnIHBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNldHRpbmdzQmxvY2t9PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgICAvL2NsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGlzdEl0ZW1zUGFyYW1ldGVyc31cbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaWRkZW4ga2V5PVwiaGlkZGVuLXRleHRmaWVsZFwiIGRpc2FibGVkIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZGFyeUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e3RoaXMuc3RhdGUuY3VzdG9taXplZEJvb2wgPyAnb3V0bGluZS1wcmltYXJ5JyA6ICdzZWNvbmRhcnknfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTYXZlUGFyYW1ldGVycygpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU25hY2tiYXIoU2V0dGluZ3MpO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL1NldHRpbmdzJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICB0ZXh0RmllbGQ6IHtcbiAgICBtYXJnaW5Ub3A6IDAsXG4gICAgbWFyZ2luTGVmdDogMjAsXG4gICAgbWFyZ2luUmlnaHQ6IDIwLFxuICB9LFxuICBhY3RpdmVCYXI6IHtcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICB9LFxuXG4gIHNldHRpbmdzV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3N0YXJ0JyxcbiAgICBtYXhIZWlnaHQ6ICc1MCUnLFxuICAgIC8vd2lkdGg6ICcxMDAlJyxcbiAgICAvL2hlaWdodDogJzEwMHZoJyxcbiAgfSxcbiAgc2Vjb25kYXJ5QnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgICAvL21hcmdpbkRvd246IDUsXG4gICAgY29sb3I6ICcjMWI5ZTc0JyxcbiAgICBib3JkZXJDb2xvcjogJyMxYjllNzQnLFxuICB9LFxuICBub3RpZmljYXRpb246IHtcbiAgICBtYXhXaWR0aDogMTUwLFxuICB9LFxuICBpbnRyb2R1Y3Rpb25CbG9jazoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3N0YXJ0JyxcbiAgICAvL21hcmdpblRvcDogMjAsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNyxcbiAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgfSxcbiAgc2V0dGluZ3NCbG9jazoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICB9LFxuICBmaXJzdEJvb2xlYW5zOiB7XG4gICAgbWF4V2lkdGg6ICc0MCUnLFxuICB9LFxuICBzd2l0Y2hDb250YWluZXI6IHtcbiAgICBjb2xvclByaW1hcnk6ICdyZWQnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoU2V0dGluZ3MpO1xuIiwiZXhwb3J0IGNvbnN0IE9QVElNQUxfTlVNQkVSX1RBQlMgPSAndGFyZ2V0X3RhYnMnO1xuZXhwb3J0IGNvbnN0IFBPTElDWSA9ICdwb2xpY3knO1xuZXhwb3J0IGNvbnN0IEFDVElWRV9QT0xJQ1kgPSAnYWN0aXZlX3BvbGljeSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1NldHRpbmdzKHNldHRpbmdzKSB7XG4gIGlmIChzZXR0aW5nc1tQT0xJQ1ldW09QVElNQUxfTlVNQkVSX1RBQlNdICYmIHNldHRpbmdzW1BPTElDWV1bT1BUSU1BTF9OVU1CRVJfVEFCU10gPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJjb25zdCBTQ09SRVIgPSAnZGVmYXVsdCc7IC8vIG9ubHkgZGVmYXVsdCBpbXBsZW1lbnRlZFxuY29uc3QgTUFYSU1VTV9TQ09SRSA9IDEwMDAwMDAwMDAwMDAwMDA7IC8vIG1heCBzY29yZSBmb3Igc2NvcmVyXG5jb25zdCBNQVhJTVVNX0hJU1RPUllfU0laRSA9IDEwMDA7IC8vIG1heCBraWxsZWQgdGFiIGhpc3RvcnkgaW4gbWVtb3J5XG5jb25zdCBTRVNTSU9OU19USU1FT1VUX01TID0gODAwOyAvLyB3aGVuIGEgdGFiIGlzIGtpbGxlZCB3ZSBuZWVkIGEgdGltZW91dCB0byByZXRyaWV2ZSB0aGUgc2Vzc2lvbklkXG5jb25zdCBTRVNTSU9OU19NQVhfRlVaWllfREVMVEFfTVMgPSAxMDAwICogNTsgLy8gdGltZSBpcyBmdXp6eSBtYXRjaGVkIHRvIHJldGlyZXZlIHRoZSBjb3JyZWN0IHNlc3Npb25JRCwgc2hvdWxkIGJlIGhpZ2hlciB0aGFuIFNFU1NJT05TX1RJTUVPVVRfTVNcbmNvbnN0IE1JTl9BQ1RJVkVfREVCT1VOQ0UgPSAxMDAwICogMjsgLy8gbWluaW11bSBhY3RpdmUgcmVhZGluZyBvbiBhIHRhYiB0byBiZSBjb3VudGVkIGFzIHZhbGlkICd1c2VmdWwnIHRpbWVcbmNvbnN0IE1BWF9BQ1RJVkVfREVCT1VOQ0UgPSAxMDAwICogNjAgKiA1OyAvLyBtYXhpbXVtIHRpbWUgd2l0aG91dCBhbnkgdXNlciBpbnB1dCBiZWZvcmUgaXQgaXMgY29uc2lkZXJlZCBpZGxlZCwgbXVzdCBiZSBoaWdoZXIgdGhhbiAxNXNlY1xuY29uc3QgRk9SQ0VfVVBEQVRFX1NUQVRJU1RJQ1MgPSAxMDAwICogNjA7IC8vIG11c3QgYmUgaGlnaGVyIHRoYW4gMSBtaW51dGVcblxuZXhwb3J0IHtcblx0U0NPUkVSLFxuXHRNQVhJTVVNX1NDT1JFLFxuXHRNQVhJTVVNX0hJU1RPUllfU0laRSxcblx0U0VTU0lPTlNfVElNRU9VVF9NUyxcblx0U0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TLFxuXHRNSU5fQUNUSVZFX0RFQk9VTkNFLFxuXHRNQVhfQUNUSVZFX0RFQk9VTkNFLFxufTtcbiIsImNvbnN0IFJFTEFYRUQgPSAncmVsYXhlZCc7XG5jb25zdCBGT0NVU0VEID0gJ2ZvY3VzZWQnO1xuY29uc3QgQ1VTVE9NSVpFRCA9ICdjdXN0b21pemVkJztcbnZhciBJTklUX1JFTEFYRURfUFJPRklMRSA9IHt9O1xudmFyIElOSVRfRk9DVVNFRF9QUk9GSUxFID0ge307XG5cbmlmIChFTlYgPT09ICdkZWJ1ZycpIHtcbiAgSU5JVF9SRUxBWEVEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEgKiAxMDAwLFxuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDUgKiAxMDAwLFxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICBhY3RpdmVfcG9saWN5OiB0cnVlLFxuICAgICAgdGFyZ2V0X3RhYnM6IDEyLFxuICAgICAgZGVjYXk6IDAuOCxcbiAgICAgIG1pbl90aW1lOiAzICogMTAwMCxcblxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIHBpbm5lZDogZmFsc2UsXG4gICAgICBhdWRpYmxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHNjb3Jlcjoge1xuICAgICAgbWluX2FjdGl2ZTogNSAqIDEwMDAsXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogMTAwMCxcbiAgICAgIGNhY2hlZF9kZWNheTogMC43LFxuICAgIH0sXG4gIH07XG5cbiAgSU5JVF9GT0NVU0VEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEgKiAxMDAwLFxuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDUgKiAxMDAwLFxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICBhY3RpdmVfcG9saWN5OiB0cnVlLFxuICAgICAgdGFyZ2V0X3RhYnM6IDUsXG4gICAgICBkZWNheTogMC44LFxuICAgICAgbWluX3RpbWU6IDMgKiAxMDAwLFxuXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgcGlubmVkOiBmYWxzZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICBtaW5fYWN0aXZlOiA1ICogMTAwMCxcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjcsXG4gICAgfSxcbiAgfTtcbn0gZWxzZSB7XG4gIElOSVRfUkVMQVhFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxMCAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogMTAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIGFjdGl2ZV9wb2xpY3k6IHRydWUsXG4gICAgICB0YXJnZXRfdGFiczogMTIsXG4gICAgICBkZWNheTogMC44LFxuICAgICAgbWluX3RpbWU6IDMgKiAxMDAwLFxuXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgcGlubmVkOiBmYWxzZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICBtaW5fYWN0aXZlOiA1ICogNjAgKiAxMDAwLFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDYwICogMTAwMCxcbiAgICAgIGNhY2hlZF9kZWNheTogMC43LFxuICAgIH0sXG4gIH07XG5cbiAgSU5JVF9GT0NVU0VEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEwICogMTAwMCxcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiAxMCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgYWN0aXZlX3BvbGljeTogdHJ1ZSxcbiAgICAgIHRhcmdldF90YWJzOiA1LFxuICAgICAgZGVjYXk6IDAuOCxcbiAgICAgIG1pbl90aW1lOiAzICogMTAwMCxcblxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIHBpbm5lZDogZmFsc2UsXG4gICAgICBhdWRpYmxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHNjb3Jlcjoge1xuICAgICAgbWluX2FjdGl2ZTogNSAqIDYwICogMTAwMCxcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiA2MCAqIDEwMDAsXG4gICAgICBjYWNoZWRfZGVjYXk6IDAuNyxcbiAgICB9LFxuICB9O1xufVxuXG5PYmplY3QuZnJlZXplKElOSVRfRk9DVVNFRF9QUk9GSUxFKTtcbk9iamVjdC5mcmVlemUoSU5JVF9SRUxBWEVEX1BST0ZJTEUpO1xuXG5leHBvcnQgeyBSRUxBWEVELCBGT0NVU0VELCBDVVNUT01JWkVELCBJTklUX0ZPQ1VTRURfUFJPRklMRSwgSU5JVF9SRUxBWEVEX1BST0ZJTEUgfTtcbiIsImltcG9ydCAqIGFzIHBzbCBmcm9tICdwc2wnO1xuaW1wb3J0IHsgTUFYX0FDVElWRV9ERUJPVU5DRSB9IGZyb20gJy4uL2NvbmZpZy9lbnYuanMnO1xuXG5jb25zdCBsb2dnZXIgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICBpZiAoRU5WID09PSAnZGVidWcnIHx8IEVOViA9PT0gJ2RldicpIHtcbiAgICBsZXQgZGVmYXVsdF9mb3JtYXQgPSBbJ2ZvbnQtd2VpZ2h0OmluaXRpYWw7IGNvbG9yOmJsYWNrOyddO1xuICAgIGxldCBwcmUgPSAnJWMnICsgbmV3IERhdGUoKS50b1VUQ1N0cmluZygpICsgJyVjJztcbiAgICBsZXQgb3B0aW9ucyA9IFsnZm9udC13ZWlnaHQ6bGlnaHRlcjsgY29sb3I6TGlnaHRTbGF0ZUdyZXk7J107XG4gICAgb3B0aW9ucy5wdXNoKGRlZmF1bHRfZm9ybWF0KTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICBwcmUgKz0gJyB8ICVjJyArIGFyZ3NbMF0uY29uc3RydWN0b3IubmFtZSArICclYyB8ICc7XG4gICAgICBwcmUgKz0gYXJnc1sxXTtcbiAgICAgIG9wdGlvbnMucHVzaCgnY29sb3I6IzFkYTg3YzsgZm9udC13ZWlnaHQ6Ym9sZGVyJyk7XG4gICAgICBvcHRpb25zLnB1c2goZGVmYXVsdF9mb3JtYXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmUgKz0gJyB8ICcgKyBhcmdzWzBdO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcmUsIC4uLm9wdGlvbnMpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjb3B5KG9iaikge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuZnVuY3Rpb24gdGltZW91dChtcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RG9tYWluKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBwc2wucGFyc2UobmV3IFVSTChzdHIpLmhvc3RuYW1lKS5kb21haW47XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcmFnZVNldChhcmdzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KGFyZ3MsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0b3JhZ2VHZXQoYXJncykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChhcmdzLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuICByZXR1cm4gL15cXGQrJC8udGVzdCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHNldEFsbFJlYWRCYWRnZSgpIHtcbiAgY2hyb21lLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogJycgfSk7IC8vIDwtLSBzZXQgdGV4dCB0byAnJyB0byByZW1vdmUgdGhlIGJhZGdlXG59XG5cbmZ1bmN0aW9uIHNldFVucmVhZEJhZGdlKCkge1xuICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7IGNvbG9yOiBbMjI5LCA5MiwgMCwgMTI4XSB9KTtcbiAgY2hyb21lLmJyb3dzZXJBY3Rpb24uZ2V0QmFkZ2VUZXh0KHt9LCBmdW5jdGlvbiAoYmFkZ2VUZXh0KSB7XG4gICAgbGV0IGNvdW50ZXIgPSAxO1xuICAgIGlmIChpc0ludGVnZXIoYmFkZ2VUZXh0KSkge1xuICAgICAgY291bnRlciA9IHBhcnNlSW50KGJhZGdlVGV4dCkgKyAxO1xuICAgIH1cbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiBgJHtjb3VudGVyfWAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0Rm9jdXNlZFdpbmRvdygpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUud2luZG93cy5nZXRMYXN0Rm9jdXNlZCh7IHBvcHVsYXRlOiBmYWxzZSwgd2luZG93VHlwZXM6IFsnbm9ybWFsJ10gfSwgKGQpID0+IHJlc29sdmUoZC5pZCkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNVc2VyQWN0aXZlKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5pZGxlLnF1ZXJ5U3RhdGUoTWF0aC5yb3VuZChNQVhfQUNUSVZFX0RFQk9VTkNFIC8gMTAwMCksIChzdGF0dXMpID0+IHtcbiAgICAgIGlmIChzdGF0dXMgPT09ICdhY3RpdmUnKSB7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cykge1xuICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ2dlcihcIkNvdWxkbid0IGNoZWNrIHVzZXIgYWN0aXZpdHkuXCIpO1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZVJlc2V0KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCAoZCkgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKE9iamVjdC5rZXlzKGQpLCAoKSA9PiB7XG4gICAgICAgIGxvZ2dlcignTWVtb3J5IGZsdXNoZWQuJylcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfSk7XG59XG5cbmxvZ2dlcignU3RhcnRpbmcgaW4gJyArIEVOViArICcgZW52LicpO1xuZXhwb3J0IHtcbiAgbG9nZ2VyLFxuICBjb3B5LFxuICB0aW1lb3V0LFxuICBnZXREb21haW4sXG4gIHN0b3JhZ2VHZXQsXG4gIHN0b3JhZ2VTZXQsXG4gIHNldEFsbFJlYWRCYWRnZSxcbiAgc2V0VW5yZWFkQmFkZ2UsXG4gIGlzSW50ZWdlcixcbiAgZ2V0TGFzdEZvY3VzZWRXaW5kb3csXG4gIGlzVXNlckFjdGl2ZSxcbiAgc3RvcmFnZVJlc2V0LFxufTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyFib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudG9kby1saXN0LWNvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY2FyZC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWI5ZTc0O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBjb2xvcjogIzFiOWU3NDtcXG4gIGJvcmRlci1jb2xvcjogIzFiOWU3NDtcXG59XFxuXFxuLmJvbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwb3B1cFwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9hcHAvcG9wdXAuanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BzbF9pbmRleF9qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbWF0ZXJpYWwtdWlfY29yZV9BdmF0YXJfQXZhdGFyX2pzLW5vZGVfbW9kdWxlc19tYXRlcmlhbC11aV9jb3JlX1R5cG9ncmFwLWY0NmYzMFwiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9ICgpID0+IHtcblxufTtcbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdH1cblx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG5mdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cdHZhciBydW50aW1lID0gZGF0YVszXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufTtcblxudmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gfHwgW107XG52YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuanNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG52YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=