import Link from 'next/link';

type Props = {
    result: Result
}

export default function item( { result } : Props) {
    return (
        <div className="item">
            <Link href={"wikipedia.com/" + result.title}>{result.title}</Link>
            <p>{result.extract}</p>
            {result.thumbnail ? <img src={result.thumbnail?.source} width={100} height={100}/> : <div></div>}
        </div>
    )
}