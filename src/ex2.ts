import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { AsyncParser } from "@json2csv/node";
import { type FileInfo, data } from "./example-data";

async function convertToCSVAndSave(data: FileInfo[], outputPath: string) {
	const opts = {
		fields: ["id", "lines"],
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
convertToCSVAndSave(data, "dist/ex2.csv");
