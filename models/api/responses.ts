import * as ERRORS from "../celik/errors";

export enum CelikApiResponseStatus {
  OK = "OK",
  ERROR = "Unknown Error Occurred.",
  ERROR_INVALID_PARAMETER = "Invalid parameter.",
  ERROR_VERSION_NOT_SUPPORTED = "Api version not supported.",
  ERROR_NOT_INITIALIZED = "Not initialized.",
  ERROR_UNABLE_TO_EXECUTE = "Unable to execute.",
  ERROR_READER = "Reader error.",
  ERROR_CARD_MISSING = "Cannot find a valid card.",
  ERROR_SESSION = "Cannot open session.",
  ERROR_DATA_MISSING = "Data is missing.",
  ERROR_SECFORMAT = "Certificate error.",
  ERROR_INVALID_PASSWORD = "Invalid password.",
  ERROR_PIN_BLOCKED = "PIN Blocked. Contact authority.",
}

export const getCelikApiStatus = (code: number): CelikApiResponseStatus => {
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

export type CelikApiResponse<T = any> = {
  status: CelikApiResponseStatus;
  data: T | null;
};

export const getResponse = <T = any>(
  code: number,
  data: T | null = null
): CelikApiResponse<T> => {
  const responseStatus = getCelikApiStatus(code);
  // if (responseStatus !== CelikApiResponseStatus.OK) data = null;
  return {
    status: responseStatus,
    data: data,
  };
};
