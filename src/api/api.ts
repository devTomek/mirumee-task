export const BASE_URL = "https://swapi.dev/api";

export const get = async <T>(url: string): Promise<T | undefined> => {
	try {
		const response = await fetch(`${BASE_URL}${url}`);
		const json = await response.json();
		return json.results || json;
	} catch (e) {
		console.error(e);
	}
};
