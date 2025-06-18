import { Button } from "@heroui/button"
import { Link } from "@heroui/link"

export default function HomePage() {
    return <div className="text-center items-center flex flex-col justify-center h-screen">
        <h1 className="text-3xl">SPQR</h1>
        <p className="text-xl mt-2">A Secure Payment QR Code Prototype</p>
        <Button className="mt-4 w-4/5" as={Link} href="/pay">Proceed to Payment</Button>
        <Button className="mt-4 w-4/5" as={Link} href="/validate">Validate QR Code</Button>
    </div>
}