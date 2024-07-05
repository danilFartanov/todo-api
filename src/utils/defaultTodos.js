"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTodos = void 0;
var uuid_1 = require("uuid");
exports.defaultTodos = [
    { id: (0, uuid_1.v4)(), title: 'Todo 1', done: true },
    { id: (0, uuid_1.v4)(), title: 'Todo 2', done: false },
    { id: (0, uuid_1.v4)(), title: 'Todo 3', done: true },
];
exports.default = exports.defaultTodos;
