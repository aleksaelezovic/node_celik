import path from "path";

export const CELIKAPI_DLL_PATH = path.resolve(
  __dirname,
  "..",
  // "..", // because of dist folder
  "celik",
  "CelikApi.dll"
);
