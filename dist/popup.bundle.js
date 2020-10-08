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
          key: index,
          style: style
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__.default, {
          ContainerComponent: "div"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__.default, {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__.default, {
        ContainerComponent: "div"
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
      }), this.state.loading && FULL_SKELETON ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_16__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: classes.buttonContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__.default, {
        size: "small",
        onClick: this.removeItem.bind(this, myFilteredList, index),
        variant: "outlined",
        color: "secondary",
        disabled: website.no_restore,
        className: classes.button
      }, 'Restore')))));
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: classes.list
    }, selectedList.length === 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_window__WEBPACK_IMPORTED_MODULE_7__.FixedSizeList, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzcz9lYTVkIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiQXBwIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUkVTVE9SRSIsIlNIRUxMX1JFU1RPUkUiLCJOVU1CRVJfSE9VUlNfREFZIiwiVElNRV9QRVJJT0RfMjRIIiwiVElNRV9QRVJJT0RfNzJIIiwiRlVMTF9TS0VMRVRPTiIsIkRJU1BMQVlfU1RBVFVTRVMiLCJIb21lIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzZXRBbGxSZWFkQmFkZ2UiLCJza2VsZXRvbiIsInN0YXRlIiwiY2xvc2VkX2hpc3RvcnkiLCJlbnJpY2hIaXN0b3J5IiwibG9hZGluZyIsInRpbWVvdXQiLCJGUk9OVEVORF9TS0VMRVRPTl9ESVNQTEFZIiwidGhlbiIsImxvZ2dlciIsInNldFN0YXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJfIiwicmVtb3ZlSXRlbSIsImxpc3RJdGVtcyIsImtleSIsImUiLCJjdHJsS2V5IiwibWV0YUtleSIsInJlc3RvcmVUYWIiLCJpdGVtcyIsIm1lc3NhZ2VUeXBlIiwicmVzdG9yZWRUYWIiLCJ1dWlkIiwiZmlsdGVyIiwiaXRlbSIsImJyb3dzZXIiLCJzZWFyY2hPbkNoYW5nZSIsInZhbHVlIiwic2VhcmNoVmFsdWUiLCJzZWFyY2hPblJlcXVlc3RTZWFyY2giLCJldmVudCIsInNlYXJjaE9uQ2FuY2VsIiwiZmlsdGVyTGlzdCIsInNlbGVjdGVkTGlzdCIsImVuZFBlcmlvZCIsIm5vdyIsIkRhdGUiLCJkZWxldGlvbl90aW1lIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJjb2ZmZWVUaW1lIiwid2luZG93Iiwib3BlbiIsImhpc3RvcnkiLCJyeCIsIlJlZ0V4cCIsIk5PX1JFU1RPUkVfVVJMIiwibWFwIiwid2Vic2l0ZSIsImRlbGV0aW9uVGltZSIsImhvdXJzX21pbnV0ZXNfZm9ybWF0IiwiZGF5anMiLCJmb3JtYXQiLCJkYXRlIiwic3RhcnRPZiIsIm5vX3Jlc3RvcmUiLCJleGVjIiwidXJsIiwicmV2ZXJzZSIsInJlbmRlckxpc3QiLCJjbGFzc2VzIiwic2xpY2UiLCJsZW5ndGgiLCJzZWFyY2hQYXR0ZXJuIiwic3BsaXQiLCJ0ZXJtIiwiam9pbiIsIm9wdGlvbiIsInRpdGxlIiwibWF0Y2giLCJjdXJyZW50IiwibGFzdCIsImkiLCJuZXh0IiwiZGVsdGEiLCJNYXRoIiwibWF4IiwiY2VpbCIsImRpZmYiLCJzcGxpY2UiLCJ0ZXh0IiwiZGF5IiwibGlzdEl0ZW0iLCJteUZpbHRlcmVkTGlzdCIsImluZGV4Iiwic3R5bGUiLCJwcmltYXJ5IiwicHJpbWFyeVRpdGxlQ29udGFpbmVyIiwibGlzdFRpdGxlVGV4dCIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsImF2YXRhckNvbnRhaW5lciIsInByaW1hcnlUZXh0Q29udGFpbmVyIiwic2Vjb25kYXJ5VGV4dENvbnRhaW5lciIsIml0ZW1UZXh0IiwiYnV0dG9uQ29udGFpbmVyIiwiYmluZCIsImJ1dHRvbiIsImxpc3RXZWJzaXRlcyIsInNlYXJjaEJhciIsImxpc3QiLCJtaW4iLCJyZW5kZXIiLCJudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIiLCJib2xkTnVtYmVyIiwidGV4dE9uUmlnaHQiLCJ0b3BUZXh0IiwibWlkZGxlVGV4dCIsImZvb3RlckNvbnRhaW5lciIsImljb25Db250YWluZXIiLCJmb290ZXJSaWdodCIsImxpbmtUb0Zvcm0iLCJ3aXRoU25hY2tiYXIiLCJzdHlsZXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1heEhlaWdodCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwiZ3JlZW5UaXRsZSIsImZvbnRTaXplIiwiYm9yZGVyQm90dG9tIiwibWF4V2lkdGgiLCJsaXN0VGl0bGUiLCJjb2xvciIsInN1YlRleHQiLCJtYXJnaW5Ub3AiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsIm92ZXJmbG93V3JhcCIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsIm1pbldpZHRoIiwibWFyZ2luUmlnaHQiLCJsaXN0Q29udGFpbmVyIiwibWFyZ2luQm90dG9tIiwid2l0aFN0eWxlcyIsIkhvbWVEaXNwYXRjaGVyIiwibmV3VmFsdWUiLCJhcHBCYXJWYWx1ZSIsImZpcnN0TG9hZCIsInJlc3VsdCIsImFjdGl2ZV9wcm9maWxlIiwiRk9DVVNFRCIsInNldHRpbmdzIiwiSU5JVF9GT0NVU0VEX1BST0ZJTEUiLCJmb2N1c2VkX3dpbmRvd19pZCIsImluYWN0aXZlX3BvbGljeSIsIm9uQ2hhbmdlZENhbGxiYWNrIiwiY2hhbmdlcyIsImtleXMiLCJmb3JFYWNoIiwiY29tcG9uZW50RGlkTW91bnQiLCJkaXNwYXRjaFBhZ2UiLCJkaXNwbGF5SWNvbiIsImhhbmRsZUNoYW5nZSIsImJldGEiLCJFTlYiLCJyb290Iiwibm90aWZpY2F0aW9uIiwidmFyaWFudFN1Y2Nlc3MiLCJzdWNjZXNzIiwiaG9tZUNvbnRhaW5lciIsInBhcGVyU2hhZG93IiwiZ3JpZExvZ29UYWJzIiwiZW5zZW1ibGVsb2dvIiwidGV4dERlY29yYXRpb24iLCJsb2dvRnVsbCIsImJveFNoYWRvdyIsInRhYiIsImxlZnQiLCJhbGxUYWJzIiwibG9nb0F2YXRhciIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJsaW5lSGVpZ2h0IiwiTGlnaHRUb29sdGlwIiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbW1vbiIsIndoaXRlIiwic2hhZG93cyIsIlRvb2x0aXAiLCJTZXR0aW5ncyIsImZvY3VzZWRNb2RlIiwicmVsYXhlZE1vZGUiLCJSRUxBWEVEIiwiY3VzdG9taXplZEJvb2wiLCJDVVNUT01JWkVEIiwiZm9jdXNlZFdpbmRvd0lkIiwiaW5hY3RpdmVQb2xpY3kiLCJvcGVuTW9kYWwiLCJoYW5kbGVCb29sQ2hhbmdlIiwiY2hhbmdlVHlwZSIsInByb2ZpbGUiLCJub3RpZnlVc2VyIiwiaGFuZGxlU3dpdGNoIiwiaGFuZGxlU2F2ZVBhcmFtZXRlcnMiLCJjaGVja1NldHRpbmdzIiwiZW5xdWV1ZVNuYWNrYmFyIiwidmFyaWFudCIsImFuY2hvck9yaWdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImF1dG9IaWRlRHVyYXRpb24iLCJoYW5kbGVDaGFuZ2VQYXJhbWV0ZXJzIiwicGF0aCIsInBhcmFtZXRlciIsImNvcHkiLCJuZXh0VmFsdWUiLCJ0YXJnZXQiLCJpc0ludGVnZXIiLCJ3aW5kb3dJZCIsInB1c2giLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJpbnB1dHNQYXJhbWV0ZXJzIiwibGFiZWwiLCJzb3VyY2UiLCJQT0xJQ1kiLCJPUFRJTUFMX05VTUJFUl9UQUJTIiwiaW5wdXRQcm9wcyIsInN0ZXAiLCJsaXN0SXRlbXNQYXJhbWV0ZXJzIiwidGV4dEZpZWxkIiwibWFpbkJsb2NrIiwic3dpdGNoV3JhcHBlciIsInN3aXRjaENvbnRhaW5lciIsInN0eWxlTGFiZWwiLCJpbnRyb2R1Y3Rpb25CbG9jayIsInBhcmFtZXRlcnNUaXRsZSIsInNldHRpbmdzV3JhcHBlciIsImZpcnN0UHJvZmlsZXNDb250YWluZXIiLCJjaGVja2JveFdyYXBwZXIiLCJmaXJzdEJvb2xlYW5zIiwiaGVscEljb24iLCJjdXN0b21pemVXcmFwcGVyIiwic2V0dGluZ3NCbG9jayIsInNlY29uZGFyeUJ1dHRvbiIsInRpcHNCdXR0b24iLCJzdHlsZUxhYmVsVGlwcyIsIm1vZGFsIiwiQmFja2Ryb3AiLCJpbnZpc2libGUiLCJwYXBlciIsImZpcnN0QmxvY2tNb2RhbCIsInNlY29uZEVuc2VtYmxlIiwibGFzdEVuc2VtYmxlIiwibGVmdENsaWNrV3JhcHBlciIsInN0eWxlTGFiZWxOZXh0IiwiZm9vdGVyTW9kYWwiLCJ2ZXJzaW9uIiwicG9pbnRlckV2ZW50cyIsIm1pbkhlaWdodCIsInpJbmRleCIsImRyYXdlciIsIm9wYWNpdHkiLCJib3hDdHJsIiwiYm9yZGVyIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJJTkFDVElWRV9QT0xJQ1kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEtBQUssR0FBR0MsaUVBQWMsQ0FBQztBQUMzQkMsWUFBVSxFQUFFO0FBQ1ZDLGNBQVUsRUFBRTtBQURGLEdBRGU7QUFJM0JDLFNBQU8sRUFBRTtBQUNQQyxhQUFTLEVBQUU7QUFDVEMsVUFBSSxFQUFFO0FBREc7QUFESjtBQUprQixDQUFELENBQTVCOztBQVdBLFNBQVNDLEdBQVQsR0FBZTtBQUNiLHNCQUNFLDJEQUFDLDZEQUFEO0FBQWtCLFNBQUssRUFBRVA7QUFBekIsa0JBQ0UsMkRBQUMsK0RBQUQsT0FERixFQUNxQixHQURyQixDQURGO0FBS0Q7O0FBRURRLHVEQUFBLGVBQWdCLDJEQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSx1QkFBdUI7V0FDdEM7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSwyQzs7OztVQzVGQTtVQUNBIiwiZmlsZSI6InBvcHVwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWVEaXNwYXRjaGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXInO1xuaW1wb3J0IHsgTXVpVGhlbWVQcm92aWRlciwgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICB9LFxuICBwYWxldHRlOiB7XG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzAwYjlhYScsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxIb21lRGlzcGF0Y2hlciAvPnsnICd9XG4gICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICApO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBGUk9OVEVORF9TS0VMRVRPTl9ESVNQTEFZIH0gZnJvbSAnLi4vLi4vY29uZmlnL2Vudi5qcyc7XG5pbXBvcnQgeyBOT19SRVNUT1JFX1VSTCB9IGZyb20gJy4uLy4uL2NvbmZpZy93ZWJzaXRlcy5qcyc7XG5pbXBvcnQgeyBsb2dnZXIsIHRpbWVvdXQsIHNldEFsbFJlYWRCYWRnZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLmpzJztcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgRXJyb3JPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3JPdXRsaW5lJztcbmltcG9ydCBGYXZvcml0ZUJvcmRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlQm9yZGVyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IHsgd2l0aFNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCB7IEZpeGVkU2l6ZUxpc3QgYXMgTGlzdCB9IGZyb20gJ3JlYWN0LXdpbmRvdyc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ21hdGVyaWFsLXVpLXNlYXJjaC1iYXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgUkVTVE9SRSA9ICdSRVNUT1JFJztcbmNvbnN0IFNIRUxMX1JFU1RPUkUgPSAnU0hFTExfUkVTVE9SRSc7XG5jb25zdCBOVU1CRVJfSE9VUlNfREFZID0gMjQ7XG5jb25zdCBUSU1FX1BFUklPRF8yNEggPSAzNjAwMDAwICogTlVNQkVSX0hPVVJTX0RBWTsgLy8gaW4gbWljcm9zZWNvbmRcbmNvbnN0IFRJTUVfUEVSSU9EXzcySCA9IDM2MDAwMDAgKiBOVU1CRVJfSE9VUlNfREFZICogMzsgLy8gaW4gbWljcm9zZWNvbmRcbmNvbnN0IEZVTExfU0tFTEVUT04gPSBmYWxzZTtcbmNvbnN0IERJU1BMQVlfU1RBVFVTRVMgPSBbJ2tpbGxlZCddO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHNldEFsbFJlYWRCYWRnZSgpO1xuXG4gICAgaWYgKHByb3BzLnNrZWxldG9uKSB7XG4gICAgICB0aGlzLnN0YXRlID0geyBjbG9zZWRfaGlzdG9yeTogdGhpcy5lbnJpY2hIaXN0b3J5KHByb3BzLmNsb3NlZF9oaXN0b3J5KSwgbG9hZGluZzogdHJ1ZSB9O1xuICAgICAgdGltZW91dChGUk9OVEVORF9TS0VMRVRPTl9ESVNQTEFZKS50aGVuKCgpID0+IHtcbiAgICAgICAgbG9nZ2VyKHRoaXMsICdEaXNwbGF5aW5nIGxpc3QnKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IGNsb3NlZF9oaXN0b3J5OiB0aGlzLmVucmljaEhpc3RvcnkocHJvcHMuY2xvc2VkX2hpc3RvcnkpLCBsb2FkaW5nOiBmYWxzZSB9O1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHNldEFsbFJlYWRCYWRnZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghXy5pc0VxdWFsKHByZXZQcm9wcy5jbG9zZWRfaGlzdG9yeSwgdGhpcy5wcm9wcy5jbG9zZWRfaGlzdG9yeSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZWRfaGlzdG9yeTogdGhpcy5lbnJpY2hIaXN0b3J5KHRoaXMucHJvcHMuY2xvc2VkX2hpc3RvcnkpIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUl0ZW0obGlzdEl0ZW1zLCBrZXksIGUpIHtcbiAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgLy8gbWV0YUtleSBpcyBjbWQga2V5IG9uIG1hY1xuICAgICAgdGhpcy5yZXN0b3JlVGFiKGxpc3RJdGVtcywga2V5LCBTSEVMTF9SRVNUT1JFKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXN0b3JlVGFiKGxpc3RJdGVtcywga2V5LCBSRVNUT1JFKTtcbiAgICB9XG4gIH1cblxuICByZXN0b3JlVGFiKGl0ZW1zLCBrZXksIG1lc3NhZ2VUeXBlKSB7XG4gICAgY29uc3QgcmVzdG9yZWRUYWIgPSBpdGVtc1trZXldO1xuICAgIGxvZ2dlcih0aGlzLCBtZXNzYWdlVHlwZSArICcgZm9yIHRhYiAnICsgcmVzdG9yZWRUYWIudXVpZCk7XG4gICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS51dWlkICE9PSByZXN0b3JlZFRhYi51dWlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VkX2hpc3Rvcnk6IGNsb3NlZF9oaXN0b3J5IH0pOyAvLyBubyBuZWVkIHRvIGVucmljaCBoZXJlXG4gICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlVHlwZSxcbiAgICAgIHV1aWQ6IHJlc3RvcmVkVGFiLnV1aWQsXG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2hPbkNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogdmFsdWUgfSk7XG4gIH1cblxuICBzZWFyY2hPblJlcXVlc3RTZWFyY2goZXZlbnQpIHt9XG5cbiAgc2VhcmNoT25DYW5jZWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiAnJyB9KTtcbiAgfVxuXG4gIGZpbHRlckxpc3Qoc2VsZWN0ZWRMaXN0LCBlbmRQZXJpb2QpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZWxlY3RlZExpc3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gbm93IC0gaXRlbS5kZWxldGlvbl90aW1lIDwgZW5kUGVyaW9kICYmIERJU1BMQVlfU1RBVFVTRVMuaW5jbHVkZXMoaXRlbS5zdGF0dXMpO1xuICAgIH0pO1xuICB9XG5cbiAgY29mZmVlVGltZSgpIHtcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9idXltZWFjb2ZmLmVlL3RhYmJ5dGFicycsICdfYmxhbmsnKTtcbiAgfVxuXG4gIGVucmljaEhpc3RvcnkoaGlzdG9yeSkge1xuICAgIC8vIGtlZXAgZWxlbWVudHMgb25seSBpbiB0aW1lLWZyYW1lXG4gICAgbGV0IHNlbGVjdGVkTGlzdCA9IGhpc3RvcnkgPyB0aGlzLmZpbHRlckxpc3QoaGlzdG9yeSwgVElNRV9QRVJJT0RfNzJIKSA6IFtdO1xuICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cChOT19SRVNUT1JFX1VSTC5qb2luKCd8JykpO1xuICAgIC8vIGxpc3QgZW5yaWNobWVudFxuICAgIHNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdC5tYXAoKHdlYnNpdGUpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygd2Vic2l0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3QgZGVsZXRpb25UaW1lID0gbmV3IERhdGUod2Vic2l0ZS5kZWxldGlvbl90aW1lKTtcbiAgICAgICAgd2Vic2l0ZS5ob3Vyc19taW51dGVzX2Zvcm1hdCA9IGRheWpzKGRlbGV0aW9uVGltZSkuZm9ybWF0KCdISDptbScpO1xuICAgICAgICB3ZWJzaXRlLmRhdGUgPSBkYXlqcyhkZWxldGlvblRpbWUpLnN0YXJ0T2YoJ2RhdGUnKTtcbiAgICAgICAgd2Vic2l0ZS5ub19yZXN0b3JlID0gcnguZXhlYyh3ZWJzaXRlLnVybCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gd2Vic2l0ZTtcbiAgICB9KTtcblxuICAgIHNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdC5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIHNlbGVjdGVkTGlzdDtcbiAgfVxuXG4gIHJlbmRlckxpc3QoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHNlbGVjdGVkTGlzdCA9IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3Rvcnkuc2xpY2UoMCk7XG4gICAgLy8ga2VlcGluZyBvbmx5IHdlYnNpdGVzIHRoYXQgbWF0Y2ggc2VhcmNoIGNyaXRlcmlhXG4gICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNlYXJjaFBhdHRlcm4gPSBuZXcgUmVnRXhwKFxuICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaFZhbHVlXG4gICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAubWFwKCh0ZXJtKSA9PiBgKD89Lioke3Rlcm19KWApXG4gICAgICAgICAgLmpvaW4oJycpLFxuICAgICAgICAnaSdcbiAgICAgICk7XG4gICAgICBzZWxlY3RlZExpc3QgPSBzZWxlY3RlZExpc3QuZmlsdGVyKFxuICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24udGl0bGUubWF0Y2goc2VhcmNoUGF0dGVybikgfHwgb3B0aW9uLnVybC5tYXRjaChzZWFyY2hQYXR0ZXJuKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudCA9IGRheWpzKCkuc3RhcnRPZignZGF0ZScpO1xuICAgIGxldCBsYXN0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5leHQgPSBzZWxlY3RlZExpc3RbaV0uZGF0ZTtcbiAgICAgIGxldCBkZWx0YSA9IE1hdGgubWF4KDAsIE1hdGguY2VpbChjdXJyZW50LmRpZmYobmV4dCwgJ2RheXMnLCB0cnVlKSkpO1xuICAgICAgaWYgKGRlbHRhID4gbGFzdCkge1xuICAgICAgICBpZiAoZGVsdGEgPT09IDEpIHtcbiAgICAgICAgICBzZWxlY3RlZExpc3Quc3BsaWNlKGksIDAsIHsgdGV4dDogJ1llc3RlcmRheSAtICcsIGRheTogbmV4dC5mb3JtYXQoJ01NTSBERCcpIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGRlbHRhID09PSAyKSB7XG4gICAgICAgICAgc2VsZWN0ZWRMaXN0LnNwbGljZShpLCAwLCB7IHRleHQ6ICdQcmV2aW91cyBkYXkgLSAnLCBkYXk6IG5leHQuZm9ybWF0KCdNTU0gREQnKSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZExpc3Quc3BsaWNlKGksIDAsIHsgdGV4dDogJycsIGRheTogbmV4dC5mb3JtYXQoJ01NTSBERCcpIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxhc3QgPSBkZWx0YTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsaXN0SXRlbSA9IChteUZpbHRlcmVkTGlzdCkgPT4gKHsgaW5kZXgsIHN0eWxlIH0pID0+IHtcbiAgICAgIGNvbnN0IHdlYnNpdGUgPSBteUZpbHRlcmVkTGlzdFtpbmRleF07XG4gICAgICBpZiAodHlwZW9mIHdlYnNpdGUuZGF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxMaXN0SXRlbSBDb250YWluZXJDb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgIHByaW1hcnk9e2Ake3dlYnNpdGUudGV4dH0gJHt3ZWJzaXRlLmRheX1gfVxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk6IGNsYXNzZXMucHJpbWFyeVRpdGxlQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RUaXRsZVRleHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgIDxMaXN0SXRlbSBDb250YWluZXJDb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRBdmF0YXJXaXRoVGltZX0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aW1lRGlzcGxheX0+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiBGVUxMX1NLRUxFVE9OID8gPFNrZWxldG9uIHdpZHRoPVwiM2VtXCIgLz4gOiBgJHt3ZWJzaXRlLmhvdXJzX21pbnV0ZXNfZm9ybWF0fWB9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICA8U2tlbGV0b24gdmFyaWFudD1cImNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIC8+XG4gICAgICAgICAgICAgICAgICA8L1NrZWxldG9uPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzcXVhcmVcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3dlYnNpdGUudGl0bGUgPyB3ZWJzaXRlLnRpdGxlIDogd2Vic2l0ZS51cmx9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17d2Vic2l0ZS5mYXZJY29uVXJsID8gd2Vic2l0ZS5mYXZJY29uVXJsIDogJ2Vycm9yJ31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhckNvbnRhaW5lcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiBGVUxMX1NLRUxFVE9OID8gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB3aWR0aD1cIjE1ZW1cIiAvPlxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB3aWR0aD1cIjEwZW1cIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXt3ZWJzaXRlLnVybH1cbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e3dlYnNpdGUudGl0bGV9XG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgICAgcHJpbWFyeTogY2xhc3Nlcy5wcmltYXJ5VGV4dENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgIHNlY29uZGFyeTogY2xhc3Nlcy5zZWNvbmRhcnlUZXh0Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW1UZXh0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgRlVMTF9TS0VMRVRPTiA/IG51bGwgOiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25Db250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlbW92ZUl0ZW0uYmluZCh0aGlzLCBteUZpbHRlcmVkTGlzdCwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt3ZWJzaXRlLm5vX3Jlc3RvcmV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsnUmVzdG9yZSd9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RXZWJzaXRlc30+XG4gICAgICAgIDxTZWFyY2hCYXJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBvbiBsYXN0IDcyaFwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2VhcmNoT25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICBvblJlcXVlc3RTZWFyY2g9e3RoaXMuc2VhcmNoT25SZXF1ZXN0U2VhcmNoLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25DYW5jZWxTZWFyY2g9e3RoaXMuc2VhcmNoT25DYW5jZWwuYmluZCh0aGlzKX1cbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQmFyfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgICAgICB7c2VsZWN0ZWRMaXN0Lmxlbmd0aCA9PT0gMCA/IG51bGwgOiAoXG4gICAgICAgICAgICA8TGlzdCBoZWlnaHQ9e01hdGgubWluKDgwICogc2VsZWN0ZWRMaXN0Lmxlbmd0aCwgMzAwKX0gaXRlbUNvdW50PXtzZWxlY3RlZExpc3QubGVuZ3RofSBpdGVtU2l6ZT17ODB9PlxuICAgICAgICAgICAgICB7bGlzdEl0ZW0oc2VsZWN0ZWRMaXN0KX1cbiAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG51bWJlckNsb3NlZFRhYnNMYXN0SG91ciA9IHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnlcbiAgICAgID8gdGhpcy5maWx0ZXJMaXN0KHRoaXMuc3RhdGUuY2xvc2VkX2hpc3RvcnksIFRJTUVfUEVSSU9EXzI0SCkubGVuZ3RoXG4gICAgICA6IDA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxkaXYgdmFyaWFudD1cImgzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuYm9sZE51bWJlcn0+XG4gICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID8gbnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIDogMH1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dE9uUmlnaHR9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcFRleHR9PlxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICB0YWJcbiAgICAgICAgICAgICAge251bWJlckNsb3NlZFRhYnNMYXN0SG91ciA8PSAxID8gJycgOiAncyd9IGNsb3NlZFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLm1pZGRsZVRleHR9PiBpbiB0aGUgbGFzdCB7YCR7TlVNQkVSX0hPVVJTX0RBWX0gaG91cnNgfSA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5yZW5kZXJMaXN0LmJpbmQodGhpcykoKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJDb250YWluZXJ9PlxuICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgY29tcG9uZW50PVwiZGl2XCIgb25DbGljaz17dGhpcy5jb2ZmZWVUaW1lLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgPEZhdm9yaXRlQm9yZGVySWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQ29udGFpbmVyfSAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJSaWdodH0+XG4gICAgICAgICAgICA8RXJyb3JPdXRsaW5lSWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQ29udGFpbmVyfSAvPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2Zvcm1zL2QvZS8xRkFJcFFMU2RVRUpIZDBiTDZyeUZ2WmsyMjBDb1pwN2N3dkZ4RVNvcnBzN2NuZ2swd1FmeXUtUS92aWV3Zm9ybVwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVG9Gb3JtfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBCdWcvRmVlZGJhY2s/XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU25hY2tiYXIoSG9tZSk7XG4iLCJpbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICB0aXRsZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbWF4SGVpZ2h0OiA0MCxcbiAgfSxcbiAgdGV4dE9uUmlnaHQ6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnc3RhcnQnLFxuICB9LFxuICBncmVlblRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBib3JkZXJCb3R0b206IGAycHggc29saWQgIzAwYjlhYWAsXG4gICAgbWF4V2lkdGg6IDIyNSxcbiAgfSxcbiAgbGlzdFRpdGxlOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIG1heEhlaWdodDogMzAsXG4gIH0sXG5cbiAgYm9sZE51bWJlcjoge1xuICAgIGNvbG9yOiAnI2U1NWMwMCcsXG4gICAgZm9udFNpemU6IDQwLFxuICAgIG1heFdpZHRoOiAnMzAlJyxcbiAgfSxcbiAgbWlkZGxlVGV4dDoge1xuICAgIGZvbnRTaXplOiAxMyxcbiAgfSxcbiAgdG9wVGV4dDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgfSxcbiAgc3ViVGV4dDoge1xuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICB9LFxuICBidXR0b246IHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG1heFdpZHRoOiAyMCxcbiAgfSxcbiAgYnV0dG9uQ29udGFpbmVyOiB7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScgfSxcbiAgaXRlbVRleHQ6IHtcbiAgICBtYXhXaWR0aDogMTg1LFxuICAgIG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ2JyZWFrLXNwYWNlcycsXG5cbiAgICBtYXhIZWlnaHQ6IDYwLFxuICB9LFxuICB0aW1lRGlzcGxheToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTQsXG4gIH0sXG4gIGdyaWRBdmF0YXJXaXRoVGltZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgfSxcbiAgbGlzdFdlYnNpdGVzOiB7XG4gICAgbWFyZ2luVG9wOiAyMCxcbiAgfSxcbiAgZm9vdGVyQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIuNSksXG4gICAgbWF4SGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDAuNSksXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgZm9vdGVyUmlnaHQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gIH0sXG5cbiAgbGlua1RvRm9ybToge1xuICAgIGZvbnRTaXplOiAxMCxcbiAgfSxcbiAgaWNvbkNvbnRhaW5lcjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDAuMjUpLFxuICAgIGZvbnRTaXplOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICBhdmF0YXJDb250YWluZXI6IHtcbiAgICBtYXhXaWR0aDogdGhlbWUuc3BhY2luZyg3KSxcbiAgICBtYXhIZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNyksXG4gIH0sXG4gIHByaW1hcnlUZXh0Q29udGFpbmVyOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgbWF4SGVpZ2h0OiAyMixcbiAgfSxcbiAgc2Vjb25kYXJ5VGV4dENvbnRhaW5lcjoge1xuICAgIGZvbnRTaXplOiAxMyxcbiAgfSxcbiAgcHJpbWFyeVRpdGxlQ29udGFpbmVyOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNixcbiAgfSxcblxuICBsaXN0VGl0bGVUZXh0OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQuNSksXG4gIH0sXG4gIGxpc3RDb250YWluZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIHNlYXJjaEJhcjoge1xuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtYXhIZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNSksXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShIb21lKTtcbiIsImltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzJztcbmltcG9ydCBBcnJvd0JhY2tJb3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3MnO1xuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vU2V0dGluZ3MnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9Ib21lJztcbmltcG9ydCB7IEZPQ1VTRUQsIElOSVRfRk9DVVNFRF9QUk9GSUxFIH0gZnJvbSAnLi4vLi4vY29uZmlnL3NldHRpbmdzUHJvZmlsZXMuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMuanMnO1xuXG5jbGFzcyBIb21lRGlzcGF0Y2hlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBicm93c2VyLnN0b3JhZ2UubG9jYWxcbiAgICAgIC5nZXQoWydjbG9zZWRfaGlzdG9yeScsICdhY3RpdmVfcHJvZmlsZScsICdzZXR0aW5ncycsICdmb2N1c2VkX3dpbmRvd19pZCcsICdpbmFjdGl2ZV9wb2xpY3knXSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSByZXN1bHQuY2xvc2VkX2hpc3RvcnkgfHwgW107XG4gICAgICAgIGNvbnN0IGFjdGl2ZV9wcm9maWxlID0gcmVzdWx0LmFjdGl2ZV9wcm9maWxlIHx8IEZPQ1VTRUQ7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gcmVzdWx0LnNldHRpbmdzIHx8IElOSVRfRk9DVVNFRF9QUk9GSUxFO1xuICAgICAgICBjb25zdCBmb2N1c2VkX3dpbmRvd19pZCA9IHJlc3VsdC5mb2N1c2VkX3dpbmRvd19pZCB8fCBudWxsO1xuICAgICAgICBjb25zdCBpbmFjdGl2ZV9wb2xpY3kgPSByZXN1bHQuaW5hY3RpdmVfcG9saWN5IHx8IFtdO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhY3RpdmVfcHJvZmlsZSxcbiAgICAgICAgICBzZXR0aW5ncyxcbiAgICAgICAgICBmb2N1c2VkX3dpbmRvd19pZCxcbiAgICAgICAgICBpbmFjdGl2ZV9wb2xpY3ksXG4gICAgICAgICAgY2xvc2VkX2hpc3Rvcnk6IGNsb3NlZF9oaXN0b3J5LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhcHBCYXJWYWx1ZTogJ0hPTUUnLFxuICAgICAgZmlyc3RMb2FkOiB0cnVlLFxuICAgICAgY2xvc2VkX2hpc3Rvcnk6IFtdLFxuICAgICAgYWN0aXZlX3Byb2ZpbGU6IEZPQ1VTRUQsXG4gICAgICBzZXR0aW5nczogSU5JVF9GT0NVU0VEX1BST0ZJTEUsXG4gICAgICBmb2N1c2VkX3dpbmRvd19pZDogbnVsbCxcbiAgICAgIGluYWN0aXZlX3BvbGljeTogW10sXG4gICAgfTtcbiAgICB0aGlzLm9uQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBbJ2Nsb3NlZF9oaXN0b3J5JywgJ2FjdGl2ZV9wcm9maWxlJywgJ3NldHRpbmdzJywgJ2ZvY3VzZWRfd2luZG93X2lkJywgJ2luYWN0aXZlX3BvbGljeSddO1xuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGNoYW5nZXNba2V5XSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2tleV06IGNoYW5nZXNba2V5XVsnbmV3VmFsdWUnXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbG9nZ2VyKHRoaXMsICdQb3B1cCBvcGVuZWQnKTtcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChuZXdWYWx1ZSkgPT4gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhcHBCYXJWYWx1ZTogbmV3VmFsdWUsIGZpcnN0TG9hZDogZmFsc2UgfSk7XG4gICAgbG9nZ2VyKHRoaXMsICdTd2l0Y2ggdG8gJyArIG5ld1ZhbHVlKTtcbiAgfTtcblxuICBkaXNwYXRjaFBhZ2UoKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmFwcEJhclZhbHVlKSB7XG4gICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgcmV0dXJuIDxIb21lIHNrZWxldG9uPXt0aGlzLnN0YXRlLmZpcnN0TG9hZH0gY2xvc2VkX2hpc3Rvcnk9e3RoaXMuc3RhdGUuY2xvc2VkX2hpc3Rvcnl9IC8+O1xuICAgICAgY2FzZSAnU0VUVElOR1MnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTZXR0aW5nc1xuICAgICAgICAgICAgYWN0aXZlX3Byb2ZpbGU9e3RoaXMuc3RhdGUuYWN0aXZlX3Byb2ZpbGV9XG4gICAgICAgICAgICBzZXR0aW5ncz17dGhpcy5zdGF0ZS5zZXR0aW5nc31cbiAgICAgICAgICAgIGZvY3VzZWRfd2luZG93X2lkPXt0aGlzLnN0YXRlLmZvY3VzZWRfd2luZG93X2lkfVxuICAgICAgICAgICAgaW5hY3RpdmVfcG9saWN5PXt0aGlzLnN0YXRlLmluYWN0aXZlX3BvbGljeX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyBpcyBhbiBlcnJvciBwYWdlPC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlJY29uKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUpIHtcbiAgICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UoJ1NFVFRJTkdTJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2V0dGluZ3NJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnU0VUVElOR1MnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UoJ0hPTUUnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQ29udGFpbmVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBcnJvd0JhY2tJb3NJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyBpcyBhbiBlcnJvciBwYWdlPC9kaXY+O1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGJldGEgPSBFTlYgIT09ICdwcm9kJyA/IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5iZXRhfT5iZXRhPC9zcGFuPiA6IG51bGw7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTbmFja2JhclByb3ZpZGVyXG4gICAgICAgIG1heFNuYWNrPXsyfVxuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5ub3RpZmljYXRpb24sXG4gICAgICAgICAgdmFyaWFudFN1Y2Nlc3M6IGNsYXNzZXMuc3VjY2VzcyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZUNvbnRhaW5lcn0+XG4gICAgICAgICAgPFBhcGVyIHNxdWFyZT17ZmFsc2V9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlclNoYWRvd30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkTG9nb1RhYnN9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90YWJieS51c1wiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5lbnNlbWJsZWxvZ299IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eycuLi8uLi9hc3NldHMvc3RhdGljL2ljb25zL3RhYmJ5XzIucG5nJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29GdWxsfSAvPlxuICAgICAgICAgICAgICAgIHtiZXRhfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHt0aGlzLmRpc3BsYXlJY29uKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+e3RoaXMuZGlzcGF0Y2hQYWdlKCl9PC9kaXY+XG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lRGlzcGF0Y2hlcjtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgSG9tZURpc3BhdGNoZXIgZnJvbSAnLi9Ib21lRGlzcGF0Y2hlcic7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYi9UYWInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICBob21lQ29udGFpbmVyOiB7XG4gICAgbWluV2lkdGg6IDQwMCxcbiAgfSxcbiAgcGFwZXJTaGFkb3c6IHtcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMC4zKSwgMHB4IDBweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKSwgMHB4IDBweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4zKScsXG4gIH0sXG4gIHRhYjoge1xuICAgIGNvbG9yOiAnIzAwYjlhYScsXG4gIH0sXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIGxlZnQ6IDE1MCxcbiAgfSxcbiAgZ3JpZExvZ29UYWJzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGFsbFRhYnM6IHtcbiAgICBtYXhXaWR0aDogJzc1JScsXG4gIH0sXG4gIGVuc2VtYmxlbG9nbzoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2xlZnQnLFxuICB9LFxuICBsb2dvQXZhdGFyOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuMjUpLFxuICB9LFxuICBsb2dvRnVsbDoge1xuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMi4yNSksXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoMTIpLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLjI1KSxcbiAgfSxcbiAgYmV0YToge1xuICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzgwZTBhNywgIzAwYjlhYSknLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMC4yKSxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMC4yKSxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgZm9udFNpemU6ICd4eC1zbWFsbCcsXG4gIH0sXG4gIGljb25Db250YWluZXI6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMS41KSxcbiAgfSxcbiAgc3VjY2Vzczoge1xuICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzgwZTBhNywgIzAwYjlhYSknLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZURpc3BhdGNoZXIpO1xuIiwiaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXAnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHkvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgVHVuZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R1bmUnO1xuaW1wb3J0IEhlbHBPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscE91dGxpbmUnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01vZGFsJztcbmltcG9ydCBCYWNrZHJvcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcblxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XG5pbXBvcnQgeyBjb3B5IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMuanMnO1xuXG5pbXBvcnQgeyB3aXRoU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xuaW1wb3J0IHsgUkVMQVhFRCwgRk9DVVNFRCwgQ1VTVE9NSVpFRCwgSU5JVF9GT0NVU0VEX1BST0ZJTEUgfSBmcm9tICcuLi8uLi9jb25maWcvc2V0dGluZ3NQcm9maWxlcy5qcyc7XG5pbXBvcnQgeyBjaGVja1NldHRpbmdzLCBPUFRJTUFMX05VTUJFUl9UQUJTLCBQT0xJQ1kgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpc0ludGVnZXIsIHJlbW92ZUl0ZW0gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcblxuY29uc3QgTGlnaHRUb29sdGlwID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XG4gIHRvb2x0aXA6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAxKScsXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgfSxcbn0pKShUb29sdGlwKTtcblxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvY3VzZWRNb2RlOiB0aGlzLnByb3BzLmFjdGl2ZV9wcm9maWxlID09PSBGT0NVU0VELFxuICAgICAgcmVsYXhlZE1vZGU6IHRoaXMucHJvcHMuYWN0aXZlX3Byb2ZpbGUgPT09IFJFTEFYRUQsXG4gICAgICBjdXN0b21pemVkQm9vbDogdGhpcy5wcm9wcy5hY3RpdmVfcHJvZmlsZSA9PT0gQ1VTVE9NSVpFRCxcbiAgICAgIHNldHRpbmdzOiB0aGlzLnByb3BzLnNldHRpbmdzLFxuICAgICAgZm9jdXNlZFdpbmRvd0lkOiB0aGlzLnByb3BzLmZvY3VzZWRfd2luZG93X2lkLFxuICAgICAgaW5hY3RpdmVQb2xpY3k6IHRoaXMucHJvcHMuaW5hY3RpdmVfcG9saWN5LFxuICAgICAgb3Blbk1vZGFsOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghXy5pc0VxdWFsKHByZXZQcm9wcy5zZXR0aW5ncywgdGhpcy5wcm9wcy5zZXR0aW5ncykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXR0aW5nczogdGhpcy5wcm9wcy5zZXR0aW5ncyB9KTtcbiAgICB9XG4gICAgaWYgKHByZXZQcm9wcy5hY3RpdmVfcHJvZmlsZSAhPT0gdGhpcy5wcm9wcy5hY3RpdmVfcHJvZmlsZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRNb2RlOiB0aGlzLnByb3BzLmFjdGl2ZV9wcm9maWxlID09PSBGT0NVU0VELFxuICAgICAgICByZWxheGVkTW9kZTogdGhpcy5wcm9wcy5hY3RpdmVfcHJvZmlsZSA9PT0gUkVMQVhFRCxcbiAgICAgICAgY3VzdG9taXplZEJvb2w6IHRoaXMucHJvcHMuYWN0aXZlX3Byb2ZpbGUgPT09IENVU1RPTUlaRUQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHByZXZQcm9wcy5mb2N1c2VkX3dpbmRvd19pZCAhPT0gdGhpcy5wcm9wcy5mb2N1c2VkX3dpbmRvd19pZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1c3RvbWl6ZWRCb29sOiB0aGlzLnByb3BzLmFjdGl2ZV9wcm9maWxlID09PSBDVVNUT01JWkVELFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghXy5pc0VxdWFsKHByZXZQcm9wcy5pbmFjdGl2ZV9wb2xpY3ksIHRoaXMucHJvcHMuaW5hY3RpdmVfcG9saWN5KSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGluYWN0aXZlUG9saWN5OiB0aGlzLnByb3BzLmluYWN0aXZlX3BvbGljeSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUJvb2xDaGFuZ2UoY2hhbmdlVHlwZSkge1xuICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBtZXNzYWdlVHlwZTogJ1NFVFRJTkdTX1BST0ZJTEUnLFxuICAgICAgcHJvZmlsZTogY2hhbmdlVHlwZSxcbiAgICB9KTtcbiAgICBpZiAoY2hhbmdlVHlwZSA9PT0gUkVMQVhFRCB8fCBjaGFuZ2VUeXBlID09PSBGT0NVU0VEKSB7XG4gICAgICB0aGlzLm5vdGlmeVVzZXIodHJ1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5LmluY2x1ZGVzKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKSkge1xuICAgICAgdGhpcy5oYW5kbGVTd2l0Y2goKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTYXZlUGFyYW1ldGVycygpIHtcbiAgICAvLyBUT0RPIEFkZCBmdW5jdGlvbiB0byBjaGVjayBmb3IgYWxsIHBvdGVudGlhbCB2YWx1ZXNcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuICAgIGlmIChjaGVja1NldHRpbmdzKHRoaXMuc3RhdGUuc2V0dGluZ3MpKSB7XG4gICAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ1NFVFRJTkdTX1BBUkFNRVRFUlMnLFxuICAgICAgICBzZXR0aW5nczogdGhpcy5zdGF0ZS5zZXR0aW5ncyxcbiAgICAgIH0pO1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubm90aWZ5VXNlcihzdWNjZXNzKTtcbiAgfVxuXG4gIG5vdGlmeVVzZXIoc3VjY2Vzcykge1xuICAgIHRoaXMucHJvcHMuZW5xdWV1ZVNuYWNrYmFyKHN1Y2Nlc3MgPyAnTmV3IFNldHRpbmdzIGFyZSBzYXZlZC4nIDogJ1NldHRpbmdzIGNhbm5vdCBiZSBzYXZlZC4nLCB7XG4gICAgICB2YXJpYW50OiBzdWNjZXNzID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyxcbiAgICAgIGFuY2hvck9yaWdpbjoge1xuICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICB9LFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiA3NTAsXG4gICAgICBhdXRvSGlkZUR1cmF0aW9uOiAyMDAwLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlUGFyYW1ldGVycyhwYXRoLCBwYXJhbWV0ZXIpIHtcbiAgICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgICBsZXQgc2V0dGluZ3MgPSBjb3B5KHRoaXMuc3RhdGUuc2V0dGluZ3MpO1xuICAgICAgY29uc3QgbmV4dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKGlzSW50ZWdlcihuZXh0VmFsdWUpIHx8IG5leHRWYWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2V0dGluZ3NbcGF0aF1bcGFyYW1ldGVyXSA9IG5leHRWYWx1ZTsgLy8gZG8gbm90IHBhcnNlSW50IG9yIHRleHRGaWVsZCBnb2VzIGNyYXp5Li4uXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXR0aW5nczogc2V0dGluZ3MgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVN3aXRjaCgpIHtcbiAgICBsZXQgaW5hY3RpdmVQb2xpY3kgPSB0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5O1xuXG4gICAgaWYgKGluYWN0aXZlUG9saWN5LmluY2x1ZGVzKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKSkge1xuICAgICAgaW5hY3RpdmVQb2xpY3kgPSByZW1vdmVJdGVtKGluYWN0aXZlUG9saWN5LCB0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCk7XG4gICAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ1JFTU9WRV9JTkFDVElWRV9QT0xJQ1knLFxuICAgICAgICB3aW5kb3dJZDogdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5hY3RpdmVQb2xpY3kucHVzaCh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCk7XG4gICAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ0FERF9JTkFDVElWRV9QT0xJQ1knLFxuICAgICAgICB3aW5kb3dJZDogdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluYWN0aXZlUG9saWN5OiBpbmFjdGl2ZVBvbGljeSB9KTtcbiAgfVxuXG4gIGhhbmRsZU9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5Nb2RhbDogdHJ1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuTW9kYWw6IGZhbHNlIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dHNQYXJhbWV0ZXJzID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ09wdGltYWwgdGFicyBudW1iZXInLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgICAgIHBhdGg6IFBPTElDWSxcbiAgICAgICAgcGFyYW1ldGVyOiBPUFRJTUFMX05VTUJFUl9UQUJTLFxuICAgICAgICBpbnB1dFByb3BzOiB7IG1pbjogJzEnLCBtYXg6ICcxMDAnLCBzdGVwOiAnMScgfSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBsaXN0SXRlbXNQYXJhbWV0ZXJzID0gaW5wdXRzUGFyYW1ldGVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVBhcmFtZXRlcnMoaXRlbS5wYXRoLCBpdGVtLnBhcmFtZXRlcikuYmluZCh0aGlzKX1cbiAgICAgICAgdmFsdWU9e2l0ZW0uc291cmNlW2l0ZW0ucGF0aF1baXRlbS5wYXJhbWV0ZXJdfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgb25LZXlVcD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB0aGlzLmhhbmRsZVNhdmVQYXJhbWV0ZXJzKCk7XG4gICAgICAgIH19XG4gICAgICAgIGlucHV0UHJvcHM9e2l0ZW0uaW5wdXRQcm9wc31cbiAgICAgIC8+XG4gICAgKSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5CbG9ja30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCAmJiB0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5XG4gICAgICAgICAgICAgICAgICAgID8gIXRoaXMuc3RhdGUuaW5hY3RpdmVQb2xpY3kuaW5jbHVkZXModGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpXG4gICAgICAgICAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTd2l0Y2guYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN3aXRjaFdyYXBwZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3dpdGNoQ29udGFpbmVyfVxuICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5FbmFibGUgb24gdGhpcyB3aW5kb3c8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW50cm9kdWN0aW9uQmxvY2t9PlxuICAgICAgICAgICAgPFR1bmVJY29uIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFyYW1ldGVyc1RpdGxlfT5TZWxlY3QgeW91ciBwcm9maWxlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NXcmFwcGVyfT5cbiAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9eyd0YWJieSB0ZW5kcyB0byBrZWVwIDUgdGFicyd9IHBsYWNlbWVudD1cImxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RQcm9maWxlc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmZvY3VzZWRNb2RlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUJvb2xDaGFuZ2UuYmluZCh0aGlzLCBGT0NVU0VEKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrYm94V3JhcHBlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+Rm9jdXM8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0Qm9vbGVhbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SGVscE91dGxpbmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWxwSWNvbn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cbiAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9eyd0YWJieSB0ZW5kcyB0byBrZWVwIDEyIHRhYnMnfSBwbGFjZW1lbnQ9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0UHJvZmlsZXNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5yZWxheGVkTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVCb29sQ2hhbmdlLmJpbmQodGhpcywgUkVMQVhFRCl9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveFdyYXBwZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlJlbGF4PC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEhlbHBPdXRsaW5lSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaGVscEljb259IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbWl6ZVdyYXBwZXJ9PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUJvb2xDaGFuZ2UuYmluZCh0aGlzLCBDVVNUT01JWkVEKX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tib3hXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5DdXN0b21pemU8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXR0aW5nc0Jsb2NrfT5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHJlcXVpcmVkIGZ1bGxXaWR0aD5cbiAgICAgICAgICAgICAgICB7bGlzdEl0ZW1zUGFyYW1ldGVyc31cbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaWRkZW4ga2V5PVwiaGlkZGVuLXRleHRmaWVsZFwiIGRpc2FibGVkIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRhcnlCdXR0b259XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlUGFyYW1ldGVycy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU9wZW4uYmluZCh0aGlzKX0gY2xhc3NOYW1lPXtjbGFzc2VzLnRpcHNCdXR0b259PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsVGlwc30+SGVscDwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgLy9kaXNhYmxlUG9ydGFsPXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW5Nb2RhbH1cbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlLmJpbmQodGhpcyl9XG4gICAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cbiAgICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XG4gICAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xuICAgICAgICAgICAgdGltZW91dDogNzUwLFxuICAgICAgICAgICAgaW52aXNpYmxlOiB0cnVlLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8RmFkZSBpbj17dGhpcy5zdGF0ZS5vcGVuTW9kYWx9PlxuICAgICAgICAgICAgPEJveCBib3JkZXJSYWRpdXM9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0QmxvY2tNb2RhbH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kRW5zZW1ibGV9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlByb3RlY3QgYSB0YWI8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXN0RW5zZW1ibGV9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4uLy4uL2Fzc2V0cy9zdGF0aWMvaWNvbnMvcmlnaHRfY2xpY2sucG5nJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnRDbGlja1dyYXBwZXJ9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9Pis8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5QaW48L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRFbnNlbWJsZX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+UmVvcGVuIG11bHRpcGxlIHRhYnM8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZEVuc2VtYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkN0cmw8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9Pis8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi4vLi4vYXNzZXRzL3N0YXRpYy9pY29ucy9sZWZ0X2NsaWNrLnBuZyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0Q2xpY2tXcmFwcGVyfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+SG93IGRvZXMgdGFiYnkgd29yaz88L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxOZXh0fT5cbiAgICAgICAgICAgICAgICB0YWJieSB3aWxsIG5vdCByZW1vdmUgdGFicyByaWdodCBhZnRlciB0aGVpciBjcmVhdGlvbi57JyAnfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxOZXh0fT5cbiAgICAgICAgICAgICAgICB0YWJieSB0YWtlcyB3ZWxsLXRob3VnaHQtb3V0IGRlY2lzaW9ucyBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyTW9kYWx9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3RhYmJ5LnVzL2ZhcVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxUaXBzfT5GQVEgYXZhaWxhYmxlIGhlcmU8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxUaXBzfT5cbiAgICAgICAgICAgICAgICAgIHRhYmJ5IHticm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9ufVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNuYWNrYmFyKFNldHRpbmdzKTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9TZXR0aW5ncyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgc2V0dGluZ3NXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgbWFyZ2luVG9wOiA1LFxuICAgIG1hcmdpbkxlZnQ6IDQ3LFxuICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgfSxcbiAgc2Vjb25kYXJ5QnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiAxOCxcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuXG4gICAgbWF4V2lkdGg6IDIwLFxuICB9LFxuXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIG1heFdpZHRoOiAxNTAsXG4gIH0sXG4gIGludHJvZHVjdGlvbkJsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIG1hcmdpbkxlZnQ6IDcsXG4gIH0sXG4gIHBhcmFtZXRlcnNUaXRsZToge1xuICAgIC8vZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNyxcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBtYXJnaW5MZWZ0OiAxNixcbiAgfSxcbiAgc2V0dGluZ3NCbG9jazoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1hcmdpbkxlZnQ6IDMyLFxuICAgIG1hcmdpblRvcDogNCxcbiAgfSxcbiAgZmlyc3RCb29sZWFuczoge1xuICAgIG1heFdpZHRoOiAnMzYlJyxcbiAgICBtaW5XaWR0aDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICBtYXhIZWlnaHQ6IDIwLFxuICAgIG1hcmdpblRvcDogNSxcbiAgICAvLyBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIH0sXG4gIGZpcnN0UHJvZmlsZXNDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNpbmcoMTApLFxuICB9LFxuXG4gIHN0eWxlTGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gIH0sXG4gIGNoZWNrYm94V3JhcHBlcjoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgfSxcbiAgc3dpdGNoQ29udGFpbmVyOiB7XG4gICAgbWF4SGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgfSxcbiAgc3dpdGNoV3JhcHBlcjoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWF4V2lkdGg6ICc4NSUnLFxuICB9LFxuICBjdXN0b21pemVXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIGFsaWduSXRlbXM6ICdzdGFydCcsXG4gIH0sXG4gIGhlbHBJY29uOiB7XG4gICAgY29sb3I6ICcjZTU1YzAwJyxcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDAuMjUpLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTUwLCAxNTAsIDE1MCwgMC40KScsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcbiAgfSxcbiAgbWFpbkJsb2NrOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxuICBwYXBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIC8vYm9yZGVyOiAnMC41cHggc29saWQgIzVBNUE1QScsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxuXG4gICAgb3BhY2l0eTogJzEgIWltcG9ydGFudCcsXG4gIH0sXG4gIGJveEN0cmw6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzVBNUE1QScsXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDIuNSksXG4gICAgLy9wYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxuICAgIC8vbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcbiAgICAvL21hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxuXG4gICAgb3BhY2l0eTogJzEgIWltcG9ydGFudCcsXG4gIH0sXG4gIGxlZnRDbGlja1dyYXBwZXI6IHtcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG4gIHNlY29uZEVuc2VtYmxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWluV2lkdGg6ICczMCUnLFxuICB9LFxuICBsYXN0RW5zZW1ibGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtaW5XaWR0aDogJzI3LjUlJyxcbiAgfSxcbiAgZmlyc3RCbG9ja01vZGFsOiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICB0aXBzQnV0dG9uOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygwKSxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcGFkZGluZ0xlZnQ6IDAsXG4gICAgcGFkZGluZ1JpZ2h0OiAwLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzdHlsZUxhYmVsVGlwczoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBjb2xvcjogJ3JnYmEoMTUwLCAxNTAsIDE1MCwgMSknLFxuICB9LFxuICBzdHlsZUxhYmVsTmV4dDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygwLjUpLFxuICB9LFxuICBmb290ZXJNb2RhbDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLjUpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIC8vIG1pbldpZHRoOiAnMTAwJScsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShTZXR0aW5ncyk7XG4iLCJleHBvcnQgY29uc3QgT1BUSU1BTF9OVU1CRVJfVEFCUyA9ICd0YXJnZXRfdGFicyc7XG5leHBvcnQgY29uc3QgUE9MSUNZID0gJ3BvbGljeSc7XG5leHBvcnQgY29uc3QgSU5BQ1RJVkVfUE9MSUNZID0gJ2luYWN0aXZlX3BvbGljeSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1NldHRpbmdzKHNldHRpbmdzKSB7XG4gIGlmIChzZXR0aW5nc1tQT0xJQ1ldW09QVElNQUxfTlVNQkVSX1RBQlNdICYmIHNldHRpbmdzW1BPTElDWV1bT1BUSU1BTF9OVU1CRVJfVEFCU10gPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhYm9vdHN0cmFwLWNzcy1vbmx5L2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEpO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxYjllNzQ7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uYm9sZC10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbjpmb2N1cyB7b3V0bGluZTowICFpbXBvcnRhbnQ7fVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwidGstY2hyb21lOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXkpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChldmVudCkgPT4ge1xuXHRcdG9uU2NyaXB0Q29tcGxldGUgPSAoKSA9PiB7XG5cblx0XHR9XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IGZuKGV2ZW50KSk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pXG5cdH0sIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicG9wdXBcIjogMFxufTtcblxudmFyIGRlZmVycmVkTW9kdWxlcyA9IFtcblx0W1wiLi9zcmMvYXBwL3BvcHVwLmpzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wc2xfaW5kZXhfanMtbm9kZV9tb2R1bGVzX3dlYmV4dGVuc2lvbi1wb2x5ZmlsbF9kaXN0X2Jyb3dzZXItcG9seWZpbGxfanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfVHlwb2dyYXBoeV9UeXBvZ3JhcGh5X2pzLW5vZGVfbW9kdWxlc19tYXRlcmlhbC11aV9jb3JlXy1jMDYzNjJcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2RheWpzX2RheWpzX21pbl9qcy1ub2RlX21vZHVsZXNfbG9kYXNoX2xvZGFzaF9qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbWF0ZXJpYWwtdWlfY29yZV9lc21fQXZhdGFyX0F2YXRhcl9qcy1ub2RlX21vZHVsZXNfbWF0ZXJpYWwtdWlfY29yZV9lc21fLWJhOWQ3NlwiLFwic3JjX2NvbmZpZ19zZXR0aW5nc1Byb2ZpbGVzX2pzLXNyY19jb25maWdfd2Vic2l0ZXNfanMtc3JjX3NlcnZpY2VzX3V0aWxzX2pzXCJdXG5dO1xuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gKCkgPT4ge1xuXG59O1xuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0fVxuXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbmZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcblx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcblx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblx0dmFyIHJ1bnRpbWUgPSBkYXRhWzNdO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59O1xuXG52YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucHRrX2Nocm9tZVwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucHRrX2Nocm9tZVwiXSB8fCBbXTtcbnZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG5qc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbnZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjsiLCIvLyBydW4gc3RhcnR1cFxucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==