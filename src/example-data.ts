// サンプルの型とデータ

export type FileInfo = { id: string; lines: number };
export type UserInfo = { name: string; age: number; email: string };

export const data: FileInfo[] = [
	{ id: "1", lines: 10 },
	{ id: "2", lines: 20 },
	{ id: "3", lines: 30 },
];

export const data2: UserInfo[] = [
	{ name: "Alice", age: 30, email: "alice@example.com" },
	{ name: "Bob", age: 25, email: "bob@example.com" },
];
