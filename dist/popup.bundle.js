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
const INIT_RELAXED_PROFILE = {
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
    min_active: 5,
    // * 60 * 1000,
    protection_time: 15 * 60 * 1000,
    cached_decay: 0.7
  }
};
const INIT_FOCUSED_PROFILE = {
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
    min_active: 5,
    //* 60 * 1000,
    protection_time: 15 * 60 * 1000,
    cached_decay: 0.7
  }
};


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
/*! export timeout [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => /* binding */ logger,
/* harmony export */   "copy": () => /* binding */ copy,
/* harmony export */   "getDomain": () => /* binding */ getDomain,
/* harmony export */   "storageGet": () => /* binding */ storageGet,
/* harmony export */   "storageSet": () => /* binding */ storageSet
/* harmony export */ });
/* unused harmony export timeout */
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

logger('Starting in ' + "dev" + ' env.');


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9zZXJ2aWNlcy91dGlscy5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzP2VhNWQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJFU1RPUkUiLCJORVhUIiwiUkVNT1ZFRCIsIkNMT1NFRF9ISVNUT1JZIiwiTlVNQkVSX0hPVVJTIiwiVElNRV9QRVJJT0RfVE9fQ09OU0lERVIiLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInJlbmRlclNhdmVCb29sZWFuIiwib25DaGFuZ2VkQ2FsbGJhY2siLCJjaGFuZ2VzIiwiY2hhbmdlc0Nsb3NlZEhpc3RvcnkiLCJzZXRTdGF0ZSIsImNsb3NlZF9oaXN0b3J5IiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwicmVzdWx0IiwibmV4dExpc3QiLCJvbkNoYW5nZWQiLCJhZGRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlTGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJmb3JjZVJlbmRlciIsInJlbW92ZUl0ZW0iLCJrZXkiLCJpdGVtcyIsInJldmVyc2UiLCJyZXN0b3JlVGFiIiwicmVtb3ZlTmV4dEl0ZW0iLCJtZXNzYWdlVHlwZSIsInJlc3RvcmVkVGFiIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidGFiSWQiLCJmaWx0ZXJMaXN0Iiwic2VsZWN0ZWRMaXN0Iiwibm93IiwiRGF0ZSIsImZpbHRlciIsIml0ZW0iLCJNYXRoIiwibWF4Iiwic3RhdGlzdGljcyIsInVwZGF0ZWRfYXQiLCJsYXN0X2FjdGl2ZV90aW1lc3RhbXAiLCJyZW5kZXJMaXN0IiwibGlzdFRvQmVSZW5kZXJlZCIsImNsYXNzZXMiLCJNQVhfTEVOR1RIX1RJVExFIiwibWFwIiwid2Vic2l0ZSIsImkiLCJkZWxldGlvblRpbWUiLCJkZWxldGlvbl90aW1lIiwiZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUiLCJ0b1RpbWVTdHJpbmciLCJzcGxpdCIsImhvdXJzX2RlbGV0aW9uIiwibWludXRlc19kZWxldGlvbiIsInRpdGxlIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY29uY2F0IiwiaXNOZXh0IiwiZmlsdGVyZWRMaXN0IiwibGlzdFdlYnNpdGVzIiwiZ3JlZW5UaXRsZSIsImxpc3RJdGVtcyIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsInVybCIsIml0ZW1UZXh0IiwiYnV0dG9uIiwicmVuZGVyIiwibnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIiwiYm9sZFRleHQiLCJtaWRkbGVUZXh0IiwibGlua1RvRm9ybSIsInN0eWxlcyIsInRoZW1lIiwiZm9udFNpemUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImNvbG9yIiwiYm9yZGVyQm90dG9tIiwibWF4V2lkdGgiLCJmb250V2VpZ2h0IiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJtYXJnaW5SaWdodCIsImJvcmRlckNvbG9yIiwibWFyZ2luVG9wIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwicG9zaXRpb24iLCJsZWZ0Iiwid2l0aFN0eWxlcyIsIkhvbWVEaXNwYXRjaGVyIiwiYXBwQmFyVmFsdWUiLCJsb2dnZXIiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiZGlzcGF0Y2hQYWdlIiwicm9vdCIsIm5vdGlmaWNhdGlvbiIsImhvbWVDb250YWluZXIiLCJncmlkTG9nb1RhYnMiLCJsb2dvQXZhdGFyIiwiZSIsInYiLCJhbGxUYWJzIiwidGFiIiwibWluV2lkdGgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsImhlaWdodCIsIk9QVElNQUxfTlVNQkVSX1RBQlMiLCJQT0xJQ1kiLCJTZXR0aW5ncyIsInBhdGgiLCJwYXJhbWV0ZXIiLCJzZXR0aW5ncyIsInRhcmdldCIsInZhbHVlIiwiZm9jdXNlZE1vZGUiLCJyZWxheGVkTW9kZSIsImN1c3RvbWl6ZWRCb29sIiwiSU5JVF9SRUxBWEVEX1BST0ZJTEUiLCJjaGFuZ2VzU2V0dGluZ3MiLCJjaGFuZ2VzUHJvZmlsZSIsIkZPQ1VTRUQiLCJSRUxBWEVEIiwiQ1VTVE9NSVpFRCIsInByb2ZpbGUiLCJhY3RpdmVfcHJvZmlsZSIsImhhbmRsZUJvb2xDaGFuZ2UiLCJjaGFuZ2VUeXBlIiwibm90aWZ5VXNlciIsImhhbmRsZVNhdmVQYXJhbWV0ZXJzIiwiZW5xdWV1ZVNuYWNrYmFyIiwidmFyaWFudCIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImF1dG9IaWRlRHVyYXRpb24iLCJpbnB1dHNQYXJhbWV0ZXJzIiwibGFiZWwiLCJzb3VyY2UiLCJpbnB1dFByb3BzIiwibWluIiwic3RlcCIsImxpc3RJdGVtc1BhcmFtZXRlcnMiLCJpbmRleCIsImhhbmRsZUNoYW5nZVBhcmFtZXRlcnMiLCJ0ZXh0RmllbGQiLCJpbnRyb2R1Y3Rpb25CbG9jayIsImFjdGl2ZUJhciIsInNldHRpbmdzV3JhcHBlciIsImZpcnN0Qm9vbGVhbnMiLCJzZXR0aW5nc0Jsb2NrIiwic2Vjb25kYXJ5QnV0dG9uIiwid2l0aFNuYWNrYmFyIiwibWVtb3J5IiwiY2FjaGVfc2l6ZSIsIm1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlIiwibWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3IiLCJwb2xpY3kiLCJ0YXJnZXRfdGFicyIsInNjb3JlX3RocmVzaG9sZCIsImRlY2F5IiwibWluX3RpbWUiLCJhY3RpdmUiLCJwaW5uZWQiLCJhdWRpYmxlIiwic2NvcmVyIiwibWluX2FjdGl2ZSIsInByb3RlY3Rpb25fdGltZSIsImNhY2hlZF9kZWNheSIsIklOSVRfRk9DVVNFRF9QUk9GSUxFIiwiYXJncyIsIkVOViIsImRlZmF1bHRfZm9ybWF0IiwicHJlIiwidG9VVENTdHJpbmciLCJvcHRpb25zIiwicHVzaCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY29weSIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInRpbWVvdXQiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImdldERvbWFpbiIsInN0ciIsInBzbCIsIlVSTCIsImhvc3RuYW1lIiwiZG9tYWluIiwic3RvcmFnZVNldCIsInJlamVjdCIsInNldCIsInN0b3JhZ2VHZXQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxHQUFlO0FBQ2Isc0JBQU8sMkRBQUMsK0RBQUQsT0FBUDtBQUNEOztBQUVEQyx1REFBQSxlQUFnQiwyREFBQyxHQUFELE9BQWhCLEVBQXlCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1DLElBQUksR0FBRyxNQUFiO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxFQUFyQjtBQUNBLE1BQU1DLHVCQUF1QixHQUFHLFVBQVVELFlBQTFDLEMsQ0FBd0Q7O0FBRXhELE1BQU1FLElBQU4sU0FBbUJDLGdEQUFuQixDQUFpQztBQUMvQkMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUFFQyx1QkFBaUIsRUFBRTtB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QTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxlQUFlLHVCQUF1QjtXQUN0QztXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLDJDOzs7O1VDNUZBO1VBQ0EiLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdqcXVlcnkvZGlzdC9qcXVlcnkubWluJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbic7XG5pbXBvcnQgJy4uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lRGlzcGF0Y2hlciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVEaXNwYXRjaGVyJztcblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gPEhvbWVEaXNwYXRjaGVyIC8+O1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuY29uc3QgUkVTVE9SRSA9ICdSRVNUT1JFJztcbmNvbnN0IE5FWFQgPSAnTkVYVCc7XG5jb25zdCBSRU1PVkVEID0gJ1JFTU9WRUQnO1xuY29uc3QgQ0xPU0VEX0hJU1RPUlkgPSAnY2xvc2VkX2hpc3RvcnknO1xuY29uc3QgTlVNQkVSX0hPVVJTID0gMjQ7XG5jb25zdCBUSU1FX1BFUklPRF9UT19DT05TSURFUiA9IDM2MDAwMDAgKiBOVU1CRVJfSE9VUlM7IC8vIGluIG1pY3Jvc2Vjb25kXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlIH07XG4gICAgdGhpcy5vbkNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBjaGFuZ2VzQ2xvc2VkSGlzdG9yeSA9IGNoYW5nZXNbQ0xPU0VEX0hJU1RPUlldO1xuICAgICAgaWYgKGNoYW5nZXNDbG9zZWRIaXN0b3J5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNsb3NlZF9oaXN0b3J5OiBjaGFuZ2VzQ2xvc2VkSGlzdG9yeVsnbmV3VmFsdWUnXSxcbiAgICAgICAgICByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtDTE9TRURfSElTVE9SWV0sIChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IGNsb3NlZF9oaXN0b3J5ID0gcmVzdWx0LmNsb3NlZF9oaXN0b3J5IHx8IFtdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlZF9oaXN0b3J5IH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuZXh0TGlzdDogW10gfSk7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVuZGVyU2F2ZUJvb2xlYW4pIHtcbiAgICAgIHRoaXMuZm9yY2VSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVJdGVtKGtleSkge1xuICAgIGxldCBpdGVtcyA9IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkucmV2ZXJzZSgpO1xuICAgIHRoaXMucmVzdG9yZVRhYihpdGVtcywga2V5LCBSRVNUT1JFKTtcbiAgfVxuXG4gIHJlbW92ZU5leHRJdGVtKGtleSkge1xuICAgIGxldCBpdGVtcyA9IHRoaXMuc3RhdGUubmV4dExpc3Q7XG4gICAgdGhpcy5yZXN0b3JlVGFiKGl0ZW1zLCBrZXksIFJFU1RPUkUpO1xuICB9XG5cbiAgcmVzdG9yZVRhYihpdGVtcywga2V5LCBtZXNzYWdlVHlwZSkge1xuICAgIGNvbnN0IHJlc3RvcmVkVGFiID0gaXRlbXNba2V5XTtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBtZXNzYWdlVHlwZTogbWVzc2FnZVR5cGUsXG4gICAgICB0YWJJZDogcmVzdG9yZWRUYWIudGFiSWQsXG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVJlbmRlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlIH0pO1xuICB9XG5cbiAgZmlsdGVyTGlzdChzZWxlY3RlZExpc3QpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZWxlY3RlZExpc3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBub3cgLSBNYXRoLm1heChpdGVtLnN0YXRpc3RpY3MudXBkYXRlZF9hdCwgaXRlbS5zdGF0aXN0aWNzLmxhc3RfYWN0aXZlX3RpbWVzdGFtcCkgPCBUSU1FX1BFUklPRF9UT19DT05TSURFUlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckxpc3QobGlzdFRvQmVSZW5kZXJlZCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBzZWxlY3RlZExpc3Q7XG4gICAgY29uc3QgTUFYX0xFTkdUSF9USVRMRSA9IDUwO1xuXG4gICAgc3dpdGNoIChsaXN0VG9CZVJlbmRlcmVkKSB7XG4gICAgICBjYXNlIE5FWFQ6XG4gICAgICAgIHNlbGVjdGVkTGlzdCA9IHRoaXMuc3RhdGUubmV4dExpc3QgPyB0aGlzLnN0YXRlLm5leHRMaXN0IDogW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc2VsZWN0ZWRMaXN0ID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSA/IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkgOiBbXTtcbiAgICAgICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0Lm1hcCgod2Vic2l0ZSwgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlbGV0aW9uVGltZSA9IG5ldyBEYXRlKHdlYnNpdGUuZGVsZXRpb25fdGltZSk7XG4gICAgICAgICAgY29uc3QgZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUgPSBkZWxldGlvblRpbWUudG9UaW1lU3RyaW5nKCkuc3BsaXQoJyAnKVswXTtcbiAgICAgICAgICB3ZWJzaXRlLmhvdXJzX2RlbGV0aW9uID0gZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUuc3BsaXQoJzonKVswXTtcbiAgICAgICAgICB3ZWJzaXRlLm1pbnV0ZXNfZGVsZXRpb24gPSBmb3JtYXR0ZWRfZGVsZXRpb25fdGltZS5zcGxpdCgnOicpWzFdO1xuICAgICAgICAgIGlmICh3ZWJzaXRlLnRpdGxlICYmIHdlYnNpdGUudGl0bGUubGVuZ3RoID4gTUFYX0xFTkdUSF9USVRMRSkge1xuICAgICAgICAgICAgd2Vic2l0ZS50aXRsZSA9IHdlYnNpdGUudGl0bGUuc3Vic3RyaW5nKDAsIE1BWF9MRU5HVEhfVElUTEUpLmNvbmNhdCgnLi4uJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB3ZWJzaXRlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgaXNOZXh0ID0gbGlzdFRvQmVSZW5kZXJlZCA9PT0gTkVYVDtcbiAgICBjb25zdCBmaWx0ZXJlZExpc3QgPSB0aGlzLmZpbHRlckxpc3Qoc2VsZWN0ZWRMaXN0KS5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RXZWJzaXRlc30+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmVlblRpdGxlfT5cbiAgICAgICAgICB7aXNOZXh0ID8gJ05leHQgdGFicyB0byBiZSBjbG9zZWQnIDogYExhc3QgY2xvc2VkIHRhYnNgfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtc30+XG4gICAgICAgICAgPExpc3QgZGVuc2U9e3RydWV9PlxuICAgICAgICAgICAge2ZpbHRlcmVkTGlzdC5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxwPntgTm8gdGFicyBjbG9zZWQgaW4gdGhlIGxhc3QgJHtOVU1CRVJfSE9VUlN9IGhvdXJzLmB9PC9wPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgZmlsdGVyZWRMaXN0Lm1hcCgod2Vic2l0ZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZEF2YXRhcldpdGhUaW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpbWVEaXNwbGF5fT5cbiAgICAgICAgICAgICAgICAgICAgICB7YCR7d2Vic2l0ZS5ob3Vyc19kZWxldGlvbn06JHt3ZWJzaXRlLm1pbnV0ZXNfZGVsZXRpb259YH1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9e3dlYnNpdGUudGl0bGV9IHNyYz17d2Vic2l0ZS5mYXZJY29uVXJsfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3dlYnNpdGUudXJsfSBzZWNvbmRhcnk9e3dlYnNpdGUudGl0bGV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH0gLz5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aXNOZXh0ID8gdGhpcy5yZW1vdmVOZXh0SXRlbS5iaW5kKHRoaXMsIGkpIDogdGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcywgaSl9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpc05leHQgPyAnU2tpcCcgOiAnUmVzdG9yZSd9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSA/IHRoaXMuZmlsdGVyTGlzdCh0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5KS5sZW5ndGggOiAwO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2xkVGV4dH0+XG4gICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID8gbnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIDogJ05vJ30gdGFiXG4gICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID09PSAxID8gJycgOiAncyd9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5taWRkbGVUZXh0fT5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID09PSAxID8gJ3dhcycgOiAnd2VyZSd9IGNsb3NlZCBpbiB0aGUgbGFzdHsnICd9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2xkVGV4dH0+IHtgJHtOVU1CRVJfSE9VUlN9IGhvdXJzIWB9IDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICB7dGhpcy5yZW5kZXJMaXN0LmJpbmQodGhpcykoUkVNT1ZFRCl9XG4gICAgICAgIHsvKnt0aGlzLnJlbmRlckxpc3QuYmluZCh0aGlzKShORVhUKX0qL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlua1RvRm9ybX0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNkVUVKSGQwYkw2cnlGdlprMjIwQ29acDdjd3ZGeEVTb3JwczdjbmdrMHdRZnl1LVEvdmlld2Zvcm1cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZXBvcnQgYSBidWcgb3Igc2VuZCB1cyBhIGZlZWRiYWNrP1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIH0sXG4gIGdyZWVuVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGNvbG9yOiAnIzFiOWU3NCcsXG4gICAgYm9yZGVyQm90dG9tOiBgMnB4IHNvbGlkICMxYjllNzRgLFxuICAgIG1heFdpZHRoOiAyMjUsXG4gIH0sXG4gIGJvbGRUZXh0OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB9LFxuICBtaWRkbGVUZXh0OiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygwLjUpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGNvbG9yOiAnIzFiOWU3NCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjMWI5ZTc0JyxcbiAgICBmb250U2l6ZTogMTIsXG4gIH0sXG4gIGl0ZW1UZXh0OiB7XG4gICAgbWF4V2lkdGg6IDIwMCxcbiAgfSxcbiAgdGltZURpc3BsYXk6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE0LFxuICB9LFxuICBncmlkQXZhdGFyV2l0aFRpbWU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIH0sXG4gIGxpc3RXZWJzaXRlczoge1xuICAgIG1hcmdpblRvcDogMjAsXG4gIH0sXG4gIGxpc3RJdGVtczoge1xuICAgIG1heEhlaWdodDogMzAwLFxuICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gIH0sXG4gIGxpbmtUb0Zvcm06IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBsZWZ0OiAnNTUlJyxcbiAgICBmb250U2l6ZTogMTAsXG4gICAgbWFyZ2luVG9wOiAxNSxcbiAgICBtYXhXaWR0aDogJzc1JScsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShIb21lKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4uL1NldHRpbmdzJztcbmltcG9ydCBIb21lIGZyb20gJy4uL0hvbWUnO1xuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhci9BdmF0YXInO1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyL0xpc3RJdGVtQXZhdGFyJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLmpzJztcblxuY2xhc3MgSG9tZURpc3BhdGNoZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgYXBwQmFyVmFsdWU6ICdIT01FJyB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFwcEJhclZhbHVlOiAnSE9NRScgfSk7XG4gICAgbG9nZ2VyKHRoaXMsICdQb3B1cCBvcGVuZWQnKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCwgbmV3VmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXBwQmFyVmFsdWU6IG5ld1ZhbHVlIH0pO1xuICAgIGxvZ2dlcih0aGlzLCAnU3dpdGNoIHRvICcgKyBuZXdWYWx1ZSk7XG4gIH1cblxuICBkaXNwYXRjaFBhZ2UoKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmFwcEJhclZhbHVlKSB7XG4gICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgcmV0dXJuIDxIb21lIC8+O1xuICAgICAgY2FzZSAnU0VUVElOR1MnOlxuICAgICAgICByZXR1cm4gPFNldHRpbmdzIC8+O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyBpcyBhbiBlcnJvciBwYWdlPC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTbmFja2JhclByb3ZpZGVyXG4gICAgICAgIG1heFNuYWNrPXsyfVxuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5ub3RpZmljYXRpb24sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhvbWVDb250YWluZXJ9PlxuICAgICAgICAgIDxQYXBlciBzcXVhcmU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkTG9nb1RhYnN9PlxuICAgICAgICAgICAgICA8QXZhdGFyIGFsdD1cImxvZ29UYWJieVwiIHNyYz17Jy4uLy4uL2Fzc2V0cy9zdGF0aWMvaWNvbnMvdGFiYnkucG5nJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29BdmF0YXJ9IC8+XG4gICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYXBwQmFyVmFsdWUgPyB0aGlzLnN0YXRlLmFwcEJhclZhbHVlIDogJ0hPTUUnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdikgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgdil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmFsbFRhYnN9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiSG9tZVwiIHZhbHVlPXsnSE9NRSd9IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJ9IC8+XG4gICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIlNldHRpbmdzXCIgdmFsdWU9eydTRVRUSU5HUyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJ9IC8+XG4gICAgICAgICAgICAgICAgey8qPFRhYiBsYWJlbD1cIkRlYnVnXCIgdmFsdWU9e1wiREVCVUdcIn0gZGlzYWJsZWQgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYn0vPiovfVxuICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+e3RoaXMuZGlzcGF0Y2hQYWdlKCl9PC9kaXY+XG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lRGlzcGF0Y2hlcjtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgSG9tZURpc3BhdGNoZXIgZnJvbSAnLi9Ib21lRGlzcGF0Y2hlcic7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYi9UYWInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBob21lQ29udGFpbmVyOiB7XG4gICAgbWluV2lkdGg6IDQwMCxcbiAgfSxcbiAgdGFiOiB7XG4gICAgY29sb3I6ICcjMWI5ZTc0JyxcbiAgfSxcbiAgbm90aWZpY2F0aW9uOiB7XG4gICAgbGVmdDogMTUwLFxuICB9LFxuICBncmlkTG9nb1RhYnM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdsZWZ0JyxcbiAgfSxcbiAgYWxsVGFiczoge1xuICAgIG1heFdpZHRoOiAnNzUlJyxcbiAgfSxcbiAgbG9nb0F2YXRhcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcuNSksXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDcuNSksXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShIb21lRGlzcGF0Y2hlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5JztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcbmltcG9ydCBUdW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHVuZSc7XG5pbXBvcnQgeyB3aXRoU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xuaW1wb3J0IHsgUkVMQVhFRCwgRk9DVVNFRCwgQ1VTVE9NSVpFRCwgSU5JVF9GT0NVU0VEX1BST0ZJTEUsIElOSVRfUkVMQVhFRF9QUk9GSUxFIH0gZnJvbSAnLi4vLi4vY29uZmlnL3NldHRpbmdzUHJvZmlsZXMuanMnO1xuXG5jb25zdCBPUFRJTUFMX05VTUJFUl9UQUJTID0gJ3RhcmdldF90YWJzJztcbmNvbnN0IFBPTElDWSA9ICdwb2xpY3knO1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9jdXNlZE1vZGU6IGZhbHNlLFxuICAgICAgcmVsYXhlZE1vZGU6IGZhbHNlLFxuICAgICAgY3VzdG9taXplZEJvb2w6IGZhbHNlLFxuICAgICAgc2V0dGluZ3M6IElOSVRfUkVMQVhFRF9QUk9GSUxFLFxuICAgICAgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5vbkNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBjaGFuZ2VzU2V0dGluZ3MgPSBjaGFuZ2VzWydzZXR0aW5ncyddO1xuICAgICAgY29uc3QgY2hhbmdlc1Byb2ZpbGUgPSBjaGFuZ2VzWydhY3RpdmVfcHJvZmlsZSddO1xuICAgICAgaWYgKGNoYW5nZXNTZXR0aW5ncykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZXR0aW5nczogY2hhbmdlc1NldHRpbmdzWyduZXdWYWx1ZSddLFxuICAgICAgICAgIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VzUHJvZmlsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmb2N1c2VkTW9kZTogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IEZPQ1VTRUQsXG4gICAgICAgICAgcmVsYXhlZE1vZGU6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBSRUxBWEVELFxuICAgICAgICAgIGN1c3RvbWl6ZWRCb29sOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gQ1VTVE9NSVpFRCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnYWN0aXZlX3Byb2ZpbGUnLCAnc2V0dGluZ3MnXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgcHJvZmlsZSA9IHJlc3VsdC5hY3RpdmVfcHJvZmlsZSB8fCBSRUxBWEVEO1xuICAgICAgY29uc3QgZm9jdXNlZE1vZGUgPSBwcm9maWxlID09PSBGT0NVU0VEO1xuICAgICAgY29uc3QgcmVsYXhlZE1vZGUgPSBwcm9maWxlID09PSBSRUxBWEVEO1xuICAgICAgY29uc3QgY3VzdG9taXplZEJvb2wgPSBwcm9maWxlID09PSBDVVNUT01JWkVEO1xuICAgICAgY29uc3Qgc2V0dGluZ3MgPSByZXN1bHQuc2V0dGluZ3MgfHwgSU5JVF9SRUxBWEVEX1BST0ZJTEU7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE1vZGUsXG4gICAgICAgIHJlbGF4ZWRNb2RlLFxuICAgICAgICBjdXN0b21pemVkQm9vbCxcbiAgICAgICAgc2V0dGluZ3MsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5yZW5kZXJTYXZlQm9vbGVhbikge1xuICAgICAgdGhpcy5mb3JjZVJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUJvb2xDaGFuZ2UoY2hhbmdlVHlwZSkge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2VUeXBlOiAnU0VUVElOR1NfUFJPRklMRScsXG4gICAgICBwcm9maWxlOiBjaGFuZ2VUeXBlLFxuICAgIH0pO1xuICAgIGlmIChjaGFuZ2VUeXBlID09PSBSRUxBWEVEIHx8IGNoYW5nZVR5cGUgPT09IEZPQ1VTRUQpIHtcbiAgICAgIHRoaXMubm90aWZ5VXNlcigpO1xuICAgIH1cbiAgfVxuXG4gIGZvcmNlUmVuZGVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZW5kZXJTYXZlQm9vbGVhbjogZmFsc2UgfSk7XG4gIH1cblxuICBoYW5kbGVTYXZlUGFyYW1ldGVycygpIHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBtZXNzYWdlVHlwZTogJ1NFVFRJTkdTX1BBUkFNRVRFUlMnLFxuICAgICAgc2V0dGluZ3M6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgfSk7XG4gICAgdGhpcy5ub3RpZnlVc2VyKCk7XG4gIH1cblxuICBub3RpZnlVc2VyKCkge1xuICAgIHRoaXMucHJvcHMuZW5xdWV1ZVNuYWNrYmFyKCdOZXcgU2V0dGluZ3MgYXJlIHNhdmVkLicsIHtcbiAgICAgIHZhcmlhbnQ6ICdzdWNjZXNzJyxcbiAgICAgIGFuY2hvck9yaWdpbjoge1xuICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICB9LFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiA3NTAsXG4gICAgICBhdXRvSGlkZUR1cmF0aW9uOiAxNTAwLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlUGFyYW1ldGVycyA9IChwYXRoLCBwYXJhbWV0ZXIpID0+IChldmVudCkgPT4ge1xuICAgIGxldCBzZXR0aW5ncyA9IHRoaXMuc3RhdGUuc2V0dGluZ3M7XG4gICAgc2V0dGluZ3NbcGF0aF1bcGFyYW1ldGVyXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2V0dGluZ3M6IHNldHRpbmdzLCByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlucHV0c1BhcmFtZXRlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnT3B0aW1hbCBudW1iZXIgb2YgdGFicyAnLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgICAgIHBhdGg6IFBPTElDWSxcbiAgICAgICAgcGFyYW1ldGVyOiBPUFRJTUFMX05VTUJFUl9UQUJTLFxuICAgICAgICBpbnB1dFByb3BzOiB7IG1pbjogJzEnLCBtYXg6ICcxMDAnLCBzdGVwOiAnMScgfSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBsaXN0SXRlbXNQYXJhbWV0ZXJzID0gaW5wdXRzUGFyYW1ldGVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVBhcmFtZXRlcnMoaXRlbS5wYXRoLCBpdGVtLnBhcmFtZXRlcil9XG4gICAgICAgIHZhbHVlPXtpdGVtLnNvdXJjZVtpdGVtLnBhdGhdW2l0ZW0ucGFyYW1ldGVyXX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIGlucHV0UHJvcHM9e2l0ZW0uaW5wdXRQcm9wc31cbiAgICAgIC8+XG4gICAgKSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmludHJvZHVjdGlvbkJsb2NrfT5cbiAgICAgICAgICA8VHVuZUljb24gLz5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgU2VsZWN0IHRoZSBzdWl0aW5nIG1vZGUgb3IgY3VzdG9taXplIGl0LlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aXZlQmFyfT48L2Rpdj5cbiAgICAgICAgICB7Lyo8aDEgY2xhc3NOYW1lPXtcImJvbGQtdGl0bGVcIn0+U2VsZWN0IFRhYmJ5J3Mgb3BlcmF0aW5nIG1vZGU6PC9oMT4qL31cbiAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NXcmFwcGVyfT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5mb2N1c2VkTW9kZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoRk9DVVNFRCl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGFiZWw9XCJGb2N1c2VkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0Qm9vbGVhbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnJlbGF4ZWRNb2RlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlQm9vbENoYW5nZShSRUxBWEVEKX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsYWJlbD1cIlJlbGF4ZWRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCb29sZWFuc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVCb29sQ2hhbmdlKENVU1RPTUlaRUQpfVxuICAgICAgICAgICAgICBjb250cm9sPXs8Q2hlY2tib3ggY2hlY2tlZD17dGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH0gdmFsdWU9XCJcIiBjb2xvcj1cInByaW1hcnlcIiAvPn1cbiAgICAgICAgICAgICAgbGFiZWw9XCJDdXN0b21pemUgeW91ciBzZXR0aW5ncycgcGFyYW1ldGVyc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NCbG9ja30+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICAgIC8vY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsaXN0SXRlbXNQYXJhbWV0ZXJzfVxuICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRhcnlCdXR0b259XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PXt0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sID8gJ291dGxpbmUtcHJpbWFyeScgOiAncHJpbWFyeSd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVNhdmVQYXJhbWV0ZXJzKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTbmFja2JhcihTZXR0aW5ncyk7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vU2V0dGluZ3MnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHRleHRGaWVsZDoge1xuICAgIG1hcmdpblRvcDogMCxcbiAgICBtYXJnaW5MZWZ0OiAyMCxcbiAgICBtYXJnaW5SaWdodDogMjAsXG4gIH0sXG4gIGFjdGl2ZUJhcjoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gIH0sXG5cbiAgc2V0dGluZ3NXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIG1heEhlaWdodDogJzUwJScsXG4gICAgLy93aWR0aDogJzEwMCUnLFxuICAgIC8vaGVpZ2h0OiAnMTAwdmgnLFxuICB9LFxuICBzZWNvbmRhcnlCdXR0b246IHtcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIC8vbWFyZ2luRG93bjogNSxcbiAgICBjb2xvcjogJyMxYjllNzQnLFxuICAgIGJvcmRlckNvbG9yOiAnIzFiOWU3NCcsXG4gIH0sXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIG1heFdpZHRoOiAxNTAsXG4gIH0sXG4gIGludHJvZHVjdGlvbkJsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIC8vbWFyZ2luVG9wOiAyMCxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE3LFxuICAgIG1hcmdpbkxlZnQ6IDEwLFxuICB9LFxuICBzZXR0aW5nc0Jsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGZpcnN0Qm9vbGVhbnM6IHtcbiAgICBtYXhXaWR0aDogJzQwJScsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShTZXR0aW5ncyk7XG4iLCJjb25zdCBSRUxBWEVEID0gJ3JlbGF4ZWQnO1xuY29uc3QgRk9DVVNFRCA9ICdmb2N1c2VkJztcbmNvbnN0IENVU1RPTUlaRUQgPSAnY3VzdG9taXplZCc7XG5cbmNvbnN0IElOSVRfUkVMQVhFRF9QUk9GSUxFID0ge1xuICBtZW1vcnk6IHtcbiAgICBjYWNoZV9zaXplOiA1LFxuICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxICogMTAwMCxcbiAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogNSAqIDEwMDAsXG4gIH0sXG4gIHBvbGljeToge1xuICAgIHRhcmdldF90YWJzOiAxMixcbiAgICBzY29yZV90aHJlc2hvbGQ6IDUwLFxuICAgIGRlY2F5OiAwLjgsXG4gICAgbWluX3RpbWU6IDMgKiAxMDAwLFxuXG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBwaW5uZWQ6IGZhbHNlLFxuICAgIGF1ZGlibGU6IGZhbHNlLFxuICB9LFxuICBzY29yZXI6IHtcbiAgICBtaW5fYWN0aXZlOiA1LCAvLyAqIDYwICogMTAwMCxcbiAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogNjAgKiAxMDAwLFxuICAgIGNhY2hlZF9kZWNheTogMC43LFxuICB9LFxufTtcblxuY29uc3QgSU5JVF9GT0NVU0VEX1BST0ZJTEUgPSB7XG4gIG1lbW9yeToge1xuICAgIGNhY2hlX3NpemU6IDUsXG4gICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEgKiAxMDAwLFxuICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiA1ICogMTAwMCxcbiAgfSxcbiAgcG9saWN5OiB7XG4gICAgdGFyZ2V0X3RhYnM6IDUsXG4gICAgc2NvcmVfdGhyZXNob2xkOiA1MCxcbiAgICBkZWNheTogMC44LFxuICAgIG1pbl90aW1lOiAzICogMTAwMCxcblxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgcGlubmVkOiBmYWxzZSxcbiAgICBhdWRpYmxlOiBmYWxzZSxcbiAgfSxcbiAgc2NvcmVyOiB7XG4gICAgbWluX2FjdGl2ZTogNSwgLy8qIDYwICogMTAwMCxcbiAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogNjAgKiAxMDAwLFxuICAgIGNhY2hlZF9kZWNheTogMC43LFxuICB9LFxufTtcblxuZXhwb3J0IHsgUkVMQVhFRCwgRk9DVVNFRCwgQ1VTVE9NSVpFRCwgSU5JVF9GT0NVU0VEX1BST0ZJTEUsIElOSVRfUkVMQVhFRF9QUk9GSUxFIH07XG4iLCJpbXBvcnQgKiBhcyBwc2wgZnJvbSAncHNsJztcblxuY29uc3QgbG9nZ2VyID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgaWYgKEVOViA9PT0gJ2RlYnVnJyB8fCBFTlYgPT09ICdkZXYnKSB7XG4gICAgbGV0IGRlZmF1bHRfZm9ybWF0ID0gWydmb250LXdlaWdodDppbml0aWFsOyBjb2xvcjpibGFjazsnXTtcbiAgICBsZXQgcHJlID0gJyVjJyArIG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSArICclYyc7XG4gICAgbGV0IG9wdGlvbnMgPSBbJ2ZvbnQtd2VpZ2h0OmxpZ2h0ZXI7IGNvbG9yOkxpZ2h0U2xhdGVHcmV5OyddO1xuICAgIG9wdGlvbnMucHVzaChkZWZhdWx0X2Zvcm1hdCk7XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJlICs9ICcgfCAlYycgKyBhcmdzWzBdLmNvbnN0cnVjdG9yLm5hbWUgKyAnJWMgfCAnO1xuICAgICAgcHJlICs9IGFyZ3NbMV07XG4gICAgICBvcHRpb25zLnB1c2goJ2NvbG9yOiMxZGE4N2M7IGZvbnQtd2VpZ2h0OmJvbGRlcicpO1xuICAgICAgb3B0aW9ucy5wdXNoKGRlZmF1bHRfZm9ybWF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlICs9ICcgfCAnICsgYXJnc1swXTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJlLCAuLi5vcHRpb25zKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gY29weShvYmopIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbmZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmZ1bmN0aW9uIGdldERvbWFpbihzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHNsLnBhcnNlKG5ldyBVUkwoc3RyKS5ob3N0bmFtZSkuZG9tYWluO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0b3JhZ2VTZXQoYXJncykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChhcmdzLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdG9yYWdlR2V0KGFyZ3MpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoYXJncywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5sb2dnZXIoJ1N0YXJ0aW5nIGluICcgKyBFTlYgKyAnIGVudi4nKTtcbmV4cG9ydCB7IGxvZ2dlciwgY29weSwgdGltZW91dCwgZ2V0RG9tYWluLCBzdG9yYWdlR2V0LCBzdG9yYWdlU2V0IH07XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvZG8tbGlzdC1jb250YWluZXIge1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFiOWU3NDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgY29sb3I6ICMxYjllNzQ7XFxuICBib3JkZXItY29sb3I6ICMxYjllNzQ7XFxufVxcblxcbi5ib2xkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicG9wdXBcIjogMFxufTtcblxudmFyIGRlZmVycmVkTW9kdWxlcyA9IFtcblx0W1wiLi9zcmMvYXBwL3BvcHVwLmpzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wc2xfaW5kZXhfanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfQXZhdGFyX0F2YXRhcl9qcy1ub2RlX21vZHVsZXNfbWF0ZXJpYWwtdWlfY29yZV9UeXBvZ3JhcC05NjAxNmFcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSAoKSA9PiB7XG5cbn07XG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIHJlc2V0IHN0YXJ0dXAgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIG1vcmUgc3RhcnR1cCBjb2RlIGlzIGFkZGVkXG5cdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHR9XG5cdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbM107XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuXHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcblx0fVxuXG5cdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3Rcblx0aWYoZXhlY3V0ZU1vZHVsZXMpIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuXG5cdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbn07XG5cbnZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wdGtfY2hyb21lXCJdID0gd2luZG93W1wid2VicGFja0pzb25wdGtfY2hyb21lXCJdIHx8IFtdO1xudmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbmpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xudmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uOyIsIi8vIHJ1biBzdGFydHVwXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9