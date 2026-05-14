# csvhash

CSVファイルの指定項目をSHA256でハッシュ化するコマンドラインツールおよびWebユーティリティ。

**デモ:** [**https://github.com/code4fukui/csvhash](https://code4fukui.github.io/csvhash/)

## 機能

- CSVの指定項目をSHA256アルゴリズムでハッシュ化します。
- レインボーテーブル攻撃へのセキュリティ対策として、オプションでソルトを追加できます。
- **Web UI:**
    - 使いやすいドラッグ＆ドロップインターフェース。
    - 複数のCSVファイルを一度に処理可能（`.zip`アーカイブとしてダウンロードされます）。
    - ランダムなソルトを作成する「シークレット生成」ボタンを搭載。
- **CLI:**
    - Denoランタイムを使用してURLから直接実行可能。スクリプトのローカルインストールは不要です。
    - 処理されたCSVデータを直接コンソールに出力します。

## 使い方

### Web UI（推奨）

csvhashを最も簡単に使用する方法は、Webインターフェースを利用することです。

1. [デモページ](https://code4fukui.github.io/csvhash/)を開きます。
2. ハッシュ化する項目名を入力します（例: `mail`）。
3. （オプション）シークレット（ソルト）を入力するか、「シークレット生成」をクリックして作成します。
4. 1つ以上の`.csv`ファイルをページにドラッグ＆ドロップします。

処理済みのファイルはブラウザに自動的にダウンロードされます。

### コマンドラインインターフェース

#### 必要条件

- [Deno](https://deno.land/)ランタイム

#### コマンド

URLから直接スクリプトを実行します。結果のCSVは標準出力に出力されるため、ファイルにリダイレクトすることが可能です。

```sh
deno run -A https://code4fukui.github.io/csvhash/csvhash.js [filename] [colname] ([salt])
```

- `[filename]`: 入力CSVファイルへのパス。
- `[colname]`: ハッシュ化する項目名。
- `[salt]`（オプション）: ソルトとして使用するシークレット文字列。

**例:**

```sh
# data.csvの'mail'項目をソルト付きでハッシュ化し、新しいファイルに保存
deno run -A https://code4fukui.github.io/csvhash/csvhash.js data.csv mail "secret123" > hashed_data.csv
```

## 開発

テストスイートを実行するには、以下のコマンドを実行します:

```sh
deno test -A
```

## 依存関係と帰属

このツールは以下のオープンソースプロジェクトに依存しています:
- [SHA256](https://github.com/code4fukui/SHA256)
- [Base16](https://github.com/code4fukui/Base16)
- [CSV, SJIS](https://github.com/code4sabae/js)

アプリケーション作成: [Code for FUKUI](https://fukuno.jig.jp/3672)。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
