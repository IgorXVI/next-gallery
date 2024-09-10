import Image from "next/image"

import { imgData } from "./imgData"

export default function HomePage() {
  return (
    <main
      className="flex min-h-screen flex-col 
      items-center justify-center text-white"
    >
      <div className="flex flex-wrap gap-4 p-5">
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
