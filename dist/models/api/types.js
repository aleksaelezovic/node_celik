"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureID = exports.CertificateType = exports.CardType = void 0;
var CardType;
(function (CardType) {
    CardType[CardType["DEFAULT"] = 0] = "DEFAULT";
    CardType[CardType["CARD_ID2008"] = 1] = "CARD_ID2008";
    CardType[CardType["CARD_ID2014"] = 2] = "CARD_ID2014";
    CardType[CardType["CARD_ID2020"] = 3] = "CARD_ID2020";
})(CardType = exports.CardType || (exports.CardType = {}));
var CertificateType;
(function (CertificateType) {
    CertificateType[CertificateType["CERT_MOI_INTERMEDIATE_CA"] = 1] = "CERT_MOI_INTERMEDIATE_CA";
    CertificateType[CertificateType["CERT_USER_1"] = 2] = "CERT_USER_1";
    CertificateType[CertificateType["CERT_USER_2"] = 3] = "CERT_USER_2";
})(CertificateType = exports.CertificateType || (exports.CertificateType = {}));
var SignatureID;
(function (SignatureID) {
    SignatureID[SignatureID["CARD"] = 1] = "CARD";
    SignatureID[SignatureID["FIXED"] = 2] = "FIXED";
    SignatureID[SignatureID["VARIABLE"] = 3] = "VARIABLE";
    SignatureID[SignatureID["PORTRAIT"] = 4] = "PORTRAIT";
})(SignatureID = exports.SignatureID || (exports.SignatureID = {}));
exports.default = {
    CardType: CardType,
    CertificateType: CertificateType,
    SignatureID: SignatureID,
};
// //
// // Card types, used in function EidBeginRead
// //
// const int EID_CARD_ID2008            = 1;
// const int EID_CARD_ID2014            = 2;
// const int EID_CARD_IF2020            = 3; // ID for foreigners
// //
// // Option identifiers, used in function EidSetOption
// //
// const int EID_O_KEEP_CARD_CLOSED     = 1;
// //
// // Certificate types, used in function EidReadCertificate
// //
// const int EID_Cert_MoiIntermediateCA = 1;
// const int EID_Cert_User1             = 2;
// const int EID_Cert_User2             = 3;
// //
// // Block types, used in function EidVerifySignature
// //
// const int EID_SIG_CARD               = 1;
// const int EID_SIG_FIXED              = 2;
// const int EID_SIG_VARIABLE           = 3;
// const int EID_SIG_PORTRAIT           = 4;
