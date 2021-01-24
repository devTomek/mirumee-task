import { mockPlanets } from "../../testUtils";
import { getPlanet, getPlanets } from "./planet";

jest.mock("../api", () => ({
	get: (url: string) => {
		const urlParts = url.split("/");
		const lastPartIndex = urlParts.length - 1;
		const id = urlParts[lastPartIndex] || urlParts[lastPartIndex - 1];
		if (isNaN(+id)) {
			return mockPlanets;
		}
		return mockPlanets[+id];
	},
}));

describe("getPlanets", () => {
	it("should return planets", () => {
		expect(getPlanets()).toEqual(mockPlanets);
	});
});

describe("getPlanet", () => {
	it("should return planet by id", async () => {
		const mockPlanet = mockPlanets[1];
		delete mockPlanet.url;
		expect(await getPlanet("1")).toEqual(mockPlanet);
	});
});
