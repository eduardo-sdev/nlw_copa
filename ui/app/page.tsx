interface Props {
    count: number
}

async function getPools() {
    const poolResponse = await fetch(
        "http://localhost:3333/pools/count",
        {cache: "force-cache"}
    )
    return poolResponse.json()
} 

export default async function Page({}:Props) {
    const pool = await getPools()
    console.log(pool)

    return <div>foooo {pool.count}</div>
}


