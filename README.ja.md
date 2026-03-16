# csvhash (CSVの指定項目SHA256ハッシュ化変換)

csvhashは、CSVファイルの指定された列をSHA256ハッシュ化するツールです。

## 機能
- CSVファイルの指定項目をSHA256でハッシュ化
- 任意のシークレットキーを使ったハッシュ化
- 複数のCSVファイルを一括処理

## 必要環境
[Deno](https://deno.land/)のインストールが必要です。

## 使い方
1. データファイル(data.csv)、ハッシュ化する項目名(例: メールアドレス)、オプションでシークレット(例: 123456)を指定して実行します。
```sh
$ deno run -A https://code4fukui.github.io/csvhash/csvhash.js data.csv メールアドレス 123456
```

2. ウェブブラウザ上でも同様の操作ができます。
https://code4fukui.github.io/csvhash/

## ライセンス
MIT License