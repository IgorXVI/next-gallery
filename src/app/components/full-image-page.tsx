import { getImage } from "~/server/queries"

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id)

  return (
    <div>
      <img
        className="w-96"
        src={image.url}
        alt={image.name}
      />
    </div>
  )
}
