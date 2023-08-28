import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <Link href='/'>main</Link>
                <Link href='/events'>events</Link>
                <Link href='/'>menu</Link>
                <Link href='/'>menu</Link>
            </nav>
        </header>
    )
}