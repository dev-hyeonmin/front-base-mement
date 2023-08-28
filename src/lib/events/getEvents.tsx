export default async function getEvents() {
    const res = await fetch('https://dev.museclinic.co.kr/api/eventReApiTemp');
    // option - cache (no-store / reload / force-cache ...), {next: {revalidate: 60}}

    if (!res.ok) {
        // throw new Error('failed to fetch data');
        undefined
    }

    return res.json();
}