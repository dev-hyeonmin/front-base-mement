import { NextResponse } from "next/server"

type Reservation = {
    name?: string
}

export async function POST(request: Request) {
    const data: Reservation = await request.json()
    console.log('data: ', data)

    const { name } = data

    return NextResponse.json({ name })
}