import { NextResponse } from "next/server"

const DATA_SOURCE_URL = "URL"
const API_KEY: string = process.env.DATA_API_KEY as string;

type Reservation = {
    name: string
}

export async function POST(request: Request) {
    const data: Reservation = await request.json();
    const { name } = data
    // console.log('data: ', data);

    /**
     * REST API ROUTE
    if (!name) return NextResponse.json({ "message": "Missing required data" })
    const res = await fetch(DATA_SOURCE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify({
            name, completed: false
        })
    });
    const newReservation: Reservation = await res.json();
    */

    return NextResponse.json({ name })
}