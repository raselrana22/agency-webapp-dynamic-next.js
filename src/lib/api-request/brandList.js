export default async function brandList() {
    const url = `${process.env.BASE_URL}/BrandList`;

    const res = await fetch(url, {
        method: 'GET',
    });
    const fetchData = await res.json();
    return fetchData;
}