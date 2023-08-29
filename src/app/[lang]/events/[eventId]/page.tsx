import Providers from "@/components/Providers";
import { Metadata } from "next";
import Cart from "./components/Cart";

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
            <Providers>
                <Cart eventId={eventId} />
            </Providers>
            {/* <Suspense fallback={<h2>Loading...</h2>}>
                <Event promise={eventData} />
            </Suspense> */}
        </>
    );
}