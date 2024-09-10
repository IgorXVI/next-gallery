import "server-only"

import { auth } from "@clerk/nextjs/server"

import { db } from "./db"

export async function getMyImgs() {
  const user = auth()

  if (!user.userId) {
    return []
  }

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.name),
  })

  return images
}

export async function getImage(id: number) {
  const user = auth()

  if (!user.userId) {
    throw new Error("Unauthorized")
  }

  const image = await db.query.images.findFirst({
    where: (model, { eq, and }) =>
      and(eq(model.id, id), eq(model.userId, user.userId)),
  })

  if (!image) {
    throw new Error("Image not found")
  }

  return image
}
