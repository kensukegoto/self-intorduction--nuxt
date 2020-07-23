# kensukegoto

- [JSパーツサイト](https://github.com/kensukegoto/nuxt-lots-of-js)
- [self-appeal](https://github.com/kensukegoto/self-appeal/tree/master/__dev/sass)

## プラグイン

https://jp.vuejs.org/v2/guide/custom-directive.html

## $attrsとinheritAttrs

### $attrs

親コンポーネントに指定された属性（classとstyle除く）<br>
属性を子コンポーネントで使用する場合に使用（？）

### inheritAttrs

https://tic40.hatenablog.com/entry/2018/07/25/080000

## tip

## commit履歴

ルール：

```
追加 … 機能追加・開発
更新 … 文言変更・画像変更・それらの修正
変更 … リファクタリング（ロジックをシンプルにするなど）
削除 … ファイル削除（何処で削除したか後で分かるように）
整理 … インデント変更・ファイル名変更など（整理・削除のパターンもある）
メモ … ReadMeやコメント
```

履歴：

```
7/23
追加：フッター作成
修正：リセットCSSを効かせる
追加：全ての画像をstaticに置く、favicon変更
追加：skillのHTMLとスタイル
追加：ギアを動かす
追加：profileを作成
追加：blogを作成
メモ：$attrsとinheritAttrs
追加：contactを作成
追加：mvの写真とキャッチコピー
追加：mvのワードクラウド（scriptタグでd3を読むver）
追加：mvのワードクラウド モジュールに読ませる
修正：スムーススクロールが効かない
変更：ナビの現在位置を現す●を削除
追加：プラグイン自作してみる


7/22
追加：Sassのミックスインをグローバルで使用できる
追加：componentsとscssディレクトリを整備
追加：タイトル作成
追加：ナビのレイアウト
追加：ナビのJS
追加：ナビのJS（スムーススクロール）
整理：ナビのSCSS
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
