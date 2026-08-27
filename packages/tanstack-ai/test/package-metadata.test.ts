import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("package metadata", () => {
	it("marks the package as side-effect free for tree-shaking", async () => {
		const packageJson = JSON.parse(
			await readFile(resolve(import.meta.dirname, "../package.json"), "utf8"),
		) as { sideEffects?: boolean };

		expect(packageJson.sideEffects).toBe(false);
	});
});
