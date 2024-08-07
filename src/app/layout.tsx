import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import useDetectDevice from './_hooks/useDetectDevice'

// Kode Mono
// Protest Guerrilla
// Monoton
// Pixelify Sans
// Cairo Play

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
    title: 'Luba Habarta',
    description: 'Full Stack Web Dev',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    // const isMobile = useDetectDevice()

    return (
        <html lang="en">
            <body
                className={`overflow-x-hidden ${poppins.className} bg-stone-950 select-none text-white`}
            >
                {children}
            </body>
        </html>
    )
}
