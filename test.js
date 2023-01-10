import * as t from "https://deno.land/std/testing/asserts.ts";
import { convertHash } from "./convertHash.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const colname = "mail";

const expect_nosalt = [
  [ "name", "mail" ],
  [ "abc", "a4ef46e711c986ea534c9c3d2a1fde303505b539ef5a7ec2a63f23a536d575d1" ],
  [ "def", "578ca18021fe7bcf8d5ed13b532a7a401ef04f74bca396eb5cc29ed54073b648" ]
];
const expect_withsalt = [
  [ "name", "mail" ],
  [ "abc", "f91943f0a7aabcdae9f6d05c22f6dd50a736b24ab344d16a6bd6aef534840bfd" ],
  [ "def", "afc546a9cc91fff1f52f822d1a3c4f09885ee9ac396de72acc0da85b4f71870d" ]
];

Deno.test("no salt", async () => {
  const csv0 = await CSV.fetch("test.csv");
  const csv = await convertHash(csv0, colname);
  t.assertEquals(csv, expect_nosalt);
});
Deno.test("with salt", async () => {
  const csv0 = await CSV.fetch("test.csv");
  const colname = "mail";
  const salt = "salt";
  const csv = await convertHash(csv0, colname, salt);
  t.assertEquals(csv, expect_withsalt);
  t.assertNotEquals(expect_nosalt, expect_withsalt);
});
