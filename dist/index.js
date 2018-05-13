"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reHeadTail = /-?([A-Z])([^A-Z])/g;
var reLongHead = /-?([A-Z]+)/g;
var reDash = /^-/;
var cache = Object.create(null);
function kebabCase(str, useCache) {
    str = String(str);
    var value;
    return ((useCache && cache[str]) ||
        ((value = str
            .replace(reHeadTail, function (match, head, tail) { return '-' + head.toLowerCase() + tail; })
            .replace(reLongHead, function (match, head) { return '-' + head.toLowerCase(); })
            .replace(reDash, '')),
            useCache ? (cache[str] = value) : value));
}
exports.kebabCase = kebabCase;
