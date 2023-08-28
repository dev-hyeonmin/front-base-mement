type Props = {
    promise: Promise<eventGroups[]>
}

export default async function Event({ promise }: Props) {
    return (
        <h3>Event</h3>
    )
}