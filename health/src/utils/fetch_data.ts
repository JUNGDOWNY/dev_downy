export async function fetchData(url: string, setData: (data: any) => void) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const result = await res.json();
        const data = Array.isArray(result.data) ? result.data : [];
        setData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
    }
}
