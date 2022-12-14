# csvhash (CSVの指定項目SHA256ハッシュ化変換)

- [csvhash](https://code4fukui.github.io/csvhash/)

ドロップしたCSVファイルの指定項目をSHA256(英数64文字)でハッシュ化します（複数ファイル変換対応）

## ツールでハッシュ化する方法

[Deno](https://deno.land/)をインストール

- データファイル: data.csv
- ハッシュ化する項目名: メールアドレス
- シークレット: 123456

```sh
deno run -A https://code4fukui.github.io/csvhash/csvhash.js data.csv メールアドレス 123456
```

## dependency

- [SHA256](https://github.com/code4fukui/SHA256)
- [Base16](https://github.com/code4fukui/Base16)
- [CSV, SJIS](https://github.com/code4sabae/js)
