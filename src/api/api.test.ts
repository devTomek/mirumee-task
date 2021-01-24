import { BASE_URL, get } from "./api";

describe("get", () => {
	globalThis.fetch = jest.fn();

	it("should call fetch with given url", async () => {
		get("/url");
		expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/url`);
	});
});
