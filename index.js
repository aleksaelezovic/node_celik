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
console.log("---running!---");
var api_1 = __importStar(require("./models/api/api"));
var types_1 = require("./models/api/types");
var smartcard = require("smartcard");
var Devices = smartcard.Devices;
var devices = new Devices();
devices.onActivated().then(function (e) {
    var DEVICE = e.device.name;
    var CARD = e.device.card;
    e.device.on("card-inserted", function (e) {
        console.log(e.card.getAtr());
        var api = new api_1.default();
        console.log(api.cleanup().status);
        var status = api.startup().status;
        if (status === api_1.CelikApiResponseStatus.OK) {
            console.log("STARTED!");
            status = api.beginRead(DEVICE, types_1.CardType.CARD_ID2020).status;
            if (status === api_1.CelikApiResponseStatus.OK) {
                console.log("READ - START!");
                status = api.verifySignature(types_1.SignatureID.CARD).status;
                if (status !== api_1.CelikApiResponseStatus.OK) {
                    console.log("ERROR in VERIFY!");
                    return process.exit();
                }
                console.log("VERIFIED - CARD!");
                var res = api.readDocumentData();
                if (res.status === api_1.CelikApiResponseStatus.OK) {
                    console.log("DATA:");
                    var data = res.data;
                    console.log(data.issuingAuthority);
                    console.log(data.docRegNo);
                }
                else {
                    console.log(res.status);
                }
                status = api.endRead().status;
                if (status === api_1.CelikApiResponseStatus.OK) {
                    console.log("READ - END!");
                }
            }
            else {
                console.log(status);
            }
            status = api.cleanup().status;
            if (status === api_1.CelikApiResponseStatus.OK) {
                console.log("CLEANUP!");
                console.log("---end!---");
            }
        }
        else {
            console.log(status);
        }
        process.exit();
    });
});
