import { CSV } from "https://code4sabae.github.io/js/CSV.js";
import { convertHash } from "./convertHash.js";

if (Deno.args.length < 2) {
  console.log("csvhash [filename] [colname] ([salt])");
  Deno.exit(1);
}
const fn = Deno.args[0];
const colname = Deno.args[1];
const salt = Deno.args[2];

const csv0 = await CSV.fetch(fn);
const csv = await convertHash(csv0, colname, salt);
const scsv = CSV.encode(csv);

console.log(scsv);
