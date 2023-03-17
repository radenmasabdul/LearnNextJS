import { useRouter } from "next/router"
import Link from "next/link";

const Doc = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    // console.log(params);

    if (params.length === 2) {
        return (
            <h1 className="text-red-700 text-4xl">
                Viewing docs for feature {params[0]} and concept {params[1]}
            </h1>
        )
    } else if (params.length === 1) {
        return <h1 className="text-red-700 text-4xl">
            Viewing docs for feature {params[0]}
        </h1>
    }

    return (
        <>
            <h1 className="text-red-700 text-4xl">
                Documents Home Page
            </h1>
            <Link href="/">Back to Home</Link>
        </>
    )
}

export default Doc