import Image from "next/image"
import { db } from "../server/db"

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { asc }) => asc(model.name),
  })

  return (
    <main
      className="flex min-h-screen flex-col 
      items-center text-white"
    >
      <div className="flex flex-wrap gap-4 p-5">
        {images.map((img) => (
          <div
            className="w-48 flex flex-col items-center"
            key={img.id}
          >
            <Image
              src={img.url}
              alt="image"
              width={500}
              height={500}
            />
            <p>{img.name}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
