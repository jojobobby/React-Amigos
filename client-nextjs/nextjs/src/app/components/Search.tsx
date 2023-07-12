'use client'

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function Search() { 
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/${search}/`);
    } 

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
            />
            <button>
                Find
            </button>
        </form>
    )
}