"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/layout",{

/***/ "(app-pages-browser)/./src/components/sidebar.tsx":
/*!************************************!*\
  !*** ./src/components/sidebar.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_components_sidebar_tsx_import_Montserrat_arguments_weight_600_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/components/sidebar.tsx\",\"import\":\"Montserrat\",\"arguments\":[{\"weight\":\"600\",\"subsets\":[\"latin\"]}],\"variableName\":\"montserrat\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/components/sidebar.tsx\\\",\\\"import\\\":\\\"Montserrat\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"600\\\",\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"montserrat\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_components_sidebar_tsx_import_Montserrat_arguments_weight_600_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_components_sidebar_tsx_import_Montserrat_arguments_weight_600_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_ImageIcon_LayoutDashboard_MessagesSquare_Music_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ImageIcon,LayoutDashboard,MessagesSquare,Music,VideoIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/layout-dashboard.js\");\n/* harmony import */ var _barrel_optimize_names_ImageIcon_LayoutDashboard_MessagesSquare_Music_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ImageIcon,LayoutDashboard,MessagesSquare,Music,VideoIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/messages-square.js\");\n/* harmony import */ var _barrel_optimize_names_ImageIcon_LayoutDashboard_MessagesSquare_Music_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ImageIcon,LayoutDashboard,MessagesSquare,Music,VideoIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/image.js\");\n/* harmony import */ var _barrel_optimize_names_ImageIcon_LayoutDashboard_MessagesSquare_Music_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ImageIcon,LayoutDashboard,MessagesSquare,Music,VideoIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/video.js\");\n/* harmony import */ var _barrel_optimize_names_ImageIcon_LayoutDashboard_MessagesSquare_Music_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ImageIcon,LayoutDashboard,MessagesSquare,Music,VideoIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/music.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst routes = [\n    {\n        label: \"Dashboard\",\n        icon: _barrel_optimize_names_ImageIcon_LayoutDashboard_MessagesSquare_Music_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        href: \"/dashboard\",\n        color: \"text-sky-500\"\n    },\n    {\n        label: \"Conversation\",\n        icon: _barrel_optimize_names_ImageIcon_LayoutDashboard_MessagesSquare_Music_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        href: \"/dashboard\",\n        color: \"text-violet-500\"\n    },\n    {\n        label: \"Image Generation\",\n        icon: _barrel_optimize_names_ImageIcon_LayoutDashboard_MessagesSquare_Music_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        href: \"/dashboard\",\n        color: \"text-pink-700\"\n    },\n    {\n        label: \"Video Generation\",\n        icon: _barrel_optimize_names_ImageIcon_LayoutDashboard_MessagesSquare_Music_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        href: \"/dashboard\",\n        color: \"text-orange-700\"\n    },\n    {\n        label: \"Music Generation\",\n        icon: _barrel_optimize_names_ImageIcon_LayoutDashboard_MessagesSquare_Music_VideoIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        href: \"/dashboard\",\n        color: \"text-emerald-500\"\n    }\n];\nconst Sidebar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-3 py-2 flex-1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/dashboard\",\n                    className: \"flex items-center pl-3 mb-14\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-8 h-8 mr-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                fill: true,\n                                alt: \"Logo\",\n                                src: \"/logo.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taeyeon/Documents/platform-project/client/src/components/sidebar.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/taeyeon/Documents/platform-project/client/src/components/sidebar.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(\"text-2xl font-bold\", (next_font_google_target_css_path_src_components_sidebar_tsx_import_Montserrat_arguments_weight_600_subsets_latin_variableName_montserrat___WEBPACK_IMPORTED_MODULE_9___default().className)),\n                            children: \"Genius\"\n                        }, void 0, false, {\n                            fileName: \"/Users/taeyeon/Documents/platform-project/client/src/components/sidebar.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/taeyeon/Documents/platform-project/client/src/components/sidebar.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-1\",\n                    children: routes.map((route)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: route.href,\n                            className: \"text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center flex-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(route.icon, {\n                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(\"h-5 w-5 mr-3\", route.color)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/taeyeon/Documents/platform-project/client/src/components/sidebar.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    route.label\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/taeyeon/Documents/platform-project/client/src/components/sidebar.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, undefined)\n                        }, route.href, false, {\n                            fileName: \"/Users/taeyeon/Documents/platform-project/client/src/components/sidebar.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/taeyeon/Documents/platform-project/client/src/components/sidebar.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/taeyeon/Documents/platform-project/client/src/components/sidebar.tsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/taeyeon/Documents/platform-project/client/src/components/sidebar.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWNNQTtBQVp1QjtBQUNFO0FBUVQ7QUFDZTtBQU9yQyxNQUFNUyxTQUFTO0lBQ2I7UUFDRUMsT0FBTztRQUNQQyxNQUFNUCxvSUFBZUE7UUFDckJRLE1BQU07UUFDTkMsT0FBTztJQUNUO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxNQUFNTixvSUFBY0E7UUFDcEJPLE1BQU07UUFDTkMsT0FBTztJQUNUO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxNQUFNUixvSUFBU0E7UUFDZlMsTUFBTTtRQUNOQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLE1BQU1MLG9JQUFTQTtRQUNmTSxNQUFNO1FBQ05DLE9BQU87SUFDVDtJQUNBO1FBQ0VILE9BQU87UUFDUEMsTUFBTUosb0lBQUtBO1FBQ1hLLE1BQU07UUFDTkMsT0FBTztJQUNUO0NBQ0Q7QUFFRCxNQUFNQyxVQUFVO0lBQ2QscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVc7a0JBRVgsNEVBQUNEO1lBQUlDLFdBQVc7OzhCQUNkLDhEQUFDZixrREFBSUE7b0JBQUNXLE1BQU07b0JBQWNJLFdBQVc7O3NDQUNuQyw4REFBQ0Q7NEJBQUlDLFdBQVc7c0NBQ2QsNEVBQUNkLG1EQUFLQTtnQ0FBQ2UsSUFBSTtnQ0FBQ0MsS0FBSztnQ0FBUUMsS0FBSzs7Ozs7Ozs7Ozs7c0NBRWhDLDhEQUFDQzs0QkFBR0osV0FBV1IsOENBQUVBLENBQUMsc0JBQXNCUiw0TEFBb0I7c0NBQUc7Ozs7Ozs7Ozs7Ozs4QkFJakUsOERBQUNlO29CQUFJQyxXQUFXOzhCQUNiUCxPQUFPWSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNyQixrREFBSUE7NEJBQ0hXLE1BQU1VLE1BQU1WLElBQUk7NEJBRWhCSSxXQUNFO3NDQUdGLDRFQUFDRDtnQ0FBSUMsV0FBVzs7a0RBQ2QsOERBQUNNLE1BQU1YLElBQUk7d0NBQUNLLFdBQVdSLDhDQUFFQSxDQUFDLGdCQUFnQmMsTUFBTVQsS0FBSzs7Ozs7O29DQUNwRFMsTUFBTVosS0FBSzs7Ozs7OzsyQkFQVFksTUFBTVYsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZTdCO0tBakNNRTtBQW1DTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyLnRzeD81OGVmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IE1vbnRzZXJyYXQgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJztcbmltcG9ydCB7XG4gIEltYWdlSWNvbixcbiAgTGF5b3V0RGFzaGJvYXJkLFxuICBNZXNzYWdlc1NxdWFyZSxcbiAgVmlkZW9JY29uLFxuICBNdXNpYyxcbn0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IGNuIH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzJztcblxuY29uc3QgbW9udHNlcnJhdCA9IE1vbnRzZXJyYXQoe1xuICB3ZWlnaHQ6ICc2MDAnLFxuICBzdWJzZXRzOiBbJ2xhdGluJ10sXG59KTtcblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgbGFiZWw6ICdEYXNoYm9hcmQnLFxuICAgIGljb246IExheW91dERhc2hib2FyZCxcbiAgICBocmVmOiAnL2Rhc2hib2FyZCcsXG4gICAgY29sb3I6ICd0ZXh0LXNreS01MDAnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdDb252ZXJzYXRpb24nLFxuICAgIGljb246IE1lc3NhZ2VzU3F1YXJlLFxuICAgIGhyZWY6ICcvZGFzaGJvYXJkJyxcbiAgICBjb2xvcjogJ3RleHQtdmlvbGV0LTUwMCcsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0ltYWdlIEdlbmVyYXRpb24nLFxuICAgIGljb246IEltYWdlSWNvbixcbiAgICBocmVmOiAnL2Rhc2hib2FyZCcsXG4gICAgY29sb3I6ICd0ZXh0LXBpbmstNzAwJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnVmlkZW8gR2VuZXJhdGlvbicsXG4gICAgaWNvbjogVmlkZW9JY29uLFxuICAgIGhyZWY6ICcvZGFzaGJvYXJkJyxcbiAgICBjb2xvcjogJ3RleHQtb3JhbmdlLTcwMCcsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ011c2ljIEdlbmVyYXRpb24nLFxuICAgIGljb246IE11c2ljLFxuICAgIGhyZWY6ICcvZGFzaGJvYXJkJyxcbiAgICBjb2xvcjogJ3RleHQtZW1lcmFsZC01MDAnLFxuICB9LFxuXTtcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9eydzcGFjZS15LTQgcHktNCBmbGV4IGZsZXgtY29sIGgtZnVsbCBiZy1bIzExMTgyN10gdGV4dC13aGl0ZSd9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9eydweC0zIHB5LTIgZmxleC0xJ30+XG4gICAgICAgIDxMaW5rIGhyZWY9eycvZGFzaGJvYXJkJ30gY2xhc3NOYW1lPXsnZmxleCBpdGVtcy1jZW50ZXIgcGwtMyBtYi0xNCd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncmVsYXRpdmUgdy04IGgtOCBtci00J30+XG4gICAgICAgICAgICA8SW1hZ2UgZmlsbCBhbHQ9eydMb2dvJ30gc3JjPXsnL2xvZ28ucG5nJ30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbigndGV4dC0yeGwgZm9udC1ib2xkJywgbW9udHNlcnJhdC5jbGFzc05hbWUpfT5cbiAgICAgICAgICAgIEdlbml1c1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzcGFjZS15LTEnfT5cbiAgICAgICAgICB7cm91dGVzLm1hcCgocm91dGUpID0+IChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e3JvdXRlLmhyZWZ9XG4gICAgICAgICAgICAgIGtleT17cm91dGUuaHJlZn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAndGV4dC1zbSBncm91cCBmbGV4IHAtMyB3LWZ1bGwganVzdGlmeS1zdGFydCBmb250LW1lZGl1bSBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlLzEwIHJvdW5kZWQtbGcgdHJhbnNpdGlvbidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggaXRlbXMtY2VudGVyIGZsZXgtMSd9PlxuICAgICAgICAgICAgICAgIDxyb3V0ZS5pY29uIGNsYXNzTmFtZT17Y24oJ2gtNSB3LTUgbXItMycsIHJvdXRlLmNvbG9yKX0gLz5cbiAgICAgICAgICAgICAgICB7cm91dGUubGFiZWx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJtb250c2VycmF0IiwiTGluayIsIkltYWdlIiwiSW1hZ2VJY29uIiwiTGF5b3V0RGFzaGJvYXJkIiwiTWVzc2FnZXNTcXVhcmUiLCJWaWRlb0ljb24iLCJNdXNpYyIsImNuIiwicm91dGVzIiwibGFiZWwiLCJpY29uIiwiaHJlZiIsImNvbG9yIiwiU2lkZWJhciIsImRpdiIsImNsYXNzTmFtZSIsImZpbGwiLCJhbHQiLCJzcmMiLCJoMSIsIm1hcCIsInJvdXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/sidebar.tsx\n"));

/***/ })

});