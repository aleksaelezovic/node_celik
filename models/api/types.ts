export type peidDocumentData = {
  docRegNo: string;
  documentType: string;
  issuingDate: string;
  expiryDate: string;
  issuingAuthority: string;
  documentSerialNumber: string;
  chipSerialNumber: string;
};
export type peidFixedPersonalData = {
  personalNumber: string;
  surname: string;
  givenName: string;
  parentGivenName: string;
  sex: string;
  placeOfBirth: string;
  stateOfBirth: string;
  dateOfBirth: string;
  communityOfBirth: string;
  statusOfForeigner: string;
  nationalityFull: string;
};
export type peidVariablePersonalData = {
  state: string;
  community: string;
  place: string;
  street: string;
  houseNumber: string;
  houseLetter: string;
  entrance: string;
  floor: string;
  apartmentNumber: string;
  addressDate: string;
  addressLabel: string;
};

export enum CardType {
  DEFAULT = 0,
  CARD_ID2008 = 1,
  CARD_ID2014 = 2,
  CARD_ID2020 = 3,
}
export enum CertificateType {
  CERT_MOI_INTERMEDIATE_CA = 1,
  CERT_USER_1 = 2,
  CERT_USER_2 = 3,
}
export enum SignatureID {
  CARD = 1,
  FIXED = 2,
  VARIABLE = 3,
  PORTRAIT = 4,
}

export default {
  CardType,
  CertificateType,
  SignatureID,
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
