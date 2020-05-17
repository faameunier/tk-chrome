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







function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_components_HomeDispatcher__WEBPACK_IMPORTED_MODULE_5__.default, null);
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
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");









const RESTORE = 'RESTORE';
const NEXT = 'NEXT';
const REMOVED = 'REMOVED';
const CLOSED_HISTORY = 'closed_history';
const NUMBER_HOURS = 24;
const TIME_PERIOD_TO_CONSIDER = 3600000 * NUMBER_HOURS; // in microsecond

class Home extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);
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

          return website;
        });
    }

    const isNext = listToBeRendered === NEXT;
    const filteredList = this.filterList(selectedList).reverse();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.listWebsites
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__.default, {
      variant: "h6",
      className: classes.greenTitle
    }, isNext ? 'Next tabs to be closed' : `Last closed tabs`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.listItems
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__.default, {
      dense: true
    }, filteredList.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, `No tabs closed in the last ${NUMBER_HOURS} hours.`) : filteredList.map((website, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__.default, {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.gridAvatarWithTime
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__.default, {
      className: classes.timeDisplay
    }, `${website.hours_deletion}:${website.minutes_deletion}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__.default, {
      alt: website.title,
      src: website.favIconUrl
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__.default, {
      primary: website.url,
      secondary: website.title,
      className: classes.itemText
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_7__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__.default, {
      variant: "h3",
      className: classes.title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__.default, {
      className: classes.boldText
    }, numberClosedTabsLastHour ? numberClosedTabsLastHour : 'No', " tab", numberClosedTabsLastHour === 1 ? '' : 's'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__.default, {
      className: classes.middleText
    }, ' ', numberClosedTabsLastHour === 1 ? 'was' : 'were', " closed in the last", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__.default, {
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
    maxWidth: 200
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
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Tune */ "./node_modules/@material-ui/icons/Tune.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/settingsProfiles.js */ "./src/config/settingsProfiles.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const OPTIMAL_NUMBER_TABS = 'target_tabs';
const POLICY = 'policy';

class Settings extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChangeParameters", (path, parameter) => event => {
      let settings = this.state.settings;
      settings[path][parameter] = event.target.value;
      this.setState({
        settings: settings,
        renderSaveBoolean: true
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
      this.notifyUser();
    }
  }

  forceRender() {
    this.setState({
      renderSaveBoolean: false
    });
  }

  handleSaveParameters() {
    chrome.runtime.sendMessage({
      messageType: 'SETTINGS_PARAMETERS',
      settings: this.state.settings
    });
    this.notifyUser();
  }

  notifyUser() {
    this.props.enqueueSnackbar('New Settings are saved.', {
      variant: 'success',
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
      path: POLICY,
      parameter: OPTIMAL_NUMBER_TABS,
      inputProps: {
        min: '1',
        max: '100',
        step: '1'
      }
    }];
    const listItemsParameters = inputsParameters.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__.default, {
      key: index,
      disabled: !this.state.customizedBool,
      label: item.label,
      onChange: this.handleChangeParameters(item.path, item.parameter),
      value: item.source[item.path][item.parameter],
      className: classes.textField,
      type: "number",
      inputProps: item.inputProps
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.introductionBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_5__.default, {
      variant: "h3",
      className: classes.title
    }, "Select the suiting mode or customize it.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.textField
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.activeBar
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__.default, {
      className: classes.settingsWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__.default, {
        checked: this.state.focusedMode,
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.FOCUSED),
        value: "secondary",
        color: "primary"
      }),
      label: "Focused",
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__.default, {
        checked: this.state.relaxedMode,
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.RELAXED),
        value: "secondary",
        color: "primary"
      }),
      label: "Relaxed",
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__.default, {
      onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_2__.CUSTOMIZED),
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__.default, {
        checked: this.state.customizedBool,
        value: "",
        color: "primary"
      }),
      label: "Customize your settings' parameters"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.settingsBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__.default //className={classes.content}
    , {
      required: true,
      fullWidth: true
    }, listItemsParameters), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
      disabled: !this.state.customizedBool,
      className: classes.secondaryButton,
      variant: this.state.customizedBool ? 'outline-primary' : 'primary',
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
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(styles)(_Settings__WEBPACK_IMPORTED_MODULE_0__.default));

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
      target_tabs: 12,
      score_threshold: 50,
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
      target_tabs: 5,
      score_threshold: 50,
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
/*! export logger [provided] [used] [could be renamed] */
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
/* harmony export */   "storageSet": () => /* binding */ storageSet
/* harmony export */ });
/* harmony import */ var psl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! psl */ "./node_modules/psl/index.js");
/* harmony import */ var psl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(psl__WEBPACK_IMPORTED_MODULE_0__);


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
/******/ 			["./src/app/popup.js","vendors-node_modules_psl_index_js","vendors-node_modules_material-ui_core_Avatar_Avatar_js-node_modules_material-ui_core_Typograp-96016a"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9zZXJ2aWNlcy91dGlscy5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzP2VhNWQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJFU1RPUkUiLCJORVhUIiwiUkVNT1ZFRCIsIkNMT1NFRF9ISVNUT1JZIiwiTlVNQkVSX0hPVVJTIiwiVElNRV9QRVJJT0RfVE9fQ09OU0lERVIiLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInJlbmRlclNhdmVCb29sZWFuIiwib25DaGFuZ2VkQ2FsbGJhY2siLCJjaGFuZ2VzIiwiY2hhbmdlc0Nsb3NlZEhpc3RvcnkiLCJzZXRTdGF0ZSIsImNsb3NlZF9oaXN0b3J5IiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwicmVzdWx0IiwibmV4dExpc3QiLCJvbkNoYW5nZWQiLCJhZGRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlTGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJmb3JjZVJlbmRlciIsInJlbW92ZUl0ZW0iLCJrZXkiLCJpdGVtcyIsInJldmVyc2UiLCJyZXN0b3JlVGFiIiwicmVtb3ZlTmV4dEl0ZW0iLCJtZXNzYWdlVHlwZSIsInJlc3RvcmVkVGFiIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidGFiSWQiLCJmaWx0ZXJMaXN0Iiwic2VsZWN0ZWRMaXN0Iiwibm93IiwiRGF0ZSIsImZpbHRlciIsIml0ZW0iLCJNYXRoIiwibWF4Iiwic3RhdGlzdGljcyIsInVwZGF0ZWRfYXQiLCJsYXN0X2FjdGl2ZV90aW1lc3RhbXAiLCJyZW5kZXJMaXN0IiwibGlzdFRvQmVSZW5kZXJlZCIsImNsYXNzZXMiLCJNQVhfTEVOR1RIX1RJVExFIiwibWFwIiwid2Vic2l0ZSIsImkiLCJkZWxldGlvblRpbWUiLCJkZWxldGlvbl90aW1lIiwiZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUiLCJ0b1RpbWVTdHJpbmciLCJzcGxpdCIsImhvdXJzX2RlbGV0aW9uIiwibWludXRlc19kZWxldGlvbiIsInRpdGxlIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY29uY2F0IiwiaXNOZXh0IiwiZmlsdGVyZWRMaXN0IiwibGlzdFdlYnNpdGVzIiwiZ3JlZW5UaXRsZSIsImxpc3RJdGVtcyIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsInVybCIsIml0ZW1UZXh0IiwiYnV0dG9uIiwicmVuZGVyIiwibnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIiwiYm9sZFRleHQiLCJtaWRkbGVUZXh0IiwibGlua1RvRm9ybSIsInN0eWxlcyIsInRoZW1lIiwiZm9udFNpemUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImNvbG9yIiwiYm9yZGVyQm90dG9tIiwibWF4V2lkdGgiLCJmb250V2VpZ2h0IiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJtYXJnaW5SaWdodCIsImJvcmRlckNvbG9yIiwibWFyZ2luVG9wIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwicG9zaXRpb24iLCJsZWZ0Iiwid2l0aFN0eWxlcyIsIkhvbWVEaXNwYXRjaGVyIiwiYXBwQmFyVmFsdWUiLCJsb2dnZXIiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiZGlzcGF0Y2hQYWdlIiwicm9vdCIsIm5vdGlmaWNhdGlvbiIsImhvbWVDb250YWluZXIiLCJncmlkTG9nb1RhYnMiLCJsb2dvQXZhdGFyIiwiZSIsInYiLCJhbGxUYWJzIiwidGFiIiwibWluV2lkdGgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCIsIk9QVElNQUxfTlVNQkVSX1RBQlMiLCJQT0xJQ1kiLCJTZXR0aW5ncyIsInBhdGgiLCJwYXJhbWV0ZXIiLCJzZXR0aW5ncyIsInRhcmdldCIsInZhbHVlIiwiZm9jdXNlZE1vZGUiLCJyZWxheGVkTW9kZSIsImN1c3RvbWl6ZWRCb29sIiwiSU5JVF9SRUxBWEVEX1BST0ZJTEUiLCJjaGFuZ2VzU2V0dGluZ3MiLCJjaGFuZ2VzUHJvZmlsZSIsIkZPQ1VTRUQiLCJSRUxBWEVEIiwiQ1VTVE9NSVpFRCIsInByb2ZpbGUiLCJhY3RpdmVfcHJvZmlsZSIsImhhbmRsZUJvb2xDaGFuZ2UiLCJjaGFuZ2VUeXBlIiwibm90aWZ5VXNlciIsImhhbmRsZVNhdmVQYXJhbWV0ZXJzIiwiZW5xdWV1ZVNuYWNrYmFyIiwidmFyaWFudCIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImF1dG9IaWRlRHVyYXRpb24iLCJpbnB1dHNQYXJhbWV0ZXJzIiwibGFiZWwiLCJzb3VyY2UiLCJpbnB1dFByb3BzIiwibWluIiwic3RlcCIsImxpc3RJdGVtc1BhcmFtZXRlcnMiLCJpbmRleCIsImhhbmRsZUNoYW5nZVBhcmFtZXRlcnMiLCJ0ZXh0RmllbGQiLCJpbnRyb2R1Y3Rpb25CbG9jayIsImFjdGl2ZUJhciIsInNldHRpbmdzV3JhcHBlciIsImZpcnN0Qm9vbGVhbnMiLCJzZXR0aW5nc0Jsb2NrIiwic2Vjb25kYXJ5QnV0dG9uIiwid2l0aFNuYWNrYmFyIiwiSU5JVF9GT0NVU0VEX1BST0ZJTEUiLCJFTlYiLCJtZW1vcnkiLCJjYWNoZV9zaXplIiwibWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGUiLCJtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvciIsInBvbGljeSIsInRhcmdldF90YWJzIiwic2NvcmVfdGhyZXNob2xkIiwiZGVjYXkiLCJtaW5fdGltZSIsImFjdGl2ZSIsInBpbm5lZCIsImF1ZGlibGUiLCJzY29yZXIiLCJtaW5fYWN0aXZlIiwicHJvdGVjdGlvbl90aW1lIiwiY2FjaGVkX2RlY2F5IiwiT2JqZWN0IiwiZnJlZXplIiwiYXJncyIsImRlZmF1bHRfZm9ybWF0IiwicHJlIiwidG9VVENTdHJpbmciLCJvcHRpb25zIiwicHVzaCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY29weSIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInRpbWVvdXQiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImdldERvbWFpbiIsInN0ciIsInBzbCIsIlVSTCIsImhvc3RuYW1lIiwiZG9tYWluIiwic3RvcmFnZVNldCIsInJlamVjdCIsInNldCIsInN0b3JhZ2VHZXQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxHQUFlO0FBQ2Isc0JBQU8sMkRBQUMsK0RBQUQsT0FBUDtBQUNEOztBQUVEQyx1REFBQSxlQUFnQiwyREFBQyxHQUFELE9BQWhCLEVBQXlCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1DLElBQUksR0FBRyxNQUFiO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxFQUFyQjtBQUNBLE1BQU1DLHVCQUF1QixHQUFHLFVBQVVELFlBQTFDLEMsQ0FBd0Q7O0FBRXhELE1BQU1FLElBQU4sU0FBbUJDLGdEQUFuQixDQUFpQztBQUMvQkMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtB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QTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQSxnQkFBZ0IsMkJBQTJCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGVBQWUsdUJBQXVCO1dBQ3RDO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsMkM7Ozs7VUM1RkE7VUFDQSIsImZpbGUiOiJwb3B1cC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2pxdWVyeS9kaXN0L2pxdWVyeS5taW4nO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluJztcbmltcG9ydCAnLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWVEaXNwYXRjaGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXInO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiA8SG9tZURpc3BhdGNoZXIgLz47XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5jb25zdCBSRVNUT1JFID0gJ1JFU1RPUkUnO1xuY29uc3QgTkVYVCA9ICdORVhUJztcbmNvbnN0IFJFTU9WRUQgPSAnUkVNT1ZFRCc7XG5jb25zdCBDTE9TRURfSElTVE9SWSA9ICdjbG9zZWRfaGlzdG9yeSc7XG5jb25zdCBOVU1CRVJfSE9VUlMgPSAyNDtcbmNvbnN0IFRJTUVfUEVSSU9EX1RPX0NPTlNJREVSID0gMzYwMDAwMCAqIE5VTUJFUl9IT1VSUzsgLy8gaW4gbWljcm9zZWNvbmRcblxuY2xhc3MgSG9tZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyByZW5kZXJTYXZlQm9vbGVhbjogZmFsc2UgfTtcbiAgICB0aGlzLm9uQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXNDbG9zZWRIaXN0b3J5ID0gY2hhbmdlc1tDTE9TRURfSElTVE9SWV07XG4gICAgICBpZiAoY2hhbmdlc0Nsb3NlZEhpc3RvcnkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2xvc2VkX2hpc3Rvcnk6IGNoYW5nZXNDbG9zZWRIaXN0b3J5WyduZXdWYWx1ZSddLFxuICAgICAgICAgIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW0NMT1NFRF9ISVNUT1JZXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSByZXN1bHQuY2xvc2VkX2hpc3RvcnkgfHwgW107XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VkX2hpc3RvcnkgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5leHRMaXN0OiBbXSB9KTtcbiAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5yZW5kZXJTYXZlQm9vbGVhbikge1xuICAgICAgdGhpcy5mb3JjZVJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeS5yZXZlcnNlKCk7XG4gICAgdGhpcy5yZXN0b3JlVGFiKGl0ZW1zLCBrZXksIFJFU1RPUkUpO1xuICB9XG5cbiAgcmVtb3ZlTmV4dEl0ZW0oa2V5KSB7XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5zdGF0ZS5uZXh0TGlzdDtcbiAgICB0aGlzLnJlc3RvcmVUYWIoaXRlbXMsIGtleSwgUkVTVE9SRSk7XG4gIH1cblxuICByZXN0b3JlVGFiKGl0ZW1zLCBrZXksIG1lc3NhZ2VUeXBlKSB7XG4gICAgY29uc3QgcmVzdG9yZWRUYWIgPSBpdGVtc1trZXldO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlVHlwZSxcbiAgICAgIHRhYklkOiByZXN0b3JlZFRhYi50YWJJZCxcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlUmVuZGVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZW5kZXJTYXZlQm9vbGVhbjogZmFsc2UgfSk7XG4gIH1cblxuICBmaWx0ZXJMaXN0KHNlbGVjdGVkTGlzdCkge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNlbGVjdGVkTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG5vdyAtIE1hdGgubWF4KGl0ZW0uc3RhdGlzdGljcy51cGRhdGVkX2F0LCBpdGVtLnN0YXRpc3RpY3MubGFzdF9hY3RpdmVfdGltZXN0YW1wKSA8IFRJTUVfUEVSSU9EX1RPX0NPTlNJREVSXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyTGlzdChsaXN0VG9CZVJlbmRlcmVkKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHNlbGVjdGVkTGlzdDtcbiAgICBjb25zdCBNQVhfTEVOR1RIX1RJVExFID0gNTA7XG5cbiAgICBzd2l0Y2ggKGxpc3RUb0JlUmVuZGVyZWQpIHtcbiAgICAgIGNhc2UgTkVYVDpcbiAgICAgICAgc2VsZWN0ZWRMaXN0ID0gdGhpcy5zdGF0ZS5uZXh0TGlzdCA/IHRoaXMuc3RhdGUubmV4dExpc3QgOiBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzZWxlY3RlZExpc3QgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5ID8gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSA6IFtdO1xuICAgICAgICBzZWxlY3RlZExpc3QgPSBzZWxlY3RlZExpc3QubWFwKCh3ZWJzaXRlLCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVsZXRpb25UaW1lID0gbmV3IERhdGUod2Vic2l0ZS5kZWxldGlvbl90aW1lKTtcbiAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRfZGVsZXRpb25fdGltZSA9IGRlbGV0aW9uVGltZS50b1RpbWVTdHJpbmcoKS5zcGxpdCgnICcpWzBdO1xuICAgICAgICAgIHdlYnNpdGUuaG91cnNfZGVsZXRpb24gPSBmb3JtYXR0ZWRfZGVsZXRpb25fdGltZS5zcGxpdCgnOicpWzBdO1xuICAgICAgICAgIHdlYnNpdGUubWludXRlc19kZWxldGlvbiA9IGZvcm1hdHRlZF9kZWxldGlvbl90aW1lLnNwbGl0KCc6JylbMV07XG4gICAgICAgICAgaWYgKHdlYnNpdGUudGl0bGUgJiYgd2Vic2l0ZS50aXRsZS5sZW5ndGggPiBNQVhfTEVOR1RIX1RJVExFKSB7XG4gICAgICAgICAgICB3ZWJzaXRlLnRpdGxlID0gd2Vic2l0ZS50aXRsZS5zdWJzdHJpbmcoMCwgTUFYX0xFTkdUSF9USVRMRSkuY29uY2F0KCcuLi4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHdlYnNpdGU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBpc05leHQgPSBsaXN0VG9CZVJlbmRlcmVkID09PSBORVhUO1xuICAgIGNvbnN0IGZpbHRlcmVkTGlzdCA9IHRoaXMuZmlsdGVyTGlzdChzZWxlY3RlZExpc3QpLnJldmVyc2UoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFdlYnNpdGVzfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmdyZWVuVGl0bGV9PlxuICAgICAgICAgIHtpc05leHQgPyAnTmV4dCB0YWJzIHRvIGJlIGNsb3NlZCcgOiBgTGFzdCBjbG9zZWQgdGFic2B9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW1zfT5cbiAgICAgICAgICA8TGlzdCBkZW5zZT17dHJ1ZX0+XG4gICAgICAgICAgICB7ZmlsdGVyZWRMaXN0Lmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPHA+e2BObyB0YWJzIGNsb3NlZCBpbiB0aGUgbGFzdCAke05VTUJFUl9IT1VSU30gaG91cnMuYH08L3A+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBmaWx0ZXJlZExpc3QubWFwKCh3ZWJzaXRlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkQXZhdGFyV2l0aFRpbWV9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGltZURpc3BsYXl9PlxuICAgICAgICAgICAgICAgICAgICAgIHtgJHt3ZWJzaXRlLmhvdXJzX2RlbGV0aW9ufToke3dlYnNpdGUubWludXRlc19kZWxldGlvbn1gfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD17d2Vic2l0ZS50aXRsZX0gc3JjPXt3ZWJzaXRlLmZhdkljb25Vcmx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17d2Vic2l0ZS51cmx9IHNlY29uZGFyeT17d2Vic2l0ZS50aXRsZX0gY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fSAvPlxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtpc05leHQgPyB0aGlzLnJlbW92ZU5leHRJdGVtLmJpbmQodGhpcywgaSkgOiB0aGlzLnJlbW92ZUl0ZW0uYmluZCh0aGlzLCBpKX1cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2lzTmV4dCA/ICdTa2lwJyA6ICdSZXN0b3JlJ31cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5ID8gdGhpcy5maWx0ZXJMaXN0KHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkpLmxlbmd0aCA6IDA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmJvbGRUZXh0fT5cbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPyBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgOiAnTm8nfSB0YWJcbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPT09IDEgPyAnJyA6ICdzJ31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLm1pZGRsZVRleHR9PlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPT09IDEgPyAnd2FzJyA6ICd3ZXJlJ30gY2xvc2VkIGluIHRoZSBsYXN0eycgJ31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmJvbGRUZXh0fT4ge2Ake05VTUJFUl9IT1VSU30gaG91cnMhYH0gPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIHt0aGlzLnJlbmRlckxpc3QuYmluZCh0aGlzKShSRU1PVkVEKX1cbiAgICAgICAgey8qe3RoaXMucmVuZGVyTGlzdC5iaW5kKHRoaXMpKE5FWFQpfSovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVG9Gb3JtfT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvZS8xRkFJcFFMU2RVRUpIZDBiTDZyeUZ2WmsyMjBDb1pwN2N3dkZ4RVNvcnBzN2NuZ2swd1FmeXUtUS92aWV3Zm9ybVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlcG9ydCBhIGJ1ZyBvciBzZW5kIHVzIGEgZmVlZGJhY2s/XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgfSxcbiAgZ3JlZW5UaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgY29sb3I6ICcjMWI5ZTc0JyxcbiAgICBib3JkZXJCb3R0b206IGAycHggc29saWQgIzFiOWU3NGAsXG4gICAgbWF4V2lkdGg6IDIyNSxcbiAgfSxcbiAgYm9sZFRleHQ6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0sXG4gIG1pZGRsZVRleHQ6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6ICcjMWI5ZTc0JyxcbiAgICBib3JkZXJDb2xvcjogJyMxYjllNzQnLFxuICAgIGZvbnRTaXplOiAxMixcbiAgfSxcbiAgaXRlbVRleHQ6IHtcbiAgICBtYXhXaWR0aDogMjAwLFxuICB9LFxuICB0aW1lRGlzcGxheToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTQsXG4gIH0sXG4gIGdyaWRBdmF0YXJXaXRoVGltZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgfSxcbiAgbGlzdFdlYnNpdGVzOiB7XG4gICAgbWFyZ2luVG9wOiAyMCxcbiAgfSxcbiAgbGlzdEl0ZW1zOiB7XG4gICAgbWF4SGVpZ2h0OiAzMDAsXG4gICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbiAgfSxcbiAgbGlua1RvRm9ybToge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGxlZnQ6ICc1NSUnLFxuICAgIGZvbnRTaXplOiAxMCxcbiAgICBtYXJnaW5Ub3A6IDE1LFxuICAgIG1heFdpZHRoOiAnNzUlJyxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhvbWUpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vU2V0dGluZ3MnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vSG9tZSc7XG5pbXBvcnQgeyBTbmFja2JhclByb3ZpZGVyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyL0F2YXRhcic7XG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXIvTGlzdEl0ZW1BdmF0YXInO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMuanMnO1xuXG5jbGFzcyBIb21lRGlzcGF0Y2hlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBhcHBCYXJWYWx1ZTogJ0hPTUUnIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXBwQmFyVmFsdWU6ICdIT01FJyB9KTtcbiAgICBsb2dnZXIodGhpcywgJ1BvcHVwIG9wZW5lZCcpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50LCBuZXdWYWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBCYXJWYWx1ZTogbmV3VmFsdWUgfSk7XG4gICAgbG9nZ2VyKHRoaXMsICdTd2l0Y2ggdG8gJyArIG5ld1ZhbHVlKTtcbiAgfVxuXG4gIGRpc3BhdGNoUGFnZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUpIHtcbiAgICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgICByZXR1cm4gPEhvbWUgLz47XG4gICAgICBjYXNlICdTRVRUSU5HUyc6XG4gICAgICAgIHJldHVybiA8U2V0dGluZ3MgLz47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPGRpdj5UaGlzIGlzIGFuIGVycm9yIHBhZ2U8L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFNuYWNrYmFyUHJvdmlkZXJcbiAgICAgICAgbWF4U25hY2s9ezJ9XG4gICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICByb290OiBjbGFzc2VzLm5vdGlmaWNhdGlvbixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZUNvbnRhaW5lcn0+XG4gICAgICAgICAgPFBhcGVyIHNxdWFyZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRMb2dvVGFic30+XG4gICAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwibG9nb1RhYmJ5XCIgc3JjPXsnLi4vLi4vYXNzZXRzL3N0YXRpYy9pY29ucy90YWJieS5wbmcnfSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0F2YXRhcn0gLz5cbiAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hcHBCYXJWYWx1ZSA/IHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUgOiAnSE9NRSd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2KSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCB2KX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYWxsVGFic31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJIb21lXCIgdmFsdWU9eydIT01FJ30gY2xhc3NOYW1lPXtjbGFzc2VzLnRhYn0gLz5cbiAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiU2V0dGluZ3NcIiB2YWx1ZT17J1NFVFRJTkdTJ30gY2xhc3NOYW1lPXtjbGFzc2VzLnRhYn0gLz5cbiAgICAgICAgICAgICAgICB7Lyo8VGFiIGxhYmVsPVwiRGVidWdcIiB2YWx1ZT17XCJERUJVR1wifSBkaXNhYmxlZCBjbGFzc05hbWU9e2NsYXNzZXMudGFifS8+Ki99XG4gICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj57dGhpcy5kaXNwYXRjaFBhZ2UoKX08L2Rpdj5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU25hY2tiYXJQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVEaXNwYXRjaGVyO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lRGlzcGF0Y2hlciBmcm9tICcuL0hvbWVEaXNwYXRjaGVyJztcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiL1RhYic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGhvbWVDb250YWluZXI6IHtcbiAgICBtaW5XaWR0aDogNDAwLFxuICB9LFxuICB0YWI6IHtcbiAgICBjb2xvcjogJyMxYjllNzQnLFxuICB9LFxuICBub3RpZmljYXRpb246IHtcbiAgICBsZWZ0OiAxNTAsXG4gIH0sXG4gIGdyaWRMb2dvVGFiczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2xlZnQnLFxuICB9LFxuICBhbGxUYWJzOiB7XG4gICAgbWF4V2lkdGg6ICc3NSUnLFxuICB9LFxuICBsb2dvQXZhdGFyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNy41KSxcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNy41KSxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhvbWVEaXNwYXRjaGVyKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5L1R5cG9ncmFwaHknO1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IFR1bmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UdW5lJztcbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgeyBSRUxBWEVELCBGT0NVU0VELCBDVVNUT01JWkVELCBJTklUX0ZPQ1VTRURfUFJPRklMRSwgSU5JVF9SRUxBWEVEX1BST0ZJTEUgfSBmcm9tICcuLi8uLi9jb25maWcvc2V0dGluZ3NQcm9maWxlcy5qcyc7XG5cbmNvbnN0IE9QVElNQUxfTlVNQkVSX1RBQlMgPSAndGFyZ2V0X3RhYnMnO1xuY29uc3QgUE9MSUNZID0gJ3BvbGljeSc7XG5cbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb2N1c2VkTW9kZTogZmFsc2UsXG4gICAgICByZWxheGVkTW9kZTogZmFsc2UsXG4gICAgICBjdXN0b21pemVkQm9vbDogZmFsc2UsXG4gICAgICBzZXR0aW5nczogSU5JVF9SRUxBWEVEX1BST0ZJTEUsXG4gICAgICByZW5kZXJTYXZlQm9vbGVhbjogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLm9uQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXNTZXR0aW5ncyA9IGNoYW5nZXNbJ3NldHRpbmdzJ107XG4gICAgICBjb25zdCBjaGFuZ2VzUHJvZmlsZSA9IGNoYW5nZXNbJ2FjdGl2ZV9wcm9maWxlJ107XG4gICAgICBpZiAoY2hhbmdlc1NldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNldHRpbmdzOiBjaGFuZ2VzU2V0dGluZ3NbJ25ld1ZhbHVlJ10sXG4gICAgICAgICAgcmVuZGVyU2F2ZUJvb2xlYW46IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZXNQcm9maWxlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZvY3VzZWRNb2RlOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gRk9DVVNFRCxcbiAgICAgICAgICByZWxheGVkTW9kZTogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IFJFTEFYRUQsXG4gICAgICAgICAgY3VzdG9taXplZEJvb2w6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBDVVNUT01JWkVELFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydhY3RpdmVfcHJvZmlsZScsICdzZXR0aW5ncyddLCAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBwcm9maWxlID0gcmVzdWx0LmFjdGl2ZV9wcm9maWxlIHx8IFJFTEFYRUQ7XG4gICAgICBjb25zdCBmb2N1c2VkTW9kZSA9IHByb2ZpbGUgPT09IEZPQ1VTRUQ7XG4gICAgICBjb25zdCByZWxheGVkTW9kZSA9IHByb2ZpbGUgPT09IFJFTEFYRUQ7XG4gICAgICBjb25zdCBjdXN0b21pemVkQm9vbCA9IHByb2ZpbGUgPT09IENVU1RPTUlaRUQ7XG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHJlc3VsdC5zZXR0aW5ncyB8fCBJTklUX1JFTEFYRURfUFJPRklMRTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkTW9kZSxcbiAgICAgICAgcmVsYXhlZE1vZGUsXG4gICAgICAgIGN1c3RvbWl6ZWRCb29sLFxuICAgICAgICBzZXR0aW5ncyxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnJlbmRlclNhdmVCb29sZWFuKSB7XG4gICAgICB0aGlzLmZvcmNlUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQm9vbENoYW5nZShjaGFuZ2VUeXBlKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QUk9GSUxFJyxcbiAgICAgIHByb2ZpbGU6IGNoYW5nZVR5cGUsXG4gICAgfSk7XG4gICAgaWYgKGNoYW5nZVR5cGUgPT09IFJFTEFYRUQgfHwgY2hhbmdlVHlwZSA9PT0gRk9DVVNFRCkge1xuICAgICAgdGhpcy5ub3RpZnlVc2VyKCk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2VSZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVNhdmVQYXJhbWV0ZXJzKCkge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2VUeXBlOiAnU0VUVElOR1NfUEFSQU1FVEVSUycsXG4gICAgICBzZXR0aW5nczogdGhpcy5zdGF0ZS5zZXR0aW5ncyxcbiAgICB9KTtcbiAgICB0aGlzLm5vdGlmeVVzZXIoKTtcbiAgfVxuXG4gIG5vdGlmeVVzZXIoKSB7XG4gICAgdGhpcy5wcm9wcy5lbnF1ZXVlU25hY2tiYXIoJ05ldyBTZXR0aW5ncyBhcmUgc2F2ZWQuJywge1xuICAgICAgdmFyaWFudDogJ3N1Y2Nlc3MnLFxuICAgICAgYW5jaG9yT3JpZ2luOiB7XG4gICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgIH0sXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDc1MCxcbiAgICAgIGF1dG9IaWRlRHVyYXRpb246IDE1MDAsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzID0gKHBhdGgsIHBhcmFtZXRlcikgPT4gKGV2ZW50KSA9PiB7XG4gICAgbGV0IHNldHRpbmdzID0gdGhpcy5zdGF0ZS5zZXR0aW5ncztcbiAgICBzZXR0aW5nc1twYXRoXVtwYXJhbWV0ZXJdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZXR0aW5nczogc2V0dGluZ3MsIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5wdXRzUGFyYW1ldGVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdPcHRpbWFsIG51bWJlciBvZiB0YWJzICcsXG4gICAgICAgIHNvdXJjZTogdGhpcy5zdGF0ZS5zZXR0aW5ncyxcbiAgICAgICAgcGF0aDogUE9MSUNZLFxuICAgICAgICBwYXJhbWV0ZXI6IE9QVElNQUxfTlVNQkVSX1RBQlMsXG4gICAgICAgIGlucHV0UHJvcHM6IHsgbWluOiAnMScsIG1heDogJzEwMCcsIHN0ZXA6ICcxJyB9LFxuICAgICAgfSxcbiAgICBdO1xuICAgIGNvbnN0IGxpc3RJdGVtc1BhcmFtZXRlcnMgPSBpbnB1dHNQYXJhbWV0ZXJzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sfVxuICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlUGFyYW1ldGVycyhpdGVtLnBhdGgsIGl0ZW0ucGFyYW1ldGVyKX1cbiAgICAgICAgdmFsdWU9e2l0ZW0uc291cmNlW2l0ZW0ucGF0aF1baXRlbS5wYXJhbWV0ZXJdfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgaW5wdXRQcm9wcz17aXRlbS5pbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICApKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW50cm9kdWN0aW9uQmxvY2t9PlxuICAgICAgICAgIDxUdW5lSWNvbiAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICBTZWxlY3QgdGhlIHN1aXRpbmcgbW9kZSBvciBjdXN0b21pemUgaXQuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3RpdmVCYXJ9PjwvZGl2PlxuICAgICAgICAgIHsvKjxoMSBjbGFzc05hbWU9e1wiYm9sZC10aXRsZVwifT5TZWxlY3QgVGFiYnkncyBvcGVyYXRpbmcgbW9kZTo8L2gxPiovfVxuICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXR0aW5nc1dyYXBwZXJ9PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmZvY3VzZWRNb2RlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlQm9vbENoYW5nZShGT0NVU0VEKX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsYWJlbD1cIkZvY3VzZWRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCb29sZWFuc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVsYXhlZE1vZGV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVCb29sQ2hhbmdlKFJFTEFYRUQpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxhYmVsPVwiUmVsYXhlZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoQ1VTVE9NSVpFRCl9XG4gICAgICAgICAgICAgIGNvbnRyb2w9ezxDaGVja2JveCBjaGVja2VkPXt0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sfSB2YWx1ZT1cIlwiIGNvbG9yPVwicHJpbWFyeVwiIC8+fVxuICAgICAgICAgICAgICBsYWJlbD1cIkN1c3RvbWl6ZSB5b3VyIHNldHRpbmdzJyBwYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXR0aW5nc0Jsb2NrfT5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgICAgLy9jbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xpc3RJdGVtc1BhcmFtZXRlcnN9XG4gICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZGFyeUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e3RoaXMuc3RhdGUuY3VzdG9taXplZEJvb2wgPyAnb3V0bGluZS1wcmltYXJ5JyA6ICdwcmltYXJ5J31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNuYWNrYmFyKFNldHRpbmdzKTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9TZXR0aW5ncyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWFyZ2luVG9wOiAwLFxuICAgIG1hcmdpbkxlZnQ6IDIwLFxuICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgfSxcbiAgYWN0aXZlQmFyOiB7XG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgfSxcblxuICBzZXR0aW5nc1dyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgbWF4SGVpZ2h0OiAnNTAlJyxcbiAgICAvL3dpZHRoOiAnMTAwJScsXG4gICAgLy9oZWlnaHQ6ICcxMDB2aCcsXG4gIH0sXG4gIHNlY29uZGFyeUJ1dHRvbjoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gICAgLy9tYXJnaW5Eb3duOiA1LFxuICAgIGNvbG9yOiAnIzFiOWU3NCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjMWI5ZTc0JyxcbiAgfSxcbiAgbm90aWZpY2F0aW9uOiB7XG4gICAgbWF4V2lkdGg6IDE1MCxcbiAgfSxcbiAgaW50cm9kdWN0aW9uQmxvY2s6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgLy9tYXJnaW5Ub3A6IDIwLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTcsXG4gICAgbWFyZ2luTGVmdDogMTAsXG4gIH0sXG4gIHNldHRpbmdzQmxvY2s6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgZmlyc3RCb29sZWFuczoge1xuICAgIG1heFdpZHRoOiAnNDAlJyxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFNldHRpbmdzKTtcbiIsImNvbnN0IFJFTEFYRUQgPSAncmVsYXhlZCc7XG5jb25zdCBGT0NVU0VEID0gJ2ZvY3VzZWQnO1xuY29uc3QgQ1VTVE9NSVpFRCA9ICdjdXN0b21pemVkJztcbnZhciBJTklUX1JFTEFYRURfUFJPRklMRSA9IHt9O1xudmFyIElOSVRfRk9DVVNFRF9QUk9GSUxFID0ge307XG5cbmlmIChFTlYgPT09ICdkZWJ1ZycpIHtcbiAgSU5JVF9SRUxBWEVEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEgKiAxMDAwLFxuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDUgKiAxMDAwLFxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICB0YXJnZXRfdGFiczogMTIsXG4gICAgICBzY29yZV90aHJlc2hvbGQ6IDUwLFxuICAgICAgZGVjYXk6IDAuOCxcbiAgICAgIG1pbl90aW1lOiAzICogMTAwMCxcbiAgXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgcGlubmVkOiBmYWxzZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICBtaW5fYWN0aXZlOiA1ICogMTAwMCxcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjcsXG4gICAgfSxcbiAgfTtcbiAgXG4gIElOSVRfRk9DVVNFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxICogMTAwMCxcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiA1ICogMTAwMCxcbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgdGFyZ2V0X3RhYnM6IDUsXG4gICAgICBzY29yZV90aHJlc2hvbGQ6IDUwLFxuICAgICAgZGVjYXk6IDAuOCxcbiAgICAgIG1pbl90aW1lOiAzICogMTAwMCxcbiAgXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgcGlubmVkOiBmYWxzZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICBtaW5fYWN0aXZlOiA1ICogMTAwMCxcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjcsXG4gICAgfSxcbiAgfTtcbn0gZWxzZSB7XG4gIElOSVRfUkVMQVhFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxMCAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogMTAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIHRhcmdldF90YWJzOiAxMixcbiAgICAgIHNjb3JlX3RocmVzaG9sZDogNTAsXG4gICAgICBkZWNheTogMC44LFxuICAgICAgbWluX3RpbWU6IDMgKiAxMDAwLFxuICBcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBwaW5uZWQ6IGZhbHNlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIG1pbl9hY3RpdmU6IDUgKiA2MCAqIDEwMDAsXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogNjAgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjcsXG4gICAgfSxcbiAgfTtcbiAgXG4gIElOSVRfRk9DVVNFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxMCAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogMTAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIHRhcmdldF90YWJzOiA1LFxuICAgICAgc2NvcmVfdGhyZXNob2xkOiA1MCxcbiAgICAgIGRlY2F5OiAwLjgsXG4gICAgICBtaW5fdGltZTogMyAqIDEwMDAsXG4gIFxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIHBpbm5lZDogZmFsc2UsXG4gICAgICBhdWRpYmxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHNjb3Jlcjoge1xuICAgICAgbWluX2FjdGl2ZTogNSAqIDYwICogMTAwMCxcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiA2MCAqIDEwMDAsXG4gICAgICBjYWNoZWRfZGVjYXk6IDAuNyxcbiAgICB9LFxuICB9O1xufVxuXG5PYmplY3QuZnJlZXplKElOSVRfRk9DVVNFRF9QUk9GSUxFKTtcbk9iamVjdC5mcmVlemUoSU5JVF9SRUxBWEVEX1BST0ZJTEUpO1xuXG5leHBvcnQgeyBSRUxBWEVELCBGT0NVU0VELCBDVVNUT01JWkVELCBJTklUX0ZPQ1VTRURfUFJPRklMRSwgSU5JVF9SRUxBWEVEX1BST0ZJTEUgfTtcbiIsImltcG9ydCAqIGFzIHBzbCBmcm9tICdwc2wnO1xuXG5jb25zdCBsb2dnZXIgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICBpZiAoRU5WID09PSAnZGVidWcnIHx8IEVOViA9PT0gJ2RldicpIHtcbiAgICBsZXQgZGVmYXVsdF9mb3JtYXQgPSBbJ2ZvbnQtd2VpZ2h0OmluaXRpYWw7IGNvbG9yOmJsYWNrOyddO1xuICAgIGxldCBwcmUgPSAnJWMnICsgbmV3IERhdGUoKS50b1VUQ1N0cmluZygpICsgJyVjJztcbiAgICBsZXQgb3B0aW9ucyA9IFsnZm9udC13ZWlnaHQ6bGlnaHRlcjsgY29sb3I6TGlnaHRTbGF0ZUdyZXk7J107XG4gICAgb3B0aW9ucy5wdXNoKGRlZmF1bHRfZm9ybWF0KTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICBwcmUgKz0gJyB8ICVjJyArIGFyZ3NbMF0uY29uc3RydWN0b3IubmFtZSArICclYyB8ICc7XG4gICAgICBwcmUgKz0gYXJnc1sxXTtcbiAgICAgIG9wdGlvbnMucHVzaCgnY29sb3I6IzFkYTg3YzsgZm9udC13ZWlnaHQ6Ym9sZGVyJyk7XG4gICAgICBvcHRpb25zLnB1c2goZGVmYXVsdF9mb3JtYXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmUgKz0gJyB8ICcgKyBhcmdzWzBdO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcmUsIC4uLm9wdGlvbnMpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjb3B5KG9iaikge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuZnVuY3Rpb24gdGltZW91dChtcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RG9tYWluKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBwc2wucGFyc2UobmV3IFVSTChzdHIpLmhvc3RuYW1lKS5kb21haW47XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcmFnZVNldChhcmdzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KGFyZ3MsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0b3JhZ2VHZXQoYXJncykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChhcmdzLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmxvZ2dlcignU3RhcnRpbmcgaW4gJyArIEVOViArICcgZW52LicpO1xuZXhwb3J0IHsgbG9nZ2VyLCBjb3B5LCB0aW1lb3V0LCBnZXREb21haW4sIHN0b3JhZ2VHZXQsIHN0b3JhZ2VTZXQgfTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyFib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudG9kby1saXN0LWNvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY2FyZC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWI5ZTc0O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBjb2xvcjogIzFiOWU3NDtcXG4gIGJvcmRlci1jb2xvcjogIzFiOWU3NDtcXG59XFxuXFxuLmJvbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwb3B1cFwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9hcHAvcG9wdXAuanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BzbF9pbmRleF9qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbWF0ZXJpYWwtdWlfY29yZV9BdmF0YXJfQXZhdGFyX2pzLW5vZGVfbW9kdWxlc19tYXRlcmlhbC11aV9jb3JlX1R5cG9ncmFwLTk2MDE2YVwiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9ICgpID0+IHtcblxufTtcbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdH1cblx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG5mdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cdHZhciBydW50aW1lID0gZGF0YVszXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufTtcblxudmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gfHwgW107XG52YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuanNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG52YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=