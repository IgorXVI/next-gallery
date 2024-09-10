import Image from "next/image"
import { db } from "../server/db"

import { imgData } from "./imgData"

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const posts = await db.query.posts.findMany()

  return (
    <main
      className="flex min-h-screen flex-col 
      items-center justify-center text-white"
    >
      <div className="flex flex-wrap gap-4 p-5">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {imgData.map((img) => (
          <div
            className="w-48"
            key={img.key}
          >
            <Image
              src={img.url}
              alt="image"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </main>
  )
}
