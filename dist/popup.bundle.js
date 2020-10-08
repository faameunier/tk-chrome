/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/popup.js":
/*!**************************!*\
  !*** ./src/app/popup.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/env.js */ "./src/config/env.js");
/* harmony import */ var _config_websites_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/websites.js */ "./src/config/websites.js");
/* harmony import */ var _services_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils.js */ "./src/services/utils.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/Skeleton.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/ErrorOutline */ "./node_modules/@material-ui/icons/ErrorOutline.js");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "./node_modules/@material-ui/icons/FavoriteBorder.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-ui-search-bar */ "./node_modules/material-ui-search-bar/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);






















const RESTORE = 'RESTORE';
const SHELL_RESTORE = 'SHELL_RESTORE';
const NUMBER_HOURS_DAY = 24;
const TIME_PERIOD_24H = 3600000 * NUMBER_HOURS_DAY; // in microsecond

const TIME_PERIOD_72H = 3600000 * NUMBER_HOURS_DAY * 3; // in microsecond

const FULL_SKELETON = false;
const DISPLAY_STATUSES = ['killed'];

class Home extends react__WEBPACK_IMPORTED_MODULE_5__.PureComponent {
  constructor(props) {
    super(props);
    (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_3__.setAllReadBadge)();

    if (props.skeleton) {
      this.state = {
        closed_history: this.enrichHistory(props.closed_history),
        loading: true
      };
      (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_3__.timeout)(_config_env_js__WEBPACK_IMPORTED_MODULE_1__.FRONTEND_SKELETON_DISPLAY).then(() => {
        (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_3__.logger)(this, 'Displaying list');
        this.setState({
          loading: false
        });
      });
    } else {
      this.state = {
        closed_history: this.enrichHistory(props.closed_history),
        loading: false
      };
    }
  }

  componentWillUnmount() {
    (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_3__.setAllReadBadge)();
  }

  componentDidUpdate(prevProps) {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_9__.isEqual)(prevProps.closed_history, this.props.closed_history)) {
      this.setState({
        closed_history: this.enrichHistory(this.props.closed_history)
      });
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
    (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_3__.logger)(this, messageType + ' for tab ' + restoredTab.uuid);
    const closed_history = this.state.closed_history.filter(item => item.uuid !== restoredTab.uuid);
    this.setState({
      closed_history: closed_history
    }); // no need to enrich here

    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.sendMessage({
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
      return now - item.deletion_time < endPeriod && DISPLAY_STATUSES.includes(item.status);
    });
  }

  coffeeTime() {
    window.open('https://buymeacoff.ee/tabbytabs', '_blank');
  }

  enrichHistory(history) {
    // keep elements only in time-frame
    let selectedList = history ? this.filterList(history, TIME_PERIOD_72H) : [];
    const rx = new RegExp(_config_websites_js__WEBPACK_IMPORTED_MODULE_2__.NO_RESTORE_URL.join('|')); // list enrichment

    selectedList = selectedList.map(website => {
      if (typeof website !== 'undefined') {
        const deletionTime = new Date(website.deletion_time);
        website.hours_minutes_format = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(deletionTime).format('HH:mm');
        website.date = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(deletionTime).startOf('date');
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

    let current = dayjs__WEBPACK_IMPORTED_MODULE_4___default()().startOf('date');
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
          style: style,
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__.default, {
          component: "div"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__.default, {
          primary: `${website.text} ${website.day}`,
          classes: {
            primary: classes.primaryTitleContainer
          },
          className: classes.listTitleText
        })));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        style: style,
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__.default, {
        ContainerComponent: "div",
        component: "div"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: classes.gridAvatarWithTime
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
        className: classes.timeDisplay
      }, this.state.loading && FULL_SKELETON ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_13__.default, {
        width: "3em"
      }) : `${website.hours_minutes_format}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_14__.default, null, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_13__.default, {
        variant: "circle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_15__.default, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_15__.default, {
        variant: "square",
        alt: website.title ? website.title : website.url,
        src: website.favIconUrl ? website.favIconUrl : 'error',
        className: classes.avatarContainer
      }))), this.state.loading && FULL_SKELETON ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_13__.default, {
        width: "15em"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_13__.default, {
        width: "10em"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__.default, {
        primary: website.url,
        secondary: website.title,
        classes: {
          primary: classes.primaryTextContainer,
          secondary: classes.secondaryTextContainer
        },
        className: classes.itemText
      }), this.state.loading && FULL_SKELETON ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_16__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__.default, {
        size: "small",
        onClick: this.removeItem.bind(this, myFilteredList, index),
        variant: "outlined",
        color: "secondary",
        disabled: website.no_restore,
        className: classes.button
      }, 'Restore'))));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: classes.listWebsites
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(material_ui_search_bar__WEBPACK_IMPORTED_MODULE_8__.default, {
      placeholder: "Search on last 72h",
      onChange: this.searchOnChange.bind(this),
      onRequestSearch: this.searchOnRequestSearch.bind(this),
      onCancelSearch: this.searchOnCancel.bind(this),
      value: this.state.searchValue,
      className: classes.searchBar
    }), selectedList.length === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_window__WEBPACK_IMPORTED_MODULE_7__.FixedSizeList, {
      height: Math.min(80 * selectedList.length, 300),
      itemCount: selectedList.length,
      itemSize: 80
    }, listItem(selectedList)));
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.boldNumber
    }, numberClosedTabsLastHour ? numberClosedTabsLastHour : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: classes.textOnRight
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.topText
    }, ' ', "tab", numberClosedTabsLastHour <= 1 ? '' : 's', " closed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.middleText
    }, " in the last ", `${NUMBER_HOURS_DAY} hours`, " "))), this.renderList.bind(this)(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: classes.footerContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__.default, {
      color: "secondary",
      component: "div",
      onClick: this.coffeeTime.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_19__.default, {
      color: "secondary",
      className: classes.iconContainer
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: classes.footerRight
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_20__.default, {
      color: "secondary",
      className: classes.iconContainer
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_21__.default, {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSdUEJHd0bL6ryFvZk220CoZp7cwvFxESorps7cngk0wQfyu-Q/viewform",
      target: "_blank",
      className: classes.linkToForm
    }, "Bug/Feedback?"))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notistack__WEBPACK_IMPORTED_MODULE_6__.withSnackbar)(Home));

/***/ }),

/***/ "./src/components/Home/Home.style.js":
/*!*******************************************!*\
  !*** ./src/components/Home/Home.style.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    marginTop: theme.spacing(0.75),
    maxWidth: theme.spacing(5),
    textAlign: 'center',
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
    justifyContent: 'space-between',
    marginTop: theme.spacing(2.5),
    maxHeight: theme.spacing(0.5),
    minWidth: '100%'
  },
  footerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
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
    fontSize: 12,
    overflowWrap: 'break-word',
    lineHeight: '1.5em',
    height: '3em',
    // overflow: 'hidden',
    textOverflow: 'ellipsis' // whiteSpace: 'nowrap',

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
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ArrowBackIos */ "./node_modules/@material-ui/icons/ArrowBackIos.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Settings */ "./src/components/Settings/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Home */ "./src/components/Home/index.js");
/* harmony import */ var _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/settingsProfiles.js */ "./src/config/settingsProfiles.js");
/* harmony import */ var _services_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils.js */ "./src/services/utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class HomeDispatcher extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", newValue => () => {
      this.setState({
        appBarValue: newValue,
        firstLoad: false
      });
      (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_6__.logger)(this, 'Switch to ' + newValue);
    });

    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.local.get(['closed_history', 'active_profile', 'settings', 'focused_window_id', 'inactive_policy']).then(result => {
      const closed_history = result.closed_history || [];
      const active_profile = result.active_profile || _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.FOCUSED;
      const settings = result.settings || _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.INIT_FOCUSED_PROFILE;
      const focused_window_id = result.focused_window_id || null;
      const inactive_policy = result.inactive_policy || [];
      this.setState({
        active_profile,
        settings,
        focused_window_id,
        inactive_policy,
        closed_history: closed_history
      });
    });
    this.state = {
      appBarValue: 'HOME',
      firstLoad: true,
      closed_history: [],
      active_profile: _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.FOCUSED,
      settings: _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.INIT_FOCUSED_PROFILE,
      focused_window_id: null,
      inactive_policy: []
    };

    this.onChangedCallback = function (changes) {
      const keys = ['closed_history', 'active_profile', 'settings', 'focused_window_id', 'inactive_policy'];
      keys.forEach(key => {
        if (changes[key]) {
          this.setState({
            [key]: changes[key]['newValue']
          });
        }
      });
    }.bind(this);
  }

  componentDidMount() {
    (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_6__.logger)(this, 'Popup opened');
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.onChanged.removeListener(this.onChangedCallback);
  }

  dispatchPage() {
    switch (this.state.appBarValue) {
      case 'HOME':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_4__.default, {
          skeleton: this.state.firstLoad,
          closed_history: this.state.closed_history
        });

      case 'SETTINGS':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Settings__WEBPACK_IMPORTED_MODULE_3__.default, {
          active_profile: this.state.active_profile,
          settings: this.state.settings,
          focused_window_id: this.state.focused_window_id,
          inactive_policy: this.state.inactive_policy
        });

      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, "This is an error page");
    }
  }

  displayIcon() {
    const {
      classes
    } = this.props;

    switch (this.state.appBarValue) {
      case 'HOME':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {
          color: "secondary",
          component: "div",
          onClick: this.handleChange('SETTINGS'),
          className: classes.iconContainer
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8__.default, null));

      case 'SETTINGS':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__.default, {
          color: "secondary",
          component: "div",
          onClick: this.handleChange('HOME'),
          className: classes.iconContainer
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_9__.default, null));

      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, "This is an error page");
    }
  }

  render() {
    const {
      classes
    } = this.props;
    let beta =  true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: classes.beta
    }, "beta") : undefined;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(notistack__WEBPACK_IMPORTED_MODULE_2__.SnackbarProvider, {
      maxSnack: 2,
      classes: {
        root: classes.notification,
        variantSuccess: classes.success
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.homeContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__.default, {
      square: false,
      variant: "outlined",
      className: classes.paperShadow
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.gridLogoTabs
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11__.default, {
      href: "https://tabby.us",
      target: "_blank",
      className: classes.ensemblelogo,
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
      src: '../../assets/static/icons/tabby_2.png',
      className: classes.logoFull
    }), beta), this.displayIcon()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, this.dispatchPage()))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeDispatcher);

/***/ }),

/***/ "./src/components/HomeDispatcher/HomeDispatcher.style.js":
/*!***************************************************************!*\
  !*** ./src/components/HomeDispatcher/HomeDispatcher.style.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _HomeDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeDispatcher */ "./src/components/HomeDispatcher/HomeDispatcher.js");



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
  beta: {
    background: 'linear-gradient(45deg,#80e0a7, #00b9aa)',
    padding: theme.spacing(0.2),
    borderRadius: theme.spacing(0.2),
    color: 'white',
    textDecoration: 'none',
    lineHeight: 1,
    fontSize: 'xx-small'
  },
  iconContainer: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1.5)
  },
  success: {
    background: 'linear-gradient(45deg,#80e0a7, #00b9aa)'
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(styles)(_HomeDispatcher__WEBPACK_IMPORTED_MODULE_0__.default));

/***/ }),

/***/ "./src/components/HomeDispatcher/index.js":
/*!************************************************!*\
  !*** ./src/components/HomeDispatcher/index.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/FormGroup.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/Switch.js");
/* harmony import */ var _material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography/Typography */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Tune */ "./node_modules/@material-ui/icons/Tune.js");
/* harmony import */ var _material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/HelpOutline */ "./node_modules/@material-ui/icons/HelpOutline.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/Fade.js");
/* harmony import */ var _services_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils */ "./src/services/utils.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/settingsProfiles.js */ "./src/config/settingsProfiles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/components/utils.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");

























const LightTooltip = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.default)(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 1)',
    boxShadow: theme.shadows[1],
    fontSize: 13,
    marginBottom: theme.spacing(0.5)
  }
}))(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8__.default);

class Settings extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focusedMode: this.props.active_profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.FOCUSED,
      relaxedMode: this.props.active_profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.RELAXED,
      customizedBool: this.props.active_profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.CUSTOMIZED,
      settings: this.props.settings,
      focusedWindowId: this.props.focused_window_id,
      inactivePolicy: this.props.inactive_policy,
      openModal: false
    };
  }

  componentDidUpdate(prevProps) {
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(prevProps.settings, this.props.settings)) {
      this.setState({
        settings: this.props.settings
      });
    }

    if (prevProps.active_profile !== this.props.active_profile) {
      this.setState({
        focusedMode: this.props.active_profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.FOCUSED,
        relaxedMode: this.props.active_profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.RELAXED,
        customizedBool: this.props.active_profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.CUSTOMIZED
      });
    }

    if (prevProps.focused_window_id !== this.props.focused_window_id) {
      this.setState({
        customizedBool: this.props.active_profile === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.CUSTOMIZED
      });
    }

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual)(prevProps.inactive_policy, this.props.inactive_policy)) {
      this.setState({
        inactivePolicy: this.props.inactive_policy
      });
    }
  }

  handleBoolChange(changeType) {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.sendMessage({
      messageType: 'SETTINGS_PROFILE',
      profile: changeType
    });

    if (changeType === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.RELAXED || changeType === _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.FOCUSED) {
      this.notifyUser(true);
    }

    if (this.state.inactivePolicy.includes(this.state.focusedWindowId)) {
      this.handleSwitch();
    }
  }

  handleSaveParameters() {
    // TODO Add function to check for all potential values
    let success = false;

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_6__.checkSettings)(this.state.settings)) {
      webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.sendMessage({
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
      autoHideDuration: 2000
    });
  }

  handleChangeParameters(path, parameter) {
    return event => {
      let settings = (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_3__.copy)(this.state.settings);
      const nextValue = event.target.value;

      if ((0,_services_utils_js__WEBPACK_IMPORTED_MODULE_3__.isInteger)(nextValue) || nextValue.length === 0) {
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
      inactivePolicy = (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_3__.removeItem)(inactivePolicy, this.state.focusedWindowId);
      webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.sendMessage({
        messageType: 'REMOVE_INACTIVE_POLICY',
        windowId: this.state.focusedWindowId
      });
    } else {
      inactivePolicy.push(this.state.focusedWindowId);
      webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.sendMessage({
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
      path: _utils__WEBPACK_IMPORTED_MODULE_6__.POLICY,
      parameter: _utils__WEBPACK_IMPORTED_MODULE_6__.OPTIMAL_NUMBER_TABS,
      inputProps: {
        min: '1',
        max: '100',
        step: '1'
      }
    }];
    const listItemsParameters = inputsParameters.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__.default, {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: classes.mainBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_11__.default, {
        checked: this.state.focusedWindowId && this.state.inactivePolicy ? !this.state.inactivePolicy.includes(this.state.focusedWindowId) : true,
        onChange: this.handleSwitch.bind(this),
        color: "secondary",
        className: classes.switchWrapper
      }),
      className: classes.switchContainer,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
        className: classes.styleLabel
      }, "Enable on this window")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: classes.introductionBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_icons_Tune__WEBPACK_IMPORTED_MODULE_13__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.parametersTitle
    }, "Select your profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_14__.default, {
      className: classes.settingsWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(LightTooltip, {
      title: 'tabby tends to keep 5 tabs',
      placement: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: classes.firstProfilesContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__.default, {
        checked: this.state.focusedMode,
        onChange: this.handleBoolChange.bind(this, _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.FOCUSED),
        color: "secondary",
        className: classes.checkboxWrapper
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
        className: classes.styleLabel
      }, "Focus"),
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_16__.default, {
      className: classes.helpIcon
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(LightTooltip, {
      title: 'tabby tends to keep 12 tabs',
      placement: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: classes.firstProfilesContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__.default, {
        checked: this.state.relaxedMode,
        onChange: this.handleBoolChange.bind(this, _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.RELAXED),
        color: "secondary",
        className: classes.checkboxWrapper
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
        className: classes.styleLabel
      }, "Relax"),
      className: classes.firstBooleans
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_16__.default, {
      className: classes.helpIcon
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: classes.customizeWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__.default, {
      control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__.default, {
        checked: this.state.customizedBool,
        onChange: this.handleBoolChange.bind(this, _config_settingsProfiles_js__WEBPACK_IMPORTED_MODULE_5__.CUSTOMIZED),
        color: "secondary",
        className: classes.checkboxWrapper
      }),
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
        className: classes.styleLabel
      }, "Customize"),
      className: classes.firstBooleans
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: classes.settingsBlock
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_17__.default, {
      required: true,
      fullWidth: true
    }, listItemsParameters), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__.default, {
      hidden: true,
      key: "hidden-textfield",
      disabled: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__.default, {
      size: "small",
      color: "secondary",
      disabled: !this.state.customizedBool,
      className: classes.secondaryButton,
      variant: "outlined",
      onClick: this.handleSaveParameters.bind(this)
    }, "Save"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__.default, {
      variant: "text",
      onClick: this.handleOpen.bind(this),
      className: classes.tipsButton
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.styleLabelTips
    }, "Help"), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_19__.default //disablePortal={true}
    , {
      className: classes.modal,
      open: this.state.openModal,
      onClose: this.handleClose.bind(this),
      closeAfterTransition: true,
      BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_20__.default,
      BackdropProps: {
        timeout: 750,
        invisible: true
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_21__.default, {
      in: this.state.openModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_22__.default, {
      borderRadius: 6,
      className: classes.paper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: classes.firstBlockModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: classes.secondEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.styleLabel
    }, "Protect a tab"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: classes.lastEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
      src: '../../assets/static/icons/right_click.png',
      className: classes.leftClickWrapper
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.styleLabel
    }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.styleLabel
    }, "Pin"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: classes.secondEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.styleLabel
    }, "Reopen multiple tabs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: classes.secondEnsemble
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.styleLabel
    }, "Ctrl"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.styleLabel
    }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
      src: '../../assets/static/icons/left_click.png',
      className: classes.leftClickWrapper
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.styleLabel
    }, "How does tabby work?"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.styleLabelNext
    }, "tabby will not remove tabs right after their creation.", ' '), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.styleLabelNext
    }, "tabby takes well-thought-out decisions automatically."), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: classes.footerModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_23__.default, {
      href: "https://tabby.us/faq",
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.styleLabelTips
    }, "FAQ available here"), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core_Typography_Typography__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.styleLabelTips
    }, "tabby ", webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.getManifest().version), ' ')))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notistack__WEBPACK_IMPORTED_MODULE_4__.withSnackbar)(Settings));

/***/ }),

/***/ "./src/components/Settings/index.js":
/*!******************************************!*\
  !*** ./src/components/Settings/index.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/*! export INACTIVE_POLICY [provided] [no usage info] [missing usage info prevents renaming] */
/*! export OPTIMAL_NUMBER_TABS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export POLICY [provided] [no usage info] [missing usage info prevents renaming] */
/*! export checkSettings [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OPTIMAL_NUMBER_TABS": () => /* binding */ OPTIMAL_NUMBER_TABS,
/* harmony export */   "POLICY": () => /* binding */ POLICY,
/* harmony export */   "INACTIVE_POLICY": () => /* binding */ INACTIVE_POLICY,
/* harmony export */   "checkSettings": () => /* binding */ checkSettings
/* harmony export */ });
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "body {\n  margin: 0;\n}\n\n.card-header {\n  background-color: rgba(255, 255, 255, 0.21);\n  min-width: 200px;\n}\n\n.card-title {\n  background-color: rgba(255, 255, 255, 0.21);\n  display: inline-block;\n  font-size: 18px;\n  margin-bottom: 2px;\n  line-height: 1;\n  border-bottom: 2px solid #1b9e74;\n  min-width: 300px;\n}\n\nlabel {\n  margin-bottom: 0.5rem;\n}\n\n[hidden] {\n    display: none!important;\n}\n\n.card-body {\n  padding: 1.25rem;\n  flex: 1 1 auto;\n  min-height: 1px;\n}\n.bold-title {\n  font-size: 16px;\n}\n\n:focus {outline:0 !important;}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "tk-chrome:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (event) => {
/******/ 				onScriptComplete = () => {
/******/ 		
/******/ 				}
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => fn(event));
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(() => {
/******/ 				onScriptComplete({ type: 'timeout', target: script })
/******/ 			}, 120000);
/******/ 			script.onerror = script.onload = onScriptComplete;
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 			["./src/app/popup.js","vendors-node_modules_psl_index_js-node_modules_webextension-polyfill_dist_browser-polyfill_js","vendors-node_modules_material-ui_core_Typography_Typography_js-node_modules_material-ui_core_-7a267f","vendors-node_modules_dayjs_dayjs_min_js-node_modules_lodash_lodash_js","vendors-node_modules_material-ui_core_esm_Avatar_Avatar_js-node_modules_material-ui_core_esm_-ba9d76","src_config_settingsProfiles_js-src_config_websites_js-src_services_utils_js"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzcz9lYTVkIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiQXBwIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUkVTVE9SRSIsIlNIRUxMX1JFU1RPUkUiLCJOVU1CRVJfSE9VUlNfREFZIiwiVElNRV9QRVJJT0RfMjRIIiwiVElNRV9QRVJJT0RfNzJIIiwiRlVMTF9TS0VMRVRPTiIsIkRJU1BMQVlfU1RBVFVTRVMiLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZXRBbGxSZWFkQmFkZ2UiLCJza2VsZXRvbiIsInN0YXRlIiwiY2xvc2VkX2hpc3RvcnkiLCJlbnJpY2hIaXN0b3J5IiwibG9hZGluZyIsInRpbWVvdXQiLCJGUk9OVEVORF9TS0VMRVRPTl9ESVNQTEFZIiwidGhlbiIsImxvZ2dlciIsInNldFN0YXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJpc0VxdWFsIiwicmVtb3ZlSXRlbSIsImxpc3RJdGVtcyIsImtleSIsImUiLCJjdHJsS2V5IiwibWV0YUtleSIsInJlc3RvcmVUYWIiLCJpdGVtcyIsIm1lc3NhZ2VUeXBlIiwicmVzdG9yZWRUYWIiLCJ1dWlkIiwiZmlsdGVyIiwiaXRlbSIsImJyb3dzZXIiLCJzZWFyY2hPbkNoYW5nZSIsInZhbHVlIiwic2VhcmNoVmFsdWUiLCJzZWFyY2hPblJlcXVlc3RTZWFyY2giLCJldmVudCIsInNlYXJjaE9uQ2FuY2VsIiwiZmlsdGVyTGlzdCIsInNlbGVjdGVkTGlzdCIsImVuZFBlcmlvZCIsIm5vdyIsIkRhdGUiLCJkZWxldGlvbl90aW1lIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJjb2ZmZWVUaW1lIiwid2luZG93Iiwib3BlbiIsImhpc3RvcnkiLCJyeCIsIlJlZ0V4cCIsIk5PX1JFU1RPUkVfVVJMIiwibWFwIiwid2Vic2l0ZSIsImRlbGV0aW9uVGltZSIsImhvdXJzX21pbnV0ZXNfZm9ybWF0IiwiZGF5anMiLCJmb3JtYXQiLCJkYXRlIiwic3RhcnRPZiIsIm5vX3Jlc3RvcmUiLCJleGVjIiwidXJsIiwicmV2ZXJzZSIsInJlbmRlckxpc3QiLCJjbGFzc2VzIiwic2xpY2UiLCJsZW5ndGgiLCJzZWFyY2hQYXR0ZXJuIiwic3BsaXQiLCJ0ZXJtIiwiam9pbiIsIm9wdGlvbiIsInRpdGxlIiwibWF0Y2giLCJjdXJyZW50IiwibGFzdCIsImkiLCJuZXh0IiwiZGVsdGEiLCJNYXRoIiwibWF4IiwiY2VpbCIsImRpZmYiLCJzcGxpY2UiLCJ0ZXh0IiwiZGF5IiwibGlzdEl0ZW0iLCJteUZpbHRlcmVkTGlzdCIsImluZGV4Iiwic3R5bGUiLCJwcmltYXJ5IiwicHJpbWFyeVRpdGxlQ29udGFpbmVyIiwibGlzdFRpdGxlVGV4dCIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsImF2YXRhckNvbnRhaW5lciIsInByaW1hcnlUZXh0Q29udGFpbmVyIiwic2Vjb25kYXJ5VGV4dENvbnRhaW5lciIsIml0ZW1UZXh0IiwiYmluZCIsImJ1dHRvbiIsImxpc3RXZWJzaXRlcyIsInNlYXJjaEJhciIsIm1pbiIsInJlbmRlciIsIm51bWJlckNsb3NlZFRhYnNMYXN0SG91ciIsImJvbGROdW1iZXIiLCJ0ZXh0T25SaWdodCIsInRvcFRleHQiLCJtaWRkbGVUZXh0IiwiZm9vdGVyQ29udGFpbmVyIiwiaWNvbkNvbnRhaW5lciIsImZvb3RlclJpZ2h0IiwibGlua1RvRm9ybSIsIndpdGhTbmFja2JhciIsInN0eWxlcyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWF4SGVpZ2h0IiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJncmVlblRpdGxlIiwiZm9udFNpemUiLCJib3JkZXJCb3R0b20iLCJtYXhXaWR0aCIsImxpc3RUaXRsZSIsImNvbG9yIiwic3ViVGV4dCIsIm1hcmdpblRvcCIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwiYnV0dG9uQ29udGFpbmVyIiwib3ZlcmZsb3dXcmFwIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwidGV4dEFsaWduIiwibWluV2lkdGgiLCJtYXJnaW5SaWdodCIsImxpbmVIZWlnaHQiLCJoZWlnaHQiLCJsaXN0Q29udGFpbmVyIiwibWFyZ2luQm90dG9tIiwid2l0aFN0eWxlcyIsIkhvbWVEaXNwYXRjaGVyIiwibmV3VmFsdWUiLCJhcHBCYXJWYWx1ZSIsImZpcnN0TG9hZCIsInJlc3VsdCIsImFjdGl2ZV9wcm9maWxlIiwiRk9DVVNFRCIsInNldHRpbmdzIiwiSU5JVF9GT0NVU0VEX1BST0ZJTEUiLCJmb2N1c2VkX3dpbmRvd19pZCIsImluYWN0aXZlX3BvbGljeSIsIm9uQ2hhbmdlZENhbGxiYWNrIiwiY2hhbmdlcyIsImtleXMiLCJmb3JFYWNoIiwiY29tcG9uZW50RGlkTW91bnQiLCJkaXNwYXRjaFBhZ2UiLCJkaXNwbGF5SWNvbiIsImhhbmRsZUNoYW5nZSIsImJldGEiLCJFTlYiLCJyb290Iiwibm90aWZpY2F0aW9uIiwidmFyaWFudFN1Y2Nlc3MiLCJzdWNjZXNzIiwiaG9tZUNvbnRhaW5lciIsInBhcGVyU2hhZG93IiwiZ3JpZExvZ29UYWJzIiwiZW5zZW1ibGVsb2dvIiwidGV4dERlY29yYXRpb24iLCJsb2dvRnVsbCIsImJveFNoYWRvdyIsInRhYiIsImxlZnQiLCJhbGxUYWJzIiwibG9nb0F2YXRhciIsIndpZHRoIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJMaWdodFRvb2x0aXAiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29tbW9uIiwid2hpdGUiLCJzaGFkb3dzIiwiVG9vbHRpcCIsIlNldHRpbmdzIiwiZm9jdXNlZE1vZGUiLCJyZWxheGVkTW9kZSIsIlJFTEFYRUQiLCJjdXN0b21pemVkQm9vbCIsIkNVU1RPTUlaRUQiLCJmb2N1c2VkV2luZG93SWQiLCJpbmFjdGl2ZVBvbGljeSIsIm9wZW5Nb2RhbCIsImhhbmRsZUJvb2xDaGFuZ2UiLCJjaGFuZ2VUeXBlIiwicHJvZmlsZSIsIm5vdGlmeVVzZXIiLCJoYW5kbGVTd2l0Y2giLCJoYW5kbGVTYXZlUGFyYW1ldGVycyIsImNoZWNrU2V0dGluZ3MiLCJlbnF1ZXVlU25hY2tiYXIiLCJ2YXJpYW50IiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiYXV0b0hpZGVEdXJhdGlvbiIsImhhbmRsZUNoYW5nZVBhcmFtZXRlcnMiLCJwYXRoIiwicGFyYW1ldGVyIiwiY29weSIsIm5leHRWYWx1ZSIsInRhcmdldCIsImlzSW50ZWdlciIsIndpbmRvd0lkIiwicHVzaCIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbG9zZSIsImlucHV0c1BhcmFtZXRlcnMiLCJsYWJlbCIsInNvdXJjZSIsIlBPTElDWSIsIk9QVElNQUxfTlVNQkVSX1RBQlMiLCJpbnB1dFByb3BzIiwic3RlcCIsImxpc3RJdGVtc1BhcmFtZXRlcnMiLCJ0ZXh0RmllbGQiLCJtYWluQmxvY2siLCJzd2l0Y2hXcmFwcGVyIiwic3dpdGNoQ29udGFpbmVyIiwic3R5bGVMYWJlbCIsImludHJvZHVjdGlvbkJsb2NrIiwicGFyYW1ldGVyc1RpdGxlIiwic2V0dGluZ3NXcmFwcGVyIiwiZmlyc3RQcm9maWxlc0NvbnRhaW5lciIsImNoZWNrYm94V3JhcHBlciIsImZpcnN0Qm9vbGVhbnMiLCJoZWxwSWNvbiIsImN1c3RvbWl6ZVdyYXBwZXIiLCJzZXR0aW5nc0Jsb2NrIiwic2Vjb25kYXJ5QnV0dG9uIiwidGlwc0J1dHRvbiIsInN0eWxlTGFiZWxUaXBzIiwibW9kYWwiLCJCYWNrZHJvcCIsImludmlzaWJsZSIsInBhcGVyIiwiZmlyc3RCbG9ja01vZGFsIiwic2Vjb25kRW5zZW1ibGUiLCJsYXN0RW5zZW1ibGUiLCJsZWZ0Q2xpY2tXcmFwcGVyIiwic3R5bGVMYWJlbE5leHQiLCJmb290ZXJNb2RhbCIsInZlcnNpb24iLCJwb2ludGVyRXZlbnRzIiwibWluSGVpZ2h0IiwiekluZGV4IiwiZHJhd2VyIiwib3BhY2l0eSIsImJveEN0cmwiLCJib3JkZXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIklOQUNUSVZFX1BPTElDWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyxpRUFBYyxDQUFDO0FBQzNCQyxZQUFVLEVBQUU7QUFDVkMsY0FBVSxFQUFFO0FBREYsR0FEZTtBQUkzQkMsU0FBTyxFQUFFO0FBQ1BDLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUU7QUFERztBQURKO0FBSmtCLENBQUQsQ0FBNUI7O0FBV0EsU0FBU0MsR0FBVCxHQUFlO0FBQ2Isc0JBQ0UsMkRBQUMsNkRBQUQ7QUFBa0IsU0FBSyxFQUFFUDtBQUF6QixrQkFDRSwyREFBQywrREFBRCxPQURGLEVBQ3FCLEdBRHJCLENBREY7QUFLRDs7QUFFRFEsdURBQUEsZUFBZ0IsMkRBQUMsR0FBRCxPQUFoQixFQUF5QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBLG9CQUFvQixrQ0FBa0M7V0FDdEQsRUFBRTtXQUNGO1dBQ0E7V0FDQSxFOzs7OztXQzVDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDO1dBQ0E7V0FDQSxnQkFBZ0IsMkJBQTJCO1dBQzNDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGVBQWUsdUJBQXVCO1dBQ3RDO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsMkM7Ozs7VUM1RkE7VUFDQSIsImZpbGUiOiJwb3B1cC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lRGlzcGF0Y2hlciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVEaXNwYXRjaGVyJztcbmltcG9ydCB7IE11aVRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgfSxcbiAgcGFsZXR0ZToge1xuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyMwMGI5YWEnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8SG9tZURpc3BhdGNoZXIgLz57JyAnfVxuICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCJpbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IHsgRlJPTlRFTkRfU0tFTEVUT05fRElTUExBWSB9IGZyb20gJy4uLy4uL2NvbmZpZy9lbnYuanMnO1xuaW1wb3J0IHsgTk9fUkVTVE9SRV9VUkwgfSBmcm9tICcuLi8uLi9jb25maWcvd2Vic2l0ZXMuanMnO1xuaW1wb3J0IHsgbG9nZ2VyLCB0aW1lb3V0LCBzZXRBbGxSZWFkQmFkZ2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscy5qcyc7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvbic7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IEVycm9yT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vycm9yT3V0bGluZSc7XG5pbXBvcnQgRmF2b3JpdGVCb3JkZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZUJvcmRlcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0IH0gZnJvbSAncmVhY3Qtd2luZG93JztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnbWF0ZXJpYWwtdWktc2VhcmNoLWJhcic7XG5pbXBvcnQge2lzRXF1YWx9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IFJFU1RPUkUgPSAnUkVTVE9SRSc7XG5jb25zdCBTSEVMTF9SRVNUT1JFID0gJ1NIRUxMX1JFU1RPUkUnO1xuY29uc3QgTlVNQkVSX0hPVVJTX0RBWSA9IDI0O1xuY29uc3QgVElNRV9QRVJJT0RfMjRIID0gMzYwMDAwMCAqIE5VTUJFUl9IT1VSU19EQVk7IC8vIGluIG1pY3Jvc2Vjb25kXG5jb25zdCBUSU1FX1BFUklPRF83MkggPSAzNjAwMDAwICogTlVNQkVSX0hPVVJTX0RBWSAqIDM7IC8vIGluIG1pY3Jvc2Vjb25kXG5jb25zdCBGVUxMX1NLRUxFVE9OID0gZmFsc2U7XG5jb25zdCBESVNQTEFZX1NUQVRVU0VTID0gWydraWxsZWQnXTtcblxuY2xhc3MgSG9tZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBzZXRBbGxSZWFkQmFkZ2UoKTtcblxuICAgIGlmIChwcm9wcy5za2VsZXRvbikge1xuICAgICAgdGhpcy5zdGF0ZSA9IHsgY2xvc2VkX2hpc3Rvcnk6IHRoaXMuZW5yaWNoSGlzdG9yeShwcm9wcy5jbG9zZWRfaGlzdG9yeSksIGxvYWRpbmc6IHRydWUgfTtcbiAgICAgIHRpbWVvdXQoRlJPTlRFTkRfU0tFTEVUT05fRElTUExBWSkudGhlbigoKSA9PiB7XG4gICAgICAgIGxvZ2dlcih0aGlzLCAnRGlzcGxheWluZyBsaXN0Jyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlID0geyBjbG9zZWRfaGlzdG9yeTogdGhpcy5lbnJpY2hIaXN0b3J5KHByb3BzLmNsb3NlZF9oaXN0b3J5KSwgbG9hZGluZzogZmFsc2UgfTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBzZXRBbGxSZWFkQmFkZ2UoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoIWlzRXF1YWwocHJldlByb3BzLmNsb3NlZF9oaXN0b3J5LCB0aGlzLnByb3BzLmNsb3NlZF9oaXN0b3J5KSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlZF9oaXN0b3J5OiB0aGlzLmVucmljaEhpc3RvcnkodGhpcy5wcm9wcy5jbG9zZWRfaGlzdG9yeSkgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSXRlbShsaXN0SXRlbXMsIGtleSwgZSkge1xuICAgIGlmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSB7XG4gICAgICAvLyBtZXRhS2V5IGlzIGNtZCBrZXkgb24gbWFjXG4gICAgICB0aGlzLnJlc3RvcmVUYWIobGlzdEl0ZW1zLCBrZXksIFNIRUxMX1JFU1RPUkUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc3RvcmVUYWIobGlzdEl0ZW1zLCBrZXksIFJFU1RPUkUpO1xuICAgIH1cbiAgfVxuXG4gIHJlc3RvcmVUYWIoaXRlbXMsIGtleSwgbWVzc2FnZVR5cGUpIHtcbiAgICBjb25zdCByZXN0b3JlZFRhYiA9IGl0ZW1zW2tleV07XG4gICAgbG9nZ2VyKHRoaXMsIG1lc3NhZ2VUeXBlICsgJyBmb3IgdGFiICcgKyByZXN0b3JlZFRhYi51dWlkKTtcbiAgICBjb25zdCBjbG9zZWRfaGlzdG9yeSA9IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnV1aWQgIT09IHJlc3RvcmVkVGFiLnV1aWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZWRfaGlzdG9yeTogY2xvc2VkX2hpc3RvcnkgfSk7IC8vIG5vIG5lZWQgdG8gZW5yaWNoIGhlcmVcbiAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VUeXBlLFxuICAgICAgdXVpZDogcmVzdG9yZWRUYWIudXVpZCxcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaE9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIHNlYXJjaE9uUmVxdWVzdFNlYXJjaChldmVudCkge31cblxuICBzZWFyY2hPbkNhbmNlbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVmFsdWU6ICcnIH0pO1xuICB9XG5cbiAgZmlsdGVyTGlzdChzZWxlY3RlZExpc3QsIGVuZFBlcmlvZCkge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNlbGVjdGVkTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBub3cgLSBpdGVtLmRlbGV0aW9uX3RpbWUgPCBlbmRQZXJpb2QgJiYgRElTUExBWV9TVEFUVVNFUy5pbmNsdWRlcyhpdGVtLnN0YXR1cyk7XG4gICAgfSk7XG4gIH1cblxuICBjb2ZmZWVUaW1lKCkge1xuICAgIHdpbmRvdy5vcGVuKCdodHRwczovL2J1eW1lYWNvZmYuZWUvdGFiYnl0YWJzJywgJ19ibGFuaycpO1xuICB9XG5cbiAgZW5yaWNoSGlzdG9yeShoaXN0b3J5KSB7XG4gICAgLy8ga2VlcCBlbGVtZW50cyBvbmx5IGluIHRpbWUtZnJhbWVcbiAgICBsZXQgc2VsZWN0ZWRMaXN0ID0gaGlzdG9yeSA/IHRoaXMuZmlsdGVyTGlzdChoaXN0b3J5LCBUSU1FX1BFUklPRF83MkgpIDogW107XG4gICAgY29uc3QgcnggPSBuZXcgUmVnRXhwKE5PX1JFU1RPUkVfVVJMLmpvaW4oJ3wnKSk7XG4gICAgLy8gbGlzdCBlbnJpY2htZW50XG4gICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0Lm1hcCgod2Vic2l0ZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB3ZWJzaXRlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBkZWxldGlvblRpbWUgPSBuZXcgRGF0ZSh3ZWJzaXRlLmRlbGV0aW9uX3RpbWUpO1xuICAgICAgICB3ZWJzaXRlLmhvdXJzX21pbnV0ZXNfZm9ybWF0ID0gZGF5anMoZGVsZXRpb25UaW1lKS5mb3JtYXQoJ0hIOm1tJyk7XG4gICAgICAgIHdlYnNpdGUuZGF0ZSA9IGRheWpzKGRlbGV0aW9uVGltZSkuc3RhcnRPZignZGF0ZScpO1xuICAgICAgICB3ZWJzaXRlLm5vX3Jlc3RvcmUgPSByeC5leGVjKHdlYnNpdGUudXJsKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3ZWJzaXRlO1xuICAgIH0pO1xuXG4gICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0LnJldmVyc2UoKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRMaXN0O1xuICB9XG5cbiAgcmVuZGVyTGlzdCgpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgc2VsZWN0ZWRMaXN0ID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeS5zbGljZSgwKTtcbiAgICAvLyBrZWVwaW5nIG9ubHkgd2Vic2l0ZXMgdGhhdCBtYXRjaCBzZWFyY2ggY3JpdGVyaWFcbiAgICBpZiAodHlwZW9mIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VhcmNoUGF0dGVybiA9IG5ldyBSZWdFeHAoXG4gICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWVcbiAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgIC5tYXAoKHRlcm0pID0+IGAoPz0uKiR7dGVybX0pYClcbiAgICAgICAgICAuam9pbignJyksXG4gICAgICAgICdpJ1xuICAgICAgKTtcbiAgICAgIHNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdC5maWx0ZXIoXG4gICAgICAgIChvcHRpb24pID0+IG9wdGlvbi50aXRsZS5tYXRjaChzZWFyY2hQYXR0ZXJuKSB8fCBvcHRpb24udXJsLm1hdGNoKHNlYXJjaFBhdHRlcm4pXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50ID0gZGF5anMoKS5zdGFydE9mKCdkYXRlJyk7XG4gICAgbGV0IGxhc3QgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbmV4dCA9IHNlbGVjdGVkTGlzdFtpXS5kYXRlO1xuICAgICAgbGV0IGRlbHRhID0gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKGN1cnJlbnQuZGlmZihuZXh0LCAnZGF5cycsIHRydWUpKSk7XG4gICAgICBpZiAoZGVsdGEgPiBsYXN0KSB7XG4gICAgICAgIGlmIChkZWx0YSA9PT0gMSkge1xuICAgICAgICAgIHNlbGVjdGVkTGlzdC5zcGxpY2UoaSwgMCwgeyB0ZXh0OiAnWWVzdGVyZGF5IC0gJywgZGF5OiBuZXh0LmZvcm1hdCgnTU1NIEREJykgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVsdGEgPT09IDIpIHtcbiAgICAgICAgICBzZWxlY3RlZExpc3Quc3BsaWNlKGksIDAsIHsgdGV4dDogJ1ByZXZpb3VzIGRheSAtICcsIGRheTogbmV4dC5mb3JtYXQoJ01NTSBERCcpIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdGVkTGlzdC5zcGxpY2UoaSwgMCwgeyB0ZXh0OiAnJywgZGF5OiBuZXh0LmZvcm1hdCgnTU1NIEREJykgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdCA9IGRlbHRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxpc3RJdGVtID0gKG15RmlsdGVyZWRMaXN0KSA9PiAoeyBpbmRleCwgc3R5bGUgfSkgPT4ge1xuICAgICAgY29uc3Qgd2Vic2l0ZSA9IG15RmlsdGVyZWRMaXN0W2luZGV4XTtcbiAgICAgIGlmICh0eXBlb2Ygd2Vic2l0ZS5kYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPExpc3RJdGVtIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17YCR7d2Vic2l0ZS50ZXh0fSAke3dlYnNpdGUuZGF5fWB9XG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgICAgcHJpbWFyeTogY2xhc3Nlcy5wcmltYXJ5VGl0bGVDb250YWluZXIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFRpdGxlVGV4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgPExpc3RJdGVtIENvbnRhaW5lckNvbXBvbmVudD1cImRpdlwiIGNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZEF2YXRhcldpdGhUaW1lfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpbWVEaXNwbGF5fT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIEZVTExfU0tFTEVUT04gPyA8U2tlbGV0b24gd2lkdGg9XCIzZW1cIiAvPiA6IGAke3dlYnNpdGUuaG91cnNfbWludXRlc19mb3JtYXR9YH1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwiY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgLz5cbiAgICAgICAgICAgICAgICAgIDwvU2tlbGV0b24+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICAgIGFsdD17d2Vic2l0ZS50aXRsZSA/IHdlYnNpdGUudGl0bGUgOiB3ZWJzaXRlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXt3ZWJzaXRlLmZhdkljb25VcmwgPyB3ZWJzaXRlLmZhdkljb25VcmwgOiAnZXJyb3InfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIEZVTExfU0tFTEVUT04gPyAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIHdpZHRoPVwiMTVlbVwiIC8+XG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIHdpZHRoPVwiMTBlbVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3dlYnNpdGUudXJsfVxuICAgICAgICAgICAgICAgIHNlY29uZGFyeT17d2Vic2l0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICBwcmltYXJ5OiBjbGFzc2VzLnByaW1hcnlUZXh0Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiBjbGFzc2VzLnNlY29uZGFyeVRleHRDb250YWluZXIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiBGVUxMX1NLRUxFVE9OID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlbW92ZUl0ZW0uYmluZCh0aGlzLCBteUZpbHRlcmVkTGlzdCwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt3ZWJzaXRlLm5vX3Jlc3RvcmV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHsnUmVzdG9yZSd9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0V2Vic2l0ZXN9PlxuICAgICAgICA8U2VhcmNoQmFyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggb24gbGFzdCA3MmhcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlYXJjaE9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25SZXF1ZXN0U2VhcmNoPXt0aGlzLnNlYXJjaE9uUmVxdWVzdFNlYXJjaC5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uQ2FuY2VsU2VhcmNoPXt0aGlzLnNlYXJjaE9uQ2FuY2VsLmJpbmQodGhpcyl9XG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVmFsdWV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEJhcn1cbiAgICAgICAgLz5cbiAgICAgICAge3NlbGVjdGVkTGlzdC5sZW5ndGggPT09IDAgPyBudWxsIDogKFxuICAgICAgICAgIDxGaXhlZFNpemVMaXN0IGhlaWdodD17TWF0aC5taW4oODAgKiBzZWxlY3RlZExpc3QubGVuZ3RoLCAzMDApfSBpdGVtQ291bnQ9e3NlbGVjdGVkTGlzdC5sZW5ndGh9IGl0ZW1TaXplPXs4MH0+XG4gICAgICAgICAgICB7bGlzdEl0ZW0oc2VsZWN0ZWRMaXN0KX1cbiAgICAgICAgICA8L0ZpeGVkU2l6ZUxpc3Q+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5XG4gICAgICA/IHRoaXMuZmlsdGVyTGlzdCh0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5LCBUSU1FX1BFUklPRF8yNEgpLmxlbmd0aFxuICAgICAgOiAwO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8ZGl2IHZhcmlhbnQ9XCJoM1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmJvbGROdW1iZXJ9PlxuICAgICAgICAgICAge251bWJlckNsb3NlZFRhYnNMYXN0SG91ciA/IG51bWJlckNsb3NlZFRhYnNMYXN0SG91ciA6IDB9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRPblJpZ2h0fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50b3BUZXh0fT5cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgdGFiXG4gICAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPD0gMSA/ICcnIDogJ3MnfSBjbG9zZWRcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5taWRkbGVUZXh0fT4gaW4gdGhlIGxhc3Qge2Ake05VTUJFUl9IT1VSU19EQVl9IGhvdXJzYH0gPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucmVuZGVyTGlzdC5iaW5kKHRoaXMpKCl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyQ29udGFpbmVyfT5cbiAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIGNvbXBvbmVudD1cImRpdlwiIG9uQ2xpY2s9e3RoaXMuY29mZmVlVGltZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgIDxGYXZvcml0ZUJvcmRlckljb24gY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn0gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyUmlnaHR9PlxuICAgICAgICAgICAgPEVycm9yT3V0bGluZUljb24gY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn0gLz5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNkVUVKSGQwYkw2cnlGdlprMjIwQ29acDdjd3ZGeEVTb3JwczdjbmdrMHdRZnl1LVEvdmlld2Zvcm1cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua1RvRm9ybX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQnVnL0ZlZWRiYWNrP1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNuYWNrYmFyKEhvbWUpO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgdGl0bGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1heEhlaWdodDogNDAsXG4gIH0sXG4gIHRleHRPblJpZ2h0OiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ3N0YXJ0JyxcbiAgfSxcbiAgZ3JlZW5UaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYm9yZGVyQm90dG9tOiBgMnB4IHNvbGlkICMwMGI5YWFgLFxuICAgIG1heFdpZHRoOiAyMjUsXG4gIH0sXG4gIGxpc3RUaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBtYXhIZWlnaHQ6IDMwLFxuICB9LFxuXG4gIGJvbGROdW1iZXI6IHtcbiAgICBjb2xvcjogJyNlNTVjMDAnLFxuICAgIGZvbnRTaXplOiA0MCxcbiAgICBtYXhXaWR0aDogJzMwJScsXG4gIH0sXG4gIG1pZGRsZVRleHQ6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gIH0sXG4gIHRvcFRleHQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gIH0sXG4gIHN1YlRleHQ6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXhXaWR0aDogMjAsXG4gIH0sXG4gIGJ1dHRvbkNvbnRhaW5lcjogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknIH0sXG4gIGl0ZW1UZXh0OiB7XG4gICAgbWF4V2lkdGg6IDE4NSxcbiAgICBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdicmVhay1zcGFjZXMnLFxuXG4gICAgbWF4SGVpZ2h0OiA2MCxcbiAgfSxcbiAgdGltZURpc3BsYXk6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMC43NSksXG4gICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE0LFxuICB9LFxuICBncmlkQXZhdGFyV2l0aFRpbWU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIH0sXG4gIGxpc3RXZWJzaXRlczoge1xuICAgIG1hcmdpblRvcDogMjAsXG4gIH0sXG4gIGZvb3RlckNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyLjUpLFxuICAgIG1heEhlaWdodDogdGhlbWUuc3BhY2luZygwLjUpLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGZvb3RlclJpZ2h0OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICB9LFxuXG4gIGxpbmtUb0Zvcm06IHtcbiAgICBmb250U2l6ZTogMTAsXG4gIH0sXG4gIGljb25Db250YWluZXI6IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygwLjI1KSxcbiAgICBmb250U2l6ZTogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgYXZhdGFyQ29udGFpbmVyOiB7XG4gICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgbWF4SGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDcpLFxuICB9LFxuICBwcmltYXJ5VGV4dENvbnRhaW5lcjoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIG1heEhlaWdodDogMjIsXG4gIH0sXG4gIHNlY29uZGFyeVRleHRDb250YWluZXI6IHtcbiAgICBmb250U2l6ZTogMTIsXG4gICAgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcsXG4gICAgbGluZUhlaWdodDogJzEuNWVtJyxcbiAgICBoZWlnaHQ6ICczZW0nLFxuICAgIC8vIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgLy8gd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIH0sXG4gIHByaW1hcnlUaXRsZUNvbnRhaW5lcjoge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTYsXG4gIH0sXG5cbiAgbGlzdFRpdGxlVGV4dDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0LjUpLFxuICB9LFxuICBsaXN0Q29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzZWFyY2hCYXI6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWF4SGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDUpLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZSk7XG4iLCJpbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XG5pbXBvcnQgQXJyb3dCYWNrSW9zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zJztcbmltcG9ydCB7IFNuYWNrYmFyUHJvdmlkZXIgfSBmcm9tICdub3Rpc3RhY2snO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4uL1NldHRpbmdzJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vSG9tZSc7XG5pbXBvcnQgeyBGT0NVU0VELCBJTklUX0ZPQ1VTRURfUFJPRklMRSB9IGZyb20gJy4uLy4uL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLmpzJztcblxuY2xhc3MgSG9tZURpc3BhdGNoZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsXG4gICAgICAuZ2V0KFsnY2xvc2VkX2hpc3RvcnknLCAnYWN0aXZlX3Byb2ZpbGUnLCAnc2V0dGluZ3MnLCAnZm9jdXNlZF93aW5kb3dfaWQnLCAnaW5hY3RpdmVfcG9saWN5J10pXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNsb3NlZF9oaXN0b3J5ID0gcmVzdWx0LmNsb3NlZF9oaXN0b3J5IHx8IFtdO1xuICAgICAgICBjb25zdCBhY3RpdmVfcHJvZmlsZSA9IHJlc3VsdC5hY3RpdmVfcHJvZmlsZSB8fCBGT0NVU0VEO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHJlc3VsdC5zZXR0aW5ncyB8fCBJTklUX0ZPQ1VTRURfUFJPRklMRTtcbiAgICAgICAgY29uc3QgZm9jdXNlZF93aW5kb3dfaWQgPSByZXN1bHQuZm9jdXNlZF93aW5kb3dfaWQgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgaW5hY3RpdmVfcG9saWN5ID0gcmVzdWx0LmluYWN0aXZlX3BvbGljeSB8fCBbXTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlX3Byb2ZpbGUsXG4gICAgICAgICAgc2V0dGluZ3MsXG4gICAgICAgICAgZm9jdXNlZF93aW5kb3dfaWQsXG4gICAgICAgICAgaW5hY3RpdmVfcG9saWN5LFxuICAgICAgICAgIGNsb3NlZF9oaXN0b3J5OiBjbG9zZWRfaGlzdG9yeSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYXBwQmFyVmFsdWU6ICdIT01FJyxcbiAgICAgIGZpcnN0TG9hZDogdHJ1ZSxcbiAgICAgIGNsb3NlZF9oaXN0b3J5OiBbXSxcbiAgICAgIGFjdGl2ZV9wcm9maWxlOiBGT0NVU0VELFxuICAgICAgc2V0dGluZ3M6IElOSVRfRk9DVVNFRF9QUk9GSUxFLFxuICAgICAgZm9jdXNlZF93aW5kb3dfaWQ6IG51bGwsXG4gICAgICBpbmFjdGl2ZV9wb2xpY3k6IFtdLFxuICAgIH07XG4gICAgdGhpcy5vbkNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBrZXlzID0gWydjbG9zZWRfaGlzdG9yeScsICdhY3RpdmVfcHJvZmlsZScsICdzZXR0aW5ncycsICdmb2N1c2VkX3dpbmRvd19pZCcsICdpbmFjdGl2ZV9wb2xpY3knXTtcbiAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChjaGFuZ2VzW2tleV0pIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtrZXldOiBjaGFuZ2VzW2tleV1bJ25ld1ZhbHVlJ10sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxvZ2dlcih0aGlzLCAnUG9wdXAgb3BlbmVkJyk7XG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAobmV3VmFsdWUpID0+ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXBwQmFyVmFsdWU6IG5ld1ZhbHVlLCBmaXJzdExvYWQ6IGZhbHNlIH0pO1xuICAgIGxvZ2dlcih0aGlzLCAnU3dpdGNoIHRvICcgKyBuZXdWYWx1ZSk7XG4gIH07XG5cbiAgZGlzcGF0Y2hQYWdlKCkge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5hcHBCYXJWYWx1ZSkge1xuICAgICAgY2FzZSAnSE9NRSc6XG4gICAgICAgIHJldHVybiA8SG9tZSBza2VsZXRvbj17dGhpcy5zdGF0ZS5maXJzdExvYWR9IGNsb3NlZF9oaXN0b3J5PXt0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5fSAvPjtcbiAgICAgIGNhc2UgJ1NFVFRJTkdTJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U2V0dGluZ3NcbiAgICAgICAgICAgIGFjdGl2ZV9wcm9maWxlPXt0aGlzLnN0YXRlLmFjdGl2ZV9wcm9maWxlfVxuICAgICAgICAgICAgc2V0dGluZ3M9e3RoaXMuc3RhdGUuc2V0dGluZ3N9XG4gICAgICAgICAgICBmb2N1c2VkX3dpbmRvd19pZD17dGhpcy5zdGF0ZS5mb2N1c2VkX3dpbmRvd19pZH1cbiAgICAgICAgICAgIGluYWN0aXZlX3BvbGljeT17dGhpcy5zdGF0ZS5pbmFjdGl2ZV9wb2xpY3l9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8ZGl2PlRoaXMgaXMgYW4gZXJyb3IgcGFnZTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5SWNvbigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmFwcEJhclZhbHVlKSB7XG4gICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlKCdTRVRUSU5HUycpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25Db250YWluZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNldHRpbmdzSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ1NFVFRJTkdTJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlKCdIT01FJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXJyb3dCYWNrSW9zSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8ZGl2PlRoaXMgaXMgYW4gZXJyb3IgcGFnZTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBiZXRhID0gRU5WICE9PSAncHJvZCcgPyA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuYmV0YX0+YmV0YTwvc3Bhbj4gOiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICA8U25hY2tiYXJQcm92aWRlclxuICAgICAgICBtYXhTbmFjaz17Mn1cbiAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgIHJvb3Q6IGNsYXNzZXMubm90aWZpY2F0aW9uLFxuICAgICAgICAgIHZhcmlhbnRTdWNjZXNzOiBjbGFzc2VzLnN1Y2Nlc3MsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhvbWVDb250YWluZXJ9PlxuICAgICAgICAgIDxQYXBlciBzcXVhcmU9e2ZhbHNlfSB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJTaGFkb3d9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZExvZ29UYWJzfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdGFiYnkudXNcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9e2NsYXNzZXMuZW5zZW1ibGVsb2dvfSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi4vLi4vYXNzZXRzL3N0YXRpYy9pY29ucy90YWJieV8yLnBuZyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvRnVsbH0gLz5cbiAgICAgICAgICAgICAgICB7YmV0YX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICB7dGhpcy5kaXNwbGF5SWNvbigpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2Pnt0aGlzLmRpc3BhdGNoUGFnZSgpfTwvZGl2PlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TbmFja2JhclByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZURpc3BhdGNoZXI7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBIb21lRGlzcGF0Y2hlciBmcm9tICcuL0hvbWVEaXNwYXRjaGVyJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBob21lQ29udGFpbmVyOiB7XG4gICAgbWluV2lkdGg6IDQwMCxcbiAgfSxcbiAgcGFwZXJTaGFkb3c6IHtcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMC4zKSwgMHB4IDBweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKSwgMHB4IDBweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4zKScsXG4gIH0sXG4gIHRhYjoge1xuICAgIGNvbG9yOiAnIzAwYjlhYScsXG4gIH0sXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIGxlZnQ6IDE1MCxcbiAgfSxcbiAgZ3JpZExvZ29UYWJzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGFsbFRhYnM6IHtcbiAgICBtYXhXaWR0aDogJzc1JScsXG4gIH0sXG4gIGVuc2VtYmxlbG9nbzoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2xlZnQnLFxuICB9LFxuICBsb2dvQXZhdGFyOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuMjUpLFxuICB9LFxuICBsb2dvRnVsbDoge1xuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMi4yNSksXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMTIpLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLjI1KSxcbiAgfSxcbiAgYmV0YToge1xuICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzgwZTBhNywgIzAwYjlhYSknLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMC4yKSxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMC4yKSxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgZm9udFNpemU6ICd4eC1zbWFsbCcsXG4gIH0sXG4gIGljb25Db250YWluZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMS41KSxcbiAgfSxcbiAgc3VjY2Vzczoge1xuICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzgwZTBhNywgIzAwYjlhYSknLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZURpc3BhdGNoZXIpO1xuIiwiaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCB7aXNFcXVhbH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5JztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcbmltcG9ydCBUdW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHVuZSc7XG5pbXBvcnQgSGVscE91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IZWxwT3V0bGluZSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcbmltcG9ydCB7IGNvcHkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscy5qcyc7XG5cbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgeyBSRUxBWEVELCBGT0NVU0VELCBDVVNUT01JWkVELCBJTklUX0ZPQ1VTRURfUFJPRklMRSB9IGZyb20gJy4uLy4uL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzJztcbmltcG9ydCB7IGNoZWNrU2V0dGluZ3MsIE9QVElNQUxfTlVNQkVSX1RBQlMsIFBPTElDWSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGlzSW50ZWdlciwgcmVtb3ZlSXRlbSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzJztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuXG5jb25zdCBMaWdodFRvb2x0aXAgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgdG9vbHRpcDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJyxcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygwLjUpLFxuICB9LFxufSkpKFRvb2x0aXApO1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9jdXNlZE1vZGU6IHRoaXMucHJvcHMuYWN0aXZlX3Byb2ZpbGUgPT09IEZPQ1VTRUQsXG4gICAgICByZWxheGVkTW9kZTogdGhpcy5wcm9wcy5hY3RpdmVfcHJvZmlsZSA9PT0gUkVMQVhFRCxcbiAgICAgIGN1c3RvbWl6ZWRCb29sOiB0aGlzLnByb3BzLmFjdGl2ZV9wcm9maWxlID09PSBDVVNUT01JWkVELFxuICAgICAgc2V0dGluZ3M6IHRoaXMucHJvcHMuc2V0dGluZ3MsXG4gICAgICBmb2N1c2VkV2luZG93SWQ6IHRoaXMucHJvcHMuZm9jdXNlZF93aW5kb3dfaWQsXG4gICAgICBpbmFjdGl2ZVBvbGljeTogdGhpcy5wcm9wcy5pbmFjdGl2ZV9wb2xpY3ksXG4gICAgICBvcGVuTW9kYWw6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKCFpc0VxdWFsKHByZXZQcm9wcy5zZXR0aW5ncywgdGhpcy5wcm9wcy5zZXR0aW5ncykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXR0aW5nczogdGhpcy5wcm9wcy5zZXR0aW5ncyB9KTtcbiAgICB9XG4gICAgaWYgKHByZXZQcm9wcy5hY3RpdmVfcHJvZmlsZSAhPT0gdGhpcy5wcm9wcy5hY3RpdmVfcHJvZmlsZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRNb2RlOiB0aGlzLnByb3BzLmFjdGl2ZV9wcm9maWxlID09PSBGT0NVU0VELFxuICAgICAgICByZWxheGVkTW9kZTogdGhpcy5wcm9wcy5hY3RpdmVfcHJvZmlsZSA9PT0gUkVMQVhFRCxcbiAgICAgICAgY3VzdG9taXplZEJvb2w6IHRoaXMucHJvcHMuYWN0aXZlX3Byb2ZpbGUgPT09IENVU1RPTUlaRUQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHByZXZQcm9wcy5mb2N1c2VkX3dpbmRvd19pZCAhPT0gdGhpcy5wcm9wcy5mb2N1c2VkX3dpbmRvd19pZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1c3RvbWl6ZWRCb29sOiB0aGlzLnByb3BzLmFjdGl2ZV9wcm9maWxlID09PSBDVVNUT01JWkVELFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghaXNFcXVhbChwcmV2UHJvcHMuaW5hY3RpdmVfcG9saWN5LCB0aGlzLnByb3BzLmluYWN0aXZlX3BvbGljeSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbmFjdGl2ZVBvbGljeTogdGhpcy5wcm9wcy5pbmFjdGl2ZV9wb2xpY3ksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCb29sQ2hhbmdlKGNoYW5nZVR5cGUpIHtcbiAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QUk9GSUxFJyxcbiAgICAgIHByb2ZpbGU6IGNoYW5nZVR5cGUsXG4gICAgfSk7XG4gICAgaWYgKGNoYW5nZVR5cGUgPT09IFJFTEFYRUQgfHwgY2hhbmdlVHlwZSA9PT0gRk9DVVNFRCkge1xuICAgICAgdGhpcy5ub3RpZnlVc2VyKHRydWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeS5pbmNsdWRlcyh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3dpdGNoKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKSB7XG4gICAgLy8gVE9ETyBBZGQgZnVuY3Rpb24gdG8gY2hlY2sgZm9yIGFsbCBwb3RlbnRpYWwgdmFsdWVzXG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICBpZiAoY2hlY2tTZXR0aW5ncyh0aGlzLnN0YXRlLnNldHRpbmdzKSkge1xuICAgICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZVR5cGU6ICdTRVRUSU5HU19QQVJBTUVURVJTJyxcbiAgICAgICAgc2V0dGluZ3M6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgICB9KTtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLm5vdGlmeVVzZXIoc3VjY2Vzcyk7XG4gIH1cblxuICBub3RpZnlVc2VyKHN1Y2Nlc3MpIHtcbiAgICB0aGlzLnByb3BzLmVucXVldWVTbmFja2JhcihzdWNjZXNzID8gJ05ldyBTZXR0aW5ncyBhcmUgc2F2ZWQuJyA6ICdTZXR0aW5ncyBjYW5ub3QgYmUgc2F2ZWQuJywge1xuICAgICAgdmFyaWFudDogc3VjY2VzcyA/ICdzdWNjZXNzJyA6ICdlcnJvcicsXG4gICAgICBhbmNob3JPcmlnaW46IHtcbiAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxuICAgICAgfSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogNzUwLFxuICAgICAgYXV0b0hpZGVEdXJhdGlvbjogMjAwMCxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZVBhcmFtZXRlcnMocGF0aCwgcGFyYW1ldGVyKSB7XG4gICAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgICAgbGV0IHNldHRpbmdzID0gY29weSh0aGlzLnN0YXRlLnNldHRpbmdzKTtcbiAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIGlmIChpc0ludGVnZXIobmV4dFZhbHVlKSB8fCBuZXh0VmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNldHRpbmdzW3BhdGhdW3BhcmFtZXRlcl0gPSBuZXh0VmFsdWU7IC8vIGRvIG5vdCBwYXJzZUludCBvciB0ZXh0RmllbGQgZ29lcyBjcmF6eS4uLlxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2V0dGluZ3M6IHNldHRpbmdzIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTd2l0Y2goKSB7XG4gICAgbGV0IGluYWN0aXZlUG9saWN5ID0gdGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeTtcblxuICAgIGlmIChpbmFjdGl2ZVBvbGljeS5pbmNsdWRlcyh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCkpIHtcbiAgICAgIGluYWN0aXZlUG9saWN5ID0gcmVtb3ZlSXRlbShpbmFjdGl2ZVBvbGljeSwgdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpO1xuICAgICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZVR5cGU6ICdSRU1PVkVfSU5BQ1RJVkVfUE9MSUNZJyxcbiAgICAgICAgd2luZG93SWQ6IHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluYWN0aXZlUG9saWN5LnB1c2godGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpO1xuICAgICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgbWVzc2FnZVR5cGU6ICdBRERfSU5BQ1RJVkVfUE9MSUNZJyxcbiAgICAgICAgd2luZG93SWQ6IHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbmFjdGl2ZVBvbGljeTogaW5hY3RpdmVQb2xpY3kgfSk7XG4gIH1cblxuICBoYW5kbGVPcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuTW9kYWw6IHRydWUgfSk7XG4gIH1cblxuICBoYW5kbGVDbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1vZGFsOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5wdXRzUGFyYW1ldGVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdPcHRpbWFsIHRhYnMgbnVtYmVyJyxcbiAgICAgICAgc291cmNlOiB0aGlzLnN0YXRlLnNldHRpbmdzLFxuICAgICAgICBwYXRoOiBQT0xJQ1ksXG4gICAgICAgIHBhcmFtZXRlcjogT1BUSU1BTF9OVU1CRVJfVEFCUyxcbiAgICAgICAgaW5wdXRQcm9wczogeyBtaW46ICcxJywgbWF4OiAnMTAwJywgc3RlcDogJzEnIH0sXG4gICAgICB9LFxuICAgIF07XG4gICAgY29uc3QgbGlzdEl0ZW1zUGFyYW1ldGVycyA9IGlucHV0c1BhcmFtZXRlcnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzKGl0ZW0ucGF0aCwgaXRlbS5wYXJhbWV0ZXIpLmJpbmQodGhpcyl9XG4gICAgICAgIHZhbHVlPXtpdGVtLnNvdXJjZVtpdGVtLnBhdGhdW2l0ZW0ucGFyYW1ldGVyXX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIG9uS2V5VXA9eyhldmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykgdGhpcy5oYW5kbGVTYXZlUGFyYW1ldGVycygpO1xuICAgICAgICB9fVxuICAgICAgICBpbnB1dFByb3BzPXtpdGVtLmlucHV0UHJvcHN9XG4gICAgICAvPlxuICAgICkpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluQmxvY2t9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQgJiYgdGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeVxuICAgICAgICAgICAgICAgICAgICA/ICF0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5LmluY2x1ZGVzKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKVxuICAgICAgICAgICAgICAgICAgICA6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3dpdGNoLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zd2l0Y2hXcmFwcGVyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN3aXRjaENvbnRhaW5lcn1cbiAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+RW5hYmxlIG9uIHRoaXMgd2luZG93PC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmludHJvZHVjdGlvbkJsb2NrfT5cbiAgICAgICAgICAgIDxUdW5lSWNvbiAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmFtZXRlcnNUaXRsZX0+U2VsZWN0IHlvdXIgcHJvZmlsZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPXtjbGFzc2VzLnNldHRpbmdzV3JhcHBlcn0+XG4gICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPXsndGFiYnkgdGVuZHMgdG8ga2VlcCA1IHRhYnMnfSBwbGFjZW1lbnQ9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0UHJvZmlsZXNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5mb2N1c2VkTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVCb29sQ2hhbmdlLmJpbmQodGhpcywgRk9DVVNFRCl9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveFdyYXBwZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkZvY3VzPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEhlbHBPdXRsaW5lSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaGVscEljb259IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XG4gICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPXsndGFiYnkgdGVuZHMgdG8ga2VlcCAxMiB0YWJzJ30gcGxhY2VtZW50PVwibGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdFByb2ZpbGVzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUucmVsYXhlZE1vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQm9vbENoYW5nZS5iaW5kKHRoaXMsIFJFTEFYRUQpfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tib3hXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5SZWxheDwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCb29sZWFuc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxIZWxwT3V0bGluZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmhlbHBJY29ufSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21pemVXcmFwcGVyfT5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVCb29sQ2hhbmdlLmJpbmQodGhpcywgQ1VTVE9NSVpFRCl9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrYm94V3JhcHBlcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+Q3VzdG9taXplPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCb29sZWFuc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NCbG9ja30+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbCByZXF1aXJlZCBmdWxsV2lkdGg+XG4gICAgICAgICAgICAgICAge2xpc3RJdGVtc1BhcmFtZXRlcnN9XG4gICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgaGlkZGVuIGtleT1cImhpZGRlbi10ZXh0ZmllbGRcIiBkaXNhYmxlZCAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kYXJ5QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2F2ZVBhcmFtZXRlcnMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgb25DbGljaz17dGhpcy5oYW5kbGVPcGVuLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXBzQnV0dG9ufT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbFRpcHN9PkhlbHA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIC8vZGlzYWJsZVBvcnRhbD17dHJ1ZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kYWx9XG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVuTW9kYWx9XG4gICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXG4gICAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxuICAgICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcbiAgICAgICAgICAgIHRpbWVvdXQ6IDc1MCxcbiAgICAgICAgICAgIGludmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEZhZGUgaW49e3RoaXMuc3RhdGUub3Blbk1vZGFsfT5cbiAgICAgICAgICAgIDxCb3ggYm9yZGVyUmFkaXVzPXs2fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJsb2NrTW9kYWx9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZEVuc2VtYmxlfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5Qcm90ZWN0IGEgdGFiPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGFzdEVuc2VtYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycuLi8uLi9hc3NldHMvc3RhdGljL2ljb25zL3JpZ2h0X2NsaWNrLnBuZyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0Q2xpY2tXcmFwcGVyfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT4rPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+UGluPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kRW5zZW1ibGV9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlJlb3BlbiBtdWx0aXBsZSB0YWJzPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRFbnNlbWJsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5DdHJsPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT4rPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4uLy4uL2Fzc2V0cy9zdGF0aWMvaWNvbnMvbGVmdF9jbGljay5wbmcnfSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdENsaWNrV3JhcHBlcn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkhvdyBkb2VzIHRhYmJ5IHdvcms/PC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsTmV4dH0+XG4gICAgICAgICAgICAgICAgdGFiYnkgd2lsbCBub3QgcmVtb3ZlIHRhYnMgcmlnaHQgYWZ0ZXIgdGhlaXIgY3JlYXRpb24ueycgJ31cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsTmV4dH0+XG4gICAgICAgICAgICAgICAgdGFiYnkgdGFrZXMgd2VsbC10aG91Z2h0LW91dCBkZWNpc2lvbnMgYXV0b21hdGljYWxseS5cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlck1vZGFsfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90YWJieS51cy9mYXFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsVGlwc30+RkFRIGF2YWlsYWJsZSBoZXJlPC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsVGlwc30+XG4gICAgICAgICAgICAgICAgICB0YWJieSB7YnJvd3Nlci5ydW50aW1lLmdldE1hbmlmZXN0KCkudmVyc2lvbn1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTbmFja2JhcihTZXR0aW5ncyk7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vU2V0dGluZ3MnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHNldHRpbmdzV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIG1hcmdpblRvcDogNSxcbiAgICBtYXJnaW5MZWZ0OiA0NyxcbiAgICBtYXJnaW5SaWdodDogMjAsXG4gIH0sXG4gIHNlY29uZGFyeUJ1dHRvbjoge1xuICAgIG1hcmdpblRvcDogMTgsXG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcblxuICAgIG1heFdpZHRoOiAyMCxcbiAgfSxcblxuICBub3RpZmljYXRpb246IHtcbiAgICBtYXhXaWR0aDogMTUwLFxuICB9LFxuICBpbnRyb2R1Y3Rpb25CbG9jazoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3N0YXJ0JyxcbiAgICBtYXJnaW5MZWZ0OiA3LFxuICB9LFxuICBwYXJhbWV0ZXJzVGl0bGU6IHtcbiAgICAvL2ZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTcsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gICAgbWFyZ2luTGVmdDogMTYsXG4gIH0sXG4gIHNldHRpbmdzQmxvY2s6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtYXJnaW5MZWZ0OiAzMixcbiAgICBtYXJnaW5Ub3A6IDQsXG4gIH0sXG4gIGZpcnN0Qm9vbGVhbnM6IHtcbiAgICBtYXhXaWR0aDogJzM2JScsXG4gICAgbWluV2lkdGg6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgbWF4SGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5Ub3A6IDUsXG4gICAgLy8gcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICB9LFxuICBmaXJzdFByb2ZpbGVzQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIG1heFdpZHRoOiB0aGVtZS5zcGFjaW5nKDEwKSxcbiAgfSxcblxuICBzdHlsZUxhYmVsOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICB9LFxuICBjaGVja2JveFdyYXBwZXI6IHtcbiAgICBwb2ludGVyRXZlbnRzOiAnYXV0bycsXG4gIH0sXG4gIHN3aXRjaENvbnRhaW5lcjoge1xuICAgIG1heEhlaWdodDogMjAsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIH0sXG4gIHN3aXRjaFdyYXBwZXI6IHtcbiAgICBwb2ludGVyRXZlbnRzOiAnYXV0bycsXG4gIH0sXG4gIHRleHRGaWVsZDoge1xuICAgIG1heFdpZHRoOiAnODUlJyxcbiAgfSxcbiAgY3VzdG9taXplV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3N0YXJ0JyxcbiAgICBhbGlnbkl0ZW1zOiAnc3RhcnQnLFxuICB9LFxuICBoZWxwSWNvbjoge1xuICAgIGNvbG9yOiAnI2U1NWMwMCcsXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygwLjI1KSxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBtb2RhbDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNCknLFxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXG4gIH0sXG4gIG1haW5CbG9jazoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAvL2JvcmRlcjogJzAuNXB4IHNvbGlkICM1QTVBNUEnLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygzKSxcblxuICAgIG9wYWNpdHk6ICcxICFpbXBvcnRhbnQnLFxuICB9LFxuICBib3hDdHJsOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICM1QTVBNUEnLFxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygyLjUpLFxuICAgIC8vcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcbiAgICAvL21hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgLy9tYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygzKSxcblxuICAgIG9wYWNpdHk6ICcxICFpbXBvcnRhbnQnLFxuICB9LFxuICBsZWZ0Q2xpY2tXcmFwcGVyOiB7XG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICB9LFxuICBzZWNvbmRFbnNlbWJsZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1pbldpZHRoOiAnMzAlJyxcbiAgfSxcbiAgbGFzdEVuc2VtYmxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWluV2lkdGg6ICcyNy41JScsXG4gIH0sXG4gIGZpcnN0QmxvY2tNb2RhbDoge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgdGlwc0J1dHRvbjoge1xuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMCksXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgIHBhZGRpbmdSaWdodDogMCxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcbiAgfSxcbiAgc3R5bGVMYWJlbFRpcHM6IHtcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gICAgY29sb3I6ICdyZ2JhKDE1MCwgMTUwLCAxNTAsIDEpJyxcbiAgfSxcbiAgc3R5bGVMYWJlbE5leHQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgfSxcbiAgZm9vdGVyTW9kYWw6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS41KSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAvLyBtaW5XaWR0aDogJzEwMCUnLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoU2V0dGluZ3MpO1xuIiwiZXhwb3J0IGNvbnN0IE9QVElNQUxfTlVNQkVSX1RBQlMgPSAndGFyZ2V0X3RhYnMnO1xuZXhwb3J0IGNvbnN0IFBPTElDWSA9ICdwb2xpY3knO1xuZXhwb3J0IGNvbnN0IElOQUNUSVZFX1BPTElDWSA9ICdpbmFjdGl2ZV9wb2xpY3knO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTZXR0aW5ncyhzZXR0aW5ncykge1xuICBpZiAoc2V0dGluZ3NbUE9MSUNZXVtPUFRJTUFMX05VTUJFUl9UQUJTXSAmJiBzZXR0aW5nc1tQT0xJQ1ldW09QVElNQUxfTlVNQkVSX1RBQlNdID4gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY2FyZC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWI5ZTc0O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxubGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xcbn1cXG5cXG4uY2FyZC1ib2R5IHtcXG4gIHBhZGRpbmc6IDEuMjVyZW07XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIG1pbi1oZWlnaHQ6IDFweDtcXG59XFxuLmJvbGQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG46Zm9jdXMge291dGxpbmU6MCAhaW1wb3J0YW50O31cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInRrLWNocm9tZTpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5KSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAoZXZlbnQpID0+IHtcblx0XHRvblNjcmlwdENvbXBsZXRlID0gKCkgPT4ge1xuXG5cdFx0fVxuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiBmbihldmVudCkpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KVxuXHR9LCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInBvcHVwXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL2FwcC9wb3B1cC5qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfcHNsX2luZGV4X2pzLW5vZGVfbW9kdWxlc193ZWJleHRlbnNpb24tcG9seWZpbGxfZGlzdF9icm93c2VyLXBvbHlmaWxsX2pzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19tYXRlcmlhbC11aV9jb3JlX1R5cG9ncmFwaHlfVHlwb2dyYXBoeV9qcy1ub2RlX21vZHVsZXNfbWF0ZXJpYWwtdWlfY29yZV8tN2EyNjdmXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19kYXlqc19kYXlqc19taW5fanMtbm9kZV9tb2R1bGVzX2xvZGFzaF9sb2Rhc2hfanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfZXNtX0F2YXRhcl9BdmF0YXJfanMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfZXNtXy1iYTlkNzZcIixcInNyY19jb25maWdfc2V0dGluZ3NQcm9maWxlc19qcy1zcmNfY29uZmlnX3dlYnNpdGVzX2pzLXNyY19zZXJ2aWNlc191dGlsc19qc1wiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9ICgpID0+IHtcblxufTtcbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdH1cblx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG5mdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cdHZhciBydW50aW1lID0gZGF0YVszXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufTtcblxudmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gfHwgW107XG52YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuanNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG52YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=