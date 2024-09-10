import { clerkClient } from "@clerk/nextjs/server"
import { deleteImage, getImage } from "~/server/queries"
import { Button } from "~/components/ui/button"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const cClient = clerkClient

async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id)

  const uploaderInfo = await cClient.users.getUser(image.userId)

  return (
    <div className="flex w-full h-full min-w-0 justify-center">
      <div className="flex-shrink flex justify-center items-center">
        <img
          className="object-contain"
          width={500}
          height={500}
          src={image.url}
          alt={image.name}
        />
      </div>
      <div className="w-48 flex flex-col flex-shrink-0 border-l p-2">
        <p className="text-lg border-b text-center p-2">{image.name}</p>

        <div className="flex flex-col p-4">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-4">
          <span>Created On:</span>
          <span>{image.createdAt.toLocaleDateString()}</span>
        </div>

        <div className="p-4">
          <form
            action={async () => {
              "use server"
              await deleteImage(props.id)
              revalidatePath("/")
              redirect("/")
            }}
          >
            <Button
              type="submit"
              variant="destructive"
            >
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string }
}) {
  return <FullPageImageView id={Number(photoId)}></FullPageImageView>
}
