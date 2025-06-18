'use client'

import { verifyQR } from "@/lib/verifyQR"
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react"
import { Html5QrcodeScanner } from "html5-qrcode"
import { useEffect, useState } from "react"

export default function Validate({ ACCESS_TOKEN }: { ACCESS_TOKEN: string }) {
    const passModal = useDisclosure()
    const responseModal = useDisclosure()
    const [accessToken, setAccessToken] = useState("")
    const [validToken, setValidToken] = useState(false)
    const [result, setResult] = useState<string>("")
    const [response, setResponse] = useState<string>("")

    const handleSubmitToken = () => {
        if(!accessToken) return alert("Please enter an access token.")
        if(accessToken !== ACCESS_TOKEN) return alert("Invalid access token. Please try again.")
        setValidToken(true)
        passModal.onClose()
        alert("Access token validated successfully!")
    }

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('qr-reader', {
            qrbox: 500,
            fps: 10,
            rememberLastUsedCamera: true,
        }, false)

        scanner.render(success, error)

        function success(decodedText: string) {
            scanner.clear()
            setResult(decodedText)
            verifyQR(decodedText).then((res: string) => {
                setResponse(res)
                responseModal.onOpen()
            })
        }

        function error(err: string) {
            console.warn(`QR Code scan error: ${err}`)
        }
    }, [])

    return <>
        <div className="text-center items-center flex flex-col justify-center h-screen">
            {!validToken && <Button className="w-4/5" onPress={passModal.onOpen}>Validate Access Token</Button>}
            <div id="qr-reader" className={`p-2 m-2 ${validToken && result === "" ? "block" : "hidden"}`}></div>
        </div>
        <Modal isOpen={passModal.isOpen} onOpenChange={passModal.onOpenChange} className="dark">
            <ModalContent>
                {onClose => <>
                    <ModalHeader>Validation Access Token</ModalHeader>
                    <ModalBody><Input label="Access Token" required value={accessToken} onChange={e => setAccessToken(e.target.value)} /></ModalBody>
                    <ModalFooter><Button className="w-full" onPress={handleSubmitToken}>Submit Access Token</Button></ModalFooter>
                </>}
            </ModalContent>
        </Modal>
        <Modal isOpen={responseModal.isOpen} onOpenChange={responseModal.onOpenChange} className="dark">
            <ModalContent>
                {onClose => <>
                    <ModalHeader>QR Code Verification</ModalHeader>
                    <ModalBody>{response}</ModalBody>
                    <ModalFooter><Button className="w-full" onPress={() => {onClose(); location.href="/"}}>Close</Button></ModalFooter>
                </>}
            </ModalContent>
        </Modal>
    </>
}