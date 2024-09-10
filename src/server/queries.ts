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
