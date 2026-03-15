# csvhash (CSVの指定項目SHA256ハッシュ化変換)

ドロップしたCSVファイルの指定項目をSHA256(英数64文字)でハッシュ化するツールです。

## デモ
https://code4fukui.github.io/csvhash/

## 機能
- CSVファイルの指定項目をSHA256ハッシュ化
- シークレットキーを指定できる
- 複数のCSVファイルを一括処理可能

## 必要環境
[Deno](https://deno.land/)のインストールが必要です。

## 使い方
1. データファイル(data.csv)、ハッシュ化する項目名(メールアドレス)、シークレット(123456)を指定して実行します。
```sh
$ deno run -A https://code4fukui.github.io/csvhash/csvhash.js data.csv メールアドレス 123456
```

2. ウェブブラウザでも同様の操作ができます。
https://code4fukui.github.io/csvhash/

## ライセンス
MIT License