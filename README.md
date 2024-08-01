# test-json2csv

[json2csv - npm](https://www.npmjs.com/package/json2csv) が「**警告: このパッケージは放棄されました**」
と言ってるので、
[@json2csv/node - npm](https://www.npmjs.com/package/@json2csv/node)
に置き換える練習。

Bun で TypeScript で書いてある。

## テスト

```sh
# json2csv で書いたサンプル
bun ex0

# ↑を@json2csv/node に置き換えたサンプル
bun ex1

# ↑をJSONの変換とファイルの書き出しをパイプラインにしたサンプル
bun ex2

# ↑をジェネリックにしたしたサンプル
bun ex3

## どのサンプルも ./dist/の下にcsvができる。
```

どのサンプルも convertAndSaveToCSV() で await を省略してるので、
適時 Promise.all() とかすること。
