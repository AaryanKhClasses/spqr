'use server'

import db from "@/db"

export async function verifyQR(qrCode: string): Promise<string> {
    const exists = await db.qRCode.findFirst({ where: { id: qrCode } })
    if (!exists) return "QR code not found or invalid. Please try again."
    if (!exists.valid) return "QR code is not valid. Please try again."
    else {
        await db.qRCode.update({ where: { id: qrCode }, data: { valid: false } })
        return "QR code has been successfully verified."
    }
}