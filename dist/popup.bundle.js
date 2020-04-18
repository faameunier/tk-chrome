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











const OPTIMAL_NUMBER_TABS = 'target_tabs';
const POLICY = 'policy';
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
    min_active: 3 * 1000,
    protection_time: 5 * 60 * 1000,
    cached_decay: 0.7
  }
};

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
      settings: INIT_RELAXED_PROFILE,
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
          focusedMode: changesProfile['newValue'] === FOCUSED,
          relaxedMode: changesProfile['newValue'] === RELAXED,
          customizedBool: changesProfile['newValue'] === CUSTOMIZED
        });
      }
    }.bind(this);
  }

  componentDidMount() {
    chrome.storage.local.get(['active_profile', 'settings'], result => {
      const profile = result.active_profile || RELAXED;
      const focusedMode = profile === FOCUSED;
      const relaxedMode = profile === RELAXED;
      const customizedBool = profile === CUSTOMIZED;
      const settings = result.settings || INIT_RELAXED_PROFILE;
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

    if (changeType === RELAXED || changeType === FOCUSED) {
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
    const listItemsParameters = inputsParameters.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__.default, {
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
        onChange: () => this.handleBoolChange(FOCUSED),
        value: "secondary",
        color: "primary"
      }),
      label: "Focused",
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__.default, {
        checked: this.state.relaxedMode,
        onChange: () => this.handleBoolChange(RELAXED),
        value: "secondary",
        color: "primary"
      }),
      label: "Relaxed",
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__.default, {
      onChange: () => this.handleBoolChange(CUSTOMIZED),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzcz9lYTVkIl0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJFU1RPUkUiLCJORVhUIiwiUkVNT1ZFRCIsIkNMT1NFRF9ISVNUT1JZIiwiVElNRV9QRVJJT0RfVE9fQ09OU0lERVIiLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInJlbmRlclNhdmVCb29sZWFuIiwib25DaGFuZ2VkQ2FsbGJhY2siLCJjaGFuZ2VzIiwiY2hhbmdlc0Nsb3NlZEhpc3RvcnkiLCJzZXRTdGF0ZSIsImNsb3NlZF9oaXN0b3J5IiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwiY2hyb21lIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwicmVzdWx0IiwibmV4dExpc3QiLCJvbkNoYW5nZWQiLCJhZGRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlTGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJmb3JjZVJlbmRlciIsInJlbW92ZUl0ZW0iLCJrZXkiLCJpdGVtcyIsInJldmVyc2UiLCJyZXN0b3JlVGFiIiwicmVtb3ZlTmV4dEl0ZW0iLCJtZXNzYWdlVHlwZSIsInJlc3RvcmVkVGFiIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidGFiSWQiLCJmaWx0ZXJMaXN0Iiwic2VsZWN0ZWRMaXN0Iiwibm93IiwiRGF0ZSIsImZpbHRlciIsIml0ZW0iLCJNYXRoIiwibWF4Iiwic3RhdGlzdGljcyIsInVwZGF0ZWRfYXQiLCJsYXN0X2FjdGl2ZV90aW1lc3RhbXAiLCJyZW5kZXJMaXN0IiwibGlzdFRvQmVSZW5kZXJlZCIsImNsYXNzZXMiLCJNQVhfTEVOR1RIX1RJVExFIiwibWFwIiwid2Vic2l0ZSIsImkiLCJkZWxldGlvblRpbWUiLCJkZWxldGlvbl90aW1lIiwiZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUiLCJ0b1RpbWVTdHJpbmciLCJzcGxpdCIsImhvdXJzX2RlbGV0aW9uIiwibWludXRlc19kZWxldGlvbiIsInRpdGxlIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY29uY2F0IiwiaXNOZXh0IiwiZmlsdGVyZWRMaXN0IiwibGlzdFdlYnNpdGVzIiwiZ3JlZW5UaXRsZSIsImxpc3RJdGVtcyIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsInVybCIsIml0ZW1UZXh0IiwiYnV0dG9uIiwicmVuZGVyIiwibnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIiwiYm9sZFRleHQiLCJtaWRkbGVUZXh0Iiwic3R5bGVzIiwidGhlbWUiLCJmb250U2l6ZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY29sb3IiLCJib3JkZXJCb3R0b20iLCJtYXhXaWR0aCIsImZvbnRXZWlnaHQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5Ub3AiLCJ3aXRoU3R5bGVzIiwiSG9tZURpc3BhdGNoZXIiLCJhcHBCYXJWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJkaXNwYXRjaFBhZ2UiLCJyb290Iiwibm90aWZpY2F0aW9uIiwiaG9tZUNvbnRhaW5lciIsImUiLCJ2IiwidGFiIiwibWluV2lkdGgiLCJsZWZ0IiwiT1BUSU1BTF9OVU1CRVJfVEFCUyIsIlBPTElDWSIsIlJFTEFYRUQiLCJGT0NVU0VEIiwiQ1VTVE9NSVpFRCIsIklOSVRfUkVMQVhFRF9QUk9GSUxFIiwibWVtb3J5IiwiY2FjaGVfc2l6ZSIsIm1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlIiwibWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3IiLCJwb2xpY3kiLCJ0YXJnZXRfdGFicyIsInNjb3JlX3RocmVzaG9sZCIsImRlY2F5IiwibWluX3RpbWUiLCJhY3RpdmUiLCJwaW5uZWQiLCJhdWRpYmxlIiwic2NvcmVyIiwibWluX2FjdGl2ZSIsInByb3RlY3Rpb25fdGltZSIsImNhY2hlZF9kZWNheSIsIlNldHRpbmdzIiwicGF0aCIsInBhcmFtZXRlciIsInNldHRpbmdzIiwidGFyZ2V0IiwidmFsdWUiLCJmb2N1c2VkTW9kZSIsInJlbGF4ZWRNb2RlIiwiY3VzdG9taXplZEJvb2wiLCJjaGFuZ2VzU2V0dGluZ3MiLCJjaGFuZ2VzUHJvZmlsZSIsInByb2ZpbGUiLCJhY3RpdmVfcHJvZmlsZSIsImhhbmRsZUJvb2xDaGFuZ2UiLCJjaGFuZ2VUeXBlIiwibm90aWZ5VXNlciIsImhhbmRsZVNhdmVQYXJhbWV0ZXJzIiwiZW5xdWV1ZVNuYWNrYmFyIiwidmFyaWFudCIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImF1dG9IaWRlRHVyYXRpb24iLCJpbnB1dHNQYXJhbWV0ZXJzIiwibGFiZWwiLCJzb3VyY2UiLCJpbnB1dFByb3BzIiwibWluIiwic3RlcCIsImxpc3RJdGVtc1BhcmFtZXRlcnMiLCJpbmRleCIsImhhbmRsZUNoYW5nZVBhcmFtZXRlcnMiLCJ0ZXh0RmllbGQiLCJpbnRyb2R1Y3Rpb25CbG9jayIsImFjdGl2ZUJhciIsInNldHRpbmdzV3JhcHBlciIsImZpcnN0Qm9vbGVhbnMiLCJzZXR0aW5nc0Jsb2NrIiwic2Vjb25kYXJ5QnV0dG9uIiwid2l0aFNuYWNrYmFyIiwianVzdGlmeUNvbnRlbnQiLCJtYXhIZWlnaHQiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxHQUFULEdBQWU7QUFDYixzQkFBTywyREFBQywrREFBRCxPQUFQO0FBQ0Q7O0FBRURDLHVEQUFBLGVBQWdCLDJEQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcsVUFBVSxDQUExQyxDLENBQTZDOztBQUU3QyxNQUFNQyxJQUFOLFNBQW1CQyxnREFBbkIsQ0FBaUM7QUFDL0JDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFBRUMsdUJBQWlCLEVBQUU7QUFBckIsS0FBYjs7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QixVQUFVQyxPQUFWLEVBQW1CO0FBQzFDLFlBQU1DLG9CQUFvQixHQUFH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c3QvanF1ZXJ5Lm1pbic7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5taW4nO1xuaW1wb3J0ICcuLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZURpc3BhdGNoZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lRGlzcGF0Y2hlcic7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIDxIb21lRGlzcGF0Y2hlciAvPjtcbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhcic7XG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5cbmNvbnN0IFJFU1RPUkUgPSAnUkVTVE9SRSc7XG5jb25zdCBORVhUID0gJ05FWFQnO1xuY29uc3QgUkVNT1ZFRCA9ICdSRU1PVkVEJztcbmNvbnN0IENMT1NFRF9ISVNUT1JZID0gJ2Nsb3NlZF9oaXN0b3J5JztcbmNvbnN0IFRJTUVfUEVSSU9EX1RPX0NPTlNJREVSID0gMzYwMDAwMCAqIDI7IC8vIGluIG1pY3Jvc2Vjb25kXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlIH07XG4gICAgdGhpcy5vbkNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBjaGFuZ2VzQ2xvc2VkSGlzdG9yeSA9IGNoYW5nZXNbQ0xPU0VEX0hJU1RPUlldO1xuICAgICAgaWYgKGNoYW5nZXNDbG9zZWRIaXN0b3J5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNsb3NlZF9oaXN0b3J5OiBjaGFuZ2VzQ2xvc2VkSGlzdG9yeVsnbmV3VmFsdWUnXSxcbiAgICAgICAgICByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtDTE9TRURfSElTVE9SWV0sIChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IGNsb3NlZF9oaXN0b3J5ID0gcmVzdWx0LmNsb3NlZF9oaXN0b3J5IHx8IFtdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlZF9oaXN0b3J5IH0pO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuZXh0TGlzdDogW10gfSk7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVuZGVyU2F2ZUJvb2xlYW4pIHtcbiAgICAgIHRoaXMuZm9yY2VSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVJdGVtKGtleSkge1xuICAgIGxldCBpdGVtcyA9IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkucmV2ZXJzZSgpO1xuICAgIHRoaXMucmVzdG9yZVRhYihpdGVtcywga2V5LCBSRVNUT1JFKTtcbiAgfVxuXG4gIHJlbW92ZU5leHRJdGVtKGtleSkge1xuICAgIGxldCBpdGVtcyA9IHRoaXMuc3RhdGUubmV4dExpc3Q7XG4gICAgdGhpcy5yZXN0b3JlVGFiKGl0ZW1zLCBrZXksIFJFU1RPUkUpO1xuICB9XG5cbiAgcmVzdG9yZVRhYihpdGVtcywga2V5LCBtZXNzYWdlVHlwZSkge1xuICAgIGNvbnN0IHJlc3RvcmVkVGFiID0gaXRlbXNba2V5XTtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBtZXNzYWdlVHlwZTogbWVzc2FnZVR5cGUsXG4gICAgICB0YWJJZDogcmVzdG9yZWRUYWIudGFiSWQsXG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVJlbmRlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlIH0pO1xuICB9XG5cbiAgZmlsdGVyTGlzdChzZWxlY3RlZExpc3QpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZWxlY3RlZExpc3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBub3cgLVxuICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgaXRlbS5zdGF0aXN0aWNzLnVwZGF0ZWRfYXQsXG4gICAgICAgICAgICBpdGVtLnN0YXRpc3RpY3MubGFzdF9hY3RpdmVfdGltZXN0YW1wXG4gICAgICAgICAgKSA8XG4gICAgICAgIFRJTUVfUEVSSU9EX1RPX0NPTlNJREVSXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyTGlzdChsaXN0VG9CZVJlbmRlcmVkKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHNlbGVjdGVkTGlzdDtcbiAgICBjb25zdCBNQVhfTEVOR1RIX1RJVExFID0gNTA7XG5cbiAgICBzd2l0Y2ggKGxpc3RUb0JlUmVuZGVyZWQpIHtcbiAgICAgIGNhc2UgTkVYVDpcbiAgICAgICAgc2VsZWN0ZWRMaXN0ID0gdGhpcy5zdGF0ZS5uZXh0TGlzdCA/IHRoaXMuc3RhdGUubmV4dExpc3QgOiBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzZWxlY3RlZExpc3QgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5XG4gICAgICAgICAgPyB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5XG4gICAgICAgICAgOiBbXTtcbiAgICAgICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0Lm1hcCgod2Vic2l0ZSwgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlbGV0aW9uVGltZSA9IG5ldyBEYXRlKHdlYnNpdGUuZGVsZXRpb25fdGltZSk7XG4gICAgICAgICAgY29uc3QgZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUgPSBkZWxldGlvblRpbWVcbiAgICAgICAgICAgIC50b1RpbWVTdHJpbmcoKVxuICAgICAgICAgICAgLnNwbGl0KCcgJylbMF07XG4gICAgICAgICAgd2Vic2l0ZS5ob3Vyc19kZWxldGlvbiA9IGZvcm1hdHRlZF9kZWxldGlvbl90aW1lLnNwbGl0KCc6JylbMF07XG4gICAgICAgICAgd2Vic2l0ZS5taW51dGVzX2RlbGV0aW9uID0gZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUuc3BsaXQoJzonKVsxXTtcbiAgICAgICAgICBpZiAod2Vic2l0ZS50aXRsZSAmJiB3ZWJzaXRlLnRpdGxlLmxlbmd0aCA+IE1BWF9MRU5HVEhfVElUTEUpIHtcbiAgICAgICAgICAgIHdlYnNpdGUudGl0bGUgPSB3ZWJzaXRlLnRpdGxlXG4gICAgICAgICAgICAgIC5zdWJzdHJpbmcoMCwgTUFYX0xFTkdUSF9USVRMRSlcbiAgICAgICAgICAgICAgLmNvbmNhdCgnLi4uJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB3ZWJzaXRlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgaXNOZXh0ID0gbGlzdFRvQmVSZW5kZXJlZCA9PT0gTkVYVDtcbiAgICBjb25zdCBmaWx0ZXJlZExpc3QgPSB0aGlzLmZpbHRlckxpc3Qoc2VsZWN0ZWRMaXN0KS5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RXZWJzaXRlc30+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmVlblRpdGxlfT5cbiAgICAgICAgICB7aXNOZXh0ID8gJ05leHQgdGFicyB0byBiZSBjbG9zZWQnIDogJ1RhYnMgY2xvc2VkIHRvZGF5J31cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaXN0IGRlbnNlPXt0cnVlfSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW1zfT5cbiAgICAgICAgICAgIHtmaWx0ZXJlZExpc3QubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICA8cD5ObyB0YWJzIGNsb3NlZCBpbiB0aGUgbGFzdCAyIGhvdXJzLjwvcD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5tYXAoKHdlYnNpdGUsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRBdmF0YXJXaXRoVGltZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aW1lRGlzcGxheX0+XG4gICAgICAgICAgICAgICAgICAgICAge2Ake3dlYnNpdGUuaG91cnNfZGVsZXRpb259OiR7d2Vic2l0ZS5taW51dGVzX2RlbGV0aW9ufWB9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXt3ZWJzaXRlLnRpdGxlfSBzcmM9e3dlYnNpdGUuZmF2SWNvblVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXt3ZWJzaXRlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXt3ZWJzaXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTmV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucmVtb3ZlTmV4dEl0ZW0uYmluZCh0aGlzLCBpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucmVtb3ZlSXRlbS5iaW5kKHRoaXMsIGkpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXNOZXh0ID8gJ1NraXAnIDogJ1Jlc3RvcmUnfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG51bWJlckNsb3NlZFRhYnNMYXN0SG91ciA9IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnlcbiAgICAgID8gdGhpcy5maWx0ZXJMaXN0KHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkpLmxlbmd0aFxuICAgICAgOiAwO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdG9kby1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuYm9sZFRleHR9PlxuICAgICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID8gbnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIDogJ05vJ30gdGFiXG4gICAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPT09IDEgPyAnJyA6ICdzJ31cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5taWRkbGVUZXh0fT5cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAge251bWJlckNsb3NlZFRhYnNMYXN0SG91ciA9PT0gMSA/ICd3YXMnIDogJ3dlcmUnfSBjbG9zZWQgaW4gdGhlXG4gICAgICAgICAgICAgIGxhc3R7JyAnfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmJvbGRUZXh0fT4gMiBob3VycyEgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJMaXN0LmJpbmQodGhpcykoUkVNT1ZFRCl9XG4gICAgICAgICAgey8qe3RoaXMucmVuZGVyTGlzdC5iaW5kKHRoaXMpKE5FWFQpfSovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgfSxcbiAgZ3JlZW5UaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgY29sb3I6ICcjMWI5ZTc0JyxcbiAgICBib3JkZXJCb3R0b206IGAycHggc29saWQgIzFiOWU3NGAsXG4gICAgbWF4V2lkdGg6IDIyNSxcbiAgfSxcbiAgYm9sZFRleHQ6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0sXG4gIG1pZGRsZVRleHQ6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6ICcjMWI5ZTc0JyxcbiAgICBib3JkZXJDb2xvcjogJyMxYjllNzQnLFxuICAgIGZvbnRTaXplOiAxMixcbiAgfSxcbiAgaXRlbVRleHQ6IHtcbiAgICBtYXhXaWR0aDogMjAwLFxuICB9LFxuICB0aW1lRGlzcGxheToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTQsXG4gIH0sXG4gIGdyaWRBdmF0YXJXaXRoVGltZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgfSxcbiAgbGlzdFdlYnNpdGVzOiB7XG4gICAgbWFyZ2luVG9wOiAyMCxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhvbWUpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vU2V0dGluZ3MnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vSG9tZSc7XG5pbXBvcnQgeyBTbmFja2JhclByb3ZpZGVyIH0gZnJvbSAnbm90aXN0YWNrJztcblxuY2xhc3MgSG9tZURpc3BhdGNoZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgYXBwQmFyVmFsdWU6ICdIT01FJyB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFwcEJhclZhbHVlOiAnSE9NRScgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQsIG5ld1ZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFwcEJhclZhbHVlOiBuZXdWYWx1ZSB9KTtcbiAgfVxuXG4gIGRpc3BhdGNoUGFnZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUpIHtcbiAgICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgICByZXR1cm4gPEhvbWUgLz47XG4gICAgICBjYXNlICdTRVRUSU5HUyc6XG4gICAgICAgIHJldHVybiA8U2V0dGluZ3MgLz47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPGRpdj5UaGlzIGlzIGFuIGVycm9yIHBhZ2U8L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFNuYWNrYmFyUHJvdmlkZXJcbiAgICAgICAgbWF4U25hY2s9ezJ9XG4gICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICByb290OiBjbGFzc2VzLm5vdGlmaWNhdGlvbixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZUNvbnRhaW5lcn0+XG4gICAgICAgICAgPFBhcGVyIHNxdWFyZT5cbiAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFwcEJhclZhbHVlID8gdGhpcy5zdGF0ZS5hcHBCYXJWYWx1ZSA6ICdIT01FJ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCB2KSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCB2KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkhvbWVcIiB2YWx1ZT17J0hPTUUnfSBjbGFzc05hbWU9e2NsYXNzZXMudGFifSAvPlxuICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiU2V0dGluZ3NcIiB2YWx1ZT17J1NFVFRJTkdTJ30gY2xhc3NOYW1lPXtjbGFzc2VzLnRhYn0gLz5cbiAgICAgICAgICAgICAgey8qPFRhYiBsYWJlbD1cIkRlYnVnXCIgdmFsdWU9e1wiREVCVUdcIn0gZGlzYWJsZWQgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYn0vPiovfVxuICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgPGRpdj57dGhpcy5kaXNwYXRjaFBhZ2UoKX08L2Rpdj5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU25hY2tiYXJQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVEaXNwYXRjaGVyO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lRGlzcGF0Y2hlciBmcm9tICcuL0hvbWVEaXNwYXRjaGVyJztcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiL1RhYic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGhvbWVDb250YWluZXI6IHtcbiAgICBtaW5XaWR0aDogNDAwLFxuICB9LFxuICB0YWI6IHtcbiAgICBjb2xvcjogJyMxYjllNzQnLFxuICB9LFxuICBub3RpZmljYXRpb246IHtcbiAgICBsZWZ0OiAxNTAsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShIb21lRGlzcGF0Y2hlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5JztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcbmltcG9ydCBUdW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHVuZSc7XG5pbXBvcnQgeyB3aXRoU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xuXG5jb25zdCBPUFRJTUFMX05VTUJFUl9UQUJTID0gJ3RhcmdldF90YWJzJztcbmNvbnN0IFBPTElDWSA9ICdwb2xpY3knO1xuY29uc3QgUkVMQVhFRCA9ICdyZWxheGVkJztcbmNvbnN0IEZPQ1VTRUQgPSAnZm9jdXNlZCc7XG5jb25zdCBDVVNUT01JWkVEID0gJ2N1c3RvbWl6ZWQnO1xuXG5jb25zdCBJTklUX1JFTEFYRURfUFJPRklMRSA9IHtcbiAgbWVtb3J5OiB7XG4gICAgY2FjaGVfc2l6ZTogNSxcbiAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMSAqIDEwMDAsXG4gICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDUgKiAxMDAwLFxuICB9LFxuICBwb2xpY3k6IHtcbiAgICB0YXJnZXRfdGFiczogMTIsXG4gICAgc2NvcmVfdGhyZXNob2xkOiA1MCxcbiAgICBkZWNheTogMC44LFxuICAgIG1pbl90aW1lOiAzICogMTAwMCxcblxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgcGlubmVkOiBmYWxzZSxcbiAgICBhdWRpYmxlOiBmYWxzZSxcbiAgfSxcbiAgc2NvcmVyOiB7XG4gICAgbWluX2FjdGl2ZTogMyAqIDEwMDAsXG4gICAgcHJvdGVjdGlvbl90aW1lOiA1ICogNjAgKiAxMDAwLFxuICAgIGNhY2hlZF9kZWNheTogMC43LFxuICB9LFxufTtcblxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvY3VzZWRNb2RlOiBmYWxzZSxcbiAgICAgIHJlbGF4ZWRNb2RlOiBmYWxzZSxcbiAgICAgIGN1c3RvbWl6ZWRCb29sOiBmYWxzZSxcbiAgICAgIHNldHRpbmdzOiBJTklUX1JFTEFYRURfUFJPRklMRSxcbiAgICAgIHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMub25DaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgY29uc3QgY2hhbmdlc1NldHRpbmdzID0gY2hhbmdlc1snc2V0dGluZ3MnXTtcbiAgICAgIGNvbnN0IGNoYW5nZXNQcm9maWxlID0gY2hhbmdlc1snYWN0aXZlX3Byb2ZpbGUnXTtcbiAgICAgIGlmIChjaGFuZ2VzU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2V0dGluZ3M6IGNoYW5nZXNTZXR0aW5nc1snbmV3VmFsdWUnXSxcbiAgICAgICAgICByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlc1Byb2ZpbGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZm9jdXNlZE1vZGU6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBGT0NVU0VELFxuICAgICAgICAgIHJlbGF4ZWRNb2RlOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gUkVMQVhFRCxcbiAgICAgICAgICBjdXN0b21pemVkQm9vbDogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IENVU1RPTUlaRUQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcbiAgICAgIFsnYWN0aXZlX3Byb2ZpbGUnLCAnc2V0dGluZ3MnXSxcbiAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9IHJlc3VsdC5hY3RpdmVfcHJvZmlsZSB8fCBSRUxBWEVEO1xuICAgICAgICBjb25zdCBmb2N1c2VkTW9kZSA9IHByb2ZpbGUgPT09IEZPQ1VTRUQ7XG4gICAgICAgIGNvbnN0IHJlbGF4ZWRNb2RlID0gcHJvZmlsZSA9PT0gUkVMQVhFRDtcbiAgICAgICAgY29uc3QgY3VzdG9taXplZEJvb2wgPSBwcm9maWxlID09PSBDVVNUT01JWkVEO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHJlc3VsdC5zZXR0aW5ncyB8fCBJTklUX1JFTEFYRURfUFJPRklMRTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZm9jdXNlZE1vZGUsXG4gICAgICAgICAgcmVsYXhlZE1vZGUsXG4gICAgICAgICAgY3VzdG9taXplZEJvb2wsXG4gICAgICAgICAgc2V0dGluZ3MsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVuZGVyU2F2ZUJvb2xlYW4pIHtcbiAgICAgIHRoaXMuZm9yY2VSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCb29sQ2hhbmdlKGNoYW5nZVR5cGUpIHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBtZXNzYWdlVHlwZTogJ1NFVFRJTkdTX1BST0ZJTEUnLFxuICAgICAgcHJvZmlsZTogY2hhbmdlVHlwZSxcbiAgICB9KTtcbiAgICBpZiAoY2hhbmdlVHlwZSA9PT0gUkVMQVhFRCB8fCBjaGFuZ2VUeXBlID09PSBGT0NVU0VEKSB7XG4gICAgICB0aGlzLm5vdGlmeVVzZXIoKTtcbiAgICB9XG4gIH1cblxuICBmb3JjZVJlbmRlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVuZGVyU2F2ZUJvb2xlYW46IGZhbHNlIH0pO1xuICB9XG5cbiAgaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QQVJBTUVURVJTJyxcbiAgICAgIHNldHRpbmdzOiB0aGlzLnN0YXRlLnNldHRpbmdzLFxuICAgIH0pO1xuICAgIHRoaXMubm90aWZ5VXNlcigpO1xuICB9XG5cbiAgbm90aWZ5VXNlcigpIHtcbiAgICB0aGlzLnByb3BzLmVucXVldWVTbmFja2JhcignTmV3IFNldHRpbmdzIGFyZSBzYXZlZC4nLCB7XG4gICAgICB2YXJpYW50OiAnc3VjY2VzcycsXG4gICAgICBhbmNob3JPcmlnaW46IHtcbiAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogNzUwLFxuICAgICAgYXV0b0hpZGVEdXJhdGlvbjogMTUwMCxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZVBhcmFtZXRlcnMgPSAocGF0aCwgcGFyYW1ldGVyKSA9PiAoZXZlbnQpID0+IHtcbiAgICBsZXQgc2V0dGluZ3MgPSB0aGlzLnN0YXRlLnNldHRpbmdzO1xuICAgIHNldHRpbmdzW3BhdGhdW3BhcmFtZXRlcl0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNldHRpbmdzOiBzZXR0aW5ncywgcmVuZGVyU2F2ZUJvb2xlYW46IHRydWUgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dHNQYXJhbWV0ZXJzID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ09wdGltYWwgbnVtYmVyIG9mIHRhYnMgJyxcbiAgICAgICAgc291cmNlOiB0aGlzLnN0YXRlLnNldHRpbmdzLFxuICAgICAgICBwYXRoOiBQT0xJQ1ksXG4gICAgICAgIHBhcmFtZXRlcjogT1BUSU1BTF9OVU1CRVJfVEFCUyxcbiAgICAgICAgaW5wdXRQcm9wczogeyBtaW46ICcxJywgbWF4OiAnMTAwJywgc3RlcDogJzEnIH0sXG4gICAgICB9LFxuICAgIF07XG4gICAgY29uc3QgbGlzdEl0ZW1zUGFyYW1ldGVycyA9IGlucHV0c1BhcmFtZXRlcnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzKGl0ZW0ucGF0aCwgaXRlbS5wYXJhbWV0ZXIpfVxuICAgICAgICB2YWx1ZT17aXRlbS5zb3VyY2VbaXRlbS5wYXRoXVtpdGVtLnBhcmFtZXRlcl19XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICBpbnB1dFByb3BzPXtpdGVtLmlucHV0UHJvcHN9XG4gICAgICAvPlxuICAgICkpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdG9kby1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmludHJvZHVjdGlvbkJsb2NrfT5cbiAgICAgICAgICAgIDxUdW5lSWNvbiAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICAgICAgU2VsZWN0IHRoZSBzdWl0aW5nIG1vZGUgb3IgY3VzdG9taXplIGl0LlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3RpdmVCYXJ9PjwvZGl2PlxuICAgICAgICAgICAgey8qPGgxIGNsYXNzTmFtZT17XCJib2xkLXRpdGxlXCJ9PlNlbGVjdCBUYWJieSdzIG9wZXJhdGluZyBtb2RlOjwvaDE+Ki99XG4gICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NXcmFwcGVyfT5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmZvY3VzZWRNb2RlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVCb29sQ2hhbmdlKEZPQ1VTRUQpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbD1cIkZvY3VzZWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVsYXhlZE1vZGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoUkVMQVhFRCl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVsYXhlZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0Qm9vbGVhbnN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlQm9vbENoYW5nZShDVVNUT01JWkVEKX1cbiAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbD1cIkN1c3RvbWl6ZSB5b3VyIHNldHRpbmdzJyBwYXJhbWV0ZXJzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NCbG9ja30+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgICAgICAvL2NsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbXNQYXJhbWV0ZXJzfVxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kYXJ5QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXt0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sID8gJ291dGxpbmUtcHJpbWFyeScgOiAncHJpbWFyeSd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNuYWNrYmFyKFNldHRpbmdzKTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9TZXR0aW5ncyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWFyZ2luVG9wOiAwLFxuICAgIG1hcmdpbkxlZnQ6IDIwLFxuICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgfSxcbiAgYWN0aXZlQmFyOiB7XG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgfSxcblxuICBzZXR0aW5nc1dyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgbWF4SGVpZ2h0OiAnNTAlJyxcbiAgICAvL3dpZHRoOiAnMTAwJScsXG4gICAgLy9oZWlnaHQ6ICcxMDB2aCcsXG4gIH0sXG4gIHNlY29uZGFyeUJ1dHRvbjoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gICAgLy9tYXJnaW5Eb3duOiA1LFxuICAgIGNvbG9yOiAnIzFiOWU3NCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjMWI5ZTc0JyxcbiAgfSxcbiAgbm90aWZpY2F0aW9uOiB7XG4gICAgbWF4V2lkdGg6IDE1MCxcbiAgfSxcbiAgaW50cm9kdWN0aW9uQmxvY2s6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgLy9tYXJnaW5Ub3A6IDIwLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTcsXG4gICAgbWFyZ2luTGVmdDogMTAsXG4gIH0sXG4gIHNldHRpbmdzQmxvY2s6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgZmlyc3RCb29sZWFuczoge1xuICAgIG1heFdpZHRoOiAnNDAlJyxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFNldHRpbmdzKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyFib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudG9kby1saXN0LWNvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY2FyZC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWI5ZTc0O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBjb2xvcjogIzFiOWU3NDtcXG4gIGJvcmRlci1jb2xvcjogIzFiOWU3NDtcXG59XFxuXFxuLmJvbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==