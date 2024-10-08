import "~/styles/globals.css"
import "@uploadthing/react/styles.css"

import { GeistSans } from "geist/font/sans"
import { type Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import Nav from "./_components/Nav"
import { Toaster } from "~/components/ui/sonner"
import { CSPostHogProvider } from "./_analytics/provider"

export const metadata: Metadata = {
  title: "Next Gallery",
  description: "Generated by Igor Almeida",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html
          lang="en"
          className={`${GeistSans.variable} dark`}
        >
          <body>
            <div className="h-screen flex flex-col">
              <Nav></Nav>
              <main className="overflow-y-scroll min-h-screen">{children}</main>
            </div>
            <Toaster></Toaster>
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  )
}
