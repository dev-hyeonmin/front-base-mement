"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { useRouter } from "next/navigation"

const initState = {
    name: "",
}

export default function Reservation() {
    const [data, setData] = useState(initState)
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(JSON.stringify(data))
        const { name } = data

        // Send data to API route 
        const res = await fetch('http://localhost:3000/api/reservation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name
            })
        })

        const result = await res.json()
        console.log(result)

        alert("success");
        // Navigate to thank you 
        // router.push(`/`);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const name = e.target.name

        setData(prevData => ({
            ...prevData,
            [name]: e.target.value
        }))
    }

    const canSave = [...Object.values(data)].every(Boolean)

    const content = (
        <form onSubmit={handleSubmit}>
            <dl>
                <dt>Name</dt>
                <dd>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="홍길동"
                    // pattern="([A-Z])[\w+.]{1,}"
                    value={data.name}
                    onChange={handleChange}
                    autoFocus
                />   
                </dd>
            </dl>            
            
            <button
                disabled={!canSave}
            >Submit</button>

        </form>
    )

    return content
}