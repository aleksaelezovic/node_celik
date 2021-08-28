console.log("---running!---");
import CelikApi, { CelikApiResponseStatus } from "./models/api/api";
import { CardType, CertificateType, SignatureID } from "./models/api/types";

const smartcard = require("smartcard");
const Devices = smartcard.Devices;
const devices = new Devices();

devices.onActivated().then((e: any) => {
  const DEVICE = e.device.name;
  const CARD = e.device.card;
  e.device.on("card-inserted", (e: any) => {
    console.log(e.card.getAtr());

    const api = new CelikApi();
    console.log(api.cleanup().status);
    let status = api.startup().status;
    if (status === CelikApiResponseStatus.OK) {
      console.log("STARTED!");

      status = api.beginRead(DEVICE, CardType.CARD_ID2020).status;
      if (status === CelikApiResponseStatus.OK) {
        console.log("READ - START!");

        status = api.verifySignature(SignatureID.CARD).status;
        if (status !== CelikApiResponseStatus.OK) {
          console.log("ERROR in VERIFY!");
          return process.exit();
        }
        console.log("VERIFIED - CARD!");
        // api.verifySignature(SignatureID.FIXED);
        // api.verifySignature(SignatureID.PORTRAIT);
        // api.verifySignature(SignatureID.VARIABLE);

        /* -------TEST--------- */
        let res: any = api.readDocumentData();
        if (res.status === CelikApiResponseStatus.OK) {
          console.log("DATA:");
          const data = res.data!;
          console.log(data);
        } else {
          console.log(res.status);
        }
        /* -------TEST FIXED--- */
        res = api.readFixedPersonalData();
        if (res.status === CelikApiResponseStatus.OK) {
          console.log("DATA:");
          const data = res.data!;
          console.log(data);
        } else {
          console.log(res.status);
        }
        /* -------TEST VAR----- */
        res = api.readVariablePersonalData();
        if (res.status === CelikApiResponseStatus.OK) {
          console.log("DATA:");
          const data = res.data!;
          console.log(data);
        } else {
          console.log(res.status);
        }
        /* -------TEST IMG----- */
        res = api.readPortrait();
        if (res.status === CelikApiResponseStatus.OK) {
          console.log("DATA:");
          const data = res.data as any;
          console.log(data['portrait'].toString('base64'));
        } else {
          console.log(res.status);
        }
        /* -------TEST CERT---- */
        res = api.readCertificate(CertificateType.CERT_MOI_INTERMEDIATE_CA);
        if (res.status === CelikApiResponseStatus.OK) {
          console.log("DATA:");
          const data = res.data as any;
          console.log(data['certificate'].toString('base64'));
        } else {
          console.log(res.status);
        }

        status = api.endRead().status;
        if (status === CelikApiResponseStatus.OK) {
          console.log("READ - END!");
        }
      } else {
        console.log(status);
      }

      status = api.cleanup().status;
      if (status === CelikApiResponseStatus.OK) {
        console.log("CLEANUP!");
        console.log("---end!---");
      }
    } else {
      console.log(status);
    }
    process.exit();
  });
});
