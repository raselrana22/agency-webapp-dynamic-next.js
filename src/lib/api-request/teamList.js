export default async function teamList() {
    const url = `${process.env.BASE_URL}/TeamList`;

    const res = await fetch(url, {
        method: 'GET',
    });
    const fetchData = await res.json();
    return fetchData;
}