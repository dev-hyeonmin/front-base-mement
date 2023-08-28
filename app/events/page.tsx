import getEvents from "@/lib/events/getEvents"
import Link from "next/link";
import styles from './page.module.css';

export default async function Events() {
    const eventsData: Promise<Events> = getEvents();
    const data = await eventsData;
    const eventGroup = data.cha[0].groups;

    const content = (
        <>
            <div className={styles.groups}>
                {eventGroup.map(group =>
                    <Link href={`/events/${group.id}`} key={`group${group.id}`}>{group.groupName}</Link>
                )}
            </div>
        </>
    )

    return content;
}


// SSG function
// export async function generateStaticParams() {
//     const eventsData: Promise<Events> = getEvents();
//     const data = await eventsData;
//     const eventGroup = data.cha[0].groups;

//     return eventGroup.map((group) => ({
//         eventId: group.id,
//     }))
// }