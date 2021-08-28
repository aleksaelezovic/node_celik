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
  personalNumber: char(BOUNDS.EID_MAX_PersonalNumber),
  personalNumberSize: ref.types.int,
  surname: char(BOUNDS.EID_MAX_Surname),
  surnameSize: ref.types.int,
  givenName: char(BOUNDS.EID_MAX_GivenName),
  givenNameSize: ref.types.int,
  parentGivenName: char(BOUNDS.EID_MAX_ParentGivenName),
  parentGivenNameSize: ref.types.int,
  sex: char(BOUNDS.EID_MAX_Sex),
  sexSize: ref.types.int,
  placeOfBirth: char(BOUNDS.EID_MAX_PlaceOfBirth),
  placeOfBirthSize: ref.types.int,
  stateOfBirth: char(BOUNDS.EID_MAX_StateOfBirth),
  stateOfBirthSize: ref.types.int,
  dateOfBirth: char(BOUNDS.EID_MAX_DateOfBirth),
  dateOfBirthSize: ref.types.int,
  communityOfBirth: char(BOUNDS.EID_MAX_CommunityOfBirth),
  communityOfBirthSize: ref.types.int,
  statusOfForeigner: char(BOUNDS.EID_MAX_StatusOfForeigner),
  statusOfForeignerSize: ref.types.int,
  nationalityFull: char(BOUNDS.EID_MAX_NationalityFull),
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
  state: char(BOUNDS.EID_MAX_State),
  stateSize: ref.types.int,
  community: char(BOUNDS.EID_MAX_Community),
  communitySize: ref.types.int,
  place: char(BOUNDS.EID_MAX_Place),
  placeSize: ref.types.int,
  street: char(BOUNDS.EID_MAX_Street),
  streetSize: ref.types.int,
  houseNumber: char(BOUNDS.EID_MAX_HouseNumber),
  houseNumberSize: ref.types.int,
  houseLetter: char(BOUNDS.EID_MAX_HouseLetter),
  houseLetterSize: ref.types.int,
  entrance: char(BOUNDS.EID_MAX_Entrance),
  entranceSize: ref.types.int,
  floor: char(BOUNDS.EID_MAX_Floor),
  floorSize: ref.types.int,
  apartmentNumber: char(BOUNDS.EID_MAX_ApartmentNumber),
  apartmentNumberSize: ref.types.int,
  addressDate: char(BOUNDS.EID_MAX_AddressDate),
  addressDateSize: ref.types.int,
  addressLabel: char(BOUNDS.EID_MAX_AddressLabel),
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

const byte = (bytes: number): ref.Type<any> => {
  return {
    indirection: 1,
    size: bytes,
    alignment: 4,
    name: "Byte",
    get: (buffer: Buffer, offset: number) => buffer,
    set: (buffer: Buffer, offset: number, value: string) => {
      const x = buffer.write(value, offset, "utf-8");
      return buffer;
    },
  };
};
const PEID_PORTRAIT = StructType({
  portrait: byte(BOUNDS.EID_MAX_Portrait),
  portraitSize: ref.types.int,
  // BYTE portrait[EID_MAX_Portrait];
  // int portraitSize;
});
const PEID_CERTIFICATE = StructType({
  certificate: byte(BOUNDS.EID_MAX_Certificate),
  certificateSize: ref.types.int,
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
