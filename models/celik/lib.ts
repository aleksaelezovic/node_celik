import ffi from "ffi-napi";
import API_TYPES, { refTypeOf } from "./types";
import { CELIKAPI_DLL_PATH } from "../../util/get-celik-path";

export const createCelikApiLib = () =>
  ffi.Library(CELIKAPI_DLL_PATH, {
    EidSetOption: ["int", ["int", API_TYPES.UINT_PTR]],
    EidStartup: ["int", ["int"]],
    EidCleanup: ["int", []],
    EidBeginRead: ["int", [API_TYPES.LPCSTR, "int*"]],
    EidEndRead: ["int", []],
    EidReadDocumentData: ["int", [refTypeOf(API_TYPES.PEID_DOCUMENT_DATA)]],
    EidReadFixedPersonalData: [
      "int",
      [refTypeOf(API_TYPES.PEID_FIXED_PERSONAL_DATA)],
    ],
    EidReadVariablePersonalData: [
      "int",
      [refTypeOf(API_TYPES.PEID_VARIABLE_PERSONAL_DATA)],
    ],
    EidReadPortrait: ["int", [refTypeOf(API_TYPES.PEID_PORTRAIT)]],
    EidReadCertificate: ["int", [refTypeOf(API_TYPES.PEID_CERTIFICATE), "int"]],
    EidChangePassword: ["int", [API_TYPES.LPCSTR, API_TYPES.LPCSTR, "int*"]],
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
