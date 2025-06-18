import Validate from '@/components/Validate'

export default function ValidatePage() {
    return <Validate ACCESS_TOKEN={process.env.ACCESS_TOKEN!} />
}