import Link from "next/link";
import { Locale } from "../../i18n.config";

export default function NavBar({ lang }: { lang: Locale }) {
    return (
        <nav>
            <Link href={`/${lang}`}>main</Link>
            <Link href={`/${lang}/events`}>events</Link>
            <Link href={`/${lang}/reservations`}>reservation</Link>
            <Link href={`/${lang == 'en' ? 'ko' : 'en'}`}>Change Lang</Link>
        </nav>
    )
}