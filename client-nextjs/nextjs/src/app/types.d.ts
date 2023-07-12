type Result = {
    pageid: string,
    title: string,
    extract: string,
    thumbnail?: {
        source: string,
    }
}

type SearchResult = {
    query?: {
        pages?: Result[],
    },
}