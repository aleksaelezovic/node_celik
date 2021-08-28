"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CELIKAPI_DLL_PATH = void 0;
var path_1 = __importDefault(require("path"));
exports.CELIKAPI_DLL_PATH = path_1.default.resolve(__dirname, "..", "..", // because of dist folder
"celik", "CelikApi.dll");
