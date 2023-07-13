import getWikiResults from "@/lib/getWikipediaResults";
import item from "./components/item";

type Props = {
    params: {
        searchTerm: string
    }
}

export async function generateMetadata({ params: { searchTerm }} :Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm) as Promise<SearchResult>; 
    const data = await wikiData;
    const displayTerm = searchTerm.replaceAll('%20', ' ')

    if(!data?.query?.pages) {
        return {
            title: `${displayTerm} Not Found` 
        }
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }
}

export default async function SearchResults({ params: { searchTerm }} :Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm) as Promise<SearchResult>; 
    const data = await wikiData;
    const results: Result[] | undefined = data?.query?.pages
    
    const content = (
        <main className="bg-slate-800"> 
            {results 
                ? Object.values(results).map(result => {return item({ result: result})}) 
                : <p> {`${searchTerm} Not Found.`} </p>}
        </main>
    )

    return content
}