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
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ErrorOutline */ "./node_modules/@material-ui/icons/ErrorOutline.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils */ "./src/services/utils.js");
/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui-search-bar */ "./node_modules/material-ui-search-bar/lib/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const RESTORE = 'RESTORE';
const SHELL_RESTORE = 'SHELL_RESTORE';
const REMOVED = 'REMOVED';
const CLOSED_HISTORY = 'closed_history';
const NUMBER_HOURS_DAY = 24;
const TIME_PERIOD_24H = 3600000 * NUMBER_HOURS_DAY; // in microsecond

const TIME_PERIOD_72H = 3600000 * NUMBER_HOURS_DAY * 3; // in microsecond

class Home extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "searchOnChange", value => {
      this.setState({
        searchValue: value
      });
    });

    _defineProperty(this, "searchOnRequestSearch", event => {});

    _defineProperty(this, "searchOnCancel", () => {
      this.setState({
        searchValue: ''
      });
    });

    (0,_services_utils__WEBPACK_IMPORTED_MODULE_3__.setAllReadBadge)();
    this.state = {
      renderSaveBoolean: false
    };

    this.onChangedCallback = function (changes) {
      const changesClosedHistory = changes[CLOSED_HISTORY];

      if (changesClosedHistory) {
        this.setState({
          closed_history: changesClosedHistory['newValue'],
          renderSaveBoolean: true,
          searchValue: ''
        });
      }
    }.bind(this);
  }

  componentDidMount() {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.local.get([CLOSED_HISTORY]).then(result => {
      const closed_history = result.closed_history || [];
      this.setState({
        closed_history
      });
    });
    this.setState({
      nextList: []
    });
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    (0,_services_utils__WEBPACK_IMPORTED_MODULE_3__.setAllReadBadge)();
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.onChanged.removeListener(this.onChangedCallback);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.renderSaveBoolean) {
      this.forceRender();
    }
  }

  removeItem(listItems, key, e) {
    if (e.ctrlKey || e.metaKey) {
      // metaKey is cmd key on mac
      this.restoreTab(listItems, key, SHELL_RESTORE);
    } else {
      this.restoreTab(listItems, key, RESTORE);
    }
  }

  restoreTab(items, key, messageType) {
    const restoredTab = items[key];
    const closed_history = this.state.closed_history.filter(item => item.uuid !== restoredTab.uuid);
    this.setState({
      closed_history: closed_history,
      renderSaveBoolean: true
    });
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.sendMessage({
      messageType: messageType,
      uuid: restoredTab.uuid
    });
  }

  forceRender() {
    this.setState({
      renderSaveBoolean: false
    });
  }

  filterList(selectedList, endPeriod) {
    const now = Date.now();
    return selectedList.filter(item => {
      return now - item.deletion_time < endPeriod;
    });
  }

  filterListOnDate(selectedList, beginningDay) {
    const endDay = new Date(beginningDay.getTime());
    endDay.setDate(endDay.getDate() + 1);
    return selectedList.filter(item => {
      return beginningDay.getTime() < item.deletion_time && item.deletion_time < endDay.getTime();
    });
  }

  generateBeginDate(rollBackDays) {
    const beginningDay = new Date();
    beginningDay.setDate(beginningDay.getDate() - rollBackDays);
    beginningDay.setHours(0, 0, 0, 0);
    const dateDayBegin = String(beginningDay.getDate()).padStart(2, '0');
    const dateMonthBegin = String(beginningDay.getMonth() + 1).padStart(2, '0');
    return [beginningDay, dateDayBegin + '/' + dateMonthBegin];
  }

  renderList() {
    const {
      classes
    } = this.props;
    let selectedList = this.state.closed_history ? this.filterList(this.state.closed_history, TIME_PERIOD_72H) : [];
    selectedList = selectedList.map(website => {
      if (typeof website !== 'undefined') {
        const deletionTime = new Date(website.deletion_time);
        const formatted_deletion_time = deletionTime.toTimeString().split(' ')[0];
        website.hours_deletion = formatted_deletion_time.split(':')[0];
        website.minutes_deletion = formatted_deletion_time.split(':')[1];
        website.truncated_url = website.url;
      }

      return website;
    });

    if (typeof this.state.searchValue !== 'undefined' && this.state.searchValue.length > 0) {
      const searchPattern = new RegExp(this.state.searchValue.split(' ').map(term => `(?=.*${term})`).join(''), 'i');
      selectedList = selectedList.filter(option => option.title.match(searchPattern) || option.url.match(searchPattern));
    }

    const generatedDateToday = this.generateBeginDate(0);
    const generatedDateYesterday = this.generateBeginDate(1);
    const generatedDate2daysAgo = this.generateBeginDate(2);
    const generatedDate3daysAgo = this.generateBeginDate(3);
    const filteredListToday = this.filterListOnDate(selectedList, generatedDateToday[0]).reverse();
    const filteredListYesterday = this.filterListOnDate(selectedList, generatedDateYesterday[0]).reverse();
    const filteredList2daysAgo = this.filterListOnDate(selectedList, generatedDate2daysAgo[0]).reverse();
    const filteredList3daysAgo = this.filterListOnDate(selectedList, generatedDate3daysAgo[0]).reverse();
    let yesterdayTitle = [];
    let twoDaysTitle = [];
    let threeDaysTitle = [];

    if (filteredListYesterday.length > 0) {
      yesterdayTitle = [{
        day: generatedDateYesterday[1],
        text: 'Yesterday -'
      }];
    }

    if (filteredList2daysAgo.length > 0) {
      twoDaysTitle = [{
        day: generatedDate2daysAgo[1],
        text: 'Previous day -'
      }];
    }

    if (filteredList3daysAgo.length > 0) {
      threeDaysTitle = [{
        day: generatedDate3daysAgo[1],
        text: ''
      }];
    }

    const filteredList = filteredListToday.concat(yesterdayTitle).concat(filteredListYesterday).concat(twoDaysTitle).concat(filteredList2daysAgo).concat(threeDaysTitle).concat(filteredList3daysAgo);

    const listItem = myFilteredList => ({
      index,
      style
    }) => {
      const website = myFilteredList[index];

      if (typeof website.day !== 'undefined') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
          key: index,
          style: style
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__.default, {
          ContainerComponent: "div"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__.default, {
          primary: `${website.text} ${website.day}`,
          classes: {
            primary: classes.primaryTitleContainer
          },
          className: classes.listTitleText
        })));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        key: index,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__.default, {
        ContainerComponent: "div"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: classes.gridAvatarWithTime
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {
        className: classes.timeDisplay
      }, `${website.hours_deletion}:${website.minutes_deletion}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_8__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__.default, {
        variant: "square",
        alt: website.title,
        src: website.favIconUrl,
        className: classes.avatarContainer
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__.default, {
        primary: website.truncated_url,
        secondary: website.title,
        classes: {
          primary: classes.primaryTextContainer,
          secondary: classes.secondaryTextContainer
        },
        className: classes.itemText
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_10__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: classes.buttonContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
        size: "small",
        onClick: this.removeItem.bind(this, myFilteredList, index),
        variant: "outlined",
        color: "secondary",
        className: classes.button
      }, 'Restore')))));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.listWebsites
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(material_ui_search_bar__WEBPACK_IMPORTED_MODULE_4__.default, {
      placeholder: "Search on last 72h",
      onChange: this.searchOnChange,
      onRequestSearch: this.searchOnRequestSearch,
      onCancelSearch: this.searchOnCancel,
      value: this.state.searchValue,
      className: classes.searchBar
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.list
    }, filteredList.length === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_window__WEBPACK_IMPORTED_MODULE_2__.FixedSizeList, {
      height: Math.min(80 * filteredList.length, 300),
      itemCount: filteredList.length,
      itemSize: 80
    }, listItem(filteredList))));
  }

  render() {
    const {
      classes
    } = this.props;
    const numberClosedTabsLastHour = this.state.closed_history ? this.filterList(this.state.closed_history, TIME_PERIOD_24H).length : 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      variant: "h3",
      className: classes.title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {
      className: classes.boldNumber
    }, numberClosedTabsLastHour ? numberClosedTabsLastHour : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.textOnRight
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {
      className: classes.topText
    }, ' ', "tab", numberClosedTabsLastHour <= 1 ? '' : 's', " closed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.default, {
      className: classes.middleText
    }, " in the last ", `${NUMBER_HOURS_DAY} hours`, " "))), this.renderList.bind(this)(REMOVED), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.footerContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_12__.default, {
      color: "secondary",
      className: classes.iconContainer
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_13__.default, {
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
    alignItems: 'start'
  },
  greenTitle: {
    fontSize: 16,
    display: 'flex',
    flexDirection: 'row',
    borderBottom: `2px solid #00b9aa`,
    maxWidth: 225
  },
  listTitle: {
    fontSize: 16,
    maxHeight: 30
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
    whiteSpace: 'break-spaces',
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
    fontSize: 16,
    overflowWrap: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxHeight: 22
  },
  secondaryTextContainer: {
    fontSize: 13
  },
  primaryTitleContainer: {
    fontWeight: 'bold',
    fontSize: 16
  },
  listTitleText: {
    marginTop: theme.spacing(4.5)
  },
  listContainer: {
    marginTop: theme.spacing(1)
  },
  searchBar: {
    marginBottom: theme.spacing(1),
    maxHeight: theme.spacing(5)
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
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/FormGroup.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/Switch.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Tune */ "./node_modules/@material-ui/icons/Tune.js");
/* harmony import */ var _material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/HelpOutline */ "./node_modules/@material-ui/icons/HelpOutline.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/Fade.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/settingsProfiles.js */ "./src/config/settingsProfiles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/components/utils.js");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utils */ "./src/services/utils.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























const LightTooltip = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.default)(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 1)',
    boxShadow: theme.shadows[1],
    fontSize: 13,
    marginBottom: theme.spacing(0.5)
  }
}))(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__.default);

class Settings extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChangeParameters", (path, parameter) => event => {
      let settings = this.state.settings;
      const nextValue = event.target.value;

      if ((0,_services_utils__WEBPACK_IMPORTED_MODULE_5__.isInteger)(nextValue) || nextValue.length === 0) {
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
        inactivePolicy = (0,_services_utils__WEBPACK_IMPORTED_MODULE_5__.removeItem)(inactivePolicy, this.state.focusedWindowId);
        webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.sendMessage({
          messageType: 'REMOVE_INACTIVE_POLICY',
          windowId: this.state.focusedWindowId
        });
      } else {
        inactivePolicy.push(this.state.focusedWindowId);
        webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.sendMessage({
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
      settings: _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.INIT_FOCUSED_PROFILE,
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
          focusedMode: changesProfile['newValue'] === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.FOCUSED,
          relaxedMode: changesProfile['newValue'] === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.RELAXED,
          customizedBool: changesProfile['newValue'] === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.CUSTOMIZED
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
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.local.get(['active_profile', 'settings', 'focused_window_id', 'inactive_policy']).then(result => {
      const profile = result.active_profile || _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.FOCUSED;
      const focusedMode = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.FOCUSED;
      const relaxedMode = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.RELAXED;
      const customizedBool = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.CUSTOMIZED;
      const settings = result.settings || _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.INIT_FOCUSED_PROFILE;
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
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.onChanged.removeListener(this.onChangedCallback);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.renderSaveBoolean) {
      this.forceRender();
    }
  }

  handleBoolChange(changeType) {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.sendMessage({
      messageType: 'SETTINGS_PROFILE',
      profile: changeType
    });

    if (changeType === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.RELAXED || changeType === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.FOCUSED) {
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

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.checkSettings)(this.state.settings)) {
      webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.sendMessage({
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
      path: _utils__WEBPACK_IMPORTED_MODULE_4__.POLICY,
      parameter: _utils__WEBPACK_IMPORTED_MODULE_4__.OPTIMAL_NUMBER_TABS,
      inputProps: {
        min: '1',
        max: '100',
        step: '1'
      }
    }];
    const listItemsParameters = inputsParameters.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__.default, {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.mainBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_10__.default, {
        checked: this.state.focusedWindowId && this.state.inactivePolicy ? !this.state.inactivePolicy.includes(this.state.focusedWindowId) : true,
        onChange: this.handleSwitch,
        color: "secondary",
        className: classes.switchWrapper
      }),
      className: classes.switchContainer,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
        className: classes.styleLabel
      }, "Enable on this window")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.introductionBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_12__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.parametersTitle
    }, "Select your profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_13__.default, {
      className: classes.settingsWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(LightTooltip, {
      title: 'tabby tends to keep 5 tabs',
      placement: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.firstProfilesContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14__.default, {
        checked: this.state.focusedMode,
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.FOCUSED),
        color: "secondary",
        className: classes.checkboxWrapper
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
        className: classes.styleLabel
      }, "Focus"),
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_15__.default, {
      className: classes.helpIcon
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(LightTooltip, {
      title: 'tabby tends to keep 12 tabs',
      placement: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.firstProfilesContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14__.default, {
        checked: this.state.relaxedMode,
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.RELAXED),
        color: "secondary",
        className: classes.checkboxWrapper
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
        className: classes.styleLabel
      }, "Relax"),
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_15__.default, {
      className: classes.helpIcon
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.customizeWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14__.default, {
        checked: this.state.customizedBool,
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_3__.CUSTOMIZED),
        color: "secondary",
        className: classes.checkboxWrapper
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
        className: classes.styleLabel
      }, "Customize"),
      className: classes.firstBooleans
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.settingsBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_16__.default, {
      required: true,
      fullWidth: true
    }, listItemsParameters), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__.default, {
      hidden: true,
      key: "hidden-textfield",
      disabled: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__.default, {
      size: "small",
      color: "secondary",
      disabled: !this.state.customizedBool,
      className: classes.secondaryButton,
      variant: "outlined",
      onClick: () => this.handleSaveParameters()
    }, "Save"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__.default, {
      variant: "text",
      onClick: this.handleOpen,
      className: classes.tipsButton
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabelTips
    }, "Help"), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_18__.default //disablePortal={true}
    , {
      className: classes.modal,
      open: this.state.openModal,
      onClose: this.handleClose,
      closeAfterTransition: true,
      BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_19__.default,
      BackdropProps: {
        timeout: 750,
        invisible: true
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_20__.default, {
      in: this.state.openModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_21__.default, {
      borderRadius: 6,
      className: classes.paper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.firstBlockModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.secondEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabel
    }, "Protect a tab"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.lastEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      src: '../../assets/static/icons/right_click.png',
      className: classes.leftClickWrapper
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabel
    }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabel
    }, "Pin"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.secondEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabel
    }, "Reopen multiple tabs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.secondEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabel
    }, "Ctrl"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabel
    }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      src: '../../assets/static/icons/left_click.png',
      className: classes.leftClickWrapper
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabel
    }, "How does tabby work?"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabelNext
    }, "tabby will not remove tabs right after their creation.", ' '), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabelNext
    }, "tabby takes well-thought-out decisions automatically."), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.footerModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_22__.default, {
      href: "https://tabby.us/faq",
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabelTips
    }, "FAQ available here"), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabelTips
    }, "tabby ", webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.getManifest().version), ' ')))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notistack__WEBPACK_IMPORTED_MODULE_2__.withSnackbar)(Settings));

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
    minWidth: theme.spacing(8),
    maxHeight: 20,
    marginTop: 5,
    pointerEvents: 'none'
  },
  firstProfilesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    maxWidth: theme.spacing(10)
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
    fontSize: 13,
    marginTop: theme.spacing(0.25),
    marginLeft: theme.spacing(1)
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
/*! export storageReset [provided] [used] [could be renamed] */
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
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/env.js */ "./src/config/env.js");




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

function isInteger(value) {
  return /^\d+$/.test(value);
}

function setAllReadBadge() {
  webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.browserAction.setBadgeText({
    text: ''
  }); // <-- set text to '' to remove the badge
}

function setUnreadBadge() {
  webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.browserAction.setBadgeBackgroundColor({
    color: [229, 92, 0, 128]
  });
  webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.browserAction.getBadgeText({}).then(function (badgeText) {
    let counter = 1;

    if (isInteger(badgeText)) {
      counter = parseInt(badgeText) + 1;
    }

    webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.browserAction.setBadgeText({
      text: `${counter}`
    });
  });
}

function isUserActive() {
  // Not compatible with Safari
  return webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.idle.queryState(Math.round(_config_env_js__WEBPACK_IMPORTED_MODULE_2__.MAX_ACTIVE_DEBOUNCE / 1000)).then(status => {
    if (status === 'active') {
      return true;
    } else if (status) {
      return false;
    } else {
      logger("Couldn't check user activity.");
      return true;
    }
  });
}

function storageReset() {
  return webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.storage.local.get(null).then(d => {
    return webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.storage.local.remove(Object.keys(d));
  }).then(() => {
    logger('Memory flushed.');
  });
}

function getLastFocusedWindow() {
  return webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.windows.getLastFocused({
    populate: false,
    windowTypes: ['normal']
  }).then(d => {
    return d.id;
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


if (true) {
  window.utils = {
    logger,
    copy,
    timeout,
    retryPromise,
    getDomain,
    setAllReadBadge,
    setUnreadBadge,
    isInteger,
    isUserActive,
    storageReset,
    getLastFocusedWindow,
    removeItem
  };
}

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
/******/ 			["./src/app/popup.js","vendors-node_modules_psl_index_js-node_modules_webextension-polyfill_dist_browser-polyfill_js","vendors-node_modules_material-ui_core_Typography_Typography_js-node_modules_material-ui_core_-cfbe3d"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9lbnYuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9zZXJ2aWNlcy91dGlscy5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzP2VhNWQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiQXBwIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUkVTVE9SRSIsIlNIRUxMX1JFU1RPUkUiLCJSRU1PVkVEIiwiQ0xPU0VEX0hJU1RPUlkiLCJOVU1CRVJfSE9VUlNfREFZIiwiVElNRV9QRVJJT0RfMjRIIiwiVElNRV9QRVJJT0RfNzJIIiwiSG9tZSIsIlB1cmVDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInNlYXJjaFZhbHVlIiwiZXZlbnQiLCJzZXRBbGxSZWFkQmFkZ2UiLCJzdGF0ZSIsInJlbmRlclNhdmVCb29sZWFuIiwib25DaGFuZ2VkQ2FsbGJhY2siLCJjaGFuZ2VzIiwiY2hhbmdlc0Nsb3NlZEhpc3RvcnkiLCJjbG9zZWRfaGlzdG9yeSIsImJpbmQiLCJjb21wb25lbnREaWRNb3VudCIsImJyb3dzZXIiLCJ0aGVuIiwicmVzdWx0IiwibmV4dExpc3QiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImZvcmNlUmVuZGVyIiwicmVtb3ZlSXRlbSIsImxpc3RJdGVtcyIsImtleSIsImUiLCJjdHJsS2V5IiwibWV0YUtleSIsInJlc3RvcmVUYWIiLCJpdGVtcyIsIm1lc3NhZ2VUeXBlIiwicmVzdG9yZWRUYWIiLCJmaWx0ZXIiLCJpdGVtIiwidXVpZCIsImZpbHRlckxpc3QiLCJzZWxlY3RlZExpc3QiLCJlbmRQZXJpb2QiLCJub3ciLCJEYXRlIiwiZGVsZXRpb25fdGltZSIsImZpbHRlckxpc3RPbkRhdGUiLCJiZWdpbm5pbmdEYXkiLCJlbmREYXkiLCJnZXRUaW1lIiwic2V0RGF0ZSIsImdldERhdGUiLCJnZW5lcmF0ZUJlZ2luRGF0ZSIsInJvbGxCYWNrRGF5cyIsInNldEhvdXJzIiwiZGF0ZURheUJlZ2luIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJkYXRlTW9udGhCZWdpbiIsImdldE1vbnRoIiwicmVuZGVyTGlzdCIsImNsYXNzZXMiLCJtYXAiLCJ3ZWJzaXRlIiwiZGVsZXRpb25UaW1lIiwiZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUiLCJ0b1RpbWVTdHJpbmciLCJzcGxpdCIsImhvdXJzX2RlbGV0aW9uIiwibWludXRlc19kZWxldGlvbiIsInRydW5jYXRlZF91cmwiLCJ1cmwiLCJsZW5ndGgiLCJzZWFyY2hQYXR0ZXJuIiwiUmVnRXhwIiwidGVybSIsImpvaW4iLCJvcHRpb24iLCJ0aXRsZSIsIm1hdGNoIiwiZ2VuZXJhdGVkRGF0ZVRvZGF5IiwiZ2VuZXJhdGVkRGF0ZVllc3RlcmRheSIsImdlbmVyYXRlZERhdGUyZGF5c0FnbyIsImdlbmVyYXRlZERhdGUzZGF5c0FnbyIsImZpbHRlcmVkTGlzdFRvZGF5IiwicmV2ZXJzZSIsImZpbHRlcmVkTGlzdFllc3RlcmRheSIsImZpbHRlcmVkTGlzdDJkYXlzQWdvIiwiZmlsdGVyZWRMaXN0M2RheXNBZ28iLCJ5ZXN0ZXJkYXlUaXRsZSIsInR3b0RheXNUaXRsZSIsInRocmVlRGF5c1RpdGxlIiwiZGF5IiwidGV4dCIsImZpbHRlcmVkTGlzdCIsImNvbmNhdCIsImxpc3RJdGVtIiwibXlGaWx0ZXJlZExpc3QiLCJpbmRleCIsInN0eWxlIiwicHJpbWFyeSIsInByaW1hcnlUaXRsZUNvbnRhaW5lciIsImxpc3RUaXRsZVRleHQiLCJncmlkQXZhdGFyV2l0aFRpbWUiLCJ0aW1lRGlzcGxheSIsImZhdkljb25VcmwiLCJhdmF0YXJDb250YWluZXIiLCJwcmltYXJ5VGV4dENvbnRhaW5lciIsInNlY29uZGFyeVRleHRDb250YWluZXIiLCJpdGVtVGV4dCIsImJ1dHRvbkNvbnRhaW5lciIsImJ1dHRvbiIsImxpc3RXZWJzaXRlcyIsInNlYXJjaE9uQ2hhbmdlIiwic2VhcmNoT25SZXF1ZXN0U2VhcmNoIiwic2VhcmNoT25DYW5jZWwiLCJzZWFyY2hCYXIiLCJsaXN0IiwiTWF0aCIsIm1pbiIsInJlbmRlciIsIm51bWJlckNsb3NlZFRhYnNMYXN0SG91ciIsImJvbGROdW1iZXIiLCJ0ZXh0T25SaWdodCIsInRvcFRleHQiLCJtaWRkbGVUZXh0IiwiZm9vdGVyQ29udGFpbmVyIiwiaWNvbkNvbnRhaW5lciIsImxpbmtUb0Zvcm0iLCJzdHlsZXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1heEhlaWdodCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwiZ3JlZW5UaXRsZSIsImZvbnRTaXplIiwiYm9yZGVyQm90dG9tIiwibWF4V2lkdGgiLCJsaXN0VGl0bGUiLCJjb2xvciIsInN1YlRleHQiLCJtYXJnaW5Ub3AiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsIm92ZXJmbG93V3JhcCIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsIm1pbldpZHRoIiwibWFyZ2luUmlnaHQiLCJsaXN0Q29udGFpbmVyIiwibWFyZ2luQm90dG9tIiwid2l0aFN0eWxlcyIsIkhvbWVEaXNwYXRjaGVyIiwibmV3VmFsdWUiLCJhcHBCYXJWYWx1ZSIsImxvZ2dlciIsImRpc3BhdGNoUGFnZSIsImRpc3BsYXlJY29uIiwiaGFuZGxlQ2hhbmdlIiwicm9vdCIsIm5vdGlmaWNhdGlvbiIsInZhcmlhbnRTdWNjZXNzIiwic3VjY2VzcyIsImhvbWVDb250YWluZXIiLCJncmlkTG9nb1RhYnMiLCJlbnNlbWJsZWxvZ28iLCJsb2dvRnVsbCIsInRhYiIsImxlZnQiLCJhbGxUYWJzIiwibG9nb0F2YXRhciIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsIkxpZ2h0VG9vbHRpcCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb21tb24iLCJ3aGl0ZSIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJUb29sdGlwIiwiU2V0dGluZ3MiLCJwYXRoIiwicGFyYW1ldGVyIiwic2V0dGluZ3MiLCJuZXh0VmFsdWUiLCJ0YXJnZXQiLCJpc0ludGVnZXIiLCJpbmFjdGl2ZVBvbGljeSIsImluY2x1ZGVzIiwiZm9jdXNlZFdpbmRvd0lkIiwid2luZG93SWQiLCJwdXNoIiwib3Blbk1vZGFsIiwiZm9jdXNlZE1vZGUiLCJyZWxheGVkTW9kZSIsImN1c3RvbWl6ZWRCb29sIiwiSU5JVF9GT0NVU0VEX1BST0ZJTEUiLCJjaGFuZ2VzU2V0dGluZ3MiLCJjaGFuZ2VzUHJvZmlsZSIsImNoYW5nZWRJbmFjdGl2ZVBvbGljeSIsIkZPQ1VTRUQiLCJSRUxBWEVEIiwiQ1VTVE9NSVpFRCIsInByb2ZpbGUiLCJhY3RpdmVfcHJvZmlsZSIsImZvY3VzZWRfd2luZG93X2lkIiwiaW5hY3RpdmVfcG9saWN5IiwiaGFuZGxlQm9vbENoYW5nZSIsImNoYW5nZVR5cGUiLCJub3RpZnlVc2VyIiwiaGFuZGxlU3dpdGNoIiwiaGFuZGxlU2F2ZVBhcmFtZXRlcnMiLCJjaGVja1NldHRpbmdzIiwiZW5xdWV1ZVNuYWNrYmFyIiwidmFyaWFudCIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImF1dG9IaWRlRHVyYXRpb24iLCJpbnB1dHNQYXJhbWV0ZXJzIiwibGFiZWwiLCJzb3VyY2UiLCJQT0xJQ1kiLCJPUFRJTUFMX05VTUJFUl9UQUJTIiwiaW5wdXRQcm9wcyIsIm1heCIsInN0ZXAiLCJsaXN0SXRlbXNQYXJhbWV0ZXJzIiwiaGFuZGxlQ2hhbmdlUGFyYW1ldGVycyIsInRleHRGaWVsZCIsIm1haW5CbG9jayIsInN3aXRjaFdyYXBwZXIiLCJzd2l0Y2hDb250YWluZXIiLCJzdHlsZUxhYmVsIiwiaW50cm9kdWN0aW9uQmxvY2siLCJwYXJhbWV0ZXJzVGl0bGUiLCJzZXR0aW5nc1dyYXBwZXIiLCJmaXJzdFByb2ZpbGVzQ29udGFpbmVyIiwiY2hlY2tib3hXcmFwcGVyIiwiZmlyc3RCb29sZWFucyIsImhlbHBJY29uIiwiY3VzdG9taXplV3JhcHBlciIsInNldHRpbmdzQmxvY2siLCJzZWNvbmRhcnlCdXR0b24iLCJoYW5kbGVPcGVuIiwidGlwc0J1dHRvbiIsInN0eWxlTGFiZWxUaXBzIiwibW9kYWwiLCJoYW5kbGVDbG9zZSIsIkJhY2tkcm9wIiwidGltZW91dCIsImludmlzaWJsZSIsInBhcGVyIiwiZmlyc3RCbG9ja01vZGFsIiwic2Vjb25kRW5zZW1ibGUiLCJsYXN0RW5zZW1ibGUiLCJsZWZ0Q2xpY2tXcmFwcGVyIiwic3R5bGVMYWJlbE5leHQiLCJmb290ZXJNb2RhbCIsInZlcnNpb24iLCJ3aXRoU25hY2tiYXIiLCJwb2ludGVyRXZlbnRzIiwibWluSGVpZ2h0IiwiekluZGV4IiwiZHJhd2VyIiwicGFkZGluZyIsIm9wYWNpdHkiLCJib3hDdHJsIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJJTkFDVElWRV9QT0xJQ1kiLCJhcnIiLCJpbmRleE9mIiwic3BsaWNlIiwiU0NPUkVSIiwiTUFYSU1VTV9TQ09SRSIsIk1BWElNVU1fSElTVE9SWV9TSVpFIiwiU0VTU0lPTlNfVElNRU9VVF9NUyIsIlNFU1NJT05TX1JFVFJJRVMiLCJTRVNTSU9OU19NQVhfRlVaWllfREVMVEFfTVMiLCJNSU5fQUNUSVZFX0RFQk9VTkNFIiwiTUFYX0FDVElWRV9ERUJPVU5DRSIsIklOSVRfUkVMQVhFRF9QUk9GSUxFIiwiRU5WIiwibWVtb3J5IiwiY2FjaGVfc2l6ZSIsIm1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlIiwibWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3IiLCJwb2xpY3kiLCJ0YXJnZXRfdGFicyIsImRlY2F5IiwibWluX3RpbWUiLCJhY3RpdmUiLCJwaW5uZWQiLCJhdWRpYmxlIiwic2NvcmVyIiwibWluX2FjdGl2ZSIsInByb3RlY3Rpb25fdGltZSIsImNhY2hlZF9kZWNheSIsIk9iamVjdCIsImZyZWV6ZSIsImFyZ3MiLCJkZWZhdWx0X2Zvcm1hdCIsInByZSIsInRvVVRDU3RyaW5nIiwib3B0aW9ucyIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY29weSIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZ2V0RG9tYWluIiwic3RyIiwicHNsIiwiVVJMIiwiaG9zdG5hbWUiLCJkb21haW4iLCJ0ZXN0Iiwic2V0VW5yZWFkQmFkZ2UiLCJiYWRnZVRleHQiLCJjb3VudGVyIiwicGFyc2VJbnQiLCJpc1VzZXJBY3RpdmUiLCJyb3VuZCIsInN0YXR1cyIsInN0b3JhZ2VSZXNldCIsImQiLCJrZXlzIiwiZ2V0TGFzdEZvY3VzZWRXaW5kb3ciLCJwb3B1bGF0ZSIsIndpbmRvd1R5cGVzIiwiaWQiLCJyZXRyeVByb21pc2UiLCJmdW5jIiwiZGVsYXkiLCJ0aW1lcyIsInJlamVjdCIsImNhdGNoIiwicmVhc29uIiwid2luZG93IiwidXRpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyxpRUFBYyxDQUFDO0FBQzNCQyxZQUFVLEVBQUU7QUFDVkMsY0FBVSxFQUFFO0FBREYsR0FEZTtBQUkzQkMsU0FBTyxFQUFFO0FBQ1BDLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUU7QUFERztBQURKO0FBSmtCLENBQUQsQ0FBNUI7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QUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQztXQUNBO1dBQ0EsZ0JBQWdCLDJCQUEyQjtXQUMzQztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxlQUFlLHVCQUF1QjtXQUN0QztXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLDJDOzs7O1VDNUZBO1VBQ0EiLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZURpc3BhdGNoZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lRGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gIH0sXG4gIHBhbGV0dGU6IHtcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMDBiOWFhJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhvbWVEaXNwYXRjaGVyIC8+eycgJ31cbiAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0ICogYXMgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IEVycm9yT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yT3V0bGluZSc7XG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0IGFzIExpc3QgfSBmcm9tICdyZWFjdC13aW5kb3cnO1xuXG5pbXBvcnQgeyBzZXRBbGxSZWFkQmFkZ2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ21hdGVyaWFsLXVpLXNlYXJjaC1iYXInO1xuXG5jb25zdCBSRVNUT1JFID0gJ1JFU1RPUkUnO1xuY29uc3QgU0hFTExfUkVTVE9SRSA9ICdTSEVMTF9SRVNUT1JFJztcbmNvbnN0IFJFTU9WRUQgPSAnUkVNT1ZFRCc7XG5jb25zdCBDTE9TRURfSElTVE9SWSA9ICdjbG9zZWRfaGlzdG9yeSc7XG5jb25zdCBOVU1CRVJfSE9VUlNfREFZID0gMjQ7XG5jb25zdCBUSU1FX1BFUklPRF8yNEggPSAzNjAwMDAwICogTlVNQkVSX0hPVVJTX0RBWTsgLy8gaW4gbWljcm9zZWNvbmRcbmNvbnN0IFRJTUVfUEVSSU9EXzcySCA9IDM2MDAwMDAgKiBOVU1CRVJfSE9VUlNfREFZICogMzsgLy8gaW4gbWljcm9zZWNvbmRcblxuY2xhc3MgSG9tZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBzZXRBbGxSZWFkQmFkZ2UoKTtcbiAgICB0aGlzLnN0YXRlID0geyByZW5kZXJTYXZlQm9vbGVhbjogZmFsc2UgfTtcbiAgICB0aGlzLm9uQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXNDbG9zZWRIaXN0b3J5ID0gY2hhbmdlc1tDTE9TRURfSElTVE9SWV07XG4gICAgICBpZiAoY2hhbmdlc0Nsb3NlZEhpc3RvcnkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2xvc2VkX2hpc3Rvcnk6IGNoYW5nZXNDbG9zZWRIaXN0b3J5WyduZXdWYWx1ZSddLFxuICAgICAgICAgIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlLFxuICAgICAgICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChcbiAgICAgIFtDTE9TRURfSElTVE9SWV1cbiAgICApLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSByZXN1bHQuY2xvc2VkX2hpc3RvcnkgfHwgW107XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VkX2hpc3RvcnkgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5leHRMaXN0OiBbXSB9KTtcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgc2V0QWxsUmVhZEJhZGdlKCk7XG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnJlbmRlclNhdmVCb29sZWFuKSB7XG4gICAgICB0aGlzLmZvcmNlUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSXRlbShsaXN0SXRlbXMsIGtleSwgZSkge1xuICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XG4gICAgICAvLyBtZXRhS2V5IGlzIGNtZCBrZXkgb24gbWFjXG4gICAgICB0aGlzLnJlc3RvcmVUYWIobGlzdEl0ZW1zLCBrZXksIFNIRUxMX1JFU1RPUkUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc3RvcmVUYWIobGlzdEl0ZW1zLCBrZXksIFJFU1RPUkUpO1xuICAgIH1cbiAgfVxuXG4gIHJlc3RvcmVUYWIoaXRlbXMsIGtleSwgbWVzc2FnZVR5cGUpIHtcbiAgICBjb25zdCByZXN0b3JlZFRhYiA9IGl0ZW1zW2tleV07XG4gICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS51dWlkICE9PSByZXN0b3JlZFRhYi51dWlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VkX2hpc3Rvcnk6IGNsb3NlZF9oaXN0b3J5LCByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSB9KTtcbiAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VUeXBlLFxuICAgICAgdXVpZDogcmVzdG9yZWRUYWIudXVpZCxcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaE9uQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBzZWFyY2hPblJlcXVlc3RTZWFyY2ggPSAoZXZlbnQpID0+IHt9O1xuXG4gIHNlYXJjaE9uQ2FuY2VsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogJycgfSk7XG4gIH07XG5cbiAgZm9yY2VSZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGZpbHRlckxpc3Qoc2VsZWN0ZWRMaXN0LCBlbmRQZXJpb2QpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZWxlY3RlZExpc3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gbm93IC0gaXRlbS5kZWxldGlvbl90aW1lIDwgZW5kUGVyaW9kO1xuICAgIH0pO1xuICB9XG4gIGZpbHRlckxpc3RPbkRhdGUoc2VsZWN0ZWRMaXN0LCBiZWdpbm5pbmdEYXkpIHtcbiAgICBjb25zdCBlbmREYXkgPSBuZXcgRGF0ZShiZWdpbm5pbmdEYXkuZ2V0VGltZSgpKTtcbiAgICBlbmREYXkuc2V0RGF0ZShlbmREYXkuZ2V0RGF0ZSgpICsgMSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBiZWdpbm5pbmdEYXkuZ2V0VGltZSgpIDwgaXRlbS5kZWxldGlvbl90aW1lICYmIGl0ZW0uZGVsZXRpb25fdGltZSA8IGVuZERheS5nZXRUaW1lKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZW5lcmF0ZUJlZ2luRGF0ZShyb2xsQmFja0RheXMpIHtcbiAgICBjb25zdCBiZWdpbm5pbmdEYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGJlZ2lubmluZ0RheS5zZXREYXRlKGJlZ2lubmluZ0RheS5nZXREYXRlKCkgLSByb2xsQmFja0RheXMpO1xuICAgIGJlZ2lubmluZ0RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBjb25zdCBkYXRlRGF5QmVnaW4gPSBTdHJpbmcoYmVnaW5uaW5nRGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBkYXRlTW9udGhCZWdpbiA9IFN0cmluZyhiZWdpbm5pbmdEYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgcmV0dXJuIFtiZWdpbm5pbmdEYXksIGRhdGVEYXlCZWdpbiArICcvJyArIGRhdGVNb250aEJlZ2luXTtcbiAgfVxuXG4gIHJlbmRlckxpc3QoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBzZWxlY3RlZExpc3QgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5ID8gdGhpcy5maWx0ZXJMaXN0KHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnksIFRJTUVfUEVSSU9EXzcySCkgOiBbXTtcbiAgICBzZWxlY3RlZExpc3QgPSBzZWxlY3RlZExpc3QubWFwKCh3ZWJzaXRlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHdlYnNpdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0aW9uVGltZSA9IG5ldyBEYXRlKHdlYnNpdGUuZGVsZXRpb25fdGltZSk7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZF9kZWxldGlvbl90aW1lID0gZGVsZXRpb25UaW1lLnRvVGltZVN0cmluZygpLnNwbGl0KCcgJylbMF07XG4gICAgICAgIHdlYnNpdGUuaG91cnNfZGVsZXRpb24gPSBmb3JtYXR0ZWRfZGVsZXRpb25fdGltZS5zcGxpdCgnOicpWzBdO1xuICAgICAgICB3ZWJzaXRlLm1pbnV0ZXNfZGVsZXRpb24gPSBmb3JtYXR0ZWRfZGVsZXRpb25fdGltZS5zcGxpdCgnOicpWzFdO1xuICAgICAgICB3ZWJzaXRlLnRydW5jYXRlZF91cmwgPSB3ZWJzaXRlLnVybDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3ZWJzaXRlO1xuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNlYXJjaFBhdHRlcm4gPSBuZXcgUmVnRXhwKFxuICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlXG4gICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAubWFwKCh0ZXJtKSA9PiBgKD89Lioke3Rlcm19KWApXG4gICAgICAgICAgLmpvaW4oJycpLFxuICAgICAgICAnaSdcbiAgICAgICk7XG4gICAgICBzZWxlY3RlZExpc3QgPSBzZWxlY3RlZExpc3QuZmlsdGVyKFxuICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24udGl0bGUubWF0Y2goc2VhcmNoUGF0dGVybikgfHwgb3B0aW9uLnVybC5tYXRjaChzZWFyY2hQYXR0ZXJuKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZWREYXRlVG9kYXkgPSB0aGlzLmdlbmVyYXRlQmVnaW5EYXRlKDApO1xuICAgIGNvbnN0IGdlbmVyYXRlZERhdGVZZXN0ZXJkYXkgPSB0aGlzLmdlbmVyYXRlQmVnaW5EYXRlKDEpO1xuICAgIGNvbnN0IGdlbmVyYXRlZERhdGUyZGF5c0FnbyA9IHRoaXMuZ2VuZXJhdGVCZWdpbkRhdGUoMik7XG4gICAgY29uc3QgZ2VuZXJhdGVkRGF0ZTNkYXlzQWdvID0gdGhpcy5nZW5lcmF0ZUJlZ2luRGF0ZSgzKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkTGlzdFRvZGF5ID0gdGhpcy5maWx0ZXJMaXN0T25EYXRlKHNlbGVjdGVkTGlzdCwgZ2VuZXJhdGVkRGF0ZVRvZGF5WzBdKS5yZXZlcnNlKCk7XG4gICAgY29uc3QgZmlsdGVyZWRMaXN0WWVzdGVyZGF5ID0gdGhpcy5maWx0ZXJMaXN0T25EYXRlKHNlbGVjdGVkTGlzdCwgZ2VuZXJhdGVkRGF0ZVllc3RlcmRheVswXSkucmV2ZXJzZSgpO1xuICAgIGNvbnN0IGZpbHRlcmVkTGlzdDJkYXlzQWdvID0gdGhpcy5maWx0ZXJMaXN0T25EYXRlKHNlbGVjdGVkTGlzdCwgZ2VuZXJhdGVkRGF0ZTJkYXlzQWdvWzBdKS5yZXZlcnNlKCk7XG4gICAgY29uc3QgZmlsdGVyZWRMaXN0M2RheXNBZ28gPSB0aGlzLmZpbHRlckxpc3RPbkRhdGUoc2VsZWN0ZWRMaXN0LCBnZW5lcmF0ZWREYXRlM2RheXNBZ29bMF0pLnJldmVyc2UoKTtcblxuICAgIGxldCB5ZXN0ZXJkYXlUaXRsZSA9IFtdO1xuICAgIGxldCB0d29EYXlzVGl0bGUgPSBbXTtcbiAgICBsZXQgdGhyZWVEYXlzVGl0bGUgPSBbXTtcblxuICAgIGlmIChmaWx0ZXJlZExpc3RZZXN0ZXJkYXkubGVuZ3RoID4gMCkge1xuICAgICAgeWVzdGVyZGF5VGl0bGUgPSBbeyBkYXk6IGdlbmVyYXRlZERhdGVZZXN0ZXJkYXlbMV0sIHRleHQ6ICdZZXN0ZXJkYXkgLScgfV07XG4gICAgfVxuICAgIGlmIChmaWx0ZXJlZExpc3QyZGF5c0Fnby5sZW5ndGggPiAwKSB7XG4gICAgICB0d29EYXlzVGl0bGUgPSBbeyBkYXk6IGdlbmVyYXRlZERhdGUyZGF5c0Fnb1sxXSwgdGV4dDogJ1ByZXZpb3VzIGRheSAtJyB9XTtcbiAgICB9XG4gICAgaWYgKGZpbHRlcmVkTGlzdDNkYXlzQWdvLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocmVlRGF5c1RpdGxlID0gW3sgZGF5OiBnZW5lcmF0ZWREYXRlM2RheXNBZ29bMV0sIHRleHQ6ICcnIH1dO1xuICAgIH1cbiAgICBjb25zdCBmaWx0ZXJlZExpc3QgPSBmaWx0ZXJlZExpc3RUb2RheVxuICAgICAgLmNvbmNhdCh5ZXN0ZXJkYXlUaXRsZSlcbiAgICAgIC5jb25jYXQoZmlsdGVyZWRMaXN0WWVzdGVyZGF5KVxuICAgICAgLmNvbmNhdCh0d29EYXlzVGl0bGUpXG4gICAgICAuY29uY2F0KGZpbHRlcmVkTGlzdDJkYXlzQWdvKVxuICAgICAgLmNvbmNhdCh0aHJlZURheXNUaXRsZSlcbiAgICAgIC5jb25jYXQoZmlsdGVyZWRMaXN0M2RheXNBZ28pO1xuXG4gICAgY29uc3QgbGlzdEl0ZW0gPSAobXlGaWx0ZXJlZExpc3QpID0+ICh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gICAgICBjb25zdCB3ZWJzaXRlID0gbXlGaWx0ZXJlZExpc3RbaW5kZXhdO1xuICAgICAgaWYgKHR5cGVvZiB3ZWJzaXRlLmRheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICA8TGlzdEl0ZW0gQ29udGFpbmVyQ29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtgJHt3ZWJzaXRlLnRleHR9ICR7d2Vic2l0ZS5kYXl9YH1cbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICBwcmltYXJ5OiBjbGFzc2VzLnByaW1hcnlUaXRsZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0VGl0bGVUZXh0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICA8TGlzdEl0ZW0gQ29udGFpbmVyQ29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkQXZhdGFyV2l0aFRpbWV9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGltZURpc3BsYXl9PlxuICAgICAgICAgICAgICAgIHtgJHt3ZWJzaXRlLmhvdXJzX2RlbGV0aW9ufToke3dlYnNpdGUubWludXRlc19kZWxldGlvbn1gfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3F1YXJlXCJcbiAgICAgICAgICAgICAgICAgIGFsdD17d2Vic2l0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHNyYz17d2Vic2l0ZS5mYXZJY29uVXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhckNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgIHByaW1hcnk9e3dlYnNpdGUudHJ1bmNhdGVkX3VybH1cbiAgICAgICAgICAgICAgc2Vjb25kYXJ5PXt3ZWJzaXRlLnRpdGxlfVxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgcHJpbWFyeTogY2xhc3Nlcy5wcmltYXJ5VGV4dENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk6IGNsYXNzZXMuc2Vjb25kYXJ5VGV4dENvbnRhaW5lcixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcywgbXlGaWx0ZXJlZExpc3QsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHsnUmVzdG9yZSd9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFdlYnNpdGVzfT5cbiAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG9uIGxhc3QgNzJoXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWFyY2hPbkNoYW5nZX1cbiAgICAgICAgICBvblJlcXVlc3RTZWFyY2g9e3RoaXMuc2VhcmNoT25SZXF1ZXN0U2VhcmNofVxuICAgICAgICAgIG9uQ2FuY2VsU2VhcmNoPXt0aGlzLnNlYXJjaE9uQ2FuY2VsfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hCYXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgICAgIHtmaWx0ZXJlZExpc3QubGVuZ3RoID09PSAwID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxMaXN0IGhlaWdodD17TWF0aC5taW4oODAgKiBmaWx0ZXJlZExpc3QubGVuZ3RoLCAzMDApfSBpdGVtQ291bnQ9e2ZpbHRlcmVkTGlzdC5sZW5ndGh9IGl0ZW1TaXplPXs4MH0+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbShmaWx0ZXJlZExpc3QpfVxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeVxuICAgICAgPyB0aGlzLmZpbHRlckxpc3QodGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSwgVElNRV9QRVJJT0RfMjRIKS5sZW5ndGhcbiAgICAgIDogMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGRpdiB2YXJpYW50PVwiaDNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2xkTnVtYmVyfT5cbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPyBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgOiAwfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0T25SaWdodH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudG9wVGV4dH0+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIHRhYlxuICAgICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIDw9IDEgPyAnJyA6ICdzJ30gY2xvc2VkXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubWlkZGxlVGV4dH0+IGluIHRoZSBsYXN0IHtgJHtOVU1CRVJfSE9VUlNfREFZfSBob3Vyc2B9IDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlckxpc3QuYmluZCh0aGlzKShSRU1PVkVEKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyQ29udGFpbmVyfT5cbiAgICAgICAgICA8RXJyb3JPdXRsaW5lSWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQ29udGFpbmVyfSAvPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZFVFSkhkMGJMNnJ5RnZaazIyMENvWnA3Y3d2RnhFU29ycHM3Y25nazB3UWZ5dS1RL3ZpZXdmb3JtXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua1RvRm9ybX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCdWcvRmVlZGJhY2s/XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHRpdGxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtYXhIZWlnaHQ6IDQwLFxuICB9LFxuICB0ZXh0T25SaWdodDoge1xuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdzdGFydCcsXG4gIH0sXG4gIGdyZWVuVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAjMDBiOWFhYCxcbiAgICBtYXhXaWR0aDogMjI1LFxuICB9LFxuICBsaXN0VGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgbWF4SGVpZ2h0OiAzMCxcbiAgfSxcblxuICBib2xkTnVtYmVyOiB7XG4gICAgY29sb3I6ICcjZTU1YzAwJyxcbiAgICBmb250U2l6ZTogNDAsXG4gICAgbWF4V2lkdGg6ICczMCUnLFxuICB9LFxuICBtaWRkbGVUZXh0OiB7XG4gICAgZm9udFNpemU6IDEzLFxuICB9LFxuICB0b3BUZXh0OiB7XG4gICAgZm9udFNpemU6IDE2LFxuICB9LFxuICBzdWJUZXh0OiB7XG4gICAgZm9udFNpemU6IDEzLFxuICAgIG1hcmdpblRvcDogMTAsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWF4V2lkdGg6IDIwLFxuICB9LFxuICBidXR0b25Db250YWluZXI6IHsgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyB9LFxuICBpdGVtVGV4dDoge1xuICAgIG1heFdpZHRoOiAxODUsXG4gICAgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aGl0ZVNwYWNlOiAnYnJlYWstc3BhY2VzJyxcblxuICAgIG1heEhlaWdodDogNjAsXG4gIH0sXG4gIHRpbWVEaXNwbGF5OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgfSxcbiAgZ3JpZEF2YXRhcldpdGhUaW1lOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB9LFxuICBsaXN0V2Vic2l0ZXM6IHtcbiAgICBtYXJnaW5Ub3A6IDIwLFxuICB9LFxuICBmb290ZXJDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuMjUpLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGxpbmtUb0Zvcm06IHtcbiAgICBmb250U2l6ZTogMTAsXG4gIH0sXG4gIGljb25Db250YWluZXI6IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygwLjI1KSxcbiAgICBmb250U2l6ZTogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgYXZhdGFyQ29udGFpbmVyOiB7XG4gICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgbWF4SGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDcpLFxuICB9LFxuICBwcmltYXJ5VGV4dENvbnRhaW5lcjoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIG1heEhlaWdodDogMjIsXG4gIH0sXG4gIHNlY29uZGFyeVRleHRDb250YWluZXI6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gIH0sXG4gIHByaW1hcnlUaXRsZUNvbnRhaW5lcjoge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTYsXG4gIH0sXG5cbiAgbGlzdFRpdGxlVGV4dDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0LjUpLFxuICB9LFxuICBsaXN0Q29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzZWFyY2hCYXI6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWF4SGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDUpLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzJztcbmltcG9ydCBBcnJvd0JhY2tJb3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3MnO1xuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vU2V0dGluZ3MnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9Ib21lJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLmpzJztcblxuY2xhc3MgSG9tZURpc3BhdGNoZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgYXBwQmFyVmFsdWU6ICdIT01FJyB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFwcEJhclZhbHVlOiAnSE9NRScgfSk7XG4gICAgbG9nZ2VyKHRoaXMsICdQb3B1cCBvcGVuZWQnKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChuZXdWYWx1ZSkgPT4gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBCYXJWYWx1ZTogbmV3VmFsdWUgfSk7XG4gICAgbG9nZ2VyKHRoaXMsICdTd2l0Y2ggdG8gJyArIG5ld1ZhbHVlKTtcbiAgfTtcblxuICBkaXNwYXRjaFBhZ2UoKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmFwcEJhclZhbHVlKSB7XG4gICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgcmV0dXJuIDxIb21lIC8+O1xuICAgICAgY2FzZSAnU0VUVElOR1MnOlxuICAgICAgICByZXR1cm4gPFNldHRpbmdzIC8+O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyBpcyBhbiBlcnJvciBwYWdlPC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlJY29uKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUpIHtcbiAgICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UoJ1NFVFRJTkdTJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2V0dGluZ3NJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnU0VUVElOR1MnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UoJ0hPTUUnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQ29udGFpbmVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBcnJvd0JhY2tJb3NJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyBpcyBhbiBlcnJvciBwYWdlPC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTbmFja2JhclByb3ZpZGVyXG4gICAgICAgIG1heFNuYWNrPXsyfVxuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5ub3RpZmljYXRpb24sXG4gICAgICAgICAgdmFyaWFudFN1Y2Nlc3M6IGNsYXNzZXMuc3VjY2VzcyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZUNvbnRhaW5lcn0+XG4gICAgICAgICAgPFBhcGVyIHNxdWFyZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRMb2dvVGFic30+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3RhYmJ5LnVzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmVuc2VtYmxlbG9nb30+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eycuLi8uLi9hc3NldHMvc3RhdGljL2ljb25zL3RhYmJ5XzIucG5nJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29GdWxsfSAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHt0aGlzLmRpc3BsYXlJY29uKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+e3RoaXMuZGlzcGF0Y2hQYWdlKCl9PC9kaXY+XG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lRGlzcGF0Y2hlcjtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgSG9tZURpc3BhdGNoZXIgZnJvbSAnLi9Ib21lRGlzcGF0Y2hlcic7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYi9UYWInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBob21lQ29udGFpbmVyOiB7XG4gICAgbWluV2lkdGg6IDQwMCxcbiAgfSxcbiAgdGFiOiB7XG4gICAgY29sb3I6ICcjMDBiOWFhJyxcbiAgfSxcbiAgbm90aWZpY2F0aW9uOiB7XG4gICAgbGVmdDogMTUwLFxuICB9LFxuICBncmlkTG9nb1RhYnM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgYWxsVGFiczoge1xuICAgIG1heFdpZHRoOiAnNzUlJyxcbiAgfSxcbiAgZW5zZW1ibGVsb2dvOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnbGVmdCcsXG4gIH0sXG4gIGxvZ29BdmF0YXI6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS4yNSksXG4gIH0sXG4gIGxvZ29GdWxsOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyLjI1KSxcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxMiksXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuMjUpLFxuICB9LFxuICBpY29uQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEuNSksXG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCM4MGUwYTcsICMwMGI5YWEpJyxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhvbWVEaXNwYXRjaGVyKTtcbiIsImltcG9ydCAqIGFzIGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5JztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcbmltcG9ydCBUdW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHVuZSc7XG5pbXBvcnQgSGVscE91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IZWxwT3V0bGluZSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcblxuaW1wb3J0IHsgd2l0aFNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCB7IFJFTEFYRUQsIEZPQ1VTRUQsIENVU1RPTUlaRUQsIElOSVRfRk9DVVNFRF9QUk9GSUxFIH0gZnJvbSAnLi4vLi4vY29uZmlnL3NldHRpbmdzUHJvZmlsZXMuanMnO1xuaW1wb3J0IHsgY2hlY2tTZXR0aW5ncywgT1BUSU1BTF9OVU1CRVJfVEFCUywgUE9MSUNZLCBJTkFDVElWRV9QT0xJQ1kgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpc0ludGVnZXIsIHJlbW92ZUl0ZW0gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcblxuY29uc3QgTGlnaHRUb29sdGlwID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XG4gIHRvb2x0aXA6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAxKScsXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgfSxcbn0pKShUb29sdGlwKTtcblxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvY3VzZWRNb2RlOiBmYWxzZSxcbiAgICAgIHJlbGF4ZWRNb2RlOiBmYWxzZSxcbiAgICAgIGN1c3RvbWl6ZWRCb29sOiBmYWxzZSxcbiAgICAgIHNldHRpbmdzOiBJTklUX0ZPQ1VTRURfUFJPRklMRSxcbiAgICAgIHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSxcbiAgICAgIGZvY3VzZWRXaW5kb3dJZDogdHJ1ZSxcbiAgICAgIG9wZW5Nb2RhbDogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLm9uQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXNTZXR0aW5ncyA9IGNoYW5nZXNbJ3NldHRpbmdzJ107XG4gICAgICBjb25zdCBjaGFuZ2VzUHJvZmlsZSA9IGNoYW5nZXNbJ2FjdGl2ZV9wcm9maWxlJ107XG4gICAgICBjb25zdCBjaGFuZ2VkSW5hY3RpdmVQb2xpY3kgPSBjaGFuZ2VzWydpbmFjdGl2ZV9wb2xpY3knXTtcbiAgICAgIGlmIChjaGFuZ2VzU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2V0dGluZ3M6IGNoYW5nZXNTZXR0aW5nc1snbmV3VmFsdWUnXSxcbiAgICAgICAgICByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlc1Byb2ZpbGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZm9jdXNlZE1vZGU6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBGT0NVU0VELFxuICAgICAgICAgIHJlbGF4ZWRNb2RlOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gUkVMQVhFRCxcbiAgICAgICAgICBjdXN0b21pemVkQm9vbDogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IENVU1RPTUlaRUQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZWRJbmFjdGl2ZVBvbGljeSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5hY3RpdmVQb2xpY3k6IGNoYW5nZWRJbmFjdGl2ZVBvbGljeVsnbmV3VmFsdWUnXSB9KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KFxuICAgICAgWydhY3RpdmVfcHJvZmlsZScsICdzZXR0aW5ncycsICdmb2N1c2VkX3dpbmRvd19pZCcsICdpbmFjdGl2ZV9wb2xpY3knXVxuICAgICkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBwcm9maWxlID0gcmVzdWx0LmFjdGl2ZV9wcm9maWxlIHx8IEZPQ1VTRUQ7XG4gICAgICBjb25zdCBmb2N1c2VkTW9kZSA9IHByb2ZpbGUgPT09IEZPQ1VTRUQ7XG4gICAgICBjb25zdCByZWxheGVkTW9kZSA9IHByb2ZpbGUgPT09IFJFTEFYRUQ7XG4gICAgICBjb25zdCBjdXN0b21pemVkQm9vbCA9IHByb2ZpbGUgPT09IENVU1RPTUlaRUQ7XG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHJlc3VsdC5zZXR0aW5ncyB8fCBJTklUX0ZPQ1VTRURfUFJPRklMRTtcbiAgICAgIGNvbnN0IGZvY3VzZWRXaW5kb3dJZCA9IHJlc3VsdC5mb2N1c2VkX3dpbmRvd19pZDtcbiAgICAgIGNvbnN0IGluYWN0aXZlUG9saWN5ID0gcmVzdWx0LmluYWN0aXZlX3BvbGljeTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkTW9kZSxcbiAgICAgICAgcmVsYXhlZE1vZGUsXG4gICAgICAgIGN1c3RvbWl6ZWRCb29sLFxuICAgICAgICBzZXR0aW5ncyxcbiAgICAgICAgZm9jdXNlZFdpbmRvd0lkLFxuICAgICAgICBpbmFjdGl2ZVBvbGljeSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVuZGVyU2F2ZUJvb2xlYW4pIHtcbiAgICAgIHRoaXMuZm9yY2VSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCb29sQ2hhbmdlKGNoYW5nZVR5cGUpIHtcbiAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QUk9GSUxFJyxcbiAgICAgIHByb2ZpbGU6IGNoYW5nZVR5cGUsXG4gICAgfSk7XG4gICAgaWYgKGNoYW5nZVR5cGUgPT09IFJFTEFYRUQgfHwgY2hhbmdlVHlwZSA9PT0gRk9DVVNFRCkge1xuICAgICAgdGhpcy5ub3RpZnlVc2VyKHRydWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeS5pbmNsdWRlcyh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3dpdGNoKCk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2VSZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVNhdmVQYXJhbWV0ZXJzKCkge1xuICAgIC8vIFRPRE8gQWRkIGZ1bmN0aW9uIHRvIGNoZWNrIGZvciBhbGwgcG90ZW50aWFsIHZhbHVlc1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG4gICAgaWYgKGNoZWNrU2V0dGluZ3ModGhpcy5zdGF0ZS5zZXR0aW5ncykpIHtcbiAgICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIG1lc3NhZ2VUeXBlOiAnU0VUVElOR1NfUEFSQU1FVEVSUycsXG4gICAgICAgIHNldHRpbmdzOiB0aGlzLnN0YXRlLnNldHRpbmdzLFxuICAgICAgfSk7XG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5ub3RpZnlVc2VyKHN1Y2Nlc3MpO1xuICB9XG5cbiAgbm90aWZ5VXNlcihzdWNjZXNzKSB7XG4gICAgdGhpcy5wcm9wcy5lbnF1ZXVlU25hY2tiYXIoc3VjY2VzcyA/ICdOZXcgU2V0dGluZ3MgYXJlIHNhdmVkLicgOiAnU2V0dGluZ3MgY2Fubm90IGJlIHNhdmVkLicsIHtcbiAgICAgIHZhcmlhbnQ6IHN1Y2Nlc3MgPyAnc3VjY2VzcycgOiAnZXJyb3InLFxuICAgICAgYW5jaG9yT3JpZ2luOiB7XG4gICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgIH0sXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDc1MCxcbiAgICAgIGF1dG9IaWRlRHVyYXRpb246IDE1MDAsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzID0gKHBhdGgsIHBhcmFtZXRlcikgPT4gKGV2ZW50KSA9PiB7XG4gICAgbGV0IHNldHRpbmdzID0gdGhpcy5zdGF0ZS5zZXR0aW5ncztcbiAgICBjb25zdCBuZXh0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKGlzSW50ZWdlcihuZXh0VmFsdWUpIHx8IG5leHRWYWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldHRpbmdzW3BhdGhdW3BhcmFtZXRlcl0gPSBuZXh0VmFsdWU7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2V0dGluZ3M6IHNldHRpbmdzLCByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSB9KTtcbiAgICB9XG4gIH07XG4gIGhhbmRsZVN3aXRjaCA9ICgpID0+IHtcbiAgICBsZXQgaW5hY3RpdmVQb2xpY3kgPSB0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5O1xuXG4gICAgaWYgKGluYWN0aXZlUG9saWN5LmluY2x1ZGVzKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKSkge1xuICAgICAgaW5hY3RpdmVQb2xpY3kgPSByZW1vdmVJdGVtKGluYWN0aXZlUG9saWN5LCB0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCk7XG4gICAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ1JFTU9WRV9JTkFDVElWRV9QT0xJQ1knLFxuICAgICAgICB3aW5kb3dJZDogdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5hY3RpdmVQb2xpY3kucHVzaCh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCk7XG4gICAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ0FERF9JTkFDVElWRV9QT0xJQ1knLFxuICAgICAgICB3aW5kb3dJZDogdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluYWN0aXZlUG9saWN5OiBpbmFjdGl2ZVBvbGljeSwgcmVuZGVyU2F2ZUJvb2xlYW46IHRydWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlT3BlbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1vZGFsOiB0cnVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuTW9kYWw6IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5wdXRzUGFyYW1ldGVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdPcHRpbWFsIHRhYnMgbnVtYmVyJyxcbiAgICAgICAgc291cmNlOiB0aGlzLnN0YXRlLnNldHRpbmdzLFxuICAgICAgICBwYXRoOiBQT0xJQ1ksXG4gICAgICAgIHBhcmFtZXRlcjogT1BUSU1BTF9OVU1CRVJfVEFCUyxcbiAgICAgICAgaW5wdXRQcm9wczogeyBtaW46ICcxJywgbWF4OiAnMTAwJywgc3RlcDogJzEnIH0sXG4gICAgICB9LFxuICAgIF07XG4gICAgY29uc3QgbGlzdEl0ZW1zUGFyYW1ldGVycyA9IGlucHV0c1BhcmFtZXRlcnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzKGl0ZW0ucGF0aCwgaXRlbS5wYXJhbWV0ZXIpfVxuICAgICAgICB2YWx1ZT17aXRlbS5zb3VyY2VbaXRlbS5wYXRoXVtpdGVtLnBhcmFtZXRlcl19XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICBvbktleVVwPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpIHRoaXMuaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKTtcbiAgICAgICAgfX1cbiAgICAgICAgaW5wdXRQcm9wcz17aXRlbS5pbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICApKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkJsb2NrfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkICYmIHRoaXMuc3RhdGUuaW5hY3RpdmVQb2xpY3lcbiAgICAgICAgICAgICAgICAgICAgPyAhdGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeS5pbmNsdWRlcyh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZClcbiAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN3aXRjaH1cbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN3aXRjaFdyYXBwZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3dpdGNoQ29udGFpbmVyfVxuICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5FbmFibGUgb24gdGhpcyB3aW5kb3c8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW50cm9kdWN0aW9uQmxvY2t9PlxuICAgICAgICAgICAgPFR1bmVJY29uIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFyYW1ldGVyc1RpdGxlfT5TZWxlY3QgeW91ciBwcm9maWxlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NXcmFwcGVyfT5cbiAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9eyd0YWJieSB0ZW5kcyB0byBrZWVwIDUgdGFicyd9IHBsYWNlbWVudD1cImxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RQcm9maWxlc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmZvY3VzZWRNb2RlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoRk9DVVNFRCl9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveFdyYXBwZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkZvY3VzPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEhlbHBPdXRsaW5lSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaGVscEljb259IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XG4gICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPXsndGFiYnkgdGVuZHMgdG8ga2VlcCAxMiB0YWJzJ30gcGxhY2VtZW50PVwibGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdFByb2ZpbGVzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVsYXhlZE1vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlQm9vbENoYW5nZShSRUxBWEVEKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrYm94V3JhcHBlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+UmVsYXg8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0Qm9vbGVhbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SGVscE91dGxpbmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWxwSWNvbn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9taXplV3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlQm9vbENoYW5nZShDVVNUT01JWkVEKX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tib3hXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5DdXN0b21pemU8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXR0aW5nc0Jsb2NrfT5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHJlcXVpcmVkIGZ1bGxXaWR0aD5cbiAgICAgICAgICAgICAgICB7bGlzdEl0ZW1zUGFyYW1ldGVyc31cbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaWRkZW4ga2V5PVwiaGlkZGVuLXRleHRmaWVsZFwiIGRpc2FibGVkIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRhcnlCdXR0b259XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTYXZlUGFyYW1ldGVycygpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU9wZW59IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXBzQnV0dG9ufT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbFRpcHN9PkhlbHA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIC8vZGlzYWJsZVBvcnRhbD17dHJ1ZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVuTW9kYWx9XG4gICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxuICAgICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cbiAgICAgICAgICBCYWNrZHJvcFByb3BzPXt7XG4gICAgICAgICAgICB0aW1lb3V0OiA3NTAsXG4gICAgICAgICAgICBpbnZpc2libGU6IHRydWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGYWRlIGluPXt0aGlzLnN0YXRlLm9wZW5Nb2RhbH0+XG4gICAgICAgICAgICA8Qm94IGJvcmRlclJhZGl1cz17Nn0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCbG9ja01vZGFsfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRFbnNlbWJsZX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+UHJvdGVjdCBhIHRhYjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxhc3RFbnNlbWJsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi4vLi4vYXNzZXRzL3N0YXRpYy9pY29ucy9yaWdodF9jbGljay5wbmcnfSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdENsaWNrV3JhcHBlcn0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+KzwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlBpbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZEVuc2VtYmxlfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5SZW9wZW4gbXVsdGlwbGUgdGFiczwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kRW5zZW1ibGV9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+Q3RybDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+KzwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycuLi8uLi9hc3NldHMvc3RhdGljL2ljb25zL2xlZnRfY2xpY2sucG5nJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnRDbGlja1dyYXBwZXJ9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5Ib3cgZG9lcyB0YWJieSB3b3JrPzwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbE5leHR9PlxuICAgICAgICAgICAgICAgIHRhYmJ5IHdpbGwgbm90IHJlbW92ZSB0YWJzIHJpZ2h0IGFmdGVyIHRoZWlyIGNyZWF0aW9uLnsnICd9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbE5leHR9PlxuICAgICAgICAgICAgICAgIHRhYmJ5IHRha2VzIHdlbGwtdGhvdWdodC1vdXQgZGVjaXNpb25zIGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJNb2RhbH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdGFiYnkudXMvZmFxXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbFRpcHN9PkZBUSBhdmFpbGFibGUgaGVyZTwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbFRpcHN9PnRhYmJ5IHticm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9ufTwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNuYWNrYmFyKFNldHRpbmdzKTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9TZXR0aW5ncyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgc2V0dGluZ3NXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgbWFyZ2luVG9wOiA1LFxuICAgIG1hcmdpbkxlZnQ6IDQ3LFxuICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgfSxcbiAgc2Vjb25kYXJ5QnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiAxOCxcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuXG4gICAgbWF4V2lkdGg6IDIwLFxuICB9LFxuXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIG1heFdpZHRoOiAxNTAsXG4gIH0sXG4gIGludHJvZHVjdGlvbkJsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIG1hcmdpbkxlZnQ6IDcsXG4gIH0sXG4gIHBhcmFtZXRlcnNUaXRsZToge1xuICAgIC8vZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNyxcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBtYXJnaW5MZWZ0OiAxNixcbiAgfSxcbiAgc2V0dGluZ3NCbG9jazoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1hcmdpbkxlZnQ6IDMyLFxuICAgIG1hcmdpblRvcDogNCxcbiAgfSxcbiAgZmlyc3RCb29sZWFuczoge1xuICAgIG1heFdpZHRoOiAnMzYlJyxcbiAgICBtaW5XaWR0aDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICBtYXhIZWlnaHQ6IDIwLFxuICAgIG1hcmdpblRvcDogNSxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIH0sXG4gIGZpcnN0UHJvZmlsZXNDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNpbmcoMTApLFxuICB9LFxuXG4gIHN0eWxlTGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gIH0sXG4gIGNoZWNrYm94V3JhcHBlcjoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgfSxcbiAgc3dpdGNoQ29udGFpbmVyOiB7XG4gICAgbWF4SGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgfSxcbiAgc3dpdGNoV3JhcHBlcjoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWF4V2lkdGg6ICc4NSUnLFxuICB9LFxuICBjdXN0b21pemVXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIGFsaWduSXRlbXM6ICdzdGFydCcsXG4gIH0sXG4gIGhlbHBJY29uOiB7XG4gICAgY29sb3I6ICcjZTU1YzAwJyxcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDAuMjUpLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTUwLCAxNTAsIDE1MCwgMC40KScsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcbiAgfSxcbiAgbWFpbkJsb2NrOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxuICBwYXBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIC8vYm9yZGVyOiAnMC41cHggc29saWQgIzVBNUE1QScsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxuXG4gICAgb3BhY2l0eTogJzEgIWltcG9ydGFudCcsXG4gIH0sXG4gIGJveEN0cmw6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzVBNUE1QScsXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDIuNSksXG4gICAgLy9wYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxuICAgIC8vbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcbiAgICAvL21hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxuXG4gICAgb3BhY2l0eTogJzEgIWltcG9ydGFudCcsXG4gIH0sXG4gIGxlZnRDbGlja1dyYXBwZXI6IHtcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG4gIHNlY29uZEVuc2VtYmxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWluV2lkdGg6ICczMCUnLFxuICB9LFxuICBsYXN0RW5zZW1ibGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtaW5XaWR0aDogJzI3LjUlJyxcbiAgfSxcbiAgZmlyc3RCbG9ja01vZGFsOiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICB0aXBzQnV0dG9uOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygwKSxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcGFkZGluZ0xlZnQ6IDAsXG4gICAgcGFkZGluZ1JpZ2h0OiAwLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzdHlsZUxhYmVsVGlwczoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBjb2xvcjogJ3JnYmEoMTUwLCAxNTAsIDE1MCwgMSknLFxuICB9LFxuICBzdHlsZUxhYmVsTmV4dDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygwLjUpLFxuICB9LFxuICBmb290ZXJNb2RhbDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLjUpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIC8vIG1pbldpZHRoOiAnMTAwJScsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShTZXR0aW5ncyk7XG4iLCJleHBvcnQgY29uc3QgT1BUSU1BTF9OVU1CRVJfVEFCUyA9ICd0YXJnZXRfdGFicyc7XG5leHBvcnQgY29uc3QgUE9MSUNZID0gJ3BvbGljeSc7XG5leHBvcnQgY29uc3QgSU5BQ1RJVkVfUE9MSUNZID0gJ2luYWN0aXZlX3BvbGljeSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1NldHRpbmdzKHNldHRpbmdzKSB7XG4gIGlmIChzZXR0aW5nc1tQT0xJQ1ldW09QVElNQUxfTlVNQkVSX1RBQlNdICYmIHNldHRpbmdzW1BPTElDWV1bT1BUSU1BTF9OVU1CRVJfVEFCU10gPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJdGVtKGFyciwgdmFsdWUpIHtcbiAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZih2YWx1ZSk7XG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cbiIsImNvbnN0IFNDT1JFUiA9ICd2MSc7IC8vIG9ubHkgZGVmYXVsdCBpbXBsZW1lbnRlZFxuY29uc3QgTUFYSU1VTV9TQ09SRSA9IDEwOyAvLyBtYXggc2NvcmUgZm9yIHNjb3JlclxuY29uc3QgTUFYSU1VTV9ISVNUT1JZX1NJWkUgPSAxMDAwOyAvLyBtYXgga2lsbGVkIHRhYiBoaXN0b3J5IGluIG1lbW9yeVxuY29uc3QgU0VTU0lPTlNfVElNRU9VVF9NUyA9IDIwMDsgLy8gd2hlbiBhIHRhYiBpcyBraWxsZWQgd2UgbmVlZCBhIHRpbWVvdXQgdG8gcmV0cmlldmUgdGhlIHNlc3Npb25JZFxuY29uc3QgU0VTU0lPTlNfUkVUUklFUyA9IDU7IC8vIGhvdyBtYW55IHRyaWVzIHRvIHJldHJpZXZlIHRoZSBzZXNzaW9uIElEIG9mIGEga2lsbGVkIHRhYlxuY29uc3QgU0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TID0gMTAwMCAqIDU7IC8vIHRpbWUgaXMgZnV6enkgbWF0Y2hlZCB0byByZXRpcmV2ZSB0aGUgY29ycmVjdCBzZXNzaW9uSUQsIHNob3VsZCBiZSBoaWdoZXIgdGhhbiBTRVNTSU9OU19USU1FT1VUX01TXG5jb25zdCBNSU5fQUNUSVZFX0RFQk9VTkNFID0gMTAwMCAqIDI7IC8vIG1pbmltdW0gYWN0aXZlIHJlYWRpbmcgb24gYSB0YWIgdG8gYmUgY291bnRlZCBhcyB2YWxpZCAndXNlZnVsJyB0aW1lXG5jb25zdCBNQVhfQUNUSVZFX0RFQk9VTkNFID0gMTAwMCAqIDYwICogNTsgLy8gbWF4aW11bSB0aW1lIHdpdGhvdXQgYW55IHVzZXIgaW5wdXQgYmVmb3JlIGl0IGlzIGNvbnNpZGVyZWQgaWRsZWQsIG11c3QgYmUgaGlnaGVyIHRoYW4gMTVzZWNcblxuZXhwb3J0IHtcbiAgU0NPUkVSLFxuICBNQVhJTVVNX1NDT1JFLFxuICBNQVhJTVVNX0hJU1RPUllfU0laRSxcbiAgU0VTU0lPTlNfVElNRU9VVF9NUyxcbiAgU0VTU0lPTlNfUkVUUklFUyxcbiAgU0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TLFxuICBNSU5fQUNUSVZFX0RFQk9VTkNFLFxuICBNQVhfQUNUSVZFX0RFQk9VTkNFLFxufTtcbiIsImNvbnN0IFJFTEFYRUQgPSAncmVsYXhlZCc7XG5jb25zdCBGT0NVU0VEID0gJ2ZvY3VzZWQnO1xuY29uc3QgQ1VTVE9NSVpFRCA9ICdjdXN0b21pemVkJztcbnZhciBJTklUX1JFTEFYRURfUFJPRklMRSA9IHt9O1xudmFyIElOSVRfRk9DVVNFRF9QUk9GSUxFID0ge307XG5cbmlmIChFTlYgPT09ICdkZWJ1ZycpIHtcbiAgSU5JVF9SRUxBWEVEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEgKiAxMDAwLCAvLyBtaW5pbXVtIHRpbWUgYmV0d2VlbiAyIGZ1bGwgc3RhdHMgdXBkYXRlIGZvciBhbGwgdGFic1xuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDUgKiAxMDAwLCAvLyBtaW5pbXVtIHRpbWUgYmV0d2VlbiAyIGZ1bGwgdGFiIGdhcmJhZ2UgY29sbGVjdGlvblxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICB0YXJnZXRfdGFiczogMTIsIC8vIHRhYmJ5IHdpbGwgc3RvcCBjbG9zaW5nIHRhYnMgd2hlbiB3ZSBoYXZlIGxlc3MgdGhhbiB0YXJnZXRfdGFicyBvcGVuXG4gICAgICBkZWNheTogMC44LCAvLyB3aGVuIHRoZSBudW1iZXIgb2YgdGFiIGluY3JlYXNlcywgdGFiYnkgd2lsbCBkZWxldGUgbW9yZSB0YWJzXG4gICAgICBtaW5fdGltZTogMyAqIDEwMDAsIC8vIFRhYmJ5IHdpbGwga2lsbCBhYm91dCAxIHRhYiBwZXIgbWluX3RpbWUgKGRlcGVuZGluZyBvbiBhY3RpdmF0aW9uIHJ1bGVzKVxuXG4gICAgICAvLyBJR05PUkVEIHRhYnNcbiAgICAgIGFjdGl2ZTogZmFsc2UsIC8vIHRoZXNlIHN0YXR1cyBhcmUgYWJzb2x1dGVseSBwcm90ZWN0ZWQgdGFiczogdGhlc2UgYXJlIGlnbm9yZWQgYW5kIGRvIG5vdCBjb3VudCBhcyB0YWJzLlxuICAgICAgcGlubmVkOiB0cnVlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIC8vIFBST1RFQ1RFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHRhYnMgd2lsbCBiZSBnaXZlbiBhYnNvbHV0ZSBtYXhpbXVtIHNjb3JlICsgZXh0ZW5kZWQgcHJvdGVjdGlvblxuICAgICAgcGlubmVkOiB0cnVlLCAvLyB3aGVuIHRoZSBzdGF0dXMgaXMgbG9zdC5cbiAgICAgIGF1ZGlibGU6IHRydWUsXG5cbiAgICAgIG1pbl9hY3RpdmU6IDUgKiAxMDAwLCAvLyBtaW5pbXVtIHRpbWUgYSB0YWIgaGFzIHRvIGV4aXN0IGJlZm9yZSBiZWluZyBzY29yZWRcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiAxMDAwLCAvLyBBIHJlc3RvcmVkIHRhYiBpcyBwcm90ZWN0ZWQgZm9yIHRoaXMgbG9uZ1xuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsIC8vIEluIGN1cnJlbnQgc2NvcmVyLCB0aGUgY2FjaGUgc2NvcmUgaXMgYWRkZWQgdG8gdGhlIGN1cnJlbnQgc2NvcmUgd2l0aCBhIGRlY3JlYXNpbmcgZmFjdG9yXG4gICAgfSxcbiAgfTtcblxuICBJTklUX0ZPQ1VTRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMSAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogNSAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIHRhcmdldF90YWJzOiA1LFxuICAgICAgZGVjYXk6IDAuOCxcbiAgICAgIG1pbl90aW1lOiAzICogMTAwMCxcblxuICAgICAgLy8gSUdOT1JFRCB0YWJzXG4gICAgICBhY3RpdmU6IGZhbHNlLCAvLyB0aGVzZSBzdGF0dXMgYXJlIGFic29sdXRlbHkgcHJvdGVjdGVkIHRhYnM6IHRoZXNlIGFyZSBpZ25vcmVkIGFuZCBkbyBub3QgY291bnQgYXMgdGFicy5cbiAgICAgIHBpbm5lZDogdHJ1ZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICAvLyBQUk9URUNURUQgdGFic1xuICAgICAgYWN0aXZlOiB0cnVlLCAvLyB0aGVzZSB0YWJzIHdpbGwgYmUgZ2l2ZW4gYWJzb2x1dGUgbWF4aW11bSBzY29yZSArIGV4dGVuZGVkIHByb3RlY3Rpb25cbiAgICAgIHBpbm5lZDogdHJ1ZSwgLy8gd2hlbiB0aGUgc3RhdHVzIGlzIGxvc3QuXG4gICAgICBhdWRpYmxlOiB0cnVlLFxuXG4gICAgICBtaW5fYWN0aXZlOiA1ICogMTAwMCxcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsXG4gICAgfSxcbiAgfTtcbn0gZWxzZSB7XG4gIElOSVRfUkVMQVhFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxMCAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogMTAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIHRhcmdldF90YWJzOiAxMixcbiAgICAgIGRlY2F5OiAwLjksXG4gICAgICBtaW5fdGltZTogNDUgKiAxMDAwLFxuXG4gICAgICAvLyBJR05PUkVEIHRhYnNcbiAgICAgIGFjdGl2ZTogZmFsc2UsIC8vIHRoZXNlIHN0YXR1cyBhcmUgYWJzb2x1dGVseSBwcm90ZWN0ZWQgdGFiczogdGhlc2UgYXJlIGlnbm9yZWQgYW5kIGRvIG5vdCBjb3VudCBhcyB0YWJzLlxuICAgICAgcGlubmVkOiB0cnVlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIC8vIFBST1RFQ1RFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHRhYnMgd2lsbCBiZSBnaXZlbiBhYnNvbHV0ZSBtYXhpbXVtIHNjb3JlICsgZXh0ZW5kZWQgcHJvdGVjdGlvblxuICAgICAgcGlubmVkOiB0cnVlLCAvLyB3aGVuIHRoZSBzdGF0dXMgaXMgbG9zdC5cbiAgICAgIGF1ZGlibGU6IHRydWUsXG5cbiAgICAgIG1pbl9hY3RpdmU6IDUgKiA2MCAqIDEwMDAsXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogNjAgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsXG4gICAgfSxcbiAgfTtcblxuICBJTklUX0ZPQ1VTRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMTAgKiAxMDAwLFxuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDEwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICB0YXJnZXRfdGFiczogNSxcbiAgICAgIGRlY2F5OiAwLjksXG4gICAgICBtaW5fdGltZTogNDUgKiAxMDAwLFxuXG4gICAgICAvLyBJR05PUkVEIHRhYnNcbiAgICAgIGFjdGl2ZTogZmFsc2UsIC8vIHRoZXNlIHN0YXR1cyBhcmUgYWJzb2x1dGVseSBwcm90ZWN0ZWQgdGFiczogdGhlc2UgYXJlIGlnbm9yZWQgYW5kIGRvIG5vdCBjb3VudCBhcyB0YWJzLlxuICAgICAgcGlubmVkOiB0cnVlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIC8vIFBST1RFQ1RFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHRhYnMgd2lsbCBiZSBnaXZlbiBhYnNvbHV0ZSBtYXhpbXVtIHNjb3JlICsgZXh0ZW5kZWQgcHJvdGVjdGlvblxuICAgICAgcGlubmVkOiB0cnVlLCAvLyB3aGVuIHRoZSBzdGF0dXMgaXMgbG9zdC5cbiAgICAgIGF1ZGlibGU6IHRydWUsXG5cbiAgICAgIG1pbl9hY3RpdmU6IDUgKiA2MCAqIDEwMDAsXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogNjAgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsXG4gICAgfSxcbiAgfTtcbn1cblxuT2JqZWN0LmZyZWV6ZShJTklUX0ZPQ1VTRURfUFJPRklMRSk7XG5PYmplY3QuZnJlZXplKElOSVRfUkVMQVhFRF9QUk9GSUxFKTtcblxuZXhwb3J0IHsgUkVMQVhFRCwgRk9DVVNFRCwgQ1VTVE9NSVpFRCwgSU5JVF9GT0NVU0VEX1BST0ZJTEUsIElOSVRfUkVMQVhFRF9QUk9GSUxFIH07XG4iLCJpbXBvcnQgKiBhcyBwc2wgZnJvbSAncHNsJztcbmltcG9ydCAqIGFzIGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCB7IE1BWF9BQ1RJVkVfREVCT1VOQ0UgfSBmcm9tICcuLi9jb25maWcvZW52LmpzJztcblxuY29uc3QgbG9nZ2VyID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgaWYgKEVOViA9PT0gJ2RlYnVnJyB8fCBFTlYgPT09ICdkZXYnKSB7XG4gICAgbGV0IGRlZmF1bHRfZm9ybWF0ID0gWydmb250LXdlaWdodDppbml0aWFsOyBjb2xvcjpibGFjazsnXTtcbiAgICBsZXQgcHJlID0gJyVjJyArIG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSArICclYyc7XG4gICAgbGV0IG9wdGlvbnMgPSBbJ2ZvbnQtd2VpZ2h0OmxpZ2h0ZXI7IGNvbG9yOkxpZ2h0U2xhdGVHcmV5OyddO1xuICAgIG9wdGlvbnMucHVzaChkZWZhdWx0X2Zvcm1hdCk7XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJlICs9ICcgfCAlYycgKyBhcmdzWzBdLmNvbnN0cnVjdG9yLm5hbWUgKyAnJWMgfCAnO1xuICAgICAgcHJlICs9IGFyZ3NbMV07XG4gICAgICBvcHRpb25zLnB1c2goJ2NvbG9yOiMxZGE4N2M7IGZvbnQtd2VpZ2h0OmJvbGRlcicpO1xuICAgICAgb3B0aW9ucy5wdXNoKGRlZmF1bHRfZm9ybWF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlICs9ICcgfCAnICsgYXJnc1swXTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJlLCAuLi5vcHRpb25zKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gY29weShvYmopIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbmZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmZ1bmN0aW9uIGdldERvbWFpbihzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHNsLnBhcnNlKG5ldyBVUkwoc3RyKS5ob3N0bmFtZSkuZG9tYWluO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuICByZXR1cm4gL15cXGQrJC8udGVzdCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHNldEFsbFJlYWRCYWRnZSgpIHtcbiAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6ICcnIH0pOyAvLyA8LS0gc2V0IHRleHQgdG8gJycgdG8gcmVtb3ZlIHRoZSBiYWRnZVxufVxuXG5mdW5jdGlvbiBzZXRVbnJlYWRCYWRnZSgpIHtcbiAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEJhZGdlQmFja2dyb3VuZENvbG9yKHsgY29sb3I6IFsyMjksIDkyLCAwLCAxMjhdIH0pO1xuICBicm93c2VyLmJyb3dzZXJBY3Rpb24uZ2V0QmFkZ2VUZXh0KHt9KS50aGVuKGZ1bmN0aW9uIChiYWRnZVRleHQpIHtcbiAgICBsZXQgY291bnRlciA9IDE7XG4gICAgaWYgKGlzSW50ZWdlcihiYWRnZVRleHQpKSB7XG4gICAgICBjb3VudGVyID0gcGFyc2VJbnQoYmFkZ2VUZXh0KSArIDE7XG4gICAgfVxuICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiBgJHtjb3VudGVyfWAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc1VzZXJBY3RpdmUoKSB7XG4gIC8vIE5vdCBjb21wYXRpYmxlIHdpdGggU2FmYXJpXG4gIHJldHVybiBicm93c2VyLmlkbGUucXVlcnlTdGF0ZShNYXRoLnJvdW5kKE1BWF9BQ1RJVkVfREVCT1VOQ0UgLyAxMDAwKSkudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgaWYgKHN0YXR1cyA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ2dlcihcIkNvdWxkbid0IGNoZWNrIHVzZXIgYWN0aXZpdHkuXCIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZVJlc2V0KCkge1xuICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChudWxsKS50aGVuKChkKSA9PiB7XG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5yZW1vdmUoT2JqZWN0LmtleXMoZCkpO1xuICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGxvZ2dlcignTWVtb3J5IGZsdXNoZWQuJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0Rm9jdXNlZFdpbmRvdygpIHtcbiAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCh7IHBvcHVsYXRlOiBmYWxzZSwgd2luZG93VHlwZXM6IFsnbm9ybWFsJ10gfSkudGhlbigoZCkgPT4ge3JldHVybiBkLmlkfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0oYXJyLCB2YWx1ZSkge1xuICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKHZhbHVlKTtcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5jb25zdCByZXRyeVByb21pc2UgPSAoZnVuYywgZGVsYXksIHRpbWVzKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIHJldHVybiBmdW5jKClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICBpZiAocmVhc29uID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KHJlYXNvbik7XG4gICAgICB9XG4gICAgICBpZiAodGltZXMgPiAwKSB7XG4gICAgICAgIHJldHVybiB0aW1lb3V0KGRlbGF5KVxuICAgICAgICAgIC50aGVuKHJldHJ5UHJvbWlzZS5iaW5kKG51bGwsIGZ1bmMsIGRlbGF5LCB0aW1lcyAtIDEpKVxuICAgICAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVqZWN0KHJlYXNvbik7XG4gICAgfSk7XG59KTtcblxubG9nZ2VyKCdTdGFydGluZyBpbiAnICsgRU5WICsgJyBlbnYuJyk7XG5leHBvcnQge1xuICBsb2dnZXIsXG4gIGNvcHksXG4gIHRpbWVvdXQsXG4gIHJldHJ5UHJvbWlzZSxcbiAgZ2V0RG9tYWluLFxuICBzZXRBbGxSZWFkQmFkZ2UsXG4gIHNldFVucmVhZEJhZGdlLFxuICBpc0ludGVnZXIsXG4gIGlzVXNlckFjdGl2ZSxcbiAgc3RvcmFnZVJlc2V0LFxuICBnZXRMYXN0Rm9jdXNlZFdpbmRvdyxcbiAgcmVtb3ZlSXRlbSxcbn07XG5pZiAoRU5WID09PSAnZGVidWcnKSB7XG4gIHdpbmRvdy51dGlscyA9IHtcbiAgICBsb2dnZXIsXG4gICAgY29weSxcbiAgICB0aW1lb3V0LFxuICAgIHJldHJ5UHJvbWlzZSxcbiAgICBnZXREb21haW4sXG4gICAgc2V0QWxsUmVhZEJhZGdlLFxuICAgIHNldFVucmVhZEJhZGdlLFxuICAgIGlzSW50ZWdlcixcbiAgICBpc1VzZXJBY3RpdmUsXG4gICAgc3RvcmFnZVJlc2V0LFxuICAgIGdldExhc3RGb2N1c2VkV2luZG93LFxuICAgIHJlbW92ZUl0ZW0sXG4gIH07XG59XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhYm9vdHN0cmFwLWNzcy1vbmx5L2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEpO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxYjllNzQ7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uYm9sZC10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbjpmb2N1cyB7b3V0bGluZTowICFpbXBvcnRhbnQ7fVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInBvcHVwXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL2FwcC9wb3B1cC5qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcHNsX2luZGV4X2pzLW5vZGVfbW9kdWxlc193ZWJleHRlbnNpb24tcG9seWZpbGxfZGlzdF9icm93c2VyLXBvbHlmaWxsX2pzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19tYXRlcmlhbC11aV9jb3JlX1R5cG9ncmFwaHlfVHlwb2dyYXBoeV9qcy1ub2RlX21vZHVsZXNfbWF0ZXJpYWwtdWlfY29yZV8tY2ZiZTNkXCJdXG5dO1xuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gKCkgPT4ge1xuXG59O1xuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0fVxuXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbmZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzNdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59O1xuXG52YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucHRrX2Nocm9tZVwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucHRrX2Nocm9tZVwiXSB8fCBbXTtcbnZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG5qc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbnZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjsiLCIvLyBydW4gc3RhcnR1cFxucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==