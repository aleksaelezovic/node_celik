"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStruct = void 0;
var convertStruct = function (structObj) {
    var retObj = {};
    for (var key in structObj.toObject()) {
        if (key.substring(key.length - 4) === "Size")
            continue;
        var _x = structObj[key]; // [buffer, offset]
        var buffer = _x[0];
        var offset = _x[1];
        var length_1 = structObj[key + "Size"];
        var offset_end = offset + length_1;
        retObj[key] = buffer.toString("utf-8", offset, offset_end);
    }
    return retObj;
};
exports.convertStruct = convertStruct;
