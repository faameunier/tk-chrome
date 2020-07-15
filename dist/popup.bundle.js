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
  // windowType is deprecated in FF, it doesn't seem critical anyways
  return webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__.windows.getLastFocused({
    populate: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9lbnYuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9zZXJ2aWNlcy91dGlscy5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzP2VhNWQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiQXBwIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUkVTVE9SRSIsIlNIRUxMX1JFU1RPUkUiLCJSRU1PVkVEIiwiQ0xPU0VEX0hJU1RPUlkiLCJOVU1CRVJfSE9VUlNfREFZIiwiVElNRV9QRVJJT0RfMjRIIiwiVElNRV9QRVJJT0RfNzJIIiwiSG9tZSIsIlB1cmVDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInNlYXJjaFZhbHVlIiwiZXZlbnQiLCJzZXRBbGxSZWFkQmFkZ2UiLCJzdGF0ZSIsInJlbmRlclNhdmVCb29sZWFuIiwib25DaGFuZ2VkQ2FsbGJhY2siLCJjaGFuZ2VzIiwiY2hhbmdlc0Nsb3NlZEhpc3RvcnkiLCJjbG9zZWRfaGlzdG9yeSIsImJpbmQiLCJjb21wb25lbnREaWRNb3VudCIsImJyb3dzZXIiLCJ0aGVuIiwicmVzdWx0IiwibmV4dExpc3QiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImZvcmNlUmVuZGVyIiwicmVtb3ZlSXRlbSIsImxpc3RJdGVtcyIsImtleSIsImUiLCJjdHJsS2V5IiwibWV0YUtleSIsInJlc3RvcmVUYWIiLCJpdGVtcyIsIm1lc3NhZ2VUeXBlIiwicmVzdG9yZWRUYWIiLCJmaWx0ZXIiLCJpdGVtIiwidXVpZCIsImZpbHRlckxpc3QiLCJzZWxlY3RlZExpc3QiLCJlbmRQZXJpb2QiLCJub3ciLCJEYXRlIiwiZGVsZXRpb25fdGltZSIsImZpbHRlckxpc3RPbkRhdGUiLCJiZWdpbm5pbmdEYXkiLCJlbmREYXkiLCJnZXRUaW1lIiwic2V0RGF0ZSIsImdldERhdGUiLCJnZW5lcmF0ZUJlZ2luRGF0ZSIsInJvbGxCYWNrRGF5cyIsInNldEhvdXJzIiwiZGF0ZURheUJlZ2luIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJkYXRlTW9udGhCZWdpbiIsImdldE1vbnRoIiwicmVuZGVyTGlzdCIsImNsYXNzZXMiLCJtYXAiLCJ3ZWJzaXRlIiwiZGVsZXRpb25UaW1lIiwiZm9ybWF0dGVkX2RlbGV0aW9uX3RpbWUiLCJ0b1RpbWVTdHJpbmciLCJzcGxpdCIsImhvdXJzX2RlbGV0aW9uIiwibWludXRlc19kZWxldGlvbiIsInRydW5jYXRlZF91cmwiLCJ1cmwiLCJsZW5ndGgiLCJzZWFyY2hQYXR0ZXJuIiwiUmVnRXhwIiwidGVybSIsImpvaW4iLCJvcHRpb24iLCJ0aXRsZSIsIm1hdGNoIiwiZ2VuZXJhdGVkRGF0ZVRvZGF5IiwiZ2VuZXJhdGVkRGF0ZVllc3RlcmRheSIsImdlbmVyYXRlZERhdGUyZGF5c0FnbyIsImdlbmVyYXRlZERhdGUzZGF5c0FnbyIsImZpbHRlcmVkTGlzdFRvZGF5IiwicmV2ZXJzZSIsImZpbHRlcmVkTGlzdFllc3RlcmRheSIsImZpbHRlcmVkTGlzdDJkYXlzQWdvIiwiZmlsdGVyZWRMaXN0M2RheXNBZ28iLCJ5ZXN0ZXJkYXlUaXRsZSIsInR3b0RheXNUaXRsZSIsInRocmVlRGF5c1RpdGxlIiwiZGF5IiwidGV4dCIsImZpbHRlcmVkTGlzdCIsImNvbmNhdCIsImxpc3RJdGVtIiwibXlGaWx0ZXJlZExpc3QiLCJpbmRleCIsInN0eWxlIiwicHJpbWFyeSIsInByaW1hcnlUaXRsZUNvbnRhaW5lciIsImxpc3RUaXRsZVRleHQiLCJncmlkQXZhdGFyV2l0aFRpbWUiLCJ0aW1lRGlzcGxheSIsImZhdkljb25VcmwiLCJhdmF0YXJDb250YWluZXIiLCJwcmltYXJ5VGV4dENvbnRhaW5lciIsInNlY29uZGFyeVRleHRDb250YWluZXIiLCJpdGVtVGV4dCIsImJ1dHRvbkNvbnRhaW5lciIsImJ1dHRvbiIsImxpc3RXZWJzaXRlcyIsInNlYXJjaE9uQ2hhbmdlIiwic2VhcmNoT25SZXF1ZXN0U2VhcmNoIiwic2VhcmNoT25DYW5jZWwiLCJzZWFyY2hCYXIiLCJsaXN0IiwiTWF0aCIsIm1pbiIsInJlbmRlciIsIm51bWJlckNsb3NlZFRhYnNMYXN0SG91ciIsImJvbGROdW1iZXIiLCJ0ZXh0T25SaWdodCIsInRvcFRleHQiLCJtaWRkbGVUZXh0IiwiZm9vdGVyQ29udGFpbmVyIiwiaWNvbkNvbnRhaW5lciIsImxpbmtUb0Zvcm0iLCJzdHlsZXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1heEhlaWdodCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwiZ3JlZW5UaXRsZSIsImZvbnRTaXplIiwiYm9yZGVyQm90dG9tIiwibWF4V2lkdGgiLCJsaXN0VGl0bGUiLCJjb2xvciIsInN1YlRleHQiLCJtYXJnaW5Ub3AiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsIm92ZXJmbG93V3JhcCIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsIm1pbldpZHRoIiwibWFyZ2luUmlnaHQiLCJsaXN0Q29udGFpbmVyIiwibWFyZ2luQm90dG9tIiwid2l0aFN0eWxlcyIsIkhvbWVEaXNwYXRjaGVyIiwibmV3VmFsdWUiLCJhcHBCYXJWYWx1ZSIsImxvZ2dlciIsImRpc3BhdGNoUGFnZSIsImRpc3BsYXlJY29uIiwiaGFuZGxlQ2hhbmdlIiwicm9vdCIsIm5vdGlmaWNhdGlvbiIsInZhcmlhbnRTdWNjZXNzIiwic3VjY2VzcyIsImhvbWVDb250YWluZXIiLCJncmlkTG9nb1RhYnMiLCJlbnNlbWJsZWxvZ28iLCJsb2dvRnVsbCIsInRhYiIsImxlZnQiLCJhbGxUYWJzIiwibG9nb0F2YXRhciIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsIkxpZ2h0VG9vbHRpcCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb21tb24iLCJ3aGl0ZSIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJUb29sdGlwIiwiU2V0dGluZ3MiLCJwYXRoIiwicGFyYW1ldGVyIiwic2V0dGluZ3MiLCJuZXh0VmFsdWUiLCJ0YXJnZXQiLCJpc0ludGVnZXIiLCJpbmFjdGl2ZVBvbGljeSIsImluY2x1ZGVzIiwiZm9jdXNlZFdpbmRvd0lkIiwid2luZG93SWQiLCJwdXNoIiwib3Blbk1vZGFsIiwiZm9jdXNlZE1vZGUiLCJyZWxheGVkTW9kZSIsImN1c3RvbWl6ZWRCb29sIiwiSU5JVF9GT0NVU0VEX1BST0ZJTEUiLCJjaGFuZ2VzU2V0dGluZ3MiLCJjaGFuZ2VzUHJvZmlsZSIsImNoYW5nZWRJbmFjdGl2ZVBvbGljeSIsIkZPQ1VTRUQiLCJSRUxBWEVEIiwiQ1VTVE9NSVpFRCIsInByb2ZpbGUiLCJhY3RpdmVfcHJvZmlsZSIsImZvY3VzZWRfd2luZG93X2lkIiwiaW5hY3RpdmVfcG9saWN5IiwiaGFuZGxlQm9vbENoYW5nZSIsImNoYW5nZVR5cGUiLCJub3RpZnlVc2VyIiwiaGFuZGxlU3dpdGNoIiwiaGFuZGxlU2F2ZVBhcmFtZXRlcnMiLCJjaGVja1NldHRpbmdzIiwiZW5xdWV1ZVNuYWNrYmFyIiwidmFyaWFudCIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImF1dG9IaWRlRHVyYXRpb24iLCJpbnB1dHNQYXJhbWV0ZXJzIiwibGFiZWwiLCJzb3VyY2UiLCJQT0xJQ1kiLCJPUFRJTUFMX05VTUJFUl9UQUJTIiwiaW5wdXRQcm9wcyIsIm1heCIsInN0ZXAiLCJsaXN0SXRlbXNQYXJhbWV0ZXJzIiwiaGFuZGxlQ2hhbmdlUGFyYW1ldGVycyIsInRleHRGaWVsZCIsIm1haW5CbG9jayIsInN3aXRjaFdyYXBwZXIiLCJzd2l0Y2hDb250YWluZXIiLCJzdHlsZUxhYmVsIiwiaW50cm9kdWN0aW9uQmxvY2siLCJwYXJhbWV0ZXJzVGl0bGUiLCJzZXR0aW5nc1dyYXBwZXIiLCJmaXJzdFByb2ZpbGVzQ29udGFpbmVyIiwiY2hlY2tib3hXcmFwcGVyIiwiZmlyc3RCb29sZWFucyIsImhlbHBJY29uIiwiY3VzdG9taXplV3JhcHBlciIsInNldHRpbmdzQmxvY2siLCJzZWNvbmRhcnlCdXR0b24iLCJoYW5kbGVPcGVuIiwidGlwc0J1dHRvbiIsInN0eWxlTGFiZWxUaXBzIiwibW9kYWwiLCJoYW5kbGVDbG9zZSIsIkJhY2tkcm9wIiwidGltZW91dCIsImludmlzaWJsZSIsInBhcGVyIiwiZmlyc3RCbG9ja01vZGFsIiwic2Vjb25kRW5zZW1ibGUiLCJsYXN0RW5zZW1ibGUiLCJsZWZ0Q2xpY2tXcmFwcGVyIiwic3R5bGVMYWJlbE5leHQiLCJmb290ZXJNb2RhbCIsInZlcnNpb24iLCJ3aXRoU25hY2tiYXIiLCJwb2ludGVyRXZlbnRzIiwibWluSGVpZ2h0IiwiekluZGV4IiwiZHJhd2VyIiwicGFkZGluZyIsIm9wYWNpdHkiLCJib3hDdHJsIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJJTkFDVElWRV9QT0xJQ1kiLCJhcnIiLCJpbmRleE9mIiwic3BsaWNlIiwiU0NPUkVSIiwiTUFYSU1VTV9TQ09SRSIsIk1BWElNVU1fSElTVE9SWV9TSVpFIiwiU0VTU0lPTlNfVElNRU9VVF9NUyIsIlNFU1NJT05TX1JFVFJJRVMiLCJTRVNTSU9OU19NQVhfRlVaWllfREVMVEFfTVMiLCJNSU5fQUNUSVZFX0RFQk9VTkNFIiwiTUFYX0FDVElWRV9ERUJPVU5DRSIsIklOSVRfUkVMQVhFRF9QUk9GSUxFIiwiRU5WIiwibWVtb3J5IiwiY2FjaGVfc2l6ZSIsIm1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlIiwibWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3IiLCJwb2xpY3kiLCJ0YXJnZXRfdGFicyIsImRlY2F5IiwibWluX3RpbWUiLCJhY3RpdmUiLCJwaW5uZWQiLCJhdWRpYmxlIiwic2NvcmVyIiwibWluX2FjdGl2ZSIsInByb3RlY3Rpb25fdGltZSIsImNhY2hlZF9kZWNheSIsIk9iamVjdCIsImZyZWV6ZSIsImFyZ3MiLCJkZWZhdWx0X2Zvcm1hdCIsInByZSIsInRvVVRDU3RyaW5nIiwib3B0aW9ucyIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY29weSIsIm9iaiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZ2V0RG9tYWluIiwic3RyIiwicHNsIiwiVVJMIiwiaG9zdG5hbWUiLCJkb21haW4iLCJ0ZXN0Iiwic2V0VW5yZWFkQmFkZ2UiLCJiYWRnZVRleHQiLCJjb3VudGVyIiwicGFyc2VJbnQiLCJpc1VzZXJBY3RpdmUiLCJyb3VuZCIsInN0YXR1cyIsInN0b3JhZ2VSZXNldCIsImQiLCJrZXlzIiwiZ2V0TGFzdEZvY3VzZWRXaW5kb3ciLCJwb3B1bGF0ZSIsImlkIiwicmV0cnlQcm9taXNlIiwiZnVuYyIsImRlbGF5IiwidGltZXMiLCJyZWplY3QiLCJjYXRjaCIsInJlYXNvbiIsIndpbmRvdyIsInV0aWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEtBQUssR0FBR0MsaUVBQWMsQ0FBQztBQUMzQkMsWUFBVSxFQUFFO0FBQ1ZDLGNBQVUsRUFBRTtBQURGLEdBRGU7QUFJM0JDLFNBQU8sRUFBRTtBQUNQQyxhQUFTLEVBQUU7QUFDVEMsVUFBSSxFQUFFO0FBREc7QUFESjtBQUprQixDQUFELENBQTVCOztBQVdBLFNBQVNDLEdB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QUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQztXQUNBO1dBQ0EsZ0JBQWdCLDJCQUEyQjtXQUMzQztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxlQUFlLHVCQUF1QjtXQUN0QztXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLDJDOzs7O1VDNUZBO1VBQ0EiLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZURpc3BhdGNoZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lRGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gIH0sXG4gIHBhbGV0dGU6IHtcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMDBiOWFhJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhvbWVEaXNwYXRjaGVyIC8+eycgJ31cbiAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0ICogYXMgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IEVycm9yT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yT3V0bGluZSc7XG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0IGFzIExpc3QgfSBmcm9tICdyZWFjdC13aW5kb3cnO1xuXG5pbXBvcnQgeyBzZXRBbGxSZWFkQmFkZ2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ21hdGVyaWFsLXVpLXNlYXJjaC1iYXInO1xuXG5jb25zdCBSRVNUT1JFID0gJ1JFU1RPUkUnO1xuY29uc3QgU0hFTExfUkVTVE9SRSA9ICdTSEVMTF9SRVNUT1JFJztcbmNvbnN0IFJFTU9WRUQgPSAnUkVNT1ZFRCc7XG5jb25zdCBDTE9TRURfSElTVE9SWSA9ICdjbG9zZWRfaGlzdG9yeSc7XG5jb25zdCBOVU1CRVJfSE9VUlNfREFZID0gMjQ7XG5jb25zdCBUSU1FX1BFUklPRF8yNEggPSAzNjAwMDAwICogTlVNQkVSX0hPVVJTX0RBWTsgLy8gaW4gbWljcm9zZWNvbmRcbmNvbnN0IFRJTUVfUEVSSU9EXzcySCA9IDM2MDAwMDAgKiBOVU1CRVJfSE9VUlNfREFZICogMzsgLy8gaW4gbWljcm9zZWNvbmRcblxuY2xhc3MgSG9tZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBzZXRBbGxSZWFkQmFkZ2UoKTtcbiAgICB0aGlzLnN0YXRlID0geyByZW5kZXJTYXZlQm9vbGVhbjogZmFsc2UgfTtcbiAgICB0aGlzLm9uQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXNDbG9zZWRIaXN0b3J5ID0gY2hhbmdlc1tDTE9TRURfSElTVE9SWV07XG4gICAgICBpZiAoY2hhbmdlc0Nsb3NlZEhpc3RvcnkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2xvc2VkX2hpc3Rvcnk6IGNoYW5nZXNDbG9zZWRIaXN0b3J5WyduZXdWYWx1ZSddLFxuICAgICAgICAgIHJlbmRlclNhdmVCb29sZWFuOiB0cnVlLFxuICAgICAgICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChcbiAgICAgIFtDTE9TRURfSElTVE9SWV1cbiAgICApLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSByZXN1bHQuY2xvc2VkX2hpc3RvcnkgfHwgW107XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VkX2hpc3RvcnkgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5leHRMaXN0OiBbXSB9KTtcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgc2V0QWxsUmVhZEJhZGdlKCk7XG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnJlbmRlclNhdmVCb29sZWFuKSB7XG4gICAgICB0aGlzLmZvcmNlUmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSXRlbShsaXN0SXRlbXMsIGtleSwgZSkge1xuICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XG4gICAgICAvLyBtZXRhS2V5IGlzIGNtZCBrZXkgb24gbWFjXG4gICAgICB0aGlzLnJlc3RvcmVUYWIobGlzdEl0ZW1zLCBrZXksIFNIRUxMX1JFU1RPUkUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc3RvcmVUYWIobGlzdEl0ZW1zLCBrZXksIFJFU1RPUkUpO1xuICAgIH1cbiAgfVxuXG4gIHJlc3RvcmVUYWIoaXRlbXMsIGtleSwgbWVzc2FnZVR5cGUpIHtcbiAgICBjb25zdCByZXN0b3JlZFRhYiA9IGl0ZW1zW2tleV07XG4gICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS51dWlkICE9PSByZXN0b3JlZFRhYi51dWlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VkX2hpc3Rvcnk6IGNsb3NlZF9oaXN0b3J5LCByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSB9KTtcbiAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VUeXBlLFxuICAgICAgdXVpZDogcmVzdG9yZWRUYWIudXVpZCxcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaE9uQ2hhbmdlID0gKHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBzZWFyY2hPblJlcXVlc3RTZWFyY2ggPSAoZXZlbnQpID0+IHt9O1xuXG4gIHNlYXJjaE9uQ2FuY2VsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogJycgfSk7XG4gIH07XG5cbiAgZm9yY2VSZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGZpbHRlckxpc3Qoc2VsZWN0ZWRMaXN0LCBlbmRQZXJpb2QpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZWxlY3RlZExpc3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gbm93IC0gaXRlbS5kZWxldGlvbl90aW1lIDwgZW5kUGVyaW9kO1xuICAgIH0pO1xuICB9XG4gIGZpbHRlckxpc3RPbkRhdGUoc2VsZWN0ZWRMaXN0LCBiZWdpbm5pbmdEYXkpIHtcbiAgICBjb25zdCBlbmREYXkgPSBuZXcgRGF0ZShiZWdpbm5pbmdEYXkuZ2V0VGltZSgpKTtcbiAgICBlbmREYXkuc2V0RGF0ZShlbmREYXkuZ2V0RGF0ZSgpICsgMSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBiZWdpbm5pbmdEYXkuZ2V0VGltZSgpIDwgaXRlbS5kZWxldGlvbl90aW1lICYmIGl0ZW0uZGVsZXRpb25fdGltZSA8IGVuZERheS5nZXRUaW1lKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZW5lcmF0ZUJlZ2luRGF0ZShyb2xsQmFja0RheXMpIHtcbiAgICBjb25zdCBiZWdpbm5pbmdEYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGJlZ2lubmluZ0RheS5zZXREYXRlKGJlZ2lubmluZ0RheS5nZXREYXRlKCkgLSByb2xsQmFja0RheXMpO1xuICAgIGJlZ2lubmluZ0RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBjb25zdCBkYXRlRGF5QmVnaW4gPSBTdHJpbmcoYmVnaW5uaW5nRGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICBjb25zdCBkYXRlTW9udGhCZWdpbiA9IFN0cmluZyhiZWdpbm5pbmdEYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgcmV0dXJuIFtiZWdpbm5pbmdEYXksIGRhdGVEYXlCZWdpbiArICcvJyArIGRhdGVNb250aEJlZ2luXTtcbiAgfVxuXG4gIHJlbmRlckxpc3QoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBzZWxlY3RlZExpc3QgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5ID8gdGhpcy5maWx0ZXJMaXN0KHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnksIFRJTUVfUEVSSU9EXzcySCkgOiBbXTtcbiAgICBzZWxlY3RlZExpc3QgPSBzZWxlY3RlZExpc3QubWFwKCh3ZWJzaXRlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHdlYnNpdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0aW9uVGltZSA9IG5ldyBEYXRlKHdlYnNpdGUuZGVsZXRpb25fdGltZSk7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZF9kZWxldGlvbl90aW1lID0gZGVsZXRpb25UaW1lLnRvVGltZVN0cmluZygpLnNwbGl0KCcgJylbMF07XG4gICAgICAgIHdlYnNpdGUuaG91cnNfZGVsZXRpb24gPSBmb3JtYXR0ZWRfZGVsZXRpb25fdGltZS5zcGxpdCgnOicpWzBdO1xuICAgICAgICB3ZWJzaXRlLm1pbnV0ZXNfZGVsZXRpb24gPSBmb3JtYXR0ZWRfZGVsZXRpb25fdGltZS5zcGxpdCgnOicpWzFdO1xuICAgICAgICB3ZWJzaXRlLnRydW5jYXRlZF91cmwgPSB3ZWJzaXRlLnVybDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3ZWJzaXRlO1xuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNlYXJjaFBhdHRlcm4gPSBuZXcgUmVnRXhwKFxuICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlXG4gICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAubWFwKCh0ZXJtKSA9PiBgKD89Lioke3Rlcm19KWApXG4gICAgICAgICAgLmpvaW4oJycpLFxuICAgICAgICAnaSdcbiAgICAgICk7XG4gICAgICBzZWxlY3RlZExpc3QgPSBzZWxlY3RlZExpc3QuZmlsdGVyKFxuICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24udGl0bGUubWF0Y2goc2VhcmNoUGF0dGVybikgfHwgb3B0aW9uLnVybC5tYXRjaChzZWFyY2hQYXR0ZXJuKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZWREYXRlVG9kYXkgPSB0aGlzLmdlbmVyYXRlQmVnaW5EYXRlKDApO1xuICAgIGNvbnN0IGdlbmVyYXRlZERhdGVZZXN0ZXJkYXkgPSB0aGlzLmdlbmVyYXRlQmVnaW5EYXRlKDEpO1xuICAgIGNvbnN0IGdlbmVyYXRlZERhdGUyZGF5c0FnbyA9IHRoaXMuZ2VuZXJhdGVCZWdpbkRhdGUoMik7XG4gICAgY29uc3QgZ2VuZXJhdGVkRGF0ZTNkYXlzQWdvID0gdGhpcy5nZW5lcmF0ZUJlZ2luRGF0ZSgzKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkTGlzdFRvZGF5ID0gdGhpcy5maWx0ZXJMaXN0T25EYXRlKHNlbGVjdGVkTGlzdCwgZ2VuZXJhdGVkRGF0ZVRvZGF5WzBdKS5yZXZlcnNlKCk7XG4gICAgY29uc3QgZmlsdGVyZWRMaXN0WWVzdGVyZGF5ID0gdGhpcy5maWx0ZXJMaXN0T25EYXRlKHNlbGVjdGVkTGlzdCwgZ2VuZXJhdGVkRGF0ZVllc3RlcmRheVswXSkucmV2ZXJzZSgpO1xuICAgIGNvbnN0IGZpbHRlcmVkTGlzdDJkYXlzQWdvID0gdGhpcy5maWx0ZXJMaXN0T25EYXRlKHNlbGVjdGVkTGlzdCwgZ2VuZXJhdGVkRGF0ZTJkYXlzQWdvWzBdKS5yZXZlcnNlKCk7XG4gICAgY29uc3QgZmlsdGVyZWRMaXN0M2RheXNBZ28gPSB0aGlzLmZpbHRlckxpc3RPbkRhdGUoc2VsZWN0ZWRMaXN0LCBnZW5lcmF0ZWREYXRlM2RheXNBZ29bMF0pLnJldmVyc2UoKTtcblxuICAgIGxldCB5ZXN0ZXJkYXlUaXRsZSA9IFtdO1xuICAgIGxldCB0d29EYXlzVGl0bGUgPSBbXTtcbiAgICBsZXQgdGhyZWVEYXlzVGl0bGUgPSBbXTtcblxuICAgIGlmIChmaWx0ZXJlZExpc3RZZXN0ZXJkYXkubGVuZ3RoID4gMCkge1xuICAgICAgeWVzdGVyZGF5VGl0bGUgPSBbeyBkYXk6IGdlbmVyYXRlZERhdGVZZXN0ZXJkYXlbMV0sIHRleHQ6ICdZZXN0ZXJkYXkgLScgfV07XG4gICAgfVxuICAgIGlmIChmaWx0ZXJlZExpc3QyZGF5c0Fnby5sZW5ndGggPiAwKSB7XG4gICAgICB0d29EYXlzVGl0bGUgPSBbeyBkYXk6IGdlbmVyYXRlZERhdGUyZGF5c0Fnb1sxXSwgdGV4dDogJ1ByZXZpb3VzIGRheSAtJyB9XTtcbiAgICB9XG4gICAgaWYgKGZpbHRlcmVkTGlzdDNkYXlzQWdvLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocmVlRGF5c1RpdGxlID0gW3sgZGF5OiBnZW5lcmF0ZWREYXRlM2RheXNBZ29bMV0sIHRleHQ6ICcnIH1dO1xuICAgIH1cbiAgICBjb25zdCBmaWx0ZXJlZExpc3QgPSBmaWx0ZXJlZExpc3RUb2RheVxuICAgICAgLmNvbmNhdCh5ZXN0ZXJkYXlUaXRsZSlcbiAgICAgIC5jb25jYXQoZmlsdGVyZWRMaXN0WWVzdGVyZGF5KVxuICAgICAgLmNvbmNhdCh0d29EYXlzVGl0bGUpXG4gICAgICAuY29uY2F0KGZpbHRlcmVkTGlzdDJkYXlzQWdvKVxuICAgICAgLmNvbmNhdCh0aHJlZURheXNUaXRsZSlcbiAgICAgIC5jb25jYXQoZmlsdGVyZWRMaXN0M2RheXNBZ28pO1xuXG4gICAgY29uc3QgbGlzdEl0ZW0gPSAobXlGaWx0ZXJlZExpc3QpID0+ICh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gICAgICBjb25zdCB3ZWJzaXRlID0gbXlGaWx0ZXJlZExpc3RbaW5kZXhdO1xuICAgICAgaWYgKHR5cGVvZiB3ZWJzaXRlLmRheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICA8TGlzdEl0ZW0gQ29udGFpbmVyQ29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXtgJHt3ZWJzaXRlLnRleHR9ICR7d2Vic2l0ZS5kYXl9YH1cbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICBwcmltYXJ5OiBjbGFzc2VzLnByaW1hcnlUaXRsZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0VGl0bGVUZXh0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICA8TGlzdEl0ZW0gQ29udGFpbmVyQ29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkQXZhdGFyV2l0aFRpbWV9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGltZURpc3BsYXl9PlxuICAgICAgICAgICAgICAgIHtgJHt3ZWJzaXRlLmhvdXJzX2RlbGV0aW9ufToke3dlYnNpdGUubWludXRlc19kZWxldGlvbn1gfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3F1YXJlXCJcbiAgICAgICAgICAgICAgICAgIGFsdD17d2Vic2l0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHNyYz17d2Vic2l0ZS5mYXZJY29uVXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhckNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgIHByaW1hcnk9e3dlYnNpdGUudHJ1bmNhdGVkX3VybH1cbiAgICAgICAgICAgICAgc2Vjb25kYXJ5PXt3ZWJzaXRlLnRpdGxlfVxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgcHJpbWFyeTogY2xhc3Nlcy5wcmltYXJ5VGV4dENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk6IGNsYXNzZXMuc2Vjb25kYXJ5VGV4dENvbnRhaW5lcixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcywgbXlGaWx0ZXJlZExpc3QsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHsnUmVzdG9yZSd9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFdlYnNpdGVzfT5cbiAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG9uIGxhc3QgNzJoXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWFyY2hPbkNoYW5nZX1cbiAgICAgICAgICBvblJlcXVlc3RTZWFyY2g9e3RoaXMuc2VhcmNoT25SZXF1ZXN0U2VhcmNofVxuICAgICAgICAgIG9uQ2FuY2VsU2VhcmNoPXt0aGlzLnNlYXJjaE9uQ2FuY2VsfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hCYXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgICAgIHtmaWx0ZXJlZExpc3QubGVuZ3RoID09PSAwID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxMaXN0IGhlaWdodD17TWF0aC5taW4oODAgKiBmaWx0ZXJlZExpc3QubGVuZ3RoLCAzMDApfSBpdGVtQ291bnQ9e2ZpbHRlcmVkTGlzdC5sZW5ndGh9IGl0ZW1TaXplPXs4MH0+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbShmaWx0ZXJlZExpc3QpfVxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeVxuICAgICAgPyB0aGlzLmZpbHRlckxpc3QodGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSwgVElNRV9QRVJJT0RfMjRIKS5sZW5ndGhcbiAgICAgIDogMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGRpdiB2YXJpYW50PVwiaDNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2xkTnVtYmVyfT5cbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPyBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgOiAwfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0T25SaWdodH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudG9wVGV4dH0+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIHRhYlxuICAgICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIDw9IDEgPyAnJyA6ICdzJ30gY2xvc2VkXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubWlkZGxlVGV4dH0+IGluIHRoZSBsYXN0IHtgJHtOVU1CRVJfSE9VUlNfREFZfSBob3Vyc2B9IDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlckxpc3QuYmluZCh0aGlzKShSRU1PVkVEKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyQ29udGFpbmVyfT5cbiAgICAgICAgICA8RXJyb3JPdXRsaW5lSWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQ29udGFpbmVyfSAvPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZFVFSkhkMGJMNnJ5RnZaazIyMENvWnA3Y3d2RnhFU29ycHM3Y25nazB3UWZ5dS1RL3ZpZXdmb3JtXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua1RvRm9ybX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCdWcvRmVlZGJhY2s/XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHRpdGxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtYXhIZWlnaHQ6IDQwLFxuICB9LFxuICB0ZXh0T25SaWdodDoge1xuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdzdGFydCcsXG4gIH0sXG4gIGdyZWVuVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAjMDBiOWFhYCxcbiAgICBtYXhXaWR0aDogMjI1LFxuICB9LFxuICBsaXN0VGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgbWF4SGVpZ2h0OiAzMCxcbiAgfSxcblxuICBib2xkTnVtYmVyOiB7XG4gICAgY29sb3I6ICcjZTU1YzAwJyxcbiAgICBmb250U2l6ZTogNDAsXG4gICAgbWF4V2lkdGg6ICczMCUnLFxuICB9LFxuICBtaWRkbGVUZXh0OiB7XG4gICAgZm9udFNpemU6IDEzLFxuICB9LFxuICB0b3BUZXh0OiB7XG4gICAgZm9udFNpemU6IDE2LFxuICB9LFxuICBzdWJUZXh0OiB7XG4gICAgZm9udFNpemU6IDEzLFxuICAgIG1hcmdpblRvcDogMTAsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWF4V2lkdGg6IDIwLFxuICB9LFxuICBidXR0b25Db250YWluZXI6IHsgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyB9LFxuICBpdGVtVGV4dDoge1xuICAgIG1heFdpZHRoOiAxODUsXG4gICAgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aGl0ZVNwYWNlOiAnYnJlYWstc3BhY2VzJyxcblxuICAgIG1heEhlaWdodDogNjAsXG4gIH0sXG4gIHRpbWVEaXNwbGF5OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgfSxcbiAgZ3JpZEF2YXRhcldpdGhUaW1lOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB9LFxuICBsaXN0V2Vic2l0ZXM6IHtcbiAgICBtYXJnaW5Ub3A6IDIwLFxuICB9LFxuICBmb290ZXJDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuMjUpLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGxpbmtUb0Zvcm06IHtcbiAgICBmb250U2l6ZTogMTAsXG4gIH0sXG4gIGljb25Db250YWluZXI6IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygwLjI1KSxcbiAgICBmb250U2l6ZTogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgYXZhdGFyQ29udGFpbmVyOiB7XG4gICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgbWF4SGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDcpLFxuICB9LFxuICBwcmltYXJ5VGV4dENvbnRhaW5lcjoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIG1heEhlaWdodDogMjIsXG4gIH0sXG4gIHNlY29uZGFyeVRleHRDb250YWluZXI6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gIH0sXG4gIHByaW1hcnlUaXRsZUNvbnRhaW5lcjoge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTYsXG4gIH0sXG5cbiAgbGlzdFRpdGxlVGV4dDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0LjUpLFxuICB9LFxuICBsaXN0Q29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzZWFyY2hCYXI6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWF4SGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDUpLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzJztcbmltcG9ydCBBcnJvd0JhY2tJb3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3MnO1xuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vU2V0dGluZ3MnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9Ib21lJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLmpzJztcblxuY2xhc3MgSG9tZURpc3BhdGNoZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgYXBwQmFyVmFsdWU6ICdIT01FJyB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFwcEJhclZhbHVlOiAnSE9NRScgfSk7XG4gICAgbG9nZ2VyKHRoaXMsICdQb3B1cCBvcGVuZWQnKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChuZXdWYWx1ZSkgPT4gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBCYXJWYWx1ZTogbmV3VmFsdWUgfSk7XG4gICAgbG9nZ2VyKHRoaXMsICdTd2l0Y2ggdG8gJyArIG5ld1ZhbHVlKTtcbiAgfTtcblxuICBkaXNwYXRjaFBhZ2UoKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmFwcEJhclZhbHVlKSB7XG4gICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgcmV0dXJuIDxIb21lIC8+O1xuICAgICAgY2FzZSAnU0VUVElOR1MnOlxuICAgICAgICByZXR1cm4gPFNldHRpbmdzIC8+O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyBpcyBhbiBlcnJvciBwYWdlPC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlJY29uKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUpIHtcbiAgICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UoJ1NFVFRJTkdTJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2V0dGluZ3NJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnU0VUVElOR1MnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UoJ0hPTUUnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQ29udGFpbmVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBcnJvd0JhY2tJb3NJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyBpcyBhbiBlcnJvciBwYWdlPC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTbmFja2JhclByb3ZpZGVyXG4gICAgICAgIG1heFNuYWNrPXsyfVxuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5ub3RpZmljYXRpb24sXG4gICAgICAgICAgdmFyaWFudFN1Y2Nlc3M6IGNsYXNzZXMuc3VjY2VzcyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZUNvbnRhaW5lcn0+XG4gICAgICAgICAgPFBhcGVyIHNxdWFyZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRMb2dvVGFic30+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3RhYmJ5LnVzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmVuc2VtYmxlbG9nb30+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eycuLi8uLi9hc3NldHMvc3RhdGljL2ljb25zL3RhYmJ5XzIucG5nJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29GdWxsfSAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHt0aGlzLmRpc3BsYXlJY29uKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+e3RoaXMuZGlzcGF0Y2hQYWdlKCl9PC9kaXY+XG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lRGlzcGF0Y2hlcjtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgSG9tZURpc3BhdGNoZXIgZnJvbSAnLi9Ib21lRGlzcGF0Y2hlcic7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYi9UYWInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBob21lQ29udGFpbmVyOiB7XG4gICAgbWluV2lkdGg6IDQwMCxcbiAgfSxcbiAgdGFiOiB7XG4gICAgY29sb3I6ICcjMDBiOWFhJyxcbiAgfSxcbiAgbm90aWZpY2F0aW9uOiB7XG4gICAgbGVmdDogMTUwLFxuICB9LFxuICBncmlkTG9nb1RhYnM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgYWxsVGFiczoge1xuICAgIG1heFdpZHRoOiAnNzUlJyxcbiAgfSxcbiAgZW5zZW1ibGVsb2dvOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnbGVmdCcsXG4gIH0sXG4gIGxvZ29BdmF0YXI6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS4yNSksXG4gIH0sXG4gIGxvZ29GdWxsOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyLjI1KSxcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxMiksXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuMjUpLFxuICB9LFxuICBpY29uQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEuNSksXG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCM4MGUwYTcsICMwMGI5YWEpJyxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhvbWVEaXNwYXRjaGVyKTtcbiIsImltcG9ydCAqIGFzIGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5JztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcbmltcG9ydCBUdW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHVuZSc7XG5pbXBvcnQgSGVscE91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IZWxwT3V0bGluZSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcblxuaW1wb3J0IHsgd2l0aFNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCB7IFJFTEFYRUQsIEZPQ1VTRUQsIENVU1RPTUlaRUQsIElOSVRfRk9DVVNFRF9QUk9GSUxFIH0gZnJvbSAnLi4vLi4vY29uZmlnL3NldHRpbmdzUHJvZmlsZXMuanMnO1xuaW1wb3J0IHsgY2hlY2tTZXR0aW5ncywgT1BUSU1BTF9OVU1CRVJfVEFCUywgUE9MSUNZLCBJTkFDVElWRV9QT0xJQ1kgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpc0ludGVnZXIsIHJlbW92ZUl0ZW0gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcblxuY29uc3QgTGlnaHRUb29sdGlwID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XG4gIHRvb2x0aXA6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAxKScsXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgfSxcbn0pKShUb29sdGlwKTtcblxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvY3VzZWRNb2RlOiBmYWxzZSxcbiAgICAgIHJlbGF4ZWRNb2RlOiBmYWxzZSxcbiAgICAgIGN1c3RvbWl6ZWRCb29sOiBmYWxzZSxcbiAgICAgIHNldHRpbmdzOiBJTklUX0ZPQ1VTRURfUFJPRklMRSxcbiAgICAgIHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSxcbiAgICAgIGZvY3VzZWRXaW5kb3dJZDogdHJ1ZSxcbiAgICAgIG9wZW5Nb2RhbDogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLm9uQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXNTZXR0aW5ncyA9IGNoYW5nZXNbJ3NldHRpbmdzJ107XG4gICAgICBjb25zdCBjaGFuZ2VzUHJvZmlsZSA9IGNoYW5nZXNbJ2FjdGl2ZV9wcm9maWxlJ107XG4gICAgICBjb25zdCBjaGFuZ2VkSW5hY3RpdmVQb2xpY3kgPSBjaGFuZ2VzWydpbmFjdGl2ZV9wb2xpY3knXTtcbiAgICAgIGlmIChjaGFuZ2VzU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2V0dGluZ3M6IGNoYW5nZXNTZXR0aW5nc1snbmV3VmFsdWUnXSxcbiAgICAgICAgICByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlc1Byb2ZpbGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZm9jdXNlZE1vZGU6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBGT0NVU0VELFxuICAgICAgICAgIHJlbGF4ZWRNb2RlOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gUkVMQVhFRCxcbiAgICAgICAgICBjdXN0b21pemVkQm9vbDogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IENVU1RPTUlaRUQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZWRJbmFjdGl2ZVBvbGljeSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5hY3RpdmVQb2xpY3k6IGNoYW5nZWRJbmFjdGl2ZVBvbGljeVsnbmV3VmFsdWUnXSB9KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KFxuICAgICAgWydhY3RpdmVfcHJvZmlsZScsICdzZXR0aW5ncycsICdmb2N1c2VkX3dpbmRvd19pZCcsICdpbmFjdGl2ZV9wb2xpY3knXVxuICAgICkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBwcm9maWxlID0gcmVzdWx0LmFjdGl2ZV9wcm9maWxlIHx8IEZPQ1VTRUQ7XG4gICAgICBjb25zdCBmb2N1c2VkTW9kZSA9IHByb2ZpbGUgPT09IEZPQ1VTRUQ7XG4gICAgICBjb25zdCByZWxheGVkTW9kZSA9IHByb2ZpbGUgPT09IFJFTEFYRUQ7XG4gICAgICBjb25zdCBjdXN0b21pemVkQm9vbCA9IHByb2ZpbGUgPT09IENVU1RPTUlaRUQ7XG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHJlc3VsdC5zZXR0aW5ncyB8fCBJTklUX0ZPQ1VTRURfUFJPRklMRTtcbiAgICAgIGNvbnN0IGZvY3VzZWRXaW5kb3dJZCA9IHJlc3VsdC5mb2N1c2VkX3dpbmRvd19pZDtcbiAgICAgIGNvbnN0IGluYWN0aXZlUG9saWN5ID0gcmVzdWx0LmluYWN0aXZlX3BvbGljeTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkTW9kZSxcbiAgICAgICAgcmVsYXhlZE1vZGUsXG4gICAgICAgIGN1c3RvbWl6ZWRCb29sLFxuICAgICAgICBzZXR0aW5ncyxcbiAgICAgICAgZm9jdXNlZFdpbmRvd0lkLFxuICAgICAgICBpbmFjdGl2ZVBvbGljeSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVuZGVyU2F2ZUJvb2xlYW4pIHtcbiAgICAgIHRoaXMuZm9yY2VSZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCb29sQ2hhbmdlKGNoYW5nZVR5cGUpIHtcbiAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QUk9GSUxFJyxcbiAgICAgIHByb2ZpbGU6IGNoYW5nZVR5cGUsXG4gICAgfSk7XG4gICAgaWYgKGNoYW5nZVR5cGUgPT09IFJFTEFYRUQgfHwgY2hhbmdlVHlwZSA9PT0gRk9DVVNFRCkge1xuICAgICAgdGhpcy5ub3RpZnlVc2VyKHRydWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeS5pbmNsdWRlcyh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3dpdGNoKCk7XG4gICAgfVxuICB9XG5cbiAgZm9yY2VSZW5kZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlbmRlclNhdmVCb29sZWFuOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVNhdmVQYXJhbWV0ZXJzKCkge1xuICAgIC8vIFRPRE8gQWRkIGZ1bmN0aW9uIHRvIGNoZWNrIGZvciBhbGwgcG90ZW50aWFsIHZhbHVlc1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG4gICAgaWYgKGNoZWNrU2V0dGluZ3ModGhpcy5zdGF0ZS5zZXR0aW5ncykpIHtcbiAgICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIG1lc3NhZ2VUeXBlOiAnU0VUVElOR1NfUEFSQU1FVEVSUycsXG4gICAgICAgIHNldHRpbmdzOiB0aGlzLnN0YXRlLnNldHRpbmdzLFxuICAgICAgfSk7XG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5ub3RpZnlVc2VyKHN1Y2Nlc3MpO1xuICB9XG5cbiAgbm90aWZ5VXNlcihzdWNjZXNzKSB7XG4gICAgdGhpcy5wcm9wcy5lbnF1ZXVlU25hY2tiYXIoc3VjY2VzcyA/ICdOZXcgU2V0dGluZ3MgYXJlIHNhdmVkLicgOiAnU2V0dGluZ3MgY2Fubm90IGJlIHNhdmVkLicsIHtcbiAgICAgIHZhcmlhbnQ6IHN1Y2Nlc3MgPyAnc3VjY2VzcycgOiAnZXJyb3InLFxuICAgICAgYW5jaG9yT3JpZ2luOiB7XG4gICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgIH0sXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDc1MCxcbiAgICAgIGF1dG9IaWRlRHVyYXRpb246IDE1MDAsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzID0gKHBhdGgsIHBhcmFtZXRlcikgPT4gKGV2ZW50KSA9PiB7XG4gICAgbGV0IHNldHRpbmdzID0gdGhpcy5zdGF0ZS5zZXR0aW5ncztcbiAgICBjb25zdCBuZXh0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKGlzSW50ZWdlcihuZXh0VmFsdWUpIHx8IG5leHRWYWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldHRpbmdzW3BhdGhdW3BhcmFtZXRlcl0gPSBuZXh0VmFsdWU7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2V0dGluZ3M6IHNldHRpbmdzLCByZW5kZXJTYXZlQm9vbGVhbjogdHJ1ZSB9KTtcbiAgICB9XG4gIH07XG4gIGhhbmRsZVN3aXRjaCA9ICgpID0+IHtcbiAgICBsZXQgaW5hY3RpdmVQb2xpY3kgPSB0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5O1xuXG4gICAgaWYgKGluYWN0aXZlUG9saWN5LmluY2x1ZGVzKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKSkge1xuICAgICAgaW5hY3RpdmVQb2xpY3kgPSByZW1vdmVJdGVtKGluYWN0aXZlUG9saWN5LCB0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCk7XG4gICAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ1JFTU9WRV9JTkFDVElWRV9QT0xJQ1knLFxuICAgICAgICB3aW5kb3dJZDogdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5hY3RpdmVQb2xpY3kucHVzaCh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCk7XG4gICAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ0FERF9JTkFDVElWRV9QT0xJQ1knLFxuICAgICAgICB3aW5kb3dJZDogdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluYWN0aXZlUG9saWN5OiBpbmFjdGl2ZVBvbGljeSwgcmVuZGVyU2F2ZUJvb2xlYW46IHRydWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlT3BlbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1vZGFsOiB0cnVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuTW9kYWw6IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5wdXRzUGFyYW1ldGVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdPcHRpbWFsIHRhYnMgbnVtYmVyJyxcbiAgICAgICAgc291cmNlOiB0aGlzLnN0YXRlLnNldHRpbmdzLFxuICAgICAgICBwYXRoOiBQT0xJQ1ksXG4gICAgICAgIHBhcmFtZXRlcjogT1BUSU1BTF9OVU1CRVJfVEFCUyxcbiAgICAgICAgaW5wdXRQcm9wczogeyBtaW46ICcxJywgbWF4OiAnMTAwJywgc3RlcDogJzEnIH0sXG4gICAgICB9LFxuICAgIF07XG4gICAgY29uc3QgbGlzdEl0ZW1zUGFyYW1ldGVycyA9IGlucHV0c1BhcmFtZXRlcnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzKGl0ZW0ucGF0aCwgaXRlbS5wYXJhbWV0ZXIpfVxuICAgICAgICB2YWx1ZT17aXRlbS5zb3VyY2VbaXRlbS5wYXRoXVtpdGVtLnBhcmFtZXRlcl19XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICBvbktleVVwPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpIHRoaXMuaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKTtcbiAgICAgICAgfX1cbiAgICAgICAgaW5wdXRQcm9wcz17aXRlbS5pbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICApKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkJsb2NrfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkICYmIHRoaXMuc3RhdGUuaW5hY3RpdmVQb2xpY3lcbiAgICAgICAgICAgICAgICAgICAgPyAhdGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeS5pbmNsdWRlcyh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZClcbiAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN3aXRjaH1cbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN3aXRjaFdyYXBwZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3dpdGNoQ29udGFpbmVyfVxuICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5FbmFibGUgb24gdGhpcyB3aW5kb3c8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW50cm9kdWN0aW9uQmxvY2t9PlxuICAgICAgICAgICAgPFR1bmVJY29uIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFyYW1ldGVyc1RpdGxlfT5TZWxlY3QgeW91ciBwcm9maWxlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NXcmFwcGVyfT5cbiAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9eyd0YWJieSB0ZW5kcyB0byBrZWVwIDUgdGFicyd9IHBsYWNlbWVudD1cImxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RQcm9maWxlc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmZvY3VzZWRNb2RlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoRk9DVVNFRCl9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveFdyYXBwZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkZvY3VzPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEhlbHBPdXRsaW5lSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaGVscEljb259IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XG4gICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPXsndGFiYnkgdGVuZHMgdG8ga2VlcCAxMiB0YWJzJ30gcGxhY2VtZW50PVwibGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdFByb2ZpbGVzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVsYXhlZE1vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlQm9vbENoYW5nZShSRUxBWEVEKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrYm94V3JhcHBlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+UmVsYXg8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0Qm9vbGVhbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SGVscE91dGxpbmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWxwSWNvbn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9taXplV3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlQm9vbENoYW5nZShDVVNUT01JWkVEKX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tib3hXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5DdXN0b21pemU8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXR0aW5nc0Jsb2NrfT5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHJlcXVpcmVkIGZ1bGxXaWR0aD5cbiAgICAgICAgICAgICAgICB7bGlzdEl0ZW1zUGFyYW1ldGVyc31cbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaWRkZW4ga2V5PVwiaGlkZGVuLXRleHRmaWVsZFwiIGRpc2FibGVkIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRhcnlCdXR0b259XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTYXZlUGFyYW1ldGVycygpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU9wZW59IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXBzQnV0dG9ufT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbFRpcHN9PkhlbHA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIC8vZGlzYWJsZVBvcnRhbD17dHJ1ZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVuTW9kYWx9XG4gICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxuICAgICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cbiAgICAgICAgICBCYWNrZHJvcFByb3BzPXt7XG4gICAgICAgICAgICB0aW1lb3V0OiA3NTAsXG4gICAgICAgICAgICBpbnZpc2libGU6IHRydWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGYWRlIGluPXt0aGlzLnN0YXRlLm9wZW5Nb2RhbH0+XG4gICAgICAgICAgICA8Qm94IGJvcmRlclJhZGl1cz17Nn0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCbG9ja01vZGFsfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRFbnNlbWJsZX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+UHJvdGVjdCBhIHRhYjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxhc3RFbnNlbWJsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi4vLi4vYXNzZXRzL3N0YXRpYy9pY29ucy9yaWdodF9jbGljay5wbmcnfSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdENsaWNrV3JhcHBlcn0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+KzwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlBpbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZEVuc2VtYmxlfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5SZW9wZW4gbXVsdGlwbGUgdGFiczwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kRW5zZW1ibGV9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+Q3RybDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+KzwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycuLi8uLi9hc3NldHMvc3RhdGljL2ljb25zL2xlZnRfY2xpY2sucG5nJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnRDbGlja1dyYXBwZXJ9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5Ib3cgZG9lcyB0YWJieSB3b3JrPzwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbE5leHR9PlxuICAgICAgICAgICAgICAgIHRhYmJ5IHdpbGwgbm90IHJlbW92ZSB0YWJzIHJpZ2h0IGFmdGVyIHRoZWlyIGNyZWF0aW9uLnsnICd9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbE5leHR9PlxuICAgICAgICAgICAgICAgIHRhYmJ5IHRha2VzIHdlbGwtdGhvdWdodC1vdXQgZGVjaXNpb25zIGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJNb2RhbH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdGFiYnkudXMvZmFxXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbFRpcHN9PkZBUSBhdmFpbGFibGUgaGVyZTwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbFRpcHN9PnRhYmJ5IHticm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9ufTwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNuYWNrYmFyKFNldHRpbmdzKTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9TZXR0aW5ncyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgc2V0dGluZ3NXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgbWFyZ2luVG9wOiA1LFxuICAgIG1hcmdpbkxlZnQ6IDQ3LFxuICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgfSxcbiAgc2Vjb25kYXJ5QnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiAxOCxcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuXG4gICAgbWF4V2lkdGg6IDIwLFxuICB9LFxuXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIG1heFdpZHRoOiAxNTAsXG4gIH0sXG4gIGludHJvZHVjdGlvbkJsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIG1hcmdpbkxlZnQ6IDcsXG4gIH0sXG4gIHBhcmFtZXRlcnNUaXRsZToge1xuICAgIC8vZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNyxcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBtYXJnaW5MZWZ0OiAxNixcbiAgfSxcbiAgc2V0dGluZ3NCbG9jazoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1hcmdpbkxlZnQ6IDMyLFxuICAgIG1hcmdpblRvcDogNCxcbiAgfSxcbiAgZmlyc3RCb29sZWFuczoge1xuICAgIG1heFdpZHRoOiAnMzYlJyxcbiAgICBtaW5XaWR0aDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICBtYXhIZWlnaHQ6IDIwLFxuICAgIG1hcmdpblRvcDogNSxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIH0sXG4gIGZpcnN0UHJvZmlsZXNDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNpbmcoMTApLFxuICB9LFxuXG4gIHN0eWxlTGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gIH0sXG4gIGNoZWNrYm94V3JhcHBlcjoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgfSxcbiAgc3dpdGNoQ29udGFpbmVyOiB7XG4gICAgbWF4SGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgfSxcbiAgc3dpdGNoV3JhcHBlcjoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWF4V2lkdGg6ICc4NSUnLFxuICB9LFxuICBjdXN0b21pemVXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIGFsaWduSXRlbXM6ICdzdGFydCcsXG4gIH0sXG4gIGhlbHBJY29uOiB7XG4gICAgY29sb3I6ICcjZTU1YzAwJyxcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDAuMjUpLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTUwLCAxNTAsIDE1MCwgMC40KScsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcbiAgfSxcbiAgbWFpbkJsb2NrOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxuICBwYXBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIC8vYm9yZGVyOiAnMC41cHggc29saWQgIzVBNUE1QScsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxuXG4gICAgb3BhY2l0eTogJzEgIWltcG9ydGFudCcsXG4gIH0sXG4gIGJveEN0cmw6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzVBNUE1QScsXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDIuNSksXG4gICAgLy9wYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxuICAgIC8vbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcbiAgICAvL21hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxuXG4gICAgb3BhY2l0eTogJzEgIWltcG9ydGFudCcsXG4gIH0sXG4gIGxlZnRDbGlja1dyYXBwZXI6IHtcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG4gIHNlY29uZEVuc2VtYmxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWluV2lkdGg6ICczMCUnLFxuICB9LFxuICBsYXN0RW5zZW1ibGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtaW5XaWR0aDogJzI3LjUlJyxcbiAgfSxcbiAgZmlyc3RCbG9ja01vZGFsOiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICB0aXBzQnV0dG9uOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygwKSxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcGFkZGluZ0xlZnQ6IDAsXG4gICAgcGFkZGluZ1JpZ2h0OiAwLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzdHlsZUxhYmVsVGlwczoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBjb2xvcjogJ3JnYmEoMTUwLCAxNTAsIDE1MCwgMSknLFxuICB9LFxuICBzdHlsZUxhYmVsTmV4dDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygwLjUpLFxuICB9LFxuICBmb290ZXJNb2RhbDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLjUpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIC8vIG1pbldpZHRoOiAnMTAwJScsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShTZXR0aW5ncyk7XG4iLCJleHBvcnQgY29uc3QgT1BUSU1BTF9OVU1CRVJfVEFCUyA9ICd0YXJnZXRfdGFicyc7XG5leHBvcnQgY29uc3QgUE9MSUNZID0gJ3BvbGljeSc7XG5leHBvcnQgY29uc3QgSU5BQ1RJVkVfUE9MSUNZID0gJ2luYWN0aXZlX3BvbGljeSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1NldHRpbmdzKHNldHRpbmdzKSB7XG4gIGlmIChzZXR0aW5nc1tQT0xJQ1ldW09QVElNQUxfTlVNQkVSX1RBQlNdICYmIHNldHRpbmdzW1BPTElDWV1bT1BUSU1BTF9OVU1CRVJfVEFCU10gPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJdGVtKGFyciwgdmFsdWUpIHtcbiAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZih2YWx1ZSk7XG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cbiIsImNvbnN0IFNDT1JFUiA9ICd2MSc7IC8vIG9ubHkgZGVmYXVsdCBpbXBsZW1lbnRlZFxuY29uc3QgTUFYSU1VTV9TQ09SRSA9IDEwOyAvLyBtYXggc2NvcmUgZm9yIHNjb3JlclxuY29uc3QgTUFYSU1VTV9ISVNUT1JZX1NJWkUgPSAxMDAwOyAvLyBtYXgga2lsbGVkIHRhYiBoaXN0b3J5IGluIG1lbW9yeVxuY29uc3QgU0VTU0lPTlNfVElNRU9VVF9NUyA9IDIwMDsgLy8gd2hlbiBhIHRhYiBpcyBraWxsZWQgd2UgbmVlZCBhIHRpbWVvdXQgdG8gcmV0cmlldmUgdGhlIHNlc3Npb25JZFxuY29uc3QgU0VTU0lPTlNfUkVUUklFUyA9IDU7IC8vIGhvdyBtYW55IHRyaWVzIHRvIHJldHJpZXZlIHRoZSBzZXNzaW9uIElEIG9mIGEga2lsbGVkIHRhYlxuY29uc3QgU0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TID0gMTAwMCAqIDU7IC8vIHRpbWUgaXMgZnV6enkgbWF0Y2hlZCB0byByZXRpcmV2ZSB0aGUgY29ycmVjdCBzZXNzaW9uSUQsIHNob3VsZCBiZSBoaWdoZXIgdGhhbiBTRVNTSU9OU19USU1FT1VUX01TXG5jb25zdCBNSU5fQUNUSVZFX0RFQk9VTkNFID0gMTAwMCAqIDI7IC8vIG1pbmltdW0gYWN0aXZlIHJlYWRpbmcgb24gYSB0YWIgdG8gYmUgY291bnRlZCBhcyB2YWxpZCAndXNlZnVsJyB0aW1lXG5jb25zdCBNQVhfQUNUSVZFX0RFQk9VTkNFID0gMTAwMCAqIDYwICogNTsgLy8gbWF4aW11bSB0aW1lIHdpdGhvdXQgYW55IHVzZXIgaW5wdXQgYmVmb3JlIGl0IGlzIGNvbnNpZGVyZWQgaWRsZWQsIG11c3QgYmUgaGlnaGVyIHRoYW4gMTVzZWNcblxuZXhwb3J0IHtcbiAgU0NPUkVSLFxuICBNQVhJTVVNX1NDT1JFLFxuICBNQVhJTVVNX0hJU1RPUllfU0laRSxcbiAgU0VTU0lPTlNfVElNRU9VVF9NUyxcbiAgU0VTU0lPTlNfUkVUUklFUyxcbiAgU0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TLFxuICBNSU5fQUNUSVZFX0RFQk9VTkNFLFxuICBNQVhfQUNUSVZFX0RFQk9VTkNFLFxufTtcbiIsImNvbnN0IFJFTEFYRUQgPSAncmVsYXhlZCc7XG5jb25zdCBGT0NVU0VEID0gJ2ZvY3VzZWQnO1xuY29uc3QgQ1VTVE9NSVpFRCA9ICdjdXN0b21pemVkJztcbnZhciBJTklUX1JFTEFYRURfUFJPRklMRSA9IHt9O1xudmFyIElOSVRfRk9DVVNFRF9QUk9GSUxFID0ge307XG5cbmlmIChFTlYgPT09ICdkZWJ1ZycpIHtcbiAgSU5JVF9SRUxBWEVEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEgKiAxMDAwLCAvLyBtaW5pbXVtIHRpbWUgYmV0d2VlbiAyIGZ1bGwgc3RhdHMgdXBkYXRlIGZvciBhbGwgdGFic1xuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDUgKiAxMDAwLCAvLyBtaW5pbXVtIHRpbWUgYmV0d2VlbiAyIGZ1bGwgdGFiIGdhcmJhZ2UgY29sbGVjdGlvblxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICB0YXJnZXRfdGFiczogMTIsIC8vIHRhYmJ5IHdpbGwgc3RvcCBjbG9zaW5nIHRhYnMgd2hlbiB3ZSBoYXZlIGxlc3MgdGhhbiB0YXJnZXRfdGFicyBvcGVuXG4gICAgICBkZWNheTogMC44LCAvLyB3aGVuIHRoZSBudW1iZXIgb2YgdGFiIGluY3JlYXNlcywgdGFiYnkgd2lsbCBkZWxldGUgbW9yZSB0YWJzXG4gICAgICBtaW5fdGltZTogMyAqIDEwMDAsIC8vIFRhYmJ5IHdpbGwga2lsbCBhYm91dCAxIHRhYiBwZXIgbWluX3RpbWUgKGRlcGVuZGluZyBvbiBhY3RpdmF0aW9uIHJ1bGVzKVxuXG4gICAgICAvLyBJR05PUkVEIHRhYnNcbiAgICAgIGFjdGl2ZTogZmFsc2UsIC8vIHRoZXNlIHN0YXR1cyBhcmUgYWJzb2x1dGVseSBwcm90ZWN0ZWQgdGFiczogdGhlc2UgYXJlIGlnbm9yZWQgYW5kIGRvIG5vdCBjb3VudCBhcyB0YWJzLlxuICAgICAgcGlubmVkOiB0cnVlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIC8vIFBST1RFQ1RFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHRhYnMgd2lsbCBiZSBnaXZlbiBhYnNvbHV0ZSBtYXhpbXVtIHNjb3JlICsgZXh0ZW5kZWQgcHJvdGVjdGlvblxuICAgICAgcGlubmVkOiB0cnVlLCAvLyB3aGVuIHRoZSBzdGF0dXMgaXMgbG9zdC5cbiAgICAgIGF1ZGlibGU6IHRydWUsXG5cbiAgICAgIG1pbl9hY3RpdmU6IDUgKiAxMDAwLCAvLyBtaW5pbXVtIHRpbWUgYSB0YWIgaGFzIHRvIGV4aXN0IGJlZm9yZSBiZWluZyBzY29yZWRcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiAxMDAwLCAvLyBBIHJlc3RvcmVkIHRhYiBpcyBwcm90ZWN0ZWQgZm9yIHRoaXMgbG9uZ1xuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsIC8vIEluIGN1cnJlbnQgc2NvcmVyLCB0aGUgY2FjaGUgc2NvcmUgaXMgYWRkZWQgdG8gdGhlIGN1cnJlbnQgc2NvcmUgd2l0aCBhIGRlY3JlYXNpbmcgZmFjdG9yXG4gICAgfSxcbiAgfTtcblxuICBJTklUX0ZPQ1VTRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMSAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogNSAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIHRhcmdldF90YWJzOiA1LFxuICAgICAgZGVjYXk6IDAuOCxcbiAgICAgIG1pbl90aW1lOiAzICogMTAwMCxcblxuICAgICAgLy8gSUdOT1JFRCB0YWJzXG4gICAgICBhY3RpdmU6IGZhbHNlLCAvLyB0aGVzZSBzdGF0dXMgYXJlIGFic29sdXRlbHkgcHJvdGVjdGVkIHRhYnM6IHRoZXNlIGFyZSBpZ25vcmVkIGFuZCBkbyBub3QgY291bnQgYXMgdGFicy5cbiAgICAgIHBpbm5lZDogdHJ1ZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICAvLyBQUk9URUNURUQgdGFic1xuICAgICAgYWN0aXZlOiB0cnVlLCAvLyB0aGVzZSB0YWJzIHdpbGwgYmUgZ2l2ZW4gYWJzb2x1dGUgbWF4aW11bSBzY29yZSArIGV4dGVuZGVkIHByb3RlY3Rpb25cbiAgICAgIHBpbm5lZDogdHJ1ZSwgLy8gd2hlbiB0aGUgc3RhdHVzIGlzIGxvc3QuXG4gICAgICBhdWRpYmxlOiB0cnVlLFxuXG4gICAgICBtaW5fYWN0aXZlOiA1ICogMTAwMCxcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsXG4gICAgfSxcbiAgfTtcbn0gZWxzZSB7XG4gIElOSVRfUkVMQVhFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxMCAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogMTAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIHRhcmdldF90YWJzOiAxMixcbiAgICAgIGRlY2F5OiAwLjksXG4gICAgICBtaW5fdGltZTogNDUgKiAxMDAwLFxuXG4gICAgICAvLyBJR05PUkVEIHRhYnNcbiAgICAgIGFjdGl2ZTogZmFsc2UsIC8vIHRoZXNlIHN0YXR1cyBhcmUgYWJzb2x1dGVseSBwcm90ZWN0ZWQgdGFiczogdGhlc2UgYXJlIGlnbm9yZWQgYW5kIGRvIG5vdCBjb3VudCBhcyB0YWJzLlxuICAgICAgcGlubmVkOiB0cnVlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIC8vIFBST1RFQ1RFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHRhYnMgd2lsbCBiZSBnaXZlbiBhYnNvbHV0ZSBtYXhpbXVtIHNjb3JlICsgZXh0ZW5kZWQgcHJvdGVjdGlvblxuICAgICAgcGlubmVkOiB0cnVlLCAvLyB3aGVuIHRoZSBzdGF0dXMgaXMgbG9zdC5cbiAgICAgIGF1ZGlibGU6IHRydWUsXG5cbiAgICAgIG1pbl9hY3RpdmU6IDUgKiA2MCAqIDEwMDAsXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogNjAgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsXG4gICAgfSxcbiAgfTtcblxuICBJTklUX0ZPQ1VTRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMTAgKiAxMDAwLFxuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDEwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICB0YXJnZXRfdGFiczogNSxcbiAgICAgIGRlY2F5OiAwLjksXG4gICAgICBtaW5fdGltZTogNDUgKiAxMDAwLFxuXG4gICAgICAvLyBJR05PUkVEIHRhYnNcbiAgICAgIGFjdGl2ZTogZmFsc2UsIC8vIHRoZXNlIHN0YXR1cyBhcmUgYWJzb2x1dGVseSBwcm90ZWN0ZWQgdGFiczogdGhlc2UgYXJlIGlnbm9yZWQgYW5kIGRvIG5vdCBjb3VudCBhcyB0YWJzLlxuICAgICAgcGlubmVkOiB0cnVlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIC8vIFBST1RFQ1RFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHRhYnMgd2lsbCBiZSBnaXZlbiBhYnNvbHV0ZSBtYXhpbXVtIHNjb3JlICsgZXh0ZW5kZWQgcHJvdGVjdGlvblxuICAgICAgcGlubmVkOiB0cnVlLCAvLyB3aGVuIHRoZSBzdGF0dXMgaXMgbG9zdC5cbiAgICAgIGF1ZGlibGU6IHRydWUsXG5cbiAgICAgIG1pbl9hY3RpdmU6IDUgKiA2MCAqIDEwMDAsXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogNjAgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsXG4gICAgfSxcbiAgfTtcbn1cblxuT2JqZWN0LmZyZWV6ZShJTklUX0ZPQ1VTRURfUFJPRklMRSk7XG5PYmplY3QuZnJlZXplKElOSVRfUkVMQVhFRF9QUk9GSUxFKTtcblxuZXhwb3J0IHsgUkVMQVhFRCwgRk9DVVNFRCwgQ1VTVE9NSVpFRCwgSU5JVF9GT0NVU0VEX1BST0ZJTEUsIElOSVRfUkVMQVhFRF9QUk9GSUxFIH07XG4iLCJpbXBvcnQgKiBhcyBwc2wgZnJvbSAncHNsJztcbmltcG9ydCAqIGFzIGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCB7IE1BWF9BQ1RJVkVfREVCT1VOQ0UgfSBmcm9tICcuLi9jb25maWcvZW52LmpzJztcblxuY29uc3QgbG9nZ2VyID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgaWYgKEVOViA9PT0gJ2RlYnVnJyB8fCBFTlYgPT09ICdkZXYnKSB7XG4gICAgbGV0IGRlZmF1bHRfZm9ybWF0ID0gWydmb250LXdlaWdodDppbml0aWFsOyBjb2xvcjpibGFjazsnXTtcbiAgICBsZXQgcHJlID0gJyVjJyArIG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSArICclYyc7XG4gICAgbGV0IG9wdGlvbnMgPSBbJ2ZvbnQtd2VpZ2h0OmxpZ2h0ZXI7IGNvbG9yOkxpZ2h0U2xhdGVHcmV5OyddO1xuICAgIG9wdGlvbnMucHVzaChkZWZhdWx0X2Zvcm1hdCk7XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJlICs9ICcgfCAlYycgKyBhcmdzWzBdLmNvbnN0cnVjdG9yLm5hbWUgKyAnJWMgfCAnO1xuICAgICAgcHJlICs9IGFyZ3NbMV07XG4gICAgICBvcHRpb25zLnB1c2goJ2NvbG9yOiMxZGE4N2M7IGZvbnQtd2VpZ2h0OmJvbGRlcicpO1xuICAgICAgb3B0aW9ucy5wdXNoKGRlZmF1bHRfZm9ybWF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlICs9ICcgfCAnICsgYXJnc1swXTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJlLCAuLi5vcHRpb25zKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gY29weShvYmopIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbmZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmZ1bmN0aW9uIGdldERvbWFpbihzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHNsLnBhcnNlKG5ldyBVUkwoc3RyKS5ob3N0bmFtZSkuZG9tYWluO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuICByZXR1cm4gL15cXGQrJC8udGVzdCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHNldEFsbFJlYWRCYWRnZSgpIHtcbiAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6ICcnIH0pOyAvLyA8LS0gc2V0IHRleHQgdG8gJycgdG8gcmVtb3ZlIHRoZSBiYWRnZVxufVxuXG5mdW5jdGlvbiBzZXRVbnJlYWRCYWRnZSgpIHtcbiAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEJhZGdlQmFja2dyb3VuZENvbG9yKHsgY29sb3I6IFsyMjksIDkyLCAwLCAxMjhdIH0pO1xuICBicm93c2VyLmJyb3dzZXJBY3Rpb24uZ2V0QmFkZ2VUZXh0KHt9KS50aGVuKGZ1bmN0aW9uIChiYWRnZVRleHQpIHtcbiAgICBsZXQgY291bnRlciA9IDE7XG4gICAgaWYgKGlzSW50ZWdlcihiYWRnZVRleHQpKSB7XG4gICAgICBjb3VudGVyID0gcGFyc2VJbnQoYmFkZ2VUZXh0KSArIDE7XG4gICAgfVxuICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiBgJHtjb3VudGVyfWAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc1VzZXJBY3RpdmUoKSB7XG4gIC8vIE5vdCBjb21wYXRpYmxlIHdpdGggU2FmYXJpXG4gIHJldHVybiBicm93c2VyLmlkbGUucXVlcnlTdGF0ZShNYXRoLnJvdW5kKE1BWF9BQ1RJVkVfREVCT1VOQ0UgLyAxMDAwKSkudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgaWYgKHN0YXR1cyA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ2dlcihcIkNvdWxkbid0IGNoZWNrIHVzZXIgYWN0aXZpdHkuXCIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZVJlc2V0KCkge1xuICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChudWxsKS50aGVuKChkKSA9PiB7XG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5yZW1vdmUoT2JqZWN0LmtleXMoZCkpO1xuICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGxvZ2dlcignTWVtb3J5IGZsdXNoZWQuJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0Rm9jdXNlZFdpbmRvdygpIHtcbiAgLy8gd2luZG93VHlwZSBpcyBkZXByZWNhdGVkIGluIEZGLCBpdCBkb2Vzbid0IHNlZW0gY3JpdGljYWwgYW55d2F5c1xuICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKHsgcG9wdWxhdGU6IGZhbHNlIH0pLnRoZW4oKGQpID0+IHtyZXR1cm4gZC5pZH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtKGFyciwgdmFsdWUpIHtcbiAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZih2YWx1ZSk7XG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuY29uc3QgcmV0cnlQcm9taXNlID0gKGZ1bmMsIGRlbGF5LCB0aW1lcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICByZXR1cm4gZnVuYygpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgaWYgKHJlYXNvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChyZWFzb24pO1xuICAgICAgfVxuICAgICAgaWYgKHRpbWVzID4gMCkge1xuICAgICAgICByZXR1cm4gdGltZW91dChkZWxheSlcbiAgICAgICAgICAudGhlbihyZXRyeVByb21pc2UuYmluZChudWxsLCBmdW5jLCBkZWxheSwgdGltZXMgLSAxKSlcbiAgICAgICAgICAudGhlbihyZXNvbHZlKVxuICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlamVjdChyZWFzb24pO1xuICAgIH0pO1xufSk7XG5cbmxvZ2dlcignU3RhcnRpbmcgaW4gJyArIEVOViArICcgZW52LicpO1xuZXhwb3J0IHtcbiAgbG9nZ2VyLFxuICBjb3B5LFxuICB0aW1lb3V0LFxuICByZXRyeVByb21pc2UsXG4gIGdldERvbWFpbixcbiAgc2V0QWxsUmVhZEJhZGdlLFxuICBzZXRVbnJlYWRCYWRnZSxcbiAgaXNJbnRlZ2VyLFxuICBpc1VzZXJBY3RpdmUsXG4gIHN0b3JhZ2VSZXNldCxcbiAgZ2V0TGFzdEZvY3VzZWRXaW5kb3csXG4gIHJlbW92ZUl0ZW0sXG59O1xuaWYgKEVOViA9PT0gJ2RlYnVnJykge1xuICB3aW5kb3cudXRpbHMgPSB7XG4gICAgbG9nZ2VyLFxuICAgIGNvcHksXG4gICAgdGltZW91dCxcbiAgICByZXRyeVByb21pc2UsXG4gICAgZ2V0RG9tYWluLFxuICAgIHNldEFsbFJlYWRCYWRnZSxcbiAgICBzZXRVbnJlYWRCYWRnZSxcbiAgICBpc0ludGVnZXIsXG4gICAgaXNVc2VyQWN0aXZlLFxuICAgIHN0b3JhZ2VSZXNldCxcbiAgICBnZXRMYXN0Rm9jdXNlZFdpbmRvdyxcbiAgICByZW1vdmVJdGVtLFxuICB9O1xufVxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIWJvb3RzdHJhcC1jc3Mtb25seS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FyZC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWI5ZTc0O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmJvbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG46Zm9jdXMge291dGxpbmU6MCAhaW1wb3J0YW50O31cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwb3B1cFwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9hcHAvcG9wdXAuanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BzbF9pbmRleF9qcy1ub2RlX21vZHVsZXNfd2ViZXh0ZW5zaW9uLXBvbHlmaWxsX2Rpc3RfYnJvd3Nlci1wb2x5ZmlsbF9qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbWF0ZXJpYWwtdWlfY29yZV9UeXBvZ3JhcGh5X1R5cG9ncmFwaHlfanMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfLWNmYmUzZFwiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9ICgpID0+IHtcblxufTtcbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdH1cblx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG5mdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cdHZhciBydW50aW1lID0gZGF0YVszXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufTtcblxudmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gfHwgW107XG52YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuanNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG52YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=