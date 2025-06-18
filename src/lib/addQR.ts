'use server'

import db from "@/db"

export async function saveQRDetails(qrCode: string) {
    await db.qRCode.create({
        data: {
            id: qrCode,
            valid: true,
            createdAt: new Date(),
        }
    })
}