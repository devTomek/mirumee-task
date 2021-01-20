export const get = async <T>(url: string): Promise<T | undefined> => {
	try {
		const response = await fetch(url);
		const json = await response.json();
		return json.results;
	} catch (e) {
		console.log(e);
	}
};
