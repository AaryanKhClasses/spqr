'use client'

import { Button } from '@heroui/react'
import { v4 as uuidv4 } from 'uuid'
import { saveQRDetails } from '@/lib/addQR'

export default function Payment() {
    const randomUUID = uuidv4()

    const handleDownloadQR = async () => {
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${randomUUID}&size=200x200`
        try {
            const response = await fetch(qrCodeUrl)
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = 'qr-code.png'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            window.URL.revokeObjectURL(url)
        } catch (error) {
            alert('Failed to download image.')
        }
    }

    return <div className="text-center items-center flex flex-col justify-center h-screen" onLoad={() => saveQRDetails(randomUUID)}>
        <h1>This page temporarily only generates a random string</h1>
        <h2>This is the UUID: {randomUUID}</h2>
        <h2>The QR Code for the Same is:</h2>
        <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${randomUUID}&size=200x200`} alt="QR Code" />
        <Button className="mt-4 w-4/5" onPress={handleDownloadQR}>Download as Image</Button>
    </div>
}