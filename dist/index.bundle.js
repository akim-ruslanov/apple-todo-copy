"use strict";
(self["webpackChunkapple_todo_copy"] = self["webpackChunkapple_todo_copy"] || []).push([["index"],{

/***/ "./src/data/reminder_item.js":
/*!***********************************!*\
  !*** ./src/data/reminder_item.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'uuid/v4'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


// Represents an item to be added to reminder list


class ReminderItem {
    constructor(title, date, tag, isFlagged) {
        this.title = title;
        this.date = date;
        this.tag = tag;
        this.isFlagged = isFlagged;
        this.complete = false;
        this.id = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'uuid/v4'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    }

    complete() {
        this.complete = true;
    }

    toString() {
        return `${this.title} tags: ${this.tag} due: ${this.date} flagged: ${this.isFlagged}`;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReminderItem);

/***/ }),

/***/ "./src/data/reminder_list.js":
/*!***********************************!*\
  !*** ./src/data/reminder_list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Represents a list of reminder items

class ReminderList {
    constructor(title, color) {
        this.title = title;
        this.color = color;
        this.reminder_list = [];
    }

    addItem(item) {
        this.reminder_list.push(item);
    }

    removeItem(idx) {
        this.reminder_list.splice(idx, 1);
    }

    toString() {
        let msg = "";
        this.reminder_list.forEach((item) => {
            msg += item.toString() + "\n";
        });
        return msg;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReminderList);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_reminder_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/reminder_item */ "./src/data/reminder_item.js");
/* harmony import */ var _data_reminder_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/reminder_list */ "./src/data/reminder_list.js");



const item = new _data_reminder_item__WEBPACK_IMPORTED_MODULE_0__["default"]("Do recycling", new Date('December 17, 20224'), null, false);

const reminderList = new _data_reminder_list__WEBPACK_IMPORTED_MODULE_1__["default"]("TODO", "yellow");

reminderList.addItem(item);

console.log(reminderList.toString());

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZCOztBQUU3Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0lBQU07QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFlBQVksUUFBUSxVQUFVLE9BQU8sV0FBVyxXQUFXLGVBQWU7QUFDNUY7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7OztBQ3hCM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7QUMxQnFCO0FBQ0E7O0FBRWhELGlCQUFpQiwyREFBWTs7QUFFN0IseUJBQXlCLDJEQUFZOztBQUVyQzs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcGxlLXRvZG8tY29weS8uL3NyYy9kYXRhL3JlbWluZGVyX2l0ZW0uanMiLCJ3ZWJwYWNrOi8vYXBwbGUtdG9kby1jb3B5Ly4vc3JjL2RhdGEvcmVtaW5kZXJfbGlzdC5qcyIsIndlYnBhY2s6Ly9hcHBsZS10b2RvLWNvcHkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHV1aWR2NCBmcm9tICd1dWlkL3Y0JztcblxuLy8gUmVwcmVzZW50cyBhbiBpdGVtIHRvIGJlIGFkZGVkIHRvIHJlbWluZGVyIGxpc3RcblxuXG5jbGFzcyBSZW1pbmRlckl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkYXRlLCB0YWcsIGlzRmxhZ2dlZCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLmlzRmxhZ2dlZCA9IGlzRmxhZ2dlZDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gdXVpZHY0KCk7XG4gICAgfVxuXG4gICAgY29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy50aXRsZX0gdGFnczogJHt0aGlzLnRhZ30gZHVlOiAke3RoaXMuZGF0ZX0gZmxhZ2dlZDogJHt0aGlzLmlzRmxhZ2dlZH1gO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVtaW5kZXJJdGVtOyIsIi8vIFJlcHJlc2VudHMgYSBsaXN0IG9mIHJlbWluZGVyIGl0ZW1zXG5cbmNsYXNzIFJlbWluZGVyTGlzdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGNvbG9yKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnJlbWluZGVyX2xpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5yZW1pbmRlcl9saXN0LnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlSXRlbShpZHgpIHtcbiAgICAgICAgdGhpcy5yZW1pbmRlcl9saXN0LnNwbGljZShpZHgsIDEpO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBsZXQgbXNnID0gXCJcIjtcbiAgICAgICAgdGhpcy5yZW1pbmRlcl9saXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIG1zZyArPSBpdGVtLnRvU3RyaW5nKCkgKyBcIlxcblwiO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1zZztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbWluZGVyTGlzdDsiLCJpbXBvcnQgUmVtaW5kZXJJdGVtIGZyb20gXCIuL2RhdGEvcmVtaW5kZXJfaXRlbVwiO1xuaW1wb3J0IFJlbWluZGVyTGlzdCBmcm9tIFwiLi9kYXRhL3JlbWluZGVyX2xpc3RcIjtcblxuY29uc3QgaXRlbSA9IG5ldyBSZW1pbmRlckl0ZW0oXCJEbyByZWN5Y2xpbmdcIiwgbmV3IERhdGUoJ0RlY2VtYmVyIDE3LCAyMDIyNCcpLCBudWxsLCBmYWxzZSk7XG5cbmNvbnN0IHJlbWluZGVyTGlzdCA9IG5ldyBSZW1pbmRlckxpc3QoXCJUT0RPXCIsIFwieWVsbG93XCIpO1xuXG5yZW1pbmRlckxpc3QuYWRkSXRlbShpdGVtKTtcblxuY29uc29sZS5sb2cocmVtaW5kZXJMaXN0LnRvU3RyaW5nKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==