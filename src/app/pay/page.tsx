import Payment from '@/components/Payment'

export default function PaymentPage() {
    return <Payment PAYMENT_PRICE={parseInt(process.env.PAYMENT_PRICE!)} RAZORPAY_KEY_ID={process.env.RAZORPAY_KEY_ID!} />
}