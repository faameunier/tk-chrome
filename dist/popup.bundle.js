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
/* harmony import */ var _services_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils.js */ "./src/services/utils.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/Skeleton.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ErrorOutline */ "./node_modules/@material-ui/icons/ErrorOutline.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui-search-bar */ "./node_modules/material-ui-search-bar/lib/index.js");


















const RESTORE = 'RESTORE';
const SHELL_RESTORE = 'SHELL_RESTORE';
const CLOSED_HISTORY = 'closed_history';
const NUMBER_HOURS_DAY = 24;
const TIME_PERIOD_24H = 3600000 * NUMBER_HOURS_DAY; // in microsecond

const TIME_PERIOD_72H = 3600000 * NUMBER_HOURS_DAY * 3; // in microsecond

const FULL_SKELETON = false;

class Home extends react__WEBPACK_IMPORTED_MODULE_5__.PureComponent {
  constructor(props) {
    super(props);
    (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_3__.setAllReadBadge)();

    if (props.skeleton) {
      this.state = {
        closed_history: [],
        loading: true
      };
      (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_3__.timeout)(_config_env_js__WEBPACK_IMPORTED_MODULE_2__.FRONTEND_SKELETON_DISPLAY).then(() => {
        (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_3__.logger)(this, 'Displaying list');
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
        closed_history
      });
    });

    this.onChangedCallback = function (changes) {
      const changesClosedHistory = changes[CLOSED_HISTORY];

      if (changesClosedHistory) {
        this.setState({
          closed_history: changesClosedHistory['newValue'],
          searchValue: ''
        });
      }
    }.bind(this);
  }

  componentDidMount() {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_3__.setAllReadBadge)();
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
    (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_3__.logger)(this, messageType + ' for tab ' + restoredTab.uuid);
    const closed_history = this.state.closed_history.filter(item => item.uuid !== restoredTab.uuid);
    this.setState({
      closed_history: closed_history
    });
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

  renderList() {
    const {
      classes
    } = this.props; // keep elements only in time-frame

    let selectedList = this.state.closed_history ? this.filterList(this.state.closed_history, TIME_PERIOD_72H) : []; // list enrichment

    selectedList = selectedList.map(website => {
      if (typeof website !== 'undefined') {
        const deletionTime = new Date(website.deletion_time);
        website.hours_minutes_format = moment__WEBPACK_IMPORTED_MODULE_4___default()(deletionTime).format('HH:mm');
        website.date = moment__WEBPACK_IMPORTED_MODULE_4___default()(deletionTime).startOf('date');
        website.truncated_url = website.url;
      }

      return website;
    }); // keeping only websites that match search criteria

    if (typeof this.state.searchValue !== 'undefined' && this.state.searchValue.length > 0) {
      const searchPattern = new RegExp(this.state.searchValue.split(' ').map(term => `(?=.*${term})`).join(''), 'i');
      selectedList = selectedList.filter(option => option.title.match(searchPattern) || option.url.match(searchPattern));
    }

    const totalLength = selectedList.length;
    selectedList = selectedList.reverse();
    let current = moment__WEBPACK_IMPORTED_MODULE_4___default()().startOf('date');
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
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
          key: index,
          style: style
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__.default, {
          ContainerComponent: "div"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__.default, {
          primary: `${website.text} ${website.day}`,
          classes: {
            primary: classes.primaryTitleContainer
          },
          className: classes.listTitleText
        })));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        key: index,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_8__.default, {
        ContainerComponent: "div"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: classes.gridAvatarWithTime
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
        className: classes.timeDisplay
      }, this.state.loading && FULL_SKELETON ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_11__.default, {
        width: "3em"
      }) : `${website.hours_minutes_format}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_12__.default, null, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_11__.default, {
        variant: "circle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__.default, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__.default, {
        variant: "square",
        alt: website.title,
        src: website.favIconUrl ? website.favIconUrl : 'error',
        className: classes.avatarContainer
      }))), this.state.loading && FULL_SKELETON ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_11__.default, {
        width: "15em"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_11__.default, {
        width: "10em"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_9__.default, {
        primary: website.truncated_url,
        secondary: website.title,
        classes: {
          primary: classes.primaryTextContainer,
          secondary: classes.secondaryTextContainer
        },
        className: classes.itemText
      }), this.state.loading && FULL_SKELETON ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_14__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: classes.buttonContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__.default, {
        size: "small",
        onClick: this.removeItem.bind(this, myFilteredList, index),
        variant: "outlined",
        color: "secondary",
        className: classes.button
      }, 'Restore')))));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: classes.listWebsites
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(material_ui_search_bar__WEBPACK_IMPORTED_MODULE_7__.default, {
      placeholder: "Search on last 72h",
      onChange: this.searchOnChange.bind(this),
      onRequestSearch: this.searchOnRequestSearch.bind(this),
      onCancelSearch: this.searchOnCancel.bind(this),
      value: this.state.searchValue,
      className: classes.searchBar
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: classes.list
    }, selectedList.length === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_window__WEBPACK_IMPORTED_MODULE_6__.FixedSizeList, {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      variant: "h3",
      className: classes.title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
      className: classes.boldNumber
    }, numberClosedTabsLastHour ? numberClosedTabsLastHour : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: classes.textOnRight
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
      className: classes.topText
    }, ' ', "tab", numberClosedTabsLastHour <= 1 ? '' : 's', " closed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
      className: classes.middleText
    }, " in the last ", `${NUMBER_HOURS_DAY} hours`, " "))), this.renderList.bind(this)(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: classes.footerContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_16__.default, {
      color: "secondary",
      className: classes.iconContainer
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_17__.default, {
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
        settings[path][parameter] = parseInt(nextValue);
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

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

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
/******/ 			["./src/app/popup.js","vendors-node_modules_lodash_lodash_js-node_modules_psl_index_js-node_modules_webextension-pol-357a4d","vendors-node_modules_material-ui_core_Typography_Typography_js-node_modules_material-ui_core_-72aae1"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9lbnYuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9zZXJ2aWNlcy91dGlscy5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy9Vc2Vycy9mcmFuY29pcy5tZXVuaWVyL3Byb2plY3RzL3RrLWNocm9tZS9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZXxzeW5jfC9eXFwuXFwvLiokLyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3M/ZWE1ZCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJBcHAiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSRVNUT1JFIiwiU0hFTExfUkVTVE9SRSIsIkNMT1NFRF9ISVNUT1JZIiwiTlVNQkVSX0hPVVJTX0RBWSIsIlRJTUVfUEVSSU9EXzI0SCIsIlRJTUVfUEVSSU9EXzcySCIsIkZVTExfU0tFTEVUT04iLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZXRBbGxSZWFkQmFkZ2UiLCJza2VsZXRvbiIsInN0YXRlIiwiY2xvc2VkX2hpc3RvcnkiLCJsb2FkaW5nIiwidGltZW91dCIsIkZST05URU5EX1NLRUxFVE9OX0RJU1BMQVkiLCJ0aGVuIiwibG9nZ2VyIiwic2V0U3RhdGUiLCJicm93c2VyIiwicmVzdWx0Iiwib25DaGFuZ2VkQ2FsbGJhY2siLCJjaGFuZ2VzIiwiY2hhbmdlc0Nsb3NlZEhpc3RvcnkiLCJzZWFyY2hWYWx1ZSIsImJpbmQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlSXRlbSIsImxpc3RJdGVtcyIsImtleSIsImUiLCJjdHJsS2V5IiwibWV0YUtleSIsInJlc3RvcmVUYWIiLCJpdGVtcyIsIm1lc3NhZ2VUeXBlIiwicmVzdG9yZWRUYWIiLCJ1dWlkIiwiZmlsdGVyIiwiaXRlbSIsInNlYXJjaE9uQ2hhbmdlIiwidmFsdWUiLCJzZWFyY2hPblJlcXVlc3RTZWFyY2giLCJldmVudCIsInNlYXJjaE9uQ2FuY2VsIiwiZmlsdGVyTGlzdCIsInNlbGVjdGVkTGlzdCIsImVuZFBlcmlvZCIsIm5vdyIsIkRhdGUiLCJkZWxldGlvbl90aW1lIiwicmVuZGVyTGlzdCIsImNsYXNzZXMiLCJtYXAiLCJ3ZWJzaXRlIiwiZGVsZXRpb25UaW1lIiwiaG91cnNfbWludXRlc19mb3JtYXQiLCJtb21lbnQiLCJmb3JtYXQiLCJkYXRlIiwic3RhcnRPZiIsInRydW5jYXRlZF91cmwiLCJ1cmwiLCJsZW5ndGgiLCJzZWFyY2hQYXR0ZXJuIiwiUmVnRXhwIiwic3BsaXQiLCJ0ZXJtIiwiam9pbiIsIm9wdGlvbiIsInRpdGxlIiwibWF0Y2giLCJ0b3RhbExlbmd0aCIsInJldmVyc2UiLCJjdXJyZW50IiwibGFzdCIsImkiLCJuZXh0IiwiZGVsdGEiLCJNYXRoIiwibWF4IiwiY2VpbCIsImRpZmYiLCJzcGxpY2UiLCJ0ZXh0IiwiZGF5IiwibGlzdEl0ZW0iLCJteUZpbHRlcmVkTGlzdCIsImluZGV4Iiwic3R5bGUiLCJwcmltYXJ5IiwicHJpbWFyeVRpdGxlQ29udGFpbmVyIiwibGlzdFRpdGxlVGV4dCIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsImF2YXRhckNvbnRhaW5lciIsInByaW1hcnlUZXh0Q29udGFpbmVyIiwic2Vjb25kYXJ5VGV4dENvbnRhaW5lciIsIml0ZW1UZXh0IiwiYnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uIiwibGlzdFdlYnNpdGVzIiwic2VhcmNoQmFyIiwibGlzdCIsIm1pbiIsInJlbmRlciIsIm51bWJlckNsb3NlZFRhYnNMYXN0SG91ciIsImJvbGROdW1iZXIiLCJ0ZXh0T25SaWdodCIsInRvcFRleHQiLCJtaWRkbGVUZXh0IiwiZm9vdGVyQ29udGFpbmVyIiwiaWNvbkNvbnRhaW5lciIsImxpbmtUb0Zvcm0iLCJzdHlsZXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1heEhlaWdodCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwiZ3JlZW5UaXRsZSIsImZvbnRTaXplIiwiYm9yZGVyQm90dG9tIiwibWF4V2lkdGgiLCJsaXN0VGl0bGUiLCJjb2xvciIsInN1YlRleHQiLCJtYXJnaW5Ub3AiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsIm92ZXJmbG93V3JhcCIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsIm1pbldpZHRoIiwibWFyZ2luUmlnaHQiLCJsaXN0Q29udGFpbmVyIiwibWFyZ2luQm90dG9tIiwid2l0aFN0eWxlcyIsIkhvbWVEaXNwYXRjaGVyIiwibmV3VmFsdWUiLCJhcHBCYXJWYWx1ZSIsImZpcnN0TG9hZCIsImRpc3BhdGNoUGFnZSIsImRpc3BsYXlJY29uIiwiaGFuZGxlQ2hhbmdlIiwicm9vdCIsIm5vdGlmaWNhdGlvbiIsInZhcmlhbnRTdWNjZXNzIiwic3VjY2VzcyIsImhvbWVDb250YWluZXIiLCJwYXBlclNoYWRvdyIsImdyaWRMb2dvVGFicyIsImVuc2VtYmxlbG9nbyIsImxvZ29GdWxsIiwiYm94U2hhZG93IiwidGFiIiwibGVmdCIsImFsbFRhYnMiLCJsb2dvQXZhdGFyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiTGlnaHRUb29sdGlwIiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbW1vbiIsIndoaXRlIiwic2hhZG93cyIsIlRvb2x0aXAiLCJTZXR0aW5ncyIsImZvY3VzZWRNb2RlIiwicmVsYXhlZE1vZGUiLCJjdXN0b21pemVkQm9vbCIsInNldHRpbmdzIiwiSU5JVF9GT0NVU0VEX1BST0ZJTEUiLCJmb2N1c2VkV2luZG93SWQiLCJvcGVuTW9kYWwiLCJwcm9maWxlIiwiYWN0aXZlX3Byb2ZpbGUiLCJGT0NVU0VEIiwiUkVMQVhFRCIsIkNVU1RPTUlaRUQiLCJmb2N1c2VkX3dpbmRvd19pZCIsImluYWN0aXZlUG9saWN5IiwiaW5hY3RpdmVfcG9saWN5IiwiY2hhbmdlc1NldHRpbmdzIiwiY2hhbmdlc1Byb2ZpbGUiLCJjaGFuZ2VkSW5hY3RpdmVQb2xpY3kiLCJoYW5kbGVCb29sQ2hhbmdlIiwiY2hhbmdlVHlwZSIsIm5vdGlmeVVzZXIiLCJpbmNsdWRlcyIsImhhbmRsZVN3aXRjaCIsImhhbmRsZVNhdmVQYXJhbWV0ZXJzIiwiY2hlY2tTZXR0aW5ncyIsImVucXVldWVTbmFja2JhciIsInZhcmlhbnQiLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJhdXRvSGlkZUR1cmF0aW9uIiwiaGFuZGxlQ2hhbmdlUGFyYW1ldGVycyIsInBhdGgiLCJwYXJhbWV0ZXIiLCJjb3B5IiwibmV4dFZhbHVlIiwidGFyZ2V0IiwiaXNJbnRlZ2VyIiwicGFyc2VJbnQiLCJ3aW5kb3dJZCIsInB1c2giLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJpbnB1dHNQYXJhbWV0ZXJzIiwibGFiZWwiLCJzb3VyY2UiLCJQT0xJQ1kiLCJPUFRJTUFMX05VTUJFUl9UQUJTIiwiaW5wdXRQcm9wcyIsInN0ZXAiLCJsaXN0SXRlbXNQYXJhbWV0ZXJzIiwidGV4dEZpZWxkIiwibWFpbkJsb2NrIiwic3dpdGNoV3JhcHBlciIsInN3aXRjaENvbnRhaW5lciIsInN0eWxlTGFiZWwiLCJpbnRyb2R1Y3Rpb25CbG9jayIsInBhcmFtZXRlcnNUaXRsZSIsInNldHRpbmdzV3JhcHBlciIsImZpcnN0UHJvZmlsZXNDb250YWluZXIiLCJjaGVja2JveFdyYXBwZXIiLCJmaXJzdEJvb2xlYW5zIiwiaGVscEljb24iLCJjdXN0b21pemVXcmFwcGVyIiwic2V0dGluZ3NCbG9jayIsInNlY29uZGFyeUJ1dHRvbiIsInRpcHNCdXR0b24iLCJzdHlsZUxhYmVsVGlwcyIsIm1vZGFsIiwiQmFja2Ryb3AiLCJpbnZpc2libGUiLCJwYXBlciIsImZpcnN0QmxvY2tNb2RhbCIsInNlY29uZEVuc2VtYmxlIiwibGFzdEVuc2VtYmxlIiwibGVmdENsaWNrV3JhcHBlciIsInN0eWxlTGFiZWxOZXh0IiwiZm9vdGVyTW9kYWwiLCJ2ZXJzaW9uIiwid2l0aFNuYWNrYmFyIiwicG9pbnRlckV2ZW50cyIsIm1pbkhlaWdodCIsInpJbmRleCIsImRyYXdlciIsInBhZGRpbmciLCJvcGFjaXR5IiwiYm94Q3RybCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiSU5BQ1RJVkVfUE9MSUNZIiwiU0NPUkVSIiwiTUFYSU1VTV9TQ09SRSIsIk1BWElNVU1fSElTVE9SWV9TSVpFIiwiU0VTU0lPTlNfVElNRU9VVF9NUyIsIlNFU1NJT05TX1JFVFJJRVMiLCJTRVNTSU9OU19NQVhfRlVaWllfREVMVEFfTVMiLCJNSU5fQUNUSVZFX0RFQk9VTkNFIiwiTUFYX0FDVElWRV9ERUJPVU5DRSIsIklOSVRfUkVMQVhFRF9QUk9GSUxFIiwiRU5WIiwibWVtb3J5IiwiY2FjaGVfc2l6ZSIsIm1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlIiwibWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3IiLCJwb2xpY3kiLCJ0YXJnZXRfdGFicyIsImRlY2F5IiwibWluX3RpbWUiLCJhY3RpdmUiLCJwaW5uZWQiLCJhdWRpYmxlIiwic2NvcmVyIiwibWluX2FjdGl2ZSIsInByb3RlY3Rpb25fdGltZSIsImNhY2hlZF9kZWNheSIsIk9iamVjdCIsImZyZWV6ZSIsImFyZ3MiLCJkZWZhdWx0X2Zvcm1hdCIsInByZSIsInRvVVRDU3RyaW5nIiwib3B0aW9ucyIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwib2JqIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJnZXREb21haW4iLCJzdHIiLCJwc2wiLCJVUkwiLCJob3N0bmFtZSIsImRvbWFpbiIsInRlc3QiLCJzZXRVbnJlYWRCYWRnZSIsImJhZGdlVGV4dCIsImNvdW50ZXIiLCJpc1VzZXJBY3RpdmUiLCJyb3VuZCIsInN0YXR1cyIsInN0b3JhZ2VSZXNldCIsImQiLCJrZXlzIiwiZ2V0TGFzdEZvY3VzZWRXaW5kb3ciLCJwb3B1bGF0ZSIsImlkIiwiYXJyIiwiaW5kZXhPZiIsInJldHJ5UHJvbWlzZSIsImZ1bmMiLCJkZWxheSIsInRpbWVzIiwicmVqZWN0IiwiY2F0Y2giLCJyZWFzb24iLCJ3aW5kb3ciLCJ1dGlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLGlFQUFjLENBQUM7QUFDM0JDLFlBQVUsRUFBRTtBQUNWQyxjQUFVLEVBQUU7QUFERixHQURlO0FBSTNCQyxTQUFPLEVBQUU7QUFDUEMsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRTtBQURHO0FBREo7QUFKa0IsQ0FBRCxDQUE1Qjs7QUFXQSxTQUFTQyxHQUFULEdBQWU7QUFDYixzQkFDRSwyREFBQyw2REFBRDtBQUFrQixTQUFLLEVBQUVQO0FBQXpCLGtCQUNFLDJEQUFDLCtEQUFELE9BREYsRUFDcUIsR0FEckIsQ0FERjtBQUtEOztBQUVEUSx1REFBQSxlQUFnQiwyREFBQyxHQUFELE9BQWhCLEVBQXlCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RTs7Ozs7Ozs7Ozs7Ozs7QUM5UkEsY0FBYyxtQkFBTyxDQUFDLG9JQUE0RDs7QUFFbEY7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsMEdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7VUNuQmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSx1QkFBdUI7V0FDdEM7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSwyQzs7OztVQzVGQTtVQUNBIiwiZmlsZSI6InBvcHVwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWVEaXNwYXRjaGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXInO1xuaW1wb3J0IHsgTXVpVGhlbWVQcm92aWRlciwgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICB9LFxuICBwYWxldHRlOiB7XG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzAwYjlhYScsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxIb21lRGlzcGF0Y2hlciAvPnsnICd9XG4gICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICApO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImltcG9ydCAqIGFzIGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBGUk9OVEVORF9TS0VMRVRPTl9ESVNQTEFZIH0gZnJvbSAnLi4vLi4vY29uZmlnL2Vudi5qcyc7XG5pbXBvcnQgeyBsb2dnZXIsIHRpbWVvdXQsIHNldEFsbFJlYWRCYWRnZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLmpzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvU2tlbGV0b24nO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhcic7XG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBFcnJvck91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FcnJvck91dGxpbmUnO1xuaW1wb3J0IHsgRml4ZWRTaXplTGlzdCBhcyBMaXN0IH0gZnJvbSAncmVhY3Qtd2luZG93JztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnbWF0ZXJpYWwtdWktc2VhcmNoLWJhcic7XG5cbmNvbnN0IFJFU1RPUkUgPSAnUkVTVE9SRSc7XG5jb25zdCBTSEVMTF9SRVNUT1JFID0gJ1NIRUxMX1JFU1RPUkUnO1xuY29uc3QgQ0xPU0VEX0hJU1RPUlkgPSAnY2xvc2VkX2hpc3RvcnknO1xuY29uc3QgTlVNQkVSX0hPVVJTX0RBWSA9IDI0O1xuY29uc3QgVElNRV9QRVJJT0RfMjRIID0gMzYwMDAwMCAqIE5VTUJFUl9IT1VSU19EQVk7IC8vIGluIG1pY3Jvc2Vjb25kXG5jb25zdCBUSU1FX1BFUklPRF83MkggPSAzNjAwMDAwICogTlVNQkVSX0hPVVJTX0RBWSAqIDM7IC8vIGluIG1pY3Jvc2Vjb25kXG5jb25zdCBGVUxMX1NLRUxFVE9OID0gZmFsc2U7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgc2V0QWxsUmVhZEJhZGdlKCk7XG5cbiAgICBpZiAocHJvcHMuc2tlbGV0b24pIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IGNsb3NlZF9oaXN0b3J5OiBbXSwgbG9hZGluZzogdHJ1ZSB9O1xuICAgICAgdGltZW91dChGUk9OVEVORF9TS0VMRVRPTl9ESVNQTEFZKS50aGVuKCgpID0+IHtcbiAgICAgICAgbG9nZ2VyKHRoaXMsICdEaXNwbGF5aW5nIGxpc3QnKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IGNsb3NlZF9oaXN0b3J5OiBbXSwgbG9hZGluZzogZmFsc2UgfTtcbiAgICB9XG4gICAgXG4gICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChbQ0xPU0VEX0hJU1RPUlldKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IGNsb3NlZF9oaXN0b3J5ID0gcmVzdWx0LmNsb3NlZF9oaXN0b3J5IHx8IFtdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlZF9oaXN0b3J5IH0pO1xuICAgIH0pO1xuICAgIHRoaXMub25DaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgY29uc3QgY2hhbmdlc0Nsb3NlZEhpc3RvcnkgPSBjaGFuZ2VzW0NMT1NFRF9ISVNUT1JZXTtcbiAgICAgIGlmIChjaGFuZ2VzQ2xvc2VkSGlzdG9yeSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjbG9zZWRfaGlzdG9yeTogY2hhbmdlc0Nsb3NlZEhpc3RvcnlbJ25ld1ZhbHVlJ10sXG4gICAgICAgICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgc2V0QWxsUmVhZEJhZGdlKCk7XG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0obGlzdEl0ZW1zLCBrZXksIGUpIHtcbiAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgLy8gbWV0YUtleSBpcyBjbWQga2V5IG9uIG1hY1xuICAgICAgdGhpcy5yZXN0b3JlVGFiKGxpc3RJdGVtcywga2V5LCBTSEVMTF9SRVNUT1JFKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXN0b3JlVGFiKGxpc3RJdGVtcywga2V5LCBSRVNUT1JFKTtcbiAgICB9XG4gIH1cblxuICByZXN0b3JlVGFiKGl0ZW1zLCBrZXksIG1lc3NhZ2VUeXBlKSB7XG4gICAgY29uc3QgcmVzdG9yZWRUYWIgPSBpdGVtc1trZXldO1xuICAgIGxvZ2dlcih0aGlzLCBtZXNzYWdlVHlwZSArICcgZm9yIHRhYiAnICsgcmVzdG9yZWRUYWIudXVpZCk7XG4gICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS51dWlkICE9PSByZXN0b3JlZFRhYi51dWlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VkX2hpc3Rvcnk6IGNsb3NlZF9oaXN0b3J5IH0pO1xuICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBtZXNzYWdlVHlwZTogbWVzc2FnZVR5cGUsXG4gICAgICB1dWlkOiByZXN0b3JlZFRhYi51dWlkLFxuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoT25DaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVmFsdWU6IHZhbHVlIH0pO1xuICB9XG5cbiAgc2VhcmNoT25SZXF1ZXN0U2VhcmNoKGV2ZW50KSB7fVxuXG4gIHNlYXJjaE9uQ2FuY2VsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogJycgfSk7XG4gIH1cblxuICBmaWx0ZXJMaXN0KHNlbGVjdGVkTGlzdCwgZW5kUGVyaW9kKSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIG5vdyAtIGl0ZW0uZGVsZXRpb25fdGltZSA8IGVuZFBlcmlvZDtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckxpc3QoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8ga2VlcCBlbGVtZW50cyBvbmx5IGluIHRpbWUtZnJhbWVcbiAgICBsZXQgc2VsZWN0ZWRMaXN0ID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSA/IHRoaXMuZmlsdGVyTGlzdCh0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5LCBUSU1FX1BFUklPRF83MkgpIDogW107XG5cbiAgICAvLyBsaXN0IGVucmljaG1lbnRcbiAgICBzZWxlY3RlZExpc3QgPSBzZWxlY3RlZExpc3QubWFwKCh3ZWJzaXRlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHdlYnNpdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0aW9uVGltZSA9IG5ldyBEYXRlKHdlYnNpdGUuZGVsZXRpb25fdGltZSk7XG4gICAgICAgIHdlYnNpdGUuaG91cnNfbWludXRlc19mb3JtYXQgPSBtb21lbnQoZGVsZXRpb25UaW1lKS5mb3JtYXQoJ0hIOm1tJyk7XG4gICAgICAgIHdlYnNpdGUuZGF0ZSA9IG1vbWVudChkZWxldGlvblRpbWUpLnN0YXJ0T2YoJ2RhdGUnKTtcbiAgICAgICAgd2Vic2l0ZS50cnVuY2F0ZWRfdXJsID0gd2Vic2l0ZS51cmw7XG4gICAgICB9XG4gICAgICByZXR1cm4gd2Vic2l0ZTtcbiAgICB9KTtcblxuICAgIC8vIGtlZXBpbmcgb25seSB3ZWJzaXRlcyB0aGF0IG1hdGNoIHNlYXJjaCBjcml0ZXJpYVxuICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZWFyY2hQYXR0ZXJuID0gbmV3IFJlZ0V4cChcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZVxuICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgLm1hcCgodGVybSkgPT4gYCg/PS4qJHt0ZXJtfSlgKVxuICAgICAgICAgIC5qb2luKCcnKSxcbiAgICAgICAgJ2knXG4gICAgICApO1xuICAgICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0LmZpbHRlcihcbiAgICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLnRpdGxlLm1hdGNoKHNlYXJjaFBhdHRlcm4pIHx8IG9wdGlvbi51cmwubWF0Y2goc2VhcmNoUGF0dGVybilcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgdG90YWxMZW5ndGggPSBzZWxlY3RlZExpc3QubGVuZ3RoO1xuICAgIHNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdC5yZXZlcnNlKCk7XG4gICAgbGV0IGN1cnJlbnQgPSBtb21lbnQoKS5zdGFydE9mKCdkYXRlJyk7XG4gICAgbGV0IGxhc3QgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbmV4dCA9IHNlbGVjdGVkTGlzdFtpXS5kYXRlO1xuICAgICAgbGV0IGRlbHRhID0gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKGN1cnJlbnQuZGlmZihuZXh0LCAnZGF5cycsIHRydWUpKSk7XG4gICAgICBpZiAoZGVsdGEgPiBsYXN0KSB7XG4gICAgICAgIGlmIChkZWx0YSA9PT0gMSkge1xuICAgICAgICAgIHNlbGVjdGVkTGlzdC5zcGxpY2UoaSwgMCwgeyB0ZXh0OiAnWWVzdGVyZGF5IC0gJywgZGF5OiBuZXh0LmZvcm1hdCgnTU1NIEREJykgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVsdGEgPT09IDIpIHtcbiAgICAgICAgICBzZWxlY3RlZExpc3Quc3BsaWNlKGksIDAsIHsgdGV4dDogJ1ByZXZpb3VzIGRheSAtICcsIGRheTogbmV4dC5mb3JtYXQoJ01NTSBERCcpIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdGVkTGlzdC5zcGxpY2UoaSwgMCwgeyB0ZXh0OiAnJywgZGF5OiBuZXh0LmZvcm1hdCgnTU1NIEREJykgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdCA9IGRlbHRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxpc3RJdGVtID0gKG15RmlsdGVyZWRMaXN0KSA9PiAoeyBpbmRleCwgc3R5bGUgfSkgPT4ge1xuICAgICAgY29uc3Qgd2Vic2l0ZSA9IG15RmlsdGVyZWRMaXN0W2luZGV4XTtcbiAgICAgIGlmICh0eXBlb2Ygd2Vic2l0ZS5kYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgPExpc3RJdGVtIENvbnRhaW5lckNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17YCR7d2Vic2l0ZS50ZXh0fSAke3dlYnNpdGUuZGF5fWB9XG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgICAgcHJpbWFyeTogY2xhc3Nlcy5wcmltYXJ5VGl0bGVDb250YWluZXIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFRpdGxlVGV4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgPExpc3RJdGVtIENvbnRhaW5lckNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZEF2YXRhcldpdGhUaW1lfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpbWVEaXNwbGF5fT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIEZVTExfU0tFTEVUT04gPyA8U2tlbGV0b24gd2lkdGg9XCIzZW1cIi8+IDogYCR7d2Vic2l0ZS5ob3Vyc19taW51dGVzX2Zvcm1hdH1gfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJjaXJjbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciAvPlxuICAgICAgICAgICAgICAgICAgPC9Ta2VsZXRvbj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3F1YXJlXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXt3ZWJzaXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e3dlYnNpdGUuZmF2SWNvblVybCA/IHdlYnNpdGUuZmF2SWNvblVybCA6ICdlcnJvcid9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgRlVMTF9TS0VMRVRPTiA/XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIHdpZHRoPVwiMTVlbVwiLz5cbiAgICAgICAgICAgICAgICA8U2tlbGV0b24gd2lkdGg9XCIxMGVtXCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXt3ZWJzaXRlLnRydW5jYXRlZF91cmx9XG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5PXt3ZWJzaXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk6IGNsYXNzZXMucHJpbWFyeVRleHRDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICBzZWNvbmRhcnk6IGNsYXNzZXMuc2Vjb25kYXJ5VGV4dENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtVGV4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIEZVTExfU0tFTEVUT04gP1xuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcywgbXlGaWx0ZXJlZExpc3QsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7J1Jlc3RvcmUnfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0V2Vic2l0ZXN9PlxuICAgICAgICA8U2VhcmNoQmFyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggb24gbGFzdCA3MmhcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlYXJjaE9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25SZXF1ZXN0U2VhcmNoPXt0aGlzLnNlYXJjaE9uUmVxdWVzdFNlYXJjaC5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uQ2FuY2VsU2VhcmNoPXt0aGlzLnNlYXJjaE9uQ2FuY2VsLmJpbmQodGhpcyl9XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEJhcn1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgICAge3NlbGVjdGVkTGlzdC5sZW5ndGggPT09IDAgPyBudWxsIDogKFxuICAgICAgICAgICAgPExpc3QgaGVpZ2h0PXtNYXRoLm1pbig4MCAqIHNlbGVjdGVkTGlzdC5sZW5ndGgsIDMwMCl9IGl0ZW1Db3VudD17c2VsZWN0ZWRMaXN0Lmxlbmd0aH0gaXRlbVNpemU9ezgwfT5cbiAgICAgICAgICAgICAge2xpc3RJdGVtKHNlbGVjdGVkTGlzdCl9XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5XG4gICAgICA/IHRoaXMuZmlsdGVyTGlzdCh0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5LCBUSU1FX1BFUklPRF8yNEgpLmxlbmd0aFxuICAgICAgOiAwO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8ZGl2IHZhcmlhbnQ9XCJoM1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmJvbGROdW1iZXJ9PlxuICAgICAgICAgICAge251bWJlckNsb3NlZFRhYnNMYXN0SG91ciA/IG51bWJlckNsb3NlZFRhYnNMYXN0SG91ciA6IDB9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRPblJpZ2h0fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50b3BUZXh0fT5cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgdGFiXG4gICAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPD0gMSA/ICcnIDogJ3MnfSBjbG9zZWRcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5taWRkbGVUZXh0fT4gaW4gdGhlIGxhc3Qge2Ake05VTUJFUl9IT1VSU19EQVl9IGhvdXJzYH0gPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucmVuZGVyTGlzdC5iaW5kKHRoaXMpKCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlckNvbnRhaW5lcn0+XG4gICAgICAgICAgPEVycm9yT3V0bGluZUljb24gY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn0gLz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvZS8xRkFJcFFMU2RVRUpIZDBiTDZyeUZ2WmsyMjBDb1pwN2N3dkZ4RVNvcnBzN2NuZ2swd1FmeXUtUS92aWV3Zm9ybVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtUb0Zvcm19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQnVnL0ZlZWRiYWNrP1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICB0aXRsZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbWF4SGVpZ2h0OiA0MCxcbiAgfSxcbiAgdGV4dE9uUmlnaHQ6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnc3RhcnQnLFxuICB9LFxuICBncmVlblRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBib3JkZXJCb3R0b206IGAycHggc29saWQgIzAwYjlhYWAsXG4gICAgbWF4V2lkdGg6IDIyNSxcbiAgfSxcbiAgbGlzdFRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIG1heEhlaWdodDogMzAsXG4gIH0sXG5cbiAgYm9sZE51bWJlcjoge1xuICAgIGNvbG9yOiAnI2U1NWMwMCcsXG4gICAgZm9udFNpemU6IDQwLFxuICAgIG1heFdpZHRoOiAnMzAlJyxcbiAgfSxcbiAgbWlkZGxlVGV4dDoge1xuICAgIGZvbnRTaXplOiAxMyxcbiAgfSxcbiAgdG9wVGV4dDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgfSxcbiAgc3ViVGV4dDoge1xuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICB9LFxuICBidXR0b246IHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG1heFdpZHRoOiAyMCxcbiAgfSxcbiAgYnV0dG9uQ29udGFpbmVyOiB7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScgfSxcbiAgaXRlbVRleHQ6IHtcbiAgICBtYXhXaWR0aDogMTg1LFxuICAgIG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ2JyZWFrLXNwYWNlcycsXG5cbiAgICBtYXhIZWlnaHQ6IDYwLFxuICB9LFxuICB0aW1lRGlzcGxheToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTQsXG4gIH0sXG4gIGdyaWRBdmF0YXJXaXRoVGltZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgfSxcbiAgbGlzdFdlYnNpdGVzOiB7XG4gICAgbWFyZ2luVG9wOiAyMCxcbiAgfSxcbiAgZm9vdGVyQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLjI1KSxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICB9LFxuICBsaW5rVG9Gb3JtOiB7XG4gICAgZm9udFNpemU6IDEwLFxuICB9LFxuICBpY29uQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMC4yNSksXG4gICAgZm9udFNpemU6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIGF2YXRhckNvbnRhaW5lcjoge1xuICAgIG1heFdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxuICAgIG1heEhlaWdodDogdGhlbWUuc3BhY2luZyg3KSxcbiAgfSxcbiAgcHJpbWFyeVRleHRDb250YWluZXI6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICBtYXhIZWlnaHQ6IDIyLFxuICB9LFxuICBzZWNvbmRhcnlUZXh0Q29udGFpbmVyOiB7XG4gICAgZm9udFNpemU6IDEzLFxuICB9LFxuICBwcmltYXJ5VGl0bGVDb250YWluZXI6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE2LFxuICB9LFxuXG4gIGxpc3RUaXRsZVRleHQ6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNC41KSxcbiAgfSxcbiAgbGlzdENvbnRhaW5lcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgfSxcbiAgc2VhcmNoQmFyOiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIG1heEhlaWdodDogdGhlbWUuc3BhY2luZyg1KSxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhvbWUpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XG5pbXBvcnQgQXJyb3dCYWNrSW9zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zJztcbmltcG9ydCB7IFNuYWNrYmFyUHJvdmlkZXIgfSBmcm9tICdub3Rpc3RhY2snO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4uL1NldHRpbmdzJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vSG9tZSc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscy5qcyc7XG5cbmNsYXNzIEhvbWVEaXNwYXRjaGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGFwcEJhclZhbHVlOiAnSE9NRScsIGZpcnN0TG9hZDogdHJ1ZSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbG9nZ2VyKHRoaXMsICdQb3B1cCBvcGVuZWQnKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChuZXdWYWx1ZSkgPT4gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBCYXJWYWx1ZTogbmV3VmFsdWUsIGZpcnN0TG9hZDogZmFsc2V9KTtcbiAgICBsb2dnZXIodGhpcywgJ1N3aXRjaCB0byAnICsgbmV3VmFsdWUpO1xuICB9O1xuXG4gIGRpc3BhdGNoUGFnZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUpIHtcbiAgICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgICByZXR1cm4gPEhvbWUgc2tlbGV0b249e3RoaXMuc3RhdGUuZmlyc3RMb2FkfS8+O1xuICAgICAgY2FzZSAnU0VUVElOR1MnOlxuICAgICAgICByZXR1cm4gPFNldHRpbmdzIC8+O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyBpcyBhbiBlcnJvciBwYWdlPC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlJY29uKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUpIHtcbiAgICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UoJ1NFVFRJTkdTJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2V0dGluZ3NJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnU0VUVElOR1MnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UoJ0hPTUUnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQ29udGFpbmVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBcnJvd0JhY2tJb3NJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyBpcyBhbiBlcnJvciBwYWdlPC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTbmFja2JhclByb3ZpZGVyXG4gICAgICAgIG1heFNuYWNrPXsyfVxuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5ub3RpZmljYXRpb24sXG4gICAgICAgICAgdmFyaWFudFN1Y2Nlc3M6IGNsYXNzZXMuc3VjY2VzcyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZUNvbnRhaW5lcn0+XG4gICAgICAgICAgPFBhcGVyIHNxdWFyZT17ZmFsc2V9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclNoYWRvd30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkTG9nb1RhYnN9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90YWJieS51c1wiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5lbnNlbWJsZWxvZ299PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi4vLi4vYXNzZXRzL3N0YXRpYy9pY29ucy90YWJieV8yLnBuZyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvRnVsbH0gLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICB7dGhpcy5kaXNwbGF5SWNvbigpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2Pnt0aGlzLmRpc3BhdGNoUGFnZSgpfTwvZGl2PlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TbmFja2JhclByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZURpc3BhdGNoZXI7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IEhvbWVEaXNwYXRjaGVyIGZyb20gJy4vSG9tZURpc3BhdGNoZXInO1xuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWIvVGFiJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgaG9tZUNvbnRhaW5lcjoge1xuICAgIG1pbldpZHRoOiA0MDAsXG4gIH0sXG4gIHBhcGVyU2hhZG93OiB7XG4gICAgYm94U2hhZG93OiAnMHB4IDBweCAxcHggLTFweCByZ2JhKDAsMCwwLDAuMyksIDBweCAwcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMyksIDBweCAwcHggM3B4IDBweCByZ2JhKDAsMCwwLDAuMyknLFxuICB9LFxuICB0YWI6IHtcbiAgICBjb2xvcjogJyMwMGI5YWEnLFxuICB9LFxuICBub3RpZmljYXRpb246IHtcbiAgICBsZWZ0OiAxNTAsXG4gIH0sXG4gIGdyaWRMb2dvVGFiczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICB9LFxuICBhbGxUYWJzOiB7XG4gICAgbWF4V2lkdGg6ICc3NSUnLFxuICB9LFxuICBlbnNlbWJsZWxvZ286IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdsZWZ0JyxcbiAgfSxcbiAgbG9nb0F2YXRhcjoge1xuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLjI1KSxcbiAgfSxcbiAgbG9nb0Z1bGw6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIuMjUpLFxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDEyKSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS4yNSksXG4gIH0sXG4gIGljb25Db250YWluZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMS41KSxcbiAgfSxcbiAgc3VjY2Vzczoge1xuICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzgwZTBhNywgIzAwYjlhYSknLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZURpc3BhdGNoZXIpO1xuIiwiaW1wb3J0ICogYXMgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5L1R5cG9ncmFwaHknO1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IFR1bmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UdW5lJztcbmltcG9ydCBIZWxwT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hlbHBPdXRsaW5lJztcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5cbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcbmltcG9ydCBGYWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhZGUnO1xuaW1wb3J0IHsgY29weSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLmpzJztcblxuaW1wb3J0IHsgd2l0aFNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCB7IFJFTEFYRUQsIEZPQ1VTRUQsIENVU1RPTUlaRUQsIElOSVRfRk9DVVNFRF9QUk9GSUxFIH0gZnJvbSAnLi4vLi4vY29uZmlnL3NldHRpbmdzUHJvZmlsZXMuanMnO1xuaW1wb3J0IHsgY2hlY2tTZXR0aW5ncywgT1BUSU1BTF9OVU1CRVJfVEFCUywgUE9MSUNZLCBJTkFDVElWRV9QT0xJQ1kgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpc0ludGVnZXIsIHJlbW92ZUl0ZW0gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcblxuY29uc3QgTGlnaHRUb29sdGlwID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XG4gIHRvb2x0aXA6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAxKScsXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgfSxcbn0pKShUb29sdGlwKTtcblxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvY3VzZWRNb2RlOiBmYWxzZSxcbiAgICAgIHJlbGF4ZWRNb2RlOiBmYWxzZSxcbiAgICAgIGN1c3RvbWl6ZWRCb29sOiBmYWxzZSxcbiAgICAgIHNldHRpbmdzOiBJTklUX0ZPQ1VTRURfUFJPRklMRSxcbiAgICAgIGZvY3VzZWRXaW5kb3dJZDogdHJ1ZSxcbiAgICAgIG9wZW5Nb2RhbDogZmFsc2UsXG4gICAgfTtcbiAgICBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KFsnYWN0aXZlX3Byb2ZpbGUnLCAnc2V0dGluZ3MnLCAnZm9jdXNlZF93aW5kb3dfaWQnLCAnaW5hY3RpdmVfcG9saWN5J10pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgcHJvZmlsZSA9IHJlc3VsdC5hY3RpdmVfcHJvZmlsZSB8fCBGT0NVU0VEO1xuICAgICAgY29uc3QgZm9jdXNlZE1vZGUgPSBwcm9maWxlID09PSBGT0NVU0VEO1xuICAgICAgY29uc3QgcmVsYXhlZE1vZGUgPSBwcm9maWxlID09PSBSRUxBWEVEO1xuICAgICAgY29uc3QgY3VzdG9taXplZEJvb2wgPSBwcm9maWxlID09PSBDVVNUT01JWkVEO1xuICAgICAgY29uc3Qgc2V0dGluZ3MgPSByZXN1bHQuc2V0dGluZ3MgfHwgSU5JVF9GT0NVU0VEX1BST0ZJTEU7XG4gICAgICBjb25zdCBmb2N1c2VkV2luZG93SWQgPSByZXN1bHQuZm9jdXNlZF93aW5kb3dfaWQ7XG4gICAgICBjb25zdCBpbmFjdGl2ZVBvbGljeSA9IHJlc3VsdC5pbmFjdGl2ZV9wb2xpY3k7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE1vZGUsXG4gICAgICAgIHJlbGF4ZWRNb2RlLFxuICAgICAgICBjdXN0b21pemVkQm9vbCxcbiAgICAgICAgc2V0dGluZ3MsXG4gICAgICAgIGZvY3VzZWRXaW5kb3dJZCxcbiAgICAgICAgaW5hY3RpdmVQb2xpY3ksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLm9uQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXNTZXR0aW5ncyA9IGNoYW5nZXNbJ3NldHRpbmdzJ107XG4gICAgICBjb25zdCBjaGFuZ2VzUHJvZmlsZSA9IGNoYW5nZXNbJ2FjdGl2ZV9wcm9maWxlJ107XG4gICAgICBjb25zdCBjaGFuZ2VkSW5hY3RpdmVQb2xpY3kgPSBjaGFuZ2VzWydpbmFjdGl2ZV9wb2xpY3knXTtcbiAgICAgIGlmIChjaGFuZ2VzU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2V0dGluZ3M6IGNoYW5nZXNTZXR0aW5nc1snbmV3VmFsdWUnXSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlc1Byb2ZpbGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZm9jdXNlZE1vZGU6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBGT0NVU0VELFxuICAgICAgICAgIHJlbGF4ZWRNb2RlOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gUkVMQVhFRCxcbiAgICAgICAgICBjdXN0b21pemVkQm9vbDogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IENVU1RPTUlaRUQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZWRJbmFjdGl2ZVBvbGljeSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5hY3RpdmVQb2xpY3k6IGNoYW5nZWRJbmFjdGl2ZVBvbGljeVsnbmV3VmFsdWUnXSB9KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGhhbmRsZUJvb2xDaGFuZ2UoY2hhbmdlVHlwZSkge1xuICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBtZXNzYWdlVHlwZTogJ1NFVFRJTkdTX1BST0ZJTEUnLFxuICAgICAgcHJvZmlsZTogY2hhbmdlVHlwZSxcbiAgICB9KTtcbiAgICBpZiAoY2hhbmdlVHlwZSA9PT0gUkVMQVhFRCB8fCBjaGFuZ2VUeXBlID09PSBGT0NVU0VEKSB7XG4gICAgICB0aGlzLm5vdGlmeVVzZXIodHJ1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5LmluY2x1ZGVzKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKSkge1xuICAgICAgdGhpcy5oYW5kbGVTd2l0Y2goKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTYXZlUGFyYW1ldGVycygpIHtcbiAgICAvLyBUT0RPIEFkZCBmdW5jdGlvbiB0byBjaGVjayBmb3IgYWxsIHBvdGVudGlhbCB2YWx1ZXNcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuICAgIGlmIChjaGVja1NldHRpbmdzKHRoaXMuc3RhdGUuc2V0dGluZ3MpKSB7XG4gICAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ1NFVFRJTkdTX1BBUkFNRVRFUlMnLFxuICAgICAgICBzZXR0aW5nczogdGhpcy5zdGF0ZS5zZXR0aW5ncyxcbiAgICAgIH0pO1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubm90aWZ5VXNlcihzdWNjZXNzKTtcbiAgfVxuXG4gIG5vdGlmeVVzZXIoc3VjY2Vzcykge1xuICAgIHRoaXMucHJvcHMuZW5xdWV1ZVNuYWNrYmFyKHN1Y2Nlc3MgPyAnTmV3IFNldHRpbmdzIGFyZSBzYXZlZC4nIDogJ1NldHRpbmdzIGNhbm5vdCBiZSBzYXZlZC4nLCB7XG4gICAgICB2YXJpYW50OiBzdWNjZXNzID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyxcbiAgICAgIGFuY2hvck9yaWdpbjoge1xuICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICB9LFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiA3NTAsXG4gICAgICBhdXRvSGlkZUR1cmF0aW9uOiAxNTAwLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlUGFyYW1ldGVycyhwYXRoLCBwYXJhbWV0ZXIpIHtcbiAgICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgICBsZXQgc2V0dGluZ3MgPSBjb3B5KHRoaXMuc3RhdGUuc2V0dGluZ3MpO1xuICAgICAgY29uc3QgbmV4dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKGlzSW50ZWdlcihuZXh0VmFsdWUpIHx8IG5leHRWYWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2V0dGluZ3NbcGF0aF1bcGFyYW1ldGVyXSA9IHBhcnNlSW50KG5leHRWYWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXR0aW5nczogc2V0dGluZ3MgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVN3aXRjaCgpIHtcbiAgICBsZXQgaW5hY3RpdmVQb2xpY3kgPSB0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5O1xuXG4gICAgaWYgKGluYWN0aXZlUG9saWN5LmluY2x1ZGVzKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKSkge1xuICAgICAgaW5hY3RpdmVQb2xpY3kgPSByZW1vdmVJdGVtKGluYWN0aXZlUG9saWN5LCB0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCk7XG4gICAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ1JFTU9WRV9JTkFDVElWRV9QT0xJQ1knLFxuICAgICAgICB3aW5kb3dJZDogdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5hY3RpdmVQb2xpY3kucHVzaCh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCk7XG4gICAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ0FERF9JTkFDVElWRV9QT0xJQ1knLFxuICAgICAgICB3aW5kb3dJZDogdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluYWN0aXZlUG9saWN5OiBpbmFjdGl2ZVBvbGljeSB9KTtcbiAgfVxuXG4gIGhhbmRsZU9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5Nb2RhbDogdHJ1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuTW9kYWw6IGZhbHNlIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dHNQYXJhbWV0ZXJzID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ09wdGltYWwgdGFicyBudW1iZXInLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgICAgIHBhdGg6IFBPTElDWSxcbiAgICAgICAgcGFyYW1ldGVyOiBPUFRJTUFMX05VTUJFUl9UQUJTLFxuICAgICAgICBpbnB1dFByb3BzOiB7IG1pbjogJzEnLCBtYXg6ICcxMDAnLCBzdGVwOiAnMScgfSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBsaXN0SXRlbXNQYXJhbWV0ZXJzID0gaW5wdXRzUGFyYW1ldGVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVBhcmFtZXRlcnMoaXRlbS5wYXRoLCBpdGVtLnBhcmFtZXRlcikuYmluZCh0aGlzKX1cbiAgICAgICAgdmFsdWU9e2l0ZW0uc291cmNlW2l0ZW0ucGF0aF1baXRlbS5wYXJhbWV0ZXJdfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgb25LZXlVcD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB0aGlzLmhhbmRsZVNhdmVQYXJhbWV0ZXJzKCk7XG4gICAgICAgIH19XG4gICAgICAgIGlucHV0UHJvcHM9e2l0ZW0uaW5wdXRQcm9wc31cbiAgICAgIC8+XG4gICAgKSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5CbG9ja30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCAmJiB0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5XG4gICAgICAgICAgICAgICAgICAgID8gIXRoaXMuc3RhdGUuaW5hY3RpdmVQb2xpY3kuaW5jbHVkZXModGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpXG4gICAgICAgICAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTd2l0Y2guYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN3aXRjaFdyYXBwZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3dpdGNoQ29udGFpbmVyfVxuICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5FbmFibGUgb24gdGhpcyB3aW5kb3c8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW50cm9kdWN0aW9uQmxvY2t9PlxuICAgICAgICAgICAgPFR1bmVJY29uIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFyYW1ldGVyc1RpdGxlfT5TZWxlY3QgeW91ciBwcm9maWxlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NXcmFwcGVyfT5cbiAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9eyd0YWJieSB0ZW5kcyB0byBrZWVwIDUgdGFicyd9IHBsYWNlbWVudD1cImxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RQcm9maWxlc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmZvY3VzZWRNb2RlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUJvb2xDaGFuZ2UuYmluZCh0aGlzLCBGT0NVU0VEKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrYm94V3JhcHBlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+Rm9jdXM8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0Qm9vbGVhbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SGVscE91dGxpbmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWxwSWNvbn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cbiAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9eyd0YWJieSB0ZW5kcyB0byBrZWVwIDEyIHRhYnMnfSBwbGFjZW1lbnQ9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0UHJvZmlsZXNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5yZWxheGVkTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVCb29sQ2hhbmdlLmJpbmQodGhpcywgUkVMQVhFRCl9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveFdyYXBwZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlJlbGF4PC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEhlbHBPdXRsaW5lSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaGVscEljb259IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbWl6ZVdyYXBwZXJ9PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUJvb2xDaGFuZ2UuYmluZCh0aGlzLCBDVVNUT01JWkVEKX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tib3hXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5DdXN0b21pemU8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXR0aW5nc0Jsb2NrfT5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHJlcXVpcmVkIGZ1bGxXaWR0aD5cbiAgICAgICAgICAgICAgICB7bGlzdEl0ZW1zUGFyYW1ldGVyc31cbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaWRkZW4ga2V5PVwiaGlkZGVuLXRleHRmaWVsZFwiIGRpc2FibGVkIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRhcnlCdXR0b259XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlUGFyYW1ldGVycy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU9wZW4uYmluZCh0aGlzKX0gY2xhc3NOYW1lPXtjbGFzc2VzLnRpcHNCdXR0b259PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsVGlwc30+SGVscDwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgLy9kaXNhYmxlUG9ydGFsPXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW5Nb2RhbH1cbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlLmJpbmQodGhpcyl9XG4gICAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cbiAgICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XG4gICAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xuICAgICAgICAgICAgdGltZW91dDogNzUwLFxuICAgICAgICAgICAgaW52aXNpYmxlOiB0cnVlLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8RmFkZSBpbj17dGhpcy5zdGF0ZS5vcGVuTW9kYWx9PlxuICAgICAgICAgICAgPEJveCBib3JkZXJSYWRpdXM9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0QmxvY2tNb2RhbH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kRW5zZW1ibGV9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlByb3RlY3QgYSB0YWI8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXN0RW5zZW1ibGV9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4uLy4uL2Fzc2V0cy9zdGF0aWMvaWNvbnMvcmlnaHRfY2xpY2sucG5nJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnRDbGlja1dyYXBwZXJ9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9Pis8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5QaW48L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRFbnNlbWJsZX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+UmVvcGVuIG11bHRpcGxlIHRhYnM8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZEVuc2VtYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkN0cmw8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9Pis8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi4vLi4vYXNzZXRzL3N0YXRpYy9pY29ucy9sZWZ0X2NsaWNrLnBuZyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0Q2xpY2tXcmFwcGVyfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+SG93IGRvZXMgdGFiYnkgd29yaz88L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxOZXh0fT5cbiAgICAgICAgICAgICAgICB0YWJieSB3aWxsIG5vdCByZW1vdmUgdGFicyByaWdodCBhZnRlciB0aGVpciBjcmVhdGlvbi57JyAnfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxOZXh0fT5cbiAgICAgICAgICAgICAgICB0YWJieSB0YWtlcyB3ZWxsLXRob3VnaHQtb3V0IGRlY2lzaW9ucyBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyTW9kYWx9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3RhYmJ5LnVzL2ZhcVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxUaXBzfT5GQVEgYXZhaWxhYmxlIGhlcmU8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxUaXBzfT5cbiAgICAgICAgICAgICAgICAgIHRhYmJ5IHticm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9ufVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNuYWNrYmFyKFNldHRpbmdzKTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9TZXR0aW5ncyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgc2V0dGluZ3NXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgbWFyZ2luVG9wOiA1LFxuICAgIG1hcmdpbkxlZnQ6IDQ3LFxuICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgfSxcbiAgc2Vjb25kYXJ5QnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiAxOCxcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuXG4gICAgbWF4V2lkdGg6IDIwLFxuICB9LFxuXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIG1heFdpZHRoOiAxNTAsXG4gIH0sXG4gIGludHJvZHVjdGlvbkJsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIG1hcmdpbkxlZnQ6IDcsXG4gIH0sXG4gIHBhcmFtZXRlcnNUaXRsZToge1xuICAgIC8vZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNyxcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBtYXJnaW5MZWZ0OiAxNixcbiAgfSxcbiAgc2V0dGluZ3NCbG9jazoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1hcmdpbkxlZnQ6IDMyLFxuICAgIG1hcmdpblRvcDogNCxcbiAgfSxcbiAgZmlyc3RCb29sZWFuczoge1xuICAgIG1heFdpZHRoOiAnMzYlJyxcbiAgICBtaW5XaWR0aDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICBtYXhIZWlnaHQ6IDIwLFxuICAgIG1hcmdpblRvcDogNSxcbiAgICAvLyBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIH0sXG4gIGZpcnN0UHJvZmlsZXNDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNpbmcoMTApLFxuICB9LFxuXG4gIHN0eWxlTGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gIH0sXG4gIGNoZWNrYm94V3JhcHBlcjoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgfSxcbiAgc3dpdGNoQ29udGFpbmVyOiB7XG4gICAgbWF4SGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgfSxcbiAgc3dpdGNoV3JhcHBlcjoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWF4V2lkdGg6ICc4NSUnLFxuICB9LFxuICBjdXN0b21pemVXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIGFsaWduSXRlbXM6ICdzdGFydCcsXG4gIH0sXG4gIGhlbHBJY29uOiB7XG4gICAgY29sb3I6ICcjZTU1YzAwJyxcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDAuMjUpLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTUwLCAxNTAsIDE1MCwgMC40KScsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcbiAgfSxcbiAgbWFpbkJsb2NrOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxuICBwYXBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIC8vYm9yZGVyOiAnMC41cHggc29saWQgIzVBNUE1QScsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxuXG4gICAgb3BhY2l0eTogJzEgIWltcG9ydGFudCcsXG4gIH0sXG4gIGJveEN0cmw6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzVBNUE1QScsXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDIuNSksXG4gICAgLy9wYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxuICAgIC8vbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcbiAgICAvL21hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxuXG4gICAgb3BhY2l0eTogJzEgIWltcG9ydGFudCcsXG4gIH0sXG4gIGxlZnRDbGlja1dyYXBwZXI6IHtcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG4gIHNlY29uZEVuc2VtYmxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWluV2lkdGg6ICczMCUnLFxuICB9LFxuICBsYXN0RW5zZW1ibGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtaW5XaWR0aDogJzI3LjUlJyxcbiAgfSxcbiAgZmlyc3RCbG9ja01vZGFsOiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICB0aXBzQnV0dG9uOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygwKSxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcGFkZGluZ0xlZnQ6IDAsXG4gICAgcGFkZGluZ1JpZ2h0OiAwLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzdHlsZUxhYmVsVGlwczoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBjb2xvcjogJ3JnYmEoMTUwLCAxNTAsIDE1MCwgMSknLFxuICB9LFxuICBzdHlsZUxhYmVsTmV4dDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygwLjUpLFxuICB9LFxuICBmb290ZXJNb2RhbDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLjUpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIC8vIG1pbldpZHRoOiAnMTAwJScsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShTZXR0aW5ncyk7XG4iLCJleHBvcnQgY29uc3QgT1BUSU1BTF9OVU1CRVJfVEFCUyA9ICd0YXJnZXRfdGFicyc7XG5leHBvcnQgY29uc3QgUE9MSUNZID0gJ3BvbGljeSc7XG5leHBvcnQgY29uc3QgSU5BQ1RJVkVfUE9MSUNZID0gJ2luYWN0aXZlX3BvbGljeSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1NldHRpbmdzKHNldHRpbmdzKSB7XG4gIGlmIChzZXR0aW5nc1tQT0xJQ1ldW09QVElNQUxfTlVNQkVSX1RBQlNdICYmIHNldHRpbmdzW1BPTElDWV1bT1BUSU1BTF9OVU1CRVJfVEFCU10gPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJjb25zdCBTQ09SRVIgPSAndjEnOyAvLyBvbmx5IGRlZmF1bHQgaW1wbGVtZW50ZWRcbmNvbnN0IE1BWElNVU1fU0NPUkUgPSAxMDsgLy8gbWF4IHNjb3JlIGZvciBzY29yZXJcbmNvbnN0IE1BWElNVU1fSElTVE9SWV9TSVpFID0gMTAwMDsgLy8gbWF4IGtpbGxlZCB0YWIgaGlzdG9yeSBpbiBtZW1vcnlcbmNvbnN0IFNFU1NJT05TX1RJTUVPVVRfTVMgPSAyMDA7IC8vIHdoZW4gYSB0YWIgaXMga2lsbGVkIHdlIG5lZWQgYSB0aW1lb3V0IHRvIHJldHJpZXZlIHRoZSBzZXNzaW9uSWRcbmNvbnN0IFNFU1NJT05TX1JFVFJJRVMgPSA1OyAvLyBob3cgbWFueSB0cmllcyB0byByZXRyaWV2ZSB0aGUgc2Vzc2lvbiBJRCBvZiBhIGtpbGxlZCB0YWJcbmNvbnN0IFNFU1NJT05TX01BWF9GVVpaWV9ERUxUQV9NUyA9IDEwMDAgKiA1OyAvLyB0aW1lIGlzIGZ1enp5IG1hdGNoZWQgdG8gcmV0aXJldmUgdGhlIGNvcnJlY3Qgc2Vzc2lvbklELCBzaG91bGQgYmUgaGlnaGVyIHRoYW4gU0VTU0lPTlNfVElNRU9VVF9NU1xuY29uc3QgTUlOX0FDVElWRV9ERUJPVU5DRSA9IDEwMDAgKiAyOyAvLyBtaW5pbXVtIGFjdGl2ZSByZWFkaW5nIG9uIGEgdGFiIHRvIGJlIGNvdW50ZWQgYXMgdmFsaWQgJ3VzZWZ1bCcgdGltZVxuY29uc3QgTUFYX0FDVElWRV9ERUJPVU5DRSA9IDEwMDAgKiA2MCAqIDU7IC8vIG1heGltdW0gdGltZSB3aXRob3V0IGFueSB1c2VyIGlucHV0IGJlZm9yZSBpdCBpcyBjb25zaWRlcmVkIGlkbGVkLCBtdXN0IGJlIGhpZ2hlciB0aGFuIDE1c2VjXG5jb25zdCBGUk9OVEVORF9TS0VMRVRPTl9ESVNQTEFZID0gMzMwOyAvLyBob3cgbG9uZyB0byBkaXNwbGF5IHRoZSBmYWtlIGRpc3BsYXkgaW4gbXNcblxuZXhwb3J0IHtcbiAgU0NPUkVSLFxuICBNQVhJTVVNX1NDT1JFLFxuICBNQVhJTVVNX0hJU1RPUllfU0laRSxcbiAgU0VTU0lPTlNfVElNRU9VVF9NUyxcbiAgU0VTU0lPTlNfUkVUUklFUyxcbiAgU0VTU0lPTlNfTUFYX0ZVWlpZX0RFTFRBX01TLFxuICBNSU5fQUNUSVZFX0RFQk9VTkNFLFxuICBNQVhfQUNUSVZFX0RFQk9VTkNFLFxuICBGUk9OVEVORF9TS0VMRVRPTl9ESVNQTEFZLFxufTtcbiIsImNvbnN0IFJFTEFYRUQgPSAncmVsYXhlZCc7XG5jb25zdCBGT0NVU0VEID0gJ2ZvY3VzZWQnO1xuY29uc3QgQ1VTVE9NSVpFRCA9ICdjdXN0b21pemVkJztcbnZhciBJTklUX1JFTEFYRURfUFJPRklMRSA9IHt9O1xudmFyIElOSVRfRk9DVVNFRF9QUk9GSUxFID0ge307XG5cbmlmIChFTlYgPT09ICdkZWJ1ZycpIHtcbiAgSU5JVF9SRUxBWEVEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEgKiAxMDAwLCAvLyBtaW5pbXVtIHRpbWUgYmV0d2VlbiAyIGZ1bGwgc3RhdHMgdXBkYXRlIGZvciBhbGwgdGFic1xuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDUgKiAxMDAwLCAvLyBtaW5pbXVtIHRpbWUgYmV0d2VlbiAyIGZ1bGwgdGFiIGdhcmJhZ2UgY29sbGVjdGlvblxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICB0YXJnZXRfdGFiczogMTIsIC8vIHRhYmJ5IHdpbGwgc3RvcCBjbG9zaW5nIHRhYnMgd2hlbiB3ZSBoYXZlIGxlc3MgdGhhbiB0YXJnZXRfdGFicyBvcGVuXG4gICAgICBkZWNheTogMC44LCAvLyB3aGVuIHRoZSBudW1iZXIgb2YgdGFiIGluY3JlYXNlcywgdGFiYnkgd2lsbCBkZWxldGUgbW9yZSB0YWJzXG4gICAgICBtaW5fdGltZTogMyAqIDEwMDAsIC8vIFRhYmJ5IHdpbGwga2lsbCBhYm91dCAxIHRhYiBwZXIgbWluX3RpbWUgKGRlcGVuZGluZyBvbiBhY3RpdmF0aW9uIHJ1bGVzKVxuXG4gICAgICAvLyBJR05PUkVEIHRhYnNcbiAgICAgIGFjdGl2ZTogZmFsc2UsIC8vIHRoZXNlIHN0YXR1cyBhcmUgYWJzb2x1dGVseSBwcm90ZWN0ZWQgdGFiczogdGhlc2UgYXJlIGlnbm9yZWQgYW5kIGRvIG5vdCBjb3VudCBhcyB0YWJzLlxuICAgICAgcGlubmVkOiB0cnVlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIC8vIFBST1RFQ1RFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHRhYnMgd2lsbCBiZSBnaXZlbiBhYnNvbHV0ZSBtYXhpbXVtIHNjb3JlICsgZXh0ZW5kZWQgcHJvdGVjdGlvblxuICAgICAgcGlubmVkOiB0cnVlLCAvLyB3aGVuIHRoZSBzdGF0dXMgaXMgbG9zdC5cbiAgICAgIGF1ZGlibGU6IHRydWUsXG5cbiAgICAgIG1pbl9hY3RpdmU6IDUgKiAxMDAwLCAvLyBtaW5pbXVtIHRpbWUgYSB0YWIgaGFzIHRvIGV4aXN0IGJlZm9yZSBiZWluZyBzY29yZWRcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiAxMDAwLCAvLyBBIHJlc3RvcmVkIHRhYiBpcyBwcm90ZWN0ZWQgZm9yIHRoaXMgbG9uZ1xuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsIC8vIEluIGN1cnJlbnQgc2NvcmVyLCB0aGUgY2FjaGUgc2NvcmUgaXMgYWRkZWQgdG8gdGhlIGN1cnJlbnQgc2NvcmUgd2l0aCBhIGRlY3JlYXNpbmcgZmFjdG9yXG4gICAgfSxcbiAgfTtcblxuICBJTklUX0ZPQ1VTRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMSAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogNSAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIHRhcmdldF90YWJzOiA1LFxuICAgICAgZGVjYXk6IDAuOCxcbiAgICAgIG1pbl90aW1lOiAzICogMTAwMCxcblxuICAgICAgLy8gSUdOT1JFRCB0YWJzXG4gICAgICBhY3RpdmU6IGZhbHNlLCAvLyB0aGVzZSBzdGF0dXMgYXJlIGFic29sdXRlbHkgcHJvdGVjdGVkIHRhYnM6IHRoZXNlIGFyZSBpZ25vcmVkIGFuZCBkbyBub3QgY291bnQgYXMgdGFicy5cbiAgICAgIHBpbm5lZDogdHJ1ZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICAvLyBQUk9URUNURUQgdGFic1xuICAgICAgYWN0aXZlOiB0cnVlLCAvLyB0aGVzZSB0YWJzIHdpbGwgYmUgZ2l2ZW4gYWJzb2x1dGUgbWF4aW11bSBzY29yZSArIGV4dGVuZGVkIHByb3RlY3Rpb25cbiAgICAgIHBpbm5lZDogdHJ1ZSwgLy8gd2hlbiB0aGUgc3RhdHVzIGlzIGxvc3QuXG4gICAgICBhdWRpYmxlOiB0cnVlLFxuXG4gICAgICBtaW5fYWN0aXZlOiA1ICogMTAwMCxcbiAgICAgIHByb3RlY3Rpb25fdGltZTogMTUgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsXG4gICAgfSxcbiAgfTtcbn0gZWxzZSB7XG4gIElOSVRfUkVMQVhFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxMCAqIDEwMDAsXG4gICAgICBtaW5fdGltZV9nYXJiYWdlX2NvbGxlY3RvcjogMTAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBwb2xpY3k6IHtcbiAgICAgIHRhcmdldF90YWJzOiAxMixcbiAgICAgIGRlY2F5OiAwLjksXG4gICAgICBtaW5fdGltZTogNDUgKiAxMDAwLFxuXG4gICAgICAvLyBJR05PUkVEIHRhYnNcbiAgICAgIGFjdGl2ZTogZmFsc2UsIC8vIHRoZXNlIHN0YXR1cyBhcmUgYWJzb2x1dGVseSBwcm90ZWN0ZWQgdGFiczogdGhlc2UgYXJlIGlnbm9yZWQgYW5kIGRvIG5vdCBjb3VudCBhcyB0YWJzLlxuICAgICAgcGlubmVkOiB0cnVlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIC8vIFBST1RFQ1RFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHRhYnMgd2lsbCBiZSBnaXZlbiBhYnNvbHV0ZSBtYXhpbXVtIHNjb3JlICsgZXh0ZW5kZWQgcHJvdGVjdGlvblxuICAgICAgcGlubmVkOiB0cnVlLCAvLyB3aGVuIHRoZSBzdGF0dXMgaXMgbG9zdC5cbiAgICAgIGF1ZGlibGU6IHRydWUsXG5cbiAgICAgIG1pbl9hY3RpdmU6IDUgKiA2MCAqIDEwMDAsXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogNjAgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsXG4gICAgfSxcbiAgfTtcblxuICBJTklUX0ZPQ1VTRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMTAgKiAxMDAwLFxuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDEwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICB0YXJnZXRfdGFiczogNSxcbiAgICAgIGRlY2F5OiAwLjksXG4gICAgICBtaW5fdGltZTogNDUgKiAxMDAwLFxuXG4gICAgICAvLyBJR05PUkVEIHRhYnNcbiAgICAgIGFjdGl2ZTogZmFsc2UsIC8vIHRoZXNlIHN0YXR1cyBhcmUgYWJzb2x1dGVseSBwcm90ZWN0ZWQgdGFiczogdGhlc2UgYXJlIGlnbm9yZWQgYW5kIGRvIG5vdCBjb3VudCBhcyB0YWJzLlxuICAgICAgcGlubmVkOiB0cnVlLFxuICAgICAgYXVkaWJsZTogZmFsc2UsXG4gICAgfSxcbiAgICBzY29yZXI6IHtcbiAgICAgIC8vIFBST1RFQ1RFRCB0YWJzXG4gICAgICBhY3RpdmU6IHRydWUsIC8vIHRoZXNlIHRhYnMgd2lsbCBiZSBnaXZlbiBhYnNvbHV0ZSBtYXhpbXVtIHNjb3JlICsgZXh0ZW5kZWQgcHJvdGVjdGlvblxuICAgICAgcGlubmVkOiB0cnVlLCAvLyB3aGVuIHRoZSBzdGF0dXMgaXMgbG9zdC5cbiAgICAgIGF1ZGlibGU6IHRydWUsXG5cbiAgICAgIG1pbl9hY3RpdmU6IDUgKiA2MCAqIDEwMDAsXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogNjAgKiAxMDAwLFxuICAgICAgY2FjaGVkX2RlY2F5OiAwLjIsXG4gICAgfSxcbiAgfTtcbn1cblxuT2JqZWN0LmZyZWV6ZShJTklUX0ZPQ1VTRURfUFJPRklMRSk7XG5PYmplY3QuZnJlZXplKElOSVRfUkVMQVhFRF9QUk9GSUxFKTtcblxuZXhwb3J0IHsgUkVMQVhFRCwgRk9DVVNFRCwgQ1VTVE9NSVpFRCwgSU5JVF9GT0NVU0VEX1BST0ZJTEUsIElOSVRfUkVMQVhFRF9QUk9GSUxFIH07XG4iLCJpbXBvcnQgKiBhcyBwc2wgZnJvbSAncHNsJztcbmltcG9ydCAqIGFzIGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCB7IE1BWF9BQ1RJVkVfREVCT1VOQ0UgfSBmcm9tICcuLi9jb25maWcvZW52LmpzJztcblxuY29uc3QgbG9nZ2VyID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgaWYgKEVOViA9PT0gJ2RlYnVnJyB8fCBFTlYgPT09ICdkZXYnKSB7XG4gICAgbGV0IGRlZmF1bHRfZm9ybWF0ID0gWydmb250LXdlaWdodDppbml0aWFsOyBjb2xvcjpibGFjazsnXTtcbiAgICBsZXQgcHJlID0gJyVjJyArIG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSArICclYyc7XG4gICAgbGV0IG9wdGlvbnMgPSBbJ2ZvbnQtd2VpZ2h0OmxpZ2h0ZXI7IGNvbG9yOkxpZ2h0U2xhdGVHcmV5OyddO1xuICAgIG9wdGlvbnMucHVzaChkZWZhdWx0X2Zvcm1hdCk7XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJlICs9ICcgfCAlYycgKyBhcmdzWzBdLmNvbnN0cnVjdG9yLm5hbWUgKyAnJWMgfCAnO1xuICAgICAgcHJlICs9IGFyZ3NbMV07XG4gICAgICBvcHRpb25zLnB1c2goJ2NvbG9yOiMxZGE4N2M7IGZvbnQtd2VpZ2h0OmJvbGRlcicpO1xuICAgICAgb3B0aW9ucy5wdXNoKGRlZmF1bHRfZm9ybWF0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlICs9ICcgfCAnICsgYXJnc1swXTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJlLCAuLi5vcHRpb25zKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gY29weShvYmopIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbmZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmZ1bmN0aW9uIGdldERvbWFpbihzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHNsLnBhcnNlKG5ldyBVUkwoc3RyKS5ob3N0bmFtZSkuZG9tYWluO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuICByZXR1cm4gL15cXGQrJC8udGVzdCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHNldEFsbFJlYWRCYWRnZSgpIHtcbiAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEJhZGdlVGV4dCh7IHRleHQ6ICcnIH0pOyAvLyA8LS0gc2V0IHRleHQgdG8gJycgdG8gcmVtb3ZlIHRoZSBiYWRnZVxufVxuXG5mdW5jdGlvbiBzZXRVbnJlYWRCYWRnZSgpIHtcbiAgYnJvd3Nlci5icm93c2VyQWN0aW9uLnNldEJhZGdlQmFja2dyb3VuZENvbG9yKHsgY29sb3I6IFsyMjksIDkyLCAwLCAxMjhdIH0pO1xuICBicm93c2VyLmJyb3dzZXJBY3Rpb24uZ2V0QmFkZ2VUZXh0KHt9KS50aGVuKGZ1bmN0aW9uIChiYWRnZVRleHQpIHtcbiAgICBsZXQgY291bnRlciA9IDE7XG4gICAgaWYgKGlzSW50ZWdlcihiYWRnZVRleHQpKSB7XG4gICAgICBjb3VudGVyID0gcGFyc2VJbnQoYmFkZ2VUZXh0KSArIDE7XG4gICAgfVxuICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiBgJHtjb3VudGVyfWAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc1VzZXJBY3RpdmUoKSB7XG4gIC8vIE5vdCBjb21wYXRpYmxlIHdpdGggU2FmYXJpXG4gIHJldHVybiBicm93c2VyLmlkbGUucXVlcnlTdGF0ZShNYXRoLnJvdW5kKE1BWF9BQ1RJVkVfREVCT1VOQ0UgLyAxMDAwKSkudGhlbigoc3RhdHVzKSA9PiB7XG4gICAgaWYgKHN0YXR1cyA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ2dlcihcIkNvdWxkbid0IGNoZWNrIHVzZXIgYWN0aXZpdHkuXCIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZVJlc2V0KCkge1xuICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsXG4gICAgLmdldChudWxsKVxuICAgIC50aGVuKChkKSA9PiB7XG4gICAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnJlbW92ZShPYmplY3Qua2V5cyhkKSk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBsb2dnZXIoJ01lbW9yeSBmbHVzaGVkLicpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0Rm9jdXNlZFdpbmRvdygpIHtcbiAgLy8gd2luZG93VHlwZSBpcyBkZXByZWNhdGVkIGluIEZGLCBpdCBkb2Vzbid0IHNlZW0gY3JpdGljYWwgYW55d2F5c1xuICByZXR1cm4gYnJvd3Nlci53aW5kb3dzLmdldExhc3RGb2N1c2VkKHsgcG9wdWxhdGU6IGZhbHNlIH0pLnRoZW4oKGQpID0+IHtcbiAgICByZXR1cm4gZC5pZDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0oYXJyLCB2YWx1ZSkge1xuICBjb25zdCBpbmRleCA9IGFyci5pbmRleE9mKHZhbHVlKTtcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5jb25zdCByZXRyeVByb21pc2UgPSAoZnVuYywgZGVsYXksIHRpbWVzKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmV0dXJuIGZ1bmMoKVxuICAgICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgIGlmIChyZWFzb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZWFzb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lcyA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdGltZW91dChkZWxheSlcbiAgICAgICAgICAgIC50aGVuKHJldHJ5UHJvbWlzZS5iaW5kKG51bGwsIGZ1bmMsIGRlbGF5LCB0aW1lcyAtIDEpKVxuICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWplY3QocmVhc29uKTtcbiAgICAgIH0pO1xuICB9KTtcblxubG9nZ2VyKCdTdGFydGluZyBpbiAnICsgRU5WICsgJyBlbnYuJyk7XG5leHBvcnQge1xuICBsb2dnZXIsXG4gIGNvcHksXG4gIHRpbWVvdXQsXG4gIHJldHJ5UHJvbWlzZSxcbiAgZ2V0RG9tYWluLFxuICBzZXRBbGxSZWFkQmFkZ2UsXG4gIHNldFVucmVhZEJhZGdlLFxuICBpc0ludGVnZXIsXG4gIGlzVXNlckFjdGl2ZSxcbiAgc3RvcmFnZVJlc2V0LFxuICBnZXRMYXN0Rm9jdXNlZFdpbmRvdyxcbiAgcmVtb3ZlSXRlbSxcbn07XG5pZiAoRU5WID09PSAnZGVidWcnKSB7XG4gIHdpbmRvdy51dGlscyA9IHtcbiAgICBsb2dnZXIsXG4gICAgY29weSxcbiAgICB0aW1lb3V0LFxuICAgIHJldHJ5UHJvbWlzZSxcbiAgICBnZXREb21haW4sXG4gICAgc2V0QWxsUmVhZEJhZGdlLFxuICAgIHNldFVucmVhZEJhZGdlLFxuICAgIGlzSW50ZWdlcixcbiAgICBpc1VzZXJBY3RpdmUsXG4gICAgc3RvcmFnZVJlc2V0LFxuICAgIGdldExhc3RGb2N1c2VkV2luZG93LFxuICAgIHJlbW92ZUl0ZW0sXG4gIH07XG59XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhYm9vdHN0cmFwLWNzcy1vbmx5L2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEpO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxYjllNzQ7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uYm9sZC10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbjpmb2N1cyB7b3V0bGluZTowICFpbXBvcnRhbnQ7fVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4taW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tc2dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lbi1zZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZpbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1kZXZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWRldmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9vYy1sbmNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vb2MtbG5jLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtbW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC1tby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInBvcHVwXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL2FwcC9wb3B1cC5qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbG9kYXNoX2xvZGFzaF9qcy1ub2RlX21vZHVsZXNfcHNsX2luZGV4X2pzLW5vZGVfbW9kdWxlc193ZWJleHRlbnNpb24tcG9sLTM1N2E0ZFwiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbWF0ZXJpYWwtdWlfY29yZV9UeXBvZ3JhcGh5X1R5cG9ncmFwaHlfanMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfLTcyYWFlMVwiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9ICgpID0+IHtcblxufTtcbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdH1cblx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG5mdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cdHZhciBydW50aW1lID0gZGF0YVszXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufTtcblxudmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gfHwgW107XG52YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuanNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG52YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=