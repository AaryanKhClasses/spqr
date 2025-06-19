'use client'

import { Button, Image } from '@heroui/react'
import { saveQRDetails } from '@/lib/addQR'
import Script from 'next/script'
import { useState } from 'react'

declare global {
    interface Window {
        Razorpay: any
    }
}

export default function Payment({ PAYMENT_PRICE, RAZORPAY_KEY_ID }: { PAYMENT_PRICE: number, RAZORPAY_KEY_ID: string }) {
    const [isProcessing, setIsProcessing] = useState(false)
    const [paymentSuccess, setPaymentSuccess] = useState(false)
    const [paymentID, setPaymentID] = useState<string>("")

    const handlePayment = async () => {
        setIsProcessing(true)
        try {
            const response = await fetch("/api/create-order" , { method: "POST" })
            const data = await response.json()
            const options = {
                key: RAZORPAY_KEY_ID,
                amount: PAYMENT_PRICE * 100,
                currency: "INR",
                name: "spqr",
                description: "Payment for SPQR",
                order_id: data.orderID,
                handler: function(response: any) {
                    console.log("Payment successful: ", response)
                    saveQRDetails(response.razorpay_payment_id)
                    setPaymentSuccess(true)
                    setPaymentID(response.razorpay_payment_id)
                    alert("Payment successful!")
                }
            }

            const rzp1 = new window.Razorpay(options)
            rzp1.open()
        } catch (error) {
            console.error("Payment failed: ", error)
        } finally {
            setIsProcessing(false)
        }
    }

    const handleDownloadQR = async (id: string) => {
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${id}&size=200x200`
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

    return <div className="text-center items-center flex flex-col justify-center h-screen">
        <Script src={`https://checkout.razorpay.com/v1/checkout.js`} />
        {!paymentSuccess && <Button className="mt-4 w-4/5" disabled={isProcessing} onPress={handlePayment}>
            {isProcessing ? "Processing..." : "Proceed to Payment"}
        </Button>}
        {paymentSuccess && <>
            <Image src={`https://api.qrserver.com/v1/create-qr-code/?data=${paymentID}&size=200x200`} alt="QR Code" />
            <Button className="mt-4 w-4/5" onPress={() => handleDownloadQR(paymentID)}>Download QR Code</Button>
        </>}
    </div>
}