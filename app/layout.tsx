import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SaveSmart - Saving Made Simple, Fun, and Automatic",
  description: "Build a habit of saving with smart budgeting, automatic transfers, and motivational visuals. Perfect for young professionals in Rwanda and beyond.",
  keywords: "savings app, budgeting, mobile money, Rwanda, financial wellness, automatic savings",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
