import type React from "react"
import type { Metadata } from "next"
import { Jost, Tenor_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "NoNoMate - Students who grind. Startups That Build.",
  description:
    "Get personalized career guidance, study plans, and job alerts with AI-powered mentoring for Tier 2/3 Indian students."
}

const tenor = Tenor_Sans({
  subsets: ["latin"],
  variable: "--font-tenor-sans",
  display: "swap",
  weight: "400",
})

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${tenor.variable} font-tenor`} >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
