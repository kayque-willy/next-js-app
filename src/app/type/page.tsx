import Link from "next/link";

export default async function Type() {
    const response = await fetch('https://www.digi-api.com/api/v1/type');
    const types = await response.json();
    return (
        <div>
            <Link href="/">Home</Link>
            <pre>
                {JSON.stringify(types, null, 2)}
            </pre>
        </div>
    )
}
