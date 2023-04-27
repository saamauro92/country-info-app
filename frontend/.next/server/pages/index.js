"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CountryInfo_CountryGeneral)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./utils/utils.js
const formatList = (list, separator = ", ")=>Object.values(list).map((item)=>item.name || item).join(separator);

;// CONCATENATED MODULE: ./components/CountryInfo/CountryInfoWidget.js

const CountryInfoWidget = ({ title , answer  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center justify-center rounded-[10px] shadow-lg p-4  space-y-1 text-center flex-grow",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "font-bold text-xl text-gray-700 ",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xl text-gray-500 ",
                children: answer
            })
        ]
    });
};
/* harmony default export */ const CountryInfo_CountryInfoWidget = (CountryInfoWidget);

;// CONCATENATED MODULE: ./components/CountryInfo/CountryInfoText.js

const CountryInfoText = ({ title , answer  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "border-b-[1px] p-4 w-fulll flex-wrap flex justify-between hover:bg-slate-100 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "font-bold text-md text-gray-700 ",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-md text-gray-500 ",
                children: answer
            })
        ]
    });
};
/* harmony default export */ const CountryInfo_CountryInfoText = (CountryInfoText);

;// CONCATENATED MODULE: external "react-number-format"
const external_react_number_format_namespaceObject = require("react-number-format");
;// CONCATENATED MODULE: ./components/CountryInfo/CountryGeneral.js





const CountryGeneral = ({ data  })=>{
    const { name , capital , continents , population , languages , timezones , currencies , flags  } = data;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col flex-wrap justify-center md:px-20 ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "text-2xl font-medium",
                    children: " General Information"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-wrap justify-center gap-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(CountryInfo_CountryInfoWidget, {
                            title: "Official Name",
                            answer: name.official
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CountryInfo_CountryInfoWidget, {
                            title: "Capital",
                            answer: capital
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CountryInfo_CountryInfoWidget, {
                            title: "Population",
                            answer: /*#__PURE__*/ jsx_runtime_.jsx(external_react_number_format_namespaceObject.NumericFormat, {
                                value: population,
                                allowLeadingZeros: true,
                                thousandSeparator: ",",
                                displayType: "text"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: flags.png,
                            alt: flags.alt,
                            className: "h-36"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "my-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(CountryInfo_CountryInfoText, {
                            title: "Languages",
                            answer: formatList(languages)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CountryInfo_CountryInfoText, {
                            title: "Continents",
                            answer: continents.join(", ")
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CountryInfo_CountryInfoText, {
                            title: "Currencies",
                            answer: formatList(currencies)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(CountryInfo_CountryInfoText, {
                            title: "Timezone",
                            answer: timezones.join(", ")
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const CountryInfo_CountryGeneral = (CountryGeneral);


/***/ }),

/***/ 7069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CountryInfo_CountryMap)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@react-google-maps/api"
const api_namespaceObject = require("@react-google-maps/api");
;// CONCATENATED MODULE: ./components/CountryInfo/CountryMap.js



const CountryMap = (latlng)=>{
    const { isLoaded  } = (0,api_namespaceObject.useJsApiLoader)({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyCFuqhOZtdfFAcymnRV2U7CGYcjZYD9Yd0"
    });
    const coords = {
        lat: latlng.data[0],
        lng: latlng.data[1]
    };
    const zoom = 4;
    return isLoaded ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col flex-wrap gap-5  justify-center md:px-20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-2xl font-medium",
                children: " Google Map"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(api_namespaceObject.GoogleMap, {
                zoom: zoom,
                center: coords,
                mapContainerClassName: "map-container",
                options: {
                    gestureHandling: "greedy"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
            })
        ]
    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: "Sorry Map Not Available"
    });
};
/* harmony default export */ const CountryInfo_CountryMap = (CountryMap);


/***/ }),

/***/ 4704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CountryTranslations = (data)=>{
    const { translations  } = data;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col flex-wrap  justify-center md:px-20  ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-2xl font-medium",
                children: " Translations"
            }),
            translations && Object.entries(translations).map(([key, value])=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col sm:flex-row justify-between border-b-[1px] py-4  hover:bg-slate-100",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-medium text-gray-700",
                            children: key
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-gray-500",
                            children: [
                                " ",
                                value.official
                            ]
                        })
                    ]
                }, key))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountryTranslations);


/***/ }),

/***/ 58:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _CountryTranslations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4704);
/* harmony import */ var _CountryGeneral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4041);
/* harmony import */ var _CountryMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const CountryInfo = ({ data  })=>{
    let TabCategories = [
        "General",
        "Map",
        "Translations"
    ];
    const { translations , latlng  } = data;
    if (data) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full  px-2 pb-16 sm:px-0 flex gap-10 flex-wrap md:flex-nowrap  ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Group, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.List, {
                    className: "flex space-x-1 min-w-[300px] rounded-xl  p-1 flex-col ",
                    children: TabCategories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab, {
                            className: ({ selected  })=>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 text-start pl-2", selected ? "bg-slate-300 shadow" : "text-blue-100 hover:bg-white/[0.12] hover:text-slate-300"),
                            children: category
                        }, category))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Panels, {
                    className: "w-full ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Panel, {
                            className: "flex-grow",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CountryGeneral__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                data: data
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Panel, {
                            className: "w-full ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CountryMap__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                data: latlng
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Panel, {
                            className: "w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CountryTranslations__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                translations: translations
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountryInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const DisplayMessage = ({ displayMessage  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-xl flex justify-center pt-5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            className: "",
            children: displayMessage
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayMessage);


/***/ }),

/***/ 5415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Loading = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex justify-center  p-[10%]",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCircleNotch,
                className: "text-8xl animate-spin text-gray-600"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5880:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Search = ({ handleSubmit , handleInputChange , searchInput  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "flex",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                value: searchInput,
                onChange: (e)=>handleInputChange(e),
                className: "px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring  border-[1px]",
                placeholder: "Search country",
                required: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                className: "bg-blue-500 hover:bg-blue-600 rounded-r-lg px-4 py-2 text-white border-2 border-blue-600",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSearch
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2333:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5880);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Search__WEBPACK_IMPORTED_MODULE_1__]);
_Search__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Layout = ({ children , handleSubmit , handleInputChange , searchInput  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex h-screen overflow-hidden tracking-wide  ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col flex-1 overflow-hidden ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                    className: "flex-shrink-0  border-b md:pr-20 md:pl-3 bg-gradient-to-r from-purple-300 to-indigo-400",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between px-4 py-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                className: "font-bold text-lg hidden sm:block text-white uppercase",
                                children: "Countries info"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Search__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                handleSubmit: handleSubmit,
                                handleInputChange: handleInputChange,
                                searchInput: searchInput
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                    className: "flex-1 overflow-y-auto p-1 sm:p-6 ",
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DisplayMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5032);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5415);
/* harmony import */ var _components_CountryInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2333);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _components_Loading__WEBPACK_IMPORTED_MODULE_4__, _components_CountryInfo__WEBPACK_IMPORTED_MODULE_5__, _components_App_Layout__WEBPACK_IMPORTED_MODULE_6__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _components_Loading__WEBPACK_IMPORTED_MODULE_4__, _components_CountryInfo__WEBPACK_IMPORTED_MODULE_5__, _components_App_Layout__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Home() {
    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [countryData, setCountryData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [displayMessage, setDisplayMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const handleInputChange = (e)=>{
        setSearchInput(e.target.value);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${"http://localhost:8080"}/country/${searchInput}`);
            if (response.data.status === 200) {
                const { data  } = response.data;
                setCountryData(data);
                setDisplayMessage("");
                setIsLoading(false);
            } else if (response.data.status !== 200) {
                setIsLoading(false);
                setCountryData(null);
                setDisplayMessage(`${response.data.error}`);
            }
        } catch (error) {
            setIsLoading(false);
            setCountryData(null);
            setDisplayMessage("Sorry something went wrong");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_App_Layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        handleSubmit: handleSubmit,
        handleInputChange: handleInputChange,
        searchInput: searchInput,
        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}) : countryData ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CountryInfo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            data: countryData
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DisplayMessage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            displayMessage: displayMessage
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(6616)));
module.exports = __webpack_exports__;

})();