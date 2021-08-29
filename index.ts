import CelikApi, { CelikApiResponseStatus } from "./models/api/api";
import { CardType, CertificateType, SignatureID } from "./models/api/types";

export default class MUPCelikApi {
  private api: CelikApi;
  device: string = "";
  constructor(
    device = "",
    cardType: CardType = CardType.DEFAULT,
    private isInit = false
  ) {
    this.api = new CelikApi();
    this.start();
    if (device) this.startReadSync(device, cardType);
  }

  private start(apiVersion = 3) {
    const status = this.api.startup(apiVersion).status;
    if (status !== CelikApiResponseStatus.OK) throw new Error(status);
    this.isInit = true;
  }
  private startReadSync(device: string, cardType: CardType = CardType.DEFAULT) {
    if (!device) return;
    const status = this.api.beginRead(device, cardType).status;
    if (status !== CelikApiResponseStatus.OK) throw new Error(status);
    this.device = device;
  }

  async startRead(device: string, cardType: CardType = CardType.DEFAULT) {
    return this.startReadSync(device, cardType);
  }

  async readAllData() {
    const res = await Promise.all([
      this.readDocumentData(),
      this.readFixedPersonalData(),
      this.readVariablePersonalData(),
      this.readPortrait(),
    ]);
    return {
      ...res[0],
      ...res[1],
      ...res[2],
      portrait: res[3],
    };
  }
  async readDocumentData() {
    const res = this.api.readDocumentData();
    if (res.status !== CelikApiResponseStatus.OK) throw new Error(res.status);
    return res.data!;
  }
  async readFixedPersonalData() {
    const res = this.api.readFixedPersonalData();
    if (res.status !== CelikApiResponseStatus.OK) throw new Error(res.status);
    return res.data!;
  }
  async readVariablePersonalData() {
    const res = this.api.readVariablePersonalData();
    if (res.status !== CelikApiResponseStatus.OK) throw new Error(res.status);
    return res.data!;
  }
  async readPortrait(): Promise<Buffer> {
    const res = this.api.readPortrait();
    if (res.status !== CelikApiResponseStatus.OK) throw new Error(res.status);
    return res.data!.portrait;
  }
  async readCertificate(certType: CertificateType): Promise<Buffer> {
    const res = this.api.readCertificate(certType);
    if (res.status !== CelikApiResponseStatus.OK) throw new Error(res.status);
    return res.data!.certificate;
  }
  async verifyAllSignatures() {
    await this.verifySignature(SignatureID.CARD);
    await this.verifySignature(SignatureID.FIXED);
    await this.verifySignature(SignatureID.VARIABLE);
    console.log("ALL VERIFIED!");
  }
  async verifySignature(sigId: SignatureID) {
    const status = this.api.verifySignature(sigId).status;
    if (status !== CelikApiResponseStatus.OK) throw new Error(status);
  }

  async endRead() {
    if (!this.device) return;
    const status = this.api.endRead().status;
    if (status !== CelikApiResponseStatus.OK) throw new Error(status);
    this.device = "";
  }
  async end() {
    await this.endRead();
    if (!this.isInit) return;
    const status = this.api.cleanup().status;
    if (status !== CelikApiResponseStatus.OK) throw new Error(status);
    this.isInit = false;
  }
}
export { MUPCelikApi, CardType, SignatureID, CertificateType };

/* EXAMPLE */
const smartcard = require("smartcard");
const devices = new smartcard.Devices();

devices.on("device-activated", (e: any) => {
  console.log("---Device:", e.device.name);
  console.log("Waiting for card...");

  e.device.on("card-inserted", (e: any) => {
    console.log("---Card:", e.card.getAtr());

    _test(e.device.name);
  });
});
console.log("Waiting for device...");

const _test = async (device: string) => {
  console.log("---START---");
  const celik = new MUPCelikApi(device);
  try {
    await celik.verifyAllSignatures();
    const data = await celik.readAllData();
    console.log(data);
    // const cert = await celik.readCertificate(CertificateType.CERT_USER_1); // doesnt work, unable to execute
    // console.log(cert);
  } catch (e: any) {
    console.log(e.message ?? new Error(e));
  } finally {
    await celik.end();
    console.log("---END---");
    process.exit();
  }
};
