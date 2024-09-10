import Image from "next/image"
import Link from "next/link"
import { SignedIn, SignedOut } from "@clerk/nextjs"

import { getMyImgs } from "~/server/queries"

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const images = await getMyImgs()

  return (
    <main
      className="flex min-h-screen flex-col 
      items-center text-white"
    >
      <SignedOut>
        <p className="h-full w-full text-2xl text-center font-extrabold text-red-500">
          Please sign in above
        </p>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap gap-4 p-5 items-center justify-center">
          {images.map((img) => (
            <div
              className="w-48 flex flex-col items-center gap-2"
              key={img.id}
            >
              <Link href={`/img/${img.id}`}>
                <Image
                  src={img.url}
                  alt={img.name}
                  width={500}
                  height={500}
                />
              </Link>
              <p>{img.id}</p>
            </div>
          ))}
        </div>
      </SignedIn>
    </main>
  )
}
