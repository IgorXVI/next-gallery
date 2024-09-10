"use client"

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { UploadButton } from "~/utils/uploadthing"

export default function Nav() {
  const router = useRouter()

  return (
    <nav
      className="text-white bg-black w-full p-4 
        flex items-center justify-between text-xl 
        font-semibold border-b"
    >
      <div>Gallery</div>

      <div>
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex flex-row gap-16">
            <UploadButton
              endpoint="imageUploader"
              className="text-sm flex flex-row gap-5"
              onClientUploadComplete={() => {
                router.refresh()
              }}
            ></UploadButton>
            <UserButton></UserButton>
          </div>
        </SignedIn>
      </div>
    </nav>
  )
}
