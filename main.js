"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var defaultTodos_1 = require("./src/utils/defaultTodos");
var express = require('express');
var todos = __spreadArray([], defaultTodos_1.default, true);
var app = express();
app.use(express.json());
var port = 8080;
app.get('/api/v1/todos', function (req, res) {
    res.end(JSON.stringify(todos));
});
app.post('/api/v1/todos', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.body));
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
