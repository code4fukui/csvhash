# csvhash (CSVの指定項目SHA256ハッシュ化変換)

- [csvhash](https://code4fukui.github.io/csvhash/)

ドロップしたCSVファイルの指定項目をSHA256(英数64文字)でハッシュ化します（複数ファイル変換対応）

## ツールでハッシュ化する方法

[Deno](https://deno.land/)をインストール

- データファイル: data.csv
- ハッシュ化する項目名: メールアドレス
- シークレット: 123456

```sh
$ deno run -A https://code4fukui.github.io/csvhash/csvhash.js data.csv メールアドレス 123456
```

## テストコード

[test.js](test.js)
```sh
$ deno test -A
running 2 tests from ./test.js
no salt ... ok (6ms)
with salt ... ok (5ms)
ok | 2 passed | 0 failed (41ms)
```

## dependency

- [SHA256](https://github.com/code4fukui/SHA256)
- [Base16](https://github.com/code4fukui/Base16)
- [CSV, SJIS](https://github.com/code4sabae/js)
