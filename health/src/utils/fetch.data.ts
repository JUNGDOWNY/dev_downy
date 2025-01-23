export async function fetchData(url: string, setData: (data: any) => void) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
        }

        const result = await res.json();
        const data = Array.isArray(result.data) ? result.data : result;
        setData(data);
    } catch (error) {
        setData(null);
    }
}