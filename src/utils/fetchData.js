// Asynchronously fetches data for a given category
export async function fetchDataForCategory(category) {
    try {
        // Fetch data from a JSON file corresponding to the provided category
        const response = await fetch(`../../sampleData/${category}.json`);
        const data = await response.json();

        // Return the fetched data
        return data;
    } catch (error) {
        // If an error occurs during fetching, log the error and return an empty array
        console.error(`Error fetching data for ${category}:`, error);
        return []; 
    }
}
