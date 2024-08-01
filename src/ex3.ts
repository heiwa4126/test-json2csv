import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { AsyncParser, type ParserOptions } from "@json2csv/node";
import { data, data2 } from "./example-data";

// ジェネリック型 T を使用
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
async function convertToCSVAndSave<T extends Record<string, any>>(
	data: T[],
	outputPath: string,
	options: ParserOptions<T> = {},
) {
	// デフォルトのオプションをマージ
	const opts: ParserOptions<T> = {
		...options,
		fields: options.fields || Object.keys(data[0] || {}),
	};

	const parser = new AsyncParser(opts, {}, { objectMode: true });
	const writableStream = createWriteStream(outputPath);

	try {
		await pipeline(parser.parse(data), writableStream);
		console.log(`CSV file has been saved to ${outputPath}`);
	} catch (err) {
		console.error("Pipeline failed:", err);
	}
}

// 使用例
convertToCSVAndSave(data, "dist/ex3-fileInfo.csv");

// 別の型での使用例
convertToCSVAndSave(data2, "dist/ex3-userInfo.csv");

// フィールドを指定する例
convertToCSVAndSave(data2, "dist/ex3-userInfoCustom.csv", {
	fields: ["name", "email"], // ageフィールドを除外
});
