"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponse = exports.getCelikApiStatus = exports.CelikApiResponseStatus = void 0;
var ERRORS = __importStar(require("../celik/errors"));
var CelikApiResponseStatus;
(function (CelikApiResponseStatus) {
    CelikApiResponseStatus["OK"] = "OK";
    CelikApiResponseStatus["ERROR"] = "Unknown Error Occurred.";
    CelikApiResponseStatus["ERROR_INVALID_PARAMETER"] = "Invalid parameter.";
    CelikApiResponseStatus["ERROR_VERSION_NOT_SUPPORTED"] = "Api version not supported.";
    CelikApiResponseStatus["ERROR_NOT_INITIALIZED"] = "Not initialized.";
    CelikApiResponseStatus["ERROR_UNABLE_TO_EXECUTE"] = "Unable to execute.";
    CelikApiResponseStatus["ERROR_READER"] = "Reader error.";
    CelikApiResponseStatus["ERROR_CARD_MISSING"] = "Cannot find a valid card.";
    CelikApiResponseStatus["ERROR_SESSION"] = "Cannot open session.";
    CelikApiResponseStatus["ERROR_DATA_MISSING"] = "Data is missing.";
    CelikApiResponseStatus["ERROR_SECFORMAT"] = "Certificate error.";
    CelikApiResponseStatus["ERROR_INVALID_PASSWORD"] = "Invalid password.";
    CelikApiResponseStatus["ERROR_PIN_BLOCKED"] = "PIN Blocked. Contact authority.";
})(CelikApiResponseStatus = exports.CelikApiResponseStatus || (exports.CelikApiResponseStatus = {}));
var getCelikApiStatus = function (code) {
    switch (code) {
        case ERRORS.EID_OK:
            return CelikApiResponseStatus.OK;
        case ERRORS.EID_E_INVALID_PARAMETER:
            return CelikApiResponseStatus.ERROR_INVALID_PARAMETER;
        case ERRORS.EID_E_VERSION_NOT_SUPPORTED:
            return CelikApiResponseStatus.ERROR_VERSION_NOT_SUPPORTED;
        case ERRORS.EID_E_NOT_INITIALIZED:
            return CelikApiResponseStatus.ERROR_NOT_INITIALIZED;
        case ERRORS.EID_E_UNABLE_TO_EXECUTE:
            return CelikApiResponseStatus.ERROR_UNABLE_TO_EXECUTE;
        case ERRORS.EID_E_READER_ERROR:
            return CelikApiResponseStatus.ERROR_READER;
        case ERRORS.EID_E_CARD_MISSING:
        case ERRORS.EID_E_CARD_UNKNOWN:
        case ERRORS.EID_E_CARD_MISMATCH:
            return CelikApiResponseStatus.ERROR_CARD_MISSING;
        case ERRORS.EID_E_UNABLE_TO_OPEN_SESSION:
            return CelikApiResponseStatus.ERROR_SESSION;
        case ERRORS.EID_E_DATA_MISSING:
            return CelikApiResponseStatus.ERROR_DATA_MISSING;
        case ERRORS.EID_E_CARD_SECFORMAT_CHECK_ERROR:
        case ERRORS.EID_E_SECFORMAT_CHECK_CERT_ERROR:
            return CelikApiResponseStatus.ERROR_SECFORMAT;
        case ERRORS.EID_E_INVALID_PASSWORD:
            return CelikApiResponseStatus.ERROR_INVALID_PASSWORD;
        case ERRORS.EID_E_PIN_BLOCKED:
            return CelikApiResponseStatus.ERROR_PIN_BLOCKED;
        default:
            return CelikApiResponseStatus.ERROR;
    }
};
exports.getCelikApiStatus = getCelikApiStatus;
var getResponse = function (code, data) {
    if (data === void 0) { data = null; }
    var responseStatus = exports.getCelikApiStatus(code);
    // if (responseStatus !== CelikApiResponseStatus.OK) data = null;
    return {
        status: responseStatus,
        data: data,
    };
};
exports.getResponse = getResponse;
