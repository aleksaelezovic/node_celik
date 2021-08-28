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
exports.refGetVal = exports.createRefOf = exports.refTypeOf = void 0;
var ref_napi_1 = __importDefault(require("ref-napi"));
var StructType = require("ref-struct-di")(ref_napi_1.default);
var BOUNDS = __importStar(require("./bounds"));
var char = function (bytes) {
    return {
        indirection: 1,
        size: bytes,
        alignment: 4,
        name: "String",
        get: function (buffer, offset) { return [buffer, offset]; },
        set: function (buffer, offset, value) {
            var x = buffer.write(value, offset, "utf-8");
            return buffer;
        },
    };
};
var PEID_DOCUMENT_DATA = StructType({
    docRegNo: char(BOUNDS.EID_MAX_DocRegNo),
    docRegNoSize: ref_napi_1.default.types.int,
    documentType: char(BOUNDS.EID_MAX_DocumentType),
    documentTypeSize: ref_napi_1.default.types.int,
    issuingDate: char(BOUNDS.EID_MAX_IssuingDate),
    issuingDateSize: ref_napi_1.default.types.int,
    expiryDate: char(BOUNDS.EID_MAX_ExpiryDate),
    expiryDateSize: ref_napi_1.default.types.int,
    issuingAuthority: char(BOUNDS.EID_MAX_IssuingAuthority),
    issuingAuthoritySize: ref_napi_1.default.types.int,
    documentSerialNumber: char(BOUNDS.EID_MAX_DocumentSerialNumber),
    documentSerialNumberSize: ref_napi_1.default.types.int,
    chipSerialNumber: char(BOUNDS.EID_MAX_ChipSerialNumber),
    chipSerialNumberSize: ref_napi_1.default.types.int,
    // char docRegNo[EID_MAX_DocRegNo];
    // int docRegNoSize;
    // char documentType[EID_MAX_DocumentType];
    // int documentTypeSize;
    // char issuingDate[EID_MAX_IssuingDate];
    // int issuingDateSize;
    // char expiryDate[EID_MAX_ExpiryDate];
    // int expiryDateSize;
    // char issuingAuthority[EID_MAX_IssuingAuthority];
    // int issuingAuthoritySize;
    // char documentSerialNumber[EID_MAX_DocumentSerialNumber];
    // int documentSerialNumberSize;
    // char chipSerialNumber[EID_MAX_ChipSerialNumber];
    // int chipSerialNumberSize;
});
var PEID_FIXED_PERSONAL_DATA = StructType({
    personalNumber: ref_napi_1.default.types.char,
    personalNumberSize: ref_napi_1.default.types.int,
    surname: ref_napi_1.default.types.char,
    surnameSize: ref_napi_1.default.types.int,
    givenName: ref_napi_1.default.types.char,
    givenNameSize: ref_napi_1.default.types.int,
    parentGivenName: ref_napi_1.default.types.char,
    parentGivenNameSize: ref_napi_1.default.types.int,
    sex: ref_napi_1.default.types.char,
    sexSize: ref_napi_1.default.types.int,
    placeOfBirth: ref_napi_1.default.types.char,
    placeOfBirthSize: ref_napi_1.default.types.int,
    stateOfBirth: ref_napi_1.default.types.char,
    stateOfBirthSize: ref_napi_1.default.types.int,
    dateOfBirth: ref_napi_1.default.types.char,
    dateOfBirthSize: ref_napi_1.default.types.int,
    communityOfBirth: ref_napi_1.default.types.char,
    communityOfBirthSize: ref_napi_1.default.types.int,
    statusOfForeigner: ref_napi_1.default.types.char,
    statusOfForeignerSize: ref_napi_1.default.types.int,
    nationalityFull: ref_napi_1.default.types.char,
    nationalityFullSize: ref_napi_1.default.types.int,
    // char personalNumber[EID_MAX_PersonalNumber];
    // int personalNumberSize;
    // char surname[EID_MAX_Surname];
    // int surnameSize;
    // char givenName[EID_MAX_GivenName];
    // int givenNameSize;
    // char parentGivenName[EID_MAX_ParentGivenName];
    // int parentGivenNameSize;
    // char sex[EID_MAX_Sex];
    // int sexSize;
    // char placeOfBirth[EID_MAX_PlaceOfBirth];
    // int placeOfBirthSize;
    // char stateOfBirth[EID_MAX_StateOfBirth];
    // int stateOfBirthSize;
    // char dateOfBirth[EID_MAX_DateOfBirth];
    // int dateOfBirthSize;
    // char communityOfBirth[EID_MAX_CommunityOfBirth];
    // int communityOfBirthSize;
    // char statusOfForeigner[EID_MAX_StatusOfForeigner];
    // int statusOfForeignerSize;
    // char nationalityFull[EID_MAX_NationalityFull];
    // int nationalityFullSize;
});
var PEID_VARIABLE_PERSONAL_DATA = StructType({
    state: ref_napi_1.default.types.char,
    stateSize: ref_napi_1.default.types.int,
    community: ref_napi_1.default.types.char,
    communitySize: ref_napi_1.default.types.int,
    place: ref_napi_1.default.types.char,
    placeSize: ref_napi_1.default.types.int,
    street: ref_napi_1.default.types.char,
    streetSize: ref_napi_1.default.types.int,
    houseNumber: ref_napi_1.default.types.char,
    houseNumberSize: ref_napi_1.default.types.int,
    houseLetter: ref_napi_1.default.types.char,
    houseLetterSize: ref_napi_1.default.types.int,
    entrance: ref_napi_1.default.types.char,
    entranceSize: ref_napi_1.default.types.int,
    floor: ref_napi_1.default.types.char,
    floorSize: ref_napi_1.default.types.int,
    apartmentNumber: ref_napi_1.default.types.char,
    apartmentNumberSize: ref_napi_1.default.types.int,
    addressDate: ref_napi_1.default.types.char,
    addressDateSize: ref_napi_1.default.types.int,
    addressLabel: ref_napi_1.default.types.char,
    addressLabelSize: ref_napi_1.default.types.int,
    // char state[EID_MAX_State];
    // int stateSize;
    // char community[EID_MAX_Community];
    // int communitySize;
    // char place[EID_MAX_Place];
    // int placeSize;
    // char street[EID_MAX_Street];
    // int streetSize;
    // char houseNumber[EID_MAX_HouseNumber];
    // int houseNumberSize;
    // char houseLetter[EID_MAX_HouseLetter];
    // int houseLetterSize;
    // char entrance[EID_MAX_Entrance];
    // int entranceSize;
    // char floor[EID_MAX_Floor];
    // int floorSize;
    // char apartmentNumber[EID_MAX_ApartmentNumber];
    // int apartmentNumberSize;
    // char addressDate[EID_MAX_AddressDate];
    // int addressDateSize;
    // char addressLabel[EID_MAX_AddressLabel];
    // int addressLabelSize;
});
var PEID_PORTRAIT = StructType({
    portrait: ref_napi_1.default.types.byte,
    portraitSize: ref_napi_1.default.types.int,
    // BYTE portrait[EID_MAX_Portrait];
    // int portraitSize;
});
var PEID_CERTIFICATE = StructType({
    portrait: ref_napi_1.default.types.byte,
    portraitSize: ref_napi_1.default.types.int,
    // BYTE certificate[EID_MAX_Certificate];
    // int certificateSize;
});
// const LPCSTR = ref.refType("char");
var LPCSTR = ref_napi_1.default.types.CString;
var UINT_PTR = "uint*";
exports.refTypeOf = ref_napi_1.default.refType;
var createRefOf = function (type, value) {
    return ref_napi_1.default.ref(ref_napi_1.default.alloc(type, value));
};
exports.createRefOf = createRefOf;
exports.refGetVal = ref_napi_1.default.get;
exports.default = {
    PEID_DOCUMENT_DATA: PEID_DOCUMENT_DATA,
    PEID_FIXED_PERSONAL_DATA: PEID_FIXED_PERSONAL_DATA,
    PEID_VARIABLE_PERSONAL_DATA: PEID_VARIABLE_PERSONAL_DATA,
    PEID_PORTRAIT: PEID_PORTRAIT,
    PEID_CERTIFICATE: PEID_CERTIFICATE,
    LPCSTR: LPCSTR,
    UINT_PTR: UINT_PTR,
    refTypeOf: exports.refTypeOf,
    createRefOf: exports.createRefOf,
    refGetVal: exports.refGetVal,
};
