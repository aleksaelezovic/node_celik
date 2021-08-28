import { createCelikApiLib } from "../celik/lib";
import {
  CelikApiResponse,
  CelikApiResponseStatus,
  getResponse,
} from "./responses";
import API_TYPES, { Pointer } from "../celik/types";
import {
  CardType,
  CertificateType,
  peidDocumentData,
  peidFixedPersonalData,
  peidVariablePersonalData,
} from "./types";
import { convertStruct } from "../converter";

class CelikApi {
  private celikApiLib;
  private refStore: RefStore;
  constructor() {
    this.celikApiLib = createCelikApiLib();
    this.refStore = new RefStore();
  }

  startup(): CelikApiResponse {
    // TRENUTNA (AVG 2021) VERZIJA API-ja je: 3
    return getResponse(this.celikApiLib.EidStartup(3));
  }
  cleanup(): CelikApiResponse {
    return getResponse(this.celikApiLib.EidCleanup());
  }
  beginRead(
    readerName: string,
    cardType: CardType = CardType.DEFAULT
  ): CelikApiResponse<CardType> {
    const _cardType = this.refStore.getRef("cardType", "int", cardType);
    return getResponse(
      this.celikApiLib.EidBeginRead(readerName, _cardType.ref),
      _cardType.value()
    );
  }
  endRead(): CelikApiResponse {
    return getResponse(this.celikApiLib.EidEndRead());
  }

  readDocumentData(): CelikApiResponse<peidDocumentData> {
    const pData = new API_TYPES.PEID_DOCUMENT_DATA();
    const res = this.celikApiLib.EidReadDocumentData(pData.ref());
    return getResponse(res, convertStruct(pData) as peidDocumentData);
  }
  readFixedPersonalData(): CelikApiResponse<peidFixedPersonalData> {
    const pData = new API_TYPES.PEID_FIXED_PERSONAL_DATA();
    const res = this.celikApiLib.EidReadFixedPersonalData(pData.ref());
    return getResponse(res, convertStruct(pData) as peidFixedPersonalData);
  }
  readVariablePersonalData(): CelikApiResponse<peidVariablePersonalData> {
    const pData = new API_TYPES.PEID_VARIABLE_PERSONAL_DATA();
    const res = this.celikApiLib.EidReadVariablePersonalData(pData.ref());
    return getResponse(res, convertStruct(pData) as peidVariablePersonalData);
  }
  readPortrait(): CelikApiResponse {
    const pData = new API_TYPES.PEID_PORTRAIT();
    const res = this.celikApiLib.EidReadPortrait(pData.ref());
    return getResponse(res, pData);
  }
  readCertificate(certType: CertificateType): CelikApiResponse {
    const pData = new API_TYPES.PEID_CERTIFICATE();
    const res = this.celikApiLib.EidReadCertificate(pData.ref(), certType);
    return getResponse(res, pData);
  }

  changePassword(
    oldPassword: string,
    newPassword: string
  ): CelikApiResponse<number> {
    const _triesLeft = this.refStore.getRef<number>("triesLeft", "int");

    return getResponse(
      this.celikApiLib.EidChangePassword(
        oldPassword,
        newPassword,
        _triesLeft.ref
      ),
      _triesLeft.value()
    );
  }
  verifySignature(nSignatureID: number): CelikApiResponse {
    return getResponse(this.celikApiLib.EidVerifySignature(nSignatureID));
  }
}

class ReferenceObject<T> {
  constructor(public ref: Pointer<T>) {}

  value(): T {
    return API_TYPES.refGetVal(this.ref);
  }
}
type ReferencesStore = {
  triesLeft?: ReferenceObject<any>;
  cardType?: ReferenceObject<any>;
  [prop: string]: undefined | ReferenceObject<any>;
};
class RefStore {
  refs: ReferencesStore;
  constructor() {
    this.refs = {};
  }

  getRef<T>(ref: string, type: string, val?: T): ReferenceObject<T> {
    if (!this.refs[ref])
      this.refs[ref] = new ReferenceObject(API_TYPES.createRefOf(type, val));
    return this.refs[ref]!;
  }
}

export { CelikApi, CelikApiResponseStatus };
export default CelikApi;
