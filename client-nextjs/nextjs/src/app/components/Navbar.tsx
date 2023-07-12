import Link from 'next/link'
import Search from './Search';

export default function Navbar() { 
    return (
        <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-slate-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
            <h1 className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg">
                <Link href="/">Default</Link>
            </h1>
            <Search />
        </nav>
    )
}