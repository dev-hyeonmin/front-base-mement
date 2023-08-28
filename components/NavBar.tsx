import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <Link href='/'>main</Link>
            <Link href='/events'>events</Link>
            <Link href='/'>menu</Link>
            <Link href='/'>menu</Link>
        </nav>
    )
}