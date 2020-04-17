(window["webpackJsonptk_chrome"] = window["webpackJsonptk_chrome"] || []).push([["popup"],{

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
const TIME_PERIOD_TO_CONSIDER = 3600000 * 2; // in microsecond

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
    }, isNext ? 'Next tabs to be closed' : 'Tabs closed today'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__.default, {
      dense: true,
      className: classes.listItems
    }, filteredList.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No tabs closed in the last 2 hours.") : filteredList.map((website, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__.default, {
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
      className: "card todo-list-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    }, " 2 hours! ")), this.renderList.bind(this)(REMOVED)));
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
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/Tabs.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/Tab.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Settings */ "./src/components/Settings/index.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Home */ "./src/components/Home/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");








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
  }

  handleChange(event, newValue) {
    this.setState({
      appBarValue: newValue
    });
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__.default, {
      square: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__.default, {
      value: this.state.appBarValue ? this.state.appBarValue : 'HOME',
      onChange: (e, v) => this.handleChange(e, v)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6__.default, {
      label: "Home",
      value: 'HOME',
      className: classes.tab
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6__.default, {
      label: "Settings",
      value: 'SETTINGS',
      className: classes.tab
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, this.dispatchPage()))));
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
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Tune */ "./node_modules/@material-ui/icons/Tune.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const IS_RELAXED_MODE = 'IS_RELAXED_MODE';
const IS_FOCUSED_MODE = 'IS_FOCUSED_MODE';
const IS_CUSTOMIZED_MODE = 'IS_CUSTOMIZED_MODE';
const OPTIMAL_NUMBER_TABS = 'target_tabs';

class Settings extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChangeParameters", parameter => event => {
      let settings = this.state.settings;
      settings['policy'][parameter] = event.target.value;
      this.setState({
        settings: settings,
        renderSaveBoolean: true
      });
    });

    this.state = {
      open: false,
      beginHour: 0,
      endHour: 24,
      focusedMode: false,
      relaxedMode: false,
      customizedBool: false,
      settings: {
        policy: {
          target_tabs: 100
        }
      },
      renderSaveBoolean: false
    };

    this.onChangedCallback = function (changes) {
      const changesSettings = changes['settings'];

      if (changesSettings) {
        this.setState({
          settings: changesSettings['newValue'],
          renderSaveBoolean: true
        });
      }
    }.bind(this);
  }

  componentDidMount() {
    chrome.storage.local.get(['beginHour', 'endHour', 'focusedMode', 'relaxedMode', 'customizedBool', 'settings'], result => {
      const beginHour = result.beginHour || 0;
      const endHour = result.endHour || 24;
      const focusedMode = result.focusedMode || false;
      let relaxedMode = result.relaxedMode || false;
      const customizedBool = result.customizedBool || false; // if (!customizedBool && !relaxedMode && !customizedBool){
      //     relaxedMode = true;
      // }

      const settings = result.settings || {
        policy: {
          target_tabs: 100
        }
      };
      this.setState({
        beginHour,
        endHour,
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
    if (prevState.beginHour !== this.state.beginHour || prevState.endHour !== this.state.endHour) {
      this.saveActiveHoursToLocal();
    }

    if (prevState.relaxedMode !== this.state.relaxedMode || prevState.focusedMode !== this.state.focusedMode || prevState.customizedBool !== this.state.customizedBool) {
      this.saveSettingsToState();
      this.saveCasesBool();
    }

    if (this.state.renderSaveBoolean) {
      this.forceRender();
    }
  }

  saveActiveHoursToLocal() {
    chrome.storage.local.set({
      beginHour: this.state.beginHour,
      endHour: this.state.endHour
    });
  }

  handleBoolChange(changeType) {
    this.setState({
      relaxedMode: changeType === IS_RELAXED_MODE,
      focusedMode: changeType === IS_FOCUSED_MODE,
      customizedBool: changeType === IS_CUSTOMIZED_MODE
    });

    if (changeType === IS_RELAXED_MODE || changeType === IS_FOCUSED_MODE) {
      this.notifyUser();
    }
  }

  saveSettingsToState() {
    let settings = this.state.settings;

    if (this.state.focusedMode) {
      settings['policy']['target_tabs'] = 5;
    } else if (this.state.relaxedMode) {
      settings['policy']['target_tabs'] = 12;
    }

    if (!this.state.customizedBool) {
      chrome.runtime.sendMessage({
        messageType: 'SETTINGS',
        settings: settings
      });
    }
  }

  saveCasesBool() {
    chrome.storage.local.set({
      relaxedMode: this.state.relaxedMode,
      focusedMode: this.state.focusedMode,
      customizedBool: this.state.customizedBool
    });
  }

  forceRender() {
    this.setState({
      renderSaveBoolean: false
    });
  }

  handleSaveParameters() {
    chrome.runtime.sendMessage({
      messageType: 'SETTINGS',
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
      autoHideDuration: 2000
    });
  }

  render() {
    const {
      classes
    } = this.props;
    const inputsParameters = [{
      label: 'Optimal number of tabs ',
      value: this.state.settings.policy.target_tabs,
      onChange: OPTIMAL_NUMBER_TABS,
      inputProps: {
        min: '1',
        max: '100',
        step: '1'
      }
    }];
    const listItemsParameters = inputsParameters.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__.default, {
      key: index,
      disabled: !this.state.customizedBool,
      label: item.label,
      onChange: this.handleChangeParameters(item.onChange),
      value: item.value,
      className: classes.textField,
      type: "number",
      inputProps: item.inputProps
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card todo-list-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.introductionBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_4__.default, {
      variant: "h3",
      className: classes.title
    }, "Select the suiting mode or customize it.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.textField
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.activeBar
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__.default, {
      className: classes.settingsWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__.default, {
        checked: this.state.focusedMode,
        onChange: () => this.handleBoolChange(IS_FOCUSED_MODE),
        value: "secondary",
        color: "primary"
      }),
      label: "Focused",
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__.default, {
        checked: this.state.relaxedMode,
        onChange: () => this.handleBoolChange(IS_RELAXED_MODE),
        value: "secondary",
        color: "primary"
      }),
      label: "Relaxed",
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__.default, {
      onChange: () => this.handleBoolChange(IS_CUSTOMIZED_MODE),
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__.default, {
        checked: this.state.customizedBool,
        value: "",
        color: "primary"
      }),
      label: "Customize your settings' parameters"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.settingsBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_8__.default //className={classes.content}
    , {
      required: true,
      fullWidth: true
    }, listItemsParameters), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
      disabled: !this.state.customizedBool,
      className: classes.secondaryButton,
      variant: this.state.customizedBool ? 'outline-primary' : 'primary',
      onClick: () => this.handleSaveParameters()
    }, "Save")))))));
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

},[["./src/app/popup.js","vendors-node_modules_material-ui_core_Typography_Typography_js-node_modules_material-ui_core_-f2acaa","vendors-node_modules_jquery_dist_jquery_js","jquery"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzcz9lYTVkIl0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJFU1RPUkUiLCJORVhUIiwiUkVNT1ZFRCIsIkNMT1NFRF9ISVNUT1JZIiwiVElNRV9QRVJJT0RfVE9fQ09OU0lERVIiLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInJlbmRlclNhdmVCb29sZWFuIiwib25DaGFuZ2VkQ2FsbGJhY2siLCJjaGFuZ2VzIiwiY2hhbmdlc0Nsb3NlZEhpc3RvcnkiLCJzZXRTdGF0ZSIsImNsb3NlZF9oaXN0b3J5IiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwicmVzdWx0IiwibmV4dExpc3QiLCJvbkNoYW5nZWQiLCJhZGRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlTGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJmb3JjZVJlbmRlciIsInJlbW92ZUl0ZW0iLCJrZXkiLCJpdGVtcyIsInJldmVyc2UiLCJyZXN0b3JlVGFiIiwicmVtb3ZlTmV4dEl0ZW0iLCJtZXNzYWdlVHlwZSIsInJlc3RvcmVkVGFiIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidGFiSWQiLCJmaWx0ZXJMaXN0Iiwic2VsZWN0ZWRMaXN0Iiwibm93IiwiRGF0ZSIsImZpbHRlciIsIml0ZW0iLCJNYXRoIiwibWF4Iiwic3RhdGlzdGljcyIsInVwZGF0ZWRfYXQiLCJsYXN0X2FjdGl2ZV90aW1lc3RhbXAiLCJyZW5kZXJMaXN0IiwibGlzdFRvQmVSZW5kZXJlZCIsImNsYXNzZXMiLCJNQVhfTEVOR1RIX1RJVExFIiwibWFwIiwid2Vic2l0ZSIsImkiLCJkZWxldGlvblRpbWUiLCJkZWxldGlvbl90aW1lIiwiZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUiLCJ0b1RpbWVTdHJpbmciLCJzcGxpdCIsImhvdXJzX2RlbGV0aW9uIiwibWludXRlc19kZWxldGlvbiIsInRpdGxlIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY29uY2F0IiwiaXNOZXh0IiwiZmlsdGVyZWRMaXN0IiwibGlzdFdlYnNpdGVzIiwiZ3JlZW5UaXRsZSIsImxpc3RJdGVtcyIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsInVybCIsIml0ZW1UZXh0IiwiYnV0dG9uIiwicmVuZGVyIiwibnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIiwiYm9sZFRleHQiLCJtaWRkbGVUZXh0Iiwic3R5bGVzIiwidGhlbWUiLCJmb250U2l6ZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY29sb3IiLCJib3JkZXJCb3R0b20iLCJtYXhXaWR0aCIsImZvbnRXZWlnaHQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5Ub3AiLCJ3aXRoU3R5bGVzIiwiSG9tZURpc3BhdGNoZXIiLCJhcHBCYXJWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJkaXNwYXRjaFBhZ2UiLCJyb290Iiwibm90aWZpY2F0aW9uIiwiaG9tZUNvbnRhaW5lciIsImUiLCJ2IiwidGFiIiwibWluV2lkdGgiLCJsZWZ0IiwiSVNfUkVMQVhFRF9NT0RFIiwiSVNfRk9DVVNFRF9NT0RFIiwiSVNfQ1VTVE9NSVpFRF9NT0RFIiwiT1BUSU1BTF9OVU1CRVJfVEFCUyIsIlNldHRpbmdzIiwicGFyYW1ldGVyIiwic2V0dGluZ3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wZW4iLCJiZWdpbkhvdXIiLCJlbmRIb3VyIiwiZm9jdXNlZE1vZGUiLCJyZWxheGVkTW9kZSIsImN1c3RvbWl6ZWRCb29sIiwicG9saWN5IiwidGFyZ2V0X3RhYnMiLCJjaGFuZ2VzU2V0dGluZ3MiLCJzYXZlQWN0aXZlSG91cnNUb0xvY2FsIiwic2F2ZVNldHRpbmdzVG9TdGF0ZSIsInNhdmVDYXNlc0Jvb2wiLCJzZXQiLCJoYW5kbGVCb29sQ2hhbmdlIiwiY2hhbmdlVHlwZSIsIm5vdGlmeVVzZXIiLCJoYW5kbGVTYXZlUGFyYW1ldGVycyIsImVucXVldWVTbmFja2JhciIsInZhcmlhbnQiLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJhdXRvSGlkZUR1cmF0aW9uIiwiaW5wdXRzUGFyYW1ldGVycyIsImxhYmVsIiwib25DaGFuZ2UiLCJpbnB1dFByb3BzIiwibWluIiwic3RlcCIsImxpc3RJdGVtc1BhcmFtZXRlcnMiLCJpbmRleCIsImhhbmRsZUNoYW5nZVBhcmFtZXRlcnMiLCJ0ZXh0RmllbGQiLCJpbnRyb2R1Y3Rpb25CbG9jayIsImFjdGl2ZUJhciIsInNldHRpbmdzV3JhcHBlciIsImZpcnN0Qm9vbGVhbnMiLCJzZXR0aW5nc0Jsb2NrIiwic2Vjb25kYXJ5QnV0dG9uIiwid2l0aFNuYWNrYmFyIiwianVzdGlmeUNvbnRlbnQiLCJtYXhIZWlnaHQiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxHQUFULEdBQWU7QUFDZCxzQkFBTywyREFBQywrREFBRCxPQUFQO0FBQ0E7O0FBRURDLHVEQUFBLGVBQWdCLDJEQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcsVUFBVSxDQUExQyxDLENBQTZDOztBQUU3QyxNQUFNQyxJQUFOLFNBQW1CQyxnREFBbkIsQ0FBaUM7QUFDL0JDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFBRUMsdUJBQWlCLEVBQUU7QUFBckIsS0FBYjs7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QixVQUFVQyxPQUFWLEVBQW1CO0FBQzFDLFlBQU1DLG9CQUFvQixHQUFHRCxPQUFPLENBQUNULGNBQUQsQ0FBcEM7O0FBQ0EsVUFBSVUsb0JBQUosRUFBMEI7QUFDeEIsYUFBS0MsUUFBTCxDQUFjO0FBQ1pDLHdCQUFjLEVBQUVGLG9CQUFvQixDQUFDLFVBQUQsQ0FEeEI7QUFFWkgsMkJBQWlCLEVBQUU7QUFGUCxTQUFkO0FBSUQ7QUFDRixLQVJ3QixDQVF2Qk0sSUFSdUIsQ0FRbEIsSUFSa0IsQ0FBekI7QUFTRDs7QUFFREMsbUJBQWlCLEdBQUc7QUFDbEJDLFVBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxLQUFmLENBQXFCQyxHQUFyQixDQUF5QixDQUFDbEIsY0FBRCxDQUF6QixFQUE0Q21CLE1BQUQsSUFBWTtBQUNyRCxZQUFNUCxjQUFjLEdBQUdPLE1BQU0sQ0FBQ1AsY0FBUCxJQUF5QixFQUFoRDtBQUNBLFdBQUtELFFBQUwsQ0FBYztBQUFFQztBQUFGLE9BQWQ7QUFDRCxLQUhEO0FBSUEsU0FBS0QsUUFBTCxDQUFjO0FBQUVTLGNBQVEsRUFBRTtBQUFaLEtBQWQ7QUFDQUwsVUFBTSxDQUFDQyxPQUFQLENBQWVLLFNBQWYsQ0FBeUJDLFdBQXpCLENBQXFDLEtBQUtkLGlCQUExQztBQUNEOztBQUVEZSxzQkFBb0IsR0FBRztBQUNyQlIsVUFBTSxDQUFDQyxPQUFQLENBQWVLLFNBQWYsQ0FBeUJHLGNBQXpCLENBQXdDLEtBQUtoQixpQkFBN0M7QUFDRDs7QUFFRGlCLG9CQUFrQixDQUFDQyxTQUFELEVBQVlDLFNBQVosRUFBdUI7QUFDdkMsUUFBSSxLQUFLckIsS0FBTCxDQUFXQyxpQkFBZixFQUFrQztBQUNoQyxXQUFLcUIsV0FBTDtBQUNEO0FBQ0Y7O0FBRURDLFlBQVUsQ0FBQ0MsR0FBRCxFQUFNO0FBQ2QsUUFBSUMsS0FBSyxHQUFHLEtBQUt6QixLQUFMLENBQVdNLGNBQVgsQ0FBMEJvQixPQUExQixFQUFaO0FBQ0EsU0FBS0MsVUFBTCxDQUFnQkYsS0FBaEIsRUFBdUJELEdBQXZCLEVBQTRCakMsT0FBNUI7QUFDRDs7QUFFRHFDLGdCQUFjLENBQUNKLEdBQUQsRUFBTTtBQUNsQixRQUFJQyxLQUFLLEdBQUcsS0FBS3pCLEtBQUwsQ0FBV2MsUUFBdkI7QUFDQSxTQUFLYSxVQUFMLENBQWdCRixLQUFoQixFQUF1QkQsR0FBdkIsRUFBNEJqQyxPQUE1QjtBQUNEOztBQUVEb0MsWUFBVSxDQUFDRixLQUFELEVBQVFELEdBQVIsRUFBYUssV0FBYixFQUEwQjtBQUNsQyxVQUFNQyxXQUFXLEdBQUdMLEtBQUssQ0FBQ0QsR0FBRCxDQUF6QjtBQUNBZixVQUFNLENBQUNzQixPQUFQLENBQWVDLFdBQWYsQ0FBMkI7QUFDekJILGlCQUFXLEVBQUVBLFdBRFk7QUFFekJJLFdBQUssRUFBRUgsV0FBVyxDQUFDRztBQUZNLEtBQTNCO0FBSUQ7O0FBRURYLGFBQVcsR0FBRztBQUNaLFNBQUtqQixRQUFMLENBQWM7QUFBRUosdUJBQWlCLEVBQUU7QUFBckIsS0FBZDtBQUNEOztBQUVEaUMsWUFBVSxDQUFDQyxZQUFELEVBQWU7QUFDdkIsVUFBTUMsR0FBRyxHQUFHQyxJQUFJLENBQUNELEdBQUwsRUFBWjtBQUNBLFdBQU9ELFlBQVksQ0FBQ0csTUFBYixDQUFxQkMsSUFBRCxJQUFVO0FBQ25DLGFBQ0VILEdBQUcsR0FDREksSUFBSSxDQUFDQyxHQUFMLENBQ0VGLElBQUksQ0FBQ0csVUFBTCxDQUFnQkMsVUFEbEIsRUFFRUosSUFBSSxDQUFDRyxVQUFMLENBQWdCRSxxQkFGbEIsQ0FERixHQUtBakQsdUJBTkY7QUFRRCxLQVRNLENBQVA7QUFVRDs7QUFFRGtELFlBQVUsQ0FBQ0MsZ0JBQUQsRUFBbUI7QUFDM0IsVUFBTTtBQUFFQztBQUFGLFFBQWMsS0FBS2hELEtBQXpCO0FBRUEsUUFBSW9DLFlBQUo7QUFDQSxVQUFNYSxnQkFBZ0IsR0FBRyxFQUF6Qjs7QUFFQSxZQUFRRixnQkFBUjtBQUNFLFdBQUt0RCxJQUFMO0FBQ0UyQyxvQkFBWSxHQUFHLEtBQUtuQyxLQUFMLENBQVdjLFFBQVgsR0FBc0IsS0FBS2QsS0FBTCxDQUFXYyxRQUFqQyxHQUE0QyxFQUEzRDtBQUNBOztBQUNGO0FBQ0VxQixvQkFBWSxHQUFHLEtBQUtuQyxLQUFMLENBQVdNLGNBQVgsR0FDWCxLQUFLTixLQUFMLENBQVdNLGNBREEsR0FFWCxFQUZKO0FBR0E2QixvQkFBWSxHQUFHQSxZQUFZLENBQUNjLEdBQWIsQ0FBaUIsQ0FBQ0MsT0FBRCxFQUFVQyxDQUFWLEtBQWdCO0FBQzlDLGdCQUFNQyxZQUFZLEdBQUcsSUFBSWYsSUFBSixDQUFTYSxPQUFPLENBQUNHLGFBQWpCLENBQXJCO0FBQ0EsZ0JBQU1DLHVCQUF1QixHQUFHRixZQUFZLENBQ3pDRyxZQUQ2QixHQUU3QkMsS0FGNkIsQ0FFdkIsR0FGdUIsRUFFbEIsQ0FGa0IsQ0FBaEM7QUFHQU4saUJBQU8sQ0FBQ08sY0FBUixHQUF5QkgsdUJBQXVCLENBQUNFLEtBQXhCLENBQThCLEdBQTlCLEVBQW1DLENBQW5DLENBQXpCO0FBQ0FOLGlCQUFPLENBQUNRLGdCQUFSLEdBQTJCSix1QkFBdUIsQ0FBQ0UsS0FBeEIsQ0FBOEIsR0FBOUIsRUFBbUMsQ0FBbkMsQ0FBM0I7O0FBQ0EsY0FBSU4sT0FBTyxDQUFDUyxLQUFSLElBQWlCVCxPQUFPLENBQUNTLEtBQVIsQ0FBY0MsTUFBZCxHQUF1QlosZ0JBQTVDLEVBQThEO0FBQzVERSxtQkFBTyxDQUFDUyxLQUFSLEdBQWdCVCxPQUFPLENBQUNTLEtBQVIsQ0FDYkUsU0FEYSxDQUNILENBREcsRUFDQWIsZ0JBREEsRUFFYmMsTUFGYSxDQUVOLEtBRk0sQ0FBaEI7QUFHRDs7QUFDRCxpQkFBT1osT0FBUDtBQUNELFNBYmMsQ0FBZjtBQVJKOztBQXVCQSxVQUFNYSxNQUFNLEdBQUdqQixnQkFBZ0IsS0FBS3RELElBQXBDO0FBQ0EsVUFBTXdFLFlBQVksR0FBRyxLQUFLOUIsVUFBTCxDQUFnQkMsWUFBaEIsRUFBOEJULE9BQTlCLEVBQXJCO0FBQ0Esd0JBQ0U7QUFBSyxlQUFTLEVBQUVxQixPQUFPLENBQUNrQjtBQUF4QixvQkFDRSwyREFBQyxpRUFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixlQUFTLEVBQUVsQixPQUFPLENBQUNtQjtBQUE1QyxPQUNHSCxNQUFNLEdBQUcsd0JBQUgsR0FBOEIsbUJBRHZDLENBREYsZUFJRSxxRkFDRSwyREFBQywyREFBRDtBQUFNLFdBQUssRUFBRSxJQUFiO0FBQW1CLGVBQVMsRUFBRWhCLE9BQU8sQ0FBQ29CO0FBQXRDLE9BQ0dILFlBQVksQ0FBQ0osTUFBYixLQUF3QixDQUF4QixnQkFDQyw0R0FERCxHQUdDSSxZQUFZLENBQUNmLEdBQWIsQ0FBaUIsQ0FBQ0MsT0FBRCxFQUFVQyxDQUFWLGtCQUNmLDJEQUFDLCtEQUFEO0FBQVUsU0FBRyxFQUFFQTtBQUFmLG9CQUNFO0FBQUssZUFBUyxFQUFFSixPQUFPLENBQUNxQjtBQUF4QixvQkFDRSwyREFBQyxpRUFBRDtBQUFZLGVBQVMsRUFBRXJCLE9BQU8sQ0FBQ3NCO0FBQS9CLE9BQ0ksR0FBRW5CLE9BQU8sQ0FBQ08sY0FBZSxJQUFHUCxPQUFPLENBQUNRLGdCQUFpQixFQUR6RCxDQURGLGVBSUUsMkRBQUMscUVBQUQscUJBQ0UsMkRBQUMsNkRBQUQ7QUFBUSxTQUFHLEVBQUVSLE9BQU8sQ0FBQ1MsS0FBckI7QUFBNEIsU0FBRyxFQUFFVCxPQUFPLENBQUNvQjtBQUF6QyxNQURGLENBSkYsQ0FERixlQVNFLDJEQUFDLG1FQUFEO0FBQ0UsYUFBTyxFQUFFcEIsT0FBTyxDQUFDcUIsR0FEbkI7QUFFRSxlQUFTLEVBQUVyQixPQUFPLENBQUNTLEtBRnJCO0FBR0UsZUFBUyxFQUFFWixPQUFPLENBQUN5QjtBQUhyQixNQVRGLGVBY0UsMkRBQUMsOEVBQUQscUJBQ0UsMkRBQUMsMkRBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLGFBQU8sRUFDTFQsTUFBTSxHQUNGLEtBQUtuQyxjQUFMLENBQW9CckIsSUFBcEIsQ0FBeUIsSUFBekIsRUFBK0I0QyxDQUEvQixDQURFLEdBRUYsS0FBSzVCLFVBQUwsQ0FBZ0JoQixJQUFoQixDQUFxQixJQUFyQixFQUEyQjRDLENBQTNCLENBTFI7QUFPRSxhQUFPLEVBQUMsaUJBUFY7QUFRRSxlQUFTLEVBQUVKLE9BQU8sQ0FBQzBCO0FBUnJCLE9BVUdWLE1BQU0sR0FBRyxNQUFILEdBQVksU0FWckIsQ0FERixDQWRGLENBREYsQ0FKSixDQURGLENBSkYsQ0FERjtBQThDRDs7QUFFRFcsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFM0I7QUFBRixRQUFjLEtBQUtoRCxLQUF6QjtBQUNBLFVBQU00RSx3QkFBd0IsR0FBRyxLQUFLM0UsS0FBTCxDQUFXTSxjQUFYLEdBQzdCLEtBQUs0QixVQUFMLENBQWdCLEtBQUtsQyxLQUFMLENBQVdNLGNBQTNCLEVBQTJDc0QsTUFEZCxHQUU3QixDQUZKO0FBR0Esd0JBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNFLDJEQUFDLGlFQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQXlCLGVBQVMsRUFBRWIsT0FBTyxDQUFDWTtBQUE1QyxvQkFDRSwyREFBQyxpRUFBRDtBQUFZLGVBQVMsRUFBRVosT0FBTyxDQUFDNkI7QUFBL0IsT0FDR0Qsd0JBQXdCLEdBQUdBLHdCQUFILEdBQThCLElBRHpELFVBRUdBLHdCQUF3QixLQUFLLENBQTdCLEdBQWlDLEVBQWpDLEdBQXNDLEdBRnpDLENBREYsZUFLRSwyREFBQyxpRUFBRDtBQUFZLGVBQVMsRUFBRTVCLE9BQU8sQ0FBQzhCO0FBQS9CLE9BQ0csR0FESCxFQUVHRix3QkFBd0IsS0FBSyxDQUE3QixHQUFpQyxLQUFqQyxHQUF5QyxNQUY1Qyx5QkFHTyxHQUhQLENBTEYsZUFVRSwyREFBQyxpRUFBRDtBQUFZLGVBQVMsRUFBRTVCLE9BQU8sQ0FBQzZCO0FBQS9CLG9CQVZGLENBREYsRUFhRyxLQUFLL0IsVUFBTCxDQUFnQnRDLElBQWhCLENBQXFCLElBQXJCLEVBQTJCZCxPQUEzQixDQWJILENBREYsQ0FERjtBQW9CRDs7QUE5SzhCOztBQWlMakMsaUVBQWVHLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTUE7QUFFQTs7QUFFQSxNQUFNa0YsTUFBTSxHQUFJQyxLQUFELEtBQVk7QUFDekJwQixPQUFLLEVBQUU7QUFDTHFCLFlBQVEsRUFBRSxFQURMO0FBRUxDLFdBQU8sRUFBRSxNQUZKO0FBR0xDLGlCQUFhLEVBQUU7QUFIVixHQURrQjtBQU16QmhCLFlBQVUsRUFBRTtBQUNWYyxZQUFRLEVBQUUsRUFEQTtBQUVWQyxXQUFPLEVBQUUsTUFGQztBQUdWQyxpQkFBYSxFQUFFLEtBSEw7QUFJVkMsU0FBSyxFQUFFLFNBSkc7QUFLVkMsZ0JBQVksRUFBRyxtQkFMTDtBQU1WQyxZQUFRLEVBQUU7QUFOQSxHQU5hO0FBY3pCVCxVQUFRLEVBQUU7QUFDUlUsY0FBVSxFQUFFO0FBREosR0FkZTtBQWlCekJULFlBQVUsRUFBRTtBQUNWVSxjQUFVLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjLEdBQWQsQ0FERjtBQUVWQyxlQUFXLEVBQUVWLEtBQUssQ0FBQ1MsT0FBTixDQUFjLEdBQWQ7QUFGSCxHQWpCYTtBQXFCekJmLFFBQU0sRUFBRTtBQUNOVSxTQUFLLEVBQUUsU0FERDtBQUVOTyxlQUFXLEVBQUUsU0FGUDtBQUdOVixZQUFRLEVBQUU7QUFISixHQXJCaUI7QUEwQnpCUixVQUFRLEVBQUU7QUFDUmEsWUFBUSxFQUFFO0FBREYsR0ExQmU7QUE2QnpCaEIsYUFBVyxFQUFFO0FBQ1hpQixjQUFVLEVBQUUsTUFERDtBQUVYTixZQUFRLEVBQUU7QUFGQyxHQTdCWTtBQWlDekJaLG9CQUFrQixFQUFFO0FBQ2xCYSxXQUFPLEVBQUUsTUFEUztBQUVsQkMsaUJBQWEsRUFBRTtBQUZHLEdBakNLO0FBcUN6QmpCLGNBQVksRUFBRTtBQUNaMEIsYUFBUyxFQUFFO0FBREM7QUFyQ1csQ0FBWixDQUFmOztBQXlDQSxpRUFBZUMsaUVBQVUsQ0FBQ2QsTUFBRCxDQUFWLENBQW1CbEYsMENBQW5CLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1pRyxjQUFOLFNBQTZCaEcsZ0RBQTdCLENBQTJDO0FBQ3pDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQUU4RixpQkFBVyxFQUFFO0FBQWYsS0FBYjtBQUNEOztBQUVEdEYsbUJBQWlCLEdBQUc7QUFDbEIsU0FBS0gsUUFBTCxDQUFjO0FBQUV5RixpQkFBVyxFQUFFO0FBQWYsS0FBZDtBQUNEOztBQUVEQyxjQUFZLENBQUNDLEtBQUQsRUFBUUMsUUFBUixFQUFrQjtBQUM1QixTQUFLNUYsUUFBTCxDQUFjO0FBQUV5RixpQkFBVyxFQUFFRztBQUFmLEtBQWQ7QUFDRDs7QUFFREMsY0FBWSxHQUFHO0FBQ2IsWUFBUSxLQUFLbEcsS0FBTCxDQUFXOEYsV0FBbkI7QUFDRSxXQUFLLE1BQUw7QUFDRSw0QkFBTywyREFBQywwQ0FBRCxPQUFQOztBQUNGLFdBQUssVUFBTDtBQUNFLDRCQUFPLDJEQUFDLDhDQUFELE9BQVA7O0FBQ0Y7QUFDRSw0QkFBTyxnR0FBUDtBQU5KO0FBUUQ7O0FBRURwQixRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUUzQjtBQUFGLFFBQWMsS0FBS2hELEtBQXpCO0FBQ0Esd0JBQ0UsMkRBQUMsdURBQUQ7QUFDRSxjQUFRLEVBQUUsQ0FEWjtBQUVFLGFBQU8sRUFBRTtBQUNQb0csWUFBSSxFQUFFcEQsT0FBTyxDQUFDcUQ7QUFEUDtBQUZYLG9CQU1FO0FBQUssZUFBUyxFQUFFckQsT0FBTyxDQUFDc0Q7QUFBeEIsb0JBQ0UsMkRBQUMsNERBQUQ7QUFBTyxZQUFNO0FBQWIsb0JBQ0UsMkRBQUMsMkRBQUQ7QUFDRSxXQUFLLEVBQUUsS0FBS3JHLEtBQUwsQ0FBVzhGLFdBQVgsR0FBeUIsS0FBSzlGLEtBQUwsQ0FBVzhGLFdBQXBDLEdBQWtELE1BRDNEO0FBRUUsY0FBUSxFQUFFLENBQUNRLENBQUQsRUFBSUMsQ0FBSixLQUFVLEtBQUtSLFlBQUwsQ0FBa0JPLENBQWxCLEVBQXFCQyxDQUFyQjtBQUZ0QixvQkFJRSwyREFBQywwREFBRDtBQUFLLFdBQUssRUFBQyxNQUFYO0FBQWtCLFdBQUssRUFBRSxNQUF6QjtBQUFpQyxlQUFTLEVBQUV4RCxPQUFPLENBQUN5RDtBQUFwRCxNQUpGLGVBS0UsMkRBQUMsMERBQUQ7QUFBSyxXQUFLLEVBQUMsVUFBWDtBQUFzQixXQUFLLEVBQUUsVUFBN0I7QUFBeUMsZUFBUyxFQUFFekQsT0FBTyxDQUFDeUQ7QUFBNUQsTUFMRixDQURGLGVBU0Usd0VBQU0sS0FBS04sWUFBTCxFQUFOLENBVEYsQ0FERixDQU5GLENBREY7QUFzQkQ7O0FBakR3Qzs7QUFvRDNDLGlFQUFlTCxjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTWYsTUFBTSxHQUFJQyxLQUFELEtBQVk7QUFDekJzQixlQUFhLEVBQUU7QUFDYkksWUFBUSxFQUFFO0FBREcsR0FEVTtBQUl6QkQsS0FBRyxFQUFFO0FBQ0hyQixTQUFLLEVBQUU7QUFESixHQUpvQjtBQU96QmlCLGNBQVksRUFBRTtBQUNaTSxRQUFJLEVBQUU7QUFETTtBQVBXLENBQVosQ0FBZjs7QUFXQSxpRUFBZWQsaUVBQVUsQ0FBQ2QsTUFBRCxDQUFWLENBQW1CZSxvREFBbkIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1jLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsYUFBNUI7O0FBRUEsTUFBTUMsUUFBTixTQUF1QmxILGdEQUF2QixDQUFxQztBQUNuQ0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsb0RBMElPaUgsU0FBRCxJQUFnQmhCLEtBQUQsSUFBVztBQUNqRCxVQUFJaUIsUUFBUSxHQUFHLEtBQUtqSCxLQUFMLENBQVdpSCxRQUExQjtBQUNBQSxjQUFRLENBQUMsUUFBRCxDQUFSLENBQW1CRCxTQUFuQixJQUFnQ2hCLEtBQUssQ0FBQ2tCLE1BQU4sQ0FBYUMsS0FBN0M7QUFDQSxXQUFLOUcsUUFBTCxDQUFjO0FBQUU0RyxnQkFBUSxFQUFFQSxRQUFaO0FBQXNCaEgseUJBQWlCLEVBQUU7QUFBekMsT0FBZDtBQUNELEtBOUlrQjs7QUFFakIsU0FBS0QsS0FBTCxHQUFhO0FBQ1hvSCxVQUFJLEVBQUUsS0FESztBQUVYQyxlQUFTLEVBQUUsQ0FGQTtBQUdYQyxhQUFPLEVBQUUsRUFIRTtBQUlYQyxpQkFBVyxFQUFFLEtBSkY7QUFLWEMsaUJBQVcsRUFBRSxLQUxGO0FBTVhDLG9CQUFjLEVBQUUsS0FOTDtBQU9YUixjQUFRLEVBQUU7QUFBRVMsY0FBTSxFQUFFO0FBQUVDLHFCQUFXLEVBQUU7QUFBZjtBQUFWLE9BUEM7QUFRWDFILHVCQUFpQixFQUFFO0FBUlIsS0FBYjs7QUFVQSxTQUFLQyxpQkFBTCxHQUF5QixVQUFVQyxPQUFWLEVBQW1CO0FBQzFDLFlBQU15SCxlQUFlLEdBQUd6SCxPQUFPLENBQUMsVUFBRCxDQUEvQjs7QUFDQSxVQUFJeUgsZUFBSixFQUFxQjtBQUNuQixhQUFLdkgsUUFBTCxDQUFjO0FBQ1o0RyxrQkFBUSxFQUFFVyxlQUFlLENBQUMsVUFBRCxDQURiO0FBRVozSCwyQkFBaUIsRUFBRTtBQUZQLFNBQWQ7QUFJRDtBQUNGLEtBUndCLENBUXZCTSxJQVJ1QixDQVFsQixJQVJrQixDQUF6QjtBQVNEOztBQUVEQyxtQkFBaUIsR0FBRztBQUNsQkMsVUFBTSxDQUFDQyxPQUFQLENBQWVDLEtBQWYsQ0FBcUJDLEdBQXJCLENBQ0UsQ0FBQyxXQUFELEVBQWMsU0FBZCxFQUF5QixhQUF6QixFQUF3QyxhQUF4QyxFQUF1RCxnQkFBdkQsRUFBeUUsVUFBekUsQ0FERixFQUVHQyxNQUFELElBQVk7QUFDVixZQUFNd0csU0FBUyxHQUFHeEcsTUFBTSxDQUFDd0csU0FBUCxJQUFvQixDQUF0QztBQUNBLFlBQU1DLE9BQU8sR0FBR3pHLE1BQU0sQ0FBQ3lHLE9BQVAsSUFBa0IsRUFBbEM7QUFDQSxZQUFNQyxXQUFXLEdBQUcxRyxNQUFNLENBQUMwRyxXQUFQLElBQXNCLEtBQTFDO0FBQ0EsVUFBSUMsV0FBVyxHQUFHM0csTUFBTSxDQUFDMkcsV0FBUCxJQUFzQixLQUF4QztBQUNBLFlBQU1DLGNBQWMsR0FBRzVHLE1BQU0sQ0FBQzRHLGNBQVAsSUFBeUIsS0FBaEQsQ0FMVSxDQU1WO0FBQ0E7QUFDQTs7QUFDQSxZQUFNUixRQUFRLEdBQUdwRyxNQUFNLENBQUNvRyxRQUFQLElBQW1CO0FBQ2xDUyxjQUFNLEVBQUU7QUFBRUMscUJBQVcsRUFBRTtBQUFmO0FBRDBCLE9BQXBDO0FBR0EsV0FBS3RILFFBQUwsQ0FBYztBQUNaZ0gsaUJBRFk7QUFFWkMsZUFGWTtBQUdaQyxtQkFIWTtBQUlaQyxtQkFKWTtBQUtaQyxzQkFMWTtBQU1aUjtBQU5ZLE9BQWQ7QUFRRCxLQXRCSDtBQXdCQXhHLFVBQU0sQ0FBQ0MsT0FBUCxDQUFlSyxTQUFmLENBQXlCQyxXQUF6QixDQUFxQyxLQUFLZCxpQkFBMUM7QUFDRDs7QUFFRGUsc0JBQW9CLEdBQUc7QUFDckJSLFVBQU0sQ0FBQ0MsT0FBUCxDQUFlSyxTQUFmLENBQXlCRyxjQUF6QixDQUF3QyxLQUFLaEIsaUJBQTdDO0FBQ0Q7O0FBRURpQixvQkFBa0IsQ0FBQ0MsU0FBRCxFQUFZQyxTQUFaLEVBQXVCO0FBQ3ZDLFFBQUlBLFNBQVMsQ0FBQ2dHLFNBQVYsS0FBd0IsS0FBS3JILEtBQUwsQ0FBV3FILFNBQW5DLElBQWdEaEcsU0FBUyxDQUFDaUcsT0FBVixLQUFzQixLQUFLdEgsS0FBTCxDQUFXc0gsT0FBckYsRUFBOEY7QUFDNUYsV0FBS08sc0JBQUw7QUFDRDs7QUFDRCxRQUNFeEcsU0FBUyxDQUFDbUcsV0FBVixLQUEwQixLQUFLeEgsS0FBTCxDQUFXd0gsV0FBckMsSUFDQW5HLFNBQVMsQ0FBQ2tHLFdBQVYsS0FBMEIsS0FBS3ZILEtBQUwsQ0FBV3VILFdBRHJDLElBRUFsRyxTQUFTLENBQUNvRyxjQUFWLEtBQTZCLEtBQUt6SCxLQUFMLENBQVd5SCxjQUgxQyxFQUlFO0FBQ0EsV0FBS0ssbUJBQUw7QUFDQSxXQUFLQyxhQUFMO0FBQ0Q7O0FBQ0QsUUFBSSxLQUFLL0gsS0FBTCxDQUFXQyxpQkFBZixFQUFrQztBQUNoQyxXQUFLcUIsV0FBTDtBQUNEO0FBQ0Y7O0FBRUR1Ryx3QkFBc0IsR0FBRztBQUN2QnBILFVBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxLQUFmLENBQXFCcUgsR0FBckIsQ0FBeUI7QUFDdkJYLGVBQVMsRUFBRSxLQUFLckgsS0FBTCxDQUFXcUgsU0FEQztBQUV2QkMsYUFBTyxFQUFFLEtBQUt0SCxLQUFMLENBQVdzSDtBQUZHLEtBQXpCO0FBSUQ7O0FBRURXLGtCQUFnQixDQUFDQyxVQUFELEVBQWE7QUFDM0IsU0FBSzdILFFBQUwsQ0FBYztBQUNabUgsaUJBQVcsRUFBRVUsVUFBVSxLQUFLdkIsZUFEaEI7QUFFWlksaUJBQVcsRUFBRVcsVUFBVSxLQUFLdEIsZUFGaEI7QUFHWmEsb0JBQWMsRUFBRVMsVUFBVSxLQUFLckI7QUFIbkIsS0FBZDs7QUFLQSxRQUFJcUIsVUFBVSxLQUFLdkIsZUFBZixJQUFrQ3VCLFVBQVUsS0FBS3RCLGVBQXJELEVBQXNFO0FBQ3BFLFdBQUt1QixVQUFMO0FBQ0Q7QUFDRjs7QUFFREwscUJBQW1CLEdBQUc7QUFDcEIsUUFBSWIsUUFBUSxHQUFHLEtBQUtqSCxLQUFMLENBQVdpSCxRQUExQjs7QUFDQSxRQUFJLEtBQUtqSCxLQUFMLENBQVd1SCxXQUFmLEVBQTRCO0FBQzFCTixjQUFRLENBQUMsUUFBRCxDQUFSLENBQW1CLGFBQW5CLElBQW9DLENBQXBDO0FBQ0QsS0FGRCxNQUVPLElBQUksS0FBS2pILEtBQUwsQ0FBV3dILFdBQWYsRUFBNEI7QUFDakNQLGNBQVEsQ0FBQyxRQUFELENBQVIsQ0FBbUIsYUFBbkIsSUFBb0MsRUFBcEM7QUFDRDs7QUFFRCxRQUFJLENBQUMsS0FBS2pILEtBQUwsQ0FBV3lILGNBQWhCLEVBQWdDO0FBQzlCaEgsWUFBTSxDQUFDc0IsT0FBUCxDQUFlQyxXQUFmLENBQTJCO0FBQ3pCSCxtQkFBVyxFQUFFLFVBRFk7QUFFekJvRixnQkFBUSxFQUFFQTtBQUZlLE9BQTNCO0FBSUQ7QUFDRjs7QUFFRGMsZUFBYSxHQUFHO0FBQ2R0SCxVQUFNLENBQUNDLE9BQVAsQ0FBZUMsS0FBZixDQUFxQnFILEdBQXJCLENBQXlCO0FBQ3ZCUixpQkFBVyxFQUFFLEtBQUt4SCxLQUFMLENBQVd3SCxXQUREO0FBRXZCRCxpQkFBVyxFQUFFLEtBQUt2SCxLQUFMLENBQVd1SCxXQUZEO0FBR3ZCRSxvQkFBYyxFQUFFLEtBQUt6SCxLQUFMLENBQVd5SDtBQUhKLEtBQXpCO0FBS0Q7O0FBRURuRyxhQUFXLEdBQUc7QUFDWixTQUFLakIsUUFBTCxDQUFjO0FBQUVKLHVCQUFpQixFQUFFO0FBQXJCLEtBQWQ7QUFDRDs7QUFFRG1JLHNCQUFvQixHQUFHO0FBQ3JCM0gsVUFBTSxDQUFDc0IsT0FBUCxDQUFlQyxXQUFmLENBQTJCO0FBQ3pCSCxpQkFBVyxFQUFFLFVBRFk7QUFFekJvRixjQUFRLEVBQUUsS0FBS2pILEtBQUwsQ0FBV2lIO0FBRkksS0FBM0I7QUFJQSxTQUFLa0IsVUFBTDtBQUNEOztBQUVEQSxZQUFVLEdBQUc7QUFDWCxTQUFLcEksS0FBTCxDQUFXc0ksZUFBWCxDQUEyQix5QkFBM0IsRUFBc0Q7QUFDcERDLGFBQU8sRUFBRSxTQUQyQztBQUVwREMsa0JBQVksRUFBRTtBQUNaQyxnQkFBUSxFQUFFLFFBREU7QUFFWkMsa0JBQVUsRUFBRTtBQUZBLE9BRnNDO0FBTXBEQyx3QkFBa0IsRUFBRSxHQU5nQztBQU9wREMsc0JBQWdCLEVBQUU7QUFQa0MsS0FBdEQ7QUFTRDs7QUFRRGpFLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRTNCO0FBQUYsUUFBYyxLQUFLaEQsS0FBekI7QUFDQSxVQUFNNkksZ0JBQWdCLEdBQUcsQ0FDdkI7QUFDRUMsV0FBSyxFQUFFLHlCQURUO0FBRUUxQixXQUFLLEVBQUUsS0FBS25ILEtBQUwsQ0FBV2lILFFBQVgsQ0FBb0JTLE1BQXBCLENBQTJCQyxXQUZwQztBQUdFbUIsY0FBUSxFQUFFaEMsbUJBSFo7QUFJRWlDLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLEdBQVA7QUFBWXZHLFdBQUcsRUFBRSxLQUFqQjtBQUF3QndHLFlBQUksRUFBRTtBQUE5QjtBQUpkLEtBRHVCLENBQXpCO0FBUUEsVUFBTUMsbUJBQW1CLEdBQUdOLGdCQUFnQixDQUFDM0YsR0FBakIsQ0FBcUIsQ0FBQ1YsSUFBRCxFQUFPNEcsS0FBUCxrQkFDL0MsMkRBQUMsZ0VBQUQ7QUFDRSxTQUFHLEVBQUVBLEtBRFA7QUFFRSxjQUFRLEVBQUUsQ0FBQyxLQUFLbkosS0FBTCxDQUFXeUgsY0FGeEI7QUFHRSxXQUFLLEVBQUVsRixJQUFJLENBQUNzRyxLQUhkO0FBSUUsY0FBUSxFQUFFLEtBQUtPLHNCQUFMLENBQTRCN0csSUFBSSxDQUFDdUcsUUFBakMsQ0FKWjtBQUtFLFdBQUssRUFBRXZHLElBQUksQ0FBQzRFLEtBTGQ7QUFNRSxlQUFTLEVBQUVwRSxPQUFPLENBQUNzRyxTQU5yQjtBQU9FLFVBQUksRUFBQyxRQVBQO0FBUUUsZ0JBQVUsRUFBRTlHLElBQUksQ0FBQ3dHO0FBUm5CLE1BRDBCLENBQTVCO0FBWUEsd0JBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNFO0FBQUssZUFBUyxFQUFFaEcsT0FBTyxDQUFDdUc7QUFBeEIsb0JBQ0UsMkRBQUMsNERBQUQsT0FERixlQUVFLDJEQUFDLDRFQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQXlCLGVBQVMsRUFBRXZHLE9BQU8sQ0FBQ1k7QUFBNUMsa0RBRkYsQ0FERixlQU9FO0FBQUssZUFBUyxFQUFFWixPQUFPLENBQUNzRztBQUF4QixvQkFDRTtBQUFLLGVBQVMsRUFBRXRHLE9BQU8sQ0FBQ3dHO0FBQXhCLE1BREYsZUFHRSwyREFBQyx5REFBRDtBQUFNLGVBQVMsRUFBRXhHLE9BQU8sQ0FBQ3lHO0FBQXpCLG9CQUNFLDJEQUFDLHVFQUFEO0FBQ0UsYUFBTyxlQUNMLDJEQUFDLCtEQUFEO0FBQ0UsZUFBTyxFQUFFLEtBQUt4SixLQUFMLENBQVd1SCxXQUR0QjtBQUVFLGdCQUFRLEVBQUUsTUFBTSxLQUFLVSxnQkFBTCxDQUFzQnJCLGVBQXRCLENBRmxCO0FBR0UsYUFBSyxFQUFDLFdBSFI7QUFJRSxhQUFLLEVBQUM7QUFKUixRQUZKO0FBU0UsV0FBSyxFQUFDLFNBVFI7QUFVRSxlQUFTLEVBQUU3RCxPQUFPLENBQUMwRztBQVZyQixNQURGLGVBYUUsMkRBQUMsdUVBQUQ7QUFDRSxhQUFPLGVBQ0wsMkRBQUMsK0RBQUQ7QUFDRSxlQUFPLEVBQUUsS0FBS3pKLEtBQUwsQ0FBV3dILFdBRHRCO0FBRUUsZ0JBQVEsRUFBRSxNQUFNLEtBQUtTLGdCQUFMLENBQXNCdEIsZUFBdEIsQ0FGbEI7QUFHRSxhQUFLLEVBQUMsV0FIUjtBQUlFLGFBQUssRUFBQztBQUpSLFFBRko7QUFTRSxXQUFLLEVBQUMsU0FUUjtBQVVFLGVBQVMsRUFBRTVELE9BQU8sQ0FBQzBHO0FBVnJCLE1BYkYsZUF5QkUsMkRBQUMsdUVBQUQ7QUFDRSxjQUFRLEVBQUUsTUFBTSxLQUFLeEIsZ0JBQUwsQ0FBc0JwQixrQkFBdEIsQ0FEbEI7QUFFRSxhQUFPLGVBQUUsMkRBQUMsK0RBQUQ7QUFBVSxlQUFPLEVBQUUsS0FBSzdHLEtBQUwsQ0FBV3lILGNBQTlCO0FBQThDLGFBQUssRUFBQyxFQUFwRDtBQUF1RCxhQUFLLEVBQUM7QUFBN0QsUUFGWDtBQUdFLFdBQUssRUFBQztBQUhSLE1BekJGLGVBOEJFO0FBQUssZUFBUyxFQUFFMUUsT0FBTyxDQUFDMkc7QUFBeEIsb0JBQ0UsMkRBQUMsa0VBQUQsQ0FDRTtBQURGO0FBRUUsY0FBUSxNQUZWO0FBR0UsZUFBUztBQUhYLE9BS0dSLG1CQUxILENBREYsZUFRRSxxRkFDRSwyREFBQywyREFBRDtBQUNFLGNBQVEsRUFBRSxDQUFDLEtBQUtsSixLQUFMLENBQVd5SCxjQUR4QjtBQUVFLGVBQVMsRUFBRTFFLE9BQU8sQ0FBQzRHLGVBRnJCO0FBR0UsYUFBTyxFQUFFLEtBQUszSixLQUFMLENBQVd5SCxjQUFYLEdBQTRCLGlCQUE1QixHQUFnRCxTQUgzRDtBQUlFLGFBQU8sRUFBRSxNQUFNLEtBQUtXLG9CQUFMO0FBSmpCLGNBREYsQ0FSRixDQTlCRixDQUhGLENBUEYsQ0FERixDQURGO0FBa0VEOztBQXpPa0M7O0FBNE9yQyxpRUFBZXdCLHVEQUFZLENBQUM3QyxRQUFELENBQTNCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVQQTtBQUVBOztBQUVBLE1BQU1qQyxNQUFNLEdBQUlDLEtBQUQsS0FBWTtBQUN6QnNFLFdBQVMsRUFBRTtBQUNUMUQsYUFBUyxFQUFFLENBREY7QUFFVEosY0FBVSxFQUFFLEVBRkg7QUFHVEUsZUFBVyxFQUFFO0FBSEosR0FEYztBQU16QjhELFdBQVMsRUFBRTtBQUNUNUQsYUFBUyxFQUFFO0FBREYsR0FOYztBQVV6QjZELGlCQUFlLEVBQUU7QUFDZnZFLFdBQU8sRUFBRSxNQURNO0FBRWZDLGlCQUFhLEVBQUUsUUFGQTtBQUdmMkUsa0JBQWMsRUFBRSxPQUhEO0FBSWZDLGFBQVMsRUFBRSxLQUpJLENBS2Y7QUFDQTs7QUFOZSxHQVZRO0FBa0J6QkgsaUJBQWUsRUFBRTtBQUNmaEUsYUFBUyxFQUFFLEVBREk7QUFFZjtBQUNBUixTQUFLLEVBQUUsU0FIUTtBQUlmTyxlQUFXLEVBQUU7QUFKRSxHQWxCUTtBQXdCekJVLGNBQVksRUFBRTtBQUNaZixZQUFRLEVBQUU7QUFERSxHQXhCVztBQTJCekJpRSxtQkFBaUIsRUFBRTtBQUNqQnJFLFdBQU8sRUFBRSxNQURRO0FBRWpCQyxpQkFBYSxFQUFFLEtBRkU7QUFHakI2RSxjQUFVLEVBQUUsUUFISztBQUlqQkYsa0JBQWMsRUFBRSxPQUpDLENBS2pCOztBQUxpQixHQTNCTTtBQWtDekJsRyxPQUFLLEVBQUU7QUFDTDJCLGNBQVUsRUFBRSxNQURQO0FBRUxOLFlBQVEsRUFBRSxFQUZMO0FBR0xPLGNBQVUsRUFBRTtBQUhQLEdBbENrQjtBQXVDekJtRSxlQUFhLEVBQUU7QUFDYnpFLFdBQU8sRUFBRSxNQURJO0FBRWJDLGlCQUFhLEVBQUUsS0FGRjtBQUdiMkUsa0JBQWMsRUFBRTtBQUhILEdBdkNVO0FBNEN6QkosZUFBYSxFQUFFO0FBQ2JwRSxZQUFRLEVBQUU7QUFERztBQTVDVSxDQUFaLENBQWY7O0FBZ0RBLGlFQUFlTyxpRUFBVSxDQUFDZCxNQUFELENBQVYsQ0FBbUJpQyw4Q0FBbkIsQ0FBZixFOzs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHLHdDQUF3QyxtQkFBTyxDQUFDLHNMQUFxRjtBQUNySTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QscUJBQXFCLEdBQUcsZ0JBQWdCLHNCQUFzQix1QkFBdUIsR0FBRyxrQkFBa0IsZ0RBQWdELHFCQUFxQixHQUFHLGlCQUFpQixnREFBZ0QsMEJBQTBCLG9CQUFvQix1QkFBdUIsbUJBQW1CLHFDQUFxQyxxQkFBcUIsR0FBRyxhQUFhLG1CQUFtQiwwQkFBMEIsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUc7QUFDN2hCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLGNBQWMsbUJBQU8sQ0FBQyxvSUFBNEQ7O0FBRWxGOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDBHQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJwb3B1cC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2pxdWVyeS9kaXN0L2pxdWVyeS5taW4nO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluJztcbmltcG9ydCAnLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWVEaXNwYXRjaGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXInO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG5cdHJldHVybiA8SG9tZURpc3BhdGNoZXIgLz47XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5jb25zdCBSRVNUT1JFID0gJ1JFU1RPUkUnO1xuY29uc3QgTkVYVCA9ICdORVhUJztcbmNvbnN0IFJFTU9WRUQgPSAnUkVNT1ZFRCc7XG5jb25zdCBDTE9TRURfSElTVE9SWSA9ICdjbG9zZWRfaGlzdG9yeSc7XG5jb25zdCBUSU1FX1BFUklPRF9UT19DT05TSURFUiA9IDM2MDAwMDAgKiAyOyAvLyBpbiBtaWNyb3NlY29uZFxuXG5jbGFzcyBIb21lIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSB9O1xuICAgIHRoaXMub25DaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgY29uc3QgY2hhbmdlc0Nsb3NlZEhpc3RvcnkgPSBjaGFuZ2VzW0NMT1NFRF9ISVNUT1JZXTtcbiAgICAgIGlmIChjaGFuZ2VzQ2xvc2VkSGlzdG9yeSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjbG9zZWRfaGlzdG9yeTogY2hhbmdlc0Nsb3NlZEhpc3RvcnlbJ25ld1ZhbHVlJ10sXG4gICAgICAgICAgcmVuZGVyU2F2ZUJvb2xlYW46IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbQ0xPU0VEX0hJU1RPUlldLCAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBjbG9zZWRfaGlzdG9yeSA9IHJlc3VsdC5jbG9zZWRfaGlzdG9yeSB8fCBbXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZWRfaGlzdG9yeSB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmV4dExpc3Q6IFtdIH0pO1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnJlbmRlclNhdmVCb29sZWFuKSB7XG4gICAgICB0aGlzLmZvcmNlUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSXRlbShrZXkpIHtcbiAgICBsZXQgaXRlbXMgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5LnJldmVyc2UoKTtcbiAgICB0aGlzLnJlc3RvcmVUYWIoaXRlbXMsIGtleSwgUkVTVE9SRSk7XG4gIH1cblxuICByZW1vdmVOZXh0SXRlbShrZXkpIHtcbiAgICBsZXQgaXRlbXMgPSB0aGlzLnN0YXRlLm5leHRMaXN0O1xuICAgIHRoaXMucmVzdG9yZVRhYihpdGVtcywga2V5LCBSRVNUT1JFKTtcbiAgfVxuXG4gIHJlc3RvcmVUYWIoaXRlbXMsIGtleSwgbWVzc2FnZVR5cGUpIHtcbiAgICBjb25zdCByZXN0b3JlZFRhYiA9IGl0ZW1zW2tleV07XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VUeXBlLFxuICAgICAgdGFiSWQ6IHJlc3RvcmVkVGFiLnRhYklkLFxuICAgIH0pO1xuICB9XG5cbiAgZm9yY2VSZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGZpbHRlckxpc3Qoc2VsZWN0ZWRMaXN0KSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgbm93IC1cbiAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgIGl0ZW0uc3RhdGlzdGljcy51cGRhdGVkX2F0LFxuICAgICAgICAgICAgaXRlbS5zdGF0aXN0aWNzLmxhc3RfYWN0aXZlX3RpbWVzdGFtcFxuICAgICAgICAgICkgPFxuICAgICAgICBUSU1FX1BFUklPRF9UT19DT05TSURFUlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckxpc3QobGlzdFRvQmVSZW5kZXJlZCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBzZWxlY3RlZExpc3Q7XG4gICAgY29uc3QgTUFYX0xFTkdUSF9USVRMRSA9IDUwO1xuXG4gICAgc3dpdGNoIChsaXN0VG9CZVJlbmRlcmVkKSB7XG4gICAgICBjYXNlIE5FWFQ6XG4gICAgICAgIHNlbGVjdGVkTGlzdCA9IHRoaXMuc3RhdGUubmV4dExpc3QgPyB0aGlzLnN0YXRlLm5leHRMaXN0IDogW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc2VsZWN0ZWRMaXN0ID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeVxuICAgICAgICAgID8gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeVxuICAgICAgICAgIDogW107XG4gICAgICAgIHNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdC5tYXAoKHdlYnNpdGUsIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBkZWxldGlvblRpbWUgPSBuZXcgRGF0ZSh3ZWJzaXRlLmRlbGV0aW9uX3RpbWUpO1xuICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZF9kZWxldGlvbl90aW1lID0gZGVsZXRpb25UaW1lXG4gICAgICAgICAgICAudG9UaW1lU3RyaW5nKClcbiAgICAgICAgICAgIC5zcGxpdCgnICcpWzBdO1xuICAgICAgICAgIHdlYnNpdGUuaG91cnNfZGVsZXRpb24gPSBmb3JtYXR0ZWRfZGVsZXRpb25fdGltZS5zcGxpdCgnOicpWzBdO1xuICAgICAgICAgIHdlYnNpdGUubWludXRlc19kZWxldGlvbiA9IGZvcm1hdHRlZF9kZWxldGlvbl90aW1lLnNwbGl0KCc6JylbMV07XG4gICAgICAgICAgaWYgKHdlYnNpdGUudGl0bGUgJiYgd2Vic2l0ZS50aXRsZS5sZW5ndGggPiBNQVhfTEVOR1RIX1RJVExFKSB7XG4gICAgICAgICAgICB3ZWJzaXRlLnRpdGxlID0gd2Vic2l0ZS50aXRsZVxuICAgICAgICAgICAgICAuc3Vic3RyaW5nKDAsIE1BWF9MRU5HVEhfVElUTEUpXG4gICAgICAgICAgICAgIC5jb25jYXQoJy4uLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gd2Vic2l0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGlzTmV4dCA9IGxpc3RUb0JlUmVuZGVyZWQgPT09IE5FWFQ7XG4gICAgY29uc3QgZmlsdGVyZWRMaXN0ID0gdGhpcy5maWx0ZXJMaXN0KHNlbGVjdGVkTGlzdCkucmV2ZXJzZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0V2Vic2l0ZXN9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JlZW5UaXRsZX0+XG4gICAgICAgICAge2lzTmV4dCA/ICdOZXh0IHRhYnMgdG8gYmUgY2xvc2VkJyA6ICdUYWJzIGNsb3NlZCB0b2RheSd9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGlzdCBkZW5zZT17dHJ1ZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtc30+XG4gICAgICAgICAgICB7ZmlsdGVyZWRMaXN0Lmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPHA+Tm8gdGFicyBjbG9zZWQgaW4gdGhlIGxhc3QgMiBob3Vycy48L3A+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBmaWx0ZXJlZExpc3QubWFwKCh3ZWJzaXRlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkQXZhdGFyV2l0aFRpbWV9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGltZURpc3BsYXl9PlxuICAgICAgICAgICAgICAgICAgICAgIHtgJHt3ZWJzaXRlLmhvdXJzX2RlbGV0aW9ufToke3dlYnNpdGUubWludXRlc19kZWxldGlvbn1gfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD17d2Vic2l0ZS50aXRsZX0gc3JjPXt3ZWJzaXRlLmZhdkljb25Vcmx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17d2Vic2l0ZS51cmx9XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17d2Vic2l0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICBpc05leHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJlbW92ZU5leHRJdGVtLmJpbmQodGhpcywgaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnJlbW92ZUl0ZW0uYmluZCh0aGlzLCBpKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2lzTmV4dCA/ICdTa2lwJyA6ICdSZXN0b3JlJ31cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5XG4gICAgICA/IHRoaXMuZmlsdGVyTGlzdCh0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5KS5sZW5ndGhcbiAgICAgIDogMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRvZG8tbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmJvbGRUZXh0fT5cbiAgICAgICAgICAgICAge251bWJlckNsb3NlZFRhYnNMYXN0SG91ciA/IG51bWJlckNsb3NlZFRhYnNMYXN0SG91ciA6ICdObyd9IHRhYlxuICAgICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID09PSAxID8gJycgOiAncyd9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubWlkZGxlVGV4dH0+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPT09IDEgPyAnd2FzJyA6ICd3ZXJlJ30gY2xvc2VkIGluIHRoZVxuICAgICAgICAgICAgICBsYXN0eycgJ31cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2xkVGV4dH0+IDIgaG91cnMhIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAge3RoaXMucmVuZGVyTGlzdC5iaW5kKHRoaXMpKFJFTU9WRUQpfVxuICAgICAgICAgIHsvKnt0aGlzLnJlbmRlckxpc3QuYmluZCh0aGlzKShORVhUKX0qL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIH0sXG4gIGdyZWVuVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGNvbG9yOiAnIzFiOWU3NCcsXG4gICAgYm9yZGVyQm90dG9tOiBgMnB4IHNvbGlkICMxYjllNzRgLFxuICAgIG1heFdpZHRoOiAyMjUsXG4gIH0sXG4gIGJvbGRUZXh0OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICB9LFxuICBtaWRkbGVUZXh0OiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygwLjUpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGNvbG9yOiAnIzFiOWU3NCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjMWI5ZTc0JyxcbiAgICBmb250U2l6ZTogMTIsXG4gIH0sXG4gIGl0ZW1UZXh0OiB7XG4gICAgbWF4V2lkdGg6IDIwMCxcbiAgfSxcbiAgdGltZURpc3BsYXk6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE0LFxuICB9LFxuICBncmlkQXZhdGFyV2l0aFRpbWU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIH0sXG4gIGxpc3RXZWJzaXRlczoge1xuICAgIG1hcmdpblRvcDogMjAsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShIb21lKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4uL1NldHRpbmdzJztcbmltcG9ydCBIb21lIGZyb20gJy4uL0hvbWUnO1xuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gJ25vdGlzdGFjayc7XG5cbmNsYXNzIEhvbWVEaXNwYXRjaGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGFwcEJhclZhbHVlOiAnSE9NRScgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBCYXJWYWx1ZTogJ0hPTUUnIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50LCBuZXdWYWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBCYXJWYWx1ZTogbmV3VmFsdWUgfSk7XG4gIH1cblxuICBkaXNwYXRjaFBhZ2UoKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmFwcEJhclZhbHVlKSB7XG4gICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgcmV0dXJuIDxIb21lIC8+O1xuICAgICAgY2FzZSAnU0VUVElOR1MnOlxuICAgICAgICByZXR1cm4gPFNldHRpbmdzIC8+O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyBpcyBhbiBlcnJvciBwYWdlPC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTbmFja2JhclByb3ZpZGVyXG4gICAgICAgIG1heFNuYWNrPXsyfVxuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5ub3RpZmljYXRpb24sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhvbWVDb250YWluZXJ9PlxuICAgICAgICAgIDxQYXBlciBzcXVhcmU+XG4gICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hcHBCYXJWYWx1ZSA/IHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUgOiAnSE9NRSd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgdikgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgdil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJIb21lXCIgdmFsdWU9eydIT01FJ30gY2xhc3NOYW1lPXtjbGFzc2VzLnRhYn0gLz5cbiAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIlNldHRpbmdzXCIgdmFsdWU9eydTRVRUSU5HUyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJ9IC8+XG4gICAgICAgICAgICAgIHsvKjxUYWIgbGFiZWw9XCJEZWJ1Z1wiIHZhbHVlPXtcIkRFQlVHXCJ9IGRpc2FibGVkIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJ9Lz4qL31cbiAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgIDxkaXY+e3RoaXMuZGlzcGF0Y2hQYWdlKCl9PC9kaXY+XG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lRGlzcGF0Y2hlcjtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgSG9tZURpc3BhdGNoZXIgZnJvbSAnLi9Ib21lRGlzcGF0Y2hlcic7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYi9UYWInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBob21lQ29udGFpbmVyOiB7XG4gICAgbWluV2lkdGg6IDQwMCxcbiAgfSxcbiAgdGFiOiB7XG4gICAgY29sb3I6ICcjMWI5ZTc0JyxcbiAgfSxcbiAgbm90aWZpY2F0aW9uOiB7XG4gICAgbGVmdDogMTUwLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZURpc3BhdGNoZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHkvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgVHVuZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R1bmUnO1xuaW1wb3J0IHsgd2l0aFNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcblxuY29uc3QgSVNfUkVMQVhFRF9NT0RFID0gJ0lTX1JFTEFYRURfTU9ERSc7XG5jb25zdCBJU19GT0NVU0VEX01PREUgPSAnSVNfRk9DVVNFRF9NT0RFJztcbmNvbnN0IElTX0NVU1RPTUlaRURfTU9ERSA9ICdJU19DVVNUT01JWkVEX01PREUnO1xuY29uc3QgT1BUSU1BTF9OVU1CRVJfVEFCUyA9ICd0YXJnZXRfdGFicyc7XG5cbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIGJlZ2luSG91cjogMCxcbiAgICAgIGVuZEhvdXI6IDI0LFxuICAgICAgZm9jdXNlZE1vZGU6IGZhbHNlLFxuICAgICAgcmVsYXhlZE1vZGU6IGZhbHNlLFxuICAgICAgY3VzdG9taXplZEJvb2w6IGZhbHNlLFxuICAgICAgc2V0dGluZ3M6IHsgcG9saWN5OiB7IHRhcmdldF90YWJzOiAxMDAgfSB9LFxuICAgICAgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5vbkNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBjaGFuZ2VzU2V0dGluZ3MgPSBjaGFuZ2VzWydzZXR0aW5ncyddO1xuICAgICAgaWYgKGNoYW5nZXNTZXR0aW5ncykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZXR0aW5nczogY2hhbmdlc1NldHRpbmdzWyduZXdWYWx1ZSddLFxuICAgICAgICAgIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoXG4gICAgICBbJ2JlZ2luSG91cicsICdlbmRIb3VyJywgJ2ZvY3VzZWRNb2RlJywgJ3JlbGF4ZWRNb2RlJywgJ2N1c3RvbWl6ZWRCb29sJywgJ3NldHRpbmdzJ10sXG4gICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IGJlZ2luSG91ciA9IHJlc3VsdC5iZWdpbkhvdXIgfHwgMDtcbiAgICAgICAgY29uc3QgZW5kSG91ciA9IHJlc3VsdC5lbmRIb3VyIHx8IDI0O1xuICAgICAgICBjb25zdCBmb2N1c2VkTW9kZSA9IHJlc3VsdC5mb2N1c2VkTW9kZSB8fCBmYWxzZTtcbiAgICAgICAgbGV0IHJlbGF4ZWRNb2RlID0gcmVzdWx0LnJlbGF4ZWRNb2RlIHx8IGZhbHNlO1xuICAgICAgICBjb25zdCBjdXN0b21pemVkQm9vbCA9IHJlc3VsdC5jdXN0b21pemVkQm9vbCB8fCBmYWxzZTtcbiAgICAgICAgLy8gaWYgKCFjdXN0b21pemVkQm9vbCAmJiAhcmVsYXhlZE1vZGUgJiYgIWN1c3RvbWl6ZWRCb29sKXtcbiAgICAgICAgLy8gICAgIHJlbGF4ZWRNb2RlID0gdHJ1ZTtcbiAgICAgICAgLy8gfVxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHJlc3VsdC5zZXR0aW5ncyB8fCB7XG4gICAgICAgICAgcG9saWN5OiB7IHRhcmdldF90YWJzOiAxMDAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYmVnaW5Ib3VyLFxuICAgICAgICAgIGVuZEhvdXIsXG4gICAgICAgICAgZm9jdXNlZE1vZGUsXG4gICAgICAgICAgcmVsYXhlZE1vZGUsXG4gICAgICAgICAgY3VzdG9taXplZEJvb2wsXG4gICAgICAgICAgc2V0dGluZ3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHByZXZTdGF0ZS5iZWdpbkhvdXIgIT09IHRoaXMuc3RhdGUuYmVnaW5Ib3VyIHx8IHByZXZTdGF0ZS5lbmRIb3VyICE9PSB0aGlzLnN0YXRlLmVuZEhvdXIpIHtcbiAgICAgIHRoaXMuc2F2ZUFjdGl2ZUhvdXJzVG9Mb2NhbCgpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBwcmV2U3RhdGUucmVsYXhlZE1vZGUgIT09IHRoaXMuc3RhdGUucmVsYXhlZE1vZGUgfHxcbiAgICAgIHByZXZTdGF0ZS5mb2N1c2VkTW9kZSAhPT0gdGhpcy5zdGF0ZS5mb2N1c2VkTW9kZSB8fFxuICAgICAgcHJldlN0YXRlLmN1c3RvbWl6ZWRCb29sICE9PSB0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sXG4gICAgKSB7XG4gICAgICB0aGlzLnNhdmVTZXR0aW5nc1RvU3RhdGUoKTtcbiAgICAgIHRoaXMuc2F2ZUNhc2VzQm9vbCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5yZW5kZXJTYXZlQm9vbGVhbikge1xuICAgICAgdGhpcy5mb3JjZVJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHNhdmVBY3RpdmVIb3Vyc1RvTG9jYWwoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICAgIGJlZ2luSG91cjogdGhpcy5zdGF0ZS5iZWdpbkhvdXIsXG4gICAgICBlbmRIb3VyOiB0aGlzLnN0YXRlLmVuZEhvdXIsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVCb29sQ2hhbmdlKGNoYW5nZVR5cGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJlbGF4ZWRNb2RlOiBjaGFuZ2VUeXBlID09PSBJU19SRUxBWEVEX01PREUsXG4gICAgICBmb2N1c2VkTW9kZTogY2hhbmdlVHlwZSA9PT0gSVNfRk9DVVNFRF9NT0RFLFxuICAgICAgY3VzdG9taXplZEJvb2w6IGNoYW5nZVR5cGUgPT09IElTX0NVU1RPTUlaRURfTU9ERSxcbiAgICB9KTtcbiAgICBpZiAoY2hhbmdlVHlwZSA9PT0gSVNfUkVMQVhFRF9NT0RFIHx8IGNoYW5nZVR5cGUgPT09IElTX0ZPQ1VTRURfTU9ERSkge1xuICAgICAgdGhpcy5ub3RpZnlVc2VyKCk7XG4gICAgfVxuICB9XG5cbiAgc2F2ZVNldHRpbmdzVG9TdGF0ZSgpIHtcbiAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLnN0YXRlLnNldHRpbmdzO1xuICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzZWRNb2RlKSB7XG4gICAgICBzZXR0aW5nc1sncG9saWN5J11bJ3RhcmdldF90YWJzJ10gPSA1O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5yZWxheGVkTW9kZSkge1xuICAgICAgc2V0dGluZ3NbJ3BvbGljeSddWyd0YXJnZXRfdGFicyddID0gMTI7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sKSB7XG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIG1lc3NhZ2VUeXBlOiAnU0VUVElOR1MnLFxuICAgICAgICBzZXR0aW5nczogc2V0dGluZ3MsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzYXZlQ2FzZXNCb29sKCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XG4gICAgICByZWxheGVkTW9kZTogdGhpcy5zdGF0ZS5yZWxheGVkTW9kZSxcbiAgICAgIGZvY3VzZWRNb2RlOiB0aGlzLnN0YXRlLmZvY3VzZWRNb2RlLFxuICAgICAgY3VzdG9taXplZEJvb2w6IHRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2wsXG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVJlbmRlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlIH0pO1xuICB9XG5cbiAgaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HUycsXG4gICAgICBzZXR0aW5nczogdGhpcy5zdGF0ZS5zZXR0aW5ncyxcbiAgICB9KTtcbiAgICB0aGlzLm5vdGlmeVVzZXIoKTtcbiAgfVxuXG4gIG5vdGlmeVVzZXIoKSB7XG4gICAgdGhpcy5wcm9wcy5lbnF1ZXVlU25hY2tiYXIoJ05ldyBTZXR0aW5ncyBhcmUgc2F2ZWQuJywge1xuICAgICAgdmFyaWFudDogJ3N1Y2Nlc3MnLFxuICAgICAgYW5jaG9yT3JpZ2luOiB7XG4gICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgIH0sXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDc1MCxcbiAgICAgIGF1dG9IaWRlRHVyYXRpb246IDIwMDAsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzID0gKHBhcmFtZXRlcikgPT4gKGV2ZW50KSA9PiB7XG4gICAgbGV0IHNldHRpbmdzID0gdGhpcy5zdGF0ZS5zZXR0aW5ncztcbiAgICBzZXR0aW5nc1sncG9saWN5J11bcGFyYW1ldGVyXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2V0dGluZ3M6IHNldHRpbmdzLCByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlucHV0c1BhcmFtZXRlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnT3B0aW1hbCBudW1iZXIgb2YgdGFicyAnLFxuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5zZXR0aW5ncy5wb2xpY3kudGFyZ2V0X3RhYnMsXG4gICAgICAgIG9uQ2hhbmdlOiBPUFRJTUFMX05VTUJFUl9UQUJTLFxuICAgICAgICBpbnB1dFByb3BzOiB7IG1pbjogJzEnLCBtYXg6ICcxMDAnLCBzdGVwOiAnMScgfSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBsaXN0SXRlbXNQYXJhbWV0ZXJzID0gaW5wdXRzUGFyYW1ldGVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVBhcmFtZXRlcnMoaXRlbS5vbkNoYW5nZSl9XG4gICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgaW5wdXRQcm9wcz17aXRlbS5pbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICApKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRvZG8tbGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnRyb2R1Y3Rpb25CbG9ja30+XG4gICAgICAgICAgICA8VHVuZUljb24gLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICAgIFNlbGVjdCB0aGUgc3VpdGluZyBtb2RlIG9yIGN1c3RvbWl6ZSBpdC5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aXZlQmFyfT48L2Rpdj5cbiAgICAgICAgICAgIHsvKjxoMSBjbGFzc05hbWU9e1wiYm9sZC10aXRsZVwifT5TZWxlY3QgVGFiYnkncyBvcGVyYXRpbmcgbW9kZTo8L2gxPiovfVxuICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnNldHRpbmdzV3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5mb2N1c2VkTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlQm9vbENoYW5nZShJU19GT0NVU0VEX01PREUpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbD1cIkZvY3VzZWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVsYXhlZE1vZGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoSVNfUkVMQVhFRF9NT0RFKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSZWxheGVkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCb29sZWFuc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVCb29sQ2hhbmdlKElTX0NVU1RPTUlaRURfTU9ERSl9XG4gICAgICAgICAgICAgICAgY29udHJvbD17PENoZWNrYm94IGNoZWNrZWQ9e3RoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9IHZhbHVlPVwiXCIgY29sb3I9XCJwcmltYXJ5XCIgLz59XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDdXN0b21pemUgeW91ciBzZXR0aW5ncycgcGFyYW1ldGVyc1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNldHRpbmdzQmxvY2t9PlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICAgICAgLy9jbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bGlzdEl0ZW1zUGFyYW1ldGVyc31cbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZGFyeUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17dGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbCA/ICdvdXRsaW5lLXByaW1hcnknIDogJ3ByaW1hcnknfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVNhdmVQYXJhbWV0ZXJzKCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTbmFja2JhcihTZXR0aW5ncyk7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vU2V0dGluZ3MnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHRleHRGaWVsZDoge1xuICAgIG1hcmdpblRvcDogMCxcbiAgICBtYXJnaW5MZWZ0OiAyMCxcbiAgICBtYXJnaW5SaWdodDogMjAsXG4gIH0sXG4gIGFjdGl2ZUJhcjoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gIH0sXG5cbiAgc2V0dGluZ3NXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIG1heEhlaWdodDogJzUwJScsXG4gICAgLy93aWR0aDogJzEwMCUnLFxuICAgIC8vaGVpZ2h0OiAnMTAwdmgnLFxuICB9LFxuICBzZWNvbmRhcnlCdXR0b246IHtcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIC8vbWFyZ2luRG93bjogNSxcbiAgICBjb2xvcjogJyMxYjllNzQnLFxuICAgIGJvcmRlckNvbG9yOiAnIzFiOWU3NCcsXG4gIH0sXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIG1heFdpZHRoOiAxNTAsXG4gIH0sXG4gIGludHJvZHVjdGlvbkJsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIC8vbWFyZ2luVG9wOiAyMCxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE3LFxuICAgIG1hcmdpbkxlZnQ6IDEwLFxuICB9LFxuICBzZXR0aW5nc0Jsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGZpcnN0Qm9vbGVhbnM6IHtcbiAgICBtYXhXaWR0aDogJzQwJScsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShTZXR0aW5ncyk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvZG8tbGlzdC1jb250YWluZXIge1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFiOWU3NDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgY29sb3I6ICMxYjllNzQ7XFxuICBib3JkZXItY29sb3I6ICMxYjllNzQ7XFxufVxcblxcbi5ib2xkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=