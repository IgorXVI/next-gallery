import "~/styles/globals.css"

import { GeistSans } from "geist/font/sans"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

function TopNav() {
  return (
    <nav
      className="text-white bg-black w-full p-4 
      flex items-center justify-between text-xl 
      font-semibold border-b"
    >
      <div>Gallery</div>
      <div>Sign In</div>
    </nav>
  )
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
    >
      <body className="font-sans bg-black flex flex-col gap-4">
        <TopNav></TopNav>
        {children}
      </body>
    </html>
  )
}
