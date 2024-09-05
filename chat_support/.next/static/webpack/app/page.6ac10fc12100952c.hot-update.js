"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Button,Stack,TextField,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Button,Stack,TextField,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Button,Stack,TextField,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Toolbar/Toolbar.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Button,Stack,TextField,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Button,Stack,TextField,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Button,Stack,TextField,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Box,Button,Stack,TextField,Toolbar,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var franc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! franc */ \"(app-pages-browser)/./node_modules/franc/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            role: \"assistant\",\n            content: \"Hi, I am a mental health assistant. How can I be of service today?\"\n        }\n    ]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //detecting langauge from user input\n    const detectLanguage = (text)=>{\n        const langCode = (0,franc__WEBPACK_IMPORTED_MODULE_2__.franc)(text);\n        setLanguage(langCode);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (messages.length > 0) {\n            detectLanguage(messages.map((msg)=>msg.content).join(\" \"));\n        }\n    }, [\n        messages\n    ]);\n    const sendMessage = async ()=>{\n        if (!message.trim() || isLoading) return;\n        setIsLoading(true);\n        setMessage(\"\");\n        setMessages((messages)=>[\n                ...messages,\n                {\n                    role: \"user\",\n                    content: message\n                },\n                {\n                    role: \"assistant\",\n                    content: \"\"\n                }\n            ]);\n        try {\n            const response = await fetch(\"/api/chat\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify([\n                    ...messages,\n                    {\n                        role: \"user\",\n                        content: message\n                    }\n                ])\n            });\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const reader = response.body.getReader();\n            const decoder = new TextDecoder();\n            while(true){\n                const { done, value } = await reader.read();\n                if (done) break;\n                const text = decoder.decode(value, {\n                    stream: true\n                });\n                setMessages((messages)=>{\n                    let lastMessage = messages[messages.length - 1];\n                    let otherMessages = messages.slice(0, messages.length - 1);\n                    return [\n                        ...otherMessages,\n                        {\n                            ...lastMessage,\n                            content: lastMessage.content + text\n                        }\n                    ];\n                });\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n            setMessages((messages)=>[\n                    ...messages,\n                    {\n                        role: \"assistant\",\n                        content: \"I'm sorry, but I encountered an error. Please try again later.\"\n                    }\n                ]);\n        }\n        setIsLoading(false);\n    };\n    const handleKeyPress = (event)=>{\n        if (event.key === \"Enter\" && !event.shiftKey) {\n            event.preventDefault();\n            sendMessage();\n        }\n    };\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const scrollToBottom = ()=>{\n        var _messagesEndRef_current;\n        (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottom();\n    }, [\n        messages\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        width: \"100vw\",\n        height: \"100vh\",\n        display: \"flex\",\n        margin: \"0\",\n        padding: \"0\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                position: \"fixed\",\n                sx: {\n                    backgroundColor: \"#96d7c6\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    style: {\n                        justifyContent: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            variant: \"h4\",\n                            sx: {\n                                color: \"#6c8cbf\",\n                                fontFamily: \"Lucida Console, monospace\",\n                                fontWeight: \"bold\"\n                            },\n                            padding: 3,\n                            children: \"Mpox Help\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lisasinn/Library/CloudStorage/OneDrive-Personal/HEADSTARTER/Week7/Mpox_Chatbot/chat_support/app/page.js\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this),\n                        \" //changed the title to Mpox Help\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lisasinn/Library/CloudStorage/OneDrive-Personal/HEADSTARTER/Week7/Mpox_Chatbot/chat_support/app/page.js\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lisasinn/Library/CloudStorage/OneDrive-Personal/HEADSTARTER/Week7/Mpox_Chatbot/chat_support/app/page.js\",\n                lineNumber: 105,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                direction: \"column\",\n                width: \"500px\",\n                height: \"700px\",\n                border: \"1px solid black\",\n                p: 2,\n                spacing: 3,\n                mt: 13,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        direction: \"column\",\n                        spacing: 2,\n                        flexGrow: 1,\n                        overflow: \"auto\",\n                        maxHeight: \"100%\",\n                        children: [\n                            messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    display: \"flex\",\n                                    justifyContent: message.role === \"assistant\" ? \"flex-start\" : \"flex-end\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        bgcolor: message.role === \"assistant\" ? \"#96d7c6\" : \"#6c8cbf\",\n                                        color: \"white\",\n                                        borderRadius: 16,\n                                        p: 3,\n                                        maxWidth: \"80%\",\n                                        children: message.content\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lisasinn/Library/CloudStorage/OneDrive-Personal/HEADSTARTER/Week7/Mpox_Chatbot/chat_support/app/page.js\",\n                                        lineNumber: 138,\n                                        columnNumber: 15\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"/Users/lisasinn/Library/CloudStorage/OneDrive-Personal/HEADSTARTER/Week7/Mpox_Chatbot/chat_support/app/page.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                ref: messagesEndRef\n                            }, void 0, false, {\n                                fileName: \"/Users/lisasinn/Library/CloudStorage/OneDrive-Personal/HEADSTARTER/Week7/Mpox_Chatbot/chat_support/app/page.js\",\n                                lineNumber: 154,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lisasinn/Library/CloudStorage/OneDrive-Personal/HEADSTARTER/Week7/Mpox_Chatbot/chat_support/app/page.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        direction: \"row\",\n                        spacing: 2,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                label: \"Message\",\n                                fullWidth: true,\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                onKeyPress: handleKeyPress,\n                                disabled: isLoading,\n                                autoComplete: \"off\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lisasinn/Library/CloudStorage/OneDrive-Personal/HEADSTARTER/Week7/Mpox_Chatbot/chat_support/app/page.js\",\n                                lineNumber: 157,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Box_Button_Stack_TextField_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                variant: \"contained\",\n                                style: {\n                                    backgroundColor: \"#96d7c6\",\n                                    color: \"white\"\n                                },\n                                onClick: sendMessage,\n                                disabled: isLoading,\n                                children: isLoading ? \"Sending...\" : \"Send\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lisasinn/Library/CloudStorage/OneDrive-Personal/HEADSTARTER/Week7/Mpox_Chatbot/chat_support/app/page.js\",\n                                lineNumber: 166,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lisasinn/Library/CloudStorage/OneDrive-Personal/HEADSTARTER/Week7/Mpox_Chatbot/chat_support/app/page.js\",\n                        lineNumber: 156,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lisasinn/Library/CloudStorage/OneDrive-Personal/HEADSTARTER/Week7/Mpox_Chatbot/chat_support/app/page.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lisasinn/Library/CloudStorage/OneDrive-Personal/HEADSTARTER/Week7/Mpox_Chatbot/chat_support/app/page.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MEGNMqn+XxW8APgtHZKlDJCb9kQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzJGO0FBQ3ZDO0FBQ3hCO0FBRWIsU0FBU1c7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztRQUN2QztZQUFFTyxNQUFNO1lBQWFDLFNBQVM7UUFBcUU7S0FDcEc7SUFDRCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2EsV0FBV0MsYUFBYSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUU3QyxvQ0FBb0M7SUFDcEMsTUFBTWUsaUJBQWlCLENBQUNDO1FBQ3RCLE1BQU1DLFdBQVdkLDRDQUFLQSxDQUFDYTtRQUN2QkosWUFBWUs7SUFDZDtJQUVBZixnREFBU0EsQ0FBQztRQUNSLElBQUlHLFNBQVNhLE1BQU0sR0FBRyxHQUFHO1lBQ3ZCSCxlQUFlVixTQUFTYyxHQUFHLENBQUNDLENBQUFBLE1BQU9BLElBQUlaLE9BQU8sRUFBRWEsSUFBSSxDQUFDO1FBQ3ZEO0lBQ0YsR0FBRztRQUFDaEI7S0FBUztJQUViLE1BQU1pQixjQUFjO1FBQ2xCLElBQUksQ0FBQ2IsUUFBUWMsSUFBSSxNQUFNVixXQUFXO1FBQ2xDQyxhQUFhO1FBRWJKLFdBQVc7UUFDWEosWUFBWSxDQUFDRCxXQUFhO21CQUNyQkE7Z0JBQ0g7b0JBQUVFLE1BQU07b0JBQVFDLFNBQVNDO2dCQUFRO2dCQUNqQztvQkFBRUYsTUFBTTtvQkFBYUMsU0FBUztnQkFBRzthQUNsQztRQUVELElBQUk7WUFDRixNQUFNZ0IsV0FBVyxNQUFNQyxNQUFNLGFBQWE7Z0JBQ3hDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt1QkFBSXpCO29CQUFVO3dCQUFFRSxNQUFNO3dCQUFRQyxTQUFTQztvQkFBUTtpQkFBRTtZQUN4RTtZQUVBLElBQUksQ0FBQ2UsU0FBU08sRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFFQSxNQUFNQyxTQUFTVCxTQUFTSSxJQUFJLENBQUNNLFNBQVM7WUFDdEMsTUFBTUMsVUFBVSxJQUFJQztZQUVwQixNQUFPLEtBQU07Z0JBQ1gsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1MLE9BQU9NLElBQUk7Z0JBQ3pDLElBQUlGLE1BQU07Z0JBQ1YsTUFBTXJCLE9BQU9tQixRQUFRSyxNQUFNLENBQUNGLE9BQU87b0JBQUVHLFFBQVE7Z0JBQUs7Z0JBQ2xEbkMsWUFBWSxDQUFDRDtvQkFDWCxJQUFJcUMsY0FBY3JDLFFBQVEsQ0FBQ0EsU0FBU2EsTUFBTSxHQUFHLEVBQUU7b0JBQy9DLElBQUl5QixnQkFBZ0J0QyxTQUFTdUMsS0FBSyxDQUFDLEdBQUd2QyxTQUFTYSxNQUFNLEdBQUc7b0JBQ3hELE9BQU87MkJBQ0Z5Qjt3QkFDSDs0QkFBRSxHQUFHRCxXQUFXOzRCQUFFbEMsU0FBU2tDLFlBQVlsQyxPQUFPLEdBQUdRO3dCQUFLO3FCQUN2RDtnQkFDSDtZQUNGO1FBQ0YsRUFBRSxPQUFPNkIsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsVUFBVUE7WUFDeEJ2QyxZQUFZLENBQUNELFdBQWE7dUJBQ3JCQTtvQkFDSDt3QkFBRUUsTUFBTTt3QkFBYUMsU0FBUztvQkFBaUU7aUJBQ2hHO1FBQ0g7UUFDQU0sYUFBYTtJQUNmO0lBRUEsTUFBTWlDLGlCQUFpQixDQUFDQztRQUN0QixJQUFJQSxNQUFNQyxHQUFHLEtBQUssV0FBVyxDQUFDRCxNQUFNRSxRQUFRLEVBQUU7WUFDNUNGLE1BQU1HLGNBQWM7WUFDcEI3QjtRQUNGO0lBQ0Y7SUFFRSxNQUFNOEIsaUJBQWlCbkQsNkNBQU1BLENBQUM7SUFFOUIsTUFBTW9ELGlCQUFpQjtZQUNyQkQ7U0FBQUEsMEJBQUFBLGVBQWVFLE9BQU8sY0FBdEJGLDhDQUFBQSx3QkFBd0JHLGNBQWMsQ0FBQztZQUFFQyxVQUFVO1FBQVM7SUFDOUQ7SUFFQXRELGdEQUFTQSxDQUFDO1FBQ1JtRDtJQUNGLEdBQUc7UUFBQ2hEO0tBQVM7SUFFYixxQkFDRSw4REFBQ1osZ0lBQUdBO1FBQ0ZnRSxPQUFNO1FBQ05DLFFBQU87UUFDUEMsU0FBUTtRQUNSQyxRQUFPO1FBQ1BDLFNBQVE7UUFDUkMsZUFBYztRQUNkQyxnQkFBZTtRQUNmQyxZQUFZOzswQkFHbEIsOERBQUNuRSxnSUFBTUE7Z0JBQUNvRSxVQUFTO2dCQUFRQyxJQUFJO29CQUFFQyxpQkFBaUI7Z0JBQVU7MEJBQ2xELDRFQUFDckUsZ0lBQU9BO29CQUFDc0UsT0FBTzt3QkFBRUwsZ0JBQWdCO29CQUFROztzQ0FDeEMsOERBQUNoRSxnSUFBVUE7NEJBQUNzRSxTQUFROzRCQUFLSCxJQUFJO2dDQUFFSSxPQUFPO2dDQUFXQyxZQUFZO2dDQUE2QkMsWUFBWTs0QkFBUTs0QkFBR1gsU0FBUztzQ0FBRzs7Ozs7O3dCQUVoSDs7Ozs7Ozs7Ozs7OzBCQUdqQiw4REFBQ2xFLGdJQUFLQTtnQkFDSjhFLFdBQVc7Z0JBQ1hoQixPQUFPO2dCQUNQQyxRQUFRO2dCQUNSZ0IsUUFBUTtnQkFDUkMsR0FBRztnQkFDSEMsU0FBUztnQkFDVEMsSUFBSTs7a0NBRUosOERBQUNsRixnSUFBS0E7d0JBQ0o4RSxXQUFXO3dCQUNYRyxTQUFTO3dCQUNURSxVQUFVO3dCQUNWQyxVQUFVO3dCQUNWQyxXQUFXOzs0QkFFVjNFLFNBQVNjLEdBQUcsQ0FBQyxDQUFDVixTQUFTd0Usc0JBQ3RCLDhEQUFDeEYsZ0lBQUdBO29DQUVGa0UsU0FBUztvQ0FDVEksZ0JBQ0V0RCxRQUFRRixJQUFJLEtBQUssY0FDYixlQUNBOzhDQUdOLDRFQUFDZCxnSUFBR0E7d0NBQ0Z5RixTQUNFekUsUUFBUUYsSUFBSSxLQUFLLGNBQ2IsWUFDQTt3Q0FFTitELE9BQU07d0NBQ05hLGNBQWM7d0NBQ2RSLEdBQUc7d0NBQ0hTLFVBQVU7a0RBRVQzRSxRQUFRRCxPQUFPOzs7Ozs7bUNBbkJieUU7Ozs7OzBDQXdCVCw4REFBQ0k7Z0NBQUlDLEtBQUtsQzs7Ozs7Ozs7Ozs7O2tDQUVaLDhEQUFDekQsZ0lBQUtBO3dCQUFDOEUsV0FBVzt3QkFBT0csU0FBUzs7MENBQ2hDLDhEQUFDaEYsZ0lBQVNBO2dDQUNSMkYsT0FBTTtnQ0FDTkMsU0FBUztnQ0FDVGxELE9BQU83QjtnQ0FDUGdGLFVBQVUsQ0FBQ0MsSUFBTWhGLFdBQVdnRixFQUFFQyxNQUFNLENBQUNyRCxLQUFLO2dDQUMxQ3NELFlBQVk3QztnQ0FDWjhDLFVBQVVoRjtnQ0FDVmlGLGNBQWE7Ozs7OzswQ0FFZiw4REFBQ3BHLGdJQUFNQTtnQ0FDTDJFLFNBQVE7Z0NBQ1JELE9BQU87b0NBQUVELGlCQUFpQjtvQ0FBV0csT0FBTztnQ0FBUTtnQ0FDcER5QixTQUFTekU7Z0NBQ1R1RSxVQUFVaEY7MENBRVRBLFlBQVksZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hDO0dBN0t3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgQm94LCBCdXR0b24sIFN0YWNrLCBUZXh0RmllbGQsIEFwcEJhciwgVG9vbGJhciwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtmcmFuY30gZnJvbSAnZnJhbmMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtcbiAgICB7IHJvbGU6ICdhc3Npc3RhbnQnLCBjb250ZW50OiAnSGksIEkgYW0gYSBtZW50YWwgaGVhbHRoIGFzc2lzdGFudC4gSG93IGNhbiBJIGJlIG9mIHNlcnZpY2UgdG9kYXk/JyB9LFxuICBdKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuLy9kZXRlY3RpbmcgbGFuZ2F1Z2UgZnJvbSB1c2VyIGlucHV0XG5jb25zdCBkZXRlY3RMYW5ndWFnZSA9ICh0ZXh0KSA9PiB7XG4gIGNvbnN0IGxhbmdDb2RlID0gZnJhbmModGV4dCk7XG4gIHNldExhbmd1YWdlKGxhbmdDb2RlKTtcbn07XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGlmIChtZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgZGV0ZWN0TGFuZ3VhZ2UobWVzc2FnZXMubWFwKG1zZyA9PiBtc2cuY29udGVudCkuam9pbignICcpKTtcbiAgfVxufSwgW21lc3NhZ2VzXSk7XG5cbmNvbnN0IHNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xuICBpZiAoIW1lc3NhZ2UudHJpbSgpIHx8IGlzTG9hZGluZykgcmV0dXJuO1xuICBzZXRJc0xvYWRpbmcodHJ1ZSkgIFxuXG4gIHNldE1lc3NhZ2UoJycpXG4gIHNldE1lc3NhZ2VzKChtZXNzYWdlcykgPT4gW1xuICAgIC4uLm1lc3NhZ2VzLFxuICAgIHsgcm9sZTogJ3VzZXInLCBjb250ZW50OiBtZXNzYWdlIH0sXG4gICAgeyByb2xlOiAnYXNzaXN0YW50JywgY29udGVudDogJycgfSxcbiAgXSlcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY2hhdCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KFsuLi5tZXNzYWdlcywgeyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IG1lc3NhZ2UgfV0pLFxuICAgIH0pXG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpXG4gICAgfVxuXG4gICAgY29uc3QgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKVxuICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKVxuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKClcbiAgICAgIGlmIChkb25lKSBicmVha1xuICAgICAgY29uc3QgdGV4dCA9IGRlY29kZXIuZGVjb2RlKHZhbHVlLCB7IHN0cmVhbTogdHJ1ZSB9KVxuICAgICAgc2V0TWVzc2FnZXMoKG1lc3NhZ2VzKSA9PiB7XG4gICAgICAgIGxldCBsYXN0TWVzc2FnZSA9IG1lc3NhZ2VzW21lc3NhZ2VzLmxlbmd0aCAtIDFdXG4gICAgICAgIGxldCBvdGhlck1lc3NhZ2VzID0gbWVzc2FnZXMuc2xpY2UoMCwgbWVzc2FnZXMubGVuZ3RoIC0gMSlcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAuLi5vdGhlck1lc3NhZ2VzLFxuICAgICAgICAgIHsgLi4ubGFzdE1lc3NhZ2UsIGNvbnRlbnQ6IGxhc3RNZXNzYWdlLmNvbnRlbnQgKyB0ZXh0IH0sXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKVxuICAgIHNldE1lc3NhZ2VzKChtZXNzYWdlcykgPT4gW1xuICAgICAgLi4ubWVzc2FnZXMsXG4gICAgICB7IHJvbGU6ICdhc3Npc3RhbnQnLCBjb250ZW50OiBcIkknbSBzb3JyeSwgYnV0IEkgZW5jb3VudGVyZWQgYW4gZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIgfSxcbiAgICBdKVxuICB9XG4gIHNldElzTG9hZGluZyhmYWxzZSlcbn1cblxuY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2VuZE1lc3NhZ2UoKVxuICB9XG59XG5cbiAgY29uc3QgbWVzc2FnZXNFbmRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoKSA9PiB7XG4gICAgbWVzc2FnZXNFbmRSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNjcm9sbFRvQm90dG9tKCk7XG4gIH0sIFttZXNzYWdlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9XCIxMDB2d1wiXG4gICAgICBoZWlnaHQ9XCIxMDB2aFwiXG4gICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICBtYXJnaW49XCIwXCJcbiAgICAgIHBhZGRpbmc9XCIwXCJcbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgYWxpZ25JdGVtcz17J2NlbnRlcid9XG4gICAgPlxuXG48QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjOTZkN2M2JyB9fSA+XG4gICAgICAgIDxUb29sYmFyIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ319PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIHN4PXt7IGNvbG9yOiAnIzZjOGNiZicsIGZvbnRGYW1pbHk6ICdMdWNpZGEgQ29uc29sZSwgbW9ub3NwYWNlJywgZm9udFdlaWdodDogJ2JvbGQnICB9fSBwYWRkaW5nPXszfT5cbiAgICAgICAgICAgIE1wb3ggSGVscFxuICAgICAgICAgIDwvVHlwb2dyYXBoeT4gLy9jaGFuZ2VkIHRoZSB0aXRsZSB0byBNcG94IEhlbHBcbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9BcHBCYXI+XG4gICAgICA8U3RhY2tcbiAgICAgICAgZGlyZWN0aW9uPXsnY29sdW1uJ31cbiAgICAgICAgd2lkdGg9eyc1MDBweCd9XG4gICAgICAgIGhlaWdodD17JzcwMHB4J31cbiAgICAgICAgYm9yZGVyPXtcIjFweCBzb2xpZCBibGFja1wifVxuICAgICAgICBwPXsyfVxuICAgICAgICBzcGFjaW5nPXszfVxuICAgICAgICBtdD17MTN9XG4gICAgICA+XG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIGRpcmVjdGlvbj17J2NvbHVtbid9XG4gICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAgICBvdmVyZmxvdz17XCJhdXRvXCJ9XG4gICAgICAgICAgbWF4SGVpZ2h0PXtcIjEwMCVcIn1cbiAgICAgICAgPlxuICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGRpc3BsYXk9eydmbGV4J31cbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIG1lc3NhZ2Uucm9sZSA9PT0gJ2Fzc2lzdGFudCdcbiAgICAgICAgICAgICAgICAgID8gJ2ZsZXgtc3RhcnQnXG4gICAgICAgICAgICAgICAgICA6ICdmbGV4LWVuZCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgYmdjb2xvcj17XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlLnJvbGUgPT09ICdhc3Npc3RhbnQnXG4gICAgICAgICAgICAgICAgICAgID8gJyM5NmQ3YzYnXG4gICAgICAgICAgICAgICAgICAgIDogJyM2YzhjYmYnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbG9yPSd3aGl0ZSdcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9ezE2fVxuICAgICAgICAgICAgICAgIHA9ezN9XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg9eyc4MCUnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21lc3NhZ2UuY29udGVudH1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxkaXYgcmVmPXttZXNzYWdlc0VuZFJlZn0gLz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17J3Jvdyd9IHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nb2ZmJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCcgXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjOTZkN2M2JywgY29sb3I6ICd3aGl0ZScgfX0gXG4gICAgICAgICAgICBvbkNsaWNrPXtzZW5kTWVzc2FnZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNMb2FkaW5nID8gJ1NlbmRpbmcuLi4nIDogJ1NlbmQnfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICBcbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Cb3g+XG4gICk7XG59Il0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIlN0YWNrIiwiVGV4dEZpZWxkIiwiQXBwQmFyIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsImZyYW5jIiwiSG9tZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImRldGVjdExhbmd1YWdlIiwidGV4dCIsImxhbmdDb2RlIiwibGVuZ3RoIiwibWFwIiwibXNnIiwiam9pbiIsInNlbmRNZXNzYWdlIiwidHJpbSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwicmVhZGVyIiwiZ2V0UmVhZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwiZG9uZSIsInZhbHVlIiwicmVhZCIsImRlY29kZSIsInN0cmVhbSIsImxhc3RNZXNzYWdlIiwib3RoZXJNZXNzYWdlcyIsInNsaWNlIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlS2V5UHJlc3MiLCJldmVudCIsImtleSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlc0VuZFJlZiIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJtYXJnaW4iLCJwYWRkaW5nIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBvc2l0aW9uIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHlsZSIsInZhcmlhbnQiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZGlyZWN0aW9uIiwiYm9yZGVyIiwicCIsInNwYWNpbmciLCJtdCIsImZsZXhHcm93Iiwib3ZlcmZsb3ciLCJtYXhIZWlnaHQiLCJpbmRleCIsImJnY29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXhXaWR0aCIsImRpdiIsInJlZiIsImxhYmVsIiwiZnVsbFdpZHRoIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25LZXlQcmVzcyIsImRpc2FibGVkIiwiYXV0b0NvbXBsZXRlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});