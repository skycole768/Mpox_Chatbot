"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/n-gram";
exports.ids = ["vendor-chunks/n-gram"];
exports.modules = {

/***/ "(ssr)/./node_modules/n-gram/index.js":
/*!**************************************!*\
  !*** ./node_modules/n-gram/index.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bigram: () => (/* binding */ bigram),\n/* harmony export */   nGram: () => (/* binding */ nGram),\n/* harmony export */   trigram: () => (/* binding */ trigram)\n/* harmony export */ });\nconst bigram = nGram(2)\nconst trigram = nGram(3)\n\n/**\n * Factory returning a function that converts a value string to n-grams.\n *\n * @param {number} n\n */\nfunction nGram(n) {\n  if (\n    typeof n !== 'number' ||\n    Number.isNaN(n) ||\n    n < 1 ||\n    n === Number.POSITIVE_INFINITY\n  ) {\n    throw new Error('`' + n + '` is not a valid argument for `n-gram`')\n  }\n\n  return grams\n\n  /**\n   * Create n-grams from a given value.\n   *\n   * @template {string|Array<unknown>} T\n   * @param {T} [value]\n   * @returns {T extends any[] ? T : Array<string>}\n   */\n  function grams(value) {\n    /** @type {T extends any[] ? T : Array<string>} */\n    // @ts-expect-error: pretty sure this is fine.\n    const nGrams = []\n\n    if (value === null || value === undefined) {\n      return nGrams\n    }\n\n    const source = typeof value.slice === 'function' ? value : String(value)\n    let index = source.length - n + 1\n\n    if (index < 1) {\n      return nGrams\n    }\n\n    while (index--) {\n      nGrams[index] = source.slice(index, index + n)\n    }\n\n    return nGrams\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbi1ncmFtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPO0FBQ0E7O0FBRVA7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1QkFBdUI7QUFDdkMsYUFBYSxHQUFHO0FBQ2hCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZSxxQ0FBcUM7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRfc3VwcG9ydC8uL25vZGVfbW9kdWxlcy9uLWdyYW0vaW5kZXguanM/YjRiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYmlncmFtID0gbkdyYW0oMilcbmV4cG9ydCBjb25zdCB0cmlncmFtID0gbkdyYW0oMylcblxuLyoqXG4gKiBGYWN0b3J5IHJldHVybmluZyBhIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgYSB2YWx1ZSBzdHJpbmcgdG8gbi1ncmFtcy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICovXG5leHBvcnQgZnVuY3Rpb24gbkdyYW0obikge1xuICBpZiAoXG4gICAgdHlwZW9mIG4gIT09ICdudW1iZXInIHx8XG4gICAgTnVtYmVyLmlzTmFOKG4pIHx8XG4gICAgbiA8IDEgfHxcbiAgICBuID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFlcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG4gKyAnYCBpcyBub3QgYSB2YWxpZCBhcmd1bWVudCBmb3IgYG4tZ3JhbWAnKVxuICB9XG5cbiAgcmV0dXJuIGdyYW1zXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuLWdyYW1zIGZyb20gYSBnaXZlbiB2YWx1ZS5cbiAgICpcbiAgICogQHRlbXBsYXRlIHtzdHJpbmd8QXJyYXk8dW5rbm93bj59IFRcbiAgICogQHBhcmFtIHtUfSBbdmFsdWVdXG4gICAqIEByZXR1cm5zIHtUIGV4dGVuZHMgYW55W10gPyBUIDogQXJyYXk8c3RyaW5nPn1cbiAgICovXG4gIGZ1bmN0aW9uIGdyYW1zKHZhbHVlKSB7XG4gICAgLyoqIEB0eXBlIHtUIGV4dGVuZHMgYW55W10gPyBUIDogQXJyYXk8c3RyaW5nPn0gKi9cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBwcmV0dHkgc3VyZSB0aGlzIGlzIGZpbmUuXG4gICAgY29uc3QgbkdyYW1zID0gW11cblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbkdyYW1zXG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlID0gdHlwZW9mIHZhbHVlLnNsaWNlID09PSAnZnVuY3Rpb24nID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpXG4gICAgbGV0IGluZGV4ID0gc291cmNlLmxlbmd0aCAtIG4gKyAxXG5cbiAgICBpZiAoaW5kZXggPCAxKSB7XG4gICAgICByZXR1cm4gbkdyYW1zXG4gICAgfVxuXG4gICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgIG5HcmFtc1tpbmRleF0gPSBzb3VyY2Uuc2xpY2UoaW5kZXgsIGluZGV4ICsgbilcbiAgICB9XG5cbiAgICByZXR1cm4gbkdyYW1zXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/n-gram/index.js\n");

/***/ })

};
;