export default async function allProject() {
    const url = `${process.env.BASE_URL}/AllProject`;

    const res = await fetch(url, {
        method: 'GET',
    });
    const fetchData = await res.json();
    return fetchData;
}