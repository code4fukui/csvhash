import { SHA256 } from "https://code4fukui.github.io/SHA256/SHA256.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

export const convertHash = async (csv, colname, salt = "") => {
  const n = csv[0].indexOf(colname);
  if (n < 0) {
    throw new Error(`項目名"${colname}"がCSVデータに見つかりませんでした`);
  }
  for (let i = 1; i < csv.length; i++) {
    csv[i][n] = Base16.encode(await SHA256.digest(csv[i][n] + salt));
  }
  return csv;
};
