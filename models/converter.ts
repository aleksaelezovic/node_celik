export const convertStruct = (structObj: any) => {
  const retObj: {
    [prop: string]: string;
  } = {};
  for (let key in structObj.toObject()) {
    if (key.substring(key.length - 4) === "Size") continue;
    const _x: [Buffer, number] = structObj[key]; // [buffer, offset]
    const buffer = _x[0];
    const offset = _x[1];
    const length = structObj[key + "Size"];
    const offset_end = offset + length;

    retObj[key] = buffer.toString("utf-8", offset, offset_end);
  }
  return retObj;
};
