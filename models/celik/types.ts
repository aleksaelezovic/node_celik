import ref from "ref-napi";
const StructType = require("ref-struct-di")(ref);

import * as BOUNDS from "./bounds";

const char = (bytes: number): ref.Type<any> => {
  return {
    indirection: 1,
    size: bytes,
    alignment: 4,
    name: "String",
    get: (buffer: Buffer, offset: number) => [buffer, offset],
    set: (buffer: Buffer, offset: number, value: string) => {
      const x = buffer.write(value, offset, "utf-8");
      return buffer;
    },
  };
};
const PEID_DOCUMENT_DATA = StructType({
  docRegNo: char(BOUNDS.EID_MAX_DocRegNo), // 9
  docRegNoSize: ref.types.int,
  documentType: char(BOUNDS.EID_MAX_DocumentType), // 2
  documentTypeSize: ref.types.int,
  issuingDate: char(BOUNDS.EID_MAX_IssuingDate), // 10
  issuingDateSize: ref.types.int,
  expiryDate: char(BOUNDS.EID_MAX_ExpiryDate), // 10
  expiryDateSize: ref.types.int,
  issuingAuthority: char(BOUNDS.EID_MAX_IssuingAuthority),
  issuingAuthoritySize: ref.types.int,
  documentSerialNumber: char(BOUNDS.EID_MAX_DocumentSerialNumber),
  documentSerialNumberSize: ref.types.int,
  chipSerialNumber: char(BOUNDS.EID_MAX_ChipSerialNumber),
  chipSerialNumberSize: ref.types.int,
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
const PEID_FIXED_PERSONAL_DATA = StructType({
  personalNumber: ref.types.char,
  personalNumberSize: ref.types.int,
  surname: ref.types.char,
  surnameSize: ref.types.int,
  givenName: ref.types.char,
  givenNameSize: ref.types.int,
  parentGivenName: ref.types.char,
  parentGivenNameSize: ref.types.int,
  sex: ref.types.char,
  sexSize: ref.types.int,
  placeOfBirth: ref.types.char,
  placeOfBirthSize: ref.types.int,
  stateOfBirth: ref.types.char,
  stateOfBirthSize: ref.types.int,
  dateOfBirth: ref.types.char,
  dateOfBirthSize: ref.types.int,
  communityOfBirth: ref.types.char,
  communityOfBirthSize: ref.types.int,
  statusOfForeigner: ref.types.char,
  statusOfForeignerSize: ref.types.int,
  nationalityFull: ref.types.char,
  nationalityFullSize: ref.types.int,
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
const PEID_VARIABLE_PERSONAL_DATA = StructType({
  state: ref.types.char,
  stateSize: ref.types.int,
  community: ref.types.char,
  communitySize: ref.types.int,
  place: ref.types.char,
  placeSize: ref.types.int,
  street: ref.types.char,
  streetSize: ref.types.int,
  houseNumber: ref.types.char,
  houseNumberSize: ref.types.int,
  houseLetter: ref.types.char,
  houseLetterSize: ref.types.int,
  entrance: ref.types.char,
  entranceSize: ref.types.int,
  floor: ref.types.char,
  floorSize: ref.types.int,
  apartmentNumber: ref.types.char,
  apartmentNumberSize: ref.types.int,
  addressDate: ref.types.char,
  addressDateSize: ref.types.int,
  addressLabel: ref.types.char,
  addressLabelSize: ref.types.int,
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
const PEID_PORTRAIT = StructType({
  portrait: ref.types.byte,
  portraitSize: ref.types.int,
  // BYTE portrait[EID_MAX_Portrait];
  // int portraitSize;
});
const PEID_CERTIFICATE = StructType({
  portrait: ref.types.byte,
  portraitSize: ref.types.int,
  // BYTE certificate[EID_MAX_Certificate];
  // int certificateSize;
});

// const LPCSTR = ref.refType("char");
const LPCSTR = ref.types.CString;
const UINT_PTR = "uint*";

export const refTypeOf = ref.refType;
export const createRefOf = <T extends ref.TypeLike>(
  type: T,
  value?: ref.UnderlyingType<T>
): ref.Pointer<ref.UnderlyingType<T>> =>
  ref.ref(ref.alloc(type, value) as ref.Value<ref.UnderlyingType<T>>);
export const refGetVal = ref.get;
export interface Pointer<T> extends ref.Pointer<T> {}

export default {
  PEID_DOCUMENT_DATA,
  PEID_FIXED_PERSONAL_DATA,
  PEID_VARIABLE_PERSONAL_DATA,
  PEID_PORTRAIT,
  PEID_CERTIFICATE,
  LPCSTR,
  UINT_PTR,
  refTypeOf,
  createRefOf,
  refGetVal,
};
