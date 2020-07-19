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
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.FOCUSED),
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
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.RELAXED),
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
        onChange: () => this.handleBoolChange(_config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_4__.CUSTOMIZED),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9lbnYuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9zZXJ2aWNlcy91dGlscy5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy9Vc2Vycy9mcmFuY29pcy5tZXVuaWVyL3Byb2plY3RzL3RrLWNocm9tZS9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZXxzeW5jfC9eXFwuXFwvLiokLyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3M/ZWE1ZCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJBcHAiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSRVNUT1JFIiwiU0hFTExfUkVTVE9SRSIsIkNMT1NFRF9ISVNUT1JZIiwiTlVNQkVSX0hPVVJTX0RBWSIsIlRJTUVfUEVSSU9EXzI0SCIsIlRJTUVfUEVSSU9EXzcySCIsIkZVTExfU0tFTEVUT04iLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZXRBbGxSZWFkQmFkZ2UiLCJza2VsZXRvbiIsInN0YXRlIiwiY2xvc2VkX2hpc3RvcnkiLCJsb2FkaW5nIiwidGltZW91dCIsIkZST05URU5EX1NLRUxFVE9OX0RJU1BMQVkiLCJ0aGVuIiwibG9nZ2VyIiwic2V0U3RhdGUiLCJicm93c2VyIiwicmVzdWx0Iiwib25DaGFuZ2VkQ2FsbGJhY2siLCJjaGFuZ2VzIiwiY2hhbmdlc0Nsb3NlZEhpc3RvcnkiLCJzZWFyY2hWYWx1ZSIsImJpbmQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlSXRlbSIsImxpc3RJdGVtcyIsImtleSIsImUiLCJjdHJsS2V5IiwibWV0YUtleSIsInJlc3RvcmVUYWIiLCJpdGVtcyIsIm1lc3NhZ2VUeXBlIiwicmVzdG9yZWRUYWIiLCJ1dWlkIiwiZmlsdGVyIiwiaXRlbSIsInNlYXJjaE9uQ2hhbmdlIiwidmFsdWUiLCJzZWFyY2hPblJlcXVlc3RTZWFyY2giLCJldmVudCIsInNlYXJjaE9uQ2FuY2VsIiwiZmlsdGVyTGlzdCIsInNlbGVjdGVkTGlzdCIsImVuZFBlcmlvZCIsIm5vdyIsIkRhdGUiLCJkZWxldGlvbl90aW1lIiwicmVuZGVyTGlzdCIsImNsYXNzZXMiLCJtYXAiLCJ3ZWJzaXRlIiwiZGVsZXRpb25UaW1lIiwiaG91cnNfbWludXRlc19mb3JtYXQiLCJtb21lbnQiLCJmb3JtYXQiLCJkYXRlIiwic3RhcnRPZiIsInRydW5jYXRlZF91cmwiLCJ1cmwiLCJsZW5ndGgiLCJzZWFyY2hQYXR0ZXJuIiwiUmVnRXhwIiwic3BsaXQiLCJ0ZXJtIiwiam9pbiIsIm9wdGlvbiIsInRpdGxlIiwibWF0Y2giLCJ0b3RhbExlbmd0aCIsInJldmVyc2UiLCJjdXJyZW50IiwibGFzdCIsImkiLCJuZXh0IiwiZGVsdGEiLCJNYXRoIiwibWF4IiwiY2VpbCIsImRpZmYiLCJzcGxpY2UiLCJ0ZXh0IiwiZGF5IiwibGlzdEl0ZW0iLCJteUZpbHRlcmVkTGlzdCIsImluZGV4Iiwic3R5bGUiLCJwcmltYXJ5IiwicHJpbWFyeVRpdGxlQ29udGFpbmVyIiwibGlzdFRpdGxlVGV4dCIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsImF2YXRhckNvbnRhaW5lciIsInByaW1hcnlUZXh0Q29udGFpbmVyIiwic2Vjb25kYXJ5VGV4dENvbnRhaW5lciIsIml0ZW1UZXh0IiwiYnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uIiwibGlzdFdlYnNpdGVzIiwic2VhcmNoQmFyIiwibGlzdCIsIm1pbiIsInJlbmRlciIsIm51bWJlckNsb3NlZFRhYnNMYXN0SG91ciIsImJvbGROdW1iZXIiLCJ0ZXh0T25SaWdodCIsInRvcFRleHQiLCJtaWRkbGVUZXh0IiwiZm9vdGVyQ29udGFpbmVyIiwiaWNvbkNvbnRhaW5lciIsImxpbmtUb0Zvcm0iLCJzdHlsZXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1heEhlaWdodCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwiZ3JlZW5UaXRsZSIsImZvbnRTaXplIiwiYm9yZGVyQm90dG9tIiwibWF4V2lkdGgiLCJsaXN0VGl0bGUiLCJjb2xvciIsInN1YlRleHQiLCJtYXJnaW5Ub3AiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsIm92ZXJmbG93V3JhcCIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsIm1pbldpZHRoIiwibWFyZ2luUmlnaHQiLCJsaXN0Q29udGFpbmVyIiwibWFyZ2luQm90dG9tIiwid2l0aFN0eWxlcyIsIkhvbWVEaXNwYXRjaGVyIiwibmV3VmFsdWUiLCJhcHBCYXJWYWx1ZSIsImZpcnN0TG9hZCIsImRpc3BhdGNoUGFnZSIsImRpc3BsYXlJY29uIiwiaGFuZGxlQ2hhbmdlIiwicm9vdCIsIm5vdGlmaWNhdGlvbiIsInZhcmlhbnRTdWNjZXNzIiwic3VjY2VzcyIsImhvbWVDb250YWluZXIiLCJwYXBlclNoYWRvdyIsImdyaWRMb2dvVGFicyIsImVuc2VtYmxlbG9nbyIsImxvZ29GdWxsIiwiYm94U2hhZG93IiwidGFiIiwibGVmdCIsImFsbFRhYnMiLCJsb2dvQXZhdGFyIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiTGlnaHRUb29sdGlwIiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbW1vbiIsIndoaXRlIiwic2hhZG93cyIsIlRvb2x0aXAiLCJTZXR0aW5ncyIsImZvY3VzZWRNb2RlIiwicmVsYXhlZE1vZGUiLCJjdXN0b21pemVkQm9vbCIsInNldHRpbmdzIiwiSU5JVF9GT0NVU0VEX1BST0ZJTEUiLCJmb2N1c2VkV2luZG93SWQiLCJvcGVuTW9kYWwiLCJwcm9maWxlIiwiYWN0aXZlX3Byb2ZpbGUiLCJGT0NVU0VEIiwiUkVMQVhFRCIsIkNVU1RPTUlaRUQiLCJmb2N1c2VkX3dpbmRvd19pZCIsImluYWN0aXZlUG9saWN5IiwiaW5hY3RpdmVfcG9saWN5IiwiY2hhbmdlc1NldHRpbmdzIiwiY2hhbmdlc1Byb2ZpbGUiLCJjaGFuZ2VkSW5hY3RpdmVQb2xpY3kiLCJoYW5kbGVCb29sQ2hhbmdlIiwiY2hhbmdlVHlwZSIsIm5vdGlmeVVzZXIiLCJpbmNsdWRlcyIsImhhbmRsZVN3aXRjaCIsImhhbmRsZVNhdmVQYXJhbWV0ZXJzIiwiY2hlY2tTZXR0aW5ncyIsImVucXVldWVTbmFja2JhciIsInZhcmlhbnQiLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJhdXRvSGlkZUR1cmF0aW9uIiwiaGFuZGxlQ2hhbmdlUGFyYW1ldGVycyIsInBhdGgiLCJwYXJhbWV0ZXIiLCJjb3B5IiwibmV4dFZhbHVlIiwidGFyZ2V0IiwiaXNJbnRlZ2VyIiwicGFyc2VJbnQiLCJ3aW5kb3dJZCIsInB1c2giLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJpbnB1dHNQYXJhbWV0ZXJzIiwibGFiZWwiLCJzb3VyY2UiLCJQT0xJQ1kiLCJPUFRJTUFMX05VTUJFUl9UQUJTIiwiaW5wdXRQcm9wcyIsInN0ZXAiLCJsaXN0SXRlbXNQYXJhbWV0ZXJzIiwidGV4dEZpZWxkIiwibWFpbkJsb2NrIiwic3dpdGNoV3JhcHBlciIsInN3aXRjaENvbnRhaW5lciIsInN0eWxlTGFiZWwiLCJpbnRyb2R1Y3Rpb25CbG9jayIsInBhcmFtZXRlcnNUaXRsZSIsInNldHRpbmdzV3JhcHBlciIsImZpcnN0UHJvZmlsZXNDb250YWluZXIiLCJjaGVja2JveFdyYXBwZXIiLCJmaXJzdEJvb2xlYW5zIiwiaGVscEljb24iLCJjdXN0b21pemVXcmFwcGVyIiwic2V0dGluZ3NCbG9jayIsInNlY29uZGFyeUJ1dHRvbiIsInRpcHNCdXR0b24iLCJzdHlsZUxhYmVsVGlwcyIsIm1vZGFsIiwiQmFja2Ryb3AiLCJpbnZpc2libGUiLCJwYXBlciIsImZpcnN0QmxvY2tNb2RhbCIsInNlY29uZEVuc2VtYmxlIiwibGFzdEVuc2VtYmxlIiwibGVmdENsaWNrV3JhcHBlciIsInN0eWxlTGFiZWxOZXh0IiwiZm9vdGVyTW9kYWwiLCJ2ZXJzaW9uIiwid2l0aFNuYWNrYmFyIiwicG9pbnRlckV2ZW50cyIsIm1pbkhlaWdodCIsInpJbmRleCIsImRyYXdlciIsInBhZGRpbmciLCJvcGFjaXR5IiwiYm94Q3RybCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiSU5BQ1RJVkVfUE9MSUNZIiwiU0NPUkVSIiwiTUFYSU1VTV9TQ09SRSIsIk1BWElNVU1fSElTVE9SWV9TSVpFIiwiU0VTU0lPTlNfVElNRU9VVF9NUyIsIlNFU1NJT05TX1JFVFJJRVMiLCJTRVNTSU9OU19NQVhfRlVaWllfREVMVEFfTVMiLCJNSU5fQUNUSVZFX0RFQk9VTkNFIiwiTUFYX0FDVElWRV9ERUJPVU5DRSIsIklOSVRfUkVMQVhFRF9QUk9GSUxFIiwiRU5WIiwibWVtb3J5IiwiY2FjaGVfc2l6ZSIsIm1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlIiwibWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3IiLCJwb2xpY3kiLCJ0YXJnZXRfdGFicyIsImRlY2F5IiwibWluX3RpbWUiLCJhY3RpdmUiLCJwaW5uZWQiLCJhdWRpYmxlIiwic2NvcmVyIiwibWluX2FjdGl2ZSIsInByb3RlY3Rpb25fdGltZSIsImNhY2hlZF9kZWNheSIsIk9iamVjdCIsImZyZWV6ZSIsImFyZ3MiLCJkZWZhdWx0X2Zvcm1hdCIsInByZSIsInRvVVRDU3RyaW5nIiwib3B0aW9ucyIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwib2JqIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJnZXREb21haW4iLCJzdHIiLCJwc2wiLCJVUkwiLCJob3N0bmFtZSIsImRvbWFpbiIsInRlc3QiLCJzZXRVbnJlYWRCYWRnZSIsImJhZGdlVGV4dCIsImNvdW50ZXIiLCJpc1VzZXJBY3RpdmUiLCJyb3VuZCIsInN0YXR1cyIsInN0b3JhZ2VSZXNldCIsImQiLCJrZXlzIiwiZ2V0TGFzdEZvY3VzZWRXaW5kb3ciLCJwb3B1bGF0ZSIsImlkIiwiYXJyIiwiaW5kZXhPZiIsInJldHJ5UHJvbWlzZSIsImZ1bmMiLCJkZWxheSIsInRpbWVzIiwicmVqZWN0IiwiY2F0Y2giLCJyZWFzb24iLCJ3aW5kb3ciLCJ1dGlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLGlFQUFjLENBQUM7QUFDM0JDLFlBQVUsRUFBRTtBQUNWQyxjQUFVLEVBQUU7QUFERixHQURlO0FBSTNCQyxTQUFPLEVBQUU7QUFDUEMsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRTtBQURHO0FBREo7QUFKa0IsQ0FBRCxDQUE1Qjs7QUFXQSxTQUFTQyxHQUFULEdBQWU7QUFDYixzQkFDRSwyREFBQyw2REFBRDtBQUFrQixTQUFLLEVBQUVQO0FBQXpCLGtCQUNFLDJEQUFDLCtEQUFELE9BREYsRUFDcUIsR0FEckIsQ0FERjtBQUtEOztBQUVEUSx1REFBQSxlQUFnQiwyREFBQyxHQUFELE9BQWhCLEVBQXlCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkU7Ozs7Ozs7Ozs7Ozs7O0FDOVJBLGNBQWMsbUJBQU8sQ0FBQyxvSUFBNEQ7O0FBRWxGOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDBHQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7O1VDbkJmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQSxnQkFBZ0IsMkJBQTJCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGVBQWUsdUJBQXVCO1dBQ3RDO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsMkM7Ozs7VUM1RkE7VUFDQSIsImZpbGUiOiJwb3B1cC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lRGlzcGF0Y2hlciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVEaXNwYXRjaGVyJztcbmltcG9ydCB7IE11aVRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgfSxcbiAgcGFsZXR0ZToge1xuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyMwMGI5YWEnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8SG9tZURpc3BhdGNoZXIgLz57JyAnfVxuICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCJpbXBvcnQgKiBhcyBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgRlJPTlRFTkRfU0tFTEVUT05fRElTUExBWSB9IGZyb20gJy4uLy4uL2NvbmZpZy9lbnYuanMnO1xuaW1wb3J0IHsgbG9nZ2VyLCB0aW1lb3V0LCBzZXRBbGxSZWFkQmFkZ2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscy5qcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgRXJyb3JPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3JPdXRsaW5lJztcbmltcG9ydCB7IEZpeGVkU2l6ZUxpc3QgYXMgTGlzdCB9IGZyb20gJ3JlYWN0LXdpbmRvdyc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ21hdGVyaWFsLXVpLXNlYXJjaC1iYXInO1xuXG5jb25zdCBSRVNUT1JFID0gJ1JFU1RPUkUnO1xuY29uc3QgU0hFTExfUkVTVE9SRSA9ICdTSEVMTF9SRVNUT1JFJztcbmNvbnN0IENMT1NFRF9ISVNUT1JZID0gJ2Nsb3NlZF9oaXN0b3J5JztcbmNvbnN0IE5VTUJFUl9IT1VSU19EQVkgPSAyNDtcbmNvbnN0IFRJTUVfUEVSSU9EXzI0SCA9IDM2MDAwMDAgKiBOVU1CRVJfSE9VUlNfREFZOyAvLyBpbiBtaWNyb3NlY29uZFxuY29uc3QgVElNRV9QRVJJT0RfNzJIID0gMzYwMDAwMCAqIE5VTUJFUl9IT1VSU19EQVkgKiAzOyAvLyBpbiBtaWNyb3NlY29uZFxuY29uc3QgRlVMTF9TS0VMRVRPTiA9IGZhbHNlO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHNldEFsbFJlYWRCYWRnZSgpO1xuXG4gICAgaWYgKHByb3BzLnNrZWxldG9uKSB7XG4gICAgICB0aGlzLnN0YXRlID0geyBjbG9zZWRfaGlzdG9yeTogW10sIGxvYWRpbmc6IHRydWUgfTtcbiAgICAgIHRpbWVvdXQoRlJPTlRFTkRfU0tFTEVUT05fRElTUExBWSkudGhlbigoKSA9PiB7XG4gICAgICAgIGxvZ2dlcih0aGlzLCAnRGlzcGxheWluZyBsaXN0Jyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlID0geyBjbG9zZWRfaGlzdG9yeTogW10sIGxvYWRpbmc6IGZhbHNlIH07XG4gICAgfVxuICAgIFxuICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoW0NMT1NFRF9ISVNUT1JZXSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBjbG9zZWRfaGlzdG9yeSA9IHJlc3VsdC5jbG9zZWRfaGlzdG9yeSB8fCBbXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZWRfaGlzdG9yeSB9KTtcbiAgICB9KTtcbiAgICB0aGlzLm9uQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXNDbG9zZWRIaXN0b3J5ID0gY2hhbmdlc1tDTE9TRURfSElTVE9SWV07XG4gICAgICBpZiAoY2hhbmdlc0Nsb3NlZEhpc3RvcnkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2xvc2VkX2hpc3Rvcnk6IGNoYW5nZXNDbG9zZWRIaXN0b3J5WyduZXdWYWx1ZSddLFxuICAgICAgICAgIHNlYXJjaFZhbHVlOiAnJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHNldEFsbFJlYWRCYWRnZSgpO1xuICAgIGJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICByZW1vdmVJdGVtKGxpc3RJdGVtcywga2V5LCBlKSB7XG4gICAgaWYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpIHtcbiAgICAgIC8vIG1ldGFLZXkgaXMgY21kIGtleSBvbiBtYWNcbiAgICAgIHRoaXMucmVzdG9yZVRhYihsaXN0SXRlbXMsIGtleSwgU0hFTExfUkVTVE9SRSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzdG9yZVRhYihsaXN0SXRlbXMsIGtleSwgUkVTVE9SRSk7XG4gICAgfVxuICB9XG5cbiAgcmVzdG9yZVRhYihpdGVtcywga2V5LCBtZXNzYWdlVHlwZSkge1xuICAgIGNvbnN0IHJlc3RvcmVkVGFiID0gaXRlbXNba2V5XTtcbiAgICBsb2dnZXIodGhpcywgbWVzc2FnZVR5cGUgKyAnIGZvciB0YWIgJyArIHJlc3RvcmVkVGFiLnV1aWQpO1xuICAgIGNvbnN0IGNsb3NlZF9oaXN0b3J5ID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udXVpZCAhPT0gcmVzdG9yZWRUYWIudXVpZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlZF9oaXN0b3J5OiBjbG9zZWRfaGlzdG9yeSB9KTtcbiAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VUeXBlLFxuICAgICAgdXVpZDogcmVzdG9yZWRUYWIudXVpZCxcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaE9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIHNlYXJjaE9uUmVxdWVzdFNlYXJjaChldmVudCkge31cblxuICBzZWFyY2hPbkNhbmNlbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVmFsdWU6ICcnIH0pO1xuICB9XG5cbiAgZmlsdGVyTGlzdChzZWxlY3RlZExpc3QsIGVuZFBlcmlvZCkge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNlbGVjdGVkTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBub3cgLSBpdGVtLmRlbGV0aW9uX3RpbWUgPCBlbmRQZXJpb2Q7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJMaXN0KCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIGtlZXAgZWxlbWVudHMgb25seSBpbiB0aW1lLWZyYW1lXG4gICAgbGV0IHNlbGVjdGVkTGlzdCA9IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkgPyB0aGlzLmZpbHRlckxpc3QodGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSwgVElNRV9QRVJJT0RfNzJIKSA6IFtdO1xuXG4gICAgLy8gbGlzdCBlbnJpY2htZW50XG4gICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0Lm1hcCgod2Vic2l0ZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB3ZWJzaXRlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBkZWxldGlvblRpbWUgPSBuZXcgRGF0ZSh3ZWJzaXRlLmRlbGV0aW9uX3RpbWUpO1xuICAgICAgICB3ZWJzaXRlLmhvdXJzX21pbnV0ZXNfZm9ybWF0ID0gbW9tZW50KGRlbGV0aW9uVGltZSkuZm9ybWF0KCdISDptbScpO1xuICAgICAgICB3ZWJzaXRlLmRhdGUgPSBtb21lbnQoZGVsZXRpb25UaW1lKS5zdGFydE9mKCdkYXRlJyk7XG4gICAgICAgIHdlYnNpdGUudHJ1bmNhdGVkX3VybCA9IHdlYnNpdGUudXJsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdlYnNpdGU7XG4gICAgfSk7XG5cbiAgICAvLyBrZWVwaW5nIG9ubHkgd2Vic2l0ZXMgdGhhdCBtYXRjaCBzZWFyY2ggY3JpdGVyaWFcbiAgICBpZiAodHlwZW9mIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VhcmNoUGF0dGVybiA9IG5ldyBSZWdFeHAoXG4gICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWVcbiAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgIC5tYXAoKHRlcm0pID0+IGAoPz0uKiR7dGVybX0pYClcbiAgICAgICAgICAuam9pbignJyksXG4gICAgICAgICdpJ1xuICAgICAgKTtcbiAgICAgIHNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdC5maWx0ZXIoXG4gICAgICAgIChvcHRpb24pID0+IG9wdGlvbi50aXRsZS5tYXRjaChzZWFyY2hQYXR0ZXJuKSB8fCBvcHRpb24udXJsLm1hdGNoKHNlYXJjaFBhdHRlcm4pXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHRvdGFsTGVuZ3RoID0gc2VsZWN0ZWRMaXN0Lmxlbmd0aDtcbiAgICBzZWxlY3RlZExpc3QgPSBzZWxlY3RlZExpc3QucmV2ZXJzZSgpO1xuICAgIGxldCBjdXJyZW50ID0gbW9tZW50KCkuc3RhcnRPZignZGF0ZScpO1xuICAgIGxldCBsYXN0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5leHQgPSBzZWxlY3RlZExpc3RbaV0uZGF0ZTtcbiAgICAgIGxldCBkZWx0YSA9IE1hdGgubWF4KDAsIE1hdGguY2VpbChjdXJyZW50LmRpZmYobmV4dCwgJ2RheXMnLCB0cnVlKSkpO1xuICAgICAgaWYgKGRlbHRhID4gbGFzdCkge1xuICAgICAgICBpZiAoZGVsdGEgPT09IDEpIHtcbiAgICAgICAgICBzZWxlY3RlZExpc3Quc3BsaWNlKGksIDAsIHsgdGV4dDogJ1llc3RlcmRheSAtICcsIGRheTogbmV4dC5mb3JtYXQoJ01NTSBERCcpIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGRlbHRhID09PSAyKSB7XG4gICAgICAgICAgc2VsZWN0ZWRMaXN0LnNwbGljZShpLCAwLCB7IHRleHQ6ICdQcmV2aW91cyBkYXkgLSAnLCBkYXk6IG5leHQuZm9ybWF0KCdNTU0gREQnKSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZExpc3Quc3BsaWNlKGksIDAsIHsgdGV4dDogJycsIGRheTogbmV4dC5mb3JtYXQoJ01NTSBERCcpIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxhc3QgPSBkZWx0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsaXN0SXRlbSA9IChteUZpbHRlcmVkTGlzdCkgPT4gKHsgaW5kZXgsIHN0eWxlIH0pID0+IHtcbiAgICAgIGNvbnN0IHdlYnNpdGUgPSBteUZpbHRlcmVkTGlzdFtpbmRleF07XG4gICAgICBpZiAodHlwZW9mIHdlYnNpdGUuZGF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxMaXN0SXRlbSBDb250YWluZXJDb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgIHByaW1hcnk9e2Ake3dlYnNpdGUudGV4dH0gJHt3ZWJzaXRlLmRheX1gfVxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk6IGNsYXNzZXMucHJpbWFyeVRpdGxlQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RUaXRsZVRleHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgIDxMaXN0SXRlbSBDb250YWluZXJDb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRBdmF0YXJXaXRoVGltZX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aW1lRGlzcGxheX0+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiBGVUxMX1NLRUxFVE9OID8gPFNrZWxldG9uIHdpZHRoPVwiM2VtXCIvPiA6IGAke3dlYnNpdGUuaG91cnNfbWludXRlc19mb3JtYXR9YH1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwiY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgLz5cbiAgICAgICAgICAgICAgICAgIDwvU2tlbGV0b24+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICAgIGFsdD17d2Vic2l0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXt3ZWJzaXRlLmZhdkljb25VcmwgPyB3ZWJzaXRlLmZhdkljb25VcmwgOiAnZXJyb3InfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIEZVTExfU0tFTEVUT04gP1xuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB3aWR0aD1cIjE1ZW1cIi8+XG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIHdpZHRoPVwiMTBlbVwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17d2Vic2l0ZS50cnVuY2F0ZWRfdXJsfVxuICAgICAgICAgICAgICAgIHNlY29uZGFyeT17d2Vic2l0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICBwcmltYXJ5OiBjbGFzc2VzLnByaW1hcnlUZXh0Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiBjbGFzc2VzLnNlY29uZGFyeVRleHRDb250YWluZXIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiBGVUxMX1NLRUxFVE9OID9cbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVtb3ZlSXRlbS5iaW5kKHRoaXMsIG15RmlsdGVyZWRMaXN0LCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgeydSZXN0b3JlJ31cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFdlYnNpdGVzfT5cbiAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG9uIGxhc3QgNzJoXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWFyY2hPbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uUmVxdWVzdFNlYXJjaD17dGhpcy5zZWFyY2hPblJlcXVlc3RTZWFyY2guYmluZCh0aGlzKX1cbiAgICAgICAgICBvbkNhbmNlbFNlYXJjaD17dGhpcy5zZWFyY2hPbkNhbmNlbC5iaW5kKHRoaXMpfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hCYXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgICAgIHtzZWxlY3RlZExpc3QubGVuZ3RoID09PSAwID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxMaXN0IGhlaWdodD17TWF0aC5taW4oODAgKiBzZWxlY3RlZExpc3QubGVuZ3RoLCAzMDApfSBpdGVtQ291bnQ9e3NlbGVjdGVkTGlzdC5sZW5ndGh9IGl0ZW1TaXplPXs4MH0+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbShzZWxlY3RlZExpc3QpfVxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeVxuICAgICAgPyB0aGlzLmZpbHRlckxpc3QodGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSwgVElNRV9QRVJJT0RfMjRIKS5sZW5ndGhcbiAgICAgIDogMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGRpdiB2YXJpYW50PVwiaDNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2xkTnVtYmVyfT5cbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPyBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgOiAwfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0T25SaWdodH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudG9wVGV4dH0+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIHRhYlxuICAgICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIDw9IDEgPyAnJyA6ICdzJ30gY2xvc2VkXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubWlkZGxlVGV4dH0+IGluIHRoZSBsYXN0IHtgJHtOVU1CRVJfSE9VUlNfREFZfSBob3Vyc2B9IDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlckxpc3QuYmluZCh0aGlzKSgpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJDb250YWluZXJ9PlxuICAgICAgICAgIDxFcnJvck91dGxpbmVJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25Db250YWluZXJ9IC8+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNkVUVKSGQwYkw2cnlGdlprMjIwQ29acDdjd3ZGeEVTb3JwczdjbmdrMHdRZnl1LVEvdmlld2Zvcm1cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVG9Gb3JtfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJ1Zy9GZWVkYmFjaz9cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgdGl0bGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1heEhlaWdodDogNDAsXG4gIH0sXG4gIHRleHRPblJpZ2h0OiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ3N0YXJ0JyxcbiAgfSxcbiAgZ3JlZW5UaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYm9yZGVyQm90dG9tOiBgMnB4IHNvbGlkICMwMGI5YWFgLFxuICAgIG1heFdpZHRoOiAyMjUsXG4gIH0sXG4gIGxpc3RUaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBtYXhIZWlnaHQ6IDMwLFxuICB9LFxuXG4gIGJvbGROdW1iZXI6IHtcbiAgICBjb2xvcjogJyNlNTVjMDAnLFxuICAgIGZvbnRTaXplOiA0MCxcbiAgICBtYXhXaWR0aDogJzMwJScsXG4gIH0sXG4gIG1pZGRsZVRleHQ6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gIH0sXG4gIHRvcFRleHQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gIH0sXG4gIHN1YlRleHQ6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXhXaWR0aDogMjAsXG4gIH0sXG4gIGJ1dHRvbkNvbnRhaW5lcjogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknIH0sXG4gIGl0ZW1UZXh0OiB7XG4gICAgbWF4V2lkdGg6IDE4NSxcbiAgICBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdicmVhay1zcGFjZXMnLFxuXG4gICAgbWF4SGVpZ2h0OiA2MCxcbiAgfSxcbiAgdGltZURpc3BsYXk6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE0LFxuICB9LFxuICBncmlkQXZhdGFyV2l0aFRpbWU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIH0sXG4gIGxpc3RXZWJzaXRlczoge1xuICAgIG1hcmdpblRvcDogMjAsXG4gIH0sXG4gIGZvb3RlckNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS4yNSksXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgbGlua1RvRm9ybToge1xuICAgIGZvbnRTaXplOiAxMCxcbiAgfSxcbiAgaWNvbkNvbnRhaW5lcjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDAuMjUpLFxuICAgIGZvbnRTaXplOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICBhdmF0YXJDb250YWluZXI6IHtcbiAgICBtYXhXaWR0aDogdGhlbWUuc3BhY2luZyg3KSxcbiAgICBtYXhIZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNyksXG4gIH0sXG4gIHByaW1hcnlUZXh0Q29udGFpbmVyOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgbWF4SGVpZ2h0OiAyMixcbiAgfSxcbiAgc2Vjb25kYXJ5VGV4dENvbnRhaW5lcjoge1xuICAgIGZvbnRTaXplOiAxMyxcbiAgfSxcbiAgcHJpbWFyeVRpdGxlQ29udGFpbmVyOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNixcbiAgfSxcblxuICBsaXN0VGl0bGVUZXh0OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQuNSksXG4gIH0sXG4gIGxpc3RDb250YWluZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIHNlYXJjaEJhcjoge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtYXhIZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNSksXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShIb21lKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3MnO1xuaW1wb3J0IEFycm93QmFja0lvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja0lvcyc7XG5pbXBvcnQgeyBTbmFja2JhclByb3ZpZGVyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuLi9TZXR0aW5ncyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBIb21lIGZyb20gJy4uL0hvbWUnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMuanMnO1xuXG5jbGFzcyBIb21lRGlzcGF0Y2hlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBhcHBCYXJWYWx1ZTogJ0hPTUUnLCBmaXJzdExvYWQ6IHRydWUgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxvZ2dlcih0aGlzLCAnUG9wdXAgb3BlbmVkJyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAobmV3VmFsdWUpID0+ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXBwQmFyVmFsdWU6IG5ld1ZhbHVlLCBmaXJzdExvYWQ6IGZhbHNlfSk7XG4gICAgbG9nZ2VyKHRoaXMsICdTd2l0Y2ggdG8gJyArIG5ld1ZhbHVlKTtcbiAgfTtcblxuICBkaXNwYXRjaFBhZ2UoKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmFwcEJhclZhbHVlKSB7XG4gICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgcmV0dXJuIDxIb21lIHNrZWxldG9uPXt0aGlzLnN0YXRlLmZpcnN0TG9hZH0vPjtcbiAgICAgIGNhc2UgJ1NFVFRJTkdTJzpcbiAgICAgICAgcmV0dXJuIDxTZXR0aW5ncyAvPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8ZGl2PlRoaXMgaXMgYW4gZXJyb3IgcGFnZTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5SWNvbigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmFwcEJhclZhbHVlKSB7XG4gICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlKCdTRVRUSU5HUycpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25Db250YWluZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNldHRpbmdzSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ1NFVFRJTkdTJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlKCdIT01FJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXJyb3dCYWNrSW9zSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8ZGl2PlRoaXMgaXMgYW4gZXJyb3IgcGFnZTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U25hY2tiYXJQcm92aWRlclxuICAgICAgICBtYXhTbmFjaz17Mn1cbiAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgIHJvb3Q6IGNsYXNzZXMubm90aWZpY2F0aW9uLFxuICAgICAgICAgIHZhcmlhbnRTdWNjZXNzOiBjbGFzc2VzLnN1Y2Nlc3MsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhvbWVDb250YWluZXJ9PlxuICAgICAgICAgIDxQYXBlciBzcXVhcmU9e2ZhbHNlfSB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJTaGFkb3d9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZExvZ29UYWJzfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdGFiYnkudXNcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9e2NsYXNzZXMuZW5zZW1ibGVsb2dvfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4uLy4uL2Fzc2V0cy9zdGF0aWMvaWNvbnMvdGFiYnlfMi5wbmcnfSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0Z1bGx9IC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAge3RoaXMuZGlzcGxheUljb24oKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj57dGhpcy5kaXNwYXRjaFBhZ2UoKX08L2Rpdj5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU25hY2tiYXJQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVEaXNwYXRjaGVyO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lRGlzcGF0Y2hlciBmcm9tICcuL0hvbWVEaXNwYXRjaGVyJztcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiL1RhYic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGhvbWVDb250YWluZXI6IHtcbiAgICBtaW5XaWR0aDogNDAwLFxuICB9LFxuICBwYXBlclNoYWRvdzoge1xuICAgIGJveFNoYWRvdzogJzBweCAwcHggMXB4IC0xcHggcmdiYSgwLDAsMCwwLjMpLCAwcHggMHB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpLCAwcHggMHB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjMpJyxcbiAgfSxcbiAgdGFiOiB7XG4gICAgY29sb3I6ICcjMDBiOWFhJyxcbiAgfSxcbiAgbm90aWZpY2F0aW9uOiB7XG4gICAgbGVmdDogMTUwLFxuICB9LFxuICBncmlkTG9nb1RhYnM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgYWxsVGFiczoge1xuICAgIG1heFdpZHRoOiAnNzUlJyxcbiAgfSxcbiAgZW5zZW1ibGVsb2dvOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnbGVmdCcsXG4gIH0sXG4gIGxvZ29BdmF0YXI6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS4yNSksXG4gIH0sXG4gIGxvZ29GdWxsOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyLjI1KSxcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxMiksXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuMjUpLFxuICB9LFxuICBpY29uQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEuNSksXG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCM4MGUwYTcsICMwMGI5YWEpJyxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhvbWVEaXNwYXRjaGVyKTtcbiIsImltcG9ydCAqIGFzIGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5JztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcbmltcG9ydCBUdW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHVuZSc7XG5pbXBvcnQgSGVscE91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IZWxwT3V0bGluZSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcbmltcG9ydCB7IGNvcHkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscy5qcyc7XG5cbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgeyBSRUxBWEVELCBGT0NVU0VELCBDVVNUT01JWkVELCBJTklUX0ZPQ1VTRURfUFJPRklMRSB9IGZyb20gJy4uLy4uL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzJztcbmltcG9ydCB7IGNoZWNrU2V0dGluZ3MsIE9QVElNQUxfTlVNQkVSX1RBQlMsIFBPTElDWSwgSU5BQ1RJVkVfUE9MSUNZIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaXNJbnRlZ2VyLCByZW1vdmVJdGVtIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5cbmNvbnN0IExpZ2h0VG9vbHRpcCA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICB0b29sdGlwOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMSknLFxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gIH0sXG59KSkoVG9vbHRpcCk7XG5cbmNsYXNzIFNldHRpbmdzIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb2N1c2VkTW9kZTogZmFsc2UsXG4gICAgICByZWxheGVkTW9kZTogZmFsc2UsXG4gICAgICBjdXN0b21pemVkQm9vbDogZmFsc2UsXG4gICAgICBzZXR0aW5nczogSU5JVF9GT0NVU0VEX1BST0ZJTEUsXG4gICAgICBmb2N1c2VkV2luZG93SWQ6IHRydWUsXG4gICAgICBvcGVuTW9kYWw6IGZhbHNlLFxuICAgIH07XG4gICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChbJ2FjdGl2ZV9wcm9maWxlJywgJ3NldHRpbmdzJywgJ2ZvY3VzZWRfd2luZG93X2lkJywgJ2luYWN0aXZlX3BvbGljeSddKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IHByb2ZpbGUgPSByZXN1bHQuYWN0aXZlX3Byb2ZpbGUgfHwgRk9DVVNFRDtcbiAgICAgIGNvbnN0IGZvY3VzZWRNb2RlID0gcHJvZmlsZSA9PT0gRk9DVVNFRDtcbiAgICAgIGNvbnN0IHJlbGF4ZWRNb2RlID0gcHJvZmlsZSA9PT0gUkVMQVhFRDtcbiAgICAgIGNvbnN0IGN1c3RvbWl6ZWRCb29sID0gcHJvZmlsZSA9PT0gQ1VTVE9NSVpFRDtcbiAgICAgIGNvbnN0IHNldHRpbmdzID0gcmVzdWx0LnNldHRpbmdzIHx8IElOSVRfRk9DVVNFRF9QUk9GSUxFO1xuICAgICAgY29uc3QgZm9jdXNlZFdpbmRvd0lkID0gcmVzdWx0LmZvY3VzZWRfd2luZG93X2lkO1xuICAgICAgY29uc3QgaW5hY3RpdmVQb2xpY3kgPSByZXN1bHQuaW5hY3RpdmVfcG9saWN5O1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRNb2RlLFxuICAgICAgICByZWxheGVkTW9kZSxcbiAgICAgICAgY3VzdG9taXplZEJvb2wsXG4gICAgICAgIHNldHRpbmdzLFxuICAgICAgICBmb2N1c2VkV2luZG93SWQsXG4gICAgICAgIGluYWN0aXZlUG9saWN5LFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5vbkNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBjaGFuZ2VzU2V0dGluZ3MgPSBjaGFuZ2VzWydzZXR0aW5ncyddO1xuICAgICAgY29uc3QgY2hhbmdlc1Byb2ZpbGUgPSBjaGFuZ2VzWydhY3RpdmVfcHJvZmlsZSddO1xuICAgICAgY29uc3QgY2hhbmdlZEluYWN0aXZlUG9saWN5ID0gY2hhbmdlc1snaW5hY3RpdmVfcG9saWN5J107XG4gICAgICBpZiAoY2hhbmdlc1NldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNldHRpbmdzOiBjaGFuZ2VzU2V0dGluZ3NbJ25ld1ZhbHVlJ10sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZXNQcm9maWxlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZvY3VzZWRNb2RlOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gRk9DVVNFRCxcbiAgICAgICAgICByZWxheGVkTW9kZTogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IFJFTEFYRUQsXG4gICAgICAgICAgY3VzdG9taXplZEJvb2w6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBDVVNUT01JWkVELFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkSW5hY3RpdmVQb2xpY3kpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluYWN0aXZlUG9saWN5OiBjaGFuZ2VkSW5hY3RpdmVQb2xpY3lbJ25ld1ZhbHVlJ10gfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBoYW5kbGVCb29sQ2hhbmdlKGNoYW5nZVR5cGUpIHtcbiAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QUk9GSUxFJyxcbiAgICAgIHByb2ZpbGU6IGNoYW5nZVR5cGUsXG4gICAgfSk7XG4gICAgaWYgKGNoYW5nZVR5cGUgPT09IFJFTEFYRUQgfHwgY2hhbmdlVHlwZSA9PT0gRk9DVVNFRCkge1xuICAgICAgdGhpcy5ub3RpZnlVc2VyKHRydWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeS5pbmNsdWRlcyh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3dpdGNoKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKSB7XG4gICAgLy8gVE9ETyBBZGQgZnVuY3Rpb24gdG8gY2hlY2sgZm9yIGFsbCBwb3RlbnRpYWwgdmFsdWVzXG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICBpZiAoY2hlY2tTZXR0aW5ncyh0aGlzLnN0YXRlLnNldHRpbmdzKSkge1xuICAgICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QQVJBTUVURVJTJyxcbiAgICAgICAgc2V0dGluZ3M6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgICB9KTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLm5vdGlmeVVzZXIoc3VjY2Vzcyk7XG4gIH1cblxuICBub3RpZnlVc2VyKHN1Y2Nlc3MpIHtcbiAgICB0aGlzLnByb3BzLmVucXVldWVTbmFja2JhcihzdWNjZXNzID8gJ05ldyBTZXR0aW5ncyBhcmUgc2F2ZWQuJyA6ICdTZXR0aW5ncyBjYW5ub3QgYmUgc2F2ZWQuJywge1xuICAgICAgdmFyaWFudDogc3VjY2VzcyA/ICdzdWNjZXNzJyA6ICdlcnJvcicsXG4gICAgICBhbmNob3JPcmlnaW46IHtcbiAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogNzUwLFxuICAgICAgYXV0b0hpZGVEdXJhdGlvbjogMTUwMCxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZVBhcmFtZXRlcnMocGF0aCwgcGFyYW1ldGVyKSB7XG4gICAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgICAgbGV0IHNldHRpbmdzID0gY29weSh0aGlzLnN0YXRlLnNldHRpbmdzKTtcbiAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIGlmIChpc0ludGVnZXIobmV4dFZhbHVlKSB8fCBuZXh0VmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNldHRpbmdzW3BhdGhdW3BhcmFtZXRlcl0gPSBwYXJzZUludChuZXh0VmFsdWUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2V0dGluZ3M6IHNldHRpbmdzIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTd2l0Y2goKSB7XG4gICAgbGV0IGluYWN0aXZlUG9saWN5ID0gdGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeTtcblxuICAgIGlmIChpbmFjdGl2ZVBvbGljeS5pbmNsdWRlcyh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCkpIHtcbiAgICAgIGluYWN0aXZlUG9saWN5ID0gcmVtb3ZlSXRlbShpbmFjdGl2ZVBvbGljeSwgdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpO1xuICAgICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZVR5cGU6ICdSRU1PVkVfSU5BQ1RJVkVfUE9MSUNZJyxcbiAgICAgICAgd2luZG93SWQ6IHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluYWN0aXZlUG9saWN5LnB1c2godGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpO1xuICAgICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZVR5cGU6ICdBRERfSU5BQ1RJVkVfUE9MSUNZJyxcbiAgICAgICAgd2luZG93SWQ6IHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbmFjdGl2ZVBvbGljeTogaW5hY3RpdmVQb2xpY3kgfSk7XG4gIH1cblxuICBoYW5kbGVPcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuTW9kYWw6IHRydWUgfSk7XG4gIH1cblxuICBoYW5kbGVDbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1vZGFsOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5wdXRzUGFyYW1ldGVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdPcHRpbWFsIHRhYnMgbnVtYmVyJyxcbiAgICAgICAgc291cmNlOiB0aGlzLnN0YXRlLnNldHRpbmdzLFxuICAgICAgICBwYXRoOiBQT0xJQ1ksXG4gICAgICAgIHBhcmFtZXRlcjogT1BUSU1BTF9OVU1CRVJfVEFCUyxcbiAgICAgICAgaW5wdXRQcm9wczogeyBtaW46ICcxJywgbWF4OiAnMTAwJywgc3RlcDogJzEnIH0sXG4gICAgICB9LFxuICAgIF07XG4gICAgY29uc3QgbGlzdEl0ZW1zUGFyYW1ldGVycyA9IGlucHV0c1BhcmFtZXRlcnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzKGl0ZW0ucGF0aCwgaXRlbS5wYXJhbWV0ZXIpLmJpbmQodGhpcyl9XG4gICAgICAgIHZhbHVlPXtpdGVtLnNvdXJjZVtpdGVtLnBhdGhdW2l0ZW0ucGFyYW1ldGVyXX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIG9uS2V5VXA9eyhldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykgdGhpcy5oYW5kbGVTYXZlUGFyYW1ldGVycygpO1xuICAgICAgICB9fVxuICAgICAgICBpbnB1dFByb3BzPXtpdGVtLmlucHV0UHJvcHN9XG4gICAgICAvPlxuICAgICkpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluQmxvY2t9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQgJiYgdGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeVxuICAgICAgICAgICAgICAgICAgICA/ICF0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5LmluY2x1ZGVzKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKVxuICAgICAgICAgICAgICAgICAgICA6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3dpdGNoLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zd2l0Y2hXcmFwcGVyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN3aXRjaENvbnRhaW5lcn1cbiAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+RW5hYmxlIG9uIHRoaXMgd2luZG93PC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmludHJvZHVjdGlvbkJsb2NrfT5cbiAgICAgICAgICAgIDxUdW5lSWNvbiAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmFtZXRlcnNUaXRsZX0+U2VsZWN0IHlvdXIgcHJvZmlsZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtjbGFzc2VzLnNldHRpbmdzV3JhcHBlcn0+XG4gICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPXsndGFiYnkgdGVuZHMgdG8ga2VlcCA1IHRhYnMnfSBwbGFjZW1lbnQ9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0UHJvZmlsZXNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5mb2N1c2VkTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVCb29sQ2hhbmdlKEZPQ1VTRUQpfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tib3hXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5Gb2N1czwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCb29sZWFuc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxIZWxwT3V0bGluZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmhlbHBJY29ufSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxuICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT17J3RhYmJ5IHRlbmRzIHRvIGtlZXAgMTIgdGFicyd9IHBsYWNlbWVudD1cImxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RQcm9maWxlc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnJlbGF4ZWRNb2RlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoUkVMQVhFRCl9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveFdyYXBwZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlJlbGF4PC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEhlbHBPdXRsaW5lSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaGVscEljb259IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbWl6ZVdyYXBwZXJ9PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUJvb2xDaGFuZ2UoQ1VTVE9NSVpFRCl9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrYm94V3JhcHBlcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+Q3VzdG9taXplPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCb29sZWFuc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NCbG9ja30+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbCByZXF1aXJlZCBmdWxsV2lkdGg+XG4gICAgICAgICAgICAgICAge2xpc3RJdGVtc1BhcmFtZXRlcnN9XG4gICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgaGlkZGVuIGtleT1cImhpZGRlbi10ZXh0ZmllbGRcIiBkaXNhYmxlZCAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kYXJ5QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgb25DbGljaz17dGhpcy5oYW5kbGVPcGVuLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXBzQnV0dG9ufT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbFRpcHN9PkhlbHA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIC8vZGlzYWJsZVBvcnRhbD17dHJ1ZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVuTW9kYWx9XG4gICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXG4gICAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxuICAgICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcbiAgICAgICAgICAgIHRpbWVvdXQ6IDc1MCxcbiAgICAgICAgICAgIGludmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEZhZGUgaW49e3RoaXMuc3RhdGUub3Blbk1vZGFsfT5cbiAgICAgICAgICAgIDxCb3ggYm9yZGVyUmFkaXVzPXs2fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJsb2NrTW9kYWx9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZEVuc2VtYmxlfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5Qcm90ZWN0IGEgdGFiPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGFzdEVuc2VtYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycuLi8uLi9hc3NldHMvc3RhdGljL2ljb25zL3JpZ2h0X2NsaWNrLnBuZyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0Q2xpY2tXcmFwcGVyfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT4rPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+UGluPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kRW5zZW1ibGV9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlJlb3BlbiBtdWx0aXBsZSB0YWJzPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRFbnNlbWJsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5DdHJsPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT4rPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4uLy4uL2Fzc2V0cy9zdGF0aWMvaWNvbnMvbGVmdF9jbGljay5wbmcnfSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdENsaWNrV3JhcHBlcn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkhvdyBkb2VzIHRhYmJ5IHdvcms/PC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsTmV4dH0+XG4gICAgICAgICAgICAgICAgdGFiYnkgd2lsbCBub3QgcmVtb3ZlIHRhYnMgcmlnaHQgYWZ0ZXIgdGhlaXIgY3JlYXRpb24ueycgJ31cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsTmV4dH0+XG4gICAgICAgICAgICAgICAgdGFiYnkgdGFrZXMgd2VsbC10aG91Z2h0LW91dCBkZWNpc2lvbnMgYXV0b21hdGljYWxseS5cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlck1vZGFsfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90YWJieS51cy9mYXFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsVGlwc30+RkFRIGF2YWlsYWJsZSBoZXJlPC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsVGlwc30+XG4gICAgICAgICAgICAgICAgICB0YWJieSB7YnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbn1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTbmFja2JhcihTZXR0aW5ncyk7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vU2V0dGluZ3MnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHNldHRpbmdzV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIG1hcmdpblRvcDogNSxcbiAgICBtYXJnaW5MZWZ0OiA0NyxcbiAgICBtYXJnaW5SaWdodDogMjAsXG4gIH0sXG4gIHNlY29uZGFyeUJ1dHRvbjoge1xuICAgIG1hcmdpblRvcDogMTgsXG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcblxuICAgIG1heFdpZHRoOiAyMCxcbiAgfSxcblxuICBub3RpZmljYXRpb246IHtcbiAgICBtYXhXaWR0aDogMTUwLFxuICB9LFxuICBpbnRyb2R1Y3Rpb25CbG9jazoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3N0YXJ0JyxcbiAgICBtYXJnaW5MZWZ0OiA3LFxuICB9LFxuICBwYXJhbWV0ZXJzVGl0bGU6IHtcbiAgICAvL2ZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTcsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gICAgbWFyZ2luTGVmdDogMTYsXG4gIH0sXG4gIHNldHRpbmdzQmxvY2s6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtYXJnaW5MZWZ0OiAzMixcbiAgICBtYXJnaW5Ub3A6IDQsXG4gIH0sXG4gIGZpcnN0Qm9vbGVhbnM6IHtcbiAgICBtYXhXaWR0aDogJzM2JScsXG4gICAgbWluV2lkdGg6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgbWF4SGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5Ub3A6IDUsXG4gICAgLy8gcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICB9LFxuICBmaXJzdFByb2ZpbGVzQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIG1heFdpZHRoOiB0aGVtZS5zcGFjaW5nKDEwKSxcbiAgfSxcblxuICBzdHlsZUxhYmVsOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICB9LFxuICBjaGVja2JveFdyYXBwZXI6IHtcbiAgICBwb2ludGVyRXZlbnRzOiAnYXV0bycsXG4gIH0sXG4gIHN3aXRjaENvbnRhaW5lcjoge1xuICAgIG1heEhlaWdodDogMjAsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIH0sXG4gIHN3aXRjaFdyYXBwZXI6IHtcbiAgICBwb2ludGVyRXZlbnRzOiAnYXV0bycsXG4gIH0sXG4gIHRleHRGaWVsZDoge1xuICAgIG1heFdpZHRoOiAnODUlJyxcbiAgfSxcbiAgY3VzdG9taXplV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3N0YXJ0JyxcbiAgICBhbGlnbkl0ZW1zOiAnc3RhcnQnLFxuICB9LFxuICBoZWxwSWNvbjoge1xuICAgIGNvbG9yOiAnI2U1NWMwMCcsXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygwLjI1KSxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBtb2RhbDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNCknLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXG4gIH0sXG4gIG1haW5CbG9jazoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAvL2JvcmRlcjogJzAuNXB4IHNvbGlkICM1QTVBNUEnLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygzKSxcblxuICAgIG9wYWNpdHk6ICcxICFpbXBvcnRhbnQnLFxuICB9LFxuICBib3hDdHJsOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICM1QTVBNUEnLFxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygyLjUpLFxuICAgIC8vcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcbiAgICAvL21hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgLy9tYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygzKSxcblxuICAgIG9wYWNpdHk6ICcxICFpbXBvcnRhbnQnLFxuICB9LFxuICBsZWZ0Q2xpY2tXcmFwcGVyOiB7XG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICB9LFxuICBzZWNvbmRFbnNlbWJsZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1pbldpZHRoOiAnMzAlJyxcbiAgfSxcbiAgbGFzdEVuc2VtYmxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWluV2lkdGg6ICcyNy41JScsXG4gIH0sXG4gIGZpcnN0QmxvY2tNb2RhbDoge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgdGlwc0J1dHRvbjoge1xuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMCksXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgIHBhZGRpbmdSaWdodDogMCxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcbiAgfSxcbiAgc3R5bGVMYWJlbFRpcHM6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gICAgY29sb3I6ICdyZ2JhKDE1MCwgMTUwLCAxNTAsIDEpJyxcbiAgfSxcbiAgc3R5bGVMYWJlbE5leHQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgfSxcbiAgZm9vdGVyTW9kYWw6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS41KSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAvLyBtaW5XaWR0aDogJzEwMCUnLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoU2V0dGluZ3MpO1xuIiwiZXhwb3J0IGNvbnN0IE9QVElNQUxfTlVNQkVSX1RBQlMgPSAndGFyZ2V0X3RhYnMnO1xuZXhwb3J0IGNvbnN0IFBPTElDWSA9ICdwb2xpY3knO1xuZXhwb3J0IGNvbnN0IElOQUNUSVZFX1BPTElDWSA9ICdpbmFjdGl2ZV9wb2xpY3knO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTZXR0aW5ncyhzZXR0aW5ncykge1xuICBpZiAoc2V0dGluZ3NbUE9MSUNZXVtPUFRJTUFMX05VTUJFUl9UQUJTXSAmJiBzZXR0aW5nc1tQT0xJQ1ldW09QVElNQUxfTlVNQkVSX1RBQlNdID4gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiY29uc3QgU0NPUkVSID0gJ3YxJzsgLy8gb25seSBkZWZhdWx0IGltcGxlbWVudGVkXG5jb25zdCBNQVhJTVVNX1NDT1JFID0gMTA7IC8vIG1heCBzY29yZSBmb3Igc2NvcmVyXG5jb25zdCBNQVhJTVVNX0hJU1RPUllfU0laRSA9IDEwMDA7IC8vIG1heCBraWxsZWQgdGFiIGhpc3RvcnkgaW4gbWVtb3J5XG5jb25zdCBTRVNTSU9OU19USU1FT1VUX01TID0gMjAwOyAvLyB3aGVuIGEgdGFiIGlzIGtpbGxlZCB3ZSBuZWVkIGEgdGltZW91dCB0byByZXRyaWV2ZSB0aGUgc2Vzc2lvbklkXG5jb25zdCBTRVNTSU9OU19SRVRSSUVTID0gNTsgLy8gaG93IG1hbnkgdHJpZXMgdG8gcmV0cmlldmUgdGhlIHNlc3Npb24gSUQgb2YgYSBraWxsZWQgdGFiXG5jb25zdCBTRVNTSU9OU19NQVhfRlVaWllfREVMVEFfTVMgPSAxMDAwICogNTsgLy8gdGltZSBpcyBmdXp6eSBtYXRjaGVkIHRvIHJldGlyZXZlIHRoZSBjb3JyZWN0IHNlc3Npb25JRCwgc2hvdWxkIGJlIGhpZ2hlciB0aGFuIFNFU1NJT05TX1RJTUVPVVRfTVNcbmNvbnN0IE1JTl9BQ1RJVkVfREVCT1VOQ0UgPSAxMDAwICogMjsgLy8gbWluaW11bSBhY3RpdmUgcmVhZGluZyBvbiBhIHRhYiB0byBiZSBjb3VudGVkIGFzIHZhbGlkICd1c2VmdWwnIHRpbWVcbmNvbnN0IE1BWF9BQ1RJVkVfREVCT1VOQ0UgPSAxMDAwICogNjAgKiA1OyAvLyBtYXhpbXVtIHRpbWUgd2l0aG91dCBhbnkgdXNlciBpbnB1dCBiZWZvcmUgaXQgaXMgY29uc2lkZXJlZCBpZGxlZCwgbXVzdCBiZSBoaWdoZXIgdGhhbiAxNXNlY1xuY29uc3QgRlJPTlRFTkRfU0tFTEVUT05fRElTUExBWSA9IDMzMDsgLy8gaG93IGxvbmcgdG8gZGlzcGxheSB0aGUgZmFrZSBkaXNwbGF5IGluIG1zXG5cbmV4cG9ydCB7XG4gIFNDT1JFUixcbiAgTUFYSU1VTV9TQ09SRSxcbiAgTUFYSU1VTV9ISVNUT1JZX1NJWkUsXG4gIFNFU1NJT05TX1RJTUVPVVRfTVMsXG4gIFNFU1NJT05TX1JFVFJJRVMsXG4gIFNFU1NJT05TX01BWF9GVVpaWV9ERUxUQV9NUyxcbiAgTUlOX0FDVElWRV9ERUJPVU5DRSxcbiAgTUFYX0FDVElWRV9ERUJPVU5DRSxcbiAgRlJPTlRFTkRfU0tFTEVUT05fRElTUExBWSxcbn07XG4iLCJjb25zdCBSRUxBWEVEID0gJ3JlbGF4ZWQnO1xuY29uc3QgRk9DVVNFRCA9ICdmb2N1c2VkJztcbmNvbnN0IENVU1RPTUlaRUQgPSAnY3VzdG9taXplZCc7XG52YXIgSU5JVF9SRUxBWEVEX1BST0ZJTEUgPSB7fTtcbnZhciBJTklUX0ZPQ1VTRURfUFJPRklMRSA9IHt9O1xuXG5pZiAoRU5WID09PSAnZGVidWcnKSB7XG4gIElOSVRfUkVMQVhFRF9QUk9GSUxFID0ge1xuICAgIG1lbW9yeToge1xuICAgICAgY2FjaGVfc2l6ZTogNSxcbiAgICAgIG1pbl90aW1lX2Z1bGxfc3RhdHNfdXBkYXRlOiAxICogMTAwMCwgLy8gbWluaW11bSB0aW1lIGJldHdlZW4gMiBmdWxsIHN0YXRzIHVwZGF0ZSBmb3IgYWxsIHRhYnNcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiA1ICogMTAwMCwgLy8gbWluaW11bSB0aW1lIGJldHdlZW4gMiBmdWxsIHRhYiBnYXJiYWdlIGNvbGxlY3Rpb25cbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgdGFyZ2V0X3RhYnM6IDEyLCAvLyB0YWJieSB3aWxsIHN0b3AgY2xvc2luZyB0YWJzIHdoZW4gd2UgaGF2ZSBsZXNzIHRoYW4gdGFyZ2V0X3RhYnMgb3BlblxuICAgICAgZGVjYXk6IDAuOCwgLy8gd2hlbiB0aGUgbnVtYmVyIG9mIHRhYiBpbmNyZWFzZXMsIHRhYmJ5IHdpbGwgZGVsZXRlIG1vcmUgdGFic1xuICAgICAgbWluX3RpbWU6IDMgKiAxMDAwLCAvLyBUYWJieSB3aWxsIGtpbGwgYWJvdXQgMSB0YWIgcGVyIG1pbl90aW1lIChkZXBlbmRpbmcgb24gYWN0aXZhdGlvbiBydWxlcylcblxuICAgICAgLy8gSUdOT1JFRCB0YWJzXG4gICAgICBhY3RpdmU6IGZhbHNlLCAvLyB0aGVzZSBzdGF0dXMgYXJlIGFic29sdXRlbHkgcHJvdGVjdGVkIHRhYnM6IHRoZXNlIGFyZSBpZ25vcmVkIGFuZCBkbyBub3QgY291bnQgYXMgdGFicy5cbiAgICAgIHBpbm5lZDogdHJ1ZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICAvLyBQUk9URUNURUQgdGFic1xuICAgICAgYWN0aXZlOiB0cnVlLCAvLyB0aGVzZSB0YWJzIHdpbGwgYmUgZ2l2ZW4gYWJzb2x1dGUgbWF4aW11bSBzY29yZSArIGV4dGVuZGVkIHByb3RlY3Rpb25cbiAgICAgIHBpbm5lZDogdHJ1ZSwgLy8gd2hlbiB0aGUgc3RhdHVzIGlzIGxvc3QuXG4gICAgICBhdWRpYmxlOiB0cnVlLFxuXG4gICAgICBtaW5fYWN0aXZlOiA1ICogMTAwMCwgLy8gbWluaW11bSB0aW1lIGEgdGFiIGhhcyB0byBleGlzdCBiZWZvcmUgYmVpbmcgc2NvcmVkXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogMTAwMCwgLy8gQSByZXN0b3JlZCB0YWIgaXMgcHJvdGVjdGVkIGZvciB0aGlzIGxvbmdcbiAgICAgIGNhY2hlZF9kZWNheTogMC4yLCAvLyBJbiBjdXJyZW50IHNjb3JlciwgdGhlIGNhY2hlIHNjb3JlIGlzIGFkZGVkIHRvIHRoZSBjdXJyZW50IHNjb3JlIHdpdGggYSBkZWNyZWFzaW5nIGZhY3RvclxuICAgIH0sXG4gIH07XG5cbiAgSU5JVF9GT0NVU0VEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEgKiAxMDAwLFxuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDUgKiAxMDAwLFxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICB0YXJnZXRfdGFiczogNSxcbiAgICAgIGRlY2F5OiAwLjgsXG4gICAgICBtaW5fdGltZTogMyAqIDEwMDAsXG5cbiAgICAgIC8vIElHTk9SRUQgdGFic1xuICAgICAgYWN0aXZlOiBmYWxzZSwgLy8gdGhlc2Ugc3RhdHVzIGFyZSBhYnNvbHV0ZWx5IHByb3RlY3RlZCB0YWJzOiB0aGVzZSBhcmUgaWdub3JlZCBhbmQgZG8gbm90IGNvdW50IGFzIHRhYnMuXG4gICAgICBwaW5uZWQ6IHRydWUsXG4gICAgICBhdWRpYmxlOiBmYWxzZSxcbiAgICB9LFxuICAgIHNjb3Jlcjoge1xuICAgICAgLy8gUFJPVEVDVEVEIHRhYnNcbiAgICAgIGFjdGl2ZTogdHJ1ZSwgLy8gdGhlc2UgdGFicyB3aWxsIGJlIGdpdmVuIGFic29sdXRlIG1heGltdW0gc2NvcmUgKyBleHRlbmRlZCBwcm90ZWN0aW9uXG4gICAgICBwaW5uZWQ6IHRydWUsIC8vIHdoZW4gdGhlIHN0YXR1cyBpcyBsb3N0LlxuICAgICAgYXVkaWJsZTogdHJ1ZSxcblxuICAgICAgbWluX2FjdGl2ZTogNSAqIDEwMDAsXG4gICAgICBwcm90ZWN0aW9uX3RpbWU6IDE1ICogMTAwMCxcbiAgICAgIGNhY2hlZF9kZWNheTogMC4yLFxuICAgIH0sXG4gIH07XG59IGVsc2Uge1xuICBJTklUX1JFTEFYRURfUFJPRklMRSA9IHtcbiAgICBtZW1vcnk6IHtcbiAgICAgIGNhY2hlX3NpemU6IDUsXG4gICAgICBtaW5fdGltZV9mdWxsX3N0YXRzX3VwZGF0ZTogMTAgKiAxMDAwLFxuICAgICAgbWluX3RpbWVfZ2FyYmFnZV9jb2xsZWN0b3I6IDEwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgcG9saWN5OiB7XG4gICAgICB0YXJnZXRfdGFiczogMTIsXG4gICAgICBkZWNheTogMC45LFxuICAgICAgbWluX3RpbWU6IDQ1ICogMTAwMCxcblxuICAgICAgLy8gSUdOT1JFRCB0YWJzXG4gICAgICBhY3RpdmU6IGZhbHNlLCAvLyB0aGVzZSBzdGF0dXMgYXJlIGFic29sdXRlbHkgcHJvdGVjdGVkIHRhYnM6IHRoZXNlIGFyZSBpZ25vcmVkIGFuZCBkbyBub3QgY291bnQgYXMgdGFicy5cbiAgICAgIHBpbm5lZDogdHJ1ZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICAvLyBQUk9URUNURUQgdGFic1xuICAgICAgYWN0aXZlOiB0cnVlLCAvLyB0aGVzZSB0YWJzIHdpbGwgYmUgZ2l2ZW4gYWJzb2x1dGUgbWF4aW11bSBzY29yZSArIGV4dGVuZGVkIHByb3RlY3Rpb25cbiAgICAgIHBpbm5lZDogdHJ1ZSwgLy8gd2hlbiB0aGUgc3RhdHVzIGlzIGxvc3QuXG4gICAgICBhdWRpYmxlOiB0cnVlLFxuXG4gICAgICBtaW5fYWN0aXZlOiA1ICogNjAgKiAxMDAwLFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDYwICogMTAwMCxcbiAgICAgIGNhY2hlZF9kZWNheTogMC4yLFxuICAgIH0sXG4gIH07XG5cbiAgSU5JVF9GT0NVU0VEX1BST0ZJTEUgPSB7XG4gICAgbWVtb3J5OiB7XG4gICAgICBjYWNoZV9zaXplOiA1LFxuICAgICAgbWluX3RpbWVfZnVsbF9zdGF0c191cGRhdGU6IDEwICogMTAwMCxcbiAgICAgIG1pbl90aW1lX2dhcmJhZ2VfY29sbGVjdG9yOiAxMCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIHBvbGljeToge1xuICAgICAgdGFyZ2V0X3RhYnM6IDUsXG4gICAgICBkZWNheTogMC45LFxuICAgICAgbWluX3RpbWU6IDQ1ICogMTAwMCxcblxuICAgICAgLy8gSUdOT1JFRCB0YWJzXG4gICAgICBhY3RpdmU6IGZhbHNlLCAvLyB0aGVzZSBzdGF0dXMgYXJlIGFic29sdXRlbHkgcHJvdGVjdGVkIHRhYnM6IHRoZXNlIGFyZSBpZ25vcmVkIGFuZCBkbyBub3QgY291bnQgYXMgdGFicy5cbiAgICAgIHBpbm5lZDogdHJ1ZSxcbiAgICAgIGF1ZGlibGU6IGZhbHNlLFxuICAgIH0sXG4gICAgc2NvcmVyOiB7XG4gICAgICAvLyBQUk9URUNURUQgdGFic1xuICAgICAgYWN0aXZlOiB0cnVlLCAvLyB0aGVzZSB0YWJzIHdpbGwgYmUgZ2l2ZW4gYWJzb2x1dGUgbWF4aW11bSBzY29yZSArIGV4dGVuZGVkIHByb3RlY3Rpb25cbiAgICAgIHBpbm5lZDogdHJ1ZSwgLy8gd2hlbiB0aGUgc3RhdHVzIGlzIGxvc3QuXG4gICAgICBhdWRpYmxlOiB0cnVlLFxuXG4gICAgICBtaW5fYWN0aXZlOiA1ICogNjAgKiAxMDAwLFxuICAgICAgcHJvdGVjdGlvbl90aW1lOiAxNSAqIDYwICogMTAwMCxcbiAgICAgIGNhY2hlZF9kZWNheTogMC4yLFxuICAgIH0sXG4gIH07XG59XG5cbk9iamVjdC5mcmVlemUoSU5JVF9GT0NVU0VEX1BST0ZJTEUpO1xuT2JqZWN0LmZyZWV6ZShJTklUX1JFTEFYRURfUFJPRklMRSk7XG5cbmV4cG9ydCB7IFJFTEFYRUQsIEZPQ1VTRUQsIENVU1RPTUlaRUQsIElOSVRfRk9DVVNFRF9QUk9GSUxFLCBJTklUX1JFTEFYRURfUFJPRklMRSB9O1xuIiwiaW1wb3J0ICogYXMgcHNsIGZyb20gJ3BzbCc7XG5pbXBvcnQgKiBhcyBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBNQVhfQUNUSVZFX0RFQk9VTkNFIH0gZnJvbSAnLi4vY29uZmlnL2Vudi5qcyc7XG5cbmNvbnN0IGxvZ2dlciA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gIGlmIChFTlYgPT09ICdkZWJ1ZycgfHwgRU5WID09PSAnZGV2Jykge1xuICAgIGxldCBkZWZhdWx0X2Zvcm1hdCA9IFsnZm9udC13ZWlnaHQ6aW5pdGlhbDsgY29sb3I6YmxhY2s7J107XG4gICAgbGV0IHByZSA9ICclYycgKyBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCkgKyAnJWMnO1xuICAgIGxldCBvcHRpb25zID0gWydmb250LXdlaWdodDpsaWdodGVyOyBjb2xvcjpMaWdodFNsYXRlR3JleTsnXTtcbiAgICBvcHRpb25zLnB1c2goZGVmYXVsdF9mb3JtYXQpO1xuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHByZSArPSAnIHwgJWMnICsgYXJnc1swXS5jb25zdHJ1Y3Rvci5uYW1lICsgJyVjIHwgJztcbiAgICAgIHByZSArPSBhcmdzWzFdO1xuICAgICAgb3B0aW9ucy5wdXNoKCdjb2xvcjojMWRhODdjOyBmb250LXdlaWdodDpib2xkZXInKTtcbiAgICAgIG9wdGlvbnMucHVzaChkZWZhdWx0X2Zvcm1hdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZSArPSAnIHwgJyArIGFyZ3NbMF07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHByZSwgLi4ub3B0aW9ucyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNvcHkob2JqKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG5mdW5jdGlvbiB0aW1lb3V0KG1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5mdW5jdGlvbiBnZXREb21haW4oc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBzbC5wYXJzZShuZXcgVVJMKHN0cikuaG9zdG5hbWUpLmRvbWFpbjtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIC9eXFxkKyQvLnRlc3QodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZXRBbGxSZWFkQmFkZ2UoKSB7XG4gIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiAnJyB9KTsgLy8gPC0tIHNldCB0ZXh0IHRvICcnIHRvIHJlbW92ZSB0aGUgYmFkZ2Vcbn1cblxuZnVuY3Rpb24gc2V0VW5yZWFkQmFkZ2UoKSB7XG4gIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRCYWRnZUJhY2tncm91bmRDb2xvcih7IGNvbG9yOiBbMjI5LCA5MiwgMCwgMTI4XSB9KTtcbiAgYnJvd3Nlci5icm93c2VyQWN0aW9uLmdldEJhZGdlVGV4dCh7fSkudGhlbihmdW5jdGlvbiAoYmFkZ2VUZXh0KSB7XG4gICAgbGV0IGNvdW50ZXIgPSAxO1xuICAgIGlmIChpc0ludGVnZXIoYmFkZ2VUZXh0KSkge1xuICAgICAgY291bnRlciA9IHBhcnNlSW50KGJhZGdlVGV4dCkgKyAxO1xuICAgIH1cbiAgICBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogYCR7Y291bnRlcn1gIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNVc2VyQWN0aXZlKCkge1xuICAvLyBOb3QgY29tcGF0aWJsZSB3aXRoIFNhZmFyaVxuICByZXR1cm4gYnJvd3Nlci5pZGxlLnF1ZXJ5U3RhdGUoTWF0aC5yb3VuZChNQVhfQUNUSVZFX0RFQk9VTkNFIC8gMTAwMCkpLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09ICdhY3RpdmUnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dnZXIoXCJDb3VsZG4ndCBjaGVjayB1c2VyIGFjdGl2aXR5LlwiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0b3JhZ2VSZXNldCgpIHtcbiAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbFxuICAgIC5nZXQobnVsbClcbiAgICAudGhlbigoZCkgPT4ge1xuICAgICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5yZW1vdmUoT2JqZWN0LmtleXMoZCkpO1xuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgbG9nZ2VyKCdNZW1vcnkgZmx1c2hlZC4nKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdEZvY3VzZWRXaW5kb3coKSB7XG4gIC8vIHdpbmRvd1R5cGUgaXMgZGVwcmVjYXRlZCBpbiBGRiwgaXQgZG9lc24ndCBzZWVtIGNyaXRpY2FsIGFueXdheXNcbiAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5nZXRMYXN0Rm9jdXNlZCh7IHBvcHVsYXRlOiBmYWxzZSB9KS50aGVuKChkKSA9PiB7XG4gICAgcmV0dXJuIGQuaWQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtKGFyciwgdmFsdWUpIHtcbiAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZih2YWx1ZSk7XG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuY29uc3QgcmV0cnlQcm9taXNlID0gKGZ1bmMsIGRlbGF5LCB0aW1lcykgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJldHVybiBmdW5jKClcbiAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICBpZiAocmVhc29uID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiByZWplY3QocmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZXMgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRpbWVvdXQoZGVsYXkpXG4gICAgICAgICAgICAudGhlbihyZXRyeVByb21pc2UuYmluZChudWxsLCBmdW5jLCBkZWxheSwgdGltZXMgLSAxKSlcbiAgICAgICAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVqZWN0KHJlYXNvbik7XG4gICAgICB9KTtcbiAgfSk7XG5cbmxvZ2dlcignU3RhcnRpbmcgaW4gJyArIEVOViArICcgZW52LicpO1xuZXhwb3J0IHtcbiAgbG9nZ2VyLFxuICBjb3B5LFxuICB0aW1lb3V0LFxuICByZXRyeVByb21pc2UsXG4gIGdldERvbWFpbixcbiAgc2V0QWxsUmVhZEJhZGdlLFxuICBzZXRVbnJlYWRCYWRnZSxcbiAgaXNJbnRlZ2VyLFxuICBpc1VzZXJBY3RpdmUsXG4gIHN0b3JhZ2VSZXNldCxcbiAgZ2V0TGFzdEZvY3VzZWRXaW5kb3csXG4gIHJlbW92ZUl0ZW0sXG59O1xuaWYgKEVOViA9PT0gJ2RlYnVnJykge1xuICB3aW5kb3cudXRpbHMgPSB7XG4gICAgbG9nZ2VyLFxuICAgIGNvcHksXG4gICAgdGltZW91dCxcbiAgICByZXRyeVByb21pc2UsXG4gICAgZ2V0RG9tYWluLFxuICAgIHNldEFsbFJlYWRCYWRnZSxcbiAgICBzZXRVbnJlYWRCYWRnZSxcbiAgICBpc0ludGVnZXIsXG4gICAgaXNVc2VyQWN0aXZlLFxuICAgIHN0b3JhZ2VSZXNldCxcbiAgICBnZXRMYXN0Rm9jdXNlZFdpbmRvdyxcbiAgICByZW1vdmVJdGVtLFxuICB9O1xufVxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIWJvb3RzdHJhcC1jc3Mtb25seS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMuaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FyZC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWI5ZTc0O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmJvbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG46Zm9jdXMge291dGxpbmU6MCAhaW1wb3J0YW50O31cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLXNnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1zZy5qc1wiLFxuXHRcIi4vZW4tc2cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9maWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tZGV2YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWRldmEuanNcIixcblx0XCIuL2dvbS1kZXZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vb2MtbG5jXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL29jLWxuYy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RrLmpzXCIsXG5cdFwiLi90ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLW1vXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtbW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwb3B1cFwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9hcHAvcG9wdXAuanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2xvZGFzaF9sb2Rhc2hfanMtbm9kZV9tb2R1bGVzX3BzbF9pbmRleF9qcy1ub2RlX21vZHVsZXNfd2ViZXh0ZW5zaW9uLXBvbC0zNTdhNGRcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfVHlwb2dyYXBoeV9UeXBvZ3JhcGh5X2pzLW5vZGVfbW9kdWxlc19tYXRlcmlhbC11aV9jb3JlXy03MmFhZTFcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSAoKSA9PiB7XG5cbn07XG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIHJlc2V0IHN0YXJ0dXAgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIG1vcmUgc3RhcnR1cCBjb2RlIGlzIGFkZGVkXG5cdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHR9XG5cdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbM107XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuXHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcblx0fVxuXG5cdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3Rcblx0aWYoZXhlY3V0ZU1vZHVsZXMpIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuXG5cdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbn07XG5cbnZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wdGtfY2hyb21lXCJdID0gd2luZG93W1wid2VicGFja0pzb25wdGtfY2hyb21lXCJdIHx8IFtdO1xudmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbmpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xudmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uOyIsIi8vIHJ1biBzdGFydHVwXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9