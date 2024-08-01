import { writeFile } from "node:fs/promises";
import { AsyncParser } from "@json2csv/node";
import { type FileInfo, data } from "./example-data";

async function convertAndSaveToCSV(data: FileInfo[], outputPath: string) {
	try {
		// AsyncParserのオプションを設定
		const opts = { fields: ["id", "lines"] };
		const parser = new AsyncParser(opts);

		// データをCSV形式に変換
		const csv = await parser.parse(data).promise();

		// CSVをファイルに非同期で書き込み
		await writeFile(outputPath, csv, "utf8");

		console.log(`CSV file has been saved to ${outputPath}`);
	} catch (err) {
		console.error("Error:", err);
	}
}

// 関数を呼び出してCSVファイルを生成
convertAndSaveToCSV(data, "dist/ex1.csv");
