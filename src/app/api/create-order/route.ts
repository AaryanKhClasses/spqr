import Razorpay from "razorpay"
import { NextResponse, NextRequest } from "next/server"
import { v4 as uuidv4 } from "uuid"

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!
})

export async function POST(request: NextRequest) {
    try {
        const order = await razorpay.orders.create({
            amount: parseInt(process.env.PAYMENT_PRICE!) * 100,
            currency: "INR",
            receipt: uuidv4(),
        })
        
        return NextResponse.json({ orderID: order.id }, { status: 200 })
    } catch (error) {
        console.error("Error creating order:", error)
        return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
    } 
}