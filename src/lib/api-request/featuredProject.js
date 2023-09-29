export default async function featuredProjects() {
    const url = `${process.env.BASE_URL}/FeaturedProject`;

    const res = await fetch(url, {
        method: 'GET',
    });
    const fetchData = await res.json();
    return fetchData;
}