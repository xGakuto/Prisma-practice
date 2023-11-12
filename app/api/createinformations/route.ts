import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const sampleInformation = {
      name: 'Alice',
      email: 'alice@example.com',
      message: 'Hello, world!'
    }

    try {
      const createdInformation = await prisma.informations.create({
        data: sampleInformation
      })

      res.status(200).json(createdInformation)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'An error occurred while creating the information.' })
    }
  } else {
    res.status(405).json({ error: 'This endpoint only supports POST requests.' })
  }
}
