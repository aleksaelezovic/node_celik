"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CelikApiResponseStatus = exports.CelikApi = void 0;
var lib_1 = require("../celik/lib");
var responses_1 = require("./responses");
Object.defineProperty(exports, "CelikApiResponseStatus", { enumerable: true, get: function () { return responses_1.CelikApiResponseStatus; } });
var types_1 = __importDefault(require("../celik/types"));
var types_2 = require("./types");
var converter_1 = require("../converter");
var CelikApi = /** @class */ (function () {
    function CelikApi() {
        this.celikApiLib = lib_1.createCelikApiLib();
        this.refStore = new RefStore();
    }
    CelikApi.prototype.startup = function () {
        // TRENUTNA (AVG 2021) VERZIJA API-ja je: 3
        return responses_1.getResponse(this.celikApiLib.EidStartup(3));
    };
    CelikApi.prototype.cleanup = function () {
        return responses_1.getResponse(this.celikApiLib.EidCleanup());
    };
    CelikApi.prototype.beginRead = function (readerName, cardType) {
        if (cardType === void 0) { cardType = types_2.CardType.DEFAULT; }
        var _cardType = this.refStore.getRef("cardType", "int", cardType);
        return responses_1.getResponse(this.celikApiLib.EidBeginRead(readerName, _cardType.ref), _cardType.value());
    };
    CelikApi.prototype.endRead = function () {
        return responses_1.getResponse(this.celikApiLib.EidEndRead());
    };
    CelikApi.prototype.readDocumentData = function () {
        var pData = new types_1.default.PEID_DOCUMENT_DATA();
        var res = this.celikApiLib.EidReadDocumentData(pData.ref());
        return responses_1.getResponse(res, converter_1.convertStruct(pData));
    };
    CelikApi.prototype.readFixedPersonalData = function () {
        var pData = new types_1.default.PEID_FIXED_PERSONAL_DATA();
        var res = this.celikApiLib.EidReadFixedPersonalData(pData.ref());
        return responses_1.getResponse(res, converter_1.convertStruct(pData));
    };
    CelikApi.prototype.readVariablePersonalData = function () {
        var pData = new types_1.default.PEID_VARIABLE_PERSONAL_DATA();
        var res = this.celikApiLib.EidReadVariablePersonalData(pData.ref());
        return responses_1.getResponse(res, converter_1.convertStruct(pData));
    };
    CelikApi.prototype.readPortrait = function () {
        var pData = new types_1.default.PEID_PORTRAIT();
        var res = this.celikApiLib.EidReadPortrait(pData.ref());
        return responses_1.getResponse(res, pData);
    };
    CelikApi.prototype.readCertificate = function (certType) {
        var pData = new types_1.default.PEID_CERTIFICATE();
        var res = this.celikApiLib.EidReadCertificate(pData.ref(), certType);
        return responses_1.getResponse(res, pData);
    };
    CelikApi.prototype.changePassword = function (oldPassword, newPassword) {
        var _triesLeft = this.refStore.getRef("triesLeft", "int");
        return responses_1.getResponse(this.celikApiLib.EidChangePassword(oldPassword, newPassword, _triesLeft.ref), _triesLeft.value());
    };
    CelikApi.prototype.verifySignature = function (nSignatureID) {
        return responses_1.getResponse(this.celikApiLib.EidVerifySignature(nSignatureID));
    };
    return CelikApi;
}());
exports.CelikApi = CelikApi;
var ReferenceObject = /** @class */ (function () {
    function ReferenceObject(ref) {
        this.ref = ref;
    }
    ReferenceObject.prototype.value = function () {
        return types_1.default.refGetVal(this.ref);
    };
    return ReferenceObject;
}());
var RefStore = /** @class */ (function () {
    function RefStore() {
        this.refs = {};
    }
    RefStore.prototype.getRef = function (ref, type, val) {
        if (!this.refs[ref])
            this.refs[ref] = new ReferenceObject(types_1.default.createRefOf(type, val));
        return this.refs[ref];
    };
    return RefStore;
}());
exports.default = CelikApi;
