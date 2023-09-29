export default async function stateList() {
    const url = `${process.env.BASE_URL}/StatList`;

    const res = await fetch(url, {
        method: 'GET',
    });
    const fetchData = await res.json();
    return fetchData;
}