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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/Skeleton.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/Link.js");
/* harmony import */ var _material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/ErrorOutline */ "./node_modules/@material-ui/icons/ErrorOutline.js");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Share */ "./node_modules/@material-ui/icons/Share.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var material_ui_search_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-ui-search-bar */ "./node_modules/material-ui-search-bar/lib/index.js");





















const RESTORE = 'RESTORE';
const SHELL_RESTORE = 'SHELL_RESTORE';
const CLOSED_HISTORY = 'closed_history';
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
        closed_history: [],
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
        closed_history: [],
        loading: false
      };
    }

    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.local.get([CLOSED_HISTORY]).then(result => {
      const closed_history = result.closed_history || [];
      this.setState({
        closed_history: this.enrichHistory(closed_history)
      });
    });

    this.onChangedCallback = function (changes) {
      const changesClosedHistory = changes[CLOSED_HISTORY];

      if (changesClosedHistory) {
        this.setState({
          closed_history: this.enrichHistory(changesClosedHistory['newValue'])
        });
      }
    }.bind(this);
  }

  componentDidMount() {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    (0,_services_utils_js__WEBPACK_IMPORTED_MODULE_3__.setAllReadBadge)();
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.onChanged.removeListener(this.onChangedCallback);
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

  copyToClipBoard() {
    navigator.clipboard.writeText('https://www.tabby.us');
    this.props.enqueueSnackbar('Link copied to the clipboard.', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      transitionDuration: 750,
      autoHideDuration: 2000
    });
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
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__.default, {
          ContainerComponent: "div"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__.default, {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__.default, {
        ContainerComponent: "div"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: classes.gridAvatarWithTime
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
        className: classes.timeDisplay
      }, this.state.loading && FULL_SKELETON ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_12__.default, {
        width: "3em"
      }) : `${website.hours_minutes_format}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_13__.default, null, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_12__.default, {
        variant: "circle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_14__.default, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_14__.default, {
        variant: "square",
        alt: website.title ? website.title : website.url,
        src: website.favIconUrl ? website.favIconUrl : 'error',
        className: classes.avatarContainer
      }))), this.state.loading && FULL_SKELETON ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_12__.default, {
        width: "15em"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_12__.default, {
        width: "10em"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__.default, {
        primary: website.url,
        secondary: website.title,
        classes: {
          primary: classes.primaryTextContainer,
          secondary: classes.secondaryTextContainer
        },
        className: classes.itemText
      }), this.state.loading && FULL_SKELETON ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_15__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
        className: classes.buttonContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__.default, {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.boldNumber
    }, numberClosedTabsLastHour ? numberClosedTabsLastHour : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: classes.textOnRight
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.topText
    }, ' ', "tab", numberClosedTabsLastHour <= 1 ? '' : 's', " closed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {
      className: classes.middleText
    }, " in the last ", `${NUMBER_HOURS_DAY} hours`, " "))), this.renderList.bind(this)(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: classes.footerContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__.default, {
      color: "secondary",
      component: "div",
      onClick: this.copyToClipBoard.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_18__.default, {
      color: "secondary",
      className: classes.iconContainer
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: classes.footerRight
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_19__.default, {
      color: "secondary",
      className: classes.iconContainer
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_20__.default, {
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
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.local.get(['active_profile', 'settings', 'focused_window_id', 'inactive_policy']).then(result => {
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
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.onChanged.addListener(this.onChangedCallback);
  }

  componentWillUnmount() {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.onChanged.removeListener(this.onChangedCallback);
  }

  handleBoolChange(changeType) {
    webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.sendMessage({
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
    }, "tabby ", webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.getManifest().version), ' ')))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,notistack__WEBPACK_IMPORTED_MODULE_3__.withSnackbar)(Settings));

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
/******/ 			["./src/app/popup.js","vendors-node_modules_psl_index_js-node_modules_webextension-polyfill_dist_browser-polyfill_js","vendors-node_modules_material-ui_core_Typography_Typography_js-node_modules_material-ui_core_-c06362","vendors-node_modules_material-ui_core_esm_Avatar_Avatar_js-node_modules_material-ui_core_esm_-788efb","src_config_settingsProfiles_js-src_config_websites_js-src_services_utils_js"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvYXBwL3BvcHVwLmpzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXIvSG9tZURpc3BhdGNoZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3Mvc2V0dGluZ3Muc3R5bGUuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdGstY2hyb21lLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RrLWNocm9tZS8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzcz9lYTVkIiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGstY2hyb21lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RrLWNocm9tZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ay1jaHJvbWUvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiQXBwIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUkVTVE9SRSIsIlNIRUxMX1JFU1RPUkUiLCJDTE9TRURfSElTVE9SWSIsIk5VTUJFUl9IT1VSU19EQVkiLCJUSU1FX1BFUklPRF8yNEgiLCJUSU1FX1BFUklPRF83MkgiLCJGVUxMX1NLRUxFVE9OIiwiRElTUExBWV9TVEFUVVNFUyIsIkhvbWUiLCJQdXJlQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInNldEFsbFJlYWRCYWRnZSIsInNrZWxldG9uIiwic3RhdGUiLCJjbG9zZWRfaGlzdG9yeSIsImxvYWRpbmciLCJ0aW1lb3V0IiwiRlJPTlRFTkRfU0tFTEVUT05fRElTUExBWSIsInRoZW4iLCJsb2dnZXIiLCJzZXRTdGF0ZSIsImJyb3dzZXIiLCJyZXN1bHQiLCJlbnJpY2hIaXN0b3J5Iiwib25DaGFuZ2VkQ2FsbGJhY2siLCJjaGFuZ2VzIiwiY2hhbmdlc0Nsb3NlZEhpc3RvcnkiLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUl0ZW0iLCJsaXN0SXRlbXMiLCJrZXkiLCJlIiwiY3RybEtleSIsIm1ldGFLZXkiLCJyZXN0b3JlVGFiIiwiaXRlbXMiLCJtZXNzYWdlVHlwZSIsInJlc3RvcmVkVGFiIiwidXVpZCIsImZpbHRlciIsIml0ZW0iLCJzZWFyY2hPbkNoYW5nZSIsInZhbHVlIiwic2VhcmNoVmFsdWUiLCJzZWFyY2hPblJlcXVlc3RTZWFyY2giLCJldmVudCIsInNlYXJjaE9uQ2FuY2VsIiwiZmlsdGVyTGlzdCIsInNlbGVjdGVkTGlzdCIsImVuZFBlcmlvZCIsIm5vdyIsIkRhdGUiLCJkZWxldGlvbl90aW1lIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJjb3B5VG9DbGlwQm9hcmQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJlbnF1ZXVlU25hY2tiYXIiLCJ2YXJpYW50IiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiYXV0b0hpZGVEdXJhdGlvbiIsImhpc3RvcnkiLCJyeCIsIlJlZ0V4cCIsIk5PX1JFU1RPUkVfVVJMIiwibWFwIiwid2Vic2l0ZSIsImRlbGV0aW9uVGltZSIsImhvdXJzX21pbnV0ZXNfZm9ybWF0IiwiZGF5anMiLCJmb3JtYXQiLCJkYXRlIiwic3RhcnRPZiIsIm5vX3Jlc3RvcmUiLCJleGVjIiwidXJsIiwicmV2ZXJzZSIsInJlbmRlckxpc3QiLCJjbGFzc2VzIiwic2xpY2UiLCJsZW5ndGgiLCJzZWFyY2hQYXR0ZXJuIiwic3BsaXQiLCJ0ZXJtIiwiam9pbiIsIm9wdGlvbiIsInRpdGxlIiwibWF0Y2giLCJjdXJyZW50IiwibGFzdCIsImkiLCJuZXh0IiwiZGVsdGEiLCJNYXRoIiwibWF4IiwiY2VpbCIsImRpZmYiLCJzcGxpY2UiLCJ0ZXh0IiwiZGF5IiwibGlzdEl0ZW0iLCJteUZpbHRlcmVkTGlzdCIsImluZGV4Iiwic3R5bGUiLCJwcmltYXJ5IiwicHJpbWFyeVRpdGxlQ29udGFpbmVyIiwibGlzdFRpdGxlVGV4dCIsImdyaWRBdmF0YXJXaXRoVGltZSIsInRpbWVEaXNwbGF5IiwiZmF2SWNvblVybCIsImF2YXRhckNvbnRhaW5lciIsInByaW1hcnlUZXh0Q29udGFpbmVyIiwic2Vjb25kYXJ5VGV4dENvbnRhaW5lciIsIml0ZW1UZXh0IiwiYnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uIiwibGlzdFdlYnNpdGVzIiwic2VhcmNoQmFyIiwibGlzdCIsIm1pbiIsInJlbmRlciIsIm51bWJlckNsb3NlZFRhYnNMYXN0SG91ciIsImJvbGROdW1iZXIiLCJ0ZXh0T25SaWdodCIsInRvcFRleHQiLCJtaWRkbGVUZXh0IiwiZm9vdGVyQ29udGFpbmVyIiwiaWNvbkNvbnRhaW5lciIsImZvb3RlclJpZ2h0IiwibGlua1RvRm9ybSIsIndpdGhTbmFja2JhciIsInN0eWxlcyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWF4SGVpZ2h0IiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJncmVlblRpdGxlIiwiZm9udFNpemUiLCJib3JkZXJCb3R0b20iLCJtYXhXaWR0aCIsImxpc3RUaXRsZSIsImNvbG9yIiwic3ViVGV4dCIsIm1hcmdpblRvcCIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0Iiwib3ZlcmZsb3dXcmFwIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwibWluV2lkdGgiLCJtYXJnaW5SaWdodCIsImxpc3RDb250YWluZXIiLCJtYXJnaW5Cb3R0b20iLCJ3aXRoU3R5bGVzIiwiSG9tZURpc3BhdGNoZXIiLCJuZXdWYWx1ZSIsImFwcEJhclZhbHVlIiwiZmlyc3RMb2FkIiwiZGlzcGF0Y2hQYWdlIiwiZGlzcGxheUljb24iLCJoYW5kbGVDaGFuZ2UiLCJyb290Iiwibm90aWZpY2F0aW9uIiwidmFyaWFudFN1Y2Nlc3MiLCJzdWNjZXNzIiwiaG9tZUNvbnRhaW5lciIsInBhcGVyU2hhZG93IiwiZ3JpZExvZ29UYWJzIiwiZW5zZW1ibGVsb2dvIiwibG9nb0Z1bGwiLCJib3hTaGFkb3ciLCJ0YWIiLCJsZWZ0IiwiYWxsVGFicyIsImxvZ29BdmF0YXIiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJMaWdodFRvb2x0aXAiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29tbW9uIiwid2hpdGUiLCJzaGFkb3dzIiwiVG9vbHRpcCIsIlNldHRpbmdzIiwiZm9jdXNlZE1vZGUiLCJyZWxheGVkTW9kZSIsImN1c3RvbWl6ZWRCb29sIiwic2V0dGluZ3MiLCJJTklUX0ZPQ1VTRURfUFJPRklMRSIsImZvY3VzZWRXaW5kb3dJZCIsIm9wZW5Nb2RhbCIsInByb2ZpbGUiLCJhY3RpdmVfcHJvZmlsZSIsIkZPQ1VTRUQiLCJSRUxBWEVEIiwiQ1VTVE9NSVpFRCIsImZvY3VzZWRfd2luZG93X2lkIiwiaW5hY3RpdmVQb2xpY3kiLCJpbmFjdGl2ZV9wb2xpY3kiLCJjaGFuZ2VzU2V0dGluZ3MiLCJjaGFuZ2VzUHJvZmlsZSIsImNoYW5nZWRJbmFjdGl2ZVBvbGljeSIsImhhbmRsZUJvb2xDaGFuZ2UiLCJjaGFuZ2VUeXBlIiwibm90aWZ5VXNlciIsImhhbmRsZVN3aXRjaCIsImhhbmRsZVNhdmVQYXJhbWV0ZXJzIiwiY2hlY2tTZXR0aW5ncyIsImhhbmRsZUNoYW5nZVBhcmFtZXRlcnMiLCJwYXRoIiwicGFyYW1ldGVyIiwiY29weSIsIm5leHRWYWx1ZSIsInRhcmdldCIsImlzSW50ZWdlciIsIndpbmRvd0lkIiwicHVzaCIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbG9zZSIsImlucHV0c1BhcmFtZXRlcnMiLCJsYWJlbCIsInNvdXJjZSIsIlBPTElDWSIsIk9QVElNQUxfTlVNQkVSX1RBQlMiLCJpbnB1dFByb3BzIiwic3RlcCIsImxpc3RJdGVtc1BhcmFtZXRlcnMiLCJ0ZXh0RmllbGQiLCJtYWluQmxvY2siLCJzd2l0Y2hXcmFwcGVyIiwic3dpdGNoQ29udGFpbmVyIiwic3R5bGVMYWJlbCIsImludHJvZHVjdGlvbkJsb2NrIiwicGFyYW1ldGVyc1RpdGxlIiwic2V0dGluZ3NXcmFwcGVyIiwiZmlyc3RQcm9maWxlc0NvbnRhaW5lciIsImNoZWNrYm94V3JhcHBlciIsImZpcnN0Qm9vbGVhbnMiLCJoZWxwSWNvbiIsImN1c3RvbWl6ZVdyYXBwZXIiLCJzZXR0aW5nc0Jsb2NrIiwic2Vjb25kYXJ5QnV0dG9uIiwidGlwc0J1dHRvbiIsInN0eWxlTGFiZWxUaXBzIiwibW9kYWwiLCJCYWNrZHJvcCIsImludmlzaWJsZSIsInBhcGVyIiwiZmlyc3RCbG9ja01vZGFsIiwic2Vjb25kRW5zZW1ibGUiLCJsYXN0RW5zZW1ibGUiLCJsZWZ0Q2xpY2tXcmFwcGVyIiwic3R5bGVMYWJlbE5leHQiLCJmb290ZXJNb2RhbCIsInZlcnNpb24iLCJwb2ludGVyRXZlbnRzIiwibWluSGVpZ2h0IiwiekluZGV4IiwiZHJhd2VyIiwicGFkZGluZyIsIm9wYWNpdHkiLCJib3hDdHJsIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJJTkFDVElWRV9QT0xJQ1kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEtBQUssR0FBR0MsaUVBQWMsQ0FBQztBQUMzQkMsWUFBVSxFQUFFO0FBQ1ZDLGNBQVUsRUFBRTtBQURGLEdBRGU7QUFJM0JDLFNBQU8sRUFBRTtBQUNQQyxhQUFTLEVBQUU7QUFDVEMsVUFBSSxFQUFFO0FBREc7QUFESjtBQUprQixDQUFELENBQTVCOztBQVdBLFNBQVNDLEdBQVQsR0FBZTtBQUNiLHNCQUNFLDJEQUFDLDZEQUFEO0FBQWtCLFNBQUssRUFBRVA7QUFBekIsa0JBQ0UsMkRBQUMsK0RBQUQsT0FERixFQUNxQixHQURyQixDQURGO0FBS0Q7O0FBRURRLHVEQUFBLGVBQWdCLDJEQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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ZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSx1QkFBdUI7V0FDdEM7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSwyQzs7OztVQzVGQTtVQUNBIiwiZmlsZSI6InBvcHVwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWVEaXNwYXRjaGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZURpc3BhdGNoZXInO1xuaW1wb3J0IHsgTXVpVGhlbWVQcm92aWRlciwgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuICB9LFxuICBwYWxldHRlOiB7XG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzAwYjlhYScsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxIb21lRGlzcGF0Y2hlciAvPnsnICd9XG4gICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICApO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBGUk9OVEVORF9TS0VMRVRPTl9ESVNQTEFZIH0gZnJvbSAnLi4vLi4vY29uZmlnL2Vudi5qcyc7XG5pbXBvcnQgeyBOT19SRVNUT1JFX1VSTCB9IGZyb20gJy4uLy4uL2NvbmZpZy93ZWJzaXRlcy5qcyc7XG5pbXBvcnQgeyBsb2dnZXIsIHRpbWVvdXQsIHNldEFsbFJlYWRCYWRnZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLmpzJztcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgRXJyb3JPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXJyb3JPdXRsaW5lJztcbmltcG9ydCBTaGFyZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NoYXJlJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IHsgd2l0aFNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCB7IEZpeGVkU2l6ZUxpc3QgYXMgTGlzdCB9IGZyb20gJ3JlYWN0LXdpbmRvdyc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJ21hdGVyaWFsLXVpLXNlYXJjaC1iYXInO1xuXG5jb25zdCBSRVNUT1JFID0gJ1JFU1RPUkUnO1xuY29uc3QgU0hFTExfUkVTVE9SRSA9ICdTSEVMTF9SRVNUT1JFJztcbmNvbnN0IENMT1NFRF9ISVNUT1JZID0gJ2Nsb3NlZF9oaXN0b3J5JztcbmNvbnN0IE5VTUJFUl9IT1VSU19EQVkgPSAyNDtcbmNvbnN0IFRJTUVfUEVSSU9EXzI0SCA9IDM2MDAwMDAgKiBOVU1CRVJfSE9VUlNfREFZOyAvLyBpbiBtaWNyb3NlY29uZFxuY29uc3QgVElNRV9QRVJJT0RfNzJIID0gMzYwMDAwMCAqIE5VTUJFUl9IT1VSU19EQVkgKiAzOyAvLyBpbiBtaWNyb3NlY29uZFxuY29uc3QgRlVMTF9TS0VMRVRPTiA9IGZhbHNlO1xuY29uc3QgRElTUExBWV9TVEFUVVNFUyA9IFsna2lsbGVkJ107XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgc2V0QWxsUmVhZEJhZGdlKCk7XG5cbiAgICBpZiAocHJvcHMuc2tlbGV0b24pIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IGNsb3NlZF9oaXN0b3J5OiBbXSwgbG9hZGluZzogdHJ1ZSB9O1xuICAgICAgdGltZW91dChGUk9OVEVORF9TS0VMRVRPTl9ESVNQTEFZKS50aGVuKCgpID0+IHtcbiAgICAgICAgbG9nZ2VyKHRoaXMsICdEaXNwbGF5aW5nIGxpc3QnKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IGNsb3NlZF9oaXN0b3J5OiBbXSwgbG9hZGluZzogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KFtDTE9TRURfSElTVE9SWV0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSByZXN1bHQuY2xvc2VkX2hpc3RvcnkgfHwgW107XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VkX2hpc3Rvcnk6IHRoaXMuZW5yaWNoSGlzdG9yeShjbG9zZWRfaGlzdG9yeSkgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5vbkNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBjaGFuZ2VzQ2xvc2VkSGlzdG9yeSA9IGNoYW5nZXNbQ0xPU0VEX0hJU1RPUlldO1xuICAgICAgaWYgKGNoYW5nZXNDbG9zZWRIaXN0b3J5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNsb3NlZF9oaXN0b3J5OiB0aGlzLmVucmljaEhpc3RvcnkoY2hhbmdlc0Nsb3NlZEhpc3RvcnlbJ25ld1ZhbHVlJ10pLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgc2V0QWxsUmVhZEJhZGdlKCk7XG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0obGlzdEl0ZW1zLCBrZXksIGUpIHtcbiAgICBpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgLy8gbWV0YUtleSBpcyBjbWQga2V5IG9uIG1hY1xuICAgICAgdGhpcy5yZXN0b3JlVGFiKGxpc3RJdGVtcywga2V5LCBTSEVMTF9SRVNUT1JFKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXN0b3JlVGFiKGxpc3RJdGVtcywga2V5LCBSRVNUT1JFKTtcbiAgICB9XG4gIH1cblxuICByZXN0b3JlVGFiKGl0ZW1zLCBrZXksIG1lc3NhZ2VUeXBlKSB7XG4gICAgY29uc3QgcmVzdG9yZWRUYWIgPSBpdGVtc1trZXldO1xuICAgIGxvZ2dlcih0aGlzLCBtZXNzYWdlVHlwZSArICcgZm9yIHRhYiAnICsgcmVzdG9yZWRUYWIudXVpZCk7XG4gICAgY29uc3QgY2xvc2VkX2hpc3RvcnkgPSB0aGlzLnN0YXRlLmNsb3NlZF9oaXN0b3J5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS51dWlkICE9PSByZXN0b3JlZFRhYi51dWlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2VkX2hpc3Rvcnk6IGNsb3NlZF9oaXN0b3J5IH0pOyAvLyBubyBuZWVkIHRvIGVucmljaCBoZXJlXG4gICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlVHlwZSxcbiAgICAgIHV1aWQ6IHJlc3RvcmVkVGFiLnV1aWQsXG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2hPbkNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hWYWx1ZTogdmFsdWUgfSk7XG4gIH1cblxuICBzZWFyY2hPblJlcXVlc3RTZWFyY2goZXZlbnQpIHt9XG5cbiAgc2VhcmNoT25DYW5jZWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFZhbHVlOiAnJyB9KTtcbiAgfVxuXG4gIGZpbHRlckxpc3Qoc2VsZWN0ZWRMaXN0LCBlbmRQZXJpb2QpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZWxlY3RlZExpc3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gKG5vdyAtIGl0ZW0uZGVsZXRpb25fdGltZSA8IGVuZFBlcmlvZCkgJiYgRElTUExBWV9TVEFUVVNFUy5pbmNsdWRlcyhpdGVtLnN0YXR1cyk7XG4gICAgfSk7XG4gIH1cblxuICBjb3B5VG9DbGlwQm9hcmQoKSB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoJ2h0dHBzOi8vd3d3LnRhYmJ5LnVzJyk7XG4gICAgdGhpcy5wcm9wcy5lbnF1ZXVlU25hY2tiYXIoJ0xpbmsgY29waWVkIHRvIHRoZSBjbGlwYm9hcmQuJywge1xuICAgICAgdmFyaWFudDogJ3N1Y2Nlc3MnLFxuICAgICAgYW5jaG9yT3JpZ2luOiB7XG4gICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcbiAgICAgIH0sXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDc1MCxcbiAgICAgIGF1dG9IaWRlRHVyYXRpb246IDIwMDAsXG4gICAgfSk7XG4gIH1cblxuICBlbnJpY2hIaXN0b3J5KGhpc3RvcnkpIHtcbiAgICAvLyBrZWVwIGVsZW1lbnRzIG9ubHkgaW4gdGltZS1mcmFtZVxuICAgIGxldCBzZWxlY3RlZExpc3QgPSBoaXN0b3J5ID8gdGhpcy5maWx0ZXJMaXN0KGhpc3RvcnksIFRJTUVfUEVSSU9EXzcySCkgIDogW107XG4gICAgY29uc3QgcnggPSBuZXcgUmVnRXhwKE5PX1JFU1RPUkVfVVJMLmpvaW4oJ3wnKSk7XG4gICAgLy8gbGlzdCBlbnJpY2htZW50XG4gICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0Lm1hcCgod2Vic2l0ZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB3ZWJzaXRlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBkZWxldGlvblRpbWUgPSBuZXcgRGF0ZSh3ZWJzaXRlLmRlbGV0aW9uX3RpbWUpO1xuICAgICAgICB3ZWJzaXRlLmhvdXJzX21pbnV0ZXNfZm9ybWF0ID0gZGF5anMoZGVsZXRpb25UaW1lKS5mb3JtYXQoJ0hIOm1tJyk7XG4gICAgICAgIHdlYnNpdGUuZGF0ZSA9IGRheWpzKGRlbGV0aW9uVGltZSkuc3RhcnRPZignZGF0ZScpO1xuICAgICAgICB3ZWJzaXRlLm5vX3Jlc3RvcmUgPSByeC5leGVjKHdlYnNpdGUudXJsKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3ZWJzaXRlO1xuICAgIH0pO1xuXG4gICAgc2VsZWN0ZWRMaXN0ID0gc2VsZWN0ZWRMaXN0LnJldmVyc2UoKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRMaXN0O1xuICB9XG5cbiAgcmVuZGVyTGlzdCgpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgc2VsZWN0ZWRMaXN0ID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeS5zbGljZSgwKTtcbiAgICAvLyBrZWVwaW5nIG9ubHkgd2Vic2l0ZXMgdGhhdCBtYXRjaCBzZWFyY2ggY3JpdGVyaWFcbiAgICBpZiAodHlwZW9mIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VhcmNoUGF0dGVybiA9IG5ldyBSZWdFeHAoXG4gICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoVmFsdWVcbiAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgIC5tYXAoKHRlcm0pID0+IGAoPz0uKiR7dGVybX0pYClcbiAgICAgICAgICAuam9pbignJyksXG4gICAgICAgICdpJ1xuICAgICAgKTtcbiAgICAgIHNlbGVjdGVkTGlzdCA9IHNlbGVjdGVkTGlzdC5maWx0ZXIoXG4gICAgICAgIChvcHRpb24pID0+IG9wdGlvbi50aXRsZS5tYXRjaChzZWFyY2hQYXR0ZXJuKSB8fCBvcHRpb24udXJsLm1hdGNoKHNlYXJjaFBhdHRlcm4pXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50ID0gZGF5anMoKS5zdGFydE9mKCdkYXRlJyk7XG4gICAgbGV0IGxhc3QgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbmV4dCA9IHNlbGVjdGVkTGlzdFtpXS5kYXRlO1xuICAgICAgbGV0IGRlbHRhID0gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKGN1cnJlbnQuZGlmZihuZXh0LCAnZGF5cycsIHRydWUpKSk7XG4gICAgICBpZiAoZGVsdGEgPiBsYXN0KSB7XG4gICAgICAgIGlmIChkZWx0YSA9PT0gMSkge1xuICAgICAgICAgIHNlbGVjdGVkTGlzdC5zcGxpY2UoaSwgMCwgeyB0ZXh0OiAnWWVzdGVyZGF5IC0gJywgZGF5OiBuZXh0LmZvcm1hdCgnTU1NIEREJykgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVsdGEgPT09IDIpIHtcbiAgICAgICAgICBzZWxlY3RlZExpc3Quc3BsaWNlKGksIDAsIHsgdGV4dDogJ1ByZXZpb3VzIGRheSAtICcsIGRheTogbmV4dC5mb3JtYXQoJ01NTSBERCcpIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdGVkTGlzdC5zcGxpY2UoaSwgMCwgeyB0ZXh0OiAnJywgZGF5OiBuZXh0LmZvcm1hdCgnTU1NIEREJykgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdCA9IGRlbHRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGxpc3RJdGVtID0gKG15RmlsdGVyZWRMaXN0KSA9PiAoeyBpbmRleCwgc3R5bGUgfSkgPT4ge1xuICAgICAgY29uc3Qgd2Vic2l0ZSA9IG15RmlsdGVyZWRMaXN0W2luZGV4XTtcbiAgICAgIGlmICh0eXBlb2Ygd2Vic2l0ZS5kYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgPExpc3RJdGVtIENvbnRhaW5lckNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgcHJpbWFyeT17YCR7d2Vic2l0ZS50ZXh0fSAke3dlYnNpdGUuZGF5fWB9XG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgICAgcHJpbWFyeTogY2xhc3Nlcy5wcmltYXJ5VGl0bGVDb250YWluZXIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFRpdGxlVGV4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgPExpc3RJdGVtIENvbnRhaW5lckNvbXBvbmVudD1cImRpdlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZEF2YXRhcldpdGhUaW1lfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpbWVEaXNwbGF5fT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIEZVTExfU0tFTEVUT04gPyA8U2tlbGV0b24gd2lkdGg9XCIzZW1cIiAvPiA6IGAke3dlYnNpdGUuaG91cnNfbWludXRlc19mb3JtYXR9YH1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwiY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgLz5cbiAgICAgICAgICAgICAgICAgIDwvU2tlbGV0b24+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICAgIGFsdD17d2Vic2l0ZS50aXRsZSA/IHdlYnNpdGUudGl0bGUgOiB3ZWJzaXRlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXt3ZWJzaXRlLmZhdkljb25VcmwgPyB3ZWJzaXRlLmZhdkljb25VcmwgOiAnZXJyb3InfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyQ29udGFpbmVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIEZVTExfU0tFTEVUT04gPyAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIHdpZHRoPVwiMTVlbVwiIC8+XG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIHdpZHRoPVwiMTBlbVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgIHByaW1hcnk9e3dlYnNpdGUudXJsfVxuICAgICAgICAgICAgICAgIHNlY29uZGFyeT17d2Vic2l0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICBwcmltYXJ5OiBjbGFzc2VzLnByaW1hcnlUZXh0Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiBjbGFzc2VzLnNlY29uZGFyeVRleHRDb250YWluZXIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbVRleHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiBGVUxMX1NLRUxFVE9OID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVtb3ZlSXRlbS5iaW5kKHRoaXMsIG15RmlsdGVyZWRMaXN0LCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3dlYnNpdGUubm9fcmVzdG9yZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgeydSZXN0b3JlJ31cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFdlYnNpdGVzfT5cbiAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG9uIGxhc3QgNzJoXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWFyY2hPbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uUmVxdWVzdFNlYXJjaD17dGhpcy5zZWFyY2hPblJlcXVlc3RTZWFyY2guYmluZCh0aGlzKX1cbiAgICAgICAgICBvbkNhbmNlbFNlYXJjaD17dGhpcy5zZWFyY2hPbkNhbmNlbC5iaW5kKHRoaXMpfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFZhbHVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hCYXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgICAgIHtzZWxlY3RlZExpc3QubGVuZ3RoID09PSAwID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxMaXN0IGhlaWdodD17TWF0aC5taW4oODAgKiBzZWxlY3RlZExpc3QubGVuZ3RoLCAzMDApfSBpdGVtQ291bnQ9e3NlbGVjdGVkTGlzdC5sZW5ndGh9IGl0ZW1TaXplPXs4MH0+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbShzZWxlY3RlZExpc3QpfVxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyID0gdGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeVxuICAgICAgPyB0aGlzLmZpbHRlckxpc3QodGhpcy5zdGF0ZS5jbG9zZWRfaGlzdG9yeSwgVElNRV9QRVJJT0RfMjRIKS5sZW5ndGhcbiAgICAgIDogMDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGRpdiB2YXJpYW50PVwiaDNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib2xkTnVtYmVyfT5cbiAgICAgICAgICAgIHtudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgPyBudW1iZXJDbG9zZWRUYWJzTGFzdEhvdXIgOiAwfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0T25SaWdodH0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudG9wVGV4dH0+XG4gICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgIHRhYlxuICAgICAgICAgICAgICB7bnVtYmVyQ2xvc2VkVGFic0xhc3RIb3VyIDw9IDEgPyAnJyA6ICdzJ30gY2xvc2VkXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubWlkZGxlVGV4dH0+IGluIHRoZSBsYXN0IHtgJHtOVU1CRVJfSE9VUlNfREFZfSBob3Vyc2B9IDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlckxpc3QuYmluZCh0aGlzKSgpfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlckNvbnRhaW5lcn0+XG4gICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJkaXZcIiBvbkNsaWNrPXt0aGlzLmNvcHlUb0NsaXBCb2FyZC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgIDxTaGFyZUljb24gY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn0gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyUmlnaHR9PlxuICAgICAgICAgICAgPEVycm9yT3V0bGluZUljb24gY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn0gLz5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy9kL2UvMUZBSXBRTFNkVUVKSGQwYkw2cnlGdlprMjIwQ29acDdjd3ZGeEVTb3JwczdjbmdrMHdRZnl1LVEvdmlld2Zvcm1cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua1RvRm9ybX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQnVnL0ZlZWRiYWNrP1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNuYWNrYmFyKEhvbWUpO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgdGl0bGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1heEhlaWdodDogNDAsXG4gIH0sXG4gIHRleHRPblJpZ2h0OiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ3N0YXJ0JyxcbiAgfSxcbiAgZ3JlZW5UaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYm9yZGVyQm90dG9tOiBgMnB4IHNvbGlkICMwMGI5YWFgLFxuICAgIG1heFdpZHRoOiAyMjUsXG4gIH0sXG4gIGxpc3RUaXRsZToge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBtYXhIZWlnaHQ6IDMwLFxuICB9LFxuXG4gIGJvbGROdW1iZXI6IHtcbiAgICBjb2xvcjogJyNlNTVjMDAnLFxuICAgIGZvbnRTaXplOiA0MCxcbiAgICBtYXhXaWR0aDogJzMwJScsXG4gIH0sXG4gIG1pZGRsZVRleHQ6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gIH0sXG4gIHRvcFRleHQ6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gIH0sXG4gIHN1YlRleHQ6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXhXaWR0aDogMjAsXG4gIH0sXG4gIGJ1dHRvbkNvbnRhaW5lcjogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknIH0sXG4gIGl0ZW1UZXh0OiB7XG4gICAgbWF4V2lkdGg6IDE4NSxcbiAgICBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdicmVhay1zcGFjZXMnLFxuXG4gICAgbWF4SGVpZ2h0OiA2MCxcbiAgfSxcbiAgdGltZURpc3BsYXk6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IDE0LFxuICB9LFxuICBncmlkQXZhdGFyV2l0aFRpbWU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIH0sXG4gIGxpc3RXZWJzaXRlczoge1xuICAgIG1hcmdpblRvcDogMjAsXG4gIH0sXG4gIGZvb3RlckNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyLjUpLFxuICAgIG1heEhlaWdodDogdGhlbWUuc3BhY2luZygwLjUpLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGZvb3RlclJpZ2h0OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICB9LFxuXG4gIGxpbmtUb0Zvcm06IHtcbiAgICBmb250U2l6ZTogMTAsXG4gIH0sXG4gIGljb25Db250YWluZXI6IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygwLjI1KSxcbiAgICBmb250U2l6ZTogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgYXZhdGFyQ29udGFpbmVyOiB7XG4gICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgbWF4SGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDcpLFxuICB9LFxuICBwcmltYXJ5VGV4dENvbnRhaW5lcjoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIG1heEhlaWdodDogMjIsXG4gIH0sXG4gIHNlY29uZGFyeVRleHRDb250YWluZXI6IHtcbiAgICBmb250U2l6ZTogMTMsXG4gIH0sXG4gIHByaW1hcnlUaXRsZUNvbnRhaW5lcjoge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTYsXG4gIH0sXG5cbiAgbGlzdFRpdGxlVGV4dDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0LjUpLFxuICB9LFxuICBsaXN0Q29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzZWFyY2hCYXI6IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWF4SGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDUpLFxuICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzJztcbmltcG9ydCBBcnJvd0JhY2tJb3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3MnO1xuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vU2V0dGluZ3MnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9Ib21lJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLmpzJztcblxuY2xhc3MgSG9tZURpc3BhdGNoZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgYXBwQmFyVmFsdWU6ICdIT01FJywgZmlyc3RMb2FkOiB0cnVlIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsb2dnZXIodGhpcywgJ1BvcHVwIG9wZW5lZCcpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKG5ld1ZhbHVlKSA9PiAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFwcEJhclZhbHVlOiBuZXdWYWx1ZSwgZmlyc3RMb2FkOiBmYWxzZSB9KTtcbiAgICBsb2dnZXIodGhpcywgJ1N3aXRjaCB0byAnICsgbmV3VmFsdWUpO1xuICB9O1xuXG4gIGRpc3BhdGNoUGFnZSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXBwQmFyVmFsdWUpIHtcbiAgICAgIGNhc2UgJ0hPTUUnOlxuICAgICAgICByZXR1cm4gPEhvbWUgc2tlbGV0b249e3RoaXMuc3RhdGUuZmlyc3RMb2FkfSAvPjtcbiAgICAgIGNhc2UgJ1NFVFRJTkdTJzpcbiAgICAgICAgcmV0dXJuIDxTZXR0aW5ncyAvPjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8ZGl2PlRoaXMgaXMgYW4gZXJyb3IgcGFnZTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5SWNvbigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmFwcEJhclZhbHVlKSB7XG4gICAgICBjYXNlICdIT01FJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlKCdTRVRUSU5HUycpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25Db250YWluZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFNldHRpbmdzSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ1NFVFRJTkdTJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlKCdIT01FJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkNvbnRhaW5lcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXJyb3dCYWNrSW9zSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8ZGl2PlRoaXMgaXMgYW4gZXJyb3IgcGFnZTwvZGl2PjtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U25hY2tiYXJQcm92aWRlclxuICAgICAgICBtYXhTbmFjaz17Mn1cbiAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgIHJvb3Q6IGNsYXNzZXMubm90aWZpY2F0aW9uLFxuICAgICAgICAgIHZhcmlhbnRTdWNjZXNzOiBjbGFzc2VzLnN1Y2Nlc3MsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhvbWVDb250YWluZXJ9PlxuICAgICAgICAgIDxQYXBlciBzcXVhcmU9e2ZhbHNlfSB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJTaGFkb3d9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZExvZ29UYWJzfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdGFiYnkudXNcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9e2NsYXNzZXMuZW5zZW1ibGVsb2dvfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4uLy4uL2Fzc2V0cy9zdGF0aWMvaWNvbnMvdGFiYnlfMi5wbmcnfSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0Z1bGx9IC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAge3RoaXMuZGlzcGxheUljb24oKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj57dGhpcy5kaXNwYXRjaFBhZ2UoKX08L2Rpdj5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU25hY2tiYXJQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVEaXNwYXRjaGVyO1xuIiwiaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBIb21lRGlzcGF0Y2hlciBmcm9tICcuL0hvbWVEaXNwYXRjaGVyJztcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiL1RhYic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIGhvbWVDb250YWluZXI6IHtcbiAgICBtaW5XaWR0aDogNDAwLFxuICB9LFxuICBwYXBlclNoYWRvdzoge1xuICAgIGJveFNoYWRvdzogJzBweCAwcHggMXB4IC0xcHggcmdiYSgwLDAsMCwwLjMpLCAwcHggMHB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpLCAwcHggMHB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjMpJyxcbiAgfSxcbiAgdGFiOiB7XG4gICAgY29sb3I6ICcjMDBiOWFhJyxcbiAgfSxcbiAgbm90aWZpY2F0aW9uOiB7XG4gICAgbGVmdDogMTUwLFxuICB9LFxuICBncmlkTG9nb1RhYnM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgYWxsVGFiczoge1xuICAgIG1heFdpZHRoOiAnNzUlJyxcbiAgfSxcbiAgZW5zZW1ibGVsb2dvOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnbGVmdCcsXG4gIH0sXG4gIGxvZ29BdmF0YXI6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIGhlaWdodDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS4yNSksXG4gIH0sXG4gIGxvZ29GdWxsOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyLjI1KSxcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZygxMiksXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuMjUpLFxuICB9LFxuICBpY29uQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEuNSksXG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCM4MGUwYTcsICMwMGI5YWEpJyxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhvbWVEaXNwYXRjaGVyKTtcbiIsImltcG9ydCBicm93c2VyIGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXAnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHkvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgVHVuZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R1bmUnO1xuaW1wb3J0IEhlbHBPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscE91dGxpbmUnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01vZGFsJztcbmltcG9ydCBCYWNrZHJvcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcblxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XG5pbXBvcnQgeyBjb3B5IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXRpbHMuanMnO1xuXG5pbXBvcnQgeyB3aXRoU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xuaW1wb3J0IHsgUkVMQVhFRCwgRk9DVVNFRCwgQ1VTVE9NSVpFRCwgSU5JVF9GT0NVU0VEX1BST0ZJTEUgfSBmcm9tICcuLi8uLi9jb25maWcvc2V0dGluZ3NQcm9maWxlcy5qcyc7XG5pbXBvcnQgeyBjaGVja1NldHRpbmdzLCBPUFRJTUFMX05VTUJFUl9UQUJTLCBQT0xJQ1kgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpc0ludGVnZXIsIHJlbW92ZUl0ZW0gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscyc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcblxuY29uc3QgTGlnaHRUb29sdGlwID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XG4gIHRvb2x0aXA6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAxKScsXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgfSxcbn0pKShUb29sdGlwKTtcblxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvY3VzZWRNb2RlOiBmYWxzZSxcbiAgICAgIHJlbGF4ZWRNb2RlOiBmYWxzZSxcbiAgICAgIGN1c3RvbWl6ZWRCb29sOiBmYWxzZSxcbiAgICAgIHNldHRpbmdzOiBJTklUX0ZPQ1VTRURfUFJPRklMRSxcbiAgICAgIGZvY3VzZWRXaW5kb3dJZDogdHJ1ZSxcbiAgICAgIG9wZW5Nb2RhbDogZmFsc2UsXG4gICAgfTtcbiAgICBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KFsnYWN0aXZlX3Byb2ZpbGUnLCAnc2V0dGluZ3MnLCAnZm9jdXNlZF93aW5kb3dfaWQnLCAnaW5hY3RpdmVfcG9saWN5J10pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgY29uc3QgcHJvZmlsZSA9IHJlc3VsdC5hY3RpdmVfcHJvZmlsZSB8fCBGT0NVU0VEO1xuICAgICAgY29uc3QgZm9jdXNlZE1vZGUgPSBwcm9maWxlID09PSBGT0NVU0VEO1xuICAgICAgY29uc3QgcmVsYXhlZE1vZGUgPSBwcm9maWxlID09PSBSRUxBWEVEO1xuICAgICAgY29uc3QgY3VzdG9taXplZEJvb2wgPSBwcm9maWxlID09PSBDVVNUT01JWkVEO1xuICAgICAgY29uc3Qgc2V0dGluZ3MgPSByZXN1bHQuc2V0dGluZ3MgfHwgSU5JVF9GT0NVU0VEX1BST0ZJTEU7XG4gICAgICBjb25zdCBmb2N1c2VkV2luZG93SWQgPSByZXN1bHQuZm9jdXNlZF93aW5kb3dfaWQ7XG4gICAgICBjb25zdCBpbmFjdGl2ZVBvbGljeSA9IHJlc3VsdC5pbmFjdGl2ZV9wb2xpY3k7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE1vZGUsXG4gICAgICAgIHJlbGF4ZWRNb2RlLFxuICAgICAgICBjdXN0b21pemVkQm9vbCxcbiAgICAgICAgc2V0dGluZ3MsXG4gICAgICAgIGZvY3VzZWRXaW5kb3dJZCxcbiAgICAgICAgaW5hY3RpdmVQb2xpY3ksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLm9uQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXNTZXR0aW5ncyA9IGNoYW5nZXNbJ3NldHRpbmdzJ107XG4gICAgICBjb25zdCBjaGFuZ2VzUHJvZmlsZSA9IGNoYW5nZXNbJ2FjdGl2ZV9wcm9maWxlJ107XG4gICAgICBjb25zdCBjaGFuZ2VkSW5hY3RpdmVQb2xpY3kgPSBjaGFuZ2VzWydpbmFjdGl2ZV9wb2xpY3knXTtcbiAgICAgIGlmIChjaGFuZ2VzU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2V0dGluZ3M6IGNoYW5nZXNTZXR0aW5nc1snbmV3VmFsdWUnXSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlc1Byb2ZpbGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZm9jdXNlZE1vZGU6IGNoYW5nZXNQcm9maWxlWyduZXdWYWx1ZSddID09PSBGT0NVU0VELFxuICAgICAgICAgIHJlbGF4ZWRNb2RlOiBjaGFuZ2VzUHJvZmlsZVsnbmV3VmFsdWUnXSA9PT0gUkVMQVhFRCxcbiAgICAgICAgICBjdXN0b21pemVkQm9vbDogY2hhbmdlc1Byb2ZpbGVbJ25ld1ZhbHVlJ10gPT09IENVU1RPTUlaRUQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZWRJbmFjdGl2ZVBvbGljeSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5hY3RpdmVQb2xpY3k6IGNoYW5nZWRJbmFjdGl2ZVBvbGljeVsnbmV3VmFsdWUnXSB9KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBicm93c2VyLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKHRoaXMub25DaGFuZ2VkQ2FsbGJhY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgYnJvd3Nlci5zdG9yYWdlLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uQ2hhbmdlZENhbGxiYWNrKTtcbiAgfVxuXG4gIGhhbmRsZUJvb2xDaGFuZ2UoY2hhbmdlVHlwZSkge1xuICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBtZXNzYWdlVHlwZTogJ1NFVFRJTkdTX1BST0ZJTEUnLFxuICAgICAgcHJvZmlsZTogY2hhbmdlVHlwZSxcbiAgICB9KTtcbiAgICBpZiAoY2hhbmdlVHlwZSA9PT0gUkVMQVhFRCB8fCBjaGFuZ2VUeXBlID09PSBGT0NVU0VEKSB7XG4gICAgICB0aGlzLm5vdGlmeVVzZXIodHJ1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5LmluY2x1ZGVzKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKSkge1xuICAgICAgdGhpcy5oYW5kbGVTd2l0Y2goKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTYXZlUGFyYW1ldGVycygpIHtcbiAgICAvLyBUT0RPIEFkZCBmdW5jdGlvbiB0byBjaGVjayBmb3IgYWxsIHBvdGVudGlhbCB2YWx1ZXNcbiAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuICAgIGlmIChjaGVja1NldHRpbmdzKHRoaXMuc3RhdGUuc2V0dGluZ3MpKSB7XG4gICAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ1NFVFRJTkdTX1BBUkFNRVRFUlMnLFxuICAgICAgICBzZXR0aW5nczogdGhpcy5zdGF0ZS5zZXR0aW5ncyxcbiAgICAgIH0pO1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubm90aWZ5VXNlcihzdWNjZXNzKTtcbiAgfVxuXG4gIG5vdGlmeVVzZXIoc3VjY2Vzcykge1xuICAgIHRoaXMucHJvcHMuZW5xdWV1ZVNuYWNrYmFyKHN1Y2Nlc3MgPyAnTmV3IFNldHRpbmdzIGFyZSBzYXZlZC4nIDogJ1NldHRpbmdzIGNhbm5vdCBiZSBzYXZlZC4nLCB7XG4gICAgICB2YXJpYW50OiBzdWNjZXNzID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyxcbiAgICAgIGFuY2hvck9yaWdpbjoge1xuICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXG4gICAgICB9LFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiA3NTAsXG4gICAgICBhdXRvSGlkZUR1cmF0aW9uOiAyMDAwLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlUGFyYW1ldGVycyhwYXRoLCBwYXJhbWV0ZXIpIHtcbiAgICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgICBsZXQgc2V0dGluZ3MgPSBjb3B5KHRoaXMuc3RhdGUuc2V0dGluZ3MpO1xuICAgICAgY29uc3QgbmV4dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKGlzSW50ZWdlcihuZXh0VmFsdWUpIHx8IG5leHRWYWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2V0dGluZ3NbcGF0aF1bcGFyYW1ldGVyXSA9IG5leHRWYWx1ZTsgLy8gZG8gbm90IHBhcnNlSW50IG9yIHRleHRGaWVsZCBnb2VzIGNyYXp5Li4uXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXR0aW5nczogc2V0dGluZ3MgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVN3aXRjaCgpIHtcbiAgICBsZXQgaW5hY3RpdmVQb2xpY3kgPSB0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5O1xuXG4gICAgaWYgKGluYWN0aXZlUG9saWN5LmluY2x1ZGVzKHRoaXMuc3RhdGUuZm9jdXNlZFdpbmRvd0lkKSkge1xuICAgICAgaW5hY3RpdmVQb2xpY3kgPSByZW1vdmVJdGVtKGluYWN0aXZlUG9saWN5LCB0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCk7XG4gICAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ1JFTU9WRV9JTkFDVElWRV9QT0xJQ1knLFxuICAgICAgICB3aW5kb3dJZDogdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5hY3RpdmVQb2xpY3kucHVzaCh0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCk7XG4gICAgICBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlVHlwZTogJ0FERF9JTkFDVElWRV9QT0xJQ1knLFxuICAgICAgICB3aW5kb3dJZDogdGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluYWN0aXZlUG9saWN5OiBpbmFjdGl2ZVBvbGljeSB9KTtcbiAgfVxuXG4gIGhhbmRsZU9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5Nb2RhbDogdHJ1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuTW9kYWw6IGZhbHNlIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnB1dHNQYXJhbWV0ZXJzID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ09wdGltYWwgdGFicyBudW1iZXInLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXG4gICAgICAgIHBhdGg6IFBPTElDWSxcbiAgICAgICAgcGFyYW1ldGVyOiBPUFRJTUFMX05VTUJFUl9UQUJTLFxuICAgICAgICBpbnB1dFByb3BzOiB7IG1pbjogJzEnLCBtYXg6ICcxMDAnLCBzdGVwOiAnMScgfSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBsaXN0SXRlbXNQYXJhbWV0ZXJzID0gaW5wdXRzUGFyYW1ldGVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVBhcmFtZXRlcnMoaXRlbS5wYXRoLCBpdGVtLnBhcmFtZXRlcikuYmluZCh0aGlzKX1cbiAgICAgICAgdmFsdWU9e2l0ZW0uc291cmNlW2l0ZW0ucGF0aF1baXRlbS5wYXJhbWV0ZXJdfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgb25LZXlVcD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleSA9PSAnRW50ZXInKSB0aGlzLmhhbmRsZVNhdmVQYXJhbWV0ZXJzKCk7XG4gICAgICAgIH19XG4gICAgICAgIGlucHV0UHJvcHM9e2l0ZW0uaW5wdXRQcm9wc31cbiAgICAgIC8+XG4gICAgKSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5CbG9ja30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZvY3VzZWRXaW5kb3dJZCAmJiB0aGlzLnN0YXRlLmluYWN0aXZlUG9saWN5XG4gICAgICAgICAgICAgICAgICAgID8gIXRoaXMuc3RhdGUuaW5hY3RpdmVQb2xpY3kuaW5jbHVkZXModGhpcy5zdGF0ZS5mb2N1c2VkV2luZG93SWQpXG4gICAgICAgICAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTd2l0Y2guYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN3aXRjaFdyYXBwZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3dpdGNoQ29udGFpbmVyfVxuICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5FbmFibGUgb24gdGhpcyB3aW5kb3c8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW50cm9kdWN0aW9uQmxvY2t9PlxuICAgICAgICAgICAgPFR1bmVJY29uIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFyYW1ldGVyc1RpdGxlfT5TZWxlY3QgeW91ciBwcm9maWxlPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ3NXcmFwcGVyfT5cbiAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9eyd0YWJieSB0ZW5kcyB0byBrZWVwIDUgdGFicyd9IHBsYWNlbWVudD1cImxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmlyc3RQcm9maWxlc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmZvY3VzZWRNb2RlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUJvb2xDaGFuZ2UuYmluZCh0aGlzLCBGT0NVU0VEKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrYm94V3JhcHBlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+Rm9jdXM8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0Qm9vbGVhbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SGVscE91dGxpbmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWxwSWNvbn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cbiAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9eyd0YWJieSB0ZW5kcyB0byBrZWVwIDEyIHRhYnMnfSBwbGFjZW1lbnQ9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0UHJvZmlsZXNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5yZWxheGVkTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVCb29sQ2hhbmdlLmJpbmQodGhpcywgUkVMQVhFRCl9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveFdyYXBwZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlJlbGF4PC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEhlbHBPdXRsaW5lSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaGVscEljb259IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmN1c3RvbWl6ZVdyYXBwZXJ9PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY3VzdG9taXplZEJvb2x9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUJvb2xDaGFuZ2UuYmluZCh0aGlzLCBDVVNUT01JWkVEKX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tib3hXcmFwcGVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5DdXN0b21pemU8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maXJzdEJvb2xlYW5zfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXR0aW5nc0Jsb2NrfT5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHJlcXVpcmVkIGZ1bGxXaWR0aD5cbiAgICAgICAgICAgICAgICB7bGlzdEl0ZW1zUGFyYW1ldGVyc31cbiAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaWRkZW4ga2V5PVwiaGlkZGVuLXRleHRmaWVsZFwiIGRpc2FibGVkIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXN0b21pemVkQm9vbH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRhcnlCdXR0b259XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlUGFyYW1ldGVycy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU9wZW4uYmluZCh0aGlzKX0gY2xhc3NOYW1lPXtjbGFzc2VzLnRpcHNCdXR0b259PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsVGlwc30+SGVscDwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgLy9kaXNhYmxlUG9ydGFsPXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW5Nb2RhbH1cbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUNsb3NlLmJpbmQodGhpcyl9XG4gICAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cbiAgICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XG4gICAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xuICAgICAgICAgICAgdGltZW91dDogNzUwLFxuICAgICAgICAgICAgaW52aXNpYmxlOiB0cnVlLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8RmFkZSBpbj17dGhpcy5zdGF0ZS5vcGVuTW9kYWx9PlxuICAgICAgICAgICAgPEJveCBib3JkZXJSYWRpdXM9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZpcnN0QmxvY2tNb2RhbH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Vjb25kRW5zZW1ibGV9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PlByb3RlY3QgYSB0YWI8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYXN0RW5zZW1ibGV9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy4uLy4uL2Fzc2V0cy9zdGF0aWMvaWNvbnMvcmlnaHRfY2xpY2sucG5nJ30gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnRDbGlja1dyYXBwZXJ9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9Pis8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHlsZUxhYmVsfT5QaW48L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWNvbmRFbnNlbWJsZX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+UmVvcGVuIG11bHRpcGxlIHRhYnM8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY29uZEVuc2VtYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9PkN0cmw8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWx9Pis8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsnLi4vLi4vYXNzZXRzL3N0YXRpYy9pY29ucy9sZWZ0X2NsaWNrLnBuZyd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0Q2xpY2tXcmFwcGVyfSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3R5bGVMYWJlbH0+SG93IGRvZXMgdGFiYnkgd29yaz88L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxOZXh0fT5cbiAgICAgICAgICAgICAgICB0YWJieSB3aWxsIG5vdCByZW1vdmUgdGFicyByaWdodCBhZnRlciB0aGVpciBjcmVhdGlvbi57JyAnfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxOZXh0fT5cbiAgICAgICAgICAgICAgICB0YWJieSB0YWtlcyB3ZWxsLXRob3VnaHQtb3V0IGRlY2lzaW9ucyBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyTW9kYWx9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3RhYmJ5LnVzL2ZhcVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxUaXBzfT5GQVEgYXZhaWxhYmxlIGhlcmU8L1R5cG9ncmFwaHk+eycgJ31cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0eWxlTGFiZWxUaXBzfT5cbiAgICAgICAgICAgICAgICAgIHRhYmJ5IHticm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS52ZXJzaW9ufVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT57JyAnfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNuYWNrYmFyKFNldHRpbmdzKTtcbiIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9TZXR0aW5ncyc7XG5cbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcbiAgc2V0dGluZ3NXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgbWFyZ2luVG9wOiA1LFxuICAgIG1hcmdpbkxlZnQ6IDQ3LFxuICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgfSxcbiAgc2Vjb25kYXJ5QnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiAxOCxcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EnLFxuXG4gICAgbWF4V2lkdGg6IDIwLFxuICB9LFxuXG4gIG5vdGlmaWNhdGlvbjoge1xuICAgIG1heFdpZHRoOiAxNTAsXG4gIH0sXG4gIGludHJvZHVjdGlvbkJsb2NrOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIG1hcmdpbkxlZnQ6IDcsXG4gIH0sXG4gIHBhcmFtZXRlcnNUaXRsZToge1xuICAgIC8vZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNyxcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBtYXJnaW5MZWZ0OiAxNixcbiAgfSxcbiAgc2V0dGluZ3NCbG9jazoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1hcmdpbkxlZnQ6IDMyLFxuICAgIG1hcmdpblRvcDogNCxcbiAgfSxcbiAgZmlyc3RCb29sZWFuczoge1xuICAgIG1heFdpZHRoOiAnMzYlJyxcbiAgICBtaW5XaWR0aDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICBtYXhIZWlnaHQ6IDIwLFxuICAgIG1hcmdpblRvcDogNSxcbiAgICAvLyBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gIH0sXG4gIGZpcnN0UHJvZmlsZXNDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzdGFydCcsXG4gICAgbWF4V2lkdGg6IHRoZW1lLnNwYWNpbmcoMTApLFxuICB9LFxuXG4gIHN0eWxlTGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYScsXG4gIH0sXG4gIGNoZWNrYm94V3JhcHBlcjoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgfSxcbiAgc3dpdGNoQ29udGFpbmVyOiB7XG4gICAgbWF4SGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgfSxcbiAgc3dpdGNoV3JhcHBlcjoge1xuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWF4V2lkdGg6ICc4NSUnLFxuICB9LFxuICBjdXN0b21pemVXcmFwcGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3RhcnQnLFxuICAgIGFsaWduSXRlbXM6ICdzdGFydCcsXG4gIH0sXG4gIGhlbHBJY29uOiB7XG4gICAgY29sb3I6ICcjZTU1YzAwJyxcbiAgICBmb250U2l6ZTogMTMsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDAuMjUpLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTUwLCAxNTAsIDE1MCwgMC40KScsXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcbiAgfSxcbiAgbWFpbkJsb2NrOiB7XG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB9LFxuICBwYXBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIC8vYm9yZGVyOiAnMC41cHggc29saWQgIzVBNUE1QScsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCA0LCAzKSxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxuXG4gICAgb3BhY2l0eTogJzEgIWltcG9ydGFudCcsXG4gIH0sXG4gIGJveEN0cmw6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzVBNUE1QScsXG4gICAgaGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDIuNSksXG4gICAgLy9wYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDQsIDMpLFxuICAgIC8vbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcbiAgICAvL21hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxuXG4gICAgb3BhY2l0eTogJzEgIWltcG9ydGFudCcsXG4gIH0sXG4gIGxlZnRDbGlja1dyYXBwZXI6IHtcbiAgICBoZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG4gIHNlY29uZEVuc2VtYmxlOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWluV2lkdGg6ICczMCUnLFxuICB9LFxuICBsYXN0RW5zZW1ibGU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBtaW5XaWR0aDogJzI3LjUlJyxcbiAgfSxcbiAgZmlyc3RCbG9ja01vZGFsOiB7XG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICB0aXBzQnV0dG9uOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygwKSxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcGFkZGluZ0xlZnQ6IDAsXG4gICAgcGFkZGluZ1JpZ2h0OiAwLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWFyZ2luUmlnaHQ6IDAsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzdHlsZUxhYmVsVGlwczoge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBjb2xvcjogJ3JnYmEoMTUwLCAxNTAsIDE1MCwgMSknLFxuICB9LFxuICBzdHlsZUxhYmVsTmV4dDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhJyxcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygwLjUpLFxuICB9LFxuICBmb290ZXJNb2RhbDoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxLjUpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIC8vIG1pbldpZHRoOiAnMTAwJScsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShTZXR0aW5ncyk7XG4iLCJleHBvcnQgY29uc3QgT1BUSU1BTF9OVU1CRVJfVEFCUyA9ICd0YXJnZXRfdGFicyc7XG5leHBvcnQgY29uc3QgUE9MSUNZID0gJ3BvbGljeSc7XG5leHBvcnQgY29uc3QgSU5BQ1RJVkVfUE9MSUNZID0gJ2luYWN0aXZlX3BvbGljeSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1NldHRpbmdzKHNldHRpbmdzKSB7XG4gIGlmIChzZXR0aW5nc1tQT0xJQ1ldW09QVElNQUxfTlVNQkVSX1RBQlNdICYmIHNldHRpbmdzW1BPTElDWV1bT1BUSU1BTF9OVU1CRVJfVEFCU10gPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhYm9vdHN0cmFwLWNzcy1vbmx5L2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjEpO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxYjllNzQ7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uYm9sZC10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbjpmb2N1cyB7b3V0bGluZTowICFpbXBvcnRhbnQ7fVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInRrLWNocm9tZTpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5KSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAoZXZlbnQpID0+IHtcblx0XHRvblNjcmlwdENvbXBsZXRlID0gKCkgPT4ge1xuXG5cdFx0fVxuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiBmbihldmVudCkpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KVxuXHR9LCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicG9wdXBcIjogMFxufTtcblxudmFyIGRlZmVycmVkTW9kdWxlcyA9IFtcblx0W1wiLi9zcmMvYXBwL3BvcHVwLmpzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19wc2xfaW5kZXhfanMtbm9kZV9tb2R1bGVzX3dlYmV4dGVuc2lvbi1wb2x5ZmlsbF9kaXN0X2Jyb3dzZXItcG9seWZpbGxfanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfVHlwb2dyYXBoeV9UeXBvZ3JhcGh5X2pzLW5vZGVfbW9kdWxlc19tYXRlcmlhbC11aV9jb3JlXy1jMDYzNjJcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfZXNtX0F2YXRhcl9BdmF0YXJfanMtbm9kZV9tb2R1bGVzX21hdGVyaWFsLXVpX2NvcmVfZXNtXy03ODhlZmJcIixcInNyY19jb25maWdfc2V0dGluZ3NQcm9maWxlc19qcy1zcmNfY29uZmlnX3dlYnNpdGVzX2pzLXNyY19zZXJ2aWNlc191dGlsc19qc1wiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9ICgpID0+IHtcblxufTtcbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdH1cblx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG5mdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cdHZhciBydW50aW1lID0gZGF0YVszXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufTtcblxudmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnB0a19jaHJvbWVcIl0gfHwgW107XG52YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuanNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG52YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=