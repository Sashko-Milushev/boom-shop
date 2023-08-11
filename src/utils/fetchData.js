
export async function fetchDataForCategory(category) {
    try {
        const response = await fetch(`../../sampleData/${category}.json`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(`Error fetching data for ${category}:`, error);
        return []; 
    }
}