import { Metadata } from "next";
import { PageNotFoundError } from "next/dist/shared/lib/utils";

type Params = {
    params: {
        eventId: string
    }
}

export async function generateMetadata({ params: { eventId } }: Params):Promise<Metadata> {
    return {
        title: `event ${eventId}`
    }
}

export default async function EventPage({ params: { eventId } }: Params) {
    // const eventData: Promise<> = getEvent(eventId);
    // IF (event data is not exist) { page not found }
    
    return (
        <>
            <h1>event {eventId}</h1>
            {/* <Suspense fallback={<h2>Loading...</h2>}>
                <Event promise={eventData} />
            </Suspense> */}
        </>
    );
}