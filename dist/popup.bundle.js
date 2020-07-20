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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/env.js */ "./src/config/env.js");
/* harmony import */ var _config_websites_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/websites.js */ "./src/config/websites.js");
/* harmony import */ var _services_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utils.js */ "./src/services/utils.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/Skeleton.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/ErrorOutline */ "./node_modules/@material-ui/icons/ErrorOutline.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-ui-search-bar */ "./node_modules/material-ui-search-bar/lib/index.js");



















const RESTORE = 'RESTORE';
const SHELL_RESTORE = 'SHELL_RESTORE';
const CLOSED_HISTORY = 'closed_history';
const NUMBER_HOURS_DAY = 24;
const TIME_PERIOD_24H = 3600000 * NUMBER_HOURS_DAY; // in microsecond

const TIME_PERIOD_72H = 3600000 * NUMBER_HOURS_DAY * 3; // in microsecond

const FULL_SKELETON = false;

class Home extends react__WEBPACK_IMPORTED_MODULE_6__.PureComponent {
  constructor(props) {
    super(props);
    (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_4__.setAllReadBadge)();

    if (props.skeleton) {
      this.state = {
        closed_history: [],
        loading: true
      };
      (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_4__.timeout)(_config_env_js__WEBPACK_IMPORTED_MODULE_2__.FRONTEND_SKELETON_DISPLAY).then(() => {
        (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_4__.logger)(this, 'Displaying list');
        this.setState({
          loading: false
        });
      });
    } else {
      this.state = {
        closed_history: [],
        loading: false
      };
    }

    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.local.get([CLOSED_HISTORY]).then(result => {
      const closed_history = result.closed_history || [];
      this.setState({
        closed_history: this.enrichHistory(closed_history)
      });
    });

    this.onChangedCallback = function (changes) {
      const changesClosedHistory = changes[CLOSED_HISTORY];

      if (changesClosedHistory) {
        this.setState({
          closed_history: this.enrichHistory(changesClosedHistory['newValue']),
          searchValue: ''
        });
      }
    }.bind(this);
  }

  componentDidMount() {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_4__.setAllReadBadge)();
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.onChanged.removeListener(this.onChangedCallback);
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
    (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_4__.logger)(this, messageType + ' for tab ' + restoredTab.uuid);
    const closed_history = this.state.closed_history.filter(item => item.uuid !== restoredTab.uuid);
    this.setState({
      closed_history: closed_history
    }); // no need to enrich here

    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.sendMessage({
      messageType: messageType,
      uuid: restoredTab.uuid
    });
  }

  searchOnChange(value) {
    this.setState({
      searchValue: value
    });
  }

  searchOnRequestSearch(event) {}

  searchOnCancel() {
    this.setState({
      searchValue: ''
    });
  }

  filterList(selectedList, endPeriod) {
    const now = Date.now();
    return selectedList.filter(item => {
      return now - item.deletion_time < endPeriod;
    });
  }

  enrichHistory(history) {
    // keep elements only in time-frame
    let selectedList = history ? this.filterList(history, TIME_PERIOD_72H) : [];
    const rx = new RegExp(_config_websites_js__WEBPACK_IMPORTED_MODULE_3__.NO_RESTORE_URL.join('|')); // list enrichment

    selectedList = selectedList.map(website => {
      if (typeof website !== 'undefined') {
        const deletionTime = new Date(website.deletion_time);
        website.hours_minutes_format = dayjs__WEBPACK_IMPORTED_MODULE_5__(deletionTime).format('HH:mm');
        website.date = dayjs__WEBPACK_IMPORTED_MODULE_5__(deletionTime).startOf('date');
        website.no_restore = rx.exec(website.url) ? true : false;
      }

      return website;
    });
    selectedList = selectedList.reverse();
    return selectedList;
  }

  renderList() {
    const {
      classes
    } = this.props;
    let selectedList = this.state.closed_history.slice(0); // keeping only websites that match search criteria

    if (typeof this.state.searchValue !== 'undefined' && this.state.searchValue.length > 0) {
      const searchPattern = new RegExp(this.state.searchValue.split(' ').map(term => `(?=.*${term})`).join(''), 'i');
      selectedList = selectedList.filter(option => option.title.match(searchPattern) || option.url.match(searchPattern));
    }

    let current = dayjs__WEBPACK_IMPORTED_MODULE_5__().startOf('date');
    let last = 0;

    for (let i = 0; i < selectedList.length; i++) {
      let next = selectedList[i].date;
      let delta = Math.max(0, Math.ceil(current.diff(next, 'days', true)));

      if (delta > last) {
        if (delta === 1) {
          selectedList.splice(i, 0, {
            text: 'Yesterday - ',
            day: next.format('MMM DD')
          });
        } else if (delta === 2) {
          selectedList.splice(i, 0, {
            text: 'Previous day - ',
            day: next.format('MMM DD')
          });
        } else {
          selectedList.splice(i, 0, {
            text: '',
            day: next.format('MMM DD')
          });
        }

        last = delta;
      }
    }

    const listItem = myFilteredList => ({
      index,
      style
    }) => {
      const website = myFilteredList[index];

      if (typeof website.day !== 'undefined') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
          key: index,
          style: style
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__.default, {
          ContainerComponent: "div"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__.default, {
          primary: `${website.text} ${website.day}`,
          classes: {
            primary: classes.primaryTitleContainer
          },
          className: classes.listTitleText
        })));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        key: index,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__.default, {
        ContainerComponent: "div"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: classes.gridAvatarWithTime
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
        className: classes.timeDisplay
      }, this.state.loading && FULL_SKELETON ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_12__.default, {
        width: "3em"
      }) : `${website.hours_minutes_format}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_13__.default, null, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_12__.default, {
        variant: "circle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_14__.default, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_14__.default, {
        variant: "square",
        alt: website.title ? website.title : website.url,
        src: website.favIconUrl ? website.favIconUrl : 'error',
        className: classes.avatarContainer
      }))), this.state.loading && FULL_SKELETON ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_12__.default, {
        width: "15em"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_12__.default, {
        width: "10em"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__.default, {
        primary: website.url,
        secondary: website.title,
        classes: {
          primary: classes.primaryTextContainer,
          secondary: classes.secondaryTextContainer
        },
        className: classes.itemText
      }), this.state.loading && FULL_SKELETON ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_15__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: classes.buttonContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
        size: "small",
        onClick: this.removeItem.bind(this, myFilteredList, index),
        variant: "outlined",
        color: "secondary",
        disabled: website.no_restore,
        className: classes.button
      }, 'Restore')))));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
      className: classes.listWebsites
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(material_ui_search_bar__WEBPACK_IMPORTED_MODULE_8__.default, {
      placeholder: "Search on last 72h",
      onChange: this.searchOnChange.bind(this),
      onRequestSearch: this.searchOnRequestSearch.bind(this),
      onCancelSearch: this.searchOnCancel.bind(this),
      value: this.state.searchValue,
      className: classes.searchBar
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
      className: classes.list
    }, selectedList.length === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(react_window__WEBPACK_IMPORTED_MODULE_7__.FixedSizeList, {
      height: Math.min(80 * selectedList.length, 300),
      itemCount: selectedList.length,
      itemSize: 80
    }, listItem(selectedList))));
  }

  render() {
    const {
      classes
    } = this.props;
    const numberClosedTabsLastHour = this.state.closed_history ? this.filterList(this.state.closed_history, TIME_PERIOD_24H).length : 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
      variant: "h3",
      className: classes.title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.boldNumber
    }, numberClosedTabsLastHour ? numberClosedTabsLastHour : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
      className: classes.textOnRight
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.topText
    }, ' ', "tab", numberClosedTabsLastHour <= 1 ? '' : 's', " closed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.middleText
    }, " in the last ", `${NUMBER_HOURS_DAY} hours`, " "))), this.renderList.bind(this)(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
      className: classes.footerContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_17__.default, {
      color: "secondary",
      className: classes.iconContainer
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_18__.default, {
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
        appBarValue: newValue,
        firstLoad: false
      });
      (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_4__.logger)(this, 'Switch to ' + newValue);
    });

    this.state = {
      appBarValue: 'HOME',
      firstLoad: true
    };
  }

  componentDidMount() {
    (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_4__.logger)(this, 'Popup opened');
  }

  dispatchPage() {
    switch (this.state.appBarValue) {
      case 'HOME':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_3__.default, {
          skeleton: this.state.firstLoad
        });

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
      square: false,
      variant: "outlined",
      className: classes.paperShadow
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
  paperShadow: {
    boxShadow: '0px 0px 1px -1px rgba(0,0,0,0.3), 0px 0px 1px 0px rgba(0,0,0,0.3), 0px 0px 3px 0px rgba(0,0,0,0.3)'
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
/* harmony import */ var _services_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utils */ "./src/services/utils.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/settingsProfiles.js */ "./src/config/settingsProfiles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/components/utils.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
























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
    this.state = {
      focusedMode: false,
      relaxedMode: false,
      customizedBool: false,
      settings: _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.INIT_FOCUSED_PROFILE,
      focusedWindowId: true,
      openModal: false
    };
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.local.get(['active_profile', 'settings', 'focused_window_id', 'inactive_policy']).then(result => {
      const profile = result.active_profile || _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.FOCUSED;
      const focusedMode = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.FOCUSED;
      const relaxedMode = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.RELAXED;
      const customizedBool = profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.CUSTOMIZED;
      const settings = result.settings || _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.INIT_FOCUSED_PROFILE;
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

    this.onChangedCallback = function (changes) {
      const changesSettings = changes['settings'];
      const changesProfile = changes['active_profile'];
      const changedInactivePolicy = changes['inactive_policy'];

      if (changesSettings) {
        this.setState({
          settings: changesSettings['newValue']
        });
      }

      if (changesProfile) {
        this.setState({
          focusedMode: changesProfile['newValue'] === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.FOCUSED,
          relaxedMode: changesProfile['newValue'] === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.RELAXED,
          customizedBool: changesProfile['newValue'] === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.CUSTOMIZED
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
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.onChanged.removeListener(this.onChangedCallback);
  }

  handleBoolChange(changeType) {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.sendMessage({
      messageType: 'SETTINGS_PROFILE',
      profile: changeType
    });

    if (changeType === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.RELAXED || changeType === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.FOCUSED) {
      this.notifyUser(true);
    }

    if (this.state.inactivePolicy.includes(this.state.focusedWindowId)) {
      this.handleSwitch();
    }
  }

  handleSaveParameters() {
    // TODO Add function to check for all potential values
    let success = false;

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_5__.checkSettings)(this.state.settings)) {
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

  handleChangeParameters(path, parameter) {
    return event => {
      let settings = (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_2__.copy)(this.state.settings);
      const nextValue = event.target.value;

      if ((0,_services_utils_js__WEBPACK_IMPORTED_MODULE_2__.isInteger)(nextValue) || nextValue.length === 0) {
        settings[path][parameter] = nextValue; // do not parseInt or textField goes crazy...

        this.setState({
          settings: settings
        });
      }
    };
  }

  handleSwitch() {
    let inactivePolicy = this.state.inactivePolicy;

    if (inactivePolicy.includes(this.state.focusedWindowId)) {
      inactivePolicy = (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_2__.removeItem)(inactivePolicy, this.state.focusedWindowId);
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
      inactivePolicy: inactivePolicy
    });
  }

  handleOpen() {
    this.setState({
      openModal: true
    });
  }

  handleClose() {
    this.setState({
      openModal: false
    });
  }

  render() {
    const {
      classes
    } = this.props;
    const inputsParameters = [{
      label: 'Optimal tabs number',
      source: this.state.settings,
      path: _utils__WEBPACK_IMPORTED_MODULE_5__.POLICY,
      parameter: _utils__WEBPACK_IMPORTED_MODULE_5__.OPTIMAL_NUMBER_TABS,
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
      onChange: this.handleChangeParameters(item.path, item.parameter).bind(this),
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
        onChange: this.handleSwitch.bind(this),
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
        onChange: this.handleBoolChange.bind(this, _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.FOCUSED),
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
        onChange: this.handleBoolChange.bind(this, _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.RELAXED),
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
        onChange: this.handleBoolChange.bind(this, _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.CUSTOMIZED),
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
      onClick: this.handleSaveParameters.bind(this)
    }, "Save"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__.default, {
      variant: "text",
      onClick: this.handleOpen.bind(this),
      className: classes.tipsButton
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.styleLabelTips
    }, "Help"), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_18__.default //disablePortal={true}
    , {
      className: classes.modal,
      open: this.state.openModal,
      onClose: this.handleClose.bind(this),
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notistack__WEBPACK_IMPORTED_MODULE_3__.withSnackbar)(Settings));

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
    marginTop: 5 // pointerEvents: 'none',

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
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OPTIMAL_NUMBER_TABS": () => /* binding */ OPTIMAL_NUMBER_TABS,
/* harmony export */   "POLICY": () => /* binding */ POLICY,
/* harmony export */   "checkSettings": () => /* binding */ checkSettings
/* harmony export */ });
/* unused harmony export INACTIVE_POLICY */
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

/***/ }),

/***/ "./src/config/env.js":
/*!***************************!*\
  !*** ./src/config/env.js ***!
  \***************************/
/*! namespace exports */
/*! export FRONTEND_SKELETON_DISPLAY [provided] [used] [could be renamed] */
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
/* harmony export */   "MAX_ACTIVE_DEBOUNCE": () => /* binding */ MAX_ACTIVE_DEBOUNCE,
/* harmony export */   "FRONTEND_SKELETON_DISPLAY": () => /* binding */ FRONTEND_SKELETON_DISPLAY
/* harmony export */ });
const SCORER = 'v1'; // only default implemented

const MAXIMUM_SCORE = 10; // max score for scorer

const MAXIMUM_HISTORY_SIZE = 1000; // max killed tab history in memory

const SESSIONS_TIMEOUT_MS = 200; // when a tab is killed we need a timeout to retrieve the sessionId

const SESSIONS_RETRIES = 5; // how many tries to retrieve the session ID of a killed tab

const SESSIONS_MAX_FUZZY_DELTA_MS = 1000 * 5; // time is fuzzy matched to retireve the correct sessionID, should be higher than SESSIONS_TIMEOUT_MS

const MIN_ACTIVE_DEBOUNCE = 1000 * 2; // minimum active reading on a tab to be counted as valid 'useful' time

const MAX_ACTIVE_DEBOUNCE = 1000 * 60 * 5; // maximum time without any user input before it is considered idled, must be higher than 15sec

const FRONTEND_SKELETON_DISPLAY = 330; // how long to display the fake display in ms



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

/***/ "./src/config/websites.js":
/*!********************************!*\
  !*** ./src/config/websites.js ***!
  \********************************/
/*! namespace exports */
/*! export NO_RESTORE_URL [provided] [used] [could be renamed] */
/*! export PROTECTED_URL [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROTECTED_URL": () => /* binding */ PROTECTED_URL,
/* harmony export */   "NO_RESTORE_URL": () => /* binding */ NO_RESTORE_URL
/* harmony export */ });
const PROTECTED_URL = ['meet.google.com/', 'zoom.us/wc/', 'web.skype.com/', 'hangouts.google.com/call/', 'secure.join.me/', '.webex.com/webappng/sites/', 'bluejeans.com/', 'global.gotomeeting.com/join/', 'whereby.com/'];
const NO_RESTORE_URL = ['about:debugging'];


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
/*! export timeout [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => /* binding */ logger,
/* harmony export */   "copy": () => /* binding */ copy,
/* harmony export */   "timeout": () => /* binding */ timeout,
/* harmony export */   "retryPromise": () => /* binding */ retryPromise,
/* harmony export */   "getDomain": () => /* binding */ getDomain,
/* harmony export */   "setAllReadBadge": () => /* binding */ setAllReadBadge,
/* harmony export */   "setUnreadBadge": () => /* binding */ setUnreadBadge,
/* harmony export */   "isInteger": () => /* binding */ isInteger,
/* harmony export */   "storageReset": () => /* binding */ storageReset,
/* harmony export */   "getLastFocusedWindow": () => /* binding */ getLastFocusedWindow,
/* harmony export */   "removeItem": () => /* binding */ removeItem
/* harmony export */ });
/* unused harmony export isUserActive */
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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
/******/ 			["./src/app/popup.js","vendors-node_modules_lodash_lodash_js-node_modules_psl_index_js-node_modules_webextension-pol-357a4d","vendors-node_modules_material-ui_core_Typography_Typography_js-node_modules_material-ui_core_-e19db9"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9lbnYuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb25maWcvd2Vic2l0ZXMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL3NlcnZpY2VzL3V0aWxzLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3M/ZWE1ZCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJBcHAiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSRVNUT1JFIiwiU0hFTExfUkVTVE9SRSIsIkNMT1NFRF9ISVNUT1JZIiwiTlVNQkVSX0hPVVJTX0RBWSIsIlRJTUVfUEVSSU9EXzI0SCIsIlRJTUVfUEVSSU9EXzcySCIsIkZVTExfU0tFTEVUT04iLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZXRBbGxSZWFkQmFkZ2UiLCJza2VsZXRvbiIsInN0YXRlIiwiY2xvc2VkX2hpc3RvcnkiLCJsb2FkaW5nIiwidGltZW91dCIsIkZST05URU5EX1NLRUxFVE9OX0RJU1BMQVkiLCJ0aGVuIiwibG9nZ2VyIiwic2V0U3RhdGUiLCJicm93c2VyIiwicmVzdWx0IiwiZW5yaWNoSGlzdG9yeSIsIm9uQ2hhbmdlZENhbGxiYWNrIiwiY2hhbmdlcyIsImNoYW5nZXNDbG9zZWRIaXN0b3J5Iiwic2VhcmNoVmFsdWUiLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUl0ZW0iLCJsaXN0SXRlbXMiLCJrZXkiLCJlIiwiY3RybEtleSIsIm1ldGFLZXkiLCJyZXN0b3JlVGFiIiwiaXRlbXMiLCJtZXNzYWdlVHlwZSIsInJlc3RvcmVkVGFiIiwidXVpZCIsImZpbHRlciIsIml0ZW0iLCJzZWFyY2hPbkNoYW5nZSIsInZhbHVlIiwic2VhcmNoT25SZXF1ZXN0U2VhcmNoIiwiZXZlbnQiLCJzZWFyY2hPbkNhbmNlbCIsImZpbHRlckxpc3QiLCJzZWxlY3RlZExpc3QiLCJlbmRQZXJpb2QiLCJub3ciLCJEYXRlIiwiZGVsZXRpb25fdGltZSIsImhpc3RvcnkiLCJyeCIsIlJlZ0V4cCIsIk5PX1JFU1RPUkVfVVJMIiwibWFwIiwid2Vic2l0ZSIsImRlbGV0aW9uVGltZSIsImhvdXJzX21pbnV0ZXNfZm9ybWF0IiwiZGF5anMiLCJmb3JtYXQiLCJkYXRlIiwic3RhcnRPZiIsIm5vX3Jlc3RvcmUiLCJleGVjIiwidXJsIiwicmV2ZXJzZSIsInJlbmRlckxpc3QiLCJjbGFzc2VzIiwic2xpY2UiLCJsZW5ndGgiLCJzZWFyY2hQYXR0ZXJuIiwic3BsaXQiLCJ0ZXJtIiwiam9pbiIsIm9wdGlvbiIsInRpdGxlIiwibWF0Y2giLCJjdXJyZW50IiwibGFzdCIsImkiLCJuZXh0IiwiZGVsdGEiLCJNYXRoIiwibWF4IiwiY2VpbCIsImRpZmYiLCJzcGxpY2UiLCJ0ZXh0IiwiZGF5IiwibGlzdEl0ZW0iLCJteUZpbHRlcmVkTGlzdCIsImluZGV4Iiwic3R5bGUiLCJwcmltYXJ5IiwicHJpbWFyeVRpdGxlQ29udGFpbmVyIiwibGlzdFRpdGxlVGV4dCIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsImF2YXRhckNvbnRhaW5lciIsInByaW1hcnlUZXh0Q29udGFpbmVyIiwic2Vjb25kYXJ5VGV4dENvbnRhaW5lciIsIml0ZW1UZXh0IiwiYnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uIiwibGlzdFdlYnNpdGVzIiwic2VhcmNoQmFyIiwibGlzdCIsIm1pbiIsInJlbmRlciIsIm51bWJlckNsb3NlZFRhYnNMYXN0SG91ciIsImJvbGROdW1iZXIiLCJ0ZXh0T25SaWdodCIsInRvcFRleHQiLCJtaWRkbGVUZXh0IiwiZm9vdGVyQ29udGFpbmVyIiwiaWNvbkNvbnRhaW5lciIsImxpbmtUb0Zvcm0iLCJzdHlsZXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1heEhlaWdodCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwiZ3JlZW5UaXRsZSIsImZvbnRTaXplIiwiYm9yZGVyQm90dG9tIiwibWF4V2lkdGgiLCJsaXN0VGl0bGUiLCJjb2xvciIsInN1YlRleHQiLCJtYXJnaW5Ub3AiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsIm92ZXJmbG93V3JhcCIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsIm1pbldpZHRoIiwibWFyZ2luUmlnaHQiLCJsaXN0Q29udGFpbmVyIiwibWFyZ2luQm90dG9tIiwid2l0aFN0eWxlcyIsIkhvbWVEaXNwYXRjaGVyIiwibmV3VmFsdWUiLCJhcHBCYXJWYWx1ZSIsImZpcnN0TG9hZCIsImRpc3BhdGNoUGFnZSIsImRpc3BsYXlJY29uIiwiaGFuZGxlQ2hhbmdlIiwicm9vdCIsIm5vdGlmaWNhdGlvbiIsInZhcmlhbnRTdWNjZXNzIiwic3VjY2VzcyIsImhvbWVDb250YWluZXIiLCJwYXBlclNoYWRvdyIsImdyaWRMb2dvVGFicyIsImVuc2VtYmxlbG9nbyIsImxvZ29GdWxsIiwiYm94U2hhZG93IiwidGFiIiwibGVmdCIsImFsbFRhYnMiLCJsb2dvQXZhdGFyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiTGlnaHRUb29sdGlwIiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbW1vbiIsIndoaXRlIiwic2hhZG93cyIsIlRvb2x0aXAiLCJTZXR0aW5ncyIsImZvY3VzZWRNb2RlIiwicmVsYXhlZE1vZGUiLCJjdXN0b21pemVkQm9vbCIsInNldHRpbmdzIiwiSU5JVF9GT0NVU0VEX1BST0ZJTEUiLCJmb2N1c2VkV2luZG93SWQiLCJvcGVuTW9kYWwiLCJwcm9maWxlIiwiYWN0aXZlX3Byb2ZpbGUiLCJGT0NVU0VEIiwiUkVMQVhFRCIsIkNVU1RPTUlaRUQiLCJmb2N1c2VkX3dpbmRvd19pZCIsImluYWN0aXZlUG9saWN5IiwiaW5hY3RpdmVfcG9saWN5IiwiY2hhbmdlc1NldHRpbmdzIiwiY2hhbmdlc1Byb2ZpbGUiLCJjaGFuZ2VkSW5hY3RpdmVQb2xpY3kiLCJoYW5kbGVCb29sQ2hhbmdlIiwiY2hhbmdlVHlwZSIsIm5vdGlmeVVzZXIiLCJpbmNsdWRlcyIsImhhbmRsZVN3aXRjaCIsImhhbmRsZVNhdmVQYXJhbWV0ZXJzIiwiY2hlY2tTZXR0aW5ncyIsImVucXVldWVTbmFja2JhciIsInZhcmlhbnQiLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJhdXRvSGlkZUR1cmF0aW9uIiwiaGFuZGxlQ2hhbmdlUGFyYW1ldGVycyIsInBhdGgiLCJwYXJhbWV0ZXIiLCJjb3B5IiwibmV4dFZhbHVlIiwidGFyZ2V0IiwiaXNJbnRlZ2VyIiwid2luZG93SWQiLCJwdXNoIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwiaW5wdXRzUGFyYW1ldGVycyIsImxhYmVsIiwic291cmNlIiwiUE9MSUNZIiwiT1BUSU1BTF9OVU1CRVJfVEFCUyIsImlucHV0UHJvcHMiLCJzdGVwIiwibGlzdEl0ZW1zUGFyYW1ldGVycyIsInRleHRGaWVsZCIsIm1haW5CbG9jayIsInN3aXRjaFdyYXBwZXIiLCJzd2l0Y2hDb250YWluZXIiLCJzdHlsZUxhYmVsIiwiaW50cm9kdWN0aW9uQmxvY2siLCJwYXJhbWV0ZXJzVGl0bGUiLCJzZXR0aW5nc1dyYXBwZXIiLCJmaXJzdFByb2ZpbGVzQ29udGFpbmVyIiwiY2hlY2tib3hXcmFwcGVyIiwiZmlyc3RCb29sZWFucyIsImhlbHBJY29uIiwiY3VzdG9taXplV3JhcHBlciIsInNldHRpbmdzQmxvY2siLCJzZWNvbmRhcnlCdXR0b24iLCJ0aXBzQnV0dG9uIiwic3R5bGVMYWJlbFRpcHMiLCJtb2RhbCIsIkJhY2tkcm9wIiwiaW52aXNpYmxlIiwicGFwZXIiLCJmaXJzdEJsb2NrTW9kYWwiLCJzZWNvbmRFbnNlbWJsZSIsImxhc3RFbnNlbWJsZSIsImxlZnRDbGlja1dyYXBwZXIiLCJzdHlsZUxhYmVsTmV4dCIsImZvb3Rlck1vZGFsIiwidmVyc2lvbiIsIndpdGhTbmFja2JhciIsInBvaW50ZXJFdmVudHMiLCJtaW5IZWlnaHQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJwYWRkaW5nIiwib3BhY2l0eSIsImJveEN0cmwiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIklOQUNUSVZFX1BPTElDWSIsIlNDT1JFUiIsIk1BWElNVU1fU0NPUkUiLCJNQVhJTVVNX0hJU1RPUllfU0laRSIsIlNFU1NJT05TX1RJTUVPVVRfTVMiLCJTRVNTSU9OU19SRVRSSUVTIiwiU0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TIiwiTUlOX0FDVElWRV9ERUJPVU5DRSIsIk1BWF9BQ1RJVkVfREVCT1VOQ0UiLCJJTklUX1JFTEFYRURfUFJPRklMRSIsIkVOViIsIm1lbW9yeSIsImNhY2hlX3NpemUiLCJtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZSIsIm1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yIiwicG9saWN5IiwidGFyZ2V0X3RhYnMiLCJkZWNheSIsIm1pbl90aW1lIiwiYWN0aXZlIiwicGlubmVkIiwiYXVkaWJsZSIsInNjb3JlciIsIm1pbl9hY3RpdmUiLCJwcm90ZWN0aW9uX3RpbWUiLCJjYWNoZWRfZGVjYXkiLCJPYmplY3QiLCJmcmVlemUiLCJQUk9URUNURURfVVJMIiwiYXJncyIsImRlZmF1bHRfZm9ybWF0IiwicHJlIiwidG9VVENTdHJpbmciLCJvcHRpb25zIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJvYmoiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImdldERvbWFpbiIsInN0ciIsInBzbCIsIlVSTCIsImhvc3RuYW1lIiwiZG9tYWluIiwidGVzdCIsInNldFVucmVhZEJhZGdlIiwiYmFkZ2VUZXh0IiwiY291bnRlciIsInBhcnNlSW50IiwiaXNVc2VyQWN0aXZlIiwicm91bmQiLCJzdGF0dXMiLCJzdG9yYWdlUmVzZXQiLCJkIiwia2V5cyIsImdldExhc3RGb2N1c2VkV2luZG93IiwicG9wdWxhdGUiLCJpZCIsImFyciIsImluZGV4T2YiLCJyZXRyeVByb21pc2UiLCJmdW5jIiwiZGVsYXkiLCJ0aW1lcyIsInJlamVjdCIsImNhdGNoIiwicmVhc29uIiwid2luZG93IiwidXRpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyxpRUFBYyxDQUFDO0FBQzNCQyxZQUFVLEVBQUU7QUFDVkMsY0FBVSxFQUFFO0FBREYsR0FEZTtBQUkzQkMsU0FBTyxFQUFFO0FBQ1BDLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUU7QUFERztBQURKO0FBSmtCLENBQUQsQ0FBNUI7O0FBV0EsU0FBU0MsR0FBVCxHQUFlO0FBQ2Isc0JBQ0UsMkRBQUMsNkRBQUQ7QUFBa0IsU0FBSyxFQUFFUDtBQUF6QixrQkFDRSwyREFBQywrREFBRCxPQURGLEVBQ3FCLEdBRHJCLENBREY7QUFLRDs7QUFFRFEsdURBQUEsZUFBZ0IsMkRBQUMsR0FBRCxPQUFoQixFQUF5QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtB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QW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLDJDOzs7O1VDNUZBO1VBQ0EiLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZURpc3BhdGNoZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lRGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gIH0sXG4gIHBhbGV0dGU6IHtcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMDBiOWFhJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhvbWVEaXNwYXRjaGVyIC8+eycgJ31cbiAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0ICogYXMgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEZST05URU5EX1NLRUxFVE9OX0RJU1BMQVkgfSBmcm9tICcuLi8uLi9jb25maWcvZW52LmpzJztcbmltcG9ydCB7IE5PX1JFU1RPUkVfVVJMIH0gZnJvbSAnLi4vLi4vY29uZmlnL3dlYnNpdGVzLmpzJztcbmltcG9ydCB7IGxvZ2dlciwgdGltZW91dCwgc2V0QWxsUmVhZEJhZGdlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMuanMnO1xuaW1wb3J0ICogYXMgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvbic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IEVycm9yT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yT3V0bGluZSc7XG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0IGFzIExpc3QgfSBmcm9tICdyZWFjdC13aW5kb3cnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICdtYXRlcmlhbC11aS1zZWFyY2gtYmFyJztcblxuY29uc3QgUkVTVE9SRSA9ICdSRVNUT1JFJztcbmNvbnN0IFNIRUxMX1JFU1RPUkUgPSAnU0hFTExfUkVTVE9SRSc7XG5jb25zdCBDTE9TRURfSElTVE9SWSA9ICdjbG9zZWRfaGlzdG9yeSc7XG5jb25zdCBOVU1CRVJfSE9VUlNfREFZID0gMjQ7XG5jb25zdCBUSU1FX1BFUklPRF8yNEggPSAzNjAwMDAwICogTlVNQkVSX0hPVVJTX0RBWTsgLy8gaW4gbWljcm9zZWNvbmRcbmNvbnN0IFRJTUVfUEVSSU9EXzcySCA9IDM2MDAwMDAgKiBOVU1CRVJfSE9VUlNfREFZICogMzsgLy8gaW4gbWljcm9zZWNvbmRcbmNvbnN0IEZVTExfU0tFTEVUT04gPSBmYWxzZTtcblxuY2xhc3MgSG9tZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBzZXRBbGxSZWFkQmFkZ2UoKTtcblxuICAgIGlmIChwcm9wcy5za2VsZXRvbikge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgY2xvc2VkX2hpc3Rvcnk6IFtdLCBsb2FkaW5nOiB0cnVlIH07XG4gICAgICB0aW1lb3V0KEZST05URU5EX1NLRUxFVE9OX0RJU1BMQVkpLnRoZW4oKCkgPT4ge1xuICAgICAgICBsb2dnZXIodGhpcywgJ0Rpc3BsYXlpbmcgbGlzdCcpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgY2xvc2VkX2hpc3Rvcnk6IFtdLCBsb2FkaW5nOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoW0NMT1NFRF9ISVNUT1JZXSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBjbG9zZWRfaGlzdG9yeSA9IHJlc3VsdC5jbG9zZWRfaGlzdG9yeSB8fCBbXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZWRfaGlzdG9yeTogdGhpcy5lbnJpY2hIaXN0b3J5KGNsb3NlZF9oaXN0b3J5KSB9KTtcbiAgICB9KTtcbiAgICB0aGlzLm9uQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXNDbG9zZWRIaXN0b3J5ID0gY2hhbmdlc1tDTE9TRURfSElTVE9SWV07XG4gICAgICBpZiAoY2hhbmdlc0Nsb3NlZEhpc3RvcnkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2xvc2VkX2hpc3Rvcnk6IHRoaXMuZW5yaWNoSGlzdG9yeShjaGFuZ2VzQ2xvc2VkSGlzdG9yeVsnbmV3VmFsdWUnXSksXG4gICAgICAgICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgc2V0QWxsUmVhZEJhZGdlKCk7XG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0obGlzdEl0ZW1zLCBrZXksIGUpIHtcbiAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgLy8gbWV0YUtleSBpcyBjbWQga2V5IG9uIG1hY1xuICAgICAgdGhpcy5yZXN0b3JlVGFiKGxpc3RJdGVtcywga2V5LCBTSEVMTF9SRVNUT1JFKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXN0b3JlVGFiKGxpc3RJdGVtcywga2V5LCBSRVNUT1JFKTtcbiAgICB9XG4gIH1cblxuICByZXN0b3JlVGFiKGl0ZW1zLCBrZXksIG1lc3NhZ2VUeXBlKSB7XG4gICAgY29uc3QgcmVzdG9yZWRUYWIgPSBpdGVtc1trZXldO1xuICAgIGxvZ2dlcih0aGlzLCBtZXNzYWdlVHlwZSArICcgZm9yIHRhYiAnICsgcmVzdG9yZWRUYWIudXVpZCk7XG4gICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS51dWlkICE9PSByZXN0b3JlZFRhYi51dWlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VkX2hpc3Rvcnk6IGNsb3NlZF9oaXN0b3J5IH0pOyAvLyBubyBuZWVkIHRvIGVucmljaCBoZXJlXG4gICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlVHlwZSxcbiAgICAgIHV1aWQ6IHJlc3RvcmVkVGFiLnV1aWQsXG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2hPbkNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogdmFsdWUgfSk7XG4gIH1cblxuICBzZWFyY2hPblJlcXVlc3RTZWFyY2goZXZlbnQpIHt9XG5cbiAgc2VhcmNoT25DYW5jZWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiAnJyB9KTtcbiAgfVxuXG4gIGZpbHRlckxpc3Qoc2VsZWN0ZWRMaXN0LCBlbmRQZXJpb2QpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZWxlY3RlZExpc3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gbm93IC0gaXRlbS5kZWxldGlvbl90aW1lIDwgZW5kUGVyaW9kO1xuICAgIH0pO1xuICB9XG5cbiAgZW5yaWNoSGlzdG9yeShoaXN0b3J5KSB7XG4gICAgLy8ga2VlcCBlbGVtZW50cyBvbmx5IGluIHRpbWUtZnJhbWVcbiAgICBsZXQgc2VsZWN0ZWRMaXN0ID0gaGlzdG9yeSA/IHRoaXMuZmlsdGVyTGlzdChoaXN0b3J5LCBUSU1FX1BFUklPRF83MkgpIDogW107XG4gICAgY29uc3QgcnggPSBuZXcgUmVnRXhwKE5PX1JFU1RPUkVfVVJMLmpvaW4oJ3wnKSk7XG4gICAgLy8gbGlzdCBlbnJpY2htZW50XG4gICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0Lm1hcCgod2Vic2l0ZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB3ZWJzaXRlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBkZWxldGlvblRpbWUgPSBuZXcgRGF0ZSh3ZWJzaXRlLmRlbGV0aW9uX3RpbWUpO1xuICAgICAgICB3ZWJzaXRlLmhvdXJzX21pbnV0ZXNfZm9ybWF0ID0gZGF5anMoZGVsZXRpb25UaW1lKS5mb3JtYXQoJ0hIOm1tJyk7XG4gICAgICAgIHdlYnNpdGUuZGF0ZSA9IGRheWpzKGRlbGV0aW9uVGltZSkuc3RhcnRPZignZGF0ZScpO1xuICAgICAgICB3ZWJzaXRlLm5vX3Jlc3RvcmUgPSByeC5leGVjKHdlYnNpdGUudXJsKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3ZWJzaXRlO1xuICAgIH0pO1xuXG4gICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0LnJldmVyc2UoKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRMaXN0O1xuICB9XG5cbiAgcmVuZGVyTGlzdCgpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgc2VsZWN0ZWRMaXN0ID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeS5zbGljZSgwKTtcbiAgICAvLyBrZWVwaW5nIG9ubHkgd2Vic2l0ZXMgdGhhdCBtYXRjaCBzZWFyY2ggY3JpdGVyaWFcbiAgICBpZiAodHlwZW9mIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VhcmNoUGF0dGVybiA9IG5ldyBSZWdFeHAoXG4gICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWVcbiAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgIC5tYXAoKHRlcm0pID0+IGAoPz0uKiR7dGVybX0pYClcbiAgICAgICAgICAuam9pbignJyksXG4gICAgICAgICdpJ1xuICAgICAgKTtcbiAgICAgIHNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdC5maWx0ZXIoXG4gICAgICAgIChvcHRpb24pID0+IG9wdGlvbi50aXRsZS5tYXRjaChzZWFyY2hQYXR0ZXJuKSB8fCBvcHRpb24udXJsLm1hdGNoKHNlYXJjaFBhdHRlcm4pXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50ID0gZGF5anMoKS5zdGFydE9mKCdkYXRlJyk7XG4gICAgbGV0IGxhc3QgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbmV4dCA9IHNlbGVjdGVkTGlzdFtpXS5kYXRlO1xuICAgICAgbGV0IGRlbHRhID0gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKGN1cnJlbnQuZGlmZihuZXh0LCAnZGF5cycsIHRydWUpKSk7XG4gICAgICBpZiAoZGVsdGEgPiBsYXN0KSB7XG4gICAgICAgIGlmIChkZWx0YSA9PT0gMSkge1xuICAgICAgICAgIHNlbGVjdGVkTGlzdC5zcGxpY2UoaSwgMCwgeyB0ZXh0OiAnWWVzdGVyZGF5IC0gJywgZGF5OiBuZXh0LmZvcm1hdCgnTU1NIEREJykgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVsdGEgPT09IDIpIHtcbiAgICAgICAgICBzZWxlY3RlZExpc3Quc3BsaWNlKGksIDAsIHsgdGV4dDogJ1ByZXZpb3VzIGRheSAtICcsIGRheTogbmV4dC5mb3JtYXQoJ01NTSBERCcpIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdGVkTGlzdC5zcGxpY2UoaSwgMCwgeyB0ZXh0OiAnJywgZGF5OiBuZXh0LmZvcm1hdCgnTU1NIEREJykgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdCA9IGRlbHRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxpc3RJdGVtID0gKG15RmlsdGVyZWRMaXN0KSA9PiAoeyBpbmRleCwgc3R5bGUgfSkgPT4ge1xuICAgICAgY29uc3Qgd2Vic2l0ZSA9IG15RmlsdGVyZWRMaXN0W2luZGV4XTtcbiAgICAgIGlmICh0eXBlb2Ygd2Vic2l0ZS5kYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgPExpc3RJdGVtIENvbnRhaW5lckNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17YCR7d2Vic2l0ZS50ZXh0fSAke3dlYnNpdGUuZGF5fWB9XG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgICAgcHJpbWFyeTogY2xhc3Nlcy5wcmltYXJ5VGl0bGVDb250YWluZXIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFRpdGxlVGV4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgPExpc3RJdGVtIENvbnRhaW5lckNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZEF2YXRhcldpdGhUaW1lfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpbWVEaXNwbGF5fT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIEZVTExfU0tFTEVUT04gPyA8U2tlbGV0b24gd2lkdGg9XCIzZW1cIiAvPiA6IGAke3dlYnNpdGUuaG91cnNfbWludXRlc19mb3JtYXR9YH1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwiY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgLz5cbiAgICAgICAgICAgICAgICAgIDwvU2tlbGV0b24+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICAgIGFsdD17d2Vic2l0ZS50aXRsZSA/IHdlYnNpdGUudGl0bGUgOiB3ZWJzaXRlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXt3ZWJzaXRlLmZhdkljb25VcmwgPyB3ZWJzaXRlLmZhdkljb25VcmwgOiAnZXJyb3InfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIEZVTExfU0tFTEVUT04gPyAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIHdpZHRoPVwiMTVlbVwiIC8+XG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIHdpZHRoPVwiMTBlbVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3dlYnNpdGUudXJsfVxuICAgICAgICAgICAgICAgIHNlY29uZGFyeT17d2Vic2l0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICBwcmltYXJ5OiBjbGFzc2VzLnByaW1hcnlUZXh0Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiBjbGFzc2VzLnNlY29uZGFyeVRleHRDb250YWluZXIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiBGVUxMX1NLRUxFVE9OID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVtb3ZlSXRlbS5iaW5kKHRoaXMsIG15RmlsdGVyZWRMaXN0LCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3dlYnNpdGUubm9fcmVzdG9yZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgeydSZXN0b3JlJ31cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFdlYnNpdGVzfT5cbiAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG9uIGxhc3QgNzJoXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWFyY2hPbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uUmVxdWVzdFNlYXJjaD17dGhpcy5zZWFyY2hPblJlcXVlc3RTZWFyY2guYmluZCh0aGlzKX1cbiAgICAgICAgICBvbkNhbmNlbFNlYXJjaD17dGhpcy5zZWFyY2hPbkNhbmNlbC5iaW5kKHRoaXMpfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hCYXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgICAgIHtzZWxlY3RlZExpc3QubGVuZ3RoID09PSAwID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxMaXN0IGhlaWdodD17TWF0aC5taW4oODAgKiBzZWxlY3RlZExpc3QubGVuZ3RoLCAzMDApfSBpdGVtQ291bnQ9e3NlbGVjdGVkTGlzdC5sZW5ndGh9IGl0ZW1TaXplPXs4MH0+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbShzZWxlY3RlZExpc3QpfVxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeVxuICAgICAgPyB0aGlzLmZpbHRlckxpc3QodGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSwgVElNRV9QRVJJT0RfMjRIKS5sZW5ndGhcbiAgICAgIDogMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGRpdiB2YXJpYW50PVwiaDNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2xkTnVtYmVyfT5cbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPyBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgOiAwfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0T25SaWdodH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudG9wVGV4dH0+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIHRhYlxuICAgICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIDw9IDEgPyAnJyA6ICdzJ30gY2xvc2VkXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubWlkZGxlVGV4dH0+IGluIHRoZSBsYXN0IHtgJHtOVU1CRVJfSE9VUlNfREFZfSBob3Vyc2B9IDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlckxpc3QuYmluZCh0aGlzKSgpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJDb250YWluZXJ9PlxuICAgICAgICAgIDxFcnJvck91dGxpbmVJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25Db250YWluZXJ9IC8+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNkVUVKSGQwYkw2cnlGdlprMjIwQ29acDdjd3ZGeEVTb3JwczdjbmdrMHdRZnl1LVEvdmlld2Zvcm1cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVG9Gb3JtfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJ1Zy9GZWVkYmFjaz9cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgdGl0bGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1heEhlaWdodDogNDAsXG4gIH0sXG4gIHRleHRPblJpZ2h0OiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ3N0YXJ0JyxcbiAgfSxcbiAgZ3JlZW5UaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYm9yZGVyQm90dG9tOiBgMnB4IHNvbGlkICMwMGI5YWFgLFxuICAgIG1heFdpZHRoOiAyMjUsXG4gIH0sXG4gIGxpc3RUaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBtYXhIZWlnaHQ6IDMwLFxuICB9LFxuXG4gIGJvbGROdW1iZXI6IHtcbiAgICBjb2xvcjogJyNlNTVjMDAnLFxuICAgIGZvbnRTaXplOiA0MCxcbiAgICBtYXhXaWR0aDogJzMwJScsXG4gIH0sXG4gIG1pZGRsZVRleHQ6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gIH0sXG4gIHRvcFRleHQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gIH0sXG4gIHN1YlRleHQ6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXhXaWR0aDogMjAsXG4gIH0sXG4gIGJ1dHRvbkNvbnRhaW5lcjogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknIH0sXG4gIGl0ZW1UZXh0OiB7XG4gICAgbWF4V2lkdGg6IDE4NSxcbiAgICBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdicmVhay1zcGFjZXMnLFxuXG4gICAgbWF4SGVpZ2h0OiA2MCxcbiAgfSxcbiAgdGltZURpc3BsYXk6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE0LFxuICB9LFxuICBncmlkQXZhdGFyV2l0aFRpbWU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIH0sXG4gIGxpc3RXZWJzaXRlczoge1xuICAgIG1hcmdpblRvcDogMjAsXG4gIH0sXG4gIGZvb3RlckNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS4yNSksXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgbGlua1RvRm9ybToge1xuICAgIGZvbnRTaXplOiAxMCxcbiAgfSxcbiAgaWNvbkNvbnRhaW5lcjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDAuMjUpLFxuICAgIGZvbnRTaXplOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICBhdmF0YXJDb250YWluZXI6IHtcbiAgICBtYXhXaWR0aDogdGhlbWUuc3BhY2luZyg3KSxcbiAgICBtYXhIZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNyksXG4gIH0sXG4gIHByaW1hcnlUZXh0Q29udGFpbmVyOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgbWF4SGVpZ2h0OiAyMixcbiAgfSxcbiAgc2Vjb25kYXJ5VGV4dENvbnRhaW5lcjoge1xuICAgIGZvbnRTaXplOiAxMyxcbiAgfSxcbiAgcHJpbWFyeVRpdGxlQ29udGFpbmVyOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNixcbiAgfSxcblxuICBsaXN0VGl0bGVUZXh0OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQuNSksXG4gIH0sXG4gIGxpc3RDb250YWluZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIHNlYXJjaEJhcjoge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtYXhIZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNSksXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShIb21lKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3MnO1xuaW1wb3J0IEFycm93QmFja0lvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja0lvcyc7XG5pbXBvcnQgeyBTbmFja2JhclByb3ZpZGVyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuLi9TZXR0aW5ncyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBIb21lIGZyb20gJy4uL0hvbWUnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMuanMnO1xuXG5jbGFzcyBIb21lRGlzcGF0Y2hlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBhcHBCYXJWYWx1ZTogJ0hPTUUnLCBmaXJzdExvYWQ6IHRydWUgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxvZ2dlcih0aGlzLCAnUG9wdXAgb3BlbmVkJyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAobmV3VmFsdWUpID0+ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXBwQmFyVmFsdWU6IG5ld1ZhbHVlLCBmaXJzdExvYWQ6IGZhbHNlfSk7XG4gICAgbG9nZ2VyKHRoaXMsICdTd2l0Y2ggdG8gJyArIG5ld1ZhbHVlKTtcbiAgfTtcblxuICBkaXNwYXRjaFBhZ2UoKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmFwcEJhclZhbHVlKSB7XG4gICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgcmV0dXJuIDxIb21lIHNrZWxldG9uPXt0aGlzLnN0YXRlLmZpcnN0TG9hZH0vPjtcbiAgICAgIGNhc2UgJ1NFVFRJTkdTJzpcbiAgICAgICAgcmV0dXJuIDxTZXR0aW5ncyAvPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8ZGl2PlRoaXMgaXMgYW4gZXJyb3IgcGFnZTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5SWNvbigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmFwcEJhclZhbHVlKSB7XG4gICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlKCdTRVRUSU5HUycpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25Db250YWluZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNldHRpbmdzSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ1NFVFRJTkdTJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlKCdIT01FJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXJyb3dCYWNrSW9zSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8ZGl2PlRoaXMgaXMgYW4gZXJyb3IgcGFnZTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U25hY2tiYXJQcm92aWRlclxuICAgICAgICBtYXhTbmFjaz17Mn1cbiAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgIHJvb3Q6IGNsYXNzZXMubm90aWZpY2F0aW9uLFxuICAgICAgICAgIHZhcmlhbnRTdWNjZXNzOiBjbGFzc2VzLnN1Y2Nlc3MsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhvbWVDb250YWluZXJ9PlxuICAgICAgICAgIDxQYXBlciBzcXVhcmU9e2ZhbHNlfSB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJTaGFkb3d9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZExvZ29UYWJzfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdGFiYnkudXNcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9e2NsYXNzZXMuZW5zZW1ibGVsb2dvfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4uLy4uL2Fzc2V0cy9zdGF0aWMvaWNvbnMvdGFiYnlfMi5wbmcnfSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0Z1bGx9IC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAge3RoaXMuZGlzcGxheUljb24oKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj57dGhpcy5kaXNwYXRjaFBhZ2UoKX08L2Rpdj5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU25hY2tiYXJQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVEaXNwYXRjaGVyO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lRGlzcGF0Y2hlciBmcm9tICcuL0hvbWVEaXNwYXRjaGVyJztcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiL1RhYic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGhvbWVDb250YWluZXI6IHtcbiAgICBtaW5XaWR0aDogNDAwLFxuICB9LFxuICBwYXBlclNoYWRvdzoge1xuICAgIGJveFNoYWRvdzogJzBweCAwcHggMXB4IC0xcHggcmdiYSgwLDAsMCwwLjMpLCAwcHggMHB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpLCAwcHggMHB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjMpJyxcbiAgfSxcbiAgdGFiOiB7XG4gICAgY29sb3I6ICcjMDBiOWFhJyxcbiAgfSxcbiAgbm90aWZpY2F0aW9uOiB7XG4gICAgbGVmdDogMTUwLFxuICB9LFxuICBncmlkTG9nb1RhYnM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgYWxsVGFiczoge1xuICAgIG1heFdpZHRoOiAnNzUlJyxcbiAgfSxcbiAgZW5zZW1ibGVsb2dvOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnbGVmdCcsXG4gIH0sXG4gIGxvZ29BdmF0YXI6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS4yNSksXG4gIH0sXG4gIGxvZ29GdWxsOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyLjI1KSxcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxMiksXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuMjUpLFxuICB9LFxuICBpY29uQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEuNSksXG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCM4MGUwYTcsICMwMGI5YWEpJyxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhvbWVEaXNwYXRjaGVyKTtcbiIsImltcG9ydCAqIGFzIGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5JztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcbmltcG9ydCBUdW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHVuZSc7XG5pbXBvcnQgSGVscE91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IZWxwT3V0bGluZSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcbmltcG9ydCB7IGNvcHkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscy5qcyc7XG5cbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgeyBSRUxBWEVELCBGT0NVU0VELCBDVVNUT01JWkVELCBJTklUX0ZPQ1VTRURfUFJPRklMRSB9IGZyb20gJy4uLy4uL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzJztcbmltcG9ydCB7IGNoZWNrU2V0dGluZ3MsIE9QVElNQUxfTlVNQkVSX1RBQlMsIFBPTElDWSwgSU5BQ1RJVkVfUE9MSUNZIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaXNJbnRlZ2VyLCByZW1vdmVJdGVtIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5cbmNvbnN0IExpZ2h0VG9vbHRpcCA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICB0b29sdGlwOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknLFxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gIH0sXG59KSkoVG9vbHRpcCk7XG5cbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb2N1c2VkTW9kZTogZmFsc2UsXG4gICAgICByZWxheGVkTW9kZTogZmFsc2UsXG4gICAgICBjdXN0b21pemVkQm9vbDogZmFsc2UsXG4gICAgICBzZXR0aW5nczogSU5JVF9GT0NVU0VEX1BST0ZJTEUsXG4gICAgICBmb2N1c2VkV2luZG93SWQ6IHRydWUsXG4gICAgICBvcGVuTW9kYWw6IGZhbHNlLFxuICAgIH07XG4gICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChbJ2FjdGl2ZV9wcm9maWxlJywgJ3NldHRpbmdzJywgJ2ZvY3VzZWRfd2luZG93X2lkJywgJ2luYWN0aXZlX3BvbGljeSddKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHByb2ZpbGUgPSByZXN1bHQuYWN0aXZlX3Byb2ZpbGUgfHwgRk9DVVNFRDtcbiAgICAgIGNvbnN0IGZvY3VzZWRNb2RlID0gcHJvZmlsZSA9PT0gRk9DVVNFRDtcbiAgICAgIGNvbnN0IHJlbGF4ZWRNb2RlID0gcHJvZmlsZSA9PT0gUkVMQVhFRDtcbiAgICAgIGNvbnN0IGN1c3RvbWl6ZWRCb29sID0gcHJvZmlsZSA9PT0gQ1VTVE9NSVpFRDtcbiAgICAgIGNvbnN0IHNldHRpbmdzID0gcmVzdWx0LnNldHRpbmdzIHx8IElOSVRfRk9DVVNFRF9QUk9GSUxFO1xuICAgICAgY29uc3QgZm9jdXNlZFdpbmRvd0lkID0gcmVzdWx0LmZvY3VzZWRfd2luZG93X2lkO1xuICAgICAgY29uc3QgaW5hY3RpdmVQb2xpY3kgPSByZXN1bHQuaW5hY3RpdmVfcG9saWN5O1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRNb2RlLFxuICAgICAgICByZWxheGVkTW9kZSxcbiAgICAgICAgY3VzdG9taXplZEJvb2wsXG4gICAgICAgIHNldHRpbmdzLFxuICAgICAgICBmb2N1c2VkV2luZG93SWQsXG4gICAgICAgIGluYWN0aXZlUG9saWN5LFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5vbkNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBjaGFuZ2VzU2V0dGluZ3MgPSBjaGFuZ2VzWydzZXR0aW5ncyddO1xuICAgICAgY29uc3QgY2hhbmdlc1Byb2ZpbGUgPSBjaGFuZ2VzWydhY3RpdmVfcHJvZmlsZSddO1xuICAgICAgY29uc3QgY2hhbmdlZEluYWN0aXZlUG9saWN5ID0gY2hhbmdlc1snaW5hY3RpdmVfcG9saWN5J107XG4gICAgICBpZiAoY2hhbmdlc1NldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNldHRpbmdzOiBjaGFuZ2VzU2V0dGluZ3NbJ25ld1ZhbHVlJ10sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZXNQcm9maWxlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZvY3VzZWRNb2RlOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gRk9DVVNFRCxcbiAgICAgICAgICByZWxheGVkTW9kZTogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IFJFTEFYRUQsXG4gICAgICAgICAgY3VzdG9taXplZEJvb2w6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBDVVNUT01JWkVELFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkSW5hY3RpdmVQb2xpY3kpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluYWN0aXZlUG9saWN5OiBjaGFuZ2VkSW5hY3RpdmVQb2xpY3lbJ25ld1ZhbHVlJ10gfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBoYW5kbGVCb29sQ2hhbmdlKGNoYW5nZVR5cGUpIHtcbiAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QUk9GSUxFJyxcbiAgICAgIHByb2ZpbGU6IGNoYW5nZVR5cGUsXG4gICAgfSk7XG4gICAgaWYgKGNoYW5nZVR5cGUgPT09IFJFTEFYRUQgfHwgY2hhbmdlVHlwZSA9PT0gRk9DVVNFRCkge1xuICAgICAgdGhpcy5ub3RpZnlVc2VyKHRydWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeS5pbmNsdWRlcyh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3dpdGNoKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKSB7XG4gICAgLy8gVE9ETyBBZGQgZnVuY3Rpb24gdG8gY2hlY2sgZm9yIGFsbCBwb3RlbnRpYWwgdmFsdWVzXG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICBpZiAoY2hlY2tTZXR0aW5ncyh0aGlzLnN0YXRlLnNldHRpbmdzKSkge1xuICAgICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QQVJBTUVURVJTJyxcbiAgICAgICAgc2V0dGluZ3M6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgICB9KTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLm5vdGlmeVVzZXIoc3VjY2Vzcyk7XG4gIH1cblxuICBub3RpZnlVc2VyKHN1Y2Nlc3MpIHtcbiAgICB0aGlzLnByb3BzLmVucXVldWVTbmFja2JhcihzdWNjZXNzID8gJ05ldyBTZXR0aW5ncyBhcmUgc2F2ZWQuJyA6ICdTZXR0aW5ncyBjYW5ub3QgYmUgc2F2ZWQuJywge1xuICAgICAgdmFyaWFudDogc3VjY2VzcyA/ICdzdWNjZXNzJyA6ICdlcnJvcicsXG4gICAgICBhbmNob3JPcmlnaW46IHtcbiAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogNzUwLFxuICAgICAgYXV0b0hpZGVEdXJhdGlvbjogMTUwMCxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZVBhcmFtZXRlcnMocGF0aCwgcGFyYW1ldGVyKSB7XG4gICAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgICAgbGV0IHNldHRpbmdzID0gY29weSh0aGlzLnN0YXRlLnNldHRpbmdzKTtcbiAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIGlmIChpc0ludGVnZXIobmV4dFZhbHVlKSB8fCBuZXh0VmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNldHRpbmdzW3BhdGhdW3BhcmFtZXRlcl0gPSBuZXh0VmFsdWU7IC8vIGRvIG5vdCBwYXJzZUludCBvciB0ZXh0RmllbGQgZ29lcyBjcmF6eS4uLlxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2V0dGluZ3M6IHNldHRpbmdzIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTd2l0Y2goKSB7XG4gICAgbGV0IGluYWN0aXZlUG9saWN5ID0gdGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeTtcblxuICAgIGlmIChpbmFjdGl2ZVBvbGljeS5pbmNsdWRlcyh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCkpIHtcbiAgICAgIGluYWN0aXZlUG9saWN5ID0gcmVtb3ZlSXRlbShpbmFjdGl2ZVBvbGljeSwgdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpO1xuICAgICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZVR5cGU6ICdSRU1PVkVfSU5BQ1RJVkVfUE9MSUNZJyxcbiAgICAgICAgd2luZG93SWQ6IHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluYWN0aXZlUG9saWN5LnB1c2godGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpO1xuICAgICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZVR5cGU6ICdBRERfSU5BQ1RJVkVfUE9MSUNZJyxcbiAgICAgICAgd2luZG93SWQ6IHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbmFjdGl2ZVBvbGljeTogaW5hY3RpdmVQb2xpY3kgfSk7XG4gIH1cblxuICBoYW5kbGVPcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuTW9kYWw6IHRydWUgfSk7XG4gIH1cblxuICBoYW5kbGVDbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1vZGFsOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5wdXRzUGFyYW1ldGVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdPcHRpbWFsIHRhYnMgbnVtYmVyJyxcbiAgICAgICAgc291cmNlOiB0aGlzLnN0YXRlLnNldHRpbmdzLFxuICAgICAgICBwYXRoOiBQT0xJQ1ksXG4gICAgICAgIHBhcmFtZXRlcjogT1BUSU1BTF9OVU1CRVJfVEFCUyxcbiAgICAgICAgaW5wdXRQcm9wczogeyBtaW46ICcxJywgbWF4OiAnMTAwJywgc3RlcDogJzEnIH0sXG4gICAgICB9LFxuICAgIF07XG4gICAgY29uc3QgbGlzdEl0ZW1zUGFyYW1ldGVycyA9IGlucHV0c1BhcmFtZXRlcnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzKGl0ZW0ucGF0aCwgaXRlbS5wYXJhbWV0ZXIpLmJpbmQodGhpcyl9XG4gICAgICAgIHZhbHVlPXtpdGVtLnNvdXJjZVtpdGVtLnBhdGhdW2l0ZW0ucGFyYW1ldGVyXX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIG9uS2V5VXA9eyhldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykgdGhpcy5oYW5kbGVTYXZlUGFyYW1ldGVycygpO1xuICAgICAgICB9fVxuICAgICAgICBpbnB1dFByb3BzPXtpdGVtLmlucHV0UHJvcHN9XG4gICAgICAvPlxuICAgICkpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluQmxvY2t9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQgJiYgdGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeVxuICAgICAgICAgICAgICAgICAgICA/ICF0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5LmluY2x1ZGVzKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKVxuICAgICAgICAgICAgICAgICAgICA6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3dpdGNoLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zd2l0Y2hXcmFwcGVyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN3aXRjaENvbnRhaW5lcn1cbiAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+RW5hYmxlIG9uIHRoaXMgd2luZG93PC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmludHJvZHVjdGlvbkJsb2NrfT5cbiAgICAgICAgICAgIDxUdW5lSWNvbiAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmFtZXRlcnNUaXRsZX0+U2VsZWN0IHlvdXIgcHJvZmlsZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtjbGFzc2VzLnNldHRpbmdzV3JhcHBlcn0+XG4gICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPXsndGFiYnkgdGVuZHMgdG8ga2VlcCA1IHRhYnMnfSBwbGFjZW1lbnQ9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0UHJvZmlsZXNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5mb2N1c2VkTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVCb29sQ2hhbmdlLmJpbmQodGhpcywgRk9DVVNFRCl9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveFdyYXBwZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkZvY3VzPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEhlbHBPdXRsaW5lSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaGVscEljb259IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XG4gICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPXsndGFiYnkgdGVuZHMgdG8ga2VlcCAxMiB0YWJzJ30gcGxhY2VtZW50PVwibGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdFByb2ZpbGVzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVsYXhlZE1vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQm9vbENoYW5nZS5iaW5kKHRoaXMsIFJFTEFYRUQpfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tib3hXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5SZWxheDwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCb29sZWFuc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxIZWxwT3V0bGluZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmhlbHBJY29ufSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21pemVXcmFwcGVyfT5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVCb29sQ2hhbmdlLmJpbmQodGhpcywgQ1VTVE9NSVpFRCl9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrYm94V3JhcHBlcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+Q3VzdG9taXplPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCb29sZWFuc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NCbG9ja30+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbCByZXF1aXJlZCBmdWxsV2lkdGg+XG4gICAgICAgICAgICAgICAge2xpc3RJdGVtc1BhcmFtZXRlcnN9XG4gICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgaGlkZGVuIGtleT1cImhpZGRlbi10ZXh0ZmllbGRcIiBkaXNhYmxlZCAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kYXJ5QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZVBhcmFtZXRlcnMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgb25DbGljaz17dGhpcy5oYW5kbGVPcGVuLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXBzQnV0dG9ufT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbFRpcHN9PkhlbHA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIC8vZGlzYWJsZVBvcnRhbD17dHJ1ZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVuTW9kYWx9XG4gICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXG4gICAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxuICAgICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcbiAgICAgICAgICAgIHRpbWVvdXQ6IDc1MCxcbiAgICAgICAgICAgIGludmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEZhZGUgaW49e3RoaXMuc3RhdGUub3Blbk1vZGFsfT5cbiAgICAgICAgICAgIDxCb3ggYm9yZGVyUmFkaXVzPXs2fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJsb2NrTW9kYWx9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZEVuc2VtYmxlfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5Qcm90ZWN0IGEgdGFiPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGFzdEVuc2VtYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycuLi8uLi9hc3NldHMvc3RhdGljL2ljb25zL3JpZ2h0X2NsaWNrLnBuZyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0Q2xpY2tXcmFwcGVyfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT4rPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+UGluPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kRW5zZW1ibGV9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlJlb3BlbiBtdWx0aXBsZSB0YWJzPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRFbnNlbWJsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5DdHJsPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT4rPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4uLy4uL2Fzc2V0cy9zdGF0aWMvaWNvbnMvbGVmdF9jbGljay5wbmcnfSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdENsaWNrV3JhcHBlcn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkhvdyBkb2VzIHRhYmJ5IHdvcms/PC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsTmV4dH0+XG4gICAgICAgICAgICAgICAgdGFiYnkgd2lsbCBub3QgcmVtb3ZlIHRhYnMgcmlnaHQgYWZ0ZXIgdGhlaXIgY3JlYXRpb24ueycgJ31cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsTmV4dH0+XG4gICAgICAgICAgICAgICAgdGFiYnkgdGFrZXMgd2VsbC10aG91Z2h0LW91dCBkZWNpc2lvbnMgYXV0b21hdGljYWxseS5cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlck1vZGFsfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90YWJieS51cy9mYXFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsVGlwc30+RkFRIGF2YWlsYWJsZSBoZXJlPC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsVGlwc30+XG4gICAgICAgICAgICAgICAgICB0YWJieSB7YnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbn1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTbmFja2JhcihTZXR0aW5ncyk7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vU2V0dGluZ3MnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHNldHRpbmdzV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIG1hcmdpblRvcDogNSxcbiAgICBtYXJnaW5MZWZ0OiA0NyxcbiAgICBtYXJnaW5SaWdodDogMjAsXG4gIH0sXG4gIHNlY29uZGFyeUJ1dHRvbjoge1xuICAgIG1hcmdpblRvcDogMTgsXG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcblxuICAgIG1heFdpZHRoOiAyMCxcbiAgfSxcblxuICBub3RpZmljYXRpb246IHtcbiAgICBtYXhXaWR0aDogMTUwLFxuICB9LFxuICBpbnRyb2R1Y3Rpb25CbG9jazoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3N0YXJ0JyxcbiAgICBtYXJnaW5MZWZ0OiA3LFxuICB9LFxuICBwYXJhbWV0ZXJzVGl0bGU6IHtcbiAgICAvL2ZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTcsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gICAgbWFyZ2luTGVmdDogMTYsXG4gIH0sXG4gIHNldHRpbmdzQmxvY2s6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtYXJnaW5MZWZ0OiAzMixcbiAgICBtYXJnaW5Ub3A6IDQsXG4gIH0sXG4gIGZpcnN0Qm9vbGVhbnM6IHtcbiAgICBtYXhXaWR0aDogJzM2JScsXG4gICAgbWluV2lkdGg6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgbWF4SGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5Ub3A6IDUsXG4gICAgLy8gcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICB9LFxuICBmaXJzdFByb2ZpbGVzQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIG1heFdpZHRoOiB0aGVtZS5zcGFjaW5nKDEwKSxcbiAgfSxcblxuICBzdHlsZUxhYmVsOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICB9LFxuICBjaGVja2JveFdyYXBwZXI6IHtcbiAgICBwb2ludGVyRXZlbnRzOiAnYXV0bycsXG4gIH0sXG4gIHN3aXRjaENvbnRhaW5lcjoge1xuICAgIG1heEhlaWdodDogMjAsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIH0sXG4gIHN3aXRjaFdyYXBwZXI6IHtcbiAgICBwb2ludGVyRXZlbnRzOiAnYXV0bycsXG4gIH0sXG4gIHRleHRGaWVsZDoge1xuICAgIG1heFdpZHRoOiAnODUlJyxcbiAgfSxcbiAgY3VzdG9taXplV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3N0YXJ0JyxcbiAgICBhbGlnbkl0ZW1zOiAnc3RhcnQnLFxuICB9LFxuICBoZWxwSWNvbjoge1xuICAgIGNvbG9yOiAnI2U1NWMwMCcsXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygwLjI1KSxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBtb2RhbDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNCknLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXG4gIH0sXG4gIG1haW5CbG9jazoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAvL2JvcmRlcjogJzAuNXB4IHNvbGlkICM1QTVBNUEnLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygzKSxcblxuICAgIG9wYWNpdHk6ICcxICFpbXBvcnRhbnQnLFxuICB9LFxuICBib3hDdHJsOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICM1QTVBNUEnLFxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygyLjUpLFxuICAgIC8vcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcbiAgICAvL21hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgLy9tYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygzKSxcblxuICAgIG9wYWNpdHk6ICcxICFpbXBvcnRhbnQnLFxuICB9LFxuICBsZWZ0Q2xpY2tXcmFwcGVyOiB7XG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICB9LFxuICBzZWNvbmRFbnNlbWJsZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1pbldpZHRoOiAnMzAlJyxcbiAgfSxcbiAgbGFzdEVuc2VtYmxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWluV2lkdGg6ICcyNy41JScsXG4gIH0sXG4gIGZpcnN0QmxvY2tNb2RhbDoge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgdGlwc0J1dHRvbjoge1xuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMCksXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgIHBhZGRpbmdSaWdodDogMCxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcbiAgfSxcbiAgc3R5bGVMYWJlbFRpcHM6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gICAgY29sb3I6ICdyZ2JhKDE1MCwgMTUwLCAxNTAsIDEpJyxcbiAgfSxcbiAgc3R5bGVMYWJlbE5leHQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgfSxcbiAgZm9vdGVyTW9kYWw6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS41KSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAvLyBtaW5XaWR0aDogJzEwMCUnLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoU2V0dGluZ3MpO1xuIiwiZXhwb3J0IGNvbnN0IE9QVElNQUxfTlVNQkVSX1RBQlMgPSAndGFyZ2V0X3RhYnMnO1xuZXhwb3J0IGNvbnN0IFBPTElDWSA9ICdwb2xpY3knO1xuZXhwb3J0IGNvbnN0IElOQUNUSVZFX1BPTElDWSA9ICdpbmFjdGl2ZV9wb2xpY3knO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTZXR0aW5ncyhzZXR0aW5ncykge1xuICBpZiAoc2V0dGluZ3NbUE9MSUNZXVtPUFRJTUFMX05VTUJFUl9UQUJTXSAmJiBzZXR0aW5nc1tQT0xJQ1ldW09QVElNQUxfTlVNQkVSX1RBQlNdID4gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiY29uc3QgU0NPUkVSID0gJ3YxJzsgLy8gb25seSBkZWZhdWx0IGltcGxlbWVudGVkXG5jb25zdCBNQVhJTVVNX1NDT1JFID0gMTA7IC8vIG1heCBzY29yZSBmb3Igc2NvcmVyXG5jb25zdCBNQVhJTVVNX0hJU1RPUllfU0laRSA9IDEwMDA7IC8vIG1heCBraWxsZWQgdGFiIGhpc3RvcnkgaW4gbWVtb3J5XG5jb25zdCBTRVNTSU9OU19USU1FT1VUX01TID0gMjAwOyAvLyB3aGVuIGEgdGFiIGlzIGtpbGxlZCB3ZSBuZWVkIGEgdGltZW91dCB0byByZXRyaWV2ZSB0aGUgc2Vzc2lvbklkXG5jb25zdCBTRVNTSU9OU19SRVRSSUVTID0gNTsgLy8gaG93IG1hbnkgdHJpZXMgdG8gcmV0cmlldmUgdGhlIHNlc3Npb24gSUQgb2YgYSBraWxsZWQgdGFiXG5jb25zdCBTRVNTSU9OU19NQVhfRlVaWllfREVMVEFfTVMgPSAxMDAwICogNTsgLy8gdGltZSBpcyBmdXp6eSBtYXRjaGVkIHRvIHJldGlyZXZlIHRoZSBjb3JyZWN0IHNlc3Npb25JRCwgc2hvdWxkIGJlIGhpZ2hlciB0aGFuIFNFU1NJT05TX1RJTUVPVVRfTVNcbmNvbnN0IE1JTl9BQ1RJVkVfREVCT1VOQ0UgPSAxMDAwICogMjsgLy8gbWluaW11bSBhY3RpdmUgcmVhZGluZyBvbiBhIHRhYiB0byBiZSBjb3VudGVkIGFzIHZhbGlkICd1c2VmdWwnIHRpbWVcbmNvbnN0IE1BWF9BQ1RJVkVfREVCT1VOQ0UgPSAxMDAwICogNjAgKiA1OyAvLyBtYXhpbXVtIHRpbWUgd2l0aG91dCBhbnkgdXNlciBpbnB1dCBiZWZvcmUgaXQgaXMgY29uc2lkZXJlZCBpZGxlZCwgbXVzdCBiZSBoaWdoZXIgdGhhbiAxNXNlY1xuY29uc3QgRlJPTlRFTkRfU0tFTEVUT05fRElTUExBWSA9IDMzMDsgLy8gaG93IGxvbmcgdG8gZGlzcGxheSB0aGUgZmFrZSBkaXNwbGF5IGluIG1zXG5cbmV4cG9ydCB7XG4gIFNDT1JFUixcbiAgTUFYSU1VTV9TQ09SRSxcbiAgTUFYSU1VTV9ISVNUT1JZX1NJWkUsXG4gIFNFU1NJT05TX1RJTUVPVVRfTVMsXG4gIFNFU1NJT05TX1JFVFJJRVMsXG4gIFNFU1NJT05TX01BWF9GVVpaWV9ERUxUQV9NUyxcbiAgTUlOX0FDVElWRV9ERUJPVU5DRSxcbiAgTUFYX0FDVElWRV9ERUJPVU5DRSxcbiAgRlJPTlRFTkRfU0tFTEVUT05fRElTUExBWSxcbn07XG4iLCJjb25zdCBSRUxBWEVEID0gJ3JlbGF4ZWQnO1xuY29uc3QgRk9DVVNFRCA9ICdmb2N1c2VkJztcbmNvbnN0IENVU1RPTUlaRUQgPSAnY3VzdG9taXplZCc7XG52YXIgSU5JVF9SRUxBWEVEX1BST0ZJTEUgPSB7fTtcbnZhciBJTklUX0ZPQ1VTRURfUFJPRklMRSA9IHt9O1xuXG5pZiAoRU5WID09PSAnZGVidWcnKSB7XG4gIElOSVRfUkVMQVhFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxICogMTAwMCwgLy8gbWluaW11bSB0aW1lIGJldHdlZW4gMiBmdWxsIHN0YXRzIHVwZGF0ZSBmb3IgYWxsIHRhYnNcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiA1ICogMTAwMCwgLy8gbWluaW11bSB0aW1lIGJldHdlZW4gMiBmdWxsIHRhYiBnYXJiYWdlIGNvbGxlY3Rpb25cbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgdGFyZ2V0X3RhYnM6IDEyLCAvLyB0YWJieSB3aWxsIHN0b3AgY2xvc2luZyB0YWJzIHdoZW4gd2UgaGF2ZSBsZXNzIHRoYW4gdGFyZ2V0X3RhYnMgb3BlblxuICAgICAgZGVjYXk6IDAuOCwgLy8gd2hlbiB0aGUgbnVtYmVyIG9mIHRhYiBpbmNyZWFzZXMsIHRhYmJ5IHdpbGwgZGVsZXRlIG1vcmUgdGFic1xuICAgICAgbWluX3RpbWU6IDMgKiAxMDAwLCAvLyBUYWJieSB3aWxsIGtpbGwgYWJvdXQgMSB0YWIgcGVyIG1pbl90aW1lIChkZXBlbmRpbmcgb24gYWN0aXZhdGlvbiBydWxlcylcblxuICAgICAgLy8gSUdOT1JFRCB0YWJzXG4gICAgICBhY3RpdmU6IGZhbHNlLCAvLyB0aGVzZSBzdGF0dXMgYXJlIGFic29sdXRlbHkgcHJvdGVjdGVkIHRhYnM6IHRoZXNlIGFyZSBpZ25vcmVkIGFuZCBkbyBub3QgY291bnQgYXMgdGFicy5cbiAgICAgIHBpbm5lZDogdHJ1ZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICAvLyBQUk9URUNURUQgdGFic1xuICAgICAgYWN0aXZlOiB0cnVlLCAvLyB0aGVzZSB0YWJzIHdpbGwgYmUgZ2l2ZW4gYWJzb2x1dGUgbWF4aW11bSBzY29yZSArIGV4dGVuZGVkIHByb3RlY3Rpb25cbiAgICAgIHBpbm5lZDogdHJ1ZSwgLy8gd2hlbiB0aGUgc3RhdHVzIGlzIGxvc3QuXG4gICAgICBhdWRpYmxlOiB0cnVlLFxuXG4gICAgICBtaW5fYWN0aXZlOiA1ICogMTAwMCwgLy8gbWluaW11bSB0aW1lIGEgdGFiIGhhcyB0byBleGlzdCBiZWZvcmUgYmVpbmcgc2NvcmVkXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogMTAwMCwgLy8gQSByZXN0b3JlZCB0YWIgaXMgcHJvdGVjdGVkIGZvciB0aGlzIGxvbmdcbiAgICAgIGNhY2hlZF9kZWNheTogMC4yLCAvLyBJbiBjdXJyZW50IHNjb3JlciwgdGhlIGNhY2hlIHNjb3JlIGlzIGFkZGVkIHRvIHRoZSBjdXJyZW50IHNjb3JlIHdpdGggYSBkZWNyZWFzaW5nIGZhY3RvclxuICAgIH0sXG4gIH07XG5cbiAgSU5JVF9GT0NVU0VEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEgKiAxMDAwLFxuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDUgKiAxMDAwLFxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICB0YXJnZXRfdGFiczogNSxcbiAgICAgIGRlY2F5OiAwLjgsXG4gICAgICBtaW5fdGltZTogMyAqIDEwMDAsXG5cbiAgICAgIC8vIElHTk9SRUQgdGFic1xuICAgICAgYWN0aXZlOiBmYWxzZSwgLy8gdGhlc2Ugc3RhdHVzIGFyZSBhYnNvbHV0ZWx5IHByb3RlY3RlZCB0YWJzOiB0aGVzZSBhcmUgaWdub3JlZCBhbmQgZG8gbm90IGNvdW50IGFzIHRhYnMuXG4gICAgICBwaW5uZWQ6IHRydWUsXG4gICAgICBhdWRpYmxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHNjb3Jlcjoge1xuICAgICAgLy8gUFJPVEVDVEVEIHRhYnNcbiAgICAgIGFjdGl2ZTogdHJ1ZSwgLy8gdGhlc2UgdGFicyB3aWxsIGJlIGdpdmVuIGFic29sdXRlIG1heGltdW0gc2NvcmUgKyBleHRlbmRlZCBwcm90ZWN0aW9uXG4gICAgICBwaW5uZWQ6IHRydWUsIC8vIHdoZW4gdGhlIHN0YXR1cyBpcyBsb3N0LlxuICAgICAgYXVkaWJsZTogdHJ1ZSxcblxuICAgICAgbWluX2FjdGl2ZTogNSAqIDEwMDAsXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogMTAwMCxcbiAgICAgIGNhY2hlZF9kZWNheTogMC4yLFxuICAgIH0sXG4gIH07XG59IGVsc2Uge1xuICBJTklUX1JFTEFYRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMTAgKiAxMDAwLFxuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDEwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICB0YXJnZXRfdGFiczogMTIsXG4gICAgICBkZWNheTogMC45LFxuICAgICAgbWluX3RpbWU6IDQ1ICogMTAwMCxcblxuICAgICAgLy8gSUdOT1JFRCB0YWJzXG4gICAgICBhY3RpdmU6IGZhbHNlLCAvLyB0aGVzZSBzdGF0dXMgYXJlIGFic29sdXRlbHkgcHJvdGVjdGVkIHRhYnM6IHRoZXNlIGFyZSBpZ25vcmVkIGFuZCBkbyBub3QgY291bnQgYXMgdGFicy5cbiAgICAgIHBpbm5lZDogdHJ1ZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICAvLyBQUk9URUNURUQgdGFic1xuICAgICAgYWN0aXZlOiB0cnVlLCAvLyB0aGVzZSB0YWJzIHdpbGwgYmUgZ2l2ZW4gYWJzb2x1dGUgbWF4aW11bSBzY29yZSArIGV4dGVuZGVkIHByb3RlY3Rpb25cbiAgICAgIHBpbm5lZDogdHJ1ZSwgLy8gd2hlbiB0aGUgc3RhdHVzIGlzIGxvc3QuXG4gICAgICBhdWRpYmxlOiB0cnVlLFxuXG4gICAgICBtaW5fYWN0aXZlOiA1ICogNjAgKiAxMDAwLFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDYwICogMTAwMCxcbiAgICAgIGNhY2hlZF9kZWNheTogMC4yLFxuICAgIH0sXG4gIH07XG5cbiAgSU5JVF9GT0NVU0VEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEwICogMTAwMCxcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiAxMCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgdGFyZ2V0X3RhYnM6IDUsXG4gICAgICBkZWNheTogMC45LFxuICAgICAgbWluX3RpbWU6IDQ1ICogMTAwMCxcblxuICAgICAgLy8gSUdOT1JFRCB0YWJzXG4gICAgICBhY3RpdmU6IGZhbHNlLCAvLyB0aGVzZSBzdGF0dXMgYXJlIGFic29sdXRlbHkgcHJvdGVjdGVkIHRhYnM6IHRoZXNlIGFyZSBpZ25vcmVkIGFuZCBkbyBub3QgY291bnQgYXMgdGFicy5cbiAgICAgIHBpbm5lZDogdHJ1ZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICAvLyBQUk9URUNURUQgdGFic1xuICAgICAgYWN0aXZlOiB0cnVlLCAvLyB0aGVzZSB0YWJzIHdpbGwgYmUgZ2l2ZW4gYWJzb2x1dGUgbWF4aW11bSBzY29yZSArIGV4dGVuZGVkIHByb3RlY3Rpb25cbiAgICAgIHBpbm5lZDogdHJ1ZSwgLy8gd2hlbiB0aGUgc3RhdHVzIGlzIGxvc3QuXG4gICAgICBhdWRpYmxlOiB0cnVlLFxuXG4gICAgICBtaW5fYWN0aXZlOiA1ICogNjAgKiAxMDAwLFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDYwICogMTAwMCxcbiAgICAgIGNhY2hlZF9kZWNheTogMC4yLFxuICAgIH0sXG4gIH07XG59XG5cbk9iamVjdC5mcmVlemUoSU5JVF9GT0NVU0VEX1BST0ZJTEUpO1xuT2JqZWN0LmZyZWV6ZShJTklUX1JFTEFYRURfUFJPRklMRSk7XG5cbmV4cG9ydCB7IFJFTEFYRUQsIEZPQ1VTRUQsIENVU1RPTUlaRUQsIElOSVRfRk9DVVNFRF9QUk9GSUxFLCBJTklUX1JFTEFYRURfUFJPRklMRSB9O1xuIiwiY29uc3QgUFJPVEVDVEVEX1VSTCA9IFtcbiAgJ21lZXQuZ29vZ2xlLmNvbS8nLFxuICAnem9vbS51cy93Yy8nLFxuICAnd2ViLnNreXBlLmNvbS8nLFxuICAnaGFuZ291dHMuZ29vZ2xlLmNvbS9jYWxsLycsXG4gICdzZWN1cmUuam9pbi5tZS8nLFxuICAnLndlYmV4LmNvbS93ZWJhcHBuZy9zaXRlcy8nLFxuICAnYmx1ZWplYW5zLmNvbS8nLFxuICAnZ2xvYmFsLmdvdG9tZWV0aW5nLmNvbS9qb2luLycsXG4gICd3aGVyZWJ5LmNvbS8nLFxuXTtcblxuY29uc3QgTk9fUkVTVE9SRV9VUkwgPSBbJ2Fib3V0OmRlYnVnZ2luZyddO1xuXG5leHBvcnQgeyBQUk9URUNURURfVVJMLCBOT19SRVNUT1JFX1VSTCB9O1xuIiwiaW1wb3J0ICogYXMgcHNsIGZyb20gJ3BzbCc7XG5pbXBvcnQgKiBhcyBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBNQVhfQUNUSVZFX0RFQk9VTkNFIH0gZnJvbSAnLi4vY29uZmlnL2Vudi5qcyc7XG5cbmNvbnN0IGxvZ2dlciA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gIGlmIChFTlYgPT09ICdkZWJ1ZycgfHwgRU5WID09PSAnZGV2Jykge1xuICAgIGxldCBkZWZhdWx0X2Zvcm1hdCA9IFsnZm9udC13ZWlnaHQ6aW5pdGlhbDsgY29sb3I6YmxhY2s7J107XG4gICAgbGV0IHByZSA9ICclYycgKyBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkgKyAnJWMnO1xuICAgIGxldCBvcHRpb25zID0gWydmb250LXdlaWdodDpsaWdodGVyOyBjb2xvcjpMaWdodFNsYXRlR3JleTsnXTtcbiAgICBvcHRpb25zLnB1c2goZGVmYXVsdF9mb3JtYXQpO1xuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHByZSArPSAnIHwgJWMnICsgYXJnc1swXS5jb25zdHJ1Y3Rvci5uYW1lICsgJyVjIHwgJztcbiAgICAgIHByZSArPSBhcmdzWzFdO1xuICAgICAgb3B0aW9ucy5wdXNoKCdjb2xvcjojMWRhODdjOyBmb250LXdlaWdodDpib2xkZXInKTtcbiAgICAgIG9wdGlvbnMucHVzaChkZWZhdWx0X2Zvcm1hdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZSArPSAnIHwgJyArIGFyZ3NbMF07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHByZSwgLi4ub3B0aW9ucyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNvcHkob2JqKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG5mdW5jdGlvbiB0aW1lb3V0KG1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5mdW5jdGlvbiBnZXREb21haW4oc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBzbC5wYXJzZShuZXcgVVJMKHN0cikuaG9zdG5hbWUpLmRvbWFpbjtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIC9eXFxkKyQvLnRlc3QodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZXRBbGxSZWFkQmFkZ2UoKSB7XG4gIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiAnJyB9KTsgLy8gPC0tIHNldCB0ZXh0IHRvICcnIHRvIHJlbW92ZSB0aGUgYmFkZ2Vcbn1cblxuZnVuY3Rpb24gc2V0VW5yZWFkQmFkZ2UoKSB7XG4gIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7IGNvbG9yOiBbMjI5LCA5MiwgMCwgMTI4XSB9KTtcbiAgYnJvd3Nlci5icm93c2VyQWN0aW9uLmdldEJhZGdlVGV4dCh7fSkudGhlbihmdW5jdGlvbiAoYmFkZ2VUZXh0KSB7XG4gICAgbGV0IGNvdW50ZXIgPSAxO1xuICAgIGlmIChpc0ludGVnZXIoYmFkZ2VUZXh0KSkge1xuICAgICAgY291bnRlciA9IHBhcnNlSW50KGJhZGdlVGV4dCkgKyAxO1xuICAgIH1cbiAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogYCR7Y291bnRlcn1gIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNVc2VyQWN0aXZlKCkge1xuICAvLyBOb3QgY29tcGF0aWJsZSB3aXRoIFNhZmFyaVxuICByZXR1cm4gYnJvd3Nlci5pZGxlLnF1ZXJ5U3RhdGUoTWF0aC5yb3VuZChNQVhfQUNUSVZFX0RFQk9VTkNFIC8gMTAwMCkpLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09ICdhY3RpdmUnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dnZXIoXCJDb3VsZG4ndCBjaGVjayB1c2VyIGFjdGl2aXR5LlwiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0b3JhZ2VSZXNldCgpIHtcbiAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbFxuICAgIC5nZXQobnVsbClcbiAgICAudGhlbigoZCkgPT4ge1xuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5yZW1vdmUoT2JqZWN0LmtleXMoZCkpO1xuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgbG9nZ2VyKCdNZW1vcnkgZmx1c2hlZC4nKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdEZvY3VzZWRXaW5kb3coKSB7XG4gIC8vIHdpbmRvd1R5cGUgaXMgZGVwcmVjYXRlZCBpbiBGRiwgaXQgZG9lc24ndCBzZWVtIGNyaXRpY2FsIGFueXdheXNcbiAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCh7IHBvcHVsYXRlOiBmYWxzZSB9KS50aGVuKChkKSA9PiB7XG4gICAgcmV0dXJuIGQuaWQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtKGFyciwgdmFsdWUpIHtcbiAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZih2YWx1ZSk7XG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuY29uc3QgcmV0cnlQcm9taXNlID0gKGZ1bmMsIGRlbGF5LCB0aW1lcykgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJldHVybiBmdW5jKClcbiAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICBpZiAocmVhc29uID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZXMgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRpbWVvdXQoZGVsYXkpXG4gICAgICAgICAgICAudGhlbihyZXRyeVByb21pc2UuYmluZChudWxsLCBmdW5jLCBkZWxheSwgdGltZXMgLSAxKSlcbiAgICAgICAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVqZWN0KHJlYXNvbik7XG4gICAgICB9KTtcbiAgfSk7XG5cbmxvZ2dlcignU3RhcnRpbmcgaW4gJyArIEVOViArICcgZW52LicpO1xuZXhwb3J0IHtcbiAgbG9nZ2VyLFxuICBjb3B5LFxuICB0aW1lb3V0LFxuICByZXRyeVByb21pc2UsXG4gIGdldERvbWFpbixcbiAgc2V0QWxsUmVhZEJhZGdlLFxuICBzZXRVbnJlYWRCYWRnZSxcbiAgaXNJbnRlZ2VyLFxuICBpc1VzZXJBY3RpdmUsXG4gIHN0b3JhZ2VSZXNldCxcbiAgZ2V0TGFzdEZvY3VzZWRXaW5kb3csXG4gIHJlbW92ZUl0ZW0sXG59O1xuaWYgKEVOViA9PT0gJ2RlYnVnJykge1xuICB3aW5kb3cudXRpbHMgPSB7XG4gICAgbG9nZ2VyLFxuICAgIGNvcHksXG4gICAgdGltZW91dCxcbiAgICByZXRyeVByb21pc2UsXG4gICAgZ2V0RG9tYWluLFxuICAgIHNldEFsbFJlYWRCYWRnZSxcbiAgICBzZXRVbnJlYWRCYWRnZSxcbiAgICBpc0ludGVnZXIsXG4gICAgaXNVc2VyQWN0aXZlLFxuICAgIHN0b3JhZ2VSZXNldCxcbiAgICBnZXRMYXN0Rm9jdXNlZFdpbmRvdyxcbiAgICByZW1vdmVJdGVtLFxuICB9O1xufVxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIWJvb3RzdHJhcC1jc3Mtb25seS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FyZC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWI5ZTc0O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmJvbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG46Zm9jdXMge291dGxpbmU6MCAhaW1wb3J0YW50O31cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwb3B1cFwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9hcHAvcG9wdXAuanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2xvZGFzaF9sb2Rhc2hfanMtbm9kZV9tb2R1bGVzX3BzbF9pbmRleF9qcy1ub2RlX21vZHVsZXNfd2ViZXh0ZW5zaW9uLXBvbC0zNTdhNGRcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfVHlwb2dyYXBoeV9UeXBvZ3JhcGh5X2pzLW5vZGVfbW9kdWxlc19tYXRlcmlhbC11aV9jb3JlXy1lMTlkYjlcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSAoKSA9PiB7XG5cbn07XG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIHJlc2V0IHN0YXJ0dXAgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIG1vcmUgc3RhcnR1cCBjb2RlIGlzIGFkZGVkXG5cdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHR9XG5cdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbM107XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuXHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcblx0fVxuXG5cdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3Rcblx0aWYoZXhlY3V0ZU1vZHVsZXMpIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuXG5cdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbn07XG5cbnZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wdGtfY2hyb21lXCJdID0gd2luZG93W1wid2VicGFja0pzb25wdGtfY2hyb21lXCJdIHx8IFtdO1xudmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbmpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xudmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uOyIsIi8vIHJ1biBzdGFydHVwXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9