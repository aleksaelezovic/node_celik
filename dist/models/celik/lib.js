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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCelikApiLib = void 0;
var ffi_napi_1 = __importDefault(require("ffi-napi"));
var types_1 = __importStar(require("./types"));
var get_celik_path_1 = require("../../util/get-celik-path");
var createCelikApiLib = function () {
    return ffi_napi_1.default.Library(get_celik_path_1.CELIKAPI_DLL_PATH, {
        EidSetOption: ["int", ["int", types_1.default.UINT_PTR]],
        EidStartup: ["int", ["int"]],
        EidCleanup: ["int", []],
        EidBeginRead: ["int", [types_1.default.LPCSTR, "int*"]],
        EidEndRead: ["int", []],
        EidReadDocumentData: ["int", [types_1.refTypeOf(types_1.default.PEID_DOCUMENT_DATA)]],
        EidReadFixedPersonalData: [
            "int",
            [types_1.refTypeOf(types_1.default.PEID_FIXED_PERSONAL_DATA)],
        ],
        EidReadVariablePersonalData: [
            "int",
            [types_1.refTypeOf(types_1.default.PEID_VARIABLE_PERSONAL_DATA)],
        ],
        EidReadPortrait: ["int", [types_1.refTypeOf(types_1.default.PEID_PORTRAIT)]],
        EidReadCertificate: ["int", [types_1.refTypeOf(types_1.default.PEID_CERTIFICATE), "int"]],
        EidChangePassword: ["int", [types_1.default.LPCSTR, types_1.default.LPCSTR, "int*"]],
        EidVerifySignature: ["int", ["uint"]],
        //   EID_API int WINAPI EidSetOption(int nOptionID, UINT_PTR nOptionValue);
        //   EID_API int WINAPI EidStartup(int nApiVersion);
        //   EID_API int WINAPI EidCleanup();
        //   EID_API int WINAPI EidBeginRead(LPCSTR szReader, int* pnCardType = 0);
        //   EID_API int WINAPI EidEndRead();
        //   EID_API int WINAPI EidReadDocumentData(PEID_DOCUMENT_DATA pData);
        //   EID_API int WINAPI EidReadFixedPersonalData(PEID_FIXED_PERSONAL_DATA pData);
        //   EID_API int WINAPI EidReadVariablePersonalData(PEID_VARIABLE_PERSONAL_DATA pData);
        //   EID_API int WINAPI EidReadPortrait(PEID_PORTRAIT pData);
        //   EID_API int WINAPI EidReadCertificate(PEID_CERTIFICATE pData, int certificateType);
        //   EID_API int WINAPI EidChangePassword(LPCSTR szOldPassword, LPCSTR szNewPassword, int* pnTriesLeft);
        //   EID_API int WINAPI EidVerifySignature(UINT nSignatureID);
    });
};
exports.createCelikApiLib = createCelikApiLib;
