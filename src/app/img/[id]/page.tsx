import FullPageImageView from "~/app/components/full-image-page"

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string }
}) {
  return <FullPageImageView id={Number(photoId)}></FullPageImageView>
}
