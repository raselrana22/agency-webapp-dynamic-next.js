export default async function allService() {
    const url = `${process.env.BASE_URL}/AllService`;

    const res = await fetch(url, {
        method: 'GET',
    });
    const fetchData = await res.json();
    return fetchData;
}