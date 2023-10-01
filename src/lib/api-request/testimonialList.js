export default async function testimonialList() {
    const url = `${process.env.BASE_URL}/TestimonialList`;

    const res = await fetch(url, {
        method: 'GET',
    });
    const fetchData = await res.json();
    return fetchData;
}