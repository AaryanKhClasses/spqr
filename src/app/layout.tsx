import type { Metadata } from "next"
import localFont from 'next/font/local'
import "./globals.css"
import { Providers } from "./providers"

const poppins = localFont({
    src: '../../public/Poppins-Regular.ttf',
})

export const metadata: Metadata = {
    title: "SPQR",
    description: "A simple Secure Payment QR Code Prototype",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
        <body className={`${poppins.className} antialiased`}>
            <Providers>
                <div className="p-3">
                    {children}
                </div>
            </Providers>
        </body>
    </html>
}
