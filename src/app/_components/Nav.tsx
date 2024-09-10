import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { SimpleUploadButton } from "./SimpleUploadButton"

export default function Nav() {
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
          <div className="flex flex-row gap-5 items-center justify-center">
            <SimpleUploadButton></SimpleUploadButton>
            <UserButton></UserButton>
          </div>
        </SignedIn>
      </div>
    </nav>
  )
}
