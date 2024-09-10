import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

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
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  )
}
