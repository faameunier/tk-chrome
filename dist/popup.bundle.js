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
    if (!lodash__WEBPACK_IMPORTED_MODULE_9___default().isEqual(prevProps.closed_history, this.props.closed_history)) {
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
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)(styles)(_HomeDispatcher__WEBPACK_IMPORTED_MODULE_0__.default));

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
    if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isEqual(prevProps.settings, this.props.settings)) {
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

    if (!lodash__WEBPACK_IMPORTED_MODULE_1___default().isEqual(prevProps.inactive_policy, this.props.inactive_policy)) {
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
/******/ 			["./src/app/popup.js","vendors-node_modules_psl_index_js-node_modules_webextension-polyfill_dist_browser-polyfill_js","vendors-node_modules_material-ui_core_Typography_Typography_js-node_modules_material-ui_core_-c06362","vendors-node_modules_dayjs_dayjs_min_js-node_modules_lodash_lodash_js","vendors-node_modules_material-ui_core_esm_Avatar_Avatar_js-node_modules_material-ui_core_esm_-ba9d76","src_config_settingsProfiles_js-src_config_websites_js-src_services_utils_js"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzcz9lYTVkIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiQXBwIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUkVTVE9SRSIsIlNIRUxMX1JFU1RPUkUiLCJOVU1CRVJfSE9VUlNfREFZIiwiVElNRV9QRVJJT0RfMjRIIiwiVElNRV9QRVJJT0RfNzJIIiwiRlVMTF9TS0VMRVRPTiIsIkRJU1BMQVlfU1RBVFVTRVMiLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZXRBbGxSZWFkQmFkZ2UiLCJza2VsZXRvbiIsInN0YXRlIiwiY2xvc2VkX2hpc3RvcnkiLCJlbnJpY2hIaXN0b3J5IiwibG9hZGluZyIsInRpbWVvdXQiLCJGUk9OVEVORF9TS0VMRVRPTl9ESVNQTEFZIiwidGhlbiIsImxvZ2dlciIsInNldFN0YXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJfIiwicmVtb3ZlSXRlbSIsImxpc3RJdGVtcyIsImtleSIsImUiLCJjdHJsS2V5IiwibWV0YUtleSIsInJlc3RvcmVUYWIiLCJpdGVtcyIsIm1lc3NhZ2VUeXBlIiwicmVzdG9yZWRUYWIiLCJ1dWlkIiwiZmlsdGVyIiwiaXRlbSIsImJyb3dzZXIiLCJzZWFyY2hPbkNoYW5nZSIsInZhbHVlIiwic2VhcmNoVmFsdWUiLCJzZWFyY2hPblJlcXVlc3RTZWFyY2giLCJldmVudCIsInNlYXJjaE9uQ2FuY2VsIiwiZmlsdGVyTGlzdCIsInNlbGVjdGVkTGlzdCIsImVuZFBlcmlvZCIsIm5vdyIsIkRhdGUiLCJkZWxldGlvbl90aW1lIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJjb2ZmZWVUaW1lIiwid2luZG93Iiwib3BlbiIsImhpc3RvcnkiLCJyeCIsIlJlZ0V4cCIsIk5PX1JFU1RPUkVfVVJMIiwibWFwIiwid2Vic2l0ZSIsImRlbGV0aW9uVGltZSIsImhvdXJzX21pbnV0ZXNfZm9ybWF0IiwiZGF5anMiLCJmb3JtYXQiLCJkYXRlIiwic3RhcnRPZiIsIm5vX3Jlc3RvcmUiLCJleGVjIiwidXJsIiwicmV2ZXJzZSIsInJlbmRlckxpc3QiLCJjbGFzc2VzIiwic2xpY2UiLCJsZW5ndGgiLCJzZWFyY2hQYXR0ZXJuIiwic3BsaXQiLCJ0ZXJtIiwiam9pbiIsIm9wdGlvbiIsInRpdGxlIiwibWF0Y2giLCJjdXJyZW50IiwibGFzdCIsImkiLCJuZXh0IiwiZGVsdGEiLCJNYXRoIiwibWF4IiwiY2VpbCIsImRpZmYiLCJzcGxpY2UiLCJ0ZXh0IiwiZGF5IiwibGlzdEl0ZW0iLCJteUZpbHRlcmVkTGlzdCIsImluZGV4Iiwic3R5bGUiLCJwcmltYXJ5IiwicHJpbWFyeVRpdGxlQ29udGFpbmVyIiwibGlzdFRpdGxlVGV4dCIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsImF2YXRhckNvbnRhaW5lciIsInByaW1hcnlUZXh0Q29udGFpbmVyIiwic2Vjb25kYXJ5VGV4dENvbnRhaW5lciIsIml0ZW1UZXh0IiwiYmluZCIsImJ1dHRvbiIsImxpc3RXZWJzaXRlcyIsInNlYXJjaEJhciIsIm1pbiIsInJlbmRlciIsIm51bWJlckNsb3NlZFRhYnNMYXN0SG91ciIsImJvbGROdW1iZXIiLCJ0ZXh0T25SaWdodCIsInRvcFRleHQiLCJtaWRkbGVUZXh0IiwiZm9vdGVyQ29udGFpbmVyIiwiaWNvbkNvbnRhaW5lciIsImZvb3RlclJpZ2h0IiwibGlua1RvRm9ybSIsIndpdGhTbmFja2JhciIsInN0eWxlcyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWF4SGVpZ2h0IiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJncmVlblRpdGxlIiwiZm9udFNpemUiLCJib3JkZXJCb3R0b20iLCJtYXhXaWR0aCIsImxpc3RUaXRsZSIsImNvbG9yIiwic3ViVGV4dCIsIm1hcmdpblRvcCIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwiYnV0dG9uQ29udGFpbmVyIiwib3ZlcmZsb3dXcmFwIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwidGV4dEFsaWduIiwibWluV2lkdGgiLCJtYXJnaW5SaWdodCIsImxpbmVIZWlnaHQiLCJoZWlnaHQiLCJsaXN0Q29udGFpbmVyIiwibWFyZ2luQm90dG9tIiwid2l0aFN0eWxlcyIsIkhvbWVEaXNwYXRjaGVyIiwibmV3VmFsdWUiLCJhcHBCYXJWYWx1ZSIsImZpcnN0TG9hZCIsInJlc3VsdCIsImFjdGl2ZV9wcm9maWxlIiwiRk9DVVNFRCIsInNldHRpbmdzIiwiSU5JVF9GT0NVU0VEX1BST0ZJTEUiLCJmb2N1c2VkX3dpbmRvd19pZCIsImluYWN0aXZlX3BvbGljeSIsIm9uQ2hhbmdlZENhbGxiYWNrIiwiY2hhbmdlcyIsImtleXMiLCJmb3JFYWNoIiwiY29tcG9uZW50RGlkTW91bnQiLCJkaXNwYXRjaFBhZ2UiLCJkaXNwbGF5SWNvbiIsImhhbmRsZUNoYW5nZSIsImJldGEiLCJFTlYiLCJyb290Iiwibm90aWZpY2F0aW9uIiwidmFyaWFudFN1Y2Nlc3MiLCJzdWNjZXNzIiwiaG9tZUNvbnRhaW5lciIsInBhcGVyU2hhZG93IiwiZ3JpZExvZ29UYWJzIiwiZW5zZW1ibGVsb2dvIiwidGV4dERlY29yYXRpb24iLCJsb2dvRnVsbCIsImJveFNoYWRvdyIsInRhYiIsImxlZnQiLCJhbGxUYWJzIiwibG9nb0F2YXRhciIsIndpZHRoIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJMaWdodFRvb2x0aXAiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29tbW9uIiwid2hpdGUiLCJzaGFkb3dzIiwiVG9vbHRpcCIsIlNldHRpbmdzIiwiZm9jdXNlZE1vZGUiLCJyZWxheGVkTW9kZSIsIlJFTEFYRUQiLCJjdXN0b21pemVkQm9vbCIsIkNVU1RPTUlaRUQiLCJmb2N1c2VkV2luZG93SWQiLCJpbmFjdGl2ZVBvbGljeSIsIm9wZW5Nb2RhbCIsImhhbmRsZUJvb2xDaGFuZ2UiLCJjaGFuZ2VUeXBlIiwicHJvZmlsZSIsIm5vdGlmeVVzZXIiLCJoYW5kbGVTd2l0Y2giLCJoYW5kbGVTYXZlUGFyYW1ldGVycyIsImNoZWNrU2V0dGluZ3MiLCJlbnF1ZXVlU25hY2tiYXIiLCJ2YXJpYW50IiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiYXV0b0hpZGVEdXJhdGlvbiIsImhhbmRsZUNoYW5nZVBhcmFtZXRlcnMiLCJwYXRoIiwicGFyYW1ldGVyIiwiY29weSIsIm5leHRWYWx1ZSIsInRhcmdldCIsImlzSW50ZWdlciIsIndpbmRvd0lkIiwicHVzaCIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbG9zZSIsImlucHV0c1BhcmFtZXRlcnMiLCJsYWJlbCIsInNvdXJjZSIsIlBPTElDWSIsIk9QVElNQUxfTlVNQkVSX1RBQlMiLCJpbnB1dFByb3BzIiwic3RlcCIsImxpc3RJdGVtc1BhcmFtZXRlcnMiLCJ0ZXh0RmllbGQiLCJtYWluQmxvY2siLCJzd2l0Y2hXcmFwcGVyIiwic3dpdGNoQ29udGFpbmVyIiwic3R5bGVMYWJlbCIsImludHJvZHVjdGlvbkJsb2NrIiwicGFyYW1ldGVyc1RpdGxlIiwic2V0dGluZ3NXcmFwcGVyIiwiZmlyc3RQcm9maWxlc0NvbnRhaW5lciIsImNoZWNrYm94V3JhcHBlciIsImZpcnN0Qm9vbGVhbnMiLCJoZWxwSWNvbiIsImN1c3RvbWl6ZVdyYXBwZXIiLCJzZXR0aW5nc0Jsb2NrIiwic2Vjb25kYXJ5QnV0dG9uIiwidGlwc0J1dHRvbiIsInN0eWxlTGFiZWxUaXBzIiwibW9kYWwiLCJCYWNrZHJvcCIsImludmlzaWJsZSIsInBhcGVyIiwiZmlyc3RCbG9ja01vZGFsIiwic2Vjb25kRW5zZW1ibGUiLCJsYXN0RW5zZW1ibGUiLCJsZWZ0Q2xpY2tXcmFwcGVyIiwic3R5bGVMYWJlbE5leHQiLCJmb290ZXJNb2RhbCIsInZlcnNpb24iLCJwb2ludGVyRXZlbnRzIiwibWluSGVpZ2h0IiwiekluZGV4IiwiZHJhd2VyIiwib3BhY2l0eSIsImJveEN0cmwiLCJib3JkZXIiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIklOQUNUSVZFX1BPTElDWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyxpRUFBYyxDQUFDO0FBQzNCQyxZQUFVLEVBQUU7QUFDVkMsY0FBVSxFQUFFO0FBREYsR0FEZTtBQUkzQkMsU0FBTyxFQUFFO0FBQ1BDLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUU7QUFERztBQURKO0FBSmtCLENBQUQsQ0FBNUI7O0FBV0EsU0FBU0MsR0FBVCxHQUFlO0FBQ2Isc0JBQ0UsMkRBQUMsNkRBQUQ7QUFBa0IsU0FBSyxFQUFFUDtBQUF6QixrQkFDRSwyREFBQywrREFBRCxPQURGLEVBQ3FCLEdBRHJCLENBREY7QUFLRDs7QUFFRFEsdURBQUEsZUFBZ0IsMkRBQUMsR0FBRCxPQUFoQixFQUF5QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O1dBQ0EsRTs7Ozs7V0M1Q0E7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ0pBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQztXQUNBO1dBQ0EsZ0JBQWdCLDJCQUEyQjtXQUMzQztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxlQUFlLHVCQUF1QjtXQUN0QztXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLDJDOzs7O1VDNUZBO1VBQ0EiLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSG9tZURpc3BhdGNoZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lRGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gIH0sXG4gIHBhbGV0dGU6IHtcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjMDBiOWFhJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhvbWVEaXNwYXRjaGVyIC8+eycgJ31cbiAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCB7IEZST05URU5EX1NLRUxFVE9OX0RJU1BMQVkgfSBmcm9tICcuLi8uLi9jb25maWcvZW52LmpzJztcbmltcG9ydCB7IE5PX1JFU1RPUkVfVVJMIH0gZnJvbSAnLi4vLi4vY29uZmlnL3dlYnNpdGVzLmpzJztcbmltcG9ydCB7IGxvZ2dlciwgdGltZW91dCwgc2V0QWxsUmVhZEJhZGdlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMuanMnO1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvU2tlbGV0b24nO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhcic7XG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBFcnJvck91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FcnJvck91dGxpbmUnO1xuaW1wb3J0IEZhdm9yaXRlQm9yZGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVCb3JkZXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgeyB3aXRoU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xuaW1wb3J0IHsgRml4ZWRTaXplTGlzdCB9IGZyb20gJ3JlYWN0LXdpbmRvdyc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ21hdGVyaWFsLXVpLXNlYXJjaC1iYXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgUkVTVE9SRSA9ICdSRVNUT1JFJztcbmNvbnN0IFNIRUxMX1JFU1RPUkUgPSAnU0hFTExfUkVTVE9SRSc7XG5jb25zdCBOVU1CRVJfSE9VUlNfREFZID0gMjQ7XG5jb25zdCBUSU1FX1BFUklPRF8yNEggPSAzNjAwMDAwICogTlVNQkVSX0hPVVJTX0RBWTsgLy8gaW4gbWljcm9zZWNvbmRcbmNvbnN0IFRJTUVfUEVSSU9EXzcySCA9IDM2MDAwMDAgKiBOVU1CRVJfSE9VUlNfREFZICogMzsgLy8gaW4gbWljcm9zZWNvbmRcbmNvbnN0IEZVTExfU0tFTEVUT04gPSBmYWxzZTtcbmNvbnN0IERJU1BMQVlfU1RBVFVTRVMgPSBbJ2tpbGxlZCddO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHNldEFsbFJlYWRCYWRnZSgpO1xuXG4gICAgaWYgKHByb3BzLnNrZWxldG9uKSB7XG4gICAgICB0aGlzLnN0YXRlID0geyBjbG9zZWRfaGlzdG9yeTogdGhpcy5lbnJpY2hIaXN0b3J5KHByb3BzLmNsb3NlZF9oaXN0b3J5KSwgbG9hZGluZzogdHJ1ZSB9O1xuICAgICAgdGltZW91dChGUk9OVEVORF9TS0VMRVRPTl9ESVNQTEFZKS50aGVuKCgpID0+IHtcbiAgICAgICAgbG9nZ2VyKHRoaXMsICdEaXNwbGF5aW5nIGxpc3QnKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IGNsb3NlZF9oaXN0b3J5OiB0aGlzLmVucmljaEhpc3RvcnkocHJvcHMuY2xvc2VkX2hpc3RvcnkpLCBsb2FkaW5nOiBmYWxzZSB9O1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHNldEFsbFJlYWRCYWRnZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghXy5pc0VxdWFsKHByZXZQcm9wcy5jbG9zZWRfaGlzdG9yeSwgdGhpcy5wcm9wcy5jbG9zZWRfaGlzdG9yeSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZWRfaGlzdG9yeTogdGhpcy5lbnJpY2hIaXN0b3J5KHRoaXMucHJvcHMuY2xvc2VkX2hpc3RvcnkpIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUl0ZW0obGlzdEl0ZW1zLCBrZXksIGUpIHtcbiAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgLy8gbWV0YUtleSBpcyBjbWQga2V5IG9uIG1hY1xuICAgICAgdGhpcy5yZXN0b3JlVGFiKGxpc3RJdGVtcywga2V5LCBTSEVMTF9SRVNUT1JFKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXN0b3JlVGFiKGxpc3RJdGVtcywga2V5LCBSRVNUT1JFKTtcbiAgICB9XG4gIH1cblxuICByZXN0b3JlVGFiKGl0ZW1zLCBrZXksIG1lc3NhZ2VUeXBlKSB7XG4gICAgY29uc3QgcmVzdG9yZWRUYWIgPSBpdGVtc1trZXldO1xuICAgIGxvZ2dlcih0aGlzLCBtZXNzYWdlVHlwZSArICcgZm9yIHRhYiAnICsgcmVzdG9yZWRUYWIudXVpZCk7XG4gICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS51dWlkICE9PSByZXN0b3JlZFRhYi51dWlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VkX2hpc3Rvcnk6IGNsb3NlZF9oaXN0b3J5IH0pOyAvLyBubyBuZWVkIHRvIGVucmljaCBoZXJlXG4gICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlVHlwZSxcbiAgICAgIHV1aWQ6IHJlc3RvcmVkVGFiLnV1aWQsXG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2hPbkNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogdmFsdWUgfSk7XG4gIH1cblxuICBzZWFyY2hPblJlcXVlc3RTZWFyY2goZXZlbnQpIHt9XG5cbiAgc2VhcmNoT25DYW5jZWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiAnJyB9KTtcbiAgfVxuXG4gIGZpbHRlckxpc3Qoc2VsZWN0ZWRMaXN0LCBlbmRQZXJpb2QpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZWxlY3RlZExpc3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gbm93IC0gaXRlbS5kZWxldGlvbl90aW1lIDwgZW5kUGVyaW9kICYmIERJU1BMQVlfU1RBVFVTRVMuaW5jbHVkZXMoaXRlbS5zdGF0dXMpO1xuICAgIH0pO1xuICB9XG5cbiAgY29mZmVlVGltZSgpIHtcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9idXltZWFjb2ZmLmVlL3RhYmJ5dGFicycsICdfYmxhbmsnKTtcbiAgfVxuXG4gIGVucmljaEhpc3RvcnkoaGlzdG9yeSkge1xuICAgIC8vIGtlZXAgZWxlbWVudHMgb25seSBpbiB0aW1lLWZyYW1lXG4gICAgbGV0IHNlbGVjdGVkTGlzdCA9IGhpc3RvcnkgPyB0aGlzLmZpbHRlckxpc3QoaGlzdG9yeSwgVElNRV9QRVJJT0RfNzJIKSA6IFtdO1xuICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cChOT19SRVNUT1JFX1VSTC5qb2luKCd8JykpO1xuICAgIC8vIGxpc3QgZW5yaWNobWVudFxuICAgIHNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdC5tYXAoKHdlYnNpdGUpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygd2Vic2l0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3QgZGVsZXRpb25UaW1lID0gbmV3IERhdGUod2Vic2l0ZS5kZWxldGlvbl90aW1lKTtcbiAgICAgICAgd2Vic2l0ZS5ob3Vyc19taW51dGVzX2Zvcm1hdCA9IGRheWpzKGRlbGV0aW9uVGltZSkuZm9ybWF0KCdISDptbScpO1xuICAgICAgICB3ZWJzaXRlLmRhdGUgPSBkYXlqcyhkZWxldGlvblRpbWUpLnN0YXJ0T2YoJ2RhdGUnKTtcbiAgICAgICAgd2Vic2l0ZS5ub19yZXN0b3JlID0gcnguZXhlYyh3ZWJzaXRlLnVybCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gd2Vic2l0ZTtcbiAgICB9KTtcblxuICAgIHNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdC5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIHNlbGVjdGVkTGlzdDtcbiAgfVxuXG4gIHJlbmRlckxpc3QoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHNlbGVjdGVkTGlzdCA9IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3Rvcnkuc2xpY2UoMCk7XG4gICAgLy8ga2VlcGluZyBvbmx5IHdlYnNpdGVzIHRoYXQgbWF0Y2ggc2VhcmNoIGNyaXRlcmlhXG4gICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNlYXJjaFBhdHRlcm4gPSBuZXcgUmVnRXhwKFxuICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlXG4gICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAubWFwKCh0ZXJtKSA9PiBgKD89Lioke3Rlcm19KWApXG4gICAgICAgICAgLmpvaW4oJycpLFxuICAgICAgICAnaSdcbiAgICAgICk7XG4gICAgICBzZWxlY3RlZExpc3QgPSBzZWxlY3RlZExpc3QuZmlsdGVyKFxuICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24udGl0bGUubWF0Y2goc2VhcmNoUGF0dGVybikgfHwgb3B0aW9uLnVybC5tYXRjaChzZWFyY2hQYXR0ZXJuKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudCA9IGRheWpzKCkuc3RhcnRPZignZGF0ZScpO1xuICAgIGxldCBsYXN0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5leHQgPSBzZWxlY3RlZExpc3RbaV0uZGF0ZTtcbiAgICAgIGxldCBkZWx0YSA9IE1hdGgubWF4KDAsIE1hdGguY2VpbChjdXJyZW50LmRpZmYobmV4dCwgJ2RheXMnLCB0cnVlKSkpO1xuICAgICAgaWYgKGRlbHRhID4gbGFzdCkge1xuICAgICAgICBpZiAoZGVsdGEgPT09IDEpIHtcbiAgICAgICAgICBzZWxlY3RlZExpc3Quc3BsaWNlKGksIDAsIHsgdGV4dDogJ1llc3RlcmRheSAtICcsIGRheTogbmV4dC5mb3JtYXQoJ01NTSBERCcpIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGRlbHRhID09PSAyKSB7XG4gICAgICAgICAgc2VsZWN0ZWRMaXN0LnNwbGljZShpLCAwLCB7IHRleHQ6ICdQcmV2aW91cyBkYXkgLSAnLCBkYXk6IG5leHQuZm9ybWF0KCdNTU0gREQnKSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZExpc3Quc3BsaWNlKGksIDAsIHsgdGV4dDogJycsIGRheTogbmV4dC5mb3JtYXQoJ01NTSBERCcpIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxhc3QgPSBkZWx0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsaXN0SXRlbSA9IChteUZpbHRlcmVkTGlzdCkgPT4gKHsgaW5kZXgsIHN0eWxlIH0pID0+IHtcbiAgICAgIGNvbnN0IHdlYnNpdGUgPSBteUZpbHRlcmVkTGlzdFtpbmRleF07XG4gICAgICBpZiAodHlwZW9mIHdlYnNpdGUuZGF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxMaXN0SXRlbSBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgIHByaW1hcnk9e2Ake3dlYnNpdGUudGV4dH0gJHt3ZWJzaXRlLmRheX1gfVxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk6IGNsYXNzZXMucHJpbWFyeVRpdGxlQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RUaXRsZVRleHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxMaXN0SXRlbSBDb250YWluZXJDb21wb25lbnQ9XCJkaXZcIiBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRBdmF0YXJXaXRoVGltZX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aW1lRGlzcGxheX0+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiBGVUxMX1NLRUxFVE9OID8gPFNrZWxldG9uIHdpZHRoPVwiM2VtXCIgLz4gOiBgJHt3ZWJzaXRlLmhvdXJzX21pbnV0ZXNfZm9ybWF0fWB9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICA8U2tlbGV0b24gdmFyaWFudD1cImNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIC8+XG4gICAgICAgICAgICAgICAgICA8L1NrZWxldG9uPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzcXVhcmVcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3dlYnNpdGUudGl0bGUgPyB3ZWJzaXRlLnRpdGxlIDogd2Vic2l0ZS51cmx9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17d2Vic2l0ZS5mYXZJY29uVXJsID8gd2Vic2l0ZS5mYXZJY29uVXJsIDogJ2Vycm9yJ31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhckNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiBGVUxMX1NLRUxFVE9OID8gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB3aWR0aD1cIjE1ZW1cIiAvPlxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB3aWR0aD1cIjEwZW1cIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXt3ZWJzaXRlLnVybH1cbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e3dlYnNpdGUudGl0bGV9XG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgICAgcHJpbWFyeTogY2xhc3Nlcy5wcmltYXJ5VGV4dENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeTogY2xhc3Nlcy5zZWNvbmRhcnlUZXh0Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgRlVMTF9TS0VMRVRPTiA/IG51bGwgOiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcywgbXlGaWx0ZXJlZExpc3QsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17d2Vic2l0ZS5ub19yZXN0b3JlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7J1Jlc3RvcmUnfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFdlYnNpdGVzfT5cbiAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG9uIGxhc3QgNzJoXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWFyY2hPbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uUmVxdWVzdFNlYXJjaD17dGhpcy5zZWFyY2hPblJlcXVlc3RTZWFyY2guYmluZCh0aGlzKX1cbiAgICAgICAgICBvbkNhbmNlbFNlYXJjaD17dGhpcy5zZWFyY2hPbkNhbmNlbC5iaW5kKHRoaXMpfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hCYXJ9XG4gICAgICAgIC8+XG4gICAgICAgIHtzZWxlY3RlZExpc3QubGVuZ3RoID09PSAwID8gbnVsbCA6IChcbiAgICAgICAgICA8Rml4ZWRTaXplTGlzdCBoZWlnaHQ9e01hdGgubWluKDgwICogc2VsZWN0ZWRMaXN0Lmxlbmd0aCwgMzAwKX0gaXRlbUNvdW50PXtzZWxlY3RlZExpc3QubGVuZ3RofSBpdGVtU2l6ZT17ODB9PlxuICAgICAgICAgICAge2xpc3RJdGVtKHNlbGVjdGVkTGlzdCl9XG4gICAgICAgICAgPC9GaXhlZFNpemVMaXN0PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeVxuICAgICAgPyB0aGlzLmZpbHRlckxpc3QodGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSwgVElNRV9QRVJJT0RfMjRIKS5sZW5ndGhcbiAgICAgIDogMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGRpdiB2YXJpYW50PVwiaDNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2xkTnVtYmVyfT5cbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPyBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgOiAwfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0T25SaWdodH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudG9wVGV4dH0+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIHRhYlxuICAgICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIDw9IDEgPyAnJyA6ICdzJ30gY2xvc2VkXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubWlkZGxlVGV4dH0+IGluIHRoZSBsYXN0IHtgJHtOVU1CRVJfSE9VUlNfREFZfSBob3Vyc2B9IDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlckxpc3QuYmluZCh0aGlzKSgpfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlckNvbnRhaW5lcn0+XG4gICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJkaXZcIiBvbkNsaWNrPXt0aGlzLmNvZmZlZVRpbWUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICA8RmF2b3JpdGVCb3JkZXJJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25Db250YWluZXJ9IC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlclJpZ2h0fT5cbiAgICAgICAgICAgIDxFcnJvck91dGxpbmVJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25Db250YWluZXJ9IC8+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZm9ybXMvZC9lLzFGQUlwUUxTZFVFSkhkMGJMNnJ5RnZaazIyMENvWnA3Y3d2RnhFU29ycHM3Y25nazB3UWZ5dS1RL3ZpZXdmb3JtXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtUb0Zvcm19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEJ1Zy9GZWVkYmFjaz9cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTbmFja2JhcihIb21lKTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHRpdGxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtYXhIZWlnaHQ6IDQwLFxuICB9LFxuICB0ZXh0T25SaWdodDoge1xuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdzdGFydCcsXG4gIH0sXG4gIGdyZWVuVGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAjMDBiOWFhYCxcbiAgICBtYXhXaWR0aDogMjI1LFxuICB9LFxuICBsaXN0VGl0bGU6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgbWF4SGVpZ2h0OiAzMCxcbiAgfSxcblxuICBib2xkTnVtYmVyOiB7XG4gICAgY29sb3I6ICcjZTU1YzAwJyxcbiAgICBmb250U2l6ZTogNDAsXG4gICAgbWF4V2lkdGg6ICczMCUnLFxuICB9LFxuICBtaWRkbGVUZXh0OiB7XG4gICAgZm9udFNpemU6IDEzLFxuICB9LFxuICB0b3BUZXh0OiB7XG4gICAgZm9udFNpemU6IDE2LFxuICB9LFxuICBzdWJUZXh0OiB7XG4gICAgZm9udFNpemU6IDEzLFxuICAgIG1hcmdpblRvcDogMTAsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWF4V2lkdGg6IDIwLFxuICB9LFxuICBidXR0b25Db250YWluZXI6IHsgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyB9LFxuICBpdGVtVGV4dDoge1xuICAgIG1heFdpZHRoOiAxODUsXG4gICAgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aGl0ZVNwYWNlOiAnYnJlYWstc3BhY2VzJyxcblxuICAgIG1heEhlaWdodDogNjAsXG4gIH0sXG4gIHRpbWVEaXNwbGF5OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDAuNzUpLFxuICAgIG1heFdpZHRoOiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgfSxcbiAgZ3JpZEF2YXRhcldpdGhUaW1lOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB9LFxuICBsaXN0V2Vic2l0ZXM6IHtcbiAgICBtYXJnaW5Ub3A6IDIwLFxuICB9LFxuICBmb290ZXJDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMi41KSxcbiAgICBtYXhIZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICB9LFxuICBmb290ZXJSaWdodDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgfSxcblxuICBsaW5rVG9Gb3JtOiB7XG4gICAgZm9udFNpemU6IDEwLFxuICB9LFxuICBpY29uQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMC4yNSksXG4gICAgZm9udFNpemU6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIGF2YXRhckNvbnRhaW5lcjoge1xuICAgIG1heFdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxuICAgIG1heEhlaWdodDogdGhlbWUuc3BhY2luZyg3KSxcbiAgfSxcbiAgcHJpbWFyeVRleHRDb250YWluZXI6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICBtYXhIZWlnaHQ6IDIyLFxuICB9LFxuICBzZWNvbmRhcnlUZXh0Q29udGFpbmVyOiB7XG4gICAgZm9udFNpemU6IDEyLFxuICAgIG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnLFxuICAgIGxpbmVIZWlnaHQ6ICcxLjVlbScsXG4gICAgaGVpZ2h0OiAnM2VtJyxcbiAgICAvLyBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIC8vIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICB9LFxuICBwcmltYXJ5VGl0bGVDb250YWluZXI6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE2LFxuICB9LFxuXG4gIGxpc3RUaXRsZVRleHQ6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNC41KSxcbiAgfSxcbiAgbGlzdENvbnRhaW5lcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgfSxcbiAgc2VhcmNoQmFyOiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIG1heEhlaWdodDogdGhlbWUuc3BhY2luZyg1KSxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhvbWUpO1xuIiwiaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3MnO1xuaW1wb3J0IEFycm93QmFja0lvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja0lvcyc7XG5pbXBvcnQgeyBTbmFja2JhclByb3ZpZGVyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuLi9TZXR0aW5ncyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBIb21lIGZyb20gJy4uL0hvbWUnO1xuaW1wb3J0IHsgRk9DVVNFRCwgSU5JVF9GT0NVU0VEX1BST0ZJTEUgfSBmcm9tICcuLi8uLi9jb25maWcvc2V0dGluZ3NQcm9maWxlcy5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscy5qcyc7XG5cbmNsYXNzIEhvbWVEaXNwYXRjaGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbFxuICAgICAgLmdldChbJ2Nsb3NlZF9oaXN0b3J5JywgJ2FjdGl2ZV9wcm9maWxlJywgJ3NldHRpbmdzJywgJ2ZvY3VzZWRfd2luZG93X2lkJywgJ2luYWN0aXZlX3BvbGljeSddKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zdCBjbG9zZWRfaGlzdG9yeSA9IHJlc3VsdC5jbG9zZWRfaGlzdG9yeSB8fCBbXTtcbiAgICAgICAgY29uc3QgYWN0aXZlX3Byb2ZpbGUgPSByZXN1bHQuYWN0aXZlX3Byb2ZpbGUgfHwgRk9DVVNFRDtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSByZXN1bHQuc2V0dGluZ3MgfHwgSU5JVF9GT0NVU0VEX1BST0ZJTEU7XG4gICAgICAgIGNvbnN0IGZvY3VzZWRfd2luZG93X2lkID0gcmVzdWx0LmZvY3VzZWRfd2luZG93X2lkIHx8IG51bGw7XG4gICAgICAgIGNvbnN0IGluYWN0aXZlX3BvbGljeSA9IHJlc3VsdC5pbmFjdGl2ZV9wb2xpY3kgfHwgW107XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGl2ZV9wcm9maWxlLFxuICAgICAgICAgIHNldHRpbmdzLFxuICAgICAgICAgIGZvY3VzZWRfd2luZG93X2lkLFxuICAgICAgICAgIGluYWN0aXZlX3BvbGljeSxcbiAgICAgICAgICBjbG9zZWRfaGlzdG9yeTogY2xvc2VkX2hpc3RvcnksXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFwcEJhclZhbHVlOiAnSE9NRScsXG4gICAgICBmaXJzdExvYWQ6IHRydWUsXG4gICAgICBjbG9zZWRfaGlzdG9yeTogW10sXG4gICAgICBhY3RpdmVfcHJvZmlsZTogRk9DVVNFRCxcbiAgICAgIHNldHRpbmdzOiBJTklUX0ZPQ1VTRURfUFJPRklMRSxcbiAgICAgIGZvY3VzZWRfd2luZG93X2lkOiBudWxsLFxuICAgICAgaW5hY3RpdmVfcG9saWN5OiBbXSxcbiAgICB9O1xuICAgIHRoaXMub25DaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2hhbmdlcykge1xuICAgICAgY29uc3Qga2V5cyA9IFsnY2xvc2VkX2hpc3RvcnknLCAnYWN0aXZlX3Byb2ZpbGUnLCAnc2V0dGluZ3MnLCAnZm9jdXNlZF93aW5kb3dfaWQnLCAnaW5hY3RpdmVfcG9saWN5J107XG4gICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoY2hhbmdlc1trZXldKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBba2V5XTogY2hhbmdlc1trZXldWyduZXdWYWx1ZSddLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsb2dnZXIodGhpcywgJ1BvcHVwIG9wZW5lZCcpO1xuICAgIGJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5vbkNoYW5nZWRDYWxsYmFjayk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKG5ld1ZhbHVlKSA9PiAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFwcEJhclZhbHVlOiBuZXdWYWx1ZSwgZmlyc3RMb2FkOiBmYWxzZSB9KTtcbiAgICBsb2dnZXIodGhpcywgJ1N3aXRjaCB0byAnICsgbmV3VmFsdWUpO1xuICB9O1xuXG4gIGRpc3BhdGNoUGFnZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUpIHtcbiAgICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgICByZXR1cm4gPEhvbWUgc2tlbGV0b249e3RoaXMuc3RhdGUuZmlyc3RMb2FkfSBjbG9zZWRfaGlzdG9yeT17dGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeX0gLz47XG4gICAgICBjYXNlICdTRVRUSU5HUyc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFNldHRpbmdzXG4gICAgICAgICAgICBhY3RpdmVfcHJvZmlsZT17dGhpcy5zdGF0ZS5hY3RpdmVfcHJvZmlsZX1cbiAgICAgICAgICAgIHNldHRpbmdzPXt0aGlzLnN0YXRlLnNldHRpbmdzfVxuICAgICAgICAgICAgZm9jdXNlZF93aW5kb3dfaWQ9e3RoaXMuc3RhdGUuZm9jdXNlZF93aW5kb3dfaWR9XG4gICAgICAgICAgICBpbmFjdGl2ZV9wb2xpY3k9e3RoaXMuc3RhdGUuaW5hY3RpdmVfcG9saWN5fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPGRpdj5UaGlzIGlzIGFuIGVycm9yIHBhZ2U8L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheUljb24oKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5hcHBCYXJWYWx1ZSkge1xuICAgICAgY2FzZSAnSE9NRSc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZSgnU0VUVElOR1MnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQ29udGFpbmVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTZXR0aW5nc0ljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdTRVRUSU5HUyc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZSgnSE9NRScpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25Db250YWluZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFycm93QmFja0lvc0ljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPGRpdj5UaGlzIGlzIGFuIGVycm9yIHBhZ2U8L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgYmV0YSA9IEVOViAhPT0gJ3Byb2QnID8gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmJldGF9PmJldGE8L3NwYW4+IDogbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgPFNuYWNrYmFyUHJvdmlkZXJcbiAgICAgICAgbWF4U25hY2s9ezJ9XG4gICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICByb290OiBjbGFzc2VzLm5vdGlmaWNhdGlvbixcbiAgICAgICAgICB2YXJpYW50U3VjY2VzczogY2xhc3Nlcy5zdWNjZXNzLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ob21lQ29udGFpbmVyfT5cbiAgICAgICAgICA8UGFwZXIgc3F1YXJlPXtmYWxzZX0gdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyU2hhZG93fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRMb2dvVGFic30+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3RhYmJ5LnVzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmVuc2VtYmxlbG9nb30gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4uLy4uL2Fzc2V0cy9zdGF0aWMvaWNvbnMvdGFiYnlfMi5wbmcnfSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0Z1bGx9IC8+XG4gICAgICAgICAgICAgICAge2JldGF9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAge3RoaXMuZGlzcGxheUljb24oKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj57dGhpcy5kaXNwYXRjaFBhZ2UoKX08L2Rpdj5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU25hY2tiYXJQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVEaXNwYXRjaGVyO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lRGlzcGF0Y2hlciBmcm9tICcuL0hvbWVEaXNwYXRjaGVyJztcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiL1RhYic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGhvbWVDb250YWluZXI6IHtcbiAgICBtaW5XaWR0aDogNDAwLFxuICB9LFxuICBwYXBlclNoYWRvdzoge1xuICAgIGJveFNoYWRvdzogJzBweCAwcHggMXB4IC0xcHggcmdiYSgwLDAsMCwwLjMpLCAwcHggMHB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpLCAwcHggMHB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjMpJyxcbiAgfSxcbiAgdGFiOiB7XG4gICAgY29sb3I6ICcjMDBiOWFhJyxcbiAgfSxcbiAgbm90aWZpY2F0aW9uOiB7XG4gICAgbGVmdDogMTUwLFxuICB9LFxuICBncmlkTG9nb1RhYnM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgYWxsVGFiczoge1xuICAgIG1heFdpZHRoOiAnNzUlJyxcbiAgfSxcbiAgZW5zZW1ibGVsb2dvOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnbGVmdCcsXG4gIH0sXG4gIGxvZ29BdmF0YXI6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS4yNSksXG4gIH0sXG4gIGxvZ29GdWxsOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyLjI1KSxcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxMiksXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuMjUpLFxuICB9LFxuICBiZXRhOiB7XG4gICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg0NWRlZywjODBlMGE3LCAjMDBiOWFhKScsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLjIpLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygwLjIpLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgbGluZUhlaWdodDogMSxcbiAgICBmb250U2l6ZTogJ3h4LXNtYWxsJyxcbiAgfSxcbiAgaWNvbkNvbnRhaW5lcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxLjUpLFxuICB9LFxuICBzdWNjZXNzOiB7XG4gICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg0NWRlZywjODBlMGE3LCAjMDBiOWFhKScsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShIb21lRGlzcGF0Y2hlcik7XG4iLCJpbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5JztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcbmltcG9ydCBUdW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHVuZSc7XG5pbXBvcnQgSGVscE91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IZWxwT3V0bGluZSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwnO1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgRmFkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWRlJztcbmltcG9ydCB7IGNvcHkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscy5qcyc7XG5cbmltcG9ydCB7IHdpdGhTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgeyBSRUxBWEVELCBGT0NVU0VELCBDVVNUT01JWkVELCBJTklUX0ZPQ1VTRURfUFJPRklMRSB9IGZyb20gJy4uLy4uL2NvbmZpZy9zZXR0aW5nc1Byb2ZpbGVzLmpzJztcbmltcG9ydCB7IGNoZWNrU2V0dGluZ3MsIE9QVElNQUxfTlVNQkVSX1RBQlMsIFBPTElDWSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGlzSW50ZWdlciwgcmVtb3ZlSXRlbSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzJztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuXG5jb25zdCBMaWdodFRvb2x0aXAgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgdG9vbHRpcDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJyxcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygwLjUpLFxuICB9LFxufSkpKFRvb2x0aXApO1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9jdXNlZE1vZGU6IHRoaXMucHJvcHMuYWN0aXZlX3Byb2ZpbGUgPT09IEZPQ1VTRUQsXG4gICAgICByZWxheGVkTW9kZTogdGhpcy5wcm9wcy5hY3RpdmVfcHJvZmlsZSA9PT0gUkVMQVhFRCxcbiAgICAgIGN1c3RvbWl6ZWRCb29sOiB0aGlzLnByb3BzLmFjdGl2ZV9wcm9maWxlID09PSBDVVNUT01JWkVELFxuICAgICAgc2V0dGluZ3M6IHRoaXMucHJvcHMuc2V0dGluZ3MsXG4gICAgICBmb2N1c2VkV2luZG93SWQ6IHRoaXMucHJvcHMuZm9jdXNlZF93aW5kb3dfaWQsXG4gICAgICBpbmFjdGl2ZVBvbGljeTogdGhpcy5wcm9wcy5pbmFjdGl2ZV9wb2xpY3ksXG4gICAgICBvcGVuTW9kYWw6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKCFfLmlzRXF1YWwocHJldlByb3BzLnNldHRpbmdzLCB0aGlzLnByb3BzLnNldHRpbmdzKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNldHRpbmdzOiB0aGlzLnByb3BzLnNldHRpbmdzIH0pO1xuICAgIH1cbiAgICBpZiAocHJldlByb3BzLmFjdGl2ZV9wcm9maWxlICE9PSB0aGlzLnByb3BzLmFjdGl2ZV9wcm9maWxlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE1vZGU6IHRoaXMucHJvcHMuYWN0aXZlX3Byb2ZpbGUgPT09IEZPQ1VTRUQsXG4gICAgICAgIHJlbGF4ZWRNb2RlOiB0aGlzLnByb3BzLmFjdGl2ZV9wcm9maWxlID09PSBSRUxBWEVELFxuICAgICAgICBjdXN0b21pemVkQm9vbDogdGhpcy5wcm9wcy5hY3RpdmVfcHJvZmlsZSA9PT0gQ1VTVE9NSVpFRCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocHJldlByb3BzLmZvY3VzZWRfd2luZG93X2lkICE9PSB0aGlzLnByb3BzLmZvY3VzZWRfd2luZG93X2lkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VzdG9taXplZEJvb2w6IHRoaXMucHJvcHMuYWN0aXZlX3Byb2ZpbGUgPT09IENVU1RPTUlaRUQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFfLmlzRXF1YWwocHJldlByb3BzLmluYWN0aXZlX3BvbGljeSwgdGhpcy5wcm9wcy5pbmFjdGl2ZV9wb2xpY3kpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW5hY3RpdmVQb2xpY3k6IHRoaXMucHJvcHMuaW5hY3RpdmVfcG9saWN5LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQm9vbENoYW5nZShjaGFuZ2VUeXBlKSB7XG4gICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2VUeXBlOiAnU0VUVElOR1NfUFJPRklMRScsXG4gICAgICBwcm9maWxlOiBjaGFuZ2VUeXBlLFxuICAgIH0pO1xuICAgIGlmIChjaGFuZ2VUeXBlID09PSBSRUxBWEVEIHx8IGNoYW5nZVR5cGUgPT09IEZPQ1VTRUQpIHtcbiAgICAgIHRoaXMubm90aWZ5VXNlcih0cnVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuaW5hY3RpdmVQb2xpY3kuaW5jbHVkZXModGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpKSB7XG4gICAgICB0aGlzLmhhbmRsZVN3aXRjaCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNhdmVQYXJhbWV0ZXJzKCkge1xuICAgIC8vIFRPRE8gQWRkIGZ1bmN0aW9uIHRvIGNoZWNrIGZvciBhbGwgcG90ZW50aWFsIHZhbHVlc1xuICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG4gICAgaWYgKGNoZWNrU2V0dGluZ3ModGhpcy5zdGF0ZS5zZXR0aW5ncykpIHtcbiAgICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIG1lc3NhZ2VUeXBlOiAnU0VUVElOR1NfUEFSQU1FVEVSUycsXG4gICAgICAgIHNldHRpbmdzOiB0aGlzLnN0YXRlLnNldHRpbmdzLFxuICAgICAgfSk7XG4gICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5ub3RpZnlVc2VyKHN1Y2Nlc3MpO1xuICB9XG5cbiAgbm90aWZ5VXNlcihzdWNjZXNzKSB7XG4gICAgdGhpcy5wcm9wcy5lbnF1ZXVlU25hY2tiYXIoc3VjY2VzcyA/ICdOZXcgU2V0dGluZ3MgYXJlIHNhdmVkLicgOiAnU2V0dGluZ3MgY2Fubm90IGJlIHNhdmVkLicsIHtcbiAgICAgIHZhcmlhbnQ6IHN1Y2Nlc3MgPyAnc3VjY2VzcycgOiAnZXJyb3InLFxuICAgICAgYW5jaG9yT3JpZ2luOiB7XG4gICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgIH0sXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDc1MCxcbiAgICAgIGF1dG9IaWRlRHVyYXRpb246IDIwMDAsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzKHBhdGgsIHBhcmFtZXRlcikge1xuICAgIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICAgIGxldCBzZXR0aW5ncyA9IGNvcHkodGhpcy5zdGF0ZS5zZXR0aW5ncyk7XG4gICAgICBjb25zdCBuZXh0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICBpZiAoaXNJbnRlZ2VyKG5leHRWYWx1ZSkgfHwgbmV4dFZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBzZXR0aW5nc1twYXRoXVtwYXJhbWV0ZXJdID0gbmV4dFZhbHVlOyAvLyBkbyBub3QgcGFyc2VJbnQgb3IgdGV4dEZpZWxkIGdvZXMgY3JhenkuLi5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNldHRpbmdzOiBzZXR0aW5ncyB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlU3dpdGNoKCkge1xuICAgIGxldCBpbmFjdGl2ZVBvbGljeSA9IHRoaXMuc3RhdGUuaW5hY3RpdmVQb2xpY3k7XG5cbiAgICBpZiAoaW5hY3RpdmVQb2xpY3kuaW5jbHVkZXModGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpKSB7XG4gICAgICBpbmFjdGl2ZVBvbGljeSA9IHJlbW92ZUl0ZW0oaW5hY3RpdmVQb2xpY3ksIHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKTtcbiAgICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIG1lc3NhZ2VUeXBlOiAnUkVNT1ZFX0lOQUNUSVZFX1BPTElDWScsXG4gICAgICAgIHdpbmRvd0lkOiB0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmFjdGl2ZVBvbGljeS5wdXNoKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKTtcbiAgICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIG1lc3NhZ2VUeXBlOiAnQUREX0lOQUNUSVZFX1BPTElDWScsXG4gICAgICAgIHdpbmRvd0lkOiB0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5hY3RpdmVQb2xpY3k6IGluYWN0aXZlUG9saWN5IH0pO1xuICB9XG5cbiAgaGFuZGxlT3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1vZGFsOiB0cnVlIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5Nb2RhbDogZmFsc2UgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlucHV0c1BhcmFtZXRlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnT3B0aW1hbCB0YWJzIG51bWJlcicsXG4gICAgICAgIHNvdXJjZTogdGhpcy5zdGF0ZS5zZXR0aW5ncyxcbiAgICAgICAgcGF0aDogUE9MSUNZLFxuICAgICAgICBwYXJhbWV0ZXI6IE9QVElNQUxfTlVNQkVSX1RBQlMsXG4gICAgICAgIGlucHV0UHJvcHM6IHsgbWluOiAnMScsIG1heDogJzEwMCcsIHN0ZXA6ICcxJyB9LFxuICAgICAgfSxcbiAgICBdO1xuICAgIGNvbnN0IGxpc3RJdGVtc1BhcmFtZXRlcnMgPSBpbnB1dHNQYXJhbWV0ZXJzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sfVxuICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlUGFyYW1ldGVycyhpdGVtLnBhdGgsIGl0ZW0ucGFyYW1ldGVyKS5iaW5kKHRoaXMpfVxuICAgICAgICB2YWx1ZT17aXRlbS5zb3VyY2VbaXRlbS5wYXRoXVtpdGVtLnBhcmFtZXRlcl19XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICBvbktleVVwPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpIHRoaXMuaGFuZGxlU2F2ZVBhcmFtZXRlcnMoKTtcbiAgICAgICAgfX1cbiAgICAgICAgaW5wdXRQcm9wcz17aXRlbS5pbnB1dFByb3BzfVxuICAgICAgLz5cbiAgICApKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkJsb2NrfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkICYmIHRoaXMuc3RhdGUuaW5hY3RpdmVQb2xpY3lcbiAgICAgICAgICAgICAgICAgICAgPyAhdGhpcy5zdGF0ZS5pbmFjdGl2ZVBvbGljeS5pbmNsdWRlcyh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZClcbiAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN3aXRjaC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3dpdGNoV3JhcHBlcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zd2l0Y2hDb250YWluZXJ9XG4gICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkVuYWJsZSBvbiB0aGlzIHdpbmRvdzwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnRyb2R1Y3Rpb25CbG9ja30+XG4gICAgICAgICAgICA8VHVuZUljb24gLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhbWV0ZXJzVGl0bGV9PlNlbGVjdCB5b3VyIHByb2ZpbGU8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXR0aW5nc1dyYXBwZXJ9PlxuICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT17J3RhYmJ5IHRlbmRzIHRvIGtlZXAgNSB0YWJzJ30gcGxhY2VtZW50PVwibGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdFByb2ZpbGVzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZm9jdXNlZE1vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQm9vbENoYW5nZS5iaW5kKHRoaXMsIEZPQ1VTRUQpfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tib3hXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5Gb2N1czwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCb29sZWFuc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxIZWxwT3V0bGluZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmhlbHBJY29ufSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxuICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT17J3RhYmJ5IHRlbmRzIHRvIGtlZXAgMTIgdGFicyd9IHBsYWNlbWVudD1cImxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RQcm9maWxlc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnJlbGF4ZWRNb2RlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUJvb2xDaGFuZ2UuYmluZCh0aGlzLCBSRUxBWEVEKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrYm94V3JhcHBlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+UmVsYXg8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0Qm9vbGVhbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SGVscE91dGxpbmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWxwSWNvbn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9taXplV3JhcHBlcn0+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQm9vbENoYW5nZS5iaW5kKHRoaXMsIENVU1RPTUlaRUQpfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveFdyYXBwZXJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkN1c3RvbWl6ZTwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0Qm9vbGVhbnN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNldHRpbmdzQmxvY2t9PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcmVxdWlyZWQgZnVsbFdpZHRoPlxuICAgICAgICAgICAgICAgIHtsaXN0SXRlbXNQYXJhbWV0ZXJzfVxuICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpZGRlbiBrZXk9XCJoaWRkZW4tdGV4dGZpZWxkXCIgZGlzYWJsZWQgLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1c3RvbWl6ZWRCb29sfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZGFyeUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNhdmVQYXJhbWV0ZXJzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT3Blbi5iaW5kKHRoaXMpfSBjbGFzc05hbWU9e2NsYXNzZXMudGlwc0J1dHRvbn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxUaXBzfT5IZWxwPC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICAvL2Rpc2FibGVQb3J0YWw9e3RydWV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbk1vZGFsfVxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzKX1cbiAgICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxuICAgICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cbiAgICAgICAgICBCYWNrZHJvcFByb3BzPXt7XG4gICAgICAgICAgICB0aW1lb3V0OiA3NTAsXG4gICAgICAgICAgICBpbnZpc2libGU6IHRydWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGYWRlIGluPXt0aGlzLnN0YXRlLm9wZW5Nb2RhbH0+XG4gICAgICAgICAgICA8Qm94IGJvcmRlclJhZGl1cz17Nn0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RCbG9ja01vZGFsfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRFbnNlbWJsZX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+UHJvdGVjdCBhIHRhYjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxhc3RFbnNlbWJsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi4vLi4vYXNzZXRzL3N0YXRpYy9pY29ucy9yaWdodF9jbGljay5wbmcnfSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdENsaWNrV3JhcHBlcn0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+KzwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlBpbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZEVuc2VtYmxlfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5SZW9wZW4gbXVsdGlwbGUgdGFiczwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kRW5zZW1ibGV9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+Q3RybDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+KzwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycuLi8uLi9hc3NldHMvc3RhdGljL2ljb25zL2xlZnRfY2xpY2sucG5nJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnRDbGlja1dyYXBwZXJ9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5Ib3cgZG9lcyB0YWJieSB3b3JrPzwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbE5leHR9PlxuICAgICAgICAgICAgICAgIHRhYmJ5IHdpbGwgbm90IHJlbW92ZSB0YWJzIHJpZ2h0IGFmdGVyIHRoZWlyIGNyZWF0aW9uLnsnICd9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbE5leHR9PlxuICAgICAgICAgICAgICAgIHRhYmJ5IHRha2VzIHdlbGwtdGhvdWdodC1vdXQgZGVjaXNpb25zIGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJNb2RhbH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdGFiYnkudXMvZmFxXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbFRpcHN9PkZBUSBhdmFpbGFibGUgaGVyZTwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbFRpcHN9PlxuICAgICAgICAgICAgICAgICAgdGFiYnkge2Jyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb259XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PnsnICd9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU25hY2tiYXIoU2V0dGluZ3MpO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL1NldHRpbmdzJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBzZXR0aW5nc1dyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICBtYXJnaW5Ub3A6IDUsXG4gICAgbWFyZ2luTGVmdDogNDcsXG4gICAgbWFyZ2luUmlnaHQ6IDIwLFxuICB9LFxuICBzZWNvbmRhcnlCdXR0b246IHtcbiAgICBtYXJnaW5Ub3A6IDE4LFxuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBmb250U2l6ZTogMTIsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG5cbiAgICBtYXhXaWR0aDogMjAsXG4gIH0sXG5cbiAgbm90aWZpY2F0aW9uOiB7XG4gICAgbWF4V2lkdGg6IDE1MCxcbiAgfSxcbiAgaW50cm9kdWN0aW9uQmxvY2s6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgbWFyZ2luTGVmdDogNyxcbiAgfSxcbiAgcGFyYW1ldGVyc1RpdGxlOiB7XG4gICAgLy9mb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE3LFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICAgIG1hcmdpbkxlZnQ6IDE2LFxuICB9LFxuICBzZXR0aW5nc0Jsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWFyZ2luTGVmdDogMzIsXG4gICAgbWFyZ2luVG9wOiA0LFxuICB9LFxuICBmaXJzdEJvb2xlYW5zOiB7XG4gICAgbWF4V2lkdGg6ICczNiUnLFxuICAgIG1pbldpZHRoOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIG1heEhlaWdodDogMjAsXG4gICAgbWFyZ2luVG9wOiA1LFxuICAgIC8vIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgfSxcbiAgZmlyc3RQcm9maWxlc0NvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3N0YXJ0JyxcbiAgICBtYXhXaWR0aDogdGhlbWUuc3BhY2luZygxMCksXG4gIH0sXG5cbiAgc3R5bGVMYWJlbDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgfSxcbiAgY2hlY2tib3hXcmFwcGVyOiB7XG4gICAgcG9pbnRlckV2ZW50czogJ2F1dG8nLFxuICB9LFxuICBzd2l0Y2hDb250YWluZXI6IHtcbiAgICBtYXhIZWlnaHQ6IDIwLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICB9LFxuICBzd2l0Y2hXcmFwcGVyOiB7XG4gICAgcG9pbnRlckV2ZW50czogJ2F1dG8nLFxuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICBtYXhXaWR0aDogJzg1JScsXG4gIH0sXG4gIGN1c3RvbWl6ZVdyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgYWxpZ25JdGVtczogJ3N0YXJ0JyxcbiAgfSxcbiAgaGVscEljb246IHtcbiAgICBjb2xvcjogJyNlNTVjMDAnLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMC4yNSksXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcbiAgfSxcbiAgbW9kYWw6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxNTAsIDE1MCwgMTUwLCAwLjQpJyxcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxuICB9LFxuICBtYWluQmxvY2s6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgLy9ib3JkZXI6ICcwLjVweCBzb2xpZCAjNUE1QTVBJyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXG5cbiAgICBvcGFjaXR5OiAnMSAhaW1wb3J0YW50JyxcbiAgfSxcbiAgYm94Q3RybDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNUE1QTVBJyxcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMi41KSxcbiAgICAvL3BhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXG4gICAgLy9tYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIC8vbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXG5cbiAgICBvcGFjaXR5OiAnMSAhaW1wb3J0YW50JyxcbiAgfSxcbiAgbGVmdENsaWNrV3JhcHBlcjoge1xuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZygzKSxcbiAgfSxcbiAgc2Vjb25kRW5zZW1ibGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtaW5XaWR0aDogJzMwJScsXG4gIH0sXG4gIGxhc3RFbnNlbWJsZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1pbldpZHRoOiAnMjcuNSUnLFxuICB9LFxuICBmaXJzdEJsb2NrTW9kYWw6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIHRpcHNCdXR0b246IHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDApLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuc3BhY2luZygyKSxcbiAgICBwYWRkaW5nTGVmdDogMCxcbiAgICBwYWRkaW5nUmlnaHQ6IDAsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtYXJnaW5SaWdodDogMCxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIHN0eWxlTGFiZWxUaXBzOiB7XG4gICAgZm9udFNpemU6IDE0LFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICAgIGNvbG9yOiAncmdiYSgxNTAsIDE1MCwgMTUwLCAxKScsXG4gIH0sXG4gIHN0eWxlTGFiZWxOZXh0OiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gIH0sXG4gIGZvb3Rlck1vZGFsOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuNSksXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgLy8gbWluV2lkdGg6ICcxMDAlJyxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFNldHRpbmdzKTtcbiIsImV4cG9ydCBjb25zdCBPUFRJTUFMX05VTUJFUl9UQUJTID0gJ3RhcmdldF90YWJzJztcbmV4cG9ydCBjb25zdCBQT0xJQ1kgPSAncG9saWN5JztcbmV4cG9ydCBjb25zdCBJTkFDVElWRV9QT0xJQ1kgPSAnaW5hY3RpdmVfcG9saWN5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgaWYgKHNldHRpbmdzW1BPTElDWV1bT1BUSU1BTF9OVU1CRVJfVEFCU10gJiYgc2V0dGluZ3NbUE9MSUNZXVtPUFRJTUFMX05VTUJFUl9UQUJTXSA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyFib290c3RyYXAtY3NzLW9ubHkvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcmQtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMSk7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFiOWU3NDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxufVxcblxcbi5ib2xkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuOmZvY3VzIHtvdXRsaW5lOjAgIWltcG9ydGFudDt9XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJ0ay1jaHJvbWU6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKGV2ZW50KSA9PiB7XG5cdFx0b25TY3JpcHRDb21wbGV0ZSA9ICgpID0+IHtcblxuXHRcdH1cblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gZm4oZXZlbnQpKTtcblx0fVxuXHQ7XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSlcblx0fSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwb3B1cFwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9hcHAvcG9wdXAuanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3BzbF9pbmRleF9qcy1ub2RlX21vZHVsZXNfd2ViZXh0ZW5zaW9uLXBvbHlmaWxsX2Rpc3RfYnJvd3Nlci1wb2x5ZmlsbF9qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbWF0ZXJpYWwtdWlfY29yZV9UeXBvZ3JhcGh5X1R5cG9ncmFwaHlfanMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfLWMwNjM2MlwiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfZGF5anNfZGF5anNfbWluX2pzLW5vZGVfbW9kdWxlc19sb2Rhc2hfbG9kYXNoX2pzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19tYXRlcmlhbC11aV9jb3JlX2VzbV9BdmF0YXJfQXZhdGFyX2pzLW5vZGVfbW9kdWxlc19tYXRlcmlhbC11aV9jb3JlX2VzbV8tYmE5ZDc2XCIsXCJzcmNfY29uZmlnX3NldHRpbmdzUHJvZmlsZXNfanMtc3JjX2NvbmZpZ193ZWJzaXRlc19qcy1zcmNfc2VydmljZXNfdXRpbHNfanNcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSAoKSA9PiB7XG5cbn07XG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIHJlc2V0IHN0YXJ0dXAgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIG1vcmUgc3RhcnR1cCBjb2RlIGlzIGFkZGVkXG5cdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHR9XG5cdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuXHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuXHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXHR2YXIgcnVudGltZSA9IGRhdGFbM107XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuXHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcblx0fVxuXG5cdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3Rcblx0aWYoZXhlY3V0ZU1vZHVsZXMpIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuXG5cdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbn07XG5cbnZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wdGtfY2hyb21lXCJdID0gd2luZG93W1wid2VicGFja0pzb25wdGtfY2hyb21lXCJdIHx8IFtdO1xudmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbmpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xudmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uOyIsIi8vIHJ1biBzdGFydHVwXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9