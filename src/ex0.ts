import { writeFile } from "node:fs/promises";
import { Parser } from "json2csv";
import { type FileInfo, data } from "./example-data";

async function convertAndSaveToCSV(data: FileInfo[], outputPath: string) {
	try {
		// CSVパーサーのオプションを設定
		const opts = { fields: ["id", "lines"] };
		const parser = new Parser(opts);

		// データをCSV形式に変換
		const csv = parser.parse(data);

		// CSVをファイルに非同期で書き込み
		await writeFile(outputPath, csv, "utf8");

		console.log(`CSV file has been saved to ${outputPath}`);
	} catch (err) {
		console.error("Error:", err);
	}
}

// 関数を呼び出してCSVファイルを生成
convertAndSaveToCSV(data, "dist/ex0.csv");
