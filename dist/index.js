"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateType = exports.SignatureID = exports.CardType = exports.MUPCelikApi = void 0;
var api_1 = __importStar(require("./models/api/api"));
var types_1 = require("./models/api/types");
Object.defineProperty(exports, "CardType", { enumerable: true, get: function () { return types_1.CardType; } });
Object.defineProperty(exports, "CertificateType", { enumerable: true, get: function () { return types_1.CertificateType; } });
Object.defineProperty(exports, "SignatureID", { enumerable: true, get: function () { return types_1.SignatureID; } });
var MUPCelikApi = /** @class */ (function () {
    function MUPCelikApi(device, cardType, isInit) {
        if (device === void 0) { device = ""; }
        if (cardType === void 0) { cardType = types_1.CardType.DEFAULT; }
        if (isInit === void 0) { isInit = false; }
        this.isInit = isInit;
        this.device = "";
        this.api = new api_1.default();
        this.start();
        if (device)
            this.startReadSync(device, cardType);
    }
    MUPCelikApi.prototype.start = function (apiVersion) {
        if (apiVersion === void 0) { apiVersion = 3; }
        var status = this.api.startup(apiVersion).status;
        if (status !== api_1.CelikApiResponseStatus.OK)
            throw new Error(status);
        this.isInit = true;
    };
    MUPCelikApi.prototype.startReadSync = function (device, cardType) {
        if (cardType === void 0) { cardType = types_1.CardType.DEFAULT; }
        if (!device)
            return;
        var status = this.api.beginRead(device, cardType).status;
        if (status !== api_1.CelikApiResponseStatus.OK)
            throw new Error(status);
        this.device = device;
    };
    MUPCelikApi.prototype.startRead = function (device, cardType) {
        if (cardType === void 0) { cardType = types_1.CardType.DEFAULT; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.startReadSync(device, cardType)];
            });
        });
    };
    MUPCelikApi.prototype.readAllData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.readDocumentData(),
                            this.readFixedPersonalData(),
                            this.readVariablePersonalData(),
                            this.readPortrait(),
                        ])];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, __assign(__assign(__assign(__assign({}, res[0]), res[1]), res[2]), { portrait: res[3] })];
                }
            });
        });
    };
    MUPCelikApi.prototype.readDocumentData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                res = this.api.readDocumentData();
                if (res.status !== api_1.CelikApiResponseStatus.OK)
                    throw new Error(res.status);
                return [2 /*return*/, res.data];
            });
        });
    };
    MUPCelikApi.prototype.readFixedPersonalData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                res = this.api.readFixedPersonalData();
                if (res.status !== api_1.CelikApiResponseStatus.OK)
                    throw new Error(res.status);
                return [2 /*return*/, res.data];
            });
        });
    };
    MUPCelikApi.prototype.readVariablePersonalData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                res = this.api.readVariablePersonalData();
                if (res.status !== api_1.CelikApiResponseStatus.OK)
                    throw new Error(res.status);
                return [2 /*return*/, res.data];
            });
        });
    };
    MUPCelikApi.prototype.readPortrait = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                res = this.api.readPortrait();
                if (res.status !== api_1.CelikApiResponseStatus.OK)
                    throw new Error(res.status);
                return [2 /*return*/, res.data.portrait];
            });
        });
    };
    MUPCelikApi.prototype.readCertificate = function (certType) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                res = this.api.readCertificate(certType);
                if (res.status !== api_1.CelikApiResponseStatus.OK)
                    throw new Error(res.status);
                return [2 /*return*/, res.data.certificate];
            });
        });
    };
    MUPCelikApi.prototype.verifyAllSignatures = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.verifySignature(types_1.SignatureID.CARD)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.verifySignature(types_1.SignatureID.FIXED)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.verifySignature(types_1.SignatureID.VARIABLE)];
                    case 3:
                        _a.sent();
                        console.log("ALL VERIFIED!");
                        return [2 /*return*/];
                }
            });
        });
    };
    MUPCelikApi.prototype.verifySignature = function (sigId) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                status = this.api.verifySignature(sigId).status;
                if (status !== api_1.CelikApiResponseStatus.OK)
                    throw new Error(status);
                return [2 /*return*/];
            });
        });
    };
    MUPCelikApi.prototype.endRead = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                if (!this.device)
                    return [2 /*return*/];
                status = this.api.endRead().status;
                if (status !== api_1.CelikApiResponseStatus.OK)
                    throw new Error(status);
                this.device = "";
                return [2 /*return*/];
            });
        });
    };
    MUPCelikApi.prototype.end = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.endRead()];
                    case 1:
                        _a.sent();
                        if (!this.isInit)
                            return [2 /*return*/];
                        status = this.api.cleanup().status;
                        if (status !== api_1.CelikApiResponseStatus.OK)
                            throw new Error(status);
                        this.isInit = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    return MUPCelikApi;
}());
exports.MUPCelikApi = MUPCelikApi;
exports.default = MUPCelikApi;
