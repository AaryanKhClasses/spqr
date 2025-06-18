'use client'

import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react"
import { useState } from "react"

export default function Validate({ ACCESS_TOKEN }: { ACCESS_TOKEN: string }) {
    const passModal = useDisclosure()
    const [accessToken, setAccessToken] = useState("")
    const [validToken, setValidToken] = useState(false)
    const [result, setResult] = useState<string>("")

    const handleSubmitToken = () => {
        if(!accessToken) return alert("Please enter an access token.")
        if(accessToken !== ACCESS_TOKEN) return alert("Invalid access token. Please try again.")
        setValidToken(true)
        passModal.onClose()
        alert("Access token validated successfully!")
    }

    return <>
        <div className="text-center items-center flex flex-col justify-center h-screen">
            {!validToken && <Button className="w-4/5" onPress={passModal.onOpen}>Validate Access Token</Button>}
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
    </>
}